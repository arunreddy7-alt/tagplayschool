# Design System Document: Playful Professionalism

## 1. Overview & Creative North Star
**Creative North Star: "The Tactile Cloudscape"**

This design system rejects the rigid, boxy nature of traditional educational portals in favor of an organic, layered, and high-end editorial experience. We are not just building a "fun" site; we are creating a digital environment that feels as safe as a padded playroom and as imaginative as a storybook. 

To move beyond the "template" look, we utilize **Intentional Asymmetry**. Elements should rarely be perfectly centered or perfectly aligned on a vertical axis. Instead, we use overlapping "cloud" layers, staggered card layouts, and floating decorative stars to break the grid. The goal is a UI that feels alive, breathing, and bespoke, using extreme roundedness and tonal depth to replace the harsh lines of the web.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated take on primary play colors, utilizing Material-inspired tonal ranges to ensure accessibility without sacrificing vibrance.

*   **Primary (Sunlight Yellow):** `#705d00` (on `#ffe16d`). Used for high-energy CTAs and brand moments.
*   **Secondary (Sky Blue):** `#0c6780` (on `#baeaff`). Used for calm, informative sections and navigation.
*   **Tertiary (Petal Pink):** `#874e58` (on `#ffd9de`). Used for highlights, soft alerts, and "playful" accents.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited. In this system, boundaries are defined exclusively by:
1.  **Background Shifts:** Transitioning from `surface` (`#fbfaee`) to `surface-container-low` (`#f5f4e8`).
2.  **Tonal Transitions:** Using a soft gradient (e.g., `primary` to `primary-container`) to define a header without a "line."

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of soft-touch paper.
*   **Base:** `surface` (#fbfaee).
*   **Secondary Sections:** Use `surface-container` (#efeee3) for full-width section breaks.
*   **Floating Components:** Use `surface-container-lowest` (#ffffff) for cards to make them "pop" against the off-white background.

### The Glass & Gradient Rule
To add a premium "soul," use **Glassmorphism** for navigation bars and floating action buttons. Apply a 20% opacity to the `surface` color with a `backdrop-blur: 12px`. For Hero sections, apply a linear gradient from `primary_fixed` to `surface_bright` at a 15-degree angle to mimic the soft glow of morning light.

---

## 3. Typography
We utilize a pairing of **Plus Jakarta Sans** for structure and **Be Vietnam Pro** for warmth.

*   **Display (Plus Jakarta Sans):** Set at `3.5rem` (Display-lg). Use this for playful headlines. Apply `-0.02em` tracking to keep it feeling tight and intentional.
*   **Headline (Plus Jakarta Sans):** Large, friendly headers that guide the user through the story. Use `headline-lg` (`2rem`) for section titles.
*   **Body (Be Vietnam Pro):** Chosen for its exceptional readability. `body-lg` (`1rem`) is the standard for parent communications, ensuring a friendly but authoritative tone.
*   **Labels (Be Vietnam Pro):** Used sparingly for metadata. 

**Editorial Note:** Use "Title-lg" for short, punchy sub-headers. Never use pure black text; always use `on-surface` (#1b1c15) to maintain a soft, high-end feel.

---

## 4. Elevation & Depth
We eschew "Material Design shadows" for **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-highest` button sitting on a `surface-container-low` card creates an immediate, tactile affordance without visual noise.
*   **Ambient Shadows:** Where floating is required (e.g., a "Join Now" floating button), use a diffused shadow: `box-shadow: 0 20px 40px rgba(112, 93, 0, 0.08)`. Note that the shadow color is a low-opacity tint of our `primary` yellow, not grey.
*   **The Ghost Border Fallback:** If a container needs more definition (e.g., inside a complex form), use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a boundary.
*   **Organic Shapes:** Use the `xl` (3rem) or `full` (9999px) roundedness scale. Avoid the `sm` and `none` values entirely to maintain the "Little Stars" brand identity.

---

## 5. Components

### Buttons
*   **Primary:** High-saturation `primary_container` background with `on_primary_container` text. Radius: `full`.
*   **Secondary:** `surface_container_highest` background. Radius: `xl`.
*   **Interaction:** On hover, buttons should scale by `1.05` rather than just changing color. This adds a "squishy," playful tactile feel.

### Cards (The "Story Block")
*   **Style:** No borders. Background: `surface_container_lowest`. Radius: `xl`. 
*   **Spacing:** Use `Spacing-6` (2rem) for internal padding. 
*   **Layout:** Stagger cards in a masonry-style layout rather than a rigid grid to mimic a child's scrapbooked gallery.

### Input Fields
*   **Style:** Background `surface_container_low`. 
*   **Focus:** Transition background to `surface_container_lowest` and add a `2px` ghost border of `primary`.
*   **Radius:** `md` (1.5rem) to ensure text isn't clipped by extreme corners while remaining soft.

### Playful Decorations (The "Stars")
*   Use floating SVG stars (utilizing `tertiary` pink and `secondary` blue) behind main content sections. 
*   **Rule:** Decorative elements must overlap section boundaries to "stitch" the page together.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical white space. If a card is on the left, let the right side have "breathing room" with a decorative cloud.
*   **Do** use `Spacing-10` or `Spacing-12` between major sections to emphasize the "editorial" feel.
*   **Do** ensure all cartoon-style icons use a consistent stroke weight (matching our `outline` weight).

### Don't:
*   **Don't** use a divider line (`<hr>`). Use a `surface-container` background shift instead.
*   **Don't** use sharp corners (`none` or `sm`). Every element must feel "safe" to touch.
*   **Don't** use high-contrast drop shadows. If you can clearly see where the shadow ends, it's too dark.
*   **Don't** over-center. A slightly off-center headline feels like a curated book; a centered headline feels like a generic template.