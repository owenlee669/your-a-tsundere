import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { heroResultCardArt } from "@/lib/dere-assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Are You a Tsundere? Free Dere Type Quiz",
  description:
    "Take a free 12-question Dere Type Quiz to check if you are Tsundere, Yandere, Kuudere, Dandere, or Deredere. No signup needed.",
  path: "/",
  keywords: [
    "are you a tsundere",
    "dere type quiz",
    "tsundere quiz",
    "anime personality quiz",
    "tsundere vs yandere",
    "dere types"
  ]
});

const seoCards = [
  {
    title: "What is a Dere Type?",
    text: "Learn the anime archetypes behind Tsundere, Yandere, Kuudere, Dandere, and Deredere.",
    href: "/dere-types",
    cta: "Learn the types"
  },
  {
    title: "Tsundere vs Yandere",
    text: "Compare prickly pride, fictional chaos, and the line between funny trope and red flag.",
    href: "/tsundere-vs-yandere",
    cta: "Compare them"
  },
  {
    title: "What does tsundere mean?",
    text: "Read the plain-English meaning, common traits, and why denial is the whole joke.",
    href: "/dere-types/tsundere",
    cta: "Read Tsundere"
  }
];

const homeFaq = [
  {
    q: "What does Are You a Tsundere mean?",
    a: "It asks whether your answers match the Tsundere anime trope: defensive, easily flustered, and warmer than you want to admit."
  },
  {
    q: "How does the Dere Type Quiz work?",
    a: "You answer 12 short questions. Each answer adds points toward Tsundere, Yandere, Kuudere, Dandere, or Deredere, then the highest score becomes your result."
  },
  {
    q: "Is this a real personality test?",
    a: "No. This is an anime personality quiz for fandom fun. It is not a psychological diagnosis or relationship advice."
  },
  {
    q: "Can I get a Yandere result?",
    a: "Yes. Yandere is one possible result, but the quiz treats it as a fictional anime trope and keeps the real-world safety line clear."
  },
  {
    q: "Can I share my result?",
    a: "Yes. The result page lets you copy a result link, copy share text, and download a manga-style result card."
  }
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "DereType Quiz",
        applicationCategory: "EntertainmentApplication",
        operatingSystem: "Any",
        description:
          "A free 12-question Dere Type Quiz for Tsundere, Yandere, Kuudere, Dandere, and Deredere results.",
        url: process.env.NEXT_PUBLIC_SITE_URL || "https://deretypequiz.com"
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen px-5 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16">
        <div className="manga-panel relative overflow-hidden p-6 md:p-8">
          <div className="absolute right-4 top-4 h-20 w-20 rotate-12 rounded-full bg-blush halftone opacity-60" />
          <h1 className="slash-title relative font-display text-5xl font-black leading-[0.92] md:text-7xl">
            Are You a <span className="text-punch">Tsundere?!</span>
          </h1>
          <p className="relative mt-6 max-w-2xl text-lg font-semibold leading-8 md:text-xl">
            Take the 12-question Dere Type Quiz and discover if you&apos;re
            Tsundere, Yandere, Kuudere, Dandere, or Deredere.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="/quiz"
              className="focus-ring rounded-md border-3 border-ink bg-punch px-6 py-4 text-lg font-black text-white shadow-manga transition-transform hover:-translate-y-1"
            >
              Start Quiz, Baka
            </Link>
            <Link href="/dere-types/tsundere" className="focus-ring rounded-sm font-black underline decoration-2 underline-offset-4 hover:text-punch">
              What does tsundere mean?
            </Link>
          </div>
          <p className="relative mt-5 text-sm font-black">
            Free. No login. No email. Just emotional damage.
          </p>
        </div>

        <aside className="manga-panel rotate-0 p-5 md:rotate-1">
          <div className="flex items-start justify-between gap-4 border-b-3 border-ink pb-4">
            <div>
              <p className="text-xs font-black uppercase text-punch">Preview result card</p>
              <h2 className="font-display text-3xl font-black">Certified Tsundere</h2>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-full border-3 border-ink bg-punch font-display text-3xl font-black text-white">
              !
            </span>
          </div>
          <div className="grid gap-5 pt-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-72 overflow-hidden border-3 border-ink bg-panel">
              <Image src={heroResultCardArt} alt="Manga certificate frame with an original Tsundere character" fill sizes="(min-width: 768px) 28vw, 100vw" className="manga-art" priority />
              <div className="absolute bottom-4 left-4 right-4 border-3 border-ink bg-panel px-4 py-3 text-center shadow-[3px_3px_0_#171313]">
                <p className="text-xs font-black uppercase">Certified</p>
                <p className="font-display text-3xl font-black leading-none text-punch">Tsundere</p>
              </div>
            </div>
            <div className="md:self-end">
              <p className="text-2xl font-black leading-tight">
                Loud denial. Suspiciously soft center.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Proud", "Easily Flustered", "Secretly Caring"].map((tag) => (
                  <span key={tag} className="border-2 border-ink bg-white px-2 py-1 text-xs font-black">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/quiz"
                className="focus-ring manga-cta mt-6 inline-flex min-w-44 items-center justify-center rounded-md border-3 border-ink bg-punch px-4 py-3 font-black shadow-[3px_3px_0_#171313]"
              >
                See if this is you
              </Link>
            </div>
          </div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {seoCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="focus-ring manga-panel-soft p-5 transition-transform hover:-translate-y-1"
          >
            <h2 className="font-display text-2xl font-black">{card.title}</h2>
            <p className="mt-3 leading-7">{card.text}</p>
            <span className="mt-5 inline-flex font-black text-punch">{card.cta} -&gt;</span>
          </Link>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-6xl manga-panel p-6 md:p-8">
        <p className="text-sm font-black uppercase text-punch">How it works</p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {[
            ["Answer 12 questions", "Pick the option that feels painfully accurate. Denial counts."],
            ["Get your Dere type", "Your score maps to Tsundere, Yandere, Kuudere, Dandere, or Deredere."],
            ["Share the damage", "Download a manga-style result card and send it to the friend group."]
          ].map(([title, text]) => (
            <div key={title} className="border-l-4 border-punch pl-4">
              <h2 className="font-display text-2xl font-black">{title}</h2>
              <p className="mt-2 leading-7">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">Dere Type Quiz FAQ</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {homeFaq.map((item) => (
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
