import type { DereTypeSlug } from "@/lib/quiz-data";

export function DereSymbol({
  type,
  className = ""
}: {
  type: DereTypeSlug;
  className?: string;
}) {
  const common = "fill-none stroke-ink stroke-[5] stroke-linecap-round stroke-linejoin-round";

  return (
    <svg
      viewBox="0 0 160 160"
      role="img"
      aria-label={`${type} manga symbol`}
      className={className}
    >
      <rect x="8" y="8" width="144" height="144" rx="18" className="fill-panel stroke-ink stroke-[5]" />
      <circle cx="80" cy="72" r="28" className={common} />
      {type === "tsundere" && (
        <>
          <path d="M50 116l28-22 30 22" className={common} />
          <path d="M112 28l18-14M119 49h24M36 28L18 14" className={common} />
          <text x="122" y="116" className="fill-punch text-5xl font-black">!</text>
        </>
      )}
      {type === "yandere" && (
        <>
          <path d="M50 105c18-18 42-18 60 0" className={common} />
          <path d="M72 45l12 20 16-22" className="fill-none stroke-punch stroke-[5] stroke-linecap-round stroke-linejoin-round" />
          <path d="M114 112l18 18M132 112l-18 18" className="stroke-punch stroke-[5] stroke-linecap-round" />
        </>
      )}
      {type === "kuudere" && (
        <>
          <path d="M50 103h60" className={common} />
          <path d="M124 34l14 14M138 34l-14 14M131 25v32M115 41h32" className="stroke-[#516170] stroke-[4] stroke-linecap-round" />
          <path d="M62 70h10M88 70h10" className={common} />
        </>
      )}
      {type === "dandere" && (
        <>
          <path d="M56 101c12 12 36 12 48 0" className={common} />
          <path d="M42 44c-18 10-24 28-14 42 8 12 24 12 34 4" className={common} />
          <text x="30" y="84" className="fill-ink text-3xl font-black">...</text>
        </>
      )}
      {type === "deredere" && (
        <>
          <path d="M54 96c15 18 37 18 52 0" className={common} />
          <path d="M124 29v20M114 39h20M30 115l10 10 18-24" className="stroke-punch stroke-[5] stroke-linecap-round stroke-linejoin-round" />
          <path d="M58 68h8M94 68h8" className={common} />
        </>
      )}
    </svg>
  );
}
