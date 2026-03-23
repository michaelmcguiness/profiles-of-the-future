import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubscribeModal from "../components/SubscribeModal";

export const metadata: Metadata = {
  title: "Podcast — Profiles of the Future",
  description:
    "Full-length founder interviews from Profiles of the Future by a16z.",
};

const episodes = [
  {
    issue: "001",
    title: "Palmer Luckey — Anduril and the Future of War",
    description:
      "Palmer Luckey on founding Anduril, why the defense industrial base is broken, and how autonomous systems will reshape warfare. Featuring Katherine Boyle.",
    duration: "1 hr 42 min",
    date: "March 2026",
    image: "/images/001/founders.webp",
    status: "available" as const,
  },
  {
    issue: "002",
    title: "Chris Power — Hadrian and the New American Factory",
    description:
      "Chris Power on building AI-powered factories, the crisis in American manufacturing, and what it takes to produce precision aerospace parts at 10x the speed.",
    duration: "Coming April 2026",
    date: "",
    image: "/images/002/hadrian-factory.webp",
    status: "coming-soon" as const,
  },
  {
    issue: "003",
    title: "Doug Bernauer — Radiant and the Nuclear Renaissance",
    description:
      "Doug Bernauer on designing a portable microreactor, the regulatory path to commercial nuclear, and why the energy future fits in a shipping container.",
    duration: "Coming May 2026",
    date: "",
    image: "/images/003/radiant-kaleidos.jpg",
    status: "coming-soon" as const,
  },
  {
    issue: "004",
    title: "Turner Caldwell — Mariana Minerals and the Critical Mineral Race",
    description:
      "Turner Caldwell on leaving Tesla to rebuild America's mining industry, autonomous extraction, and why critical minerals are the new oil.",
    duration: "Coming June 2026",
    date: "",
    image: "/images/004/mariana-minerals.jpg",
    status: "coming-soon" as const,
  },
];

export default function Podcast() {
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
              fontSize: 10,
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
            { label: "Films", href: "/films" },
            { label: "Podcast", href: "/podcast" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.08em",
                color:
                  item.label === "Podcast"
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
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#c4956a",
              }}
            >
              Podcast
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
            Founder
            <br />
            Interviews
          </h1>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(232,228,222,0.5)",
              fontStyle: "italic",
              maxWidth: 540,
              marginTop: 24,
            }}
          >
            Full-length conversations with the founders of each company
            profiled — how they think, how they built, and what they see ahead.
          </p>
        </header>

        {/* Episodes list */}
        <div style={{ maxWidth: 680, margin: "0 auto", paddingTop: 16 }}>
          {episodes.map((ep, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 28,
                padding: "40px 0",
                borderBottom: "1px solid rgba(232,228,222,0.06)",
                opacity: ep.status === "coming-soon" ? 0.5 : 1,
                alignItems: "flex-start",
              }}
            >
              {/* Episode image */}
              <div
                style={{
                  flex: "0 0 140px",
                  position: "relative",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={ep.image}
                  alt={ep.title}
                  fill
                  sizes="140px"
                  style={{ objectFit: "cover" }}
                />
                {ep.status === "coming-soon" && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.4)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Episode info */}
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#c4956a",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  Issue {ep.issue}
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 24,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    color: "#e8e4de",
                    margin: "0 0 12px",
                  }}
                >
                  {ep.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(232,228,222,0.4)",
                    margin: "0 0 16px",
                  }}
                >
                  {ep.description}
                </p>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    color: "rgba(232,228,222,0.25)",
                  }}
                >
                  {ep.status === "available"
                    ? `${ep.date} · ${ep.duration}`
                    : ep.duration}
                </span>
              </div>
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
              fontSize: 12,
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
