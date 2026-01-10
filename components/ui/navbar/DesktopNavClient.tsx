"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface NavItem {
  label: string;
  href?: string;
  content?: React.ReactNode;
}

const items: NavItem[] = [
  {
    label: "Legal Notice",
    href: "/send-legal-notice",
    content: (
      <div className="flex flex-col gap-3 py-1">
        <Link
          href="/send-legal-notice/cheque-bounce-legal-notice"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block"
        >
          Cheque Bounce
        </Link>
        <Link
          href="/send-legal-notice/legal-notice-for-money-recovery"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block"
        >
          Money Recovery
        </Link>
        <Link
          href="/send-legal-notice/breach-of-contract-legal-notice"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block"
        >
          Breach of Contract
        </Link>
        <Link
          href="/send-legal-notice/consumer-complaint-legal-notice"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block"
        >
          Consumer Complaint
        </Link>
        <Link
          href="/send-legal-notice/legal-notice-for-divorce"
          className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block"
        >
          Divorce / Matrimonial
        </Link>
        <div className="h-px bg-gray-100 dark:bg-gray-800 my-1" />
        <Link
          href="/send-legal-notice"
          className="text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider block"
        >
          View All Notices →
        </Link>
      </div>
    ),
  },
  { label: "Consultation", href: "/legal-consultation" },
  { label: "Agreement Drafting", href: "/agreement-drafting" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function DesktopNavClient() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative flex items-center gap-6">
      {items.map((item) => (
        <div
          key={item.label}
          onMouseEnter={() => item.content && setActive(item.label)}
          onMouseLeave={() => setActive(null)}
          className="relative"
        >
          {item.href ? (
            <Link
              href={item.href}
              className="cursor-pointer font-medium text-text-body hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="cursor-pointer font-medium">{item.label}</span>
          )}

          {item.content && active === item.label && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-[calc(100%+12px)] -translate-x-1/2 bg-white dark:bg-black border rounded-xl shadow-xl p-4 w-72"
            >
              {item.content}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
