import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "SDD Adopters — AI that empowers, not replaces",
  description: "Gamify your onboarding with AI that empowers teams. Join the early access waitlist for the future of developer onboarding.",
  keywords: [
    "AI onboarding",
    "gamified learning",
    "developer onboarding",
    "AI empowerment",
    "team onboarding platform",
    "AI-powered training",
    "developer enablement",
    "onboarding gamification"
  ],
  authors: [{ name: "SDD Adopters" }],
  creator: "SDD Adopters",
  publisher: "SDD Adopters",
  metadataBase: new URL('https://sdd-adopters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdd-adopters.com",
    siteName: "SDD Adopters",
    title: "SDD Adopters — AI that empowers, not replaces",
    description: "Gamify your onboarding with AI that empowers teams. Join the early access waitlist.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SDD Adopters - AI-powered onboarding platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SDD Adopters — AI that empowers, not replaces",
    description: "Gamify your onboarding with AI that empowers teams. Join the early access waitlist.",
    images: ["/og-image.png"],
    creator: "@sddadopters",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SDD Adopters",
  "applicationCategory": "BusinessApplication",
  "description": "AI-powered onboarding platform that empowers teams through gamification",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "50"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
