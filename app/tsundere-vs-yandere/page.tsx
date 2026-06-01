import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tsundere vs Yandere: Meaning, Difference and Quiz",
  description:
    "Compare Tsundere and Yandere meanings, traits, and anime examples. Learn the difference, then take the Dere Type Quiz.",
  path: "/tsundere-vs-yandere"
});

export default function TsundereVsYanderePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Tsundere and Yandere?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tsundere is about defensive denial hiding affection. Yandere is a fictional trope about intense attachment and dramatic devotion."
        }
      },
      {
        "@type": "Question",
        name: "Is Yandere romantic in real life?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Yandere is a fictional anime trope. Real control, stalking, threats, or harm are not romantic."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen px-5 py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <article className="mx-auto max-w-6xl py-10">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Dere comparison</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            Tsundere vs <span className="text-punch">Yandere</span>
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8">
            Tsundere says “It&apos;s not like I like you.” Yandere says the plot has become unstable.
            One is prickly denial. The other is fictional chaos with a warning label.
          </p>
          <Link href="/quiz" className="focus-ring mt-6 inline-flex rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga">
            Start Quiz, Baka
          </Link>
        </div>
      </article>
      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        <div className="manga-panel-soft p-5">
          <div className="relative h-56 overflow-hidden border-2 border-ink bg-panel">
            <Image src={dereArt.tsundere} alt="Original Tsundere manga illustration" fill sizes="(min-width: 768px) 45vw, 100vw" className="manga-art" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-black text-punch">Tsundere</h2>
          <p className="mt-3 leading-7">
            A tsundere hides affection behind teasing, defensiveness, and dramatic denial.
            The joke is that everyone can see the softness except the tsundere.
          </p>
        </div>
        <div className="manga-panel-soft p-5">
          <div className="relative h-56 overflow-hidden border-2 border-ink bg-panel">
            <Image src={dereArt.yandere} alt="Original Yandere manga-style cracked heart emblem" fill sizes="(min-width: 768px) 45vw, 100vw" className="manga-art" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-black text-punch">Yandere</h2>
          <p className="mt-3 leading-7">
            A yandere is a fictional archetype built around intense attachment and
            over-the-top devotion. Keep the chaos in fiction where it belongs.
          </p>
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6">
        <h2 className="font-display text-3xl font-black">Quick difference</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Info title="Core tension" text="Tsundere is denial versus affection. Yandere is devotion versus boundaries." />
          <Info title="Best search intent" text="Tsundere searches often want meaning or a quiz. Yandere searches often want signs, tests, or fictional roleplay context." />
          <Info title="Safe interpretation" text="Both are anime tropes. They are fun as fictional labels, not real relationship advice." />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-l-4 border-punch pl-4">
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 leading-7">{text}</p>
    </div>
  );
}
