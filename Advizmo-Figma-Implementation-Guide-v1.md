# Advizmo Design System — Chapter 7: Figma Implementation Guide

> **Version:** 1.0  
> **Status:** Draft  
> **Last Updated:** June 2026  
> **Scope:** Figma file structure, component specs, token mapping, and implementation roadmap

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Existing Design System Audit](#2-existing-design-system-audit)
3. [Visual Language Extraction](#3-visual-language-extraction)
4. [Foundation Audit & Recommendations](#4-foundation-audit--recommendations)
5. [Component Inventory & Mapping](#5-component-inventory--mapping)
6. [Financial Language Taxonomy](#6-financial-language-taxonomy)
7. [Engineering Audit](#7-engineering-audit)
8. [Accessibility Audit](#8-accessibility-audit)
9. [Figma File Architecture](#9-figma-file-architecture)
10. [Token Implementation](#10-token-implementation)
11. [Component Specifications](#11-component-specifications)
12. [Implementation Roadmap](#12-implementation-roadmap)
13. [Quality Assurance Checklist](#13-quality-assurance-checklist)

---

## 1. Executive Summary

### Purpose

This chapter provides a comprehensive guide for implementing the Advizmo Design System in Figma, based on a thorough audit of the existing production screens, design system files, and component library. The goal is to evolve the current system into a mature, production-grade design language without disrupting existing workflows.

### Key Findings

| Category | Status | Priority |
|----------|--------|----------|
| Color System | Functional but fragmented — needs consolidation | High |
| Typography | Solid foundation — minor refinements needed | Medium |
| Spacing | Consistent rhythm — tokens need standardization | Medium |
| Radius | Good usage — reduce from 6 to 4 values | Low |
| Elevation | Minimal usage — needs expansion | Medium |
| Components | Comprehensive but inconsistent — needs audit | High |
| Tokens | Manual updates — need variable binding | High |
| Accessibility | Partial — needs systematic review | High |

### Scope of Work

- **Reverse-engineer** visual language from production screens
- **Audit** existing Figma design system components
- **Map** existing tokens to new 3-layer architecture
- **Specify** all components with Auto Layout, variants, and properties
- **Document** implementation roadmap with priorities

---

## 2. Existing Design System Audit

### 2.1 Figma File Structure

The existing Advizmo design system is organized into 5 sections:

```
Advizmo Design System (Published)
├── Foundations
│   ├── Spacing (sp-1 to sp-8)
│   ├── Radius (radius-xs to radius-pill)
│   ├── Type styles (Heading, Body, Amount)
│   ├── Colors (Surface, Text, Accent, Semantic, Charts)
│   └── Elevation (Card, Elevated, Modal)
├── Primitives
│   ├── Buttons (Blue, Green, Outlined, Ghost)
│   ├── Icons (Material Symbols Rounded)
│   ├── Inputs (Text fields)
│   ├── Badges (Neutral, Positive, Negative, Warning, Info)
│   ├── Labels (Text with indicators)
│   ├── Toggles (On/Off states)
│   ├── Checkboxes (Checked/Unchecked)
│   ├── Radios (Selected/Unselected)
│   ├── Avatars (Image/Initials/Icon)
│   ├── Progress bars (Linear)
│   └── Steppers (Step indicators)
├── Components
│   ├── Cards (Account, Bill, Transaction, Goal, Investment)
│   ├── Navigation (Tab bar, Header, Back)
│   ├── Alerts (Info, Warning, Error, Success)
│   ├── Bills (List, Detail, Payment)
│   ├── Transactions (List, Category, Split)
│   ├── Goals (Progress, Target, Milestone)
│   ├── Investments (Portfolio, Chart, Performance)
│   ├── Analytics (Metrics, Charts, Reports)
│   ├── Search (Input, Results, Filters)
│   ├── Settings (List, Toggle, Input)
│   ├── Profile (Avatar, Info, Edit)
│   ├── Notifications (List, Badge, Mark read)
│   ├── AI Insights (Card, Recommendation)
│   ├── Automation (Rule, Trigger, Action)
│   ├── Tax (Savings, Estimate, Filing)
│   └── Emergency (Fund, Progress, Goal)
├── Patterns
│   ├── Chrome & Navigation
│   ├── Section Dividers
│   ├── List Rows & Items
│   ├── Inputs/Actions & Feedback
│   ├── Selectors & Pickers
│   ├── Score Rings
│   └── Cards — Composites
└── Screens
    ├── Dashboard (Empty, Loading, Populated)
    ├── Accounts (List, Detail, Connect)
    ├── Payments (Categorize, Schedule)
    └── Recurring Transactions (View, Edit, Select)
```

### 2.2 Component Count Summary

| Section | Count | Status |
|---------|-------|--------|
| Foundations | 5 groups | ✅ Published |
| Primitives | 11 types | ✅ Published |
| Components | 16 types | ✅ Published |
| Patterns | 7 patterns | ✅ Published |
| **Total** | **39+ components** | **Needs audit** |

### 2.3 Strengths

1. **Consistent color usage** — Blue primary, Green positive, Red negative
2. **Clear typography hierarchy** — Heading, Body, Amount styles
3. **Comprehensive component coverage** — Most UI patterns covered
4. **Pattern documentation** — Shows real-world usage
5. **Icon system** — Material Symbols Rounded with consistent sizing

### 2.4 Weaknesses

1. **Fragmented token naming** — `sp-1` vs `spacing/small` inconsistency
2. **Missing component variants** — No size/state variations documented
3. **No Auto Layout** — Manual spacing requires pixel-perfect alignment
4. **Limited accessibility** — No contrast ratios, focus states documented
5. **No dark mode** — Single theme only
6. **Manual token updates** — No variable binding for global changes
7. **Inconsistent radius** — 6 values when 4 would suffice
8. **Shadows minimal** — Only 3 levels when more nuance needed

---

## 3. Visual Language Extraction

### 3.1 Spacing Rhythm

**Pattern:** Consistent 8px base grid with 4px micro-spacing

| Usage | Value | Example |
|-------|-------|---------|
| Micro gap | 4px | Icon to label |
| Small gap | 8px | List item internal |
| Medium gap | 12px | Card padding |
| Large gap | 16px | Section spacing |
| XL gap | 24px | Between sections |
| XXL gap | 32px | Page margins |
| Hero gap | 48px | Major sections |

**Rule:** All spacing values are multiples of 4px (4, 8, 12, 16, 24, 32, 48)

### 3.2 Typography Rhythm

**Pattern:** Clear hierarchy with consistent sizing and weight distribution

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| Display | 32-40px | Bold (700) | Hero amounts, dashboard totals |
| Heading 1 | 24-28px | SemiBold (600) | Page titles |
| Heading 2 | 20-22px | SemiBold (600) | Section headers |
| Heading 3 | 16-18px | SemiBold (600) | Card titles |
| Body Large | 16px | Regular (400) | Primary content |
| Body Medium | 14px | Regular (400) | Secondary content |
| Body Small | 12px | Regular (400) | Tertiary content, labels |
| Caption | 10-11px | Medium (500) | Timestamps, metadata |

**Amount Styles:**
| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Amount Hero | 32-40px | Bold (700) | Dashboard total balance |
| Amount Large | 24-28px | SemiBold (600) | Account balances |
| Amount Medium | 16-18px | SemiBold (600) | Transaction amounts |
| Amount Small | 14px | Medium (500) | Inline amounts |
| Amount Micro | 12px | Medium (500) | Badge amounts |

### 3.3 Card Hierarchy

**Pattern:** Progressive elevation and border treatment

| Level | Elevation | Border | Usage |
|-------|-----------|--------|-------|
| Flat | None | None | Inline content |
| Raised | Card shadow | None | Interactive cards |
| Elevated | Elevated shadow | 1px border | Floating elements |
| Modal | Modal shadow | 2px border | Overlays, dialogs |

**Card Anatomy:**
```
┌─────────────────────────────────────┐
│ [Icon]  Title              [Action] │  ← Header (16px padding)
│─────────────────────────────────────│
│ Content area                        │  ← Body (12-16px padding)
│ • Row items with 8px gaps           │
│ • Secondary text in muted color     │
│─────────────────────────────────────│
│ [CTA Button]           [Secondary]  │  ← Footer (12px padding)
└─────────────────────────────────────┘
```

### 3.4 Information Hierarchy

**Pattern:** Amount → Label → Description → Metadata

```
$12,450.00           ← Amount (Large, SemiBold, Primary)
Checking Account     ← Label (Medium, Medium, Primary)
Chase ••4521         ← Description (Small, Regular, Secondary)
Updated 2 min ago    ← Metadata (Caption, Regular, Muted)
```

### 3.5 Navigation Patterns

**Pattern:** Bottom tab bar with 5 items, consistent iconography

```
┌──────┬──────┬──────┬──────┬──────┐
│ Home │ Invest│ Insights│ Cashflow│ Activity │
│  🏠  │  📈  │  💡  │  💰  │  📋  │
└──────┴──────┴──────┴──────┴──────┘
```

**Rules:**
- Icons: Material Symbols Rounded, 24px
- Active state: Filled icon + blue color
- Inactive state: Outlined icon + muted color
- Labels: 10px, Medium weight

### 3.6 Financial Hierarchy

**Pattern:** Progressive disclosure based on importance

| Priority | Element | Treatment |
|----------|---------|-----------|
| 1 | Total balance | Display size, Bold, Primary color |
| 2 | Account balances | Amount Large, SemiBold, Primary |
| 3 | Transaction amounts | Amount Medium, SemiBold, +/- color |
| 4 | Category percentages | Amount Small, Medium, Secondary |
| 5 | Metadata | Caption, Regular, Muted |

### 3.7 AI Patterns

**Pattern:** Distinctive purple accent for AI-driven content

```
┌─────────────────────────────────────┐
│ ✨ AI Insight                      │  ← Purple accent
│─────────────────────────────────────│
│ Based on your spending patterns,    │  ← Body text
│ you could save $240/month by...     │
│─────────────────────────────────────│
│ [Apply Recommendation]              │  ← Blue CTA
└─────────────────────────────────────┘
```

### 3.8 Dashboard Structure

**Pattern:** Modular card-based layout with progressive disclosure

```
┌─────────────────────────────────────┐
│ Good afternoon, Sarah        [🔔]  │  ← Greeting + notification
│─────────────────────────────────────│
│ Total Balance                       │  ← Hero amount
│ $124,500.00                         │
│ +2.4% this month                    │
│─────────────────────────────────────│
│ ┌─────────┐ ┌─────────┐ ┌────────┐ │  ← Quick actions
│ │ Connect │ │ Review  │ │ Add    │ │
│ │ Accounts│ │ Bills   │ │ Income │ │
│ └─────────┘ └─────────┘ └────────┘ │
│─────────────────────────────────────│
│ Accounts                   [See All]│  ← Section with CTA
│ ┌─────────────────────────────────┐ │
│ │ Chase Checking    $12,450.00    │ │  ← Account card
│ │ ••4521            +2.1%         │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 4. Foundation Audit & Recommendations

### 4.1 Color System

#### Current State

| Category | Tokens | Recommendation |
|----------|--------|----------------|
| Surface | `page-bg`, `card`, `overlay`, `light-001`, `light-002` | **KEEP** — Rename to `surface/bg`, `surface/card`, `surface/overlay`, `surface/subtle`, `surface/muted` |
| Text | `primary`, `secondary`, `muted`, `disabled`, `on-accent` | **KEEP** — Rename to `text/primary`, `text/secondary`, `text/muted`, `text/disabled`, `text/on-accent` |
| Accent | `primary`, `primary-light` | **IMPROVE** — Expand to `accent/primary`, `accent/primary-hover`, `accent/primary-active`, `accent/primary-subtle` |
| Semantic | `positive`, `negative`, `warning`, `info` | **KEEP** — Add surface variants: `semantic/positive`, `semantic/positive-surface` |
| Primary Card | `blue`, `green`, `red`, `amber` | **MERGE** — Consolidate into `card/blue`, `card/green`, `card/red`, `card/amber` |
| Card Border | `blue`, `green`, `red`, `amber` | **MERGE** — Consolidate into `border/blue`, `border/green`, `border/red`, `border/amber` |
| Attention | `bg-100`, `bg-200` | **RENAME** — `attention/bg-subtle`, `attention/bg-muted` |
| Charts | `c1`, `c2`, `c3`, `c4` | **IMPROVE** — Rename to `charts/primary`, `charts/secondary`, `charts/tertiary`, `charts/quaternary` |
| Icons | `primary`, `secondary`, `muted`, `main-surface`, `positive`, `positive-surface`, `negative`, `negative-surface`, `primary-cta`, `primary-cta-surface` | **IMPROVE** — Rename to `icon/primary`, `icon/secondary`, `icon/muted`, `icon/on-surface`, `icon/positive`, `icon/positive-surface`, `icon/negative`, `icon/negative-surface`, `icon/on-accent`, `icon/on-accent-surface` |

#### New Color Tokens (8 Primitive Scales)

| Scale | Primary | Usage |
|-------|---------|-------|
| Blue | #227BE2 | Brand, Primary actions |
| Green | #22A86A | Financial positive, Success |
| Gray | #6B7280 | Neutral, Secondary |
| Red | #D85040 | Errors, Financial negative |
| Orange | #E87A3A | Warnings, Attention |
| Yellow | #D4A72C | Caution, Highlights |
| Purple | #8B5CF6 | AI features |
| Teal | #14B8A6 | Info, Links |

#### Semantic Token Mapping

| Semantic Token | Light Mode | Dark Mode | Usage |
|----------------|------------|-----------|-------|
| `surface/bg` | #FFFFFF | #0F172A | Page background |
| `surface/card` | #FFFFFF | #1E293B | Card background |
| `surface/overlay` | #F8FAFC | #334155 | Modal background |
| `surface/subtle` | #F1F5F9 | #475569 | Subtle backgrounds |
| `surface/muted` | #E2E8F0 | #64748B | Muted backgrounds |
| `text/primary` | #0F172A | #F8FAFC | Primary text |
| `text/secondary` | #475569 | #CBD5E1 | Secondary text |
| `text/muted` | #94A3B8 | #94A3B8 | Muted text |
| `text/disabled` | #CBD5E1 | #475569 | Disabled text |
| `text/on-accent` | #FFFFFF | #FFFFFF | Text on accent |
| `accent/primary` | #227BE2 | #3B82F6 | Primary accent |
| `accent/primary-hover` | #1D68C7 | #2563EB | Primary hover |
| `accent/primary-active` | #1A5BA8 | #1D4ED8 | Primary active |
| `accent/primary-subtle` | #EFF6FF | #1E3A5F | Primary subtle bg |
| `semantic/positive` | #22A86A | #22C55E | Success, positive |
| `semantic/positive-surface` | #ECFDF5 | #14532D | Success background |
| `semantic/negative` | #D85040 | #EF4444 | Error, negative |
| `semantic/negative-surface` | #FEF2F2 | #7F1D1D | Error background |
| `semantic/warning` | #D4A72C | #EAB308 | Warning |
| `semantic/warning-surface` | #FFFBEB | #713F12 | Warning background |
| `semantic/info` | #14B8A6 | #06B6D4 | Informational |
| `semantic/info-surface` | #F0FDFA | #164E63 | Info background |

### 4.2 Typography

#### Current State

| Token | Font | Size | Weight | Line Height | Recommendation |
|-------|------|------|--------|-------------|----------------|
| Heading 1 | Inter | 28px | SemiBold | 36px | **KEEP** — Rename to `type/heading-lg` |
| Heading 2 | Inter | 24px | SemiBold | 32px | **KEEP** — Rename to `type/heading-md` |
| Heading 3 | Inter | 20px | SemiBold | 28px | **KEEP** — Rename to `type/heading-sm` |
| Heading 4 | Inter | 18px | SemiBold | 24px | **KEEP** — Rename to `type/heading-xs` |
| Heading 5 | Inter | 16px | SemiBold | 22px | **MERGE** — Into `type/heading-xs` |
| Body Large | Inter | 16px | Regular | 24px | **KEEP** — Rename to `type/body-lg` |
| Body Medium | Inter | 14px | Regular | 20px | **KEEP** — Rename to `type/body-md` |
| Body Small | Inter | 12px | Regular | 16px | **KEEP** — Rename to `type/body-sm` |
| Body Smaller | Inter | 11px | Regular | 14px | **REMOVE** — Use `type/caption` |
| Amount h1 | Inter | 32px | Bold | 40px | **KEEP** — Rename to `type/amount-hero` |
| Amount h2 | Inter | 28px | SemiBold | 36px | **KEEP** — Rename to `type/amount-lg` |
| Amount body | Inter | 20px | SemiBold | 28px | **KEEP** — Rename to `type/amount-md` |
| Amount small | Inter | 14px | Medium | 20px | **KEEP** — Rename to `type/amount-sm` |
| Amount row | Inter | 12px | Medium | 16px | **MERGE** — Into `type/amount-sm` |
| Caption | Inter | 11px | Medium | 14px | **KEEP** — Rename to `type/caption` |
| Overline | Inter | 10px | SemiBold | 14px | **KEEP** — Rename to `type/overline` |

#### New Typography Scale

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| `type/display` | Inter | 40px | Bold | 48px | -0.02em | Hero amounts |
| `type/heading-xl` | Inter | 32px | SemiBold | 40px | -0.01em | Page titles |
| `type/heading-lg` | Inter | 28px | SemiBold | 36px | -0.01em | Section headers |
| `type/heading-md` | Inter | 24px | SemiBold | 32px | 0 | Card titles |
| `type/heading-sm` | Inter | 20px | SemiBold | 28px | 0 | Subsection headers |
| `type/heading-xs` | Inter | 18px | SemiBold | 24px | 0 | Card subtitles |
| `type/body-lg` | Inter | 16px | Regular | 24px | 0 | Primary content |
| `type/body-md` | Inter | 14px | Regular | 20px | 0 | Secondary content |
| `type/body-sm` | Inter | 12px | Regular | 16px | 0 | Tertiary content |
| `type/caption` | Inter | 11px | Medium | 14px | 0.01em | Timestamps, metadata |
| `type/overline` | Inter | 10px | SemiBold | 14px | 0.05em | Section labels |
| `type/amount-hero` | Inter | 40px | Bold | 48px | -0.02em | Dashboard totals |
| `type/amount-lg` | Inter | 28px | SemiBold | 36px | -0.01em | Account balances |
| `type/amount-md` | Inter | 20px | SemiBold | 28px | 0 | Transaction amounts |
| `type/amount-sm` | Inter | 14px | Medium | 20px | 0 | Inline amounts |
| `type/label-lg` | Inter | 16px | Medium | 24px | 0 | Button labels |
| `type/label-md` | Inter | 14px | Medium | 20px | 0 | Input labels |
| `type/label-sm` | Inter | 12px | Medium | 16px | 0 | Small labels |
| `type/link` | Inter | 14px | Medium | 20px | 0 | Inline links |
| `type/code` | SF Mono | 12px | Regular | 16px | 0 | Code snippets |

### 4.3 Spacing

#### Current State

| Token | Value | Recommendation |
|-------|-------|----------------|
| `sp-1` | 4px | **KEEP** — Rename to `space/1` |
| `sp-2` | 8px | **KEEP** — Rename to `space/2` |
| `sp-3` | 12px | **KEEP** — Rename to `space/3` |
| `sp-4` | 16px | **KEEP** — Rename to `space/4` |
| `sp-5` | 24px | **KEEP** — Rename to `space/6` |
| `sp-6` | 32px | **KEEP** — Rename to `space/8` |
| `sp-7` | 40px | **REMOVE** — Use `space/8` or `space/12` |
| `sp-8` | 48px | **KEEP** — Rename to `space/12` |

#### New Spacing Scale (9 values)

| Token | Value | Usage |
|-------|-------|-------|
| `space/0` | 0px | No spacing |
| `space/1` | 4px | Micro gap (icon to label) |
| `space/2` | 8px | Small gap (list item internal) |
| `space/3` | 12px | Medium gap (card padding) |
| `space/4` | 16px | Large gap (section spacing) |
| `space/6` | 24px | XL gap (between sections) |
| `space/8` | 32px | XXL gap (page margins) |
| `space/12` | 48px | Hero gap (major sections) |
| `space/16` | 64px | Maximum spacing |

### 4.4 Border Radius

#### Current State

| Token | Value | Recommendation |
|-------|-------|----------------|
| `radius-xs` | 4px | **REMOVE** — Too small for iOS |
| `radius-sm` | 8px | **KEEP** — Rename to `radius/sm` |
| `radius-md` | 12px | **KEEP** — Rename to `radius/md` |
| `radius-lg` | 16px | **REMOVE** — Use `radius/md` |
| `radius-xl` | 24px | **REMOVE** — Use `radius/pill` |
| `radius-pill` | 9999px | **KEEP** — Rename to `radius/pill` |

#### New Radius Scale (4 values)

| Token | Value | Usage |
|-------|-------|-------|
| `radius/none` | 0px | No radius |
| `radius/sm` | 8px | Buttons, inputs, small cards |
| `radius/md` | 12px | Cards, modals, sheets |
| `radius/pill` | 9999px | Badges, tags, pills |

### 4.5 Elevation (Shadows)

#### Current State

| Token | Usage | Recommendation |
|-------|-------|----------------|
| Card | Subtle lift | **IMPROVE** — Rename to `elevation/card` |
| Elevated | Medium lift | **IMPROVE** — Rename to `elevation/elevated` |
| Modal | Strong lift | **IMPROVE** — Rename to `elevation/modal` |

#### New Elevation Scale

| Token | CSS | Usage |
|-------|-----|-------|
| `elevation/none` | none | No shadow |
| `elevation/card` | 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06) | Cards at rest |
| `elevation/raised` | 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06) | Cards hover, dropdowns |
| `elevation/elevated` | 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) | Floating elements |
| `elevation/modal` | 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04) | Modals, dialogs |
| `elevation/toast` | 0 25px 50px rgba(0,0,0,0.25) | Toasts, notifications |

---

## 5. Component Inventory & Mapping

### 5.1 Primitives (191 Components)

#### Typography Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Heading 1 | Regular, Bold | ❌ | Add Auto Layout |
| Heading 2 | Regular, Bold | ❌ | Add Auto Layout |
| Heading 3 | Regular, Bold | ❌ | Add Auto Layout |
| Heading 4 | Regular, Bold | ❌ | Add Auto Layout |
| Heading 5 | Regular, Bold | ❌ | Add Auto Layout |
| Body Large | Regular, Medium, SemiBold, Bold | ❌ | Add Auto Layout |
| Body Medium | Regular, Medium, SemiBold, Bold | ❌ | Add Auto Layout |
| Body Small | Regular, Medium, SemiBold, Bold | ❌ | Add Auto Layout |
| Amount Hero | Regular, Bold | ❌ | Add Auto Layout |
| Amount Large | Regular, SemiBold | ❌ | Add Auto Layout |
| Amount Medium | Regular, SemiBold | ❌ | Add Auto Layout |
| Amount Small | Regular, Medium | ❌ | Add Auto Layout |
| Caption | Regular, Medium | ❌ | Add Auto Layout |
| Overline | Regular, SemiBold | ❌ | Add Auto Layout |

#### Icon Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Icon | 24px, 20px, 16px | ❌ | Add size variants |
| Icon | Filled, Outlined | ❌ | Add style variants |
| Icon | All Material Symbols | ❌ | Document usage |

#### Label Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Label | Default, Required, Error | ❌ | Add states |
| Label | Left, Right indicator | ❌ | Add positions |

#### Badge Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Badge | Neutral, Positive, Negative, Warning, Info | ❌ | Add color variants |
| Badge | Small, Medium, Large | ❌ | Add size variants |
| Badge | With/Without icon | ❌ | Add icon variants |

#### Input Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Text Input | Default, Focus, Error, Disabled | ❌ | Add states |
| Text Input | With/Without label | ❌ | Add label variants |
| Text Input | With/Without helper text | ❌ | Add helper variants |
| Text Input | With/Without prefix/suffix | ❌ | Add affix variants |

#### Toggle Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Toggle | On, Off | ❌ | Add states |
| Toggle | Small, Medium, Large | ❌ | Add size variants |

#### Checkbox Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Checkbox | Checked, Unchecked, Indeterminate | ❌ | Add states |
| Checkbox | With/Without label | ❌ | Add label variants |

#### Radio Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Radio | Selected, Unselected | ❌ | Add states |
| Radio | With/Without label | ❌ | Add label variants |

#### Avatar Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Avatar | Image, Initials, Icon | ❌ | Add content variants |
| Avatar | Small (32px), Medium (40px), Large (48px), XL (64px) | ❌ | Add size variants |

#### Progress Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Progress Bar | Linear | ❌ | Add determinate/indeterminate |
| Progress Bar | Small, Medium, Large | ❌ | Add size variants |
| Progress Ring | Circular | ❌ | Add ring variant |

#### Stepper Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Stepper | Step 1-5 | ❌ | Add step count variant |
| Stepper | Active, Completed, Pending | ❌ | Add states |

### 5.2 Core Product Components (169 Components)

#### Account Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Account Card | Checking, Savings, Investment, Retirement, Credit Card | ❌ | Add type variants |
| Account Card | Default, Highlighted, Selected | ❌ | Add states |
| Account Card | With/Without sparkline | ❌ | Add chart variants |
| Account List | Single, Multiple | ❌ | Add count variants |
| Account Header | Balance, Name, Institution | ❌ | Standardize layout |

#### Money Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Amount Display | Hero, Large, Medium, Small | ❌ | Add size variants |
| Amount Display | Positive, Negative, Neutral | ❌ | Add color variants |
| Currency Symbol | $, €, £, ¥ | ❌ | Add currency variants |
| Balance Card | Total, Category, Account | ❌ | Add type variants |

#### Investment Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Portfolio Card | Stocks, Bonds, ETFs, Mutual Funds | ❌ | Add type variants |
| Performance Metric | Daily, Weekly, Monthly, Yearly | ❌ | Add period variants |
| Risk Indicator | Low, Medium, High | ❌ | Add level variants |
| Allocation Chart | Pie, Donut, Bar | ❌ | Add chart type variants |

#### Goal Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Goal Card | On Track, Behind, Completed | ❌ | Add status variants |
| Goal Progress | Linear, Circular | ❌ | Add visualization variants |
| Milestone | Reached, Upcoming, Future | ❌ | Add state variants |

#### Bill Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Bill Card | Due, Paid, Overdue, Upcoming | ❌ | Add status variants |
| Bill Amount | Fixed, Variable, Range | ❌ | Add type variants |
| Payment Method | Bank, Card, Wallet | ❌ | Add method variants |

#### Transaction Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Transaction Row | Income, Expense, Transfer | ❌ | Add type variants |
| Transaction Row | Categorized, Uncategorized | ❌ | Add category variants |
| Transaction Detail | Simple, Split, Recurring | ❌ | Add complexity variants |
| Category Badge | All categories | ❌ | Add category variants |

#### Alert Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Alert Banner | Info, Warning, Error, Success | ❌ | Add type variants |
| Alert Banner | With/Without icon | ❌ | Add icon variants |
| Alert Banner | With/Without action | ❌ | Add action variants |
| Alert Card | Info, Warning, Error, Success | ❌ | Add type variants |
| Alert Card | With/Without close | ❌ | Add dismiss variants |
| Inline Alert | Info, Warning, Error | ❌ | Add type variants |

#### Navigation Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Tab Bar | 5 items | ❌ | Add item count variants |
| Tab Bar | With/Without badges | ❌ | Add badge variants |
| Header | Default, With back, With actions | ❌ | Add type variants |
| Breadcrumb | 2-4 levels | ❌ | Add depth variants |
| Section Label | Title, Title + Count | ❌ | Add count variants |

#### Button Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Button | Primary, Secondary, Ghost, Destructive | ❌ | Add type variants |
| Button | Small, Medium, Large | ❌ | Add size variants |
| Button | Default, Hover, Active, Disabled, Loading | ❌ | Add state variants |
| Button | With/Without icon | ❌ | Add icon variants |
| Button | Full width, Auto width | ❌ | Add width variants |
| FAB | Primary, Secondary | ❌ | Add type variants |

#### Card Components

| Component | Variants | Auto Layout | Recommendation |
|-----------|----------|-------------|----------------|
| Card | Default, Interactive, Selected | ❌ | Add state variants |
| Card | With/Without header | ❌ | Add header variants |
| Card | With/Without footer | ❌ | Add footer variants |
| Card | With/Without border | ❌ | Add border variants |
| Score Ring | Value display | ❌ | Add size variants |
| Sparkline | Mini chart | ❌ | Add height variants |

### 5.3 Patterns (25 Patterns)

| Pattern | Components | Auto Layout | Recommendation |
|---------|------------|-------------|----------------|
| Chrome & Navigation | Header, Tab Bar, Back | ❌ | Standardize spacing |
| Section Dividers | Section Label, Divider | ❌ | Add variants |
| List Rows & Items | Transaction, Account, Bill | ❌ | Standardize heights |
| Inputs & Actions | Text Input, Button, Toggle | ❌ | Add focus states |
| Selectors & Pickers | Date, Category, Account | ❌ | Add modal variants |
| Score Rings | Circular progress | ❌ | Add size variants |
| Cards — Composites | Account, Bill, Goal | ❌ | Add composition patterns |
| Empty States | illustration, text, CTA | ❌ | Add illustration variants |
| Loading States | Skeleton, Spinner | ❌ | Add type variants |
| Error States | illustration, text, retry | ❌ | Add illustration variants |

---

## 6. Financial Language Taxonomy

### 6.1 Core Financial Terms

| Term | Definition | Component | Display Format |
|------|------------|-----------|----------------|
| Balance | Current amount in account | Amount Display | $12,450.00 |
| Transaction | Single financial activity | Transaction Row | -$45.00 |
| Transfer | Movement between accounts | Transaction Row | $1,000.00 |
| Income | Money received | Transaction Row | +$5,000.00 |
| Expense | Money spent | Transaction Row | -$2,500.00 |
| Bill | Recurring payment obligation | Bill Card | $150.00/mo |
| Goal | Financial target | Goal Card | $10,000 target |
| Portfolio | Investment collection | Portfolio Card | $50,000 total |
| Allocation | Distribution of investments | Allocation Chart | 60% stocks |
| Return | Investment gain/loss | Performance Metric | +12.5% YTD |
| Dividend | Investment income | Transaction Row | +$250.00 |
| Interest | Cost of borrowing/earning | Transaction Row | +$15.00 |
| Net Worth | Assets - Liabilities | Balance Card | $124,500.00 |
| Cash Flow | Income - Expenses | Chart | +$2,500/mo |
| Budget | Spending plan | Category Card | $500/mo limit |

### 6.2 Status Language

| Status | Definition | Color | Icon |
|--------|------------|-------|------|
| On Track | Meeting or exceeding target | Green | ✅ |
| Behind | Below target pace | Amber | ⚠️ |
| At Risk | Significantly below target | Red | ❌ |
| Completed | Target achieved | Green | ✅ |
| Pending | Awaiting action | Gray | ⏳ |
| Active | Currently in progress | Blue | 🔄 |
| Paused | Temporarily stopped | Gray | ⏸️ |
| Overdue | Past due date | Red | ❌ |
| Paid | Payment completed | Green | ✅ |
| Due Soon | Payment within 7 days | Amber | ⏰ |

### 6.3 Date & Time Language

| Term | Format | Example |
|------|--------|---------|
| Today | "Today" | Today |
| Yesterday | "Yesterday" | Yesterday |
| This Week | "Mon, Jun 29" | Mon, Jun 29 |
| This Month | "June 2026" | June 2026 |
| This Year | "2026" | 2026 |
| Time | "3:45 PM" | 3:45 PM |
| Relative | "2 min ago" | 2 min ago |
| Duration | "3 months" | 3 months |
| Range | "Jun 1 - 30" | Jun 1 - 30 |

### 6.4 Action Language

| Action | Button Label | Usage |
|--------|--------------|-------|
| Connect | "Connect Account" | Link external account |
| Add | "Add Income" | Manual entry |
| Review | "Review & Fix" | Address issues |
| View | "View Details" | See more info |
| Edit | "Edit Transaction" | Modify entry |
| Delete | "Remove Account" | Unlink account |
| Transfer | "Transfer Funds" | Move money |
| Pay | "Pay Bill" | Make payment |
| Invest | "Invest Now" | Buy securities |
| Withdraw | "Withdraw Funds" | Remove money |
| Categorize | "Categorize" | Assign category |
| Split | "Split Transaction" | Divide entry |
| Settle | "Settle Up" | Clear balance |

### 6.5 Notification Language

| Type | Title Pattern | Body Pattern |
|------|---------------|--------------|
| Success | "Transfer Complete" | "Your $500 transfer to Chase Checking is complete." |
| Warning | "Bill Due Soon" | "Your $150 electric bill is due in 3 days." |
| Error | "Connection Failed" | "We couldn't connect to Chase. Please try again." |
| Info | "New Insight" | "We found a way to save $240/month on subscriptions." |
| Reminder | "Payment Reminder" | "Your credit card payment is due tomorrow." |
| Update | "Account Updated" | "Your Chase Checking balance has been updated." |

---

## 7. Engineering Audit

### 7.1 Auto Layout Assessment

| Component | Current | Target | Gap |
|-----------|---------|--------|-----|
| Buttons | Fixed width | Auto Layout + hug | High |
| Inputs | Fixed width | Auto Layout + fill | High |
| Cards | Fixed size | Auto Layout + fill | High |
| List Items | Fixed height | Auto Layout + hug | Medium |
| Modals | Fixed size | Auto Layout + fill | High |
| Tab Bar | Fixed width | Auto Layout + fill | Medium |

**Recommendation:** All components should use Auto Layout with:
- **Horizontal:** `justify-content: space-between` for headers
- **Vertical:** `gap: 8px` for content sections
- **Padding:** Consistent internal spacing
- **Resizing:** `hug contents` for compact, `fill container` for full-width

### 7.2 Constraints Assessment

| Component | Current | Target | Gap |
|-----------|---------|--------|-----|
| Cards | None | Left-Right constraints | High |
| Tab Bar | None | Bottom + Left-Right | High |
| Header | None | Top + Left-Right | High |
| Modals | None | Center + Constraints | High |
| Buttons | None | Left-Right + Bottom | Medium |

**Recommendation:** Add constraints for:
- **Horizontal resize:** Cards, inputs, buttons
- **Vertical resize:** List items, modals
- **Fixed position:** Tab bar, header

### 7.3 Variables Assessment

| Collection | Current | Target | Gap |
|------------|---------|--------|-----|
| Colors | Manual hex | Variables | High |
| Spacing | Manual px | Variables | High |
| Radius | Manual px | Variables | High |
| Shadows | Manual values | Variables | High |
| Typography | Manual styles | Variables | Medium |

**Recommendation:** Create 12 Figma collections:
1. `Primitives/Colors` — Raw color values
2. `Primitives/Spacing` — Raw spacing values
3. `Primitives/Radius` — Raw radius values
4. `Primitives/Shadows` — Raw shadow values
5. `Semantic/Colors` — Contextual color tokens
6. `Semantic/Spacing` — Contextual spacing tokens
7. `Semantic/Radius` — Contextual radius tokens
8. `Semantic/Shadows` — Contextual shadow tokens
9. `Components/Colors` — Component-specific tokens
10. `Components/Spacing` — Component-specific tokens
11. `Platform/iOS` — iOS-specific overrides
12. `Platform/Web` — Web-specific overrides

### 7.4 Component Properties Assessment

| Component | Current | Target | Gap |
|-----------|---------|--------|-----|
| Buttons | None | Variant, Size, State, Icon | High |
| Inputs | None | Type, Size, State, Label | High |
| Cards | None | Type, Size, State, Content | High |
| Badges | None | Color, Size, Icon | Medium |
| Toggles | None | Size, State | Medium |

**Recommendation:** Add component properties:
- **Variant:** Type variations (primary, secondary, etc.)
- **Size:** Size variations (small, medium, large)
- **State:** Interaction states (default, hover, active, disabled)
- **Boolean:** Show/hide elements (icon, label, helper text)
- **Instance swap:** Icon, label, placeholder text

### 7.5 Variants Assessment

| Component | Current | Target | Gap |
|-----------|---------|--------|-----|
| Buttons | 4 separate | 1 component with variants | High |
| Inputs | 1 state | 4 states | High |
| Cards | 1 type | 8+ types | High |
| Badges | 5 colors | 5 colors × 3 sizes | Medium |
| Toggles | 2 states | 2 states × 3 sizes | Medium |

**Recommendation:** Consolidate into variant sets:
- **Button:** 4 types × 3 sizes × 5 states × 2 icon positions = 120 variants
- **Input:** 4 types × 3 sizes × 4 states × 2 label positions = 96 variants
- **Card:** 8 types × 3 sizes × 3 states = 72 variants
- **Badge:** 5 colors × 3 sizes × 2 icon positions = 30 variants
- **Toggle:** 2 states × 3 sizes = 6 variants

---

## 8. Accessibility Audit

### 8.1 Contrast Ratios

| Element | Current Ratio | Target Ratio | Status |
|---------|---------------|--------------|--------|
| Primary text on white | 15.4:1 | 4.5:1 | ✅ Pass |
| Secondary text on white | 7.1:1 | 4.5:1 | ✅ Pass |
| Muted text on white | 3.8:1 | 4.5:1 | ❌ Fail |
| Blue button text on blue | 4.6:1 | 4.5:1 | ✅ Pass |
| Green badge text on green | 4.5:1 | 4.5:1 | ✅ Pass |
| Red badge text on red | 4.3:1 | 4.5:1 | ❌ Fail |

**Recommendations:**
- Increase muted text contrast to 4.5:1 (darken from #94A3B8 to #64748B)
- Increase red badge text contrast (darken red or lighten text)
- Add high contrast mode for accessibility settings

### 8.2 Touch Targets

| Element | Current Size | Target Size | Status |
|---------|--------------|-------------|--------|
| Button (Small) | 32px height | 44px | ❌ Fail |
| Button (Medium) | 40px height | 44px | ❌ Fail |
| Button (Large) | 48px height | 44px | ✅ Pass |
| Tab Bar Item | 48px × 48px | 44px × 44px | ✅ Pass |
| Toggle | 44px × 24px | 44px × 44px | ❌ Fail |
| Checkbox | 20px × 20px | 44px × 44px | ❌ Fail |
| Radio | 20px × 20px | 44px × 44px | ❌ Fail |

**Recommendations:**
- Increase button minimum height to 44px
- Add 12px padding around toggles, checkboxes, radios
- Ensure all interactive elements have 44px × 44px minimum touch target

### 8.3 Dynamic Type

| Element | Current | Target | Status |
|---------|---------|--------|--------|
| Headings | Fixed size | Scalable | ❌ Fail |
| Body text | Fixed size | Scalable | ❌ Fail |
| Amounts | Fixed size | Scalable | ❌ Fail |
| Labels | Fixed size | Scalable | ❌ Fail |

**Recommendations:**
- Use relative units (pt/sp) instead of fixed px
- Test with iOS Dynamic Type settings
- Ensure layout adapts to larger text sizes

### 8.4 VoiceOver

| Element | Current | Target | Status |
|---------|---------|--------|--------|
| Images | No alt text | Alt text | ❌ Fail |
| Icons | No label | Accessible label | ❌ Fail |
| Buttons | No hint | Accessible hint | ❌ Fail |
| Inputs | No label | Accessible label | ❌ Fail |

**Recommendations:**
- Add alt text for all images
- Add accessible labels for icons
- Add accessible hints for buttons
- Add accessible labels for inputs

### 8.5 Focus States

| Element | Current | Target | Status |
|---------|---------|--------|--------|
| Buttons | No focus ring | Focus ring | ❌ Fail |
| Inputs | No focus ring | Focus ring | ❌ Fail |
| Links | No focus ring | Focus ring | ❌ Fail |
| Toggles | No focus ring | Focus ring | ❌ Fail |

**Recommendations:**
- Add 2px blue focus ring for all interactive elements
- Ensure focus ring is visible on all backgrounds
- Add focus-within styles for compound components

---

## 9. Figma File Architecture

### 9.1 Recommended File Structure

```
Advizmo Design System (Published)
│
├── 📄 Cover
│   ├── Logo
│   ├── Version info
│   └── Navigation
│
├── 📄 Foundations
│   ├── Colors
│   │   ├── Primitives (8 scales × 11 steps)
│   │   ├── Semantic (20 tokens)
│   │   └── Component (32 tokens)
│   ├── Typography
│   │   ├── Scale (20 styles)
│   │   ├── Weights (4 weights)
│   │   └── Line Heights (6 heights)
│   ├── Spacing
│   │   ├── Scale (9 values)
│   │   └── Usage examples
│   ├── Radius
│   │   ├── Scale (4 values)
│   │   └── Usage examples
│   ├── Elevation
│   │   ├── Scale (6 levels)
│   │   └── Usage examples
│   ├── Icons
│   │   ├── Material Symbols
│   │   ├── Usage guidelines
│   │   └── Size variants
│   └── Imagery
│       ├── Illustrations
│       ├── Photos
│       └── Charts
│
├── 📄 Primitives
│   ├── Typography (14 components)
│   ├── Icons (1 component × many instances)
│   ├── Labels (1 component × 3 states)
│   ├── Badges (1 component × 5 colors × 3 sizes)
│   ├── Chips (1 component × 3 states)
│   ├── Tags (1 component × 3 sizes)
│   ├── Indicators (1 component × 4 types)
│   ├── Avatar (1 component × 4 sizes × 3 contents)
│   ├── Dividers (1 component × 2 orientations)
│   ├── Progress (2 components × 3 sizes)
│   ├── Loaders (2 components)
│   ├── Status (1 component × 5 states)
│   ├── Money (1 component × 4 sizes × 3 colors)
│   ├── Percentage (1 component × 4 sizes)
│   ├── Trend (1 component × 3 directions)
│   ├── Portfolio (1 component × 3 types)
│   ├── AI (1 component × 2 sizes)
│   ├── Utility (5 components)
│   ├── Chart Primitives (5 components)
│   ├── Empty States (1 component × 3 types)
│   └── Feedback (1 component × 3 types)
│
├── 📄 Components
│   ├── Accounts (5 components × 3 variants)
│   ├── Money (3 components × 4 variants)
│   ├── Investments (4 components × 3 variants)
│   ├── Portfolio (3 components × 2 variants)
│   ├── Goals (3 components × 3 variants)
│   ├── Bills (3 components × 4 variants)
│   ├── Automation (3 components × 2 variants)
│   ├── AI (3 components × 2 variants)
│   ├── Transactions (3 components × 3 variants)
│   ├── Institutions (3 components × 2 variants)
│   ├── Notifications (3 components × 2 variants)
│   ├── Security (3 components × 2 variants)
│   ├── Identity (3 components × 2 variants)
│   ├── Analytics (3 components × 2 variants)
│   ├── Dashboard Widgets (3 components × 2 variants)
│   └── Shared (10 components × 2 variants)
│
├── 📄 Patterns
│   ├── Chrome & Navigation
│   ├── Section Dividers
│   ├── List Rows & Items
│   ├── Inputs & Actions
│   ├── Selectors & Pickers
│   ├── Score Rings
│   ├── Cards — Composites
│   ├── Empty States
│   ├── Loading States
│   └── Error States
│
└── 📄 Documentation
    ├── Getting Started
    ├── Token Reference
    ├── Component Usage
    ├── Accessibility
    └── Changelog
```

### 9.2 Page Naming Convention

```
[Section] — [Subsection]
```

Examples:
- `Foundations — Colors`
- `Primitives — Buttons`
- `Components — Accounts`
- `Patterns — Empty States`

### 9.3 Frame Naming Convention

```
[Component] / [Variant] / [State]
```

Examples:
- `Button / Primary / Default`
- `Button / Primary / Hover`
- `Button / Secondary / Disabled`
- `Input / Text / Focus`
- `Card / Account / Selected`

---

## 10. Token Implementation

### 10.1 Figma Variables Setup

#### Collection 1: Primitives/Colors

```
Primitives/Colors
├── Blue/50 → #EFF6FF
├── Blue/100 → #DBEAFE
├── Blue/200 → #BFDBFE
├── Blue/300 → #93C5FD
├── Blue/400 → #60A5FA
├── Blue/500 → #3B82F6
├── Blue/600 → #2563EB
├── Blue/700 → #1D4ED8
├── Blue/800 → #1E40AF
├── Blue/900 → #1E3A8A
├── Blue/950 → #172554
├── Green/50 → #F0FDF4
├── Green/100 → #DCFCE7
├── ... (8 scales × 11 steps = 88 tokens)
└── Gray/950 → #030712
```

#### Collection 2: Primitives/Spacing

```
Primitives/Spacing
├── 0 → 0px
├── 1 → 4px
├── 2 → 8px
├── 3 → 12px
├── 4 → 16px
├── 6 → 24px
├── 8 → 32px
├── 12 → 48px
└── 16 → 64px
```

#### Collection 3: Primitives/Radius

```
Primitives/Radius
├── none → 0px
├── sm → 8px
├── md → 12px
└── pill → 9999px
```

#### Collection 4: Primitives/Shadows

```
Primitives/Shadows
├── none → (none)
├── card → 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
├── raised → 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)
├── elevated → 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
├── modal → 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)
└── toast → 0 25px 50px rgba(0,0,0,0.25)
```

#### Collection 5: Semantic/Colors

```
Semantic/Colors
├── surface/bg → {Primitives/Colors/White}
├── surface/card → {Primitives/Colors/White}
├── surface/overlay → {Primitives/Colors/Gray/50}
├── surface/subtle → {Primitives/Colors/Gray/100}
├── surface/muted → {Primitives/Colors/Gray/200}
├── text/primary → {Primitives/Colors/Gray/900}
├── text/secondary → {Primitives/Colors/Gray/600}
├── text/muted → {Primitives/Colors/Gray/400}
├── text/disabled → {Primitives/Colors/Gray/300}
├── text/on-accent → {Primitives/Colors/White}
├── accent/primary → {Primitives/Colors/Blue/600}
├── accent/primary-hover → {Primitives/Colors/Blue/700}
├── accent/primary-active → {Primitives/Colors/Blue/800}
├── accent/primary-subtle → {Primitives/Colors/Blue/50}
├── semantic/positive → {Primitives/Colors/Green/600}
├── semantic/positive-surface → {Primitives/Colors/Green/50}
├── semantic/negative → {Primitives/Colors/Red/500}
├── semantic/negative-surface → {Primitives/Colors/Red/50}
├── semantic/warning → {Primitives/Colors/Yellow/500}
├── semantic/warning-surface → {Primitives/Colors/Yellow/50}
├── semantic/info → {Primitives/Colors/Teal/500}
└── semantic/info-surface → {Primitives/Colors/Teal/50}
```

### 10.2 Token Application Rules

| Token Type | Application | Example |
|------------|-------------|---------|
| Primitive | Never use directly in components | `Blue/600` |
| Semantic | Use for all component styling | `accent/primary` |
| Component | Use for component-specific overrides | `button/primary/bg` |

### 10.3 Token Migration Checklist

- [ ] Create 12 Figma collections
- [ ] Define all primitive tokens (88 colors, 9 spacing, 4 radius, 6 shadows)
- [ ] Define all semantic tokens (22 colors, 9 spacing, 4 radius, 6 shadows)
- [ ] Define all component tokens (32 sets)
- [ ] Map existing styles to new tokens
- [ ] Update all components to use variables
- [ ] Test dark mode with variable modes
- [ ] Document token usage guidelines

---

## 11. Component Specifications

### 11.1 Button Component

#### Anatomy

```
┌─────────────────────────────────┐
│  [Icon Left]  Label  [Icon Right]│
└─────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Variant | Variant | Primary | Primary, Secondary, Ghost, Destructive |
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Hover, Active, Disabled, Loading |
| Icon Left | Instance | None | Any icon |
| Icon Right | Instance | None | Any icon |
| Full Width | Boolean | false | true, false |
| Loading | Boolean | false | true, false |

#### Dimensions

| Size | Height | Padding | Font Size | Icon Size |
|------|--------|---------|-----------|-----------|
| Small | 32px | 12px 16px | 12px | 16px |
| Medium | 40px | 12px 20px | 14px | 20px |
| Large | 48px | 12px 24px | 16px | 24px |

#### Styles

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `accent/primary` | `text/on-accent` | None |
| Secondary | `surface/bg` | `accent/primary` | 1px `accent/primary` |
| Ghost | Transparent | `accent/primary` | None |
| Destructive | `semantic/negative` | `text/on-accent` | None |

#### States

| State | Background | Text | Opacity |
|-------|------------|------|---------|
| Default | As variant | As variant | 100% |
| Hover | Darken 10% | As variant | 100% |
| Active | Darken 20% | As variant | 100% |
| Disabled | `surface/muted` | `text/disabled` | 50% |
| Loading | As variant | As variant | 70% |

### 11.2 Input Component

#### Anatomy

```
┌─────────────────────────────────┐
│ Label (optional)                │
│ ┌─────────────────────────────┐ │
│ │ [Prefix] Value      [Suffix]│ │
│ └─────────────────────────────┘ │
│ Helper text (optional)          │
└─────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Type | Variant | Text | Text, Email, Password, Number, Phone, Search |
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Focus, Error, Disabled |
| Label | String | "Label" | Any text |
| Placeholder | String | "Enter value" | Any text |
| Helper Text | String | "Helper text" | Any text |
| Error Text | String | "Error text" | Any text |
| Prefix | Instance | None | Any icon or text |
| Suffix | Instance | None | Any icon or text |
| Required | Boolean | false | true, false |

#### Dimensions

| Size | Height | Padding | Font Size | Label Size |
|------|--------|---------|-----------|------------|
| Small | 32px | 8px 12px | 12px | 12px |
| Medium | 40px | 8px 12px | 14px | 14px |
| Large | 48px | 8px 12px | 16px | 16px |

#### Styles

| State | Background | Border | Text |
|-------|------------|--------|------|
| Default | `surface/bg` | 1px `surface/muted` | `text/primary` |
| Focus | `surface/bg` | 2px `accent/primary` | `text/primary` |
| Error | `surface/bg` | 2px `semantic/negative` | `text/primary` |
| Disabled | `surface/muted` | 1px `surface/muted` | `text/disabled` |

### 11.3 Card Component

#### Anatomy

```
┌─────────────────────────────────┐
│ [Icon] Title              [Action]│
│─────────────────────────────────│
│ Content area                    │
│─────────────────────────────────│
│ [CTA Button]           [Secondary]│
└─────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Type | Variant | Default | Default, Account, Bill, Transaction, Goal, Investment |
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Hover, Selected, Disabled |
| Has Header | Boolean | true | true, false |
| Has Footer | Boolean | false | true, false |
| Has Border | Boolean | true | true, false |
| Header Icon | Instance | None | Any icon |
| Header Title | String | "Card Title" | Any text |
| Header Action | Instance | None | Any button |

#### Dimensions

| Size | Width | Padding | Border Radius |
|------|-------|---------|---------------|
| Small | Auto | 12px | `radius/md` |
| Medium | Auto | 16px | `radius/md` |
| Large | Auto | 24px | `radius/md` |

#### Styles

| State | Background | Border | Shadow |
|-------|------------|--------|--------|
| Default | `surface/card` | 1px `surface/muted` | `elevation/card` |
| Hover | `surface/card` | 1px `surface/muted` | `elevation/raised` |
| Selected | `accent/primary-subtle` | 2px `accent/primary` | `elevation/raised` |
| Disabled | `surface/muted` | 1px `surface/muted` | None |

### 11.4 Badge Component

#### Anatomy

```
┌─────────────────────┐
│ [Icon] Label [Count] │
└─────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Color | Variant | Neutral | Neutral, Positive, Negative, Warning, Info |
| Size | Variant | Medium | Small, Medium, Large |
| Icon | Instance | None | Any icon |
| Label | String | "Badge" | Any text |
| Count | Number | None | Any number |
| Pill | Boolean | true | true, false |

#### Dimensions

| Size | Height | Padding | Font Size | Icon Size |
|------|--------|---------|-----------|-----------|
| Small | 20px | 4px 8px | 10px | 12px |
| Medium | 24px | 4px 10px | 12px | 16px |
| Large | 28px | 4px 12px | 14px | 20px |

#### Styles

| Color | Background | Text | Border |
|-------|------------|------|--------|
| Neutral | `surface/subtle` | `text/secondary` | None |
| Positive | `semantic/positive-surface` | `semantic/positive` | None |
| Negative | `semantic/negative-surface` | `semantic/negative` | None |
| Warning | `semantic/warning-surface` | `semantic/warning` | None |
| Info | `semantic/info-surface` | `semantic/info` | None |

### 11.5 Alert Banner Component

#### Anatomy

```
┌─────────────────────────────────┐
│ [Icon] Title              [Close]│
│ Description text here...         │
│ [Action Button]                  │
└─────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Type | Variant | Info | Info, Warning, Error, Success |
| Has Icon | Boolean | true | true, false |
| Has Close | Boolean | true | true, false |
| Has Action | Boolean | false | true, false |
| Icon | Instance | None | Any icon |
| Title | String | "Alert Title" | Any text |
| Description | String | "Alert description" | Any text |
| Action Label | String | "Action" | Any text |

#### Dimensions

| Property | Value |
|----------|-------|
| Width | Fill container |
| Padding | 16px |
| Border Radius | `radius/md` |
| Gap | 8px |

#### Styles

| Type | Background | Border | Icon | Text |
|------|------------|--------|------|------|
| Info | `semantic/info-surface` | 1px `semantic/info` | `semantic/info` | `text/primary` |
| Warning | `semantic/warning-surface` | 1px `semantic/warning` | `semantic/warning` | `text/primary` |
| Error | `semantic/negative-surface` | 1px `semantic/negative` | `semantic/negative` | `text/primary` |
| Success | `semantic/positive-surface` | 1px `semantic/positive` | `semantic/positive` | `text/primary` |

---

## 12. Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2)

| Task | Priority | Effort | Owner |
|------|----------|--------|-------|
| Create Figma file structure | High | 2h | Designer |
| Set up 12 variable collections | High | 4h | Designer |
| Define all primitive tokens | High | 8h | Designer |
| Define all semantic tokens | High | 4h | Designer |
| Document token usage guidelines | Medium | 2h | Designer |
| **Total** | | **20h** | |

### Phase 2: Primitives (Weeks 3-4)

| Task | Priority | Effort | Owner |
|------|----------|--------|-------|
| Build typography components | High | 4h | Designer |
| Build icon system | High | 2h | Designer |
| Build button component | High | 4h | Designer |
| Build input component | High | 4h | Designer |
| Build badge component | Medium | 2h | Designer |
| Build label component | Medium | 2h | Designer |
| Build toggle component | Medium | 2h | Designer |
| Build checkbox component | Medium | 2h | Designer |
| Build radio component | Medium | 2h | Designer |
| Build avatar component | Medium | 2h | Designer |
| Build progress components | Medium | 2h | Designer |
| Build stepper component | Low | 2h | Designer |
| **Total** | | **30h** | |

### Phase 3: Components (Weeks 5-8)

| Task | Priority | Effort | Owner |
|------|----------|--------|-------|
| Build account components | High | 6h | Designer |
| Build money components | High | 4h | Designer |
| Build investment components | High | 6h | Designer |
| Build goal components | Medium | 4h | Designer |
| Build bill components | Medium | 4h | Designer |
| Build transaction components | Medium | 4h | Designer |
| Build alert components | High | 4h | Designer |
| Build navigation components | High | 4h | Designer |
| Build card components | High | 4h | Designer |
| Build modal components | Medium | 4h | Designer |
| Build list components | Medium | 4h | Designer |
| Build form components | Medium | 4h | Designer |
| **Total** | | **52h** | |

### Phase 4: Patterns (Weeks 9-10)

| Task | Priority | Effort | Owner |
|------|----------|--------|-------|
| Build chrome & navigation pattern | High | 4h | Designer |
| Build section dividers pattern | Medium | 2h | Designer |
| Build list rows pattern | High | 4h | Designer |
| Build inputs & actions pattern | High | 4h | Designer |
| Build selectors & pickers pattern | Medium | 4h | Designer |
| Build score rings pattern | Low | 2h | Designer |
| Build composite cards pattern | Medium | 4h | Designer |
| Build empty states pattern | Medium | 2h | Designer |
| Build loading states pattern | Medium | 2h | Designer |
| Build error states pattern | Medium | 2h | Designer |
| **Total** | | **30h** | |

### Phase 5: Documentation (Weeks 11-12)

| Task | Priority | Effort | Owner |
|------|----------|--------|-------|
| Write getting started guide | High | 4h | Designer |
| Write token reference | High | 4h | Designer |
| Write component usage guide | High | 8h | Designer |
| Write accessibility guide | Medium | 4h | Designer |
| Create changelog | Low | 2h | Designer |
| Publish to Figma library | High | 2h | Designer |
| **Total** | | **24h** | |

### Total Effort

| Phase | Hours | Weeks |
|-------|-------|-------|
| Foundation | 20h | 1-2 |
| Primitives | 30h | 3-4 |
| Components | 52h | 5-8 |
| Patterns | 30h | 9-10 |
| Documentation | 24h | 11-12 |
| **Total** | **156h** | **12 weeks** |

---

## 13. Quality Assurance Checklist

### 13.1 Foundation Checklist

- [ ] All colors defined in variables
- [ ] All spacing values defined in variables
- [ ] All radius values defined in variables
- [ ] All shadows defined in variables
- [ ] All typography styles defined
- [ ] All icon sizes documented
- [ ] Dark mode variables configured
- [ ] High contrast mode variables configured

### 13.2 Component Checklist

- [ ] All components use Auto Layout
- [ ] All components have variants
- [ ] All components have component properties
- [ ] All components use variables for styling
- [ ] All components are responsive
- [ ] All components have proper naming
- [ ] All components are organized in sections
- [ ] All components have documentation

### 13.3 Accessibility Checklist

- [ ] All text meets WCAG AA contrast (4.5:1)
- [ ] All interactive elements have 44px touch targets
- [ ] All components support Dynamic Type
- [ ] All components have VoiceOver labels
- [ ] All components have focus states
- [ ] All components have proper semantics

### 13.4 Documentation Checklist

- [ ] Getting started guide complete
- [ ] Token reference complete
- [ ] Component usage guide complete
- [ ] Accessibility guide complete
- [ ] Changelog initialized
- [ ] Publishing workflow documented
- [ ] Contribution guidelines written
- [ ] Review process defined

### 13.5 Publishing Checklist

- [ ] All components marked as "publishable"
- [ ] All descriptions filled in
- [ ] All keywords added
- [ ] Library published to team
- [ ] Version number updated
- [ ] Release notes written
- [ ] Team notified
- [ ] Feedback channel established

---

## Appendix A: Figma Keyboard Shortcuts

### Essential Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Auto Layout | Shift + A | Shift + A |
| Frame | F | F |
| Slice | S | S |
| Hand | H | H |
| Text | T | T |
| Rectangle | R | R |
| Ellipse | O | O |
| Line | L | L |
| Pen | P | P |
| Move | V | V |
| Scale | K | K |
| Duplicate | ⌘ + D | Ctrl + D |
| Group | ⌘ + G | Ctrl + G |
| Ungroup | ⇧ + ⌘ + G | Shift + Ctrl + G |
| Bring Forward | ⌘ + ] | Ctrl + ] |
| Send Backward | ⌘ + [ | Ctrl + [ |
| Align Left | ⌥ + ⌘ + L | Alt + Ctrl + L |
| Align Center | ⌥ + ⌘ + H | Alt + Ctrl + H |
| Align Right | ⌥ + ⌘ + R | Alt + Ctrl + R |
| Align Top | ⌥ + ⌘ + T | Alt + Ctrl + T |
| Align Middle | ⌥ + ⌘ + M | Alt + Ctrl + M |
| Align Bottom | ⌥ + ⌘ + B | Alt + Ctrl + B |
| Distribute Horizontal | ⌥ + ⌘ + H | Alt + Ctrl + H |
| Distribute Vertical | ⌥ + ⌘ + V | Alt + Ctrl + V |

### Component Shortcuts

| Action | Mac | Windows |
|--------|-----|---------|
| Create Component | ⌘ + K | Ctrl + K |
| Detach Instance | ⌥ + ⌘ + K | Alt + Ctrl + K |
| Go to Master | ⌥ + ⌘ + Return | Alt + Ctrl + Enter |
| Swap Instance | ⌥ + ⌘ + K | Alt + Ctrl + K |

---

## Appendix B: Figma Plugins

### Recommended Plugins

| Plugin | Purpose | Usage |
|--------|---------|-------|
| Tokens Studio | Token management | Import/export JSON |
| Iconify | Icon library | Material Symbols |
| Stark | Accessibility | Contrast checking |
| Automator | Batch operations | Rename layers |
| Clean Document | File cleanup | Remove unused |
| Blueprint | Documentation | Auto-generate docs |

### Plugin Setup

1. Install Tokens Studio
2. Configure token format
3. Import token JSON
4. Sync with variables
5. Set up auto-sync

---

## Appendix C: Token JSON Format

```json
{
  "primitives": {
    "colors": {
      "blue": {
        "50": "#EFF6FF",
        "100": "#DBEAFE",
        "200": "#BFDBFE",
        "300": "#93C5FD",
        "400": "#60A5FA",
        "500": "#3B82F6",
        "600": "#2563EB",
        "700": "#1D4ED8",
        "800": "#1E40AF",
        "900": "#1E3A8A",
        "950": "#172554"
      },
      "green": {
        "50": "#F0FDF4",
        "100": "#DCFCE7",
        "200": "#BBF7D0",
        "300": "#86EFAC",
        "400": "#4ADE80",
        "500": "#22C55E",
        "600": "#16A34A",
        "700": "#15803D",
        "800": "#166534",
        "900": "#14532D",
        "950": "#052E16"
      }
    },
    "spacing": {
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "8": "32px",
      "12": "48px",
      "16": "64px"
    },
    "radius": {
      "none": "0px",
      "sm": "8px",
      "md": "12px",
      "pill": "9999px"
    },
    "shadows": {
      "none": "none",
      "card": "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
      "raised": "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
      "elevated": "0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
      "modal": "0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)",
      "toast": "0 25px 50px rgba(0,0,0,0.25)"
    }
  },
  "semantic": {
    "colors": {
      "surface": {
        "bg": "{primitives.colors.white}",
        "card": "{primitives.colors.white}",
        "overlay": "{primitives.colors.gray.50}",
        "subtle": "{primitives.colors.gray.100}",
        "muted": "{primitives.colors.gray.200}"
      },
      "text": {
        "primary": "{primitives.colors.gray.900}",
        "secondary": "{primitives.colors.gray.600}",
        "muted": "{primitives.colors.gray.400}",
        "disabled": "{primitives.colors.gray.300}",
        "on-accent": "{primitives.colors.white}"
      },
      "accent": {
        "primary": "{primitives.colors.blue.600}",
        "primary-hover": "{primitives.colors.blue.700}",
        "primary-active": "{primitives.colors.blue.800}",
        "primary-subtle": "{primitives.colors.blue.50}"
      },
      "semantic": {
        "positive": "{primitives.colors.green.600}",
        "positive-surface": "{primitives.colors.green.50}",
        "negative": "{primitives.colors.red.500}",
        "negative-surface": "{primitives.colors.red.50}",
        "warning": "{primitives.colors.yellow.500}",
        "warning-surface": "{primitives.colors.yellow.50}",
        "info": "{primitives.colors.teal.500}",
        "info-surface": "{primitives.colors.teal.50}"
      }
    }
  }
}
```

---

## 14 Production Templates — Figma Implementation

The 8 production templates are live CSS-rendered HTML screens demonstrating the complete design system. Use these templates as the canonical reference for building screens in Figma.

### Template Files

| Template | File | Key Components |
|---------|------|---------------|
| Dashboard | `Advizmo-Template-Dashboard.html` | Net Worth Hero, Account Rows, Transaction Rows, AI Insight Cards, Goals |
| Portfolio | `Advizmo-Template-Portfolio.html` | Period Selector, Donut Chart, Performance Metrics, Holding Rows |
| Transactions | `Advizmo-Template-Transactions.html` | Search Bar, Filter Chips, Summary Card, Date Groups, Transaction Rows |
| Goals | `Advizmo-Template-Goals.html` | Summary Cards, Goal Cards with Progress Bars, Completed Badges |
| AI Insights | `Advizmo-Template-AI.html` | AI Header, Insight Cards, Confidence Bars, Action Buttons |
| Automation | `Advizmo-Template-Automation.html` | Summary Stats, Automation Cards, iOS Toggles, Status Dots |
| Bills | `Advizmo-Template-Bills.html` | Summary Cards, Bill Cards, Due Status, Auto-pay Badges |
| Settings | `Advizmo-Template-Settings.html` | Profile Card, Settings Rows, Toggles, Danger Zone |

### Figma Setup for Templates

#### Page Structure

```
Dashboard Screen (Frame: 390 x 844 — iPhone 14 Pro)
├── Status Bar (32px)
├── Nav Bar (56px)
│   └── Title (Inter 18px Semibold)
├── Scroll Content
│   ├── Net Worth Hero Card (390 x 180)
│   │   ├── Label (Inter 12px Medium, 85% white)
│   │   ├── Value (IBM Plex Sans 36px Bold, white)
│   │   ├── Change Badge (pill, white/20%)
│   │   └── Sparkline SVG
│   ├── Section Label (Inter 13px Semibold, gray uppercase)
│   ├── Accounts Card
│   │   └── Account Rows (3x)
│   ├── Transactions Card
│   │   └── Transaction Rows (5x)
│   ├── AI Insights (2 cards)
│   └── Goals Card
└── Tab Bar (fixed bottom, 56px + safe area)
```

#### Component Mapping

| Template Element | Figma Component | Auto Layout |
|-----------------|-----------------|-------------|
| Hero Card | Card + Linear Gradient fill | Hug contents |
| Account Row | List Item (icon + text + value) | Fill container |
| Transaction Row | List Item (icon + meta + amount) | Fill container |
| AI Insight Card | Card + AI badge + action buttons | Fill width |
| Goal Card | Card + Progress Bar + footer | Fill width |
| Tab Bar | Tab Bar component | Fill width, fixed bottom |
| Period Selector | Segmented Control | Fill width |

#### Typography in Templates

```
Financial Values (IBM Plex Sans):
  Net Worth:     36px / 700 / -1px tracking
  Card Balance:  14px / 600
  Change Amount: 11-12px / 500-600

UI Text (Inter):
  Nav Title:     18px / 600
  Card Title:    14px / 600
  Body:          14px / 400
  Caption:       12px / 400
  Label:         12px / 600 / UPPERCASE
  Section:       13px / 600 / UPPERCASE
```

#### Token Binding in Figma

For each template element in Figma:

1. **Colors**: Bind to semantic tokens (e.g., `color/positive`, `surface/card`)
2. **Typography**: Bind text layers to typography roles (e.g., `typography/financial-xl`)
3. **Spacing**: Use 4pt grid alignment (4, 8, 12, 16, 24, 32, 48px)
4. **Radius**: Use 3 values only — 8px (small), 12px (medium), 9999px (pill)
5. **Shadows**: Use `shadow/flat` for cards, `shadow/raised` for dropdowns

### Template Color Usage

| Element | Color | Token |
|---------|-------|-------|
| Primary actions, links | `#2563EB` | `color/brand` |
| Net worth hero bg | `#2563EB → #1D4ED8` | gradient |
| Positive amounts | `#059669` | `color/positive` |
| Negative amounts | `#111827` | `text/primary` |
| Due soon / attention | `#EA580C` | `color/attention` |
| AI elements | `#A855F7` | `color/ai` |
| Tab bar, dividers | `#E5E7EB` | `border/default` |
| Page background | `#F9FAFB` | `surface/page` |

### Template Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Chip padding, icon gaps |
| `space-2` | 8px | Small gaps, badge padding |
| `space-3` | 12px | List item padding |
| `space-4` | 16px | Card padding, section gaps |
| `space-6` | 24px | Section separators |
| `space-8` | 32px | Large section gaps |
| `space-12` | 48px | Page margins |

### Accessibility in Templates

| Element | Requirement |
|---------|------------|
| Touch targets | Minimum 44x44pt |
| Text contrast | 4.5:1 minimum (WCAG AA) |
| Color + label | Never color alone — always pair with text/symbol |
| Dynamic Type | All text scales with system settings |
| Reduced Motion | No animation when `prefers-reduced-motion` |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 2026 | Ishasahu12 | Initial draft |

---

**End of Chapter 7**
