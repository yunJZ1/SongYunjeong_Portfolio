# Case Study Layout v2

## Goal

Rebuild the Case Study page using an editorial layout system.

The attached reference is the source of truth for:
- page hierarchy
- spacing rhythm
- layout grouping
- reading flow

Do NOT copy the visual design.
Do NOT redesign the homepage.
Do NOT rewrite markdown content.

---

# Page Architecture

The page consists of only three layout groups.

```
Hero
↓

Summary

↓

Body
```

These three groups must share one consistent centered content axis.

Do not position components independently.

---

# 01 Hero

Centered.

Order:

1. Case Study Label
2. Project Title
3. Subtitle
4. Meta Keyword Chips
5. Metadata Line

Requirements

- Hero uses one layout container.
- Do not separate title, chips and metadata into different wrappers.
- No Hero image.
- Width follows the Design System Hero container.

---

# 02 Summary

Summary is one single layout block.

Order

TL;DR

↓

Key Metrics

↓

Callout

Requirements

- TL;DR
- Key Metrics
- Callout

must share exactly the same reading width.

Do NOT create independent layouts.

Key Metrics is part of Summary.

---

# 03 Body

Body begins only after Summary.

Body layout

```
┌──────────────┬──────────────────────────────┐
│ Sticky TOC   │ Main Reading Column          │
│              │                              │
│              │ Section Label                │
│              │ Section Title                │
│              │ Paragraphs                   │
│              │ Images                       │
└──────────────┴──────────────────────────────┘
```

Left column

- Sticky TOC only
- No content
- Hidden on mobile

Right column

Every section reuses exactly the same component.

Order

Section Label

↓

Section Title

↓

Paragraphs

↓

Images

Never create special layouts for individual sections.

Background

Problem

Research

Insight

Design Direction

Outcome

What I Learned

Prototype Screens

must all reuse the same layout component.

---

# TOC

The TOC starts only when the Body starts.

It never appears beside:

- Hero
- TL;DR
- Key Metrics

Requirements

- Sticky while scrolling
- Active state updates automatically
- Click scrolls to section
- Hidden on mobile

---

# Reading Flow

The page should feel like reading an editorial article.

Reading order

Hero

↓

Summary

↓

Body

↓

Footer

The eye should never jump horizontally because of inconsistent layout containers.

---

# Source of Truth

Markdown remains the source of truth.

Do not rewrite or summarize content.

Only change layout.

---

# References

Reference images are located in:

docs/projects/case study/case 01/references/

Use them only for:

- page hierarchy
- layout grouping
- spacing rhythm
- editorial flow

Do NOT copy colors, typography, branding, or visual style.

The markdown content and design-system.md remain the source of truth.