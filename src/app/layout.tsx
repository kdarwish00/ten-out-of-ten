import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { createOrganizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/business-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Ten Out Of Ten",
    template: "%s | Ten Out Of Ten",
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Ten Out Of Ten",
    description: siteConfig.defaultDescription,
    url: siteConfig.domain,
    siteName: "Ten Out Of Ten",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ten Out Of Ten",
    description: siteConfig.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createOrganizationJsonLd(siteConfig.domain)),
          }}
        />
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-semibold">
              Ten Out Of Ten
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
              <Link href="/ten-out-of-ten">Business 1</Link>
              <Link href="/ten-out-of-ten-tailor">Tailor</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-10 border-t border-slate-200 bg-white">
          <div className="mx-auto w-full max-w-5xl px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
            <p>Ten Out Of Ten and Ten Out Of Ten Tailor</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
