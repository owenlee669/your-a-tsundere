import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { dereTypes } from "@/lib/quiz-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dere Types: Tsundere, Yandere, Kuudere and More",
  description:
    "Learn the main Dere types: Tsundere, Yandere, Kuudere, Dandere, and Deredere. Compare traits, meanings, examples, and take the quiz to find yours.",
  path: "/dere-types",
  keywords: [
    "dere types",
    "what are dere types",
    "tsundere yandere kuudere dandere deredere",
    "anime personality archetypes",
    "dere type quiz"
  ]
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
      },
      {
        "@type": "Question",
        name: "Can a quiz tell me my Dere type?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Dere Type Quiz can sort your answers into a fandom result, but it is for entertainment and does not diagnose real personality."
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
          <p className="mt-4 max-w-3xl leading-7">
            This guide explains the five Dere types used in the quiz: Tsundere, Yandere,
            Kuudere, Dandere, and Deredere. Each type describes a different way affection
            shows up in anime stories, from loud denial to quiet warmth.
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
      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">How to read Dere types</h2>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">Look at expression</h3>
            <p className="mt-2 leading-7">
              Dere types are less about a fixed personality box and more about how a character expresses affection.
              A Tsundere may care while denying it, while a Deredere shows care openly.
            </p>
          </div>
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">Keep the trope fictional</h3>
            <p className="mt-2 leading-7">
              Yandere, Kuudere, Dandere, and the other Dere types are fandom labels. They are useful for anime jokes,
              result cards, and character discussion, not for judging real people.
            </p>
          </div>
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">Use the quiz as a shortcut</h3>
            <p className="mt-2 leading-7">
              If you only want the quick answer, take the Dere Type Quiz. It compares the five Dere types with the
              same 12 questions so your result is easier to understand.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">Dere Types FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">What are Dere types in anime?</h3>
            <p className="mt-2 leading-7">
              Dere types are anime fandom terms for affection styles. They describe whether a character hides feelings,
              stays calm, goes quiet, acts intense, or shows warmth directly.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">Which Dere type should I start with?</h3>
            <p className="mt-2 leading-7">
              Start with Tsundere if someone says you are a tsundere, or Yandere if you are checking the dramatic side.
              The quiz gives a faster answer than reading every type first.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
