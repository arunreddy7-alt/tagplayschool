export const metadata = {
  title: "Gallery — Tag Play School",
  description: "Browse beautiful moments from Tag Play School — classrooms, celebrations, graduation, and more.",
};

const GALLERY_IMAGES = [
  { src: "/images/classroom.jpeg", label: "Classroom Learning" },
  { src: "/images/playground.jpeg", label: "Playground Fun" },
  { src: "/images/graduationday.jpeg", label: "Graduation Day" },
  { src: "/images/graduationday1.jpeg", label: "Graduation Celebration" },
  { src: "/images/annualday.jpeg", label: "Annual Day Performance" },
  { src: "/images/annualday1.jpeg", label: "Independence Day" },
  { src: "/images/annualday2.jpeg", label: "Annual Day Salute" },
  { src: "/images/celebration.jpeg", label: "Festival Celebration" },
  { src: "/images/aboutus.jpeg", label: "Creative Expression" },
  { src: "/images/gallery-1.jpeg", label: "Happy Moments" },
  { src: "/images/gallery-2.jpeg", label: "Art & Craft" },
  { src: "/images/gallery-3.jpeg", label: "Fun Activities" },
  { src: "/images/gallery-4.jpeg", label: "Learning Together" },
  { src: "/images/gallery-5.jpeg", label: "Outdoor Play" },
  { src: "/images/gallery-6.jpeg", label: "Group Activities" },
  { src: "/images/gallery-7.jpeg", label: "Celebrations" },
  { src: "/images/gallery-8.jpeg", label: "Creative Play" },
  { src: "/images/gallery-9.jpeg", label: "Story Time" },
  { src: "/images/gallery-10.jpeg", label: "Music & Dance" },
  { src: "/images/gallery-11.jpeg", label: "Team Building" },
  { src: "/images/gallery-12.jpeg", label: "Fun Day" },
  { src: "/images/gallery-13.jpeg", label: "Special Events" },
  { src: "/images/gallery-14.jpeg", label: "School Life" },
];

export default function GalleryPage() {
  return (
    <>
      <div className="page-header section-alt">
        <div className="section-badge">📸 Our Memories</div>
        <h1 className="section-title">Photo Gallery</h1>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          A peek into the colorful, joyful world of Tag Play School — captured in beautiful moments.
        </p>
      </div>

      <section className="section-dark">
        <div className="section-wrapper">
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img.src} alt={img.label} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
