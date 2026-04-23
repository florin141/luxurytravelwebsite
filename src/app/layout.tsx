import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aurora Luxe Travel — Beyond First Class",
    template: "%s | Aurora Luxe Travel",
  },
  description:
    "Ultra-premium concierge travel experiences. Private jets, superyachts, Michelin-star trails, and bespoke itineraries across the world's most extraordinary destinations.",
  keywords: [
    "luxury travel",
    "concierge",
    "private jet",
    "superyacht",
    "bespoke travel",
    "luxury vacation",
    "first class travel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Aurora Luxe Travel",
    title: "Aurora Luxe Travel — Beyond First Class",
    description:
      "Ultra-premium concierge travel experiences crafted for the world's most discerning travelers.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc08?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Aurora Luxe Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Luxe Travel — Beyond First Class",
    description:
      "Ultra-premium concierge travel experiences crafted for the world's most discerning travelers.",
    images: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc08?w=1200&h=630&fit=crop&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-cyan focus:text-bg-deep focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
