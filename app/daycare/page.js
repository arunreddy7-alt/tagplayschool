import Link from "next/link";

export const metadata = {
  title: "Daycare — Tag Play School",
  description: "A safe, loving home away from home. Flexible hours 7AM-7PM with nutritious meals, cozy naps, and supervised play.",
};

const FEATURES = [
  { icon: "⏰", title: "Flexible Timings", desc: "Drop off and pick up as per your schedule within our operating hours.", color: "fi-gold" },
  { icon: "😴", title: "Nap/Rest Time", desc: "Dedicated rest area for little ones with cozy beds and soft lullabies.", color: "fi-cyan" },
  { icon: "🎪", title: "Inside Adventures", desc: "Sensory pits, role-play stations, and indoor playgrounds for rainy-day fun.", color: "fi-magenta" },
  { icon: "📹", title: "Safety & Security", desc: "24/7 security with trained staff and CCTV surveillance for your peace of mind.", color: "fi-lime" },
];

export default function DaycarePage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">🏠 A Second Home</div>
        <h1 className="section-title">Daycare Services</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          A safe, sound, and snack-filled adventure — our daycare is a home away from home for your little explorers.
        </p>
      </div>

      {/* Hours Banner */}
      <section className="section-dark">
        <div className="section-wrapper" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="glass-card" style={{
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(255,183,0,0.1) 0%, rgba(0,212,255,0.05) 100%)",
            border: "1px solid rgba(255,183,0,0.3)",
          }}>
            <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.5rem", margin: "0 0 0.5rem" }}>
              ⏰ Flexible Hours
            </h2>
            <p style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2.5rem", color: "var(--accent-gold)", margin: "0 0 0.5rem" }}>
              9:00 AM – 5:30 PM
            </p>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>
              Drop-off and pick-up times that fit your schedule
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">✨ What We Provide</div>
            <h2 className="section-title">Daycare Features</h2>
          </div>
          <div className="grid-2">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div className={`feature-icon ${f.color}`} style={{ fontSize: "2rem", width: "4rem", height: "4rem", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.3rem", margin: "0 0 0.5rem" }}>{f.title}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-dark">
        <div className="section-wrapper" style={{ textAlign: "center" }}>
          <div className="section-badge">🛡️ Safety First</div>
          <h2 className="section-title">Your Child is Safe with Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2rem" }}>
            Superhero-trained teachers, secure premises, and constant monitoring — because your peace of mind matters.
          </p>
          <Link href="/contact" className="btn-primary">Learn More →</Link>
        </div>
      </section>
    </>
  );
}
