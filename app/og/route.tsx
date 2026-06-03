import { ImageResponse } from "next/og";

export async function GET() {
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
          padding: 54,
          fontFamily: "Georgia"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ fontSize: 34, fontWeight: 900 }}>DereType Quiz</div>
          <div>
            <div style={{ fontSize: 86, fontWeight: 900, lineHeight: 0.95 }}>
              Are You a <span style={{ color: "#d31616" }}>Tsundere?!</span>
            </div>
            <div style={{ marginTop: 28, fontSize: 34 }}>
              Take the 12-question Dere Type Quiz.
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, fontSize: 28, fontWeight: 900 }}>
            <span>Tsundere</span>
            <span>Yandere</span>
            <span>Kuudere</span>
            <span>Dandere</span>
            <span>Deredere</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
