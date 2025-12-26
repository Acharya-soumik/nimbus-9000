/**
 * Scoring Utilities for Legal Notice Strength Calculator
 *
 * Implements the scoring algorithm to calculate case strength based on user answers.
 */

import type {
  Question,
  NoticeType,
  Option,
} from "./calculator-data";
import {
  getNoticeTypeConfig,
  calculateDaysSince,
  isWithinLimitationPeriod,
} from "./calculator-data";
import type { CaseStrengthResult } from "./ResultModal";

export type AnswerValue =
  | boolean
  | string
  | number
  | string[]
  | Date
  | null
  | undefined;

export interface CaseSession {
  notice_type: NoticeType;
  answers: Record<string, AnswerValue>;
}

// ============================================================================
// CORE SCORING ALGORITHM
// ============================================================================

/**
 * Calculate the overall case strength score (0-100)
 */
export function calculateCaseStrength(
  session: CaseSession
): CaseStrengthResult {
  const config = getNoticeTypeConfig(session.notice_type);
  if (!config) {
    throw new Error(`Invalid notice type: ${session.notice_type}`);
  }

  let totalScore = 0;
  let maxPossibleScore = 0;
  let answeredQuestions = 0;

  // 1. Calculate weighted scores for each question
  for (const question of config.questions) {
    const answer = session.answers[question.key];
    const scoreValue = calculateQuestionScore(question, answer);

    totalScore += scoreValue * question.weight;
    maxPossibleScore += question.weight;

    if (answer !== null && answer !== undefined) {
      answeredQuestions++;
    }
  }

  // 2. Normalize to 0-100
  const rawScore =
    maxPossibleScore > 0 ? (totalScore / maxPossibleScore) * 100 : 0;

  // 3. Apply heuristics and overrides
  const adjustedScore = applyHeuristics(rawScore, session);

  // 4. Calculate confidence level
  const confidence = calculateConfidence(
    answeredQuestions,
    config.questions.length,
    session
  );

  // 5. Identify strength and risk factors
  const strengthFactors = identifyStrengthFactors(session);
  const riskFactors = identifyRiskFactors(session);

  return {
    score: Math.round(adjustedScore),
    confidence,
    strength_factors: strengthFactors,
    risk_factors: riskFactors,
    notice_type: session.notice_type,
  };
}

// ============================================================================
// QUESTION SCORE CALCULATION
// ============================================================================

function calculateQuestionScore(
  question: Question,
  answer: AnswerValue
): number {
  if (answer === null || answer === undefined) {
    return 0;
  }

  switch (question.type) {
    case "boolean":
      return answer === true ? 1.0 : 0.0;

    case "multiple_choice":
      if (typeof answer !== "string" && typeof answer !== "number") return 0;
      const option = question.options?.find((o) => o.value === answer);
      return option?.score_multiplier ?? 0;

    case "multi_select":
      if (!Array.isArray(answer)) return 0;
      const selected = answer as string[];
      const scores = selected
        .map((val) => {
          const opt = question.options?.find((o) => o.value === val);
          return opt?.score_multiplier ?? 0;
        })
        .filter((s) => s > 0);
      return scores.length > 0
        ? scores.reduce((a, b) => a + b, 0) / scores.length
        : 0;

    case "date":
      // For dates, return 1.0 if a valid date is provided
      return answer instanceof Date && !isNaN(answer.getTime()) ? 1.0 : 0.0;

    case "amount":
    case "number":
      // For amounts/numbers, return 1.0 if value is provided and valid
      return typeof answer === "number" && answer > 0 ? 1.0 : 0.0;

    case "file":
      // File uploaded = 1.0, not uploaded = 0.0
      return answer !== null ? 1.0 : 0.0;

    case "text":
      // Text provided = 0.5 (neutral score)
      return typeof answer === "string" && answer.trim().length > 0 ? 0.5 : 0;

    default:
      return 0;
  }
}

// ============================================================================
// HEURISTICS & OVERRIDE RULES
// ============================================================================

function applyHeuristics(rawScore: number, session: CaseSession): number {
  let adjusted = rawScore;

  switch (session.notice_type) {
    case "money_recovery":
      adjusted = applyMoneyRecoveryHeuristics(adjusted, session);
      break;
    case "cheque_bounce":
      adjusted = applyChequeBounceHeuristics(adjusted, session);
      break;
    case "tenant_rent_eviction":
      adjusted = applyTenantRentHeuristics(adjusted, session);
      break;
  }

  // Ensure score stays in 0-100 range
  return Math.max(0, Math.min(100, adjusted));
}

function applyMoneyRecoveryHeuristics(
  score: number,
  session: CaseSession
): number {
  let adjusted = score;

  // Minimum score if written agreement exists
  if (session.answers.written_agreement_exists === true) {
    adjusted = Math.max(adjusted, 45);
  }

  // Check limitation period (3 years = 1095 days)
  const repaymentDate = session.answers.repayment_date;
  if (repaymentDate instanceof Date) {
    const isWithinLimit = isWithinLimitationPeriod(repaymentDate, 1095);
    const hasRecentAcknowledgment =
      session.answers.borrower_acknowledged_recently === true;

    // Cap score if beyond limitation and no recent acknowledgment
    if (!isWithinLimit && !hasRecentAcknowledgment) {
      adjusted = Math.min(adjusted, 25);
    }
  }

  // Boost score for bank transfer proof
  if (session.answers.payment_proof === "bank_transfer") {
    adjusted += 5;
  }

  return adjusted;
}

function applyChequeBounceHeuristics(
  score: number,
  session: CaseSession
): number {
  let adjusted = score;

  // Minimum score if bank memo exists
  if (session.answers.bank_memo_received === true) {
    adjusted = Math.max(adjusted, 40);
  }

  // Check if within 30-day demand notice window
  const bankMemoDate = session.answers.bank_memo_date;
  if (bankMemoDate instanceof Date) {
    const daysSinceMemo = calculateDaysSince(bankMemoDate);
    // If more than 30 days have passed, severely weaken the case
    if (daysSinceMemo > 30 && !session.answers.demand_notice_already_sent) {
      adjusted = Math.min(adjusted, 20);
    }
  }

  // Cheque not presented within validity
  if (session.answers.cheque_presented_within_validity === false) {
    adjusted = Math.min(adjusted, 40);
  }

  // No original cheque available
  if (session.answers.original_cheque_available === false) {
    adjusted = Math.min(adjusted, 30);
  }

  return adjusted;
}

function applyTenantRentHeuristics(
  score: number,
  session: CaseSession
): number {
  let adjusted = score;

  // Boost for registered agreement
  if (session.answers.rental_agreement_type === "registered_written") {
    adjusted += 10;
  }

  // Boost if many months of rent are due (shows clear pattern)
  const rentDueMonths = session.answers.rent_due_months;
  if (typeof rentDueMonths === "number" && rentDueMonths >= 6) {
    adjusted += 5;
  }

  // Reduce if notice period not complied with
  if (session.answers.notice_period_in_agreement === "yes_not_complied") {
    adjusted -= 15;
  }

  return adjusted;
}

// ============================================================================
// CONFIDENCE CALCULATION
// ============================================================================

function calculateConfidence(
  answeredQuestions: number,
  totalQuestions: number,
  session: CaseSession
): "low" | "medium" | "high" {
  const completionRate = answeredQuestions / totalQuestions;

  // Check if critical questions are answered
  const config = getNoticeTypeConfig(session.notice_type);
  if (!config) return "low";

  const criticalQuestions = config.questions.filter((q) => q.critical);
  const criticalAnswered = criticalQuestions.filter(
    (q) =>
      session.answers[q.key] !== null && session.answers[q.key] !== undefined
  ).length;
  const criticalAnsweredRate = criticalAnswered / criticalQuestions.length;

  if (completionRate < 0.6 || criticalAnsweredRate < 0.8) {
    return "low";
  } else if (completionRate < 0.85 || criticalAnsweredRate < 1.0) {
    return "medium";
  } else {
    return "high";
  }
}

// ============================================================================
// STRENGTH & RISK FACTOR IDENTIFICATION
// ============================================================================

function identifyStrengthFactors(session: CaseSession): string[] {
  const factors: string[] = [];

  switch (session.notice_type) {
    case "money_recovery":
      if (session.answers.written_agreement_exists === true) {
        factors.push("Written agreement/documentation exists");
      }
      if (session.answers.payment_proof === "bank_transfer") {
        factors.push("Strong payment proof via bank transfer");
      }
      if (session.answers.witnesses_available === true) {
        factors.push("Witnesses available to support your claim");
      }
      if (session.answers.borrower_acknowledged_recently === true) {
        factors.push("Recent written acknowledgment of debt");
      }
      break;

    case "cheque_bounce":
      if (session.answers.bank_memo_received === true) {
        factors.push("Bank Return Memo received (critical document)");
      }
      if (session.answers.original_cheque_available === true) {
        factors.push("Original dishonored cheque available");
      }
      if (session.answers.proof_of_debt_underlying === "written_agreement") {
        factors.push("Written proof of underlying debt");
      }
      if (session.answers.dishonor_reason === "insufficient_funds") {
        factors.push("Clear dishonor reason: Insufficient Funds");
      }
      break;

    case "tenant_rent_eviction":
      if (session.answers.rental_agreement_type === "registered_written") {
        factors.push("Registered rental agreement");
      }
      if (session.answers.payment_history_proof === true) {
        factors.push("Payment history records available");
      }
      const rentDue = session.answers.rent_due_months;
      if (typeof rentDue === "number" && rentDue >= 3) {
        factors.push(`${rentDue} months of rent arrears`);
      }
      if (session.answers.notice_period_in_agreement === "yes_complied") {
        factors.push("Notice period requirement fulfilled");
      }
      break;

    case "unpaid_salary":
      if (session.answers.employment_proof === "written_contract_offer") {
        factors.push("Written employment contract available");
      }
      if (session.answers.salary_payment_method_previous === "bank_transfer") {
        factors.push("Bank transfer records of previous salary payments");
      }
      if (session.answers.pf_esi_deducted === true) {
        factors.push("PF/ESI deductions prove formal employment");
      }
      if (session.answers.labour_dept_complaint === true) {
        factors.push("Labour Department complaint filed");
      }
      break;

    case "consumer_complaint":
      if (session.answers.purchase_proof === "invoice_receipt_gst") {
        factors.push("Invoice with GST - strong proof of purchase");
      }
      if (session.answers.complained_to_seller === true) {
        factors.push("Attempted resolution with seller/service provider");
      }
      if (session.answers.warranty_status === "under_warranty") {
        factors.push("Product/service still under warranty");
      }
      if (session.answers.communication_proof === true) {
        factors.push("Written proof of complaints available");
      }
      break;

    case "builder_delay":
      if (session.answers.booking_agreement === "registered_agreement") {
        factors.push("Registered Agreement for Sale");
      }
      if (session.answers.payments_made_proof === "full_payment") {
        factors.push("Full payment made to builder");
      }
      if (session.answers.rera_registered === true) {
        factors.push("Project registered under RERA");
      }
      if (session.answers.penalty_clause === true) {
        factors.push("Penalty clause for delay in agreement");
      }
      if (session.answers.builder_communication === true) {
        factors.push("Written acknowledgment of delay from builder");
      }
      break;

    case "divorce_maintenance":
      if (session.answers.marriage_certificate === true) {
        factors.push("Marriage certificate available");
      }
      if (session.answers.proof_of_grounds === "strong_evidence") {
        factors.push("Strong evidence for divorce grounds");
      }
      const divorceGrounds = session.answers.divorce_ground;
      if (Array.isArray(divorceGrounds) && divorceGrounds.includes("mutual_consent")) {
        factors.push("Mutual consent - faster divorce process");
      }
      if (session.answers.income_proof_spouse === true) {
        factors.push("Proof of spouse's income available");
      }
      break;

    case "criminal_defamation":
      if (session.answers.defamatory_statement_proof === "written_recorded") {
        factors.push("Written/recorded proof of defamatory statement");
      }
      if (session.answers.publication_proof === true) {
        factors.push("Statement was made publicly");
      }
      if (session.answers.statement_false === true) {
        factors.push("Statement is factually false");
      }
      if (session.answers.harm_to_reputation === "significant_harm") {
        factors.push("Significant damage to reputation documented");
      }
      break;

    case "civil_defamation":
      if (session.answers.defamatory_statement_proof === "written_recorded") {
        factors.push("Written/recorded proof of defamatory statement");
      }
      if (session.answers.publication_proof === true) {
        factors.push("Statement was made publicly");
      }
      if (session.answers.quantifiable_damages === true) {
        factors.push("Financial damages can be quantified");
      }
      if (session.answers.business_impact === true) {
        factors.push("Business/professional reputation affected");
      }
      break;

    case "breach_of_contract":
      if (session.answers.signed_contract === "written_signed") {
        factors.push("Written contract signed by both parties");
      }
      if (session.answers.breach_evidence === "strong_evidence") {
        factors.push("Strong evidence of breach available");
      }
      if (session.answers.your_performance === true) {
        factors.push("You have fulfilled your contractual obligations");
      }
      if (session.answers.damages_quantified === true) {
        factors.push("Losses due to breach can be quantified");
      }
      break;

    case "insurance_dispute":
      if (session.answers.policy_document === true) {
        factors.push("Original insurance policy document available");
      }
      if (session.answers.claim_rejection_letter === true) {
        factors.push("Written rejection letter from insurance company");
      }
      if (session.answers.premium_payment_proof === true) {
        factors.push("Proof of premium payments available");
      }
      if (session.answers.policy_in_force === true) {
        factors.push("Policy was active when event occurred");
      }
      const docs = session.answers.supporting_documents;
      if (Array.isArray(docs) && docs.length > 0) {
        factors.push(`${docs.length} supporting documents available`);
      }
      break;

    case "property_partition":
      if (session.answers.co_ownership_proof === "registered_deed") {
        factors.push("Registered property deed proving co-ownership");
      }
      if (session.answers.share_entitlement === "clearly_defined") {
        factors.push("Share percentage clearly defined in documents");
      }
      if (session.answers.property_valuation === true) {
        factors.push("Property professionally valued");
      }
      if (session.answers.demand_notice_sent === true) {
        factors.push("Demand notice for partition already sent");
      }
      break;

    case "child_custody":
      if (session.answers.child_birth_certificate === true) {
        factors.push("Child's birth certificate available");
      }
      if (session.answers.proof_of_concerns === true) {
        factors.push("Evidence supporting welfare concerns available");
      }
      if (session.answers.financial_stability === true) {
        factors.push("Can demonstrate financial stability");
      }
      if (session.answers.custody_type_seeking === "joint_custody") {
        factors.push("Seeking joint custody (court-preferred)");
      }
      break;

    case "workplace_harassment":
      if (session.answers.employment_proof === "appointment_letter") {
        factors.push("Employment contract/appointment letter available");
      }
      if (session.answers.harassment_evidence === "strong_evidence") {
        factors.push("Strong evidence of harassment available");
      }
      if (session.answers.complaint_to_ic === true) {
        factors.push("Complaint filed with Internal Complaints Committee");
      }
      if (session.answers.impact_on_work === true) {
        factors.push("Documented impact on work/mental health");
      }
      break;

    case "wrongful_termination":
      if (session.answers.employment_contract === "written_contract") {
        factors.push("Written employment contract available");
      }
      if (session.answers.termination_letter === true) {
        factors.push("Termination letter received");
      }
      if (session.answers.termination_reason === "discriminatory") {
        factors.push("Discriminatory termination - strong legal case");
      }
      if (session.answers.inquiry_conducted === false) {
        factors.push("No proper inquiry conducted before termination");
      }
      const serviceYears = session.answers.service_length;
      if (typeof serviceYears === "number" && serviceYears >= 5) {
        factors.push(`${serviceYears} years of service strengthens claim`);
      }
      break;
  }

  return factors;
}

function identifyRiskFactors(session: CaseSession): string[] {
  const risks: string[] = [];

  switch (session.notice_type) {
    case "money_recovery":
      const repaymentDate = session.answers.repayment_date;
      if (repaymentDate instanceof Date) {
        const isWithinLimit = isWithinLimitationPeriod(repaymentDate, 1095);
        if (!isWithinLimit) {
          risks.push(
            "May be beyond 3-year limitation period - consult lawyer urgently"
          );
        }
      }
      if (session.answers.payment_proof === "cash_no_receipt") {
        risks.push("Weak payment proof (cash without receipt)");
      }
      if (!session.answers.borrower_address_confirmed) {
        risks.push("Borrower's current address not confirmed");
      }
      break;

    case "cheque_bounce":
      if (session.answers.bank_memo_received === false) {
        risks.push("No Bank Return Memo - critical document missing");
      }
      const memoDate = session.answers.bank_memo_date;
      if (memoDate instanceof Date) {
        const days = calculateDaysSince(memoDate);
        if (days > 30 && !session.answers.demand_notice_already_sent) {
          risks.push(
            "30-day demand notice window may have expired - immediate action needed"
          );
        } else if (days > 20 && !session.answers.demand_notice_already_sent) {
          risks.push("Approaching 30-day deadline - send notice immediately");
        }
      }
      if (session.answers.cheque_presented_within_validity === false) {
        risks.push("Cheque presented after 3-month validity period");
      }
      if (session.answers.original_cheque_available === false) {
        risks.push("Original cheque not available - required for complaint");
      }
      break;

    case "tenant_rent_eviction":
      if (session.answers.rental_agreement_type === "verbal_only") {
        risks.push("No written rental agreement - weaker legal position");
      }
      if (session.answers.notice_period_in_agreement === "yes_not_complied") {
        risks.push("Notice period requirement not yet fulfilled");
      }
      if (!session.answers.payment_history_proof) {
        risks.push("No payment history records to prove arrears");
      }
      break;

    case "unpaid_salary":
      if (session.answers.employment_proof === "verbal_only") {
        risks.push("No written employment contract - weaker claim");
      }
      if (session.answers.salary_payment_method_previous === "cash_no_proof") {
        risks.push("No proof of previous salary payments");
      }
      const monthsUnpaid = session.answers.months_unpaid;
      if (typeof monthsUnpaid === "number" && monthsUnpaid > 36) {
        risks.push("Very old dues - may be time-barred");
      }
      if (!session.answers.employer_contact_available) {
        risks.push("Employer's address not available");
      }
      break;

    case "consumer_complaint":
      if (session.answers.purchase_proof === "no_proof") {
        risks.push("No proof of purchase - critical weakness");
      }
      if (session.answers.complained_to_seller === false) {
        risks.push("Must attempt resolution with seller before filing complaint");
      }
      if (session.answers.warranty_status === "warranty_expired_long") {
        risks.push("Warranty expired long ago - weakens claim");
      }
      if (!session.answers.communication_proof) {
        risks.push("No written proof of complaints");
      }
      break;

    case "builder_delay":
      if (session.answers.booking_agreement === "no_written_agreement") {
        risks.push("No written agreement - extremely weak case");
      }
      if (session.answers.payments_made_proof === "token_only") {
        risks.push("Only token payment made - may not have strong claim");
      }
      const possessionDate = session.answers.possession_date_agreed;
      if (possessionDate instanceof Date) {
        const daysSince = calculateDaysSince(possessionDate);
        if (daysSince > 1095) {
          risks.push("Delay exceeds 3 years - check limitation period urgently");
        }
      }
      if (session.answers.construction_status === "barely_started") {
        risks.push("Construction barely started - possession unlikely soon");
      }
      break;

    case "divorce_maintenance":
      if (session.answers.marriage_certificate === false) {
        risks.push("No marriage certificate - will need to prove marriage");
      }
      if (session.answers.proof_of_grounds === "minimal_evidence") {
        risks.push("Minimal evidence for divorce grounds");
      }
      if (session.answers.children_involved === true) {
        risks.push("Child custody/maintenance will complicate proceedings");
      }
      if (session.answers.attempts_at_mediation === false) {
        risks.push("No mediation attempted - courts prefer reconciliation efforts");
      }
      break;

    case "criminal_defamation":
      if (session.answers.defamatory_statement_proof === "verbal_only") {
        risks.push("No proof of defamatory statement - very weak case");
      }
      if (session.answers.publication_proof === false) {
        risks.push("Statement not made publicly - essential for defamation");
      }
      if (session.answers.statement_false === false) {
        risks.push("If statement is true, you have no case for defamation");
      }
      if (!session.answers.complainant_identity) {
        risks.push("Don't know identity of person - cannot send notice");
      }
      break;

    case "civil_defamation":
      if (session.answers.defamatory_statement_proof === "verbal_only") {
        risks.push("No proof of defamatory statement - very weak case");
      }
      if (session.answers.statement_false === false) {
        risks.push("If statement is true, you have no case for defamation");
      }
      if (session.answers.quantifiable_damages === false) {
        risks.push("Cannot quantify damages - harder to win compensation");
      }
      if (session.answers.retraction_demanded === false) {
        risks.push("Must demand retraction before filing civil suit");
      }
      break;

    case "breach_of_contract":
      if (session.answers.signed_contract === "verbal_agreement") {
        risks.push("Verbal agreement only - harder to prove terms");
      }
      if (session.answers.breach_evidence === "minimal_evidence") {
        risks.push("Minimal evidence of breach");
      }
      if (session.answers.your_performance === false) {
        risks.push("You haven't fulfilled your obligations - weakens your claim");
      }
      if (session.answers.arbitration_clause === true) {
        risks.push("Contract has arbitration clause - may need to go through arbitration first");
      }
      break;

    case "insurance_dispute":
      if (session.answers.policy_document === false) {
        risks.push("No policy document - need to verify coverage");
      }
      if (session.answers.claim_rejection_letter === false) {
        risks.push("No written rejection letter - get this first");
      }
      if (session.answers.policy_in_force === false) {
        risks.push("Policy not in force when event occurred - claim likely invalid");
      }
      if (session.answers.rejection_reason === "not_covered") {
        risks.push("If event is truly not covered, case will be very difficult");
      }
      if (session.answers.rejection_reason === "misrepresentation") {
        risks.push("Alleged fraud/misrepresentation - serious allegation to defend");
      }
      break;

    case "property_partition":
      if (session.answers.co_ownership_proof === "no_formal_proof") {
        risks.push("No formal proof of co-ownership - must establish this first");
      }
      if (session.answers.share_entitlement === "disputed_shares") {
        risks.push("Share percentage disputed - will complicate partition");
      }
      if (session.answers.partition_refusal === false) {
        risks.push("Co-owners haven't refused - may need to attempt resolution first");
      }
      if (session.answers.demand_notice_sent === false) {
        risks.push("Demand notice not sent - required before filing suit");
      }
      break;

    case "child_custody":
      if (session.answers.child_birth_certificate === false) {
        risks.push("No birth certificate - must prove parentage");
      }
      if (session.answers.proof_of_concerns === false) {
        risks.push("No evidence supporting welfare concerns");
      }
      if (session.answers.financial_stability === false) {
        risks.push("Cannot demonstrate financial stability to care for child");
      }
      if (session.answers.custody_type_seeking === "sole_custody") {
        risks.push("Sole custody harder to obtain - courts prefer joint custody");
      }
      break;

    case "workplace_harassment":
      if (session.answers.employment_proof === "email_correspondence") {
        risks.push("Limited employment proof - may need stronger documentation");
      }
      if (session.answers.harassment_evidence === "minimal_evidence") {
        risks.push("Minimal evidence - harassment cases require strong proof");
      }
      if (session.answers.complaint_to_ic === false) {
        risks.push("No ICC complaint - required under POSH Act for sexual harassment");
      }
      if (session.answers.ic_response === "no_action" && session.answers.complaint_to_ic === true) {
        risks.push("ICC dismissed complaint - will need to show ICC process was flawed");
      }
      break;

    case "wrongful_termination":
      if (session.answers.employment_contract === "verbal_agreement") {
        risks.push("No written contract - harder to prove terms of employment");
      }
      if (session.answers.termination_letter === false) {
        risks.push("No termination letter - harder to challenge without written notice");
      }
      if (session.answers.notice_period_given === true) {
        risks.push("Proper notice given - weaker wrongful termination claim");
      }
      if (session.answers.termination_reason === "misconduct" && session.answers.inquiry_conducted === true) {
        risks.push("Proper inquiry was conducted - harder to prove wrongful termination");
      }
      const serviceLength = session.answers.service_length;
      if (typeof serviceLength === "number" && serviceLength < 1) {
        risks.push("Less than 1 year service - limited labor law protection");
      }
      break;
  }

  return risks;
}
