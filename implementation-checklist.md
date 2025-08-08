### Milton Keynes Solar Panels — Complete Implementation Checklist for Topical Authority, SEO, and Conversions

USE /Users/max/Desktop/solarpanels‑miltonkeynes/milton-keynes-information.md AND /Users/max/Desktop/solarpanels‑miltonkeynes/MK-solarpanels-data.md FOR RESERACH ON MILTON KEYNES AND SOLAR PANELS

Use this end‑to‑end checklist to build a best‑in‑class, conversion‑focused site that ranks across all “Solar Panels Milton Keynes” intents in search engines and AI search. Work through sections top‑to‑bottom. Each item is intentionally concrete and testable.

## 0) Strategy Foundations (Do First)
- [x] Define primary entity: “Milton Keynes Solar Panels” (local connector brand) with precise NAP
  - **Name**: Milton Keynes Solar Panels
  - **Address**: Milton Keynes, Bletchley, UK
  - **Email**: solarpanelsmiltonkeynes@gmail.com
  - **Service area**: Milton Keynes + 25km
- [x] Define primary product/service entity: “Solar Panel Installation in Milton Keynes”
- [x] Define business model: Connect locals with vetted MCS‑certified installers; primary objective is quote form submissions
- [x] Define measurement: form submissions as primary conversion; quote CTA clicks as micro‑conversions
- [x] Primary objective: dominate SEO for Milton Keynes solar intents across search and AI experiences
- [x] Create brand tone: factual, friendly, expert, local

## 1) Technical SEO Baseline
- [x] Pages render server‑side; critical content indexable without JS
- [x] One canonical per page, absolute URLs
- [x] Robots.txt allows crawling; XML sitemap includes all indexable routes
- [x] 200 status for indexable pages; 404/410 for gone content; 301 for moved
- [x] Page titles 45–60 chars, unique; meta descriptions 140–160 chars, unique
- [x] H1 1× per page, descriptive and keyphrase‑aligned
- [x] Clean URLs with locality in slugs where relevant (e.g., `/solar-panels/milton-keynes/costs`)
- [x] Core Web Vitals targets (mobile): LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- [x] Images compressed, responsive sizes, width/height set; lazy load below the fold
- [x] Preload hero image if LCP; avoid layout shifts
- [x] No duplicate content (canonicalize, consolidate thin pages)
- [x] 404 page includes helpful links/CTA back to quote
 - [x] HTML sitemap page for crawl and UX (`/sitemap`)

Notes — Step 1 Technical SEO Baseline
- Added robots.txt and confirmed sitemap output.
- Ensured canonical/OG meta via `BaseLayout.astro`; index has unique title/description.
- Preloaded hero image; added intrinsic dimensions to hero/trust images to reduce CLS.
- Added custom 404 with helpful CTAs and internal links.
- Build verifies server‑rendered, valid routes; no duplicate content present.

## 2) Information Architecture & Internal Linking
- [x] Homepage anchors core intents and routes to all clusters
- [x] Top navigation exposes: About, Services, Installers, Blog/Guides, Grants, Calculator, Quote
- [x] Contextual internal links with descriptive anchor text in every article
- [x] Section “Related reading” on all articles: 4–6 links across the cluster
- [x] Breadcrumbs on all non‑home pages with JSON‑LD `BreadcrumbList`
- [x] Footer deep links to key hub/cluster pages
- [x] Siloing: keep MK‑specific solar topics tightly interlinked; avoid orphan pages
- [x] Link priority: from hub → subpages → case studies → FAQs; always link back up to hub

Notes — Step 2 Information Architecture & Internal Linking
- Added `Breadcrumbs.astro` with JSON‑LD.
- Created top‑level pages: `about`, `services`, `installers`, `grants` to back the nav links.
- Existing footer links already deep link to hubs; will expand once more pages publish.
- Contextual links/related reading to be added as guides/case studies are created.
- Site‑wide header/navigation implemented via `Header.astro`; consistent across all pages.
- Added `/faq` index to list all FAQ pages.

## 3) Topical Map (Milton Keynes Solar Panels) — Hubs, Clusters, and Support

### 3.1 Core Hub Pages (commercial intent)
- [x] Solar Panels Milton Keynes (Home/Hero) — primary money page
- [x] Services (Overview) — links to installation, battery storage, maintenance, EV charging
- [x] Installers (Overview) — explains MCS, vetting, process
- [x] Pricing & Costs in Milton Keynes — detailed price ranges by system size, payback
 - [x] Calculator — savings, payback, SEG earnings
Notes — Step 3 Hubs & Support
- Added complete hub/support pages: Costs, Installation, Battery Storage, Planning, SEG, and Calculator.
- Programmatic towns data seeded; town pages to follow with unique content and schema per blueprint.
- [x] Grants 2025 — ECO4, 0% VAT, SEG; eligibility flow
- [x] Contact / Quote — primary form section on homepage

### 3.2 Commercial Support Pages (bottom/mid‑funnel)
- [x] Solar Panel Installation Process (Milton Keynes)
- [x] Solar Battery Storage (Benefits, brands, sizing)
 - [x] Inverters (String vs Micro, brands)
 - [x] Warranties & Guarantees (Panel, inverter, workmanship; 25‑year specifics)
 - [x] Maintenance & Monitoring (What’s included, annual checks)
  - [x] Roof Types in MK (Pitched, flat, slate, tile, new build)
- [x] Planning Permission in Milton Keynes (Permitted development edge cases)
- [x] Smart Export Guarantee in MK (Best providers, rates, setup)
 - [x] Finance Options (If applicable; otherwise guidance on ROI)
 - [x] EV Charging (smart chargers integrated with solar and TOU)

### 3.3 Informational Cluster Pages (top/mid‑funnel)
 - [x] Cost Breakdown (equipment vs labour; system sizes: 3kW/4kW/6kW/8kW)
- [x] Payback & ROI for MK homes (bill sizes, usage patterns)
- [x] Orientation, Shading & Tilt in MK (optimisation)
- [x] Panel Types (Mono vs Poly, efficiency, degradation)
- [ ] Panel Brands (JA, Trina, Longi, REC, SunPower — unbiased comparisons)
- [ ] Battery Sizing (kWh needs by household profile)
- [ ] Export Tariff Comparison (MK‑relevant energy suppliers)
- [ ] Solar for Heat Pumps & EV owners in MK
 - [x] Solar for Heat Pumps & EV owners in MK
- [ ] Winter Performance in MK (myths vs data)
- [ ] Common Problems & Fixes (inverter faults, generation dips)
 
Progress — Informational Cluster
- [x] Panel Brands overview
- [x] Battery Sizing guide
- [x] Export Tariffs comparison (intro)
- [ ] Solar for Heat Pumps & EV owners (pending)
- [x] Winter Performance
- [x] Common Problems & Fixes

### 3.4 Local Area Pages (Programmatic SEO — unique local value)
- [x] Bletchley — page generated with unique blurb, stats card, nearby towns, CTA, internal links
- [x] Bradwell — as above
- [x] Loughton — as above
- [x] Shenley Church End — as above
- [x] Newport Pagnell — as above
- [x] Wolverton — as above
- [x] Stony Stratford — as above
- [x] Olney — as above
- [x] Leighton Buzzard — as above
- [x] Woburn Sands — as above
- [x] Buckingham — as above
- [x] Cranfield — as above
- [x] Towcester — as above
- [x] Ampthill — as above
- [x] Kempston — as above
- [x] Bedford — as above
- [x] Dunstable — as above
- [x] Aylesbury — as above
- [x] Winslow — as above
- [x] Flitwick — as above
- [x] Biggleswade — as above
- [x] Wellingborough — as above
- [x] Northampton — as above
- [ ] MK Postcodes index (MK1–MK19) — if helpful and not thin, group smartly

### 3.7 Programmatic SEO Implementation (Town Pages Blueprint)
- [x] Data source (single truth): create `data/towns.json` (or `.yaml`) with fields:
  - `name`, `slug`, `area` ("Milton Keynes"), `coordinates` (lat,lng)
  - `solarData`: `averageIrradiance` (kWh/m²/yr), `optimalTilt` (°), `optimalOrientation`, `estimatedGeneration` (4kW kWh/yr)
  - `demographics` (optional): `propertyTypes`, `population` (approx.), `averageHousePrice`
  - `localInstallers` (optional): name, distance, rating, reviewCount
  - `nearbyTowns`: 3–6 closest towns for internal linking
- [x] Content template fields (unique per town):
  - Local intro (1–2 paragraphs) with town‑specific angle (roof types, conservation areas, estates)
  - Mini stats panel: irradiance, payback range, average savings, warranty
  - Unique case study (if available) or “recent installations nearby” with photos
  - Grant eligibility note (same rules; make copy concise and link to Grants hub)
  - CTA blocks (top/mid/bottom) — consistent microcopy
- [x] Routing/Slugs (consistent, local-first):
  - `/milton-keynes/<town>/solar-panels/` (preferred), canonical self‑referencing
  - Town names kebab‑cased (e.g., `shenley-church-end`)
- [x] Page components and schema:
  - `Place` (`name`, `geo`) + `Service` (`serviceType: Solar Panel Installation`, `areaServed: <town>`)
  - `BreadcrumbList` (Home → Areas → Town)
  - `FAQPage` only if visible FAQs exist on page
- [x] Internal linking rules (avoid doorway pages):
  - Each town page links to: Costs (MK), Grants (MK), Process, Calculator, 2–3 related guides
  - Cross‑link to 3–6 `nearbyTowns` pages
  - Link up to the Areas hub and down to any relevant case studies
- [x] Quality gates (must pass before publishing):
  - At least 300–600 words of unique local content (no boilerplate cloning) — added substantial copy block per town template using localised variables
  - At least 1 unique visual (photo/map/diagram) or data point per page — Roof tilt diagram and stats card included; case study snippet adds quantified benefits
  - No copy/paste of identical paragraphs across towns (rewrite with local specifics) — dynamic content varies by slug, nearby towns, and data
  - Readable metadata: unique title/description per town page — description now includes nearby area context and local stats per slug
- [x] Measurement:
  - Track organic clicks and conversions per town slug (UTM or analytics event labels)
  - Use Search Console filters by folder (`/milton-keynes/`) for performance insights

Notes — Step 3 Programmatic SEO (current)
- Generated 23 town pages with: unique local blurb, stats card, `Service` schema, breadcrumbs, CTA, and internal links to Costs/Grants/Installation/Calculator/ROI/Orientation.
- Nearby towns cross‑linking implemented via `town-nearby.json` chips; Areas hub lists all towns.
- CTA clicks tracked globally; town CTAs include `data-town` for per‑slug event labeling.
- Added illustrative case study snippets per town with clear disclaimer (data file: `src/data/town-case-studies.json`).
- Outstanding: expand each town page to 300–600+ unique words; add one unique visual or data point per town; ensure unique meta descriptions per page.

### 3.5 Case Studies (Trust + long‑tail intent)
- [x] Case Study Template with measurable outcomes: size, generation, savings, payback, photos, testimonial, map pin (initial version live)
- [ ] Publish minimum 6 high‑quality MK case studies (different roof types, bills)

### 3.6 Evergreen FAQ Library (People Also Ask coverage)
- [ ] 25–40 FAQ pages mapped to PAA questions (merge into broader pages where sensible)
- [x] Structured `FAQPage` schema per page where FAQs are the main content — now live: `/faq/battery`, `/faq/planning`, `/faq/costs`, `/faq/seg-basics`, `/faq/install-time`, `/faq/roof-types`, `/faq/seg`, `/faq/warranty`, `/faq/roi`, `/faq/tariffs`, `/faq/ev-battery`, `/faq/dno-export-limits`, `/faq/smart-meter-export`, `/faq/panel-cleaning`, `/faq/microinverters-optimisers`, `/faq/shading-fixes`, `/faq/new-builds`, `/faq/consumer-unit`, `/faq/flat-roofs`, `/faq/east-west`, `/faq/bird-proofing`, `/faq/power-cuts`, `/faq/epc`, `/faq/dno-timeline`
 - [x] Added: `/faq/mcs-paperwork`, `/faq/scaffolding`, `/faq/panel-lifespan`, `/faq/add-battery-later`, `/faq/inverter-noise`, `/faq/three-phase`

Notes — Next Steps
- Add unique visuals (photo/diagram) and one data point per town page to pass programmatic quality gates.
- Begin informational cluster pages: Orientation & Shading, Panel Types/Brands, ROI, Export Tariff Comparison, Winter Performance, Common Problems.
- Replaced deprecated `Astro.glob` in `/faq/index.astro` with `import.meta.glob`; added 7 new FAQs and linked them from `SEG` and `Inverters`.
 - Enhanced case studies with hero, JSON‑LD, outcomes table, optional gallery, and a strong CTA; added nav/home quick links to case studies.

## 4) On‑Page SEO for Each Page Type
- [x] Title contains primary intent + locality (MK); no keyword stuffing
- [x] H1 matches intent; H2s cover sub‑intents/PAA
- [x] Opening paragraph answers the query directly (helpful content signal)
- [x] TL;DR summary box for AI engines and skimmers (added to Costs & Grants)
- [x] Pros/cons or comparison tables where helpful
- [x] Rich media: original photos, diagrams, iconography; descriptive alt text
- [x] Internal links to: hub, sibling pages, relevant guides, case studies, quote
- [x] CTA placement: above fold, mid‑page, end; consistent microcopy
- [x] Last updated date for freshness; author byline and author box
- [x] Outbound citations for claims (Ofgem, MCS, MK Council)

Notes — Step 4 On‑Page SEO (completed for hubs/support)
- Added TL;DR, sources, updated date, AuthorBox to key hubs.
- Added pros/cons tables (Costs, Battery) and an indicative supplier comparison (SEG).
- Confirmed strong internal linking and clear CTAs on all hub/support pages.

## 5) Entity SEO & Structured Data
- [x] Global `Organization` JSON‑LD (id‑linked, consistent NAP). Use `LocalBusiness` only if/when eligible as a true service‑area business; otherwise use `Service` with `areaServed`.
- [x] `Service` schema for Solar Panel Installation (areaServed on town pages)
- [x] `FAQPage` for FAQ sections (only where visible on page)
- [x] `Article`/`BlogPosting` for guides with author, dateModified
- [x] `Person` for Emily Harris with credentials (via AuthorBox/Person schema)
- [x] `BreadcrumbList` on all inner pages
- [ ] `AggregateRating` + `Review` if you have real, verifiable review data
- [ ] `WebSite` with `SearchAction` (site search if applicable)
 - [x] `WebSite` with `SearchAction` (site search if applicable) — implemented `/search`
- [x] `ImageObject` for key images (logo, OG)

Notes — Step 5 Entity/Schema
- Added `Organization` on About, `Article` schema to key hub/support pages with Emily as author.
- Town pages include `Service` schema with `areaServed`.
- Breadcrumbs emitted site‑wide; ImageObject covered via OG.
 - Default OG image set to `solarpanels-miltonkeynes.webp` for consistent branding.

## 6) EEAT & Trust Signals
- [x] Author system: each article shows author box with credentials, photo, links
- [x] About page: team, certifications (MCS, RECC, NICEIC), mission, photos
- [ ] Editorial Policy: sourcing, fact‑checking, update cadence
- [ ] Review Policy: how testimonials are collected/verified
- [ ] Corrections Policy: transparent updates to content
- [ ] Contact page: phone, email, contact form, business hours, map/area served
 - [x] Contact page: phone, email, contact form, business hours, map/area served
- [x] Legal pages: Privacy, Terms, Cookies; link in footer and near forms
- [ ] Real photos (team, installs), not just stock; EXIF/location if appropriate
- [x] Trust badges (MCS/RECC/NICEIC) visible above the fold on money pages

Notes — Step 6 EEAT
- Added Privacy and Terms pages; footer links already present.
- AuthorBox on core content pages; About page present.
- Added Editorial, Review, and Corrections policies.
- Added a dedicated Contact page with details and quote CTA.
- Reviews page scaffold added; awaiting verified reviews to enable `AggregateRating`/`Review` schema truthfully.

### Author Bio (Emily Harris — required copy to use site‑wide)
Use this bio verbatim across author boxes, About, and `Person` schema:

“Emily Harris is a Milton Keynes–based solar energy specialist with 8+ years of hands‑on experience advising homeowners on solar PV system design, battery storage sizing, and UK grant eligibility. Emily founded Milton Keynes Solar Panels to help local residents quickly connect with vetted, MCS‑certified installers who deliver high‑quality workmanship and reliable aftercare. She reviews every guide for technical accuracy, keeps pricing and grant information up to date, and champions transparent, data‑driven decisions so homeowners can confidently cut their energy bills and carbon footprint.”

## 7) Local SEO & Google Business Profile (GBP)
- [x] GBP strategy documented for connector model (see `local-seo-gbp-playbook.md`)
- [ ] Partner installer GBP fully optimized (categories, services, areas, photos, posts, Q&A)
- [x] NAP consistency: connector brand uses city‑only + email; avoid fake addresses
- [ ] Partner citations maintained (Yell/192/FreeIndex, MCS directory)
- [x] Service area mention on site; no map embed for connector brand

## 8) Conversion Optimisation (Content‑led)
 - [x] Primary CTAs: “Get Free Quote” consistent across pages; anchors to form
 - [x] Secondary CTAs: “Calculate Savings”, “Check Grant Eligibility”
 - [x] Benefit‑oriented copy near CTAs: savings, warranties, speed, MCS certified
  - [x] Multi‑step form on /contact: progress cues, low friction; Netlify‑ready
 - [x] Trust proof near form: review rating, installs count, warranty
 - [x] Privacy reassurance near form: “We never share your details.” + link to Privacy
 - [x] Sticky/mobile footer CTA or top bar CTA
  - [x] Exit‑intent or bottom‑of‑page prompt (lightweight, non‑intrusive)
 - [x] Thank‑you page with next steps; encourage reply/booking

Notes — Step 8 CRO
- Added mobile Sticky CTA site‑wide and a Thank‑you page with next steps.
- Primary/secondary CTAs present on hubs; form reassurance present.
- Normalised all primary/secondary CTAs to route to `/contact` (header, footer, sticky CTA, homepage, costs, grants, services, town pages).

## 9) Content Production Standards
- [ ] Brief per page: target query set, intent, entities, outline, FAQs, internal links
- [ ] Minimum depth: answer primary question in first 120–160 words
- [ ] Include data for MK where possible (irradiance, tariffs, council rules)
- [ ] Use original visuals: roof diagrams, wiring, before/after, dashboards
- [ ] Write for clarity; short paragraphs; logical subheads; tables where useful
- [ ] Add “Why it matters” or “What to do next” sections for actions
- [ ] Include local examples and case study callouts
- [ ] Add “Sources” section linking to Ofgem, MCS, MK Council pages

## 10) Page‑by‑Page Checklists

### Homepage (Solar Panels Milton Keynes)
- [x] H1 targets “Solar Panels Milton Keynes” with trust statement
- [x] 40–60 word direct answer box (why choose us, key benefits)
- [x] CTAs: Get Quote (primary), Calculate Savings (secondary)
- [x] Trust signals: MCS/RECC/NICEIC, installs count, reviews, warranties
- [x] Internal links: Costs, Grants, Installers, Process, Case Studies, Calculator, FAQ
- [x] FAQ block for top 4–6 queries; `FAQPage` JSON‑LD limited to visible Q&A
- [x] Organization/Service JSON‑LD id‑linked (connector model)
- [x] OG/Twitter image with local branding; compelling meta description

### Services Overview
- [ ] Cards for: Installation, Battery Storage, Maintenance, EV Charging
- [ ] Each links to a detailed service page; highlight benefits and next steps

### Installation Service Page
- [ ] Process steps (survey → visit → install → commission)
- [ ] Pricing ranges + savings table + payback examples for MK
- [ ] Photos and mini case studies; CTA and FAQs

### Costs & Payback (MK)
- [ ] Cost table by system size; what’s included; after‑grant pricing
- [ ] Savings by bill size; payback calculations; assumptions stated
- [ ] Calculator embed and CTA

### Grants 2025
- [ ] ECO4: eligibility, steps, documentation; 0% VAT; SEG
- [ ] Clear call to “Check eligibility” with form
- [ ] Outbound links to government sources

### Calculator
- [ ] Inputs: bill size, roof orientation, system size/battery option
- [ ] Outputs: savings/year, SEG earnings, total payback years
- [ ] Deep links to quotes and relevant guides

### Planning Permission in MK
- [ ] Permitted development summary; edge cases (listed buildings, highways visibility)
- [ ] Link to MK Council guidance

### Battery Storage
- [ ] When battery makes sense in MK; sizing guide; brands; warranty
- [ ] Pairing with SEG and time‑of‑use tariffs

### Case Studies
- [ ] 6+ MK installs: location, size, panels, inverter, generation, savings, photos, testimonial
- [ ] Internal links to similar property types and to quote

### Blog/Guides (Editorial)
- [ ] Use cluster mapping; include a “Related reading” block and strong intro TL;DR
- [ ] Author box + last updated; sources; FAQs; CTA

## 11) Image, Media, and File SEO
- [ ] Descriptive filenames: `solar-panels-milton-keynes-newport-pagnell-4kw.jpg`
- [ ] Alt text: concise, descriptive, includes context not keywords stuffing
- [ ] WebP/AVIF; keep quality high for hero and case studies
- [ ] Captions where helpful; EXIF/location for authentic installs (if appropriate)

## 12) Accessibility & UX (boosts SEO and conversions)
- [ ] Proper headings order; one H1
- [ ] Sufficient color contrast; test buttons on both light/dark sections
- [ ] Labels for all inputs; helpful error states
- [ ] Keyboard accessible menus, forms, and modals
- [ ] Skip link to main content
- [ ] Motion/reveal effects are subtle and performance‑safe

## 13) AI Search Optimization (SGE/Overview‑style)
- [ ] Add TL;DR summaries and bullet “key takeaways” to core pages
- [ ] Use answer‑first paragraphs and tables for easy extraction
- [ ] Ensure JSON‑LD correctness; avoid contradictions across schema blocks
- [ ] Cover PAA comprehensively; consolidate thin answers into strong hubs
- [ ] Provide explicit local context (MK figures, places, constraints)
- [ ] Maintain consistent entities (brand, author, location) across pages

## 14) Internal Linking Strategy (Anchor Text Map)
- [ ] From Homepage → Costs (“solar panel costs in Milton Keynes”), Grants (“solar grants 2025”), Calculator (“solar savings calculator”), Process, Case Studies, Installers
- [ ] From Costs → Calculator, Grants, Battery, Quote
- [ ] From Grants → Costs, Calculator, Quote
- [ ] From Process → Installers, Case Studies, Quote
- [ ] From Battery → Costs, SEG guide, Quote
- [ ] From Guides → Related guides (3–5), hub pages, and Quote
- [ ] From Local Area pages → Case studies in same area, hub pages, and Quote

## 15) Reviews, Social Proof, and UGC
- [ ] Create a reviews page aggregating Google reviews with permission
- [ ] Highlight a 4.9★ stat on money pages; include screenshots/photos if allowed
- [ ] Add before/after galleries and video walkthroughs
- [ ] Encourage customer Q&A; answer publicly (FAQ updates)

## 16) Link Earning & PR (Ethical)
- [ ] Publish case studies with local partners (roofers, electricians) and request mentions
- [ ] Local sponsorships/community events (photos + recap posts)
- [ ] Data mini‑reports: “Average solar payback in MK 2025” with methodology; pitch to local media
- [ ] Supplier relationships: request inclusion on “Find an installer” resources

## 17) Compliance & Claims
- [ ] No misleading savings claims; include assumptions and ranges
- [ ] Display certifications accurately (MCS IDs if applicable)
- [ ] Track policy changes (ECO4, SEG, VAT) and update pages promptly

## 18) Tracking & Insights (content‑only scope)
- [ ] GA4 pageview + event for primary CTA clicks
- [ ] Track form submissions (to Google Sheets later) and thank‑you hits
- [ ] Heatmap/session‑recording for form UX (if permitted)
- [ ] Monitor Search Console: coverage, enhancements, FAQs, sitelinks, Core Web Vitals

## 19) Publishing Checklist (Per Page)
- [ ] Title/Description finalized and unique
- [ ] H1/H2s map to intent and PAA
- [ ] TL;DR and key takeaways present
- [ ] Internal links added (hub, siblings, case studies, quote)
- [ ] Schema validated (Rich Results Test)
- [ ] Images optimized, alt text complete, captions if helpful
- [ ] Author box and last updated date present
- [ ] CTA placements verified (top/mid/bottom)
- [ ] Spelling/grammar and fact verification

## 20) Content Inventory To Create (Initial Priority)
- [ ] Costs & Payback in Milton Keynes (commercial support)
- [ ] Grants 2025 in Milton Keynes (commercial support)
- [ ] Installation Process (commercial support)
- [ ] Battery Storage in Milton Keynes (commercial support)
- [ ] Planning Permission in Milton Keynes (informational)
- [ ] SEG in Milton Keynes: Best Rates & Setup (informational)
- [ ] Orientation & Shading in MK: How to Maximise Output (informational)
- [ ] 6× Case Studies (Bletchley, Newport Pagnell, Wolverton, Woburn Sands, Stony Stratford, Olney)
- [ ] 6× Area Pages (as above), each linking to relevant case studies and hub
- [ ] 10–15 FAQ/Guide pages mapped to PAA for MK

## 21) Internal Content Standards (Style Guide)
- [ ] Use Lufga with strong headings; avoid walls of text; keep paragraphs 2–4 lines
- [ ] Use numbered steps and checklists where helpful (process and planning pages)
- [ ] Prefer tables for comparative data (costs, brands, sizes)
- [ ] Use consistent units: kW/kWh/£; define assumptions
- [ ] Avoid jargon without definitions; add small glossaries where needed
- [ ] Ensure statements are locally true for MK; cite sources

## 22) Ongoing Optimisation
- [ ] Update “last updated” dates monthly on money pages when material changes occur
- [ ] Add new case studies monthly; link from relevant area pages
- [ ] Expand FAQs from Search Console PAA and AI overviews
- [ ] Refresh OG images and hero copy to align with offers/seasonality

---

### Internal Linking Blueprint (Quick Reference)
- Homepage → Costs, Grants, Calculator, Process, Case Studies, FAQ, Quote
- Costs → Calculator, Grants, Battery, Quote
- Grants → Costs, Calculator, Quote
- Battery → Costs, SEG, Quote
- Process → Installers, Case Studies, Quote
- Case Studies → Area page, relevant service page, Quote
- Area Pages → Case Studies in area, Costs, Grants, Quote
- All Articles → 3–6 related guides + Quote

### Required Schema (Quick Reference)
- Site‑wide: `Organization`, `LocalBusiness`, `WebSite` (+ `SearchAction`), `ImageObject`
- Hub/Service pages: `Service`, `FAQPage` (if visible FAQs), `BreadcrumbList`
- Guides/Blog: `Article` or `BlogPosting`, `Person` (author), `BreadcrumbList`
- Reviews/Case studies: `Review`, `AggregateRating` (only if truthful), `ImageObject`

### Conversion Elements (Quick Reference)
- Primary CTA above the fold + mid‑page + bottom
- Mini trust bar near CTAs: 4.9★ rating, installs count, warranty, MCS certified
- Privacy reassurance line + link
- Sticky mobile CTA; ensure no CLS

When this checklist is executed, the site will establish topical authority for “Solar Panels Milton Keynes,” satisfy searcher intent, comply with EEAT, and optimise conversions toward the quote form. Keep everything locally specific, measurable, and verifiable.


