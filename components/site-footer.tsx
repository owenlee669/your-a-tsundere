import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-20 max-w-6xl border-t-2 border-ink px-5 py-8 text-sm">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p>
          Anime quiz, not therapy homework. Take the result as a fandom label and a joke to share.
        </p>
        <div className="flex flex-wrap gap-4 font-bold">
          <Link href="/quiz" className="hover:text-punch">Quiz</Link>
          <Link href="/are-you-a-tsundere-google" className="hover:text-punch">Google Tsundere</Link>
          <Link href="/are-you-a-yandere" className="hover:text-punch">Yandere</Link>
          <Link href="/dere-types" className="hover:text-punch">Dere Types</Link>
          <Link href="/privacy" className="hover:text-punch">Privacy</Link>
          <Link href="/terms" className="hover:text-punch">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
