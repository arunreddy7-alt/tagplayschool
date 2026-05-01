import Link from "next/link";

export const metadata = {
  title: "Summer Camp — Tag Play School",
  description: "Join our exciting summer camp with creative crafts, nature walks, science magic, and team sports for ages 3-8.",
};

const THEMES = [
  { icon: "🎨", title: "Creative Crafts", ages: "Ages 4-7", desc: "Clay modelling, DIY projects, painting, and hands-on art workshops.", color: "fi-gold", cls: "pc-gold" },
  { icon: "🌿", title: "Nature Walks", ages: "Ages 3-6", desc: "Guided park explorations, leaf collections, and outdoor discoveries.", color: "fi-lime", cls: "pc-lime" },
  { icon: "🔮", title: "Science Magic", ages: "Ages 5-8", desc: "Safe experiments, volcano eruptions, and mind-blowing science fun.", color: "fi-cyan", cls: "pc-cyan" },
  { icon: "⚽", title: "Team Sports", ages: "Ages 4-8", desc: "Soccer, tag, obstacle courses, and teamwork-building activities.", color: "fi-magenta", cls: "pc-magenta" },
];

export default function SummerCampPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">☀️ Summer Fun</div>
        <h1 className="section-title">Summer Camp</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Sunshine, Learning & Pure Joy — making every summer unforgettable.
        </p>
      </div>

      {/* Schedule Banner */}
      <section className="section-dark">
        <div className="section-wrapper" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="glass-card" style={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(255,183,0,0.12) 0%, rgba(255,60,172,0.08) 100%)",
            border: "1px solid rgba(255,183,0,0.3)",
          }}>
            <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2rem", margin: "0 0 0.5rem" }}>
              🌞 July & August Cohorts
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", margin: 0 }}>
              Weekly themed adventures for children ages 3–8
            </p>
          </div>
        </div>
      </section>

      {/* Weekly Themes */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">🗓️ Weekly Themes</div>
            <h2 className="section-title">What We Have Planned</h2>
          </div>
          <div className="grid-2">
            {THEMES.map((t) => (
              <div key={t.title} className={`glass-card pillar-card ${t.cls}`}>
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <div className={`feature-icon ${t.color}`} style={{ fontSize: "2rem", width: "4rem", height: "4rem", flexShrink: 0 }}>{t.icon}</div>
                  <div>
                    <span style={{ color: "var(--accent-gold)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>{t.ages}</span>
                    <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: "0.25rem 0 0.5rem" }}>{t.title}</h3>
                    <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark">
        <div className="section-wrapper" style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
          <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2rem", marginBottom: "1rem" }}>
            Spots Fill Up Fast! <span style={{ color: "var(--accent-gold)" }}>Register Today ☀️</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Give your child an unforgettable summer experience.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.2rem" }}>Register Now 🌟</Link>
        </div>
      </section>
    </>
  );
}
