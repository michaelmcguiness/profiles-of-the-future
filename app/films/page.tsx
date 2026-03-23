import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubscribeModal from "../components/SubscribeModal";

export const metadata: Metadata = {
  title: "Films — Profiles of the Future",
  description:
    "Documentary films on the companies building the future, by a16z.",
};

const films = [
  {
    issue: "001",
    title: "Anduril: The Future of War",
    description:
      "Inside Anduril's mission to transform American defense — from a surveillance tower on a Texas ranch to a $20 billion Army contract.",
    duration: "38 min",
    date: "March 2026",
    image: "/images/001/fury.webp",
    status: "available" as const,
  },
  {
    issue: "002",
    title: "Hadrian: The New American Factory",
    description:
      "How Hadrian is using AI and robotics to rebuild America's precision manufacturing base — and why the country's defense depends on it.",
    duration: "Coming April 2026",
    date: "",
    image: "/images/002/hadrian-factory.webp",
    status: "coming-soon" as const,
  },
  {
    issue: "003",
    title: "Radiant: The Nuclear Renaissance",
    description:
      "The story of a portable nuclear microreactor that could replace diesel generators worldwide — and the team racing to prove it works.",
    duration: "Coming May 2026",
    date: "",
    image: "/images/003/radiant-kaleidos.jpg",
    status: "coming-soon" as const,
  },
  {
    issue: "004",
    title: "Mariana Minerals: The Critical Mineral Race",
    description:
      "America's critical mineral supply chains are controlled by adversaries. Mariana Minerals is using autonomous mining to change that.",
    duration: "Coming June 2026",
    date: "",
    image: "/images/004/mariana-minerals.jpg",
    status: "coming-soon" as const,
  },
];

export default function Films() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e8e4de",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 100,
        }}
      />

      {/* Nav */}
      <nav
        className="nav"
        style={{
          position: "sticky",
          top: 0,
          background: "#0a0a0a",
          zIndex: 50,
        }}
      >
        <div className="nav-brand">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: "0.02em",
                color: "#e8e4de",
              }}
            >
              Profiles of the Future
            </span>
          </Link>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c4956a",
              borderLeft: "1px solid rgba(232,228,222,0.15)",
              paddingLeft: 16,
            }}
          >
            by a16z
          </span>
        </div>
        <div className="nav-links">
          {[
            { label: "About", href: "/about" },
            { label: "Profiles", href: "/archive" },
            { label: "Films", href: "/films" },
            { label: "Podcast", href: "/podcast" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.08em",
                color:
                  item.label === "Films"
                    ? "rgba(232,228,222,0.7)"
                    : "rgba(232,228,222,0.4)",
                cursor: "pointer",
                transition: "color 0.3s ease",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
          <SubscribeModal />
        </div>
      </nav>

      {/* Content */}
      <div className="article-container">
        <header className="article-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c4956a",
              }}
            >
              Films
            </span>
            <div
              style={{
                height: 1,
                width: 48,
                background: "linear-gradient(90deg, #c4956a, transparent)",
              }}
            />
          </div>
          <h1 className="article-title">
            Original
            <br />
            Documentaries
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.7,
              color: "rgba(232,228,222,0.65)",
              fontStyle: "italic",
              maxWidth: 540,
              marginTop: 24,
            }}
          >
            Short documentary films on each company profiled — the people, the
            technology, and the vision driving them forward.
          </p>
        </header>

        {/* Films grid */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            paddingTop: 16,
          }}
        >
          {films.map((film, i) => (
            <div
              key={i}
              style={{
                padding: "40px 0",
                borderBottom: "1px solid rgba(232,228,222,0.06)",
                opacity: film.status === "coming-soon" ? 0.5 : 1,
              }}
            >
              {/* Film thumbnail — cinematic aspect ratio */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "21 / 9",
                  overflow: "hidden",
                  marginBottom: 24,
                }}
              >
                <Image
                  src={film.image}
                  alt={film.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0) 40%, rgba(10,10,10,0.5) 100%)",
                  }}
                />
                {film.status === "available" ? (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(0,0,0,0.3)",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "16px solid rgba(255,255,255,0.85)",
                          borderTop: "10px solid transparent",
                          borderBottom: "10px solid transparent",
                          marginLeft: 4,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Film info */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c4956a",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                Issue {film.issue}
              </span>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 28,
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: "#e8e4de",
                  margin: "0 0 12px",
                }}
              >
                {film.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 18,
                  lineHeight: 1.65,
                  color: "rgba(232,228,222,0.65)",
                  margin: "0 0 16px",
                  maxWidth: 560,
                }}
              >
                {film.description}
              </p>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(232,228,222,0.65)",
                }}
              >
                {film.status === "available"
                  ? `${film.date} · ${film.duration}`
                  : film.duration}
              </span>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "48px 0 100px",
            borderTop: "1px solid rgba(232,228,222,0.08)",
            marginTop: 24,
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c4956a",
              borderBottom: "1px solid rgba(196,149,106,0.3)",
              paddingBottom: 4,
              textDecoration: "none",
            }}
          >
            ← Back to all profiles
          </Link>
        </div>
      </div>
    </div>
  );
}
