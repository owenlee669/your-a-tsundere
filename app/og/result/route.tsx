import { dereTypeOrder, typeBySlug, type DereTypeSlug } from "@/lib/quiz-data";

function isDereType(value: string | null): value is DereTypeSlug {
  return !!value && dereTypeOrder.includes(value as DereTypeSlug);
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("type");
  const resultSlug = isDereType(slug) ? slug : "tsundere";
  const type = typeBySlug[resultSlug];
  const tags = type.tags.map(escapeXml);

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="2" fill="#171313" opacity="0.12" />
    </pattern>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="10" dy="10" stdDeviation="0" flood-color="#171313" />
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#fbf4e7" />
  <rect width="1200" height="630" fill="url(#dots)" />
  <rect x="18" y="18" width="1164" height="594" fill="none" stroke="#171313" stroke-width="18" />

  <text x="64" y="82" fill="#171313" font-family="Georgia, serif" font-size="34" font-weight="900">DereType Quiz</text>
  <circle cx="1100" cy="74" r="38" fill="${type.color}" stroke="#171313" stroke-width="6" />
  <text x="1100" y="92" text-anchor="middle" fill="#fff9ed" font-family="Georgia, serif" font-size="48" font-weight="900">${escapeXml(type.symbol)}</text>

  <g filter="url(#shadow)">
    <rect x="66" y="160" width="340" height="300" fill="#fff9ed" stroke="#171313" stroke-width="8" />
    <text x="236" y="350" text-anchor="middle" fill="${type.color}" font-family="Georgia, serif" font-size="150" font-weight="900">${escapeXml(type.symbol)}</text>
  </g>

  <text x="460" y="190" fill="#171313" font-family="Georgia, serif" font-size="34" font-weight="900">Your Result</text>
  <text x="460" y="285" fill="${type.color}" font-family="Georgia, serif" font-size="92" font-weight="900">${escapeXml(type.name)}</text>
  <text x="462" y="354" fill="#171313" font-family="Georgia, serif" font-size="42" font-weight="900">${escapeXml(type.badge)}</text>
  <foreignObject x="462" y="378" width="620" height="96">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Arial,sans-serif;font-size:28px;line-height:1.25;font-weight:900;color:#171313;">
      ${escapeXml(type.oneLiner)}
    </div>
  </foreignObject>

  <g font-family="Arial, sans-serif" font-size="22" font-weight="900">
    <rect x="66" y="522" width="170" height="42" fill="#fff9ed" stroke="#171313" stroke-width="3" />
    <text x="82" y="551" fill="#171313">${tags[0] || ""}</text>
    <rect x="252" y="522" width="230" height="42" fill="#fff9ed" stroke="#171313" stroke-width="3" />
    <text x="268" y="551" fill="#171313">${tags[1] || ""}</text>
    <rect x="498" y="522" width="240" height="42" fill="#fff9ed" stroke="#171313" stroke-width="3" />
    <text x="514" y="551" fill="#171313">${tags[2] || ""}</text>
    <text x="866" y="552" fill="#171313" font-size="26">youareatsundere.com</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
