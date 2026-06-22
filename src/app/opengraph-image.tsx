import { ImageResponse } from "next/og";

export const alt = "VIA+ — Busca e entrega inteligente de imóveis";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 80% 20%, #146b67 0, #1f2326 45%, #141719 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              color: "#57b9b2",
              display: "flex",
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: 8,
            }}
          >
            VIA+
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.08,
              marginTop: 45,
              maxWidth: 980,
            }}
          >
            Clareza para encontrar. Preparação para entregar.
          </div>
          <div
            style={{
              color: "#d9e2e1",
              display: "flex",
              fontSize: 25,
              marginTop: 45,
            }}
          >
            Atendimento presencial em Montes Claros/MG e região
          </div>
        </div>
      </div>
    ),
    size,
  );
}
