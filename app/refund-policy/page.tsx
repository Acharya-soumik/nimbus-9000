import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Refund Policy | VakilTech",
  description: "Learn about VakilTech's refund and cancellation policy for our legal services.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to transparency and customer satisfaction.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last Updated: 07.01.2026
          </p>
        </section>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto mb-8">
          <p className="text-muted-foreground">
            Vakiltech.in (&quot;Vakiltech&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a legal technology platform that facilitates access to legal professionals for consultation, drafting, documentation, compliance, and other allied legal services. Due to the nature of legal services, our refund policy is governed by professional standards, ethical obligations, and industry norms.
          </p>
        </section>

        {/* Policy Content */}
        <section className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="general-policy">
              <AccordionTrigger className="text-left">
                1. General Policy
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Legal services involve time, expertise, and professional judgment. Once a legal professional is assigned and work has commenced, refunds are generally not permissible, except in limited circumstances expressly mentioned below.
                  </p>
                  <p className="text-muted-foreground">
                    By availing any service on Vakiltech.in, the user agrees to this Refund Policy.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="eligible">
              <AccordionTrigger className="text-left">
                2. Services Eligible for Refund
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    A refund may be considered only in the following situations:
                  </p>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Service Not Initiated</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Payment made, but no lawyer/consultant has been assigned, and</li>
                      <li>No consultation, drafting, or review work has commenced.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Duplicate Payment</h3>
                    <p className="text-muted-foreground">
                      If the user is charged more than once for the same service.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Service Not Delivered Due to Vakiltech</h3>
                    <p className="text-muted-foreground">
                      If Vakiltech is unable to provide the agreed service due to internal constraints and no alternative solution is offered.
                    </p>
                  </div>

                  <p className="text-muted-foreground italic mt-4">
                    In such cases, refunds (if approved) will be processed after verification.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="non-refundable">
              <AccordionTrigger className="text-left">
                3. Non-Refundable Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Refunds shall not be provided in the following circumstances:
                  </p>

                  <div>
                    <h3 className="font-semibold mb-2">Consultation Services</h3>
                    <p className="text-muted-foreground">
                      Once a consultation call, meeting, or written advice is provided, fully or partially.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Drafting & Documentation</h3>
                    <p className="text-muted-foreground mb-2">
                      Once drafting, vetting, or modification of documents has begun.
                    </p>
                    <p className="text-muted-foreground">
                      Includes legal notices, agreements, contracts, petitions, replies, affidavits, policies, etc.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Custom / Tailor-Made Services</h3>
                    <p className="text-muted-foreground">
                      Any service specifically customized based on user-provided facts or documents.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Delays Caused by User</h3>
                    <p className="text-muted-foreground">
                      Where delays or non-delivery result from incomplete information, delayed responses, or lack of cooperation from the user.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Change of Mind</h3>
                    <p className="text-muted-foreground">
                      If the user decides not to proceed after work has started.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Outcome-Based Expectations</h3>
                    <p className="text-muted-foreground">
                      Legal services do not guarantee outcomes. Dissatisfaction with advice, strategy, or expected results does not qualify for a refund.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="partial-refunds">
              <AccordionTrigger className="text-left">
                4. Partial Refunds
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    In exceptional cases, partial refunds may be considered at Vakiltech&apos;s sole discretion, depending on:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Stage of service completion</li>
                    <li>Nature of work already performed</li>
                    <li>Time and effort invested by the legal professional</li>
                  </ul>
                  <p className="text-muted-foreground italic mt-4">
                    Vakiltech&apos;s decision in this regard shall be final and binding.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process">
              <AccordionTrigger className="text-left">
                5. Refund Request Process
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    To request a refund, users must:
                  </p>
                  
                  <div>
                    <p className="text-muted-foreground mb-2">
                      Email us at <a href="mailto:Help@vakiltech.in" className="text-primary hover:underline font-medium">Help@vakiltech.in</a>
                    </p>
                    <p className="text-muted-foreground mb-2">Mention:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Registered name</li>
                      <li>Registered mobile number</li>
                      <li>Order / Transaction ID</li>
                      <li>Reason for refund request</li>
                    </ul>
                  </div>

                  <p className="text-muted-foreground">
                    Submit the request within <strong>48 hours</strong> of payment or service issue, as applicable
                  </p>
                  <p className="text-muted-foreground italic">
                    Refund requests raised after this period may not be entertained.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timeline">
              <AccordionTrigger className="text-left">
                6. Refund Timeline
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Approved refunds will be processed within <strong>7–10 working days</strong></li>
                  <li>Refunds will be credited to the original mode of payment</li>
                  <li>Vakiltech is not responsible for delays caused by banks or payment gateways</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rejection">
              <AccordionTrigger className="text-left">
                7. Right to Reject Refund
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Vakiltech reserves the right to reject any refund request if:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>The request does not meet the eligibility criteria</li>
                    <li>False, misleading, or incomplete information is provided</li>
                    <li>The service has already been substantially or fully delivered</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="modification">
              <AccordionTrigger className="text-left">
                8. Modification of Policy
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Vakiltech reserves the right to modify or update this Refund Policy at any time without prior notice. Changes will be effective immediately upon being posted on the website.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact">
              <AccordionTrigger className="text-left">
                9. Contact Information
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  For any queries or clarification regarding this Refund Policy, please contact:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>📧 <a href="mailto:Help@vakiltech.in" className="text-primary hover:underline font-medium">Help@vakiltech.in</a></p>
                  <p>📞 <a href="tel:+91704768395" className="text-primary hover:underline font-medium">+91 704768395</a></p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
