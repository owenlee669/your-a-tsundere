import type { Metadata } from "next";
import { QuizClient } from "@/components/quiz-client";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dere Type Quiz: Find Your Anime Personality Type",
  description:
    "Answer 12 short anime-style questions and get a Tsundere, Yandere, Kuudere, Dandere, or Deredere result with a shareable manga result card.",
  path: "/quiz",
  keywords: [
    "dere type quiz",
    "anime personality quiz",
    "tsundere quiz",
    "yandere quiz",
    "are you a tsundere",
    "are you a yandere"
  ]
});

export default function QuizPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Dere Type Quiz",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Any",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://youareatsundere.com"}/quiz`,
    description:
      "A free 12-question anime quiz that checks Tsundere, Yandere, Kuudere, Dandere, and Deredere answer patterns.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <QuizClient />
    </>
  );
}
