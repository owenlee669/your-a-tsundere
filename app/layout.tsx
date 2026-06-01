import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Are You a Tsundere? Take the Dere Type Quiz",
    template: `%s | ${siteName}`
  },
  description:
    "Take a free 12-question Dere Type Quiz to find out if you're Tsundere, Yandere, Kuudere, Dandere, or Deredere. No login, no email, just emotional damage.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Are You a Tsundere? Take the Dere Type Quiz",
    description:
      "Find your Dere type with a free 12-question anime personality quiz.",
    url: siteUrl,
    siteName: "DereType Quiz",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "DereType Quiz" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Are You a Tsundere? Take the Dere Type Quiz",
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
