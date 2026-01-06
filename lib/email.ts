import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST || 'smtppro.zoho.in',
  port: 465,
  secure: true, // ssl
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export interface LeadEmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  customId: string;
  paymentStatus: string;
}

export const sendNewLeadAlert = async (data: LeadEmailData) => {
  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
    console.warn('Zoho email credentials not preset, skipping email');
    return;
  }

  const supportEmail = process.env.SUPPORT_EMAIL || process.env.ZOHO_EMAIL;

  const mailOptions = {
    from: `"VakilTech Bot" <${process.env.ZOHO_EMAIL}>`,
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
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Lead alert email sent to support');
  } catch (error) {
    console.error('Error sending lead alert email:', error);
  }
};

export const sendPaymentConfirmation = async (data: LeadEmailData, amount: number, paymentId: string) => {
  if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
    console.warn('Zoho email credentials not preset, skipping email');
    return;
  }

  const supportEmail = process.env.SUPPORT_EMAIL || process.env.ZOHO_EMAIL;

  // Send to Customer if email exists
  if (data.email && data.email !== 'Not Provided') {
    const userMailOptions = {
      from: `"VakilTech Support" <${process.env.ZOHO_EMAIL}>`,
      to: data.email,
      subject: `Payment Confirmation - ${data.service}`,
      html: `
        <h2>Payment Received</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for your payment. We have received <strong>₹${(amount / 100).toFixed(2)}</strong> for <strong>${data.service}</strong>.</p>
        <p><strong>Reference ID:</strong> ${paymentId}</p>
        <p><strong>Lead ID:</strong> ${data.customId}</p>
        <p>Our team will begin processing your request immediately.</p>
        <br />
        <p>Best regards,</p>
        <p>VakilTech Team</p>
      `,
    };

    try {
      await transporter.sendMail(userMailOptions);
      console.log('Payment confirmation email sent to user');
    } catch (error) {
      console.error('Error sending payment confirmation email to user:', error);
    }
  }

  // Send to Support (Always)
  const supportMailOptions = {
    from: `"VakilTech Bot" <${process.env.ZOHO_EMAIL}>`,
    to: supportEmail,
    subject: `Payment Received: ${data.name} - ${data.service}`,
    html: `
      <h2>Payment Received Alert</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Amount:</strong> ₹${(amount / 100).toFixed(2)}</p>
      <p><strong>Payment ID:</strong> ${paymentId}</p>
      <p><strong>Lead ID:</strong> ${data.customId}</p>
      <hr />
      <p>Payment successful.</p>
    `,
  };

  try {
    await transporter.sendMail(supportMailOptions);
    console.log('Payment alert email sent to support');
  } catch (error) {
    console.error('Error sending payment alert email to support:', error);
  }
};
