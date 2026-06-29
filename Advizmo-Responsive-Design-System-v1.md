# Advizmo Responsive Design System

The official responsive design system for the Advizmo Design Language — how components, layouts, and content adapt across screen sizes and platforms.

---

## Table of Contents

1. [Responsive Philosophy](#1-responsive-philosophy)
2. [Grid System](#2-grid-system)
3. [Breakpoints](#3-breakpoints)
4. [Layout Architecture](#4-layout-architecture)
5. [Container Queries](#5-container-queries)
6. [Responsive Typography](#6-responsive-typography)
7. [Responsive Spacing](#7-responsive-spacing)
8. [Component Adaptation](#8-component-adaptation)
9. [Navigation Patterns](#9-navigation-patterns)
10. [Content Priority](#10-content-priority)
11. [Touch vs Pointer Input](#11-touch-vs-pointer-input)
12. [Platform-Specific Behaviors](#12-platform-specific-behaviors)
13. [Responsive Data Display](#13-responsive-data-display)
14. [Responsive Charts](#14-responsive-charts)
15. [Testing Responsive Designs](#15-testing-responsive-designs)
16. [Common Responsive Patterns](#16-common-responsive-patterns)

---

## 1. Responsive Philosophy

### Core Principles

1. **Content First** — Design for the smallest screen, then expand
2. **Progressive Enhancement** — Add complexity as space allows
3. **Fluid, Not Fixed** — Use relative units, avoid hard breakpoints where possible
4. **Touch-Friendly** — All interactive elements must work on touch
5. **Platform-Native** — Respect platform conventions at each size

### Design Approach

```
Mobile First → Tablet → Desktop → Large Desktop
     ↓           ↓         ↓           ↓
  Stacked     Sidebar   Split View   Multi-Panel
  Single      Two       Three        Four+
  Column      Column    Column       Column
```

---

## 2. Grid System

### Grid Specifications

| Grid | Columns | Gutter | Margin | Use Case |
|------|---------|--------|--------|----------|
| Mobile | 4 | 16px | 16px | Phones |
| Tablet | 8 | 24px | 32px | Tablets, small laptops |
| Desktop | 12 | 24px | Auto | Laptops, desktops |
| Large Desktop | 12 | 32px | Auto | Large monitors |

### Grid Rules

- **Mobile (4-col)**: Content stacks vertically; single column layout
- **Tablet (8-col)**: Two-column layouts possible; sidebar + content
- **Desktop (12-col)**: Full layout flexibility; multi-panel designs
- **Large Desktop (12-col)**: Wider spacing; more breathing room

### Grid Implementation

```
Mobile:   [  4  ] [  4  ] [  4  ] [  4  ]  = 4 columns
Tablet:   [  8  ] [  8  ] [  8  ] [  8  ] [  8  ] [  8  ] [  8  ] [  8  ]  = 8 columns
Desktop:  [12] [12] [12] [12] [12] [12] [12] [12] [12] [12] [12] [12]  = 12 columns
```

---

## 3. Breakpoints

### Breakpoint Values

| Name | Width | Target |
|------|-------|--------|
| `xs` | 0–374px | Small phones |
| `sm` | 375–767px | Standard phones |
| `md` | 768–1023px | Tablets portrait |
| `lg` | 1024–1439px | Tablets landscape / small laptops |
| `xl` | 1440–1919px | Desktops |
| `2xl` | 1920px+ | Large desktops |

### Breakpoint Rules

1. **Always mobile-first** — Styles cascade upward
2. **Touch targets scale** — Larger targets on smaller screens
3. **Content priority changes** — Hide, show, or reorder at breakpoints
4. **Navigation transforms** — Bottom nav → side nav at tablet+

### Media Query Syntax

```css
/* Mobile first — base styles for mobile */
.card { padding: 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .card { padding: 24px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card { padding: 32px; }
}
```

---

## 4. Layout Architecture

### Layout Modes by Breakpoint

| Breakpoint | Dashboard | Account Detail | Settings |
|------------|-----------|----------------|----------|
| Mobile | Stacked | Full screen | Full screen |
| Tablet | Sidebar + Content | Split view | Split view |
| Desktop | Sidebar + Content | Three panel | Three panel |
| Large Desktop | Expanded sidebar + Content | Three panel | Three panel |

### Layout Patterns

#### Stacked Layout (Mobile)
```
┌─────────────┐
│   Header    │
├─────────────┤
│   Content   │
│             │
│             │
├─────────────┤
│  Tab Bar    │
└─────────────┘
```

#### Sidebar + Content (Tablet/Desktop)
```
┌────────┬────────────────┐
│        │    Header      │
│  Side  ├────────────────┤
│  Nav   │    Content     │
│        │                │
│        │                │
└────────┴────────────────┘
```

#### Three Panel (Desktop)
```
┌────────┬────────┬────────────────┐
│        │ List   │    Detail      │
│  Side  │        │                │
│  Nav   │        │                │
│        │        │                │
└────────┴────────┴────────────────┘
```

---

## 5. Container Queries

### Concept

Container queries allow components to respond to their parent container's size, not the viewport. This enables truly reusable responsive components.

### Implementation Rules

1. **Name containers** — Every responsive component needs a named container
2. **Query the container** — Use `@container` instead of `@media`
3. **Test in isolation** — Components must work at any container width

### Container Sizes

| Size | Width | Behavior |
|------|-------|----------|
| `compact` | < 320px | Minimal layout, stacked elements |
| `normal` | 320–599px | Standard layout |
| `wide` | 600px+ | Expanded layout, side-by-side elements |

### Example Container Query

```css
/* Component adapts to its container, not viewport */
@container (min-width: 600px) {
  .account-card {
    flex-direction: row;
    align-items: center;
  }
}

@container (max-width: 319px) {
  .account-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

---

## 6. Responsive Typography

### Type Scale by Breakpoint

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Display | 32px | 40px | 48px |
| H1 | 28px | 32px | 36px |
| H2 | 24px | 28px | 30px |
| H3 | 20px | 22px | 24px |
| H4 | 18px | 18px | 20px |
| Body Large | 16px | 16px | 18px |
| Body | 14px | 14px | 16px |
| Body Small | 13px | 13px | 14px |
| Caption | 12px | 12px | 12px |

### Typography Rules

1. **Never shrink below 12px** — Minimum readable size
2. **Scale up gracefully** — Increase size at larger breakpoints
3. **Maintain hierarchy** — Size relationships must remain clear
4. **Line height scales** — Increase slightly at larger sizes

---

## 7. Responsive Spacing

### Spacing Scale by Breakpoint

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `space-1` | 4px | 4px | 4px |
| `space-2` | 8px | 8px | 8px |
| `space-3` | 12px | 12px | 12px |
| `space-4` | 16px | 16px | 16px |
| `space-5` | 20px | 24px | 24px |
| `space-6` | 24px | 32px | 32px |
| `space-8` | 32px | 40px | 48px |
| `space-10` | 40px | 48px | 64px |
| `space-12` | 48px | 64px | 80px |

### Spacing Rules

1. **Compact on mobile** — Less breathing room, more content density
2. **Generous on desktop** — More whitespace, better readability
3. **Consistent rhythm** — Maintain proportional spacing at all sizes

---

## 8. Component Adaptation

### Component Responsiveness Matrix

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Button** | Full width | Auto width | Auto width |
| **Card** | Stacked, full width | Side-by-side | Grid layout |
| **Input** | Full width | Full width | Fixed width |
| **Modal** | Full screen | Centered, max-width | Centered, max-width |
| **Drawer** | Full screen | Partial width | Partial width |
| **Table** | Card view | Scrollable | Full table |
| **List** | Full width | Two columns | Three columns |
| **Navigation** | Bottom tabs | Side rail | Full sidebar |

### Component Adaptation Rules

1. **Buttons**: Full-width on mobile, auto-width on tablet+
2. **Cards**: Stack vertically on mobile, grid on desktop
3. **Tables**: Convert to cards on mobile, scrollable on tablet, full on desktop
4. **Modals**: Full-screen on mobile, centered overlay on tablet+
5. **Forms**: Single column on mobile, multi-column on desktop

---

## 9. Navigation Patterns

### Navigation by Breakpoint

| Breakpoint | Primary Nav | Secondary Nav | Actions |
|------------|-------------|---------------|---------|
| Mobile | Bottom tabs | Hamburger menu | Header actions |
| Tablet | Side rail (icons) | Expandable sections | Header actions |
| Desktop | Full sidebar | Always visible | Inline actions |
| Large Desktop | Expanded sidebar | Always visible | Inline actions |

### Navigation Transformation

#### Mobile → Tablet
```
Bottom Tab Bar → Icon Sidebar (left)
```

#### Tablet → Desktop
```
Icon Sidebar → Full Sidebar with labels
```

### Navigation Rules

1. **Never hide critical navigation** — Primary nav must always be accessible
2. **Reduce depth on mobile** — Flatten hierarchy, fewer nested levels
3. **Touch targets scale** — 44pt minimum on mobile, 32pt on desktop
4. **Active state visible** — Always show current location

---

## 10. Content Priority

### Content Priority Matrix

| Content | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Primary action | Always visible | Always visible | Always visible |
| Secondary actions | Overflow menu | Visible | Visible |
| Tertiary actions | Hidden | Overflow menu | Visible |
| Sidebar content | Hidden | Collapsed | Visible |
| Detail panels | Full screen | Split view | Side panel |

### Progressive Disclosure Rules

1. **Hide non-essential on mobile** — Show only what's needed
2. **Reveal on demand** — Use expandable sections
3. **Progressive complexity** — Add detail as space allows
4. **Context-appropriate** — Show relevant info based on screen size

---

## 11. Touch vs Pointer Input

### Input Method Rules

| Property | Touch | Mouse/Trackpad |
|----------|-------|----------------|
| Target size | 44pt minimum | 32pt minimum |
| Hover states | Tap to reveal | Hover to reveal |
| Drag gestures | Swipe, pinch | Click, scroll |
| Long press | Context menu | Right-click menu |
| Multi-touch | Pinch to zoom | Scroll to zoom |

### Interaction Adaptations

1. **Hover on touch**: Tap to toggle, not hover
2. **Drag on touch**: Swipe gestures, momentum scrolling
3. **Precision on desktop**: Fine-grained control, smaller targets acceptable
4. **Gestures**: Support both touch and mouse gestures where applicable

---

## 12. Platform-Specific Behaviors

### iOS vs Android vs Web

| Behavior | iOS | Android | Web |
|----------|-----|---------|-----|
| Navigation | Bottom tabs | Bottom navigation | Side navigation |
| Back gesture | Swipe from left edge | System back | Browser back |
| Pull to refresh | Standard | Standard | Standard |
| Haptic feedback | Taptic Engine | Vibration | None |
| Safe areas | Notch, home indicator | Status bar, nav bar | Browser chrome |

### Platform Rules

1. **Respect platform conventions** — Don't fight the platform
2. **Use native patterns** — Leverage platform-specific UI
3. **Test on real devices** — Simulator behavior can differ
4. **Adapt gestures** — Platform-specific gesture patterns

---

## 13. Responsive Data Display

### Data Display Strategies

| Data Type | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **Lists** | Single column | Two columns | Three columns |
| **Tables** | Card view | Horizontal scroll | Full table |
| **Charts** | Simplified | Standard | Enhanced |
| **Timelines** | Vertical | Vertical | Horizontal |
| **Maps** | Full screen | Split view | Embedded |

### Data Density Rules

1. **Mobile**: Show essential data only, 1-2 data points per card
2. **Tablet**: Moderate density, 3-4 data points per card
3. **Desktop**: Full density, all data visible

---

## 14. Responsive Charts

### Chart Adaptation

| Chart Type | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| **Line chart** | Simplified, fewer points | Standard | Full detail |
| **Bar chart** | Horizontal only | Vertical or horizontal | Vertical preferred |
| **Pie chart** | Simplified, max 5 segments | Standard | Full detail |
| **Table chart** | Card view | Scrollable | Full table |
| **Sparkline** | Always visible | Always visible | Always visible |

### Chart Rules

1. **Simplify on mobile** — Reduce data points, hide labels
2. **Touch-friendly** — Larger touch targets for data points
3. **Progressive disclosure** — Tap to reveal details
4. **Maintain readability** — Never sacrifice readability for density

---

## 15. Testing Responsive Designs

### Testing Checklist

- [ ] Test at all breakpoint widths
- [ ] Test with real content (not lorem ipsum)
- [ ] Test with long text (localization)
- [ ] Test with empty states
- [ ] Test with error states
- [ ] Test with loading states
- [ ] Test orientation changes (mobile)
- [ ] Test split-screen (Android)
- [ ] Test window resizing (desktop)
- [ ] Test with system text size changes

### Testing Tools

1. **Figma**: Use responsive resize and constraints
2. **Browser DevTools**: Responsive design mode
3. **Real devices**: Test on actual phones, tablets, desktops
4. **Automated testing**: Visual regression tests at breakpoints

---

## 16. Common Responsive Patterns

### Pattern: Stack to Side-by-Side

```
Mobile:           Desktop:
┌──────────┐      ┌──────────┬──────────┐
│   Left   │      │   Left   │   Right  │
├──────────┤  →   ├──────────┼──────────┤
│  Right   │      │   Left   │   Right  │
└──────────┘      └──────────┴──────────┘
```

### Pattern: Full Screen to Overlay

```
Mobile:           Desktop:
┌──────────┐      ┌────────────────────┐
│          │      │                    │
│  Detail  │  →   │  ┌──────────────┐  │
│  Screen  │      │  │    Detail    │  │
│          │      │  │    Panel     │  │
│          │      │  └──────────────┘  │
└──────────┘      └────────────────────┘
```

### Pattern: Bottom Sheet to Modal

```
Mobile:           Desktop:
┌──────────┐      ┌────────────────────┐
│          │      │                    │
│          │  →   │  ┌──────────────┐  │
│┌────────┐│      │  │    Modal     │  │
││ Sheet  ││      │  │              │  │
│└────────┘│      │  └──────────────┘  │
└──────────┘      └────────────────────┘
```

### Pattern: Card Grid Reflow

```
Mobile (1 col):   Tablet (2 col):   Desktop (3 col):
┌──────────┐      ┌─────┬─────┐     ┌─────┬─────┬─────┐
│  Card 1  │      │ C1  │ C2  │     │ C1  │ C2  │ C3  │
├──────────┤      ├─────┼─────┤     ├─────┼─────┼─────┤
│  Card 2  │      │ C3  │ C4  │     │ C4  │ C5  │ C6  │
├──────────┤      └─────┴─────┘     └─────┴─────┴─────┘
│  Card 3  │
├──────────┤
│  Card 4  │
└──────────┘
```

---

## Summary

The responsive design system ensures Advizmo works beautifully across all screen sizes and platforms. Every component and layout must be tested at all breakpoints, with content priority and interaction patterns adapted for each context.

---

*Document Version: 1.0*
*Last Updated: June 2026*
*Status: Official*
