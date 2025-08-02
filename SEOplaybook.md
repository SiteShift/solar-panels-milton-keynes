# SEO Playbook • solarpanels‑miltonkeynes.com

A **single source of truth** for every page, component and AI prompt that touches on search. Follow it and we rank #1 for every *solar + Milton Keynes* query while building durable E‑E‑A‑T signals.

> **North‑star KPI:** 25+ organic leads / month and top‑3 positions for all target KWs within 6 months.

---

## 1. Keyword & Topic Map

| URL (slug)                    | Primary KW (exact)                            | Secondary / synonyms                                  | Related entity terms (semantic cluster)      |
| ----------------------------- | --------------------------------------------- | ----------------------------------------------------- | -------------------------------------------- |
| `/`                           | solar panels milton keynes                    | solar panels in milton keynes, solar pv milton keynes | photovoltaics, EPC rating, MCS certification |
| `/installers`                 | solar panel installers milton keynes          | solar installers milton keynes                        | NICEIC, inverter brands, Part P              |
| `/battery-storage`            | solar battery storage milton keynes           | home battery milton keynes                            | Li‑ion, kWh capacity, GivEnergy              |
| `/ev-chargers`                | ev charger installation milton keynes         | ev chargers milton keynes                             | OZEV, type‑2, smart charger                  |
| `/guides/solar-grants-2025`   | solar grants milton keynes                    | eco4 solar grant mk                                   | ECO4, LA Flex, Warm Homes Plan               |
| `/guides/planning-permission` | solar panel planning permission milton keynes | mk planning rules solar                               | Permitted development, roof pitch            |
| `/[[...location]]`            | solar panels {{location}}                     | solar installers {{location}}                         | postcode MK‑\*, irradiance data              |
| Case study MDX                | solar installation {{location}} case study    | 4 kW solar pv {{location}}                            | system size, generation (kWh)                |

**Action for writers:** weave entity terms naturally in H2/H3s—helps AI Overviews.

---

## 2. Meta‑Tags & Canonical Policy

| Element         | Rule                                                                                                                                            | Example                                                                         |                               |                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------- | ---------------------------- |
| **Title**       | 50‑60 chars, \`KW                                                                                                                               |  Milton Keynes Solar Guide\`                                                    | \*Solar Panels Milton Keynes  |  Milton Keynes Solar Guide\* |
| **Description** | 145‑160 chars, 1 CTA, 1 USP                                                                                                                     | *Cut bills by up to 70 %. MCS‑certified installers. Instant quote.*             |                               |                              |
| **Canonical**   | Always self‑reference except: <br>• pSEO pages with >80 % duplicate content → canonical → `/installers` <br>• trailing‑slash unified (no slash) | `<link rel="canonical" href="https://solarpanels-miltonkeynes.com/installers">` |                               |                              |
| **OG/Twitter**  | Mirror title, add 1200×630 image                                                                                                                | —                                                                               |                               |                              |

---

## 3. 40‑Word Answer Box

```html
<strong>Looking for {{primary KW}}? Our MCS‑certified team designs and installs high‑efficiency systems across Milton Keynes, helping homeowners slash energy bills by up to 70 %. Get a free, same‑day quote today.</strong>
```

*Target 35‑45 words; plain language; include primary KW once.*

---

## 4. Reusable Schema Snippets

> Inject via `<Seo structuredData={...} />` to keep layout clean.

### 4.1 LocalBusiness (home)

```json
{ "@context":"https://schema.org", "@type":"LocalBusiness", "@id":"https://solarpanels-miltonkeynes.com/#business", "name":"Milton Keynes Solar Guide", "url":"https://solarpanels-miltonkeynes.com", "areaServed":"Milton Keynes", "telephone":"+44 1908 123456", "image":"https://solarpanels-miltonkeynes.com/logo.png" }
```

### 4.2 Service (installers & suburb pages)

```json
{ "@context":"https://schema.org", "@type":"Service", "serviceType":"Solar Panel Installation", "provider":{"@id":"https://solarpanels-miltonkeynes.com/#business"}, "areaServed":{"@type":"Place","name":"{{location}}"} }
```

### 4.3 Author (guides)

```json
{ "@context":"https://schema.org", "@type":"Person", "@id":"#author-emily", "name":"Emily Harris", "jobTitle":"MCS‑Certified Solar Assessor", "url":"https://solarpanels-miltonkeynes.com/about" }
```

### 4.4 Review (embedded in case studies)

```json
{ "@type":"Review", "itemReviewed":{"@id":"https://solarpanels-miltonkeynes.com/installers#service"}, "author":{"@type":"Person","name":"{{author}}"}, "reviewRating":{"@type":"Rating","ratingValue":5} }
```

### 4.5 FAQPage

```json
{ "@context":"https://schema.org", "@type":"FAQPage", "mainEntity":[{ "@type":"Question", "name":"How much do solar panels cost in Milton Keynes?", "acceptedAnswer":{"@type":"Answer","text":"Most homes spend £5,000–£7,500 after grants."} }] }
```

### 4.6 BreadcrumbList (auto‑generated)

Astro route generates array of `listItem` objects → include on every page except home.

---

## 5. Internal Linking & Navigation

* **Breadcrumb nav** (with `BreadcrumbList` schema) keeps depth ≤3 clicks.
* Link quota: 2‑3 contextual links per 500 words.
* Exact‑match anchor limited to once per source page.

| From → To                   | Anchor                               | Purpose                              |
| --------------------------- | ------------------------------------ | ------------------------------------ |
| `/` → `/installers`         | solar panel installers Milton Keynes | Push authority to transactional page |
| `/installers` → suburb page | solar panels {{location}}            | Geo‑signal                           |
| Guides → `/`                | solar panels Milton Keynes           | Reinforce head term                  |
| Case study → `/installers`  | MCS‑certified installers             | Proof‑→‑CTA                          |

---

## 6. Multimodal Content Checklist

| Asset       | Rule                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------- |
| **Images**  | 1 unique image per 500 words; AVIF + fallback; descriptive alt incl. location when relevant. |
| **Video**   | Short ≤60 s vertical clip summarising key benefit; embed as `<VideoObject>` schema.          |
| **Diagram** | Use Mermaid in MDX; Astro 5.5 renders natively (zero JS).                                    |

AI Overviews now surfaces images & video directly → this boosts click‑share.

---

## 7. Technical SEO & Deployment

* **CWV budget**: LCP <2.5 s, INP <200 ms, CLS <0.1 → enforced via `pnpm lighthouse` in CI.
* **Robots & sitemap**: `@astrojs/sitemap` auto‑updates on build. Staging deploys set `x-robots-tag: noindex`.
* **HTTPS canonical**: enforce `https://` non‑www via Vercel redirect config.
* **Trailing slash**: no trailing slash; Vercel rewrites handle `/<path>/` → `/<path>`.
* **Image optimisation**: `sharpImageService` with `format:['avif','webp']`.
* **Thin‑content**: pages with CTR <0.2 % after 30 days get `noindex` meta.

---

## 8. E‑E‑A‑T & Off‑Site Signals

| Signal              | Implementation                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------- |
| **Author bio**      | `/about` page with credentials, headshot, disclosure. Author schema on all guides.             |
| **TrustHub**        | Displays MCS, RECC, NICEIC badges + latest 2 reviews; linked from nav & footer.                |
| **Reviews**         | Automated email/SMS → +3 new GBP reviews/month; embed ratings schema.                          |
| **Local citations** | Monthly: Yell, Checkatrade, TrustMark, Collaborate MK, MK Citizen feature. 5 new citations/mo. |
| **GBP posts**       | Weekly tip or case study snippet; geo‑tagged photo upload.                                     |

---

## 9. Content & Outreach Cadence

| Month | Action                                                                 | KPI                            |
| ----- | ---------------------------------------------------------------------- | ------------------------------ |
| 1     | Home, Installers, Grants guide live                                    | Index <48 h, 3 impressions/day |
| 2     | 5 suburb pages + 1 case study                                          | 10 long‑tail clicks/day        |
| 3     | Battery, EV pages + case study                                         | Map‑Pack visibility ≥30 %      |
| 4‑6   | Remaining suburbs (15), grants update, 1 case study/mo, 5 citations/mo | ≥25 organic leads/mo           |

---

## 10. Prompt Recipes for Cursor

*Generate new suburb page*

```txt
@astro-docs generate pSEO page for "Olney" using SEO_PLAYBOOK rules. Include Service schema, 40‑word answer box, breadcrumb, internal links to /installers and /. Use data model in data/locations.json.
```

*Add Author schema to existing guide*

```txt
@astro-docs inject Person schema #author-emily into /guides/planning-permission.mdx via <Seo structuredData> prop.
```

---

### Follow this playbook → each deploy ships fully‑optimised pages tuned for Google’s 2025 AI‑Overview era **and** classic SERPs.
