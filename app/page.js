import Link from "next/link";

const STATS = [
  { number: "2019", label: "Year Founded" },
  { number: "8+", label: "Years in Operation" },
  { number: "250+", label: "Total Graduates" },
  { number: "100%", label: "Joyful Learning" },
];

const PROGRAMS = [
  { icon: "🎓", title: "Preschool", desc: "Numbers, letters, and fun — building confident little learners.", color: "fi-gold" },
  { icon: "🏠", title: "Daycare", desc: "A cozy, hug-filled home away from home for your little ones.", color: "fi-cyan" },
  { icon: "☀️", title: "Summer Camp", desc: "Sunscreen, splashes, and wild adventures all summer long.", color: "fi-magenta" },
  { icon: "🎨", title: "Arts & Crafts", desc: "Creative masterpieces waiting to be born from tiny hands.", color: "fi-lime" },
];

const WHY_US = [
  { icon: "🛡️", title: "Safe & Secure Campus", desc: "CCTV monitoring, secure entrance, and trained staff for total peace of mind.", color: "fi-cyan" },
  { icon: "👩‍🏫", title: "Trained Educators", desc: "Passionate teachers dedicated to your child's growth.", color: "fi-gold" },
  { icon: "🎉", title: "Joyful Learning", desc: "Learning that feels like a party — because happy kids learn best.", color: "fi-magenta" },
  { icon: "💖", title: "Personal Attention", desc: "Small class sizes ensure every child gets the focus they need.", color: "fi-lime" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="hero-section" id="hero">
        <div className="hero-bg">
          <img src="/images/playground.jpeg" alt="Children playing at Tag Play School" />
        </div>
        <div className="hero-content">
          <div className="section-badge animate-in">⭐ TALENTED & GIFTED</div>
          <h1 className="hero-title animate-in delay-1">
            Every Year a Chapter,<br />
            <span className="hero-title-accent">Every Child a Story</span>
          </h1>
          <p className="hero-description animate-in delay-2">
            At Tag Play School, we nurture curiosity, empathy, and joy — empowering children to explore their unique talents through discovery-led experiences.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }} className="animate-in delay-3">
            <Link href="/contact" className="btn-primary">Enroll Now ✨</Link>
            <Link href="/about" className="btn-outline">Our Story →</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────── */}
      <section className="section-alt" id="stats">
        <div className="section-wrapper">
          <div className="grid-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item glass-card" style={{ padding: "2rem 1rem" }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Programs ───────────────────────────── */}
      <section className="section-dark" id="programs">
        <div className="section-wrapper">
          <div className="section-badge">🎯 What We Offer</div>
          <h2 className="section-title">Core Programs</h2>
          <p className="section-subtitle">
            From preschool foundations to creative explorations, we offer programs designed to spark wonder and growth.
          </p>
          <div className="grid-4">
            {PROGRAMS.map((p, i) => (
              <div key={p.title} className={`glass-card animate-in delay-${i + 1}`}>
                <div className={`feature-icon ${p.color}`}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.35rem", margin: "0 0 0.5rem" }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Showcase ──────────────────────────── */}
      <section className="section-alt" id="showcase">
        <div className="section-wrapper">
          <div className="section-badge">📸 Life at TAG</div>
          <h2 className="section-title">Moments of Joy</h2>
          <div className="grid-3">
            {[
              { src: "/images/classroom.jpeg", label: "Magic Classrooms" },
              { src: "/images/graduationday.jpeg", label: "Graduation Day" },
              { src: "/images/celebration.jpeg", label: "Festival Celebrations" },
            ].map((img) => (
              <div key={img.label} className="image-card">
                <img src={img.src} alt={img.label} />
                <div className="image-card-label">{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────── */}
      <section className="section-dark" id="why-us">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">💎 Why Tag Play School</div>
            <h2 className="section-title">Why Parents Love Us</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              We go beyond teaching — we inspire, protect, and celebrate every child.
            </p>
          </div>
          <div className="grid-4">
            {WHY_US.map((w, i) => (
              <div key={w.title} className={`glass-card animate-in delay-${i + 1}`} style={{ textAlign: "center" }}>
                <div className={`feature-icon ${w.color}`} style={{ margin: "0 auto 1rem" }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.2rem", margin: "0 0 0.5rem" }}>
                  {w.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────── */}
      <section className="section-alt" id="reviews">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">🌟 What Parents Say</div>
            <h2 className="section-title">Reviews From The Web</h2>
          </div>
          <div className="grid-4">
            {[
              { source: "Justdial", rating: "4.8/5", icon: "⭐" },
              { source: "Edustoke", rating: "4.1/5", icon: "⭐" },
              { source: "Facebook", rating: "5/5", icon: "⭐" },
              { source: "Google Reviews", rating: "4.9/5", icon: "⭐" },
            ].map((r, i) => (
              <div key={r.source} className="glass-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", margin: "0 auto 0.5rem" }}>{r.icon}</div>
                <div style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2.5rem", color: "var(--accent-gold)", margin: "0.5rem 0" }}>{r.rating}</div>
                <h3 style={{ fontSize: "1.1rem", margin: 0, color: "var(--text-primary)" }}>{r.source}</h3>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a 
              href="https://www.google.com/search?q=tagplayschool&rlz=1C1RXQR_enIN1183IN1185&oq=tagplayschool&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTISCAEQLhgNGK8BGMcBGIAEGI4FMgoIAhAAGAgYDRgeMgoIAxAAGAgYDRgeMgoIBBAAGAgYDRge0gEINTI0OGowajeoAgiwAgHxBRZzSfEiufux&sourceid=chrome&ie=UTF-8#lrd=0x3bcb97b797a8535d:0x3cead1b7a2c2b257,3,,,," 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section style={{
        background: "linear-gradient(135deg, #1a1f4e 0%, #0a0e27 50%, #1a1f4e 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,183,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="section-wrapper" style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "4rem 1.5rem" }}>
          <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "1rem" }}>
            Ready to Give Your Child the <span style={{ color: "var(--accent-gold)" }}>Best Start?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "30rem", margin: "0 auto 2rem" }}>
            Schedule a campus visit and see the magic for yourself.
          </p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.25rem", padding: "1rem 2.5rem" }}>
            Book A Visit 🌟
          </Link>
        </div>
      </section>
    </>
  );
}
