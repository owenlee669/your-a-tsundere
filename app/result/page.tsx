import type { Metadata } from "next";
import { Suspense } from "react";
import { ResultClient } from "@/components/result-client";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
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

export default function ResultPage() {
  return (
    <Suspense>
      <ResultClient />
    </Suspense>
  );
}
