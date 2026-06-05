import { ImageResponse } from "next/og";
import { dereTypeOrder, typeBySlug, type DereTypeSlug } from "@/lib/quiz-data";

function isDereType(value: string | null): value is DereTypeSlug {
  return !!value && dereTypeOrder.includes(value as DereTypeSlug);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("type");
  const resultSlug = isDereType(slug) ? slug : "tsundere";
  const type = typeBySlug[resultSlug];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbf4e7",
          color: "#171313",
          border: "18px solid #171313",
          padding: 46,
          fontFamily: "Georgia"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            background:
              "radial-gradient(circle at 12px 12px, rgba(23,19,19,0.12) 2px, transparent 2px)",
            backgroundSize: "28px 28px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontSize: 34, fontWeight: 900 }}>DereType Quiz</div>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 999,
                border: "5px solid #171313",
                background: type.color,
                color: "#fff9ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 44,
                fontWeight: 900
              }}
            >
              {type.symbol}
            </div>
          </div>
          <div style={{ display: "flex", gap: 34, alignItems: "center" }}>
            <div
              style={{
                width: 350,
                height: 300,
                border: "8px solid #171313",
                background: "#fff9ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "10px 10px 0 #171313"
              }}
            >
              <div style={{ fontSize: 148, fontWeight: 900, color: type.color }}>{type.symbol}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 34, fontWeight: 900 }}>Your Result</div>
              <div style={{ marginTop: 12, fontSize: 92, fontWeight: 900, lineHeight: 0.9, color: type.color }}>
                {type.name}
              </div>
              <div style={{ marginTop: 22, fontSize: 42, fontWeight: 900 }}>
                {type.badge}
              </div>
              <div style={{ marginTop: 18, fontSize: 28, lineHeight: 1.25, fontFamily: "Arial", fontWeight: 900 }}>
                {type.oneLiner}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Arial" }}>
            <div style={{ display: "flex", gap: 12 }}>
              {type.tags.map((tag) => (
                <div
                  key={tag}
                  style={{
                    border: "3px solid #171313",
                    background: "#fff9ed",
                    padding: "8px 14px",
                    fontSize: 22,
                    fontWeight: 900
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div style={{ fontSize: 26, fontWeight: 900 }}>youareatsundere.com</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
