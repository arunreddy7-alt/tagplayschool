import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      style={{
        background: "linear-gradient(180deg, var(--bg-section) 0%, var(--bg-deep) 100%)",
        borderTop: "2px solid rgba(255, 183, 0, 0.2)",
        marginTop: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gradient orbs */}
      <div style={{ position: "absolute", top: "-100px", left: "-50px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255, 183, 0, 0.04)", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(0, 212, 255, 0.03)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1.5rem 1.5rem", position: "relative", zIndex: 1 }}>
        <div className="grid-3" style={{ marginBottom: "2.5rem" }}>
          {/* Column 1: About */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <img src="/images/logo.jpeg" alt="Logo" style={{ height: "2.5rem", borderRadius: "0.4rem" }} />
              <span style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.5rem", color: "var(--accent-gold)" }}>
                Tag Play School
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "22rem" }}>
              Where talented and gifted children learn, play, and grow. A joyful preschool and daycare shaping compassionate global citizens since 2012.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem", flexWrap: "wrap" }}>
              {[
                { name: "Instagram", url: "https://www.instagram.com/tagplayschoolmasabtank?igsh=bnNkejJuNjNibnMz" },
                { name: "WhatsApp", url: "https://wa.me/919346132412" },
                { name: "Facebook", url: "https://www.facebook.com/share/1H2JQ6uEWE/" },
                { name: "YouTube", url: "https://youtube.com/@tagplayschool638?si=gBnSkC9zMcVusxuT" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "0.35rem 0.8rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255, 183, 0, 0.2)",
                    color: "var(--accent-gold)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    background: "rgba(255, 183, 0, 0.06)",
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.2rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "var(--text-muted)", fontSize: "0.95rem", transition: "color 0.2s ease" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.2rem", color: "var(--accent-gold)", marginBottom: "1rem" }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
              <p style={{ margin: 0 }}>📞 +91 9346132412, +91 9398629679</p>
              <p style={{ margin: 0 }}>✉️ office@tagplayschool.org</p>
              <p style={{ margin: 0 }}>📍 10-3-311/2/A, Castle Hills, Road No. 1, Vijaynagar Colony, Masab Tank, Hyderabad 500028</p>
              <p style={{ margin: 0 }}>🕐 Mon-Sat: 9:00 AM - 5:30 PM</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ marginTop: "1.25rem", padding: "0.55rem 1.4rem", fontSize: "0.95rem" }}>
              Book A Campus Visit
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 183, 0, 0.12)",
            paddingTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "0.5rem",
            color: "var(--text-muted)",
            fontSize: "0.82rem",
          }}
        >
          <span>© 2026 Tag Play School. All rights reserved.</span>
          <span>
            Designed and developed by{" "}
            <a href="https://www.formyxsolutions.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", textDecoration: "none", fontWeight: "600" }}>
              Formyx Solutions
            </a>{" "}

          </span>
        </div>
      </div>
    </footer>
  );
}
