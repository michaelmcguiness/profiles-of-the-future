"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SubscribeModal from "./components/SubscribeModal";

export default function ProfilesLanding() {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const upcoming = [
    {
      issue: "002",
      title: "Hadrian and the New American Factory",
      subtitle:
        "AI-powered autonomous factories manufacturing precision aerospace and defense parts up to 10x faster — reindustrializing America one factory at a time.",
      vertical: "Manufacturing · American Dynamism",
      status: "Coming April 2026",
      accent: "#4a7c9b",
      image: "/images/002/hadrian-factory.webp",
    },
    {
      issue: "003",
      title: "Radiant and the Nuclear Renaissance",
      subtitle:
        "A portable microreactor that fits in a shipping container and replaces diesel generators with clean, meltdown-proof nuclear power — deployable anywhere by truck or aircraft.",
      vertical: "Energy · American Dynamism",
      status: "Coming May 2026",
      accent: "#3d6bdb",
      image: "/images/003/radiant-kaleidos.jpg",
    },
    {
      issue: "004",
      title: "Mariana Minerals and the Critical Mineral Race",
      subtitle:
        "Software-first, AI-driven mining compressing a 12-year mine development timeline into a fraction — rebuilding America's critical mineral supply chains when energy, AI, and defense all depend on them.",
      vertical: "Mining · American Dynamism",
      status: "Coming June 2026",
      accent: "#8b6b3d",
      image: "/images/004/mariana-minerals.jpg",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#e8e4de",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Subtle grain overlay */}
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
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(-10px)",
          transition: "all 0.8s ease 0.2s",
        }}
      >
        <div className="nav-brand">
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

      {/* Main content area */}
      <div className="main-container">
        {/* Hero section */}
        <div
          className="hero"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.4s",
          }}
        >
          {/* Issue label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
              flexWrap: "wrap",
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
              Issue 001
            </span>
            <div
              style={{
                height: 1,
                width: 48,
                background: "linear-gradient(90deg, #c4956a, transparent)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(232,228,222,0.65)",
              }}
            >
              Defense · American Dynamism
            </span>
          </div>

          {/* Hero title */}
          <Link href="/issues/001" className="hero-title-link">
            <h1 className="hero-title">Anduril and the</h1>
            <h1 className="hero-title">Future of War</h1>
          </Link>

          {/* Byline */}
          <div className="byline">
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(232,228,222,0.65)",
              }}
            >
              March 2026
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                borderRadius: "50%",
                background: "rgba(232,228,222,0.2)",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "rgba(232,228,222,0.65)",
              }}
            >
              18 min read
            </span>
          </div>

          {/* Hero image */}
          <div className="hero-image-wrapper">
            <Image
              src="/images/001/fury.webp"
              alt="Anduril Fury autonomous drone in flight"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="hero-image-overlay" />
            <span
              style={{
                position: "absolute",
                bottom: 16,
                right: 20,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                letterSpacing: "0.1em",
                color: "rgba(232,228,222,0.65)",
                zIndex: 2,
              }}
            >
              Anduril Fury
            </span>
          </div>

          {/* Opening paragraph */}
          <div className="opening-text">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 21,
                lineHeight: 1.7,
                color: "rgba(232,228,222,0.9)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              Nine years ago, Anduril didn&apos;t exist. This year, the U.S.
              Army awarded the company a single contract worth up to $20
              billion. This is the story of how it was built.
            </p>
          </div>

          {/* Read button */}
          <div style={{ marginTop: 40 }}>
            <Link
              href="/issues/001"
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
              Read the full profile →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, rgba(232,228,222,0.08), rgba(196,149,106,0.15), rgba(232,228,222,0.08))",
            marginBottom: 56,
          }}
        />

        {/* Series description */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.8s",
            marginBottom: 48,
            maxWidth: 620,
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 19,
              lineHeight: 1.7,
              color: "rgba(232,228,222,0.65)",
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Each profile tells the story of how they were built — the first
            product, the first customer, the decisions that compounded — and
            maps the opportunities opening up for the founders who want to build
            next.
          </p>
        </div>

        {/* Upcoming issues */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1s",
            marginBottom: 80,
          }}
        >
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(232,228,222,0.65)",
              marginBottom: 28,
            }}
          >
            Coming Soon
          </div>
          <div className="upcoming-grid">
            {upcoming.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? "#0f0f0f" : "#0a0a0a",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  transition: "background 0.4s ease",
                  borderTop: `2px solid ${
                    hovered === i ? item.accent : "transparent"
                  }`,
                  overflow: "hidden",
                }}
              >
                {/* Card image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 367px"
                    style={{
                      objectFit: "cover",
                      filter: hovered === i ? "brightness(0.8)" : "brightness(0.5)",
                      transition: "filter 0.4s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      left: 14,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(0,0,0,0.5)",
                      padding: "4px 8px",
                    }}
                  >
                    Coming Soon
                  </div>
                </div>
                {/* Card content */}
                <div
                  style={{
                    padding: "24px 28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color:
                        hovered === i ? item.accent : "rgba(232,228,222,0.2)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Issue {item.issue}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 23,
                      fontWeight: 500,
                      lineHeight: 1.25,
                      color:
                        hovered === i ? "#e8e4de" : "rgba(232,228,222,0.55)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 17,
                      lineHeight: 1.55,
                      color: "rgba(232,228,222,0.65)",
                      margin: 0,
                      minHeight: 44,
                    }}
                  >
                    {item.subtitle}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 14,
                      letterSpacing: "0.1em",
                      color: "rgba(232,228,222,0.15)",
                      marginTop: 4,
                    }}
                  >
                    {item.vertical} · {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1.2s",
            textAlign: "center",
            paddingBottom: 100,
          }}
        >
          <div className="subscribe-box">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 28,
                fontWeight: 400,
                color: "rgba(232,228,222,0.9)",
                margin: 0,
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              An inquiry into the companies
              <br />
              building the future.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(232,228,222,0.65)",
                margin: 0,
                marginBottom: 32,
              }}
            >
              One profile per month. Founder interviews, partner perspectives, and the
              opportunities they see ahead.
            </p>
            <div className="subscribe-form">
              <input
                type="email"
                placeholder="your@email.com"
                readOnly
                className="subscribe-input"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(232,228,222,0.15)",
            }}
          >
            © 2026 Profiles of the Future. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "rgba(232,228,222,0.15)",
            }}
          >
            An a16z publication
          </span>
        </div>
      </div>
    </div>
  );
}
