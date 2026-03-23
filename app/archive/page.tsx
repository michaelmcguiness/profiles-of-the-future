import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubscribeModal from "../components/SubscribeModal";

export const metadata: Metadata = {
  title: "Profiles — Profiles of the Future",
  description: "Every issue of Profiles of the Future by a16z.",
};

const issues = [
  {
    issue: "001",
    title: "Anduril and the Future of War",
    description:
      "How Palmer Luckey built a $20 billion defense company from a surveillance tower on a Texas ranch — and why autonomous systems will reshape warfare.",
    vertical: "Defense · American Dynamism",
    date: "March 2026",
    readTime: "18 min read",
    image: "/images/001/fury.webp",
    href: "/issues/001",
    status: "published" as const,
  },
  {
    issue: "002",
    title: "Hadrian and the New American Factory",
    description:
      "AI-powered autonomous factories manufacturing precision aerospace and defense parts up to 10x faster — reindustrializing America one factory at a time.",
    vertical: "Manufacturing · American Dynamism",
    date: "April 2026",
    readTime: "",
    image: "/images/002/hadrian-factory.webp",
    href: "#",
    status: "coming-soon" as const,
  },
  {
    issue: "003",
    title: "Radiant and the Nuclear Renaissance",
    description:
      "A portable microreactor that fits in a shipping container and replaces diesel generators with clean, meltdown-proof nuclear power — deployable anywhere by truck or aircraft.",
    vertical: "Energy · American Dynamism",
    date: "May 2026",
    readTime: "",
    image: "/images/003/radiant-kaleidos.jpg",
    href: "#",
    status: "coming-soon" as const,
  },
  {
    issue: "004",
    title: "Mariana Minerals and the Critical Mineral Race",
    description:
      "Software-first, AI-driven mining compressing a 12-year mine development timeline into a fraction — rebuilding America's critical mineral supply chains when energy, AI, and defense all depend on them.",
    vertical: "Mining · American Dynamism",
    date: "June 2026",
    readTime: "",
    image: "/images/004/mariana-minerals.jpg",
    href: "#",
    status: "coming-soon" as const,
  },
];

export default function Archive() {
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
                color: "rgba(232,228,222,0.65)",
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
              Profiles
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
            All Issues
          </h1>
        </header>

        {/* Issues list */}
        <div style={{ maxWidth: 680, margin: "0 auto", paddingTop: 16 }}>
          {issues.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{
                display: "flex",
                gap: 28,
                padding: "40px 0",
                borderBottom: "1px solid rgba(232,228,222,0.06)",
                opacity: item.status === "coming-soon" ? 0.5 : 1,
                alignItems: "flex-start",
                textDecoration: "none",
                color: "inherit",
                pointerEvents: item.status === "coming-soon" ? "none" : "auto",
              }}
            >
              {/* Issue image */}
              <div
                style={{
                  flex: "0 0 200px",
                  position: "relative",
                  aspectRatio: "16 / 10",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="200px"
                  style={{ objectFit: "cover" }}
                />
                {item.status === "coming-soon" && (
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

              {/* Issue info */}
              <div style={{ flex: 1 }}>
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
                  Issue {item.issue}
                </span>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 26,
                    fontWeight: 500,
                    lineHeight: 1.25,
                    color: "#e8e4de",
                    margin: "0 0 12px",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 17,
                    lineHeight: 1.6,
                    color: "rgba(232,228,222,0.65)",
                    margin: "0 0 16px",
                  }}
                >
                  {item.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.1em",
                      color: "rgba(232,228,222,0.65)",
                    }}
                  >
                    {item.vertical}
                  </span>
                  <span
                    style={{
                      width: 3,
                      height: 3,
                      borderRadius: "50%",
                      background: "rgba(232,228,222,0.15)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      color: "rgba(232,228,222,0.65)",
                    }}
                  >
                    {item.date}
                    {item.readTime ? ` · ${item.readTime}` : ""}
                  </span>
                </div>
              </div>
            </Link>
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
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
