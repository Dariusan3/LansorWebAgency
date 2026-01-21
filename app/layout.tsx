import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lansor | AI Automation & Web Development Agency",
  description:
    "I help businesses save time, reduce costs, and scale with AI automation and high-performance web development. Book a free consultation today.",
  keywords: [
    "AI automation",
    "web development",
    "chatbots",
    "workflow automation",
    "SaaS development",
    "AI integration",
  ],
  authors: [{ name: "Lansor Agency" }],
  openGraph: {
    title: "Lansor | AI Automation & Web Development Agency",
    description:
      "I help businesses save time, reduce costs, and scale with AI automation and high-performance web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
