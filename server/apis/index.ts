/**
 * API Registry - Central export for all APIs.
 */
import CampSetupTables from './camp/setup-tables.js';
import CampSubmitAttempt from './camp/submit-attempt.js';
import CampGetUserAttempts from './camp/get-user-attempts.js';
import CampGetAnalytics from './camp/get-analytics.js';
import CampGetUserProgression from './camp/get-user-progression.js';
import CampResetUserProgress from './camp/reset-user-progress.js';
import CampTrackReview from './camp/track-review.js';
import CampGetUserXP from './camp/get-user-xp.js';
import CampGetLeaderboard from './camp/get-leaderboard.js';
import CampTrackVisit from './camp/track-visit.js';
import CampGetVisitStats from './camp/get-visit-stats.js';
import CampGetCampers from './camp/get-campers.js';

const apis = {
  CampSetupTables,
  CampSubmitAttempt,
  CampGetUserAttempts,
  CampGetAnalytics,
  CampGetUserProgression,
  CampResetUserProgress,
  CampTrackReview,
  CampGetUserXP,
  CampGetLeaderboard,
  CampTrackVisit,
  CampGetVisitStats,
  CampGetCampers,
} as const;

export default apis;

/** Type for useApi inference - exported for client type-only imports */
export type ApiRegistry = typeof apis;
