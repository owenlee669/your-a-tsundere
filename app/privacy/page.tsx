import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read the DereType Quiz privacy policy. The quiz runs without login, email collection, or saving individual answers.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-5 py-4">
      <SiteHeader />
      <article className="mx-auto max-w-4xl py-10">
        <div className="manga-panel p-6 md:p-8">
          <p className="text-sm font-black uppercase text-punch">Privacy</p>
          <h1 className="mt-3 font-display text-5xl font-black md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg font-semibold leading-8">
            DereType Quiz is a free fandom quiz. You can take it without creating an account or sharing an email address.
          </p>
        </div>

        <section className="mt-6 grid gap-5">
          <Block
            title="What we collect"
            text="The quiz stores your result in your browser session so the result page can show your score. We do not ask for your name, email, or account details."
          />
          <Block
            title="Analytics"
            text="The site may use privacy-minded analytics to count basic events such as quiz starts, quiz completions, result card downloads, and copy button clicks. We do not record individual quiz answers."
          />
          <Block
            title="Cookies"
            text="The core quiz does not need cookies. If analytics tools are enabled later, they may use their own cookies or local storage depending on the provider settings."
          />
          <Block
            title="Contact"
            text="For privacy questions, use the contact address listed by the site owner when the site is published."
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
