import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Givernance — The Nonprofit CRM Built for Europe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #FAFAF8 0%, #E8F5EE 50%, #FAFAF8 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#2E7D5E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#1C1B19",
              letterSpacing: "-0.02em",
            }}
          >
            Givernance
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#1C1B19",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: "800px",
          }}
        >
          Run your mission.
          <br />
          Not your spreadsheets.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#635E58",
            marginTop: "24px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          The GDPR-native CRM built for European nonprofits.
        </div>

        {/* Bottom pills */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {["GDPR-native", "2–200 staff", "Open & exportable"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 20px",
                borderRadius: "100px",
                border: "1.5px solid #CFE2D7",
                background: "white",
                fontSize: "16px",
                color: "#1A5240",
                fontWeight: 500,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
