# Quick Reference: Notice Type Priority & Question Counts

## Implementation Priority Order

### **Phase 1 (MVP - Week 1-2):**
Launch with these 3 notice types first:

| Notice Type | Questions | Time | Complexity | Business Value |
|-------------|-----------|------|------------|----------------|
| 1. Money Recovery | 10 | 3-4min | Medium | ⭐⭐⭐⭐⭐ High demand |
| 2. Cheque Bounce | 9 | 4min | High | ⭐⭐⭐⭐⭐ High demand + urgent |
| 3. Tenant/Landlord | 11 | 4min | Medium | ⭐⭐⭐⭐ High demand |

### **Phase 2 (Week 3-4):**
Add these 2:

| Notice Type | Questions | Time | Complexity | Business Value |
|-------------|-----------|------|------------|----------------|
| 4. Unpaid Salary | 10 | 3-4min | Medium | ⭐⭐⭐⭐ Common issue |
| 5. Consumer Complaint | 10 | 3-4min | Medium | ⭐⭐⭐⭐ Common issue |

### **Phase 3 (Week 5-6):**
Next 5 types:

6. Builder/Real Estate (8 questions, 3min)
7. Divorce & Maintenance (9 questions, 4min)
8. Criminal Defamation (8 questions, 3min)
9. Breach of Contract (8 questions, 3min)
10. Insurance Dispute (8 questions, 3min)

### **Phase 4 (Week 7+):**
Remaining 5 types:

11. Civil Defamation (8 questions)
12. Property Partition (8 questions)
13. Child Custody (9 questions)
14. IP Infringement (8 questions)
15. Partnership Dispute (8 questions)

---

## Critical Questions by Notice Type

### Quick lookup: "What MUST we ask?"

#### Money Recovery
✅ **MUST ASK:**
1. Written agreement exists? (weight: 25)
2. Payment proof type (weight: 20)
3. Repayment date (weight: 15) → Affects limitation
4. Within 3-year limitation? (weight: 15) → CRITICAL

#### Cheque Bounce  
✅ **MUST ASK:**
1. Bank memo received? (weight: 25) → NO memo = NO case
2. Bank memo date (weight: 5) → Starts 30-day clock
3. Within 30-day window? (weight: 25) → AUTO-CALCULATE
4. Cheque presented within validity? (weight: 15)
5. Proof of underlying debt (weight: 10)

#### Tenant/Landlord
✅ **MUST ASK:**
1. Agreement type (weight: 20)
2. Months of rent due (weight: 15)
3. State location (weight: 5) → Affects jurisdiction
4. Eviction grounds (weight: 15)

#### Unpaid Salary
✅ **MUST ASK:**
1. Employer type (weight: 10)
2. Employment proof (weight: 20)
3. Previous payment method (weight: 15)
4. Months unpaid (weight: 10)

#### Consumer Complaint
✅ **MUST ASK:**
1. Purchase proof (weight: 25) → NO proof = weak case
2. Purchase amount (weight: 5) → Determines forum
3. Warranty status (weight: 15)
4. Complained to seller before? (weight: 15) → REQUIRED

---

## Scoring Weight Distribution

### Standard distribution across all types:

```
Evidence Quality:     40 points (40%)
  ├─ Primary docs:    20-30 points
  └─ Secondary proof:  10-20 points

Procedural Compliance: 30 points (30%)
  ├─ Timelines met:    15-20 points
  └─ Formalities:      10-15 points

Timeline Status:      20 points (20%)
  ├─ Limitation:       10-15 points
  └─ Deadlines:        5-10 points

Documentation:        10 points (10%)
  └─ Completeness:     10 points
```

---

## Conditional Logic Patterns

### Common patterns to implement:

#### 1. **Evidence Upload (show_if):**
```json
{
  "key": "agreement_upload",
  "show_if": {"written_agreement_exists": true}
}
```

#### 2. **Limitation Period Check (computed):**
```json
{
  "key": "within_limitation",
  "type": "computed",
  "computation": "DATE_DIFF(TODAY, cause_of_action_date) <= 1095"
}
```

#### 3. **Critical Timeline Warning:**
```json
{
  "key": "deadline_check",
  "triggers_warning_if_false": "🚨 URGENT: Deadline approaching!"
}
```

#### 4. **Multi-Select Averaging:**
```json
{
  "key": "evidence_types",
  "type": "multi_select",
  "scoring": "AVERAGE(selected_score_multipliers)"
}
```

---

## Heuristic Rules Summary

### Apply AFTER base scoring:

#### Money Recovery:
```javascript
if (written_agreement_exists) score = Math.max(score, 45);
if (!within_limitation && !recent_acknowledgment) score = Math.min(score, 25);
if (payment_proof === 'bank_transfer') score += 5;
```

#### Cheque Bounce:
```javascript
if (bank_memo_received) score = Math.max(score, 40);
if (missed_30_day_window) score = Math.min(score, 20);
if (payment_made_within_15_days) score = 0; // Case over
if (!cheque_validity) score = Math.min(score, 40);
```

#### Tenant/Landlord:
```javascript
if (registered_agreement) score += 10;
if (rent_due_months >= 6) score += 5;
if (rent_control_act_applies) score *= 0.9; // More complex
```

#### Unpaid Salary:
```javascript
if (employer_type === 'registered_company') score += 5;
if (labour_dept_complaint) score += 10;
if (!employment_proof) score = Math.min(score, 30);
```

#### Consumer Complaint:
```javascript
if (!purchase_proof || purchase_proof === 'no_proof') score = Math.min(score, 20);
if (under_warranty) score += 10;
if (!complained_before) score -= 15; // Required step
```

---

## File Upload Configuration

### Per notice type:

| Notice Type | Max Files | File Types | Max Size | Required? |
|-------------|-----------|------------|----------|-----------|
| All types | 5 | PDF, JPG, PNG, DOCX | 10MB each | Optional* |

\* File upload affects score but is not mandatory to complete calculator

### File validation rules:
- Virus scan all uploads
- Hash and store with session_id
- Tag file type (invoice, agreement, bank_statement, etc.)
- Allow naming/describing each file
- Show in final PDF report

---

## Timeline Calculations Required

### Implement these date utilities:

#### 1. **Limitation Period Check:**
```typescript
function isWithinLimitation(
  causeOfActionDate: Date,
  limitationPeriodDays: number
): boolean {
  const daysPassed = dateDiff(today(), causeOfActionDate);
  return daysPassed <= limitationPeriodDays;
}
```

#### 2. **Cheque Bounce Windows:**
```typescript
function calculateChequeBounceTimeline(bankMemoDate: Date) {
  return {
    demandNoticeDeadline: addDays(bankMemoDate, 30),
    drawerPaymentDeadline: addDays(demandNoticeSentDate, 15),
    complaintFilingDeadline: addDays(drawerPaymentDeadline, 30)
  };
}
```

#### 3. **Recommended Action Date:**
```typescript
function getRecommendedActionDate(
  limitationExpiry: Date,
  bufferDays: number = 90
): Date {
  return subtractDays(limitationExpiry, bufferDays);
}
```

---

## API Endpoints Needed

### Minimum viable API:

```
GET  /api/calculator/notice-types
     → Returns list of available notice types

GET  /api/calculator/questions/:noticeType
     → Returns question JSON for specific type

POST /api/calculator/session/create
     → Creates new calculation session

POST /api/calculator/session/:id/answer
     → Saves answer to question

POST /api/calculator/session/:id/calculate
     → Triggers score calculation, returns result

GET  /api/calculator/session/:id/result
     → Returns calculated result

GET  /api/calculator/session/:id/pdf
     → Downloads result PDF

POST /api/calculator/session/:id/upload
     → Uploads evidence file

GET  /api/admin/sessions
     → Lists sessions for lawyer review (admin only)
```

---

## Testing Checklist

### For each notice type:

- [ ] All questions render correctly
- [ ] Conditional logic works (show_if)
- [ ] Date calculations accurate
- [ ] Score in expected range (0-100)
- [ ] Confidence level correct
- [ ] Risk factors identified
- [ ] Strength factors shown
- [ ] Timeline dates calculated
- [ ] CTA routing correct
- [ ] PDF generates
- [ ] File upload works
- [ ] Mobile responsive
- [ ] Edge cases handled:
  - [ ] All "No" answers
  - [ ] All "Yes" answers
  - [ ] Mixed answers
  - [ ] Partial completion
  - [ ] Beyond limitation
  - [ ] Missing critical data

---

## Sample Test Cases

### Money Recovery - Strong Case (Expected: 75-85):
```
written_agreement_exists: true
payment_proof: bank_transfer
amount_owed: 50000
repayment_date_passed: 2024-01-01
within_limitation: true
borrower_address_confirmed: true
```

### Money Recovery - Weak Case (Expected: 20-30):
```
written_agreement_exists: false
payment_proof: cash_no_receipt
within_limitation: false
borrower_acknowledged_recently: false
```

### Cheque Bounce - Very Strong (Expected: 85-95):
```
bank_memo_received: true
bank_memo_date: 2024-12-15
demand_notice_sent_within_30_days: true
cheque_presented_within_validity: true
dishonor_reason: insufficient_funds
proof_of_debt_underlying: written_agreement
```

### Cheque Bounce - Dead Case (Expected: 0):
```
drawer_made_payment_within_15_days: true
```

---

This quick reference should help developers implement the calculator efficiently! 🚀
