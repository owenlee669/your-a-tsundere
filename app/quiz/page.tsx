import type { Metadata } from "next";
import { QuizClient } from "@/components/quiz-client";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dere Type Quiz: Find Your Anime Personality Type",
  description:
    "Answer 12 short anime-style questions and get a Tsundere, Yandere, Kuudere, Dandere, or Deredere result. Try the quiz now.",
  path: "/quiz"
});

export default function QuizPage() {
  return <QuizClient />;
}
