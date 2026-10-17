import { ImageResponse } from "next/og";

export const alt = "FWM Future Mark Industrial Park — Warehouse & Factory for Rent, Mahachai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #0b2540 0%, #13345a 60%, #1f6a99 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#328cc1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 700,
            }}
          >
            F
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>FWM Future Mark Industrial Park</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>Warehouse & Factory for Rent</div>
          <div style={{ fontSize: 40, color: "#7cc4ee" }}>Mahachai, Samut Sakhon · 20–2,000 sq.m. · 24/7 Security</div>
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#f2a32c", fontWeight: 700 }}>Tel. 098-337-4719</div>
      </div>
    ),
    size,
  );
}
