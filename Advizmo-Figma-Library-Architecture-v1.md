# Advizmo Figma Library Architecture

**Version 1.0**
**Created: June 2026**
**Depends on: All Design Language Chapters**

---

## Table of Contents

1. [File Philosophy](#01-file-philosophy)
2. [File Structure](#02-file-structure)
3. [Foundations](#03-foundations)
4. [Tokens](#04-tokens)
5. [Primitive Components](#05-primitive-components)
6. [Components](#06-components)
7. [Financial Components](#07-financial-components)
8. [Charts](#08-charts)
9. [Patterns](#09-patterns)
10. [Templates](#10-templates)
11. [Examples](#11-examples)
12. [Playground](#12-playground)
13. [Assets](#13-assets)
14. [Documentation](#14-documentation)
15. [Archive](#15-archive)
16. [Release Notes](#16-release-notes)
17. [Naming Convention](#naming-convention)
18. [Auto Layout](#auto-layout)
19. [Component Quality Checklist](#component-quality-checklist)

---

## 01 File Philosophy

### Single Source of Truth

One component exists in one place. Every instance traces back to a single master. There are no duplicates, no copies, no "slightly different versions."

When a component needs to exist in multiple contexts, create a variant — not a copy. When a component needs to be customized, use component properties — not a new component.

### Composition over Duplication

Build complex components from simpler ones. A Bill Card is not a new component — it is a Card containing an Avatar, Typography, Money, and Badge. When you need a new card type, compose it from primitives.

This reduces maintenance, improves consistency, and makes the library predictable.

### Variants over Copies

Never duplicate a component to create a slight variation. Use Figma's variant system to create states, sizes, and types within a single component set.

| Instead of | Create |
|------------|--------|
| Button (primary) + Button (secondary) | Button with `variant` property |
| Input (default) + Input (error) | Input with `state` property |
| Card (small) + Card (large) | Card with `size` property |

### Variables over Styles

Use Figma Variables for all values that change across themes, sizes, or contexts. Colors, spacing, radius, shadows — all should be variables, not styles.

Variables enable:
- Theme switching (Light/Dark)
- Multi-mode support
- Consistent values across components
- Easy updates across the library

### Auto Layout Everywhere

Every published component must use Auto Layout. No exceptions. Auto Layout enables:
- Responsive behavior
- Dynamic content
- Consistent spacing
- Better developer handoff
- Easier maintenance

### Documentation First

Every component must be documented before it is published. Documentation includes purpose, usage, properties, accessibility, and engineering notes.

Undocumented components are unpublished components.

### Engineering Friendly

Components must map to engineering reality. Property names should match code. Component structure should reflect code structure. Naming should be consistent across design and code.

### Scalable Naming

Names must work at scale. What makes sense for 10 components may not make sense for 1000. Use systematic, predictable naming that does not depend on context.

---

## 02 File Structure

### Library Files

The Advizmo Design System uses a multi-file architecture to ensure performance, maintainability, and clear separation of concerns.

| File | Purpose | Publishes |
|------|---------|-----------|
| `Advizmo Foundations` | Colors, typography, spacing, icons, grid | Styles, Variables |
| `Advizmo Tokens` | Primitive, semantic, and component tokens | Variables |
| `Advizmo Primitives` | Atomic UI components | Components |
| `Advizmo Components` | Composed UI components | Components |
| `Advizmo Financial` | Financial-specific components | Components |
| `Advizmo Charts` | Data visualization components | Components |
| `Advizmo Patterns` | Screen-level patterns | Components |
| `Advizmo Templates` | Complete screen templates | — |

### Page Hierarchy

Each file follows a consistent page structure:

```
📘 Cover
📖 Getting Started
🎨 Foundations (or Tokens, Primitives, etc.)
📦 Components
🧪 Examples
📚 Documentation
📝 Changelog
```

### Page Descriptions

| Page | Purpose | Visibility |
|------|---------|------------|
| 📘 Cover | Library name, version, owner, links | Public |
| 📖 Getting Started | How to use this library | Public |
| 🎨 Foundations | Design foundation elements | Public |
| 🪙 Tokens | Design tokens | Public |
| 🧩 Primitives | Atomic components | Public |
| 📦 Components | Composed components | Public |
| 💰 Financial | Financial components | Public |
| 📊 Charts | Chart components | Public |
| 🧱 Patterns | Screen patterns | Public |
| 📱 Templates | Screen templates | Public |
| 🖥 Product | Product screens (reference) | Public |
| 🧪 Playground | Experiments (not published) | Private |
| 📚 Documentation | Guidelines and specs | Public |
| 🗃 Archive | Deprecated components | Private |
| 📝 Changelog | Version history | Public |

---

## 03 Foundations

### Foundations Organization

```
🎨 Foundations
├── Colors
│   ├── Primitives
│   ├── Semantic
│   └── Component
├── Typography
│   ├── Scale
│   ├── Families
│   └── Weights
├── Spacing
│   └── Scale
├── Radius
│   └── Scale
├── Elevation
│   └── Scale
├── Borders
│   └── Styles
├── Icons
│   ├── System
│   └── Custom
├── Motion
│   ├── Duration
│   └── Easing
├── Accessibility
│   └── Focus Rings
└── Grid
    ├── Mobile
    ├── Tablet
    └── Desktop
```

### Each Foundation Must Include

| Element | Requirement |
|---------|-------------|
| Documentation | Purpose, usage, rules |
| Examples | Do, Don't, variations |
| Variables | All values as variables |
| Naming | Consistent, scalable |

### Foundation Rules

1. **All values must be variables** — No hard-coded values
2. **All variables must be documented** — Purpose and usage
3. **All examples must include Do/Don't** — Clear guidance
4. **All foundations must be published** — Available to all files

---

## 04 Tokens

### Token Organization

```
🪙 Tokens
├── Primitive
│   ├── Color
│   ├── Typography
│   ├── Spacing
│   ├── Radius
│   ├── Shadow
│   └── Motion
├── Semantic
│   ├── Background
│   ├── Text
│   ├── Border
│   ├── Interactive
│   ├── Status
│   └── Financial
├── Component
│   ├── Button
│   ├── Card
│   ├── Input
│   ├── Badge
│   ├── Navigation
│   └── Chart
├── Motion
│   ├── Duration
│   └── Easing
├── Typography
│   ├── Scale
│   ├── Family
│   └── Weight
├── Layout
│   ├── Grid
│   └── Breakpoint
├── Financial
│   ├── Status
│   ├── Type
│   └── Action
├── Chart
│   ├── Color
│   └── Style
├── AI
│   ├── Status
│   └── Style
└── Accessibility
    ├── Focus
    └── Contrast
```

### Token Rules

1. **Never mix token types** — Primitive, semantic, and component tokens are separate
2. **Never hard-code values** — All values reference variables
3. **Never create tokens without documentation** — Every token needs a description
4. **Never publish incomplete token sets** — All modes must be defined

---

## 05 Primitive Components

### Primitive Organization

```
🧩 Primitives
├── Buttons
│   ├── Primary
│   ├── Secondary
│   ├── Ghost
│   ├── Danger
│   └── Icon
├── Icons
│   ├── System (24x24)
│   ├── System (20x20)
│   ├── System (16x16)
│   └── Custom
├── Labels
│   ├── Field Label
│   ├── Section Label
│   ├── Group Label
│   └── Status Label
├── Typography
│   ├── Heading
│   ├── Body
│   ├── Caption
│   ├── Amount
│   └── Code
├── Badge
│   ├── Neutral
│   ├── Primary
│   ├── Success
│   ├── Warning
│   ├── Error
│   └── AI
├── Chip
│   ├── Filter
│   ├── Selection
│   ├── Input
│   └── Suggestion
├── Tag
│   ├── Category
│   ├── Status
│   └── Custom
├── Avatar
│   ├── User
│   ├── Institution
│   └── AI
├── Indicator
│   ├── Status Dot
│   ├── Connection Dot
│   └── Notification Dot
├── Progress
│   ├── Linear
│   ├── Circular
│   └── Ring
├── Loader
│   ├── Spinner
│   ├── Skeleton
│   └── Shimmer
├── Money
│   ├── Amount
│   ├── Currency
│   ├── Change
│   └── Format
├── Status
│   ├── Success
│   ├── Warning
│   ├── Error
│   └── Info
├── Portfolio
│   ├── Allocation
│   ├── Risk
│   └── Performance
├── AI
│   ├── Badge
│   ├── Indicator
│   └── Thinking
└── Utility
    ├── Divider
    ├── Spacer
    ├── Handle
    └── Separator
```

### Each Primitive Must Include

| Element | Requirement |
|---------|-------------|
| Specs | Size, spacing, typography, color |
| Examples | Usage in context |
| Variants | All property combinations |
| Documentation | Purpose, usage, rules |

---

## 06 Components

### Component Organization

```
📦 Components
├── Inputs
│   ├── Text Input
│   ├── Number Input
│   ├── Search Input
│   ├── Password Input
│   ├── Email Input
│   ├── Phone Input
│   └── Amount Input
├── Cards
│   ├── Basic Card
│   ├── Interactive Card
│   ├── Stat Card
│   ├── List Card
│   └── Media Card
├── Navigation
│   ├── Top Bar
│   ├── Tab Bar
│   ├── Side Navigation
│   ├── Breadcrumb
│   └── Pagination
├── Dialogs
│   ├── Confirmation
│   ├── Alert
│   ├── Input
│   └── Full Screen
├── Bottom Sheets
│   ├── Action Sheet
│   ├── Selection Sheet
│   ├── Filter Sheet
│   └── Detail Sheet
├── Alerts
│   ├── Info
│   ├── Success
│   ├── Warning
│   ├── Error
│   └── Banner
├── Toast
│   ├── Success
│   ├── Error
│   ├── Warning
│   ├── Info
│   └── AI
├── Lists
│   ├── List Item
│   ├── Action List
│   ├── Detail List
│   └── Grouped List
├── Tables
│   ├── Data Table
│   ├── Sortable Table
│   └── Selectable Table
├── Search
│   ├── Search Bar
│   ├── Search Results
│   └── Search Suggestions
├── Filters
│   ├── Filter Chips
│   ├── Filter Panel
│   └── Date Range
├── Calendar
│   ├── Month View
│   ├── Date Picker
│   └── Date Range Picker
├── Forms
│   ├── Form Group
│   ├── Form Row
│   ├── Form Section
│   └── Form Actions
└── Menus
    ├── Dropdown Menu
    ├── Context Menu
    └── Action Menu
```

### Component Composition

Complex components are built from primitives:

```
Account Card
├── Avatar (Institution)
├── Typography (Name)
├── Typography (Balance)
├── Badge (Status)
├── Indicator (Connection)
└── Button (Action)
```

---

## 07 Financial Components

### Financial Component Organization

```
💰 Financial
├── Accounts
│   ├── Account Card
│   ├── Account List
│   ├── Account Detail
│   ├── Account Connection
│   └── Account Status
├── Portfolio
│   ├── Portfolio Summary
│   ├── Portfolio Allocation
│   ├── Portfolio Performance
│   ├── Portfolio Holdings
│   └── Portfolio History
├── Investment
│   ├── Investment Card
│   ├── Investment Detail
│   ├── Investment Order
│   ├── Investment Status
│   └── Investment History
├── Goals
│   ├── Goal Card
│   ├── Goal Progress
│   ├── Goal Detail
│   ├── Goal Creation
│   └── Goal History
├── Automation
│   ├── Automation Card
│   ├── Automation Status
│   ├── Automation History
│   ├── Automation Settings
│   └── Automation Schedule
├── Transactions
│   ├── Transaction List
│   ├── Transaction Item
│   ├── Transaction Detail
│   ├── Transaction Category
│   └── Transaction Search
├── Bills
│   ├── Bill Card
│   ├── Bill List
│   ├── Bill Payment
│   ├── Bill Schedule
│   └── Bill History
├── Cash
│   ├── Cash Summary
│   ├── Cash Transfer
│   ├── Cash History
│   └── Cash Buffer
├── Net Worth
│   ├── Net Worth Summary
│   ├── Net Worth History
│   ├── Net Worth Chart
│   └── Net Worth Components
├── Tax
│   ├── Tax Summary
│   ├── Tax Savings
│   ├── Tax Estimate
│   └── Tax Documents
├── Risk
│   ├── Risk Score
│   ├── Risk Assessment
│   ├── Risk History
│   └── Risk Explanation
├── Institutions
│   ├── Institution List
│   ├── Institution Connection
│   ├── Institution Status
│   └── Institution Logo
├── AI
│   ├── AI Insight Card
│   ├── AI Recommendation
│   ├── AI Chat
│   ├── AI Summary
│   └── AI Thinking
└── Analytics
    ├── Analytics Summary
    ├── Analytics Chart
    ├── Analytics Insight
    └── Analytics History
```

### Financial Component Rules

1. **Never mix with generic UI** — Financial components have their own file
2. **Always use financial tokens** — Money, status, type tokens
3. **Always include data formatting** — Currency, percentage, date
4. **Always include accessibility** — VoiceOver, screen reader support

---

## 08 Charts

### Chart Organization

```
📊 Charts
├── Foundations
│   ├── Axes
│   ├── Grid
│   ├── Legend
│   └── Tooltip
├── Chart Components
│   ├── Line
│   ├── Area
│   ├── Bar
│   ├── Stacked Bar
│   ├── Donut
│   ├── Pie
│   ├── Scatter
│   └── Sparkline
├── Financial Charts
│   ├── Portfolio Line
│   ├── Allocation Donut
│   ├── Performance Bar
│   ├── Comparison Line
│   ├── Trend Sparkline
│   └── Goal Ring
├── Legends
│   ├── Horizontal
│   ├── Vertical
│   └── Interactive
├── Tooltips
│   ├── Value
│   ├── Date
│   ├── Comparison
│   └── Custom
├── Patterns
│   ├── Solid
│   ├── Striped
│   ├── Dotted
│   └── Crosshatch
├── Examples
│   ├── Dashboard
│   ├── Portfolio
│   ├── Performance
│   └── Comparison
└── Accessibility
    ├── Text Summaries
    ├── Data Tables
    └── Keyboard Navigation
```

---

## 09 Patterns

### Pattern Organization

```
🧱 Patterns
├── Dashboard
│   ├── Empty Dashboard
│   ├── Dashboard Summary
│   ├── Dashboard Widgets
│   └── Dashboard Grid
├── Onboarding
│   ├── Welcome
│   ├── Account Connection
│   ├── Goal Setting
│   ├── First Investment
│   └── Completion
├── Money Movement
│   ├── Transfer Flow
│   ├── Payment Flow
│   ├── Deposit Flow
│   └── Withdrawal Flow
├── Automation
│   ├── Create Automation
│   ├── Edit Automation
│   ├── Automation History
│   └── Automation Settings
├── Portfolio
│   ├── Portfolio View
│   ├── Allocation View
│   ├── Performance View
│   └── History View
├── Investments
│   ├── Browse Investments
│   ├── Investment Detail
│   ├── Investment Order
│   └── Investment History
├── Transactions
│   ├── Transaction List
│   ├── Transaction Detail
│   ├── Transaction Search
│   └── Transaction Filter
├── Authentication
│   ├── Login
│   ├── Sign Up
│   ├── Verification
│   ├── Password Reset
│   └── Biometric
├── Settings
│   ├── Profile Settings
│   ├── Notification Settings
│   ├── Security Settings
│   └── Account Settings
├── Search
│   ├── Search Flow
│   ├── Search Results
│   └── Search History
└── AI
    ├── AI Chat
    ├── AI Insights
    ├── AI Recommendations
    └── AI Settings
```

---

## 10 Templates

### Template Organization

```
📱 Templates
├── Mobile
│   ├── Dashboard
│   ├── Portfolio
│   ├── Activity
│   ├── Automation
│   ├── Goals
│   ├── Bills
│   ├── AI
│   ├── Settings
│   └── Profile
├── Tablet
│   ├── Dashboard
│   ├── Split View
│   ├── Detail View
│   └── Settings
├── Desktop
│   ├── Dashboard
│   ├── Sidebar Layout
│   ├── Detail View
│   └── Settings
├── Responsive
│   ├── Mobile → Tablet
│   ├── Tablet → Desktop
│   └── Breakpoint Rules
└── Marketing
    ├── Landing Page
    ├── Feature Page
    └── Pricing
```

---

## 11 Examples

### Example Requirements

Every component must have examples showing:

| Example | Purpose |
|---------|---------|
| Good Example | Correct usage |
| Bad Example | Incorrect usage |
| Responsive Example | Behavior at different sizes |
| Dark Mode Example | Theme adaptation |
| Accessibility Example | Screen reader, keyboard |
| Localization Example | Different text lengths |

### Example Organization

```
🧪 Examples
├── Buttons
│   ├── Primary Good
│   ├── Primary Bad
│   ├── Responsive
│   ├── Dark Mode
│   └── Accessibility
├── Cards
│   ├── Card Good
│   ├── Card Bad
│   ├── Responsive
│   ├── Dark Mode
│   └── Accessibility
└── ...
```

---

## 12 Playground

### Playground Purpose

The Playground is a dedicated space for:
- Experiments
- Future components
- Testing new ideas
- Learning Auto Layout

### Playground Rules

1. **Never publish** Playground components
2. **Never use** Playground components in production
3. **Always label** experimental components clearly
4. **Always archive** completed experiments
5. **Always document** why something is in Playground

---

## 13 Assets

### Asset Organization

```
📚 Assets
├── Icons
│   ├── System (24x24)
│   ├── System (20x20)
│   ├── System (16x16)
│   ├── Financial
│   ├── Navigation
│   └── Custom
├── Illustrations
│   ├── Empty States
│   ├── Onboarding
│   ├── Success
│   └── Error
├── Logos
│   ├── Advizmo Logo
│   ├── Advizmo Icon
│   └── Wordmark
├── Brand
│   ├── Colors
│   ├── Patterns
│   └── Shapes
├── Flags
│   ├── Countries
│   └── Currencies
├── Institution Logos
│   ├── Banks
│   ├── Brokerages
│   └── Credit Cards
└── Country Assets
    ├── Flags
    ├── Currencies
    └── Formats
```

---

## 14 Documentation

### Documentation Requirements

Every page must include:

| Element | Description |
|---------|-------------|
| Purpose | Why this page exists |
| Usage | How to use it |
| Component Inventory | List of all components |
| Engineering Notes | Implementation details |
| Accessibility | Screen reader, keyboard |
| Auto Layout | Layout rules |
| Properties | Available properties |
| Variables | Tokens used |
| Examples | Good, Bad, Responsive |

### Documentation Templates

**Component Documentation**
```markdown
# Component Name

## Purpose
Why this component exists.

## Usage
When and how to use it.

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| variant | Enum | primary | Visual variant |

## Accessibility
- VoiceOver label
- Keyboard navigation
- Focus management

## Engineering Notes
- SwiftUI implementation
- React implementation
- API endpoints

## Examples
- Good usage
- Bad usage
- Responsive
- Dark mode
```

---

## 15 Archive

### Archive Purpose

The Archive stores:
- Deprecated components
- Old versions
- Migration notes
- Historical reference

### Archive Rules

1. **Never permanently delete** production components
2. **Always add migration notes** when deprecating
3. **Always keep for 6 months** before removal
4. **Always document** why something was deprecated
5. **Always provide** replacement components

---

## 16 Release Notes

### Release Note Format

```markdown
# Version X.Y.Z — [Date]

## New Components
- Component Name: Description

## Updated Components
- Component Name: What changed

## Removed Components
- Component Name: Migration path

## Breaking Changes
- Change description
- Migration steps

## Engineering Notes
- Implementation changes
- API changes
```

### Version Numbering

| Version | Meaning |
|---------|---------|
| Major (X.0.0) | Breaking changes |
| Minor (0.Y.0) | New components, non-breaking |
| Patch (0.0.Z) | Bug fixes, documentation |

---

## Naming Convention

### Page Names

| Pattern | Example |
|---------|---------|
| Emoji + Title | 📘 Cover, 📦 Components |
| No abbreviations | Foundations not Fndns |
| Title Case | Getting Started not getting started |

### Section Names

| Pattern | Example |
|---------|---------|
| Title Case | Text Input not textInput |
| No prefixes | Buttons not ComponentButtons |
| Plural for groups | Buttons not Button |

### Component Names

| Pattern | Example |
|---------|---------|
| Noun + Descriptor | Button Primary |
| PascalCase | PrimaryButton |
| No prefixes | Card not AdvizmoCard |
| No suffixes | Button not ButtonComponent |

### Variant Names

| Pattern | Example |
|---------|---------|
| Property = Value | variant=primary |
| PascalCase | Primary, Secondary |
| No spaces | DangerFill not Danger Fill |

### Variable Names

| Pattern | Example |
|---------|---------|
| Slash separation | color/brand/primary |
| Category first | spacing/small not small/spacing |
| No abbreviations | primary not pri |

### Property Names

| Pattern | Example |
|---------|---------|
| camelCase | isDisabled |
| Boolean prefix | is, has, show |
| Enum without prefix | variant not variantType |

### Icon Names

| Pattern | Example |
|---------|---------|
| Category/Name | arrows/arrow-right |
| kebab-case | arrow-right |
| No prefix | arrow-right not icon-arrow-right |

### Chart Names

| Pattern | Example |
|---------|---------|
| Type + Descriptor | Line Chart Portfolio |
| Category/Type | financial/performance |

### Pattern Names

| Pattern | Example |
|---------|---------|
| Screen + Type | Dashboard Empty |
| Action + Flow | Transfer Money |

### Documentation Names

| Pattern | Example |
|---------|---------|
| Topic + Doc | Button Documentation |
| Guide + Topic | Getting Started Guide |

---

## Auto Layout

### Auto Layout Requirements

Every published component must:

| Requirement | Description |
|-------------|-------------|
| Use Auto Layout | No fixed-width containers |
| Use Variables | Spacing from tokens |
| Use Constraints | Responsive positioning |
| Support Dynamic Type | Text can scale |
| Support Localization | Text can expand |
| Support Responsive | Works at all sizes |

### Auto Layout Rules

| Rule | Description |
|------|-------------|
| Horizontal for rows | Items side by side |
| Vertical for stacks | Items top to bottom |
| Gap from tokens | Never hard-code gaps |
| Padding from tokens | Never hard-code padding |
| Fill container | Width/height as needed |
| Hug content | When size depends on content |

### Constraints

| Element | Constraints |
|---------|-------------|
| Full width | Left + Right |
| Centered | Center + Center |
| Pinned | Top + Left |
| Flexible | Scale |

---

## Component Quality Checklist

Every component must satisfy:

| Criterion | Requirement |
|-----------|-------------|
| Accessible | VoiceOver, keyboard, focus |
| Responsive | Works at all sizes |
| Variable Driven | Uses tokens, not hard-coded |
| Auto Layout | Responsive layout |
| Documented | Purpose, usage, examples |
| Engineering Ready | Maps to code |
| Reusable | Composable from primitives |
| Variant Based | Uses variants, not copies |
| Production Ready | Tested, reviewed, approved |

### Checklist Process

1. **Design** — Component created with variants
2. **Auto Layout** — Responsive layout implemented
3. **Variables** — All values use tokens
4. **Documentation** — Purpose and usage documented
5. **Accessibility** — VoiceOver and keyboard tested
6. **Review** — Peer review completed
7. **Engineering** — Engineering review completed
8. **Published** — Component published to library

---

## Final Validation

### Review Questions

| Question | Required |
|----------|----------|
| Can a new designer understand this within one hour? | Yes |
| Can an engineer find components quickly? | Yes |
| Can duplicate components be avoided? | Yes |
| Can future products reuse this library? | Yes |
| Can this scale for five years? | Yes |

### Validation Checklist

- [ ] All pages follow naming convention
- [ ] All components use Auto Layout
- [ ] All components use Variables
- [ ] All components are documented
- [ ] All components are accessible
- [ ] All components are engineering ready
- [ ] All tokens are organized by type
- [ ] All deprecated components have migration notes
- [ ] All release notes are current
- [ ] All examples include Do/Don't
- [ ] All naming is consistent
- [ ] All abbreviations are avoided

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
