import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dereArt } from "@/lib/dere-assets";
import { dereTypes, typeBySlug, type DereTypeSlug } from "@/lib/quiz-data";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return dereTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const type = typeBySlug[slug as DereTypeSlug];
  if (!type) return {};

  return pageMetadata({
    title: `What Is ${type.name}? Meaning, Traits and Quiz Result`,
    description: `${type.definition} Read the traits, common misconception, and take the Dere Type Quiz.`,
    path: `/dere-types/${type.slug}`
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
    ...(type.slug === "yandere"
      ? [
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
        ]
      : [])
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
