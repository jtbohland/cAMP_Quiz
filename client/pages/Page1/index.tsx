import { useState, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useSuperblocksUser } from "@superblocksteam/library";
import { useApiData } from "@/hooks/useApiData.js";
import { executeApi } from "@/lib/executeApi.js";
import { QUIZZES, QUIZ_ORDER, QUIZ_EMOJIS } from "@/data/quizzes/index.js";
import type { Quiz } from "@/data/quiz-types.js";
import XpCard from "@/components/camp/XpCard.js";

const ANALYTICS_PASSWORD = "smoreenablement";

export default function HomePage() {
  const navigate = useNavigate();
  const user = useSuperblocksUser();
  const userEmail = user?.email ?? "";

  // Track page visit silently on mount (fire-and-forget)
  const visitTracked = useRef(false);
  useEffect(() => {
    if (!userEmail || visitTracked.current) return;
    visitTracked.current = true;
    executeApi("CampTrackVisit", {
      userEmail,
      userName: user?.name ?? "",
    }).catch(() => {
      // Silent — don't disrupt UX
    });
  }, [userEmail, user?.name]);

  const { data: progression } = useApiData(
    "CampGetUserProgression",
    { userEmail },
    { enabled: !!userEmail }
  );

  const passedQuizIds = progression?.passedQuizIds ?? [];
  const completedQuizIds = progression?.completedQuizIds ?? [];
  const retakeQuizIds = progression?.retakeQuizIds ?? [];
  // "Fully failed" = in retakeQuizIds is false AND completed but not passed
  // i.e., used all 4 attempts without passing → they get "Review Quiz" to see answers
  const fullyFailedQuizIds = completedQuizIds.filter(
    (id) => !passedQuizIds.includes(id) && !retakeQuizIds.includes(id)
  );

  // A quiz is unlocked if:
  // 1. It's the first quiz (always unlocked)
  // 2. The user already attempted/completed this quiz
  // 3. The user is in retake state (failed first 2 attempts)
  // 4. The previous quiz in QUIZ_ORDER is "completed" (passed OR used all 4 attempts)
  const isQuizUnlocked = useCallback(
    (quizId: string): boolean => {
      if (completedQuizIds.includes(quizId)) return true; // Already completed = always accessible
      if (retakeQuizIds.includes(quizId)) return true; // In retake state = accessible
      const idx = QUIZ_ORDER.indexOf(quizId as (typeof QUIZ_ORDER)[number]);
      if (idx === 0) return true; // First quiz always unlocked
      if (idx < 0) return false;
      const prevQuizId = QUIZ_ORDER[idx - 1];
      return completedQuizIds.includes(prevQuizId);
    },
    [completedQuizIds, retakeQuizIds]
  );

  // Password gate for analytics
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleAnalyticsClick = useCallback(() => {
    setShowPasswordModal(true);
    setPassword("");
    setPasswordError(false);
  }, []);

  const handlePasswordSubmit = useCallback(() => {
    if (password === ANALYTICS_PASSWORD) {
      navigate("/analytics");
    } else {
      setPasswordError(true);
    }
  }, [password, navigate]);

  const weeks = [
    { label: "Week 2", emoji: "🥾", quizzes: QUIZZES.filter((q) => q.week === "Week 2") },
    { label: "Week 3", emoji: "🏞️", quizzes: QUIZZES.filter((q) => q.week === "Week 3") },
    { label: "Week 4", emoji: "🧗🏻‍♂️", quizzes: QUIZZES.filter((q) => q.week === "Week 4") },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                🏔️ cAMP Ascent: Sales
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                🧭 Knowledge Checks — Validate your learning from each session
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/xp")}
                className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                🔭 XP-lanation
              </button>
              <button
                onClick={() => navigate("/leaderboard")}
                className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                🏆 Leaderboard
              </button>
              <button
                onClick={handleAnalyticsClick}
                className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                📊 View Analytics
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Personal XP Card */}
        <div className="mb-6">
          <XpCard />
        </div>

        {/* Before You Begin */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 mb-8 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Before you begin</h3>
          <ul className="space-y-1.5 text-sm text-slate-600">
            <li>📚 Every question is a real field scenario from your session materials. If you completed it, you have everything you need.</li>
            <li>✏️ Fill-in-the-blank is graded generously — the right concept counts, not the exact word.</li>
            <li>🔗 After you complete the quiz you'll see explanations for every question — right or wrong — with links to the source material.</li>
          </ul>
        </div>

        <div className="space-y-8">
          {weeks.map((week) => (
            <section key={week.label}>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                {week.emoji} {week.label}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {week.quizzes.map((quiz) => {
                  const unlocked = isQuizUnlocked(quiz.id);
                  const passed = passedQuizIds.includes(quiz.id);
                  const fullyFailed = fullyFailedQuizIds.includes(quiz.id);
                  const retake = retakeQuizIds.includes(quiz.id);
                  // Show "Review Quiz" if passed OR failed all 4 attempts
                  const showReview = passed || fullyFailed;
                  return (
                    <QuizCard
                      key={quiz.id}
                      quiz={quiz}
                      unlocked={unlocked}
                      passed={passed}
                      retake={retake}
                      showReview={showReview}
                      onStart={() =>
                        navigate(
                          showReview
                            ? `/quiz/${quiz.id}?mode=review`
                            : `/quiz/${quiz.id}`
                        )
                      }
                    />
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-2">🔒 Analytics Access</h3>
            <p className="text-sm text-slate-600 mb-4">
              Enter the admin password to view analytics.
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && handlePasswordSubmit()}
              placeholder="Enter password..."
              className={`w-full px-4 py-2.5 rounded-lg border text-sm outline-none transition-colors ${
                passwordError
                  ? "border-red-300 bg-red-50 focus:border-red-400"
                  : "border-slate-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              }`}
              autoFocus
            />
            {passwordError && (
              <p className="text-xs text-red-600 mt-1.5">Incorrect password. Try again.</p>
            )}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="flex-1 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function QuizCard({
  quiz,
  unlocked,
  passed,
  retake,
  showReview,
  onStart,
}: {
  quiz: Quiz;
  unlocked: boolean;
  passed: boolean;
  retake: boolean;
  showReview: boolean;
  onStart: () => void;
}) {
  const emoji = QUIZ_EMOJIS[quiz.id] ?? "📚";

  return (
    <div
      className={`rounded-xl border p-5 shadow-sm transition-shadow ${
        unlocked
          ? "bg-white border-slate-200 hover:shadow-md"
          : "bg-slate-100 border-slate-200 opacity-70"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
          {quiz.day}
        </span>
        <span className="text-xs text-slate-500">
          {passed ? "✅ Passed" : `${quiz.questions.length} questions`}
        </span>
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
        {emoji} {quiz.title}
      </h3>
      <p className="text-xs text-slate-500 mb-4">80% to pass • 18 min • 2 attempts • 2 retakes</p>

      {unlocked ? (
        <button
          onClick={onStart}
          className={`w-full py-2 text-sm font-medium rounded-lg transition-colors ${
            showReview
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : retake
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          {showReview ? "📖 Review Quiz" : retake ? "🔄 Retake Quiz" : "Start Quiz 🧗"}
        </button>
      ) : (
        <div className="w-full py-2 text-sm font-medium text-slate-400 border border-slate-200 rounded-lg text-center">
          🔒 Pass previous quiz to unlock
        </div>
      )}
    </div>
  );
}
