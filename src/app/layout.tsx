import type { Metadata, Viewport } from "next";
import { DotGothic16, Alata } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const dotGothic16 = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dotgothic",
  display: "swap",
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.headline + " " + siteConfig.subheadline,
  keywords: [
    "TEKMAAN",
    "Digital Studio",
    "Independent Web Studio",
    "Web Application Engineering",
    "Product Design",
    "Next.js Development",
    "Full-Stack Web Engineering",
    "Bespoke Portals",
    "AI Reliability Integration",
    "High-Performance Frontends",
    "Freelance Engineering Studio",
  ],
  authors: [{ name: "TEKMAAN Studio" }],
  creator: "TEKMAAN Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.headline,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.headline,
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
    <html
      lang="en"
      className={`${dotGothic16.variable} ${alata.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#090909] text-[#F8F8F6] antialiased selection:bg-[#7864C9]/35 selection:text-white">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
