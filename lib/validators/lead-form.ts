import { z } from 'zod';

// Lead form validation schema
export const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsappNumber: z.string().min(1, 'Phone number is required'),
  location: z.string().min(1, 'City is required'),
  service: z.enum([
    'legal-notice', 
    'legal-consultation', 
    'legal-drafts-bundle', 
    'agreement-drafting', 
    'legal-notice-for-money-recovery',
    'fssai-registration',
    'trade-license',
    'gst-registration',
    'itr-filing'
  ]),
  description: z.string().max(1000, 'Description must be less than 1000 characters').optional().or(z.literal('')),
  legalNoticeType: z.string().optional().or(z.literal('')),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
