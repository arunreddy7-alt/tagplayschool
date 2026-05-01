"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Activities", href: "/activities" },
  { label: "Facilities", href: "/facilities" },
  { label: "Daycare", href: "/daycare" },
  { label: "Gallery", href: "/gallery" },
  { label: "Summer Camp", href: "/summer-camp" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      id="main-nav"
      style={{
        position: "fixed",
        top: "0.75rem",
        left: "0.75rem",
        right: "0.75rem",
        zIndex: 50,
        borderRadius: "9999px",
        background: "rgba(10, 14, 39, 0.85)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 183, 0, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0.6rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          <img
            src="/images/logo.jpeg"
            alt="Tag Play School"
            style={{
              height: "2.8rem",
              width: "auto",
              borderRadius: "0.5rem",
            }}
          />
          <span
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              fontSize: "1.5rem",
              fontWeight: 900,
              color: "#FFB700",
              lineHeight: 1,
            }}
          >
            Tag Play School
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.2rem",
            flex: 1,
            justifyContent: "center",
          }}
          className="nav-desktop-links"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: "1rem",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "color 0.2s ease, transform 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#FFB700";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#FFFFFF";
                e.target.style.transform = "scale(1)";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/contact" className="btn-primary nav-cta-desktop" style={{ padding: "0.5rem 1.4rem", fontSize: "1rem" }}>
            Enroll Now ✨
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#FFB700",
              fontSize: "1.8rem",
              cursor: "pointer",
              padding: "0.25rem",
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            borderTop: "1px solid rgba(255, 183, 0, 0.15)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: "1.15rem",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255, 183, 0, 0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ marginTop: "0.5rem", textAlign: "center", justifyContent: "center" }}
          >
            Enroll Now ✨
          </Link>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop-links { display: flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-cta-desktop { display: inline-flex !important; }
        }
        @media (max-width: 1023px) {
          .nav-hamburger { display: block !important; }
          .nav-cta-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
