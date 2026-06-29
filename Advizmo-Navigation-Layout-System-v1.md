# Advizmo Navigation & Layout System

**Version 1.0**
**Created: June 2026**
**Depends on: Primitive Components v1, Core Product Components v1, Token Architecture v1, Design Foundations v1**

---

## Table of Contents

1. [Overview](#overview)
2. [Navigation Hierarchy](#navigation-hierarchy)
3. [01 Top Navigation Bar](#01-top-navigation-bar)
4. [02 Bottom Tab Bar](#02-bottom-tab-bar)
5. [03 Side Navigation](#03-side-navigation)
6. [04 Breadcrumbs](#04-breadcrumbs)
7. [05 Search Bar](#05-search-bar)
8. [06 Navigation Drawer](#06-navigation-drawer)
9. [07 Tab Bar](#07-tab-bar)
10. [08 Segmented Control](#08-segmented-control)
11. [09 Pagination](#09-pagination)
12. [10 Scroll Indicators](#10-scroll-indicators)
13. [11 Back Navigation](#11-back-navigation)
14. [12 Deep Linking](#12-deep-linking)
15. [Layout System](#layout-system)
16. [Responsive Breakpoints](#responsive-breakpoints)
17. [Safe Areas](#safe-areas)
18. [Component Properties Reference](#component-properties-reference)
19. [Validation Checklist](#validation-checklist)

---

## Overview

The Navigation & Layout System provides the structural foundation for how users move through Advizmo.

### Core Principles

1. **Three-Tap Rule**: Any screen reachable in 3 taps maximum
2. **Clear Hierarchy**: Always know where you are and how to go back
3. **Context Preservation**: Navigation state preserved across sessions
4. **Platform Native**: Follows platform conventions (iOS HIG, Material)
5. **Accessible**: Full VoiceOver and keyboard navigation support

### Navigation Architecture

```
Global Navigation (Tab Bar)
    ├── Dashboard
    ├── Accounts
    ├── Payments
    ├── Insights
    └── Profile
        ├── Section Navigation (Top Bar)
        │   ├── Back Button
        │   ├── Title
        │   └── Actions
        └── Content Area
            ├── List Navigation
            ├── Card Navigation
            └── Modal Navigation
```

---

## Navigation Hierarchy

### Primary Navigation (Tab Bar)

- **5 tabs maximum**
- **Persistent across all screens**
- **Badge support for notifications**
- **Active state with color indicator**

### Secondary Navigation (Top Bar)

- **Screen title**
- **Back button**
- **Contextual actions**
- **Search access**

### Tertiary Navigation (In-Content)

- **Segmented controls**
- **Filter chips**
- **Sort options**
- **List-to-detail transitions**

---

## 01 Top Navigation Bar

### Top Bar

**Purpose:** Primary navigation header for each screen
**Usage:** All screens with section-level navigation

#### Variants

| Variant | Use Case | Height |
|---------|----------|--------|
| Default | Standard screens | 56px |
| Compact | List views with scroll | 48px |
| Large | Featured content | 72px |
| Search | Search mode | 56px |

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ [Back]    Screen Title              [Actions]   │
└─────────────────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Bar variant |
| `title` | String | — | Screen title |
| `showBack` | Boolean | `true` | Show back button |
| `actions` | Array | `[]` | Action buttons |
| `searchActive` | Boolean | `false` | Search mode active |

#### States

| State | Appearance |
|-------|------------|
| Default | Solid background, full opacity |
| Scrolled | Blurred background, reduced opacity |
| Collapsed | Minimal height, title only |
| Search | Search bar expanded |

#### Figma Setup

```
Frame: Top Bar
- Auto Layout: Horizontal
- Padding: 16px horizontal, 12px vertical
- Fill: surface-primary
- Height: 56px (default), 48px (compact), 72px (large)

Children:
- Back Button: Instance of Button/Icon
- Title: Instance of Typography/Heading
- Actions: Frame with horizontal Auto Layout
```

---

## 02 Bottom Tab Bar

### Tab Bar

**Purpose:** Primary navigation between major sections
**Usage:** All main screens as persistent navigation

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│    🏠        💳        💰        📊        👤    │
│ Dashboard  Accounts  Payments  Insights  Profile │
│    ●                                           │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Items |
|---------|----------|-------|
| Default | Standard navigation | 5 |
| Compact | Reduced items | 4 |
| Badge | With notifications | 5 |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Tab bar variant |
| `items` | Array | — | Tab items |
| `activeIndex` | Number | `0` | Currently active tab |
| `badges` | Object | `{}` | Notification badges |

#### Tab Item Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | Icon | — | Tab icon |
| `label` | String | — | Tab label |
| `active` | Boolean | `false` | Active state |
| `badge` | Number | — | Notification count |

#### States

| State | Appearance |
|-------|------------|
| Default | Gray icon, gray label |
| Active | Brand color icon, brand color label, filled icon |
| Badge | Red dot with count |
| Disabled | 40% opacity |

#### Figma Setup

```
Frame: Tab Bar
- Auto Layout: Horizontal, Space Between
- Padding: 8px horizontal, 4px vertical
- Fill: surface-primary
- Height: 84px (including safe area)

Children:
- Tab Item: Frame with Vertical Auto Layout
  - Icon: Instance of Icon
  - Label: Instance of Typography/Caption
  - Badge: Instance of Badge/Notification (conditional)
```

---

## 03 Side Navigation

### Side Navigation

**Purpose:** Alternative navigation for tablet/desktop layouts
**Usage:** iPad landscape, desktop web

#### Anatomy

```
┌──────────────┬───────────────────────────────────┐
│              │                                   │
│  Logo        │   Screen Content                  │
│              │                                   │
│  ─────────   │                                   │
│              │                                   │
│  Dashboard   │                                   │
│  Accounts    │                                   │
│  Payments    │                                   │
│  Insights    │                                   │
│  Profile     │                                   │
│              │                                   │
│  ─────────   │                                   │
│              │                                   │
│  Settings    │                                   │
│  Help        │                                   │
│              │                                   │
└──────────────┴───────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collapsed` | Boolean | `false` | Collapsed state |
| `items` | Array | — | Navigation items |
| `activeIndex` | Number | `0` | Active item |
| `width` | Number | `240` | Expanded width |

#### States

| State | Width | Appearance |
|-------|-------|------------|
| Expanded | 240px | Full labels, icons |
| Collapsed | 72px | Icons only |
| Overlay | 280px | Floating above content |

---

## 04 Breadcrumbs

### Breadcrumb

**Purpose:** Show current location in navigation hierarchy
**Usage:** Deep-nested screens, settings, help

#### Anatomy

```
Home > Accounts > Savings Account > Settings
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | Array | — | Breadcrumb items |
| `separator` | Icon | `chevron-right` | Separator icon |
| `ellipsis` | Boolean | `true` | Collapse middle items |

#### States

| State | Appearance |
|-------|------------|
| Default | Gray text, gray separator |
| Active | Last item bold, brand color |
| Collapsed | Ellipsis in middle |

---

## 05 Search Bar

### Search Bar

**Purpose:** Find content across the app
**Usage:** Global search, filtered lists

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ 🔍  Search transactions...              [Cancel] │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Height |
|---------|----------|--------|
| Default | Standard search | 44px |
| Compact | Inline search | 36px |
| Large | Featured search | 56px |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Search bar variant |
| `placeholder` | String | `Search` | Placeholder text |
| `value` | String | `""` | Current value |
| `showCancel` | Boolean | `true` | Show cancel button |
| `showFilter` | Boolean | `false` | Show filter button |

#### States

| State | Appearance |
|-------|------------|
| Default | Gray background, gray icon |
| Focused | Brand border, cursor active |
| Active | Results showing |
| Loading | Spinner replacing icon |

---

## 06 Navigation Drawer

### Drawer

**Purpose:** Slide-in panel for secondary navigation
**Usage:** Settings, profile, help

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ← Back          Drawer Title                   │
│                                                 │
│  ─────────────────────────────────────────────── │
│                                                 │
│  Menu Item 1                              →     │
│  Menu Item 2                              →     │
│  Menu Item 3                              →     │
│                                                 │
│  ─────────────────────────────────────────────── │
│                                                 │
│  Menu Item 4                              →     │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Width |
|---------|----------|-------|
| Default | Standard drawer | 100% |
| Compact | Quick actions | 320px |
| Half | Tablet | 50% |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Drawer variant |
| `title` | String | — | Drawer title |
| `items` | Array | — | Menu items |
| `showHandle` | Boolean | `true` | Show drag handle |

---

## 07 Tab Bar

### Section Tabs

**Purpose:** Switch between content views within a screen
**Usage:** Dashboard sections, account views, insights

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│   Overview    │   Transactions   │   Analytics   │
│───────────────┴──────────────────┴───────────────│
```

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Default | Standard tabs | Underline indicator |
| Pill | Segmented view | Background indicator |
| Scrollable | Many tabs | Horizontal scroll |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Tab variant |
| `items` | Array | — | Tab items |
| `activeIndex` | Number | `0` | Active tab |
| `scrollable` | Boolean | `false` | Horizontal scroll |

#### States

| State | Appearance |
|-------|------------|
| Default | Gray text |
| Active | Brand text, brand underline/background |
| Disabled | 40% opacity |

---

## 08 Segmented Control

### Segmented Control

**Purpose:** Toggle between 2-5 options
**Usage:** Filters, view modes, time periods

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ [  Daily  ] [ Weekly ] [ Monthly ] [ Yearly ]   │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Default | Standard | Background indicator |
| Outlined | Minimal | Border indicator |
| Filled | Prominent | Solid background |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Control variant |
| `items` | Array | — | Control items |
| `activeIndex` | Number | `0` | Active item |
| `size` | Size | `md` | Control size |

#### States

| State | Appearance |
|-------|------------|
| Default | Gray background |
| Active | White background, shadow |
| Disabled | 40% opacity |

---

## 09 Pagination

### Pagination

**Purpose:** Navigate between pages of content
**Usage:** Transaction lists, search results

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Numbers | < 10 pages | Page numbers |
| Dots | Many pages | Dot indicators |
| Infinite | Feed | Load more |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `numbers` | Pagination variant |
| `current` | Number | `1` | Current page |
| `total` | Number | — | Total pages |
| `showFirstLast` | Boolean | `true` | Show first/last buttons |

---

## 10 Scroll Indicators

### Scroll Indicator

**Purpose:** Show scroll position and available content
**Usage:** Horizontal scrolls, carousels, long lists

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Dots | Carousel | Dot indicators |
| Bar | Progress | Progress bar |
| Fade | Content edge | Gradient fade |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `dots` | Indicator variant |
| `count` | Number | — | Total items |
| `active` | Number | `0` | Active item |
| `position` | Position | `bottom` | Indicator position |

---

## 11 Back Navigation

### Back Button

**Purpose:** Return to previous screen
**Usage:** All detail screens

#### Anatomy

```
← Back
```

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Default | Standard | Arrow + text |
| Icon Only | Compact | Arrow only |
| Custom | Branded | Custom icon |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Button variant |
| `label` | String | `Back` | Button label |
| `showIcon` | Boolean | `true` | Show arrow icon |
| `onPress` | Function | — | Press handler |

#### States

| State | Appearance |
|-------|------------|
| Default | Brand color arrow, brand color text |
| Pressed | 80% opacity |
| Disabled | 40% opacity |

---

## 12 Deep Linking

### Deep Link Configuration

**Purpose:** Direct navigation to specific screens
**Usage:** Push notifications, shared links, universal links

#### URL Structure

```
advizmo://
├── /dashboard
├── /accounts
│   └── /:accountId
├── /payments
│   └── /:paymentId
├── /insights
│   └── /:insightId
├── /profile
│   └── /settings
└── /auth
    ├── /login
    └── /signup
```

#### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `accountId` | String | Account identifier |
| `paymentId` | String | Payment identifier |
| `insightId` | String | Insight identifier |
| `source` | String | Attribution source |

---

## Layout System

### Screen Layout

#### Standard Screen Structure

```
┌─────────────────────────────────────────────────┐
│ Top Bar                                          │
├─────────────────────────────────────────────────┤
│ Safe Area Top                                    │
├─────────────────────────────────────────────────┤
│                                                  │
│ Content Area                                     │
│ ├── Section Header                               │
│ ├── Content List                                 │
│ ├── Empty State (if needed)                      │
│ └── Action Button (if needed)                    │
│                                                  │
├─────────────────────────────────────────────────┤
│ Safe Area Bottom                                 │
├─────────────────────────────────────────────────┤
│ Tab Bar                                          │
└─────────────────────────────────────────────────┘
```

#### Content Area Rules

| Rule | Value | Description |
|------|-------|-------------|
| Horizontal Padding | 16px | Standard screen padding |
| Vertical Spacing | 16px | Between sections |
| Max Content Width | 480px | Maximum content width |
| Min Touch Target | 44px | Minimum tap area |

---

## Responsive Breakpoints

### Breakpoint System

| Breakpoint | Width | Layout | Columns |
|------------|-------|--------|---------|
| Mobile | 0-479px | Single column | 1 |
| Large Mobile | 480-767px | Single column | 1 |
| Tablet Portrait | 768-1023px | Two column | 2 |
| Tablet Landscape | 1024-1365px | Three column | 3 |
| Desktop | 1366px+ | Multi column | 4+ |

### Adaptive Layout Rules

| Screen | Mobile | Tablet | Desktop |
|--------|--------|--------|---------|
| Dashboard | Single column | Two column | Three column |
| Accounts | Full width | Side panel | Three column |
| Payments | Full width | Split view | Three column |
| Insights | Single column | Two column | Three column |
| Profile | Full width | Centered | Centered |

---

## Safe Areas

### iOS Safe Areas

| Area | Value | Description |
|------|-------|-------------|
| Top (notch) | 47px | iPhone 14+ |
| Top (status bar) | 44px | iPhone SE |
| Bottom (home indicator) | 34px | iPhone 14+ |
| Bottom (home button) | 0px | iPhone SE |

### Android Safe Areas

| Area | Value | Description |
|------|-------|-------------|
| Top (status bar) | 24px | Standard |
| Top (notch) | 32px | Punch hole |
| Bottom (navigation) | 48px | 3-button nav |
| Bottom (gesture) | 16px | Gesture nav |

### Content Insets

| Element | Top | Bottom | Left | Right |
|---------|-----|--------|------|-------|
| Scroll View | 0 | 0 | 16 | 16 |
| List | 0 | 0 | 0 | 0 |
| Card | 16 | 16 | 16 | 16 |
| Modal | 24 | 24 | 16 | 16 |

---

## Component Properties Reference

### Top Bar Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Bar variant |
| `title` | String | — | Screen title |
| `showBack` | Boolean | `true` | Show back button |
| `actions` | Array | `[]` | Action buttons |
| `searchActive` | Boolean | `false` | Search mode |

### Tab Bar Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Tab bar variant |
| `items` | Array | — | Tab items |
| `activeIndex` | Number | `0` | Active tab |
| `badges` | Object | `{}` | Notification badges |

### Search Bar Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Search variant |
| `placeholder` | String | `Search` | Placeholder text |
| `value` | String | `""` | Current value |
| `showCancel` | Boolean | `true` | Show cancel |
| `showFilter` | Boolean | `false` | Show filter |

### Section Tabs Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Tab variant |
| `items` | Array | — | Tab items |
| `activeIndex` | Number | `0` | Active tab |
| `scrollable` | Boolean | `false` | Horizontal scroll |

---

## Validation Checklist

### Navigation Components

- [ ] All navigation components use Auto Layout
- [ ] All navigation components use Variables
- [ ] All navigation components support Light & Dark mode
- [ ] All navigation components support Dynamic Type
- [ ] All navigation components support VoiceOver
- [ ] All navigation components support keyboard navigation
- [ ] All navigation components support RTL
- [ ] All navigation components have proper touch targets
- [ ] All navigation components have loading states
- [ ] All navigation components have empty states
- [ ] All navigation components have error states

### Layout Components

- [ ] All layouts use Auto Layout
- [ ] All layouts use Variables
- [ ] All layouts support responsive breakpoints
- [ ] All layouts respect safe areas
- [ ] All layouts have proper spacing
- [ ] All layouts have proper alignment
- [ ] All layouts have proper padding
- [ ] All layouts have proper margins
- [ ] All layouts have proper z-index
- [ ] All layouts have proper overflow handling

### Accessibility

- [ ] All navigation items have labels
- [ ] All navigation items have hints
- [ ] All navigation items support VoiceOver
- [ ] All navigation items support keyboard navigation
- [ ] All navigation items have proper focus states
- [ ] All navigation items have proper contrast ratios
- [ ] All navigation items have proper touch targets
- [ ] All navigation items have proper semantics
- [ ] All navigation items have proper ARIA attributes
- [ ] All navigation items have proper roles

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
