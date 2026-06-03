import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youareatsundere.com";
export const siteName = "DereType Quiz";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function pageMetadata({ title, description, path, keywords }: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: "/og", width: 1200, height: 630, alt: `${siteName} preview` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og"]
    }
  };
}
