import {
  NoticeTypeData,
  moneyRecoveryData,
  chequeBounceData,
  outstandingPaymentData,
  unpaidSalaryData,
  divorceNoticeData,
  maintenanceNoticeData,
  crueltyDesertionNoticeData,
  tenantNoticeData,
  rentArrearsNoticeData,
  evictionNoticeData,
  builderNoticeData,
  propertyPossessionNoticeData,
  consumerComplaintNoticeData,
  criminalDefamationData,
  wrongfulTerminationData,
  propertyPartitionData,
  childCustodyData,
  workplaceHarassmentData,
  employeeMisconductData,
  domesticViolenceData,
  breachOfContractData,
  bankLoanSettlementData,
  professionalFeesRecoveryData,
  amenitiesSocietyBuilderData,
} from "./notice-types";

// Re-export NoticeTypeData type
export type { NoticeTypeData };

// Re-export individual data objects for backward compatibility if needed
export {
  moneyRecoveryData,
  chequeBounceData,
  outstandingPaymentData,
  unpaidSalaryData,
  divorceNoticeData,
  maintenanceNoticeData,
  crueltyDesertionNoticeData,
  tenantNoticeData,
  rentArrearsNoticeData,
  evictionNoticeData,
  builderNoticeData,
  propertyPossessionNoticeData,
  consumerComplaintNoticeData,
  criminalDefamationData,
  wrongfulTerminationData,
  propertyPartitionData,
  childCustodyData,
  workplaceHarassmentData,
  employeeMisconductData,
  domesticViolenceData,
  breachOfContractData,
  bankLoanSettlementData,
  professionalFeesRecoveryData,
  amenitiesSocietyBuilderData,
};

export const noticeTypesData: Record<string, NoticeTypeData> = {
  "legal-notice-for-money-recovery": moneyRecoveryData,
  "cheque-bounce-legal-notice": chequeBounceData,
  "legal-notice-for-outstanding-payment": outstandingPaymentData,
  "legal-notice-for-unpaid-salary": unpaidSalaryData,
  "legal-notice-for-divorce": divorceNoticeData,
  "maintenance-legal-notice": maintenanceNoticeData,
  "legal-notice-for-cruelty-or-desertion": crueltyDesertionNoticeData,
  "legal-notice-to-tenant": tenantNoticeData,
  "legal-notice-for-rent-arrears": rentArrearsNoticeData,
  "eviction-legal-notice": evictionNoticeData,
  "legal-notice-to-builder": builderNoticeData,
  "legal-notice-for-property-possession": propertyPossessionNoticeData,
  "consumer-complaint-legal-notice": consumerComplaintNoticeData,
  "criminal-defamation-legal-notice": criminalDefamationData,
  "wrongful-termination-legal-notice": wrongfulTerminationData,
  "property-partition-legal-notice": propertyPartitionData,
  "child-custody-legal-notice": childCustodyData,
  "workplace-harassment-legal-notice": workplaceHarassmentData,
  "employee-misconduct-legal-notice": employeeMisconductData,
  "domestic-violence-legal-notice": domesticViolenceData,
  "breach-of-contract-legal-notice": breachOfContractData,
  "bank-loan-settlement": bankLoanSettlementData,
  "professional-fees-recovery": professionalFeesRecoveryData,
  "amenities-society-builder": amenitiesSocietyBuilderData,
};

export function getNoticeData(slug: string): NoticeTypeData | null {
  return noticeTypesData[slug] || null;
}

export function getAllNoticeSlugs(): string[] {
  return Object.keys(noticeTypesData);
}
