/**
 * Legal Notice Strength Calculator Components
 * Export all components for easy import
 */

export { HeroSection } from "./HeroSection";
export { NoticeTypeSelector } from "./NoticeTypeSelector";
export { CalculatorForm } from "./CalculatorForm";
export { CircularStrengthGauge } from "./CircularStrengthGauge";
export { ResultModal } from "./ResultModal";

export type { CaseStrengthResult } from "./ResultModal";

export {
  NOTICE_TYPES,
  SCORE_BUCKETS,
  getNoticeTypeConfig,
  getScoreBucket,
  type NoticeType,
  type NoticeTypeConfig,
  type ScoreBucket,
  type Question,
  type Option,
} from "./calculator-data";

export {
  calculateCaseStrength,
  type CaseSession,
  type AnswerValue,
} from "./scoring-utils";

export {
  StrengthIntro,
  StrengthToolLogic,
  StrengthOutcomes,
  StrengthScenarios,
} from "./SEOContent";
