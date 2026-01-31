import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pawel Lisowski - Senior Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0f",
          padding: "80px",
        }}
      >
        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.1,
          }}
        >
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "#fbbf24",
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "24px",
              color: "#fbbf24",
              fontFamily: "monospace",
              marginBottom: "20px",
            }}
          >
            plisowski.dev
          </div>

          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#e2e8f0",
              marginBottom: "10px",
              lineHeight: 1.1,
            }}
          >
            Pawel Lisowski
          </div>

          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#71717a",
              marginBottom: "30px",
            }}
          >
            Senior Software Engineer
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "#71717a",
              marginBottom: "40px",
            }}
          >
            Gdynia, Poland
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {["React", "TypeScript", "Java", "Python", "Next.js", "Spring Boot"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    fontSize: "20px",
                    color: "#fbbf24",
                    backgroundColor: "rgba(251, 191, 36, 0.1)",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "1px solid rgba(251, 191, 36, 0.3)",
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
