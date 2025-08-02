# MCP Setup • solarpanels‑miltonkeynes.com

Configure Cursor’s Model Context Providers so every AI prompt has instant access to authoritative docs for Astro, Tailwind, Vercel, and Structured Data.

> **Outcome:** zero‑hallucination code generation, faster scaffolding, and SEO‑safe output.

---

## 1. What’s an MCP?

A **Model Context Provider** streams a live documentation corpus into Cursor’s context window. When you @‑mention a server (`@astro-docs find islands`), the agent queries that corpus and returns precise info.

---

## 2. Core Servers to Enable

| Tier            | MCP Name (alias)                       | URL / Source                                                                                                        | What it feeds the AI                                                       |
| --------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Must‑have**   | **Astro Docs** (`astro-docs`)          | `https://mcp.docs.astro.build/mcp`                                                                                  | Astro 5.5+ API: islands, mdx, type‑safe sessions, diagramming.             |
|                 | **Tailwind** (`tailwind-docs`)         | `https://tailwindcss-mcp.example.com`                                                                               | Utility class list, v4 config patterns, typography plugin docs.            |
|                 | **SEO / Structured‑Data** (`seo-data`) | *Proxy to* [https://developers.google.com](https://developers.google.com), [https://schema.org](https://schema.org) | LocalBusiness, Service, FAQPage schemas; Google Search Central guidelines. |
| **Highly rec.** | **Vercel** (`vercel`)                  | `https://vercel-mcp.example.com`                                                                                    | Edge functions, env vars, deployment flow, MCP‑on‑Vercel docs.             |
| *Optional*      | **Sharp Image** (`sharp-img`)          | `https://sharp-mcp.example.com`                                                                                     | Image optimisation options & examples.                                     |

> **Note:** If a public MCP URL doesn’t exist (e.g. Tailwind, Vercel), deploy a tiny proxy server using the *mcp-on-vercel* template.

---

## 3. Installation Instructions

### 3.1 UI Method

1. Open **Cursor → Settings → MCP Servers**.
2. Click **Add MCP** and paste the server URL.
3. Assign a clear alias (`astro-docs`, `tailwind-docs`, etc.).

### 3.2 `~/.cursor/mcp.json` Method

```json
{
  "mcpServers": {
    "astro-docs":    { "type": "http", "url": "https://mcp.docs.astro.build/mcp" },
    "tailwind-docs": { "type": "http", "url": "https://tailwindcss-mcp.example.com" },
    "seo-data":      { "type": "http", "url": "https://schema-mcp.yourdomain.com" },
    "vercel":        { "type": "http", "url": "https://vercel-mcp.example.com" }
  }
}
```

> Restart Cursor after editing to load the servers.

---

## 4. Verification

```txt
@astro-docs search islands architecture
@tailwind-docs find max-w utilities
@seo-data read https://developers.google.com/search/docs/appearance/structured-data/local-business
```

If each returns results within 1‑2 s, the MCP is live.

---

## 5. Usage Examples

| Goal                         | Prompt                                      |
| ---------------------------- | ------------------------------------------- |
| Generate Astro page skeleton | `@astro-docs example page solar installers` |
| Find correct Tailwind class  | `@tailwind-docs search card shadow utility` |
| Validate Service schema      | `@seo-data read Service schema.org`         |
| Edge‑function syntax         | `@vercel search edge functions runtime`     |

> Combine servers in a single prompt:
> `@astro-docs + @tailwind-docs generate hero section using brand palette`

---

## 6. Best Practices

* **Keep core four always‑enabled** (Astro, Tailwind, SEO, Vercel).
* **Toggle optional servers** (Sharp, Lighthouse) only when generating related code—saves context tokens.
* **Update monthly** – MCPs auto‑sync docs, but redeploy custom proxies after major framework releases.
* **Rate‑limit** – heavy MCP queries can throttle; keep prompts focused.

---

Now Cursor has everything it needs to write Astro 5.5+ code, apply Tailwind classes accurately, respect Google’s structured‑data rules, and deploy flawlessly to Vercel.
