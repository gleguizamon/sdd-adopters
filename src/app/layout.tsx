import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SDD Adopters - Next.js Boilerplate",
  description: "Modern Next.js boilerplate with app router, TypeScript, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
