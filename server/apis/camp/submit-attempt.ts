import { api, z, postgres } from "@superblocksteam/sdk-api";

const APPS_DB = "c6e32cf4-ca66-42ae-aeb3-58c84ffae574";

const AnswerInput = z.object({
  questionId: z.number(),
  questionText: z.string(),
  userAnswer: z.string().nullable(),
  correctAnswer: z.string(),
  isCorrect: z.boolean(),
});

export default api({
  name: "CampSubmitAttempt",
  description: "Records a quiz attempt and individual answers",
  integrations: {
    db: postgres(APPS_DB),
  },
  input: z.object({
    quizId: z.string(),
    userEmail: z.string(),
    userName: z.string(),
    userRole: z.string(),
    attemptNumber: z.number(),
    score: z.number(),
    totalQuestions: z.number(),
    passed: z.boolean(),
    timeSpentSeconds: z.number().nullable(),
    answers: z.array(AnswerInput),
  }),
  output: z.object({
    attemptId: z.number(),
    success: z.boolean(),
  }),
  async run(ctx, input) {
    const attemptResult = await ctx.integrations.db.query(
      `INSERT INTO camp_quiz_attempts (quiz_id, user_email, user_name, user_role, attempt_number, score, total_questions, passed, time_spent_seconds)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id`,
      z.object({ id: z.number() }),
      [
        input.quizId,
        input.userEmail,
        input.userName,
        input.userRole,
        input.attemptNumber,
        input.score,
        input.totalQuestions,
        input.passed,
        input.timeSpentSeconds,
      ],
      { label: "Insert quiz attempt" }
    );

    const attemptId = attemptResult[0].id;

    // Insert all answers
    for (const answer of input.answers) {
      await ctx.integrations.db.query(
        `INSERT INTO camp_quiz_answers (attempt_id, question_id, question_text, user_answer, correct_answer, is_correct)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        z.any(),
        [
          attemptId,
          answer.questionId,
          answer.questionText,
          answer.userAnswer,
          answer.correctAnswer,
          answer.isCorrect,
        ],
        { label: `Insert answer for Q${answer.questionId}` }
      );
    }

    return { attemptId, success: true };
  },
});
