# Advizmo Responsive System & Adaptive Layout Language v1.0

## Chapter 20 — Responsive System & Adaptive Layout Language

---

## Table of Contents

1. [Responsive Philosophy](#01-responsive-philosophy)
2. [Breakpoint Strategy](#02-breakpoint-strategy)
3. [Grid System](#03-grid-system)
4. [Containers](#04-containers)
5. [Layout System](#05-layout-system)
6. [Component Adaptation](#06-component-adaptation)
7. [Dashboard Adaptation](#07-dashboard-adaptation)
8. [Navigation Adaptation](#08-navigation-adaptation)
9. [Financial Data Adaptation](#09-financial-data-adaptation)
10. [Chart Adaptation](#10-chart-adaptation)
11. [Table Adaptation](#11-table-adaptation)
12. [Forms Adaptation](#12-forms-adaptation)
13. [AI Adaptation](#13-ai-adaptation)
14. [Orientation](#14-orientation)
15. [Device Classes](#15-device-classes)
16. [Accessibility](#16-accessibility)
17. [Engineering](#17-engineering)
18. [Documentation](#18-documentation)

---

## 01 — Responsive Philosophy

### Core Principles

Responsive Design is not resizing. Responsive Design is adapting information hierarchy while preserving identity. The user should immediately recognize Advizmo regardless of screen size.

| Principle | Definition |
|---|---|
| **Adapt Information, Not Pixels** | Change what's shown and how it's arranged, not just the size |
| **Content First** | Content determines layout, not the other way around |
| **Device Appropriate** | Each device class has its own optimal presentation |
| **Hierarchy Preservation** | The most important information always comes first |
| **Progressive Disclosure** | Show essential information first, reveal detail on demand |
| **One Design Language, Many Layouts** | The design language adapts. Components adapt. Identity does not. |

### The Rule

Components adapt. The design language does not.

A button is always a button. A card is always a card. The spacing may change. The layout may change. The hierarchy may change. But the essence — the identity — remains constant.

---

## 02 — Breakpoint Strategy

### Layout Classes

Define layout classes, not raw pixel values. Map them to engineering breakpoints separately.

| Class | Label | Target | Layout |
|---|---|---|---|
| **Compact** | Mobile | Phones | Single column, bottom nav |
| **Regular** | Tablet | iPads, small tablets | Two column, sidebar nav |
| **Expanded** | Desktop | Laptops, monitors | Three column, rail + sidebar |

### Breakpoint Transitions

| Transition | From | To | Trigger |
|---|---|---|---|
| Mobile → Tablet | Compact | Regular | Width > 768px |
| Tablet → Desktop | Regular | Expanded | Width > 1024px |
| Desktop → Large | Expanded | Expanded+ | Width > 1440px |

### Rules

1. **Never expose raw pixel values as the design language**
2. **Define layout classes, map to pixels in engineering**
3. **Document when layouts transition**
4. **Design for the breakpoints, not between them**
5. **Test at breakpoint boundaries, not just in the middle**

---

## 03 — Grid System

### Responsive Grid Standards

| Device | Columns | Margins | Gutters |
|---|---|---|---|
| **Mobile** | 4-column | 16px | 16px |
| **Tablet** | 8-column | 24px | 24px |
| **Desktop** | 12-column | 32px | 24px |

### Content Width Standards

| Context | Width | Notes |
|---|---|---|
| **Reading Width** | 680px | Body text, articles |
| **Dashboard Width** | 1200px | Dashboard content max |
| **Chart Width** | 100% of container | Responsive to available space |
| **Maximum Content** | 1440px | Absolute maximum for any content |

### Grid Rules

1. **Mobile uses 4-column grid** — simple, predictable
2. **Tablet uses 8-column grid** — more density, still readable
3. **Desktop uses 12-column grid** — maximum flexibility
4. **Gutters are consistent within a breakpoint** — never mix
5. **Margins increase with screen size** — more breathing room on larger screens

---

## 04 — Containers

### Container Types

| Type | Max Width | Min Width | Padding |
|---|---|---|---|
| **Content Container** | 1200px | 320px | 16-32px (by breakpoint) |
| **Card Container** | 100% | 280px | 16-20px |
| **Dashboard Container** | 1440px | 320px | 16-32px |
| **Modal Container** | 480px | 320px | 24px |
| **Bottom Sheet** | 100% | 320px | 24px |
| **Side Panel** | 360-400px | 320px | 24px |
| **AI Panel** | 360-480px | 320px | 20px |

### Adaptive Padding

| Breakpoint | Horizontal Padding | Vertical Spacing |
|---|---|---|
| **Mobile** | 16px | 16px |
| **Tablet** | 24px | 24px |
| **Desktop** | 32px | 32px |

### Rules

1. **Containers have maximum widths** — never let content stretch无限
2. **Containers have minimum widths** — never let content collapse无限
3. **Padding adapts to breakpoint** — more space on larger screens
4. **Cards always fill available width** — but respect max width
5. **Modals and sheets are fixed width** — not fluid

---

## 05 — Layout System

### Layout Types

| Layout | Columns | Usage |
|---|---|---|
| **Single Column** | 1 | Mobile, focused tasks |
| **Split Layout** | 2 | Tablet, master-detail |
| **Two Column** | 2 | Tablet, side-by-side content |
| **Three Column** | 3 | Desktop, dashboard |
| **Dashboard Grid** | 12 | Desktop, widget layout |
| **Adaptive Stack** | 1→2→3 | Responsive to all breakpoints |
| **Master Detail** | 1+1 | List → detail navigation |

### Layout Selection Guide

| Scenario | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Transaction list** | Single column | Split (list + detail) | Three column (list + detail + insights) |
| **Dashboard** | Single column, stacked | Two column | Three column, dashboard grid |
| **Settings** | Single column | Split (nav + content) | Three column (nav + content + preview) |
| **Portfolio** | Single column | Two column | Three column |
| **Form** | Single column, stacked | Single column, centered | Single column, centered with side panel |

### Rules

1. **Single column for mobile** — always
2. **Progressive complexity** — mobile → tablet → desktop adds columns
3. **Never skip a level** — don't go from 1 to 3 columns
4. **Content determines layout** — not device alone
5. **Test at every breakpoint** — transitions must be smooth

---

## 06 — Component Adaptation

### Component Adaptation Matrix

Every component must document behavior across all breakpoints.

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Button** | Full width | Auto width | Auto width |
| **Card** | Full width, stacked | Half width | Third width |
| **Input** | Full width | Fixed width | Fixed width |
| **Navigation** | Bottom tab bar | Sidebar | Rail + sidebar |
| **Dialog** | Bottom sheet | Centered modal | Centered modal |
| **Chart** | Full width, simplified | Half width | Third width |
| **Table** | Horizontal scroll or cards | Full width | Full width |
| **List** | Full width | Split view | Three-column view |

### Adaptation Rules

1. **Never redesign components** — only adapt layout and spacing
2. **Buttons become full width on mobile** — easier to tap
3. **Cards stack vertically on mobile** — one per row
4. **Navigation moves to bottom on mobile** — thumb-friendly
5. **Dialogs become bottom sheets on mobile** — easier to reach
6. **Tables may scroll horizontally on mobile** — or become cards
7. **Charts simplify interaction on mobile** — tap instead of hover

---

## 07 — Dashboard Adaptation

### Widget Priority

| Priority | Widget | Mobile | Tablet | Desktop |
|---|---|---|---|---|
| **1** | Hero (Net Worth) | Always visible | Always visible | Always visible |
| **2** | Quick Actions | Always visible | Always visible | Always visible |
| **3** | Portfolio Summary | Stacked | 2-column | 3-column |
| **4** | Charts | Stacked, simplified | 2-column | 3-column |
| **5** | Bills | Stacked | 2-column | 3-column |
| **6** | Goals | Stacked | 2-column | 3-column |
| **7** | AI Insights | Stacked | 2-column | Side panel |

### Dashboard Layout by Breakpoint

**Mobile — Single Column:**
```
┌──────────────────┐
│ Hero (Net Worth) │
├──────────────────┤
│ Quick Actions    │
├──────────────────┤
│ Portfolio Card   │
├──────────────────┤
│ Chart Card       │
├──────────────────┤
│ Bills Card       │
├──────────────────┤
│ Goals Card       │
├──────────────────┤
│ AI Insight       │
└──────────────────┘
```

**Tablet — Two Column:**
```
┌─────────────┬─────────────┐
│ Hero (Full)             │
├─────────────┼─────────────┤
│ Quick Actions │ Portfolio │
├─────────────┼─────────────┤
│ Chart       │ Bills       │
├─────────────┼─────────────┤
│ Goals       │ AI Insight  │
└─────────────┴─────────────┘
```

**Desktop — Three Column:**
```
┌──────┬─────────────┬──────┐
│ Hero (Full)                  │
├──────┼─────────────┼──────┤
│ Quick │ Portfolio   │ AI   │
│ Actions│             │Panel │
├──────┼─────────────┼──────┤
│ Chart │ Bills       │ Goals│
└──────┴─────────────┴──────┘
```

### Rules

1. **Hero always visible** — first thing on every screen
2. **Desktop shows more simultaneously** — density increases
3. **Mobile prioritizes** — only essential widgets visible
4. **AI moves to side panel on desktop** — doesn't compete with content
5. **Charts simplify on mobile** — fewer data points, larger touch targets

---

## 08 — Navigation Adaptation

### Navigation by Breakpoint

| Breakpoint | Pattern | Position |
|---|---|---|
| **Mobile** | Bottom tab bar | Bottom of screen |
| **Tablet** | Sidebar | Left side, collapsible |
| **Desktop** | Rail + sidebar | Left rail + expandable sidebar |

### Navigation States

| State | Description |
|---|---|
| **Collapsed** | Icons only, minimal width |
| **Expanded** | Icons + labels, full width |
| **Overlay** | Floating over content, dismissible |
| **Hidden** | Off-screen, revealed by gesture |

### Navigation Components

| Component | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Primary Nav** | Bottom tabs | Sidebar | Rail + sidebar |
| **Search** | Full screen overlay | Top bar | Top bar |
| **Notifications** | Full screen | Popover | Popover |
| **Profile** | Settings screen | Sidebar bottom | Top right |
| **Context** | Top bar | Top bar | Top bar |
| **Back Button** | Top left | Top left | Top left |

### Rules

1. **Bottom navigation for mobile** — thumb-friendly
2. **Sidebar for tablet** — efficient use of space
3. **Rail + sidebar for desktop** — maximum density
4. **Search is always accessible** — one tap/click away
5. **Notifications are always accessible** — badge visible
6. **Navigation collapses on smaller screens** — saves space
7. **Navigation expands on larger screens** — shows labels

---

## 09 — Financial Data Adaptation

### Financial Data Presentation by Breakpoint

| Data Type | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Large Numbers** | Abbreviated (2.4M) | Full or abbreviated | Full |
| **Tables** | Cards or horizontal scroll | Full table | Full table |
| **Cards** | Stacked, full width | Grid, half width | Grid, third width |
| **Metrics** | Stacked, large | Grid, medium | Grid, compact |
| **Portfolio** | Single column | Two column | Three column |
| **Transactions** | List view | Split view | Three-column view |
| **Comparison** | Stacked cards | Side-by-side | Side-by-side |

### Rules

1. **Information should remain comparable** across breakpoints
2. **Never lose data** — adapt presentation, not content
3. **Abbreviate on mobile** — full values on desktop
4. **Stack on mobile** — grid on tablet/desktop
5. **Simplify on mobile** — detail on demand

---

## 10 — Chart Adaptation

### Chart Behavior by Breakpoint

| Chart Type | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Line Chart** | Simplified, fewer points | Full | Full |
| **Area Chart** | Simplified | Full | Full |
| **Bar Chart** | Vertical only | Vertical/horizontal | Vertical/horizontal |
| **Donut Chart** | Full width | Half width | Third width |
| **Allocation** | Stacked bars | Pie/donut | Pie/donut |
| **Forecast** | Simplified | Full | Full |

### Chart Interaction by Breakpoint

| Interaction | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Tooltip** | Tap to reveal | Tap/hover | Hover |
| **Zoom** | Pinch | Pinch/scroll | Scroll wheel |
| **Pan** | Drag | Drag | Click + drag |
| **Select** | Tap | Tap/click | Click |
| **Legend** | Below chart | Below/beside | Beside chart |

### Rules

1. **Mobile should simplify interaction** without losing meaning
2. **Tooltips on mobile are tap-triggered** — no hover on touch
3. **Charts resize fluidly** — maintain aspect ratio
4. **Legends move below on mobile** — save horizontal space
5. **Data points increase on desktop** — more granularity
6. **Charts never become unreadable** — adapt or replace with table

---

## 11 — Table Adaptation

### Table Adaptation Strategies

| Strategy | Usage |
|---|---|
| **Horizontal Scroll** | Tables with many columns |
| **Card View** | Tables with few rows, many columns |
| **Collapse** | Hide less important columns |
| **Expand** | Tap row to reveal details |
| **Master Detail** | List on left, detail on right |
| **Priority Columns** | Show most important columns only |

### Table Behavior by Breakpoint

| Table Type | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Transaction Table** | Card view | Full table | Full table |
| **Portfolio Table** | Horizontal scroll | Full table | Full table |
| **Tax Table** | Horizontal scroll | Full table | Full table |
| **Investment Table** | Card view | Full table | Full table |

### Priority Columns

| Table | Mobile Columns | Add on Tablet | Add on Desktop |
|---|---|---|---|
| **Transaction** | Merchant, Amount | Category, Date | Account, Status, Notes |
| **Portfolio** | Name, Value | Change, Return | Allocation, Risk, Benchmark |
| **Tax** | Description, Amount | Date, Type | Lot, Gain/Loss, Rate |

### Rules

1. **Never hide critical financial data** — adapt presentation
2. **Card view for mobile** — when horizontal scroll is poor UX
3. **Horizontal scroll is acceptable** — for data-dense tables
4. **Priority columns always visible** — even on mobile
5. **Expand on tap** — reveal additional details
6. **Master detail on tablet** — list + detail side by side

---

## 12 — Forms Adaptation

### Form Behavior by Breakpoint

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Keyboard** | Always visible | On focus | On focus |
| **Input Width** | Full width | 50-75% width | 50-75% width |
| **Grouping** | Stacked | Side by side | Side by side |
| **Steps** | Full screen per step | Inline steps | Inline steps |
| **Buttons** | Full width, bottom | Auto width, inline | Auto width, inline |
| **Validation** | Inline, below input | Inline, below input | Inline, below input |
| **CTA** | Fixed bottom | Inline | Inline |

### Form Layout

**Mobile — Stacked:**
```
┌──────────────────┐
│ Label            │
│ [Input]          │
│                  │
│ Label            │
│ [Input]          │
│                  │
│ Label            │
│ [Input]          │
│                  │
│ [Full-width CTA] │
└──────────────────┘
```

**Desktop — Side by Side:**
```
┌──────────────┬──────────────┐
│ Label        │ Label        │
│ [Input]      │ [Input]      │
├──────────────┼──────────────┤
│ Label        │ Label        │
│ [Input]      │ [Input]      │
└──────────────┴──────────────┘
              [CTA]
```

### Rules

1. **Full width inputs on mobile** — easier to tap
2. **Side by side on tablet/desktop** — efficient use of space
3. **Fixed CTA on mobile** — always accessible
4. **Inline CTA on tablet/desktop** — flows with content
5. **Validation always visible** — never hide errors
6. **Keyboard always accessible** — never blocked by UI

---

## 13 — AI Adaptation

### AI Presentation by Breakpoint

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| **Inline AI** | Below content | Below/beside content | Beside content |
| **Floating AI** | Bottom sheet | Popover | Side panel |
| **Side Panel** | N/A | Right side | Right side |
| **Bottom Sheet** | Bottom sheet | N/A | N/A |
| **Conversation** | Full screen | Split view | Side panel |
| **Recommendations** | Stacked cards | Grid cards | Grid cards |
| **Streaming** | Below trigger | Below/beside | Beside trigger |

### AI Layout

**Mobile — Bottom Sheet:**
```
┌──────────────────┐
│ Content          │
│                  │
│ [AI trigger]     │
├──────────────────┤
│ AI Bottom Sheet  │
│ [Recommendation] │
│ [Action]         │
└──────────────────┘
```

**Desktop — Side Panel:**
```
┌──────────┬─────────────┬──────────┐
│ Content  │ AI Panel    │ Insights │
│          │ [Rec 1]     │          │
│          │ [Rec 2]     │          │
│          │ [Rec 3]     │          │
└──────────┴─────────────┴──────────┘
```

### Rules

1. **AI never competes with primary content** — adapts position
2. **Mobile AI is bottom sheet** — easy to reach, dismissible
3. **Desktop AI is side panel** — always visible, doesn't overlay
4. **AI recommendations stack on mobile** — grid on desktop
5. **Streaming works on all breakpoints** — position adapts

---

## 14 — Orientation

### Orientation Behavior

| Orientation | Layout | Navigation | Charts |
|---|---|---|---|
| **Portrait** | Single column | Bottom tabs | Simplified |
| **Landscape** | Two column | Sidebar | Full |
| **Tablet Landscape** | Three column | Sidebar | Full |
| **Desktop** | Three column | Rail + sidebar | Full |
| **Large Monitor** | Dashboard grid | Rail + sidebar | Full |

### Rules

1. **Reflow on orientation change** — never break layout
2. **Spacing adapts** — landscape gets more horizontal space
3. **Charts adapt** — landscape shows more data
4. **Navigation adapts** — landscape may show sidebar
5. **Test both orientations** — on every breakpoint

---

## 15 — Device Classes

### Device Class Definitions

| Class | Width | Height | Examples |
|---|---|---|---|
| **Phone** | 320-428px | 568-926px | iPhone SE → iPhone 15 Pro Max |
| **Tablet** | 768-1024px | 1024-1366px | iPad Mini → iPad Pro 12.9" |
| **Laptop** | 1024-1440px | 600-900px | MacBook Air → MacBook Pro 16" |
| **Desktop** | 1440-2560px | 900-1440px | iMac → Pro Display XDR |
| **Large Display** | 2560px+ | 1440px+ | Ultrawide, TV displays |

### Layout Philosophy by Device

| Device | Philosophy |
|---|---|
| **Phone** | Focused, single-task, thumb-friendly |
| **Tablet** | Multi-task, split-view, stylus-friendly |
| **Laptop** | Productive, keyboard + trackpad, dense |
| **Desktop** | Maximum density, multi-window, precision |
| **Large Display** | Dashboard, overview, monitoring |

### Future Foldables

| State | Layout |
|---|---|
| **Closed (Cover)** | Phone layout |
| **Open (Tablet)** | Tablet layout |
| **Flex (Laptop)** | Laptop layout |
| **Split Screen** | Two independent views |

---

## 16 — Accessibility

### Responsive Accessibility

| Feature | Requirement |
|---|---|
| **Dynamic Type** | All text scales with system font size |
| **Zoom** | Layout reflows at 200% zoom |
| **VoiceOver** | All elements accessible at all breakpoints |
| **Reduced Motion** | Animations respect system setting |
| **Landscape** | All content accessible in landscape |
| **Switch Control** | All interactive elements reachable |
| **Keyboard Navigation** | Tab order logical at every breakpoint |

### Rules

1. **Dynamic Type must work at every breakpoint** — text scales, layout reflows
2. **Zoom must not break layout** — content reflows, no horizontal scroll
3. **VoiceOver must work on every device** — all elements labeled
4. **Reduced Motion must be respected** — on every breakpoint
5. **Keyboard must work everywhere** — logical tab order
6. **Touch targets must be 44x44px minimum** — on all devices

---

## 17 — Engineering

### Responsive Tokens

| Token | Mobile | Tablet | Desktop |
|---|---|---|---|
| `grid.columns` | 4 | 8 | 12 |
| `grid.margin` | 16px | 24px | 32px |
| `grid.gutter` | 16px | 24px | 24px |
| `container.max` | 100% | 100% | 1440px |
| `container.padding` | 16px | 24px | 32px |

### CSS Implementation

```css
/* Breakpoints */
:root {
  --breakpoint-mobile: 0px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
  --breakpoint-large: 1440px;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
    gap: 24px;
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    padding: 32px;
  }
}
```

### SwiftUI Implementation

```swift
struct ResponsiveContainer: View {
    var body: some View {
        GeometryReader { geometry in
            if geometry.size.width < 768 {
                MobileLayout()
            } else if geometry.size.width < 1024 {
                TabletLayout()
            } else {
                DesktopLayout()
            }
        }
    }
}
```

### React Implementation

```jsx
import { useMediaQuery } from 'react-responsive';

function ResponsiveLayout() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (isMobile) return <MobileLayout />;
  if (isTablet) return <TabletLayout />;
  return <DesktopLayout />;
}
```

### Tailwind Implementation

```html
<div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12
            gap-4 md:gap-6 lg:6
            px-4 md:px-6 lg:px-8">
  <!-- Content -->
</div>
```

---

## 18 — Documentation

### Documentation Standard

Every responsive rule must include:

| Element | Description |
|---|---|
| **Purpose** | Why this responsive behavior exists |
| **Behaviour** | How it adapts across breakpoints |
| **Examples** | Visual examples for each breakpoint |
| **Do** | Correct responsive patterns |
| **Don't** | Incorrect responsive patterns |
| **Accessibility** | How to make it accessible |
| **Engineering** | Implementation notes |
| **Component Mapping** | Which components are affected |

### Documentation Template

```markdown
## [Responsive Topic]

### Purpose
[Why this responsive behaviour exists]

### Behaviour
| Breakpoint | Behaviour |
|---|---|
| Mobile | [What happens] |
| Tablet | [What happens] |
| Desktop | [What happens] |

### Examples
[Visual examples for each breakpoint]

### Do
- [Correct pattern 1]
- [Correct pattern 2]

### Don't
- [Incorrect pattern 1]
- [Incorrect pattern 2]

### Accessibility
- [Dynamic Type behaviour]
- [Zoom behaviour]
- [Keyboard behaviour]

### Engineering
- [Implementation notes]
- [Token usage]
- [Framework-specific notes]
```

---

## Required Component States

Every responsive component must define:

| State | Description |
|---|---|
| **Mobile** | Behavior on phone screens |
| **Tablet** | Behavior on tablet screens |
| **Desktop** | Behavior on desktop screens |
| **Landscape** | Behavior in landscape orientation |
| **Portrait** | Behavior in portrait orientation |
| **Collapsed** | Behavior when collapsed/minimized |
| **Expanded** | Behavior when expanded/maximized |
| **Scrollable** | Behavior when content overflows |
| **Sticky** | Behavior when sticky/fixed |

---

## Final Validation

### Checklist

Review every responsive rule against these questions:

| Question | Answer |
|---|---|
| Does hierarchy remain consistent? | |
| Can users immediately recognize Advizmo? | |
| Does adaptation improve usability? | |
| Can engineering implement this predictably? | |
| Does every layout feel native? | |
| Does the design language remain constant? | |
| Do components adapt without redesign? | |
| Is accessibility maintained at every breakpoint? | |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | December 2025 | Initial Responsive System & Adaptive Layout Language |

---

*This chapter defines the official Responsive System standard for every Advizmo product. All responsive behavior must comply with these guidelines.*
