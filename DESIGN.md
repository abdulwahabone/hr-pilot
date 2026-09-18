---
name: "hr-pilot"
description: "A cool violet-tinted theme built on OKLCH color values with a distinct deep-purple sidebar even in light mode."

# Written by Impeccable from what the code already does. Every value below
# was read out of the repo; the prose below the frontmatter is its reading of
# them. Edit freely: once this file exists, reviews judge against it.
colors:
  background: "oklch(1 0 0)"  # background
  foreground: "oklch(0.145 0 0)"  # body text
  primary: "oklch(0.47 0.17 264)"  # primary accent
  primary-foreground: "oklch(0.985 0 0)"  # primary text
  accent: "oklch(0.94 0.03 264)"  # subtle accent
  destructive: "oklch(0.577 0.245 27.325)"  # destructive
  border: "oklch(0.922 0 0)"  # border
  ring: "oklch(0.62 0.13 264)"  # focus ring
  sidebar: "oklch(0.19 0.03 264)"  # sidebar background
  sidebar-foreground: "oklch(0.96 0.01 264)"  # sidebar text
  chart-1: "oklch(0.65 0.19 264)"  # data visualization
  chart-2: "oklch(0.72 0.15 190)"  # data visualization
  chart-3: "oklch(0.75 0.16 85)"  # data visualization
  chart-4: "oklch(0.63 0.22 25)"  # data visualization
  chart-5: "oklch(0.6 0.15 320)"  # data visualization
typography:
  body:
    fontFamily: "var(--font-sans)"
  mono:
    fontFamily: "var(--font-mono)"
rounded:
  radius-1: "calc(var(--radius) * 0.6)"
  radius-2: "calc(var(--radius) * 0.8)"
  radius-3: "0.65rem"
  radius-4: "calc(var(--radius) * 1.4)"
  radius-5: "calc(var(--radius) * 1.8)"
  radius-6: "calc(var(--radius) * 2.2)"
  radius-7: "calc(var(--radius) * 2.6)"
---

# Design system

A cool violet-tinted theme built on OKLCH color values with a distinct deep-purple sidebar even in light mode. High-contrast neutral surfaces are paired with vivid blue-violet primaries (hue 264) and fine-grained proportional border radii calculated from a 0.65rem base.

**Colors**
- --background: oklch(1 0 0) (background)
- --foreground: oklch(0.145 0 0) (body text)
- --primary: oklch(0.47 0.17 264) (primary accent)
- --primary-foreground: oklch(0.985 0 0) (primary text)
- --accent: oklch(0.94 0.03 264) (subtle accent)
- --destructive: oklch(0.577 0.245 27.325) (destructive)
- --border: oklch(0.922 0 0) (border)
- --ring: oklch(0.62 0.13 264) (focus ring)
- --sidebar: oklch(0.19 0.03 264) (sidebar background)
- --sidebar-foreground: oklch(0.96 0.01 264) (sidebar text)
- --chart-1: oklch(0.65 0.19 264) (data visualization)
- --chart-2: oklch(0.72 0.15 190) (data visualization)
- --chart-3: oklch(0.75 0.16 85) (data visualization)
- --chart-4: oklch(0.63 0.22 25) (data visualization)
- --chart-5: oklch(0.6 0.15 320) (data visualization)

**Fonts**
- var(--font-sans) (body)
- var(--font-mono) (mono)

**Radii**
- calc(var(--radius) * 0.6)
- calc(var(--radius) * 0.8)
- 0.65rem
- calc(var(--radius) * 1.4)
- calc(var(--radius) * 1.8)
- calc(var(--radius) * 2.2)
- calc(var(--radius) * 2.6)

**Conventions**
- Colors are defined as OKLCH tokens in CSS variables and mapped via Tailwind @theme inline directives.
- Dark theme is scoped using the .dark class with custom variant (&:is(.dark *)).
- Global base layer applies border-border and outline-ring/50 across all elements.
- Sidebar retains a dark purple-tinted surface (oklch(0.19 0.03 264)) even in light mode.

**Dos and donts**
- Use design tokens rather than hardcoded color values.
- Derive corner radii using multipliers of the base var(--radius) token.
