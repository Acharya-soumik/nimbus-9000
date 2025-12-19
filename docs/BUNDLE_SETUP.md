# Legal Drafts Bundle - Setup Guide

This document provides instructions for setting up and deploying the Legal Drafts Bundle feature.

## Overview

The Legal Drafts Bundle feature allows users to purchase and download a collection of 3500+ legal templates in multiple languages (Hindi, English, Marathi).

## Architecture

1. **Frontend**: Bundle landing page with payment integration
2. **Payment**: Razorpay integration for secure payments
3. **File Storage**: AWS S3 for hosting bundle files
4. **Download**: Presigned URLs with 1-hour expiration
5. **Database**: Supabase for order tracking

## Prerequisites

- Node.js 18+ and npm installed
- AWS account with S3 bucket configured
- Razorpay account (test/production keys)
- Supabase project set up

## Environment Variables

Add the following environment variables to your `.env` file:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-secret

# AWS S3 Configuration
AWS_S3_REGION=ap-south-1
AWS_S3_BUCKET_NAME=vt-bundles
AWS_ACCESS_KEY_ID=your-aws-access-key-id
AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
```

## S3 Bucket Setup

### 1. Create S3 Bucket

1. Go to AWS S3 Console
2. Create a new bucket named `vt-bundles` (or your preferred name)
3. Region: `ap-south-1` (Mumbai)
4. Block all public access (we'll use presigned URLs)

### 2. Upload Bundle Files

Upload the following files to your S3 bucket:

- `3500-Legal-Drafts.zip` (Hindi + English bundle)
- `Marathi-Bundle (2).zip` (Marathi bundle)

File structure in S3:
```
vt-bundles/
├── 3500-Legal-Drafts.zip
└── Marathi-Bundle (2).zip
```

### 3. IAM User Setup

Create an IAM user with S3 read permissions:

1. Go to IAM Console
2. Create new user (e.g., `vt-bundle-downloader`)
3. Attach policy with S3 read permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::vt-bundles/*"
    }
  ]
}
```

4. Generate access keys
5. Add keys to your `.env` file

### 4. CORS Configuration (Optional)

If you need CORS for browser downloads, add this to your bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["https://vakiltech.in", "http://localhost:3000"],
    "ExposeHeaders": ["Content-Length", "Content-Type"]
  }
]
```

## Database Schema

Ensure your Supabase `leads` table has the following columns:

```sql
- id: uuid (primary key)
- name: text
- whatsapp_number: text
- location: text
- service: text (include 'legal-drafts-bundle')
- service_details: text (stores bundle type: hindi-english, marathi-only, etc.)
- payment_status: text (pending, advance_paid, paid)
- payment_id: text (Razorpay payment ID)
- payment_amount: integer (amount in paise)
- status: text (new, paid_customer)
- custom_id: text
- created_at: timestamp
- updated_at: timestamp
```

## Testing

### Test Payment Flow

1. Use Razorpay test mode credentials
2. Visit: `http://localhost:3000/legal-drafts-bundle`
3. Select a bundle
4. Click "Buy Now"
5. Use Razorpay test card: `4111 1111 1111 1111`
6. Verify redirect to success page
7. Test download functionality

### Test Download API

```bash
# Health check
curl http://localhost:3000/api/download-bundle

# Generate download URL
curl -X POST http://localhost:3000/api/download-bundle \
  -H "Content-Type: application/json" \
  -d '{"bundleType":"hindi-english-marathi","transactionId":"test_123"}'
```

## Deployment Checklist

- [ ] AWS S3 bucket created and files uploaded
- [ ] IAM user created with S3 read permissions
- [ ] Environment variables added to production
- [ ] Razorpay keys switched to production mode
- [ ] Test complete payment flow in production
- [ ] Verify S3 presigned URLs work
- [ ] Check download expiration (1 hour)
- [ ] Monitor error logs for first few orders
- [ ] Set up Razorpay webhook for payment notifications

## Bundle Configuration

Bundle types and file mappings are defined in `lib/s3-service.ts`:

```typescript
export const BUNDLE_FILE_MAPPING = {
  "hindi-english": ["3500-Legal-Drafts.zip"],
  "marathi-only": ["Marathi-Bundle (2).zip"],
  "hindi-english-marathi": ["3500-Legal-Drafts.zip", "Marathi-Bundle (2).zip"],
};
```

Pricing is defined in `lib/payment-config.ts`:

```typescript
- Hindi + English: ₹357 (35700 paise)
- Marathi Only: ₹315 (31500 paise)
- All Three: ₹499 (49900 paise)
```

## Troubleshooting

### Download URLs not generating

- Check AWS credentials in environment variables
- Verify S3 bucket name and region
- Check IAM user permissions
- Look for errors in server logs

### Payment verification fails

- Check Razorpay signature verification
- Verify payment webhook is configured
- Check network connectivity to Razorpay API
- Review payment verification logs

### Files not downloading

- Check presigned URL expiration (1 hour)
- Verify S3 bucket CORS if needed
- Test URL directly in browser
- Check browser console for errors

## Support

For issues or questions:
- Email: support@vakiltech.in
- Phone: +91 70476 83995
- WhatsApp: +91 70476 83995

## Routes

- Landing page: `/legal-drafts-bundle`
- Success page: `/legal-drafts-bundle-success?bundle=hindi-english&transaction_id=pay_xxx&amount=357`
- Download API: `/api/download-bundle` (POST)

## Security Notes

1. **Never commit AWS credentials** to version control
2. **Use presigned URLs** - never expose direct S3 URLs
3. **Verify payment** before generating download links
4. **Set URL expiration** to prevent abuse (currently 1 hour)
5. **Log download requests** for analytics and security
6. **Use HTTPS** in production

## Performance

- Presigned URLs are generated on-demand (no caching)
- Downloads are staggered (300ms delay between files)
- S3 files should be optimized (compressed ZIP files)
- Consider CloudFront CDN for faster downloads (optional)

## Analytics

Track these events:
- Bundle page views
- Bundle selection changes
- Buy Now clicks
- Payment success/failure
- Download button clicks
- Download completions

## Future Enhancements

- [ ] Email delivery of download links
- [ ] Download link expiration notifications
- [ ] Bundle customization options
- [ ] Subscription model for updates
- [ ] Admin dashboard for bundle management
