"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { calculateResult, quizQuestions } from "@/lib/quiz-data";
import { trackEvent } from "@/lib/analytics";

export function QuizClient() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const question = quizQuestions[index];
  const progress = useMemo(() => ((index + 1) / quizQuestions.length) * 100, [index]);

  function choose(optionIndex: number) {
    if (index === 0 && answers.length === 0) {
      trackEvent("quiz_start");
    }

    const nextAnswers = [...answers];
    nextAnswers[index] = optionIndex;

    if (index === quizQuestions.length - 1) {
      const calculated = calculateResult(nextAnswers);
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(
          "dere-quiz-result",
          JSON.stringify({ answers: nextAnswers, result: calculated.result, scores: calculated.scores })
        );
      }
      trackEvent("quiz_complete", { result_type: calculated.result });
      router.push(`/result?type=${calculated.result}`);
      return;
    }

    setAnswers(nextAnswers);
    setIndex((current) => current + 1);
  }

  function goBack() {
    setIndex((current) => Math.max(0, current - 1));
  }

  return (
    <main className="min-h-screen px-5 py-4">
      <SiteHeader compact />
      <section className="mx-auto mt-8 max-w-3xl">
        <h1 className="sr-only">Find Your Dere Type in 12 Questions</h1>
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-black">Question {index + 1} of {quizQuestions.length}</p>
          <Link href="/" className="focus-ring rounded-sm text-sm font-black underline decoration-2 underline-offset-4 hover:text-punch">
            Exit
          </Link>
        </div>
        <div className="h-4 border-3 border-ink bg-white">
          <div className="h-full bg-punch transition-all" style={{ width: `${progress}%` }} />
        </div>

        <div className="manga-panel mt-6 p-5 md:p-7">
          <p className="text-sm font-black uppercase text-punch">
            Answer honestly. Or dramatically. Both count.
          </p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight md:text-5xl">
            {question.question}
          </h2>
          <div className="mt-8 grid gap-4">
            {question.options.map((option, optionIndex) => (
              <button
                key={option.text}
                onClick={() => choose(optionIndex)}
                className="focus-ring group border-3 border-ink bg-white p-4 text-left font-bold shadow-[3px_3px_0_#171313] transition-transform hover:-translate-y-0.5 hover:bg-blush"
              >
                <span className="mr-3 inline-grid h-8 w-8 place-items-center border-2 border-ink bg-panel font-black group-hover:bg-punch group-hover:text-white">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                {option.text}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button
              onClick={goBack}
              disabled={index === 0}
              className="focus-ring rounded-sm font-black underline decoration-2 underline-offset-4 disabled:cursor-not-allowed disabled:opacity-35"
            >
              Back
            </button>
            <span className="text-sm font-black">Auto-advances after your choice</span>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-8 max-w-3xl manga-panel-soft p-5">
        <h2 className="font-display text-2xl font-black">About this Dere Type Quiz</h2>
        <p className="mt-3 leading-7">
          This Dere Type Quiz checks five anime affection tropes with one short flow: Tsundere, Yandere,
          Kuudere, Dandere, and Deredere. Each answer adds points to one or more Dere types, then the
          highest score becomes your result.
        </p>
        <p className="mt-3 leading-7">
          Use it when someone says you are a tsundere, when you want to compare Tsundere vs Yandere,
          or when you want a quick anime personality quiz result to share. The quiz is for fandom fun,
          not a real diagnosis.
        </p>
      </section>
    </main>
  );
}
