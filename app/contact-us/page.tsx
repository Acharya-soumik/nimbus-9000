import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | VakilTech",
  description: "Get in touch with VakilTech for legal assistance and support. We're here to help you with your legal needs.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </section>

        {/* Contact Information Grid */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                For general inquiries and support
              </p>
              <a 
                href="mailto:help@vakiltech.in" 
                className="text-primary hover:underline font-medium"
              >
                help@vakiltech.in
              </a>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Speak with our team
              </p>
              <p className="text-foreground font-medium">
               +91 7047683995
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Get instant help
              </p>
              <p className="text-foreground font-medium">
                +91 7047683995
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <div className="text-muted-foreground space-y-1">
                <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
                <p>Saturday: 10:00 AM - 10:00 PM</p>
                <p>Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Office Address</h3>
              </div>
              <div className="text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Business Name: PRITAM BANIK</p>
                <p>25, Mazaffar Ahmed Sarani</p>
                <p>Ashrampara, Siliguri</p>
                <p>West Bengal, Pin Code: 734001</p>
              </div>
            </div>

            {/* Support */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Support</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                For technical support
              </p>
              <a 
                href="mailto:help@vakiltech.in" 
                className="text-primary hover:underline font-medium"
              >
                help@vakiltech.in
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
            <p className="text-muted-foreground text-center mb-8">
              [Contact form will be added here. For now, please reach out via email or phone.]
            </p>
            
            {/* Placeholder for future form */}
            <div className="space-y-4 opacity-50">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <div className="w-full h-10 bg-muted rounded border border-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="w-full h-10 bg-muted rounded border border-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <div className="w-full h-10 bg-muted rounded border border-border"></div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <div className="w-full h-32 bg-muted rounded border border-border"></div>
              </div>
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-muted rounded border border-border">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Need Immediate Legal Assistance?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of legal experts is ready to help you with your legal matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/legal-consultation" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Book a Consultation
              </a>
              <a 
                href="/send-legal-notice" 
                className="px-6 py-3 bg-background border border-border rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Send Legal Notice
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
