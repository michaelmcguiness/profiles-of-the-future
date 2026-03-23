import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubscribeModal from "../components/SubscribeModal";

export const metadata: Metadata = {
  title: "About — Profiles of the Future",
  description:
    "Each issue profiles one company reshaping civilization: how it was built, how its founders think about the future, and where the opportunities are for those who want to build next.",
};

export default function About() {
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
        style={{ position: "sticky", top: 0, background: "#0a0a0a", zIndex: 50 }}
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
                  item.label === "About"
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
      <article className="article-container">
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
              About
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
            An inquiry into the
            <br />
            companies building the future.
          </h1>
        </header>

        <div className="article-body">
          {/* Lead statement */}
          <p
            style={{
              fontSize: 22,
              lineHeight: 1.7,
              color: "rgba(232,228,222,0.85)",
              borderLeft: "2px solid rgba(196, 149, 106, 0.3)",
              paddingLeft: 28,
              marginBottom: 48,
            }}
          >
            Profiles of the Future is a publication by Andreessen Horowitz. Each
            issue tells the story of one company reshaping civilization — how it
            was built, how its founders think about what comes next, and where
            the opportunities are for those who want to build alongside them.
          </p>

          {/* Clarke book image + origin story */}
          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "flex-start",
              marginBottom: 56,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                width: 200,
                position: "relative",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/images/clarke-profiles.jpg"
                alt="Arthur C. Clarke — Profiles of the Future: An Inquiry into the Limits of the Possible (1962)"
                width={200}
                height={333}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2
                style={{
                  marginTop: 0,
                }}
              >
                Where the name comes from
              </h2>
              <p>
                In 1962, Arthur C. Clarke published{" "}
                <em>
                  Profiles of the Future: An Inquiry into the Limits of the
                  Possible
                </em>
                . Clarke argued that the prophets who get the future wrong almost
                always fail in one of two ways: <strong>failure of nerve</strong>{" "}
                — accepting that something is possible but not believing anyone
                will actually build it — and <strong>failure of imagination</strong>{" "}
                — not seeing it coming at all.
              </p>
              <p>
                His second law: &ldquo;The only way of discovering the limits of
                the possible is to venture a little way past them into the
                impossible.&rdquo;
              </p>
              <p>
                Clarke profiled technologies. We profile the companies and
                founders building them.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, rgba(232,228,222,0.08), rgba(196,149,106,0.12), rgba(232,228,222,0.08))",
              margin: "48px 0",
            }}
          />

          <h2>Why we write</h2>

          <p>
            These are a16z portfolio companies, and we backed them because we believe they matter.
            Our general partners led the investments, work alongside the founders, and have
            a front-row seat to how these companies are built. That gives us a unique perspective
            to help tell their story.
          </p>

          <p>
            Each profile goes deep on a single company: the first product, the
            first customer, the decisions that compounded, and the market map
            that shows where the next generation of founders can build. We write
            to help readers imagine a better future and to inspire founders to
            go build it.
          </p>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, rgba(232,228,222,0.08), rgba(196,149,106,0.12), rgba(232,228,222,0.08))",
              margin: "48px 0",
            }}
          />

          <h2>Read, Watch & Listen</h2>

          <p>
            Every profile is more than a written piece. Each issue comes with a
            long-form article, an original short documentary, and a full-length
            founder interview — because some stories are best seen and heard.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
              margin: "32px 0",
            }}
          >
            <Link
              href="/archive"
              style={{
                border: "1px solid rgba(232,228,222,0.06)",
                padding: "28px 24px",
                textDecoration: "none",
                color: "inherit",
                background: "rgba(232,228,222,0.02)",
                transition: "background 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c4956a",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Archive
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#e8e4de",
                  display: "block",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                All Issues
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(232,228,222,0.65)",
                }}
              >
                Browse the collection &rarr;
              </span>
            </Link>
            <Link
              href="/films"
              style={{
                border: "1px solid rgba(232,228,222,0.06)",
                padding: "28px 24px",
                textDecoration: "none",
                color: "inherit",
                background: "rgba(232,228,222,0.02)",
                transition: "background 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c4956a",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Films
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#e8e4de",
                  display: "block",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                Original Documentaries
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(232,228,222,0.65)",
                }}
              >
                Subscribe on YouTube &rarr;
              </span>
            </Link>
            <Link
              href="/podcast"
              style={{
                border: "1px solid rgba(232,228,222,0.06)",
                padding: "28px 24px",
                textDecoration: "none",
                color: "inherit",
                background: "rgba(232,228,222,0.02)",
                transition: "background 0.3s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#c4956a",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                Podcast
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#e8e4de",
                  display: "block",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                Founder Interviews
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(232,228,222,0.65)",
                }}
              >
                Spotify · Apple Podcasts &rarr;
              </span>
            </Link>
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, rgba(232,228,222,0.08), rgba(196,149,106,0.12), rgba(232,228,222,0.08))",
              margin: "48px 0",
            }}
          />

          <h2>About Andreessen Horowitz</h2>

          <p>
            Andreessen Horowitz (a16z) is a venture capital firm that backs bold
            entrepreneurs building the future through technology. We invest in
            every stage from seed to growth across AI, biotech, consumer, crypto,
            enterprise, fintech, games, infrastructure, and American Dynamism.
          </p>
        </div>

        {/* Back link */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            padding: "48px 0 100px",
            borderTop: "1px solid rgba(232,228,222,0.08)",
            marginTop: 64,
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
      </article>
    </div>
  );
}
