import { z } from 'zod';

// Lead form validation schema
export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsappNumber: z.string().min(1, 'Phone number is required'),
  location: z.string().min(1, 'City is required'),
  service: z.enum(['legal-notice', 'legal-consultation']),
  description: z.string().optional().or(z.literal('')),
  legalNoticeType: z.string().optional().or(z.literal('')),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
