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
      a: "They point to the same idea. One sounds like someone accusing you of Tsundere behavior, while the other sounds like a quiz question."
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
      q: `Is ${type.name} a real diagnosis?`,
      a: "No. Dere types are fandom archetypes for entertainment, not psychological diagnoses."
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
            lead to this result. Use it as fandom context, then take the Dere Type Quiz if you want your own result.
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
              The result is not a real diagnosis, relationship judgment, or fixed identity. It is a quick fandom label
              for a result card and a joke with context.
            </p>
          </div>
          <div className="border-l-4 border-punch pl-4">
            <h3 className="font-black">What to read next</h3>
            <p className="mt-2 leading-7">
              Compare this page with the other Dere types if your result feels close. Many anime characters mix traits,
              but each page keeps one core meaning clear.
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
