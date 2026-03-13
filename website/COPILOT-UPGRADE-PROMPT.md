# Comprehensive Website Upgrade Prompt — Dynazur → Digital Kitchen Quality Level

## Context

This is a Next.js 16 website (React 19, TypeScript, Tailwind CSS 4, Framer Motion) for the brand "Dynazur" — a print-on-demand creative products brand. The site is **inspired by digitalkitchen.ua** but currently falls far short of that reference in multiple critical areas.

Your job is to upgrade **every aspect** of this site to match the polish, animation quality, illustration sophistication, color usage, and overall feel of digitalkitchen.ua. This is not a redesign — the structure stays. This is about **closing every quality gap**.

Below is an exhaustive, file-by-file list of every change needed. Follow it precisely.

---

## 1. CRITICAL: SVG Sketch Drawing Animations (Currently Missing Entirely)

**Problem**: All SVG illustrations on the site are static. On digitalkitchen.ua, every sketch illustration **draws itself** on page load/scroll — strokes animate from 0 to full length, creating a "hand drawing in real-time" effect. This is the single biggest quality gap.

**Fix — Create a reusable `SketchDrawAnimation` wrapper** (`components/animations/SketchDrawAnimation.tsx`):

```
- Create a Framer Motion wrapper component that:
  1. Accepts children (SVG content) and finds all <path>, <line>, <circle>, <ellipse>, <rect>, <polyline>, <polygon> elements
  2. On scroll-into-view (useInView with margin "-100px"), animates each element's strokeDashoffset from full length to 0
  3. Staggers each element's animation by 0.05s–0.15s (configurable via `staggerDelay` prop)
  4. Duration: 1.2s per element (configurable)
  5. Easing: [0.65, 0, 0.35, 1] (custom cubic-bezier for natural hand-drawn feel)
  6. Fill elements should fade in AFTER their stroke completes (opacity 0→1, 0.3s, delayed by stroke duration)
  7. Props: `duration`, `staggerDelay`, `delay`, `once` (default true), `className`
  8. Uses requestAnimationFrame-based measurement of path lengths via getTotalLength()
```

**Apply this animation to EVERY illustration component**:
- `components/illustrations/HeroIllustration.tsx` — Draw on page load (no scroll trigger, immediate with 0.3s delay)
- `components/illustrations/AboutIllustration.tsx` — Draw on scroll
- `components/illustrations/ApparelIllustration.tsx` — Draw on scroll
- `components/illustrations/BooksIllustration.tsx` — Draw on scroll
- `components/illustrations/ContactIllustration.tsx` — Draw on scroll
- `components/illustrations/DigitalIllustration.tsx` — Draw on scroll
- `components/illustrations/MugsIllustration.tsx` — Draw on scroll
- `components/illustrations/PostersIllustration.tsx` — Draw on scroll

**Implementation detail**: Each SVG element needs:
- `strokeDasharray` set to its total path length
- `strokeDashoffset` animated from that length to 0
- Initial state: all strokes invisible (offset = length), all fills at opacity 0
- Animated state: strokes draw in sequentially, then fills fade in

For the `SketchIcons.tsx` (small 48x48 icons used on cards), add a simpler/faster version:
- Duration: 0.6s, stagger: 0.03s
- Trigger on parent card hover OR on scroll-into-view

---

## 2. CRITICAL: Replace the About Illustration Completely

**Problem**: The current `AboutIllustration.tsx` is a crude framed portrait (basic head, eyes, nose, torso). digitalkitchen.ua uses an elegant **continuous single-line art** style — a sophisticated, flowing drawing where the pen never lifts, creating an artistic portrait.

**Fix**: Replace the entire SVG in `components/illustrations/AboutIllustration.tsx` with a **continuous-line-art style illustration** of a creative workspace/person. The drawing should:
- Use a single continuous flowing path (or appear to) — this is the "one-line drawing" aesthetic
- Depict a creative professional at a desk/workspace (relevant to the brand)
- Have flowing, confident curves — NOT blocky geometric shapes
- Use stroke-width of 2-2.5px for the main line
- Add small yellow (#FFD54F) accent fills on 1-2 elements (e.g., a coffee mug, a design element on screen)
- Add small blue (#071EFC) accent on 1 element (e.g., a screen highlight)
- The continuous line should include: head/hair flowing into shoulders, arm reaching to a laptop/tablet, the device, and connecting back to a desk surface
- Total viewBox: approximately 500x500 or 600x500
- All paths must have `fill="none"` and proper stroke attributes so the draw animation works
- Remove ALL of the current SVG content (the framed portrait with head, eyes, pocket, etc.)

Reference style: Search "one line art portrait" or "continuous line drawing workspace" — this is exactly what digitalkitchen.ua uses on their about page (a real photo with sketch-outline treatment, but since we use SVG, we replicate the continuous-line aesthetic).

---

## 3. CRITICAL: Yellow Color Usage — Smart & Elegant (Like Digital Kitchen)

**Problem**: digitalkitchen.ua uses yellow brilliantly as a strategic accent: logo highlight, CTA buttons, timeline year badges, blog date badges, hand-drawn circles on some headings. Dynazur has yellow defined (`#FFD54F`) but underuses it.

### 3a. Add Yellow Hand-Drawn Circle Variant

**File**: `components/animations/HandDrawnCircle.tsx`

Currently only renders a blue circle. Add a `color` prop:
```
- Add prop: color?: 'blue' | 'yellow' (default 'blue')
- Blue: stroke = "rgba(7, 30, 252, 0.5)" (current)
- Yellow: stroke = "rgba(255, 213, 79, 0.7)" — slightly more opaque since yellow is lighter
- The yellow variant should have a slightly thicker stroke (strokeWidth: 3 instead of 2.5) for visibility
- Update the SVG filter: for yellow, reduce turbulence slightly (baseFrequency: "0.015 0.04") for a smoother, more elegant look
```

### 3b. Apply Yellow Circles to Specific Headings

On digitalkitchen.ua, some headings use blue circles and others use yellow. Replicate this pattern:

**Use YELLOW hand-drawn circles on**:
- Homepage: The word inside the testimonials/reviews section heading
- About page: A key word in the values section heading
- Shop page: A key word in the "Featured Products" or equivalent heading
- Blog page: A key word in the blog listing heading

**Keep BLUE hand-drawn circles on**:
- Hero section heading (homepage)
- Contact page heading
- Digital products page heading

### 3c. Yellow Accent in Illustrations

In each SVG illustration, ensure at least ONE element uses yellow fill:
- `HeroIllustration.tsx` — The coffee mug should have a yellow body (already has yellow, confirm it's `#FFD54F`)
- `AboutIllustration.tsx` — A coffee cup or design accent element in yellow
- `ContactIllustration.tsx` — An envelope or chat bubble accent in yellow
- `BooksIllustration.tsx` — A bookmark or pen accent in yellow
- `PostersIllustration.tsx` — Keep the sun/circle element yellow
- `ApparelIllustration.tsx` — A design element on one t-shirt in yellow
- `MugsIllustration.tsx` — One mug's design band in yellow
- `DigitalIllustration.tsx` — A progress bar or UI element in yellow

### 3d. Yellow Highlight on Logo

**File**: `components/layout/Header.tsx`

The digitalkitchen.ua logo has a **yellow rectangle highlight** behind the first 2 letters of "Digital". Replicate this:
- Behind the "d." monogram OR behind the first two letters of "dynazur" in the header logo
- Use a `<span>` with `bg-dynazur-yellow` and slight padding (`px-1.5 py-0.5`)
- The yellow box should be slightly rotated (-1deg to -2deg) for a hand-crafted feel
- Apply this in both desktop and mobile header

### 3e. Yellow in the Blue CTA Banner

**File**: `components/layout/Footer.tsx` (or wherever the blue CTA banner lives)

The pre-footer CTA banner that has a blue background should have:
- A yellow CTA button (not blue-on-blue)
- The button text should be black on yellow
- Add a small gift/sparkle icon before the button text (like digitalkitchen.ua's gift icon)

---

## 4. Background Color — Add Subtle Lavender Tint

**Problem**: Dynazur uses flat `#F2F2F2` gray background. digitalkitchen.ua has a **subtle lavender/blue-gray tint** that gives the site more warmth and sophistication.

**File**: `app/globals.css`

Change the background color:
```
- Current: --color-dynazur-bg: #F2F2F2
- New: --color-dynazur-bg: #EEEEF5
  (This is a very subtle lavender-gray — not dramatically purple, just enough warmth)
```

Also add a subtle gradient to the body:
```css
body {
  background: linear-gradient(180deg, #E8E8F2 0%, #EEEEF5 30%, #F2F2F5 100%);
}
```

The top of the page should be slightly more blue-tinted, fading to neutral as you scroll.

---

## 5. Hand-Drawn Underline Animation Enhancement

**File**: `components/animations/HandDrawnUnderline.tsx`

Currently uses a simple wavy path. digitalkitchen.ua's underlines are more organic. Enhance:
- Add the same `feTurbulence` SVG filter that `HandDrawnCircle` uses (for a hand-drawn look)
- Make the underline path slightly more wavy (increase the amplitude of the sine wave from ~3px to ~5px)
- Add a second, fainter shadow path underneath (same shape, offset 1px down, opacity 0.15) for depth
- The underline should animate with a left-to-right drawing effect (pathLength animation)
- Duration: 0.8s with easeInOut

---

## 6. Contact Page Illustration Upgrade

**File**: `components/illustrations/ContactIllustration.tsx`

**Problem**: Current illustration is a basic mailbox with flying envelopes. digitalkitchen.ua's contact page has an elegant **continuous-line-art drawing of a person using a phone/laptop** — much more sophisticated and human.

**Fix**: Replace the entire SVG with a continuous-line-art style illustration of:
- A person sitting with a laptop, one hand holding a phone to their ear
- Drawn in the single-continuous-line style (flowing strokes, artistic)
- The laptop screen can have a small blue accent rectangle
- The person's hair/silhouette should flow naturally
- Stroke: `#050505`, width 2px, fill none
- Small yellow accent: the phone or a small element
- ViewBox: 500x500 approximately
- All paths must support the drawing animation (proper stroke attributes)

---

## 7. Blog Card Illustration Upgrade

**File**: `components/ui/BlogCard.tsx` and relevant illustration files

**Problem**: Blog cards use generic category-based SVG placeholders. digitalkitchen.ua has **rich, custom-illustrated blog thumbnails** with sketch elements + strategic color accents (blue circles, yellow highlights, contextual icons).

**Fix**:
- In `BlogCard.tsx`, make the illustration area larger (change aspect ratio from `aspect-[16/10]` to `aspect-[16/11]`)
- Add more visual complexity to the blog card SVG placeholders:
  - Each blog card illustration should include a **central recognizable sketch icon** relevant to the topic
  - Add 2-3 **light blue (#071EFC at 10% opacity) background circles/blobs** scattered in the illustration area
  - Add **one yellow accent element** per card
  - Add **scattered small sketch elements** (dots, dashes, small arrows, asterisks) around the main icon for visual richness
  - The overall composition should feel like a hand-illustrated editorial diagram, not a simple centered icon

---

## 8. Section Transition Animations Enhancement

**Problem**: The site uses basic `fadeInUp` for most scroll animations. digitalkitchen.ua has more variety and sophistication.

**File**: `components/animations/AnimateOnScroll.tsx`

Add these new animation variants:
```
- 'scaleUp': from scale(0.85) + opacity(0) → scale(1) + opacity(1) — for cards and images
- 'slideInFromLeft': from x(-60px) + opacity(0) → x(0) + opacity(1) — more dramatic than fadeInLeft
- 'slideInFromRight': from x(60px) + opacity(0) → x(0) + opacity(1)
- 'drawIn': from pathLength(0) → pathLength(1) — specifically for SVG elements
- 'staggerChildren': parent variant that staggers children by 0.1s each
```

**Apply varied animations across pages** (don't use fadeInUp for everything):

- Hero section: `fadeIn` for text (fast, 0.4s), sketch draws in with drawing animation
- Product cards: `scaleUp` with stagger (0.08s between each card)
- Testimonial cards: `fadeInLeft` / `fadeInRight` alternating
- Blog cards: `scaleUp` with stagger
- Stats/numbers section: `fadeInUp` with counter animation (already exists)
- Section headings: `fadeIn` (simple, fast)
- Timeline items: `slideInFromLeft` / `slideInFromRight` alternating (matching digital kitchen)
- Footer CTA banner: `zoomIn`
- FAQ items: `fadeInUp` with 0.05s stagger

---

## 9. Header Polish

**File**: `components/layout/Header.tsx`

### 9a. Logo Yellow Highlight (see section 3d above)

### 9b. Active Nav Link Indicator
digitalkitchen.ua shows the active nav link in blue text. Ensure:
- Active page link uses `text-dynazur-blue` color
- Add a small hand-drawn underline (using the `HandDrawnUnderline` component) under the active link
- The underline should animate in when navigating to a new page

### 9c. "Write to Us" CTA Button
The header CTA button ("Shop Now") should be an **outlined button** (border only, no fill) on desktop — matching digitalkitchen.ua's "Написати нам" button style:
- Border: 1.5px solid `#050505`
- Background: transparent
- On hover: background fills to `#050505`, text becomes white
- Rounded: `rounded-full` (pill shape, not `rounded-btn`)
- Transition: 300ms ease

### 9d. Mobile Menu Refinement
- The mobile overlay should fade in (not just appear)
- Add stagger animation to each menu item (fadeInUp, 0.05s delay between each)
- The close button (X) should rotate in (rotate 0→90deg + fade in)

---

## 10. Footer Enhancement

**File**: `components/layout/Footer.tsx`

### 10a. Pre-footer Blue CTA Banner
Ensure the blue CTA section before the footer:
- Has `rounded-section` (30px) top corners
- Background: `#071EFC` (dynazur-blue)
- Text: White, large heading (2xl to 3xl)
- CTA button: **Yellow** (`bg-dynazur-yellow text-dynazur-black`), with a gift/present icon (`Gift` from lucide-react) before the text
- The button should have a subtle hover animation: scale(1.03) + brightness increase
- Add a faint sketch illustration in the background of this banner (low opacity, 5-8%) — e.g., scattered stars, doodles, sketch elements

### 10b. Footer Social Icons
Currently use dark circles. Keep that, but:
- On hover: the circle background should transition to `bg-dynazur-blue` (not just opacity change)
- Add a slight upward translate (-2px) on hover
- Ensure icons are properly sized (20x20) and centered

### 10c. Footer Logo
Add the yellow highlight behind "d." in the footer logo (same treatment as header)

---

## 11. Social Sidebar Enhancement

**File**: `components/layout/SocialSidebar.tsx`

Match digitalkitchen.ua:
- Icons should be in **black circles** (currently correct)
- The circles should be connected by a thin vertical line between them (1px, opacity 0.2)
- On hover: circle background → `bg-dynazur-blue`, icon → white, slight scale(1.1)
- Add a subtle entry animation: the sidebar should slide in from the right (x: 20 → 0) with a 1s delay after page load
- The connecting lines between icons should draw themselves in (pathLength animation)

---

## 12. Timeline Enhancement (About Page)

**File**: `components/sections/TimelineVertical.tsx`

### 12a. Yellow Year Badges
digitalkitchen.ua uses **yellow badges** for the year labels in the timeline. Currently Dynazur might use blue circles.
- Year badges: `bg-dynazur-yellow text-dynazur-black font-bold rounded-full px-4 py-1.5`
- The badge shape should be a rounded pill (like digitalkitchen.ua), not a plain circle
- Add a small dot/connector between the badge and the vertical line

### 12b. Timeline Vertical Line
- The vertical line color should be `#071EFC` (dynazur-blue) at 40% opacity
- Line width: 2px
- The line should **draw itself** from top to bottom as the user scrolls (animate height from 0 to 100%)

### 12c. Timeline Sketch Illustrations
On digitalkitchen.ua, each timeline milestone has a **sketch illustration** next to it showing the relevant activity. Add small sketch illustrations (150x150px) for each milestone. These should:
- Be simple but recognizable sketch drawings (hand-drawn style)
- Use the drawing animation (strokes animate in on scroll)
- Alternate left/right with the text content

### 12d. Timeline Animation
Each timeline item should animate in with `slideInFromLeft` (left items) and `slideInFromRight` (right items) as the user scrolls past them. The year badge should `scaleUp` from 0.5 to 1.

---

## 13. Product Card Hover Enhancement

**File**: `components/ui/ProductCard.tsx`

Currently has basic lift + shadow on hover. Enhance:
- On hover, the category-specific SVG icon inside the card should trigger its **drawing animation** (re-draw itself)
- The shadow on hover should be softer and larger: `shadow-[0_12px_40px_rgba(0,0,0,0.08)]` (currently 0.12 opacity — too dark)
- Add a subtle border-color transition on hover: from `border-transparent` to `border-dynazur-blue/20`
- The price text should subtly scale up on hover: `group-hover:scale-105 transition-transform`

---

## 14. Testimonial Section Enhancement

**File**: `components/ui/TestimonialCard.tsx`

digitalkitchen.ua shows testimonials with **real photos** (circular), company logos, name + role. Currently Dynazur uses blue circle initials.

- Keep the blue circle initial (since we don't have real photos), but make it more polished:
  - Size: 56x56 (increase from current)
  - Add a thin border ring: `ring-2 ring-dynazur-blue/20 ring-offset-2`
  - The initial letter should be in a **hand-drawn/sketch font style** — use a slightly different font-weight or letter-spacing
- Add a small company/brand name text below the author name (gray, small text)
- Star ratings: Ensure all stars use `#FFD54F` (dynazur-yellow) for filled state
- Add quotation mark decorative element: A large, faint `"` character (60px, opacity 0.08, dynazur-blue) positioned at the top-left of the card

---

## 15. Blue Full-Width Banner Section (Homepage)

digitalkitchen.ua has a bold blue (`#0066FF` range) full-width banner section in the middle of the homepage. Ensure the Dynazur homepage has a similar section:

**File**: `app/HomeClient.tsx`

If not already present, add a full-width blue section between the products showcase and the testimonials:
- Background: `bg-dynazur-blue`
- Rounded corners: `rounded-section` (30px) on all corners
- Content: Centered heading (white, bold) + subtitle (white, opacity 0.8) + yellow CTA button
- The heading should mention the brand value prop (e.g., "Designs That Tell Your Story")
- Padding: `py-20 md:py-28`
- Add subtle background sketch elements (very low opacity, 5-8%): scattered doodles, stars, swirls in white strokes

---

## 16. 404 Error Page (Currently Missing)

digitalkitchen.ua has a beautiful 404 page with:
- A sketch illustration (a question mark drawn in continuous line style)
- A large blue hand-drawn circle around "404"
- Yellow CTA button to go home
- Clean, centered layout

**Create**: `app/not-found.tsx`
- Large "404" text (8xl font, bold)
- Blue `HandDrawnCircle` wrapping the "404"
- A small continuous-line sketch illustration above (a confused character or a broken link icon in sketch style)
- Subtitle: "Page not found"
- Yellow button: "Back to Home" linking to "/"
- The sketch should draw itself on load
- Social icons at the bottom (matching digitalkitchen.ua's 404)

---

## 17. Scrollbar Styling Refinement

**File**: `app/globals.css`

Current scrollbar is styled but basic. Refine:
```css
::-webkit-scrollbar {
  width: 6px; /* narrower than current 8px */
}
::-webkit-scrollbar-thumb {
  background: #C0C0C8; /* slightly blue-tinted gray */
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #071EFC; /* blue on hover — matches brand */
}
::-webkit-scrollbar-track {
  background: var(--color-dynazur-bg);
}
```

---

## 18. Page Load Animation Sequence

Currently there's no coordinated page load animation. digitalkitchen.ua has a smooth load sequence.

**File**: `app/layout.tsx` and `components/layout/Header.tsx`

Add a coordinated load sequence:
1. **0ms**: Page background appears
2. **100ms**: Header fades in (opacity 0→1, y: -10→0, duration 0.4s)
3. **200ms**: Hero text fades in (opacity 0→1, y: 20→0, duration 0.5s)
4. **400ms**: Hero illustration starts drawing animation (1.2s duration)
5. **800ms**: Social sidebar slides in from right
6. **1000ms**: Hand-drawn circle on hero heading animates (draws itself)
7. **1200ms**: CTA button fades in with slight scale (0.95→1)

Implement this using Framer Motion's `AnimatePresence` and coordinated delays on the homepage.

---

## 19. Micro-Interactions & Polish

### 19a. Link Hover Underlines
All text links (in nav, footer, body text) should have an animated underline on hover:
- The underline should draw from left to right (width 0→100%)
- Color: `dynazur-blue`
- Height: 1.5px
- Duration: 0.3s

### 19b. Button Press Effect
All buttons should have a subtle press effect:
```css
active:scale-[0.97] active:brightness-95 transition-all duration-150
```

### 19c. Image/Card Loading Placeholder
Product cards and blog cards should have a subtle skeleton loading animation:
- Light gray shimmer effect (gradient animation) while illustration area loads
- Use a CSS animation with a sweeping gradient from left to right

### 19d. Smooth Scroll
Ensure the site has smooth scrolling:
```css
html {
  scroll-behavior: smooth;
}
```

### 19e. Selection Color
Custom text selection color:
```css
::selection {
  background: rgba(7, 30, 252, 0.15);
  color: #050505;
}
```

---

## 20. Values/Features Cards Enhancement (About Page)

**File**: `app/about/page.tsx`

digitalkitchen.ua's values section uses cards with:
- A small **yellow-tinted icon area** (icon on a light yellow background circle/rectangle)
- Blue text for the value title
- Gray description text below

Ensure Dynazur's values/features cards follow this pattern:
- Icon area: Small rounded square (40x40) with `bg-dynazur-yellow/15` background, icon in `text-dynazur-blue`
- Value title: `text-dynazur-blue font-bold`
- Cards should animate in with `fadeInUp` stagger
- Add hover effect: card lifts slightly + shadow appears

---

## 21. Blog Post Detail Page Enhancement

**File**: `app/blog/[slug]/page.tsx`

- The hero/featured image area should have a sketch illustration that draws itself
- Add a yellow date badge (matching the blog listing cards)
- The sidebar should have a subtle background tint (`bg-dynazur-bg`)
- Related posts at the bottom should use the same enhanced blog cards

---

## 22. Reviews/Testimonials Page Enhancement

**File**: `app/reviews/page.tsx`

digitalkitchen.ua's reviews page has a **client logo grid** at the top. Add:
- A grid of client/brand logos (can use placeholder text logos styled in different fonts)
- Below the grid, a "Companies That Trust Us" heading
- The logos should scroll in a **horizontal marquee/ticker** animation (infinite scroll, subtle speed)
- Below that, the detailed testimonial cards

---

## 23. Services/Products Section Sketch Icons

**File**: `components/illustrations/SketchIcons.tsx`

digitalkitchen.ua's services section has small sketch icons next to each service. The current SketchIcons are decent but need:
- Add the **drawing animation** to each icon (strokes draw in on scroll/hover)
- Ensure each icon has **one yellow accent element** (small fill or stroke in yellow)
- Make icons slightly larger when used in the services grid: 56x56 default (currently 48x48)
- Add a light background circle behind each icon: 64x64 circle with `fill: dynazur-yellow` at 8% opacity

---

## 24. Font Weight & Typography Fine-Tuning

**File**: `app/globals.css` and throughout components

digitalkitchen.ua's headings are extremely bold (weight 900) with tight letter-spacing. Verify and enforce:

```css
h1, .heading-1 {
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

h2, .heading-2 {
  font-weight: 900;
  letter-spacing: -0.015em;
  line-height: 1.15;
}

h3, .heading-3 {
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
```

Body text should be `font-weight: 400` with `line-height: 1.7` (generous) and `color: #474747`.

---

## 25. "How We Work" / Process Section Enhancement

**File**: `app/HomeClient.tsx` or relevant component

digitalkitchen.ua has a "How We Work" process section with step-by-step items. Ensure:
- Each step has a number in a **blue circle**
- Steps are connected by a line (horizontal on desktop, vertical on mobile)
- The connecting line should **draw itself** on scroll
- Step descriptions appear with `fadeInUp` animation
- The section heading should have a **yellow hand-drawn circle** around a key word

---

## FILE CHANGE SUMMARY

| File | Changes |
|------|---------|
| `components/animations/SketchDrawAnimation.tsx` | **NEW FILE** — SVG drawing animation wrapper |
| `components/animations/AnimateOnScroll.tsx` | Add new variants: scaleUp, slideInFromLeft/Right, staggerChildren |
| `components/animations/HandDrawnCircle.tsx` | Add `color` prop (blue/yellow), yellow variant styling |
| `components/animations/HandDrawnUnderline.tsx` | Add turbulence filter, increase wave amplitude, add shadow path |
| `components/illustrations/AboutIllustration.tsx` | **COMPLETE REWRITE** — continuous-line-art workspace scene |
| `components/illustrations/ContactIllustration.tsx` | **COMPLETE REWRITE** — continuous-line-art person with laptop/phone |
| `components/illustrations/HeroIllustration.tsx` | Add drawing animation, verify yellow accents |
| `components/illustrations/ApparelIllustration.tsx` | Add drawing animation, add yellow accent |
| `components/illustrations/BooksIllustration.tsx` | Add drawing animation, add yellow accent |
| `components/illustrations/MugsIllustration.tsx` | Add drawing animation, verify yellow accent |
| `components/illustrations/PostersIllustration.tsx` | Add drawing animation, verify yellow accent |
| `components/illustrations/DigitalIllustration.tsx` | Add drawing animation, add yellow accent |
| `components/illustrations/SketchIcons.tsx` | Add drawing animation, yellow accents, increase size |
| `components/layout/Header.tsx` | Yellow logo highlight, pill-shaped CTA, active link indicator |
| `components/layout/Footer.tsx` | Yellow CTA button in blue banner, gift icon, logo highlight |
| `components/layout/SocialSidebar.tsx` | Connecting lines between icons, entry animation, hover effects |
| `components/ui/ProductCard.tsx` | Enhanced hover (redraw icon, softer shadow, border transition) |
| `components/ui/BlogCard.tsx` | Richer illustrations, larger aspect ratio |
| `components/ui/TestimonialCard.tsx` | Larger avatar, ring border, quotation mark decoration |
| `components/ui/Buttons.tsx` | Add press effect (active:scale), verify all variants |
| `components/sections/HeroSection.tsx` | Coordinated load animation sequence |
| `components/sections/TimelineVertical.tsx` | Yellow year badges, blue line draws on scroll, sketch illustrations |
| `components/sections/TimelineHorizontal.tsx` | Same yellow badge + line animation treatment |
| `app/globals.css` | Lavender bg tint, gradient body, typography, scrollbar, selection, smooth scroll |
| `app/layout.tsx` | Page load animation coordination |
| `app/HomeClient.tsx` | Blue full-width banner section, varied animation types |
| `app/about/page.tsx` | Values cards with yellow icon area, varied animations |
| `app/blog/page.tsx` | Enhanced blog card illustrations |
| `app/blog/[slug]/page.tsx` | Drawing illustration, yellow date badge |
| `app/contact/page.tsx` | New contact illustration |
| `app/reviews/page.tsx` | Client logo grid with marquee |
| `app/not-found.tsx` | **NEW FILE** — 404 page with sketch + circle + yellow CTA |

---

## PRIORITY ORDER

Execute changes in this order for maximum visual impact:

1. **SketchDrawAnimation wrapper** (unlocks all illustration animations)
2. **Apply drawing animations** to all existing illustrations
3. **AboutIllustration complete rewrite** (continuous line art)
4. **ContactIllustration complete rewrite** (continuous line art)
5. **Yellow hand-drawn circle variant** + apply to headings
6. **Logo yellow highlight** (header + footer)
7. **Background lavender tint + gradient**
8. **Animation variants** (scaleUp, slideIn, etc.) + apply across pages
9. **Typography fine-tuning** (letter-spacing, weights)
10. **Timeline yellow badges + drawing line**
11. **Footer blue banner with yellow CTA**
12. **Social sidebar connecting lines + entry animation**
13. **Product card hover enhancements**
14. **Blog card illustration upgrades**
15. **Testimonial card polish**
16. **404 page**
17. **Page load sequence**
18. **Micro-interactions** (link hovers, press effects, selection, scrollbar)
19. **Reviews page logo marquee**
20. **Blue full-width homepage banner**

---

## IMPORTANT CONSTRAINTS

- **Do NOT change the overall site structure or routing** — only enhance visual quality
- **Do NOT remove any existing functionality** — only add/enhance
- **Do NOT change the brand name** "Dynazur" or any content text
- **Keep all existing Tailwind CSS classes** — add to them, don't replace working styles
- **Maintain responsive design** — all enhancements must work on mobile, tablet, and desktop
- **Performance**: SVG animations should use `will-change: stroke-dashoffset` and `transform` for GPU acceleration
- **Accessibility**: Respect `prefers-reduced-motion` — wrap all animations in a media query check and provide instant/no-animation fallbacks
- **Test each change** in the browser before moving to the next
- **Framer Motion** is already installed — use it for all JS animations (don't add new animation libraries)
- **Color values**: Yellow = `#FFD54F`, Blue = `#071EFC`, Black = `#050505`, use these exact hex codes
