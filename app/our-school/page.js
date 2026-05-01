export const metadata = {
  title: "Our School — Tag Play School",
  description: "Discover the magic morning train — our daily routine of circle time, snacks, science, naps, and storytelling.",
};

const PROGRAMS = [
  { time: "2 – 3 yrs", title: "Playgroup", desc: "Sensory play, motor skills, basic vocabulary, sand play, finger painting, and rhymes.", icon: "👶" },
  { time: "3 – 4 yrs", title: "Nursery", desc: "Pre-reading, social interaction, patterns, story time, group play, and art & craft.", icon: "🌟" },
  { time: "4 – 5 yrs", title: "LKG", desc: "Phonics, number recognition, handwriting, worksheets, phonics games, and nature walks.", icon: "📝" },
  { time: "5 – 6 yrs", title: "UKG", desc: "Reading readiness, basic math, simple reading, story reading, and vocabulary building.", icon: "🔬" },
];

export default function OurSchoolPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">🏫 School Life</div>
        <h1 className="section-title">Our School</h1>
          Explore our tailored programs designed to nurture every dimension of your child's growth.
      </div>

      {/* Daily Routine */}
      <section className="section-dark">
        <div className="section-wrapper">
          <div className="grid-2" style={{ alignItems: "flex-start" }}>
            <div>
              <div className="section-badge">🎯 Programs Offered</div>
              <h2 className="section-title" style={{ fontSize: "2.2rem" }}>Tailored for Every Stage</h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Every age is a new adventure. From sensory play in Playgroup to reading readiness in UKG, our programs are carefully designed to support your child's unique developmental milestones.
              </p>
              <div className="image-card" style={{ aspectRatio: "16/10" }}>
                <img src="/images/classroom.jpeg" alt="Classroom at Tag Play School" />
                <div className="image-card-label">Our Vibrant Classrooms</div>
              </div>
            </div>

            <div>
              <div className="timeline">
                {PROGRAMS.map((r) => (
                  <div key={r.time} className="timeline-item">
                    <div className="timeline-time">{r.icon} {r.time}</div>
                    <div className="timeline-title">{r.title}</div>
                    <div className="timeline-desc">{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Photos */}
      <section className="section-alt">
        <div className="section-wrapper">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-badge">📸 School Moments</div>
            <h2 className="section-title">A Glimpse Inside</h2>
          </div>
          <div className="grid-3">
            {[
              { src: "/images/playground.jpeg", label: "Adventure Kingdom" },
              { src: "/images/graduationday.jpeg", label: "Proud Graduates" },
              { src: "/images/celebration.jpeg", label: "Festive Joy" },
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
