import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main className="min-h-screen px-5 py-6">
      <SiteHeader />
      <section className="mx-auto mt-20 max-w-2xl manga-panel p-8 text-center">
        <p className="text-sm font-bold uppercase text-punch">404 panel missing</p>
        <h1 className="mt-3 font-display text-4xl font-black">This page ran away.</h1>
        <p className="mt-4 text-lg">
          Suspiciously tsundere behavior. Try the quiz instead.
        </p>
        <Link
          href="/quiz"
          className="focus-ring mt-6 inline-flex rounded-md border-2 border-ink bg-punch px-5 py-3 font-black text-white shadow-manga"
        >
          Start Quiz, Baka
        </Link>
      </section>
    </main>
  );
}
