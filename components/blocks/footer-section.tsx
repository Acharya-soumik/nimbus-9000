"use client";
import React from "react";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Services", href: "#services" },
      { title: "About Us", href: "/about" },
      { title: "Blog", href: "/blogs" },
    ],
  },
  {
    label: "Services",
    links: [
      { title: "Legal Notice", href: "/legal-notice" },
      { title: "Legal Consultation", href: "/legal-consultation" },
      { title: "Agreement Drafting", href: "/agreement-drafting" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Home", href: "/" },
      { title: "FAQs", href: "/" },
    ],
  },
  {
    label: "Social Links",
    links: [
      {
        title: "Facebook",
        href: "https://facebook.com/vakiltech",
        icon: FacebookIcon,
      },
      {
        title: "Instagram",
        href: "https://instagram.com/vakiltech",
        icon: InstagramIcon,
      },
      {
        title: "Youtube",
        href: "https://youtube.com/@vakiltech",
        icon: YoutubeIcon,
      },
      {
        title: "LinkedIn",
        href: "https://linkedin.com/company/vakiltech",
        icon: LinkedinIcon,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="md:rounded-t-6xl relative -top-6 w-full  mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] p-12 lg:py-16 bg-red-400">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4 ">
          <Image
            src="/assets/logo.png"
            alt="VakilTech"
            width={180}
            height={40}
            className="h-10 w-auto bg-white rounded"
          />
          <p className="text-white mt-8 text-sm md:mt-0">
            © {new Date().getFullYear()} VakilTech. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-lg">{section.label}</h3>
                <ul className="text-white mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
