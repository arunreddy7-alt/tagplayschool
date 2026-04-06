import { readFileSync } from "node:fs";
import { join } from "node:path";

const STITCH_ROOT = join(/* turbopackIgnore: true */ process.cwd(), "stitch", "stitch");

const STITCH_FILES = {
  about_us_joyful_edition: join(STITCH_ROOT, "about_us_joyful_edition", "code.html"),
  activities_joyful_edition: join(STITCH_ROOT, "activities_joyful_edition", "code.html"),
  contact_joyful_edition: join(STITCH_ROOT, "contact_joyful_edition", "code.html"),
  curriculum_joyful_edition: join(STITCH_ROOT, "curriculum_joyful_edition", "code.html"),
  daycare_joyful_edition: join(STITCH_ROOT, "daycare_joyful_edition", "code.html"),
  facilities_joyful_edition: join(STITCH_ROOT, "facilities_joyful_edition", "code.html"),
  gallery_joyful_edition: join(STITCH_ROOT, "gallery_joyful_edition", "code.html"),
  home_joyful_edition: join(STITCH_ROOT, "home_joyful_edition", "code.html"),
  our_school_joyful_edition: join(STITCH_ROOT, "our_school_joyful_edition", "code.html"),
  summer_camp_joyful_edition: join(STITCH_ROOT, "summer_camp_joyful_edition", "code.html"),
};

const NAV_MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about_us_joyful_edition" },
  { label: "Curriculum", href: "/curriculum_joyful_edition" },
  { label: "Facilities", href: "/facilities_joyful_edition" },
  { label: "School", href: "/our_school_joyful_edition" },
  { label: "Daycare", href: "/daycare_joyful_edition" },
  { label: "Activities", href: "/activities_joyful_edition" },
  { label: "Summer Camp", href: "/summer_camp_joyful_edition" },
  { label: "Gallery", href: "/gallery_joyful_edition" },
  { label: "Contact", href: "/contact_joyful_edition" },
];

const FOOTER_LINK_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/curriculum_joyful_edition" },
  { label: "Gallery", href: "/gallery_joyful_edition" },
  { label: "Contact", href: "/contact_joyful_edition" },
];

const NAV_LOCKED_STYLE = `
<style id="copilot-gallery-nav-lock">
  .copilot-gallery-nav {
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 50;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(12px);
    border: 4px solid #FFD93D;
    box-shadow: 0 12px 28px rgba(31, 58, 95, 0.2);
  }

  .copilot-gallery-nav-inner {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .copilot-gallery-brand {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .copilot-gallery-brand-icon {
    color: #1f3a5f;
    font-size: 2rem;
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .copilot-gallery-brand-text {
    color: #1f3a5f;
    font-size: 1.75rem;
    font-weight: 900;
    font-style: italic;
    letter-spacing: -0.02em;
    line-height: 1;
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
  }

  .copilot-gallery-nav-links {
    display: none;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    flex: 1;
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
    font-size: 1.25rem;
  }

  .copilot-gallery-nav-link {
    text-decoration: none;
    color: #1f3a5f;
    white-space: nowrap;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .copilot-gallery-nav-link:hover {
    color: #FFD93D;
    transform: scale(1.08);
  }

  .copilot-gallery-enroll {
    background: #FFD93D;
    color: #1f3a5f;
    border: none;
    border-radius: 9999px;
    padding: 0.65rem 1.6rem;
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    box-shadow: 0 6px 0 #d6b52f;
    cursor: pointer;
  }

  .copilot-gallery-enroll:hover {
    background: #ffffff;
    color: #1f3a5f;
  }

  @media (min-width: 768px) {
    .copilot-gallery-nav-links {
      display: flex;
    }
  }
</style>`;

const FOOTER_LOCKED_STYLE = `
<style id="copilot-gallery-footer-lock">
  .copilot-gallery-footer {
    margin-top: 2.5rem;
    border-top: 6px solid #FFD93D;
    background:
      radial-gradient(circle at 12% 20%, rgba(255, 217, 61, 0.25) 0, transparent 38%),
      radial-gradient(circle at 88% 10%, rgba(31, 58, 95, 0.08) 0, transparent 34%),
      #ffffff;
    color: #1f3a5f;
    border-top-left-radius: 2.5rem;
    border-top-right-radius: 2.5rem;
    box-shadow: 0 -14px 28px rgba(31, 58, 95, 0.1);
    overflow: hidden;
  }

  .copilot-gallery-footer-inner {
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.4rem 1rem 1rem;
    position: relative;
  }

  .copilot-gallery-footer-ribbon {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.45rem 0.85rem;
    border-radius: 9999px;
    background: #FFD93D;
    color: #1f3a5f;
    border: 1px solid rgba(31, 58, 95, 0.2);
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    letter-spacing: 0.02em;
  }

  .copilot-gallery-footer-intro {
    margin: 0.55rem 0 1rem;
    max-width: 40rem;
    color: #1f3a5f;
    font-size: 0.93rem;
    line-height: 1.5;
  }

  .copilot-gallery-footer-grid {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: 1fr;
  }

  .copilot-gallery-footer-card {
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(31, 58, 95, 0.16);
    border-radius: 1.2rem;
    padding: 0.8rem 0.85rem 0.9rem;
    backdrop-filter: blur(2px);
  }

  .copilot-gallery-footer-title {
    margin: 0 0 0.6rem;
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #1f3a5f;
  }

  .copilot-gallery-footer-text {
    margin: 0;
    color: #1f3a5f;
    line-height: 1.45;
    font-size: 0.92rem;
  }

  .copilot-gallery-footer-contact-line {
    margin: 0.22rem 0;
    color: #1f3a5f;
    font-weight: 600;
    font-size: 0.92rem;
  }

  .copilot-gallery-footer-contact-line strong {
    color: #1f3a5f;
  }

  .copilot-gallery-footer-links {
    display: grid;
    gap: 0.35rem;
  }

  .copilot-gallery-footer-link {
    color: #1f3a5f;
    text-decoration: none;
    font-weight: 700;
    width: fit-content;
    border-bottom: 1px solid transparent;
    transition: border-color 0.18s ease, transform 0.18s ease, color 0.18s ease;
    font-size: 0.9rem;
  }

  .copilot-gallery-footer-link:hover {
    color: #FFD93D;
    border-bottom-color: #FFD93D;
    transform: translateX(2px);
  }

  .copilot-gallery-footer-mini-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-top: 0.65rem;
  }

  .copilot-gallery-footer-chip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.28rem 0.65rem;
    border-radius: 9999px;
    background: #FFD93D;
    color: #1f3a5f;
    border: 1px solid rgba(31, 58, 95, 0.2);
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 700;
  }

  .copilot-gallery-footer-chip:hover {
    transform: translateY(-1px);
  }

  .copilot-gallery-footer-cta {
    margin-top: 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.58rem 0.9rem;
    border-radius: 9999px;
    background: #FFD93D;
    color: #1f3a5f;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 6px 10px rgba(31, 58, 95, 0.12);
    transition: transform 0.2s ease;
    font-size: 0.86rem;
  }

  .copilot-gallery-footer-cta:hover {
    background: #ffffff;
    transform: translateY(-2px);
  }

  .copilot-gallery-footer-socials {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }

  .copilot-gallery-social-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.62rem;
    border-radius: 9999px;
    border: 1px solid rgba(31, 58, 95, 0.2);
    color: #1f3a5f;
    background: rgba(255, 255, 255, 0.92);
    text-decoration: none;
    font-weight: 700;
    font-size: 0.76rem;
  }

  .copilot-gallery-social-pill:hover {
    border-color: #FFD93D;
    color: #1f3a5f;
  }

  .copilot-gallery-footer-bottom {
    border-top: 2px dashed rgba(31, 58, 95, 0.22);
    margin-top: 0.85rem;
    padding-top: 0.7rem;
    color: #1f3a5f;
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.8rem;
  }

  @media (min-width: 768px) {
    .copilot-gallery-footer-inner {
      padding: 1.6rem 1.25rem 1.15rem;
    }

    .copilot-gallery-footer-grid {
      grid-template-columns: 1.3fr 1fr;
    }
  }
</style>`;

const THEME_OVERRIDE_STYLE = `
<style id="copilot-gallery-theme">
  :root {
    --copilot-theme-primary: #1f3a5f;
  }

  html,
  body {
    color: var(--copilot-theme-primary) !important;
  }

  .text-primary,
  .text-secondary,
  .text-tertiary,
  .text-on-surface,
  .text-on-background,
  .text-on-surface-variant,
  .text-sky-700,
  .text-sky-900,
  .text-sky-950,
  .text-amber-500,
  .text-amber-600,
  .text-rose-900,
  .text-rose-950,
  .text-white,
  .text-on-primary,
  .text-on-secondary,
  .text-on-tertiary {
    color: var(--copilot-theme-primary) !important;
  }

  /* White surfaces should always display blue text. */
  [class*="bg-white"],
  [class*="bg-surface"],
  [class*="bg-background"],
  [style*="background: white"],
  [style*="background-color: white"],
  [style*="background:#fff"],
  [style*="background-color:#fff"],
  [style*="background: #fff"],
  [style*="background-color: #fff"],
  [style*="background:#ffffff"],
  [style*="background-color:#ffffff"],
  [style*="background: #ffffff"],
  [style*="background-color: #ffffff"] {
    color: var(--copilot-theme-primary) !important;
  }

  [class*="bg-white"] *,
  [class*="bg-surface"] *,
  [class*="bg-background"] *,
  [style*="background: white"] *,
  [style*="background-color: white"] *,
  [style*="background:#fff"] *,
  [style*="background-color:#fff"] *,
  [style*="background: #fff"] *,
  [style*="background-color: #fff"] *,
  [style*="background:#ffffff"] *,
  [style*="background-color:#ffffff"] *,
  [style*="background: #ffffff"] *,
  [style*="background-color: #ffffff"] * {
    color: var(--copilot-theme-primary) !important;
  }
</style>`;

const BUBBLEGUM_FONT_LINK =
  '<link id="copilot-gallery-font" href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet"/>';

function injectNavbarStyle(html) {
  let nextHtml = html;

  if (!nextHtml.includes('id="copilot-gallery-font"')) {
    if (/<\/head>/i.test(nextHtml)) {
      nextHtml = nextHtml.replace(/<\/head>/i, `${BUBBLEGUM_FONT_LINK}\n</head>`);
    } else {
      nextHtml = `${BUBBLEGUM_FONT_LINK}\n${nextHtml}`;
    }
  }

  if (nextHtml.includes('id="copilot-gallery-nav-lock"')) {
    if (!nextHtml.includes('id="copilot-gallery-theme"') || !nextHtml.includes('id="copilot-gallery-footer-lock"')) {
      if (/<\/head>/i.test(nextHtml)) {
        return nextHtml.replace(
          /<\/head>/i,
          `${THEME_OVERRIDE_STYLE}\n${FOOTER_LOCKED_STYLE}\n</head>`,
        );
      }

      return `${THEME_OVERRIDE_STYLE}\n${FOOTER_LOCKED_STYLE}\n${nextHtml}`;
    }

    return nextHtml;
  }

  if (/<\/head>/i.test(nextHtml)) {
    return nextHtml.replace(
      /<\/head>/i,
      `${NAV_LOCKED_STYLE}\n${THEME_OVERRIDE_STYLE}\n${FOOTER_LOCKED_STYLE}\n</head>`,
    );
  }

  return `${NAV_LOCKED_STYLE}\n${THEME_OVERRIDE_STYLE}\n${FOOTER_LOCKED_STYLE}\n${nextHtml}`;
}

function buildGalleryNavLinks() {
  return NAV_MENU_ITEMS.map(({ label, href }) => {
    return `<a class="copilot-gallery-nav-link" href="${href}">${label}</a>`;
  }).join("\n");
}

function buildGlobalGalleryNavbar() {
  return `
<nav class="copilot-gallery-nav">
  <div class="copilot-gallery-nav-inner">
    <a class="copilot-gallery-brand" href="/">
      <span class="material-symbols-outlined copilot-gallery-brand-icon">star</span>
      <span class="copilot-gallery-brand-text">Little Stars</span>
    </a>
    <div class="copilot-gallery-nav-links">
      ${buildGalleryNavLinks()}
    </div>
    <button class="copilot-gallery-enroll">
      Enroll!
    </button>
  </div>
</nav>`;
}

function buildGalleryFooterLinks() {
  return FOOTER_LINK_ITEMS.map(({ label, href }) => {
    return `<a class="copilot-gallery-footer-link" href="${href}">${label}</a>`;
  }).join("\n");
}

function buildGalleryFooterChips() {
  return FOOTER_LINK_ITEMS.map(({ label, href }) => {
    return `<a class="copilot-gallery-footer-chip" href="${href}">${label}</a>`;
  }).join("\n");
}

function buildGlobalContactFooter() {
  return `
<footer class="copilot-gallery-footer">
  <div class="copilot-gallery-footer-inner">
    <div class="copilot-gallery-footer-ribbon">
      <span class="material-symbols-outlined" style="font-size:1.05rem;">kid_star</span>
      Parent Support Desk
    </div>
    <p class="copilot-gallery-footer-intro">Need help with admissions or daycare timings? We are one call away.</p>
    <div class="copilot-gallery-footer-grid">
      <div class="copilot-gallery-footer-card">
        <h3 class="copilot-gallery-footer-title">Little Stars</h3>
        <p class="copilot-gallery-footer-text">A joyful preschool and daycare where children learn, play, and grow with confidence.</p>
        <div class="copilot-gallery-footer-mini-links">
          ${buildGalleryFooterChips()}
        </div>
        <a class="copilot-gallery-footer-cta" href="/contact_joyful_edition">Book A Campus Visit</a>
      </div>
      <div class="copilot-gallery-footer-card">
        <h4 class="copilot-gallery-footer-title">Contact</h4>
        <p class="copilot-gallery-footer-contact-line"><strong>Phone:</strong> +91 98765 43210</p>
        <p class="copilot-gallery-footer-contact-line"><strong>Email:</strong> hello@littlestars.edu</p>
        <p class="copilot-gallery-footer-contact-line"><strong>Address:</strong> Vijaynagar Colony, Hyderabad</p>
        <div class="copilot-gallery-footer-socials">
          <a class="copilot-gallery-social-pill" href="#">Instagram</a>
          <a class="copilot-gallery-social-pill" href="#">WhatsApp</a>
          <a class="copilot-gallery-social-pill" href="#">Facebook</a>
        </div>
      </div>
    </div>
    <div class="copilot-gallery-footer-bottom">
      <span>© 2026 Little Stars. All rights reserved.</span>
      <span>Mon-Sat: 8:00 AM - 6:30 PM</span>
    </div>
  </div>
</footer>`;
}

function injectGlobalMenu(html) {
  const sharedNav = buildGlobalGalleryNavbar();
  const fixedNavRegex = /<nav\b[^>]*class="[^"]*\bfixed\b[^"]*"[^>]*>[\s\S]*?<\/nav>/i;
  const fixedHeaderRegex = /<header\b[^>]*class="[^"]*\bfixed\b[^"]*"[^>]*>[\s\S]*?<\/header>/i;
  const firstNavRegex = /<nav\b[\s\S]*?<\/nav>/i;

  const htmlWithStyles = injectNavbarStyle(html);

  if (fixedNavRegex.test(htmlWithStyles)) {
    return htmlWithStyles.replace(fixedNavRegex, sharedNav);
  }

  if (fixedHeaderRegex.test(htmlWithStyles)) {
    return htmlWithStyles.replace(fixedHeaderRegex, sharedNav);
  }

  if (firstNavRegex.test(htmlWithStyles)) {
    return htmlWithStyles.replace(firstNavRegex, sharedNav);
  }

  if (/<body[^>]*>/i.test(htmlWithStyles)) {
    return htmlWithStyles.replace(/<body([^>]*)>/i, `<body$1>${sharedNav}`);
  }

  return `${sharedNav}${htmlWithStyles}`;
}

function injectGlobalFooter(html) {
  const sharedFooter = buildGlobalContactFooter();
  const firstFooterRegex = /<footer\b[\s\S]*?<\/footer>/i;

  if (firstFooterRegex.test(html)) {
    return html.replace(firstFooterRegex, sharedFooter);
  }

  if (/<\/body>/i.test(html)) {
    return html.replace(/<\/body>/i, `${sharedFooter}</body>`);
  }

  return `${html}${sharedFooter}`;
}

export function createStitchHtmlResponse(pageKey) {
  const filePath = STITCH_FILES[pageKey];

  if (!filePath) {
    return new Response("Stitch page not found", { status: 404 });
  }

  const html = readFileSync(filePath, "utf8");
  const htmlWithMenu = injectGlobalMenu(html);
  const htmlWithFooter = injectGlobalFooter(htmlWithMenu);

  return new Response(htmlWithFooter, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      pragma: "no-cache",
      expires: "0",
    },
  });
}
