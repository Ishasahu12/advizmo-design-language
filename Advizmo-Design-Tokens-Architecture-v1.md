# Advizmo Design Token Architecture v1.0

## Chapter 3: Complete Token System

**Enterprise-grade token architecture for 9+ platforms**
**Scalable for 5-10 years without restructuring**

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Token Hierarchy](#2-token-hierarchy)
3. [Collection Structure](#3-collection-structure)
4. [Primitive Tokens](#4-primitive-tokens)
5. [Semantic Tokens](#5-semantic-tokens)
6. [Component Tokens](#6-component-tokens)
7. [Token Naming Convention](#7-token-naming-convention)
8. [Mode System](#8-mode-system)
9. [Variable Rules](#9-variable-rules)
10. [Engineering Implementation](#10-engineering-implementation)
11. [Platform Mapping](#11-platform-mapping)
12. [Validation Checklist](#12-validation-checklist)

---

## 1. Architecture Overview

### Token Flow

```
Foundation (Primitives)
    ↓
Semantic Tokens
    ↓
Component Tokens
    ↓
Components
    ↓
Patterns
    ↓
Templates
    ↓
Screens
```

### Core Principle

**Components never reference Primitives directly.**

```
❌ Button → Blue-500
✅ Button → Component/Button/Primary/Background → Semantic/Action/Primary → Primitive/Color/Blue/600
```

### Token Count Estimate

| Layer | Count | Purpose |
|-------|-------|---------|
| Primitive | ~250 | Raw values |
| Semantic | ~120 | Purpose aliases |
| Component | ~400 | Element-specific |
| **Total** | **~770** | Complete system |

---

## 2. Token Hierarchy

### Strict Inheritance Rule

| Source | May Reference | May NOT Reference |
|--------|---------------|-------------------|
| Primitive | Nothing (root) | — |
| Semantic | Primitive | Semantic, Component |
| Component | Semantic | Primitive, Component |
| Component (UI) | Component | Semantic, Primitive |

### Flow Visualization

```
┌─────────────────────────────────────────────────┐
│  LAYER 1: Primitive Tokens                      │
│  Raw values. No meaning.                        │
│  Example: blue-500, space-16, radius-8          │
└──────────────────────┬──────────────────────────┘
                      │ referenced by
┌──────────────────────▼──────────────────────────┐
│  LAYER 2: Semantic Tokens                       │
│  Purpose-driven aliases.                        │
│  Example: action-primary, text-secondary         │
└──────────────────────┬──────────────────────────┘
                      │ referenced by
┌──────────────────────▼──────────────────────────┐
│  LAYER 3: Component Tokens                      │
│  Element-specific tokens.                       │
│  Example: button-background, card-padding        │
└──────────────────────┬──────────────────────────┘
                      │ consumed by
┌──────────────────────▼──────────────────────────┐
│  LAYER 4: Components                            │
│  UI elements built from tokens.                 │
│  Example: Button, Card, Input                    │
└──────────────────────┬──────────────────────────┘
                      │ composed into
┌──────────────────────▼──────────────────────────┐
│  LAYER 5: Patterns → Templates → Screens        │
│  Pre-built compositions for common flows.       │
└─────────────────────────────────────────────────┘
```

### Inheritance Validation

| Source → Target | Valid? | Example |
|-----------------|--------|---------|
| Primitive → Semantic | ✅ | `action-primary → blue-600` |
| Primitive → Component | ❌ | `button-bg → blue-600` (FORBIDDEN) |
| Primitive → Component UI | ❌ | `button-bg → blue-600` (FORBIDDEN) |
| Semantic → Component | ✅ | `button-bg → action-primary` |
| Semantic → Component UI | ✅ | `button-bg → action-primary` |
| Component → Component UI | ✅ | `card-bg → component-card-bg` |
| Component UI → Component | ❌ | (reversed flow, FORBIDDEN) |

---

## 3. Collection Structure

### Figma Collections

```
Advizmo Design System
│
├── 01 Primitive
│   ├── Color
│   │   ├── Blue (11 shades)
│   │   ├── Green (11 shades)
│   │   ├── Gray (11 shades)
│   │   ├── Red (11 shades)
│   │   ├── Orange (11 shades)
│   │   ├── Yellow (11 shades)
│   │   ├── Purple (11 shades)
│   │   ├── Teal (11 shades)
│   │   └── Neutral (White, Black, Transparent)
│   ├── Spacing (9 values)
│   ├── Radius (4 values)
│   ├── Typography (11 styles)
│   ├── Border Width (4 values)
│   ├── Opacity (6 values)
│   ├── Elevation (3 values)
│   ├── Blur (4 values)
│   ├── Stroke Width (4 values)
│   ├── Icon Size (5 values)
│   ├── Duration (5 values)
│   ├── Delay (3 values)
│   ├── Easing (4 curves)
│   ├── Grid (6 values)
│   ├── Columns (4 values)
│   ├── Breakpoints (5 values)
│   ├── Container Width (4 values)
│   ├── Animation (4 types)
│   ├── Z Index (7 values)
│   ├── Aspect Ratio (4 values)
│   └── Corner Radius (alias of Radius)
│
├── 02 Semantic
│   ├── Text (11 tokens)
│   ├── Surface (8 tokens)
│   ├── Border (5 tokens)
│   ├── Action (7 tokens)
│   ├── Status (4 tokens)
│   ├── Financial (22 tokens)
│   ├── AI (7 tokens)
│   └── Chart (14 tokens)
│
├── 03 Component
│   ├── Button (12 tokens)
│   ├── Input (14 tokens)
│   ├── Card (8 tokens)
│   ├── Navigation (10 tokens)
│   ├── Bottom Navigation (8 tokens)
│   ├── Sheet (6 tokens)
│   ├── Dialog (8 tokens)
│   ├── Alert (8 tokens)
│   ├── Badge (6 tokens)
│   ├── Tag (6 tokens)
│   ├── Chip (6 tokens)
│   ├── Checkbox (6 tokens)
│   ├── Radio (6 tokens)
│   ├── Toggle (8 tokens)
│   ├── Slider (6 tokens)
│   ├── Progress (6 tokens)
│   ├── Stepper (6 tokens)
│   ├── Avatar (6 tokens)
│   ├── List (8 tokens)
│   ├── Table (8 tokens)
│   ├── Chart (8 tokens)
│   ├── Search (6 tokens)
│   ├── Tooltip (6 tokens)
│   ├── Toast (6 tokens)
│   ├── Snackbar (6 tokens)
│   ├── Skeleton (4 tokens)
│   ├── Loading (4 tokens)
│   ├── Calendar (8 tokens)
│   ├── Date Picker (6 tokens)
│   ├── Segment Control (6 tokens)
│   ├── Tabs (8 tokens)
│   └── Empty State (6 tokens)
│
├── 04 Motion
│   ├── Duration
│   ├── Easing
│   └── Spring
│
├── 05 Typography
│   ├── Font Family
│   ├── Font Size
│   ├── Font Weight
│   ├── Line Height
│   ├── Letter Spacing
│   └── Paragraph Spacing
│
├── 06 Layout
│   ├── Grid
│   ├── Columns
│   ├── Margins
│   ├── Gutters
│   └── Container Width
│
├── 07 Charts
│   ├── Series Colors
│   ├── Grid Colors
│   ├── Axis Colors
│   └── Tooltip Colors
│
├── 08 Financial
│   ├── Cash Colors
│   ├── Investment Colors
│   ├── Risk Colors
│   ├── Goal Colors
│   └── Account Colors
│
├── 09 AI
│   ├── Primary
│   ├── Secondary
│   ├── Confidence
│   └── Status
│
├── 10 Accessibility
│   ├── Focus Ring
│   ├── Touch Target
│   ├── Contrast
│   └── Motion
│
├── 11 Web Overrides (Future)
│   └── Platform-specific overrides
│
└── 12 Android Overrides (Future)
    └── Platform-specific overrides
```

### Collection Rules

1. **Never merge collections.** Each has a single responsibility.
2. **Collections reference other collections** via Variable Aliases.
3. **Collections are ordered** by dependency (Primitive first, Component last).
4. **Collections may have modes** (Light, Dark, High Contrast).

---

## 4. Primitive Tokens

### 4.1 Color Primitives

#### Blue (Primary Brand)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `blue-50` | #EFF6FF | Lightest |
| `blue-100` | #DBEAFE | Light |
| `blue-200` | #BFDBFE | Border light |
| `blue-300` | #93C5FD | Disabled |
| `blue-400` | #60A5FA | Placeholder |
| `blue-500` | #3B82F6 | Base |
| `blue-600` | #2563EB | Action |
| `blue-700` | #1D4ED8 | Hover |
| `blue-800` | #1E40AF | Pressed |
| `blue-900` | #1E3A8A | Dark |
| `blue-950` | #172554 | Darkest |

#### Green (Financial Growth)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `green-50` | #ECFDF5 | Lightest |
| `green-100` | #D1FAE5 | Light |
| `green-200` | #A7F3D0 | Border light |
| `green-300` | #6EE7B7 | Disabled |
| `green-400` | #34D399 | Placeholder |
| `green-500` | #10B981 | Base |
| `green-600` | #059669 | Action |
| `green-700` | #047857 | Hover |
| `green-800` | #065F46 | Pressed |
| `green-900` | #064E3B | Dark |
| `green-950` | #022C22 | Darkest |

#### Gray (Neutral)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `gray-50` | #F9FAFB | Lightest |
| `gray-100` | #F3F4F6 | Light |
| `gray-200` | #E5E7EB | Border light |
| `gray-300` | #D1D5DB | Disabled |
| `gray-400` | #9CA3AF | Placeholder |
| `gray-500` | #6B7280 | Base |
| `gray-600` | #4B5563 | Hover |
| `gray-700` | #374151 | Pressed |
| `gray-800` | #1F2937 | Dark |
| `gray-900` | #111827 | Text |
| `gray-950` | #030712 | Darkest |

#### Red (Financial Loss / Error)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `red-50` | #FEF2F2 | Lightest |
| `red-100` | #FEE2E2 | Light |
| `red-200` | #FECACA | Border light |
| `red-300` | #FCA5A5 | Disabled |
| `red-400` | #F87171 | Placeholder |
| `red-500` | #EF4444 | Base |
| `red-600` | #DC2626 | Action |
| `red-700` | #B91C1C | Hover |
| `red-800` | #991B1B | Pressed |
| `red-900` | #7F1D1D | Dark |
| `red-950` | #450A0A | Darkest |

#### Orange (Warning)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `orange-50` | #FFF7ED | Lightest |
| `orange-100` | #FFEDD5 | Light |
| `orange-200` | #FED7AA | Border light |
| `orange-300` | #FDBA74 | Disabled |
| `orange-400` | #FB923C | Placeholder |
| `orange-500` | #F97316 | Base |
| `orange-600` | #EA580C | Action |
| `orange-700` | #C2410C | Hover |
| `orange-800` | #9A3412 | Pressed |
| `orange-900` | #7C2D12 | Dark |
| `orange-950` | #431407 | Darkest |

#### Yellow (Caution)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `yellow-50` | #FEFCE8 | Lightest |
| `yellow-100` | #FEF9C3 | Light |
| `yellow-200` | #FEF08A | Border light |
| `yellow-300` | #FDE047 | Disabled |
| `yellow-400` | #FACC15 | Placeholder |
| `yellow-500` | #EAB308 | Base |
| `yellow-600` | #CA8A04 | Action |
| `yellow-700` | #A16207 | Hover |
| `yellow-800` | #854D0E | Pressed |
| `yellow-900` | #713F12 | Dark |
| `yellow-950` | #422006 | Darkest |

#### Purple (AI)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `purple-50` | #FAF5FF | Lightest |
| `purple-100` | #F3E8FF | Light |
| `purple-200` | #E9D5FF | Border light |
| `purple-300` | #D8B4FE | Disabled |
| `purple-400` | #C084FC | Placeholder |
| `purple-500` | #A855F7 | Base |
| `purple-600` | #9333EA | Action |
| `purple-700` | #7E22CE | Hover |
| `purple-800` | #6B21A8 | Pressed |
| `purple-900` | #581C87 | Dark |
| `purple-950` | #3B0764 | Darkest |

#### Teal (Connected)

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `teal-50` | #F0FDFA | Lightest |
| `teal-100` | #CCFBF1 | Light |
| `teal-200` | #99F6E4 | Border light |
| `teal-300` | #5EEAD4 | Disabled |
| `teal-400` | #2DD4BF | Placeholder |
| `teal-500` | #14B8A6 | Base |
| `teal-600` | #0D9488 | Action |
| `teal-700` | #0F766E | Hover |
| `teal-800` | #115E59 | Pressed |
| `teal-900` | #134E4A | Dark |
| `teal-950` | #042F2E | Darkest |

#### Neutral

| Variable Name | Hex | Purpose |
|---------------|-----|---------|
| `white` | #FFFFFF | White |
| `black` | #000000 | Black |
| `transparent` | transparent | Transparent |

---

### 4.2 Spacing Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Default |
| `space-3` | 12px | Comfortable |
| `space-4` | 16px | Standard |
| `space-6` | 24px | Section |
| `space-8` | 32px | Large |
| `space-12` | 48px | XL |
| `space-16` | 64px | 2XL |
| `space-24` | 96px | 3XL |

---

### 4.3 Radius Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `radius-none` | 0px | No radius |
| `radius-sm` | 8px | Small elements |
| `radius-md` | 12px | Medium elements |
| `radius-full` | 9999px | Full circle |

---

### 4.4 Border Width Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `border-1` | 1px | Default |
| `border-2` | 2px | Strong |
| `border-focus` | 2px | Focus ring |
| `border-disabled` | 1px | Disabled |

---

### 4.5 Opacity Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `opacity-0` | 0% | Fully transparent |
| `opacity-10` | 10% | Near transparent |
| `opacity-25` | 25% | Light overlay |
| `opacity-50` | 50% | Half opacity |
| `opacity-75` | 75% | Light dimming |
| `opacity-100` | 100% | Fully opaque |

---

### 4.6 Elevation Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `elevation-none` | none | No shadow |
| `elevation-raised` | 0 1px 3px rgba(0,0,0,0.08) | Subtle lift |
| `elevation-floating` | 0 4px 12px rgba(0,0,0,0.12) | Modal lift |

---

### 4.7 Blur Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `blur-none` | none | No blur |
| `blur-sm` | 8px | Subtle |
| `blur-md` | 16px | Medium |
| `blur-lg` | 24px | Heavy |

---

### 4.8 Stroke Width Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `stroke-1` | 1px | Thin |
| `stroke-1_5` | 1.5px | Regular |
| `stroke-2` | 2px | Bold |
| `stroke-3` | 3px | Heavy |

---

### 4.9 Icon Size Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `icon-16` | 16px | Compact |
| `icon-20` | 20px | Small |
| `icon-24` | 24px | Standard |
| `icon-28` | 28px | Large |
| `icon-32` | 32px | XL |

---

### 4.10 Duration Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `duration-instant` | 0ms | No animation |
| `duration-fast` | 100ms | Micro |
| `duration-normal` | 250ms | Standard |
| `duration-slow` | 350ms | Page transitions |
| `duration-slower` | 500ms | Complex |

---

### 4.11 Delay Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `delay-none` | 0ms | No delay |
| `delay-short` | 50ms | Quick |
| `delay-medium` | 100ms | Standard |

---

### 4.12 Easing Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `easing-standard` | cubic-bezier(0.25, 0.1, 0.25, 1) | Default |
| `easing-enter` | cubic-bezier(0, 0, 0.2, 1) | Entering |
| `easing-exit` | cubic-bezier(0.4, 0, 1, 1) | Exiting |
| `easing-linear` | linear | Progress |

---

### 4.13 Grid Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `grid-margin-sm` | 16px | Mobile margin |
| `grid-margin-md` | 24px | Tablet margin |
| `grid-margin-lg` | 48px | Desktop margin |
| `grid-gutter-sm` | 16px | Mobile gutter |
| `grid-gutter-md` | 20px | Tablet gutter |
| `grid-gutter-lg` | 24px | Desktop gutter |

---

### 4.14 Column Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `columns-1` | 1 | Single column |
| `columns-2` | 2 | Two columns |
| `columns-3` | 3 | Three columns |
| `columns-4` | 4 | Four columns |

---

### 4.15 Breakpoint Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `breakpoint-sm` | 640px | Small |
| `breakpoint-md` | 768px | Medium |
| `breakpoint-lg` | 1024px | Large |
| `breakpoint-xl` | 1280px | XL |
| `breakpoint-2xl` | 1536px | 2XL |

---

### 4.16 Container Width Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `container-sm` | 640px | Small container |
| `container-md` | 768px | Medium container |
| `container-lg` | 1024px | Large container |
| `container-xl` | 1280px | XL container |

---

### 4.17 Animation Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `animation-fade` | opacity 0→1 | Fade |
| `animation-slide-up` | translateY 4px→0 | Slide up |
| `animation-slide-down` | translateY -4px→0 | Slide down |
| `animation-scale` | scale 0.95→1 | Scale |

---

### 4.18 Z-Index Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `zindex-0` | 0 | Default |
| `zindex-10` | 10 | Raised |
| `zindex-100` | 100 | Dropdown |
| `zindex-200` | 200 | Sticky |
| `zindex-500` | 500 | Modal |
| `zindex-600` | 600 | Toast |
| `zindex-700` | 700 | Tooltip |

---

### 4.19 Aspect Ratio Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `ratio-square` | 1/1 | Square |
| `ratio-landscape` | 16/9 | Landscape |
| `ratio-portrait` | 9/16 | Portrait |
| `ratio-wide` | 21/9 | Wide |

---

### 4.20 Corner Radius Primitives

| Variable Name | Value | Purpose |
|---------------|-------|---------|
| `corner-none` | 0px | No radius |
| `corner-sm` | 8px | Small |
| `corner-md` | 12px | Medium |
| `corner-full` | 9999px | Full |

---

## 5. Semantic Tokens

### 5.1 Text Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `text-primary` | gray-900 | Primary text |
| `text-secondary` | gray-500 | Secondary text |
| `text-tertiary` | gray-400 | Tertiary text |
| `text-disabled` | gray-300 | Disabled text |
| `text-inverse` | white | Inverse text |
| `text-brand` | blue-600 | Brand text |
| `text-positive` | green-700 | Positive text |
| `text-negative` | red-700 | Negative text |
| `text-warning` | orange-700 | Warning text |
| `text-ai` | purple-600 | AI text |

---

### 5.2 Surface Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `background-default` | gray-50 | Page background |
| `background-secondary` | gray-100 | Secondary background |
| `background-tertiary` | gray-200 | Tertiary background |
| `surface-default` | white | Card surface |
| `surface-secondary` | gray-100 | Secondary surface |
| `surface-elevated` | white | Elevated surface |
| `surface-selected` | blue-50 | Selected surface |
| `surface-disabled` | gray-100 | Disabled surface |

---

### 5.3 Border Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `border-default` | gray-200 | Default border |
| `border-strong` | gray-400 | Strong border |
| `border-focus` | blue-500 | Focus ring |
| `border-disabled` | gray-200 | Disabled border |
| `divider-default` | gray-200 | Divider |

---

### 5.4 Action Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `action-primary` | blue-600 | Primary action |
| `action-primary-hover` | blue-700 | Primary hover |
| `action-primary-pressed` | blue-800 | Primary pressed |
| `action-secondary` | gray-100 | Secondary action |
| `action-secondary-hover` | gray-200 | Secondary hover |
| `action-destructive` | red-600 | Destructive action |
| `action-disabled` | gray-300 | Disabled action |

---

### 5.5 Status Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `status-success` | green-600 | Success |
| `status-warning` | orange-500 | Warning |
| `status-error` | red-600 | Error |
| `status-information` | blue-500 | Information |

---

### 5.6 Financial Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `financial-cash-available` | green-600 | Available cash |
| `financial-cash-reserved` | gray-500 | Reserved cash |
| `financial-safe-to-invest` | green-600 | Investment readiness |
| `financial-investment-growth` | green-600 | Portfolio gains |
| `financial-investment-loss` | red-600 | Portfolio losses |
| `financial-tax-saving` | green-600 | Tax benefits |
| `financial-portfolio` | blue-600 | Portfolio section |
| `financial-net-worth` | gray-900 | Net worth |
| `financial-pending-transfer` | yellow-500 | Pending |
| `financial-upcoming-bills` | orange-500 | Bills |
| `financial-goal-achieved` | green-600 | Goal reached |
| `financial-goal-progress` | blue-600 | Goal in progress |
| `financial-goal-missed` | red-600 | Goal missed |
| `financial-risk-low` | green-500 | Low risk |
| `financial-risk-medium` | orange-500 | Medium risk |
| `financial-risk-high` | red-500 | High risk |
| `financial-automation-enabled` | green-600 | Automation on |
| `financial-automation-disabled` | gray-400 | Automation off |
| `financial-account-connected` | teal-500 | Connected |
| `financial-account-disconnected` | gray-400 | Disconnected |
| `financial-verified` | green-600 | Verified |
| `financial-unverified` | gray-400 | Unverified |

---

### 5.7 AI Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `ai-primary` | purple-500 | AI primary |
| `ai-secondary` | purple-400 | AI secondary |
| `ai-recommendation` | purple-500 | Recommendation |
| `ai-confidence` | purple-600 | Confidence |
| `ai-warning` | orange-500 | AI warning |
| `ai-success` | green-600 | AI success |
| `ai-neutral` | gray-500 | AI neutral |

---

### 5.8 Chart Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `chart-positive` | green-500 | Positive data |
| `chart-negative` | red-500 | Negative data |
| `chart-neutral` | gray-400 | Neutral data |
| `chart-primary` | blue-500 | Primary series |
| `chart-secondary` | green-400 | Secondary series |
| `chart-comparison` | purple-400 | Comparison |
| `chart-goal` | blue-600 | Goal line |
| `chart-forecast` | teal-400 | Forecast |
| `chart-grid` | gray-200 | Grid lines |
| `chart-axis` | gray-400 | Axis labels |
| `chart-tooltip-bg` | gray-800 | Tooltip bg |
| `chart-tooltip-text` | white | Tooltip text |
| `chart-background` | transparent | Chart bg |
| `chart-highlight` | blue-100 | Highlight |

---

## 6. Component Tokens

### 6.1 Button Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `button-primary-bg` | action-primary | Primary bg |
| `button-primary-bg-hover` | action-primary-hover | Primary hover |
| `button-primary-bg-pressed` | action-primary-pressed | Primary pressed |
| `button-primary-bg-disabled` | action-disabled | Primary disabled |
| `button-primary-text` | text-inverse | Primary text |
| `button-primary-text-disabled` | text-disabled | Primary disabled text |
| `button-primary-radius` | radius-sm | Primary radius |
| `button-primary-padding-x` | space-4 | Primary horizontal |
| `button-primary-padding-y` | space-3 | Primary vertical |
| `button-secondary-bg` | action-secondary | Secondary bg |
| `button-secondary-bg-hover` | action-secondary-hover | Secondary hover |
| `button-secondary-bg-pressed` | gray-300 | Secondary pressed |
| `button-secondary-text` | gray-700 | Secondary text |
| `button-secondary-text-disabled` | text-disabled | Secondary disabled text |
| `button-secondary-border` | border-default | Secondary border |
| `button-secondary-radius` | radius-sm | Secondary radius |
| `button-destructive-bg` | action-destructive | Destructive bg |
| `button-destructive-bg-hover` | red-700 | Destructive hover |
| `button-destructive-bg-pressed` | red-800 | Destructive pressed |
| `button-destructive-text` | text-inverse | Destructive text |
| `button-ghost-bg` | transparent | Ghost bg |
| `button-ghost-bg-hover` | gray-100 | Ghost hover |
| `button-ghost-bg-pressed` | gray-200 | Ghost pressed |
| `button-ghost-text` | action-primary | Ghost text |
| `button-small-height` | 32px | Small height |
| `button-medium-height` | 44px | Medium height |
| `button-large-height` | 52px | Large height |
| `button-small-font` | 14px | Small font |
| `button-medium-font` | 16px | Medium font |
| `button-large-font` | 18px | Large font |

---

### 6.2 Input Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `input-bg` | surface-default | Background |
| `input-bg-disabled` | surface-disabled | Disabled bg |
| `input-border` | border-default | Border |
| `input-border-hover` | gray-400 | Hover border |
| `input-border-focus` | border-focus | Focus border |
| `input-border-error` | border-negative | Error border |
| `input-text` | text-primary | Text |
| `input-text-disabled` | text-disabled | Disabled text |
| `input-placeholder` | text-tertiary | Placeholder |
| `input-label` | text-secondary | Label |
| `input-helper` | text-tertiary | Helper |
| `input-error` | text-negative | Error text |
| `input-radius` | radius-sm | Radius |
| `input-padding-x` | space-3 | Horizontal |
| `input-padding-y` | space-2_5 | Vertical |
| `input-min-height` | 44px | Min height |

---

### 6.3 Card Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `card-bg` | surface-default | Background |
| `card-bg-secondary` | surface-secondary | Secondary bg |
| `card-border` | border-default | Border |
| `card-radius` | radius-md | Radius |
| `card-padding` | space-4 | Padding |
| `card-padding-compact` | space-3 | Compact padding |
| `card-shadow-none` | elevation-none | No shadow |
| `card-shadow-raised` | elevation-raised | Raised shadow |
| `card-shadow-floating` | elevation-floating | Floating shadow |

---

### 6.4 Navigation Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `navbar-bg` | surface-default | Background |
| `navbar-border` | border-default | Border |
| `navbar-title` | text-primary | Title |
| `navbar-title-weight` | 600 | Title weight |
| `navbar-height` | 44px | Height |
| `navbar-padding-x` | space-4 | Horizontal |
| `tabbar-bg` | surface-default | Background |
| `tabbar-border` | border-default | Border |
| `tabbar-item-active` | action-primary | Active item |
| `tabbar-item-inactive` | text-tertiary | Inactive item |
| `tabbar-height` | 49px | Height |

---

### 6.5 Bottom Navigation Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `bottomnav-bg` | surface-default | Background |
| `bottomnav-border` | border-default | Border |
| `bottomnav-item-active` | action-primary | Active item |
| `bottomnav-item-inactive` | text-tertiary | Inactive item |
| `bottomnav-height` | 83px | Height (with safe area) |
| `bottomnav-icon-size` | icon-24 | Icon size |
| `bottomnav-label-size` | 10px | Label size |

---

### 6.6 Sheet Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `sheet-bg` | surface-elevated | Background |
| `sheet-backdrop` | black-40 | Backdrop |
| `sheet-handle` | gray-300 | Handle |
| `sheet-radius` | radius-md | Radius |
| `sheet-handle-width` | 36px | Handle width |
| `sheet-handle-height` | 5px | Handle height |

---

### 6.7 Dialog Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `dialog-bg` | surface-elevated | Background |
| `dialog-backdrop` | black-50 | Backdrop |
| `dialog-title` | text-primary | Title |
| `dialog-content` | text-secondary | Content |
| `dialog-radius` | radius-md | Radius |
| `dialog-padding` | space-6 | Padding |
| `dialog-shadow` | elevation-floating | Shadow |

---

### 6.8 Alert Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `alert-info-bg` | background-secondary | Info bg |
| `alert-info-border` | border-default | Info border |
| `alert-info-icon` | text-brand | Info icon |
| `alert-success-bg` | green-50 | Success bg |
| `alert-success-border` | green-200 | Success border |
| `alert-success-icon` | text-positive | Success icon |
| `alert-warning-bg` | orange-50 | Warning bg |
| `alert-warning-border` | orange-200 | Warning border |
| `alert-warning-icon` | text-warning | Warning icon |
| `alert-error-bg` | red-50 | Error bg |
| `alert-error-border` | red-200 | Error border |
| `alert-error-icon` | text-negative | Error icon |
| `alert-radius` | radius-sm | Radius |
| `alert-padding` | space-3 | Padding |

---

### 6.9 Badge Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `badge-status-bg` | green-50 | Status bg |
| `badge-status-text` | text-positive | Status text |
| `badge-count-bg` | gray-600 | Count bg |
| `badge-count-text` | text-inverse | Count text |
| `badge-label-bg` | background-secondary | Label bg |
| `badge-label-text` | text-secondary | Label text |
| `badge-radius` | radius-full | Radius |
| `badge-padding-x` | space-2 | Horizontal |
| `badge-padding-y` | space-1 | Vertical |

---

### 6.10 Tag Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tag-default-bg` | gray-100 | Default bg |
| `tag-default-text` | gray-700 | Default text |
| `tag-default-border` | border-default | Default border |
| `tag-brand-bg` | blue-50 | Brand bg |
| `tag-brand-text` | text-brand | Brand text |
| `tag-brand-border` | blue-200 | Brand border |
| `tag-radius` | radius-sm | Radius |
| `tag-padding-x` | space-2 | Horizontal |
| `tag-padding-y` | space-1 | Vertical |

---

### 6.11 Chip Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `chip-default-bg` | gray-100 | Default bg |
| `chip-default-text` | gray-700 | Default text |
| `chip-selected-bg` | action-primary | Selected bg |
| `chip-selected-text` | text-inverse | Selected text |
| `chip-radius` | radius-full | Radius |
| `chip-padding-x` | space-3 | Horizontal |
| `chip-padding-y` | space-2 | Vertical |

---

### 6.12 Checkbox Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `checkbox-bg` | surface-default | Background |
| `checkbox-bg-checked` | action-primary | Checked bg |
| `checkbox-border` | border-default | Border |
| `checkbox-border-checked` | action-primary | Checked border |
| `checkbox-border-disabled` | border-disabled | Disabled border |
| `checkbox-icon` | text-inverse | Check icon |
| `checkbox-radius` | radius-sm | Radius |
| `checkbox-size` | 20px | Size |

---

### 6.13 Radio Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `radio-bg` | surface-default | Background |
| `radio-bg-selected` | action-primary | Selected bg |
| `radio-border` | border-default | Border |
| `radio-border-selected` | action-primary | Selected border |
| `radio-border-disabled` | border-disabled | Disabled border |
| `radio-dot` | text-inverse | Inner dot |
| `radio-radius` | radius-full | Radius |
| `radio-size` | 20px | Size |

---

### 6.14 Toggle Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `toggle-track-off` | gray-300 | Off track |
| `toggle-track-on` | action-primary | On track |
| `toggle-track-disabled` | gray-200 | Disabled track |
| `toggle-thumb` | white | Thumb |
| `toggle-thumb-disabled` | gray-400 | Disabled thumb |
| `toggle-width` | 51px | Width |
| `toggle-height` | 31px | Height |
| `toggle-thumb-size` | 27px | Thumb size |

---

### 6.15 Slider Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `slider-track` | gray-200 | Track |
| `slider-track-active` | action-primary | Active track |
| `slider-thumb` | white | Thumb |
| `slider-thumb-border` | action-primary | Thumb border |
| `slider-height` | 4px | Track height |
| `slider-thumb-size` | 24px | Thumb size |

---

### 6.16 Progress Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `progress-track` | gray-200 | Track |
| `progress-indicator` | action-primary | Indicator |
| `progress-indicator-positive` | status-success | Positive |
| `progress-indicator-negative` | status-error | Negative |
| `progress-height` | 4px | Track height |
| `progress-radius` | radius-full | Radius |

---

### 6.17 Stepper Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `stepper-bg` | surface-default | Background |
| `stepper-border` | border-default | Border |
| `stepper-button-bg` | gray-100 | Button bg |
| `stepper-button-text` | text-primary | Button text |
| `stepper-value-text` | text-primary | Value text |
| `stepper-radius` | radius-sm | Radius |

---

### 6.18 Avatar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `avatar-bg` | gray-200 | Background |
| `avatar-text` | text-primary | Text |
| `avatar-border` | border-default | Border |
| `avatar-radius` | radius-full | Radius |
| `avatar-small-size` | 32px | Small |
| `avatar-medium-size` | 40px | Medium |
| `avatar-large-size` | 56px | Large |
| `avatar-xl-size` | 80px | XL |

---

### 6.19 List Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `list-item-bg` | surface-default | Background |
| `list-item-bg-hover` | surface-secondary | Hover |
| `list-item-bg-pressed` | surface-tertiary | Pressed |
| `list-item-border` | divider-default | Border |
| `list-item-padding-x` | space-4 | Horizontal |
| `list-item-padding-y` | space-3 | Vertical |
| `list-item-min-height` | 44px | Min height |
| `list-item-icon` | text-secondary | Icon |

---

### 6.20 Table Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `table-header-bg` | surface-secondary | Header bg |
| `table-header-text` | text-secondary | Header text |
| `table-row-bg` | surface-default | Row bg |
| `table-row-bg-hover` | surface-secondary | Row hover |
| `table-row-bg-selected` | surface-selected | Selected row |
| `table-border` | divider-default | Border |
| `table-cell-padding` | space-3 | Cell padding |

---

### 6.21 Chart Component Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `chart-component-bg` | chart-background | Background |
| `chart-component-grid` | chart-grid | Grid |
| `chart-component-axis` | chart-axis | Axis |
| `chart-component-tooltip-bg` | chart-tooltip-bg | Tooltip bg |
| `chart-component-tooltip-text` | chart-tooltip-text | Tooltip text |
| `chart-component-primary` | chart-primary | Primary |
| `chart-component-secondary` | chart-secondary | Secondary |

---

### 6.22 Search Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `search-bg` | surface-default | Background |
| `search-bg-focused` | surface-elevated | Focused bg |
| `search-border` | border-default | Border |
| `search-border-focus` | border-focus | Focus border |
| `search-placeholder` | text-tertiary | Placeholder |
| `search-icon` | text-tertiary | Icon |
| `search-radius` | radius-sm | Radius |

---

### 6.23 Tooltip Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tooltip-bg` | gray-800 | Background |
| `tooltip-text` | text-inverse | Text |
| `tooltip-radius` | radius-sm | Radius |
| `tooltip-padding-x` | space-2 | Horizontal |
| `tooltip-padding-y` | space-1 | Vertical |
| `tooltip-shadow` | elevation-raised | Shadow |

---

### 6.24 Toast Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `toast-bg` | gray-800 | Background |
| `toast-text` | text-inverse | Text |
| `toast-action` | blue-400 | Action |
| `toast-radius` | radius-sm | Radius |
| `toast-padding` | space-3 | Padding |
| `toast-shadow` | elevation-floating | Shadow |

---

### 6.25 Snackbar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `snackbar-bg` | gray-800 | Background |
| `snackbar-text` | text-inverse | Text |
| `snackbar-action` | blue-400 | Action |
| `snackbar-radius` | radius-sm | Radius |
| `snackbar-padding` | space-3 | Padding |

---

### 6.26 Skeleton Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `skeleton-bg` | gray-200 | Background |
| `skeleton-shimmer` | gray-100 | Shimmer |
| `skeleton-radius` | radius-sm | Radius |
| `skeleton-height` | 16px | Height |

---

### 6.27 Loading Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `loading-indicator` | action-primary | Indicator |
| `loading-track` | gray-200 | Track |
| `loading-size-sm` | 16px | Small |
| `loading-size-md` | 24px | Medium |

---

### 6.28 Calendar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `calendar-bg` | surface-default | Background |
| `calendar-header-text` | text-primary | Header |
| `calendar-day-text` | text-primary | Day text |
| `calendar-day-bg-selected` | action-primary | Selected bg |
| `calendar-day-text-selected` | text-inverse | Selected text |
| `calendar-day-bg-today` | blue-50 | Today bg |
| `calendar-day-bg-disabled` | text-disabled | Disabled bg |
| `calendar-border` | border-default | Border |

---

### 6.29 Date Picker Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `datepicker-bg` | surface-elevated | Background |
| `datepicker-header-text` | text-primary | Header |
| `datepicker-day-text` | text-primary | Day text |
| `datepicker-day-bg-selected` | action-primary | Selected bg |
| `datepicker-day-text-selected` | text-inverse | Selected text |
| `datepicker-border` | border-default | Border |

---

### 6.30 Segment Control Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `segment-bg` | gray-100 | Background |
| `segment-bg-selected` | surface-default | Selected bg |
| `segment-text` | text-secondary | Text |
| `segment-text-selected` | text-primary | Selected text |
| `segment-border` | border-default | Border |
| `segment-radius` | radius-sm | Radius |

---

### 6.31 Tabs Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tabs-bg` | surface-default | Background |
| `tabs-border` | border-default | Border |
| `tabs-item-active` | action-primary | Active item |
| `tabs-item-inactive` | text-tertiary | Inactive item |
| `tabs-item-font-weight-active` | 600 | Active weight |
| `tabs-item-font-weight-inactive` | 400 | Inactive weight |

---

### 6.32 Empty State Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `emptystate-icon` | text-tertiary | Icon |
| `emptystate-title` | text-primary | Title |
| `emptystate-description` | text-secondary | Description |
| `emptystate-action-bg` | action-primary | Action bg |
| `emptystate-action-text` | text-inverse | Action text |
| `emptystate-bg` | transparent | Background |

---

## 7. Token Naming Convention

### Hierarchy

```
Category / Subcategory / Item / Variant / State
```

### Naming Rules

1. **Use full words.** No abbreviations.
   - ✅ `button/primary/background`
   - ❌ `btn/pri/bg`

2. **Use lowercase with slashes.** Not camelCase or kebab-case.
   - ✅ `text/primary`
   - ❌ `textPrimary`
   - ❌ `text-primary`

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
| Figma | Slash hierarchy | `Semantic/Text/Primary` |
| Swift | Dot notation | `Color.text.primary` |
| CSS | Kebab-case | `--color-text-primary` |
| Tailwind | Dot notation | `text-primary` |
| React | Camel case | `tokens.text.primary` |
| Android | Camel case | `textPrimary` |

---

## 8. Mode System

### Available Modes

| Mode | Purpose | Status |
|------|---------|--------|
| Light | Default | Active |
| Dark | Dark theme | Future |
| High Contrast | Accessibility | Future |

### Mode Rules

1. **Modes override values only.** Never create new variables.
2. **Primitive tokens change per mode.** Same names, different values.
3. **Semantic tokens inherit automatically.** No changes needed.
4. **Component tokens inherit automatically.** No changes needed.

### Light Mode (Default)

All values as documented in this document.

### Dark Mode (Future)

| Primitive | Light Value | Dark Value |
|-----------|-------------|------------|
| gray-50 | #F9FAFB | #111827 |
| gray-100 | #F3F4F6 | #1F2937 |
| gray-200 | #E5E7EB | #374151 |
| gray-300 | #D1D5DB | #4B5563 |
| gray-400 | #9CA3AF | #6B7280 |
| gray-500 | #6B7280 | #9CA3AF |
| gray-600 | #4B5563 | #D1D5DB |
| gray-700 | #374151 | #E5E7EB |
| gray-800 | #1F2937 | #F3F4F6 |
| gray-900 | #111827 | #F9FAFB |
| white | #FFFFFF | #000000 |
| black | #000000 | #FFFFFF |

### High Contrast Mode (Future)

Increase contrast ratios to meet WCAG AAA (7:1).

---

## 9. Variable Rules

### Immutable Rules

1. **Components never use Primitive Tokens directly.**
   - ❌ `background: blue-500`
   - ✅ `background: action-primary`

2. **Components never create custom colors.**
   - ❌ `background: custom-blue`
   - ✅ `background: action-primary`

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
   - ✅ `card-background` with semantic reference

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

## 10. Engineering Implementation

### Figma Variable Name → Swift

| Figma Variable | Swift Token |
|----------------|-------------|
| `Primitive/Color/Blue/500` | `ColorPrimitive.blue500` |
| `Semantic/Text/Primary` | `SemanticColor.text.primary` |
| `Component/Button/Primary/Background` | `ButtonToken.primary.background` |
| `Primitive/Spacing/16` | `SpacingToken.space16` |
| `Primitive/Radius/Medium` | `RadiusToken.medium` |

### Figma Variable Name → CSS

| Figma Variable | CSS Variable |
|----------------|--------------|
| `Primitive/Color/Blue/500` | `--color-primitive-blue-500` |
| `Semantic/Text/Primary` | `--color-text-primary` |
| `Component/Button/Primary/Background` | `--button-primary-background` |
| `Primitive/Spacing/16` | `--spacing-16` |
| `Primitive/Radius/Medium` | `--radius-medium` |

### Figma Variable Name → Tailwind

| Figma Variable | Tailwind Token |
|----------------|----------------|
| `Primitive/Color/Blue/500` | `blue-500` |
| `Semantic/Text/Primary` | `text-primary` |
| `Component/Button/Primary/Background` | `button-primary-bg` |
| `Primitive/Spacing/16` | `spacing-16` |
| `Primitive/Radius/Medium` | `radius-md` |

### Figma Variable Name → React

| Figma Variable | React Token |
|----------------|-------------|
| `Primitive/Color/Blue/500` | `tokens.primitive.color.blue[500]` |
| `Semantic/Text/Primary` | `tokens.semantic.text.primary` |
| `Component/Button/Primary/Background` | `tokens.component.button.primary.background` |
| `Primitive/Spacing/16` | `tokens.primitive.spacing[16]` |
| `Primitive/Radius/Medium` | `tokens.primitive.radius.medium` |

### Figma Variable Name → Android

| Figma Variable | Android Token |
|----------------|---------------|
| `Primitive/Color/Blue/500` | `R.color.primitive_blue_500` |
| `Semantic/Text/Primary` | `R.color.text_primary` |
| `Component/Button/Primary/Background` | `R.color.button_primary_background` |
| `Primitive/Spacing/16` | `R.dimen.spacing_16` |
| `Primitive/Radius/Medium` | `R.dimen.radius_medium` |

### Figma Variable Name → Flutter

| Figma Variable | Flutter Token |
|----------------|---------------|
| `Primitive/Color/Blue/500` | `AppColors.primitive.blue500` |
| `Semantic/Text/Primary` | `AppColors.text.primary` |
| `Component/Button/Primary/Background` | `AppColors.button.primary.background` |
| `Primitive/Spacing/16` | `AppSpacing.space16` |
| `Primitive/Radius/Medium` | `AppRadius.medium` |

---

## 11. Platform Mapping

### Complete Platform Reference

| Token | Figma | Swift | CSS | Tailwind | React | Android | Flutter |
|-------|-------|-------|-----|----------|-------|---------|---------|
| Blue 500 | Primitive/Color/Blue/500 | ColorPrimitive.blue500 | --color-blue-500 | blue-500 | tokens.primitive.color.blue[500] | R.color.blue_500 | AppColors.blue500 |
| Text Primary | Semantic/Text/Primary | SemanticColor.text.primary | --color-text-primary | text-primary | tokens.semantic.text.primary | R.color.text_primary | AppColors.text.primary |
| Button Primary BG | Component/Button/Primary/Background | ButtonToken.primary.background | --button-primary-bg | button-primary-bg | tokens.component.button.primary.background | R.color.button_primary_bg | AppButton.primary.background |
| Spacing 16 | Primitive/Spacing/16 | SpacingToken.space16 | --spacing-16 | p-4 | tokens.primitive.spacing[16] | R.dimen.spacing_16 | AppSpacing.space16 |
| Radius Medium | Primitive/Radius/Medium | RadiusToken.medium | --radius-medium | rounded-md | tokens.primitive.radius.medium | R.dimen.radius_medium | AppRadius.medium |

### File Structure

```
iOS/
├── DesignSystem/
│   ├── Primitives/
│   │   ├── ColorPrimitive.swift
│   │   ├── SpacingPrimitive.swift
│   │   └── ...
│   ├── Semantic/
│   │   ├── SemanticColor.swift
│   │   ├── SemanticText.swift
│   │   └── ...
│   └── Components/
│       ├── ButtonToken.swift
│       ├── CardToken.swift
│       └── ...

Web/
├── tokens/
│   ├── primitives.css
│   ├── semantic.css
│   ├── components.css
│   └── tailwind.config.js

Android/
├── res/
│   ├── values/
│   │   ├── colors.xml
│   │   ├── dimens.xml
│   │   └── ...
│   └── ...

Flutter/
├── lib/
│   ├── tokens/
│   │   ├── primitives.dart
│   │   ├── semantic.dart
│   │   └── components.dart
```

---

## 12. Validation Checklist

### For Every Token

- [ ] Does this token describe a purpose, not an appearance?
- [ ] Does this token reference the correct layer?
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

- [ ] Does this component only use component or semantic tokens?
- [ ] Can this component be built from existing components?
- [ ] Are all states defined?
- [ ] Is the component accessible?
- [ ] Is the component responsive?

### Simplification Questions

- [ ] Can this token be removed?
- [ ] Can these two tokens be merged?
- [ ] Can this layer be skipped?
- [ ] Can this collection be simplified?

---

**End of Chapter 3: Design Token Architecture**

*This document defines the complete token system. Chapter 4 will create components using these tokens.*
