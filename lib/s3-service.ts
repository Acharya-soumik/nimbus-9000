import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Bundle type to S3 file key mapping
// For bundles that include multiple files, use an array
export const BUNDLE_FILE_MAPPING = {
  "hindi-english": ["3500-Legal-Drafts.zip"], // Hindi + English bundle
  "marathi-only": ["Marathi-Bundle (2).zip"], // Marathi only
  "hindi-english-marathi": ["3500-Legal-Drafts.zip", "Marathi-Bundle (2).zip"], // Both bundles
} as const;

export type BundleType = keyof typeof BUNDLE_FILE_MAPPING;

/**
 * Generate pre-signed URLs for downloading a legal bundle from S3
 * @param bundleType - The type of bundle to download
 * @param expiresIn - URL expiration time in seconds (default: 1 hour)
 * @returns Array of pre-signed URLs with file information
 */
export async function generateBundleDownloadUrls(
  bundleType: BundleType,
  expiresIn: number = 3600 // 1 hour default
): Promise<Array<{ url: string; fileName: string }>> {
  // Validate environment variables
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error("AWS credentials not configured");
  }

  if (!process.env.AWS_S3_BUCKET_NAME || !process.env.AWS_S3_REGION) {
    throw new Error("AWS S3 configuration not complete");
  }

  // Create S3 client
  const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  // Get the file keys for the bundle type
  const fileKeys = BUNDLE_FILE_MAPPING[bundleType];

  try {
    // Generate pre-signed URL for each file
    const urlPromises = fileKeys.map(async (fileKey) => {
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileKey,
        ResponseContentDisposition: `attachment; filename="${fileKey}"`,
      });

      const url = await getSignedUrl(s3Client, command, {
        expiresIn,
      });

      return { url, fileName: fileKey };
    });

    return await Promise.all(urlPromises);
  } catch (error) {
    console.error("Error generating pre-signed URLs:", error);
    throw new Error("Failed to generate download URLs");
  }
}

/**
 * Verify that the S3 credentials and configuration are valid
 * @returns true if configuration is valid
 */
export function validateS3Configuration(): boolean {
  return !!(
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.AWS_S3_BUCKET_NAME &&
    process.env.AWS_S3_REGION
  );
}
