import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Are You a Yandere? Take the Dere Type Quiz",
  description:
    "Wondering if you are a Yandere? Take the free Dere Type Quiz to compare Yandere, Tsundere, Kuudere, Dandere, and Deredere results in 12 questions.",
  path: "/are-you-a-yandere",
  keywords: [
    "are you a yandere",
    "you are a yandere",
    "you are yandere",
    "are you yandere",
    "your a yandere",
    "yandere quiz",
    "dere type quiz"
  ]
});

const faq = [
  {
    q: "Are you a Yandere?",
    a: "You might get a Yandere result if your quiz answers lean toward fictional intensity, dramatic loyalty, and over-the-top anime devotion."
  },
  {
    q: "What does it mean if someone says you are a Yandere?",
    a: "In anime fandom, it means they are comparing you to a fictional character trope with intense attachment. It should stay fictional and playful."
  },
  {
    q: "Is Yandere behavior romantic in real life?",
    a: "No. Real control, stalking, threats, or harm are not romantic. This page uses Yandere only as a PG-13 anime trope."
  },
  {
    q: "Is \"your a yandere\" the same as \"you're a yandere\"?",
    a: "Yes. \"You're a yandere\" is the correct grammar. \"Your a yandere\" is a common search typo people use when looking for the same idea."
  }
];

export default function AreYouAYanderePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  return (
    <main className="min-h-screen px-5 py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Yandere check</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-none md:text-7xl">
            Are You a <span className="text-punch">Yandere?</span>
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8">
            If someone says you are a Yandere, they are pointing at the dramatic side of anime affection:
            intense, loyal, and way too cinematic. Take the Dere Type Quiz to see whether your result is
            Yandere, Tsundere, Kuudere, Dandere, or Deredere.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/quiz"
              className="focus-ring rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga"
            >
              Start Quiz
            </Link>
            <Link href="/dere-types/yandere" className="focus-ring rounded-sm font-black underline decoration-2 underline-offset-4 hover:text-punch">
              Read Yandere meaning
            </Link>
          </div>
        </div>
        <aside className="manga-panel-soft p-5">
          <div className="relative h-72 overflow-hidden border-3 border-ink bg-panel">
            <Image src={dereArt.yandere} alt="Original Yandere cracked heart manga illustration" fill sizes="(min-width: 1024px) 42vw, 100vw" className="manga-art" priority />
          </div>
          <p className="mt-4 text-lg font-black">Fictional chaos. Keep it on-screen.</p>
          <p className="mt-2 leading-7">
            This Yandere page is for anime trope search intent, not relationship advice. The quiz keeps the joke safe,
            clear, and focused on fandom labels.
          </p>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <div className="manga-panel-soft p-5">
          <h2 className="font-display text-2xl font-black">What the quiz checks</h2>
          <p className="mt-3 leading-7">
            The Dere Type Quiz does not ask whether real behavior is healthy or unhealthy. It asks which fictional anime
            response pattern your answers resemble: sharp denial, dramatic devotion, cool restraint, shy silence, or open warmth.
          </p>
        </div>
        <div className="manga-panel-soft p-5">
          <h2 className="font-display text-2xl font-black">Yandere vs Tsundere</h2>
          <p className="mt-3 leading-7">
            Tsundere hides affection behind pride and teasing. Yandere turns affection into intense fictional drama.
            If you are not sure which one fits, the quiz compares both through the same 12 questions.
          </p>
        </div>
        <div className="manga-panel-soft p-5">
          <h2 className="font-display text-2xl font-black">Safe interpretation</h2>
          <p className="mt-3 leading-7">
            A Yandere result is a fandom label for a result card, not a diagnosis. Keep the trope in stories, jokes,
            and anime discussion.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">Yandere FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="border-t-2 border-ink pt-4">
              <h3 className="font-black">{item.q}</h3>
              <p className="mt-2 leading-7">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
