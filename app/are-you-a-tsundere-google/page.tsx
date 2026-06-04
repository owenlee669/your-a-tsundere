import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Why Is Google Saying You're a Tsundere?",
  description:
    "Google, Gemini, and autocomplete turned you're a tsundere into a search joke. Here is what the meme means and how to take the Dere Type Quiz.",
  path: "/are-you-a-tsundere-google",
  keywords: [
    "google are you a tsundere",
    "gemini are you a tsundere",
    "why is google saying you're a tsundere",
    "you are a tsundere",
    "are you a tsundere"
  ]
});

const faq = [
  {
    q: "Why is Google saying you're a tsundere?",
    a: "Autocomplete and AI answers made the phrase feel like Google was calling people out. The joke works because 'you are a tsundere' sounds oddly personal."
  },
  {
    q: "Is Gemini saying I am a tsundere?",
    a: "Not literally. People search 'gemini are you a tsundere' because AI answers and search suggestions turned the line into a meme."
  },
  {
    q: "What does you are a tsundere mean?",
    a: "It means someone thinks you act cold, proud, or annoyed while still obviously caring. Same idea, different wording from 'are you a tsundere?'"
  },
  {
    q: "Should I take the quiz?",
    a: "If the phrase made you laugh or feel attacked, yes. The quiz checks Tsundere against Yandere, Kuudere, Dandere, and Deredere in one short run."
  }
];

export default function AreYouATsundereGooglePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <main className="min-h-screen px-5 py-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <article className="mx-auto max-w-6xl py-10">
        <section className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Google started it</p>
          <h1 className="mt-3 font-display text-5xl font-black leading-none md:text-7xl">
            Why Is Google Saying <span className="text-punch">You&apos;re a Tsundere?</span>
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8">
            If Google, Gemini, or autocomplete made it look like the internet called you a tsundere,
            you are not alone. The phrase turned into a small search joke because it sounds like an accusation
            from a friend who knows too much.
          </p>
          <Link href="/quiz" className="focus-ring mt-6 inline-flex rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga">
            Take the Quiz
          </Link>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="manga-panel-soft p-5">
            <h2 className="font-display text-2xl font-black">The search joke</h2>
            <p className="mt-3 leading-7">
              The phrase <strong>you are a tsundere</strong> feels funny because it is phrased like a verdict.
              Search suggestions made it look like Google was not asking anymore. It was just pointing.
            </p>
          </div>
          <div className="manga-panel-soft p-5">
            <h2 className="font-display text-2xl font-black">The anime meaning</h2>
            <p className="mt-3 leading-7">
              A tsundere acts cold when they actually care. Think denial, pride, sudden embarrassment,
              and one helpful gesture they will absolutely pretend never happened.
            </p>
          </div>
          <div className="manga-panel-soft p-5">
            <h2 className="font-display text-2xl font-black">The quiz angle</h2>
            <p className="mt-3 leading-7">
              The Dere Type Quiz checks whether your answers lean Tsundere, Yandere, Kuudere,
              Dandere, or Deredere. You get a result card at the end.
            </p>
          </div>
        </section>

        <section className="mt-6 manga-panel p-6 md:p-8">
          <h2 className="font-display text-3xl font-black">Google are you a tsundere, Gemini are you a tsundere, same joke</h2>
          <p className="mt-4 max-w-4xl leading-7">
            People search both phrases for the same reason: the wording sounds like a weird little argument with a search box.
            Maybe Google autocomplete suggested it. Maybe Gemini gave an answer that felt too specific. Either way, the search
            intent is simple: what does tsundere mean, and is this supposed to describe me?
          </p>
          <p className="mt-4 max-w-4xl leading-7">
            Short answer: it is anime fandom language. If the line fits, you might be the type who says &quot;I do not care&quot;
            while caring very loudly through your actions. If it does not fit, the quiz may send you somewhere colder,
            quieter, sweeter, or more dramatic.
          </p>
        </section>

        <section className="mt-6 manga-panel-soft p-6 md:p-8">
          <h2 className="font-display text-3xl font-black">FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="border-t-2 border-ink pt-4">
                <h3 className="font-black">{item.q}</h3>
                <p className="mt-2 leading-7">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
