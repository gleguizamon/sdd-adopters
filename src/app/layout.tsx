import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onboarding Layer — Turn Onboarding Into A Game Your Team Actually Loves",
  description: "Gamify technical onboarding with missions & badges. Cut training time by 40% while boosting motivation and retention. AI that empowers, not replaces.",
  keywords: [
    "AI onboarding",
    "gamified onboarding",
    "developer onboarding",
    "onboarding gamification",
    "team onboarding platform",
    "technical onboarding",
    "developer enablement",
    "onboarding missions"
  ],
  authors: [{ name: "Onboarding Layer" }],
  creator: "Onboarding Layer",
  publisher: "Onboarding Layer",
  metadataBase: new URL('https://onboardinglayer.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onboardinglayer.com",
    siteName: "Onboarding Layer",
    title: "Turn Onboarding Into A Game Your Team Actually Loves",
    description: "Gamify onboarding with missions & badges. Cut training time by 40%. AI that empowers, not replaces.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Onboarding Layer - Gamified onboarding platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Onboarding Into A Game Your Team Actually Loves",
    description: "Gamify onboarding with missions & badges. Cut training time by 40%.",
    images: ["/og-image.png"],
    creator: "@onboardinglayer",
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
  "name": "Onboarding Layer",
  "applicationCategory": "BusinessApplication",
  "description": "Gamified technical onboarding platform with missions and badges. AI that empowers, not replaces.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
