export const metadata = {
  title: "Facilities — Tag Play School",
  description: "Explore our magic classrooms, adventure playground, storybook nook, doodle den, and more.",
};

const FACILITIES = [
  { icon: "🏫", title: "Magic Classrooms", desc: "Soft corners, rainbow walls, and learning stations designed to spark wonder.", color: "fi-gold", img: "/images/classroom.jpeg" },
  { icon: "🎢", title: "Adventure Kingdom", desc: "Outdoor playground with tunnels, slides, and bouncy floors for endless fun.", color: "fi-cyan", img: "/images/playground.jpeg" },
  { icon: "📚", title: "Storybook Nook", desc: "A cozy reading area with cloud bean bags where stories come alive.", color: "fi-magenta", img: null },
  { icon: "🖌️", title: "Doodle Den", desc: "Our art studio for finger painting, clay work, and creative exploration.", color: "fi-lime", img: null },
  { icon: "🧩", title: "Genius Zone", desc: "Montessori-style toys and puzzles for developing problem-solving skills.", color: "fi-gold", img: null },
  { icon: "☁️", title: "Dreamy Clouds", desc: "A quiet nap room with soft lighting and gentle music for rest time.", color: "fi-cyan", img: null },
];

const SAFETY = [
  { icon: "👁️", title: "CCTV Monitoring", desc: "Yes, 24/7 CCTV monitoring across all areas." },
  { icon: "🛡️", title: "Secure Entry", desc: "Registered entry only for maximum security." },
  { icon: "🩹", title: "First Aid", desc: "Yes, first-aid ready staff at all times." },
  { icon: "✨", title: "Hygiene Practices", desc: "Deep sanitization of all spaces 2 times every day." },
];

export default function FacilitiesPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">🏰 Our Spaces</div>
        <h1 className="section-title">Facilities</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Playful, colorful spaces designed for wonder, comfort, and safe exploration.
        </p>
      </div>

      {/* Facilities Grid */}
      <section className="section-dark">
        <div className="section-wrapper">
          <div className="grid-3">
            {FACILITIES.map((f) => (
              <div key={f.title} className="glass-card" style={{ overflow: "hidden" }}>
                {f.img && (
                  <div style={{ margin: "-2rem -2rem 1.5rem", overflow: "hidden", borderRadius: "var(--radius-lg) var(--radius-lg) 0 0" }}>
                    <img src={f.img} alt={f.title} style={{ width: "100%", height: "180px", objectFit: "cover", display: "block" }} />
                  </div>
                )}
                <div className={`feature-icon ${f.color}`} style={{ fontSize: "2rem", width: "4rem", height: "4rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.3rem", margin: "0.5rem 0" }}>{f.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Promise */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">🤞 Our Pinky Promise</div>
            <h2 className="section-title">Safety First, Always</h2>
          </div>
          <div className="grid-4">
            {SAFETY.map((s) => (
              <div key={s.title} className="glass-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.15rem", margin: "0 0 0.4rem" }}>{s.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.9rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
