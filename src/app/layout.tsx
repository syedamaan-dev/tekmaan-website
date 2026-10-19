import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: "#FF6A00",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} is an independent, founder-led digital studio delivering modern websites, full-stack web applications, UI/UX design, and software engineering.`,
  keywords: [
    "TEKMAAN",
    "Independent Digital Studio",
    "Modern Web Design",
    "Full-Stack Web Applications",
    "UI/UX Design",
    "Custom Portals & Dashboards",
    "AI Integration & Automation",
    "Next.js Developers",
    "Web Engineering Studio",
    "High Performance Websites",
  ],
  authors: [{ name: "TEKMAAN Studio" }],
  creator: "TEKMAAN Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: `${siteConfig.name} is an independent digital studio delivering modern websites, digital products, and software engineering.`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Digital Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: `${siteConfig.name} is an independent digital studio delivering modern websites, digital products, and software engineering.`,
    images: [siteConfig.ogImage],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400;1,600&family=Space+Mono:wght@400;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#000000] text-[#eaeaea] font-sans antialiased selection:bg-[#ff6a00]/30 selection:text-white relative">
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main className="flex-1 flex flex-col pt-16 md:pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
