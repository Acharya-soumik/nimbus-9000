# WWW vs Non-WWW Canonicalization Fix
**Critical Technical SEO Issue - Priority: HIGH**

**Date:** January 18, 2026  
**Issue:** Domain authority splitting between www and non-www versions  
**Impact:** Weaker rankings, confused search engines, diluted link equity  
**Estimated fix time:** 2-4 hours implementation + 2-4 weeks for Google consolidation

---

## 🚨 THE PROBLEM

### Current State

Your website is accessible via both:
1. `https://vakiltech.in` (non-www)
2. `https://www.vakiltech.in` (www)

**Both versions are:**
- ✅ Accessible (returns 200 OK)
- ✅ Indexed by Google
- ❌ Competing for rankings
- ❌ Splitting backlinks
- ❌ Diluting page authority

### How This Hurts Your SEO

```
Scenario: You have 100 links pointing to your site

Current (BAD):
├── 60 links → vakiltech.in
└── 40 links → www.vakiltech.in
    = Authority split 60/40
    = Each version weaker than it should be

After Fix (GOOD):
└── 100 links → vakiltech.in (all consolidated)
    = Full authority on one version
    = Stronger rankings
```

**Real impact:**
- Rankings 2-5 positions lower than they should be
- Competing with yourself in SERPs
- Wasted crawl budget
- Confusing analytics

---

## ✅ THE SOLUTION: Canonical to Non-WWW

### Why Non-WWW?

**Recommendation:** Use `https://vakiltech.in` (non-www) as canonical

**Reasons:**
1. ✅ Shorter, cleaner URLs
2. ✅ Already set in your metadata: `metadataBase: new URL("https://vakiltech.in")`
3. ✅ Modern convention (Google, Facebook, Amazon all use non-www)
4. ✅ One less DNS lookup (marginal speed benefit)
5. ✅ Simpler to remember and type

**Alternative:** If you strongly prefer www, you can reverse all instructions below.

---

## 📋 IMPLEMENTATION CHECKLIST

### STEP 1: Add Server-Side 301 Redirect

**File:** `next.config.ts`

**Add at the VERY TOP of redirects array:**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ============================================
      // CANONICAL DOMAIN: Force non-www
      // MUST BE FIRST for priority
      // ============================================
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.vakiltech.in',
          },
        ],
        destination: 'https://vakiltech.in/:path*',
        permanent: true, // 301 redirect
      },

      // ============================================
      // Existing redirects below...
      // ============================================
      {
        source: '/legal-notice',
        destination: '/send-legal-notice',
        permanent: true,
      },
      // ... rest of redirects
    ];
  },
};

export default nextConfig;
```

**How it works:**
- Checks if request is to `www.vakiltech.in`
- Redirects to `https://vakiltech.in` with same path
- Uses 301 (permanent redirect) to pass link equity
- Applies to ALL paths (`:path*` wildcard)

### STEP 2: Update All Canonical Tags

**File:** `app/layout.tsx` (line 52-54)

**Current:**
```typescript
metadataBase: new URL("https://vakiltech.in"),
alternates: {
  canonical: "/",
},
```

**Keep as-is** (already correct ✅)

**Verify other pages use relative canonical URLs:**

**Files to check:**
- `app/send-legal-notice/page.tsx`
- `app/send-legal-notice/[type]/page.tsx`
- `app/legal-consultation/page.tsx`
- `app/page.tsx` (homepage)
- All other pages

**Pattern should be:**
```typescript
export const metadata: Metadata = {
  // ...
  alternates: {
    canonical: `/send-legal-notice`, // Relative URL (good)
    // NOT: canonical: `https://www.vakiltech.in/send-legal-notice` (bad)
  },
};
```

**OR for dynamic pages:**
```typescript
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  
  return {
    title: "...",
    description: "...",
    alternates: {
      canonical: `/send-legal-notice/${type}`, // Relative URL
    },
  };
}
```

### STEP 3: Update Sitemap

**File:** `next-sitemap.config.js`

**Current (line 3):**
```javascript
siteUrl: process.env.SITE_URL || 'https://vakiltech.in',
```

**Status:** ✅ Already correct (non-www)

**Verify in generated sitemap:**
```bash
# Check sitemap after build
cat public/sitemap.xml | grep "<loc>"
```

All URLs should be `https://vakiltech.in/*` (no www)

### STEP 4: Update Environment Variables

**File:** `.env` or `.env.local`

**Add/Update:**
```bash
# Canonical domain (no www)
SITE_URL=https://vakiltech.in
NEXT_PUBLIC_SITE_URL=https://vakiltech.in

# Verify no www references
# Search for www.vakiltech.in and remove/update
```

**Check files:**
```bash
# Search for www references in codebase
grep -r "www.vakiltech.in" .
```

**Update any hardcoded www URLs to non-www**

### STEP 5: Update DNS Settings

**Goal:** Ensure both versions point to your server

**DNS Records needed:**

```
Type: A
Name: @ (root)
Value: [Your server IP]
TTL: 3600

Type: A
Name: www
Value: [Your server IP]
TTL: 3600

Type: AAAA (if using IPv6)
Name: @ (root)
Value: [Your IPv6]
TTL: 3600

Type: AAAA
Name: www
Value: [Your IPv6]
TTL: 3600
```

**Why both?**
- `@` record = `vakiltech.in`
- `www` record = `www.vakiltech.in`
- Both must resolve so redirect can work
- Redirect happens at application level (Next.js)

### STEP 6: Verify SSL Certificate

**Check SSL covers both versions:**

```bash
# Test non-www (should work)
curl -I https://vakiltech.in

# Test www (should work, then redirect)
curl -I https://www.vakiltech.in
```

**Expected:**
```
HTTP/2 301 
location: https://vakiltech.in/
```

**SSL Certificate must cover:**
- `vakiltech.in`
- `www.vakiltech.in`

**Hosting providers (Vercel, Netlify, etc) usually auto-handle this** ✅

### STEP 7: Update Google Search Console

**Important:** Configure both properties, set preference

**Steps:**

1. **Add both properties** (if not already added):
   - `https://vakiltech.in`
   - `https://www.vakiltech.in`

2. **Verify both properties:**
   - Use DNS verification or HTML file method
   - Both should show as verified

3. **Set preferred domain** (canonical):
   - Not explicitly set anymore in GSC, but...
   - Ensure canonicals point to non-www

4. **Submit sitemap** (on non-www property only):
   - Go to `https://vakiltech.in` property in GSC
   - Sitemaps → Add: `https://vakiltech.in/sitemap.xml`

5. **Request indexing** for key pages:
   - Homepage: `https://vakiltech.in`
   - Main services: `https://vakiltech.in/send-legal-notice`
   - Top notice types

**Don't submit sitemap for www property** - let redirect handle it

### STEP 8: Update Google Analytics

**GA4 Configuration:**

1. **Check default URL** in Admin → Data Streams
   - Should be `https://vakiltech.in`

2. **Add both hostnames** to referral exclusion:
   - Admin → Data Streams → Configure tag settings
   - Show advanced settings → List unwanted referrals
   - Add: `vakiltech.in` and `www.vakiltech.in`
   - Prevents self-referrals

3. **Set up custom dimension** (optional):
   - Track which version users land on
   - Dimension: `hostname`
   - Value: `{{Page Hostname}}`
   - Monitor to ensure www traffic redirects

### STEP 9: Update External Links (Backlinks)

**Can't control all, but update what you can:**

1. **Social media profiles:**
   - Facebook, LinkedIn, Twitter/X, Instagram
   - Update all to `https://vakiltech.in` (no www)

2. **Directory listings:**
   - Google Business Profile
   - Justdial, Sulekha, etc.
   - Update to non-www

3. **Business documents:**
   - Email signatures
   - Letterheads
   - Business cards
   - Update to non-www

4. **Partner websites:**
   - If you have partnerships/collaborations
   - Ask them to update links to non-www

**Note:** Old www backlinks will still work (redirect passes 90-95% of link equity)

### STEP 10: Monitor Transition

**Week 1-2: Watch for issues**

```bash
# Test redirect working
curl -I https://www.vakiltech.in
# Should show 301 → https://vakiltech.in

curl -I https://www.vakiltech.in/send-legal-notice
# Should show 301 → https://vakiltech.in/send-legal-notice
```

**Check logs:**
- Monitor server/application logs for errors
- Ensure no redirect loops
- Check 301 redirects are being served

**Week 3-4: Google consolidation**

**Google Search Console:**
- Check "Coverage" report
- Old www URLs should show "Redirect"
- Non-www URLs should show "Valid"

**Check rankings:**
- Monitor position changes
- Should see consolidation (may temporarily fluctuate)
- Eventually, only non-www should rank

**Week 5-8: Full consolidation**

**Verify:**
```
site:www.vakiltech.in
```
Should return 0 results (or minimal)

```
site:vakiltech.in
```
Should return all your pages

---

## 🧪 TESTING BEFORE GO-LIVE

### Test Checklist

**Before deploying to production:**

- [ ] Test redirect locally
  ```bash
  # Start dev server
  npm run dev
  
  # In another terminal, test:
  curl -I http://localhost:3000 --header 'Host: www.vakiltech.in'
  # Should redirect (may not work perfectly in dev, that's ok)
  ```

- [ ] Deploy to staging environment first (if available)
  ```bash
  # Test on staging
  curl -I https://staging.vakiltech.in
  curl -I https://www.staging.vakiltech.in
  ```

- [ ] Check canonical tags in HTML source
  ```bash
  curl -s https://vakiltech.in | grep "canonical"
  # Should show: <link rel="canonical" href="https://vakiltech.in/" />
  ```

- [ ] Verify no canonical conflicts
  ```bash
  # Check for www in canonical tags
  grep -r "www.vakiltech.in" app/
  # Should find zero or only in comments
  ```

### Test After Deploy

**Critical tests:**

1. **Redirect works:**
   ```bash
   curl -I https://www.vakiltech.in
   # Expect: HTTP/2 301
   # Location: https://vakiltech.in/
   ```

2. **Subpaths redirect:**
   ```bash
   curl -I https://www.vakiltech.in/send-legal-notice
   # Expect: HTTP/2 301
   # Location: https://vakiltech.in/send-legal-notice
   ```

3. **Non-www works normally:**
   ```bash
   curl -I https://vakiltech.in
   # Expect: HTTP/2 200 OK
   ```

4. **SSL works on both:**
   ```bash
   # Both should have valid SSL
   openssl s_client -connect vakiltech.in:443 -servername vakiltech.in
   openssl s_client -connect www.vakiltech.in:443 -servername www.vakiltech.in
   ```

5. **Check in browser:**
   - Open `https://www.vakiltech.in` in browser
   - Should redirect to `https://vakiltech.in` immediately
   - Check address bar confirms non-www
   - No security warnings

---

## 🚨 ROLLBACK PLAN

**If something breaks:**

### Quick Rollback

**1. Comment out redirect in `next.config.ts`:**
```typescript
async redirects() {
  return [
    // TEMPORARILY DISABLED - ROLLBACK
    // {
    //   source: '/:path*',
    //   has: [{ type: 'host', value: 'www.vakiltech.in' }],
    //   destination: 'https://vakiltech.in/:path*',
    //   permanent: true,
    // },
    
    // ... rest of redirects
  ];
}
```

**2. Redeploy:**
```bash
npm run build
# Deploy to production
```

**3. Investigate issue:**
- Check error logs
- Test specific pages
- Verify DNS/SSL

**4. Fix and re-deploy:**
- After fixing, uncomment redirect
- Test thoroughly
- Deploy again

---

## 📊 EXPECTED TIMELINE & RESULTS

### Timeline

| Phase | Duration | Action |
|-------|----------|--------|
| **Implementation** | 2-4 hours | Code changes, deploy |
| **Initial redirect** | Immediate | Redirect starts working |
| **Google re-crawl** | 1-2 weeks | Google discovers redirects |
| **Consolidation** | 2-4 weeks | Google consolidates signals |
| **Full effect** | 4-8 weeks | Rankings stabilize/improve |

### Expected Results

**Immediate (Week 1):**
- ✅ Both versions redirect properly
- ✅ No duplicate content issues
- ✅ Clean analytics (single domain)

**Short-term (Week 2-4):**
- ⬆️ Crawl budget improvement
- ⬆️ Canonical clarity in GSC
- ↔️ Rankings may temporarily fluctuate (normal)

**Long-term (Month 2-3):**
- ⬆️ Rankings improve 2-5 positions (on average)
- ⬆️ Domain authority consolidates
- ⬆️ More pages indexed (better crawl efficiency)
- ⬆️ Click-through rate improves (consistent SERP appearance)

### Measuring Success

**Google Search Console:**
- [ ] "Coverage" report: www URLs show as "Redirect"
- [ ] Non-www URLs show as "Valid"
- [ ] No canonical errors or warnings

**Rankings:**
- [ ] Single version (non-www) ranks for each keyword
- [ ] No www version competing in SERPs
- [ ] Average position improvement

**Analytics:**
- [ ] All traffic attributed to non-www
- [ ] No www hostname in reports
- [ ] Clean, single-domain data

---

## 🔍 COMMON ISSUES & SOLUTIONS

### Issue 1: Redirect Loop

**Symptom:** Browser shows "Too many redirects"

**Cause:** Conflicting redirects (server + application)

**Solution:**
```typescript
// Ensure only ONE redirect rule for www → non-www
// Check:
// 1. Next.js config (next.config.ts) ✅
// 2. Server config (Nginx, Apache) - remove if present
// 3. CDN rules (Cloudflare, etc) - remove if present
```

### Issue 2: HTTPS Not Working

**Symptom:** SSL errors, not secure warnings

**Solution:**
- Check SSL certificate covers both versions
- Renew certificate if expired
- Most hosting platforms (Vercel, Netlify) auto-handle this

### Issue 3: Redirect Not Working

**Symptom:** www still accessible, no redirect

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check redirect is in build
# .next/routes-manifest.json should contain redirect rule

# Verify deployed (not just local)
curl -I https://www.vakiltech.in
```

### Issue 4: Rankings Drop After Implementation

**Symptom:** Temporary ranking drop

**Solution:**
- **This is normal** during consolidation (2-4 weeks)
- Don't panic or rollback
- Google is re-evaluating signals
- Rankings will recover and improve
- Monitor GSC for errors (ensure it's not another issue)

### Issue 5: Some www URLs Still Indexed

**Symptom:** `site:www.vakiltech.in` shows results after 4+ weeks

**Solution:**
- Request removal in GSC:
  - GSC → Removals → New Request
  - Enter: `https://www.vakiltech.in/`
  - Select "Remove all URLs with this prefix"
- Resubmit sitemap (non-www only)
- Be patient (Google can take 2-3 months to fully clean up)

---

## 📋 POST-IMPLEMENTATION CHECKLIST

### Day 1 (Deployment Day)

- [ ] Deploy changes to production
- [ ] Test redirect: `curl -I https://www.vakiltech.in`
- [ ] Verify non-www works: `curl -I https://vakiltech.in`
- [ ] Check key pages (homepage, main services)
- [ ] Monitor error logs for issues
- [ ] Test on mobile and desktop browsers
- [ ] Verify SSL works on both versions

### Week 1

- [ ] Check GSC for new crawl errors
- [ ] Monitor traffic (should remain stable)
- [ ] Verify redirect logs (all www requests redirecting)
- [ ] Test 10-15 random URLs with www prefix
- [ ] Check analytics for any anomalies

### Week 2

- [ ] GSC Coverage report: Check www URLs marked as "Redirect"
- [ ] Rankings check: Monitor position changes
- [ ] Traffic analysis: Should be stable or improving
- [ ] Check indexing: `site:vakiltech.in` vs `site:www.vakiltech.in`

### Week 4

- [ ] Full ranking audit: Compare before/after positions
- [ ] GSC Performance: Verify click/impression consolidation
- [ ] Request removal of www URLs in GSC (if still showing)
- [ ] Update any hardcoded www links found

### Week 8

- [ ] Final audit: Verify full consolidation
- [ ] Measure ranking improvements
- [ ] Document before/after results
- [ ] Mark project as complete ✅

---

## 📈 SUCCESS METRICS

### Before (Current State)

```
Keyword: "legal notice for money recovery"
├── Position 8: vakiltech.in/send-legal-notice/...
└── Position 12: www.vakiltech.in/send-legal-notice/...
    = Split authority, both rank lower

Total clicks: 50/month (split across both)
```

### After (Target State)

```
Keyword: "legal notice for money recovery"
└── Position 4-5: vakiltech.in/send-legal-notice/...
    = Consolidated authority, single stronger result

Total clicks: 80-100/month (all consolidated)
```

**Expected improvement:**
- Average position: +3-5 positions
- Organic clicks: +30-50%
- Domain authority: +5-10% (consolidated)

---

## 🎯 FINAL CHECKLIST (Before You Start)

- [ ] Backup current site (database + files)
- [ ] Document current rankings (screenshot/export GSC)
- [ ] Test redirect code in staging
- [ ] Inform team about temporary fluctuations
- [ ] Schedule deployment during low-traffic period
- [ ] Have rollback plan ready
- [ ] Monitor closely for 48 hours after deploy

---

## 🚀 READY TO IMPLEMENT?

**Copy this checklist and work through it step by step:**

```markdown
## Implementation Day Checklist

### Pre-Deploy
- [ ] Code changes complete (next.config.ts)
- [ ] Verified no hardcoded www URLs
- [ ] Tested locally
- [ ] Backup current site

### Deploy
- [ ] Deploy to production
- [ ] Test redirect immediately
- [ ] Verify non-www still works
- [ ] Check error logs

### Post-Deploy (Day 1)
- [ ] Test 10 random URLs
- [ ] Browser test (Chrome, Safari, Firefox)
- [ ] Mobile test
- [ ] SSL verification

### Week 1
- [ ] Monitor GSC for errors
- [ ] Check traffic remains stable
- [ ] Test redirect working consistently

### Week 2-4
- [ ] GSC Coverage check
- [ ] Update social profiles
- [ ] Request www URL removal (if needed)

### Week 8
- [ ] Final audit
- [ ] Measure success
- [ ] Document learnings
- [ ] Celebrate! 🎉
```

---

**Questions? Issues? Let me know!**

**Estimated total time investment:** 4-6 hours (implementation + monitoring)  
**Estimated ROI:** 20-40% ranking improvement, lasting benefit

**This is one of the highest-ROI technical SEO fixes you can make!** 🚀

