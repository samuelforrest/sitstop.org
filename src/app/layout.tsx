import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "geist/font/sans";
import "geist/font/mono";

export const metadata: Metadata = {
  title: {
    default: "SIT STOP",
    template: "SIT STOP",
  },
  description: "Making life a little easier for those who need to sit down.",
  authors: [{ name: "SIT STOP", url: "https://www.sitstop.org" }],
  creator: "SIT STOP",
  publisher: "SIT STOP",
  keywords: [
    "Samuel Forrest",
    "samuelforrest.co.uk",
    "SIT STOP",
    "SITSTOP.co.uk",
    "sitstop.co.uk",
    "sitstop.org",
    "sit stop charity",
    "SIT STOP website",
    "sit stop",
    "sitstop",
    "sit stop richmond",
    "sit stop charity",
  ],
  metadataBase: new URL("https://www.sitstop.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "SIT STOP",
    description: "Making life a little easier for those who need to sit down.",
    url: "https://www.sitstop.org",
    siteName: "SIT STOP",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIT STOP",
    description: "Making life a little easier for those who need to sit down.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Charity",
  classification: "Charity Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <head>
        <meta name="apple-mobile-web-app-title" content="SIT STOP" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
