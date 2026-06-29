# Advizmo Design Foundations v1.0

**Phase 2: Implementation Foundations**
**Production-ready design system building blocks**
**iOS-first, Web compatible, WCAG AA compliant**

---

## Table of Contents

01. [Color Palette](#01-color-palette)
02. [Semantic Colors](#02-semantic-colors)
03. [Typography](#03-typography)
04. [Spacing](#04-spacing)
05. [Border Radius](#05-border-radius)
06. [Borders](#06-borders)
07. [Elevation](#07-elevation)
08. [Iconography](#08-iconography)
09. [Grid](#09-grid)
10. [Accessibility](#10-accessibility)
11. [Token Architecture](#11-token-architecture)
12. [Naming Rules](#12-naming-rules)
13. [Auto Layout Rules](#13-auto-layout-rules)
14. [Component Rules](#14-component-rules)
15. [Figma Rules](#15-figma-rules)

---

## 01. Color Palette

### Philosophy

Colors communicate meaning. Every color must have a documented purpose.

**Principles:**
- Blue is the only brand color
- Green represents financial success only
- Purple is reserved for AI features
- Orange represents attention/warning
- Red represents financial loss or destructive actions
- Yellow represents temporary information
- Teal represents connected accounts/syncing

### 11-Step Scale Construction

Each color scale follows the same construction pattern for visual balance:

| Step | Usage Pattern | Lightness |
|------|--------------|-----------|
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

### Blue (Primary Brand)

**Usage:** Primary actions, navigation, links, focus states, brand identity

| Token | Hex | Usage |
|-------|-----|-------|
| blue-50 | #EFF6FF | Lightest backgrounds |
| blue-100 | #DBEAFE | Hover backgrounds |
| blue-200 | #BFDBFE | Borders (light) |
| blue-300 | #93C5FD | Disabled states |
| blue-400 | #60A5FA | Placeholder, icons |
| blue-500 | #3B82F6 | **Base color** |
| blue-600 | #2563EB | Hover state |
| blue-700 | #1D4ED8 | Active/pressed |
| blue-800 | #1E40AF | Dark emphasis |
| blue-900 | #1E3A8A | Darkest text |
| blue-950 | #172554 | Near black |

### Green (Financial Growth)

**Usage:** Investment gains, positive returns, tax savings, automation success, available cash

**NEVER use for:** Brand identity, primary buttons, navigation

| Token | Hex | Usage |
|-------|-----|-------|
| green-50 | #ECFDF5 | Lightest backgrounds |
| green-100 | #D1FAE5 | Hover backgrounds |
| green-200 | #A7F3D0 | Borders (light) |
| green-300 | #6EE7B7 | Disabled states |
| green-400 | #34D399 | Placeholder, icons |
| green-500 | #10B981 | **Base color** |
| green-600 | #059669 | Hover state |
| green-700 | #047857 | Active/pressed |
| green-800 | #065F46 | Dark emphasis |
| green-900 | #064E3B | Darkest text |
| green-950 | #022C22 | Near black |

### Neutral Gray

**Usage:** Text, surfaces, borders, backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| gray-50 | #F9FAFB | Page background |
| gray-100 | #F3F4F6 | Card surface |
| gray-200 | #E5E7EB | Borders (light) |
| gray-300 | #D1D5DB | Disabled states |
| gray-400 | #9CA3AF | Placeholder text |
| gray-500 | #6B7280 | **Base gray** (secondary text) |
| gray-600 | #4B5563 | Hover state |
| gray-700 | #374151 | Active/pressed |
| gray-800 | #1F2937 | Dark emphasis |
| gray-900 | #111827 | **Primary text** |
| gray-950 | #030712 | Near black |

### Red (Financial Loss / Destructive)

**Usage:** Investment losses, errors, destructive actions, overdue items

| Token | Hex | Usage |
|-------|-----|-------|
| red-50 | #FEF2F2 | Error backgrounds |
| red-100 | #FEE2E2 | Hover backgrounds |
| red-200 | #FECACA | Borders (light) |
| red-300 | #FCA5A5 | Disabled states |
| red-400 | #F87171 | Placeholder, icons |
| red-500 | #EF4444 | **Base color** |
| red-600 | #DC2626 | Hover state |
| red-700 | #B91C1C | Active/pressed |
| red-800 | #991B1B | Dark emphasis |
| red-900 | #7F1D1D | Darkest text |
| red-950 | #450A0A | Near black |

### Orange (Attention / Warning)

**Usage:** Upcoming payments, expiring items, subscription renewals, attention needed

| Token | Hex | Usage |
|-------|-----|-------|
| orange-50 | #FFF7ED | Light backgrounds |
| orange-100 | #FFEDD5 | Hover backgrounds |
| orange-200 | #FED7AA | Borders (light) |
| orange-300 | #FDBA74 | Disabled states |
| orange-400 | #FB923C | Placeholder, icons |
| orange-500 | #F97316 | **Base color** |
| orange-600 | #EA580C | Hover state |
| orange-700 | #C2410C | Active/pressed |
| orange-800 | #9A3412 | Dark emphasis |
| orange-900 | #7C2D12 | Darkest text |
| orange-950 | #431407 | Near black |

### Yellow (Temporary / Caution)

**Usage:** Pending states, temporary information, in-progress items

| Token | Hex | Usage |
|-------|-----|-------|
| yellow-50 | #FEFCE8 | Light backgrounds |
| yellow-100 | #FEF9C3 | Hover backgrounds |
| yellow-200 | #FEF08A | Borders (light) |
| yellow-300 | #FDE047 | Disabled states |
| yellow-400 | #FACC15 | Placeholder, icons |
| yellow-500 | #EAB308 | **Base color** |
| yellow-600 | #CA8A04 | Hover state |
| yellow-700 | #A16207 | Active/pressed |
| yellow-800 | #854D0E | Dark emphasis |
| yellow-900 | #713F12 | Darkest text |
| yellow-950 | #422006 | Near black |

### Purple (AI Features)

**Usage:** AI features, recommendations, insights, predictions

**Reserved exclusively for AI-related UI.**

| Token | Hex | Usage |
|-------|-----|-------|
| purple-50 | #FAF5FF | Light backgrounds |
| purple-100 | #F3E8FF | Hover backgrounds |
| purple-200 | #E9D5FF | Borders (light) |
| purple-300 | #D8B4FE | Disabled states |
| purple-400 | #C084FC | Placeholder, icons |
| purple-500 | #A855F7 | **Base color** |
| purple-600 | #9333EA | Hover state |
| purple-700 | #7E22CE | Active/pressed |
| purple-800 | #6B21A8 | Dark emphasis |
| purple-900 | #581C87 | Darkest text |
| purple-950 | #3B0764 | Near black |

### Teal (Connected / Syncing)

**Usage:** Connected accounts, syncing states, external integrations

| Token | Hex | Usage |
|-------|-----|-------|
| teal-50 | #F0FDFA | Light backgrounds |
| teal-100 | #CCFBF1 | Hover backgrounds |
| teal-200 | #99F6E4 | Borders (light) |
| teal-300 | #5EEAD4 | Disabled states |
| teal-400 | #2DD4BF | Placeholder, icons |
| teal-500 | #14B8A6 | **Base color** |
| teal-600 | #0D9488 | Hover state |
| teal-700 | #0F766E | Active/pressed |
| teal-800 | #115E59 | Dark emphasis |
| teal-900 | #134E4A | Darkest text |
| teal-950 | #042F2E | Near black |

---

## 02. Semantic Colors

### Philosophy

Semantic colors communicate purpose, not appearance. Components use semantic tokens, never primitive colors directly.

**Structure:**
```
Primitive Token → Semantic Token → Component Token
blue-500 → action-primary → button-background
```

### Surface Colors

| Semantic Token | Primitive | Usage |
|----------------|-----------|-------|
| background | gray-50 | Page background |
| surface | white | Cards, elevated content |
| surface-elevated | white | Modals, sheets |
| surface-secondary | gray-100 | Secondary cards |
| surface-tertiary | gray-200 | Input backgrounds |
| border | gray-200 | Default borders |
| border-strong | gray-400 | Emphasis borders |
| divider | gray-200 | Separators |

### Action Colors

| Semantic Token | Primitive | Usage |
|----------------|-----------|-------|
| action-primary | blue-600 | Primary buttons |
| action-primary-hover | blue-700 | Primary button hover |
| action-primary-pressed | blue-800 | Primary button pressed |
| action-primary-disabled | gray-300 | Primary button disabled |
| action-secondary | gray-500 | Secondary buttons |
| action-secondary-hover | gray-600 | Secondary hover |
| action-secondary-pressed | gray-700 | Secondary pressed |
| action-secondary-disabled | gray-200 | Secondary disabled |
| action-destructive | red-600 | Delete, cancel |
| action-destructive-hover | red-700 | Destructive hover |
| action-destructive-pressed | red-800 | Destructive pressed |

### Feedback Colors

| Semantic Token | Primitive | Usage |
|----------------|-----------|-------|
| positive | green-600 | Gains, savings |
| positive-light | green-100 | Positive backgrounds |
| negative | red-600 | Losses, errors |
| negative-light | red-100 | Error backgrounds |
| warning | orange-500 | Attention needed |
| warning-light | orange-100 | Warning backgrounds |
| information | blue-500 | Tips, updates |
| information-light | blue-100 | Info backgrounds |
| success | green-600 | Completed actions |
| success-light | green-100 | Success backgrounds |
| error | red-600 | Failed actions |
| error-light | red-100 | Error backgrounds |

### Text Colors

| Semantic Token | Primitive | Usage |
|----------------|-----------|-------|
| text-primary | gray-900 | Headlines, body |
| text-secondary | gray-500 | Captions, hints |
| text-tertiary | gray-400 | Placeholder |
| text-disabled | gray-300 | Disabled text |
| text-inverse | white | Text on dark backgrounds |
| text-link | blue-600 | Links |

### Domain-Specific Colors

| Semantic Token | Primitive | Usage |
|----------------|-----------|-------|
| ai | purple-500 | AI features |
| ai-light | purple-100 | AI backgrounds |
| cash-available | green-600 | Available cash |
| safe-to-invest | green-600 | Investment readiness |
| investment-growth | green-600 | Portfolio gains |
| investment-loss | red-600 | Portfolio losses |
| tax-saving | green-600 | Tax benefits |
| pending-transfer | yellow-500 | Incoming/outgoing |
| upcoming-bills | orange-500 | Bill reminders |
| automation-complete | green-600 | Automation success |
| risk | orange-500 | Risk indicators |
| portfolio | blue-600 | Portfolio section |
| net-worth | gray-900 | Net worth display |

---

## 03. Typography

### Font Family

**Inter** — Primary and only font family.

Rationale: Excellent legibility, variable font support, comprehensive weight range, designed for screens.

### Text Style Specifications

#### Large Title

| Property | Value |
|----------|-------|
| Font Size | 34px |
| Font Weight | 700 Bold |
| Line Height | 41px (1.2×) |
| Letter Spacing | 0.37px |
| Paragraph Spacing | 24px |
| Usage | Screen headers (sparingly) |
| Dynamic Type | Scales up to AX5 |
| Figma Variable | `typography/large-title` |
| Engineering | `Font.system(.largeTitle, design: .default)` |

#### Title 1

| Property | Value |
|----------|-------|
| Font Size | 28px |
| Font Weight | 700 Bold |
| Line Height | 34px (1.2×) |
| Letter Spacing | 0.36px |
| Paragraph Spacing | 22px |
| Usage | Section headers |
| Dynamic Type | Scales up to AX4 |
| Figma Variable | `typography/title-1` |
| Engineering | `Font.system(.title, design: .default)` |

#### Title 2

| Property | Value |
|----------|-------|
| Font Size | 22px |
| Font Weight | 700 Bold |
| Line Height | 28px (1.27×) |
| Letter Spacing | 0.35px |
| Paragraph Spacing | 22px |
| Usage | Subsection headers |
| Dynamic Type | Scales up to AX4 |
| Figma Variable | `typography/title-2` |
| Engineering | `Font.system(.title2, design: .default)` |

#### Title 3

| Property | Value |
|----------|-------|
| Font Size | 20px |
| Font Weight | 600 Semibold |
| Line Height | 25px (1.25×) |
| Letter Spacing | 0.38px |
| Paragraph Spacing | 20px |
| Usage | Card headers, list titles |
| Dynamic Type | Scales up to AX3 |
| Figma Variable | `typography/title-3` |
| Engineering | `Font.system(.title3, design: .default)` |

#### Headline

| Property | Value |
|----------|-------|
| Font Size | 17px |
| Font Weight | 600 Semibold |
| Line Height | 22px (1.29×) |
| Letter Spacing | -0.41px |
| Paragraph Spacing | 20px |
| Usage | Emphasized body text |
| Dynamic Type | Scales up to AX3 |
| Figma Variable | `typography/headline` |
| Engineering | `Font.system(.headline, design: .default)` |

#### Body

| Property | Value |
|----------|-------|
| Font Size | 17px |
| Font Weight | 400 Regular |
| Line Height | 22px (1.29×) |
| Letter Spacing | -0.41px |
| Paragraph Spacing | 20px |
| Usage | Primary content |
| Dynamic Type | Scales up to AX2 |
| Figma Variable | `typography/body` |
| Engineering | `Font.system(.body, design: .default)` |

#### Callout

| Property | Value |
|----------|-------|
| Font Size | 16px |
| Font Weight | 400 Regular |
| Line Height | 21px (1.31×) |
| Letter Spacing | -0.32px |
| Paragraph Spacing | 18px |
| Usage | Secondary content |
| Dynamic Type | Scales up to AX2 |
| Figma Variable | `typography/callout` |
| Engineering | `Font.system(.callout, design: .default)` |

#### Subheadline

| Property | Value |
|----------|-------|
| Font Size | 15px |
| Font Weight | 400 Regular |
| Line Height | 20px (1.33×) |
| Letter Spacing | -0.24px |
| Paragraph Spacing | 18px |
| Usage | Metadata, timestamps |
| Dynamic Type | Scales up to AX1 |
| Figma Variable | `typography/subheadline` |
| Engineering | `Font.system(.subheadline, design: .default)` |

#### Footnote

| Property | Value |
|----------|-------|
| Font Size | 13px |
| Font Weight | 400 Regular |
| Line Height | 18px (1.38×) |
| Letter Spacing | -0.08px |
| Paragraph Spacing | 16px |
| Usage | Legal text, footnotes |
| Dynamic Type | Scales up to AX1 |
| Figma Variable | `typography/footnote` |
| Engineering | `Font.system(.footnote, design: .default)` |

#### Caption 1

| Property | Value |
|----------|-------|
| Font Size | 12px |
| Font Weight | 400 Regular |
| Line Height | 16px (1.33×) |
| Letter Spacing | 0px |
| Paragraph Spacing | 14px |
| Usage | Badges, labels |
| Dynamic Type | Scales up to AX1 |
| Figma Variable | `typography/caption-1` |
| Engineering | `Font.system(.caption, design: .default)` |

#### Caption 2

| Property | Value |
|----------|-------|
| Font Size | 11px |
| Font Weight | 400 Regular |
| Line Height | 13px (1.18×) |
| Letter Spacing | 0.07px |
| Paragraph Spacing | 12px |
| Usage | Fine print |
| Dynamic Type | Fixed (AX1 max) |
| Figma Variable | `typography/caption-2` |
| Engineering | `Font.system(.caption2, design: .default)` |

### Typography Rules

1. **One font family only:** Inter
2. **Three weights only:** 400 Regular, 600 Semibold, 700 Bold
3. **Never use:** Italic, 300 Light, 800-900 Extra Bold
4. **Alignment:** Left-align all text
5. **Center only:** Buttons, badges, empty states
6. **Line length:** Max 80 characters
7. **Line height:** 1.2× to 1.4× font size

---

## 04. Spacing

### Philosophy

Minimum viable scale. Every value must justify its existence. No arbitrary spacing.

### Spacing Scale

| Token | Value | Purpose | Usage |
|-------|-------|---------|-------|
| `space-1` | 4px | Micro gaps | Icon padding, tight arrangements |
| `space-2` | 8px | Default | Component internal, element gaps |
| `space-3` | 12px | Comfortable | Between related elements |
| `space-4` | 16px | Standard | Card padding, section padding |
| `space-6` | 24px | Section | Between sections, card gaps |
| `space-8` | 32px | Large | Major section separation |
| `space-12` | 48px | XL | Screen margins (tablet), hero spacing |
| `space-16` | 64px | 2XL | Large screen margins |
| `space-24` | 96px | 3XL | Transition spacing only |

### Spacing Usage Rules

| Context | Spacing | Token |
|---------|---------|-------|
| Icon-to-text | 8px | space-2 |
| Button internal padding | 16px horizontal, 12px vertical | space-4, space-3 |
| Card padding | 16px all sides | space-4 |
| Card gap | 24px | space-6 |
| Section gap | 24px | space-6 |
| Screen margin (mobile) | 16px | space-4 |
| Screen margin (tablet) | 24px | space-6 |
| Screen margin (desktop) | 48px | space-12 |
| List item padding | 16px vertical, 0 horizontal | space-4 |
| Input padding | 12px horizontal, 10px vertical | space-3 |
| Modal padding | 24px | space-6 |

### Rules

1. **4pt grid only.** No 5px, 10px, 18px, 22px.
2. **If between values, round down** to the smaller spacing.
3. **When in doubt, use more space.**
4. **Never use space-24 (96px) for anything except transitions.**

---

## 05. Border Radius

### Philosophy

Four radius values. Four. Nothing else. Every radius has documented usage.

### Radius Scale

| Token | Value | Allowed Usage |
|-------|-------|---------------|
| `radius-none` | 0px | Text, dividers, full-bleed elements |
| `radius-small` | 8px | Buttons, inputs, badges, tags |
| `radius-medium` | 12px | Cards, sheets, modals, navigation |
| `radius-full` | 9999px | Avatars, pills, circular buttons |

### Radius Usage Rules

| Element | Radius | Token |
|---------|--------|-------|
| Primary button | 8px | radius-small |
| Secondary button | 8px | radius-small |
| Destructive button | 8px | radius-small |
| Ghost button | 8px | radius-small |
| Input field | 8px | radius-small |
| Text field | 8px | radius-small |
| Search field | 8px | radius-small |
| Badge | 8px | radius-small |
| Tag | 8px | radius-small |
| Card | 12px | radius-medium |
| Modal | 12px | radius-medium |
| Sheet (half) | 12px | radius-medium |
| Sheet (full) | 0px | radius-none |
| Navigation bar | 0px | radius-none |
| List item | 0px | radius-none |
| Divider | 0px | radius-none |
| Avatar | 9999px | radius-full |
| Pill button | 9999px | radius-full |
| Chip | 9999px | radius-full |
| Circular icon button | 9999px | radius-full |

### Rules

1. **Never use:** 4px, 16px, 20px, 24px, 40px
2. **Buttons always:** radius-small (8px)
3. **Cards always:** radius-medium (12px)
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
| `border-disabled` | 1px | Disabled state borders |

### Border Color

| State | Color | Token |
|-------|-------|-------|
| Default | gray-200 | border |
| Strong | gray-400 | border-strong |
| Focus | blue-500 | focus-ring |
| Disabled | gray-200 | border-disabled |

### Border Usage Rules

| Context | Width | Token |
|---------|-------|-------|
| Card border | 1px | border-default |
| Input border | 1px | border-default |
| Divider | 1px | border-default |
| Section break | 2px | border-strong |
| Focus ring | 2px (offset 2px) | border-focus |
| Disabled element | 1px | border-disabled |

### Rules

1. **Prefer no border.** Use space first.
2. **If border needed, use 1px default.**
3. **2px only for emphasis or focus.**
4. **Borders should not compete with content.**

---

## 07. Elevation

### Philosophy

Two elevation levels. Prefer space over shadow. Use shadow only when space isn't sufficient.

### Elevation Scale

| Token | Shadow | Usage |
|-------|--------|-------|
| `elevation-none` | none | Flat surfaces, default cards |
| `elevation-raised` | 0 1px 3px rgba(0,0,0,0.08) | Elevated cards, dropdowns |
| `elevation-floating` | 0 4px 12px rgba(0,0,0,0.12) | Modals, sheets, popovers |

### Shadow Specifications

**Raised (elevation-raised):**
```
x: 0
y: 1
blur: 3
spread: 0
color: rgba(0,0,0,0.08)
```

**Floating (elevation-floating):**
```
x: 0
y: 4
blur: 12
spread: 0
color: rgba(0,0,0,0.12)
```

### Elevation Usage Rules

| Element | Elevation | Token |
|---------|-----------|-------|
| Page background | none | elevation-none |
| Card (default) | none | elevation-none |
| Card (elevated) | raised | elevation-raised |
| Dropdown | raised | elevation-raised |
| Popover | floating | elevation-floating |
| Modal | floating | elevation-floating |
| Sheet | floating | elevation-floating |
| Toast | floating | elevation-floating |
| FAB | floating | elevation-floating |

### Rules

1. **Never use multiple shadows on one element.**
2. **Prefer elevation-none + space over raised.**
3. **Floating only for elements that "float" above content.**
4. **Never use black shadows — use gray with opacity.**

---

## 08. Iconography

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
- 24px icon pairs with 17px body text naturally
- 20px icon pairs with 15px subhead text naturally

### Icon Colors

| Context | Color |
|---------|-------|
| Primary action | action-primary |
| Secondary | text-secondary |
| Disabled | text-disabled |
| On colored background | white |

### Rules

1. **Outline only.** Never mix with filled.
2. **2px stroke only.** No 1.5px or 2.5px.
3. **Round corners only.** No sharp corners.
4. **SF Symbols preferred.** Use custom only when SF Symbols lacks an icon.
5. **Test at 16px and 24px.** If unreadable, redesign.
6. **Never use icons alone.** Always pair with text or clear context.

---

## 09. Grid

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
| Desktop (1024-1440px) | 48px | 12 | 24px | 1200px |
| Large (>1440px) | 64px | 12 | 32px | 1400px |

### Layout Structure

```
Screen
├── Margin (16/24/48px)
├── Column Grid
│   ├── Gutter (16/20/24px)
│   ├── Content
│   └── Gutter
├── Margin
```

### Content Widths

| Element | Width |
|---------|-------|
| Card (mobile) | 100% - 32px (margins) |
| Card (tablet) | 343px fixed |
| Card (desktop) | 400px fixed |
| Input | 100% - margins |
| Button | Auto (min 44px touch target) |
| Avatar | 40px (small), 56px (medium), 80px (large) |

### Rules

1. **Always respect safe areas** on iOS.
2. **Cards never exceed** content max-width.
3. **Touch targets minimum** 44×44pt.
4. **Thumb zone considerations** for mobile.

---

## 10. Accessibility

### Contrast Requirements

| Element | Minimum | Target |
|---------|---------|--------|
| Normal text (17px-) | 4.5:1 | 7:1 |
| Large text (24px+) | 3:1 | 4.5:1 |
| UI components | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | 4.5:1 |

### Touch Targets

| Target | Size | Usage |
|--------|------|-------|
| Minimum | 44×44pt | All interactive elements |
| Recommended | 48×48pt | Primary actions |
| Spacing between | 8px minimum | Prevents mis-taps |

### Dynamic Type

| Text Style | Scales To |
|------------|-----------|
| Large Title | AX5 |
| Title 1 | AX4 |
| Title 2 | AX4 |
| Title 3 | AX3 |
| Headline | AX3 |
| Body | AX2 |
| Callout | AX2 |
| Subheadline | AX1 |
| Footnote | AX1 |
| Caption 1 | AX1 |
| Caption 2 | Fixed (AX1 max) |

### Motion

| Setting | Behavior |
|---------|----------|
| prefers-reduced-motion | Disable all non-essential animation |
| prefers-reduced-transparency | Disable backdrop blur |
| prefers-contrast | Increase contrast ratios |

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

## 11. Token Architecture

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

Raw values. No semantic meaning.

```
blue-500: #3B82F6
green-600: #059669
gray-900: #111827
space-4: 16
radius-small: 8
shadow-raised: 0 1px 3px rgba(0,0,0,0.08)
```

### Tier 2: Semantic Tokens

Purpose-driven aliases.

```
action-primary: blue-500
positive: green-600
text-primary: gray-900
card-padding: space-4
button-radius: radius-small
card-shadow: shadow-raised
```

### Tier 3: Component Tokens

Element-specific overrides.

```
button-background: action-primary
button-padding-x: space-4
button-padding-y: space-3
button-radius: radius-small
button-font: typography/body
card-background: surface
card-padding: card-padding
card-radius: radius-medium
```

### Token Naming

```
category/variant/state
```

Examples:
- `color/text/primary`
- `spacing/card/padding`
- `radius/button/default`
- `shadow/card/raised`

### Rules

1. **Components use semantic tokens.** Never primitives.
2. **Semantic tokens use primitives.** Never hardcoded values.
3. **Token names describe purpose.** Not appearance.
4. **One responsibility per token.** No compound tokens.

---

## 12. Naming Rules

### Philosophy

Predictable. Developer-friendly. Consistent. No abbreviations.

### Color Naming

```
Color/Category/Modifier

Examples:
- Color/Blue/50
- Color/Gray/900
- Color/Action/Primary
- Color/Text/Secondary
- Color/Surface/Background
```

### Spacing Naming

```
Spacing/Number

Examples:
- Spacing/1 (4px)
- Spacing/4 (16px)
- Spacing/6 (24px)
```

### Typography Naming

```
Typography/Scale/Weight (optional)

Examples:
- Typography/Display
- Typography/Heading/1
- Typography/Body
- Typography/Caption
```

### Radius Naming

```
Radius/Size

Examples:
- Radius/None
- Radius/Small
- Radius/Medium
- Radius/Full
```

### Border Naming

```
Border/Type

Examples:
- Border/Default
- Border/Strong
- Border/Focus
```

### Elevation Naming

```
Elevation/Level

Examples:
- Elevation/None
- Elevation/Raised
- Elevation/Floating
```

### Component Naming

```
Component/Variant/State

Examples:
- Button/Primary
- Button/Secondary
- Card/Default
- Card/Elevated
- Input/Text
- Input/Search
```

### Property Naming

```
propertyName: value

Examples:
- backgroundColor: surface
- borderRadius: radiusSmall
- paddingHorizontal: spacing4
- fontSize: 16
- fontWeight: 600
```

### Rules

1. **Use full words.** No "prim," "sec," "bg."
2. **Use lowercase with hyphens.** `text-primary` not `textPrimary`.
3. **Be consistent.** Same pattern everywhere.
4. **Be predictable.** Name matches function.

---

## 13. Auto Layout Rules

### Philosophy

Responsive. Flexible. No fixed dimensions. Auto Layout is mandatory.

### Core Rules

1. **No fixed widths** (except explicit max/min)
2. **No fixed heights** (except explicit max/min)
3. **All layers use Auto Layout**
4. **No detached layers**
5. **Frames update automatically**

### Layout Hierarchy

```
Parent Container
├── Auto Layout
│   ├── Child Element 1
│   ├── Child Element 2
│   └── Child Element 3
```

### Sizing Rules

| Element | Width | Height |
|---------|-------|--------|
| Text | Hug contents | Hug contents |
| Button | Hug contents (min 44pt) | Hug contents |
| Icon | Fixed | Fixed |
| Card | Fill container | Hug contents |
| Input | Fill container | Fixed |
| Divider | Fill container | Fixed |

### Spacing Rules

| Pattern | Spacing |
|---------|---------|
| Stack (vertical) | space-2 to space-4 |
| Stack (horizontal) | space-2 to space-3 |
| Card internal | space-4 |
| Section gap | space-6 |

### Boolean Properties

| Property | Use |
|----------|-----|
| visible | Show/hide elements |
| enabled | Enable/disable interactions |
| isLoading | Show loading state |

### Instance Swap

| Use | When |
|-----|------|
| variant | Change appearance (Primary → Secondary) |
| text | Change content |
| icon | Change iconography |

### Text Properties

| Property | Setting |
|----------|---------|
| Resizing | Auto (shrink/grow) |
| Line Limit | 1 (buttons), none (body) |
| Alignment | Left (default), Center (buttons) |

### Rules

1. **Hug contents by default.**
2. **Fill container for card/content areas.**
3. **Use stack for groups.**
4. **Use spacing constants, not magic numbers.**
5. **Test at multiple sizes.**

---

## 14. Component Rules

### Philosophy

Minimum components. Maximum reuse. Every component must justify its existence.

### Component Categories

| Category | Count | Examples |
|----------|-------|----------|
| Actions | 1 | Button |
| Inputs | 1 | Input |
| Containers | 1 | Card |
| Navigation | 2 | NavigationBar, TabBar |
| Feedback | 3 | Alert, Badge, Toast |
| Display | 2 | Avatar, Divider |
| Data | 2 | ListItem, Progress |
| Overlay | 2 | Sheet, Dialog |

**Total: 14 component types** (not counting variants)

### Button

| Property | Options |
|----------|---------|
| variant | primary, secondary, destructive, ghost |
| size | small (32pt), medium (44pt), large (52pt) |
| icon | none, leading, trailing |
| state | default, hover, pressed, disabled, loading |

### Input

| Property | Options |
|----------|---------|
| type | text, search, password, numeric |
| state | default, focused, error, disabled |
| icon | none, leading, trailing |
| label | none, floating, stacked |

### Card

| Property | Options |
|----------|---------|
| variant | default, elevated |
| padding | none, compact (12px), standard (16px) |

### Alert

| Property | Options |
|----------|---------|
| status | information, success, warning, error |
| icon | none, auto |

### Badge

| Property | Options |
|----------|---------|
| variant | status, count, label |
| size | small (20px), medium (24px) |

### Rules for All Components

1. **Padding:** Use spacing constants (space-2, space-4, etc.)
2. **Colors:** Use semantic tokens only
3. **Typography:** Use typography tokens
4. **Radius:** Follow radius rules
5. **States:** Define all states (default, hover, pressed, disabled, loading)
6. **Accessibility:** All interactive elements have labels
7. **Touch target:** Minimum 44×44pt
8. **Name:** Component/Variant/State format

### States for All Interactive Components

| State | Visual Change |
|-------|--------------|
| Default | Resting state |
| Hover | Slight color shift (desktop) |
| Pressed | Darker/different state |
| Disabled | Reduced opacity, no interaction |
| Loading | Activity indicator, no interaction |
| Error | Error color, error message |
| Focus | Focus ring visible |

### Engineering Rules

1. **One component file** per component
2. **Props map to tokens** — no hardcoded values
3. **Variants as props** — not separate components
4. **Composition over inheritance**
5. **Document all props**

---

## 15. Figma Rules

### File Structure

```
Advizmo Design System
├── Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Radius
│   ├── Borders
│   ├── Elevation
│   └── Icons
├── Components
│   ├── Button
│   ├── Input
│   ├── Card
│   └── ...
└── Templates
    └── ...
```

### Style Naming

```
Category/Name/Variant

Examples:
- Color/Action/Primary
- Color/Text/Secondary
- Typography/Heading/1
- Spacing/4
- Radius/Medium
- Elevation/Raised
```

### Variable Naming

```
Variable/Category/Name

Examples:
- Color/Background/Primary
- Color/Surface/Default
- Typography/Body/Regular
- Spacing/Component/Medium
```

### Component Structure

```
Component
├── Properties (variant, size, state)
├── States (default, hover, pressed, disabled)
├── Auto Layout settings
└── Accessibility labels
```

### Frame Settings

| Property | Value |
|----------|-------|
| Auto Layout | Enabled |
| Resizing | Hug contents / Fill container |
| Grid | 4pt |
| Spacing | Spacing tokens |

### Documentation

| Element | Required Info |
|---------|--------------|
| Component | Name, description, variants, states |
| Token | Name, value, usage |
| Style | Name, properties, usage |

### Rules

1. **Use Variables for all styles.** Never hardcode.
2. **Components use Variables.** Not direct values.
3. **Auto Layout for all frames.** No static positioning.
4. **Consistent naming.** Follow naming rules.
5. **Document everything.** Comments in Figma.
6. **Test responsive.** Test at multiple viewport sizes.

---

## Token Master List

### Colors (Primitives)

```
Color/Blue/50: #EFF6FF
Color/Blue/100: #DBEAFE
Color/Blue/200: #BFDBFE
Color/Blue/300: #93C5FD
Color/Blue/400: #60A5FA
Color/Blue/500: #3B82F6
Color/Blue/600: #2563EB
Color/Blue/700: #1D4ED8
Color/Blue/800: #1E40AF
Color/Blue/900: #1E3A8A
Color/Blue/950: #172554

Color/Green/50: #ECFDF5
Color/Green/100: #D1FAE5
Color/Green/200: #A7F3D0
Color/Green/300: #6EE7B7
Color/Green/400: #34D399
Color/Green/500: #10B981
Color/Green/600: #059669
Color/Green/700: #047857
Color/Green/800: #065F46
Color/Green/900: #064E3B
Color/Green/950: #022C22

Color/Gray/50: #F9FAFB
Color/Gray/100: #F3F4F6
Color/Gray/200: #E5E7EB
Color/Gray/300: #D1D5DB
Color/Gray/400: #9CA3AF
Color/Gray/500: #6B7280
Color/Gray/600: #4B5563
Color/Gray/700: #374151
Color/Gray/800: #1F2937
Color/Gray/900: #111827
Color/Gray/950: #030712

Color/Red/50: #FEF2F2
Color/Red/100: #FEE2E2
Color/Red/200: #FECACA
Color/Red/300: #FCA5A5
Color/Red/400: #F87171
Color/Red/500: #EF4444
Color/Red/600: #DC2626
Color/Red/700: #B91C1C
Color/Red/800: #991B1C
Color/Red/900: #7F1D1D
Color/Red/950: #450A0A

Color/Orange/50: #FFF7ED
Color/Orange/100: #FFEDD5
Color/Orange/200: #FED7AA
Color/Orange/300: #FDBA74
Color/Orange/400: #FB923C
Color/Orange/500: #F97316
Color/Orange/600: #EA580C
Color/Orange/700: #C2410C
Color/Orange/800: #9A3412
Color/Orange/900: #7C2D12
Color/Orange/950: #431407

Color/Yellow/50: #FEFCE8
Color/Yellow/100: #FEF9C3
Color/Yellow/200: #FEF08A
Color/Yellow/300: #FDE047
Color/Yellow/400: #FACC15
Color/Yellow/500: #EAB308
Color/Yellow/600: #CA8A04
Color/Yellow/700: #A16207
Color/Yellow/800: #854D0E
Color/Yellow/900: #713F12
Color/Yellow/950: #422006

Color/Purple/50: #FAF5FF
Color/Purple/100: #F3E8FF
Color/Purple/200: #E9D5FF
Color/Purple/300: #D8B4FE
Color/Purple/400: #C084FC
Color/Purple/500: #A855F7
Color/Purple/600: #9333EA
Color/Purple/700: #7E22CE
Color/Purple/800: #6B21A8
Color/Purple/900: #581C87
Color/Purple/950: #3B0764

Color/Teal/50: #F0FDFA
Color/Teal/100: #CCFBF1
Color/Teal/200: #99F6E4
Color/Teal/300: #5EEAD4
Color/Teal/400: #2DD4BF
Color/Teal/500: #14B8A6
Color/Teal/600: #0D9488
Color/Teal/700: #0F766E
Color/Teal/800: #115E59
Color/Teal/900: #134E4A
Color/Teal/950: #042F2E

Color/White: #FFFFFF
Color/Black: #000000
```

### Semantic Colors

```
Color/Background: Color/Gray/50
Color/Surface: Color/White
Color/Surface-Elevated: Color/White
Color/Surface-Secondary: Color/Gray/100
Color/Surface-Tertiary: Color/Gray/200
Color/Border: Color/Gray/200
Color/Border-Strong: Color/Gray/400
Color/Divider: Color/Gray/200

Color/Action-Primary: Color/Blue/600
Color/Action-Primary-Hover: Color/Blue/700
Color/Action-Primary-Pressed: Color/Blue/800
Color/Action-Secondary: Color/Gray/500
Color/Action-Destructive: Color/Red/600

Color/Positive: Color/Green/600
Color/Negative: Color/Red/600
Color/Warning: Color/Orange/500
Color/Information: Color/Blue/500
Color/Success: Color/Green/600
Color/Error: Color/Red/600

Color/Text-Primary: Color/Gray/900
Color/Text-Secondary: Color/Gray/500
Color/Text-Tertiary: Color/Gray/400
Color/Text-Disabled: Color/Gray/300
Color/Text-Inverse: Color/White
Color/Text-Link: Color/Blue/600

Color/AI: Color/Purple/500
Color/Cash-Available: Color/Green/600
Color/Investment-Growth: Color/Green/600
Color/Investment-Loss: Color/Red/600
Color/Tax-Saving: Color/Green/600
Color/Pending-Transfer: Color/Yellow/500
Color/Upcoming-Bills: Color/Orange/500
```

### Spacing

```
Spacing/1: 4px
Spacing/2: 8px
Spacing/3: 12px
Spacing/4: 16px
Spacing/6: 24px
Spacing/8: 32px
Spacing/12: 48px
Spacing/16: 64px
Spacing/24: 96px
```

### Radius

```
Radius/None: 0px
Radius/Small: 8px
Radius/Medium: 12px
Radius/Full: 9999px
```

### Elevation

```
Elevation/None: none
Elevation/Raised: 0 1px 3px rgba(0,0,0,0.08)
Elevation/Floating: 0 4px 12px rgba(0,0,0,0.12)
```

---

**End of Phase 2: Design Foundations**

*Next: Phase 3 will create the component library using these foundations.*
