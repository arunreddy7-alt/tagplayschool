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

const NAV_LOCKED_STYLE = `
<style id="copilot-gallery-nav-lock">
  .copilot-gallery-nav {
    position: fixed;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    z-index: 50;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    border: 4px solid #FFF4CC;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
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
    color: #FF6B6B;
    font-size: 2rem;
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .copilot-gallery-brand-text {
    color: #FF6B6B;
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
    color: #45322E;
    white-space: nowrap;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .copilot-gallery-nav-link:hover {
    color: #FF6B6B;
    transform: scale(1.08);
  }

  .copilot-gallery-enroll {
    background: #FFD93D;
    color: #45322E;
    border: none;
    border-radius: 9999px;
    padding: 0.65rem 1.6rem;
    font-family: "Bubblegum Sans", "Plus Jakarta Sans", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    box-shadow: 0 6px 0 #E5C12D;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .copilot-gallery-nav-links {
      display: flex;
    }
  }
</style>`;

const BUBBLEGUM_FONT_LINK =
  '<link id="copilot-gallery-font" href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet"/>';

function injectNavbarStyle(html) {
  let nextHtml = html;

  if (!nextHtml.includes("id=\"copilot-gallery-font\"")) {
    if (/<\/head>/i.test(nextHtml)) {
      nextHtml = nextHtml.replace(/<\/head>/i, `${BUBBLEGUM_FONT_LINK}\n</head>`);
    } else {
      nextHtml = `${BUBBLEGUM_FONT_LINK}\n${nextHtml}`;
    }
  }

  if (nextHtml.includes("id=\"copilot-gallery-nav-lock\"")) {
    return nextHtml;
  }

  if (/<\/head>/i.test(nextHtml)) {
    return nextHtml.replace(/<\/head>/i, `${NAV_LOCKED_STYLE}\n</head>`);
  }

  return `${NAV_LOCKED_STYLE}\n${nextHtml}`;
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

export function createStitchHtmlResponse(pageKey) {
  const filePath = STITCH_FILES[pageKey];

  if (!filePath) {
    return new Response("Stitch page not found", { status: 404 });
  }

  const html = readFileSync(filePath, "utf8");
  const htmlWithMenu = injectGlobalMenu(html);

  return new Response(htmlWithMenu, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, max-age=0",
      pragma: "no-cache",
      expires: "0",
    },
  });
}
