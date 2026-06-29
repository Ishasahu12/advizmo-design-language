# Advizmo Design Tokens v1.0

## Phase 3: Token Architecture

**Enterprise-grade token system for iOS, Web, and Android**
**Supports Figma Variables, Swift, CSS, Tailwind, React**

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Layer 1: Primitive Tokens](#2-layer-1-primitive-tokens)
3. [Layer 2: Semantic Tokens](#3-layer-2-semantic-tokens)
4. [Layer 3: Component Tokens](#4-layer-3-component-tokens)
5. [Token Naming Convention](#5-token-naming-convention)
6. [Token Rules](#6-token-rules)
7. [Figma Variables Structure](#7-figma-variables-structure)
8. [Engineering Implementation](#8-engineering-implementation)
9. [Validation Checklist](#9-validation-checklist)

---

## 1. Architecture Overview

### Three-Layer System

```
┌─────────────────────────────────────────────┐
│  LAYER 4: Components                        │
│  Button, Card, Input, Badge, etc.           │
│  (Created in Phase 4)                       │
└──────────────────────┬──────────────────────┘
                      │ inherits from
┌──────────────────────▼──────────────────────┐
│  LAYER 3: Component Tokens                  │
│  button/background, card/padding            │
│  ❌ Never reference primitives directly      │
└──────────────────────┬──────────────────────┘
                      │ inherits from
┌──────────────────────▼──────────────────────┐
│  LAYER 2: Semantic Tokens                   │
│  action-primary, text-secondary              │
│  Purpose-driven aliases                     │
└──────────────────────┬──────────────────────┘
                      │ references
┌──────────────────────▼──────────────────────┐
│  LAYER 1: Primitive Tokens                  │
│  blue-500, space-4, radius-small            │
│  Raw values with no semantic meaning        │
└─────────────────────────────────────────────┘
```

### Token Categories

| Category | Primitive Count | Semantic Count | Purpose |
|----------|----------------|---------------|---------|
| Color | 120 | 60+ | Visual design |
| Typography | 11 styles | — | Text hierarchy |
| Spacing | 9 | — | Layout rhythm |
| Radius | 4 | — | Shape language |
| Border | 4 | — | Structure |
| Elevation | 3 | — | Depth |
| Motion | 6 | — | Animation |
| Grid | 6 | — | Layout system |

**Total Primitives: ~150**

**Total Semantic: ~80+**

**Total Component Tokens: ~200+**

---

## 2. Layer 1: Primitive Tokens

### Philosophy

Primitives are raw values. They have no semantic meaning. They are the building blocks that semantic tokens reference.

**Rules:**
- Never use primitives directly in components
- Never change a primitive's value if it's referenced by semantic tokens
- Primitives are immutable once established

---

### 2.1 Color Primitives

#### Blue (Primary Brand)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-blue-50` | #EFF6FF | Lightest backgrounds |
| `color-primitive-blue-100` | #DBEAFE | Hover backgrounds |
| `color-primitive-blue-200` | #BFDBFE | Borders (light) |
| `color-primitive-blue-300` | #93C5FD | Disabled states |
| `color-primitive-blue-400` | #60A5FA | Placeholder, icons |
| `color-primitive-blue-500` | #3B82F6 | **Base color** |
| `color-primitive-blue-600` | #2563EB | Hover state |
| `color-primitive-blue-700` | #1D4ED8 | Active/pressed |
| `color-primitive-blue-800` | #1E40AF | Dark emphasis |
| `color-primitive-blue-900` | #1E3A8A | Darkest text |
| `color-primitive-blue-950` | #172554 | Near black |

#### Green (Financial Growth)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-green-50` | #ECFDF5 | Light backgrounds |
| `color-primitive-green-100` | #D1FAE5 | Hover backgrounds |
| `color-primitive-green-200` | #A7F3D0 | Borders |
| `color-primitive-green-300` | #6EE7B7 | Disabled states |
| `color-primitive-green-400` | #34D399 | Placeholder |
| `color-primitive-green-500` | #10B981 | **Base color** |
| `color-primitive-green-600` | #059669 | Hover state |
| `color-primitive-green-700` | #047857 | Active/pressed |
| `color-primitive-green-800` | #065F46 | Dark emphasis |
| `color-primitive-green-900` | #064E3B | Darkest text |
| `color-primitive-green-950` | #022C22 | Near black |

#### Gray (Neutral)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-gray-50` | #F9FAFB | Page background |
| `color-primitive-gray-100` | #F3F4F6 | Card surface |
| `color-primitive-gray-200` | #E5E7EB | Borders |
| `color-primitive-gray-300` | #D1D5DB | Disabled states |
| `color-primitive-gray-400` | #9CA3AF | Placeholder text |
| `color-primitive-gray-500` | #6B7280 | **Base gray** |
| `color-primitive-gray-600` | #4B5563 | Hover state |
| `color-primitive-gray-700` | #374151 | Active/pressed |
| `color-primitive-gray-800` | #1F2937 | Dark emphasis |
| `color-primitive-gray-900` | #111827 | Primary text |
| `color-primitive-gray-950` | #030712 | Near black |

#### Red (Financial Loss / Error)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-red-50` | #FEF2F2 | Error backgrounds |
| `color-primitive-red-100` | #FEE2E2 | Hover backgrounds |
| `color-primitive-red-200` | #FECACA | Borders |
| `color-primitive-red-300` | #FCA5A5 | Disabled states |
| `color-primitive-red-400` | #F87171 | Placeholder |
| `color-primitive-red-500` | #EF4444 | **Base color** |
| `color-primitive-red-600` | #DC2626 | Hover state |
| `color-primitive-red-700` | #B91C1C | Active/pressed |
| `color-primitive-red-800` | #991B1B | Dark emphasis |
| `color-primitive-red-900` | #7F1D1D | Darkest text |
| `color-primitive-red-950` | #450A0A | Near black |

#### Orange (Warning)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-orange-50` | #FFF7ED | Light backgrounds |
| `color-primitive-orange-100` | #FFEDD5 | Hover backgrounds |
| `color-primitive-orange-200` | #FED7AA | Borders |
| `color-primitive-orange-300` | #FDBA74 | Disabled states |
| `color-primitive-orange-400` | #FB923C | Placeholder |
| `color-primitive-orange-500` | #F97316 | **Base color** |
| `color-primitive-orange-600` | #EA580C | Hover state |
| `color-primitive-orange-700` | #C2410C | Active/pressed |
| `color-primitive-orange-800` | #9A3412 | Dark emphasis |
| `color-primitive-orange-900` | #7C2D12 | Darkest text |
| `color-primitive-orange-950` | #431407 | Near black |

#### Yellow (Caution)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-yellow-50` | #FEFCE8 | Light backgrounds |
| `color-primitive-yellow-100` | #FEF9C3 | Hover backgrounds |
| `color-primitive-yellow-200` | #FEF08A | Borders |
| `color-primitive-yellow-300` | #FDE047 | Disabled states |
| `color-primitive-yellow-400` | #FACC15 | Placeholder |
| `color-primitive-yellow-500` | #EAB308 | **Base color** |
| `color-primitive-yellow-600` | #CA8A04 | Hover state |
| `color-primitive-yellow-700` | #A16207 | Active/pressed |
| `color-primitive-yellow-800` | #854D0E | Dark emphasis |
| `color-primitive-yellow-900` | #713F12 | Darkest text |
| `color-primitive-yellow-950` | #422006 | Near black |

#### Purple (AI)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-purple-50` | #FAF5FF | Light backgrounds |
| `color-primitive-purple-100` | #F3E8FF | Hover backgrounds |
| `color-primitive-purple-200` | #E9D5FF | Borders |
| `color-primitive-purple-300` | #D8B4FE | Disabled states |
| `color-primitive-purple-400` | #C084FC | Placeholder |
| `color-primitive-purple-500` | #A855F7 | **Base color** |
| `color-primitive-purple-600` | #9333EA | Hover state |
| `color-primitive-purple-700` | #7E22CE | Active/pressed |
| `color-primitive-purple-800` | #6B21A8 | Dark emphasis |
| `color-primitive-purple-900` | #581C87 | Darkest text |
| `color-primitive-purple-950` | #3B0764 | Near black |

#### Teal (Connected)

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-teal-50` | #F0FDFA | Light backgrounds |
| `color-primitive-teal-100` | #CCFBF1 | Hover backgrounds |
| `color-primitive-teal-200` | #99F6E4 | Borders |
| `color-primitive-teal-300` | #5EEAD4 | Disabled states |
| `color-primitive-teal-400` | #2DD4BF | Placeholder |
| `color-primitive-teal-500` | #14B8A6 | **Base color** |
| `color-primitive-teal-600` | #0D9488 | Hover state |
| `color-primitive-teal-700` | #0F766E | Active/pressed |
| `color-primitive-teal-800` | #115E59 | Dark emphasis |
| `color-primitive-teal-900` | #134E4A | Darkest text |
| `color-primitive-teal-950` | #042F2E | Near black |

#### Neutral

| Token | Value | Purpose |
|-------|-------|---------|
| `color-primitive-white` | #FFFFFF | White |
| `color-primitive-black` | #000000 | Black |
| `color-primitive-transparent` | transparent | Transparent |

---

### 2.2 Typography Primitives

| Token | Font Size | Font Weight | Line Height | Letter Spacing |
|-------|-----------|-------------|-------------|----------------|
| `typography-primitive-large-title` | 34px | 700 | 41px | 0.37px |
| `typography-primitive-title-1` | 28px | 700 | 34px | 0.36px |
| `typography-primitive-title-2` | 22px | 700 | 28px | 0.35px |
| `typography-primitive-title-3` | 20px | 600 | 25px | 0.38px |
| `typography-primitive-headline` | 17px | 600 | 22px | -0.41px |
| `typography-primitive-body` | 17px | 400 | 22px | -0.41px |
| `typography-primitive-callout` | 16px | 400 | 21px | -0.32px |
| `typography-primitive-subheadline` | 15px | 400 | 20px | -0.24px |
| `typography-primitive-footnote` | 13px | 400 | 18px | -0.08px |
| `typography-primitive-caption-1` | 12px | 400 | 16px | 0px |
| `typography-primitive-caption-2` | 11px | 400 | 13px | 0.07px |

---

### 2.3 Spacing Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `spacing-primitive-1` | 4px | Micro gaps |
| `spacing-primitive-2` | 8px | Default spacing |
| `spacing-primitive-3` | 12px | Comfortable spacing |
| `spacing-primitive-4` | 16px | Standard spacing |
| `spacing-primitive-6` | 24px | Section spacing |
| `spacing-primitive-8` | 32px | Large gaps |
| `spacing-primitive-12` | 48px | XL spacing |
| `spacing-primitive-16` | 64px | 2XL spacing |
| `spacing-primitive-24` | 96px | 3XL spacing |

---

### 2.4 Radius Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `radius-primitive-none` | 0px | No radius |
| `radius-primitive-small` | 8px | Small elements |
| `radius-primitive-medium` | 12px | Medium elements |
| `radius-primitive-full` | 9999px | Full circle |

---

### 2.5 Border Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `border-primitive-default` | 1px | Default border |
| `border-primitive-strong` | 2px | Emphasis border |
| `border-primitive-focus` | 2px | Focus ring |
| `border-primitive-disabled` | 1px | Disabled border |

---

### 2.6 Elevation Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `elevation-primitive-none` | none | No shadow |
| `elevation-primitive-raised` | 0 1px 3px rgba(0,0,0,0.08) | Subtle lift |
| `elevation-primitive-floating` | 0 4px 12px rgba(0,0,0,0.12) | Modal lift |

---

### 2.7 Motion Primitives

#### Duration

| Token | Value | Purpose |
|-------|-------|---------|
| `motion-duration-primitive-micro` | 100ms | Toggle, press |
| `motion-duration-primitive-fast` | 150ms | Quick feedback |
| `motion-duration-primitive-normal` | 250ms | Standard transitions |
| `motion-duration-primitive-slow` | 350ms | Page transitions |
| `motion-duration-primitive-slower` | 500ms | Complex animations |

#### Easing

| Token | Value | Purpose |
|-------|-------|---------|
| `motion-easing-primitive-standard` | cubic-bezier(0.25, 0.1, 0.25, 1) | Default |
| `motion-easing-primitive-enter` | cubic-bezier(0, 0, 0.2, 1) | Elements entering |
| `motion-easing-primitive-exit` | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |
| `motion-easing-primitive-linear` | linear | Progress indicators |

#### Motion Token Examples

| Token | Value |
|-------|-------|
| `motion-primitive-fade-in` | 250ms ease-out |
| `motion-primitive-fade-out` | 150ms ease-out |
| `motion-primitive-slide-up` | 300ms ease-out |
| `motion-primitive-slide-down` | 200ms ease-out |

---

### 2.8 Grid Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `grid-primitive-margin-mobile` | 16px | Mobile margins |
| `grid-primitive-margin-tablet` | 24px | Tablet margins |
| `grid-primitive-margin-desktop` | 48px | Desktop margins |
| `grid-primitive-gutter-mobile` | 16px | Mobile gutters |
| `grid-primitive-gutter-tablet` | 20px | Tablet gutters |
| `grid-primitive-gutter-desktop` | 24px | Desktop gutters |

---

### 2.9 Breakpoint Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `breakpoint-primitive-sm` | 640px | Small screens |
| `breakpoint-primitive-md` | 768px | Medium screens |
| `breakpoint-primitive-lg` | 1024px | Large screens |
| `breakpoint-primitive-xl` | 1280px | Extra large |
| `breakpoint-primitive-2xl` | 1536px | 2X large |

---

### 2.10 Z-Index Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `zindex-primitive-default` | 0 | Default |
| `zindex-primitive-raised` | 10 | Elevated elements |
| `zindex-primitive-dropdown` | 100 | Dropdowns |
| `zindex-primitive-sticky` | 200 | Sticky headers |
| `zindex-primitive-modal` | 500 | Modals |
| `zindex-primitive-toast` | 600 | Toasts |
| `zindex-primitive-tooltip` | 700 | Tooltips |

---

### 2.11 Blur Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `blur-primitive-none` | none | No blur |
| `blur-primitive-small` | 8px | Subtle blur |
| `blur-primitive-medium` | 16px | Modal backdrop |
| `blur-primitive-large` | 24px | Heavy blur |

---

### 2.12 Icon Primitives

| Token | Value | Purpose |
|-------|-------|---------|
| `icon-primitive-size-16` | 16px | Compact icons |
| `icon-primitive-size-20` | 20px | Small icons |
| `icon-primitive-size-24` | 24px | Standard icons |
| `icon-primitive-size-28` | 28px | Large icons |
| `icon-primitive-size-32` | 32px | XL icons |
| `icon-primitive-stroke` | 2px | Stroke width |

---

## 3. Layer 2: Semantic Tokens

### Philosophy

Semantic tokens describe purpose, not appearance. They are purpose-driven aliases to primitives.

**Rules:**
- Semantic tokens reference primitives only
- Semantic tokens never reference other semantic tokens
- Semantic tokens are the highest-level abstraction components should reference

---

### 3.1 Text Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `text-primary` | gray-900 | Primary content |
| `text-secondary` | gray-500 | Secondary content |
| `text-tertiary` | gray-400 | Hints, placeholders |
| `text-disabled` | gray-300 | Disabled text |
| `text-inverse` | white | Text on dark |
| `text-link` | blue-600 | Link text |
| `text-link-hover` | blue-700 | Link hover |
| `text-positive` | green-700 | Positive text |
| `text-negative` | red-700 | Negative text |
| `text-warning` | orange-700 | Warning text |
| `text-ai` | purple-600 | AI-related text |
| `text-on-color` | white | Text on colored bg |
| `text-on-color-subtle` | blue-50 | Text on blue bg |

---

### 3.2 Background Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `background-primary` | gray-50 | Page background |
| `background-secondary` | gray-100 | Secondary bg |
| `background-tertiary` | gray-200 | Tertiary bg |
| `background-brand` | blue-600 | Brand bg |
| `background-brand-hover` | blue-700 | Brand bg hover |
| `background-positive` | green-50 | Success bg |
| `background-warning` | orange-50 | Warning bg |
| `background-negative` | red-50 | Error bg |
| `background-ai` | purple-50 | AI bg |
| `background-white` | white | White bg |

---

### 3.3 Surface Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `surface-default` | white | Default surface |
| `surface-secondary` | gray-100 | Secondary surface |
| `surface-tertiary` | gray-200 | Tertiary surface |
| `surface-elevated` | white | Elevated surface |
| `surface-selected` | blue-50 | Selected surface |
| `surface-disabled` | gray-100 | Disabled surface |
| `surface-brand` | blue-600 | Brand surface |
| `surface-ai` | purple-100 | AI surface |
| `surface-overlay` | black-50 | Overlay surface |

---

### 3.4 Border Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `border-default` | gray-200 | Default border |
| `border-strong` | gray-400 | Emphasis border |
| `border-focus` | blue-500 | Focus ring |
| `border-disabled` | gray-200 | Disabled border |
| `border-positive` | green-300 | Positive border |
| `border-negative` | red-300 | Negative border |
| `border-warning` | orange-300 | Warning border |
| `border-brand` | blue-300 | Brand border |

---

### 3.5 Divider Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `divider-default` | gray-200 | Default divider |
| `divider-strong` | gray-300 | Strong divider |

---

### 3.6 Action Semantic Tokens

#### Primary Action

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `action-primary` | blue-600 | Primary action bg |
| `action-primary-hover` | blue-700 | Primary hover |
| `action-primary-pressed` | blue-800 | Primary pressed |
| `action-primary-disabled` | gray-300 | Primary disabled |
| `action-primary-text` | white | Primary text |
| `action-primary-text-disabled` | gray-500 | Primary disabled text |

#### Secondary Action

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `action-secondary` | gray-100 | Secondary bg |
| `action-secondary-hover` | gray-200 | Secondary hover |
| `action-secondary-pressed` | gray-300 | Secondary pressed |
| `action-secondary-border` | gray-300 | Secondary border |
| `action-secondary-text` | gray-700 | Secondary text |
| `action-secondary-text-disabled` | gray-400 | Secondary disabled text |

#### Destructive Action

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `action-destructive` | red-600 | Destructive bg |
| `action-destructive-hover` | red-700 | Destructive hover |
| `action-destructive-pressed` | red-800 | Destructive pressed |
| `action-destructive-disabled` | gray-300 | Destructive disabled |
| `action-destructive-text` | white | Destructive text |

#### Ghost Action

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `action-ghost` | transparent | Ghost bg |
| `action-ghost-hover` | gray-100 | Ghost hover |
| `action-ghost-pressed` | gray-200 | Ghost pressed |
| `action-ghost-text` | blue-600 | Ghost text |
| `action-ghost-text-hover` | blue-700 | Ghost text hover |

---

### 3.7 Fintech Semantic Tokens

#### Financial State

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-cash-available` | green-600 | Available cash |
| `fintech-cash-reserved` | gray-500 | Reserved cash |
| `fintech-safe-to-invest` | green-600 | Investment readiness |
| `fintech-investment-growth` | green-600 | Portfolio gains |
| `fintech-investment-loss` | red-600 | Portfolio losses |
| `fintech-portfolio` | blue-600 | Portfolio section |
| `fintech-net-worth` | gray-900 | Net worth display |
| `fintech-tax-saving` | green-600 | Tax benefits |

#### Account State

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-account-connected` | teal-500 | Connected account |
| `fintech-account-disconnected` | gray-400 | Disconnected |
| `fintech-account-syncing` | teal-400 | Syncing state |

#### Bill & Transfer

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-upcoming-bills` | orange-500 | Bill reminders |
| `fintech-pending-transfer` | yellow-500 | Pending transfer |

#### Automation

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-automation-enabled` | green-600 | Automation on |
| `fintech-automation-disabled` | gray-400 | Automation off |

#### Risk

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-risk-low` | green-500 | Low risk |
| `fintech-risk-medium` | orange-500 | Medium risk |
| `fintech-risk-high` | red-500 | High risk |

#### Goals

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-goal-achieved` | green-600 | Goal reached |
| `fintech-goal-progress` | blue-600 | Goal in progress |
| `fintech-goal-incomplete` | gray-400 | Goal not reached |

#### AI

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `fintech-ai-recommendation` | purple-500 | AI rec |
| `fintech-ai-warning` | orange-500 | AI warning |
| `fintech-ai-success` | green-600 | AI success |
| `fintech-ai-neutral` | gray-500 | AI neutral |

---

### 3.8 Chart Semantic Tokens

| Token | Primitive Reference | Purpose |
|-------|---------------------|---------|
| `chart-positive` | green-500 | Positive data |
| `chart-negative` | red-500 | Negative data |
| `chart-neutral` | gray-400 | Neutral data |
| `chart-goal` | blue-500 | Goal line |
| `chart-comparison` | purple-400 | Comparison |
| `chart-forecast` | teal-400 | Forecast |
| `chart-primary` | blue-500 | Primary series |
| `chart-secondary` | green-400 | Secondary series |
| `chart-tertiary` | orange-400 | Tertiary series |
| `chart-grid` | gray-200 | Grid lines |
| `chart-axis` | gray-400 | Axis labels |
| `chart-tooltip-bg` | gray-800 | Tooltip bg |
| `chart-tooltip-text` | white | Tooltip text |
| `chart-background` | transparent | Chart bg |

---

## 4. Layer 3: Component Tokens

### Philosophy

Component tokens are element-specific. They reference semantic tokens only. They define the building blocks of components.

**Rules:**
- Component tokens reference semantic tokens only
- Components reference component tokens
- Never reference primitives or semantic tokens directly in components

---

### 4.1 Button Tokens

#### Button Base

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `button-font-family` | Inter | Font family |
| `button-font-weight` | 600 | Font weight |
| `button-border-radius` | radius-small (8px) | Border radius |
| `button-min-width` | 44px | Min touch width |
| `button-min-height` | 44px | Min touch height |

#### Button Primary

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `button-primary-background` | action-primary | Background |
| `button-primary-background-hover` | action-primary-hover | Hover bg |
| `button-primary-background-pressed` | action-primary-pressed | Pressed bg |
| `button-primary-background-disabled` | action-primary-disabled | Disabled bg |
| `button-primary-text` | text-on-color | Text color |
| `button-primary-text-disabled` | action-primary-text-disabled | Disabled text |
| `button-primary-padding-x` | spacing-primitive-4 (16px) | Horizontal padding |
| `button-primary-padding-y` | spacing-primitive-3 (12px) | Vertical padding |

#### Button Secondary

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `button-secondary-background` | action-secondary | Background |
| `button-secondary-background-hover` | action-secondary-hover | Hover bg |
| `button-secondary-background-pressed` | action-secondary-pressed | Pressed bg |
| `button-secondary-border` | action-secondary-border | Border |
| `button-secondary-text` | action-secondary-text | Text |
| `button-secondary-text-disabled` | action-secondary-text-disabled | Disabled text |
| `button-secondary-padding-x` | spacing-primitive-4 (16px) | Horizontal padding |
| `button-secondary-padding-y` | spacing-primitive-3 (12px) | Vertical padding |

#### Button Destructive

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `button-destructive-background` | action-destructive | Background |
| `button-destructive-background-hover` | action-destructive-hover | Hover bg |
| `button-destructive-background-pressed` | action-destructive-pressed | Pressed bg |
| `button-destructive-background-disabled` | action-destructive-disabled | Disabled bg |
| `button-destructive-text` | text-on-color | Text |
| `button-destructive-text-disabled` | action-destructive-text-disabled | Disabled text |
| `button-destructive-padding-x` | spacing-primitive-4 (16px) | Horizontal padding |
| `button-destructive-padding-y` | spacing-primitive-3 (12px) | Vertical padding |

#### Button Ghost

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `button-ghost-background` | action-ghost | Background |
| `button-ghost-background-hover` | action-ghost-hover | Hover bg |
| `button-ghost-background-pressed` | action-ghost-pressed | Pressed bg |
| `button-ghost-text` | action-ghost-text | Text |
| `button-ghost-text-hover` | action-ghost-text-hover | Hover text |
| `button-ghost-padding-x` | spacing-primitive-4 (16px) | Horizontal padding |
| `button-ghost-padding-y` | spacing-primitive-3 (12px) | Vertical padding |

#### Button Size Small

| Token | Value | Purpose |
|-------|-------|---------|
| `button-small-min-height` | 32px | Small height |
| `button-small-padding-x` | 12px | Horizontal padding |
| `button-small-padding-y` | 6px | Vertical padding |
| `button-small-font-size` | 14px | Font size |

#### Button Size Medium

| Token | Value | Purpose |
|-------|-------|---------|
| `button-medium-min-height` | 44px | Medium height |
| `button-medium-padding-x` | 16px | Horizontal padding |
| `button-medium-padding-y` | 12px | Vertical padding |
| `button-medium-font-size` | 16px | Font size |

#### Button Size Large

| Token | Value | Purpose |
|-------|-------|---------|
| `button-large-min-height` | 52px | Large height |
| `button-large-padding-x` | 24px | Horizontal padding |
| `button-large-padding-y` | 16px | Vertical padding |
| `button-large-font-size` | 18px | Font size |

---

### 4.2 Input Tokens

#### Input Base

| Token | Value | Purpose |
|-------|-------|---------|
| `input-font-family` | Inter | Font family |
| `input-font-size` | 16px | Font size |
| `input-font-weight` | 400 | Font weight |
| `input-border-radius` | 8px | Border radius |
| `input-min-height` | 44px | Min height |
| `input-border-width` | 1px | Border width |
| `input-focus-ring-width` | 2px | Focus ring |
| `input-focus-ring-offset` | 2px | Focus ring offset |

#### Input State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `input-background` | surface-default | Background |
| `input-background-disabled` | surface-disabled | Disabled bg |
| `input-border` | border-default | Default border |
| `input-border-hover` | gray-400 | Hover border |
| `input-border-focus` | border-focus | Focus border |
| `input-border-error` | border-negative | Error border |
| `input-border-disabled` | border-disabled | Disabled border |
| `input-placeholder` | text-tertiary | Placeholder |
| `input-text` | text-primary | Text |
| `input-text-disabled` | text-disabled | Disabled text |
| `input-label` | text-secondary | Label |
| `input-helper` | text-tertiary | Helper text |
| `input-error` | text-negative | Error text |

#### Input Padding

| Token | Value | Purpose |
|-------|-------|---------|
| `input-padding-x` | 12px | Horizontal padding |
| `input-padding-y` | 10px | Vertical padding |
| `input-padding-label` | 8px | Label spacing |

---

### 4.3 Card Tokens

#### Card Base

| Token | Value | Purpose |
|-------|-------|---------|
| `card-border-radius` | 12px | Border radius |
| `card-padding` | 16px | Padding |
| `card-padding-compact` | 12px | Compact padding |

#### Card State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `card-background` | surface-default | Background |
| `card-border` | border-default | Border |
| `card-shadow-none` | elevation-primitive-none | No shadow |
| `card-shadow-raised` | elevation-primitive-raised | Raised shadow |
| `card-shadow-floating` | elevation-primitive-floating | Floating shadow |

#### Card Variants

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `card-default-background` | surface-default | Default bg |
| `card-default-border` | border-default | Default border |
| `card-default-shadow` | elevation-none | Default shadow |
| `card-elevated-background` | surface-elevated | Elevated bg |
| `card-elevated-border` | none | No border |
| `card-elevated-shadow` | elevation-raised | Elevated shadow |
| `card-surface-background` | surface-secondary | Surface bg |
| `card-surface-border` | border-default | Surface border |
| `card-surface-shadow` | elevation-none | Surface shadow |

---

### 4.4 Badge Tokens

#### Badge Base

| Token | Value | Purpose |
|-------|-------|---------|
| `badge-border-radius` | 9999px | Full radius |
| `badge-font-weight` | 500 | Font weight |
| `badge-padding-x` | 8px | Horizontal padding |
| `badge-padding-y` | 4px | Vertical padding |

#### Badge Status

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `badge-status-background` | background-positive | Status bg |
| `badge-status-text` | text-positive | Status text |
| `badge-count-background` | gray-600 | Count bg |
| `badge-count-text` | text-inverse | Count text |
| `badge-label-background` | background-secondary | Label bg |
| `badge-label-text` | text-secondary | Label text |

#### Badge Size

| Token | Value | Purpose |
|-------|-------|---------|
| `badge-small-height` | 20px | Small height |
| `badge-small-font-size` | 11px | Small font |
| `badge-medium-height` | 24px | Medium height |
| `badge-medium-font-size` | 12px | Medium font |

---

### 4.5 Navigation Tokens

#### Navigation Bar

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `navbar-background` | surface-default | Background |
| `navbar-border` | border-default | Border |
| `navbar-title` | text-primary | Title |
| `navbar-title-weight` | 600 | Title weight |
| `navbar-height` | 44px | Height |
| `navbar-padding-x` | 16px | Horizontal padding |

#### Tab Bar

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `tabbar-background` | surface-default | Background |
| `tabbar-border` | border-default | Border |
| `tabbar-item-active` | action-primary | Active item |
| `tabbar-item-inactive` | text-tertiary | Inactive item |
| `tabbar-height` | 49px | iOS standard |
| `tabbar-padding-x` | 8px | Item padding |

#### Bottom Tab

| Token | Value | Purpose |
|-------|-------|---------|
| `bottomtab-height` | 83px | With safe area |
| `bottomtab-icon-size` | 24px | Icon size |
| `bottomtab-label-size` | 10px | Label size |

---

### 4.6 Sheet Tokens

#### Sheet Base

| Token | Value | Purpose |
|-------|-------|---------|
| `sheet-border-radius` | 12px | Top corners |
| `sheet-handle-width` | 36px | Handle |
| `sheet-handle-height` | 5px | Handle height |
| `sheet-handle-radius` | 2.5px | Handle radius |

#### Sheet State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `sheet-background` | surface-elevated | Background |
| `sheet-backdrop` | black-40 | Backdrop |
| `sheet-handle` | gray-300 | Handle color |

#### Sheet Variants

| Token | Value | Purpose |
|-------|-------|---------|
| `sheet-half-max-height` | 50% | Half sheet |
| `sheet-three-quarter-max-height` | 75% | 3/4 sheet |
| `sheet-full-border-radius` | 0px | Full sheet |

---

### 4.7 Dialog Tokens

#### Dialog Base

| Token | Value | Purpose |
|-------|-------|---------|
| `dialog-border-radius` | 12px | Border radius |
| `dialog-padding` | 24px | Padding |
| `dialog-title-size` | 20px | Title size |
| `dialog-content-size` | 16px | Content size |

#### Dialog State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `dialog-background` | surface-elevated | Background |
| `dialog-backdrop` | black-50 | Backdrop |
| `dialog-title` | text-primary | Title |
| `dialog-content` | text-secondary | Content |
| `dialog-shadow` | elevation-floating | Shadow |

---

### 4.8 Alert Tokens

#### Alert Base

| Token | Value | Purpose |
|-------|-------|---------|
| `alert-border-radius` | 8px | Border radius |
| `alert-padding` | 12px | Padding |
| `alert-icon-size` | 20px | Icon size |

#### Alert Variants

| Token | Semantic References | Purpose |
|-------|---------------------|---------|
| `alert-information-background` | background-secondary | Info bg |
| `alert-information-border` | border-default | Info border |
| `alert-information-icon` | text-link | Info icon |
| `alert-success-background` | background-positive | Success bg |
| `alert-success-border` | green-200 | Success border |
| `alert-success-icon` | text-positive | Success icon |
| `alert-warning-background` | background-warning | Warning bg |
| `alert-warning-border` | orange-200 | Warning border |
| `alert-warning-icon` | text-warning | Warning icon |
| `alert-error-background` | background-negative | Error bg |
| `alert-error-border` | red-200 | Error border |
| `alert-error-icon` | text-negative | Error icon |

---

### 4.9 Toast Tokens

#### Toast Base

| Token | Value | Purpose |
|-------|-------|---------|
| `toast-border-radius` | 8px | Border radius |
| `toast-padding` | 12px | Padding |
| `toast-max-width` | 400px | Max width |
| `toast-font-size` | 14px | Font size |

#### Toast State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `toast-background` | gray-800 | Background |
| `toast-text` | white | Text |
| `toast-action` | blue-400 | Action text |
| `toast-shadow` | elevation-floating | Shadow |

---

### 4.10 Progress Tokens

#### Progress Base

| Token | Value | Purpose |
|-------|-------|---------|
| `progress-height` | 4px | Track height |
| `progress-radius` | 2px | Track radius |
| `progress-icon-size` | 24px | Circular size |

#### Progress State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `progress-track` | gray-200 | Track color |
| `progress-indicator` | action-primary | Indicator |
| `progress-indicator-positive` | positive | Positive |
| `progress-indicator-negative` | negative | Negative |

---

### 4.11 Avatar Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `avatar-small-size` | 32px | Small avatar |
| `avatar-medium-size` | 40px | Medium avatar |
| `avatar-large-size` | 56px | Large avatar |
| `avatar-xl-size` | 80px | XL avatar |
| `avatar-border-radius` | 9999px | Full circle |
| `avatar-font-weight` | 600 | Initials weight |

---

### 4.12 Divider Tokens

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `divider-color` | divider-default | Divider color |
| `divider-thickness` | 1px | Thickness |

---

### 4.13 ListItem Tokens

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `listitem-background` | surface-default | Background |
| `listitem-background-hover` | surface-secondary | Hover bg |
| `listitem-background-pressed` | surface-tertiary | Pressed bg |
| `listitem-border` | border-default | Border |
| `listitem-padding-x` | spacing-primitive-4 (16px) | Horizontal |
| `listitem-padding-y` | spacing-primitive-3 (12px) | Vertical |
| `listitem-min-height` | 44px | Min height |

---

### 4.14 Switch Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `switch-width` | 51px | Width |
| `switch-height` | 31px | Height |
| `switch-thumb-size` | 27px | Thumb size |
| `switch-border-radius` | 16px | Radius |

#### Switch State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `switch-track-off` | gray-300 | Off track |
| `switch-track-on` | action-primary | On track |
| `switch-thumb` | white | Thumb |
| `switch-disabled` | gray-200 | Disabled |

---

### 4.15 Tooltip Tokens

| Token | Value | Purpose |
|-------|-------|---------|
| `tooltip-padding-x` | 8px | Horizontal |
| `tooltip-padding-y` | 4px | Vertical |
| `tooltip-border-radius` | 4px | Radius |
| `tooltip-font-size` | 12px | Font size |
| `tooltip-arrow-size` | 6px | Arrow |

#### Tooltip State

| Token | Semantic Reference | Purpose |
|-------|---------------------|---------|
| `tooltip-background` | gray-800 | Background |
| `tooltip-text` | white | Text |
| `tooltip-shadow` | elevation-raised | Shadow |

---

## 5. Token Naming Convention

### Hierarchy

```
Category / Subcategory / Item / Variant / State
```

### Category Types

| Category | Abbreviation | Examples |
|----------|--------------|----------|
| Color | color | color/text/primary |
| Typography | typography | typography/body |
| Spacing | spacing | spacing/4 |
| Radius | radius | radius/small |
| Border | border | border/default |
| Elevation | elevation | elevation/raised |
| Motion | motion | motion/duration/fast |
| Icon | icon | icon/size/24 |

### Naming Rules

1. **Use full words.** Never abbreviate.
   - ✅ `color/text/primary`
   - ❌ `color/txt/prim`

2. **Use lowercase with slashes.** Never camelCase.
   - ✅ `button/primary/background`
   - ❌ `buttonPrimaryBackground`

3. **Be consistent.** Same pattern everywhere.
   - ✅ `button/primary/background`
   - ✅ `button/secondary/background`
   - ❌ `button/primary/bg`

4. **Be predictable.** Name matches function.
   - ✅ `action/primary`
   - ✅ `action/destructive`

5. **Use numbers for scales.**
   - ✅ `spacing/4`
   - ✅ `radius/small`

### Platform Naming

| Platform | Format | Example |
|---------|--------|---------|
| Swift | camelCase with dots | `Color.Text.primary` |
| CSS | kebab-case | `--color-text-primary` |
| Tailwind | dot notation | `text-primary` |
| React | camelCase | `tokens.color.text.primary` |

---

## 6. Token Rules

### Immutable Rules

1. **Components never use primitive tokens directly.**
   - ❌ `background: #3B82F6`
   - ✅ `background: action-primary`

2. **Components never create custom colors.**
   - ❌ `background: custom-green`
   - ✅ `background: positive`

3. **Buttons never define their own radius.**
   - ❌ `border-radius: 12px`
   - ✅ `border-radius: button-radius`

4. **Cards never define their own spacing.**
   - ❌ `padding: 20px`
   - ✅ `padding: card-padding`

5. **Never duplicate tokens.**
   - ❌ `text-primary` AND `primary-text`
   - ✅ `text-primary` only

6. **Never create exceptions.**
   - ❌ "This one button can be 16px"
   - ✅ All buttons follow button tokens

7. **Never create component-specific colors if semantic colors exist.**
   - ❌ `card-blue-background`
   - ✅ `card-background` with brand semantic

8. **Token names describe purpose, not appearance.**
   - ✅ `text-secondary`
   - ❌ `text-gray-500`

### When to Create New Tokens

**Create a new semantic token when:**
- You need a purpose that doesn't exist
- The semantic meaning is genuinely different
- It will be used in 3+ components

**Create a new component token when:**
- You need an element-specific value
- The value is reused in the component
- The semantic token doesn't provide enough specificity

**Never create for:**
- One-time use
- "Just in case"
- Flexibility that won't be used

---

## 7. Figma Variables Structure

### Collection Structure

```
Advizmo Design System
├── Primitive (Collection)
│   ├── Color
│   │   ├── Blue
│   │   │   ├── 50: #EFF6FF
│   │   │   ├── 100: #DBEAFE
│   │   │   ├── ...
│   │   │   └── 950: #172554
│   │   ├── Green
│   │   ├── Gray
│   │   └── ...
│   ├── Typography
│   │   ├── Large Title
│   │   ├── Title 1
│   │   └── ...
│   ├── Spacing
│   │   ├── 1: 4
│   │   ├── 2: 8
│   │   └── ...
│   ├── Radius
│   ├── Border
│   ├── Elevation
│   └── Motion
│
├── Semantic (Collection)
│   ├── Text
│   │   ├── Primary
│   │   ├── Secondary
│   │   └── ...
│   ├── Background
│   ├── Surface
│   ├── Border
│   ├── Action
│   ├── Fintech
│   └── Chart
│
└── Component (Collection)
    ├── Button
    │   ├── Primary
    │   │   ├── Background
    │   │   ├── Text
    │   │   └── Padding
    │   ├── Secondary
    │   └── ...
    ├── Input
    ├── Card
    └── ...
```

### Mode Structure

| Mode | Purpose |
|------|---------|
| Light | Default light theme |
| Dark | Dark theme (future) |
| High Contrast | Accessibility (future) |

### Variable Grouping

```
Group: Color/Semantic/Text
├── Primary: {Color/Primitive/Gray/900}
├── Secondary: {Color/Primitive/Gray/500}
└── ...

Group: Color/Semantic/Action
├── Primary: {Color/Primitive/Blue/600}
├── Primary Hover: {Color/Primitive/Blue/700}
└── ...
```

---

## 8. Engineering Implementation

### Swift Implementation

#### Color Tokens

```swift
// Primitive Colors
enum ColorPrimitive {
    static let blue50 = Color(hex: "#EFF6FF")
    static let blue500 = Color(hex: "#3B82F6")
    // ...
}

// Semantic Colors
enum SemanticColor {
    enum Text {
        static let primary = ColorPrimitive.gray900
        static let secondary = ColorPrimitive.gray500
        static let disabled = ColorPrimitive.gray300
    }

    enum Action {
        static let primary = ColorPrimitive.blue600
        static let destructive = ColorPrimitive.red600
    }

    enum Background {
        static let primary = ColorPrimitive.gray50
        static let surface = Color(hex: "#FFFFFF")
    }
}

// Component Tokens
enum ButtonToken {
    enum Primary {
        static let background = SemanticColor.Action.primary
        static let text = Color(hex: "#FFFFFF")
        static let paddingX: CGFloat = 16
        static let paddingY: CGFloat = 12
        static let cornerRadius: CGFloat = 8
    }
}
```

#### Typography Tokens

```swift
enum TypographyToken {
    static let largeTitle = Font.system(size: 34, weight: .bold)
    static let title1 = Font.system(size: 28, weight: .bold)
    static let title2 = Font.system(size: 22, weight: .bold)
    static let title3 = Font.system(size: 20, weight: .semibold)
    static let headline = Font.system(size: 17, weight: .semibold)
    static let body = Font.system(size: 17, weight: .regular)
    static let callout = Font.system(size: 16, weight: .regular)
    static let subheadline = Font.system(size: 15, weight: .regular)
    static let footnote = Font.system(size: 13, weight: .regular)
    static let caption1 = Font.system(size: 12, weight: .regular)
    static let caption2 = Font.system(size: 11, weight: .regular)
}
```

#### Spacing Tokens

```swift
enum SpacingToken {
    static let space1: CGFloat = 4
    static let space2: CGFloat = 8
    static let space3: CGFloat = 12
    static let space4: CGFloat = 16
    static let space6: CGFloat = 24
    static let space8: CGFloat = 32
    static let space12: CGFloat = 48
    static let space16: CGFloat = 64
}
```

#### Motion Tokens

```swift
enum MotionToken {
    enum Duration {
        static let micro: Double = 100
        static let fast: Double = 150
        static let normal: Double = 250
        static let slow: Double = 350
        static let slower: Double = 500
    }

    enum Easing {
        static let standard = Animation.easeInOut
        static let enter = Animation.easeOut
        static let exit = Animation.easeIn
        static let linear = Animation.linear
    }
}
```

---

### CSS Implementation

```css
:root {
  /* Primitive Colors */
  --color-primitive-blue-50: #EFF6FF;
  --color-primitive-blue-500: #3B82F6;
  --color-primitive-gray-900: #111827;

  /* Semantic Colors */
  --color-text-primary: var(--color-primitive-gray-900);
  --color-text-secondary: var(--color-primitive-gray-500);
  --color-action-primary: var(--color-primitive-blue-600);
  --color-positive: var(--color-primitive-green-600);
  --color-negative: var(--color-primitive-red-600);

  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;

  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-large-title: 34px;
  --font-size-title-1: 28px;
  --font-size-title-2: 22px;
  --font-size-title-3: 20px;
  --font-size-headline: 17px;
  --font-size-body: 17px;

  /* Motion */
  --motion-duration-fast: 150ms;
  --motion-duration-normal: 250ms;
  --motion-duration-slow: 350ms;
  --motion-easing-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

---

### Tailwind Implementation

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Semantic Colors
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'action-primary': '#2563EB',
        'positive': '#059669',
        'negative': '#DC2626',

        // Fintech
        'cash-available': '#059669',
        'investment-growth': '#059669',
        'investment-loss': '#DC2626',
        'risk-low': '#10B981',
        'risk-medium': '#F97316',
        'risk-high': '#EF4444',
      },

      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
      },

      borderRadius: {
        'none': '0px',
        'sm': '8px',
        'md': '12px',
        'full': '9999px',
      },

      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', fontWeight: '700' }],
        'title-1': ['28px', { lineHeight: '34px', fontWeight: '700' }],
        'title-2': ['22px', { lineHeight: '28px', fontWeight: '700' }],
        'title-3': ['20px', { lineHeight: '25px', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', fontWeight: '400' }],
      },
    },
  },
}
```

---

### React Token Access

```typescript
// tokens.ts
export const tokens = {
  color: {
    primitive: {
      blue: {
        50: '#EFF6FF',
        500: '#3B82F6',
        // ...
      },
      gray: {
        50: '#F9FAFB',
        500: '#6B7280',
        900: '#111827',
      },
    },
    semantic: {
      text: {
        primary: '#111827',
        secondary: '#6B7280',
      },
      action: {
        primary: '#2563EB',
        destructive: '#DC2626',
      },
    },
  },
  spacing: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    6: 24,
  },
  typography: {
    largeTitle: {
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 41,
    },
    // ...
  },
};

// Usage
const styles = {
  color: tokens.color.semantic.text.primary,
  padding: tokens.spacing[4],
}
```

---

## 9. Validation Checklist

### For Every Token

- [ ] Does this token describe a purpose, not an appearance?
- [ ] Does this token reference the correct layer (primitives → semantic → component)?
- [ ] Can this token be merged with an existing token?
- [ ] Can this token inherit from an existing semantic token?
- [ ] Is this token needed by 3+ components?
- [ ] Does this token have a clear name?
- [ ] Is the naming consistent with other tokens?

### For Every New Token Request

- [ ] Does a semantic token already exist for this purpose?
- [ ] Can an existing component token be used?
- [ ] Is this truly a new semantic concept?
- [ ] Will this token be maintained long-term?
- [ ] Does this token follow the naming convention?

### For Every Component

- [ ] Does this component only use semantic or component tokens?
- [ ] Can this component be built from existing components?
- [ ] Are all states (default, hover, pressed, disabled, loading) defined?
- [ ] Is the component accessible?
- [ ] Is the component responsive?

### Simplification Questions

- [ ] Can this token be removed?
- [ ] Can these two tokens be merged?
- [ ] Can this component be merged with another?
- [ ] Can this layer be skipped?

---

**End of Phase 3: Token Architecture**

*This document defines the complete token system. Phase 4 will create components using these tokens.*
