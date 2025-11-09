import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SDD Adopters — Turn Onboarding Into A Game Your Team Loves",
  description: "AI-powered onboarding platform with gamification. Turn boring tasks into magical quests. 10x faster onboarding, 94% completion rate. Join early access for lifetime free access.",
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
    title: "Turn Onboarding Into A Game Your Team Loves",
    description: "AI-powered onboarding with gamification. 10x faster onboarding, 94% completion rate. Join early access for lifetime free access.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SDD Adopters - Gamified AI onboarding platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Onboarding Into A Game Your Team Loves",
    description: "AI-powered onboarding with gamification. 10x faster, 94% completion. Get lifetime free access.",
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
    <html lang="en" className="dark scroll-smooth">
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
