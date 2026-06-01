"use client";

import Image from "next/image";
import { dereArt } from "@/lib/dere-assets";
import type { DereType, Scores } from "@/lib/quiz-data";
import { dereTypeOrder, typeBySlug } from "@/lib/quiz-data";

export function ResultCard({
  type,
  scores,
  cardRef
}: {
  type: DereType;
  scores?: Scores;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const maxScore = scores ? Math.max(...Object.values(scores), 1) : 1;

  return (
    <div
      ref={cardRef}
      className="manga-panel relative overflow-hidden p-5"
      style={{ background: "#fff9ed" }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blush halftone opacity-70" />
      <div className="relative flex items-start justify-between gap-4 border-b-3 border-ink pb-4">
        <div>
          <p className="text-xs font-black uppercase text-punch">DereType Quiz</p>
          <p className="font-display text-4xl font-black">{type.badge}</p>
        </div>
        <span
          className="grid h-14 w-14 place-items-center rounded-full border-3 border-ink font-display text-3xl font-black text-white"
          style={{ background: type.color }}
        >
          {type.symbol}
        </span>
      </div>
      <div className="relative grid gap-5 pt-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-44 overflow-hidden border-3 border-ink bg-panel">
          <Image src={dereArt[type.slug]} alt={`${type.name} manga-style quiz result art`} fill sizes="(min-width: 768px) 280px, 100vw" className="manga-art" />
        </div>
        <div>
          <p className="text-sm font-black uppercase">Your Result</p>
          <h2 className="font-display text-5xl font-black leading-none" style={{ color: type.color }}>
            {type.name}
          </h2>
          <p className="mt-4 text-2xl font-black leading-tight">{type.oneLiner}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {type.tags.map((tag) => (
              <span key={tag} className="border-2 border-ink bg-white px-2 py-1 text-xs font-black">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {scores && (
        <div className="relative mt-5 border-t-2 border-ink pt-4">
          <p className="mb-3 text-xs font-black uppercase">Damage report</p>
          <div className="grid gap-2">
            {dereTypeOrder.map((slug) => {
              const value = scores[slug];
              const width = `${Math.max(8, Math.round((value / maxScore) * 100))}%`;
              return (
                <div key={slug} className="grid grid-cols-[86px_1fr_24px] items-center gap-2 text-xs font-black">
                  <span>{typeBySlug[slug].name}</span>
                  <span className="h-3 border-2 border-ink bg-white">
                    <span
                      className="block h-full"
                      style={{ width, background: typeBySlug[slug].color }}
                    />
                  </span>
                  <span>{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <p className="relative mt-5 text-xs font-black uppercase">
        Free. No login. No email. Just emotional damage.
      </p>
    </div>
  );
}
