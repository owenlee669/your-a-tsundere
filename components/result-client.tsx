"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ResultCard } from "@/components/result-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import type { DereTypeSlug, Scores } from "@/lib/quiz-data";
import { dereTypeOrder, getInitialScores, typeBySlug } from "@/lib/quiz-data";
import { trackEvent } from "@/lib/analytics";

type StoredResult = {
  result: DereTypeSlug;
  scores: Scores;
};

function isDereType(value: string | null): value is DereTypeSlug {
  return !!value && dereTypeOrder.includes(value as DereTypeSlug);
}

export function ResultClient() {
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);
  const [stored, setStored] = useState<StoredResult | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const queryType = searchParams.get("type");

  useEffect(() => {
    const raw = window.sessionStorage.getItem("dere-quiz-result");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as StoredResult;
        if (isDereType(parsed.result)) setStored(parsed);
      } catch {
        setStored(null);
      }
    }
  }, []);

  const resultSlug = useMemo<DereTypeSlug>(() => {
    if (isDereType(queryType)) return queryType;
    return stored?.result || "tsundere";
  }, [queryType, stored?.result]);

  const hasResult = isDereType(queryType) || !!stored;
  const type = typeBySlug[resultSlug];
  const scores = useMemo(() => {
    if (stored?.scores) return stored.scores;
    const fallback = getInitialScores();
    fallback[resultSlug] = 1;
    return fallback;
  }, [resultSlug, stored?.scores]);

  useEffect(() => {
    if (!hasResult) return;
    trackEvent("quiz_result_view", { result_type: resultSlug });
  }, [hasResult, resultSlug]);

  async function downloadCard() {
    const resultImage = await loadCanvasImage(dereArt[resultSlug]);
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1500;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.fillStyle = "#fbf4e7";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "rgba(23, 19, 19, 0.08)";
    for (let x = 24; x < canvas.width; x += 36) {
      for (let y = 24; y < canvas.height; y += 36) {
        context.beginPath();
        context.arc(x, y, 2, 0, Math.PI * 2);
        context.fill();
      }
    }

    context.strokeStyle = "#171313";
    context.lineWidth = 12;
    context.strokeRect(42, 42, 916, 1416);
    context.lineWidth = 5;
    context.strokeRect(70, 70, 860, 1360);

    context.fillStyle = type.color;
    context.fillRect(70, 70, 860, 124);
    context.fillStyle = "#fff9ed";
    context.font = "900 46px Georgia";
    context.fillText("DereType Quiz", 104, 148);

    context.fillStyle = "#171313";
    context.font = "900 42px Georgia";
    context.fillText("Your Result", 104, 280);
    context.font = "900 92px Georgia";
    context.fillText(type.name, 104, 382);

    context.fillStyle = type.color;
    context.font = "900 56px Georgia";
    context.fillText(type.badge, 104, 468);

    context.fillStyle = "#171313";
    context.font = "900 44px Arial";
    wrapText(context, type.oneLiner, 104, 560, 780, 58);

    context.strokeStyle = "#171313";
    context.lineWidth = 6;
    context.strokeRect(104, 690, 792, 260);
    context.fillStyle = "#fff9ed";
    context.fillRect(110, 696, 780, 248);
    if (resultImage) {
      drawImageCover(context, resultImage, 110, 696, 290, 248);
    } else {
      context.fillStyle = type.color;
      context.font = "900 128px Georgia";
      context.fillText(type.symbol, 160, 850);
    }
    context.strokeStyle = "#171313";
    context.lineWidth = 4;
    context.strokeRect(110, 696, 290, 248);
    context.fillStyle = "#171313";
    context.font = "900 40px Arial";
    wrapText(context, type.tags.join(" / "), 438, 790, 420, 52);

    context.font = "900 36px Arial";
    context.fillText("Damage Report", 104, 1040);
    const scoreEntries = dereTypeOrder.map((slug) => [slug, scores[slug]] as const);
    const maxScore = Math.max(...scoreEntries.map(([, score]) => score), 1);
    scoreEntries.forEach(([slug, value], i) => {
      const y = 1102 + i * 48;
      context.fillStyle = "#171313";
      context.font = "900 26px Arial";
      context.fillText(typeBySlug[slug].name, 104, y);
      context.strokeStyle = "#171313";
      context.lineWidth = 4;
      context.strokeRect(310, y - 24, 450, 24);
      context.fillStyle = typeBySlug[slug].color;
      context.fillRect(312, y - 22, Math.max(20, (value / maxScore) * 446), 20);
      context.fillStyle = "#171313";
      context.fillText(String(value), 792, y);
    });

    context.fillStyle = "#171313";
    context.font = "900 27px Arial";
    context.fillText("Take the quiz:", 104, 1356);
    context.fillStyle = type.color;
    context.font = "900 34px Arial";
    context.fillText("youareatsundere.com", 104, 1404);

    const png = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = png;
    link.download = `deretype-${resultSlug}.png`;
    link.click();
    trackEvent("result_card_download", { result_type: resultSlug });
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copiedText = document.execCommand("copy");
      textarea.remove();
      return copiedText;
    }
  }

  async function copyText(kind: "text" | "link") {
    const siteUrl = window.location.origin;
    const resultUrl = `${siteUrl}/result?type=${resultSlug}`;
    const text =
      kind === "text"
        ? `${type.shareText}\nTake the quiz: ${siteUrl}`
        : resultUrl;

    if (await copyToClipboard(text)) {
      setCopied(kind);
      trackEvent(kind === "text" ? "share_text_copy" : "result_link_copy", {
        result_type: resultSlug
      });
      window.setTimeout(() => setCopied(null), 1600);
    }
  }

  if (!hasResult) {
    return (
      <main className="min-h-screen px-5 py-4">
        <SiteHeader />
        <section className="mx-auto max-w-3xl py-12">
          <div className="manga-panel p-6 md:p-8">
            <p className="text-sm font-black uppercase text-punch">No result yet</p>
            <h1 className="mt-3 font-display text-5xl font-black leading-none md:text-7xl">
              Take the Quiz First
            </h1>
            <p className="mt-5 text-xl font-bold leading-8">
              Result links need a type, like <span className="text-punch">/result?type=tsundere</span>.
              If you landed here without one, start the quiz and get your own card.
            </p>
            <Link href="/quiz" className="focus-ring mt-6 inline-flex rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga">
              Start Quiz, Baka
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 py-4">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="inline-flex border-2 border-ink bg-white px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0_#171313]">
            Your Result
          </p>
          <h1 className="mt-5 font-display text-5xl font-black leading-none md:text-7xl">
            Your Result: <span className="text-punch">{type.name}</span>
          </h1>
          <p className="mt-5 text-xl font-bold leading-8">{type.oneLiner}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={downloadCard}
              className="focus-ring rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga"
            >
              Download Result Card
            </button>
            <button
              onClick={() => copyText("text")}
              className="focus-ring rounded-md border-3 border-ink bg-white px-5 py-3 font-black shadow-[3px_3px_0_#171313]"
            >
              {copied === "text" ? "Copied" : "Copy Share Text"}
            </button>
            <button
              onClick={() => copyText("link")}
              className="focus-ring rounded-md border-3 border-ink bg-white px-5 py-3 font-black shadow-[3px_3px_0_#171313]"
            >
              {copied === "link" ? "Copied" : "Copy Result Link"}
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 font-black">
            <Link href="/quiz" className="underline decoration-2 underline-offset-4 hover:text-punch">
              Retake Quiz
            </Link>
            <Link href="/dere-types" className="underline decoration-2 underline-offset-4 hover:text-punch">
              See All Dere Types
            </Link>
          </div>
        </div>

        <ResultCard type={type} scores={scores} cardRef={cardRef} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <Info title="What this result means" items={[type.definition]} />
        <Info title="Your strengths" items={type.strengths} />
        <Info title="Your weak spots" items={type.weakSpots} />
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6">
        <h2 className="font-display text-3xl font-black">Anime vibe</h2>
        <p className="mt-3 text-lg leading-8">{type.animeVibe}</p>
        {type.slug === "yandere" && (
          <p className="mt-4 border-l-4 border-punch pl-4 font-bold">
            Yandere is a fictional anime trope. Please keep the chaos on-screen.
          </p>
        )}
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6">
        <h2 className="font-display text-3xl font-black">What to do with this result</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Info title="Read the meaning" items={[`Open the ${type.name} meaning page if you want the full trope explanation, common signs, and safe fandom context.`]} />
          <Info title="Compare nearby types" items={["Tsundere, Yandere, Kuudere, Dandere, and Deredere can overlap in anime characters. Your score shows the strongest match, not a fixed label."]} />
          <Info title="Share the card" items={["Download the manga-style result card or copy your result link if you want to send the quiz result to friends."]} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function loadCanvasImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawImageCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number
) {
  const scale = Math.max(width / image.width, height / image.height);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.width - sourceWidth) / 2;
  const sourceY = (image.height - sourceHeight) / 2;
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

function wrapText(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word) => {
    const testLine = line ? `${line} ${word}` : word;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) context.fillText(line, x, y);
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="manga-panel-soft p-5">
      <h2 className="font-display text-2xl font-black">{title}</h2>
      <ul className="mt-3 space-y-3 leading-7">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
