import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tsundere vs Yandere: Meaning and Difference",
  description:
    "Compare Tsundere vs Yandere meanings, traits, anime trope differences, and safe fictional context, then take the Dere Type Quiz to check yours.",
  path: "/tsundere-vs-yandere",
  keywords: [
    "tsundere vs yandere",
    "tsundere and yandere difference",
    "tsundere meaning",
    "yandere meaning",
    "are you a yandere",
    "dere type quiz"
  ]
});

const faq = [
  {
    q: "What is the difference between Tsundere and Yandere?",
    a: "Tsundere acts cold when they actually care. Yandere is anime drama built around intense attachment."
  },
  {
    q: "Is Yandere romantic in real life?",
    a: "No. Yandere is a fictional anime trope. Real control, stalking, threats, or harm are not romantic."
  },
  {
    q: "Can someone be both Tsundere and Yandere?",
    a: "In fiction, a character can mix traits, but the tropes point in different directions: Tsundere hides care with denial, while Yandere exaggerates attachment into drama."
  },
  {
    q: "Should I take a Tsundere quiz or a Yandere quiz?",
    a: "Take the Dere Type Quiz if you want both checked at once. It compares Tsundere, Yandere, Kuudere, Dandere, and Deredere with the same 12 questions."
  }
];

const comparisonRows = [
  ["Core meaning", "Acts prickly to hide affection", "Devotion gets too intense for the story"],
  ["How affection shows", "Denial, teasing, sudden helpful moments", "Big feelings, possessive energy, dramatic scenes"],
  ["Typical anime behavior", "Says \"I do not care\" while clearly caring", "Things go off the rails fast"],
  ["Funny part", "Everyone sees the softness except them", "The drama is exaggerated on purpose"],
  ["Red flag line", "Being rude without the caring payoff", "Real control, stalking, threats, or harm"],
  ["Quiz signal", "Pride, sarcasm, flustered reactions", "Fictional intensity and over-the-top loyalty"]
];

export default function TsundereVsYanderePage() {
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
      <article className="mx-auto max-w-6xl py-10">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Dere comparison</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            Tsundere vs <span className="text-punch">Yandere</span>
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-bold leading-8">
            Tsundere says &quot;It&apos;s not like I like you.&quot; Yandere is where things go off the rails fast.
            One hides warmth behind pride. The other is anime drama with big red flags.
          </p>
          <p className="mt-4 max-w-3xl leading-7">
            The Tsundere vs Yandere difference matters because both can look intense from the outside.
            A Tsundere is usually embarrassed by affection. A Yandere is a fictional trope built around attachment
            that becomes too dramatic for real life.
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
            over-the-top devotion. We keep Yandere strictly in anime territory.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6">
        <h2 className="font-display text-3xl font-black">Quick difference</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Info title="Core tension" text="Tsundere is denial versus affection. Yandere is devotion crashing into boundaries." />
          <Info title="Best search intent" text="Tsundere searches often want meaning or a quiz. Yandere searches often want signs, tests, or fictional roleplay context." />
          <Info title="Safe interpretation" text="Both are anime tropes. Use them as fictional labels, not relationship advice." />
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">Tsundere vs Yandere comparison table</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] border-3 border-ink bg-panel text-left">
            <thead>
              <tr className="border-b-3 border-ink bg-punch text-white">
                <th className="border-r-2 border-ink p-3 font-black">Point</th>
                <th className="border-r-2 border-ink p-3 font-black">Tsundere</th>
                <th className="p-3 font-black">Yandere</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([point, tsundere, yandere]) => (
                <tr key={point} className="border-b-2 border-ink last:border-b-0">
                  <td className="border-r-2 border-ink p-3 font-black">{point}</td>
                  <td className="border-r-2 border-ink p-3 leading-7">{tsundere}</td>
                  <td className="p-3 leading-7">{yandere}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">Tsundere vs Yandere in plain English</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">Tsundere meaning</h3>
            <p className="mt-2 leading-7">
              Tsundere means a character acts sharp, proud, or annoyed while slowly revealing a softer side.
              If someone says you are such a tsundere, they usually mean your care is visible even when you deny it.
              The comedy comes from the mismatch between the words and the obvious affection.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">Yandere meaning</h3>
            <p className="mt-2 leading-7">
              Yandere means a fictional anime archetype where affection becomes intense, possessive, or dramatically
              unstable. It can be fun as a story trope, but real control, threats, or harm are not romantic.
              We keep it strictly in anime territory.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">Which one fits a quiz result?</h3>
            <p className="mt-2 leading-7">
              A Tsundere result usually fits answers about denial, sarcasm, pride, and accidental kindness.
              A Yandere result fits answers about fictional intensity and dramatic devotion. The Dere Type Quiz
              compares both against Kuudere, Dandere, and Deredere so the result is not forced into one pair.
            </p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-black">Why people search both terms</h3>
            <p className="mt-2 leading-7">
              People search Tsundere vs Yandere when a character, meme, or quiz result feels close to both.
              The terms sound similar, but the emotional pattern is different: Tsundere hides warmth, while Yandere
              pushes attachment into fictional drama.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6 md:p-8">
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
