export default function ContactPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">📞 Get in Touch</div>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Have questions about admissions, daycare, or want to schedule a campus visit? We&apos;d love to hear from you!
        </p>
      </div>

      <section className="section-dark">
        <div className="section-wrapper">
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div className="glass-card" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2.2rem", marginBottom: "2rem" }}>
                We&apos;re One Call Away
              </h2>

              <div className="grid-2" style={{ gap: "1.5rem", marginBottom: "2.5rem", textAlign: "left" }}>
                {[
                  { icon: "📍", label: "Address", value: "10-3-311/2/A, Castle Hills, Rd 1, Masab Tank, Hyd 500028" },
                  { icon: "📞", label: "Phone", value: "+91 9346132412, +91 9398629679" },
                  { icon: "✉️", label: "Email", value: "office@tagplayschool.org" },
                  { icon: "🕐", label: "Hours", value: "Mon-Sat: 9:00 AM - 5:30 PM" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem", background: "rgba(255,183,0,0.05)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,183,0,0.1)" }}>
                    <div style={{ fontSize: "1.8rem" }}>{c.icon}</div>
                    <div>
                      <div style={{ color: "var(--accent-gold)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.label}</div>
                      <div style={{ fontSize: "1.05rem", marginTop: "0.25rem" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
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
                    className="btn-outline"
                    style={{
                      padding: "0.6rem 1.5rem",
                      fontSize: "1rem",
                    }}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
