import Link from "next/link";
import Image from "next/image";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="mx-auto max-w-6xl py-4">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex min-w-0 items-center gap-2 rounded-sm" aria-label="DereType Quiz home">
          <Image
            src="/images/logo/deretype-logo.webp"
            alt=""
            width={36}
            height={36}
            aria-hidden="true"
            className="h-9 w-9 shrink-0 rounded-sm border-2 border-ink object-cover shadow-[3px_3px_0_#171313]"
            priority
          />
          <span className="truncate font-display text-xl font-black">DereType Quiz</span>
        </Link>
        <Link
          href="/quiz"
          className="focus-ring shrink-0 rounded-md border-2 border-ink bg-punch px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#171313] transition-transform hover:-translate-y-0.5"
        >
          Start Quiz
        </Link>
      </div>
      {!compact && (
        <nav className="mt-4 flex gap-3 overflow-x-auto pb-1 text-sm font-bold md:mt-0 md:justify-end md:gap-6 md:overflow-visible md:pb-0">
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/quiz">Quiz</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/dere-types">Dere Types</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/tsundere-vs-yandere">Tsundere vs Yandere</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/are-you-a-tsundere-google">Google Tsundere</Link>
        </nav>
      )}
    </header>
  );
}
