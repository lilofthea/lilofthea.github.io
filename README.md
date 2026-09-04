# lilofthea.github.io

Personal portfolio site for **Aymina Yılık** — AI Engineer building production GenAI systems (agent orchestration, RAG, fine-tuning, multimodal pipelines).

Live at: [https://lilofthea.github.io](https://lilofthea.github.io)

## Sections

- **About** — bio and impact stats
- **Experience** — role history (HAVELSAN, Akbank, Teus Teknoloji)
- **Education** — degrees and certifications
- **Projects** — academic and personal builds
- **Papers** — published research (SIU 2026)
- **Products** — production systems shipped at work
- **Skills** — tools and technologies
- **Contact** — email, LinkedIn, GitHub

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies.

- `index.html` — page content
- `css/style.css` — styling, theming (light/dark via CSS variables), and responsive layout
- `js/script.js` — mobile nav toggle, theme persistence, active-link highlighting, scroll-reveal animation
- `assets/` — favicon and static assets

## Running locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Served directly by GitHub Pages from this repository's default branch — no build step required. Pushing to the branch GitHub Pages is configured to deploy from updates the live site within a minute or two.
