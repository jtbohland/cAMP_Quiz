import { useState, useCallback, useMemo, useRef } from "react";

interface MatchPair {
  term: string;
  match: string;
}

interface MatchingCardProps {
  pairs: MatchPair[];
  questionId: number;
  onAnswer: (answer: string) => void;
  userAnswer: string | null;
  showFeedback: boolean;
}

/**
 * Drag-and-drop matching question.
 * 
 * Answer format: JSON string of user matches, e.g. {"term1":"matchA","term2":"matchB"}
 * Grading: all-or-nothing for score, but shows partial credit feedback.
 */
export default function MatchingCard({
  pairs,
  questionId,
  onAnswer,
  userAnswer,
  showFeedback,
}: MatchingCardProps) {
  // Shuffle the match options (right column) using a stable seed
  const shuffledMatches = useMemo(() => {
    const matches = pairs.map((p) => p.match);
    let seed = questionId * 2654435761;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) & 0xffffffff;
      return (seed >>> 0) / 0xffffffff;
    };
    for (let i = matches.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [matches[i], matches[j]] = [matches[j], matches[i]];
    }
    return matches;
  }, [pairs, questionId]);

  // Parse user answer into a mapping
  const userMatches: Record<string, string> = useMemo(() => {
    if (!userAnswer) return {};
    try {
      return JSON.parse(userAnswer);
    } catch {
      return {};
    }
  }, [userAnswer]);

  // Track which match tile is being dragged
  const [draggedMatch, setDraggedMatch] = useState<string | null>(null);
  const [dragOverTerm, setDragOverTerm] = useState<string | null>(null);
  // Track touch drag state
  const touchRef = useRef<{ match: string; startY: number } | null>(null);

  // Available matches = those not yet assigned
  const assignedMatches = new Set(Object.values(userMatches));
  const availableMatches = shuffledMatches.filter((m) => !assignedMatches.has(m));

  const updateMatches = useCallback(
    (newMatches: Record<string, string>) => {
      onAnswer(JSON.stringify(newMatches));
    },
    [onAnswer]
  );

  const handleDrop = useCallback(
    (term: string) => {
      if (showFeedback || !draggedMatch) return;
      const newMatches = { ...userMatches };
      // If this term already has a match, free the old one
      // If this match was already assigned to another term, free that
      for (const [k, v] of Object.entries(newMatches)) {
        if (v === draggedMatch) delete newMatches[k];
      }
      newMatches[term] = draggedMatch;
      updateMatches(newMatches);
      setDraggedMatch(null);
      setDragOverTerm(null);
    },
    [showFeedback, draggedMatch, userMatches, updateMatches]
  );

  const removeMatch = useCallback(
    (term: string) => {
      if (showFeedback) return;
      const newMatches = { ...userMatches };
      delete newMatches[term];
      updateMatches(newMatches);
    },
    [showFeedback, userMatches, updateMatches]
  );

  // Compute correctness for feedback
  const correctMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const pair of pairs) {
      map[pair.term] = userMatches[pair.term] === pair.match;
    }
    return map;
  }, [pairs, userMatches]);

  const correctCount = Object.values(correctMap).filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Feedback summary */}
      {showFeedback && (
        <div
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            correctCount === pairs.length
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-orange-50 text-orange-700 border border-orange-200"
          }`}
        >
          {correctCount === pairs.length
            ? `✅ All ${pairs.length} matches correct!`
            : `${correctCount} of ${pairs.length} matches correct`}
        </div>
      )}

      {/* Terms with drop zones */}
      <div className="space-y-2">
        {pairs.map((pair) => {
          const matched = userMatches[pair.term];
          const isOver = dragOverTerm === pair.term;
          const isCorrect = correctMap[pair.term];

          let borderClass = "border-slate-200";
          let bgClass = "bg-white";
          if (showFeedback && matched) {
            borderClass = isCorrect ? "border-green-300" : "border-red-300";
            bgClass = isCorrect ? "bg-green-50" : "bg-red-50";
          } else if (isOver) {
            borderClass = "border-blue-400";
            bgClass = "bg-blue-50/50";
          }

          return (
            <div
              key={pair.term}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${borderClass} ${bgClass}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverTerm(pair.term);
              }}
              onDragLeave={() => setDragOverTerm(null)}
              onDrop={(e) => {
                e.preventDefault();
                handleDrop(pair.term);
              }}
            >
              {/* Term label */}
              <div className="flex-1 text-sm font-medium text-slate-700">
                {pair.term}
              </div>

              {/* Arrow */}
              <span className="text-slate-300 text-lg">→</span>

              {/* Drop zone / matched tile */}
              <div className="flex-1">
                {matched ? (
                  <div
                    className={`flex items-center justify-between px-3 py-2 rounded-md text-sm ${
                      showFeedback
                        ? isCorrect
                          ? "bg-green-100 text-green-800 border border-green-300"
                          : "bg-red-100 text-red-800 border border-red-300"
                        : "bg-blue-100 text-blue-800 border border-blue-300 cursor-pointer hover:bg-blue-200"
                    }`}
                    onClick={() => !showFeedback && removeMatch(pair.term)}
                  >
                    <span>{matched}</span>
                    {!showFeedback && (
                      <span className="ml-2 text-blue-400 hover:text-blue-600 text-xs">✕</span>
                    )}
                    {showFeedback && !isCorrect && (
                      <span className="ml-2 text-xs text-red-500">→ {pair.match}</span>
                    )}
                  </div>
                ) : (
                  <div
                    className={`px-3 py-2 rounded-md border-2 border-dashed text-sm text-center ${
                      isOver
                        ? "border-blue-400 bg-blue-50 text-blue-500"
                        : "border-slate-300 text-slate-400"
                    }`}
                  >
                    {isOver ? "Drop here" : "Drag match here"}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Available match tiles to drag */}
      {!showFeedback && availableMatches.length > 0 && (
        <div className="mt-3">
          <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wide">
            Available Matches
          </p>
          <div className="flex flex-wrap gap-2">
            {availableMatches.map((match) => (
              <div
                key={match}
                draggable
                onDragStart={() => setDraggedMatch(match)}
                onDragEnd={() => {
                  setDraggedMatch(null);
                  setDragOverTerm(null);
                }}
                className={`px-3 py-2 rounded-md border text-sm cursor-grab active:cursor-grabbing transition-all ${
                  draggedMatch === match
                    ? "border-blue-400 bg-blue-100 text-blue-800 opacity-50"
                    : "border-slate-300 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {match}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
