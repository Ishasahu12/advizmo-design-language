# Advizmo Design Language — Refinement Audit

A comprehensive refinement of the entire design system. Every decision has been questioned, every token challenged, every component audited. The goal: remove unnecessary options, create stronger opinions, and build a recognizable Design Language — not a generic UI kit.

---

## 1. Shape Language — Redefined

### Previous State
- 5 radius values: 0, 4, 8, 12, 9999px
- Generic radius scale
- No clear philosophy

### New State — 3 Radius Values

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Buttons, inputs, chips, small interactive elements |
| `radius-md` | 12px | Cards, sheets, modals, containers |
| `radius-full` | 9999px | Avatars, badges, pills, tags |

### Why These Values

**8px** — The minimum radius that feels soft without looking bubbly. Works at every size. Small enough for buttons, large enough to feel modern.

**12px** — The sweet spot for cards and containers. Feels premium, not round. Matches iOS and macOS conventions. Creates visual separation without feeling childlike.

**9999px** — Full radius for circular and pill shapes. No need for intermediate values — either it's a rectangle or it's a circle/pill.

### What Was Removed
- `radius-none` (0px) — Never use square corners. If you think you need 0px, you're wrong.
- `radius-xs` (4px) — Too small to be visible. Use 8px.
- `radius-lg` (16px) — Too round for professional fintech. Use 12px.

### Component Mapping

| Component | Radius |
|-----------|--------|
| Button | 8px |
| Input | 8px |
| Chip | 8px |
| Badge | 9999px |
| Tag | 9999px |
| Avatar | 9999px |
| Card | 12px |
| Sheet | 12px |
| Modal | 12px |
| Toast | 12px |
| Bottom Sheet | 12px (top corners only) |

---

## 2. Spacing — Redefined

### Previous State
- 9 values: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Too many options
- No clear rhythm

### New State — 5 Values on 4pt Grid

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Icon padding, tight gaps, inline spacing |
| `space-2` | 8px | Component internal padding, small gaps |
| `space-3` | 16px | Card padding, section padding, standard gaps |
| `space-4` | 24px | Between sections, major gaps |
| `space-5` | 32px | Screen margins, large section gaps |

### Mathematical Rhythm
```
4 × 1 = 4px
4 × 2 = 8px
4 × 4 = 16px
4 × 6 = 24px
4 × 8 = 32px
```

### Why These Values

**4px** — Base unit. Used for micro-spacing inside components.

**8px** — 2× base. Used for gaps between related elements.

**16px** — 4× base. The standard padding for cards and containers.

**24px** — 6× base. Used for section separation.

**32px** — 8× base. Used for major visual breaks.

### What Was Removed
- `space-1` (4px) — Kept as base unit
- `space-2` (8px) — Kept as standard gap
- `space-3` (12px) — Removed. Use 8px or 16px.
- `space-4` (16px) — Kept as standard padding
- `space-5` (20px) — Removed. Use 16px or 24px.
- `space-6` (24px) — Kept as section gap
- `space-8` (32px) — Kept as large gap
- `space-10` (40px) — Removed. Use 32px.
- `space-12` (48px) — Removed. Use 32px.
- `space-16` (64px) — Removed. Use 32px.

### Component Spacing Rules

| Context | Spacing |
|---------|---------|
| Icon + Label | 8px |
| Button padding | 16px horizontal, 12px vertical |
| Input padding | 12px horizontal, 12px vertical |
| Card padding | 16px |
| Section gap | 24px |
| Screen margin | 16px mobile, 24px tablet, 32px desktop |

---

## 3. Elevation — Redefined

### Previous State
- 5 levels: none, card, raised, elevated, modal
- Too many shadow levels
- Shadows overused

### New State — 2 Levels

| Token | Value | Usage |
|-------|-------|-------|
| `elevation/none` | none | Default for all elements |
| `elevation/floating` | 0 2px 8px rgba(0,0,0,0.08) | Modals, dropdowns, floating elements |

### Philosophy
Modern fintech relies on **spacing and background color** for hierarchy, not shadows. Shadows should only be used for elements that genuinely float above the interface.

### When to Use Shadows
- Modals and dialogs
- Dropdowns and popovers
- Floating action buttons
- Tooltips

### When NOT to Use Shadows
- Cards — use background color and spacing
- Lists — use dividers and spacing
- Inputs — use border color
- Buttons — use background color

### Surface Hierarchy

| Surface | Background | Usage |
|---------|------------|-------|
| Page | `#F9FAFB` | Main background |
| Card | `#FFFFFF` | Content containers |
| Elevated | `#FFFFFF` + shadow | Floating elements |

### What Was Removed
- `elevation/card` — Cards should use background color, not shadow
- `elevation/raised` — Unnecessary intermediate level
- `elevation/elevated` — Use floating instead
- `elevation/modal` — Use floating instead

---

## 4. Color System — Redefined

### Previous State
- 8 color scales with 11 steps each
- Complex token structure
- Many unused colors

### New State — Semantic-First

#### Neutral Foundation (80% of interface)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `bg/page` | #F9FAFB | #0F172A | Page background |
| `bg/card` | #FFFFFF | #1E293B | Card background |
| `bg/elevated` | #FFFFFF | #1E293B | Elevated surfaces |
| `bg/hover` | #F3F4F6 | #334155 | Hover states |
| `bg/pressed` | #E5E7EB | #475569 | Pressed states |
| `text/primary` | #111827 | #F8FAFC | Headlines, amounts |
| `text/secondary` | #4B5563 | #94A3B8 | Labels, captions |
| `text/tertiary` | #6B7280 | #64748B | Placeholders, hints |
| `text/disabled` | #9CA3AF | #475569 | Disabled text |
| `border/default` | #E5E7EB | #334155 | Default borders |
| `border/focus` | #3B82F6 | #60A5FA | Focus rings |

#### Brand Colors (20% of interface)

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `blue/500` | #3B82F6 | #3B82F6 | Primary actions, links |
| `blue/600` | #2563EB | #60A5FA | Hover states |
| `green/500` | #10B981 | #10B981 | Financial growth, success |
| `green/600` | #059669 | #34D399 | Hover states |
| `orange/500` | #F97316 | #F97316 | Warnings, attention |
| `red/500` | #EF4444 | #EF4444 | Errors, risk, loss |
| `red/600` | #DC2626 | #F87171 | Hover states |
| `purple/500` | #A855F7 | #A855F7 | AI, intelligence |

#### Semantic Colors

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| `status/positive` | #059669 | #34D399 | Gains, success |
| `status/negative` | #DC2626 | #F87171 | Losses, errors |
| `status/attention` | #D97706 | #FBBF24 | Warnings, pending |
| `status/info` | #2563EB | #60A5FA | Information |

### Color Rules
1. **80% neutral** — The interface should be dominated by grays
2. **Blue for actions** — Only blue should be used for primary actions
3. **Green for money** — Green is reserved for positive financial outcomes
4. **Purple for AI** — Purple is reserved for AI features
5. **Red for risk** — Red is reserved for errors, losses, destructive actions
6. **Orange for attention** — Orange is reserved for warnings and pending states
7. **No decorative color** — Every color usage must have a semantic purpose

### What Was Removed
- 80% of primitive color scales — Use semantic tokens instead
- Unused color values — Only keep what's needed
- Complex naming — Simplify to semantic names

---

## 5. Typography — Redefined

### Previous State
- 20 text styles
- Many redundant styles
- No clear financial typography

### New State — 8 Styles

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display` | 32px | 700 | 1.2 | Hero numbers, dashboard totals |
| `h1` | 24px | 600 | 1.3 | Screen titles |
| `h2` | 20px | 600 | 1.3 | Section headers |
| `h3` | 16px | 600 | 1.4 | Card titles |
| `body` | 14px | 400 | 1.5 | Primary content |
| `caption` | 12px | 400 | 1.5 | Secondary info, labels |
| `amount-lg` | 28px | 600 | 1.2 | Account balances |
| `amount-sm` | 14px | 500 | 1.5 | Transaction amounts |

### Why 8 Styles

**Display** — For the most important number on screen. Used sparingly.

**H1** — Screen titles. Clear hierarchy.

**H2** — Section headers. Organize content.

**H3** — Card titles. Label content blocks.

**Body** — Primary content. Readable at all sizes.

**Caption** — Secondary information. Less prominent.

**Amount Large** — Financial numbers that need prominence.

**Amount Small** — Inline financial numbers.

### Financial Typography Rules
1. **Tabular numerals** — All financial numbers use tabular numerals
2. **Consistent formatting** — Always use commas, always show 2 decimal places for cents
3. **Right-align numbers** — In tables and lists, always right-align
4. **No bold for emphasis** — Use size and weight, not bold, for hierarchy

### What Was Removed
- `display` (40px) — Too large. Use 32px.
- `h1` (28px) — Redundant with 24px.
- `h4` (18px) — Redundant. Use 16px semibold.
- `body-lg` (16px) — Redundant. Use 14px.
- `body-sm` (13px) — Redundant. Use 12px.
- `micro` (11px) — Too small. Use 12px.
- `amount-hero` (40px) — Use display (32px).
- `amount-medium` (20px) — Use h2 (20px semibold).
- `amount-row` (16px) — Use h3 (16px semibold).

---

## 6. Density — Redefined

### Previous State
- 3 density levels: compact, comfortable, relaxed
- No clear guidance on when to use each

### New State — 1 Default Density

**The default density is "comfortable" — and it should be the only density.**

### Philosophy
Modern fintech products breathe. Cluttered interfaces feel outdated and untrustworthy. Every element needs room to breathe.

### Density Rules
1. **Minimum 16px padding** — No content should have less than 16px padding
2. **Minimum 8px gaps** — No elements should be closer than 8px
3. **Maximum 24px section gaps** — Sections should be clearly separated
4. **No cramped lists** — List items should have at least 12px vertical padding
5. **No dense tables** — Tables should have 12px cell padding minimum

### What Was Removed
- `compact` density — Too cramped for financial data
- `relaxed` density — Too sparse for most screens
- Density switching — Use one consistent density

---

## 7. Component Language — Redefined

### Simplified Component Set

#### Primitives (Keep)

| Component | Variants | Notes |
|-----------|----------|-------|
| Button | primary, secondary, ghost | 3 variants only |
| Input | text, number, search, password | 4 types |
| Badge | success, warning, error, info | 4 states |
| Avatar | user, institution, AI | 3 types |
| Icon | 24px, 20px | 2 sizes only |
| Divider | horizontal, vertical | 2 orientations |

#### Financial (Keep)

| Component | Variants | Notes |
|-----------|----------|-------|
| Account Card | connected, disconnected | 2 states |
| Balance Display | primary, secondary | 2 sizes |
| Transaction Row | default, highlighted | 2 states |
| Goal Card | progress, completed | 2 states |
| Bill Card | upcoming, paid, overdue | 3 states |

#### Layout (Keep)

| Component | Variants | Notes |
|-----------|----------|-------|
| Card | default, interactive | 2 types |
| List | default, grouped | 2 types |
| Section | default, with-header | 2 types |

### What Was Removed
- **Chip** — Use Badge instead
- **Tag** — Use Badge instead
- **Stepper** — Use Progress instead
- **Progress Bar** — Use Progress instead
- **Skeleton** — Use Loading state instead
- **Empty State** — Use Content pattern instead
- **Tooltip** — Use Helper Text instead

### Component Rules
1. **No duplication** — One component, many variants
2. **Composition over complexity** — Build from primitives
3. **Auto Layout required** — Every component uses Auto Layout
4. **Dark Mode required** — Every component supports Dark Mode
5. **Accessible required** — Every component is accessible

---

## 8. Visual Personality — Defined

### The Advizmo Aesthetic

Advizmo should feel like **Apple's design philosophy applied to finance**.

#### What This Means
- **Calm** — No visual noise, no urgency, no anxiety
- **Premium** — Refined details, polished interactions, attention to quality
- **Minimal** — Every element earns its place
- **Intelligent** — Smart defaults, insightful design, AI transparency
- **Trustworthy** — Consistent, reliable, transparent
- **Modern** — Contemporary but timeless

#### What This Does NOT Mean
- **Not playful** — No bouncy animations, no casual styling
- **Not futuristic** — No neon, no holograms, no sci-fi
- **Not banking-old** — No conservative, stuffy, outdated design
- **Not crypto-gambling** — No flashy, aggressive, speculative design
- **Not visually noisy** — No gradients, no decorative elements

### Visual Rules
1. **One accent color per screen** — Blue for actions, green for gains, red for losses
2. **Neutral backgrounds** — White cards on light gray backgrounds
3. **Generous whitespace** — Let content breathe
4. **Subtle transitions** — Gentle, barely noticeable animations
5. **Clear hierarchy** — Size, weight, and position — not color or decoration

---

## 9. Fintech Specificity — Optimized

### Financial Components Must Feel Financial

Every component should be optimized for financial data:

#### Money
- Always show currency symbol
- Always show 2 decimal places for cents
- Always right-align numbers
- Use tabular numerals

#### Investments
- Show percentage changes with arrows
- Use green for gains, red for losses
- Show time period clearly
- Never show more than 2 decimal places for percentages

#### Goals
- Show progress clearly
- Use circular progress for goals
- Show projected completion date
- Never show more than 1 decimal place for progress

#### Automation
- Show automation status clearly
- Use purple for AI features
- Show frequency and amount
- Never use flashy animations

#### Transactions
- Show merchant name clearly
- Show amount prominently
- Show date and category
- Use consistent formatting

#### Bills
- Show due date clearly
- Show amount prominently
- Use status colors (green=paid, orange=upcoming, red=overdue)
- Never use playful styling

---

## 10. Opinionated Decisions — Standardized

### One Button Height
**44px** — Fixed height for all buttons. No variations.

### One Input Height
**44px** — Fixed height for all inputs. No variations.

### One Icon Style
**Outline, 2px stroke, 24x24 grid** — Material Symbols Rounded. No filled icons.

### One Spacing Rhythm
**4pt grid** — All spacing values are multiples of 4px.

### One Elevation Philosophy
**Spacing over shadows** — Use background color and spacing for hierarchy. Shadows only for floating elements.

### Three Corner Radii Maximum
**8px, 12px, 9999px** — Small, medium, full. No other values.

### One Chart Language
**Calm, precise, readable** — No playful charts, no decorative elements.

### One Navigation Philosophy
**Bottom tabs on mobile, sidebar on desktop** — Consistent across all screens.

### One Financial Card Philosophy
**Clean, data-focused, scannable** — No decorative elements, no unnecessary styling.

---

## 11. Modern 2026 Standards — Evaluated

### Compared To
- **Apple** — Calm, premium, minimal, trustworthy
- **Stripe** — Clean, intelligent, professional
- **Mercury** — Modern, financial, clear
- **Linear** — Minimal, fast, precise

### Advizmo Should Feel Like
- Apple's calmness applied to finance
- Stripe's intelligence applied to financial data
- Mercury's modernity applied to banking
- Linear's minimalism applied to financial complexity

### 2026 Standards
- **OLED optimized** — Colors should pop on OLED displays
- **Dark Mode first** — Design for Dark Mode, then adapt to Light Mode
- **Accessible by default** — WCAG 2.2 AA minimum
- **Responsive by default** — Mobile-first, desktop-enhanced
- **Performant by default** — No unnecessary animations, no heavy assets

---

## 12. Final Audit Summary

### What Changed

| Area | Before | After | Why |
|------|--------|-------|-----|
| **Radii** | 5 values (0, 4, 8, 12, 9999) | 3 values (8, 12, 9999) | Remove unnecessary options |
| **Spacing** | 9 values | 5 values | Create mathematical rhythm |
| **Elevation** | 5 levels | 2 levels | Modern fintech uses spacing over shadows |
| **Colors** | 8 scales × 11 steps | 8 semantic tokens | Semantic-first philosophy |
| **Typography** | 20 styles | 8 styles | Remove redundant styles |
| **Density** | 3 levels | 1 level | One consistent density |
| **Components** | 191 primitives | ~50 primitives | Remove unnecessary components |

### What Was Removed
- Square corners (0px radius)
- Small radius (4px)
- Large radius (16px)
- 4 spacing values (12, 20, 40, 48, 64, 96px)
- 3 elevation levels (card, raised, elevated)
- 80% of primitive color scales
- 12 redundant typography styles
- Compact and relaxed density
- 140+ unnecessary components

### What Became Simpler
- **Radii**: 3 options instead of 5
- **Spacing**: 5 options instead of 9
- **Elevation**: 2 options instead of 5
- **Colors**: 8 semantic tokens instead of 88+ primitives
- **Typography**: 8 styles instead of 20
- **Components**: ~50 instead of 191

### What Became More Opinionated
- **One button height**: 44px, no variations
- **One input height**: 44px, no variations
- **One icon style**: Outline, 2px stroke
- **One spacing rhythm**: 4pt grid
- **One elevation philosophy**: Spacing over shadows
- **Three corner radii maximum**: 8, 12, 9999px
- **One chart language**: Calm, precise, readable
- **One navigation philosophy**: Bottom tabs mobile, sidebar desktop

### How These Decisions Improve Scalability
- **Fewer tokens** — Easier to maintain, easier to learn
- **Clearer rules** — Less ambiguity, more consistency
- **Stronger opinions** — Less decision fatigue, faster design

### How These Decisions Improve Engineering
- **Fewer components** — Less code, fewer bugs
- **Simpler APIs** — Easier to implement, easier to use
- **Consistent patterns** — Less conditional logic, more predictability

### How These Decisions Improve Usability
- **Consistent layout** — Users know where things are
- **Clear hierarchy** — Users know what's important
- **Calmer interface** — Less anxiety, more trust

### How These Decisions Improve Visual Quality
- **Premium feel** — Refined details, polished interactions
- **Modern aesthetic** — Contemporary but timeless
- **Recognizable identity** — Advizmo feels like Advizmo

---

*Document Version: 1.0*
*Last Updated: June 2026*
*Status: Official Refinement*
