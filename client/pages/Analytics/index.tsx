import { useNavigate } from "react-router";
import { useApiData } from "@/hooks/useApiData.js";
import { QUIZZES } from "@/data/quizzes/index.js";

export default function AnalyticsPage() {
  const navigate = useNavigate();
  const { data, loading, isError, error } = useApiData("CampGetAnalytics", {
    quizId: null,
    role: null,
    dateFrom: null,
    dateTo: null,
  });

  const { data: visitStats } = useApiData("CampGetVisitStats", {});

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">📊 cAMP Ascent: Sales — Analytics</h1>
              <p className="text-sm text-slate-600 mt-1">🏔️ Performance data across all knowledge checks</p>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              🧭 Back to Trail Map
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading && <LoadingSkeleton />}
        {isError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
            Failed to load analytics: {error?.message ?? "Unknown error"}
          </div>
        )}
        {data && <AnalyticsDashboard data={data} visitStats={visitStats} />}
      </main>
    </div>
  );
}

function AnalyticsDashboard({ data, visitStats }: { data: any; visitStats: { totalVisits: number; uniqueVisitors: number } | undefined }) {
  const { summary, byQuiz, byRole, mostMissed, recentAttempts } = data;

  return (
    <div className="space-y-8">
      {/* Visit Stats */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">👁️ Page Visits</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-md">
          <StatCard label="Total Visits" value={visitStats?.totalVisits ?? "—"} />
          <StatCard label="Unique Visitors" value={visitStats?.uniqueVisitors ?? "—"} />
        </div>
      </section>

      {/* Summary Cards */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">⛺ Overall Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Total Attempts" value={summary?.totalAttempts ?? 0} />
          <StatCard label="Unique Users" value={summary?.uniqueUsers ?? 0} />
          <StatCard label="Avg Score" value={`${summary?.averageScore ?? 0}%`} />
          <StatCard label="Pass Rate" value={`${summary?.overallPassRate ?? 0}%`} />
        </div>
      </section>

      {/* Per-Quiz Breakdown */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">🧭 Per-Quiz Breakdown</h2>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-4 py-3 font-medium text-slate-600">Quiz</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Attempts</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Avg Score</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Pass Rate</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Reviewed</th>
              </tr>
            </thead>
            <tbody>
              {(byQuiz ?? []).map((row: any) => {
                const quizMeta = QUIZZES.find((q) => q.id === row.quiz_id);
                return (
                  <tr key={row.quiz_id} className="border-b border-slate-50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-slate-900">{quizMeta?.title ?? row.quiz_id}</p>
                        <p className="text-xs text-slate-500">{quizMeta?.day} • {quizMeta?.week}</p>
                      </div>
                    </td>
                    <td className="text-center px-4 py-3 text-slate-700">{row.attempts}</td>
                    <td className="text-center px-4 py-3 text-slate-700">{row.avg_score}%</td>
                    <td className="text-center px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.pass_rate >= 80
                            ? "bg-green-100 text-green-700"
                            : row.pass_rate >= 50
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.pass_rate}%
                      </span>
                    </td>
                    <td className="text-center px-4 py-3 text-slate-700">{row.review_count}</td>
                  </tr>
                );
              })}
              {(!byQuiz || byQuiz.length === 0) && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                    No quiz data yet. Attempts will appear here once users complete quizzes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Role Comparison */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">🧗 Performance by Role</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {(byRole ?? []).map((row: any) => (
            <div key={row.user_role} className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">{row.user_role}</p>
              <p className="text-2xl font-bold text-slate-900">{row.avg_score}%</p>
              <p className="text-xs text-slate-500">{row.attempts} attempt{row.attempts !== 1 ? "s" : ""}</p>
            </div>
          ))}
          {(!byRole || byRole.length === 0) && (
            <div className="col-span-full bg-white rounded-xl border border-slate-200 p-6 text-center text-sm text-slate-500">
              No role data available yet.
            </div>
          )}
        </div>
      </section>

      {/* Most-Missed Questions */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">🔥 Most-Missed Questions</h2>
        <p className="text-xs text-slate-500 mb-3">Showing questions with ≤65% correct rate (miss rate ≥35%)</p>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          {(mostMissed ?? []).length > 0 ? (
            <div className="divide-y divide-slate-100">
              {(mostMissed ?? []).slice(0, 10).map((item: any, i: number) => (
                <div key={i} className="px-4 py-3 flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                    {item.miss_rate}%
                  </span>
                  <div>
                    <p className="text-sm text-slate-900 leading-relaxed">{item.question_text}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Quiz: {item.quiz_id} • {item.times_asked} answer{item.times_asked !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-slate-500">
              No missed question data available yet.
            </div>
          )}
        </div>
      </section>

      {/* Individual Learner Results */}
      <section>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">👤 Individual Learner Results</h2>
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="text-left px-4 py-3 font-medium text-slate-600">Name</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Role</th>
                <th className="text-left px-4 py-3 font-medium text-slate-600">Quiz</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Score</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Result</th>
                <th className="text-center px-4 py-3 font-medium text-slate-600">Attempt</th>
              </tr>
            </thead>
            <tbody>
              {(recentAttempts ?? []).map((row: any, i: number) => {
                const quizMeta = QUIZZES.find((q) => q.id === row.quiz_id);
                const scorePercent = row.total_questions > 0
                  ? Math.round((row.score / row.total_questions) * 100)
                  : 0;
                return (
                  <tr key={i} className="border-b border-slate-50">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">{row.user_name}</p>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{row.user_role}</td>
                    <td className="px-4 py-3">
                      <p className="text-slate-900">{quizMeta?.title ?? row.quiz_id}</p>
                      <p className="text-xs text-slate-500">{quizMeta?.day}</p>
                    </td>
                    <td className="text-center px-4 py-3 text-slate-700">
                      {row.score}/{row.total_questions} ({scorePercent}%)
                    </td>
                    <td className="text-center px-4 py-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                          row.passed
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {row.passed ? "✅ Passed" : "❌ Failed"}
                      </span>
                    </td>
                    <td className="text-center px-4 py-3 text-slate-600">#{row.attempt_number}</td>
                  </tr>
                );
              })}
              {(!recentAttempts || recentAttempts.length === 0) && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                    No individual results yet. Data will appear as learners complete quizzes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500 mt-1">{label}</p>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 animate-pulse">
            <div className="h-7 w-16 bg-slate-200 rounded mb-2" />
            <div className="h-3 w-20 bg-slate-100 rounded" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-4 animate-pulse">
        <div className="h-4 w-40 bg-slate-200 rounded mb-4" />
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-slate-100 rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}
