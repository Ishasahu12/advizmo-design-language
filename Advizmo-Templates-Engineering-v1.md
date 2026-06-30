# Advizmo Templates — Engineering Reference

**Version 1.0**
**Purpose: Platform implementation mapping for the 8 production templates**

---

## Overview

The 8 production templates demonstrate the complete Advizmo Design Language applied to real iOS fintech screens. Each template is a self-contained HTML file using native CSS with the design system's semantic tokens.

---

## Template Architecture

### Shared Components Per Template

Every template uses these core design system components:

| Component | Usage |
|-----------|-------|
| Status Bar | Device mockup (time, signal, battery) |
| Navigation Bar | Title, back button, action icons |
| Tab Bar | 5 tabs: Home, Portfolio, Transactions, Goals, More |
| Cards | Container for grouped content |
| Typography | Inter for UI, IBM Plex Sans for financial values |
| Buttons | Primary (blue), Secondary (gray), Destructive (red) |
| Toggles | On/off switches for settings |
| Badges | Status indicators |
| Icons | Emoji-based for clarity, SVG for production |

---

## 01 Dashboard Template

**File:** `Advizmo-Template-Dashboard.html`
**Screens:** 1 (Dashboard Overview)

### Layout Structure

```
Status Bar (32px)
Nav Bar (56px)
Content
├── Net Worth Hero Card (Net Worth KPI + Sparkline)
├── Accounts Section → Card → Account Rows (3)
├── Transactions Section → Card → Transaction Rows (5)
├── AI Insights Section → Insight Cards (2)
└── Goals Section → Card → Goal Rows (2)
Tab Bar (56px + safe area)
```

### Components Used

| Component | Token | State |
|-----------|-------|-------|
| Net Worth Hero | `surface/hero`, `text/inverse`, `color/brand` | Default |
| Sparkline | `chart/line`, `chart/area` | Default |
| Account Row | `surface/card`, `text/primary`, `text/secondary` | Default, Hover |
| Transaction Row | `surface/card`, `text/primary`, `color/positive`, `color/negative` | Default, Hover |
| AI Insight Card | `surface/insight`, `color/ai` | Default |
| Progress Bar | `color/progress`, `color/progress-bg` | Default |

### Token Mapping

```
Net Worth Hero:
  background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)
  → use: gradient(surface/brand)

Portfolio Value:
  font-family: 'IBM Plex Sans'
  font-size: 36px
  font-weight: 700
  → use: typography/financial-xl

Change Amount:
  color: #10B981 (green-500)
  → use: color/positive

Tab Bar:
  background: #FFFFFF
  border-top: 1px solid #E5E7EB
  → use: surface/page, border/default
```

### Platform Mapping

| Property | iOS (SwiftUI) | Web (CSS) | Android (Compose) |
|----------|---------------|-----------|-----------------|
| Hero background | `LinearGradient` | `linear-gradient()` | `Brush.linearGradient()` |
| Tab bar | `TabView` | `position: fixed; bottom: 0` | `BottomNavigation` |
| Card radius | `cornerRadius(12)` | `border-radius: 12px` | `RoundedCorner(12.dp)` |
| Safe area | `GeometryReader` | `env(safe-area-inset-bottom)` | `WindowInsets.navigationBars` |

---

## 02 Portfolio Template

**File:** `Advizmo-Template-Portfolio.html`
**Screens:** 1 (Portfolio Detail)

### Layout Structure

```
Status Bar
Nav Bar (with back)
Content
├── Period Selector (1D, 1W, 1M, 3M, 1Y, All)
├── Portfolio Hero Card (Total Value + Chart)
├── Allocation Card → Donut Chart + Legend
├── Performance Card → Metrics Grid (2x2)
└── Holdings Card → Holding Rows (5)
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Period Selector | `surface/tab`, `color/selected` | Segmented control variant |
| Donut Chart | `chart/donut`, semantic palette | 4 segments |
| Legend | `text/label`, semantic colors | Dot + name + value |
| Holding Row | `surface/card`, `text/primary` | Icon + name + balance + change |
| Performance Metrics | `typography/financial-m` | Grid layout |

### Donut Chart Data

```
US Stocks: 40% (#3B82F6) → $245,139
Intl Stocks: 25% (#10B981) → $153,212
Bonds: 15% (#F97316) → $91,927
REITs: 20% (#A855F7) → $122,569
```

---

## 03 Transactions Template

**File:** `Advizmo-Template-Transactions.html`
**Screens:** 1 (Transaction List)

### Layout Structure

```
Status Bar
Nav Bar
Content
├── Search Bar (icon + input)
├── Filter Chips (horizontal scroll: All, Income, Food, Shopping, Bills, Investments)
├── Summary Card (Income | Expenses | Net — 3 columns)
└── Date Groups
    ├── June 28 → Card → 1 transaction
    ├── June 27 → Card → 1 transaction
    ├── June 26 → Card → 2 transactions
    ├── June 25 → Card → 3 transactions
    └── June 24 → Card → 2 transactions
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Search Bar | `surface/subtle`, `text/placeholder` | Input with icon |
| Filter Chips | `surface/chip`, `color/selected` | Horizontal scroll |
| Summary Card | `surface/card` | 3-column grid |
| Transaction Row | Semantic amount colors | Icon + meta + amount |
| Date Group | `text/secondary`, `typography/label` | Sticky header |

### Amount Formatting

```
Positive (income): color: #059669 (green-600), prefix: +
Negative (expense): color: #111827 (text-primary), prefix: -
```

---

## 04 Goals Template

**File:** `Advizmo-Template-Goals.html`
**Screens:** 1 (Goals List)

### Layout Structure

```
Status Bar
Nav Bar (with + button)
Content
├── Summary Row (2 cards: Total Saved, This Month)
└── Goal Cards (4)
    ├── House Down Payment (68%, green)
    ├── Japan Trip (91%, purple)
    ├── New Car Fund (27%, orange)
    └── Emergency Fund (100%, green — completed)
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Summary Card | `surface/card` | 2-column grid |
| Goal Card | `surface/card` | Header + progress + footer |
| Progress Bar | `color/progress-{color}` | Height: 8px, radius: full |
| Completed Badge | `color/success-bg`, `color/success` | Pill badge |

### Progress Bar Tokens

```
Progress fill colors:
  green-500: Goal on track, >50% complete
  orange-500: Goal at risk, <50% complete
  green-600: Goal achieved (100%)

Progress background:
  color: #F3F4F6 (gray-100)
  → use: surface/subtle
```

---

## 05 AI Insights Template

**File:** `Advizmo-Template-AI.html`
**Screens:** 1 (AI Insights Feed)

### Layout Structure

```
Status Bar
Nav Bar (with back + add)
Content
├── AI Header (avatar + greeting + count)
└── Insight Cards (4)
    ├── Tax Strategy (Tax-Loss Harvesting)
    ├── Safe to Invest ($1,500)
    ├── Spending Alert (Dining up 34%)
    └── Portfolio (Beating S&P 500 by 2.4%)
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| AI Header | `gradient(ai)`, `surface/ai` | Purple gradient |
| Insight Card | `surface/card` | Header + body + footer |
| Confidence Bar | `chart/confidence` | Small progress bar |
| Action Buttons | `button/primary`, `button/secondary`, `button/purple` | 3 variants |

### AI Color Palette

```
AI Primary: #A855F7 (purple-500)
AI Background: #FAF5FF (purple-50)
AI Border: #E9D5FF (purple-200)
Confidence High: #10B981 (green-500)
Confidence Medium: #F97316 (orange-500)
Confidence Low: #EF4444 (red-500)
```

---

## 06 Automation Template

**File:** `Advizmo-Template-Automation.html`
**Screens:** 1 (Automation Management)

### Layout Structure

```
Status Bar
Nav Bar (with + button)
Content
├── Summary Row (3 stats: Active, /month, Success %)
└── Automation Cards (5)
    ├── Monthly Index Fund Investment (On)
    ├── VTSAX Dollar-Cost Averaging (On)
    ├── House Down Payment Saver (On)
    ├── Rent Payment (On)
    └── Utilities Auto-Pay (Paused)
Section: Recent Activity (3 transactions)
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Summary Stat | `surface/card` | 3-column grid |
| Automation Card | `surface/card` | Header + footer |
| Toggle | `color/selected`, `color/default` | iOS-style toggle |
| Status Dot | Semantic colors | Running (green), Paused (orange) |

### Toggle States

```
On:  background: #2563EB (blue-600), knob: white, right
Off: background: #F3F4F6 (gray-100), knob: #9CA3AF, left
Transition: 200ms ease
```

---

## 07 Bills Template

**File:** `Advizmo-Template-Bills.html`
**Screens:** 1 (Bills Overview)

### Layout Structure

```
Status Bar
Nav Bar (with + button)
Content
├── Summary Row (Due This Month, Paid This Month)
Section: Due Soon (2 bills)
├── Rent — Due Jun 28
└── PG&E — Est. ~$120
Section: Upcoming (3 bills)
├── Comcast — $79
├── Term Life — $124 (quarterly)
└── Health Insurance — $0 (employer covered)
Section: Recently Paid (2)
Tab Bar
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Bill Card | `surface/card` | Icon + info + amounts |
| Due Status | Semantic colors | Due Soon (orange), Paid (green) |
| Estimated Badge | `color/info-bg`, `color/info` | For variable amounts |

### Bill Status Colors

```
Due Soon:   color: #EA580C (orange-600)
Paid:       color: #059669 (green-600)
Auto-pay:   color: #2563EB (blue-600)
Estimated:  color: #6B7280 (gray-500)
```

---

## 08 Settings Template

**File:** `Advizmo-Template-Settings.html`
**Screens:** 1 (Settings List)

### Layout Structure

```
Status Bar
Nav Bar (with back)
Content
├── Profile Card (avatar + name + badge + edit)
Section: Connected Accounts (3)
├── Chase Bank
├── Fidelity
└── Marcus by Goldman Sachs
Section: Security (3)
├── Face ID (toggle)
├── Change PIN
└── Two-Factor Auth
Section: Notifications (4 — all toggles)
Section: Preferences (3)
Section: Support (4)
Section: Danger Zone (2)
App Info
```

### Components Used

| Component | Token | Notes |
|-----------|-------|-------|
| Profile Card | `surface/card` | Avatar + info row |
| Settings Row | `surface/card` | Icon + label + value/arrow |
| Toggle | Same as Automation | On/off |
| Danger Card | `border/error`, `color/error-bg` | Red border variant |

### Settings Row Token Mapping

```
Row padding:     14px 16px
Icon size:       32x32px, radius: 8px
Label:           typography/body-m, weight: 500
Description:     typography/body-s, color: text-tertiary
Divider:         1px solid #E5E7EB
Arrow:           #9CA3AF, 16x16px
```

---

## Shared Token Reference

### Typography

```
Financial Display:  'IBM Plex Sans', 700, 36px
Financial Medium:   'IBM Plex Sans', 600, 22px
Financial Small:    'IBM Plex Sans', 500, 15px
UI Title:          'Inter', 600, 18px
UI Body:           'Inter', 400, 14px
UI Caption:        'Inter', 400, 12px
UI Label:          'Inter', 600, 12px
```

### Colors

```
Brand Blue:      #3B82F6 / #2563EB / #1D4ED8
Positive Green:  #10B981 / #059669 / #047857
Negative Red:    #EF4444 / #DC2626 / #B91C1C
Attention Orange:#F97316 / #EA580C
AI Purple:       #A855F7 / #9333EA
Surface:         #FFFFFF
Page:            #F9FAFB
Border:          #E5E7EB
Text Primary:    #111827
Text Secondary: #4B5563
Text Tertiary:  #6B7280
```

### Spacing

```
4px:  Tight padding (chips, badges)
8px:  Icon gaps, small padding
12px: List item padding
16px: Card padding, section gaps
24px: Section separators
```

### Radius

```
8px:   Buttons, chips, inputs
12px:  Cards, modals
9999px: Pills, avatars, toggles
```

---

## Engineering Checklist Per Template

- [ ] All colors use semantic tokens (no raw hex in components)
- [ ] All spacing uses spacing tokens
- [ ] All radius uses radius tokens
- [ ] Typography uses semantic roles
- [ ] Financial values use IBM Plex Sans
- [ ] Touch targets minimum 44x44pt
- [ ] Tab bar uses safe area insets
- [ ] Toggle animations are 200ms ease
- [ ] Cards use box-shadow token (not hardcoded)
- [ ] AI purple used only for AI-specific elements
- [ ] Green used only for positive financial values
- [ ] No decorative gradients inside charts

---

**End of Templates Engineering Reference**