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
| `surface/page` | gray-50 | Page background |
| `surface/card` | white | Card surface |
| `surface/raised` | white + elevation/floating | Elevated elements |
| `surface/floating` | white + elevation/floating | Modals, sheets |
| `surface/overlay` | rgba(0,0,0,0.5) | Backdrop overlay |
| `surface/selected` | blue-50 | Selected surface |
| `surface/disabled` | gray-100 | Disabled surface |

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
| `financial/gain` | green-600 | Portfolio gain |
| `financial/gain-text` | green-700 | Gain text color |
| `financial/gain-surface` | green-50 | Gain background |
| `financial/loss` | red-600 | Portfolio loss |
| `financial/loss-text` | red-700 | Loss text color |
| `financial/loss-surface` | red-50 | Loss background |
| `financial/dividend` | blue-600 | Dividend received |
| `financial/dividend-text` | blue-700 | Dividend text |
| `financial/dividend-surface` | blue-50 | Dividend background |
| `financial/tax-saved` | green-600 | Tax savings |
| `financial/tax-saved-text` | green-700 | Tax saved text |
| `financial/tax-saved-surface` | green-50 | Tax saved background |
| `financial/tax-due` | red-600 | Tax owed |
| `financial/tax-due-text` | red-700 | Tax due text |
| `financial/tax-due-surface` | red-50 | Tax due background |
| `financial/pending` | yellow-600 | Pending transaction |
| `financial/pending-text` | yellow-700 | Pending text |
| `financial/pending-surface` | yellow-50 | Pending background |
| `financial/market-closed` | gray-500 | Market closed |
| `financial/market-closed-text` | gray-600 | Market closed text |
| `financial/market-closed-surface` | gray-50 | Market closed background |

---

### 5.7 Automation Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `automation/running` | green-600 | Automation active |
| `automation/running-text` | green-700 | Running text |
| `automation/running-surface` | green-50 | Running background |
| `automation/paused` | orange-500 | Automation paused |
| `automation/paused-text` | orange-600 | Paused text |
| `automation/paused-surface` | orange-50 | Paused background |

---

### 5.8 Goal Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `goal/completed` | green-600 | Goal achieved |
| `goal/completed-text` | green-700 | Completed text |
| `goal/completed-surface` | green-50 | Completed background |
| `goal/at-risk` | red-600 | Goal at risk |
| `goal/at-risk-text` | red-700 | At risk text |
| `goal/at-risk-surface` | red-50 | At risk background |
| `goal/in-progress` | blue-600 | Goal in progress |
| `goal/in-progress-text` | blue-700 | In progress text |
| `goal/in-progress-surface` | blue-50 | In progress background |

---

### 5.9 Chart Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `chart/primary` | blue-500 | Primary data series |
| `chart/secondary` | green-500 | Secondary data series |
| `chart/tertiary` | purple-500 | Tertiary data series |
| `chart/quaternary` | orange-500 | Quaternary data series |
| `chart/quinary` | teal-500 | Quinary data series |
| `chart/sentiment-positive` | green-600 | Positive sentiment |
| `chart/sentiment-negative` | red-600 | Negative sentiment |
| `chart/grid` | gray-200 | Grid lines |
| `chart/axis` | gray-400 | Axis labels |
| `chart/tooltip-bg` | gray-800 | Tooltip background |
| `chart/tooltip-text` | white | Tooltip text |

---

### 5.10 Typography Tokens

| Variable Name | Primitive Reference | Purpose |
|---------------|---------------------|---------|
| `typography/display-xl/font-family` | Inter | Display XL family |
| `typography/display-xl/font-size` | 40px | Display XL size |
| `typography/display-xl/font-weight` | 700 | Display XL weight |
| `typography/display-xl/line-height` | 1.1 | Display XL line height |
| `typography/display-xl/letter-spacing` | -0.03em | Display XL tracking |
| `typography/display-l/font-family` | Inter | Display L family |
| `typography/display-l/font-size` | 32px | Display L size |
| `typography/display-l/font-weight` | 700 | Display L weight |
| `typography/display-l/line-height` | 1.2 | Display L line height |
| `typography/display-l/letter-spacing` | -0.02em | Display L tracking |
| `typography/display-m/font-family` | Inter | Display M family |
| `typography/display-m/font-size` | 28px | Display M size |
| `typography/display-m/font-weight` | 600 | Display M weight |
| `typography/display-m/line-height` | 1.2 | Display M line height |
| `typography/display-m/letter-spacing` | -0.02em | Display M tracking |
| `typography/financial-xl/font-family` | IBM Plex Sans | Financial XL family |
| `typography/financial-xl/font-size` | 48px | Financial XL size |
| `typography/financial-xl/font-weight` | 600 | Financial XL weight |
| `typography/financial-xl/line-height` | 1.1 | Financial XL line height |
| `typography/financial-xl/letter-spacing` | -0.03em | Financial XL tracking |
| `typography/financial-l/font-family` | IBM Plex Sans | Financial L family |
| `typography/financial-l/font-size` | 36px | Financial L size |
| `typography/financial-l/font-weight` | 600 | Financial L weight |
| `typography/financial-l/line-height` | 1.1 | Financial L line height |
| `typography/financial-l/letter-spacing` | -0.02em | Financial L tracking |
| `typography/financial-m/font-family` | IBM Plex Sans | Financial M family |
| `typography/financial-m/font-size` | 28px | Financial M size |
| `typography/financial-m/font-weight` | 600 | Financial M weight |
| `typography/financial-m/line-height` | 1.2 | Financial M line height |
| `typography/financial-m/letter-spacing` | -0.02em | Financial M tracking |
| `typography/financial-s/font-family` | IBM Plex Sans | Financial S family |
| `typography/financial-s/font-size` | 20px | Financial S size |
| `typography/financial-s/font-weight` | 600 | Financial S weight |
| `typography/financial-s/line-height` | 1.3 | Financial S line height |
| `typography/financial-s/letter-spacing` | -0.01em | Financial S tracking |
| `typography/title-l/font-family` | Inter | Title L family |
| `typography/title-l/font-size` | 24px | Title L size |
| `typography/title-l/font-weight` | 600 | Title L weight |
| `typography/title-l/line-height` | 1.3 | Title L line height |
| `typography/title-l/letter-spacing` | -0.02em | Title L tracking |
| `typography/title-m/font-family` | Inter | Title M family |
| `typography/title-m/font-size` | 20px | Title M size |
| `typography/title-m/font-weight` | 600 | Title M weight |
| `typography/title-m/line-height` | 1.3 | Title M line height |
| `typography/title-m/letter-spacing` | -0.01em | Title M tracking |
| `typography/body-l/font-family` | Inter | Body L family |
| `typography/body-l/font-size` | 17px | Body L size |
| `typography/body-l/font-weight` | 400 | Body L weight |
| `typography/body-l/line-height` | 1.5 | Body L line height |
| `typography/body-m/font-family` | Inter | Body M family |
| `typography/body-m/font-size` | 16px | Body M size |
| `typography/body-m/font-weight` | 400 | Body M weight |
| `typography/body-m/line-height` | 1.5 | Body M line height |
| `typography/body-s/font-family` | Inter | Body S family |
| `typography/body-s/font-size` | 14px | Body S size |
| `typography/body-s/font-weight` | 400 | Body S weight |
| `typography/body-s/line-height` | 1.5 | Body S line height |
| `typography/label-l/font-family` | Inter | Label L family |
| `typography/label-l/font-size` | 16px | Label L size |
| `typography/label-l/font-weight` | 500 | Label L weight |
| `typography/label-l/line-height` | 1.4 | Label L line height |
| `typography/label-m/font-family` | Inter | Label M family |
| `typography/label-m/font-size` | 14px | Label M size |
| `typography/label-m/font-weight` | 500 | Label M weight |
| `typography/label-m/line-height` | 1.4 | Label M line height |
| `typography/caption/font-family` | Inter | Caption family |
| `typography/caption/font-size` | 12px | Caption size |
| `typography/caption/font-weight` | 400 | Caption weight |
| `typography/caption/line-height` | 1.4 | Caption line height |
| `typography/overline/font-family` | Inter | Overline family |
| `typography/overline/font-size` | 11px | Overline size |
| `typography/overline/font-weight` | 600 | Overline weight |
| `typography/overline/line-height` | 1.4 | Overline line height |
| `typography/overline/letter-spacing` | 0.05em | Overline tracking |

---

## 6. Component Tokens

### 6.1 Button Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `button-primary-bg` | action/primary | Primary background |
| `button-primary-bg-hover` | action/primary-hover | Primary hover |
| `button-primary-bg-pressed` | action/primary-pressed | Primary pressed |
| `button-primary-bg-disabled` | action/primary-disabled | Primary disabled |
| `button-primary-text` | text/inverse | Primary text |
| `button-primary-text-disabled` | text/disabled | Primary disabled text |
| `button-primary-radius` | radius-s | Primary radius |
| `button-primary-padding-x` | space-3 | Primary horizontal |
| `button-primary-padding-y` | space-2 | Primary vertical |
| `button-secondary-bg` | action/secondary | Secondary background |
| `button-secondary-bg-hover` | action/secondary-hover | Secondary hover |
| `button-secondary-bg-pressed` | action/secondary-pressed | Secondary pressed |
| `button-secondary-text` | text/primary | Secondary text |
| `button-secondary-text-disabled` | text/disabled | Secondary disabled text |
| `button-secondary-border` | border/default | Secondary border |
| `button-secondary-radius` | radius-s | Secondary radius |
| `button-destructive-bg` | action/destructive | Destructive background |
| `button-destructive-bg-hover` | action/destructive-hover | Destructive hover |
| `button-destructive-bg-pressed` | action/destructive-pressed | Destructive pressed |
| `button-destructive-text` | text/inverse | Destructive text |
| `button-ghost-bg` | transparent | Ghost background |
| `button-ghost-bg-hover` | surface/raised | Ghost hover |
| `button-ghost-bg-pressed` | surface/floating | Ghost pressed |
| `button-ghost-text` | action/primary | Ghost text |
| `button-height` | 44px | Fixed height |

---

### 6.2 Input Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `input-bg` | surface/card | Background |
| `input-bg-disabled` | surface/disabled | Disabled background |
| `input-border` | border/default | Border |
| `input-border-hover` | border/strong | Hover border |
| `input-border-focus` | border/focus | Focus border |
| `input-border-error` | status/negative | Error border |
| `input-text` | text/primary | Text |
| `input-text-disabled` | text/disabled | Disabled text |
| `input-placeholder` | text/tertiary | Placeholder |
| `input-label` | text/secondary | Label |
| `input-helper` | text/tertiary | Helper |
| `input-error` | status/negative | Error text |
| `input-radius` | radius-s | Radius |
| `input-padding-x` | space-2 | Horizontal |
| `input-padding-y` | space-2 | Vertical |
| `input-height` | 44px | Fixed height |

---

### 6.3 Card Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `card-bg` | surface/card | Background |
| `card-bg-hover` | surface/raised | Hover background |
| `card-border` | border/default | Border |
| `card-radius` | radius-m | Radius |
| `card-padding` | space-3 | Padding |
| `card-padding-compact` | space-2 | Compact padding |
| `card-shadow` | elevation/flat | Default shadow |
| `card-shadow-floating` | elevation/floating | Floating shadow |

---

### 6.4 Navigation Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `navbar-bg` | surface/page | Background |
| `navbar-border` | border/default | Border |
| `navbar-title` | text/primary | Title |
| `navbar-title-weight` | 600 | Title weight |
| `navbar-height` | 44px | Height |
| `navbar-padding-x` | space-3 | Horizontal |
| `tabbar-bg` | surface/page | Background |
| `tabbar-border` | border/default | Border |
| `tabbar-item-active` | action/primary | Active item |
| `tabbar-item-inactive` | text/tertiary | Inactive item |
| `tabbar-height` | 49px | Height |

---

### 6.5 Bottom Navigation Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `bottomnav-bg` | surface/page | Background |
| `bottomnav-border` | border/default | Border |
| `bottomnav-item-active` | action/primary | Active item |
| `bottomnav-item-inactive` | text/tertiary | Inactive item |
| `bottomnav-height` | 83px | Height (with safe area) |
| `bottomnav-icon-size` | 24px | Icon size |
| `bottomnav-label-size` | 10px | Label size |

---

### 6.6 Sheet Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `sheet-bg` | surface/floating | Background |
| `sheet-backdrop` | surface/overlay | Backdrop |
| `sheet-handle` | text/tertiary | Handle |
| `sheet-radius` | radius-m | Radius |
| `sheet-handle-width` | 36px | Handle width |
| `sheet-handle-height` | 5px | Handle height |

---

### 6.7 Dialog Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `dialog-bg` | surface/floating | Background |
| `dialog-backdrop` | surface/overlay | Backdrop |
| `dialog-title` | text/primary | Title |
| `dialog-content` | text/secondary | Content |
| `dialog-radius` | radius-m | Radius |
| `dialog-padding` | space-4 | Padding |
| `dialog-shadow` | elevation/floating | Shadow |

---

### 6.8 Alert Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `alert-info-bg` | surface/raised | Info background |
| `alert-info-border` | border/default | Info border |
| `alert-info-icon` | action/primary | Info icon |
| `alert-success-bg` | status/positive-surface | Success background |
| `alert-success-border` | status/positive | Success border |
| `alert-success-icon` | status/positive | Success icon |
| `alert-warning-bg` | status/warning-surface | Warning background |
| `alert-warning-border` | status/warning | Warning border |
| `alert-warning-icon` | status/warning | Warning icon |
| `alert-error-bg` | status/negative-surface | Error background |
| `alert-error-border` | status/negative | Error border |
| `alert-error-icon` | status/negative | Error icon |
| `alert-radius` | radius-s | Radius |
| `alert-padding` | space-3 | Padding |

---

### 6.9 Badge Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `badge-status-bg` | status/positive-surface | Status background |
| `badge-status-text` | status/positive | Status text |
| `badge-count-bg` | text/secondary | Count background |
| `badge-count-text` | text/inverse | Count text |
| `badge-label-bg` | surface/raised | Label background |
| `badge-label-text` | text/secondary | Label text |
| `badge-radius` | radius-full | Radius |
| `badge-padding-x` | space-2 | Horizontal |
| `badge-padding-y` | space-1 | Vertical |

---

### 6.10 Tag Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tag-default-bg` | surface/raised | Default background |
| `tag-default-text` | text/secondary | Default text |
| `tag-default-border` | border/default | Default border |
| `tag-brand-bg` | action/primary-surface | Brand background |
| `tag-brand-text` | action/primary | Brand text |
| `tag-brand-border` | action/primary | Brand border |
| `tag-radius` | radius-full | Radius |
| `tag-padding-x` | space-2 | Horizontal |
| `tag-padding-y` | space-1 | Vertical |

---

### 6.11 Chip Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `chip-default-bg` | surface/raised | Default background |
| `chip-default-text` | text/secondary | Default text |
| `chip-selected-bg` | action/primary | Selected background |
| `chip-selected-text` | text/inverse | Selected text |
| `chip-radius` | radius-full | Radius |
| `chip-padding-x` | space-2 | Horizontal |
| `chip-padding-y` | space-1 | Vertical |

---

### 6.12 Checkbox Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `checkbox-bg` | surface/card | Background |
| `checkbox-bg-checked` | action/primary | Checked background |
| `checkbox-border` | border/default | Border |
| `checkbox-border-checked` | action/primary | Checked border |
| `checkbox-border-disabled` | text/disabled | Disabled border |
| `checkbox-icon` | text/inverse | Check icon |
| `checkbox-radius` | radius-s | Radius |
| `checkbox-size` | 20px | Size |

---

### 6.13 Radio Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `radio-bg` | surface/card | Background |
| `radio-bg-selected` | action/primary | Selected background |
| `radio-border` | border/default | Border |
| `radio-border-selected` | action/primary | Selected border |
| `radio-border-disabled` | text/disabled | Disabled border |
| `radio-dot` | text/inverse | Inner dot |
| `radio-radius` | radius-full | Radius |
| `radio-size` | 20px | Size |

---

### 6.14 Toggle Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `toggle-track-off` | text/disabled | Off track |
| `toggle-track-on` | action/primary | On track |
| `toggle-track-disabled` | surface/disabled | Disabled track |
| `toggle-thumb` | surface/card | Thumb |
| `toggle-thumb-disabled` | text/disabled | Disabled thumb |
| `toggle-width` | 51px | Width |
| `toggle-height` | 31px | Height |
| `toggle-thumb-size` | 27px | Thumb size |

---

### 6.15 Slider Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `slider-track` | border/default | Track |
| `slider-track-active` | action/primary | Active track |
| `slider-thumb` | surface/card | Thumb |
| `slider-thumb-border` | action/primary | Thumb border |
| `slider-height` | 4px | Track height |
| `slider-thumb-size` | 24px | Thumb size |

---

### 6.16 Progress Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `progress-track` | border/default | Track |
| `progress-indicator` | action/primary | Indicator |
| `progress-indicator-positive` | status/positive | Positive |
| `progress-indicator-negative` | status/negative | Negative |
| `progress-height` | 4px | Track height |
| `progress-radius` | radius-full | Radius |

---

### 6.17 Stepper Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `stepper-bg` | surface/card | Background |
| `stepper-border` | border/default | Border |
| `stepper-button-bg` | surface/raised | Button background |
| `stepper-button-text` | text/primary | Button text |
| `stepper-value-text` | text/primary | Value text |
| `stepper-radius` | radius-s | Radius |

---

### 6.18 Avatar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `avatar-bg` | surface/raised | Background |
| `avatar-text` | text/primary | Text |
| `avatar-border` | border/default | Border |
| `avatar-radius` | radius-full | Radius |
| `avatar-small-size` | 32px | Small |
| `avatar-medium-size` | 40px | Medium |
| `avatar-large-size` | 56px | Large |
| `avatar-xl-size` | 80px | XL |

---

### 6.19 List Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `list-item-bg` | surface/card | Background |
| `list-item-bg-hover` | surface/raised | Hover |
| `list-item-bg-pressed` | surface/floating | Pressed |
| `list-item-border` | border/default | Border |
| `list-item-padding-x` | space-3 | Horizontal |
| `list-item-padding-y` | space-3 | Vertical |
| `list-item-min-height` | 44px | Min height |
| `list-item-icon` | text/secondary | Icon |

---

### 6.20 Table Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `table-header-bg` | surface/raised | Header background |
| `table-header-text` | text/secondary | Header text |
| `table-row-bg` | surface/card | Row background |
| `table-row-bg-hover` | surface/raised | Row hover |
| `table-row-bg-selected` | action/primary-surface | Selected row |
| `table-border` | border/default | Border |
| `table-cell-padding` | space-3 | Cell padding |

---

### 6.21 Chart Component Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `chart-component-bg` | transparent | Background |
| `chart-component-grid` | chart/grid | Grid |
| `chart-component-axis` | chart/axis | Axis |
| `chart-component-tooltip-bg` | chart/tooltip-bg | Tooltip background |
| `chart-component-tooltip-text` | chart/tooltip-text | Tooltip text |
| `chart-component-primary` | chart/primary | Primary series |
| `chart-component-secondary` | chart/secondary | Secondary series |

---

### 6.22 Search Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `search-bg` | surface/card | Background |
| `search-bg-focused` | surface/raised | Focused background |
| `search-border` | border/default | Border |
| `search-border-focus` | border/focus | Focus border |
| `search-placeholder` | text/tertiary | Placeholder |
| `search-icon` | text/tertiary | Icon |
| `search-radius` | radius-s | Radius |

---

### 6.23 Tooltip Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tooltip-bg` | text/primary | Background |
| `tooltip-text` | text/inverse | Text |
| `tooltip-radius` | radius-s | Radius |
| `tooltip-padding-x` | space-2 | Horizontal |
| `tooltip-padding-y` | space-1 | Vertical |
| `tooltip-shadow` | elevation/floating | Shadow |

---

### 6.24 Toast Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `toast-bg` | text/primary | Background |
| `toast-text` | text/inverse | Text |
| `toast-action` | action/primary | Action |
| `toast-radius` | radius-m | Radius |
| `toast-padding` | space-3 | Padding |
| `toast-shadow` | elevation/floating | Shadow |

---

### 6.25 Snackbar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `snackbar-bg` | text/primary | Background |
| `snackbar-text` | text/inverse | Text |
| `snackbar-action` | action/primary | Action |
| `snackbar-radius` | radius-m | Radius |
| `snackbar-padding` | space-3 | Padding |

---

### 6.26 Skeleton Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `skeleton-bg` | surface/raised | Background |
| `skeleton-shimmer` | surface/card | Shimmer |
| `skeleton-radius` | radius-s | Radius |
| `skeleton-height` | 16px | Height |

---

### 6.27 Loading Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `loading-indicator` | action/primary | Indicator |
| `loading-track` | border/default | Track |
| `loading-size-sm` | 16px | Small |
| `loading-size-md` | 24px | Medium |

---

### 6.28 Calendar Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `calendar-bg` | surface/card | Background |
| `calendar-header-text` | text/primary | Header |
| `calendar-day-text` | text/primary | Day text |
| `calendar-day-bg-selected` | action/primary | Selected background |
| `calendar-day-text-selected` | text/inverse | Selected text |
| `calendar-day-bg-today` | action/primary-surface | Today background |
| `calendar-day-bg-disabled` | surface/disabled | Disabled background |
| `calendar-border` | border/default | Border |

---

### 6.29 Date Picker Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `datepicker-bg` | surface/floating | Background |
| `datepicker-header-text` | text/primary | Header |
| `datepicker-day-text` | text/primary | Day text |
| `datepicker-day-bg-selected` | action/primary | Selected background |
| `datepicker-day-text-selected` | text/inverse | Selected text |
| `datepicker-border` | border/default | Border |

---

### 6.30 Segment Control Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `segment-bg` | surface/raised | Background |
| `segment-bg-selected` | surface/card | Selected background |
| `segment-text` | text/secondary | Text |
| `segment-text-selected` | text/primary | Selected text |
| `segment-border` | border/default | Border |
| `segment-radius` | radius-s | Radius |

---

### 6.31 Tabs Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `tabs-bg` | surface/page | Background |
| `tabs-border` | border/default | Border |
| `tabs-item-active` | action/primary | Active item |
| `tabs-item-inactive` | text/tertiary | Inactive item |
| `tabs-item-font-weight-active` | 600 | Active weight |
| `tabs-item-font-weight-inactive` | 400 | Inactive weight |

---

### 6.32 Empty State Tokens

| Variable Name | Semantic Reference | Purpose |
|---------------|---------------------|---------|
| `emptystate-icon` | text/tertiary | Icon |
| `emptystate-title` | text/primary | Title |
| `emptystate-description` | text/secondary | Description |
| `emptystate-action-bg` | action/primary | Action background |
| `emptystate-action-text` | text/inverse | Action text |
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
