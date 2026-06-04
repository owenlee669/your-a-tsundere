import Link from "next/link";
import Image from "next/image";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-4">
      <Link href="/" className="focus-ring flex items-center gap-2 rounded-sm" aria-label="DereType Quiz home">
        <Image
          src="/images/logo/deretype-logo.webp"
          alt=""
          width={36}
          height={36}
          aria-hidden="true"
          className="h-9 w-9 rounded-sm border-2 border-ink object-cover shadow-[3px_3px_0_#171313]"
          priority
        />
        <span className="font-display text-xl font-black">DereType Quiz</span>
      </Link>
      {!compact && (
        <nav className="hidden items-center gap-6 text-sm font-bold md:flex">
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/quiz">Quiz</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/dere-types">Dere Types</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/tsundere-vs-yandere">Tsundere vs Yandere</Link>
          <Link className="focus-ring shrink-0 rounded-sm hover:text-punch" href="/are-you-a-yandere">Are You a Yandere?</Link>
        </nav>
      )}
      <div className="flex items-center gap-3">
        <Link
          href="/quiz"
          className="focus-ring hidden rounded-md border-2 border-ink bg-punch px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#171313] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Start Quiz
        </Link>
        {!compact && (
          <details className="relative md:hidden">
            <summary className="focus-ring grid h-11 w-11 list-none place-items-center rounded-md border-2 border-ink bg-panel shadow-[3px_3px_0_#171313] marker:hidden">
              <span className="grid gap-1" aria-label="Open menu">
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
                <span className="block h-0.5 w-5 bg-ink" />
              </span>
            </summary>
            <nav className="absolute right-0 z-20 mt-3 grid w-56 gap-3 border-3 border-ink bg-panel p-4 text-sm font-black shadow-manga">
              <p className="border-b-2 border-ink pb-2 font-display text-xl font-black">DereType Menu</p>
              <Link className="focus-ring rounded-md border-2 border-ink bg-punch px-3 py-2 text-white shadow-[2px_2px_0_#171313]" href="/quiz">Start Quiz</Link>
              <Link className="focus-ring rounded-sm hover:text-punch" href="/dere-types">Dere Types</Link>
              <Link className="focus-ring rounded-sm hover:text-punch" href="/tsundere-vs-yandere">Tsundere vs Yandere</Link>
              <Link className="focus-ring rounded-sm hover:text-punch" href="/are-you-a-yandere">Are You a Yandere?</Link>
              <Link className="focus-ring rounded-sm hover:text-punch" href="/are-you-a-tsundere-google">Google Tsundere</Link>
            </nav>
          </details>
        )}
      </div>
    </header>
  );
}
