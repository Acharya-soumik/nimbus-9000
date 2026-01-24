import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface LeadEmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  customId: string;
  paymentStatus: string;
}

export const sendNewLeadAlert = async (data: LeadEmailData) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend API key not present, skipping email');
    return;
  }

  const supportEmail = process.env.SUPPORT_EMAIL
    ? process.env.SUPPORT_EMAIL.split(',').map((email) => email.trim())
    : ['acharjee266@gmail.com'];
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  try {
    await resend.emails.send({
      from: fromEmail,
      to: supportEmail,
      subject: `New Lead: ${data.name} - ${data.service}`,
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>ID:</strong> ${data.customId}</p>
        <p><strong>Payment Status:</strong> ${data.paymentStatus}</p>
        <hr />
        <p>Please reach out to this lead immediately.</p>
      `,
    });
    console.log('Lead alert email sent to support via Resend');
  } catch (error) {
    console.error('Error sending lead alert email:', error);
  }
};

export const sendPaymentConfirmation = async (data: LeadEmailData, amount: number, paymentId: string) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend API key not present, skipping email');
    return;
  }

  const supportEmail = process.env.SUPPORT_EMAIL
    ? process.env.SUPPORT_EMAIL.split(',').map((email) => email.trim())
    : ['acharjee266@gmail.com'];
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  // Send to Customer if email exists
  if (data.email && data.email !== 'Not Provided') {
    try {
      await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: `Payment Confirmation - ${data.service}`,
        html: `
          <h2>Payment Received</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for your payment. We have received <strong>₹${amount}</strong> for <strong>${data.service}</strong>.</p>
          <p><strong>Reference ID:</strong> ${paymentId}</p>
          <p><strong>Lead ID:</strong> ${data.customId}</p>
          <p>Our team will begin processing your request immediately.</p>
          <br />
          <p>Best regards,</p>
          <p>VakilTech Team</p>
        `,
      });
      console.log('Payment confirmation email sent to user via Resend');
    } catch (error) {
      console.error('Error sending payment confirmation email to user:', error);
    }
  }

  // Send to Support (Always)
  try {
    await resend.emails.send({
      from: fromEmail,
      to: supportEmail,
      subject: `Payment Received: ${data.name} - ${data.service}`,
      html: `
        <h2>Payment Received Alert</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Amount:</strong> ₹${amount}</p>
        <p><strong>Payment ID:</strong> ${paymentId}</p>
        <p><strong>Lead ID:</strong> ${data.customId}</p>
        <hr />
        <p>Payment successful.</p>
      `,
    });
    console.log('Payment alert email sent to support via Resend');
  } catch (error) {
    console.error('Error sending payment alert email to support:', error);
  }
};
