import Link from "next/link";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4">
      <Link href="/" className="focus-ring flex items-center gap-2 rounded-sm" aria-label="DereType Quiz home">
        <span aria-hidden="true" className="grid h-9 w-9 place-items-center border-2 border-ink bg-punch font-display text-xl font-black text-white shadow-[3px_3px_0_#171313]">
          D
        </span>
        <span className="font-display text-xl font-black">DereType Quiz</span>
      </Link>
      {!compact && (
        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          <Link className="focus-ring rounded-sm hover:text-punch" href="/quiz">Quiz</Link>
          <Link className="focus-ring rounded-sm hover:text-punch" href="/dere-types">Dere Types</Link>
          <Link className="focus-ring rounded-sm hover:text-punch" href="/tsundere-vs-yandere">Tsundere vs Yandere</Link>
        </nav>
      )}
      <Link
        href="/quiz"
        className="focus-ring rounded-md border-2 border-ink bg-punch px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#171313] transition-transform hover:-translate-y-0.5"
      >
        Start Quiz
      </Link>
    </header>
  );
}
