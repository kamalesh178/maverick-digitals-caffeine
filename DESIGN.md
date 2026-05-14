# Design Brief — Maverick Digitals

**Purpose**: Premium white-theme digital marketing agency portfolio with sharp typography hierarchy, enhanced glass morphism, elevated depth shadows, and refined micro-interactions.

**Tone**: Maximalist tech-luxury. Bold precision. Cool, modern interactivity. Confident and deliberate. "Everyone's Going Viral Except You" with serious visual craft.

**Differentiation**: Bolder display typography (700–800 weight), enhanced glass cards with inset light borders, four-tier shadow system, cyan/gold accent refinement, scale-and-lift micro-interactions, breathing glow effects, refined spacing and hierarchy.

## Color Palette

| Token          | Light OKLCH         | Dark OKLCH          | Usage                                  |
|---|---|---|---|
| Primary        | `0.72 0.22 230`     | `0.75 0.21 232`     | CTA buttons, hero accent, interactive elements |
| Secondary      | `0.68 0.15 290`     | `0.68 0.14 285`     | Gradient pairs, hover states, section dividers |
| Accent (Gold)  | `0.75 0.12 80`      | `0.78 0.14 82`      | Highlights, badges, premium details |
| Foreground     | `0.15 0 0`          | `0.96 0 0`          | Text, primary content                  |
| Background     | `0.99 0 0`          | `0.12 0 0`          | Page base, maximizes contrast          |
| Muted          | `0.92 0 0`          | `0.2 0 0`           | Secondary text, disabled states        |
| Border         | `0.88 0 0`          | `0.25 0 0`          | Subtle dividers, card edges             |

## Typography

| Role    | Font           | Weight | Scale | Usage                        |
|---|---|---|---|---|
| Display | Space Grotesk  | 700–800 | 3.5–6xl | Headlines, hero taglines, visual impact |
| Body    | Space Grotesk  | 400–600 | base–lg | Paragraph text, UI labels, description |
| Mono    | Geist Mono     | 400–500 | sm–base | Code snippets, technical content |

**Hierarchy**: Display 700–800 tight-spaced (-0.02em) headlines, Body 600 for subheads, Body 400 for body. Line-height 1.1 display / 1.6 body.

## Elevation & Depth

| Tier           | Shadow                         | Use                               |
|---|---|---|
| Subtle         | `0 1px 3px oklch(0 0 0 / 0.08)` | Minimal depth, borders, pins      |
| SM             | `0 2px 8px oklch(0 0 0 / 0.12)` | Cards, buttons on light backgrounds |
| MD             | `0 4px 16px oklch(0 0 0 / 0.15)` | Service cards, hover states       |
| LG             | `0 8px 32px oklch(0 0 0 / 0.2)` | Hero sections, prominent overlays |
| XL (Premium)   | `0 12px 48px oklch(0 0 0 / 0.25)` | Glass-premium, key focal elements |
| Glow (Cyan)    | Multi-layer: `0 0 24px / 0.28` + `0 0 48px / 0.12` | Active states, accent highlights |
| Glow (Gold)    | Multi-layer: `0 0 24px / 0.32` + `0 0 48px / 0.14` | Premium badges, hover accents    |

## Structural Zones

| Zone    | Background             | Border          | Treatment                                    |
|---|---|---|---|
| Header  | `bg-background/95` + backdrop blur | `border-b` gradient | Translucent, fixed top, shadow on scroll |
| Hero    | `gradient-primary` + parallax | none | Animated gradient, floating particles |
| Content | `bg-background` / `bg-card` alternate | subtle border | Grid sections with alternating density |
| Footer  | `bg-muted/30` with `border-t gradient` | `border-t` cyan | Dark, compact, brand reinforcement |

## Motion & Micro-Interactions

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` smooth (default). `cubic-bezier(0.34, 1.56, 0.64, 1)` spring (playful).

| Interaction     | Duration | Easing        | Trigger           |
|---|---|---|---|
| Scale-on-hover  | 0.3s     | smooth        | Card/button hover, +4% scale |
| Lift-on-hover   | 0.3s     | smooth        | Card hover, -4px translate |
| Glow-on-hover   | 0.3s     | smooth        | Badge hover, cyan glow bloom |
| Glow-breathe    | 3s       | ease-in-out   | Accent highlights, continuous pulse |
| Scroll-reveal   | 0.65s    | cubic-bezier  | Content entrance, bottom-up fade |
| Slide-up-reveal | 0.7s     | cubic-bezier  | Card reveal, staggered 60ms |

## Glass Morphism Variants

| Variant      | Backdrop Blur | Background Opacity | Border             | Inset Light | Use                    |
|---|---|---|---|---|---|
| Glass        | 20px          | 0.82               | `0.88/0.75`        | Yes (0.5)  | Cards, overlays        |
| Glass-strong | 32px          | 0.92               | `0.88/0.85`        | Yes (0.7)  | Premium cards, modals   |
| Glass-premium| 28px          | 0.88               | `0.88/0.8`         | Yes (0.6) + cyan tint | Hero glass, key elements |

## Component Patterns

- **Buttons**: Space Grotesk 600, rounded-lg, gradient-primary bg, hover shadow-elevation-lg + glow-cyan, press scale-95.
- **Cards**: `.glass` or `.glass-strong`, border-border 1px, shadow-elevation-md, scale-on-hover, active state scale-99.
- **Service Cards**: `.glass-strong` + `.service-card-hover`, border glow on hover, lift translate-y, cyan primary.
- **Form inputs**: bg-input border-border, focus ring-primary ring-offset-2, transition-smooth.
- **Navigation**: Flex row, space-x-8, text-sm font-body, active text-primary + gradient underline.

## Constraints & Guardrails

- ✅ White theme strictly. No dark mode, no palette expansion. Cyan/gold accents refined but not expanded.
- ✅ Always use semantic tokens: `bg-primary`, `text-foreground`, `shadow-elevation-md`, `glow-cyan`.
- ✅ Glass effects use inset light borders + multi-layer glow for premium feel.
- ✅ Micro-interactions are scale, lift, or glow — no arbitrary moves. No hover movement from input boxes.
- ✅ Typography hierarchy sharp: display 700–800 -0.02em, body 400–600 normal spacing.
- ✅ Spacing refined: tight display leading (1.1), open body (1.6), density varies intentionally.

## Signature Details

**Hero gradient sweep**: Cyan → Purple primary gradient animates across headline underline (3s linear sweep).

**Glass-premium hero cards**: Inset cyan glow accent on bottom edge, multi-layer shadow depth, breathing glow animation.

**Staggered card reveals**: Service grid reveals bottom-up with 60ms stagger, scale-in + fade-in choreography.

**Gold badge pulse**: Accent badges pulse glow-breathe 3s, multi-layer gold glow for premium mechanical feel.
