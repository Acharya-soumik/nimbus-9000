import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase-server';
import { leadFormSchema } from '@/lib/validators/lead-form';
import { validatePhoneNumber } from '@/lib/validators/phone-validation';
import { countryCodes } from '@/lib/data/country-codes';
import { z } from 'zod';

// API Response interface
interface LeadSubmissionResponse {
  success: boolean;
  leadId?: string;
  customId?: string;
  error?: string;
  message?: string;
}

// Function to generate custom ID: firstName-last4DigitsOfPhone
function generateCustomId(name: string, phoneNumber: string): string {
  const firstName = name.split(' ')[0].toLowerCase();
  const phoneDigits = phoneNumber.replace(/\D/g, '');
  const phonePart = phoneDigits.slice(-4);
  return `${firstName}-${phonePart}`;
}

// Database insertion schema
const leadInsertSchema = z.object({
  name: z.string().min(2).max(255),
  location: z.string().min(3).max(255),
  whatsapp_number: z.string().refine((phoneNumber) => {
    if (!phoneNumber.startsWith('+')) {
      return false;
    }

    const phoneDigits = phoneNumber.replace(/\D/g, '');
    if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      return false;
    }

    const country = countryCodes.find(c => phoneNumber.startsWith(c.dialCode));
    if (!country) {
      return false;
    }

    const numberPart = phoneNumber.replace(country.dialCode, '');
    const numberDigits = numberPart.replace(/\D/g, '');
    const validation = validatePhoneNumber(numberDigits, country);
    return validation.isValid;
  }, {
    message: 'Please enter a valid international phone number'
  }),
  service: z.enum(['legal-notice', 'legal-consultation', 'legal-drafts-bundle', 'agreement-drafting', 'legal-notice-for-money-recovery']),
  description: z.string().max(1000).optional().nullable(),
  legal_notice_type: z.string().max(255).optional().nullable(),
  payment_status: z.literal('pending'),
  status: z.literal('new'),
  custom_id: z.string().min(1).max(50),
});

export async function POST(request: NextRequest): Promise<NextResponse<LeadSubmissionResponse>> {
  try {
    const body = await request.json();
    console.log('Received form data:', JSON.stringify(body, null, 2));

    const validatedData = leadFormSchema.parse(body);
    const customId = generateCustomId(validatedData.name, validatedData.whatsappNumber);
    const supabase = getSupabaseServer();

    // Check for duplicate leads
    const { data: existingLeads, error: checkError } = await supabase
      .from('leads')
      .select('id, service, payment_status, custom_id')
      .eq('name', validatedData.name)
      .eq('whatsapp_number', validatedData.whatsappNumber);

    if (checkError) {
      console.error('Error checking for duplicates:', checkError);
      return NextResponse.json(
        {
          success: false,
          error: 'Database error',
          message: 'Please try again or contact support if the problem persists.'
        },
        { status: 500 }
      );
    }

    // If existing leads found, check service duplication rules
    if (existingLeads && existingLeads.length > 0) {
      const existingServicesForUser = existingLeads.map(lead => lead.service);

      if (existingServicesForUser.includes(validatedData.service)) {
        const existingLead = existingLeads.find(lead => lead.service === validatedData.service);

        if (existingLead?.payment_status === 'paid') {
          return NextResponse.json(
            {
              success: false,
              error: 'Duplicate lead',
              message: 'A ticket already exists for this service. We will reach out to you soon!'
            },
            { status: 409 }
          );
        } else {
          return NextResponse.json(
            {
              success: false,
              error: 'Duplicate unpaid lead',
              message: 'A ticket already exists for this service. We will reach out to you soon. If you want priority support, please complete the payment.'
            },
            { status: 409 }
          );
        }
      }

      const serviceBasedCustomId = `${customId}-${validatedData.service}`;

      const leadData = {
        name: validatedData.name,
        location: validatedData.location,
        whatsapp_number: validatedData.whatsappNumber,
        service: validatedData.service,
        description: validatedData.description || null,
        legal_notice_type: validatedData.legalNoticeType || null,
        payment_status: 'pending' as const,
        status: 'new' as const,
        custom_id: serviceBasedCustomId,
      };

      const validatedLeadData = leadInsertSchema.parse(leadData);
      console.log('Data being inserted (different service):', JSON.stringify(validatedLeadData, null, 2));

      const { data, error } = await supabase
        .from('leads')
        .insert([validatedLeadData])
        .select('id, custom_id')
        .single();

      if (error) {
        console.error('Supabase insertion error:', error);
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to save lead to database',
            message: 'Please try again or contact support if the problem persists.',
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          leadId: data.id,
          customId: data.custom_id,
          message: 'Lead submitted successfully!'
        },
        { status: 201 }
      );
    }

    // No existing leads found
    const leadData = {
      name: validatedData.name,
      location: validatedData.location,
      whatsapp_number: validatedData.whatsappNumber,
      service: validatedData.service,
      description: validatedData.description || null,
      legal_notice_type: validatedData.legalNoticeType || null,
      payment_status: 'pending' as const,
      status: 'new' as const,
      custom_id: customId,
    };

    const validatedLeadData = leadInsertSchema.parse(leadData);
    console.log('Data being inserted (new lead):', JSON.stringify(validatedLeadData, null, 2));

    const { data, error } = await supabase
      .from('leads')
      .insert([validatedLeadData])
      .select('id, custom_id')
      .single();

    if (error) {
      console.error('Supabase insertion error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save lead to database',
          message: 'Please try again or contact support if the problem persists.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        leadId: data.id,
        customId: data.custom_id,
        message: 'Lead submitted successfully!'
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API route error:', error);

    if (error instanceof z.ZodError) {
      const fieldErrors = error.issues.map((err: z.ZodIssue) => ({
        field: err.path.join('.'),
        message: err.message
      }));

      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please check your form data and try again.',
          details: fieldErrors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
