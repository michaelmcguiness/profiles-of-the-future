import type { Metadata } from "next";
import Link from "next/link";

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
            { label: "Archive", href: "#" },
            { label: "About", href: "/about" },
            { label: "Podcast", href: "#" },
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
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
              background: "#c4956a",
              padding: "8px 20px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </span>
        </div>
      </nav>

      {/* Content */}
      <article className="article-container">
        <header className="article-header">
          <h1 className="article-title">
            About Profiles
            <br />
            of the Future
          </h1>
        </header>

        <div className="article-body">
          <p>
            In 1962, Arthur C. Clarke published{" "}
            <em>
              Profiles of the Future: An Inquiry into the Limits of the Possible
            </em>
            . Clarke argued that the prophets who get the future wrong almost
            always fail in one of two ways: failure of nerve (accepting that
            something is possible but not believing anyone will actually build it)
            and failure of imagination (not seeing it coming at all). His second law: &ldquo;The only way of discovering the
            limits of the possible is to venture a little way past them into the
            impossible.&rdquo;
          </p>

          <p>
            Clarke profiled technologies. We profile the companies and founders
            building them.
          </p>

          <p>
            Profiles of the Future continues Clarke&apos;s legacy for a new era
            of builders. Each issue tells the story of one company reshaping
            civilization — how it was built, how its founders think about what
            comes next, and where the opportunities are for those who want to
            build alongside them. We write to help readers imagine a better
            future and to inspire founders to go build it.
          </p>

          <p>
            We write with conviction because we invest with conviction. These are
            a16z portfolio companies. We are not neutral observers — we back them
            because we believe they matter, and we tell their stories because we
            believe the best way to get more builders is to show what building
            looks like.
          </p>

          <h2>About Andreessen Horowitz</h2>

          <p>
            Andreessen Horowitz (a16z) is a venture capital firm that backs bold
            entrepreneurs building the future. Founded in 2009 by Marc Andreessen
            and Ben Horowitz, the firm manages more than $40 billion across funds
            investing in AI, bio and health, crypto, enterprise, fintech, games,
            infrastructure, and American Dynamism — the category of companies
            rebuilding the physical and institutional foundations of American
            strength in defense, aerospace, energy, manufacturing, education, and
            public safety. Marc wrote &ldquo;Why Software Is Eating the
            World&rdquo; in 2011 and &ldquo;It&apos;s Time to Build&rdquo; in
            2020. This publication is one answer to that call.
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
      </article>
    </div>
  );
}
