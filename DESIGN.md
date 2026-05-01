# Design Brief — Maverick Digitals (Dark Intellix Theme)

**Purpose**: Premium dark tech AI agency portfolio with pure black background, white text, purple-to-cyan gradients, glass-morphism cards, and CSS-only animations. Minimal Intellix-style layout.

**Tone**: Dark tech luxury. Sophisticated. High contrast. Bold gradients. Premium modern aesthetic. Clean, minimal interactivity.

**Differentiation**: Pure black (#0a0a0a) background, vibrant purple (290°) to cyan (180°) gradients, glass cards with white borders, large display typography in General Sans, smooth scroll-triggered reveals, no decorative elements, focused interaction patterns.

## Color Palette

| Token          | OKLCH Value         | Usage                                      |
|---|---|---|
| Primary (Purple)| `0.68 0.22 290`     | CTAs, gradient start, interactive elements |
| Secondary (Cyan)| `0.62 0.2 180`      | Gradient end, hover states, highlights     |
| Accent (Violet) | `0.65 0.22 260`     | Secondary accents, borders                 |
| Foreground      | `0.98 0 0` (white)  | Text, all content                          |
| Background      | `0.04 0.01 0` (black) | Page base, pure black                    |
| Card            | `0.08 0.02 0`       | Glass card background, slightly elevated   |
| Muted           | `0.15 0.01 0`       | Secondary text, disabled states            |
| Border          | `0.18 0.01 0`       | Subtle dividers, 1px white borders (10%)   |

## Typography

| Role    | Font          | Weight  | Scale      | Usage                        |
|---|---|---|---|---|
| Display | General Sans  | 600–700 | 3.5–6xl    | Headlines, hero, visual impact |
| Body    | General Sans  | 400–500 | base–lg    | Paragraph text, UI labels     |
| Mono    | JetBrains Mono| 400     | sm–base    | Code, technical content       |

**Hierarchy**: Display 600–700 tight-spaced (-0.02em) headlines, Body 500 for subheads, Body 400 for body. Line-height 1.1 display / 1.6 body.

## Elevation & Depth

| Tier     | Shadow                         | Use                               |
|---|---|---|
| Subtle   | `0 1px 3px oklch(0 0 0 / 0.4)` | Minimal depth, borders            |
| SM       | `0 2px 8px oklch(0 0 0 / 0.5)` | Cards, buttons                    |
| MD       | `0 4px 16px oklch(0 0 0 / 0.6)` | Service cards, hover states       |
| LG       | `0 8px 32px oklch(0 0 0 / 0.7)` | Hero sections, overlays           |
| XL       | `0 12px 48px oklch(0 0 0 / 0.8)` | Glass-premium, key elements       |
| Glow-Cyan| Multi-layer: `0 0 24px / 0.35` + `0 0 48px / 0.15` | Active, highlights |

## Structural Zones

| Zone    | Background        | Border         | Treatment                         |
|---|---|---|---|
| Header  | `bg-background/95` + blur | `border-b` gradient | Fixed top, translucent          |
| Hero    | Gradient + grid   | none           | Purple→Cyan gradient, animated  |
| Content | `bg-background` / `bg-card` | subtle white | Glass sections, alternating    |
| Footer  | `bg-muted/40`     | `border-t` gradient | Dark compact, brand reinforcement |

## Motion & Micro-Interactions

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` smooth (default). `cubic-bezier(0.34, 1.56, 0.64, 1)` spring.

| Interaction     | Duration | Easing        | Trigger                |
|---|---|---|---|
| Scale-on-hover  | 0.3s     | smooth        | +1% scale, lift -6px   |
| Lift-on-hover   | 0.3s     | smooth        | -4px translate         |
| Glow-on-hover   | 0.3s     | smooth        | Cyan glow bloom        |
| Glow-breathe    | 3s       | ease-in-out   | Continuous pulse       |
| Scroll-reveal   | 0.65s    | cubic-bezier  | Bottom-up fade + lift   |
| Fade-in         | 0.6s     | ease-out      | Page load, entrance    |

## Glass Morphism Variants

| Variant      | Backdrop Blur | BG Opacity | Border              | Use                  |
|---|---|---|---|---|
| Glass        | 20px          | 0.7        | 1px white (10%)     | Cards, overlays      |
| Glass-strong | 32px          | 0.8        | 1px white (15%)     | Premium cards, modals |
| Glass-premium| 28px          | 0.75       | 1px white (12%) + purple inset | Hero, featured |

## Component Patterns

- **Buttons**: General Sans 500, rounded-lg, gradient-primary bg, hover `shadow-elevation-lg` + glow-cyan, press scale-95.
- **Cards**: `.glass-strong`, border white 1px, `shadow-elevation-md`, scale-on-hover, active state scale-99.
- **Service Cards**: `.glass-strong` + `.service-card-hover`, border glow on hover, cyan primary.
- **Form inputs**: `bg-input` `border-border`, focus `ring-primary`, transition-smooth.
- **Navigation**: Flex row, space-x-8, text-sm, active text-primary + gradient underline.

## Constraints & Guardrails

- ✅ Dark theme only. Pure black (#0a0a0a) background, pure white (#fff) text.
- ✅ No warm colors (cream, beige, amber, sage, navy). Only purple, cyan, violet, black, white.
- ✅ No WebGL, Three.js, heavy particles. CSS animations only.
- ✅ Glass cards: dark bg (#08-#0a), 1px white border (~10% opacity), subtle shadow.
- ✅ Always use semantic tokens: `bg-primary`, `text-foreground`, `shadow-elevation-md`.
- ✅ Micro-interactions: scale, lift, glow. No arbitrary moves from inputs/buttons.
- ✅ Typography: Display 600–700 -0.02em, body 400–500 normal. Tight display leading (1.1).
- ✅ Gradient accents sparingly: purple→cyan on CTAs, headlines, highlights only.

## Signature Details

**Hero gradient sweep**: Purple (290°) → Cyan (180°) animates across headline underline (3s linear).

**Glass-premium cards**: Subtle 1px white border, inset purple glow on bottom edge, multi-layer shadow depth.

**Staggered reveals**: Service/content grid reveals bottom-up with 60ms stagger, fade-in + translate choreography.

**Glow-breathe effect**: Cyan/purple glow pulses 3s ease-in-out on accent elements for premium mechanical feel.
