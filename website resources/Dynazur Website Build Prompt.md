# Dynazur Website — Comprehensive Build Prompt for GitHub Copilot

## Project Overview

Build a complete, production-ready website for **Dynazur** — a print-on-demand brand selling apparel, books, mugs, posters, and digital products (planners, trackers, journals, etc.). The website must be modeled after the design language, layout patterns, animations, and interaction design of **digitalkitchen.ua** (formerly digitalkitchen.agency), adapted to Dynazur's brand identity and product-focused e-commerce context.

The site should be built as a **Next.js 14+ App Router** project using **TypeScript**, **Tailwind CSS**, and **Framer Motion** for animations. It must be fully responsive (mobile, tablet, desktop) and production-grade.

---

## 1. BRAND IDENTITY (Dynazur)

All design decisions must reflect these brand assets extracted from the official Dynazur brand guidelines PDF:

### 1.1 Logo
- **Monogram mark**: A stylized lowercase "d." constructed from geometric shapes — a rounded square (representing binary "0") merges with the letter stem to form the "d", with a small solid square dot at the bottom-right as the period
- **Full logo**: The "d." monogram followed by "dynazur" in a minimal, bold, lowercase sans-serif typeface
- **Logo variants available**: Blue on white, white on blue, black on white, milky gray on dark. Use the appropriate variant based on section background color
- **Construction principle**: Equal distribution of shapes ensuring geometric balance; visual weight optimized for recognition at small sizes

### 1.2 Color Palette
| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Electric Blue (Primary) | `#071EFC` | R:7 G:30 B:252 | Primary brand color, CTA backgrounds, accent highlights, active states |
| Near Black | `#050505` | R:5 G:5 B:5 | Headings, primary text, footer background base |
| Dark Navy | `#1D2031` | R:29 G:32 B:49 | Footer background, dark sections, secondary dark |
| Light Gray | `#E2E2E2` | R:226 G:226 B:226 | Borders, dividers, secondary backgrounds, muted elements |

**Additional UI colors to derive:**
- Page background: `#F2F2F2` (warm light gray, matching digitalkitchen.ua's body background)
- Card/section background: `#FFFFFF` (white)
- Body text: `#474747` (medium gray)
- Subtle hover states: lighten or darken brand colors by 10%
- Success green, warning amber, error red for form validation states

### 1.3 Typography
- **Primary font**: `Nunito` (Google Fonts) — this matches digitalkitchen.ua's font exactly
- **Headings (H1)**: Nunito, weight 900 (Black), 40–56px on desktop, 28–36px on mobile
- **Headings (H2)**: Nunito, weight 900, 30–40px on desktop, 24–30px on mobile
- **Headings (H3)**: Nunito, weight 800 (ExtraBold), 20–24px
- **Body text**: Nunito, weight 400 (Regular), 16px, line-height 1.6–1.7
- **Buttons/CTAs**: Nunito, weight 700 (Bold), 14–16px
- **Small text/captions**: Nunito, weight 400, 12–14px

### 1.4 Brand Tagline
> "for those who live in tomorrow."

Use this tagline in the hero section and footer. The word "tomorrow" should be rendered in the Electric Blue `#071EFC` color, with the rest of the phrase in white or dark text depending on background.

---

## 2. GLOBAL DESIGN SYSTEM (Modeled After digitalkitchen.ua)

### 2.1 Layout Architecture
- **Page background**: `#F2F2F2` (light warm gray) — the entire page sits on this color
- **Content sections**: White containers (`#FFFFFF`) with **30px border-radius** sitting on top of the gray background, creating a "card-on-canvas" layered look. Each major section (services, products, testimonials, blog, etc.) lives inside one of these rounded white cards
- **Max content width**: 1200–1280px, centered with auto margins
- **Section padding**: 80–100px vertical padding on desktop, 40–60px on mobile
- **Section spacing**: 20–30px gap between white section cards

### 2.2 Header / Navigation
- **Desktop**: Sticky top navigation bar with:
  - Dynazur "d." logo mark + "dynazur" wordmark (top-left), using the blue variant on light backgrounds
  - Horizontal nav links: Shop, Products, Digital Products, About, Blog, Contact (use Nunito weight 600)
  - Active page link: highlighted in Electric Blue `#071EFC` text color
  - "Shop Now" CTA button (top-right): outlined style with 1px border, 8px border-radius, hover fills with Electric Blue
  - Dropdown for "Products" submenu showing categories: Apparel, Books, Mugs, Posters
- **Mobile** (below 768px):
  - Logo left, hamburger icon right (two horizontal lines, minimal style)
  - Mobile menu: full-screen or slide-in overlay with all nav links stacked vertically
  - "Shop Now" CTA at bottom of mobile menu

### 2.3 Sticky Social Sidebar
- **Position**: Fixed on the right side of the viewport, vertically centered
- **Style**: Three circular buttons (48px diameter) stacked vertically with 12px gap:
  - Facebook, Instagram, TikTok (or relevant social platforms for Dynazur)
- **Color**: Black circles with white icons
- **Behavior**: Always visible on desktop, hidden on mobile/tablet
- **Hover**: Slight scale-up (1.1) with Electric Blue background transition

### 2.4 Footer
- **Background**: Dark navy gradient from `#1D2031` to near-black `#050505`
- **Layout**: Multi-column grid:
  - Column 1: Dynazur logo (white/milky gray variant)
  - Column 2: "Shop" links — Apparel, Books, Mugs, Posters, Digital Products
  - Column 3: "Company" links — About, Blog, Contact
  - Column 4: "Contact" — email, social links (circular icons as on sidebar)
- **CTA banner above footer**: Electric Blue `#071EFC` background with rounded corners (30px), white text, yellow/gold CTA button ("Shop Now" or "Explore Products")
- **Bottom bar**: `© 2026 Dynazur. All rights reserved.` centered, small text, light gray color
- **Yellow CTA button in footer**: Background `#FFD54F` (golden yellow), black text, 8px border radius, hover darkens slightly

### 2.5 Buttons
- **Primary CTA (Yellow)**: Background `#FFD54F`, text `#000000`, border-radius 8px, padding 12px 28px, Nunito weight 700. On hover: darken background 10%, subtle shadow. Used for main conversion actions (Shop Now, Get Started, Explore)
- **Secondary CTA (Outlined)**: Transparent background, 1px solid black border, border-radius 8px, black text. On hover: fill with Electric Blue, text turns white
- **Blue CTA**: Electric Blue `#071EFC` background, white text, used on dark sections
- **All buttons**: Smooth 0.3s transition on hover for color/background/shadow changes

---

## 3. PENCIL-SKETCH ILLUSTRATION SYSTEM

This is the **signature visual element** of the digitalkitchen.ua design and must be faithfully adapted for Dynazur. Every page features hand-drawn, pencil-sketch style illustrations that feel artisanal, creative, and polished.

### 3.1 Illustration Style Specification
- **Line style**: Thin black (#050505) line art, resembling hand-drawn pencil sketches. Lines should feel slightly organic/imperfect (not rigid vector), mimicking a skilled illustrator's hand
- **Line weight**: 1.5–2.5px stroke width, consistent across illustrations
- **Fill approach**: Mostly unfilled outlines, with **selective color fills** on 1–2 elements per illustration using brand colors:
  - Electric Blue `#071EFC` fills on key objects (e.g., a shopping bag, a screen, a highlight element)
  - Golden Yellow `#FFD54F` fills on secondary accents (e.g., a cup, a tag, a star)
- **Subject matter for Dynazur**: Adapt illustration themes to print-on-demand products:
  - Hero: A workspace with a laptop showing product designs, surrounded by sketch-style mugs, t-shirts, books, and a pen/tablet
  - Apparel page: Sketch of hanging t-shirts on a rack, person wearing a custom hoodie
  - Books page: Stack of books with one open, pen and coffee
  - Mugs page: Collection of mugs with different designs, steam rising
  - Posters page: Framed posters on a wall, an artist at work
  - Digital products page: Tablet/phone showing a planner, calendar pages flying
  - About page: Founder figure with hand-drawn outline effect (photo with sketch border overlay, exactly like digitalkitchen.ua's founder section)
  - Cases/Portfolio: Cityscape-like compositions specific to each product showcase

### 3.2 Hand-Drawn SVG Accent Elements
Replicate the **hand-drawn circle/underline highlights** from digitalkitchen.ua:
- **Hand-drawn circle**: A wobbly, sketch-style SVG ellipse that circles around key words in headings. Used to emphasize important words (e.g., circling "premium" in "Premium print-on-demand"). Color: light blue stroke (`#071EFC` at 30% opacity) or yellow stroke (`#FFD54F`)
- **Hand-drawn underline**: A wavy, sketch-style SVG line that underlines key phrases. Not straight — it should look like someone drew it freehand
- **Implementation**: These should be SVG elements positioned absolutely behind/around the target word using CSS. The SVG path should animate on scroll (drawing itself using `stroke-dasharray` / `stroke-dashoffset` animation)
- **Usage**: Apply to 1–2 key words per major section heading throughout the site

### 3.3 Illustration Placement
- **Hero sections**: Large illustration (40–50% of hero width) on the right side, text content on the left
- **Service/category pages**: Each has a unique illustration in the hero, relevant to that category
- **Cards and features**: Small inline sketch icons (24–32px) next to feature titles (similar to digitalkitchen.ua's service icons — thin line-art style)

---

## 4. ANIMATION SYSTEM

Replicate digitalkitchen.ua's animation approach using **Framer Motion** (or alternatively, Animate.css + WOW.js / Intersection Observer):

### 4.1 Scroll-Triggered Entry Animations
Every section and element should animate into view on scroll. Use Intersection Observer to trigger animations when elements enter the viewport:

- **fadeInUp**: Default animation for most content blocks — element fades in while sliding up 30px. Duration: 0.6s, easing: ease-out. Apply to: section headings, body text blocks, cards
- **fadeInLeft**: Element slides in from left. Apply to: left-column content in two-column layouts, founder bio section
- **fadeInRight**: Element slides in from right. Apply to: right-column illustrations, right-side content
- **zoomIn**: Slight scale from 0.9 to 1.0 with fade-in. Apply to: logo badges, partner logos, testimonial cards
- **Stagger**: When multiple cards/items are in a grid, stagger their entry by 100–150ms each (e.g., product cards, feature cards, team members)

### 4.2 SVG Draw Animations
- The hand-drawn circle and underline SVG elements should animate using the **line-drawing technique**: Start with `stroke-dashoffset` equal to the total path length, then animate to 0, making it look like the circle/underline is being drawn in real-time
- Trigger: when the parent heading scrolls into view
- Duration: 0.8–1.2s, easing: ease-in-out
- This creates the signature "pencil sketch appearing" effect

### 4.3 Counter / Number Animations
- On the homepage stats section (e.g., "5000+ Products Sold", "100+ Designs"), numbers should count up from 0 to the target value
- Trigger: on scroll into view
- Duration: 2s, easing: ease-out

### 4.4 Hover Animations
- **Product cards**: On hover, card lifts up 4–6px with enhanced shadow (0 8px 30px rgba(0,0,0,0.12)). Image slightly zooms (scale 1.05). Transition: 0.3s ease
- **Buttons**: Background color transition, subtle shadow on hover. 0.3s ease
- **Nav links**: Color transition to Electric Blue on hover. 0.2s ease
- **Social sidebar icons**: Scale 1.1 + background color to Electric Blue on hover. 0.3s ease

### 4.5 Swiper Slider
- Use **Swiper.js** for:
  - Testimonials/reviews carousel
  - Featured products carousel (on homepage)
- Configuration: autoplay with 5s delay, pagination dots, smooth slide transition, loop enabled
- On mobile: single slide visible. On tablet: 2 slides. On desktop: 3 slides

---

## 5. PAGE STRUCTURE — DETAILED SPECIFICATIONS

### 5.1 Homepage (`/`)

**Hero Section:**
- Left side (55%):
  - Large bold heading (H1, Nunito 900): "Premium Print on Demand — Designed for You" (with hand-drawn SVG circle around "Premium")
  - Subtitle paragraph: Brief description of Dynazur's offering
  - Yellow CTA button: "Explore Products" with a small gift/box icon before text
- Right side (45%):
  - Large pencil-sketch illustration: workspace scene with laptop, t-shirts, mugs, books around it. Selective blue and yellow fills on 2–3 elements
- Background: Page gray `#F2F2F2`

**Product Categories Section:** (inside white 30px-radius card)
- Section heading: "Our Products" (H2, with hand-drawn underline on "Products")
- 2×3 grid of category cards (or 3×2 on desktop):
  - Each card: White background, subtle border, 16px border-radius
  - Pencil-sketch icon (48px) at top
  - Category name (bold): Apparel, Books, Mugs, Posters, Digital Planners, Digital Trackers
  - Short 2-line description
  - Animate: fadeInUp with stagger
- On mobile: Single column stack

**Featured Products Section:** (inside white 30px-radius card)
- Heading: "Trending Now" with hand-drawn circle around "Trending"
- Swiper carousel showing 3–4 product cards (visible on desktop)
- Each product card:
  - Product image placeholder (16:9 aspect ratio, light gray bg)
  - Product name, category tag (small pill badge in Electric Blue)
  - Price
  - "View Product" link
- On mobile: 1 card visible, swipeable

**Why Dynazur / Value Proposition Section:** (inside white 30px-radius card)
- Heading: "Why Choose Dynazur" with hand-drawn underline on "Choose"
- 3 or 4 feature blocks in a row:
  - Sketch icon + bold title + description
  - Example features: "Premium Quality", "Fast Shipping", "Custom Designs", "Eco-Friendly"
  - Animate: fadeInUp with stagger

**Stats / Social Proof Section:**
- Bold heading: centered, "Trusted by Thousands"
- Row of stats with animated counters: "5,000+ Products Sold", "50+ Unique Designs", "4.9★ Average Rating", "12 Countries Shipped"
- Below: scrolling logo bar of trust signals / partner badges (Google, Meta partner style badges — use relevant ones like Shopify, Printful, Trustpilot)

**Blue CTA Banner:**
- Full-width section with Electric Blue `#071EFC` background, 30px border radius
- White text: "Ready to discover something special?"
- Yellow CTA button: "Shop the Collection"
- Animate: fadeInUp

**Testimonials Section:** (inside white 30px-radius card)
- Heading: "What Our Customers Say" with hand-drawn circle around "Customers"
- Swiper carousel of testimonial cards:
  - Customer photo (circular, 64px), name, title/location
  - Star rating (5 stars in yellow)
  - Quote text
  - Pagination dots below
- Animate: zoomIn with stagger

**Blog Preview Section:** (inside white 30px-radius card)
- Heading: "From the Blog" + "View All" outlined button (top-right)
- 3-column grid of latest blog posts:
  - Featured image with pencil-sketch style illustrations (matching the blog illustration style from digitalkitchen.ua)
  - Yellow date badge (pill shape, top-left overlay on image)
  - Post title (bold, 18px)
  - Brief excerpt (2 lines)
- On mobile: single column

**Footer:** (as described in Section 2.4)

---

### 5.2 Shop / All Products Page (`/shop`)

- Page heading: "Shop All Products" (bold H1)
- **Filter sidebar** (left, 25% width on desktop; collapsible drawer on mobile):
  - Category checkboxes: Apparel, Books, Mugs, Posters, Digital Products
  - Price range slider
  - Sort dropdown: Featured, Price Low-High, Price High-Low, Newest
- **Product grid** (right, 75%): 3 columns on desktop, 2 on tablet, 1 on mobile
  - Product card:
    - Image (1:1 or 4:5 ratio), with hover zoom effect
    - Category pill tag (Electric Blue)
    - Product name (Nunito 700)
    - Price (Nunito 800, Electric Blue)
    - "Add to Cart" button on hover overlay OR always visible
  - Animate: fadeInUp with stagger
- **Pagination** at bottom: numbered pages with active state in Electric Blue

---

### 5.3 Product Category Pages (`/products/apparel`, `/products/books`, etc.)

Each category page follows the service page pattern from digitalkitchen.ua:

**Hero Section:**
- Left: Bold H1 with category name + descriptive subtitle + Yellow CTA button
- Right: Category-specific pencil-sketch illustration
- Hand-drawn SVG circle on the category name

**Category Description Section:** (white card, 30px radius)
- What makes Dynazur's [category] special
- 3–4 feature blocks with sketch icons

**Product Grid:** (white card, 30px radius)
- All products in this category
- Same card style as /shop page

**Process / How It Works Section:**
- Horizontal numbered timeline (matching digitalkitchen.ua's 01→02→03→04→05 step flow with blue connecting line):
  - Step 1: Browse Designs
  - Step 2: Customize Your Product
  - Step 3: Place Your Order
  - Step 4: We Print & Ship
  - Step 5: Enjoy Your Product
- Numbers in circular gray badges, connected by a horizontal line
- Descriptions alternate above and below the line (zigzag pattern)

**Blue CTA Banner + Footer**

---

### 5.4 Single Product Page (`/products/[slug]`)

- Product image gallery (left, 55%): Main image + thumbnail row below
- Product details (right, 45%):
  - Breadcrumb trail
  - Product name (H1)
  - Price (large, Electric Blue)
  - Star rating
  - Short description
  - Variant selectors (size, color) if applicable
  - Quantity selector
  - "Add to Cart" yellow CTA button (large, full width)
  - Accordion sections: Description, Shipping Info, Reviews
- Below: "You May Also Like" product carousel (Swiper)

---

### 5.5 Digital Products Page (`/digital-products`)

Same layout pattern as category pages but adapted:
- Hero with illustration of tablets/devices showing planners and trackers
- Grid of digital product cards:
  - Preview image (showing a mock planner/tracker page)
  - Product name
  - File format badge ("PDF", "Excel", etc.)
  - Price
  - "Download Now" or "Add to Cart" button
- "Instant Delivery" badge featured prominently

---

### 5.6 About Page (`/about`)

Follow digitalkitchen.ua's About page pattern exactly:

**Hero Section:**
- Left: "About Dynazur" heading (H1 with hand-drawn SVG circle), description text, Yellow CTA
- Right: Founder photo with **pencil-sketch outline effect** — the photo should be desaturated/grayscale with a hand-drawn black line art border/outline traced around the person, exactly like digitalkitchen.ua's founder image. The outline extends slightly beyond the photo creating that distinctive illustrated look

**Story Section:** (white card)
- Company story text
- Bold heading, paragraph text

**Values Section:** (white card)
- 2×2 or 1×4 grid of value cards:
  - Each has a small yellow-background icon, a blue title, and description text
  - Animate: fadeInUp with stagger
  - Example values: Quality, Creativity, Sustainability, Customer Focus

**Timeline Section:**
- Vertical timeline (matching digitalkitchen.ua's About page timeline exactly):
  - Central vertical blue line
  - Year badges in yellow pills (2023, 2024, 2025, 2026) positioned along the line
  - Milestones alternate left and right of the line
  - Each milestone: pencil-sketch illustration (relevant to the event) + bold title + description
  - On mobile: single column, all items on one side

**Team Section:**
- Heading: "Our Team" with hand-drawn underline
- Grid of team member cards:
  - Circular photo (grayscale with sketch outline effect)
  - Name, role below
  - Animate: zoomIn with stagger

**Blue CTA Banner + Footer**

---

### 5.7 Blog Page (`/blog`)

Follow digitalkitchen.ua's Blog layout:

- Page heading: "Blog" (large H1)
- **2-column grid** of blog post cards (on desktop):
  - Featured image area: pencil-sketch style illustration with selective color fills (blue, yellow)
  - **Yellow date badge**: pill-shaped, positioned top-left of the image area, contains calendar icon + date
  - Post title (bold, Nunito 700, 18–20px)
  - On hover: card lifts with shadow
- On mobile: single column
- Pagination at bottom

---

### 5.8 Single Blog Post Page (`/blog/[slug]`)

- Hero: Post title (large H1), date, author, category tag
- Featured image (full width, pencil-sketch style)
- Article body: Markdown-rendered content with proper heading hierarchy, images, blockquotes
- Sidebar (right, on desktop): "Related Posts" list, "Categories" list, newsletter signup
- Share buttons at bottom
- "Related Posts" section below article

---

### 5.9 Contact Page (`/contact`)

- Left side: Heading "Get in Touch" with description, contact details (email, social links)
- Right side: Contact form:
  - Fields: Name, Email, Subject (dropdown), Message (textarea)
  - Yellow submit button: "Send Message"
  - Form validation with inline error messages
- Below: FAQ accordion section (optional)
- Pencil-sketch illustration of a mailbox or communication scene

---

### 5.10 Reviews / Testimonials Page (`/reviews`)

Follow digitalkitchen.ua's Reviews page:
- Left side: Heading + descriptive paragraph
- Right side: Grid/mosaic of client/customer brand logos in colored rectangles (different brand colors as backgrounds)
- Below: "Companies That Trust Us" scrolling logo bar
- Full testimonials list with customer photos, names, star ratings, and quotes

---

## 6. RESPONSIVE DESIGN SPECIFICATIONS

### 6.1 Breakpoints
- **Mobile**: 0–767px
- **Tablet**: 768–1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

### 6.2 Mobile Adaptations
- All grids collapse to single column
- Hero illustrations stack below text content
- Navigation becomes hamburger menu with slide-in/overlay menu
- Social sidebar is hidden
- Section padding reduces to 40–60px vertical
- Font sizes scale down (H1: 28–32px, H2: 22–26px, body: 15px)
- Swiper carousels show 1 slide
- Timeline becomes single-column (vertical, items on one side)
- Product grid: 1 column on mobile, 2 on tablet
- Filter sidebar becomes a collapsible drawer/modal on mobile

### 6.3 Tablet Adaptations
- 2-column grids for products and blog
- Hero stays side-by-side but with adjusted proportions (50/50)
- Navigation may still be horizontal if fits, otherwise hamburger
- Swiper shows 2 slides

---

## 7. TECHNICAL REQUIREMENTS

### 7.1 Framework & Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme configuration for Dynazur colors, fonts, border-radius
- **Animations**: Framer Motion for scroll-triggered animations, SVG draw animations, hover effects
- **Slider**: Swiper.js (swiper/react)
- **Icons**: Lucide React for UI icons
- **Font**: Google Fonts — Nunito (weights: 400, 600, 700, 800, 900)

### 7.2 Tailwind Configuration
```javascript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        'dynazur-blue': '#071EFC',
        'dynazur-black': '#050505',
        'dynazur-navy': '#1D2031',
        'dynazur-gray': '#E2E2E2',
        'dynazur-bg': '#F2F2F2',
        'dynazur-text': '#474747',
        'dynazur-yellow': '#FFD54F',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'section': '30px',
        'card': '16px',
        'btn': '8px',
      },
    },
  },
}
```

### 7.3 Component Architecture
Create reusable components:
- `<Header />` — sticky nav with mobile hamburger
- `<Footer />` — dark footer with CTA banner
- `<SocialSidebar />` — fixed right sidebar
- `<SectionCard />` — white rounded container for content sections
- `<HeroSection />` — reusable hero with text left + illustration right
- `<ProductCard />` — product grid card
- `<SketchIllustration />` — wrapper for SVG sketch illustrations
- `<HandDrawnCircle />` — SVG animated circle highlight component
- `<HandDrawnUnderline />` — SVG animated underline component
- `<AnimateOnScroll />` — wrapper using Framer Motion + Intersection Observer for scroll animations (fadeInUp, fadeInLeft, fadeInRight, zoomIn variants)
- `<CountUpNumber />` — animated number counter
- `<SwiperCarousel />` — reusable Swiper wrapper
- `<TimelineVertical />` — vertical timeline component
- `<TimelineHorizontal />` — horizontal process steps
- `<TestimonialCard />` — review card
- `<BlogCard />` — blog post preview card
- `<CategoryCard />` — product category card with icon
- `<ValueCard />` — value proposition card with icon and description
- `<BlueCTABanner />` — reusable blue CTA section
- `<YellowButton />` / `<OutlinedButton />` — button variants
- `<FilterSidebar />` — shop filters
- `<FAQAccordion />` — expandable Q&A

### 7.4 Project Structure
```
/app
  /layout.tsx              — Root layout with Header, Footer, SocialSidebar, font setup
  /page.tsx                — Homepage
  /shop/page.tsx           — All Products shop page
  /products
    /apparel/page.tsx      — Apparel category
    /books/page.tsx        — Books category
    /mugs/page.tsx         — Mugs category
    /posters/page.tsx      — Posters category
    /[slug]/page.tsx       — Single product page
  /digital-products/page.tsx — Digital products listing
  /about/page.tsx          — About page
  /blog
    /page.tsx              — Blog listing
    /[slug]/page.tsx       — Single blog post
  /contact/page.tsx        — Contact page
  /reviews/page.tsx        — Reviews / testimonials page
/components
  /layout/                 — Header, Footer, SocialSidebar
  /ui/                     — Buttons, Cards, Badges, Inputs
  /sections/               — Hero, CTA Banner, Testimonials, etc.
  /animations/             — AnimateOnScroll, HandDrawnCircle, CountUp
  /illustrations/          — SVG sketch illustrations as React components
/lib
  /data.ts                 — Mock product/blog/testimonial data
  /utils.ts                — Helper functions
/public
  /images/                 — Product images, team photos, logos
  /illustrations/          — SVG sketch illustration files
```

### 7.5 Mock Data
Create comprehensive mock data in `/lib/data.ts`:
- 12+ products across all categories with names, descriptions, prices, images
- 6+ blog posts with titles, excerpts, dates, featured images
- 8+ testimonials with customer names, photos, ratings, quotes
- 4+ team members with names, roles, photos
- Company timeline milestones (4–5 entries)
- Product categories with descriptions

### 7.6 SEO & Performance
- Semantic HTML5 throughout (header, nav, main, section, article, footer)
- Proper heading hierarchy (single H1 per page)
- Next.js Metadata API for title, description, Open Graph tags per page
- Next/Image for optimized image loading with lazy loading
- Proper alt text on all images
- Lighthouse target: 90+ on Performance, Accessibility, Best Practices, SEO

### 7.7 Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Sufficient color contrast (WCAG AA minimum)
- Skip-to-content link
- Form labels and error states

---

## 8. CRITICAL DESIGN DETAILS CHECKLIST

Ensure these specific design touches from digitalkitchen.ua are NOT missed:

- [ ] Page background is warm gray `#F2F2F2`, NOT pure white
- [ ] Content sections sit inside white cards with **30px border radius**
- [ ] Hand-drawn SVG circles animate (draw themselves) on scroll on key heading words
- [ ] Hand-drawn SVG underlines animate on scroll on key heading words
- [ ] Pencil-sketch illustrations use thin black lines with **selective color fills** (blue + yellow accents only)
- [ ] Hero illustrations occupy right 40–50% of hero on desktop, stack below on mobile
- [ ] Yellow CTA buttons have the slight rounded style (`#FFD54F`, 8px radius, black text)
- [ ] Sticky social sidebar (right side, circular black buttons) on desktop only
- [ ] Blue CTA banner sections have `#071EFC` background with 30px radius
- [ ] Footer is dark navy/black with multi-column layout
- [ ] Stats/numbers animate counting up on scroll
- [ ] Product and blog cards lift on hover with shadow transition
- [ ] Scroll-triggered animations: fadeInUp, fadeInLeft, fadeInRight, zoomIn with stagger
- [ ] Swiper carousels for testimonials and featured products
- [ ] Vertical timeline on About page with year badges in yellow pills
- [ ] Horizontal process steps with numbered badges connected by line
- [ ] Blog cards have yellow date badges (pill shape) on featured images
- [ ] About page founder photo has grayscale + sketch outline border effect
- [ ] Team photos are circular with grayscale + sketch outline effect
- [ ] Mobile hamburger menu (minimal line icon, top-right)
- [ ] All grids properly collapse to single column on mobile
- [ ] Font is Nunito throughout, weight 900 for headings, 400 for body
- [ ] Reviews page has colored brand logo mosaic grid (like digitalkitchen.ua)
- [ ] Cases/portfolio cards have pencil-sketch illustrations with category tags (pill badges)

---

## 9. DELIVERABLES

1. Complete Next.js project with all pages listed above
2. All components properly typed with TypeScript
3. Tailwind CSS configuration with custom Dynazur theme
4. Framer Motion animation system working on all pages
5. At least 6 custom SVG pencil-sketch illustrations (can be simplified/placeholder but must follow the thin-line + selective-fill style)
6. Hand-drawn SVG circle and underline components with draw animation
7. Fully responsive across mobile (390px), tablet (768px), and desktop (1440px)
8. Mock data for all products, blog posts, testimonials, and team members
9. Working Swiper carousels
10. Working shop filter sidebar (client-side filtering)

---

**IMPORTANT**: The pencil-sketch illustration style and the hand-drawn SVG highlight animations are the TWO most important visual differentiators of this design. They must be implemented with care and precision. Every page should feel like a blend of modern web design and artisanal hand-crafted illustration — clean, minimal, yet warm and inviting.

The overall aesthetic should communicate: **innovative, premium, creative, approachable** — fitting for a brand whose tagline is "for those who live in tomorrow."
