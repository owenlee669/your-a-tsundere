import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description:
    "Read the DereType Quiz terms for result cards, anime trope labels, and responsible use.",
  path: "/terms",
  keywords: ["DereType Quiz terms", "quiz terms of use", "anime quiz disclaimer"]
});

export default function TermsPage() {
  return (
    <main className="min-h-screen px-5 py-4">
      <SiteHeader />
      <article className="mx-auto max-w-4xl py-10">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Terms</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            Terms of Use
          </h1>
          <p className="mt-5 text-lg font-semibold leading-8">
            DereType Quiz is made for anime fandom fun. Use the results as a joke, not as advice about real relationships or mental health.
          </p>
        </div>

        <section className="mt-6 grid gap-5">
          <Block
            title="Entertainment only"
            text="The quiz result is a fictional archetype label based on your selected answers. Treat it like fandom shorthand, not professional advice."
          />
          <Block
            title="Fictional tropes"
            text="Tsundere, Yandere, Kuudere, Dandere, and Deredere are fandom terms. Yandere content should stay fictional; real control, stalking, threats, or harm are not romantic."
          />
          <Block
            title="Result cards"
            text="You may download and share your own result card for personal use. Do not use the site to harass people or present quiz results as facts about someone else."
          />
          <Block
            title="Changes"
            text="The site may update quiz questions, result text, pages, or these terms as the project changes."
          />
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <section className="manga-panel-soft p-5">
      <h2 className="font-display text-2xl font-black">{title}</h2>
      <p className="mt-3 leading-7">{text}</p>
    </section>
  );
}
