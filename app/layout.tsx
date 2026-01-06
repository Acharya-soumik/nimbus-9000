import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar/Navbar";
import { Footer } from "@/components/blocks/footer-section";
import { Toaster } from "react-hot-toast";
import {
  GoogleTagManager,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import MixpanelManager from "@/components/analytics/MixpanelManager";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "VakilTech: Your Online Vakil | Expert Legal Advice & Lawyers",
  description:
    "Looking for a Vakil? VakilTech connects you with expert lawyers for legal notices, consultations & agreements. India's trusted online legal platform starting @ ₹299.",
  keywords: [
    "vakil",
    "vakiltech",
    "online vakil",
    "legal advice",
    "talk to lawyer",
    "lawyer contact number",
    "send legal notice",
    "online legal services india",
    "advocate services",
  ],
  authors: [{ name: "vakiltech" }],
  creator: "vakiltech",
  publisher: "vakiltech",
  metadataBase: new URL("https://vakiltech.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/assets/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/apple-touch-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "VakilTech: Your Online Vakil | Expert Legal Advice & Lawyers",
    description:
      "Need a Vakil? Get expert legal advice, send legal notices & talk to licensed advocates online. Fast, affordable & secure.",
    url: "https://vakiltech.in",
    siteName: "vakiltech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VakilTech: Your Online Vakil | Expert Legal Advice & Lawyers",
    description:
      "Need a Vakil? Get expert legal advice, send legal notices & talk to licensed advocates online. Fast, affordable & secure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";

  return (
    <html lang="en">
      <head>
        {/* Favicons and Icons */}
        <link
          rel="icon"
          href="/assets/favicon-192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/assets/favicon-512.png"
          type="image/png"
          sizes="512x512"
        />
        <link
          rel="icon"
          href="/assets/favicon.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <meta name="theme-color" content="#EF5A6F" />

        {/* Google Tag Manager - Loads after page interactive */}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}

        {/* Meta Pixel - Lazy loads */}
        {metaPixelId && <MetaPixel pixelId={metaPixelId} />}

        {/* Microsoft Clarity */}
        {clarityId && <MicrosoftClarity projectId={clarityId} />}

        {/* Mixpanel Analytics */}
        <MixpanelManager />

        {/* Organization Schema - Global for the entire website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "vakiltech",
              legalName: "vakiltech Legal Services",
              url: "https://vakiltech.in",
              logo: "https://vakiltech.in/logo.png",
              foundingDate: "2023",
              description:
                "India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-70476 83995",
                  contactType: "Customer Service",
                  availableLanguage: ["English", "Hindi"],
                  areaServed: "IN",
                },
              ],
              sameAs: [
                // Add your social media profiles here
                // "https://www.facebook.com/vakiltech",
                // "https://twitter.com/vakiltech",
                // "https://www.linkedin.com/company/vakiltech",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "500",
                bestRating: "5",
                worstRating: "1",
              },
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Legal Notice Services",
                    description:
                      "Professional legal notice drafting and sending",
                  },
                  price: "1499",
                  priceCurrency: "INR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Legal Consultation",
                    description:
                      "Expert legal consultation from Licensed Advocates",
                  },
                  price: "299",
                  priceCurrency: "INR",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Agreement Drafting",
                    description:
                      "Professional legal agreement drafting services",
                  },
                  price: "999",
                  priceCurrency: "INR",
                },
              ],
            }),
          }}
        />
        {/* WebSite Schema for site-wide search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "vakiltech",
              url: "https://vakiltech.in",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://vakiltech.in/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM NoScript fallback */}
        {gtmId && <GoogleTagManagerNoScript gtmId={gtmId} />}

        <Toaster position="top-center" />
        <Navbar />
        <div className="min-h-[90vh] pt-[72px] bg-gradient-hero">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
