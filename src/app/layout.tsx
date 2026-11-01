import type { Metadata, Viewport } from "next";
import { DotGothic16, Alata } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

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
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/assets/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/tekmaan-symbol-512.png", sizes: "512x512", type: "image/png" },
      { url: "/assets/brand/tekmaan-symbol.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/assets/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
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
    "Founder-led Studio",
  ],
  authors: [{ name: "TEKMAAN Studio", url: siteConfig.url }],
  creator: "TEKMAAN Studio",
  publisher: "TEKMAAN Studio",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.tekmaan.in/#website",
      "name": "TEKMAAN",
      "alternateName": "TEKMAAN Studio",
      "url": "https://www.tekmaan.in/",
      "inLanguage": "en-US",
      "description":
        "Independent Digital Technology Studio crafting websites, business platforms, and AI-powered solutions.",
      "publisher": {
        "@id": "https://www.tekmaan.in/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.tekmaan.in/#organization",
      "name": "TEKMAAN",
      "alternateName": "TEKMAAN Studio",
      "url": "https://www.tekmaan.in/",
      "description": "Independent Digital Technology Studio.",
      "logo": "https://www.tekmaan.in/tekmaan-symbol-512.png",
      "image": "https://www.tekmaan.in/tekmaan-symbol-512.png",
      "sameAs": [
        "https://github.com/syedamaan-dev",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": siteConfig.contact.email,
        "availableLanguage": ["English", "Hindi"],
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090909] text-[#F8F8F6] antialiased selection:bg-[#7864C9]/35 selection:text-white">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
