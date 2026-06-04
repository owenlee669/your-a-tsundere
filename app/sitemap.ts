import type { MetadataRoute } from "next";
import { dereTypes } from "@/lib/quiz-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://youareatsundere.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/quiz",
    "/are-you-a-tsundere-google",
    "/are-you-a-yandere",
    "/dere-types",
    "/tsundere-vs-yandere",
    "/privacy",
    "/terms",
    ...dereTypes.map((type) => `/dere-types/${type.slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
