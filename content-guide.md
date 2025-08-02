# Content Guide • solarpanels‑miltonkeynes.com

Authoritative writing standards that every editor, copywriter, and AI agent must follow. Designed for **2025 EEAT signals**, Google’s AI‑Overview SERP, and a human‑first reading experience.

---

## 1. Brand Tone & Voice

| Attribute                    | Directive                                                                                 | Why                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **Helpful local expert**     | Use second‑person (“you”), plain English, local references (e.g. Campbell Park, MK Dons). | Builds relatability & local authority.            |
| **Data‑driven transparency** | Quote kWh yield, grant amounts, EPC ratings; cite credible sources (GOV.UK, MK Council).  | Reinforces EEAT; unique data boosts AI Overviews. |
| **Independent advisor**      | Disclose referral model: “We match you with two MCS‑certified installers …”.              | Avoids mis‑representation penalties.              |
| **Optimistic, not hype**     | Replace superlatives with facts: “Save \~£850/yr” not “Amazing savings!”.                 | Aligns with Google Helpful Content.               |

Author persona **Emily Harris — MCS‑Certified Solar Assessor** signs off guides with a two‑sentence note.

---

## 2. Heading Hierarchy Patterns

### 2.1 Money/Service Pages (`/installers`, `/battery-storage`)

```
H1  Solar Panel Installers in Milton Keynes
<strong>40‑word answer box</strong>
H2  Why Choose Us
H2  Cost & Payback
  H3 Cost table
H2  Installation Process
H2  Grants & Incentives
H2  FAQs (3 Qs → FAQ schema)
CTA block
```

### 2.2 Resource Guides (`/guides/*`)

```
H1  Keyword‑rich title
<strong>40‑word answer box</strong>
H2  TL;DR bullets
H2  Section 1 (define problem)
H2  Section 2 (step‑by‑step)
H2  Case Study Snapshot (optional)
H2  FAQs
Author bio component
```

### 2.3 Case Studies

```
H1  4 kW Solar PV in Bletchley – Case Study
Hero image + stats overlay
H2  Project Overview
H2  System Specs (table)
H2  Results after 12 months
60 s vertical video embed
Testimonial block (Review schema)
```

---

## 3. Minimum Word Counts & KW Density

| Template         | Min words     | Keyword usage                                                             |
| ---------------- | ------------- | ------------------------------------------------------------------------- |
| Money page       | **900–1 200** | Primary KW in H1 + first 100 words + once in H2 + once exact‑anchor link. |
| Resource guide   | **1 500+**    | Primary KW same as above; synonyms every 250 words.                       |
| pSEO suburb page | **650–800**   | Primary KW twice; inject unique irradiance & install data.                |
| Case study       | **400–600**   | Location KW in H1 + first paragraph + hero alt.                           |

---

## 4. Multimedia Checklist

| Asset        | Requirement                                                                                   | SEO Hook                             |
| ------------ | --------------------------------------------------------------------------------------------- | ------------------------------------ |
| **Images**   | ≥1 per 500 words · 1600×900 · AVIF/WebP · descriptive alt “solar panels on {{location}} roof” | Local relevance & image search.      |
| **Videos**   | ≤60 s vertical · WebM/MP4 · caption (VTT) · `VideoObject` schema                              | AI Overviews surfaces video answers. |
| **Diagrams** | Mermaid fenced code in MDX; Astro 5.5 renders natively                                        | Zero JS, unique visual.              |

Compress via `astro:assets` and lazy‑load below fold.

---

## 5. EEAT & Trust Elements

* **Date & “last updated”** auto‑rendered from front‑matter.
* **Author box** with SameAs links (LinkedIn) + Author schema.
* **TrustHub** badges (MCS, RECC, NICEIC) above the fold on money pages.
* **External citations** to GOV.UK, Ofgem PDFs (`rel="noopener" target="_blank"`).
* **Privacy**: GA4 only, cookie‑less mode.

---

## 6. Quality Guard‑Rails

* Flesch Reading Ease ≥60.
* Max paragraph length 120 words.
* Use bullet lists for >3 items.
* Ban boiler‑plate intros (e.g., “In today’s world…”).
* Every numeric claim backed by source or case‑study data.

---

## 7. Internal Linking Rules

| From → To               | Anchor text                          | Notes                     |
| ----------------------- | ------------------------------------ | ------------------------- |
| Home → Installers       | solar panel installers Milton Keynes | One exact match per page. |
| Installers → Suburb     | solar panels {{location}}            | Geo relevance.            |
| Guides → Home           | solar panels Milton Keynes           | Reinforces head term.     |
| Case study → Installers | MCS‑certified installers             | Proof → CTA.              |

Breadcrumb navigation auto‑generated; include `BreadcrumbList` schema.

---

## 8. Ready‑to‑Publish Checklist

* [ ] Meta title & description within length.
* [ ] 40‑word answer box present.
* [ ] Images compressed & alt‑tagged.
* [ ] ≥1 internal & ≥1 external authoritative link.
* [ ] JSON‑LD validates (Rich Results test).
* [ ] Flesch score ≥60.
* [ ] Lighthouse Performance ≥90.

---

Follow this guide and every article or case study will ship **human‑centred, EEAT‑rich content** that search engines—and real readers—value.
