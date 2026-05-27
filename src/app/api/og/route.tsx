import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title    = (searchParams.get("title")    ?? "World Travel Co.").slice(0, 110);
  const eyebrow  = (searchParams.get("eyebrow")  ?? "Concierge 360° de lujo").slice(0, 80);
  const accent   = (searchParams.get("accent")   ?? "sun") as "sun" | "ink";

  const bg     = accent === "ink" ? "#0F1A24" : "#FBF8F3";
  const text   = accent === "ink" ? "#FBF8F3" : "#0F1A24";
  const muted  = accent === "ink" ? "rgba(251,248,243,0.65)" : "rgba(15,26,36,0.55)";
  const orange = "#F26B3A";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          position: "relative",
          fontFamily: "Manrope, system-ui, sans-serif"
        }}
      >
        {/* Decorative gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: accent === "ink"
              ? "radial-gradient(60% 80% at 100% 0%, rgba(242,107,58,0.45) 0%, transparent 60%)"
              : "radial-gradient(60% 80% at 100% 0%, rgba(242,107,58,0.30) 0%, transparent 60%)"
          }}
        />

        {/* Header bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, zIndex: 1 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16, background: orange,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, color: "white", fontWeight: 800
          }}>
            ✈
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: text, letterSpacing: -0.5 }}>
              world travel<span style={{ color: orange }}>.</span>
            </span>
            <span style={{ fontSize: 13, color: muted, textTransform: "uppercase", letterSpacing: 3 }}>
              wtravelcompany.com
            </span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28, zIndex: 1, maxWidth: 1020 }}>
          <span style={{
            fontSize: 18, color: orange, fontWeight: 700,
            textTransform: "uppercase", letterSpacing: 4, display: "flex"
          }}>
            — {eyebrow}
          </span>
          <h1 style={{
            margin: 0, fontSize: 88, lineHeight: 1.02, letterSpacing: -2.5,
            color: text, fontFamily: "Georgia, serif", fontWeight: 500
          }}>
            {title}
          </h1>
        </div>

        {/* Footer chips */}
        <div style={{ display: "flex", gap: 12, zIndex: 1 }}>
          {["Hoteles", "Jets", "Cruceros", "Mundial 2026", "Conciertos"].map((c) => (
            <div key={c} style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: accent === "ink" ? "rgba(255,255,255,0.10)" : "rgba(15,26,36,0.08)",
              color: text, fontSize: 16, fontWeight: 600,
              display: "flex"
            }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
