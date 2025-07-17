import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/context/scroll-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shubham Pandey Portfolio",
    template: "%s | Shubham Pandey Portfolio",
  },
  description: "Shubham Pandey's Product Design Portfolio",
  keywords: [
    "shubhfolio.com",
    "shubhfolio",
    "shubham",
    "pandey",
    "Shubham Pandey Portfolio",
    "shubham pandey",
    "framer designer",
    "user flow freelance",
    "freelance product designer",
    "freelance ux ui designer",
    "open to work",
    "open to work designer",
    "top UI/UX design portfolio",
    "top interaction designer portfolio",
    "top visual designer portfolio",
    "top user interface designer",
    "freelance designer portfolio",
    "remote UI UX designer",
    "remote freelance designer",
    "hire freelance designer",
    "hire ux designer",
    "hire ui designer",
    "hire product designer",
    "user interface",
    "user experience",
    "ui ux",
    "product design",
    "interaction design",
    "ui/ux designer portfolio",
    "ux/ui designer portfolio",
    "framer portfolio",
    "figma designer",
    "framer to figma",
    "figma to framer",
    "design prototype",
    "webflow alternative",
    "framer alternative",
    "best framer portfolio",
    "creative designer portfolio",
    "personal portfolio designer",
    "framer freelancer",
    "design systems",
    "micro interaction",
    "motion design",
    "ui animations",
    "framer expert",
    "top framer site",
    "ux audit",
    "product designer bangalore",
    "ui designer bangalore",
    "ux designer bangalore",
    "interaction design bangalore",
  ],
  metadataBase: new URL("https://www.shubhfolio.com/"),
  openGraph: {
    title: "Shubham Pandey Portfolio",
    description: "Shubham Pandey's Product Design Portfolio",
    url: "https://www.shubhfolio.com/",
    siteName: "Shubham Pandey Portfolio",
    images: [
      {
        url: "/images/shub-img.png",
        width: 1200,
        height: 630,
        alt: "Shubham Pandey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Pandey Portfolio",
    description: "Shubham Pandey's Product Design Portfolio",
    images: ["/images/shub-img.png"],
  },
  other: {
    "google-site-verification": "zcfxo_H0uNjqJrF98A8rz2NSmvvLrIJIPgj6dZqHi0Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
