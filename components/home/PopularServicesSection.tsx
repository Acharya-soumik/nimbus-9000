"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const popularServices = [
  {
    title: "Money Recovery Legal Notice",
    description: "Recover pending payments from individuals or businesses",
    href: "/send-legal-notice/legal-notice-for-money-recovery",
    icon: "💰"
  },
  {
    title: "Cheque Bounce Notice",
    description: "File Section 138 NI Act notice for dishonoured cheques",
    href: "/send-legal-notice/cheque-bounce-legal-notice",
    icon: "📜"
  },
  {
    title: "Divorce Legal Notice",
    description: "Initiate divorce proceedings under Hindu/Special Marriage Act",
    href: "/send-legal-notice/legal-notice-for-divorce",
    icon: "⚖️"
  },
  {
    title: "Tenant Eviction Notice",
    description: "Evict non-paying or problematic tenants legally",
    href: "/send-legal-notice/legal-notice-to-tenant",
    icon: "🏠"
  },
  {
    title: "Unpaid Salary Notice",
    description: "Claim pending salary, PF, or gratuity from employer",
    href: "/send-legal-notice/legal-notice-for-unpaid-salary",
    icon: "💼"
  }
];

export function PopularServicesSection({ className }: { className?: string }) {
  return (
    <section className={cn("py-12 bg-white", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-text-heading sm:text-3xl">Popular Legal Services</h2>
            <p className="mt-2 text-text-medium">Looking for specific legal help? Explore our most-used services:</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularServices.map((service) => (
            <Link 
              key={service.href} 
              href={service.href}
              className="flex items-start p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
            >
              <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">{service.icon}</span>
              <div>
                <h3 className="font-semibold text-text-heading group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-text-muted mt-1">{service.description}</p>
              </div>
            </Link>
          ))}
            <Link 
              href="/send-legal-notice"
              className="flex items-center justify-center p-6 rounded-xl border border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors group"
            >
              <div className="text-center">
                <span className="block text-primary font-semibold mb-1 group-hover:translate-x-1 transition-transform">View All Notice Types →</span>
                <p className="text-xs text-text-muted">Explore 20+ legal categories</p>
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
