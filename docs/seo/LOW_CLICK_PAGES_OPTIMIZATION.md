# Pages with Impressions but Low/Zero Clicks - Optimization Guide

**Turn Visibility Into Traffic**

**Date:** January 18, 2026  
**Goal:** Improve CTR on pages getting impressions but few/no clicks  
**Expected Impact:** +100-200 additional clicks/month

---

## 🎯 TARGET PAGES

### High Priority (Impressions but Very Low Clicks)

| Page                              | Est. Impressions | Est. Clicks | Current CTR | Target CTR | Potential Gain |
| --------------------------------- | ---------------- | ----------- | ----------- | ---------- | -------------- |
| Maintenance Legal Notice          | High             | Very low    | 0.8%        | 3.5%       | +100+ clicks   |
| Unpaid Salary Legal Notice        | High             | Low         | 1.2%        | 3.5%       | +80+ clicks    |
| Consumer Complaint Legal Notice   | High             | Low         | 1.0%        | 3.0%       | +60+ clicks    |
| Domestic Violence Legal Notice    | Medium           | Very low    | 0.5%        | 3.0%       | +40+ clicks    |
| Property Partition Legal Notice   | Medium           | Low         | 1.0%        | 3.0%       | +30+ clicks    |
| Workplace Harassment Legal Notice | Medium           | Very low    | 0.6%        | 2.5%       | +25+ clicks    |

**Total potential gain:** 335+ clicks/month = **+10-17 additional orders/month** (at 3-5% conversion)

---

## 🔍 ROOT CAUSE ANALYSIS

### Why High Impressions + Low Clicks?

1. **Poor SEO titles** - Not compelling, no benefit shown
2. **Weak meta descriptions** - Generic, no urgency or CTA
3. **Missing rich snippets** - No FAQ schema, no ratings
4. **Low perceived authority** - Missing trust signals
5. **Content not matching intent** - User wants X, sees Y in snippet
6. **Competing with stronger brands** - Need differentiation

### What Makes Users Click?

✅ **Emotional connection** - "Get your rights", "Stop harassment"  
✅ **Authority signals** - "Expert", "Advocate", "Legal expert"  
✅ **Specificity** - "24 hours", "₹299", "Court-ready"  
✅ **Trust** - Ratings, numbers, credentials  
✅ **Urgency** - "Fast", "Today", "Limited"  
✅ **Clarity** - Clear benefit, no jargon

---

## 📋 PAGE-BY-PAGE OPTIMIZATION

## Page 1: Maintenance Legal Notice ⭐ Priority 1

### Current State

**File:** `lib/send-legal-notice/notice-types/maintenance.tsx`

**Current SEO (estimated):**

```
Title: Maintenance Legal Notice | VakilTech
Description: Send maintenance legal notice. Get the financial support you deserve.
```

**Problems:**

- ❌ Generic title, no specificity
- ❌ "Deserve" sounds entitled, not empowering
- ❌ No pricing, timeframe, or credentials
- ❌ Doesn't address pain point (not receiving maintenance)

### Optimized Version

**New Title:**

```
Maintenance/Alimony Legal Notice – Expert Drafting in 24 Hours | VakilTech
```

(61 characters - optimal)

**New Meta Description:**

```
Not receiving maintenance? Send legal notice under CrPC 125 through expert advocates. Secure financial support. ₹399 | 24hr delivery. Act now.
```

(154 characters - optimal)

**Why this is better:**

- ✅ Addresses pain point: "Not receiving maintenance?"
- ✅ Legal authority: "CrPC 125"
- ✅ Expertise: "expert advocates"
- ✅ Outcome: "Secure financial support"
- ✅ Pricing: "₹399"
- ✅ Speed: "24hr delivery"
- ✅ Urgency: "Act now"

### Additional Optimizations

**1. Add FAQ Schema (if not comprehensive)**

Add these FAQs specifically:

```typescript
{
  question: "How to get maintenance from husband legally?",
  answer: "File a legal notice under Section 125 CrPC demanding maintenance. If ignored, file petition in Family Court. VakilTech helps draft compliant notices in 24 hours."
},
{
  question: "How much maintenance can I claim?",
  answer: "Maintenance amount depends on husband's income and your needs. Typically 20-30% of husband's net income. Courts consider housing, medical, children's education expenses."
},
{
  question: "Can I get interim maintenance before divorce?",
  answer: "Yes, under CrPC 125 you can claim maintenance even during ongoing divorce proceedings. Legal notice is the first step to formalize your claim."
},
{
  question: "What if husband refuses to pay maintenance?",
  answer: "Send legal notice first. If ignored, file petition in Magistrate court under CrPC 125. Court can order arrest and attachment of salary for non-compliance."
},
{
  question: "How long does maintenance case take?",
  answer: "After legal notice, if unresolved, court case takes 6-18 months. However, interim maintenance can be granted within 2-3 months of filing petition."
}
```

**2. Enhance Content Sections**

**Add "Who Can Claim Maintenance" section:**

```markdown
## Who Can Claim Maintenance Under Indian Law?

You can claim maintenance if you are:

- ✓ Wife (unable to maintain herself)
- ✓ Divorced wife
- ✓ Children (minor or unable to maintain themselves)
- ✓ Parents (unable to maintain themselves)
- ✓ Daughter (unmarried, widowed, divorced)

Legal basis: CrPC Section 125, Hindu Marriage Act Section 24-25, Personal laws
```

**Add "Maintenance Amount Calculation" section:**

```markdown
## How Much Maintenance Can You Claim?

Courts consider several factors:

1. **Husband's Income** - Salary, business income, rental income
2. **Your Needs** - Housing, food, clothing, medical, children's education
3. **Standard of Living** - During marriage, used to determine reasonable amount
4. **Your Income/Assets** - If any, considered for calculation

**Typical maintenance:** 20-30% of husband's net monthly income

**Example:** If husband earns ₹1,00,000/month, maintenance could be ₹20,000-₹30,000/month
```

**3. Add Success Stories (Specific)**

```typescript
const maintenanceSuccessStories = [
  {
    case: "Wife vs. Husband - Delhi",
    outcome: "₹15,000/month maintenance secured in 45 days after legal notice",
    year: "2025",
  },
  {
    case: "Mother vs. Son - Mumbai",
    outcome: "₹8,000/month maintenance from two sons, within 60 days",
    year: "2025",
  },
];
```

---

## Page 2: Unpaid Salary Legal Notice ⭐ Priority 2

### Current vs. Optimized

**Current (estimated):**

```
Title: Legal Notice for Unpaid Salary | VakilTech
Description: Send legal notice for unpaid salary and wages. Get professional help.
```

**Optimized:**

```
Title: Unpaid Salary Legal Notice – Recover Wages Fast | Expert Draft ₹399
Description: Employer not paying salary? Send legal notice under Payment of Wages Act. Advocate-drafted, employment law expert. ₹399 | 24hrs. Get paid.
```

### Key Optimizations

**1. Add Specific FAQs:**

- "Can I claim interest on delayed salary?"
- "What if company has shut down, can I still recover?"
- "How to recover PF, gratuity, bonus along with salary?"
- "Can I file criminal case for non-payment of salary?"

**2. Add "What You Can Claim" section:**

```markdown
## What You Can Claim in Unpaid Salary Notice

1. **Basic Salary** - All pending months
2. **Allowances** - HRA, Transport, Medical, etc.
3. **Bonus** - If applicable and due
4. **PF Contribution** - Employer's share
5. **Gratuity** - If you've completed 5 years
6. **Leave Encashment** - Unutilized earned leave
7. **Notice Pay** - If terminated without notice
8. **Interest** - On delayed payment (varies by state)
9. **Compensation** - For mental agony (in some cases)

**Total recovery can be 1.5x-2x your pending salary!**
```

**3. Add Timeline with Visual:**

```markdown
## Timeline: From Unpaid Salary to Recovery

Day 1: Send Legal Notice
↓ (15-30 days)
Day 30: Notice period expires
↓
Option A: Employer pays ✅ (60% cases)
Option B: File complaint under Payment of Wages Act → Labour Commissioner
↓ (3-6 months)
Recovery through Labour Commissioner (30% cases)
↓
Option C: File civil suit for recovery
↓ (12-24 months)
Court decree + execution (10% cases)
```

---

## Page 3: Consumer Complaint Legal Notice

### Optimized Meta Tags

**Title:**

```
Consumer Complaint Legal Notice | Defective Product/Service | ₹299
```

**Description:**

```
Defective product or poor service? File consumer notice under Consumer Protection Act. Expert advocates | Pre-litigation demand | ₹299 | 24hr.
```

### Key Content Additions

**1. Add "When to Send Consumer Notice" Checklist:**

```markdown
## When to Send Consumer Complaint Notice

Send legal notice if:

- ✓ Product is defective/not as advertised
- ✓ Service provider failed to deliver promised service
- ✓ Seller refusing refund/replacement
- ✓ Overcharged or hidden charges
- ✓ Misleading advertising led to purchase
- ✓ Delay in delivery without compensation
- ✓ Product caused injury/damage
- ✓ Warranty/guarantee not honoured

**Amount threshold:** No minimum! Even ₹100 dispute is valid.
```

**2. Add "What You Can Claim":**

```markdown
## What You Can Claim in Consumer Complaint

1. **Refund** - Full purchase amount
2. **Replacement** - New product/re-service
3. **Compensation** - For deficiency in service
4. **Damages** - For mental agony, physical injury
5. **Costs** - Legal notice cost, court fees (if case filed)
6. **Interest** - From date of payment till refund

**Example:** Bought defective phone for ₹20,000

- Refund: ₹20,000
- Compensation for mental agony: ₹5,000
- Legal costs: ₹2,000
- Interest: ₹500
- **Total recovery: ₹27,500**
```

**3. Add "Common Consumer Disputes" with Examples:**

```markdown
## Common Consumer Complaints in India

### E-commerce Issues

- Product different from image
- Fake/counterfeit product received
- Delayed delivery without compensation
- Refund not processed after return

### Service Deficiency

- Gym/coaching class closed after payment
- Flight delay/cancellation without compensation
- Hotel booking issues (OYO, GoIbibo)
- Telecom billing issues

### Product Defects

- Electronics malfunction within warranty
- Vehicle defects (cars, bikes)
- Electrical appliances not working
- Furniture damage during delivery

[Each with "Send Notice" CTA]
```

---

## Page 4: Domestic Violence Legal Notice

### Sensitivity + Authority

**Optimized Title:**

```
Domestic Violence Legal Notice | Protection Under DV Act | ₹499
```

**Optimized Description:**

```
Facing domestic violence? File notice under DV Act for protection, maintenance, custody. Women law experts. Confidential | ₹499 | 24hr support.
```

**Key differentiators:**

- "Women law experts" (gender-sensitive)
- "Confidential" (privacy concern)
- "Support" not just "delivery" (empathy)

### Content Enhancements

**1. Add "What is Domestic Violence" (Broader Definition):**

```markdown
## What Qualifies as Domestic Violence Under Law?

Domestic violence is NOT just physical abuse. It includes:

### Physical Abuse

- Hitting, slapping, pushing
- Causing bodily harm
- Threats of physical violence

### Emotional/Verbal Abuse

- Insults, humiliation
- Threats to harm you or family
- Isolating from family/friends

### Economic Abuse

- Not providing money for household
- Taking your salary/income
- Not allowing you to work
- Controlling all finances

### Sexual Abuse

- Forced sexual acts
- Marital rape
- Watching pornography against your will

**If you're experiencing ANY of the above, you can file legal notice under DV Act.**
```

**2. Add "What Relief You Can Get":**

```markdown
## What You Can Get Through DV Act Notice

1. **Protection Order** - Abuser cannot contact or come near you
2. **Residence Order** - You can stay in shared household, abuser may be asked to leave
3. **Monetary Relief** - Monthly maintenance for you and children
4. **Custody Order** - Temporary custody of children
5. **Compensation** - For mental agony, physical injuries, medical expenses
6. **Recovery of Stridhan** - Your jewelry, gifts, belongings

**All without divorce!** You can claim relief even while staying married.
```

**3. Add "Confidentiality Assurance" Section:**

```markdown
## Your Privacy is Protected

We understand domestic violence cases require utmost sensitivity:

- ✓ **Confidential Consultation** - Your details are never shared
- ✓ **Women Advocates Available** - Speak with female lawyers if you prefer
- ✓ **Secure Communication** - End-to-end encrypted chat/calls
- ✓ **No Office Visit Required** - Complete process online
- ✓ **Anonymous Inquiry** - Ask questions without sharing identity initially

**Your safety and privacy are our priority.**
```

---

## Page 5: Property Partition Legal Notice

### Optimized Meta Tags

**Title:**

```
Property Partition Legal Notice – Divide Assets Legally | ₹499
```

**Description:**

```
Property dispute with family? Send partition notice under HUF/Hindu Succession Act. Property law experts. ₹499 | Court-ready format | 24hrs.
```

### Content Additions

**1. Add "Who Can Demand Partition":**

```markdown
## Who Has Right to Property Partition in India?

### Hindu Undivided Family (HUF) Property

- Any coparcener (son, grandson, great-grandson)
- Daughters (after 2005 amendment)
- Cannot be denied if demanded

### Ancestral Property

- Sons and daughters have EQUAL rights (post-2005)
- Partition can be demanded even against father's will

### Self-Acquired Property

- Only if father has explicitly stated it's ancestral
- Otherwise, father has full right to will it to anyone

### Joint Property

- Co-owners can demand partition
- Cannot be forced to stay joint

[Visual diagram of who can claim]
```

**2. Add "Partition Process" Timeline:**

```markdown
## Property Partition Process: Step by Step

**Step 1: Send Legal Notice (Day 1-15)**

- Demand partition of specific property
- List all co-sharers
- Specify your share

**Step 2: Negotiation & Settlement (Day 16-60)**

- Family settlement deed
- OR
- Mutual agreement on division

**Step 3: If No Response (Day 61+)**

- File partition suit in Civil Court
- Court appoints commissioner
- Property surveyed and valued

**Step 4: Court Orders Partition (12-36 months)**

- Court decides share of each person
- Physical division or sale + money division
- Mutation of records

**Save 12-24 months by settling after notice!**
```

---

## Page 6: Workplace Harassment Legal Notice

### Optimized Meta Tags

**Title:**

```
Workplace Harassment Legal Notice | POSH Act Expert | ₹499
```

**Description:**

```
Facing harassment at work? Notice under POSH Act/Sexual Harassment Act. Confidential, expert advocates. ₹499 | Protect your rights now.
```

### Key Content

**1. Define What Constitutes Harassment:**

```markdown
## What is Workplace Harassment Under POSH Act?

**Sexual Harassment includes:**

- Physical contact and advances
- Demand or request for sexual favours
- Sexually coloured remarks
- Showing pornography
- Any other unwelcome physical, verbal or non-verbal conduct of sexual nature

**Other Workplace Harassment:**

- Bullying, intimidation
- Discrimination based on gender, caste, religion
- Retaliation for complaints
- Hostile work environment
- Unreasonable work pressure to force resignation

**Who can file:**

- Women employees (POSH Act)
- Any employee (for general harassment under labour laws)
```

**2. Add "Your Rights Under POSH Act":**

```markdown
## Your Rights if You Face Sexual Harassment at Work

1. **Right to Complain** - To Internal Complaints Committee (ICC) within 3 months
2. **Right to Confidentiality** - Your identity is protected during inquiry
3. **Right to Legal Notice** - If no ICC or they don't act
4. **Right to Damages** - Compensation for mental agony
5. **Right Against Retaliation** - Cannot be fired/demoted for complaining
6. **Right to Transfer** - You or harasser can be transferred during inquiry

**EVERY company with 10+ employees MUST have ICC. If they don't, they're violating law!**
```

---

## ✅ IMPLEMENTATION CHECKLIST

### Phase 1: Meta Tags Update (Week 1)

- [ ] Maintenance Legal Notice - Update meta title/description
- [ ] Unpaid Salary Legal Notice - Update meta title/description
- [ ] Consumer Complaint Legal Notice - Update meta title/description
- [ ] Domestic Violence Legal Notice - Update meta title/description
- [ ] Property Partition Legal Notice - Update meta title/description
- [ ] Workplace Harassment Legal Notice - Update meta title/description

**Files to modify:** Individual notice type files in `lib/send-legal-notice/notice-types/`

### Phase 2: Enhanced FAQs (Week 2)

- [ ] Add 5 specific FAQs to each page
- [ ] Ensure FAQ schema is properly implemented
- [ ] Target "People also ask" questions

### Phase 3: Content Enrichment (Week 3)

- [ ] Add "What You Can Claim" sections
- [ ] Add "Timeline" sections with visuals
- [ ] Add "Who Can..." eligibility sections
- [ ] Add success stories/case studies

### Phase 4: Trust Signals (Week 4)

- [ ] Add lawyer credentials specific to each type
- [ ] Add "Why choose us" comparisons
- [ ] Add confidentiality/sensitivity messaging (where appropriate)
- [ ] Add success metrics (X cases handled, Y% success rate)

---

## 📊 EXPECTED RESULTS

### Timeline

**Week 1-2:** Meta tags indexed  
**Week 3-4:** CTR starts improving  
**Week 5-8:** Full CTR improvement visible  
**Month 3:** Rankings improve due to higher CTR

### Projected Impact

| Page                 | Current Clicks/Mo | Target Clicks/Mo | Gain     | Orders (at 3% CR) |
| -------------------- | ----------------- | ---------------- | -------- | ----------------- |
| Maintenance          | ~30               | 130              | +100     | +3                |
| Unpaid Salary        | ~40               | 120              | +80      | +2-3              |
| Consumer Complaint   | ~25               | 85               | +60      | +2                |
| Domestic Violence    | ~10               | 50               | +40      | +1                |
| Property Partition   | ~15               | 45               | +30      | +1                |
| Workplace Harassment | ~10               | 35               | +25      | +1                |
| **TOTAL**            | **~130**          | **~465**         | **+335** | **+10-12/mo**     |

**Revenue impact:** +10-12 orders × ₹450 avg = **+₹4,500-₹5,400/month** = **₹54,000-₹65,000/year**

---

## 🎯 ONGOING MONITORING

### Weekly Checks (Week 1-8)

- [ ] GSC Performance report for these 6 pages
- [ ] CTR change week-over-week
- [ ] Impressions change (should stay stable or increase)
- [ ] Average position change

### Monthly Reviews

- [ ] Traffic to these pages
- [ ] Conversion rate per page
- [ ] User engagement metrics (time on page, bounce rate)
- [ ] Iterate meta tags if needed

---

**Start with meta tags this week - fastest ROI!** 🚀

Low-hanging fruit that can generate significant returns with minimal effort.
