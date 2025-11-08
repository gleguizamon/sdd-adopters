import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Spec-Driven AI Adoption Platform — Responsible AI for Business Teams",
  description: "Adopt AI tools responsibly with Spec-Driven Development. Centralize prompts, enforce policies, and measure understanding across your organization.",
  keywords: ["AI governance", "Spec-Driven Development", "responsible AI", "developer enablement", "prompt management", "enterprise AI adoption", "Copilot onboarding", "AI policy framework"],
  authors: [{ name: "SDD Adopters" }],
  openGraph: {
    title: "Spec-Driven AI Adoption Platform",
    description: "Bring Structure to AI Adoption. Empower your team to use AI responsibly with Spec-Driven Development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spec-Driven AI Adoption Platform",
    description: "Bring Structure to AI Adoption. Empower your team to use AI responsibly with Spec-Driven Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
