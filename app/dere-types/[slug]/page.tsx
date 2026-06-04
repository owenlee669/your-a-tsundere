import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { dereTypes, typeBySlug, type DereTypeSlug } from "@/lib/quiz-data";
import { pageMetadata } from "@/lib/seo";

const typeSeo: Record<DereTypeSlug, { title: string; description: string; keywords: string[] }> = {
  tsundere: {
    title: "Tsundere Meaning: Traits, Signs and Quiz Result",
    description:
      "Learn the Tsundere meaning, common traits, signs, anime trope examples, and why people say you are such a tsundere before taking the quiz.",
    keywords: ["tsundere meaning", "what is a tsundere", "you are such a tsundere", "tsundere traits", "tsundere quiz"]
  },
  yandere: {
    title: "Yandere Meaning: Traits, Signs and Quiz Result",
    description:
      "Learn the Yandere meaning, fictional anime traits, safe trope context, common signs, and why people search are you a Yandere before taking the quiz.",
    keywords: ["yandere meaning", "what is a yandere", "are you a yandere", "you are a yandere", "your a yandere"]
  },
  kuudere: {
    title: "Kuudere Meaning: Traits, Signs and Quiz Result",
    description:
      "Learn the Kuudere meaning, calm anime traits, common signs, quiz result context, and what it means if someone says you are Kuudere before taking the quiz.",
    keywords: ["kuudere meaning", "what is a kuudere", "you are kuudere", "you're a kuudere", "kuudere traits"]
  },
  dandere: {
    title: "Dandere Meaning: Traits, Signs and Quiz Result",
    description:
      "Learn the Dandere meaning, shy anime traits, common signs, quiz result context, and what it means if someone says you are a Dandere before taking the quiz.",
    keywords: ["dandere meaning", "what is a dandere", "you are a dandere", "your a dandere", "dandere traits"]
  },
  deredere: {
    title: "Deredere Meaning: Traits, Signs and Quiz Result",
    description:
      "Learn the Deredere meaning, cheerful anime traits, common signs, quiz result context, and what it means if someone says you are a Deredere before taking the quiz.",
    keywords: ["deredere meaning", "what is a deredere", "you are a deredere", "you're a deredere", "deredere traits"]
  }
};

const trendFaq: Record<DereTypeSlug, { q: string; a: string }[]> = {
  tsundere: [
    {
      q: "What does it mean if someone says you are such a tsundere?",
      a: "It usually means you act proud, defensive, or annoyed while still showing care. The phrase is a fandom joke, not a serious label."
    },
    {
      q: "Is \"you are a tsundere\" the same as \"are you a tsundere\"?",
      a: "Same idea, different wording. One sounds like someone calling you out; the other sounds like the quiz version."
    }
  ],
  yandere: [
    {
      q: "How do you know if you're a yandere?",
      a: "In fandom terms, a yandere result means you picked intense, dramatic, highly attached fictional responses. It does not describe real-world healthy behavior."
    },
    {
      q: "What are signs you're a yandere?",
      a: "For this quiz, signs are fictional intensity, dramatic loyalty, and over-the-top character energy. Real control, stalking, or harm are not romantic."
    },
    {
      q: "Is \"your a yandere\" the same as \"you're a yandere\"?",
      a: "Yes. \"You're a yandere\" is the correct grammar. \"Your a yandere\" is a common search typo."
    }
  ],
  kuudere: [
    {
      q: "What does it mean if someone says you are Kuudere?",
      a: "It means they see you as calm, hard to read, and emotionally restrained, even if you still care under the surface."
    },
    {
      q: "Is a Kuudere emotionless?",
      a: "No. Kuudere means controlled expression. The affection is subtle, quiet, and usually easier to spot through actions than words."
    }
  ],
  dandere: [
    {
      q: "What does it mean if someone says you are a Dandere?",
      a: "It means they see you as shy, reserved, or quiet until you feel safe enough to open up."
    },
    {
      q: "Is Dandere the same as Kuudere?",
      a: "No. Dandere is usually shy or socially hesitant. Kuudere is usually calm, cool, and controlled."
    }
  ],
  deredere: [
    {
      q: "What does it mean if someone says you are a Deredere?",
      a: "It means they see you as openly warm, cheerful, affectionate, and easy to read."
    },
    {
      q: "Is Deredere too simple compared with other Dere types?",
      a: "No. Deredere is direct affection without the defensive layer, which can be just as memorable as a dramatic trope."
    }
  ]
};

const typeParagraphs: Record<DereTypeSlug, string[]> = {
  tsundere: [
    "Tsundere works because the words and the actions keep disagreeing. The character says they do not care, then remembers your favorite snack, walks you home, or gets weirdly mad when someone else treats you badly.",
    "That push-pull is why Tsundere is one of the easiest anime tropes to recognize. It is not about being mean for no reason. The fun is watching someone act cold when they obviously care.",
    "In the quiz, Tsundere answers usually sound proud, defensive, and a little too embarrassed by affection."
  ],
  yandere: [
    "Yandere belongs in anime drama. The trope is built around devotion that gets too intense, which is why it can be memorable on-screen and a terrible model for real life.",
    "For this site, Yandere means big fictional feelings, possessive character energy, and scenes that go off the rails fast. We keep it strictly in anime territory.",
    "In the quiz, Yandere answers lean dramatic, attached, and over-the-top. The result is a trope label, not advice."
  ],
  kuudere: [
    "Kuudere characters do not need loud reactions to make a point. They stay calm, keep their face under control, and let small actions do most of the talking.",
    "That does not mean they are empty or cold inside. A Kuudere may care a lot, but the signal is quiet: a short message, a practical favor, or one perfectly timed sentence.",
    "In the quiz, Kuudere answers usually choose calm, distance, dry humor, and low-drama affection."
  ],
  dandere: [
    "Dandere is the quiet type who needs safety before the words come out. They may seem hard to approach at first, but the real pattern is shyness, not indifference.",
    "A Dandere moment is often small: avoiding attention, replaying a conversation later, or opening up only when the pressure drops.",
    "In the quiz, Dandere answers lean shy, careful, observant, and soft-spoken."
  ],
  deredere: [
    "Deredere is the most direct of the Dere types. The affection is not hidden behind pride, silence, or a cool face. It is right there.",
    "That openness can be funny because it leaves no mystery. A Deredere character smiles first, supports loudly, and makes warmth feel normal.",
    "In the quiz, Deredere answers usually pick cheerful honesty, quick affection, and zero emotional poker face."
  ]
};

export function generateStaticParams() {
  return dereTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const type = typeBySlug[slug as DereTypeSlug];
  if (!type) return {};
  const seo = typeSeo[type.slug];

  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/dere-types/${type.slug}`,
    keywords: seo.keywords
  });
}

export default async function DereTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = typeBySlug[slug as DereTypeSlug];
  if (!type) notFound();

  const faq = [
    {
      q: `What does ${type.name} mean?`,
      a: type.definition
    },
    {
      q: `Is ${type.name} a serious label?`,
      a: "No. Treat Dere types like anime shorthand, not a personality file."
    },
    ...trendFaq[type.slug]
  ];

  const faqJsonLd = {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />
      <article className="mx-auto grid max-w-6xl gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="manga-panel p-5">
          <div className="relative h-72 overflow-hidden border-3 border-ink bg-panel">
            <Image src={dereArt[type.slug]} alt={`${type.name} manga-style Dere type illustration`} fill sizes="(min-width: 1024px) 36vw, 100vw" className="manga-art" priority />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {type.tags.map((tag) => (
              <span key={tag} className="border-2 border-ink bg-white px-2 py-1 text-xs font-black">
                {tag}
              </span>
            ))}
          </div>
        </aside>
        <div>
          <p className="text-sm font-black uppercase text-punch">Dere type profile</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            What Is <span style={{ color: type.color }}>{type.name}</span>?
          </h1>
          <p className="mt-5 text-xl font-bold leading-8">{type.definition}</p>
          <p className="mt-4 leading-7">
            This {type.name} meaning page explains the trope, the common signs, and the kind of quiz answers that
            lead to this result. Read it for fandom context, then take the Dere Type Quiz if you want your own card.
          </p>
          <Link
            href="/quiz"
            className="focus-ring mt-6 inline-flex rounded-md border-3 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga"
          >
            Take the Quiz
          </Link>
        </div>
      </article>
      <section className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        <Block title="Strengths" items={type.strengths} />
        <Block title="Weak spots" items={type.weakSpots} />
        <Block title="Common misconception" items={[type.misconception]} />
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6 md:p-8">
        <h2 className="font-display text-3xl font-black">{type.name} meaning in anime</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {typeParagraphs[type.slug].map((paragraph) => (
            <p key={paragraph} className="leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6">
        <h2 className="font-display text-3xl font-black">Anime vibe</h2>
        <p className="mt-3 text-lg leading-8">{type.animeVibe}</p>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel p-6">
        <h2 className="font-display text-3xl font-black">{type.name} signs in the quiz</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">How it shows up</h3>
            <p className="mt-2 leading-7">
              A {type.name} result appears when your answers repeatedly match the same anime affection pattern,
              not because one single question decides everything.
            </p>
          </div>
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">What it does not mean</h3>
            <p className="mt-2 leading-7">
              Treat the result like a fandom label, not a life assessment. It is a joke you can share,
              not a relationship report.
            </p>
          </div>
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">What to read next</h3>
            <p className="mt-2 leading-7">
              Compare this page with the other Dere types if your result feels close. Start with the
              <Link href="/dere-types" className="font-black text-punch underline decoration-2 underline-offset-4"> Dere Types guide</Link>
              {type.slug === "tsundere" || type.slug === "yandere" ? (
                <>
                  {" "}or the
                  <Link href="/tsundere-vs-yandere" className="font-black text-punch underline decoration-2 underline-offset-4"> Tsundere vs Yandere comparison</Link>.
                </>
              ) : (
                "."
              )}
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-6 max-w-6xl manga-panel-soft p-6">
        <h2 className="font-display text-3xl font-black">FAQ</h2>
        <div className="mt-4 grid gap-4">
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

function Block({ title, items }: { title: string; items: string[] }) {
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
