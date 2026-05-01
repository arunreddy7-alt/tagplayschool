import Link from "next/link";

export const metadata = {
  title: "About Us — Tag Play School",
  description: "Learn about Tag Play School's mission, vision, and the passionate team behind our preschool and daycare.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="page-header section-alt">
        <div className="section-badge">🏫 Our Story</div>
        <h1 className="section-title">About Tag Play School</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          Where curiosity, empathy, and joy come together to foster growth and confidence in every child.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="section-dark">
        <div className="section-wrapper">
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div>
              <div className="image-card" style={{ aspectRatio: "3/2" }}>
                <img src="/images/aboutus.jpeg" alt="About Tag Play School" />
              </div>
            </div>
            <div>
              <div className="glass-card" style={{ marginBottom: "1.5rem" }}>
                <div className="feature-icon fi-gold">🎯</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: "0 0 0.75rem" }}>Our Mission</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>
                  We spark young minds through engaging, activity-based experiences that turn everyday moments into opportunities for discovery, creativity, and growth.
                </p>
              </div>
              <div className="glass-card">
                <div className="feature-icon fi-cyan">🔭</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: "0 0 0.75rem" }}>Our Vision</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.7 }}>
                  Shaping a future where learning is joyful, meaningful, and driven by curiosity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-alt">
        <div className="section-wrapper" style={{ textAlign: "center" }}>
          <div className="section-badge">👩‍🏫 Leadership</div>
          <h2 className="section-title">Our Founder</h2>
          <div className="glass-card" style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
              <img src="/images/principal.jpeg" alt="Vellala Jyotsna" style={{ width: "5rem", height: "5rem", borderRadius: "50%", objectFit: "cover" }} />
              <div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.4rem", margin: 0 }}>Vellala Jyotsna</h3>
                <p style={{ color: "var(--accent-gold)", fontSize: "0.9rem", margin: 0 }}>Principal & Founder</p>
              </div>
            </div>
            <blockquote style={{
              borderLeft: "3px solid var(--accent-gold)",
              paddingLeft: "1.25rem",
              margin: 0,
              color: "var(--text-muted)",
              fontStyle: "italic",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}>
              &ldquo;At TAG Play School, we cherish the magic of childhood and the joy of first discoveries. We create a loving space where every child feels confident to explore, express, and grow. Together with parents, we nurture happy hearts and curious minds for a beautiful tomorrow.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-dark">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge">✨ How We Learn</div>
            <h2 className="section-title">Teaching Philosophy</h2>
          </div>
          <div className="grid-3">
            {[
              { name: "Learn by Doing", role: "Hands-on activities that make learning fun, meaningful, and easy to understand.", icon: "🎨", color: "fi-gold" },
              { name: "Explore & Express", role: "Art, music, and storytelling to build creativity and confidence.", icon: "🎭", color: "fi-cyan" },
              { name: "Social Growth", role: "Interactive play that develops communication, sharing, and teamwork.", icon: "🤝", color: "fi-magenta" },
              { name: "Think & Discover", role: "Curiosity-driven learning that encourages questions and problem-solving.", icon: "🧠", color: "fi-lime" },
              { name: "Grow Every Day", role: "A nurturing space where each child learns at their own pace.", icon: "🌱", color: "fi-gold" },
            ].map((t) => (
              <div key={t.name} className="glass-card" style={{ textAlign: "center" }}>
                <div className={`feature-icon ${t.color}`} style={{ margin: "0 auto 1rem", fontSize: "2rem", width: "4rem", height: "4rem" }}>{t.icon}</div>
                <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "1.15rem", margin: "0 0 0.3rem" }}>{t.name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt">
        <div className="section-wrapper" style={{ textAlign: "center", padding: "4rem 1.5rem" }}>
          <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: "2rem", marginBottom: "1rem" }}>
            Come Meet Our <span style={{ color: "var(--accent-gold)" }}>Amazing Team!</span>
          </h2>
          <Link href="/contact" className="btn-primary">Schedule a Visit 🌟</Link>
        </div>
      </section>
    </>
  );
}
