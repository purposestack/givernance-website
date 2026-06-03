import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Givernance — Infrastructure for European nonprofits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// next/og (satori) requires inline styles and concrete colour values — it cannot
// read CSS custom properties / Tailwind tokens. Documented design-token exception.
export default function OgImage() {
  const cubeGroups = [
    "matrix(1.000819,0,0,1.000819,0.018136,-0.082685)",
    "matrix(-0.495948,-0.859007,0.859007,-0.495948,158.15141,586.415061)",
    "matrix(-0.500409,0.866734,-0.866734,-0.500409,592.049884,158.497743)",
  ];

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
          background: "linear-gradient(135deg, #f5f1ea 0%, #d6f1ea 50%, #f5f1ea 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "44px" }}>
          <svg width="56" height="56" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            {cubeGroups.map((transform) => (
              <g key={transform} transform={transform}>
                <path
                  d="M440,162.652L440,349.573C440,356.022 436.55,361.979 430.955,365.187L362.648,404.364C357.101,407.545 350.284,407.545 344.737,404.364L276.429,365.187C270.835,361.979 267.385,356.022 267.385,349.573L267.385,271.461C267.385,264.993 270.854,259.023 276.474,255.821L372.692,201L372.692,200.782L440,162.652Z"
                  fill="rgb(0,133,112)"
                />
                <path
                  d="M372.692,200.782L372.692,101L422.049,129.598C433.16,136.036 440,147.906 440,160.747L440,162.652L372.692,200.782Z"
                  fill="rgb(236,106,102)"
                />
              </g>
            ))}
          </svg>
          <div style={{ fontSize: "30px", fontWeight: 600, color: "#14201f", letterSpacing: "-0.02em" }}>
            Givernance
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "60px",
            fontWeight: 700,
            color: "#14201f",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            maxWidth: "860px",
          }}
        >
          <span>Back your mission.</span>
          <span>Ditch the spreadsheets.</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: "26px", color: "#107472", marginTop: "26px", lineHeight: 1.5, maxWidth: "760px" }}>
          Operational infrastructure for European nonprofits — GDPR-native, no lock-in.
        </div>

        {/* Bottom pills */}
        <div style={{ display: "flex", gap: "16px", marginTop: "44px" }}>
          {["GDPR-native", "Hosted in Europe", "No data lock-in"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 22px",
                borderRadius: "100px",
                border: "1.5px solid rgba(18,135,118,0.30)",
                background: "rgba(255,255,255,0.65)",
                fontSize: "17px",
                color: "#084e46",
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
