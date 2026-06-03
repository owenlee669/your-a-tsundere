import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "You Are a Tsundere? Take the Dere Type Quiz",
    template: `%s | ${siteName}`
  },
  description:
    "Take a free 12-question Dere Type Quiz to see if you are Tsundere, Yandere, Kuudere, Dandere, or Deredere. No login needed.",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title: "You Are a Tsundere? Take the Dere Type Quiz",
    description:
      "Find your Dere type with a free 12-question anime personality quiz.",
    url: siteUrl,
    siteName: "DereType Quiz",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "DereType Quiz" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "You Are a Tsundere? Take the Dere Type Quiz",
    description:
      "Find your Dere type with a free 12-question anime personality quiz.",
    images: ["/og"]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
