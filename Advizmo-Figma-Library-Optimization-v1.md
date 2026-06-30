# Phase 2.13 — Figma Library Optimization Guide

**Version 1.0**
**Purpose: Step-by-step guide to optimize the Advizmo Figma library for publishing**

---

## Pre-Optimization Audit

Before optimizing, audit the current Figma file:

### Current Known Issues

Based on the Figma Implementation Guide audit:

| Issue | Severity | Impact |
|-------|----------|--------|
| 5 separate Figma files | High | Hard to maintain consistency |
| Token updates manual | High | Design/code drift |
| Some radius inconsistency | Medium | Visual inconsistency |
| Component naming inconsistent | Medium | Hard to discover |
| Deep nesting in some components | Medium | Performance |
| Unused variables | Low | Clutter |

---

## Step 1: Consolidate Figma Files

### Current Structure (Problem)

```
Advizmo Design System (Published)
Advizmo iOS Components
Advizmo Web Components
Advizmo Icon Library
Advizmo Icon Library Dark
```

### Target Structure

```
Advizmo Design System (Published)
├── 📄 Pages
│   ├── 01 Foundations
│   ├── 02 Components
│   ├── 03 Financial Components
│   ├── 04 Product Patterns
│   ├── 05 Data Visualization
│   ├── 06 Templates
│   └── 07 Figma Kit
├── �变量 Variables
│   ├── Primitives
│   └── Semantic
└── 📁 Component Kit (main components)
```

### Action

1. Open each file
2. Copy pages into the main `Advizmo Design System` file
3. Use Figma's "Move page to another file" or copy/paste pages
4. Delete the source files after confirming all content transferred
5. Publish the consolidated file

---

## Step 2: Organize Pages

### Recommended Page Order

```
01 Foundations
├── Colors
├── Typography
├── Spacing
├── Radius
├── Elevation
└── Motion

02 Primitives
├── Button
├── Icon
├── Input
├── Badge
├── Label
├── Toggle
├── Checkbox
├── Radio
├── Avatar
├── Progress Bar
└── Divider

03 Components
├── Card
├── Navigation
├── Alert
├── List Item
├── Modal / Sheet
├── Tab Bar
├── Empty State
├── Skeleton
├── Toast
└── Tooltip

04 Financial Components
├── Portfolio KPI
├── Net Worth KPI
├── Goal Progress
├── Transaction Row
├── Account Row
├── AI Insight Card
├── Automation Card
└── Bill Card

05 Data Visualization
├── Line Chart
├── Area Chart
├── Bar Chart
├── Donut Chart
├── Sparkline
├── Progress Ring
└── Allocation Chart

06 Templates (for reference)
├── Dashboard
├── Portfolio
├── Transactions
├── Goals
├── AI Insights
├── Automation
├── Bills
└── Settings

07 Figma Kit (meta)
├── Auto Layout Rules
├── Token Mapping
├── Naming Conventions
└── Component Checklist
```

### Page Organization Rules

1. **Number prefix** for sort order (01, 02, 03...)
2. **Emoji prefix** for visual scanning
3. **No nested pages** — flat structure only
4. **Max 10 pages** per section
5. **Documentation page** at bottom of each section

---

## Step 3: Optimize Component Hierarchy

### Current Issues to Fix

```
⚠️ Problem: Components nested too deep
Card
 └── Account Card
      └── Account Card (Header)
           └── Account Card (Icon)

✓ Fix: Flat structure
Account Card (top-level)
Account Card Header (standalone)
Account Card Row (standalone)
```

### Component Nesting Rules

| Level | Rule | Example |
|-------|------|---------|
| 1 | Atomic (Button, Icon) | Button, Badge |
| 2 | Molecule (Input, Toggle) | Text Input, Toggle |
| 3 | Organism (Card, List) | Account Card, Transaction List |
| 4 | Page (full screens) | Dashboard Screen |

**Rule: Max 3 nesting levels**
**Rule: If a child is used standalone, it should be a separate component**

### Orphaned Components to Delete

1. Any component with 0 instances
2. Components only used in one place (consider merging)
3. Deprecated components with "OLD" or "v0" in name

---

## Step 4: Naming Convention Standardization

### Current Issues

```
⚠️ Inconsistent naming:
- "Blue Button" vs "Button/Primary"
- "Account Card Small" vs "Account Card / Small"
- "Transaction Row Default" vs "Transaction Row - Default"
```

### Target Naming Convention

```
[Component]
[Component] / [Variant]
[Component] / [Variant] / [State]
```

### Naming Rules

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `AccountCard` |
| Variants | camelCase | `AccountCard/variant:compact` |
| States | camelCase | `Button/state:pressed` |
| Sizes | camelCase | `Button/size:large` |
| Page frames | Title Case | `Dashboard Screen` |

### Token References in Naming

When a component uses tokens, reference them in the property panel:

```
Button
├── variant: primary
├── size: medium
├── state: default
└── tokens:
    ├── background: color/brand
    ├── text: typography/label-l
    └── radius: radius-s
```

---

## Step 5: Auto Layout Verification

### Checklist Per Component

For every component, verify Auto Layout:

- [ ] Auto Layout is ON
- [ ] Hug content width for inline components
- [ ] Fill container width for full-width components
- [ ] Gap uses spacing tokens (4, 8, 12, 16, 24, 32, 48)
- [ ] Padding uses spacing tokens
- [ ] No absolute positioned children
- [ ] Resize constraints set correctly
- [ ] Nested frames max depth = 3

### Auto Layout Rules by Component Type

| Component Type | Width | Height | Direction |
|---------------|-------|--------|-----------|
| Button | Hug contents | Hug contents | Horizontal |
| Badge | Hug contents | Hug contents | Horizontal |
| Input | Fill container | Hug contents | Vertical |
| Card | Fill container | Hug contents | Vertical |
| List Item | Fill container | Hug contents | Horizontal |
| Tab Bar | Fill container | Fixed | Horizontal |
| Nav Bar | Fill container | Fixed | Horizontal |

### Common Auto Layout Mistakes

```
❌ Wrong: Fixed width button
Button: 120px × 40px (fixed)

✓ Right: Hug contents button
Button: Hug contents × Hug contents

❌ Wrong: Nested frame without Auto Layout
Frame → Fixed × Fixed → Text (absolute)

✓ Right: Proper Auto Layout
Frame: Fill × Hug → Text: Hug × Hug
```

---

## Step 6: Variable & Token Cleanup

### Variable Collections to Create

#### 1. Primitives (Raw Values)

```
Colors
├── blue-50 through blue-950
├── green-50 through green-950
├── gray-50 through gray-950
├── red-50 through red-950
├── orange-50 through orange-950
├── purple-50 through purple-950

Typography
├── font-family: Inter
├── font-family: IBM Plex Sans
├── font-weight: 400/500/600/700
├── line-height: 1.0/1.2/1.4/1.5/1.6
└── letter-spacing: -0.5/0/0.5

Spacing
├── space-1: 4px
├── space-2: 8px
├── space-3: 12px
├── space-4: 16px
├── space-6: 24px
├── space-8: 32px
└── space-12: 48px

Radius
├── radius-s: 8px
├── radius-m: 12px
└── radius-full: 9999px
```

#### 2. Semantic (References Primitives)

```
Colors
├── color/brand: {blue-600}
├── color/positive: {green-600}
├── color/negative: {red-500}
├── color/attention: {orange-500}
├── color/ai: {purple-500}
├── surface/page: {gray-50}
├── surface/card: {white}
├── surface/raised: {white}
├── surface/floating: {white}
├── text/primary: {gray-900}
├── text/secondary: {gray-600}
├── text/tertiary: {gray-400}
└── text/inverse: {white}

Typography
├── typography/display-xl: Inter 34px 700
├── typography/display-l: Inter 28px 700
├── typography/display-m: Inter 22px 600
├── typography/title-l: Inter 18px 600
├── typography/title-m: Inter 16px 600
├── typography/body-l: Inter 16px 400
├── typography/body-m: Inter 14px 400
├── typography/body-s: Inter 12px 400
├── typography/label-l: Inter 12px 600
├── typography/label-m: Inter 11px 500
├── typography/financial-xl: IBM Plex Sans 36px 700
├── typography/financial-l: IBM Plex Sans 28px 700
└── typography/financial-m: IBM Plex Sans 22px 600

Elevation
├── elevation/flat: 0 1px 3px rgba(0,0,0,0.08)
├── elevation/raised: 0 4px 12px rgba(0,0,0,0.1)
└── elevation/floating: 0 8px 24px rgba(0,0,0,0.15)
```

### Variables to DELETE

1. Any variable not bound to a component
2. Legacy variables with old naming (`--color-blue` vs `blue-500`)
3. Duplicate variables pointing to same value
4. Component-specific variables that should be semantic

### Variable Naming

```
❌ Bad:  --button-primary-background-color
✓ Good:  --color/brand
✓ Good:  color/brand

❌ Bad:  --spacing-large
✓ Good:  space-4

❌ Bad:  --radius-button
✓ Good:  radius-s
```

---

## Step 7: Performance Optimization

### Component Performance Rules

| Rule | Why |
|------|-----|
| Max 3 nested Auto Layout frames | Rendering performance |
| Avoid heavy effects (blur > 100px) | Memory |
| Use vector icons, not raster | Sharp at all sizes |
| Flatten complex nested components | Faster selection |
| Avoid negative margins | Layout instability |

### Library Performance Checklist

- [ ] All components under 50 instances render fast
- [ ] Complex components (charts) use flattening where possible
- [ ] No components with 500+ nested objects
- [ ] Icon library uses optimized SVG paths
- [ ] No oversized images in components

---

## Step 8: Accessibility in Figma

### Verify Per Component

- [ ] All text has sufficient contrast (4.5:1 for body, 3:1 for large)
- [ ] Interactive components have accessible names
- [ ] Focus order documented for keyboard navigation
- [ ] Touch targets minimum 44×44pt
- [ ] Color not the only differentiator (use labels/icons)

### Accessibility Annotation

For complex components, add annotation frame:

```
┌─────────────────────────────┐
│ Accessibility Annotation     │
├─────────────────────────────┤
│ Role: button                │
│ Label: "Add goal"           │
│ State: default/pressed/     │
│       disabled              │
│ Keyboard: Enter to activate │
│ Touch: 48×48pt minimum      │
└─────────────────────────────┘
```

---

## Step 9: Figma Publishing Checklist

Before publishing to the team:

### Pre-Publish

- [ ] All 14 pages organized correctly
- [ ] All components have correct naming
- [ ] All components use Auto Layout
- [ ] All components use semantic variables
- [ ] No orphaned components (0 instances)
- [ ] No duplicate components
- [ ] All text uses typography roles
- [ ] All colors use semantic tokens
- [ ] Accessibility verified
- [ ] Component Checklist completed per component

### Publishing

1. **Version bump**: Update version in file name and description
   - Patch: `v1.0.1` (bug fixes)
   - Minor: `v1.1.0` (new components)
   - Major: `v2.0.0` (breaking changes)

2. **Release notes**: Document what changed since last version

3. **Announce**: Post to #design-system Slack with:
   - What's new
   - What changed
   - Migration notes
   - Who to contact for issues

### Post-Publish

- [ ] Verify all team members can access library
- [ ] Verify components appear in Asset panel
- [ ] Test in a new file
- [ ] Monitor for component requests/issues

---

## Step 10: Maintenance Setup

### Ongoing Governance

| Task | Frequency | Owner |
|------|-----------|-------|
| Audit unused variables | Monthly | Design Systems |
| Audit orphaned components | Monthly | Design Systems |
| Component requests triage | Weekly | Design Lead |
| Accessibility review | Per release | A11y Lead |
| Token updates | As needed | Design + Eng |
| Version bump + publish | Per sprint | Design Systems |

### Change Request Process

```
Team Member → Component Request → Design Lead Triage
    ├── Approved → Design → Engineering → Published
    ├── Merged with existing → No action needed
    └── Rejected → Document reason
```

---

## Quick Reference: Figma File Checklist

Use this checklist before any publish:

```
Foundations
├── [ ] Colors — 8 scales, semantic names
├── [ ] Typography — 16 roles, Inter + IBM Plex Sans
├── [ ] Spacing — 7 values (4,8,12,16,24,32,48)
├── [ ] Radius — 3 values (8,12,9999)
└── [ ] Elevation — 3 levels

Components (23)
├── [ ] Button (4 variants × 3 sizes × states)
├── [ ] Card (6 types × states)
├── [ ] Input (9 types × states)
├── [ ] Badge (4 variants × 3 sizes)
├── [ ] Toggle (2 sizes × states)
├── [ ] All others verified

Financial Components (11 families)
├── [ ] Portfolio KPI / Allocation / Performance
├── [ ] Net Worth KPI / Trend / Breakdown
├── [ ] Goal Progress / Forecast
├── [ ] Transaction Row / Group / Merchant
├── [ ] Cash Position / Flow / Income / Expenses
├── [ ] Investment Holding / Summary / Performance
├── [ ] Tax Summary / Savings / Due
├── [ ] Automation Status / Timeline
├── [ ] AI Recommendation / Insight / Action Card
└── [ ] Financial Health Score / Breakdown

Data Visualization
├── [ ] Line / Area / Bar / Stacked Bar
├── [ ] Donut / Sparkline
├── [ ] Progress Ring / Goal Progress
└── [ ] No deprecated chart types (Treemap, Waterfall, Gauge, Radar)

Accessibility
├── [ ] All text contrast verified
├── [ ] Touch targets 44×44pt minimum
├── [ ] Interactive elements named
└── [ ] Color not sole differentiator

Performance
├── [ ] No component > 50 nested objects
├── [ ] No oversized raster images
├── [ ] Auto Layout depth ≤ 3
└── [ ] No absolute positioning (unless Apple pattern)

Publishing
├── [ ] Version bumped
├── [ ] Release notes written
├── [ ] Team notified
└── [ ] Tested in new file
```

---

**End of Phase 2.13 — Figma Library Optimization Guide**