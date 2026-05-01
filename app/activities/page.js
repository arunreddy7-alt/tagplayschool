export const metadata = {
  title: "Activities — Tag Play School",
  description: "Explore our fun activities: arts & crafts, music & dance, storytelling, outdoor play, and team games.",
};

const ACTIVITIES = [
  { icon: "🎨", title: "Art & Craft", desc: "Messy colors, sticky glue, and wonderful masterpieces — creativity has no limits here.", color: "fi-gold", glow: "rgba(255,183,0,0.15)" },
  { icon: "💃", title: "Groove! Music & Dance", desc: "Moving feet to happy beats — our little ones discover rhythm and self-expression.", color: "fi-magenta", glow: "rgba(255,60,172,0.15)" },
  { icon: "📖", title: "Storytelling", desc: "Magic puppets and funny voices bringing books to life — imagination takes flight.", color: "fi-cyan", glow: "rgba(0,212,255,0.15)" },
  { icon: "☀️", title: "Sun & Fun Outdoor Play", desc: "Grass, sand, and playground adventures — fresh air fuels growing minds.", color: "fi-lime", glow: "rgba(123,255,60,0.15)" },
  { icon: "🧩", title: "Team Tag Play School", desc: "Puzzles, group games, and learning the beautiful art of friendship.", color: "fi-gold", glow: "rgba(255,183,0,0.15)" },
];

export default function ActivitiesPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">🎭 Once Upon a Time</div>
        <h1 className="section-title">Our Activities</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Every day is an adventure — from art to outdoor play, our activities spark wonder and growth.
        </p>
      </div>

      <section className="section-dark">
        <div className="section-wrapper">
          <div className="grid-3">
            {ACTIVITIES.map((a, i) => (
              <div key={a.title} className={`glass-card pillar-card ${i % 4 === 0 ? "pc-gold" : i % 4 === 1 ? "pc-magenta" : i % 4 === 2 ? "pc-cyan" : "pc-lime"} animate-in delay-${(i % 4) + 1}`}>
                <div className={`feature-icon ${a.color}`} style={{ fontSize: "2rem", width: "4rem", height: "4rem" }}>{a.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: "0.5rem 0" }}>{a.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Photos */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-badge">📸 In Action</div>
            <h2 className="section-title">Activities in Action</h2>
          </div>
          <div className="grid-3">
            {[
              { src: "/images/aboutus.jpeg", label: "Creative Fun" },
              { src: "/images/playground.jpeg", label: "Outdoor Adventures" },
              { src: "/images/annualday.jpeg", label: "Stage Performances" },
            ].map((img) => (
              <div key={img.label} className="image-card">
                <img src={img.src} alt={img.label} />
                <div className="image-card-label">{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
