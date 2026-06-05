import type { Metadata } from "next";
import { Suspense } from "react";
import { ResultClient } from "@/components/result-client";
import { pageMetadata } from "@/lib/seo";
import { dereTypeOrder, typeBySlug, type DereTypeSlug } from "@/lib/quiz-data";

function isDereType(value: string | string[] | undefined): value is DereTypeSlug {
  return typeof value === "string" && dereTypeOrder.includes(value as DereTypeSlug);
}

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ type?: string | string[] }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const resultSlug = isDereType(params.type) ? params.type : null;
  const type = resultSlug ? typeBySlug[resultSlug] : null;

  if (!type) {
    return pageMetadata({
      title: "Your Dere Type Quiz Result",
      description:
        "View your Dere Type Quiz result, download a manga-style result card, copy your result link, read the meaning, compare types, or retake the quiz.",
      path: "/result",
      keywords: [
        "dere type quiz result",
        "tsundere result",
        "yandere result",
        "anime personality quiz result",
        "download result card"
      ]
    });
  }

  const title = `I Got ${type.name} on the Dere Type Quiz`;
  const description = `${type.badge}: ${type.oneLiner} Take the Dere Type Quiz and get your own manga-style result card.`;
  const image = `/og/result?type=${type.slug}`;

  return {
    ...pageMetadata({
      title,
      description,
      path: "/result",
      keywords: [
        `${type.slug} result`,
        `${type.name} result`,
        "dere type quiz result",
        "anime personality quiz result"
      ]
    }),
    alternates: {
      canonical: "/result"
    },
    openGraph: {
      title,
      description,
      url: `/result?type=${type.slug}`,
      siteName: "DereType Quiz",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${type.name} Dere Type Quiz result` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default function ResultPage() {
  return (
    <Suspense>
      <ResultClient />
    </Suspense>
  );
}
