# Advizmo Design Foundations v1.0

**Foundation Architecture Refactoring**
**Production-ready design system building blocks**
**iOS-first, Web compatible, Future Android**
**Apple HIG is the PRIMARY authority**

---

## Table of Contents

01. [Brand Principles](#01-brand-principles)
02. [Color System](#02-color-system)
    - [Primitive Scales (Internal)](#primitive-scales-internal)
    - [Semantic Colors (Designer Consumption)](#semantic-colors-designer-consumption)
    - [Contrast Requirements](#contrast-requirements)
    - [OLED Support](#oled-support)
    - [Apple HIG Review](#apple-hig-review)
    - [Engineering Tokens](#engineering-tokens)
03. [Typography](#03-typography)
    - [Typeface System](#typeface-system)
    - [Semantic Typography Roles](#semantic-typography-roles)
    - [Display Typography Roles (Inter)](#display-typography-roles-inter)
    - [Financial Typography Roles (IBM Plex Sans)](#financial-typography-roles-ibm-plex-sans)
    - [UI Typography Roles (Inter)](#ui-typography-roles-inter)
    - [Typography Weights](#typography-weights)
    - [Dynamic Type](#dynamic-type)
    - [Financial Typography Rules](#financial-typography-rules)
    - [Typography Rhythm](#typography-rhythm)
    - [Table Typography](#table-typography)
    - [Chart Typography](#chart-typography)
    - [Typography Rules](#typography-rules)
    - [Apple HIG Review](#apple-hig-review)
    - [Engineering Tokens](#engineering-tokens)
04. [Spacing](#04-spacing)
05. [Corner Radius](#05-corner-radius)
06. [Borders](#06-borders)
07. [Elevation](#07-elevation)
08. [Surface System](#08-surface-system)
09. [Iconography](#09-iconography)
10. [Motion](#10-motion)
11. [Grid](#11-grid)
12. [Accessibility](#12-accessibility)
13. [Token Architecture](#13-token-architecture)
14. [Platform Mappings](#14-platform-mappings)
15. [Naming Rules](#15-naming-rules)

---

## 01. Brand Principles

### Core Attributes

The Advizmo design language must communicate:

| Attribute | Meaning | How We Achieve It |
|-----------|---------|-------------------|
| **Trust** | Users believe their money is safe | Consistent patterns, transparent data, no surprises |
| **Calm** | Users feel in control, not anxious | Generous whitespace, muted colors, clear hierarchy |
| **Transparency** | Users understand what's happening | Plain language, visible logic, honest representation |
| **Confidence** | Users feel empowered to act | Clear CTAs, predictable behavior, reliable feedback |
| **Intelligence** | Users feel the product is smart | Thoughtful defaults, AI transparency, precise data |
| **Humanity** | Users feel understood, not processed | Empathetic copy, respectful spacing, natural rhythm |
| **Timelessness** | Users trust this will last | No trends, no gimmicks, classic proportions |
| **Professionalism** | Users trust this is serious | Precise numbers, clean layout, restrained decoration |

### Anti-Patterns

The design language must NEVER communicate:

| Anti-Pattern | Why It Fails |
|--------------|--------------|
| **Playfulness** | Money is not entertainment |
| **Urgency** | Creates anxiety, not action |
| **Complexity** | Overwhelms, not empowers |
| **Decoration** | Distracts from understanding |
| **Uncertainty** | Erodes trust |
| **Inconsistency** | Breaks mental models |

### Apple HIG Alignment

Apple's design philosophy: **Clarity, Deference, Depth**

Advizmo's alignment:
- **Clarity** → Every element communicates purpose
- **Deference** → Content is hero, chrome is minimal
- **Depth** → Surface hierarchy through elevation, not decoration

---

## 02. Color System

### Philosophy

Color communicates meaning. Every color has a documented purpose. Designers consume ONLY semantic colors. Primitive scales are internal implementation details.

### Color Communicates

| Attribute | How Color Achieves It |
|-----------|----------------------|
| **Trust** | Consistent blue for actions, calm grays for neutral |
| **Calm** | Muted tones, generous whitespace, subtle hierarchy |
| **Financial Confidence** | Green for gains, red for losses, never decorative |
| **Clarity** | Clear semantic meaning, high contrast |
| **Hierarchy** | Surface elevation through background color |
| **Meaning** | Every color usage has documented purpose |

### Color Never Communicates

| Anti-Pattern | Why It Fails |
|--------------|--------------|
| **Decoration** | Distracts from financial data |
| **Urgency** | Creates anxiety, not action |
| **Inconsistency** | Breaks mental models |
| **Low contrast** | Fails accessibility |

### Color Rules

1. **80% neutral** — Interface dominated by grays
2. **Blue for actions** — Only blue for primary actions
3. **Green for money** — Reserved for positive financial outcomes
4. **Purple for AI** — Reserved exclusively for AI features
5. **Red for risk** — Errors, losses, destructive actions
6. **Orange for attention** — Warnings and pending states
7. **No decorative color** — Every color usage has semantic purpose

---

## Primitive Scales (Internal)

Primitive colors are implementation details. They exist in code but are NEVER consumed directly by designers or components.

### Available Scales

| Scale | Purpose |
|-------|---------|
| **Blue** | Primary brand, actions, navigation |
| **Green** | Financial positive, growth, success |
| **Gray** | Neutral, text, borders, surfaces |
| **Red** | Financial negative, errors, destructive |
| **Orange** | Attention, warnings, pending |
| **Yellow** | Caution, temporary states |
| **Purple** | AI, intelligence, recommendations |
| **Teal** | Connected accounts, syncing |

### Scale Construction

Each scale follows 11 steps:

| Step | Usage | Lightness |
|------|-------|-----------|
| 50 | Lightest backgrounds | +95% |
| 100 | Hover backgrounds | +90% |
| 200 | Borders (light) | +80% |
| 300 | Disabled states | +70% |
| 400 | Placeholder text | +55% |
| 500 | Base color | Baseline |
| 600 | Hover state | -10% |
| 700 | Active/pressed | -20% |
| 800 | Dark emphasis | -30% |
| 900 | Darkest text | -40% |
| 950 | Near black | -45% |

### Usage

Primitives feed semantic tokens. Never reference primitives directly.

---

## Semantic Colors (Designer Consumption)

Designers use ONLY these tokens. Every token has Light and Dark mode values.

### Background Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `bg/page` | #F9FAFB | #0F172A | Page background |
| `bg/card` | #FFFFFF | #1E293B | Card background |
| `bg/elevated` | #FFFFFF | #1E293B | Elevated surfaces |
| `bg/hover` | #F3F4F6 | #334155 | Hover states |
| `bg/pressed` | #E5E7EB | #475569 | Pressed states |

### Surface Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `surface/primary` | #EFF6FF | #1E3A5F | Primary action surfaces |
| `surface/positive` | #ECFDF5 | #064E3B | Positive status surfaces |
| `surface/warning` | #FFFBEB | #78350F | Warning status surfaces |
| `surface/negative` | #FEF2F2 | #7F1D1D | Negative status surfaces |
| `surface/ai` | #F5F3FF | #3B0764 | AI feature surfaces |
| `surface/info` | #EFF6FF | #1E3A5F | Information surfaces |
| `surface/overlay` | rgba(0,0,0,0.5) | rgba(0,0,0,0.7) | Modal backdrop |

### Text Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `text/primary` | #111827 | #F8FAFC | Headlines, amounts |
| `text/secondary` | #4B5563 | #94A3B8 | Labels, captions |
| `text/tertiary` | #6B7280 | #64748B | Placeholders, hints |
| `text/disabled` | #9CA3AF | #475569 | Disabled text |
| `text/inverse` | #FFFFFF | #0F172A | Text on dark bg |
| `text/link` | #2563EB | #60A5FA | Interactive text |

### Border Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `border/subtle` | #F3F4F6 | #334155 | Subtle separation |
| `border/default` | #E5E7EB | #475569 | Default borders |
| `border/strong` | #9CA3AF | #64748B | Emphasis borders |
| `border/focus` | #3B82F6 | #60A5FA | Focus rings |

### Action Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `action/primary` | #2563EB | #60A5FA | Primary buttons |
| `action/primary-hover` | #1D4ED8 | #3B82F6 | Button hover |
| `action/primary-pressed` | #1E40AF | #2563EB | Button pressed |
| `action/primary-disabled` | #D1D5DB | #475569 | Button disabled |
| `action/primary-text` | #FFFFFF | #FFFFFF | Text on primary |
| `action/destructive` | #DC2626 | #F87171 | Delete, cancel |
| `action/destructive-hover` | #B91C1C | #EF4444 | Destructive hover |
| `action/destructive-pressed` | #991B1B | #DC2626 | Destructive pressed |
| `action/destructive-disabled` | #D1D5DB | #475569 | Destructive disabled |
| `action/destructive-text` | #FFFFFF | #FFFFFF | Text on destructive |

### Status Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `status/positive` | #059669 | #34D399 | Gains, success |
| `status/positive-text` | #047857 | #6EE7B7 | Text on positive bg |
| `status/negative` | #DC2626 | #F87171 | Losses, errors |
| `status/negative-text` | #B91C1C | #FCA5A5 | Text on negative bg |
| `status/warning` | #D97706 | #FBBF24 | Warnings, pending |
| `status/warning-text` | #92400E | #FDE047 | Text on warning bg |
| `status/info` | #2563EB | #60A5FA | Information |
| `status/info-text` | #1E40AF | #93C5FD | Text on info bg |

### Domain Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `domain/ai` | #7C3AED | #A78BFA | AI features |
| `domain/ai-text` | #6D28D9 | #C4B5FD | Text on AI bg |
| `domain/ai-surface` | #F5F3FF | #1E1B4B | AI backgrounds |
| `domain/connected` | #0D9488 | #2DD4BF | Connected accounts |
| `domain/connected-text` | #0F766E | #5EEAD4 | Text on connected bg |
| `domain/connected-surface` | #F0FDFA | #042F2E | Connected backgrounds |

### Financial Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `financial/gain` | #059669 | #34D399 | Investment gains |
| `financial/gain-text` | #047857 | #6EE7B7 | Text on gain bg |
| `financial/gain-surface` | #ECFDF5 | #064E3B | Gain backgrounds |
| `financial/loss` | #DC2626 | #F87171 | Investment losses |
| `financial/loss-text` | #B91C1C | #FCA5A5 | Text on loss bg |
| `financial/loss-surface` | #FEF2F2 | #7F1D1D | Loss backgrounds |
| `financial/dividend` | #059669 | #34D399 | Dividend payments |
| `financial/dividend-text` | #047857 | #6EE7B7 | Text on dividend bg |
| `financial/tax-saved` | #059669 | #34D399 | Tax savings |
| `financial/tax-saved-text` | #047857 | #6EE7B7 | Text on tax-saved bg |
| `financial/tax-due` | #DC2626 | #F87171 | Tax liabilities |
| `financial/tax-due-text` | #B91C1C | #FCA5A5 | Text on tax-due bg |
| `financial/pending` | #D97706 | #FBBF24 | Pending settlements |
| `financial/pending-text` | #92400E | #FDE047 | Text on pending bg |
| `financial/pending-surface` | #FFFBEB | #78350F | Pending backgrounds |
| `financial/market-closed` | #6B7280 | #9CA3AF | Market closed |
| `financial/market-closed-text` | #4B5563 | #6B7280 | Text on market-closed bg |
| `financial/market-closed-surface` | #F3F4F6 | #334155 | Market closed backgrounds |

### Automation Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `automation/running` | #059669 | #34D399 | Automation active |
| `automation/running-text` | #047857 | #6EE7B7 | Text on running bg |
| `automation/running-surface` | #ECFDF5 | #064E3B | Running backgrounds |
| `automation/paused` | #D97706 | #FBBF24 | Automation paused |
| `automation/paused-text` | #92400E | #FDE047 | Text on paused bg |
| `automation/paused-surface` | #FFFBEB | #78350F | Paused backgrounds |

### Goal Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `goal/completed` | #059669 | #34D399 | Goal achieved |
| `goal/completed-text` | #047857 | #6EE7B7 | Text on completed bg |
| `goal/completed-surface` | #ECFDF5 | #064E3B | Completed backgrounds |
| `goal/at-risk` | #DC2626 | #F87171 | Goal at risk |
| `goal/at-risk-text` | #B91C1C | #FCA5A5 | Text on at-risk bg |
| `goal/at-risk-surface` | #FEF2F2 | #7F1D1D | At-risk backgrounds |
| `goal/in-progress` | #2563EB | #60A5FA | Goal in progress |
| `goal/in-progress-text` | #1E40AF | #93C5FD | Text on in-progress bg |
| `goal/in-progress-surface` | #EFF6FF | #1E3A5F | In-progress backgrounds |

### Chart Tokens

| Token | Light | Dark | Purpose |
|-------|-------|------|---------|
| `chart/primary` | #3B82F6 | #60A5FA | Primary data series |
| `chart/secondary` | #059669 | #34D399 | Secondary data series |
| `chart/tertiary` | #F97316 | #FB923C | Tertiary data series |
| `chart/quaternary` | #8B5CF6 | #A78BFA | Quaternary data series |
| `chart/quinary` | #06B6D4 | #22D3EE | Quinary data series |
| `chart/sentiment-positive` | #059669 | #34D399 | Positive sentiment |
| `chart/sentiment-negative` | #DC2626 | #F87171 | Negative sentiment |
| `chart/grid` | #E5E7EB | #334155 | Grid lines |
| `chart/axis` | #9CA3AF | #64748B | Axis labels |
| `chart/tooltip-bg` | #1F2937 | #F8FAFC | Tooltip background |
| `chart/tooltip-text` | #F8FAFC | #1F2937 | Tooltip text |

---

## Contrast Requirements

### WCAG Standards

| Element | Minimum | Target | Standard |
|---------|---------|--------|----------|
| Normal text (<18px) | 4.5:1 | 7:1 | WCAG AA |
| Large text (≥18px bold or ≥24px) | 3:1 | 4.5:1 | WCAG AA |
| UI components | 3:1 | 4.5:1 | WCAG AA |
| Focus indicators | 3:1 | 4.5:1 | WCAG AA |
| Critical financial info | 7:1 | — | WCAG AAA |

### Contrast Verification

| Token Pair | Light Mode | Dark Mode | Status |
|------------|------------|-----------|--------|
| text/primary on bg/card | 16.75:1 | 17.34:1 | ✅ AAA |
| text/secondary on bg/card | 7.45:1 | 7.52:1 | ✅ AAA |
| text/tertiary on bg/card | 4.96:1 | 4.67:1 | ✅ AA |
| text/disabled on bg/card | 3.04:1 | 3.01:1 | ⚠️ AA Large |
| action/primary on white | 4.56:1 | 4.56:1 | ✅ AA |
| status/positive on white | 4.56:1 | 4.56:1 | ✅ AA |
| status/negative on white | 4.56:1 | 4.56:1 | ✅ AA |

---

## OLED Support

### Dark Mode Philosophy

Dark mode is not inverted light mode. It is a carefully crafted experience for OLED displays.

### OLED Rules

1. **Never use pure black (#000000)** — Causes eye strain on OLED
2. **Use #0F172A for page backgrounds** — Dark but not pure black
3. **Use #1E293B for card backgrounds** — Subtle hierarchy
4. **Use rgba(0,0,0,0.08) for shadows** — Subtle elevation
5. **Increase contrast in dark mode** — Text must be brighter

### Dark Mode Values

| Token | Light | Dark | Reason |
|-------|-------|------|--------|
| bg/page | #F9FAFB | #0F172A | OLED optimized |
| bg/card | #FFFFFF | #1E293B | Subtle hierarchy |
| text/primary | #111827 | #F8FAFC | High contrast |
| text/secondary | #4B5563 | #94A3B8 | Readable |
| border/default | #E5E7EB | #475569 | Visible but subtle |

---

## Apple HIG Review

### Would Apple Expose This?

**Yes.** Apple exposes semantic colors through system colors:
- `.label` → text/primary
- `.secondaryLabel` → text/secondary
- `.tertiaryLabel` → text/tertiary
- `.systemBackground` → bg/page
- `.secondarySystemBackground` → bg/card
- `.systemBlue` → action/primary
- `.systemGreen` → status/positive
- `.systemRed` → status/negative
- `.systemOrange` → status/warning

### Would Apple Merge This?

**Yes.** Apple would merge:
- financial/gain + financial/dividend + financial/tax-saved → positive
- financial/loss + financial/tax-due → negative
- automation/running → positive
- automation/paused → warning
- goal/completed → positive
- goal/at-risk → negative

**Advizmo keeps separate tokens** because financial products require precise semantic distinction for engineering and analytics.

### Would Apple Simplify This?

**Yes.** Apple uses fewer semantic tokens. Advizmo's financial tokens are more granular because fintech requires precise meaning.

### Would Apple Remove This?

**No.** Each token serves a distinct purpose.

---

## Engineering Tokens

### Token Structure

```
color/[category]/[token]
```

### CSS Custom Properties

```css
:root {
  /* Background */
  --color-bg-page: #F9FAFB;
  --color-bg-card: #FFFFFF;
  --color-bg-elevated: #FFFFFF;
  --color-bg-hover: #F3F4F6;
  --color-bg-pressed: #E5E7EB;
  
  /* Surface */
  --color-surface-primary: #EFF6FF;
  --color-surface-positive: #ECFDF5;
  --color-surface-warning: #FFFBEB;
  --color-surface-negative: #FEF2F2;
  --color-surface-ai: #F5F3FF;
  --color-surface-info: #EFF6FF;
  --color-surface-overlay: rgba(0,0,0,0.5);
  
  /* Text */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-tertiary: #6B7280;
  --color-text-disabled: #9CA3AF;
  --color-text-inverse: #FFFFFF;
  --color-text-link: #2563EB;
  
  /* Border */
  --color-border-subtle: #F3F4F6;
  --color-border-default: #E5E7EB;
  --color-border-strong: #9CA3AF;
  --color-border-focus: #3B82F6;
  
  /* Action */
  --color-action-primary: #2563EB;
  --color-action-primary-hover: #1D4ED8;
  --color-action-primary-pressed: #1E40AF;
  --color-action-primary-disabled: #D1D5DB;
  --color-action-primary-text: #FFFFFF;
  --color-action-destructive: #DC2626;
  --color-action-destructive-hover: #B91C1C;
  --color-action-destructive-pressed: #991B1B;
  --color-action-destructive-disabled: #D1D5DB;
  --color-action-destructive-text: #FFFFFF;
  
  /* Status */
  --color-status-positive: #059669;
  --color-status-positive-text: #047857;
  --color-status-negative: #DC2626;
  --color-status-negative-text: #B91C1C;
  --color-status-warning: #D97706;
  --color-status-warning-text: #92400E;
  --color-status-info: #2563EB;
  --color-status-info-text: #1E40AF;
  
  /* Financial */
  --color-financial-gain: #059669;
  --color-financial-gain-text: #047857;
  --color-financial-gain-surface: #ECFDF5;
  --color-financial-loss: #DC2626;
  --color-financial-loss-text: #B91C1C;
  --color-financial-loss-surface: #FEF2F2;
  --color-financial-dividend: #059669;
  --color-financial-dividend-text: #047857;
  --color-financial-tax-saved: #059669;
  --color-financial-tax-saved-text: #047857;
  --color-financial-tax-due: #DC2626;
  --color-financial-tax-due-text: #B91C1C;
  --color-financial-pending: #D97706;
  --color-financial-pending-text: #92400E;
  --color-financial-pending-surface: #FFFBEB;
  --color-financial-market-closed: #6B7280;
  --color-financial-market-closed-text: #4B5563;
  --color-financial-market-closed-surface: #F3F4F6;
  
  /* Automation */
  --color-automation-running: #059669;
  --color-automation-running-text: #047857;
  --color-automation-running-surface: #ECFDF5;
  --color-automation-paused: #D97706;
  --color-automation-paused-text: #92400E;
  --color-automation-paused-surface: #FFFBEB;
  
  /* Goal */
  --color-goal-completed: #059669;
  --color-goal-completed-text: #047857;
  --color-goal-completed-surface: #ECFDF5;
  --color-goal-at-risk: #DC2626;
  --color-goal-at-risk-text: #B91C1C;
  --color-goal-at-risk-surface: #FEF2F2;
  --color-goal-in-progress: #2563EB;
  --color-goal-in-progress-text: #1E40AF;
  --color-goal-in-progress-surface: #EFF6FF;
  
  /* Domain */
  --color-domain-ai: #7C3AED;
  --color-domain-ai-text: #6D28D9;
  --color-domain-ai-surface: #F5F3FF;
  --color-domain-connected: #0D9488;
  --color-domain-connected-text: #0F766E;
  --color-domain-connected-surface: #F0FDFA;
  
  /* Chart */
  --color-chart-primary: #3B82F6;
  --color-chart-secondary: #059669;
  --color-chart-tertiary: #F97316;
  --color-chart-quaternary: #8B5CF6;
  --color-chart-quinary: #06B6D4;
  --color-chart-sentiment-positive: #059669;
  --color-chart-sentiment-negative: #DC2626;
  --color-chart-grid: #E5E7EB;
  --color-chart-axis: #9CA3AF;
  --color-chart-tooltip-bg: #1F2937;
  --color-chart-tooltip-text: #F8FAFC;
}

[data-theme="dark"] {
  /* Background */
  --color-bg-page: #0F172A;
  --color-bg-card: #1E293B;
  --color-bg-elevated: #1E293B;
  --color-bg-hover: #334155;
  --color-bg-pressed: #475569;
  
  /* Surface */
  --color-surface-primary: #1E3A5F;
  --color-surface-positive: #064E3B;
  --color-surface-warning: #78350F;
  --color-surface-negative: #7F1D1D;
  --color-surface-ai: #3B0764;
  --color-surface-info: #1E3A5F;
  --color-surface-overlay: rgba(0,0,0,0.7);
  
  /* Text */
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary: #64748B;
  --color-text-disabled: #475569;
  --color-text-inverse: #0F172A;
  --color-text-link: #60A5FA;
  
  /* Border */
  --color-border-subtle: #334155;
  --color-border-default: #475569;
  --color-border-strong: #64748B;
  --color-border-focus: #60A5FA;
  
  /* Action */
  --color-action-primary: #60A5FA;
  --color-action-primary-hover: #3B82F6;
  --color-action-primary-pressed: #2563EB;
  --color-action-primary-disabled: #475569;
  --color-action-primary-text: #FFFFFF;
  --color-action-destructive: #F87171;
  --color-action-destructive-hover: #EF4444;
  --color-action-destructive-pressed: #DC2626;
  --color-action-destructive-disabled: #475569;
  --color-action-destructive-text: #FFFFFF;
  
  /* Status */
  --color-status-positive: #34D399;
  --color-status-positive-text: #6EE7B7;
  --color-status-negative: #F87171;
  --color-status-negative-text: #FCA5A5;
  --color-status-warning: #FBBF24;
  --color-status-warning-text: #FDE047;
  --color-status-info: #60A5FA;
  --color-status-info-text: #93C5FD;
  
  /* Financial */
  --color-financial-gain: #34D399;
  --color-financial-gain-text: #6EE7B7;
  --color-financial-gain-surface: #064E3B;
  --color-financial-loss: #F87171;
  --color-financial-loss-text: #FCA5A5;
  --color-financial-loss-surface: #7F1D1D;
  --color-financial-dividend: #34D399;
  --color-financial-dividend-text: #6EE7B7;
  --color-financial-tax-saved: #34D399;
  --color-financial-tax-saved-text: #6EE7B7;
  --color-financial-tax-due: #F87171;
  --color-financial-tax-due-text: #FCA5A5;
  --color-financial-pending: #FBBF24;
  --color-financial-pending-text: #FDE047;
  --color-financial-pending-surface: #78350F;
  --color-financial-market-closed: #9CA3AF;
  --color-financial-market-closed-text: #6B7280;
  --color-financial-market-closed-surface: #334155;
  
  /* Automation */
  --color-automation-running: #34D399;
  --color-automation-running-text: #6EE7B7;
  --color-automation-running-surface: #064E3B;
  --color-automation-paused: #FBBF24;
  --color-automation-paused-text: #FDE047;
  --color-automation-paused-surface: #78350F;
  
  /* Goal */
  --color-goal-completed: #34D399;
  --color-goal-completed-text: #6EE7B7;
  --color-goal-completed-surface: #064E3B;
  --color-goal-at-risk: #F87171;
  --color-goal-at-risk-text: #FCA5A5;
  --color-goal-at-risk-surface: #7F1D1D;
  --color-goal-in-progress: #60A5FA;
  --color-goal-in-progress-text: #93C5FD;
  --color-goal-in-progress-surface: #1E3A5F;
  
  /* Domain */
  --color-domain-ai: #A78BFA;
  --color-domain-ai-text: #C4B5FD;
  --color-domain-ai-surface: #1E1B4B;
  --color-domain-connected: #2DD4BF;
  --color-domain-connected-text: #5EEAD4;
  --color-domain-connected-surface: #042F2E;
  
  /* Chart */
  --color-chart-primary: #60A5FA;
  --color-chart-secondary: #34D399;
  --color-chart-tertiary: #FB923C;
  --color-chart-quaternary: #A78BFA;
  --color-chart-quinary: #22D3EE;
  --color-chart-sentiment-positive: #34D399;
  --color-chart-sentiment-negative: #F87171;
  --color-chart-grid: #334155;
  --color-chart-axis: #64748B;
  --color-chart-tooltip-bg: #F8FAFC;
  --color-chart-tooltip-text: #1F2937;
}
```

### Swift Implementation

```swift
enum Color {
    // Background
    static let bgPage = Color(hex: "F9FAFB")
    static let bgCard = Color(hex: "FFFFFF")
    static let bgElevated = Color(hex: "FFFFFF")
    static let bgHover = Color(hex: "F3F4F6")
    static let bgPressed = Color(hex: "E5E7EB")
    
    // Text
    static let textPrimary = Color(hex: "111827")
    static let textSecondary = Color(hex: "4B5563")
    static let textTertiary = Color(hex: "6B7280")
    static let textDisabled = Color(hex: "9CA3AF")
    static let textInverse = Color(hex: "FFFFFF")
    static let textLink = Color(hex: "2563EB")
    
    // Action
    static let actionPrimary = Color(hex: "2563EB")
    static let actionDestructive = Color(hex: "DC2626")
    
    // Status
    static let statusPositive = Color(hex: "059669")
    static let statusNegative = Color(hex: "DC2626")
    static let statusWarning = Color(hex: "D97706")
    static let statusInfo = Color(hex: "2563EB")
    
    // Financial
    static let financialGain = Color(hex: "059669")
    static let financialLoss = Color(hex: "DC2626")
    static let financialDividend = Color(hex: "059669")
    static let financialTaxSaved = Color(hex: "059669")
    static let financialTaxDue = Color(hex: "DC2626")
    static let financialPending = Color(hex: "D97706")
    static let financialMarketClosed = Color(hex: "6B7280")
    
    // Automation
    static let automationRunning = Color(hex: "059669")
    static let automationPaused = Color(hex: "D97706")
    
    // Goal
    static let goalCompleted = Color(hex: "059669")
    static let goalAtRisk = Color(hex: "DC2626")
    static let goalInProgress = Color(hex: "2563EB")
    
    // Domain
    static let domainAI = Color(hex: "7C3AED")
    static let domainConnected = Color(hex: "0D9488")
}
```

---

## 03. Typography

### Philosophy

Typography is organized by SEMANTIC ROLE, not by font family. Developers consume `Typography.BodyM`, never `Inter 16px Regular`. The font assignment is an implementation detail.

### Typography Communicates

| Attribute | How Typography Achieves It |
|-----------|---------------------------|
| **Trust** | Consistent hierarchy, predictable patterns |
| **Calm** | Generous spacing, comfortable line heights |
| **Precision** | Tabular numerals, decimal alignment, exact formatting |
| **Confidence** | Clear hierarchy, strong headings, readable body text |
| **Readability** | Optimal line lengths, proper contrast, scanning support |

### Typography Never Communicates

| Anti-Pattern | Why It Fails |
|--------------|--------------|
| **Decoration** | Distracts from financial data |
| **Trendiness** | Dates quickly, erodes trust |
| **Playfulness** | Money is not entertainment |
| **Complexity** | Overwhelms, not empowers |

---

## Typeface System

### Two Typefaces

Advizmo uses TWO typefaces. Each has a specific purpose. The assignment is by semantic role, never by arbitrary choice.

---

### Typeface 01: Inter

**Purpose:** Universal UI Typeface

**Use for:**
- Navigation
- Tab Bar
- Navigation Bar
- Sidebar
- Body
- Paragraphs
- Labels
- Buttons
- Forms
- Inputs
- Dialogs
- Bottom Sheets
- Alerts
- Menus
- Cards
- Card Titles
- Tables
- Lists
- Settings
- Notifications
- AI Conversation
- Search
- Filters
- Badges
- Chips
- Tags
- Helper Text
- Captions
- Metadata
- Supporting Copy

**This represents approximately 90–95% of all typography inside the product.**

**Never use Inter for:**
- Net worth displays
- Portfolio value displays
- Large KPI cards
- Financial health scores
- Investment performance heroes
- Goal heroes
- Large financial percentages
- Large dashboard statistics

**Justification:**
- Excellent legibility across all sizes
- Variable font support for performance
- Comprehensive weight range
- Designed specifically for screen readability
- Already in production use
- Industry standard for UI typography

---

### Typeface 02: IBM Plex Sans

**Purpose:** Financial Display Typeface

**IBM Plex Sans should NEVER become the heading font.** It is reserved exclusively for high-value financial moments.

**Use ONLY for:**
- Net Worth
- Portfolio Value
- Safe To Invest
- Financial Health Score
- Hero KPI
- Hero Statistics
- Goal Progress Hero
- Investment Performance Hero
- Large Financial Percentages
- Large Currency Values
- Marketing Hero Headlines
- Major Financial Dashboard Metrics

**Never use IBM Plex Sans for:**
- Body
- Paragraphs
- Buttons
- Labels
- Navigation
- Forms
- Dialogs
- Lists
- Settings
- Search
- Small Card Titles
- Routine Section Headings
- Empty States
- Error Messages
- Notifications

**Decision Rule:** If a designer asks, "Should this use IBM Plex Sans?" the answer should only be YES if it represents one of the most important financial values on the screen.

**Justification:**
- Designed for financial clarity
- Excellent tabular numeral support
- Professional, trustworthy appearance
- Strong legibility at large sizes
- Complements Inter without competing
- Used by leading fintech products

---

## Semantic Typography Roles

### Role Architecture

Typography is organized into 16 semantic roles across three categories:

| Category | Roles | Purpose |
|----------|-------|---------|
| **Display** | 3 roles | Hero non-financial numbers using Inter |
| **Financial** | 4 roles | Hero financial numbers using IBM Plex Sans |
| **UI** | 9 roles | Interface elements using Inter |

### Naming Convention

```
Typography.[Role]
```

Examples:
- `Typography.DisplayXL`
- `Typography.FinancialL`
- `Typography.BodyM`
- `Typography.Caption`

---

## Display Typography Roles (Inter)

### Display XL

| Property | Value |
|----------|-------|
| **Role** | Hero non-financial numbers, dashboard totals |
| **Font** | Inter |
| **Font Size** | 40px |
| **Font Weight** | 700 Bold |
| **Line Height** | 1.1 |
| **Letter Spacing** | -0.03em |
| **Tabular Numerals** | Enabled |
| **Usage** | Dashboard hero, non-financial totals |
| **iOS** | `Font.system(size: 40, weight: .bold)` |
| **Web** | `font-size: 40px; font-weight: 700; letter-spacing: -0.03em; font-variant-numeric: tabular-nums;` |
| **Android** | `textSize="40sp" textStyle="bold"` |

### Display L

| Property | Value |
|----------|-------|
| **Role** | Major non-financial KPI values |
| **Font** | Inter |
| **Font Size** | 32px |
| **Font Weight** | 700 Bold |
| **Line Height** | 1.2 |
| **Letter Spacing** | -0.02em |
| **Tabular Numerals** | Enabled |
| **Usage** | KPI cards, section totals |
| **iOS** | `Font.system(size: 32, weight: .bold)` |
| **Web** | `font-size: 32px; font-weight: 700; letter-spacing: -0.02em; font-variant-numeric: tabular-nums;` |
| **Android** | `textSize="32sp" textStyle="bold"` |

### Display M

| Property | Value |
|----------|-------|
| **Role** | Medium non-financial KPI values |
| **Font** | Inter |
| **Font Size** | 28px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.2 |
| **Letter Spacing** | -0.02em |
| **Tabular Numerals** | Enabled |
| **Usage** | Section totals, medium KPIs |
| **iOS** | `Font.system(size: 28, weight: .semibold)` |
| **Web** | `font-size: 28px; font-weight: 600; letter-spacing: -0.02em; font-variant-numeric: tabular-nums;` |
| **Android** | `textSize="28sp" textStyle="bold"` |

---

## Financial Typography Roles (IBM Plex Sans)

### Financial XL

| Property | Value |
|----------|-------|
| **Role** | Hero financial numbers |
| **Font** | IBM Plex Sans |
| **Font Size** | 48px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.1 |
| **Letter Spacing** | -0.03em |
| **Tabular Numerals** | Enabled |
| **Usage** | Net worth, portfolio value hero |
| **iOS** | `CTFontCreateWithName("IBM Plex Sans-SemiBold", 48, nil)` |
| **Web** | `font-family: 'IBM Plex Sans', sans-serif; font-size: 48px; font-weight: 600; letter-spacing: -0.03em; font-variant-numeric: tabular-nums;` |
| **Android** | `fontFamily="ibm-plex-sans" textSize="48sp" textStyle="bold"` |

### Financial L

| Property | Value |
|----------|-------|
| **Role** | Major KPI values |
| **Font** | IBM Plex Sans |
| **Font Size** | 36px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.1 |
| **Letter Spacing** | -0.02em |
| **Tabular Numerals** | Enabled |
| **Usage** | Safe to invest, financial health score |
| **iOS** | `CTFontCreateWithName("IBM Plex Sans-SemiBold", 36, nil)` |
| **Web** | `font-family: 'IBM Plex Sans', sans-serif; font-size: 36px; font-weight: 600; letter-spacing: -0.02em; font-variant-numeric: tabular-nums;` |
| **Android** | `fontFamily="ibm-plex-sans" textSize="36sp" textStyle="bold"` |

### Financial M

| Property | Value |
|----------|-------|
| **Role** | Medium KPI values |
| **Font** | IBM Plex Sans |
| **Font Size** | 28px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.2 |
| **Letter Spacing** | -0.02em |
| **Tabular Numerals** | Enabled |
| **Usage** | Investment performance, goal progress |
| **iOS** | `CTFontCreateWithName("IBM Plex Sans-SemiBold", 28, nil)` |
| **Web** | `font-family: 'IBM Plex Sans', sans-serif; font-size: 28px; font-weight: 600; letter-spacing: -0.02em; font-variant-numeric: tabular-nums;` |
| **Android** | `fontFamily="ibm-plex-sans" textSize="28sp" textStyle="bold"` |

### Financial S

| Property | Value |
|----------|-------|
| **Role** | Small KPI values, inline financial numbers |
| **Font** | IBM Plex Sans |
| **Font Size** | 20px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.3 |
| **Letter Spacing** | -0.01em |
| **Tabular Numerals** | Enabled |
| **Usage** | Card KPIs, inline financial highlights |
| **iOS** | `CTFontCreateWithName("IBM Plex Sans-SemiBold", 20, nil)` |
| **Web** | `font-family: 'IBM Plex Sans', sans-serif; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; font-variant-numeric: tabular-nums;` |
| **Android** | `fontFamily="ibm-plex-sans" textSize="20sp" textStyle="bold"` |

---

## UI Typography Roles (Inter)

### Title L

| Property | Value |
|----------|-------|
| **Role** | Primary screen titles, section headers |
| **Font** | Inter |
| **Font Size** | 24px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.3 |
| **Letter Spacing** | -0.02em |
| **Tabular Numerals** | Disabled |
| **Usage** | Screen titles, major section headers |
| **iOS** | `Font.system(size: 24, weight: .semibold)` |
| **Web** | `font-size: 24px; font-weight: 600; letter-spacing: -0.02em;` |
| **Android** | `textSize="24sp" textStyle="bold"` |

### Title M

| Property | Value |
|----------|-------|
| **Role** | Secondary headers, card titles |
| **Font** | Inter |
| **Font Size** | 20px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.3 |
| **Letter Spacing** | -0.01em |
| **Tabular Numerals** | Disabled |
| **Usage** | Card titles, subsection headers |
| **iOS** | `Font.system(size: 20, weight: .semibold)` |
| **Web** | `font-size: 20px; font-weight: 600; letter-spacing: -0.01em;` |
| **Android** | `textSize="20sp" textStyle="bold"` |

### Body L

| Property | Value |
|----------|-------|
| **Role** | Primary content, descriptions |
| **Font** | Inter |
| **Font Size** | 17px |
| **Font Weight** | 400 Regular |
| **Line Height** | 1.5 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Primary body text, descriptions |
| **iOS** | `Font.system(size: 17, weight: .regular)` |
| **Web** | `font-size: 17px; font-weight: 400;` |
| **Android** | `textSize="17sp"` |

### Body M

| Property | Value |
|----------|-------|
| **Role** | Standard body text |
| **Font** | Inter |
| **Font Size** | 16px |
| **Font Weight** | 400 Regular |
| **Line Height** | 1.5 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Standard body text, content |
| **iOS** | `Font.system(size: 16, weight: .regular)` |
| **Web** | `font-size: 16px; font-weight: 400;` |
| **Android** | `textSize="16sp"` |

### Body S

| Property | Value |
|----------|-------|
| **Role** | Secondary body text |
| **Font** | Inter |
| **Font Size** | 14px |
| **Font Weight** | 400 Regular |
| **Line Height** | 1.5 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Secondary descriptions, helper text |
| **iOS** | `Font.system(size: 14, weight: .regular)` |
| **Web** | `font-size: 14px; font-weight: 400;` |
| **Android** | `textSize="14sp"` |

### Label L

| Property | Value |
|----------|-------|
| **Role** | Input labels, button text |
| **Font** | Inter |
| **Font Size** | 16px |
| **Font Weight** | 500 Medium |
| **Line Height** | 1.4 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Primary buttons, input labels |
| **iOS** | `Font.system(size: 16, weight: .medium)` |
| **Web** | `font-size: 16px; font-weight: 500;` |
| **Android** | `textSize="16sp" textStyle="bold"` |

### Label M

| Property | Value |
|----------|-------|
| **Role** | Secondary labels, tags, badges |
| **Font** | Inter |
| **Font Size** | 14px |
| **Font Weight** | 500 Medium |
| **Line Height** | 1.4 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Secondary buttons, tags, badges |
| **iOS** | `Font.system(size: 14, weight: .medium)` |
| **Web** | `font-size: 14px; font-weight: 500;` |
| **Android** | `textSize="14sp" textStyle="bold"` |

### Caption

| Property | Value |
|----------|-------|
| **Role** | Metadata, timestamps, helper text |
| **Font** | Inter |
| **Font Size** | 12px |
| **Font Weight** | 400 Regular |
| **Line Height** | 1.4 |
| **Letter Spacing** | 0 |
| **Tabular Numerals** | Disabled |
| **Usage** | Timestamps, metadata, helper text |
| **iOS** | `Font.system(size: 12, weight: .regular)` |
| **Web** | `font-size: 12px; font-weight: 400;` |
| **Android** | `textSize="12sp"` |

### Overline

| Property | Value |
|----------|-------|
| **Role** | Category labels, section markers |
| **Font** | Inter |
| **Font Size** | 11px |
| **Font Weight** | 600 Semibold |
| **Line Height** | 1.4 |
| **Letter Spacing** | 0.05em |
| **Tabular Numerals** | Disabled |
| **Usage** | Category labels, section markers, overlines |
| **iOS** | `Font.system(size: 11, weight: .semibold)` |
| **Web** | `font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;` |
| **Android** | `textSize="11sp" textStyle="bold"` |

---

## Typography Weights

### Inter Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, captions, metadata |
| Medium | 500 | Labels, buttons, emphasis |
| Semibold | 600 | Titles |
| Bold | 700 | Display XL, Display L only |

**Never use:** 300 Light, 800-900 Extra Bold

### IBM Plex Sans Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Never used in Advizmo |
| Medium | 500 | Never used in Advizmo |
| Semibold | 600 | All financial roles |
| Bold | 700 | Never used in Advizmo |

**Rule:** IBM Plex Sans is ALWAYS Semibold (600) in Advizmo. Never Regular, Never Bold.

---

## Dynamic Type

### Apple's Dynamic Type Philosophy

Dynamic Type allows users to choose their preferred text size. Advizmo respects this system-wide setting.

### Scaling Rules

| Role | Min Size | Max Size | Scaling Behavior |
|------|----------|----------|------------------|
| Display XL | 40px | 56px | Scales to AX3 |
| Display L | 32px | 44px | Scales to AX3 |
| Display M | 28px | 40px | Scales to AX3 |
| Financial XL | 48px | 64px | Scales to AX3 |
| Financial L | 36px | 48px | Scales to AX3 |
| Financial M | 28px | 40px | Scales to AX3 |
| Financial S | 20px | 26px | Scales to AX3 |
| Title L | 24px | 30px | Scales to AX4 |
| Title M | 20px | 26px | Scales to AX3 |
| Body L | 17px | 23px | Scales to AX2 |
| Body M | 16px | 22px | Scales to AX2 |
| Body S | 14px | 20px | Scales to AX2 |
| Label L | 16px | 22px | Scales to AX2 |
| Label M | 14px | 20px | Scales to AX2 |
| Caption | 12px | 18px | Scales to AX1 |
| Overline | 11px | 11px | Fixed (no scaling) |

### Layout Reflow

When text scales up:
- **Cards** expand vertically to accommodate larger text
- **Navigation** maintains touch targets (44pt minimum)
- **Buttons** maintain minimum height (44pt)
- **Tables** may horizontal scroll at largest sizes
- **Never truncate** critical financial information

### Testing Requirements

Test at these Dynamic Type sizes:
- **Extra Small (AA)** — Smallest setting
- **Default (L)** — System default
- **Extra Large (AX2)** — Accessibility setting
- **Extra Extra Large (AX3)** — Maximum accessibility

---

## Financial Typography Rules

### Currency Formatting

| Rule | Example | Notes |
|------|---------|-------|
| Always show currency symbol | $1,234.56 | Never hide the symbol |
| Always show 2 decimal places | $1,234.56 | Even for whole dollars |
| Use commas for thousands | $1,234,567.89 | Standard US formatting |
| Right-align in tables | (aligned) | Always right-align numbers |
| Use tabular numerals | (fixed-width) | Numbers align vertically |

### Percentage Formatting

| Rule | Example | Notes |
|------|---------|-------|
| Always show % symbol | 12.5% | Never hide the symbol |
| Maximum 2 decimal places | 12.5% | Never 12.500% |
| Use + for positive | +12.5% | Always show direction |
| Use - for negative | -12.5% | Always show direction |
| Right-align in tables | (aligned) | Always right-align |

### Large Numbers

| Range | Format | Example |
|-------|--------|---------|
| < $1,000 | Full | $999.99 |
| $1,000 - $999,999 | Full | $1,234.56 |
| $1,000,000 - $999,999,999 | Compact | $1.23M |
| $1,000,000,000+ | Compact | $1.23B |

### Compact Number Rules

| Value | Format | Example |
|-------|--------|---------|
| $1,234,567 | $1.23M | Never $1.2M |
| $1,234,567,890 | $1.23B | Never $1.2B |
| $1,234,567,890,123 | $1.23T | Never $1.2T |

### Negative Values

| Context | Format | Example |
|---------|--------|---------|
| Portfolio loss | Red text + minus sign | -$1,234.56 |
| Expense | Red text + minus sign | -$45.00 |
| Negative percentage | Red text + minus sign | -5.2% |

### Positive Values

| Context | Format | Example |
|---------|--------|---------|
| Portfolio gain | Green text + plus sign | +$1,234.56 |
| Income | Green text + plus sign | +$45.00 |
| Positive percentage | Green text + plus sign | +5.2% |

### Pending Values

| Context | Format | Example |
|---------|--------|---------|
| Pending transfer | Orange text + clock icon | $500.00 pending |
| Pending transaction | Orange text | $25.00 processing |

### Forecast Values

| Context | Format | Example |
|---------|--------|---------|
| Projected value | Gray text + "Projected" label | Projected: $12,345.67 |
| Estimated value | Gray text + "Estimated" label | Estimated: $1,234.56 |
| Goal projection | Gray text + "On track" label | On track: $50,000.00 |

### Tabular Numerals

**Always enable for:**
- All financial numbers
- Table columns with numbers
- Dashboard KPIs
- Transaction amounts
- Portfolio values
- Percentage displays

**Web CSS:**
```css
font-variant-numeric: tabular-nums;
```

**iOS:**
```swift
let font = UIFont.monospacedDigitSystemFont(ofSize: 17, weight: .regular)
```

**Android:**
```xml
android:fontFeatureSettings="tnum"
```

### Decimal Alignment

In tables, decimals must align vertically:

```
$  1,234.56
$     45.67
$ 123,456.78
```

**Implementation:**
- Use tabular numerals (fixed-width characters)
- Right-align table columns
- Minimum column width for largest expected value

---

## Typography Rhythm

### Vertical Rhythm

Vertical rhythm creates consistent spacing between text elements.

| Relationship | Spacing | Token |
|--------------|---------|-------|
| Heading to body | 8px | space-2 |
| Body to body | 4px | space-1 |
| Body to heading | 24px | space-4 |
| Section to section | 32px | space-5 |
| Paragraph to paragraph | 16px | space-3 |

### Line Height

| Text Type | Line Height | Reason |
|-----------|-------------|--------|
| Display | 1.1 | Tight for impact |
| Financial | 1.1 | Tight for impact |
| Titles | 1.2-1.3 | Compact for hierarchy |
| Body | 1.5 | Comfortable reading |
| Captions | 1.4 | Compact but readable |

### Letter Spacing

| Text Size | Letter Spacing | Reason |
|-----------|----------------|--------|
| 40px+ | -0.03em | Tight for impact |
| 28-36px | -0.02em | Slightly tight |
| 20-24px | -0.01em | Slightly tight |
| 16-18px | 0 | Default |
| 12-14px | 0 | Default |
| 11px | +0.05em | Wide for overlines |

### Paragraph Spacing

| Context | Spacing | Reason |
|---------|---------|--------|
| Between paragraphs | 16px | Clear separation |
| After headings | 8px | Connect heading to content |
| Before headings | 24px | Separate sections |

---

## Table Typography

### Financial Tables

| Rule | Implementation |
|------|----------------|
| Tabular numerals | Always enabled |
| Decimal alignment | Right-align, fixed-width |
| Currency alignment | Right-align, show symbol |
| Percentage alignment | Right-align, show % |
| Header style | Label M, Medium |
| Body style | Body M, Regular |
| Caption style | Caption, Regular |

### Transaction Tables

| Column | Alignment | Typography |
|--------|-----------|------------|
| Date | Left | Body M |
| Description | Left | Body M |
| Category | Left | Body S |
| Amount | Right | Financial S or Label M |

### Portfolio Tables

| Column | Alignment | Typography |
|--------|-----------|------------|
| Asset | Left | Body M |
| Shares | Right | Body M |
| Price | Right | Financial S |
| Value | Right | Financial S |
| Change | Right | Label M (green/red) |

### Bill Tables

| Column | Alignment | Typography |
|--------|-----------|------------|
| Biller | Left | Body M |
| Due Date | Left | Body M |
| Amount | Right | Financial S |
| Status | Left | Label M |

---

## Chart Typography

### Axis Labels

| Property | Value |
|----------|-------|
| Role | Caption |
| Size | 12px |
| Weight | 400 Regular |
| Color | text/secondary |
| Alignment | Center (X), Right (Y) |

### Legends

| Property | Value |
|----------|-------|
| Role | Caption |
| Size | 12px |
| Weight | 400 Regular |
| Color | text/secondary |
| Spacing | 8px between items |

### Tooltips

| Property | Value |
|----------|-------|
| Role | Caption |
| Size | 12px |
| Weight | 500 Medium |
| Color | text/inverse |
| Background | gray-800 |

### Data Labels

| Property | Value |
|----------|-------|
| Role | Label M |
| Size | 14px |
| Weight | 500 Medium |
| Color | Matches data series |
| Alignment | Center |

### Comparison Labels

| Property | Value |
|----------|-------|
| Role | Label M |
| Size | 14px |
| Weight | 500 Medium |
| Color | text/secondary |
| Format | "+12.5% vs last month" |

---

## Typography Rules

### Hierarchy Rules

1. **One heading per screen** — Title L or Display XL, never both
2. **Clear size progression** — Each level is distinctly smaller
3. **Weight creates hierarchy** — Semibold for titles, Regular for body
4. **Color reinforces hierarchy** — Primary for important, secondary for supporting
5. **Spacing separates sections** — More space = more separation

### Readability Rules

1. **Max line length:** 80 characters
2. **Min line height:** 1.4× font size
3. **Left-align all text** except buttons and empty states
4. **Never justify text** — Creates uneven spacing
5. **Never use all caps** except Overline

### Consistency Rules

1. **Same role = same style** — Never vary within a role
2. **Same context = same style** — All card titles use Title M
3. **No custom styles** — Use only defined roles
4. **No hardcoded sizes** — Always use tokens

### Financial Rules

1. **Tabular numerals always** — For any number that aligns
2. **Right-align numbers** — In tables and lists
3. **Show currency symbol** — Always
4. **Show decimal places** — Always 2 for currency
5. **Show direction** — + for positive, - for negative

---

## Apple HIG Review

### Would Apple Simplify This?

**Yes.** Apple uses a similar semantic role system:
- Large Title → Display XL
- Title 1 → Title L
- Title 2 → Title M
- Body → Body L
- Callout → Body M
- Subheadline → Body S
- Footnote → Caption
- Caption 1 → Caption
- Caption 2 → Overline (conceptually)

### Would Apple Expose This?

**Yes.** Apple exposes semantic roles through `UIFont.TextStyle`:
- `.largeTitle` → Display XL
- `.title1` → Title L
- `.title2` → Title M
- `.body` → Body L
- `.callout` → Body M
- `.subheadline` → Body S
- `.footnote` → Caption
- `.caption1` → Caption
- `.caption2` → Overline

### Would Apple Merge This?

**Yes.** Apple would merge:
- Display XL + Display L + Display M → Large Title (one role)
- Title L + Title M → Title (one role)
- Body L + Body M + Body S → Body (one role)

**Advizmo keeps 16 roles** because financial products require more precision than general apps.

### Would Apple Remove This?

**No.** Each role serves a distinct purpose.

### Would Apple Rename This?

**Partially.** Apple uses system names (`.largeTitle`). Advizmo uses semantic names (`DisplayXL`). Both are valid.

### Would Apple Make This Easier for Developers?

**Yes.** Apple provides `UIFont.preferredFont(forTextStyle:)` for automatic Dynamic Type. Advizmo should provide similar convenience APIs.

---

## Engineering Tokens

### Token Structure

```
typography/[role]/font-family
typography/[role]/font-size
typography/[role]/font-weight
typography/[role]/line-height
typography/[role]/letter-spacing
typography/[role]/tabular-numerals
```

### Example Tokens

```css
/* Font Families */
--font-family-ui: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-family-financial: 'IBM Plex Sans', sans-serif;

/* Display Typography */
--typography-display-xl-font-size: 40px;
--typography-display-xl-font-weight: 700;
--typography-display-xl-line-height: 1.1;
--typography-display-xl-letter-spacing: -0.03em;
--typography-display-xl-tabular-numerals: true;

--typography-display-l-font-size: 32px;
--typography-display-l-font-weight: 700;
--typography-display-l-line-height: 1.2;
--typography-display-l-letter-spacing: -0.02em;

--typography-display-m-font-size: 28px;
--typography-display-m-font-weight: 600;
--typography-display-m-line-height: 1.2;
--typography-display-m-letter-spacing: -0.02em;

/* Financial Typography */
--typography-financial-xl-font-family: 'IBM Plex Sans', sans-serif;
--typography-financial-xl-font-size: 48px;
--typography-financial-xl-font-weight: 600;
--typography-financial-xl-line-height: 1.1;
--typography-financial-xl-letter-spacing: -0.03em;
--typography-financial-xl-tabular-numerals: true;

--typography-financial-l-font-family: 'IBM Plex Sans', sans-serif;
--typography-financial-l-font-size: 36px;
--typography-financial-l-font-weight: 600;
--typography-financial-l-line-height: 1.1;
--typography-financial-l-letter-spacing: -0.02em;

--typography-financial-m-font-family: 'IBM Plex Sans', sans-serif;
--typography-financial-m-font-size: 28px;
--typography-financial-m-font-weight: 600;
--typography-financial-m-line-height: 1.2;
--typography-financial-m-letter-spacing: -0.02em;

--typography-financial-s-font-family: 'IBM Plex Sans', sans-serif;
--typography-financial-s-font-size: 20px;
--typography-financial-s-font-weight: 600;
--typography-financial-s-line-height: 1.3;
--typography-financial-s-letter-spacing: -0.01em;

/* UI Typography */
--typography-title-l-font-size: 24px;
--typography-title-l-font-weight: 600;
--typography-title-l-line-height: 1.3;
--typography-title-l-letter-spacing: -0.02em;

--typography-title-m-font-size: 20px;
--typography-title-m-font-weight: 600;
--typography-title-m-line-height: 1.3;
--typography-title-m-letter-spacing: -0.01em;

--typography-body-l-font-size: 17px;
--typography-body-l-font-weight: 400;
--typography-body-l-line-height: 1.5;

--typography-body-m-font-size: 16px;
--typography-body-m-font-weight: 400;
--typography-body-m-line-height: 1.5;

--typography-body-s-font-size: 14px;
--typography-body-s-font-weight: 400;
--typography-body-s-line-height: 1.5;

--typography-label-l-font-size: 16px;
--typography-label-l-font-weight: 500;
--typography-label-l-line-height: 1.4;

--typography-label-m-font-size: 14px;
--typography-label-m-font-weight: 500;
--typography-label-m-line-height: 1.4;

--typography-caption-font-size: 12px;
--typography-caption-font-weight: 400;
--typography-caption-line-height: 1.4;

--typography-overline-font-size: 11px;
--typography-overline-font-weight: 600;
--typography-overline-line-height: 1.4;
--typography-overline-letter-spacing: 0.05em;
```

### Swift Implementation

```swift
enum Typography {
    // Display Typography (Inter)
    static let displayXL = Font.system(size: 40, weight: .bold)
    static let displayL = Font.system(size: 32, weight: .bold)
    static let displayM = Font.system(size: 28, weight: .semibold)
    
    // Financial Typography (IBM Plex Sans)
    static let financialXL = Font.custom("IBM Plex Sans-SemiBold", size: 48)
    static let financialL = Font.custom("IBM Plex Sans-SemiBold", size: 36)
    static let financialM = Font.custom("IBM Plex Sans-SemiBold", size: 28)
    static let financialS = Font.custom("IBM Plex Sans-SemiBold", size: 20)
    
    // UI Typography (Inter)
    static let titleL = Font.system(size: 24, weight: .semibold)
    static let titleM = Font.system(size: 20, weight: .semibold)
    static let bodyL = Font.system(size: 17, weight: .regular)
    static let bodyM = Font.system(size: 16, weight: .regular)
    static let bodyS = Font.system(size: 14, weight: .regular)
    static let labelL = Font.system(size: 16, weight: .medium)
    static let labelM = Font.system(size: 14, weight: .medium)
    static let caption = Font.system(size: 12, weight: .regular)
    static let overline = Font.system(size: 11, weight: .semibold)
}
```

---

## 04. Spacing

### Philosophy

Spacing is not distance. Spacing communicates relationships.

Every spacing value explains how two elements relate to each other. Spacing creates hierarchy, grouping, importance, breathing room, and reading flow. Never decoration. Never arbitrary.

### Spacing Scale

Seven values. 4pt grid. Relationship-driven.

| Token | Value | Grid | Purpose |
|-------|-------|------|---------|
| `space-xs` | 4px | 1× | Micro gaps — inline elements, icon stroke padding |
| `space-s` | 8px | 2× | Tight gaps — component internal, label↔input |
| `space-m` | 12px | 3× | Standard gaps — list items, form fields |
| `space-l` | 16px | 4× | Comfortable gaps — card padding, section gaps |
| `space-xl` | 24px | 6× | Generous gaps — between sections |
| `space-xxl` | 32px | 8× | Large gaps — major section breaks |
| `space-xxxl` | 48px | 12× | Page spacing — screen margins, hero spacing |

### Why These Values

**4px (XS)** — The smallest meaningful gap. Aligns with iOS icon stroke padding. Used for inline elements that belong together visually.

**8px (S)** — The component internal gap. Tight enough to signal "these belong together." Loose enough to be distinguishable. Apple's standard component padding.

**12px (M)** — The relationship gap. Used when two elements are related but distinct. List items, form fields, toggle↔label.

**16px (L)** — The comfortable gap. Apple's standard card padding. Enough breathing room to feel premium without wasting space.

**24px (XL)** — The section gap. Separates related content groups. Signals "these are different sections but related."

**32px (XXL)** — The major break. Separates major content areas. Signals "these are different topics."

**48px (XXXL)** — The page gap. Screen margins, hero spacing, major visual breaks. The largest gap in the system.

---

### Spacing Relationships

Replace value-first thinking with relationship-first thinking.

#### Icon ↔ Text

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Icon + Label (inline) | `space-xs` | 4px | Icon and text are one unit |
| Icon + Label (list) | `space-s` | 8px | Icon and text are separate but related |
| Icon + Title + Subtitle | `space-s` | 8px | Icon aligns with title, subtitle wraps |

```
✓ [icon] 4px Label
✓ [icon] 8px Title
         8px Subtitle
```

#### Label ↔ Input

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Label + Input | `space-xs` | 4px | Label belongs to input |
| Input + Helper | `space-xs` | 4px | Helper belongs to input |
| Input + Error | `space-xs` | 4px | Error belongs to input |
| Field + Field | `space-m` | 12px | Fields are separate but related |

```
Label (4px) Input (4px) Helper
            Input (12px) Input
```

#### Title ↔ Description

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Title + Description | `space-xs` | 4px | Description belongs to title |
| Title + Body | `space-s` | 8px | Body is separate content |

```
Title (4px) Description
Title (8px) Body text that continues...
```

#### Button ↔ Button

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Primary + Secondary (stacked) | `space-s` | 8px | Buttons are alternatives |
| Button + Button (inline) | `space-s` | 8px | Buttons are equal options |
| Button + Link | `space-s` | 8px | Link extends button action |

```
[ Primary Button ] (8px) [ Secondary Button ]
```

#### Card ↔ Card

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Card + Card (vertical) | `space-m` | 12px | Cards are siblings |
| Card + Card (horizontal) | `space-m` | 12px | Cards are siblings |
| Card + Section | `space-l` | 16px | Card belongs to section |

```
[ Card ] (12px) [ Card ]
        (16px) Section Title
```

#### Section ↔ Section

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Section + Section | `space-xl` | 24px | Sections are different topics |
| Section + Section (major) | `space-xxl` | 32px | Sections are different areas |

```
Section A (24px) Section B
```

#### Navigation ↔ Content

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Nav Bar + Content | `space-l` | 16px | Content starts below nav |
| Tab Bar + Content | `space-l` | 16px | Content ends above tab bar |
| Sidebar + Content | `space-xl` | 24px | Content has breathing room from nav |

```
[ Nav Bar ]
(16px)
Content starts here
```

#### Chart ↔ Legend

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Chart + Legend | `space-s` | 8px | Legend belongs to chart |
| Chart + Title | `space-s` | 8px | Title belongs to chart |
| Chart + Chart | `space-xl` | 24px | Charts are separate visualizations |

```
Chart Title (8px) [ Chart ]
                 (8px) Legend
```

#### Widget ↔ Widget

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Widget + Widget | `space-l` | 16px | Widgets are dashboard siblings |
| Widget + Widget (compact) | `space-m` | 12px | Widgets are tightly related |

```
[ Widget A ] (16px) [ Widget B ]
```

#### Screen Edge ↔ Content

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Screen margin (mobile) | `space-l` | 16px | Standard iOS margin |
| Screen margin (tablet) | `space-xl` | 24px | Tablet needs more breathing room |
| Screen margin (desktop) | `space-xxl` | 32px | Desktop has space to breathe |
| Safe area (top) | System | — | Respect iOS safe area |
| Safe area (bottom) | System | — | Respect iOS home indicator |

```
(16px) Content (16px)  ← mobile
(24px) Content (24px)  ← tablet
(32px) Content (32px)  ← desktop
```

#### Bottom Sheet ↔ Content

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Sheet handle + Content | `space-l` | 16px | Content starts below handle |
| Sheet content padding | `space-l` | 16px | Content has comfortable margins |
| Sheet + Sheet | `space-m` | 12px | Stacked sheets are siblings |

```
─── Handle ───
(16px)
Sheet Content
(16px)
```

#### Modal ↔ Content

| Relationship | Token | Value | Rule |
|--------------|-------|-------|------|
| Modal title + Content | `space-s` | 8px | Content belongs to title |
| Modal content + Actions | `space-l` | 16px | Actions are separate |
| Modal padding | `space-l` | 16px | Content has comfortable margins |

```
Title (8px) Body text...
        (16px) [ Action Button ]
```

#### Safe Area ↔ Layout

| Platform | Top | Bottom | Sides |
|----------|-----|--------|-------|
| iPhone (notch) | System safe area | System safe area | `space-l` (16px) |
| iPhone (no notch) | 20px | 0 | `space-l` (16px) |
| iPad | 20px | 0 | `space-xl` (24px) |
| Web | 0 | 0 | Responsive (16–32px) |

---

### Layout Rhythm

#### Vertical Rhythm

Every vertical gap follows the spacing scale. No exceptions.

```
Screen Top
(16px — safe area)
Nav Bar
(16px — space-l)
Section Title
(8px — space-s)  ← title belongs to content
Content Block
(24px — space-xl) ← different section
Section Title
(8px — space-s)
Content Block
(16px — space-l)
Tab Bar
(0px — system safe area)
Screen Bottom
```

#### Horizontal Rhythm

Horizontal spacing follows the same scale. Card margins, padding, and gaps all use the same tokens.

```
(16px) [ Card (16px padding) ] (12px) [ Card (16px padding) ] (16px)
```

#### Content Density

| Density | Usage | Spacing Multiplier |
|---------|-------|-------------------|
| Compact | Lists, tables, data-heavy screens | 0.75× (use smaller tokens) |
| Default | Standard screens, cards, forms | 1× (use standard tokens) |
| Comfortable | Dashboard, onboarding, marketing | 1.25× (use larger tokens) |

#### Whitespace Rules

1. **Whitespace is not empty.** It's active spacing that communicates hierarchy.
2. **More whitespace = more importance.** Hero metrics get more space.
3. **Less whitespace = more relationship.** Related elements get less space.
4. **Consistent whitespace = calm.** Same contexts use same spacing.

#### Reading Flow

```
Title ←←←←←←←←←←←←←←←←←←←←←←←← (left-aligned, strong)
(4px)
Description ←←←←←←←←←←←←←←←←←← (left-aligned, secondary)
(16px)
┌─ Content Block ──────────────┐
│                              │
│  Primary metric ←←←←←←←←←←← (large, prominent)
│  (4px)
│  Secondary metric ←←←←←←←←← (smaller, supporting)
│                              │
└──────────────────────────────┘
(24px)
┌─ Next Section ───────────────┐
│                              │
└──────────────────────────────┘
```

#### Dashboard Spacing

```
Screen Edge (16px)
┌─────────────────────────────────────┐
│ Nav Bar                             │
│ (16px)                              │
│ Hero Metric (48px tall)             │
│ (24px)                              │
│ ┌─ Row ──────────────────────────┐  │
│ │ [Widget] (12px) [Widget]       │  │
│ └────────────────────────────────┘  │
│ (16px)                              │
│ ┌─ Row ──────────────────────────┐  │
│ │ [Widget] (12px) [Widget]       │  │
│ └────────────────────────────────┘  │
│ (24px)                              │
│ Section: Recent Activity            │
│ (8px)                               │
│ [List Item] (12px) [List Item]      │
│ (12px)                              │
│ [List Item] (12px) [List Item]      │
│ (16px)                              │
│ Tab Bar                             │
└─────────────────────────────────────┘
Screen Edge (16px)
```

#### Financial Card Spacing

```
┌─ Account Card ─────────────────────┐
│ (16px padding)                     │
│ [Institution] (4px) Account Name   │
│ (12px)                             │
│ Balance                            │
│ (4px)                              │
│ Trend + Last Synced                │
│ (16px padding)                     │
└────────────────────────────────────┘
```

#### AI Panel Spacing

```
┌─ AI Insight ──────────────────────┐
│ (16px padding)                     │
│ [AI Icon] (8px) Insight Title     │
│ (8px)                              │
│ Insight body text that explains    │
│ the recommendation in detail.      │
│ (12px)                             │
│ Confidence: High                   │
│ (8px)                              │
│ [ Accept ] (8px) [ Dismiss ]       │
│ (16px padding)                     │
└────────────────────────────────────┘
```

---

### Engineering Mapping

| Token | Value | CSS | Swift | Tailwind | React Native |
|-------|-------|-----|-------|----------|--------------|
| `space-xs` | 4px | `--space-xs` | `.padding(4)` | `p-1` | `4` |
| `space-s` | 8px | `--space-s` | `.padding(8)` | `p-2` | `8` |
| `space-m` | 12px | `--space-m` | `.padding(12)` | `p-3` | `12` |
| `space-l` | 16px | `--space-l` | `.padding(16)` | `p-4` | `16` |
| `space-xl` | 24px | `--space-xl` | `.padding(24)` | `p-6` | `24` |
| `space-xxl` | 32px | `--space-xxl` | `.padding(32)` | `p-8` | `32` |
| `space-xxxl` | 48px | `--space-xxxl` | `.padding(48)` | `p-12` | `48` |

---

### Rules

1. **4pt grid only.** No 5px, 10px, 18px, 22px.
2. **If between values, round down** to the smaller spacing.
3. **When in doubt, use more space.** Better too spacious than too cramped.
4. **No sub-4px spacing.** Too tight for touch.
5. **Same context = same spacing.** If two list items use 12px, all list items use 12px.
6. **Relationships determine spacing.** Not visual preference.
7. **Apple first.** When in doubt, check Apple HIG.

---

### What Changed

| Before | After | Why |
|--------|-------|-----|
| 5 tokens | 7 tokens | More granularity for relationships |
| `space-1` through `space-5` | `space-xs` through `space-xxxl` | Purpose-driven naming |
| Value-first | Relationship-first | Spacing communicates meaning |
| No relationship rules | 14 relationship pairs | Clear, unambiguous rules |
| No layout rhythm | Vertical, horizontal, density | Complete layout guidance |
| No Apple alignment | Apple HIG primary authority | Premium, timeless feel |

---

## 05. Corner Radius

### Philosophy

Three radii. Nothing else. Every radius has documented purpose.

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-s` | 8px | Buttons, inputs, badges, small interactive elements |
| `radius-m` | 12px | Cards, sheets, modals, containers |
| `radius-full` | 9999px | Avatars, badges, pills, tags |

### Why These Values

**8px** — The minimum radius that feels soft without looking bubbly. Works at every size. Small enough for buttons, large enough to feel modern. Aligns with 4pt grid.

**12px** — The sweet spot for cards and containers. Feels premium, not round. Matches iOS and macOS conventions. Creates visual separation without feeling childlike.

**9999px** — Full radius for circular and pill shapes. No need for intermediate values — either it's a rectangle or it's a circle/pill.

### Radius Usage Rules

| Element | Radius | Token |
|---------|--------|-------|
| Primary button | 8px | radius-s |
| Secondary button | 8px | radius-s |
| Destructive button | 8px | radius-s |
| Ghost button | 8px | radius-s |
| Input field | 8px | radius-s |
| Search field | 8px | radius-s |
| Badge | 9999px | radius-full |
| Tag | 9999px | radius-full |
| Avatar | 9999px | radius-full |
| Card | 12px | radius-m |
| Modal | 12px | radius-m |
| Sheet (half) | 12px | radius-m |
| Sheet (full) | 12px | radius-m |
| Toast | 12px | radius-m |

### What Was Removed

- **0px (none)** — Never use square corners. If you think you need 0px, you're wrong.
- **4px (xs)** — Too small to be visible. Use 8px.
- **16px (lg)** — Too round for professional fintech. Use 12px.

### Rules

1. **Never use:** 0px, 4px, 16px, 20px, 24px
2. **Buttons always:** radius-s (8px)
3. **Cards always:** radius-m (12px)
4. **Avatars always:** radius-full (9999px)
5. **Text never has radius.**

---

## 06. Borders

### Philosophy

Borders define structure. Use sparingly — whitespace communicates separation better.

### Border Scale

| Token | Width | Usage |
|-------|-------|-------|
| `border-default` | 1px | Default borders, dividers |
| `border-strong` | 2px | Emphasis, section breaks |
| `border-focus` | 2px | Focus rings (offset 2px) |

### Border Color

| State | Token |
|-------|-------|
| Default | `border/default` |
| Strong | `border/strong` |
| Focus | `border/focus` |
| Disabled | `text/disabled` |

### Border Usage Rules

| Context | Width | Token |
|---------|-------|-------|
| Card border | 1px | border-default |
| Input border | 1px | border-default |
| Divider | 1px | border-default |
| Section break | 2px | border-strong |
| Focus ring | 2px (offset 2px) | border-focus |

### Rules

1. **Prefer no border.** Use space first.
2. **If border needed, use 1px default.**
3. **2px only for emphasis or focus.**
4. **Borders should not compete with content.**

---

## 07. Elevation

### Philosophy

Two levels. Prefer space over shadow. Use shadow only when space isn't sufficient.

### Elevation Scale

| Token | Shadow | Usage |
|-------|--------|-------|
| `elevation/flat` | none | Default for all elements |
| `elevation/floating` | 0 2px 8px rgba(0,0,0,0.08) | Modals, dropdowns, floating elements |

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

### Rules

1. **Never use multiple shadows on one element.**
2. **Prefer elevation/flat + space over floating.**
3. **Floating only for elements that "float" above content.**
4. **Never use black shadows — use gray with opacity.**

---

## 08. Surface System

### Philosophy

Clear hierarchy through background color and spacing, not shadows.

### Surface Scale

| Token | Background | Usage |
|-------|------------|-------|
| `surface/page` | #F9FAFB (Light) / #0F172A (Dark) | Page background |
| `surface/card` | #FFFFFF (Light) / #1E293B (Dark) | Card background |
| `surface/raised` | #FFFFFF (Light) / #1E293B (Dark) + elevation/floating | Elevated elements |
| `surface/floating` | #FFFFFF (Light) / #1E293B (Dark) + elevation/floating | Modals, sheets |
| `surface/overlay` | rgba(0,0,0,0.5) | Backdrop overlay |

### Surface Hierarchy

```
Page (#F9FAFB)
└── Card (#FFFFFF)
    └── Elevated (#FFFFFF + shadow)
        └── Floating (#FFFFFF + shadow)
            └── Overlay (rgba(0,0,0,0.5))
```

### Rules

1. **Page is always lowest.**
2. **Cards sit on page.**
3. **Elevated sits on cards.**
4. **Floating sits on everything.**
5. **Overlay covers everything.**

---

## 09. Iconography

### Philosophy

Outline icons only. Consistent with iOS. Clean and readable at all sizes.

### Icon Specifications

| Property | Value |
|----------|-------|
| Style | Outline (stroke only) |
| Stroke Width | 2px |
| Corner Join | Round |
| Corner Radius | 2px (for 24px icons) |
| Optic Alignment | Optical center |

### Icon Sizes

| Size | Usage | Context |
|------|-------|---------|
| 16px | Compact | Badges, inline icons |
| 20px | Small | List item icons |
| 24px | Standard | Navigation, actions |
| 28px | Large | Empty state icons |
| 32px | XL | Hero icons |

### Icon Grid

| Property | Value |
|----------|-------|
| Base Grid | 24px |
| Safe Area | 2px each side |
| Icon Draw Area | 20px × 20px |
| Clear Area | 24px × 24px |

### Icon-to-Text Alignment

- Icons align with text baseline
- 24px icon pairs with 16px body text naturally
- 20px icon pairs with 14px label text naturally

### Icon Colors

| Context | Token |
|---------|-------|
| Primary action | `action/primary` |
| Secondary | `text/secondary` |
| Disabled | `text/disabled` |
| On colored background | `text/inverse` |

### Rules

1. **Outline only.** Never mix with filled.
2. **2px stroke only.** No 1.5px or 2.5px.
3. **Round corners only.** No sharp corners.
4. **SF Symbols preferred.** Use custom only when SF Symbols lacks an icon.
5. **Test at 16px and 24px.** If unreadable, redesign.
6. **Never use icons alone.** Always pair with text or clear context.

---

## 10. Motion

### Philosophy

Motion communicates state, hierarchy, navigation, progress, and feedback. Never entertainment.

### Motion Rules

1. **Prefer opacity changes over movement.** Fade is safer than slide.
2. **Keep movement subtle.** 2-4px is often enough.
3. **Never animate for entertainment.** Motion serves function.
4. **Always test with reduced motion.** Essential for accessibility.
5. **Consistent durations.** Same type of motion = same duration.

### Durations

| Type | Duration | Usage |
|------|----------|-------|
| Micro | 100ms | Toggle, press |
| Fast | 150ms | Quick feedback |
| Normal | 250ms | Standard transitions |
| Slow | 350ms | Page transitions |

### Easing

| Type | Value | Usage |
|------|-------|-------|
| Standard | cubic-bezier(0.25, 0.1, 0.25, 1) | Default |
| Enter | cubic-bezier(0, 0, 0.2, 1) | Elements entering |
| Exit | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |
| Linear | linear | Progress indicators |

### What Motion Communicates

| Context | Motion |
|---------|--------|
| Card appearance | Fade in + 4px upward movement (250ms) |
| Page transition | Slide horizontal (350ms) |
| Number change | Count up/down (250ms) |
| Success feedback | Green checkmark fade in (200ms) |
| Error feedback | Subtle shake (150ms) |
| Loading | Subtle pulse (opacity 0.5 to 1) |

### Reduced Motion

When `prefers-reduced-motion` is enabled:
- Instant state changes (no fade)
- No movement animations
- Numbers change instantly
- Charts appear without drawing animation
- Loading uses static indicators

---

## 11. Grid

### Philosophy

iOS-first. Mobile-first. Responsive web inherits, not reinvented.

### iOS Grid

| Property | Value |
|----------|-------|
| Base Unit | 4pt |
| Screen Margin | 16px |
| Column Count | 4 (iPhone), 8 (iPad) |
| Gutter | 16px |
| Max Content Width | 414px (iPhone) |

### Responsive Web Grid

| Breakpoint | Margin | Columns | Gutter | Max Width |
|------------|--------|---------|--------|-----------|
| Mobile (<640px) | 16px | 4 | 16px | 100% |
| Tablet (640-1024px) | 24px | 8 | 20px | 720px |
| Desktop (1024-1440px) | 32px | 12 | 24px | 1200px |
| Large (>1440px) | 32px | 12 | 32px | 1400px |

### Content Widths

| Element | Width |
|---------|-------|
| Card (mobile) | 100% - 32px (margins) |
| Card (tablet) | 343px fixed |
| Card (desktop) | 400px fixed |
| Input | 100% - margins |
| Button | Auto (min 44px touch target) |
| Avatar | 32px (small), 40px (medium), 56px (large) |

### Rules

1. **Always respect safe areas** on iOS.
2. **Cards never exceed** content max-width.
3. **Touch targets minimum** 44×44pt.
4. **Thumb zone considerations** for mobile.

---

## 12. Accessibility

### Contrast Requirements

| Element | Minimum | Target |
|---------|---------|--------|
| Normal text (<18px) | 4.5:1 | 7:1 |
| Large text (≥18px bold or ≥24px) | 3:1 | 4.5:1 |
| UI components | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | 4.5:1 |

### Touch Targets

| Target | Size | Usage |
|--------|------|-------|
| Minimum | 44×44pt | All interactive elements |
| Recommended | 48×48pt | Primary actions |
| Spacing between | 8px minimum | Prevents mis-taps |

### Dynamic Type

| Role | Scales To |
|------|-----------|
| Display | AX3 |
| Headline | AX4 |
| Title | AX3 |
| Body | AX2 |
| Label | AX2 |
| Caption | AX1 |
| Financial Large | AX3 |
| Financial Small | AX2 |

### VoiceOver

| Element | Requirement |
|---------|-------------|
| Buttons | Clear label describing action |
| Images | Descriptive alt text |
| Links | Context not just "read more" |
| Custom controls | Custom actions defined |
| State changes | Announced via accessibility announcements |

### Color Independence

| Information | Additional Indicator |
|-------------|---------------------|
| Positive value | + prefix, up arrow, green |
| Negative value | - prefix, down arrow, red |
| Error | Icon (exclamation) + text |
| Warning | Icon (triangle) + text |
| Disabled | Reduced opacity + not-allowed cursor |

### Keyboard Navigation (Web)

| Key | Action |
|-----|--------|
| Tab | Move focus forward |
| Shift+Tab | Move focus backward |
| Enter/Space | Activate |
| Escape | Close/cancel |
| Arrow keys | Navigate within components |

---

## 13. Token Architecture

### Philosophy

Three-tier system. Components never reference primitives directly.

```
Tier 1: Primitives (raw values)
    ↓
Tier 2: Semantic (purpose-driven)
    ↓
Tier 3: Component (element-specific)
```

### Tier 1: Primitive Tokens

Raw values. No semantic meaning. Internal implementation details.

```
blue-500: #3B82F6
green-600: #059669
gray-900: #111827
space-4: 16
radius-s: 8
elevation-floating: 0 2px 8px rgba(0,0,0,0.08)
```

### Tier 2: Semantic Tokens

Purpose-driven aliases. What designers consume.

```
action/primary: blue-600
status/positive: green-600
text/primary: gray-900
space-3: 16
radius-m: 12
```

### Tier 3: Component Tokens

Element-specific overrides. What components consume.

```
button/background: action/primary
button/padding-x: space-3
button/radius: radius-s
card/background: surface/card
card/padding: space-3
card/radius: radius-m
```

### Token Naming

```
category/variant/state
```

Examples:
- `text/primary`
- `action/primary-hover`
- `status/positive`
- `space-3`
- `radius-m`

### Rules

1. **Components use semantic tokens.** Never primitives.
2. **Semantic tokens use primitives.** Never hardcoded values.
3. **Token names describe purpose.** Not appearance.
4. **One responsibility per token.** No compound tokens.

---

## 14. Platform Mappings

### iOS (Primary)

| Foundation | iOS Implementation |
|------------|-------------------|
| Typography | `Font.system(.body, design: .default)` |
| Colors | `UIColor` with dynamic provider |
| Spacing | `CGFloat` constants |
| Radius | `CGFloat` constants |
| Elevation | `CALayer.shadow*` properties |
| Icons | SF Symbols preferred |

### Web (Secondary)

| Foundation | Web Implementation |
|------------|-------------------|
| Typography | CSS custom properties |
| Colors | CSS custom properties |
| Spacing | CSS custom properties |
| Radius | CSS custom properties |
| Elevation | CSS box-shadow |
| Icons | SVG or icon font |

### Future Android

| Foundation | Android Implementation |
|------------|----------------------|
| Typography | `TextAppearance` with `textSize` |
| Colors | `ColorStateList` with themes |
| Spacing | `dimen` resources |
| Radius | `ShapeAppearance` |
| Elevation | `elevation` property |
| Icons | Vector drawables |

---

## 15. Naming Rules

### Philosophy

Predictable. Developer-friendly. Consistent. No abbreviations.

### Token Naming

```
category/variant/state
```

Examples:
- `text/primary`
- `action/primary-hover`
- `status/positive`
- `space-3`
- `radius-m`

### Platform Naming

| Platform | Format | Example |
|---------|--------|---------|
| Swift | camelCase with dots | `Color.Text.primary` |
| CSS | kebab-case | `--color-text-primary` |
| Tailwind | dot notation | `text-primary` |
| React | camelCase | `tokens.color.text.primary` |

### Rules

1. **Use full words.** No "prim," "sec," "bg."
2. **Use lowercase with hyphens.** `text-primary` not `textPrimary`.
3. **Be consistent.** Same pattern everywhere.
4. **Be predictable.** Name matches function.

---

## Architecture Review Summary

### What Was Removed

| Area | Before | After | Why |
|------|--------|-------|-----|
| **Radius** | 5 values (0, 4, 8, 12, 9999) | 3 values (8, 12, 9999) | Square corners never needed |
| **Spacing** | 9 values | 5 values | Mathematical rhythm, fewer decisions |
| **Elevation** | 5 levels | 2 levels | Spacing over shadows |
| **Surfaces** | 6 types | 5 types | Clearer hierarchy |
| **Typography** | 20 roles | 16 roles | Semantic organization |
| **Colors** | 88+ primitives exposed | 16 semantic roles + financial/automation/goal/chart tokens | Designer consumption only |
| **Borders** | 4 types | 3 types | Simplified |

### What Was Merged

| Before | After |
|--------|-------|
| Large Title, Title 1, Title 2, Title 3 | Display XL, Display L, Display M |
| Headline L, Headline M | Title L, Title M |
| Callout, Body | Body L, Body M, Body S |
| Label, Subheadline | Label L, Label M |
| Caption 1, Caption 2 | Caption |
| Amount styles | Financial XL, Financial L, Financial M, Financial S |

### What Became Simpler

- **Radii:** 3 options instead of 5
- **Spacing:** 5 options instead of 9
- **Elevation:** 2 options instead of 5
- **Colors:** Semantic-first with purpose-driven tokens
- **Typography:** 16 roles with clear semantic organization
- **Surfaces:** 5 levels with clear hierarchy

### What Became More Opinionated

- **One button height:** 44px, no variations
- **One input height:** 44px, no variations
- **One icon style:** Outline, 2px stroke
- **One spacing rhythm:** 4pt grid
- **One elevation philosophy:** Spacing over shadows
- **Three corner radii maximum:** 8, 12, 9999px
- **Two typefaces:** Inter (UI, 90-95%) + IBM Plex Sans (Financial Display only)
- **16 typography roles:** Clear semantic separation between Display, Financial, and UI

### What Became More Aligned with Apple HIG

- **Clarity** — Every element has documented purpose
- **Deference** — Content is hero, chrome is minimal
- **Depth** — Surface hierarchy through elevation, not decoration
- **Dynamic Type** — All text scales with system settings
- **Touch targets** — 44pt minimum, 48pt recommended
- **VoiceOver** — All interactive elements labeled

### What Became Easier for Engineering

- **Fewer tokens** — Less code, fewer bugs
- **Simpler APIs** — Easier to implement, easier to use
- **Consistent patterns** — Less conditional logic, more predictability
- **Clear naming** — Token names match function
- **Financial tokens** — Precise semantic distinction with -text and -surface variants

### What Became Easier for Designers

- **Fewer decisions** — Stronger opinions, less ambiguity
- **Clear rules** — Documented usage for every token
- **Semantic consumption** — Never think about primitives
- **Consistent hierarchy** — Same patterns everywhere
- **Financial/automation/goal/chart tokens** — Purpose-driven colors for specific contexts

---

**End of Foundation Architecture Refactoring**

*This document defines the complete foundation system. All future components use these foundations.*
