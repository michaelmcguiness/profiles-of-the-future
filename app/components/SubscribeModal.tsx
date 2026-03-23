"use client";

import { useState } from "react";

export default function SubscribeModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          setSubmitted(false);
          setEmail("");
        }}
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
          border: "none",
        }}
      >
        Subscribe
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "1px solid rgba(232,228,222,0.08)",
              padding: "48px 40px",
              maxWidth: 440,
              width: "100%",
              position: "relative",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                color: "rgba(232,228,222,0.65)",
                fontSize: 20,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1,
              }}
            >
              &times;
            </button>

            {!submitted ? (
              <>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 28,
                    fontWeight: 400,
                    color: "#e8e4de",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}
                >
                  Be a part of the future.
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(232,228,222,0.65)",
                    margin: "0 0 28px",
                    lineHeight: 1.5,
                  }}
                >
                  One profile per month. Founder interviews, GP insights, and
                  the opportunities they see ahead.
                </p>
                <div style={{ display: "flex", gap: 0 }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && email) setSubmitted(true);
                    }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 13,
                      padding: "12px 16px",
                      background: "rgba(232,228,222,0.04)",
                      border: "1px solid rgba(232,228,222,0.1)",
                      borderRight: "none",
                      color: "#e8e4de",
                      outline: "none",
                      flex: 1,
                    }}
                  />
                  <button
                    onClick={() => {
                      if (email) setSubmitted(true);
                    }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "12px 24px",
                      background: "#c4956a",
                      color: "#0a0a0a",
                      border: "1px solid #c4956a",
                      cursor: "pointer",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    color: "rgba(232,228,222,0.15)",
                    margin: "16px 0 0",
                  }}
                >
                  No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 28,
                    fontWeight: 400,
                    color: "#e8e4de",
                    margin: "0 0 12px",
                    lineHeight: 1.3,
                  }}
                >
                  You&apos;re in.
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: "rgba(232,228,222,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  We&apos;ll send the next profile straight to your inbox.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
