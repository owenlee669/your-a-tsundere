import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { dereTypes } from "@/lib/quiz-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "What Are Dere Types? Tsundere, Yandere, Kuudere, Dandere and Deredere",
  description:
    "Learn the five main Dere types, compare their anime traits, then take the Dere Type Quiz to find your result.",
  path: "/dere-types"
});

export default function DereTypesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Dere type?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Dere type is a fandom term for anime personality archetypes that describe how characters express affection, emotion, and social warmth."
        }
      },
      {
        "@type": "Question",
        name: "Which Dere type is the most popular?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tsundere and Yandere are the most widely searched types, but Kuudere, Dandere, and Deredere are also common in anime fandom."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen px-5 py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <section className="mx-auto max-w-6xl py-10">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Dere type guide</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            What Are <span className="text-punch">Dere Types?</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-8">
            Dere types are anime personality archetypes for how characters handle affection.
            Some deny feelings. Some go silent. Some become sunshine with legs.
          </p>
          <Link
            href="/quiz"
            className="focus-ring mt-6 inline-flex rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga"
          >
            Start Quiz, Baka
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {dereTypes.map((type) => (
          <Link key={type.slug} href={`/dere-types/${type.slug}`} className="focus-ring manga-panel-soft p-5 transition-transform hover:-translate-y-1">
            <div className="relative h-44 overflow-hidden border-2 border-ink bg-panel">
              <Image src={dereArt[type.slug]} alt={`${type.name} manga-style Dere type illustration`} fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" className="manga-art" />
            </div>
            <h2 className="mt-4 font-display text-3xl font-black" style={{ color: type.color }}>
              {type.name}
            </h2>
            <p className="mt-2 font-black">{type.oneLiner}</p>
            <p className="mt-3 leading-7">{type.definition}</p>
          </Link>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
