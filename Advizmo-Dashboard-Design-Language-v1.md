# Advizmo Dashboard Design Language

The blueprint for every dashboard Advizmo will ever build. This chapter defines principles, hierarchy, rhythm, and reusable dashboard patterns that scale across iPhone, iPad, Web, and Future Desktop.

---

## Table of Contents

1. [Dashboard Philosophy](#1-dashboard-philosophy)
2. [Information Hierarchy](#2-information-hierarchy)
3. [Dashboard Anatomy](#3-dashboard-anatomy)
4. [Widget System](#4-widget-system)
5. [Hero Section](#5-hero-section)
6. [KPI Language](#6-kpi-language)
7. [Financial Storytelling](#7-financial-storytelling)
8. [Dashboard Cards](#8-dashboard-cards)
9. [Dashboard Charts](#9-dashboard-charts)
10. [Widget Behaviour](#10-widget-behaviour)
11. [Personalization](#11-personalization)
12. [Empty Dashboards](#12-empty-dashboards)
13. [Dashboard States](#13-dashboard-states)
14. [Dashboard Motion](#14-dashboard-motion)
15. [Accessibility](#15-accessibility)
16. [Responsive Behaviour](#16-responsive-behaviour)
17. [Documentation](#17-documentation)

---

## 1. Dashboard Philosophy

### The Dashboard Exists To Answer

| Question | What It Means | Dashboard Element |
|----------|---------------|-------------------|
| **How am I doing?** | Current financial position | Hero metric, net worth |
| **What needs attention?** | Items requiring action | Alerts, upcoming bills, warnings |
| **What should I do next?** | Recommended actions | AI insights, quick actions |
| **How has my position changed?** | Trends and changes | Charts, KPI changes, history |
| **What opportunities exist today?** | Time-sensitive items | Recommendations, automation |

### Core Principles

#### One Primary Financial Insight
The dashboard should highlight one primary insight — the most important number that answers "How am I doing?"

#### One Primary Action
The dashboard should suggest one primary action — the most important thing the user should do today.

#### Progressive Disclosure
Show summary first. Details on demand. Never overwhelm.

#### Confidence Before Complexity
Start with simple, confidence-building information. Complex analysis comes later.

#### Summary Before Detail
Show the big picture first. Drill down when requested.

#### Context Before Action
Provide context before suggesting actions. Users need to understand before they act.

### Dashboard Rules
1. **Never overwhelm** — If in doubt, remove
2. **5-second rule** — Users should understand their situation in 5 seconds
3. **One primary metric** — Never compete for attention
4. **Purposeful elements** — Every element must answer one of the 5 questions
5. **Calm presentation** — No urgency, no anxiety, no noise

---

## 2. Information Hierarchy

### Hierarchy Order

Every dashboard should communicate information in this order:

#### 1. Primary Information
The most important data on the dashboard.

**Examples**: Net worth, total portfolio value, available cash
**Visual Treatment**: Largest typography, highest contrast, top position

#### 2. Secondary Information
Supporting data that adds context.

**Examples**: Daily change, monthly performance, account count
**Visual Treatment**: Medium typography, adjacent to primary

#### 3. Supporting Information
Additional details that help understanding.

**Examples**: Account types, last updated, transaction categories
**Visual Treatment**: Smaller typography, accessible but not dominant

#### 4. Historical Context
How things have changed over time.

**Examples**: 30-day performance, year-to-date returns, historical trends
**Visual Treatment**: Charts, trend lines, comparison data

#### 5. Future Forecast
What might happen next.

**Examples**: Projected growth, estimated returns, forecasted bills
**Visual Treatment**: Subtle indicators, dashed lines, projections

#### 6. Recommendations
What the user should do.

**Examples**: AI insights, suggested actions, optimization tips
**Visual Treatment**: Prominent but not pushy, clear CTAs

#### 7. Metadata
Technical information for reference.

**Examples**: Account numbers, timestamps, system IDs
**Visual Treatment**: Smallest typography, lowest contrast

---

## 3. Dashboard Anatomy

### Dashboard Regions

```
┌─────────────────────────────────────────┐
│           Top Navigation                │
├─────────────────────────────────────────┤
│           Greeting                      │
├─────────────────────────────────────────┤
│         Financial Summary               │
│         (Hero Section)                  │
├─────────────────────────────────────────┤
│   Quick Actions    │   AI Insights      │
├────────────────────┴────────────────────┤
│         Portfolio Snapshot              │
├─────────────────────────────────────────┤
│         Goals Progress                  │
├─────────────────────────────────────────┤
│     Upcoming Bills   │   Automation     │
├──────────────────────┴─────────────────-┤
│         Transactions                    │
├─────────────────────────────────────────┤
│         Investments                     │
├─────────────────────────────────────────┤
│         Charts                          │
├─────────────────────────────────────────┤
│         Activity                        │
├─────────────────────────────────────────┤
│           Footer                        │
└─────────────────────────────────────────┘
```

### Region Purposes

| Region | Purpose |
|--------|---------|
| **Top Navigation** | App navigation, settings, profile |
| **Greeting** | Personal connection, time context |
| **Financial Summary** | Primary metric, net worth, hero |
| **Quick Actions** | Common tasks, shortcuts |
| **AI Insights** | Recommendations, suggestions |
| **Portfolio Snapshot** | Investment overview |
| **Goals Progress** | Goal tracking, milestones |
| **Upcoming Bills** | Bills due, payment schedule |
| **Automation** | Automated actions, recurring |
| **Transactions** | Recent activity |
| **Investments** | Investment details |
| **Charts** | Visual data, trends |
| **Activity** | History, log |
| **Footer** | Legal, links |

---

## 4. Widget System

### Widget Sizes

| Size | Width | Usage |
|------|-------|-------|
| **Small** | 1 column | Single metric, quick info |
| **Medium** | 2 columns | Card with detail |
| **Large** | 3 columns | Detailed view |
| **Full** | 4 columns | Complete section |

### Widget Properties

| Property | Description |
|----------|-------------|
| **Expandable** | Can expand to show more detail |
| **Collapsible** | Can collapse to show less |
| **Pinned** | Can be pinned to top |
| **Reorderable** | Can be moved by user |
| **Refreshable** | Can be refreshed independently |
| **Configurable** | Can be customized |

### Widget Rules
1. **Consistent padding** — 16px internal padding
2. **Consistent spacing** — 16px between widgets
3. **Clear hierarchy** — Title, content, actions
4. **Purposeful** — Every widget answers one question
5. **Responsive** — Adapts to screen size

---

## 5. Hero Section

### Hero Metrics

The hero section displays one primary metric:

| Metric | When to Use |
|--------|-------------|
| **Net Worth** | Default for most users |
| **Safe To Invest** | For active investors |
| **Available Cash** | For users focused on liquidity |
| **Portfolio Value** | For investment-focused users |
| **Financial Health Score** | For users focused on overall health |

### Hero Rules
1. **One primary metric** — Never compete for attention
2. **Large typography** — 32px minimum
3. **Clear context** — Show change, timeframe, trend
4. **Calm presentation** — No flashing, no urgency
5. **Accessible** — High contrast, clear labels

### Hero Layout

```
┌─────────────────────────────────────────┐
│  Net Worth                              │
│  $124,500.00                            │
│  +$2,450.00 (2.0%) today               │
│  [View Details]                         │
└─────────────────────────────────────────┘
```

---

## 6. KPI Language

### KPI Components

Every KPI should contain:

| Component | Required | Description |
|-----------|----------|-------------|
| **Label** | Yes | What this KPI measures |
| **Value** | Yes | Current value |
| **Change** | Yes | Change from previous period |
| **Timeframe** | Yes | Period of change |
| **Trend** | Yes | Direction indicator |
| **Context** | Yes | Additional context |
| **CTA** | Optional | Call to action |

### KPI Rules
1. **Never display numbers without context** — Always show change and timeframe
2. **Clear labels** — Users should understand what they're looking at
3. **Consistent formatting** — Same format across all KPIs
4. **Accessible** — Screen readers can understand
5. **Responsive** — Works at all sizes

### KPI Format

```
Portfolio Performance
+$2,450.00 (2.0%) today
↗ Upward trend
View Details
```

---

## 7. Financial Storytelling

### The Financial Narrative

The dashboard should tell a story:

```
Yesterday          Today           Tomorrow
    ↓                ↓                ↓
Portfolio grew    Because of      Suggested next
by 2.0%          recurring       action: Increase
                  investments     monthly contribution
```

### Storytelling Rules
1. **Cause and effect** — Show why things happened
2. **Time progression** — Past → Present → Future
3. **Actionable insights** — Suggest what to do next
4. **Calm presentation** — No urgency, no anxiety
5. **Clear language** — Plain English, no jargon

### Storytelling Examples

| Section | Content |
|---------|---------|
| **Yesterday** | "Your portfolio grew by 2.0% this week" |
| **Today** | "This is because of your recurring investments" |
| **Tomorrow** | "Consider increasing your monthly contribution" |

---

## 8. Dashboard Cards

### Card Types

| Card | Purpose | Priority |
|------|---------|----------|
| **Net Worth** | Total financial position | High |
| **Cash Available** | Liquid assets | High |
| **Safe To Invest** | Investable surplus | Medium |
| **Portfolio** | Investment overview | Medium |
| **Upcoming Bills** | Bills due soon | High |
| **Emergency Fund** | Safety net status | Medium |
| **Automation** | Automated actions | Low |
| **Goal Progress** | Goal tracking | Medium |
| **Tax Savings** | Tax optimization | Low |
| **Recurring Investments** | Regular investments | Low |
| **Investment Performance** | Investment returns | Medium |
| **AI Recommendation** | Smart suggestions | Medium |
| **Financial Health** | Overall health score | Medium |
| **Market Summary** | Market conditions | Low |
| **Subscription Status** | Recurring expenses | Low |

### Card Structure

```
┌─────────────────────────────────────────┐
│  Card Title              [Action]       │
├─────────────────────────────────────────┤
│  Primary Metric                        │
│  $124,500.00                           │
│  +$2,450.00 (2.0%) today              │
├─────────────────────────────────────────┤
│  Supporting Information                │
│  Last updated 2 minutes ago            │
└─────────────────────────────────────────┘
```

---

## 9. Dashboard Charts

### When to Use Charts

| Situation | Chart Type |
|-----------|------------|
| **Trend over time** | Line chart |
| **Composition** | Donut chart |
| **Comparison** | Bar chart |
| **Goal progress** | Progress ring |
| **Cash flow** | Area chart |
| **Allocation** | Pie chart |

### When NOT to Use Charts
- Single data point — Use text
- Simple comparison — Use text
- Detailed data — Use table
- Non-visual data — Use text

### Chart Rules
1. **Answer one question** — Each chart should answer one question
2. **Clear labels** — Always label axes and data points
3. **Calm colors** — Use brand colors, not rainbow
4. **Accessible** — Patterns for color-blind users
5. **Responsive** — Adapt to screen size

### Chart Types

| Type | Usage | Example |
|------|-------|---------|
| **Line** | Trends over time | Portfolio performance |
| **Area** | Cumulative values | Net worth growth |
| **Donut** | Composition | Asset allocation |
| **Bar** | Comparison | Monthly spending |
| **Progress Ring** | Goal progress | Savings goal |
| **Sparkline** | Inline trends | Account balance |

---

## 10. Widget Behaviour

### Widget Actions

| Action | Description |
|--------|-------------|
| **Expand** | Show more detail |
| **Collapse** | Show less detail |
| **Refresh** | Update data |
| **Pin** | Keep at top |
| **Move** | Reorder |
| **Hide** | Remove from view |
| **Show** | Add to view |
| **Resize** | Change size |
| **Edit** | Customize |
| **Delete** | Remove permanently |

### Behaviour Rules
1. **Predictable** — Same behaviour across all widgets
2. **Consistent** — Same actions available for all widgets
3. **Accessible** — All actions keyboard accessible
4. **Reversible** — Users can undo actions
5. **Calm** — No jarring animations

---

## 11. Personalization

### Customization Options

| Option | Default | Customizable |
|--------|---------|--------------|
| **Widget order** | System defined | Yes |
| **Widget visibility** | All visible | Yes |
| **Pinned widgets** | None | Yes |
| **Default dashboard** | Main | Yes |
| **Quick actions** | System defined | Yes |

### Personalization Rules
1. **Never require customization** — Default experience must be excellent
2. **Simple to customize** — Drag and drop, not settings
3. **Reversible** — Users can reset to default
4. **Accessible** — Customization works with assistive technology
5. **Synced** — Preferences sync across devices

---

## 12. Empty Dashboards

### Empty States

| State | Content | Action |
|-------|---------|--------|
| **No Accounts** | "Connect your first account" | Connect Account |
| **No Investments** | "Start investing today" | Start Investing |
| **No Goals** | "Set your first goal" | Create Goal |
| **No Bills** | "Add your first bill" | Add Bill |
| **Offline** | "You're offline" | Retry |
| **Syncing** | "Syncing your data..." | Wait |
| **New User** | "Welcome to Advizmo" | Get Started |

### Empty State Rules
1. **Encourage action** — Always suggest the next meaningful action
2. **Clear language** — Plain English, no jargon
3. **Calm presentation** — No urgency, no anxiety
4. **Accessible** — Screen readers can understand
5. **Responsive** — Works at all sizes

---

## 13. Dashboard States

### State Definitions

| State | Description |
|-------|-------------|
| **Default** | Normal view |
| **Loading** | Initial load |
| **Skeleton** | Content loading |
| **Refreshing** | Data updating |
| **Offline** | No connection |
| **Syncing** | Data syncing |
| **Error** | Something went wrong |
| **Maintenance** | System maintenance |
| **Empty** | No data |
| **Read Only** | Limited functionality |

### State Rules
1. **Clear communication** — Users should know what's happening
2. **Calm presentation** — No urgency, no anxiety
3. **Accessible** — Screen readers can understand
4. **Consistent** — Same patterns across all states
5. **Recoverable** — Users can retry or recover

---

## 14. Dashboard Motion

### Motion Types

| Motion | Duration | Usage |
|--------|----------|-------|
| **Loading** | 180ms | Initial load |
| **Refresh** | 100ms | Data update |
| **Widget Expand** | 250ms | Show detail |
| **Widget Collapse** | 180ms | Hide detail |
| **Chart Update** | 350ms | Data visualization |
| **AI Recommendation** | 250ms | Show suggestion |
| **Financial Update** | 180ms | Number change |

### Motion Rules
1. **Avoid unnecessary animation** — Motion should communicate state
2. **Calm transitions** — No jarring animations
3. **Consistent timing** — Same duration for same actions
4. **Accessible** — Respect reduced motion preference
5. **Performant** — No layout thrashing

---

## 15. Accessibility

### Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| **VoiceOver** | Clear labels, logical reading order |
| **Dynamic Type** | Text scales with system settings |
| **High Contrast** | Sufficient contrast ratios |
| **Reduced Motion** | Respect system preference |
| **Keyboard Navigation** | All actions keyboard accessible |
| **Large Touch Targets** | 44px minimum |
| **Readable Charts** | Patterns, labels, tooltips |
| **Logical Reading Order** | Top to bottom, left to right |

### Accessibility Rules
1. **WCAG 2.2 AA minimum** — No exceptions
2. **Test with VoiceOver** — Every dashboard must work
3. **Test with Dynamic Type** — Text must scale
4. **Test with keyboard** — All actions accessible
5. **Test with reduced motion** — Animations optional

---

## 16. Responsive Behaviour

### Dashboard Adaptation

| Breakpoint | Layout |
|------------|--------|
| **iPhone** | Single column, stacked widgets |
| **iPad** | Adaptive multi-column |
| **Desktop** | Grid-based layout |
| **Large Desktop** | Expanded grid |

### Responsive Rules
1. **Never redesign** — Only adapt layout
2. **Consistent content** — Same information at all sizes
3. **Consistent hierarchy** — Same visual priority
4. **Touch-friendly** — Large targets on mobile
5. **Readable** — Appropriate text sizes

### Layout Adaptation

```
iPhone (Single Column):
┌─────────────────┐
│    Hero         │
├─────────────────┤
│    Widget 1     │
├─────────────────┤
│    Widget 2     │
├─────────────────┤
│    Widget 3     │
└─────────────────┘

iPad (Multi-Column):
┌────────┬────────┐
│  Hero  │ Widget │
├────────┴────────┤
│    Widget 1     │
├────────┬────────┤
│Widget 2│Widget 3│
└────────┴────────┘

Desktop (Grid):
┌──────┬──────┬──────┐
│ Hero │ W 1  │ W 2  │
├──────┴──────┴──────┤
│    Widget 3        │
├──────┬──────┬──────┤
│W 4   │W 5   │W 6   │
└──────┴──────┴──────┘
```

---

## 17. Documentation

### Documentation Template

Every dashboard guideline should include:

| Section | Description |
|---------|-------------|
| **Purpose** | Why this guideline exists |
| **Rules** | The official rules |
| **Examples** | Examples of correct usage |
| **Good Example** | Correct usage |
| **Bad Example** | Incorrect usage |
| **Accessibility** | Accessibility requirements |
| **Engineering Notes** | Implementation details |
| **Auto Layout** | Layout requirements |
| **Responsive Behaviour** | How it adapts |
| **Do** | Correct usage guidelines |
| **Don't** | Incorrect usage guidelines |

---

## Final Validation

Review the Dashboard Design Language. Ask:

1. Can users understand their financial situation within five seconds?
2. Does every widget have a purpose?
3. Is there a clear visual hierarchy?
4. Can every KPI be understood instantly?
5. Does the dashboard reduce anxiety?
6. Does the dashboard encourage better financial decisions?
7. Does it feel premium?
8. Does it feel native to iOS?

---

*Document Version: 1.0*
*Last Updated: June 2026*
*Status: Official*
