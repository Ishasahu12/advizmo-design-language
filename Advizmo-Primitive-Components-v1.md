# Advizmo Primitive Component Library

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1**

---

## Table of Contents

1. [Overview](#overview)
2. [Organization](#organization)
3. [01 Typography](#01-typography)
4. [02 Icons](#02-icons)
5. [03 Labels](#03-labels)
6. [04 Badges](#04-badges)
7. [05 Chips](#05-chips)
8. [06 Tags](#06-tags)
9. [07 Indicators](#07-indicators)
10. [08 Avatar](#08-avatar)
11. [09 Dividers](#09-dividers)
12. [10 Progress](#10-progress)
13. [11 Loaders](#11-loaders)
14. [12 Status](#12-status)
15. [13 Money](#13-money)
16. [14 Percentage](#14-percentage)
17. [15 Trend](#15-trend)
18. [16 Portfolio](#16-portfolio)
19. [17 AI](#17-ai)
20. [18 Utility](#18-utility)
21. [19 Chart Primitives](#19-chart-primitives)
22. [20 Empty States](#20-empty-states)
23. [21 Feedback](#21-feedback)
24. [Component Properties Reference](#component-properties-reference)
25. [Auto Layout Rules](#auto-layout-rules)
26. [Validation Checklist](#validation-checklist)

---

## Overview

The Primitive Component Library is the **smallest reusable layer** of the entire Advizmo Design Language.

Every future component will be assembled from these primitives.

### Every Primitive Must:

- Use Auto Layout
- Use Variables
- Use Tokens
- Support Light & Dark mode
- Support Dynamic Type
- Support Accessibility
- Use Component Properties
- Use Variants
- Use Instance Swap
- Be engineering ready

---

## Organization

| Section | Components |
|---------|------------|
| 01 Typography | Text, Heading, Subheading, Body, Caption, Overline, Inline Link, Number, Percentage, Currency, Monospace Number |
| 02 Icons | Regular, Filled, Circle, Square, Container, Leading, Trailing, Interactive, Decorative |
| 03 Labels | Label, Field Label, Section Label, Group Label, Inline Label, Required Label, Optional Label, Status Label, Financial Label |
| 04 Badges | Neutral, Primary, Success, Warning, Error, Information, AI, Automation, Verified, New, Beta |
| 05 Chips | Filter, Input, Selection, Suggestion, AI, Investment, Category |
| 06 Tags | ETF, Stock, Fund, Goal, Investment, Income, Expense, Transfer, Bill, Tax, Portfolio, Cash, Recurring, AI |
| 07 Indicators | Status Dot, Connection Dot, Market Dot, Sync Dot, Notification Dot, Unread Dot, Portfolio Indicator, Risk Indicator, Trend Indicator, Growth Indicator, Loss Indicator, Activity Indicator |
| 08 Avatar | Avatar, Avatar Group, Institution Avatar, Bank Avatar, User Avatar, AI Avatar |
| 09 Dividers | Horizontal, Vertical, Inset, Full Width, Label Divider, Gradient Divider |
| 10 Progress | Linear, Circular, Ring, Goal Progress, Portfolio Progress, Investment Progress, Loading Progress |
| 11 Loaders | Spinner, Skeleton Text, Skeleton Card, Skeleton Avatar, Skeleton List, Skeleton Chart, Skeleton Portfolio, Skeleton Transaction |
| 12 Status | Success, Warning, Error, Information, Offline, Online, Syncing, Pending, Verified, Unverified, Locked, Unlocked |
| 13 Money | Money Amount, Currency Symbol, Currency Code, Amount Group, Decimal Group, Negative Amount, Positive Amount, Pending Amount, Estimated Amount, Rounded Amount, Compact Amount, Large Amount, Small Amount, Balance Display, Cash Display, Net Worth Display, Investment Display, Return Display, Tax Saving Display |
| 14 Percentage | Percentage, Percentage Change, Growth %, Loss %, Interest %, APR, APY, Tax % |
| 15 Trend | Trend Arrow, Trend Label, Trend Group |
| 16 Portfolio | Portfolio Indicator, Allocation Dot, Holding Badge, Risk Level, Diversification Badge, Asset Badge, Institution Badge, Broker Badge, Goal Badge |
| 17 AI | AI Badge, AI Indicator, AI Confidence, AI Suggestion, AI Recommendation, AI Thinking, Automation Enabled, Automation Disabled |
| 18 Utility | Chevron, Disclosure, Handle, Drag Handle, Grip, Separator, Bullet, Counter, Notification Count, Hotkey Label |
| 19 Chart Primitives | Chart Dot, Legend, Axis Label, Grid Line, Goal Line, Reference Line, Tooltip, Selection Dot, Chart Marker, Range Handle |
| 20 Empty States | Icon, Illustration, Message, Action, Suggestion |
| 21 Feedback | Inline Message, Inline Error, Inline Success, Inline Warning, Helper Text, Validation Message |

---

## 01 Typography

### Text Primitive

The base text component for all text content.

**Purpose:** Display text content with consistent styling
**Usage:** Any text that is not a heading, number, or currency

#### Variants

| Variant | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Display XL | Inter | 40px | 700 | 44px | -0.03em |
| Display L | Inter | 32px | 700 | 38px | -0.02em |
| Display M | Inter | 28px | 600 | 34px | -0.02em |
| Financial XL | IBM Plex Sans | 48px | 600 | 53px | -0.03em |
| Financial L | IBM Plex Sans | 36px | 600 | 40px | -0.02em |
| Financial M | IBM Plex Sans | 28px | 600 | 34px | -0.02em |
| Financial S | IBM Plex Sans | 20px | 600 | 26px | -0.01em |
| Title L | Inter | 24px | 600 | 31px | -0.02em |
| Title M | Inter | 20px | 600 | 26px | -0.01em |
| Body L | Inter | 17px | 400 | 26px | 0 |
| Body M | Inter | 16px | 400 | 24px | 0 |
| Body S | Inter | 14px | 400 | 21px | 0 |
| Label L | Inter | 16px | 500 | 22px | 0 |
| Label M | Inter | 14px | 500 | 20px | 0 |
| Caption | Inter | 12px | 400 | 17px | 0 |
| Overline | Inter | 11px | 600 | 15px | 0.05em |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `body` | Typography style |
| `color` | Color | `color/text/primary` | Text color |
| `alignment` | Alignment | `left` | Text alignment |
| `truncate` | Boolean | `false` | Truncate with ellipsis |
| `maxLines` | Number | — | Maximum lines |
| `adjustsFontSizeToFit` | Boolean | `false` | Dynamic Type scaling |
| `text` | Text | — | Text content |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Hug Content
Padding: 0
Gap: 0
```

#### Variables Used

| Variable | Token |
|----------|-------|
| `color/text/primary` | `color/text/primary` |
| `color/text/secondary` | `color/text/secondary` |
| `color/text/tertiary` | `color/text/tertiary` |
| `color/text/disabled` | `color/text/disabled` |
| `color/text/on-primary` | `color/text/on-primary` |
| `color/text/link` | `color/action/primary` |

#### Accessibility

- `role="text"` (implicit)
- Dynamic Type supported via `adjustsFontSizeToFit`
- Minimum font size: 11px (iOS system minimum)
- Contrast ratio: 4.5:1 minimum for body text

#### Engineering Notes

- iOS: `UILabel` with `numberOfLines` for truncation
- Web: `<span>` with `text-overflow: ellipsis`
- Android: `TextView` with `ellipsize="end"`

#### Do / Don't

| Do | Don't |
|----|-------|
| Use semantic variants | Hardcode font sizes |
| Support Dynamic Type | Use fixed pixel sizes |
| Respect color tokens | Use arbitrary colors |

---

### Title Primitive

**Purpose:** Display section titles
**Usage:** Section titles, screen titles

#### Variants

| Variant | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Title L | 24px | 600 | 31px |
| Title M | 20px | 600 | 26px |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `level` | Title L \| Title M | `Title M` | Title level |
| `color` | Color | `color/text/primary` | Text color |
| `alignment` | Alignment | `left` | Text alignment |
| `text` | Text | — | Title text |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Fill Container
Counter Axis: Hug Content
Padding: 0
Gap: 0
```

#### Accessibility

- H1: `role="header"` or `<h1>`
- H2: `role="header"` or `<h2>`
- H3: `role="header"` or `<h3>`
- Announce heading level to screen readers

---

### Subheading Primitive

**Purpose:** Display labels and secondary text
**Usage:** Field labels, section labels, helper text

#### Variants

| Variant | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Label L | 16px | 500 | 22px |
| Label M | 14px | 500 | 20px |

---

### Body Primitive

**Purpose:** Display paragraph text
**Usage:** Descriptions, content blocks

#### Variants

| Variant | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Body L | 17px | 400 | 26px |
| Body M | 16px | 400 | 24px |
| Body S | 14px | 400 | 21px |

---

### Caption Primitive

**Purpose:** Display supplementary text
**Usage:** Timestamps, secondary info, fine print

#### Variants

| Variant | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Caption | 12px | 400 | 17px |

---

### Overline Primitive

**Purpose:** Display overline text
**Usage:** Section labels, categories

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Overline text |
| `color` | Color | `color/text/tertiary` | Text color |
| `transform` | Uppercase \| None | `Uppercase` | Text transform |

---

### Inline Link Primitive

**Purpose:** Display clickable text links
**Usage:** In-text links, CTAs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Link text |
| `color` | Color | `color/action/primary` | Link color |
| `underline` | Boolean | `true` | Show underline |
| `onPress` | Function | — | Press handler |

#### Accessibility

- `role="link"`
- `accessibilityRole="link"`
- Focus ring on keyboard navigation
- Underline indicates interactivity

---

### Number Primitive

**Purpose:** Display numeric values
**Usage:** Counts, quantities, non-financial numbers

#### Variants

| Variant | Size | Weight | Font | Example |
|---------|------|--------|------|---------|
| Display XL | 40px | 700 | Inter | 1,234 |
| Display L | 32px | 700 | Inter | 1,234 |
| Display M | 28px | 600 | Inter | 1,234 |
| Label L | 16px | 500 | Inter | 1,234 |
| Label M | 14px | 500 | Inter | 123 |
| Caption | 12px | 400 | Inter | 12 |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Numeric value |
| `variant` | Variant | `Label M` | Size variant |
| `color` | Color | `color/text/primary` | Text color |
| `locale` | String | `en-US` | Locale for formatting |
| `compact` | Boolean | `false` | Compact format (1.2K) |
| `precision` | Number | 0 | Decimal places |
| `tabularNumerals` | Boolean | `true` | Fixed-width numerals |

---

### Currency Primitive

**Purpose:** Display monetary values
**Usage:** Account balances, transaction amounts, hero KPIs

#### Variants

| Variant | Size | Weight | Font | Example |
|---------|------|--------|------|---------|
| Financial XL | 48px | 600 | IBM Plex Sans | $1,234.56 |
| Financial L | 36px | 600 | IBM Plex Sans | $1,234.56 |
| Financial M | 28px | 600 | IBM Plex Sans | $1,234.56 |
| Financial S | 20px | 600 | IBM Plex Sans | $123.45 |
| Compact | 14px | 500 | Inter | $1.2K |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Monetary amount |
| `currency` | String | `USD` | Currency code |
| `variant` | Variant | `Financial M` | Size variant |
| `color` | Color | `color/text/primary` | Text color |
| `locale` | String | `en-US` | Locale for formatting |
| `compact` | Boolean | `false` | Compact format |
| `showSign` | Boolean | `false` | Show + sign for positive |
| `precision` | Number | 2 | Decimal places |
| `tabularNumerals` | Boolean | `true` | Fixed-width numerals |

---

### Percentage Primitive

**Purpose:** Display percentage values
**Usage:** Returns, allocations, rates

#### Variants

| Variant | Size | Weight | Font | Example |
|---------|------|--------|------|---------|
| Financial XL | 48px | 600 | IBM Plex Sans | 12.34% |
| Financial L | 36px | 600 | IBM Plex Sans | 12.34% |
| Financial M | 28px | 600 | IBM Plex Sans | 12.34% |
| Financial S | 20px | 600 | IBM Plex Sans | 12.3% |
| Label L | 16px | 500 | Inter | 12.34% |
| Label M | 14px | 500 | Inter | 12.3% |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Percentage value |
| `variant` | Variant | `Financial M` | Size variant |
| `color` | Color | `color/text/primary` | Text color |
| `precision` | Number | 2 | Decimal places |
| `showSign` | Boolean | `false` | Show + for positive |
| `tabularNumerals` | Boolean | `true` | Fixed-width numerals |

---

### Monospace Number Primitive

**Purpose:** Display numbers in monospace font
**Usage:** Account numbers, IDs, codes

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | String | — | Text content |
| `size` | Size | `medium` | Font size |
| `color` | Color | `color/text/primary` | Text color |

---

## 02 Icons

### Regular Icon

**Purpose:** Display outline icons
**Usage:** Navigation, actions, labels

#### Sizes

| Size | Width | Height | Stroke |
|------|-------|--------|--------|
| XS | 16px | 16px | 2px |
| SM | 20px | 20px | 2px |
| MD | 24px | 24px | 2px |
| LG | 28px | 28px | 2px |
| XL | 32px | 32px | 2px |
| 2XL | 40px | 40px | 2px |
| 3XL | 48px | 48px | 2px |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Icon size |
| `color` | Color | `color/text/primary` | Icon color |
| `rotation` | Number | 0 | Rotation in degrees |
| `mirrored` | Boolean | `false` | Mirror horizontally |
| `rtl` | Boolean | `false` | RTL support |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Hug Content
Padding: 0
Gap: 0
Width: [size]
Height: [size]
```

#### Variables Used

| Variable | Token |
|----------|-------|
| `color/icon/primary` | `color/text/primary` |
| `color/icon/secondary` | `color/text/secondary` |
| `color/icon/tertiary` | `color/text/tertiary` |
| `color/icon/disabled` | `color/text/disabled` |
| `color/icon/on-primary` | `color/text/on-primary` |
| `color/icon/action` | `color/action/primary` |

#### Accessibility

- `accessibilityLabel` required for interactive icons
- Decorative icons: `accessibilityHidden="true"`
- Role: `role="img"` for standalone icons

#### Engineering Notes

- iOS: `UIImage` with `UIImage.SymbolConfiguration`
- Web: SVG inline or icon font
- Android: `ImageVector` or `Painter`

---

### Filled Icon

**Purpose:** Display filled icons (only when absolutely necessary)
**Usage:** Active states, selected states

#### When to Use

Only use filled icons when:
- Indicating active/selected state
- The icon communicates status that outline cannot
- Brand requirement

---

### Circle Icon

**Purpose:** Display icon inside circle container
**Usage:** Status indicators, quick actions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Container size |
| `iconSize` | Size | `sm` | Icon size inside |
| `background` | Color | `color/background/secondary` | Circle background |
| `color` | Color | `color/text/primary` | Icon color |

---

### Square Icon

**Purpose:** Display icon inside rounded square container
**Usage:** Category icons, app icons

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Container size |
| `radius` | Radius | `radius/sm` | Corner radius |
| `background` | Color | `color/background/secondary` | Background |
| `color` | Color | `color/text/primary` | Icon color |

---

### Container Icon

**Purpose:** Display icon inside customizable container
**Usage:** Custom icon backgrounds, branded icons

---

### Leading Icon

**Purpose:** Display icon before text content
**Usage:** Button icons, list item icons

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Icon size |
| `color` | Color | `color/text/primary` | Icon color |
| `gap` | Number | 8 | Gap between icon and content |

---

### Trailing Icon

**Purpose:** Display icon after text content
**Usage:** Dropdown indicators, disclosure arrows

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Icon size |
| `color` | Color | `color/text/tertiary` | Icon color |
| `gap` | Number | 8 | Gap between content and icon |

---

### Interactive Icon

**Purpose:** Display clickable icon button
**Usage:** Action buttons, navigation

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Icon size |
| `color` | Color | `color/text/primary` | Icon color |
| `disabled` | Boolean | `false` | Disabled state |
| `onPress` | Function | — | Press handler |

#### Accessibility

- Minimum touch target: 44×44px
- `accessibilityRole="button"`
- `accessibilityLabel` required
- Focus ring on keyboard navigation

---

### Decorative Icon

**Purpose:** Display non-interactive icon
**Usage:** Illustrations, decorative elements

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | IconName | — | Icon name |
| `size` | Size | `md` | Icon size |
| `color` | Color | `color/text/tertiary` | Icon color |

#### Accessibility

- `accessibilityHidden="true"`
- `role="presentation"`

---

## 03 Labels

### Label Primitive

**Purpose:** Display standalone label text
**Usage:** Form labels, badges, tags

#### Variants

| Variant | Size | Weight | Example |
|---------|------|--------|---------|
| Large | 16px | 500 | Label |
| Medium | 14px | 500 | Label |
| Small | 12px | 500 | Label |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `size` | Size | `medium` | Label size |
| `color` | Color | `color/text/primary` | Text color |
| `leadingIcon` | IconName | — | Leading icon |
| `trailingIcon` | IconName | — | Trailing icon |

---

### Field Label

**Purpose:** Label for form fields
**Usage:** Input labels, select labels

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `required` | Boolean | `false` | Required indicator |
| `optional` | Boolean | `false` | Optional indicator |
| `disabled` | Boolean | `false` | Disabled state |
| `error` | Boolean | `false` | Error state |

---

### Section Label

**Purpose:** Label for section headers
**Usage:** Group headers, category labels

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `color` | Color | `color/text/tertiary` | Text color |
| `uppercase` | Boolean | `true` | Uppercase transform |

---

### Group Label

**Purpose:** Label for grouping related items
**Usage:** Radio groups, checkbox groups

---

### Inline Label

**Purpose:** Display label inline with content
**Usage:** Inline tags, inline badges

---

### Required Label

**Purpose:** Indicate required field
**Usage:** Form fields, required inputs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `asterisk` | Boolean | `true` | Show asterisk |
| `color` | Color | `color/feedback/error` | Required color |

---

### Optional Label

**Purpose:** Indicate optional field
**Usage:** Form fields, optional inputs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `parentheses` | Boolean | `true` | Show in parentheses |
| `color` | Color | `color/text/tertiary` | Text color |

---

### Status Label

**Purpose:** Display status with label
**Usage:** Status indicators, state labels

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `status` | Status | — | Status type |
| `icon` | IconName | — | Status icon |

---

### Financial Label

**Purpose:** Display financial information label
**Usage:** Currency labels, account types

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `currency` | String | — | Currency code |
| `amount` | Number | — | Amount value |
| `type` | Type | — | Label type |

---

## 04 Badges

### Badge Primitive

**Purpose:** Display compact status or label
**Usage:** Status indicators, counts, labels

#### Variants

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| Neutral | `color/background/secondary` | `color/text/secondary` | Default label |
| Primary | `color/action/primary-subtle` | `color/action/primary` | Primary status |
| Success | `color/feedback/success-subtle` | `color/feedback/success` | Positive status |
| Warning | `color/feedback/warning-subtle` | `color/feedback/warning` | Caution status |
| Error | `color/feedback/error-subtle` | `color/feedback/error` | Negative status |
| Information | `color/feedback/info-subtle` | `color/feedback/info` | Info status |
| AI | `color/ai/subtle` | `color/ai` | AI-related |
| Automation | `color/automation/subtle` | `color/automation` | Automation status |
| Verified | `color/verified/subtle` | `color/verified` | Verified status |
| New | `color/new/subtle` | `color/new` | New feature |
| Beta | `color/beta/subtle` | `color/beta` | Beta feature |

#### Sizes

| Size | Height | Font | Padding | Radius |
|------|--------|------|---------|--------|
| XS | 16px | Micro (10px) | 2px 6px | Radius/Full |
| SM | 20px | Micro (12px) | 2px 8px | Radius/Full |
| MD | 24px | Micro (12px) | 4px 10px | Radius/Full |
| LG | 28px | Caption (14px) | 4px 12px | Radius/Full |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `neutral` | Badge variant |
| `size` | Size | `md` | Badge size |
| `icon` | IconName | — | Leading icon |
| `text` | Text | — | Badge text |
| `count` | Number | — | Count value |
| `state` | State | `default` | Interaction state |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: [size-dependent]
Gap: 4
Radius: Radius/Full
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Badge/Background | `badge/[variant]/background` |
| Badge/Text | `badge/[variant]/text` |
| Badge/Icon | `badge/[variant]/text` |
| Badge/Border | `badge/[variant]/border` |

#### Accessibility

- `role="status"`
- Announce badge content to screen readers
- Color alone does not convey meaning
- Icon + text combination for status

#### Engineering Notes

- iOS: `UIView` with `UILabel`
- Web: `<span>` with CSS
- Android: `TextView` or `MaterialCardView`

---

### Neutral Badge

**Purpose:** Display default label
**Usage:** Default status, category labels

#### Token Mapping

```
Badge/Neutral/Background → color/background/secondary
Badge/Neutral/Text → color/text/secondary
Badge/Neutral/Border → transparent
```

---

### Primary Badge

**Purpose:** Display primary status
**Usage:** Primary action, important label

#### Token Mapping

```
Badge/Primary/Background → color/action/primary-subtle
Badge/Primary/Text → color/action/primary
Badge/Primary/Border → transparent
```

---

### Success Badge

**Purpose:** Display positive status
**Usage:** Completed, positive, approved

#### Token Mapping

```
Badge/Success/Background → color/feedback/success-subtle
Badge/Success/Text → color/feedback/success
Badge/Success/Border → transparent
```

---

### Warning Badge

**Purpose:** Display caution status
**Usage:** Pending, attention needed

#### Token Mapping

```
Badge/Warning/Background → color/feedback/warning-subtle
Badge/Warning/Text → color/feedback/warning
Badge/Warning/Border → transparent
```

---

### Error Badge

**Purpose:** Display negative status
**Usage:** Failed, error, rejected

#### Token Mapping

```
Badge/Error/Background → color/feedback/error-subtle
Badge/Error/Text → color/feedback/error
Badge/Error/Border → transparent
```

---

### Information Badge

**Purpose:** Display informational status
**Usage:** Info, FYI, neutral information

#### Token Mapping

```
Badge/Information/Background → color/feedback/info-subtle
Badge/Information/Text → color/feedback/info
Badge/Information/Border → transparent
```

---

### AI Badge

**Purpose:** Display AI-related status
**Usage:** AI suggestion, AI-generated content

#### Token Mapping

```
Badge/AI/Background → color/ai/subtle
Badge/AI/Text → color/ai
Badge/AI/Border → transparent
Badge/AI/Icon → icon/ai
```

---

### Automation Badge

**Purpose:** Display automation status
**Usage:** Auto-renew, automatic payment

#### Token Mapping

```
Badge/Automation/Background → color/automation/subtle
Badge/Automation/Text → color/automation
Badge/Automation/Border → transparent
Badge/Automation/Icon → icon/automation
```

---

### Verified Badge

**Purpose:** Display verified status
**Usage:** Verified account, verified identity

#### Token Mapping

```
Badge/Verified/Background → color/verified/subtle
Badge/Verified/Text → color/verified
Badge/Verified/Border → transparent
Badge/Verified/Icon → icon/verified
```

---

### New Badge

**Purpose:** Display new feature
**Usage:** New feature, new content

#### Token Mapping

```
Badge/New/Background → color/new/subtle
Badge/New/Text → color/new
Badge/New/Border → transparent
Badge/New/Icon → icon/new
```

---

### Beta Badge

**Purpose:** Display beta feature
**Usage:** Beta feature, experimental

#### Token Mapping

```
Badge/Beta/Background → color/beta/subtle
Badge/Beta/Text → color/beta
Badge/Beta/Border → transparent
Badge/Beta/Icon → icon/beta
```

---

## 05 Chips

### Chip Primitive

**Purpose:** Display compact interactive element
**Usage:** Filters, selections, suggestions

#### Variants

| Variant | Background | Border | Text | Use Case |
|---------|------------|--------|------|----------|
| Filter | `color/surface` | `color/border` | `color/text/primary` | Filter options |
| Input | `color/background/secondary` | transparent | `color/text/primary` | Input chips |
| Selection | `color/action/primary-subtle` | `color/action/primary` | `color/action/primary` | Selected option |
| Suggestion | `color/surface` | `color/border` | `color/text/primary` | Suggestions |
| AI | `color/ai/subtle` | `color/ai` | `color/ai` | AI suggestions |
| Investment | `color/investment/subtle` | `color/investment` | `color/investment` | Investment type |
| Category | `color/category/subtle` | `color/category` | `color/category` | Category label |

#### Sizes

| Size | Height | Font | Padding | Radius |
|------|--------|------|---------|--------|
| SM | 24px | Micro (12px) | 4px 8px | Radius/Full |
| MD | 32px | Caption (14px) | 6px 12px | Radius/Full |
| LG | 40px | Body (16px) | 8px 16px | Radius/Full |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `filter` | Chip variant |
| `size` | Size | `md` | Chip size |
| `selected` | Boolean | `false` | Selected state |
| `disabled` | Boolean | `false` | Disabled state |
| `closable` | Boolean | `false` | Show close button |
| `leadingIcon` | IconName | — | Leading icon |
| `trailingIcon` | IconName | — | Trailing icon |
| `text` | Text | — | Chip text |
| `onPress` | Function | — | Press handler |
| `onClose` | Function | — | Close handler |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: [size-dependent]
Gap: 6
Radius: Radius/Full
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Chip/Background | `chip/[variant]/background` |
| Chip/Border | `chip/[variant]/border` |
| Chip/Text | `chip/[variant]/text` |
| Chip/Selected/Background | `chip/[variant]/selected/background` |
| Chip/Selected/Border | `chip/[variant]/selected/border` |
| Chip/Disabled/Background | `color/background/disabled` |
| Chip/Disabled/Text | `color/text/disabled` |

#### Accessibility

- `role="checkbox"` for selection chips
- `role="button"` for filter chips
- `aria-selected` for selected state
- `aria-disabled` for disabled state
- Focus ring on keyboard navigation

---

### Filter Chip

**Purpose:** Display filter option
**Usage:** Filter lists, tag filters

#### Token Mapping

```
Chip/Filter/Background → color/surface
Chip/Filter/Border → color/border
Chip/Filter/Text → color/text/primary
Chip/Filter/Selected/Background → color/action/primary-subtle
Chip/Filter/Selected/Border → color/action/primary
Chip/Filter/Selected/Text → color/action/primary
Chip/Filter/Icon → color/text/secondary
Chip/Filter/Selected/Icon → color/action/primary
```

---

### Input Chip

**Purpose:** Display removable tag
**Usage:** Selected filters, tags

#### Token Mapping

```
Chip/Input/Background → color/background/secondary
Chip/Input/Border → transparent
Chip/Input/Text → color/text/primary
Chip/Input/Close → color/text/tertiary
```

---

### Selection Chip

**Purpose:** Display selected option
**Usage:** Single/multi-select options

#### Token Mapping

```
Chip/Selection/Background → color/action/primary-subtle
Chip/Selection/Border → color/action/primary
Chip/Selection/Text → color/action/primary
Chip/Selection/Icon → color/action/primary
```

---

### Suggestion Chip

**Purpose:** Display suggested action
**Usage:** Quick actions, suggestions

#### Token Mapping

```
Chip/Suggestion/Background → color/surface
Chip/Suggestion/Border → color/border
Chip/Suggestion/Text → color/text/primary
Chip/Suggestion/Icon → color/text/secondary
```

---

### AI Chip

**Purpose:** Display AI suggestion
**Usage:** AI-generated suggestions

#### Token Mapping

```
Chip/AI/Background → color/ai/subtle
Chip/AI/Border → color/ai
Chip/AI/Text → color/ai
Chip/AI/Icon → icon/ai
```

---

### Investment Chip

**Purpose:** Display investment type
**Usage:** Investment category, asset type

#### Token Mapping

```
Chip/Investment/Background → color/investment/subtle
Chip/Investment/Border → color/investment
Chip/Investment/Text → color/investment
Chip/Investment/Icon → icon/investment
```

---

### Category Chip

**Purpose:** Display category label
**Usage:** Transaction category, expense category

#### Token Mapping

```
Chip/Category/Background → color/category/subtle
Chip/Category/Border → color/category
Chip/Category/Text → color/category
Chip/Category/Icon → icon/category
```

---

## 06 Tags

### Tag Primitive

**Purpose:** Display content type indicator
**Usage:** Asset type, transaction type

#### Variants

| Variant | Background | Text | Icon | Use Case |
|---------|------------|------|------|----------|
| ETF | `color/etf/subtle` | `color/etf` | icon/etf | ETF holdings |
| Stock | `color/stock/subtle` | `color/stock` | icon/stock | Stock holdings |
| Fund | `color/fund/subtle` | `color/fund` | icon/fund | Fund holdings |
| Goal | `color/goal/subtle` | `color/goal` | icon/goal | Financial goals |
| Investment | `color/investment/subtle` | `color/investment` | icon/investment | Investments |
| Income | `color/income/subtle` | `color/income` | icon/income | Income |
| Expense | `color/expense/subtle` | `color/expense` | icon/expense | Expenses |
| Transfer | `color/transfer/subtle` | `color/transfer` | icon/transfer | Transfers |
| Bill | `color/bill/subtle` | `color/bill` | icon/bill | Bills |
| Tax | `color/tax/subtle` | `color/tax` | icon/tax | Tax |
| Portfolio | `color/portfolio/subtle` | `color/portfolio` | icon/portfolio | Portfolio |
| Cash | `color/cash/subtle` | `color/cash` | icon/cash | Cash |
| Recurring | `color/recurring/subtle` | `color/recurring` | icon/recurring | Recurring |
| AI | `color/ai/subtle` | `color/ai` | icon/ai | AI-related |

#### Sizes

| Size | Height | Font | Padding | Radius |
|------|--------|------|---------|--------|
| SM | 20px | Micro (12px) | 2px 6px | Radius/Sm |
| MD | 24px | Micro (12px) | 2px 8px | Radius/Sm |
| LG | 28px | Caption (14px) | 4px 10px | Radius/Sm |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `investment` | Tag variant |
| `size` | Size | `md` | Tag size |
| `icon` | IconName | — | Tag icon |
| `text` | Text | — | Tag text |
| `state` | State | `default` | Interaction state |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: [size-dependent]
Gap: 4
Radius: Radius/Sm
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Tag/Background | `tag/[variant]/background` |
| Tag/Text | `tag/[variant]/text` |
| Tag/Icon | `tag/[variant]/text` |
| Tag/Border | `tag/[variant]/border` |

#### Accessibility

- `role="text"` for decorative tags
- `role="button"` for interactive tags
- Announce tag content to screen readers

---

## 07 Indicators

### Status Dot Primitive

**Purpose:** Display connection status
**Usage:** Online/offline status

#### Variants

| Variant | Size | Color | Use Case |
|---------|------|-------|----------|
| Online | 8px | `color/feedback/success` | Connected |
| Offline | 8px | `color/text/disabled` | Disconnected |
| Syncing | 8px | `color/feedback/info` | Syncing |
| Pending | 8px | `color/feedback/warning` | Pending |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `status` | Status | `online` | Status type |
| `size` | Size | `md` | Dot size |
| `pulse` | Boolean | `false` | Pulse animation |

---

### Connection Dot Primitive

**Purpose:** Display bank connection status
**Usage:** Account connection status

#### Variants

| Variant | Color | Animation | Use Case |
|---------|-------|-----------|----------|
| Connected | `color/feedback/success` | None | Connected |
| Disconnected | `color/feedback/error` | None | Disconnected |
| Syncing | `color/feedback/info` | Pulse | Syncing |
| Error | `color/feedback/error` | None | Error |

---

### Market Dot Primitive

**Purpose:** Display market status
**Usage:** Market open/close status

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Open | `color/feedback/success` | Market open |
| Closed | `color/text/disabled` | Market closed |
| Pre-market | `color/feedback/info` | Pre-market |
| After-hours | `color/feedback/warning` | After-hours |

---

### Sync Dot Primitive

**Purpose:** Display sync status
**Usage:** Account sync status

#### Variants

| Variant | Color | Animation | Use Case |
|---------|-------|-----------|----------|
| Synced | `color/feedback/success` | None | Synced |
| Syncing | `color/feedback/info` | Pulse | Syncing |
| Error | `color/feedback/error` | None | Sync error |
| Pending | `color/feedback/warning` | None | Pending |

---

### Notification Dot Primitive

**Purpose:** Display notification indicator
**Usage:** Unread notifications

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `count` | Number | — | Notification count |
| `maxCount` | Number | 99 | Max displayed count |
| `visible` | Boolean | `true` | Show/hide dot |

---

### Unread Dot Primitive

**Purpose:** Display unread indicator
**Usage:** Unread items

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide dot |
| `color` | Color | `color/action/primary` | Dot color |

---

### Portfolio Indicator Primitive

**Purpose:** Display portfolio status
**Usage:** Portfolio health indicator

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Healthy | `color/feedback/success` | Portfolio on track |
| Warning | `color/feedback/warning` | Portfolio needs attention |
| Critical | `color/feedback/error` | Portfolio critical |

---

### Risk Indicator Primitive

**Purpose:** Display risk level
**Usage:** Investment risk level

#### Variants

| Variant | Color | Label | Use Case |
|---------|-------|-------|----------|
| Low | `color/feedback/success` | Low Risk | Conservative |
| Medium | `color/feedback/warning` | Medium Risk | Moderate |
| High | `color/feedback/error` | High Risk | Aggressive |

---

### Trend Indicator Primitive

**Purpose:** Display trend direction
**Usage:** Price changes, performance

#### Variants

| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Up | `color/feedback/success` | TrendUp | Positive trend |
| Down | `color/feedback/error` | TrendDown | Negative trend |
| Flat | `color/text/secondary` | TrendFlat | No change |

---

### Growth Indicator Primitive

**Purpose:** Display growth percentage
**Usage:** Portfolio growth, returns

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Growth percentage |
| `color` | Color | `color/feedback/success` | Growth color |
| `showSign` | Boolean | `true` | Show + sign |

---

### Loss Indicator Primitive

**Purpose:** Display loss percentage
**Usage:** Portfolio loss, negative returns

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Loss percentage |
| `color` | Color | `color/feedback/error` | Loss color |
| `showSign` | Boolean | `true` | Show - sign |

---

### Activity Indicator Primitive

**Purpose:** Display activity status
**Usage:** Recent activity, last updated

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Active | `color/feedback/success` | Recently active |
| Inactive | `color/text/disabled` | Inactive |
| Unknown | `color/text/tertiary` | Unknown status |

---

## 08 Avatar

### Avatar Primitive

**Purpose:** Display user or entity image
**Usage:** User profiles, entity representations

#### Variants

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| Image | — | — | User photo |
| Initials | `color/action/primary-subtle` | `color/action/primary` | Fallback |
| Icon | `color/background/secondary` | `color/text/secondary` | Entity icon |

#### Sizes

| Size | Width | Height | Font | Radius |
|------|-------|--------|------|--------|
| XS | 24px | 24px | Micro (10px) | Radius/Full |
| SM | 32px | 32px | Micro (12px) | Radius/Full |
| MD | 40px | 40px | Caption (14px) | Radius/Full |
| LG | 56px | 56px | Body (16px) | Radius/Full |
| XL | 72px | 72px | Heading2 (20px) | Radius/Full |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `initials` | Avatar variant |
| `size` | Size | `md` | Avatar size |
| `src` | String | — | Image URL |
| `name` | String | — | User name (for initials) |
| `icon` | IconName | — | Icon name |
| `status` | Status | — | Online status |
| `badge` | Badge | — | Notification badge |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Hug Content
Padding: 0
Gap: 0
Width: [size]
Height: [size]
Radius: Radius/Full
Clip Content: true
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Avatar/Background | `avatar/[variant]/background` |
| Avatar/Text | `avatar/[variant]/text` |
| Avatar/Border | `avatar/[variant]/border` |
| Avatar/Status/Online | `color/feedback/success` |
| Avatar/Status/Offline | `color/text/disabled` |
| Avatar/Status/Away | `color/feedback/warning` |

#### Accessibility

- `accessibilityLabel` with user name
- `role="img"` for image avatars
- Status announced to screen readers

---

### Avatar Group Primitive

**Purpose:** Display multiple avatars
**Usage:** Group representations, team display

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `avatars` | Avatar[] | — | Array of avatars |
| `max` | Number | 3 | Max visible avatars |
| `size` | Size | `md` | Avatar size |
| `spacing` | Number | -8 | Overlap spacing |

---

### Institution Avatar

**Purpose:** Display financial institution
**Usage:** Bank logos, institution icons

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `institution` | String | — | Institution name |
| `src` | String | — | Institution logo URL |
| `size` | Size | `md` | Avatar size |

---

### Bank Avatar

**Purpose:** Display bank logo
**Usage:** Account displays, bank selection

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bank` | String | — | Bank name |
| `src` | String | — | Bank logo URL |
| `size` | Size | `md` | Avatar size |

---

### User Avatar

**Purpose:** Display user photo
**Usage:** User profiles, comments

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `user` | User | — | User object |
| `size` | Size | `md` | Avatar size |
| `showStatus` | Boolean | `false` | Show online status |

---

### AI Avatar

**Purpose:** Display AI assistant
**Usage:** AI suggestions, chatbot

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Size | `md` | Avatar size |
| `thinking` | Boolean | `false` | Thinking state |

#### Token Mapping

```
AI/Avatar/Background → color/ai/subtle
AI/Avatar/Icon → icon/ai
AI/Avatar/Text → color/ai
```

---

## 09 Dividers

### Divider Primitive

**Purpose:** Separate content sections
**Usage:** Between list items, sections

#### Variants

| Variant | Style | Color | Use Case |
|---------|-------|-------|----------|
| Horizontal | Solid | `color/border` | Standard divider |
| Vertical | Solid | `color/border` | Inline separator |
| Inset | Solid | `color/border` | Indented divider |
| Full Width | Solid | `color/border` | Full-width divider |
| Label | Solid | `color/border` | With label text |
| Gradient | Gradient | `color/border` | Fade divider |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `horizontal` | Divider variant |
| `thickness` | Number | 1 | Line thickness |
| `color` | Color | `color/border` | Line color |
| `spacing` | Spacing | `spacing/4` | Spacing around |
| `label` | Text | — | Label text (Label variant) |

#### Auto Layout

```
Direction: Horizontal (horizontal) / Vertical (vertical)
Primary Axis: Fill Container
Counter Axis: Center
Padding: [spacing]
Gap: 0
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Divider/Color | `color/border` |
| Divider/Thickness | 1px |
| Divider/Spacing | `spacing/4` |

#### Accessibility

- `role="separator"` for semantic dividers
- Decorative dividers: `role="presentation"`

---

### Horizontal Divider

**Purpose:** Separate content vertically
**Usage:** Between list items, sections

---

### Vertical Divider

**Purpose:** Separate content horizontally
**Usage:** Between inline elements

---

### Inset Divider

**Purpose:** Display indented divider
**Usage:** Inside cards, nested content

---

### Full Width Divider

**Purpose:** Display full-width divider
**Usage:** Section breaks, major separations

---

### Label Divider

**Purpose:** Display divider with label
**Usage:** Section headers with divider

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Label text |
| `labelColor` | Color | `color/text/tertiary` | Label color |

---

### Gradient Divider

**Purpose:** Display fading divider
**Usage:** Fade content, scroll indicators

---

## 10 Progress

### Progress Primitive

**Purpose:** Display progress indicator
**Usage:** Loading, completion, goals

#### Variants

| Variant | Shape | Use Case |
|---------|-------|----------|
| Linear | Bar | Linear progress |
| Circular | Circle | Circular progress |
| Ring | Ring | Ring progress |
| Goal | Bar | Goal progress |
| Portfolio | Bar | Portfolio progress |
| Investment | Bar | Investment progress |
| Loading | Bar | Loading state |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `linear` | Progress variant |
| `value` | Number | 0 | Progress value (0-100) |
| `max` | Number | 100 | Maximum value |
| `size` | Size | `md` | Progress size |
| `color` | Color | `color/action/primary` | Progress color |
| `trackColor` | Color | `color/background/secondary` | Track color |
| `label` | Text | — | Progress label |
| `showPercentage` | Boolean | `false` | Show percentage |
| `indeterminate` | Boolean | `false` | Indeterminate state |

#### Auto Layout

```
Direction: Horizontal (linear) / Vertical (circular)
Primary Axis: Fill Container (linear) / Hug Content (circular)
Counter Axis: Center
Padding: 0
Gap: [size-dependent]
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Progress/Color | `color/action/primary` |
| Progress/Track | `color/background/secondary` |
| Progress/Label | `color/text/secondary` |
| Progress/Percentage | `color/text/primary` |

#### Accessibility

- `role="progressbar"`
- `aria-valuenow` = current value
- `aria-valuemin` = 0
- `aria-valuemax` = 100
- `aria-label` for progress description

---

### Linear Progress

**Purpose:** Display linear progress
**Usage:** File upload, loading

---

### Circular Progress

**Purpose:** Display circular progress
**Usage:** Inline loading, percentage

---

### Ring Progress

**Purpose:** Display ring progress
**Usage:** Goal completion, stats

---

### Goal Progress

**Purpose:** Display goal progress
**Usage:** Savings goals, targets

#### Token Mapping

```
Goal/Progress/Color → color/goal
Goal/Progress/Track → color/background/secondary
Goal/Progress/Label → color/text/secondary
```

---

### Portfolio Progress

**Purpose:** Display portfolio progress
**Usage:** Portfolio allocation, rebalancing

#### Token Mapping

```
Portfolio/Progress/Color → color/portfolio
Portfolio/Progress/Track → color/background/secondary
```

---

### Investment Progress

**Purpose:** Display investment progress
**Usage:** Investment milestones, targets

#### Token Mapping

```
Investment/Progress/Color → color/investment
Investment/Progress/Track → color/background/secondary
```

---

### Loading Progress

**Purpose:** Display indeterminate loading
**Usage:** Unknown duration loading

---

## 11 Loaders

### Loader Primitive

**Purpose:** Display loading state
**Usage:** Content loading, skeleton screens

#### Variants

| Variant | Shape | Use Case |
|---------|-------|----------|
| Spinner | Circle | Inline loading |
| Skeleton Text | Rectangle | Text loading |
| Skeleton Card | Rectangle | Card loading |
| Skeleton Avatar | Circle | Avatar loading |
| Skeleton List | Rectangle | List loading |
| Skeleton Chart | Rectangle | Chart loading |
| Skeleton Portfolio | Rectangle | Portfolio loading |
| Skeleton Transaction | Rectangle | Transaction loading |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `spinner` | Loader variant |
| `size` | Size | `md` | Loader size |
| `color` | Color | `color/action/primary` | Loader color |
| `rows` | Number | 3 | Number of rows |
| `animated` | Boolean | `true` | Animation enabled |

#### Auto Layout

```
Direction: Vertical (skeleton) / Horizontal (spinner)
Primary Axis: Fill Container (skeleton) / Hug Content (spinner)
Counter Axis: Stretch (skeleton) / Center (spinner)
Padding: 0
Gap: [size-dependent]
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Loader/Color | `color/action/primary` |
| Loader/Track | `color/background/secondary` |
| Loader/Shimmer | `color/surface` |

#### Accessibility

- `role="status"`
- `aria-busy="true"` when loading
- `aria-label` for loading description
- Announce loading start/end

---

### Spinner Loader

**Purpose:** Display inline loading
**Usage:** Button loading, inline loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Size | `md` | Spinner size |
| `color` | Color | `color/action/primary` | Spinner color |

---

### Skeleton Text

**Purpose:** Display text loading placeholder
**Usage:** Text content loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `lines` | Number | 3 | Number of lines |
| `lineHeight` | Number | 16 | Line height |
| `lastLineWidth` | Number | 60 | Last line width (%) |

---

### Skeleton Card

**Purpose:** Display card loading placeholder
**Usage:** Card content loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rows` | Number | 3 | Number of rows |
| `showImage` | Boolean | `true` | Show image placeholder |
| `showAvatar` | Boolean | `false` | Show avatar placeholder |

---

### Skeleton Avatar

**Purpose:** Display avatar loading placeholder
**Usage:** User avatar loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Size | `md` | Avatar size |
| `shape` | Shape | `circle` | Avatar shape |

---

### Skeleton List

**Purpose:** Display list loading placeholder
**Usage:** List content loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | Number | 5 | Number of items |
| `showAvatar` | Boolean | `true` | Show avatar placeholder |
| `showTrailing` | Boolean | `true` | Show trailing placeholder |

---

### Skeleton Chart

**Purpose:** Display chart loading placeholder
**Usage:** Chart content loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height` | Number | 200 | Chart height |
| `showLegend` | Boolean | `true` | Show legend placeholder |

---

### Skeleton Portfolio

**Purpose:** Display portfolio loading placeholder
**Usage:** Portfolio content loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showChart` | Boolean | `true` | Show chart placeholder |
| `showStats` | Boolean | `true` | Show stats placeholder |
| `showHoldings` | Boolean | `true` | Show holdings placeholder |

---

### Skeleton Transaction

**Purpose:** Display transaction loading placeholder
**Usage:** Transaction list loading

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | Number | 5 | Number of items |
| `showAmount` | Boolean | `true` | Show amount placeholder |
| `showDate` | Boolean | `true` | Show date placeholder |

---

## 12 Status

### Status Primitive

**Purpose:** Display status indicator
**Usage:** Connection, sync, verification status

#### Variants

| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Success | `color/feedback/success` | Check | Completed |
| Warning | `color/feedback/warning` | Warning | Attention needed |
| Error | `color/feedback/error` | Error | Failed |
| Information | `color/feedback/info` | Info | FYI |
| Offline | `color/text/disabled` | Offline | Disconnected |
| Online | `color/feedback/success` | Online | Connected |
| Syncing | `color/feedback/info` | Sync | Syncing |
| Pending | `color/feedback/warning` | Clock | Pending |
| Verified | `color/feedback/success` | Verified | Verified |
| Unverified | `color/text/disabled` | Unverified | Unverified |
| Locked | `color/text/secondary` | Lock | Locked |
| Unlocked | `color/feedback/success` | Unlock | Unlocked |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `success` | Status variant |
| `size` | Size | `md` | Status size |
| `icon` | IconName | — | Custom icon |
| `text` | Text | — | Status text |
| `pulse` | Boolean | `false` | Pulse animation |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: 0
Gap: 6
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Status/Color | `color/feedback/[variant]` |
| Status/Background | `color/feedback/[variant]-subtle` |
| Status/Icon | `color/feedback/[variant]` |
| Status/Text | `color/text/primary` |

#### Accessibility

- `role="status"`
- Announce status change to screen readers
- Icon + text for non-color-dependent communication

---

## 13 Money

### Money Primitive

**Purpose:** Display monetary values
**Usage:** Financial amounts, balances, transactions

**This is unique to Advizmo.**

#### Variants

| Variant | Size | Weight | Use Case |
|---------|------|--------|----------|
| Display | 32px | 600 | Hero amounts |
| Large | 24px | 600 | Section headers |
| Medium | 16px | 500 | List items |
| Small | 14px | 500 | Inline amounts |
| Compact | 14px | 500 | Abbreviated amounts |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Monetary amount |
| `currency` | String | `USD` | Currency code |
| `locale` | String | `en-US` | Locale for formatting |
| `variant` | Variant | `medium` | Size variant |
| `color` | Color | `color/text/primary` | Text color |
| `precision` | Number | 2 | Decimal places |
| `compact` | Boolean | `false` | Compact format |
| `showSign` | Boolean | `false` | Show +/- sign |
| `showCurrency` | Boolean | `true` | Show currency symbol |
| `negative` | Boolean | `false` | Force negative styling |
| `positive` | Boolean | `false` | Force positive styling |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: 0
Gap: 0
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Money/Color | `color/text/primary` |
| Money/Positive | `color/feedback/success` |
| Money/Negative | `color/feedback/error` |
| Money/Pending | `color/feedback/warning` |
| Money/Currency | `color/text/secondary` |
| Money/Decimal | `color/text/tertiary` |

---

### Money Amount

**Purpose:** Display formatted monetary amount
**Usage:** Transaction amounts, balances

#### Token Mapping

```
Money/Amount/Color → color/text/primary
Money/Amount/Currency → color/text/secondary
Money/Amount/Decimal → color/text/tertiary
Money/Amount/Positive → color/feedback/success
Money/Amount/Negative → color/feedback/error
Money/Amount/Pending → color/feedback/warning
```

---

### Currency Symbol

**Purpose:** Display currency symbol
**Usage:** Currency indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `currency` | String | `USD` | Currency code |
| `size` | Size | `md` | Symbol size |
| `color` | Color | `color/text/secondary` | Symbol color |

---

### Currency Code

**Purpose:** Display currency code
**Usage:** Multi-currency displays

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `code` | String | `USD` | Currency code |
| `size` | Size | `md` | Code size |
| `color` | Color | `color/text/tertiary` | Code color |

---

### Amount Group

**Purpose:** Display amount with context
**Usage:** Transaction details, line items

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Amount value |
| `currency` | String | `USD` | Currency code |
| `label` | Text | — | Amount label |
| `description` | Text | — | Amount description |

---

### Decimal Group

**Purpose:** Display decimal portion distinctly
**Usage:** Financial formatting

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `integer` | Number | — | Integer part |
| `decimal` | Number | — | Decimal part |
| `precision` | Number | 2 | Decimal places |

---

### Negative Amount

**Purpose:** Display negative amount
**Usage:** Expenses, losses

#### Token Mapping

```
Negative/Amount/Color → color/feedback/error
Negative/Amount/Sign → color/feedback/error
```

---

### Positive Amount

**Purpose:** Display positive amount
**Usage:** Income, gains

#### Token Mapping

```
Positive/Amount/Color → color/feedback/success
Positive/Amount/Sign → color/feedback/success
```

---

### Pending Amount

**Purpose:** Display pending amount
**Usage:** Pending transactions

#### Token Mapping

```
Pending/Amount/Color → color/feedback/warning
Pending/Amount/Status → color/feedback/warning
```

---

### Estimated Amount

**Purpose:** Display estimated amount
**Usage:** Projections, estimates

#### Token Mapping

```
Estimated/Amount/Color → color/text/secondary
Estimated/Amount/Label → color/text/tertiary
```

---

### Rounded Amount

**Purpose:** Display rounded amount
**Usage:** Approximate values

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Amount value |
| `precision` | Number | 0 | Decimal places |

---

### Compact Amount

**Purpose:** Display abbreviated amount
**Usage:** Summary views, small spaces

#### Token Mapping

```
Compact/Amount/Color → color/text/primary
Compact/Amount/Abbreviation → color/text/tertiary
```

---

### Large Amount

**Purpose:** Display large amount
**Usage:** Hero sections, totals

#### Token Mapping

```
Large/Amount/Color → color/text/primary
Large/Amount/Currency → color/text/secondary
```

---

### Small Amount

**Purpose:** Display small amount
**Usage:** Inline, list items

#### Token Mapping

```
Small/Amount/Color → color/text/primary
```

---

### Balance Display

**Purpose:** Display account balance
**Usage:** Account summaries, dashboards

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `balance` | Number | — | Balance amount |
| `currency` | String | `USD` | Currency code |
| `label` | Text | `Balance` | Balance label |
| `trend` | Trend | — | Balance trend |

---

### Cash Display

**Purpose:** Display cash balance
**Usage:** Cash accounts, liquid assets

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Cash amount |
| `currency` | String | `USD` | Currency code |
| `available` | Boolean | `true` | Available for use |

---

### Net Worth Display

**Purpose:** Display net worth
**Usage:** Dashboard, financial overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `netWorth` | Number | — | Net worth amount |
| `currency` | String | `USD` | Currency code |
| `trend` | Trend | — | Net worth trend |
| `change` | Number | — | Change amount |
| `changePercentage` | Number | — | Change percentage |

---

### Investment Display

**Purpose:** Display investment value
**Usage:** Investment accounts, portfolios

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Investment value |
| `cost` | Number | — | Cost basis |
| `currency` | String | `USD` | Currency code |
| `return` | Number | — | Return amount |
| `returnPercentage` | Number | — | Return percentage |

---

### Return Display

**Purpose:** Display investment return
**Usage:** Performance metrics

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Return amount |
| `percentage` | Number | — | Return percentage |
| `period` | String | — | Time period |

---

### Tax Saving Display

**Purpose:** Display tax savings
**Usage:** Tax optimization, savings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Tax saving amount |
| `currency` | String | `USD` | Currency code |
| `year` | Number | — | Tax year |

---

## 14 Percentage

### Percentage Primitive

**Purpose:** Display percentage values
**Usage:** Returns, allocations, rates

#### Variants

| Variant | Size | Weight | Use Case |
|---------|------|--------|----------|
| Display | 32px | 600 | Hero percentages |
| Large | 24px | 600 | Section headers |
| Medium | 16px | 500 | List items |
| Small | 14px | 500 | Inline percentages |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Percentage value |
| `variant` | Variant | `medium` | Size variant |
| `color` | Color | `color/text/primary` | Text color |
| `precision` | Number | 2 | Decimal places |
| `showSign` | Boolean | `false` | Show +/- sign |
| `positive` | Boolean | `false` | Force positive styling |
| `negative` | Boolean | `false` | Force negative styling |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: 0
Gap: 0
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Percentage/Color | `color/text/primary` |
| Percentage/Positive | `color/feedback/success` |
| Percentage/Negative | `color/feedback/error` |
| Percentage/Neutral | `color/text/secondary` |

---

### Percentage Change

**Purpose:** Display percentage change
**Usage:** Performance, changes over time

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Change percentage |
| `showArrow` | Boolean | `true` | Show trend arrow |
| `showSign` | Boolean | `true` | Show +/- sign |

---

### Growth Percentage

**Purpose:** Display growth percentage
**Usage:** Positive performance

#### Token Mapping

```
Growth/Percentage/Color → color/feedback/success
Growth/Percentage/Arrow → icon/trend-up
```

---

### Loss Percentage

**Purpose:** Display loss percentage
**Usage:** Negative performance

#### Token Mapping

```
Loss/Percentage/Color → color/feedback/error
Loss/Percentage/Arrow → icon/trend-down
```

---

### Interest Percentage

**Purpose:** Display interest rate
**Usage:** APR, APY, savings rates

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rate` | Number | — | Interest rate |
| `type` | Type | `apy` | Rate type |
| `period` | String | `annual` | Rate period |

---

### APR

**Purpose:** Display Annual Percentage Rate
**Usage:** Loan rates, credit card rates

#### Token Mapping

```
APR/Color → color/text/primary
APR/Label → color/text/secondary
```

---

### APY

**Purpose:** Display Annual Percentage Yield
**Usage:** Savings rates, investment returns

#### Token Mapping

```
APY/Color → color/feedback/success
APY/Label → color/text/secondary
```

---

### Tax Percentage

**Purpose:** Display tax rate
**Usage:** Tax calculations, tax brackets

#### Token Mapping

```
Tax/Percentage/Color → color/text/primary
Tax/Percentage/Label → color/text/secondary
```

---

## 15 Trend

### Trend Primitive

**Purpose:** Display trend direction
**Usage:** Performance indicators, changes

#### Variants

| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Up | `color/feedback/success` | TrendUp | Positive trend |
| Down | `color/feedback/error` | TrendDown | Negative trend |
| Flat | `color/text/secondary` | TrendFlat | No change |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | Direction | `flat` | Trend direction |
| `size` | Size | `md` | Trend size |
| `color` | Color | — | Custom color |
| `showLabel` | Boolean | `false` | Show label text |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: 0
Gap: 4
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Trend/Up/Color | `color/feedback/success` |
| Trend/Down/Color | `color/feedback/error` |
| Trend/Flat/Color | `color/text/secondary` |
| Trend/Icon | `color/feedback/[direction]` |

#### Accessibility

- `role="img"` for decorative trends
- `accessibilityLabel` with direction description
- Icon + text for non-color-dependent communication

---

### Trend Arrow

**Purpose:** Display trend direction icon
**Usage:** Inline trend indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | Direction | `flat` | Trend direction |
| `size` | Size | `md` | Arrow size |
| `color` | Color | — | Custom color |

---

### Trend Label

**Purpose:** Display trend text
**Usage:** Trend descriptions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | Direction | `flat` | Trend direction |
| `value` | Number | — | Trend value |
| `showSign` | Boolean | `true` | Show +/- sign |
| `showArrow` | Boolean | `true` | Show arrow |

---

### Trend Group

**Purpose:** Display trend with context
**Usage:** Performance cards, stats

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | Direction | `flat` | Trend direction |
| `value` | Number | — | Trend value |
| `label` | Text | — | Trend label |
| `period` | String | — | Time period |

---

## 16 Portfolio

### Portfolio Primitive

**Purpose:** Display portfolio information
**Usage:** Portfolio overview, holdings

#### Variants

| Variant | Use Case |
|---------|----------|
| Indicator | Portfolio health |
| Allocation Dot | Asset allocation |
| Holding Badge | Individual holding |
| Risk Level | Risk assessment |
| Diversification Badge | Diversification level |
| Asset Badge | Asset class |
| Institution Badge | Financial institution |
| Broker Badge | Brokerage |
| Goal Badge | Financial goal |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `indicator` | Portfolio variant |
| `size` | Size | `md` | Component size |
| `color` | Color | — | Custom color |
| `label` | Text | — | Label text |
| `value` | Number | — | Numeric value |
| `state` | State | `default` | Interaction state |

---

### Portfolio Indicator

**Purpose:** Display portfolio health status
**Usage:** Portfolio dashboard

#### Token Mapping

```
Portfolio/Indicator/Healthy → color/feedback/success
Portfolio/Indicator/Warning → color/feedback/warning
Portfolio/Indicator/Critical → color/feedback/error
```

---

### Allocation Dot

**Purpose:** Display asset allocation
**Usage:** Pie charts, allocation views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `percentage` | Number | — | Allocation percentage |
| `color` | Color | — | Allocation color |
| `size` | Size | `md` | Dot size |

---

### Holding Badge

**Purpose:** Display holding information
**Usage:** Portfolio holdings list

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Holding name |
| `ticker` | Text | — | Stock ticker |
| `return` | Number | — | Return percentage |

---

### Risk Level

**Purpose:** Display risk level
**Usage:** Investment risk assessment

#### Variants

| Variant | Color | Label |
|---------|-------|-------|
| Low | `color/feedback/success` | Low Risk |
| Medium | `color/feedback/warning` | Medium Risk |
| High | `color/feedback/error` | High Risk |

---

### Diversification Badge

**Purpose:** Display diversification level
**Usage:** Portfolio analysis

#### Variants

| Variant | Color | Label |
|---------|-------|-------|
| Well Diversified | `color/feedback/success` | Well Diversified |
| Moderately Diversified | `color/feedback/warning` | Moderately Diversified |
| Concentrated | `color/feedback/error` | Concentrated |

---

### Asset Badge

**Purpose:** Display asset class
**Usage:** Asset allocation

#### Variants

| Variant | Color | Label |
|---------|-------|-------|
| Stocks | `color/stocks` | Stocks |
| Bonds | `color/bonds` | Bonds |
| ETFs | `color/etfs` | ETFs |
| Cash | `color/cash` | Cash |
| Real Estate | `color/real-estate` | Real Estate |
| Crypto | `color/crypto` | Crypto |

---

### Institution Badge

**Purpose:** Display financial institution
**Usage:** Account institution

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Institution name |
| `logo` | String | — | Institution logo URL |
| `size` | Size | `md` | Badge size |

---

### Broker Badge

**Purpose:** Display brokerage
**Usage:** Investment broker

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Broker name |
| `logo` | String | — | Broker logo URL |
| `size` | Size | `md` | Badge size |

---

### Goal Badge

**Purpose:** Display financial goal
**Usage:** Goal tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Goal name |
| `progress` | Number | — | Goal progress (0-100) |
| `target` | Number | — | Target amount |
| `current` | Number | — | Current amount |

---

## 17 AI

### AI Primitive

**Purpose:** Display AI-related information
**Usage:** AI suggestions, automation status

#### Variants

| Variant | Use Case |
|---------|----------|
| AI Badge | AI-generated content |
| AI Indicator | AI status |
| AI Confidence | Confidence level |
| AI Suggestion | AI suggestion |
| AI Recommendation | AI recommendation |
| AI Thinking | Processing state |
| Automation Enabled | Automation on |
| Automation Disabled | Automation off |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `badge` | AI variant |
| `size` | Size | `md` | Component size |
| `color` | Color | `color/ai` | AI color |
| `confidence` | Number | — | Confidence level (0-100) |
| `state` | State | `default` | Interaction state |

---

### AI Badge

**Purpose:** Display AI-generated indicator
**Usage:** AI content labels

#### Token Mapping

```
AI/Badge/Background → color/ai/subtle
AI/Badge/Text → color/ai
AI/Badge/Icon → icon/ai
```

---

### AI Indicator

**Purpose:** Display AI status
**Usage:** AI processing indicator

#### Token Mapping

```
AI/Indicator/Color → color/ai
AI/Indicator/Pulse → color/ai-subtle
```

---

### AI Confidence

**Purpose:** Display AI confidence level
**Usage:** AI suggestion confidence

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Confidence percentage |
| `showLabel` | Boolean | `true` | Show "Confidence" label |
| `variant` | Variant | `bar` | Display variant |

#### Token Mapping

```
AI/Confidence/High → color/feedback/success
AI/Confidence/Medium → color/feedback/warning
AI/Confidence/Low → color/feedback/error
```

---

### AI Suggestion

**Purpose:** Display AI suggestion
**Usage:** AI-generated suggestions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Suggestion text |
| `confidence` | Number | — | Confidence level |
| `action` | Text | — | Suggested action |
| `onPress` | Function | — | Press handler |

---

### AI Recommendation

**Purpose:** Display AI recommendation
**Usage:** Investment recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Recommendation title |
| `description` | Text | — | Recommendation description |
| `confidence` | Number | — | Confidence level |
| `action` | Text | — | Recommended action |

---

### AI Thinking

**Purpose:** Display AI processing state
**Usage:** AI is thinking

#### Token Mapping

```
AI/Thinking/Color → color/ai
AI/Thinking/Dots → color/ai-subtle
```

---

### Automation Enabled

**Purpose:** Display automation on state
**Usage:** Active automation

#### Token Mapping

```
Automation/Enabled/Background → color/automation/subtle
Automation/Enabled/Text → color/automation
Automation/Enabled/Icon → icon/automation-on
```

---

### Automation Disabled

**Purpose:** Display automation off state
**Usage:** Inactive automation

#### Token Mapping

```
Automation/Disabled/Background → color/background/secondary
Automation/Disabled/Text → color/text/disabled
Automation/Disabled/Icon → icon/automation-off
```

---

## 18 Utility

### Utility Primitive

**Purpose:** Display utility elements
**Usage:** Navigation, interactions

#### Variants

| Variant | Use Case |
|---------|----------|
| Chevron | Disclosure indicator |
| Disclosure | Section disclosure |
| Handle | Sheet handle |
| Drag Handle | Reorder handle |
| Grip | Drag grip |
| Separator | Visual separator |
| Bullet | List bullet |
| Counter | Count indicator |
| Notification Count | Notification count |
| Hotkey Label | Keyboard shortcut |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `chevron` | Utility variant |
| `size` | Size | `md` | Component size |
| `color` | Color | `color/text/tertiary` | Element color |
| `direction` | Direction | `right` | Direction |
| `interactive` | Boolean | `false` | Interactive state |

---

### Chevron

**Purpose:** Display disclosure arrow
**Usage:** Navigation, expand/collapse

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | Direction | `right` | Arrow direction |
| `size` | Size | `md` | Chevron size |
| `color` | Color | `color/text/tertiary` | Chevron color |

#### Token Mapping

```
Chevron/Color → color/text/tertiary
Chevron/Interactive/Color → color/action/primary
```

---

### Disclosure

**Purpose:** Display section disclosure
**Usage:** Expandable sections

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `expanded` | Boolean | `false` | Expanded state |
| `size` | Size | `md` | Disclosure size |
| `color` | Color | `color/text/tertiary` | Disclosure color |

---

### Handle

**Purpose:** Display sheet handle
**Usage:** Bottom sheets, modals

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | Color | `color/border` | Handle color |
| `width` | Number | 40 | Handle width |

#### Token Mapping

```
Handle/Color → color/border
Handle/Width → 40px
Handle/Height → 4px
Handle/Radius → radius/full
```

---

### Drag Handle

**Purpose:** Display reorder handle
**Usage:** List reordering

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Size | `md` | Handle size |
| `color` | Color | `color/text/tertiary` | Handle color |

---

### Grip

**Purpose:** Display drag grip
**Usage:** Drag and drop

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Size | `md` | Grip size |
| `color` | Color | `color/text/tertiary` | Grip color |

---

### Separator

**Purpose:** Display visual separator
**Usage:** Between elements

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | Orientation | `horizontal` | Separator orientation |
| `color` | Color | `color/border` | Separator color |
| `thickness` | Number | 1 | Separator thickness |

---

### Bullet

**Purpose:** Display list bullet
**Usage:** Unordered lists

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `style` | Style | `disc` | Bullet style |
| `color` | Color | `color/text/primary` | Bullet color |
| `size` | Size | `md` | Bullet size |

---

### Counter

**Purpose:** Display count indicator
**Usage:** Item counts, badges

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `count` | Number | — | Count value |
| `maxCount` | Number | 99 | Max displayed count |
| `size` | Size | `md` | Counter size |
| `color` | Color | `color/feedback/error` | Counter color |

#### Token Mapping

```
Counter/Background → color/feedback/error
Counter/Text → color/text/on-primary
Counter/Border → color/surface
```

---

### Notification Count

**Purpose:** Display notification badge
**Usage:** Unread notifications

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `count` | Number | — | Notification count |
| `maxCount` | Number | 99 | Max displayed count |
| `visible` | Boolean | `true` | Show/hide |
| `size` | Size | `md` | Badge size |

---

### Hotkey Label

**Purpose:** Display keyboard shortcut
**Usage:** Keyboard shortcuts, accessibility

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `keys` | String[] | — | Key combination |
| `size` | Size | `md` | Label size |

#### Token Mapping

```
Hotkey/Background → color/background/secondary
Hotkey/Text → color/text/secondary
Hotkey/Border → color/border
Hotkey/Radius → radius/sm
```

---

## 19 Chart Primitives

### Chart Primitive

**Purpose:** Display chart elements
**Usage:** Charts, graphs, visualizations

#### Variants

| Variant | Use Case |
|---------|----------|
| Chart Dot | Data point |
| Legend | Chart legend |
| Axis Label | Axis label |
| Grid Line | Grid line |
| Goal Line | Goal marker |
| Reference Line | Reference marker |
| Tooltip | Data tooltip |
| Selection Dot | Selected data point |
| Chart Marker | Chart marker |
| Range Handle | Range selector |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `dot` | Chart variant |
| `size` | Size | `md` | Component size |
| `color` | Color | `color/action/primary` | Element color |
| `state` | State | `default` | Interaction state |
| `interactive` | Boolean | `false` | Interactive state |

---

### Chart Dot

**Purpose:** Display data point
**Usage:** Line charts, scatter plots

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Data value |
| `color` | Color | `color/action/primary` | Dot color |
| `size` | Size | `sm` | Dot size |
| `selected` | Boolean | `false` | Selected state |

#### Token Mapping

```
Chart/Dot/Default → color/action/primary
Chart/Dot/Selected → color/action/primary
Chart/Dot/Border → color/surface
Chart/Dot/Size → 8px
```

---

### Legend

**Purpose:** Display chart legend
**Usage:** Chart legends

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | LegendItem[] | — | Legend items |
| `position` | Position | `bottom` | Legend position |
| `orientation` | Orientation | `horizontal` | Legend orientation |

---

### Axis Label

**Purpose:** Display axis label
**Usage:** Chart axes

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `axis` | Axis | `x` | Axis type |
| `color` | Color | `color/text/tertiary` | Label color |

---

### Grid Line

**Purpose:** Display grid line
**Usage:** Chart grid

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `orientation` | Orientation | `horizontal` | Line orientation |
| `color` | Color | `color/border` | Line color |
| `style` | Style | `solid` | Line style |

---

### Goal Line

**Purpose:** Display goal marker
**Usage:** Goal visualization

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Goal value |
| `label` | Text | — | Goal label |
| `color` | Color | `color/goal` | Line color |

#### Token Mapping

```
Goal/Line/Color → color/goal
Goal/Line/Label → color/text/secondary
Goal/Line/Style → dashed
```

---

### Reference Line

**Purpose:** Display reference marker
**Usage:** Benchmark, average

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Reference value |
| `label` | Text | — | Reference label |
| `color` | Color | `color/text/tertiary` | Line color |

---

### Tooltip

**Purpose:** Display data tooltip
**Usage:** Chart tooltips

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Text | — | Tooltip value |
| `label` | Text | — | Tooltip label |
| `position` | Position | `top` | Tooltip position |

#### Token Mapping

```
Chart/Tooltip/Background → color/text/primary
Chart/Tooltip/Text → color/text/on-primary
Chart/Tooltip/Radius → radius/sm
Chart/Tooltip/Padding → spacing/2
```

---

### Selection Dot

**Purpose:** Display selected data point
**Usage:** Selected chart point

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Selected value |
| `color` | Color | `color/action/primary` | Selection color |
| `size` | Size | `md` | Dot size |

---

### Chart Marker

**Purpose:** Display chart marker
**Usage:** Special chart points

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Marker label |
| `color` | Color | `color/action/primary` | Marker color |
| `shape` | Shape | `diamond` | Marker shape |

---

### Range Handle

**Purpose:** Display range selector
**Usage:** Date range, value range

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | Position | `start` | Handle position |
| `color` | Color | `color/action/primary` | Handle color |
| `interactive` | Boolean | `true` | Interactive state |

---

## 20 Empty States

### Empty State Primitive

**Purpose:** Display empty content state
**Usage:** No data, no results, first time

#### Variants

| Variant | Use Case |
|---------|----------|
| Icon | Simple empty state |
| Illustration | Rich empty state |
| Message | Text-only empty state |
| Action | Empty state with action |
| Suggestion | Empty state with suggestion |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `icon` | Empty state variant |
| `icon` | IconName | — | Empty state icon |
| `illustration` | String | — | Illustration URL |
| `title` | Text | — | Empty state title |
| `description` | Text | — | Empty state description |
| `action` | Action | — | Primary action |
| `suggestion` | Text | — | Suggestion text |

#### Auto Layout

```
Direction: Vertical
Primary Axis: Center
Counter Axis: Center
Padding: [spacing/8]
Gap: [spacing/4]
```

#### Variables Used

| Variable | Token |
|----------|-------|
| EmptyState/Icon | `color/text/disabled` |
| EmptyState/Title | `color/text/primary` |
| EmptyState/Description | `color/text/secondary` |
| EmptyState/Action | `color/action/primary` |
| EmptyState/Suggestion | `color/text/tertiary` |

#### Accessibility

- `role="status"`
- Announce empty state to screen readers
- Action button keyboard accessible

---

### Icon Empty State

**Purpose:** Display simple empty state
**Usage:** No data available

#### Token Mapping

```
EmptyState/Icon/Color → color/text/disabled
EmptyState/Icon/Size → 48px
```

---

### Illustration Empty State

**Purpose:** Display rich empty state
**Usage:** First time experience

#### Token Mapping

```
EmptyState/Illustration/MaxWidth → 240px
EmptyState/Illustration/MaxHeight → 180px
```

---

### Message Empty State

**Purpose:** Display text-only empty state
**Usage:** Simple messages

---

### Action Empty State

**Purpose:** Display empty state with action
**Usage:** No results with retry

---

### Suggestion Empty State

**Purpose:** Display empty state with suggestion
**Usage:** Help users understand next steps

---

## 21 Feedback

### Feedback Primitive

**Purpose:** Display feedback messages
**Usage:** Inline messages, validation

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Message | `color/text/primary` | General message |
| Error | `color/feedback/error` | Error message |
| Success | `color/feedback/success` | Success message |
| Warning | `color/feedback/warning` | Warning message |
| Helper | `color/text/tertiary` | Helper text |
| Validation | `color/feedback/error` | Validation error |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `message` | Feedback variant |
| `text` | Text | — | Feedback text |
| `icon` | IconName | — | Feedback icon |
| `size` | Size | `md` | Text size |
| `color` | Color | — | Custom color |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: 0
Gap: 6
```

#### Variables Used

| Variable | Token |
|----------|-------|
| Feedback/Message/Color | `color/text/primary` |
| Feedback/Error/Color | `color/feedback/error` |
| Feedback/Success/Color | `color/feedback/success` |
| Feedback/Warning/Color | `color/feedback/warning` |
| Feedback/Helper/Color | `color/text/tertiary` |
| Feedback/Validation/Color | `color/feedback/error` |

#### Accessibility

- `role="alert"` for error messages
- `role="status"` for success messages
- Announce feedback to screen readers

---

### Inline Message

**Purpose:** Display inline feedback
**Usage:** General information

#### Token Mapping

```
Inline/Message/Color → color/text/primary
Inline/Message/Icon → color/text/secondary
```

---

### Inline Error

**Purpose:** Display inline error
**Usage:** Form validation errors

#### Token Mapping

```
Inline/Error/Color → color/feedback/error
Inline/Error/Icon → icon/error
```

---

### Inline Success

**Purpose:** Display inline success
**Usage:** Successful actions

#### Token Mapping

```
Inline/Success/Color → color/feedback/success
Inline/Success/Icon → icon/check
```

---

### Inline Warning

**Purpose:** Display inline warning
**Usage:** Caution messages

#### Token Mapping

```
Inline/Warning/Color → color/feedback/warning
Inline/Warning/Icon → icon/warning
```

---

### Helper Text

**Purpose:** Display helper text
**Usage:** Form helpers, hints

#### Token Mapping

```
Helper/Text/Color → color/text/tertiary
Helper/Text/Size → typography/micro
```

---

### Validation Message

**Purpose:** Display validation feedback
**Usage:** Form validation

#### Token Mapping

```
Validation/Message/Color → color/feedback/error
Validation/Message/Icon → icon/error
Validation/Message/Size → typography/micro
```

---

## Component Properties Reference

Use these property types across all primitives:

| Property | Type | Description |
|----------|------|-------------|
| `variant` | Variant | Visual style variant |
| `size` | Size | Dimensional variant |
| `color` | Color | Custom color override |
| `disabled` | Boolean | Disabled state |
| `selected` | Boolean | Selected state |
| `focused` | Boolean | Focused state |
| `pressed` | Boolean | Pressed state |
| `loading` | Boolean | Loading state |
| `leadingIcon` | IconName | Leading icon |
| `trailingIcon` | IconName | Trailing icon |
| `icon` | IconName | Single icon |
| `text` | Text | Text content |
| `label` | Text | Label text |
| `onPress` | Function | Press handler |
| `onClose` | Function | Close handler |

### Avoid Duplication

Use properties instead of creating duplicate components:

| Instead of... | Use... |
|---------------|--------|
| ButtonPrimary, ButtonSecondary | Button with `variant="primary"` |
| BadgeSuccess, BadgeError | Badge with `variant="success"` |
| IconSmall, IconMedium | Icon with `size="sm"` |

---

## Auto Layout Rules

Every primitive must follow these Auto Layout rules:

### Direction

| Primitive | Direction | Reason |
|-----------|-----------|--------|
| Text | Horizontal | Text flows horizontally |
| Icon | Horizontal | Single element |
| Button | Horizontal | Content flows horizontally |
| Badge | Horizontal | Content flows horizontally |
| List Item | Horizontal | Content flows horizontally |
| Card | Vertical | Sections stack vertically |
| Modal | Vertical | Header, content, footer stack |

### Primary Axis

| Scenario | Setting | Reason |
|----------|---------|--------|
| Standalone | Hug Content | Wrap content |
| In container | Fill Container | Fill available space |
| Centered | Center | Center content |

### Counter Axis

| Scenario | Setting | Reason |
|----------|---------|--------|
| Single line | Center | Center vertically |
| Multi-line | Stretch | Fill height |
| Fixed height | Center | Center vertically |

### Padding

Use spacing tokens for all padding:

| Token | Value | Use Case |
|-------|-------|----------|
| `spacing/1` | 4px | Tight padding |
| `spacing/2` | 8px | Small padding |
| `spacing/3` | 12px | Medium padding |
| `spacing/4` | 16px | Default padding |
| `spacing/6` | 24px | Large padding |
| `spacing/8` | 32px | Extra large padding |

### Gap

Use spacing tokens for all gaps:

| Token | Value | Use Case |
|-------|-------|----------|
| `spacing/1` | 4px | Tight gap |
| `spacing/2` | 8px | Small gap |
| `spacing/3` | 12px | Medium gap |
| `spacing/4` | 16px | Default gap |

### Never

- Use absolute positioning
- Use fixed pixel values for spacing
- Ignore Auto Layout

---

## Validation Checklist

Before finishing any primitive, review:

### Can another primitive already solve this?

- [ ] Check existing primitives
- [ ] Avoid duplication
- [ ] Reuse where possible

### Can properties replace duplication?

- [ ] Use variant property
- [ ] Use size property
- [ ] Use boolean properties
- [ ] Avoid creating new components

### Can engineering simplify this?

- [ ] Keep implementation simple
- [ ] Avoid complex conditionals
- [ ] Use native components where possible
- [ ] Support platform differences

### Can Auto Layout improve this?

- [ ] Use Auto Layout for all primitives
- [ ] Use Hug Content where appropriate
- [ ] Use Fill Container where appropriate
- [ ] Use spacing tokens

### Every Primitive Must Include

- [ ] Purpose
- [ ] Usage
- [ ] Variants
- [ ] States
- [ ] Properties
- [ ] Auto Layout
- [ ] Variables Used
- [ ] Accessibility
- [ ] Engineering Notes
- [ ] Do / Don't
- [ ] Examples

---

## Summary

The Primitive Component Library contains:

| Section | Components |
|---------|------------|
| Typography | 11 |
| Icons | 9 |
| Labels | 9 |
| Badges | 11 |
| Chips | 7 |
| Tags | 14 |
| Indicators | 12 |
| Avatar | 6 |
| Dividers | 6 |
| Progress | 7 |
| Loaders | 8 |
| Status | 12 |
| Money | 19 |
| Percentage | 8 |
| Trend | 3 |
| Portfolio | 9 |
| AI | 8 |
| Utility | 10 |
| Chart Primitives | 10 |
| Empty States | 5 |
| Feedback | 6 |
| **Total** | **191** |

### Key Principles

1. **Smallest Reusable Layer** — Every primitive is atomic
2. **Token-Driven** — All styling uses semantic tokens
3. **Auto Layout** — No absolute positioning
4. **Accessible** — WCAG AA compliant
5. **Platform Adaptive** — iOS, Web, Android
6. **Engineering Ready** — Implementation notes included

### Next Steps

1. **Chapter 5** — Composite Components (assembled from primitives)
2. **Chapter 6** — Patterns & Templates
3. **Chapter 7** — Figma Implementation Guide

---

**End of Primitive Component Library**
