export const metadata = {
  title: "Curriculum — Tag Play School",
  description: "Our 4 Magic Pillars curriculum: Creative Art, Making Friends, Active Play, and Smart Minds for ages 1.5 to 5.5.",
};

const PILLARS = [
  { icon: "🎨", title: "Creativity", desc: "Encouraging imagination, self-expression, and original thinking through art, music, and play.", cls: "pc-gold", fi: "fi-gold" },
  { icon: "🧠", title: "Curiosity", desc: "Inspiring children to ask questions, explore, and discover the world around them.", cls: "pc-cyan", fi: "fi-cyan" },
  { icon: "💛", title: "Confidence", desc: "Building self-belief and independence in a safe and supportive environment.", cls: "pc-magenta", fi: "fi-magenta" },
  { icon: "🤝", title: "Care", desc: "Fostering empathy, kindness, and collaboration in every interaction.", cls: "pc-lime", fi: "fi-lime" },
];

const PROGRAMS = [
  { age: "2 – 3 years", title: "Playgroup", desc: "Sensory play, motor skills, basic vocabulary, sand play, finger painting, and rhymes.", icon: "👶", color: "fi-gold" },
  { age: "3 – 4 years", title: "Nursery", desc: "Pre-reading, social interaction, patterns, story time, group play, and art & craft.", icon: "🌟", color: "fi-cyan" },
  { age: "4 – 5 years", title: "LKG", desc: "Phonics, number recognition, handwriting, worksheets, phonics games, and nature walks.", icon: "📝", color: "fi-magenta" },
  { age: "5 – 6 years", title: "UKG", desc: "Reading readiness, basic math, simple reading, story reading, and vocabulary building.", icon: "🔬", color: "fi-lime" },
];

export default function CurriculumPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">📚 Learning Framework</div>
        <h1 className="section-title">Our Curriculum</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Built on 4 Magic Pillars, our curriculum nurtures every dimension of your child&apos;s growth.
        </p>
      </div>

      {/* 4 Pillars */}
      <section className="section-dark">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">✨ The 4 Magic Pillars</div>
            <h2 className="section-title">Foundations of Learning</h2>
          </div>
          <div className="grid-4">
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`glass-card pillar-card ${p.cls} animate-in delay-${i + 1}`} style={{ textAlign: "center" }}>
                <div className={`feature-icon ${p.fi}`} style={{ margin: "0 auto 1rem", fontSize: "2.5rem", width: "5rem", height: "5rem" }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.3rem", margin: "0 0 0.5rem" }}>{p.title}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6, fontSize: "0.95rem" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Programs */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">🎒 Age-Specific Programs</div>
            <h2 className="section-title">Tailored for Every Stage</h2>
          </div>
          <div className="grid-2">
            {PROGRAMS.map((p) => (
              <div key={p.title} className="glass-card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div className={`feature-icon ${p.color}`} style={{ fontSize: "2rem", width: "4rem", height: "4rem", flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <span style={{ color: "var(--accent-gold)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.age}</span>
                  <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: "0.25rem 0 0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
