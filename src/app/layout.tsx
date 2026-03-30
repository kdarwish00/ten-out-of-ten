import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

import { createOrganizationJsonLd } from "@/lib/seo";
import { businesses, siteConfig } from "@/lib/business-data";
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createOrganizationJsonLd(siteConfig.domain)),
          }}
        />
        <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-[#fffdf9]/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-lg font-bold text-slate-900">
              Ten Out Of Ten
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
              <Link href="/ten-out-of-ten">Barbershop</Link>
              <Link href="/ten-out-of-ten-tailor">Tailor</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <div className="page-bg flex-1">{children}</div>
        <footer className="mt-12 border-t border-stone-200 bg-[#fffdf9]">
          <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Ten Out Of Ten
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Barbershop and tailoring at the same location.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Quick links</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link className="hover:underline" href="/ten-out-of-ten">
                      Barbershop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:underline"
                      href="/ten-out-of-ten-tailor"
                    >
                      Tailor
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-3 text-sm text-slate-700">
                  {businesses[0]?.address.street}, {businesses[0]?.address.city},{" "}
                  {businesses[0]?.address.region} {businesses[0]?.address.postalCode}
                </p>
                <a
                  className="mt-2 inline-block text-sm font-medium text-slate-900 hover:underline"
                  href={businesses[0]?.address.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">Contact</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {businesses.map((business) => (
                    <li key={business.slug}>
                      <a className="hover:underline" href={business.phoneHref}>
                        Call {business.shortName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-2 border-t border-stone-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Ten Out Of Ten</p>
              <p>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
