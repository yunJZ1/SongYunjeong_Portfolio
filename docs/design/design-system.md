## Global Page Layout

All portfolio pages use the same global shell.

The global shell contains:

- Sticky top header
- Header navigation (logo + portfolio links + utility links)
- Centered main content area

Do not use margin-left or padding-left on the main content to compensate for navigation.

The main content must always be centered in the viewport using max-width and mx-auto.

The old boxed sidebar pattern is deprecated and must not be used.

Homepage is the visual source of truth for all main portfolio pages.

---

## Container

Use a single reusable `Container` component with variants.

| Variant | max-width | Use for |
|---|---|---|
| `hero` | 900px | Hero text, reading prose |
| `hero-image` | 1480px | Hero image |
| `editorial` | 1480px | Section shells, wide media |
| `reading` | 900px | Long-form paragraphs |

Never stretch reading content across editorial width.

---

## Typography

Section titles: 36px semibold

Section subtitles (h3): 24px semibold

Body (reading): 17px regular

Meta / labels: 14–16px medium

Match homepage scale across all case studies.

---

## Vertical Rhythm

Section gap: 140px

Within-section gap: 40–48px

Separate sections with whitespace, not borders.

---

### Vertical Rhythm

Desktop spacing:

Hero → Summary
- 96px

Summary divider → TL;DR
- 48px

TL;DR row padding
- 24px (top/bottom)

TL;DR → Key Metrics
- 72px

Key Metrics label → metrics row
- 24px

Metric title → description
- 16px

Key Metrics → Callout
- 56px

Callout → Summary bottom divider
- 72px

Summary bottom divider → Body
- 72px

Do not use one spacing value for every Summary element.

Use different spacing tokens for:
- Group spacing
- Block spacing
- Row spacing

---

## Case Study Layout

Case Study pages use the same global shell as the homepage.

Use the same:

- Sticky header
- Header navigation
- Typography scale
- Container variants
- Vertical rhythm
- Component architecture

Case Study content is read from `docs/projects/.../content.md`. Never duplicate content in TypeScript.

### Hero

Centered hero container (900px).

- Large project title (42px — largest on page)
- Short subtitle in gray
- Metadata as keyword chips (split from Meta line)
- No hero image

### Summary

Centered reading width (900px). No TOC.

1. TL;DR — section label above content
2. Key Metrics — section label above 4-column metric row (no cards)

### Body

Starts after Summary.

Left: sticky TOC only (220px) — Background, Problem, Research, Insight, Design Direction, Outcome, What I Learned, Prototype Screens

Right: main content column (max-width 900px)

Each section in the content column:

1. Section label (## heading from markdown)
2. Section title (### heading from markdown, if present)
3. Body blocks

Never place section labels in the TOC column.

### Section order

Follow `content.md` exactly:

Background → Problem → Research → Insight → Design Direction → Outcome → What I Learned → Prototype Screens

Do not merge sections.

## Case Study Summary Layout

Case Study Summary appears between Hero and Body.

Summary contains:

1. TL;DR
2. Key Metrics
3. Callout

The Summary layout follows an editorial table structure.

### TL;DR

Desktop layout:

- Left column: section label
- Right column: content rows

Rows:

- Background
- Problem
- Approach
- Result

Each row uses a subtle horizontal divider.

### Key Metrics

Desktop layout:

- Left column: section label
- Right column: 4 metric columns

Metric columns may use subtle vertical dividers.

Metric titles should be visually strong but smaller than main section titles.

### Dividers

Use thin light-gray divider lines between major Case Study groups:

- Hero → Summary
- TL;DR → Key Metrics
- Summary → Body

Dividers should support structure, not decoration.