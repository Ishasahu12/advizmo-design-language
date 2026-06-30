# Advizmo Component Library

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1**

---

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [Component Inventory](#component-inventory)
3. [Button](#button)
4. [Card](#card)
5. [Input](#input)
6. [Checkbox](#checkbox)
7. [Radio](#radio)
8. [Toggle](#toggle)
9. [Segmented Control](#segmented-control)
10. [Picker](#picker)
11. [Badge](#badge)
12. [Alert](#alert)
13. [Banner](#banner)
14. [List Item](#list-item)
15. [Modal](#modal)
16. [Bottom Sheet](#bottom-sheet)
17. [Tab Bar](#tab-bar)
18. [Navigation Bar](#navigation-bar)
19. [Avatar](#avatar)
20. [Icon Button](#icon-button)
21. [Divider](#divider)
22. [Empty State](#empty-state)
23. [Skeleton Loader](#skeleton-loader)
24. [Toast](#toast)
25. [Tooltip](#tooltip)
26. [Component Token Mapping](#component-token-mapping)
27. [Composition Patterns](#composition-patterns)

---

## Component Architecture

### Design Principles

1. **Composability** — Components combine to build complex interfaces
2. **Single Responsibility** — Each component does one thing well
3. **Token-Driven** — All styling uses semantic tokens, never primitives
4. **Accessible by Default** — WCAG AA compliant out of the box
5. **Platform Adaptive** — Renders natively on iOS, web, Android

### Component Hierarchy

```
Primitive Components (Atom)
├── Button
├── Badge
├── Avatar
├── Icon Button
├── Divider
│
Composite Components (Molecule)
├── Card
├── Input
├── List Item
├── Alert
├── Banner
│
Structural Components (Organism)
├── Modal
├── Bottom Sheet
├── Tab Bar
├── Navigation Bar
├── Empty State
├── Skeleton Loader
├── Toast
└── Tooltip
```

### Props Convention

- Use `variant` for visual style changes (e.g., `primary`, `secondary`, `destructive`)
- Use `size` for dimensional changes (e.g., `sm`, `md`, `lg`)
- Use `state` for interaction states (e.g., `default`, `hover`, `active`, `disabled`)
- Use `as` for polymorphic rendering (e.g., `as="a"`, `as={Link}`)

### State Management

| State | Trigger | Visual Change |
|-------|---------|---------------|
| Default | Initial render | Standard appearance |
| Hover | Pointer over | Subtle background shift |
| Active/Pressed | Pointer down | Background darkens |
| Focused | Keyboard focus | Focus ring visible |
| Disabled | `disabled={true}` | Reduced opacity + cursor |
| Loading | `isLoading={true}` | Spinner replaces content |

---

## Component Inventory

| Component | Token Set | Variants | Platforms |
|-----------|-----------|----------|-----------|
| Button | `button` | 8 | iOS, Web, Android |
| Card | `card` | 3 | iOS, Web, Android |
| Input | `input` | 5 | iOS, Web, Android |
| Checkbox | `checkbox` | 3 | iOS, Web, Android |
| Radio | `radio` | 3 | iOS, Web, Android |
| Toggle | `toggle` | 3 | iOS, Web, Android |
| Segmented Control | `segmentedControl` | 3 | iOS, Web, Android |
| Picker | `picker` | 3 | iOS, Web, Android |
| Badge | `badge` | 5 | iOS, Web, Android |
| Alert | `alert` | 4 | iOS, Web, Android |
| Banner | `banner` | 3 | iOS, Web, Android |
| List Item | `listItem` | 3 | iOS, Web, Android |
| Modal | `modal` | 2 | iOS, Web, Android |
| Bottom Sheet | `bottomSheet` | 2 | iOS, Web, Android |
| Tab Bar | `tabBar` | 2 | iOS, Web, Android |
| Navigation Bar | `navBar` | 2 | iOS, Web, Android |
| Avatar | `avatar` | 3 | iOS, Web, Android |
| Icon Button | `iconButton` | 3 | iOS, Web, Android |
| Divider | `divider` | 2 | iOS, Web, Android |
| Empty State | — | 1 | iOS, Web, Android |
| Skeleton Loader | — | 2 | iOS, Web, Android |
| Toast | — | 3 | iOS, Web, Android |
| Tooltip | — | 2 | iOS, Web, Android |

**Total: 23 components, 70 variants**

---

## Button

The primary interactive element for user actions. Buttons communicate intent through hierarchy, not decoration.

### Button Philosophy

Buttons exist to perform actions. Visual hierarchy comes from emphasis — not unnecessary colors, not excessive shadows, not excessive borders. If two variants solve the same problem, merge them.

Apple uses four button styles: Primary, Secondary, Tertiary, and Destructive. Follow their lead.

---

### Button Family

8 variants. Nothing more.

| Variant | Emphasis | Usage |
|---------|----------|-------|
| **Primary** | High | Main call to action |
| **Secondary** | Medium | Supporting actions |
| **Tertiary** | Low | Low-emphasis actions |
| **Ghost** | Minimal | Contextual actions |
| **Destructive** | High (danger) | Delete, remove, reset |
| **AI Action** | Medium (AI) | AI-specific actions only |
| **Icon Button** | Varies | Icon-only actions |
| **Link Button** | Minimal | Inline navigation |

---

### Variant Details

#### Primary

Main call to action. One per screen maximum.

| Property | Value |
|----------|-------|
| Background | `action/primary` |
| Text | `text/inverse` |
| Border | none |
| Usage | Submit, confirm, save, pay |
| Emphasis | High |

#### Secondary

Supporting actions. Alternative to primary.

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `action/primary` |
| Border | `action/primary` |
| Usage | Cancel, skip, learn more |
| Emphasis | Medium |

#### Tertiary

Low-emphasis actions. Less important than secondary.

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `action/primary` |
| Border | none |
| Usage | Show more, details, optional action |
| Emphasis | Low |

#### Ghost

Contextual actions. Minimal visual weight.

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `text/secondary` |
| Border | none |
| Usage | Dismiss, close, minor actions |
| Emphasis | Minimal |

#### Destructive

Danger actions. Requires confirmation.

| Property | Value |
|----------|-------|
| Background | `status/negative` |
| Text | `text/inverse` |
| Border | none |
| Usage | Delete, remove, reset, cancel account |
| Emphasis | High (danger) |

#### AI Action

AI-specific actions only. Never use for non-AI actions.

| Property | Value |
|----------|-------|
| Background | `ai/primary` |
| Text | `text/inverse` |
| Border | none |
| Usage | Generate, suggest, analyze, automate |
| Emphasis | Medium (AI) |

#### Icon Button

Icon-only actions. Must have accessible label.

| Property | Value |
|----------|-------|
| Background | transparent |
| Icon | `text/secondary` |
| Border | none |
| Usage | Share, edit, delete, close |
| Emphasis | Varies |

#### Link Button

Inline navigation. Looks like text with underline.

| Property | Value |
|----------|-------|
| Background | transparent |
| Text | `action/primary` |
| Border | none |
| Usage | Learn more, view details, inline links |
| Emphasis | Minimal |

---

### Sizes

3 sizes. Nothing more.

| Size | Height | Padding (H) | Font | Radius | Usage |
|------|--------|-------------|------|--------|-------|
| Small | 32px | 12px | `typography/label-m` | `radius/s` | Compact UI, tables, inline |
| Medium | 44px | 16px | `typography/label-l` | `radius/s` | Default, most situations |
| Large | 56px | 24px | `typography/label-l` | `radius/s` | Hero CTAs, onboarding |

**Rules:**
- Medium is the default
- Use Small only when space is constrained
- Use Large only for primary hero actions
- All sizes meet 44pt minimum touch target (Small uses padding to meet target)

---

### States

Every variant supports these states.

| State | Visual Treatment | Rule |
|-------|------------------|------|
| **Default** | Standard appearance | Ready for interaction |
| **Pressed** | Scale to 0.97, darken 10% | Instant feedback on tap |
| **Focused** | 2px focus ring, 2px offset | Keyboard navigation (web) |
| **Disabled** | 40% opacity, no interaction | Cannot be tapped |
| **Loading** | Spinner replaces text, button disabled | Action in progress |
| **Success** | Checkmark replaces text, then reverts | Confirmation feedback (product-specific) |
| **Error** | Shake animation, red border | Action failed (product-specific) |
| **Selected** | Filled background (toggle only) | Toggle state |

**Rules:**
- Hover states exist only for web. iOS does not have hover.
- Success and Error states are product-specific — only use when needed.

---

### Component Properties

Use Figma Component Properties.

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `variant` | Variant | primary, secondary, tertiary, ghost, destructive, ai-action, icon, link | primary |
| `size` | Variant | small, medium, large | medium |
| `state` | Variant | default, pressed, focused, disabled, loading, success, error, selected | default |
| `leadingIcon` | Instance Swap | Any icon | — |
| `trailingIcon` | Instance Swap | Any icon | — |
| `iconOnly` | Boolean | true, false | false |
| `loading` | Boolean | true, false | false |
| `disabled` | Boolean | true, false | false |
| `selected` | Boolean | true, false | false |
| `fullWidth` | Boolean | true, false | false |

---

### Auto Layout

Every button uses Auto Layout.

```
Direction: Horizontal
Primary Axis: Hug Content
Counter Axis: Center
Padding: {size.padding} × {size.height}
Gap: 8px (icon to text)
Constraints: Center
```

| Size | Padding (H) | Padding (V) | Gap | Min Width |
|------|-------------|-------------|-----|-----------|
| Small | 12px | 0 | 8px | 64px |
| Medium | 16px | 0 | 8px | 88px |
| Large | 24px | 0 | 8px | 120px |

**Rules:**
1. Never use fixed width unless `fullWidth` is true
2. Button always hugs content
3. Icon + text gap is always 8px
4. Vertical padding centers content
5. Minimum width ensures touch target

---

### Spacing Rules

```
Leading Icon ↔ Label: spacing/2 (8px)
Label ↔ Trailing Icon: spacing/2 (8px)
Button ↔ Button: spacing/3 (12px)
Button ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Token Mapping

```
Button/Primary/Background → action/primary
Button/Primary/Text → text/inverse
Button/Primary/Background/Pressed → action/primary-pressed
Button/Secondary/Background → transparent
Button/Secondary/Text → action/primary
Button/Secondary/Border → action/primary
Button/Secondary/Background/Pressed → action/primary-surface
Button/Tertiary/Background → transparent
Button/Tertiary/Text → action/primary
Button/Tertiary/Background/Pressed → action/primary-surface
Button/Ghost/Background → transparent
Button/Ghost/Text → text/secondary
Button/Ghost/Background/Pressed → surface/raised
Button/Destructive/Background → status/negative
Button/Destructive/Text → text/inverse
Button/Destructive/Background/Pressed → status/negative-pressed
Button/AI/Background → ai/primary
Button/AI/Text → text/inverse
Button/AI/Background/Pressed → ai/primary-pressed
Button/Icon/Background → transparent
Button/Icon/Icon → text/secondary
Button/Icon/Background/Pressed → surface/raised
Button/Link/Background → transparent
Button/Link/Text → action/primary
Button/Link/Text/Pressed → action/primary-pressed
Button/Disabled/Background → surface/disabled
Button/Disabled/Text → text/disabled
Button/Focus/Ring → action/primary
Button/Focus/Offset → 2px
Button/Focus/Width → 2px
```

---

### Accessibility

| Requirement | Implementation |
|-------------|----------------|
| Touch target | Minimum 44×44pt (all sizes) |
| VoiceOver | Button label describes action, not appearance |
| Dynamic Type | Font scales with system settings |
| Reduced Motion | No scale animation on press |
| Keyboard (web) | Tab to focus, Enter/Space to activate |
| Focus ring | 2px solid `action/primary`, 2px offset |
| High contrast | Focus ring visible in high contrast mode |
| Disabled | `aria-disabled="true"`, visually muted |
| Loading | Announces "Loading" to screen readers |
| RTL | Mirrors layout for right-to-left languages |
| Color independence | Never use color alone to convey meaning |

#### VoiceOver Rules

| Variant | Label | Trait |
|---------|-------|-------|
| Primary | "Confirm payment" | Button |
| Secondary | "Cancel" | Button |
| Destructive | "Delete account" | Button |
| Icon | "Share" | Button |
| Link | "Learn more" | Link |
| Loading | "Loading" | Updating |

**Rule:** Label describes the action, not the button. Never "Primary button" — always "Confirm payment".

---

### Engineering Mapping

#### SwiftUI

```swift
// Primary
Button(action: { }) {
    Text("Confirm")
        .font(.system(size: 16, weight: .semibold))
}
.buttonStyle(.borderedProminent)
.tint(.actionPrimary)

// Secondary
Button(action: { }) {
    Text("Cancel")
        .font(.system(size: 16, weight: .semibold))
}
.buttonStyle(.bordered)
.tint(.actionPrimary)

// Tertiary
Button(action: { }) {
    Text("Show more")
        .font(.system(size: 16, weight: .semibold))
}
.buttonStyle(.plain)
.foregroundColor(.actionPrimary)

// Ghost
Button(action: { }) {
    Text("Dismiss")
        .font(.system(size: 16, weight: .medium))
}
.buttonStyle(.plain)
.foregroundColor(.textSecondary)

// Destructive
Button(action: { }) {
    Text("Delete")
        .font(.system(size: 16, weight: .semibold))
}
.buttonStyle(.borderedProminent)
.tint(.statusNegative)

// AI Action
Button(action: { }) {
    Text("Generate")
        .font(.system(size: 16, weight: .semibold))
}
.buttonStyle(.borderedProminent)
.tint(.aiPrimary)

// Icon
Button(action: { }) {
    Image(systemName: "share")
}
.buttonStyle(.borderless)
.accessibilityLabel("Share")

// Link
Button(action: { }) {
    Text("Learn more")
        .font(.system(size: 16, weight: .medium))
        .underline()
}
.buttonStyle(.plain)
.foregroundColor(.actionPrimary)
```

#### React / React Native

```tsx
// Primary
<Button variant="primary" size="medium" onPress={handlePress}>
    Confirm
</Button>

// Secondary
<Button variant="secondary" size="medium" onPress={handlePress}>
    Cancel
</Button>

// Tertiary
<Button variant="tertiary" size="medium" onPress={handlePress}>
    Show more
</Button>

// Ghost
<Button variant="ghost" size="medium" onPress={handlePress}>
    Dismiss
</Button>

// Destructive
<Button variant="destructive" size="medium" onPress={handlePress}>
    Delete
</Button>

// AI Action
<Button variant="ai-action" size="medium" onPress={handlePress}>
    Generate
</Button>

// Icon
<Button variant="icon" size="medium" onPress={handlePress}
    accessibilityLabel="Share">
    <Icon name="share" />
</Button>

// Link
<Button variant="link" size="medium" onPress={handlePress}>
    Learn more
</Button>

// Loading
<Button variant="primary" size="medium" loading onPress={handlePress}>
    Processing
</Button>
```

#### Jetpack Compose

```kotlin
// Primary
Button(
    onClick = { },
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.actionPrimary
    )
) {
    Text("Confirm")
}

// Secondary
OutlinedButton(
    onClick = { },
    colors = ButtonDefaults.outlinedButtonColors(
        contentColor = MaterialTheme.colorScheme.actionPrimary
    )
) {
    Text("Cancel")
}

// Tertiary
TextButton(
    onClick = { },
    colors = ButtonDefaults.textButtonColors(
        contentColor = MaterialTheme.colorScheme.actionPrimary
    )
) {
    Text("Show more")
}

// Ghost
TextButton(
    onClick = { },
    colors = ButtonDefaults.textButtonColors(
        contentColor = MaterialTheme.colorScheme.textSecondary
    )
) {
    Text("Dismiss")
}

// Destructive
Button(
    onClick = { },
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.statusNegative
    )
) {
    Text("Delete")
}

// AI Action
Button(
    onClick = { },
    colors = ButtonDefaults.buttonColors(
        containerColor = MaterialTheme.colorScheme.aiPrimary
    )
) {
    Text("Generate")
}

// Icon
IconButton(
    onClick = { },
    modifier = Modifier
) {
    Icon(
        imageVector = Icons.Default.Share,
        contentDescription = "Share"
    )
}

// Link
TextButton(
    onClick = { },
    colors = ButtonDefaults.textButtonColors(
        contentColor = MaterialTheme.colorScheme.actionPrimary
    )
) {
    Text("Learn more")
    Modifier.underline()
}
```

---

### QA Checklist

- [ ] Uses Auto Layout
- [ ] Uses semantic tokens only
- [ ] Uses semantic typography
- [ ] Uses semantic spacing
- [ ] Uses semantic radius
- [ ] Uses semantic colors
- [ ] Uses semantic elevation
- [ ] Supports required accessibility
- [ ] Uses Component Properties
- [ ] Has no duplicated variants
- [ ] Has no duplicated states
- [ ] Supports iOS, Web and Android through platform mapping

---

### Rules

1. **8 variants maximum.** Primary, Secondary, Tertiary, Ghost, Destructive, AI Action, Icon Button, Link Button.
2. **3 sizes.** Small, Medium (default), Large.
3. **8 states.** Default, Pressed, Focused, Disabled, Loading, Success, Error, Selected.
4. **One primary per screen.** Maximum emphasis, maximum once.
5. **Hug content.** Never fixed width unless fullWidth.
6. **44pt touch target.** iOS minimum.
7. **Accessible labels.** Describe action, not appearance.
8. **No hover on iOS.** Hover exists only for web.
9. **Apple first.** When in doubt, check Apple HIG.
10. **Delete rule.** If it doesn't improve usability, delete it.

---

### What Changed

| Before | After | Why |
|--------|-------|-----|
| 8 variants | 8 variants | Complete system (refined) |
| 3 sizes | 3 sizes | Consistent (fixed touch targets) |
| 8 states | 8 states | Complete interaction (clarified product-specific) |
| Basic accessibility | Full accessibility | Inclusive design (added RTL, color independence) |
| Incomplete engineering mapping | Complete engineering mapping | Engineering ready (all platforms) |
| Basic auto layout rules | Complete auto layout | Figma ready (added spacing rules) |
| Limited token mapping | Complete token mapping | Token driven (standardized) |

---

## Card

Composable container for grouping related content. Cards are the building blocks of every dashboard and financial experience.

### Card Philosophy

Do NOT create individual card designs first. Create ONE composable card architecture. Every card should be assembled from reusable slots. Composition over creation.

Apple uses simple, clean cards. Follow their lead.

---

### Card Anatomy

Every card is assembled from optional slots.

```
┌─────────────────────────────────────────────┐
│ [Header]                                     │
│  ├── Leading Visual (icon, avatar, badge)    │
│  ├── Title                                   │
│  ├── Subtitle                                │
│  ├── Status (badge, indicator)               │
│  └── Trailing Actions (icon buttons, menu)   │
│                                              │
│ [Hero Metric]                                │
│  ├── Primary Value (large, financial)        │
│  ├── Secondary Value (change, percentage)    │
│  └── Trend Indicator (arrow, color)          │
│                                              │
│ [Visualization]                              │
│  ├── Chart (line, bar, area, donut)          │
│  ├── Progress (bar, ring)                    │
│  └── Sparkline (mini trend)                  │
│                                              │
│ [Body]                                       │
│  ├── Content (text, list, grid)              │
│  └── Supporting Metrics                      │
│                                              │
│ [Footer]                                     │
│  ├── Primary Action (button)                 │
│  ├── Secondary Action (link, ghost button)   │
│  ├── Disclosure (chevron, "See all")         │
│  └── Timestamp / Source                      │
└─────────────────────────────────────────────┘
```

**Rules:**
- Every slot is optional
- Cards should never feel empty — use Empty State slot
- Hero Metric dominates when present
- Supporting metrics remain secondary

---

### Card Types

8 templates. Nothing more.

| Type | Usage |
|------|-------|
| **Dashboard Card** | Portfolio summary, account overview |
| **Financial Summary Card** | Net worth, balances, totals |
| **Analytics Card** | Charts, trends, comparisons |
| **AI Card** | Insights, suggestions, predictions |
| **List Card** | Transactions, holdings, items |
| **Hero Card** | Primary metric, hero CTA |
| **Modal Card** | Detail view, expanded content |
| **Selection Card** | Account picker, option select |

**Rules:**
- Product-specific experiences are compositions, not new card types
- If you need a new card type, you probably need a slot

---

### Card States

| State | Visual Change | Usage |
|-------|---------------|-------|
| **Default** | Standard appearance | Initial render |
| **Selected** | Border becomes `action/primary` | Selection state |
| **Expanded** | Full content visible | Detailed view |
| **Collapsed** | Summary only | Compact view |
| **Loading** | Skeleton placeholder | Async data |
| **Skeleton** | Shimmer animation | Initial load |
| **Empty** | Illustration + message | No data |
| **Updating** | Subtle pulse | Live data refresh |
| **Offline** | Muted appearance | No connection |
| **Error** | Red border + message | Data failure |
| **Success** | Green indicator | Action completed |
| **Hover** | Elevated shadow | Web only |

---

### Card Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `variant` | Variant | dashboard, financial, analytics, ai, list, hero, modal, selection | dashboard |
| `state` | Variant | default, selected, expanded, collapsed, loading, skeleton, empty, updating, offline, error, success | default |
| `padding` | Variant | none, sm, md, lg | md |
| `header` | Boolean | true, false | true |
| `heroMetric` | Boolean | true, false | false |
| `visualization` | Boolean | true, false | false |
| `footer` | Boolean | true, false | false |
| `interactive` | Boolean | true, false | false |
| `selected` | Boolean | true, false | false |
| `fullWidth` | Boolean | true, false | false |

---

### Token Mapping

```
Card/Background → color/surface
Card/Background/Selected → color/surface/selected
Card/Background/Disabled → color/surface/disabled
Card/Border → color/border
Card/Border/Selected → color/action/primary
Card/Border/Error → color/feedback/error
Card/Border/Success → color/feedback/success
Card/Shadow → elevation/raised
Card/Shadow/Hover → elevation/floating
Card/Radius → radius/md (12px)
Card/Radius/Hero → radius/l (16px)
Card/Padding → spacing/4 (16px)
Card/Padding/Sm → spacing/3 (12px)
Card/Padding/Lg → spacing/6 (24px)
Card/Padding/Xl → spacing/7 (32px)
Card/Gap → spacing/4 (16px)
Card/Gap/Sm → spacing/3 (12px)
Card/Gap/Lg → spacing/5 (24px)
```

---

### Sizes

| Size | Padding | Radius | Usage |
|------|---------|--------|-------|
| Small | `spacing/3` (12px) | `radius/md` (12px) | Compact UI, inline cards |
| Medium | `spacing/4` (16px) | `radius/md` (12px) | Default, most situations |
| Large | `spacing/6` (24px) | `radius/md` (12px) | Dashboard, detail views |
| Hero | `spacing/7` (32px) | `radius/l` (16px) | Hero metric cards |

**Rules:**
- Medium is the default size
- Hero is reserved for primary metric cards
- Small is reserved for compact UI (lists, tables)

---

### Visual Hierarchy

**Hero Metric dominates:**
- IBM Plex Sans for financial values
- Large typography (Display or Financial role)
- High contrast against background

**Supporting metrics remain secondary:**
- Inter for all other text
- Smaller typography
- Lower contrast

**Cards rely on:**
- Whitespace for breathing room
- Typography for hierarchy
- Grouping for relationships
- Never excessive color

---

### Spacing Rules

```
Header ↔ Hero Metric: spacing/3 (12px)
Hero Metric ↔ Visualization: spacing/4 (16px)
Visualization ↔ Body: spacing/4 (16px)
Body ↔ Footer: spacing/4 (16px)
Card ↔ Card: spacing/4 (16px)
Card ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Typography

```
Card/Title → typography/title-m (20px, 600 weight, Inter)
Card/Subtitle → typography/body-m (16px, 400 weight, Inter)
Card/Hero/Value → typography/financial-l (36px, 600 weight, IBM Plex Sans)
Card/Hero/Change → typography/label-m (14px, 500 weight, Inter)
Card/Body → typography/body-m (16px, 400 weight, Inter)
Card/Footer → typography/label-m (14px, 500 weight, Inter)
Card/Metric/Label → typography/caption (12px, 400 weight, Inter)
Card/Metric/Value → typography/financial-s (20px, 600 weight, IBM Plex Sans)
```

**Rules:**
- IBM Plex Sans only for Hero Financial Metrics
- Inter for everything else
- Tabular numerals for financial values

---

### Elevation

| Level | Token | Usage |
|-------|-------|-------|
| Flat | `elevation/flat` | Background cards, inline content |
| Raised | `elevation/raised` | Default cards, interactive cards |
| Floating | `elevation/floating` | Hover state, expanded cards |

**Rules:**
- Spacing over shadows — use whitespace before elevation
- Dark mode: shadows at 4× opacity
- Never combine elevation with heavy borders

---

### Accessibility

- Interactive cards: `role="button"`, keyboard focusable
- Selection cards: `role="checkbox"` or `role="radio"`
- Headings inside cards use proper hierarchy
- Color contrast: text on card surface meets 4.5:1
- Focus ring visible on keyboard focus
- VoiceOver: announce card content and state
- Dynamic Type: text scales with system settings
- Reduce Motion: no card animation
- Large Text: support larger font sizes
- High Contrast: borders visible
- RTL: layout mirrors

---

### Engineering Mapping

#### SwiftUI

```swift
// Dashboard Card
Card(variant: .dashboard) {
    CardHeader {
        CardLeadingVisual(icon: "wallet.pass.fill")
        CardTitle("Portfolio")
        CardTrailingAction(icon: "ellipsis") { }
    }
    CardHeroMetric {
        Text("$124,530")
            .font(.financialL)
        Text("+$2,340 (1.9%)")
            .font(.labelM)
            .foregroundColor(.green)
    }
    CardVisualization {
        LineChart(data: portfolioData)
    }
    CardFooter {
        CardPrimaryAction("View Details") { }
        CardDisclosure { }
    }
}
.accessibilityElement(children: .combine)

// Financial Summary Card
Card(variant: .financial) {
    CardHeroMetric {
        Text("$45,230")
            .font(.financialL)
        Text("Available Cash")
            .font(.bodyM)
    }
}

// List Card
Card(variant: .list) {
    ForEach(transactions) { transaction in
        CardListItem(transaction: transaction)
    }
}
```

#### React

```tsx
// Dashboard Card
<Card variant="dashboard">
  <CardHeader>
    <CardLeadingVisual icon="wallet" />
    <CardTitle>Portfolio</CardTitle>
    <CardTrailingAction icon="ellipsis" />
  </CardHeader>
  <CardHeroMetric
    value="$124,530"
    change="+$2,340 (1.9%)"
    trend="up"
  />
  <CardVisualization>
    <LineChart data={portfolioData} />
  </CardVisualization>
  <CardFooter>
    <CardPrimaryAction onPress={viewDetails}>
      View Details
    </CardPrimaryAction>
    <CardDisclosure />
  </CardFooter>
</Card>

// Financial Summary Card
<Card variant="financial">
  <CardHeroMetric
    value="$45,230"
    label="Available Cash"
  />
</Card>

// List Card
<Card variant="list">
  {transactions.map(t => (
    <CardListItem key={t.id} transaction={t} />
  ))}
</Card>
```

#### Jetpack Compose

```kotlin
// Dashboard Card
AdvizmoCard(
    variant = CardVariant.Dashboard,
    modifier = Modifier
) {
    CardHeader(
        leadingVisual = { Icon(Icons.Default.Wallet, "Portfolio") },
        title = { Text("Portfolio") },
        trailingAction = { IconButton({ }) { Icon(Icons.Default.MoreVert, "Menu") } }
    )
    CardHeroMetric(
        value = "$124,530",
        change = "+$2,340 (1.9%)",
        trend = Trend.Up
    )
    CardVisualization {
        LineChart(data = portfolioData)
    }
    CardFooter(
        primaryAction = { AdvizmoButton("View Details") { } },
        disclosure = { Icon(Icons.Default.ChevronRight, "Details") }
    )
}

// Financial Summary Card
AdvizmoCard(
    variant = CardVariant.Financial,
    modifier = Modifier
) {
    CardHeroMetric(
        value = "$45,230",
        label = "Available Cash"
    )
}
```

---

### QA Checklist

- [ ] Uses Auto Layout
- [ ] Uses semantic tokens only
- [ ] Uses semantic typography
- [ ] Uses semantic spacing
- [ ] Uses semantic radius
- [ ] Uses semantic colors
- [ ] Uses semantic elevation
- [ ] Supports required accessibility
- [ ] Uses Component Properties
- [ ] Is composable from slots
- [ ] Avoids duplication
- [ ] Supports platform mapping

---

### Rules

1. **8 card types.** Dashboard, Financial, Analytics, AI, List, Hero, Modal, Selection.
2. **4 sizes.** Small, Medium (default), Large, Hero.
3. **12 states.** Default, Selected, Expanded, Collapsed, Loading, Skeleton, Empty, Updating, Offline, Error, Success, Hover.
4. **Composable slots.** Header, Hero Metric, Visualization, Body, Footer.
5. **Hero Metric dominates.** IBM Plex Sans for financial values.
6. **44pt touch target.** iOS minimum.
7. **Accessible labels.** Describe card purpose.
8. **No hover on iOS.** Hover exists only for web.
9. **Apple first.** When in doubt, check Apple HIG.
10. **Delete rule.** If it doesn't improve usability, delete it.
11. **Composition over creation.** Never create a new card type when a slot solves the problem.

---

### Financial Review

Every card should answer:
- What financial insight is most important?
- What action should the user take?
- Can anything be removed?
- Can hierarchy improve?

---

### What Changed

| Before | After | Why |
|--------|-------|-----|
| 3 variants | 8 types | Complete production system |
| Basic anatomy | Composable slots | Flexibility without duplication |
| 0 states | 12 states | Complete interaction |
| No engineering mapping | Complete mapping | Engineering ready |
| No visual hierarchy rules | IBM Plex Sans + Inter | Financial confidence |
| No elevation system | 3 levels | Spatial hierarchy |
| Basic accessibility | Full accessibility | Inclusive design |
| No QA checklist | Complete checklist | Production quality gate |

---

## Input

Text input fields for user data entry. Input is a form control — not a button. It collects data, not triggers actions.

### Input Philosophy

Inputs collect information. Reduce visual noise. Reduce borders. Reduce unnecessary icons. Support typing without distraction. Use native iOS behaviors whenever possible.

Every input must justify its existence. Remove unnecessary inputs. Merge overlapping inputs.

Apple uses simple, clean input fields. Follow their lead.

---

### Input Family

9 production components. Nothing more.

| Component | Usage |
|-----------|-------|
| **Text Field** | Standard text input |
| **Search Field** | Search with clear button |
| **Amount / Currency Field** | Financial amounts |
| **Password Field** | Secure text entry |
| **OTP Field** | One-time password |
| **Multiline Text Area** | Long-form text |
| **Dropdown / Select** | Single option from list |
| **Date Picker Trigger** | Date selection |
| **Time Picker Trigger** | Time selection |

---

### Financial Inputs

| Input Type | Usage |
|------------|-------|
| **Currency** | Dollar amounts, transfers |
| **Investment Amount** | Stock purchases, trades |
| **Goal Amount** | Savings goals |
| **Transfer Amount** | Account transfers |
| **Percentage** | Allocation, splits |
| **Interest Rate** | APR, APY |
| **Tax Amount** | Tax calculations |
| **Quantity** | Share count |
| **Units** | Fund units |
| **Shares** | Stock shares |

**Financial rules:**
- Currency prefix (e.g., `$`)
- Currency suffix (e.g., `USD`)
- Grouping separators (e.g., `1,234,567`)
- Decimal precision (e.g., `12.34`)
- Validation on blur
- Formatting while typing
- Tabular numerals for alignment

---

### Sizes

3 sizes. Nothing more.

| Size | Height | Usage |
|------|--------|-------|
| **Small** | 32px | Compact UI, table cells |
| **Medium** | 44px | Standard forms (default) |
| **Large** | 56px | Hero inputs, primary data entry |

**Rules:**
- Medium is the default size
- Large is reserved for hero inputs (primary data entry)
- Small is reserved for compact UI (table cells, inline forms)
- Height is fixed — never grows with content
- All sizes meet 44pt minimum touch target (Small uses padding to meet target)

---

### States

Every input inherits only applicable states. Do NOT invent input-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Default** | Standard appearance | — | Initial render |
| **Focused** | Border becomes `action/primary` | 100ms ease | Active input |
| **Filled** | Border becomes `color/border` | 100ms ease | Has value |
| **Disabled** | Reduced opacity, no interaction | — | Non-interactive |
| **Read Only** | Subtle background | — | Display only |
| **Error** | Border becomes `feedback/error` | 100ms ease | Invalid data |
| **Success** | Border becomes `feedback/success` | 100ms ease | Valid data confirmed |
| **Warning** | Border becomes `feedback/warning` | 100ms ease | Attention needed |
| **Loading** | Spinner replaces right icon | — | Async validation |
| **Required** | Asterisk next to label | — | Must be filled |
| **Optional** | "Optional" next to label | — | May be left empty |

**Rules:**
- Hover states exist only for web. iOS does not have hover.
- Required and Optional are visual indicators, not interaction states.

---

### Anatomy

```
┌─────────────────────────────────┐
│ Label                           │ ← typography/label-m, color/text/secondary
│ *                               │    spacing/3 (12px) below
│ ┌─────────────────────────────┐ │
│ │ $  12,450.00            👁 │ │ ← 44px height (medium), typography/body-m
│ └─────────────────────────────┘ │    color/surface (background)
│                                 │    color/border (border)
│ Helper text or error text       │ ← typography/caption, spacing/2 (8px) above
└─────────────────────────────────┘
```

**Anatomy rules:**
- Label is always visible (never placeholder-only)
- Placeholder disappears on focus
- Helper text supports the input
- Error text replaces helper text on error
- Left icon is optional (search, currency, etc.)
- Right icon is optional (clear, reveal, action)
- Prefix/suffix for financial inputs

---

### Token Mapping

```
Input/Background → color/surface
Input/Background/Focused → color/surface
Input/Background/Filled → color/surface
Input/Background/Disabled → color/surface/disabled
Input/Background/ReadOnly → color/surface/subtle
Input/Border → color/border
Input/Border/Focused → color/action/primary
Input/Border/Error → color/feedback/error
Input/Border/Success → color/feedback/success
Input/Border/Warning → color/feedback/warning
Input/Text → color/text/primary
Input/Placeholder → color/text/disabled
Input/Label → color/text/secondary
Input/Label/Required → color/feedback/error
Input/HelperText → color/text/tertiary
Input/ErrorText → color/feedback/error
Input/SuccessText → color/feedback/success
Input/WarningText → color/feedback/warning
Input/Icon → color/text/tertiary
Input/Icon/Pressed → color/text/primary
Input/Prefix → color/text/tertiary
Input/Suffix → color/text/tertiary
Input/Focus/Ring → color/action/primary
Input/Focus/Offset → 2px
Input/Focus/Width → 2px
```

---

### Component Properties

| Property | Type | Values | Default |
|----------|------|--------|---------|
| `variant` | Variant | text, search, amount, password, otp, textarea, dropdown, date, time | text |
| `size` | Variant | small, medium, large | medium |
| `state` | Variant | default, focused, filled, disabled, readonly, error, success, warning, loading | default |
| `label` | String | — | — |
| `placeholder` | String | — | — |
| `leadingIcon` | Instance Swap | Any icon | — |
| `trailingIcon` | Instance Swap | Any icon | — |
| `prefix` | String | — | — |
| `suffix` | String | — | — |
| `helperText` | String | — | — |
| `errorText` | String | — | — |
| `successText` | String | — | — |
| `warningText` | String | — | — |
| `required` | Boolean | true, false | false |
| `readOnly` | Boolean | true, false | false |
| `disabled` | Boolean | true, false | false |
| `loading` | Boolean | true, false | false |
| `fullWidth` | Boolean | true, false | false |

---

### Spacing Rules

```
Label ↔ Input: spacing/3 (12px)
Input ↔ Helper Text: spacing/2 (8px)
Input ↔ Error Text: spacing/2 (8px)
Input ↔ Input (vertical): spacing/4 (16px)
Input ↔ Container: spacing/4 (16px) horizontal, spacing/3 (12px) vertical
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Typography

```
Label → typography/label-m (14px, 500 weight)
Input → typography/body-m (16px, 400 weight)
Helper → typography/caption (12px, 400 weight)
Error → typography/caption (12px, 400 weight)
Success → typography/caption (12px, 400 weight)
Warning → typography/caption (12px, 400 weight)
```

**Rules:**
- Use Inter only
- Financial values use tabular numerals
- Never use IBM Plex Sans for inputs

---

### Radius

Inputs use `radius/s` (8px) only.

```
Input/Border/Radius → radius/s (8px)
```

---

### Icons

- Only Advizmo outline icons
- 24 × 24 grid
- 2 pt stroke
- Rounded joins
- Optically aligned
- Icons remain secondary to text

---

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- Error state: `aria-invalid="true"`, `aria-describedby` points to error message
- Required fields: `aria-required="true"`
- Password fields: `secureTextEntry={true}`
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce label, value, and state
- Dynamic Type: text scales with system settings
- Reduce Motion: no input animation
- Keyboard Navigation: Tab to focus, Enter/Space to activate
- Switch Control: all inputs reachable
- High Contrast: focus ring visible
- RTL: layout mirrors

---

### Engineering Mapping

#### SwiftUI

```swift
// Text Field
TextField("Email", text: $email)
  .textFieldStyle(AdvizmoInputStyle(variant: .text, size: .medium))
  .accessibilityLabel("Email")
  .accessibilityHint("Enter your email address")

// Amount Field
TextField("Amount", text: $amount)
  .textFieldStyle(AdvizmoInputStyle(variant: .amount, size: .large))
  .keyboardType(.decimalPad)
  .accessibilityLabel("Amount")

// Password Field
SecureField("Password", text: $password)
  .textFieldStyle(AdvizmoInputStyle(variant: .password, size: .medium))
  .accessibilityLabel("Password")

// Dropdown
Picker("Account", selection: $account) {
  Text("Checking").tag("checking")
  Text("Savings").tag("savings")
}
.pickerStyle(AdvizmoPickerStyle(size: .medium))
.accessibilityLabel("Account")

// Date Picker
DatePicker("Date", selection: $date, displayedComponents: .date)
  .datePickerStyle(AdvizmoDatePickerStyle(size: .medium))
  .accessibilityLabel("Date")
```

#### React

```tsx
// Text Field
<Input
  variant="text"
  size="medium"
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  error={emailError}
  required
/>

// Amount Field
<Input
  variant="amount"
  size="large"
  label="Amount"
  placeholder="0.00"
  prefix="$"
  suffix="USD"
  value={amount}
  onChangeText={setAmount}
  keyboardType="decimal-pad"
/>

// Password Field
<Input
  variant="password"
  size="medium"
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
  secureTextEntry
/>

// Dropdown
<Select
  size="medium"
  label="Account"
  placeholder="Select account"
  options={[
    { label: 'Checking', value: 'checking' },
    { label: 'Savings', value: 'savings' },
  ]}
  value={account}
  onChange={setAccount}
/>

// Date Picker
<DatePicker
  size="medium"
  label="Date"
  value={date}
  onChange={setDate}
  mode="date"
/>
```

#### Jetpack Compose

```kotlin
// Text Field
AdvizmoTextField(
    value = email,
    onValueChange = { email = it },
    label = { Text("Email") },
    placeholder = { Text("Enter your email") },
    modifier = Modifier.fillMaxWidth(),
    singleLine = true
)

// Amount Field
AdvizmoTextField(
    value = amount,
    onValueChange = { amount = it },
    label = { Text("Amount") },
    placeholder = { Text("0.00") },
    prefix = { Text("$") },
    suffix = { Text("USD") },
    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
    modifier = Modifier.fillMaxWidth(),
    singleLine = true
)

// Password Field
AdvizmoTextField(
    value = password,
    onValueChange = { password = it },
    label = { Text("Password") },
    placeholder = { Text("Enter your password") },
    visualTransformation = PasswordVisualTransformation(),
    modifier = Modifier.fillMaxWidth(),
    singleLine = true
)

// Dropdown
AdvizmoDropdown(
    expanded = expanded,
    onExpandedChange = { expanded = it },
    modifier = Modifier
) {
    Text("Select account")
}

// Date Picker
AdvizmoDatePicker(
    selectedDate = date,
    onDateSelected = { date = it },
    modifier = Modifier
)
```

---

### QA Checklist

- [ ] Uses Auto Layout
- [ ] Uses semantic tokens only
- [ ] Uses semantic typography
- [ ] Uses semantic spacing
- [ ] Uses semantic radius
- [ ] Uses semantic colors
- [ ] Supports required accessibility
- [ ] Supports Dynamic Type
- [ ] Uses Component Properties
- [ ] Supports platform mapping
- [ ] Supports financial formatting
- [ ] Supports localization

---

### Rules

1. **9 production components.** Text Field, Search Field, Amount/Currency, Password, OTP, Multiline, Dropdown, Date Picker, Time Picker.
2. **3 sizes.** Small, Medium (default), Large.
3. **11 states.** Default, Focused, Filled, Disabled, Read Only, Error, Success, Warning, Loading, Required, Optional.
4. **44pt touch target.** iOS minimum.
5. **Accessible labels.** Describe field, not appearance.
6. **No hover on iOS.** Hover exists only for web.
7. **Apple first.** When in doubt, check Apple HIG.
8. **Delete rule.** If it doesn't improve usability, delete it.
9. **Financial formatting.** Always support currency, grouping, decimals.
10. **Tabular numerals.** Financial values always align.

---

### What Changed

| Before | After | Why |
|--------|-------|-----|
| 5 variants | 9 components | Complete production system |
| 3 sizes | 3 sizes | Consistent (fixed touch targets) |
| 6 states | 11 states | Complete interaction (added Required, Optional, Warning) |
| Basic accessibility | Full accessibility | Inclusive design (added Switch Control, High Contrast, RTL) |
| Incomplete engineering mapping | Complete engineering mapping | Engineering ready (all platforms) |
| Basic auto layout rules | Complete auto layout | Figma ready (added spacing rules) |
| Limited token mapping | Complete token mapping | Token driven (standardized) |
| No financial inputs | 10 financial input types | Fintech production ready |
| No QA checklist | Complete QA checklist | Production quality gate |

---

## Checkbox

Selection control for toggling a single option on or off.

### Checkbox Philosophy

Checkboxes communicate binary state — on or off, selected or unselected. They are used for independent choices where multiple options can be selected. Follow Apple HIG: never use checkboxes for single options (use toggle instead).

---

### Checkbox Family

3 sizes. Nothing more.

| Size | Box Size | Usage |
|------|----------|-------|
| **Small** | 16px | Compact UI, table cells |
| **Medium** | 20px | Standard forms (default) |
| **Large** | 24px | Touch-first interfaces |

---

### States

Every checkbox inherits only applicable states. Do NOT invent checkbox-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Unchecked** | Empty box | 100ms ease | Initial state |
| **Checked** | Filled box with ✓ | 100ms ease | Selected state |
| **Indeterminate** | Filled box with — | 100ms ease | Partial selection |
| **Disabled** | Reduced opacity | — | Non-interactive |
| **Focused** | Focus ring visible | 100ms ease | Keyboard navigation |
| **Error** | Border becomes `feedback/error` | 100ms ease | Validation failed |

---

### Anatomy

```
┌─────────────────────────────────┐
│ ┌──┐                            │ ← 20px box (medium)
│ │✓ │ Label text here            │ ← typography/body-m, spacing/2 (8px) between
│ └──┘    Optional description    │ ← typography/caption, spacing/1 (4px) below label
└─────────────────────────────────┘
```

**Anatomy rules:**
- Box is always 20px (medium default)
- Check icon is 12px (medium default)
- Label is always visible
- Description is optional
- Touch target is 44x44pt (Apple minimum)

---

### Token Mapping

```
Checkbox/Box/Background → color/surface
Checkbox/Box/Background/Checked → color/action/primary
Checkbox/Box/Background/Disabled → color/surface/disabled
Checkbox/Box/Background/Checked/Disabled → color/surface/disabled
Checkbox/Box/Border → color/border
Checkbox/Box/Border/Focus → color/action/primary
Checkbox/Box/Border/Error → color/feedback/error
Checkbox/Check/Color → color/text/inverse
Checkbox/Check/Color/Disabled → color/text/disabled
Checkbox/Label → color/text/primary
Checkbox/Label/Disabled → color/text/disabled
Checkbox/Description → color/text/tertiary
Checkbox/Focus/Ring → color/action/primary
Checkbox/Focus/Offset → 2px
Checkbox/Focus/Width → 2px
```

---

### Sizes

| Size | Box Size | Border Radius | Icon Size | Label Font |
|------|----------|---------------|-----------|------------|
| Small | 16px | `radius/sm` (8px) | 10px | `typography/body-s` |
| Medium | 20px | `radius/sm` (8px) | 12px | `typography/body-m` |
| Large | 24px | `radius/sm` (8px) | 16px | `typography/body-l` |

**Rules:**
- Medium is the default size
- Large is reserved for touch-first interfaces
- Small is reserved for compact UI (table cells)
- Box size is fixed — never grows with content

---

### Props

```typescript
interface CheckboxProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'unchecked' | 'checked' | 'indeterminate' | 'disabled';
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  name?: string;
  value?: string;
}
```

---

### Spacing Rules

```
Box ↔ Label: spacing/2 (8px)
Label ↔ Description: spacing/1 (4px)
Checkbox ↔ Checkbox: spacing/3 (12px)
Checkbox ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- `role="checkbox"` on element
- `aria-checked="true"` for checked, `"false"` for unchecked, `"mixed"` for indeterminate
- `aria-invalid="true"` for error state
- `aria-required="true"` for required fields
- `aria-describedby` points to description or error message
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce label and state ("Checkbox, checked")
- Dynamic Type: text scales with system settings
- Reduce Motion: no checkbox animation

---

### Engineering Mapping

#### SwiftUI

```swift
Toggle("Include savings", is: $includeSavings)
  .toggleStyle(AdvizmoCheckboxStyle(size: .medium))
  .accessibilityLabel("Include savings")
```

#### React

```tsx
<Checkbox
  size="medium"
  label="Include savings"
  description="Include savings accounts in total"
  checked={includeSavings}
  onChange={setIncludeSavings}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoCheckbox(
    checked = includeSavings,
    onCheckedChange = { includeSavings = it },
    modifier = Modifier
)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Label | `typography/body-m` | 14px | Regular |
| Description | `typography/body-s` | 12px | Regular |

### Radius

- Checkbox box: `radius/xs` (4px)

### Icons

- Checked: `checkmark` (12px, stroke 2pt)
- Indeterminate: `minus` (12px, stroke 2pt)
- No icons for unchecked state

### QA Checklist

- [ ] Label visible at all sizes
- [ ] Touch target ≥ 44pt
- [ ] Focus ring visible on tab
- [ ] Screen reader announces state + label
- [ ] Indeterminate state visually distinct from checked
- [ ] Error state does not remove checkbox from flow
- [ ] Keyboard: Space toggles, Tab moves focus
- [ ] High contrast mode: border visible on all states

### Rules

1. NEVER use Checkbox for binary on/off — use Toggle
2. NEVER auto-submit on check — always require explicit action
3. ALWAYS show label — Checkbox without label is inaccessible
4. ALWAYS support indeterminate state for "select all" patterns
5. NEVER disable individual checkboxes in a group — disable the group
6. Use Checkbox when user needs to select multiple from a list
7. Use Radio when user needs to select exactly one from a list

### What Changed

| Change | Reason |
|--------|--------|
| Added `typography/body-s` for description | Consistent with Input pattern |
| Added indeterminate state with `minus` icon | "Select all" patterns need 3 states |
| Standardized radius to `radius/xs` (4px) | Aligned with 3-radius system (4/12/9999) |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Radio

Selection control for choosing one option from a set.

### Radio Philosophy

Radios communicate exclusive selection — one option from many. They are used for mutually exclusive choices where only one option can be selected. Follow Apple HIG: never use radios for independent choices (use checkbox instead).

---

### Radio Family

3 sizes. Nothing more.

| Size | Circle Size | Usage |
|------|-------------|-------|
| **Small** | 16px | Compact UI, table cells |
| **Medium** | 20px | Standard forms (default) |
| **Large** | 24px | Touch-first interfaces |

---

### States

Every radio inherits only applicable states. Do NOT invent radio-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Unselected** | Empty circle | 100ms ease | Initial state |
| **Selected** | Filled circle with dot | 100ms ease | Selected state |
| **Disabled** | Reduced opacity | — | Non-interactive |
| **Focused** | Focus ring visible | 100ms ease | Keyboard navigation |
| **Error** | Border becomes `feedback/error` | 100ms ease | Validation failed |

---

### Anatomy

```
┌─────────────────────────────────┐
│ (●) Option A                    │ ← 20px circle (medium)
│     Description for option A    │ ← typography/body-m, spacing/2 (8px) between
│                                 │
│ (○) Option B                    │ ← typography/caption, spacing/1 (4px) below label
│     Description for option B    │
└─────────────────────────────────┘
```

**Anatomy rules:**
- Circle is always 20px (medium default)
- Selected dot is 10px (medium default)
- Label is always visible
- Description is optional
- Touch target is 44x44pt (Apple minimum)

---

### Token Mapping

```
Radio/Circle/Background → color/surface
Radio/Circle/Background/Selected → color/surface
Radio/Circle/Background/Disabled → color/surface/disabled
Radio/Circle/Border → color/border
Radio/Circle/Border/Selected → color/action/primary
Radio/Circle/Border/Focus → color/action/primary
Radio/Circle/Border/Error → color/feedback/error
Radio/Dot/Color → color/action/primary
Radio/Dot/Color/Disabled → color/text/disabled
Radio/Label → color/text/primary
Radio/Label/Disabled → color/text/disabled
Radio/Description → color/text/tertiary
Radio/Focus/Ring → color/action/primary
Radio/Focus/Offset → 2px
Radio/Focus/Width → 2px
```

---

### Sizes

| Size | Circle Size | Border Radius | Dot Size | Label Font |
|------|-------------|---------------|----------|------------|
| Small | 16px | Full (circle) | 8px | `typography/body-s` |
| Medium | 20px | Full (circle) | 10px | `typography/body-m` |
| Large | 24px | Full (circle) | 14px | `typography/body-l` |

**Rules:**
- Medium is the default size
- Large is reserved for touch-first interfaces
- Small is reserved for compact UI (table cells)
- Circle size is fixed — never grows with content

---

### Props

```typescript
interface RadioProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'unselected' | 'selected' | 'disabled';
  label: string;
  description?: string;
  selected: boolean;
  onChange: (selected: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  name?: string;
  value?: string;
}
```

---

### Spacing Rules

```
Circle ↔ Label: spacing/2 (8px)
Label ↔ Description: spacing/1 (4px)
Radio ↔ Radio: spacing/3 (12px)
Radio ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- `role="radio"` on element
- `aria-checked="true"` for selected, `"false"` for unselected
- `aria-invalid="true"` for error state
- `aria-required="true"` for required fields
- `aria-describedby` points to description or error message
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce label and state ("Radio, selected")
- Dynamic Type: text scales with system settings
- Reduce Motion: no radio animation

---

### Engineering Mapping

#### SwiftUI

```swift
Picker("Risk level", selection: $riskLevel) {
  Text("Conservative").tag(0)
  Text("Moderate").tag(1)
  Text("Aggressive").tag(2)
}
.pickerStyle(AdvizmoRadioStyle(size: .medium))
.accessibilityLabel("Risk level")
```

#### React

```tsx
<RadioGroup
  name="riskLevel"
  value={riskLevel}
  onChange={setRiskLevel}
>
  <Radio value="conservative" size="medium" label="Conservative" />
  <Radio value="moderate" size="medium" label="Moderate" />
  <Radio value="aggressive" size="medium" label="Aggressive" />
</RadioGroup>
```

#### Jetpack Compose

```kotlin
AdvizmoRadioButton(
    selected = riskLevel == "conservative",
    onClick = { riskLevel = "conservative" },
    modifier = Modifier
)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Label | `typography/body-m` | 14px | Regular |
| Description | `typography/body-s` | 12px | Regular |

### Radius

- Radio circle: `radius/pill` (9999px) — always circular

### Icons

- Selected: filled circle (8px) inside outer circle
- Unselected: no inner element
- No icons — purely geometric

### QA Checklist

- [ ] Label visible at all sizes
- [ ] Touch target ≥ 44pt
- [ ] Focus ring visible on tab
- [ ] Screen reader announces state + label + group context
- [ ] Only one option selectable per group
- [ ] Keyboard: Arrow keys move between options, Space selects
- [ ] High contrast mode: border visible on all states

### Rules

1. NEVER use Radio for binary on/off — use Toggle
2. NEVER allow deselecting a Radio without a "None" option
3. ALWAYS group Radio buttons with a visible group label
4. ALWAYS pre-select one option in a group (or provide "None")
5. NEVER disable individual Radio buttons — disable the group
6. Use Radio when user must select exactly one from 2-5 options
7. Use Dropdown when options exceed 5

### What Changed

| Change | Reason |
|--------|--------|
| Added `typography/body-s` for description | Consistent with Input pattern |
| Standardized radius to `radius/pill` (9999px) | Always circular — not configurable |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Toggle

Binary switch for turning a single setting on or off.

### Toggle Philosophy

Toggles communicate binary state — on or off, enabled or disabled. They are used for independent settings that take effect immediately. Follow Apple HIG: never use toggles for actions (use button instead).

---

### Toggle Family

3 sizes. Nothing more.

| Size | Track Width | Track Height | Usage |
|------|-------------|--------------|-------|
| **Small** | 36px | 20px | Compact UI, inline settings |
| **Medium** | 44px | 24px | Standard forms (default) |
| **Large** | 52px | 28px | Touch-first interfaces |

---

### States

Every toggle inherits only applicable states. Do NOT invent toggle-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Off** | Gray track, white thumb | 100ms ease | Default state |
| **On** | Blue track, white thumb | 100ms ease | Enabled state |
| **Disabled** | Reduced opacity | — | Non-interactive |
| **Loading** | Spinner replaces thumb | — | Async state change |

---

### Anatomy

```
┌─────────────────────────────────┐
│ Label text                [○────]│ ← 44px track (medium)
│ Description text                 │ ← typography/body-m, spacing/2 (8px) between
└─────────────────────────────────┘
```

**Anatomy rules:**
- Track is always 44px wide (medium default)
- Thumb is always 20px (medium default)
- Label is always visible
- Description is optional
- Touch target is 44x44pt (Apple minimum)

---

### Token Mapping

```
Toggle/Track/Background → color/surface/disabled
Toggle/Track/Background/On → color/action/primary
Toggle/Track/Background/On/Disabled → color/surface/disabled
Toggle/Track/Border → transparent
Toggle/Thumb/Color → white
Toggle/Thumb/Color/Disabled → color/text/disabled
Toggle/Label → color/text/primary
Toggle/Label/Disabled → color/text/disabled
Toggle/Description → color/text/tertiary
Toggle/Focus/Ring → color/action/primary
Toggle/Focus/Offset → 2px
Toggle/Focus/Width → 2px
```

---

### Sizes

| Size | Track Width | Track Height | Thumb Size | Label Font |
|------|-------------|--------------|------------|------------|
| Small | 36px | 20px | 16px | `typography/body-s` |
| Medium | 44px | 24px | 20px | `typography/body-m` |
| Large | 52px | 28px | 24px | `typography/body-l` |

**Rules:**
- Medium is the default size
- Large is reserved for touch-first interfaces
- Small is reserved for inline settings
- Track size is fixed — never grows with content

---

### Props

```typescript
interface ToggleProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'off' | 'on' | 'disabled' | 'loading';
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  loading?: boolean;
}
```

---

### Spacing Rules

```
Track ↔ Label: spacing/3 (12px)
Label ↔ Description: spacing/1 (4px)
Toggle ↔ Toggle: spacing/4 (16px)
Toggle ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- `role="switch"` on element
- `aria-checked="true"` for on, `"false"` for off
- `aria-disabled="true"` for disabled state
- `aria-busy="true"` for loading state
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce label and state ("Dark Mode, on")
- Dynamic Type: text scales with system settings
- Reduce Motion: no toggle animation

---

### Engineering Mapping

#### SwiftUI

```swift
Toggle("Dark Mode", is: $darkMode)
  .toggleStyle(AdvizmoToggleStyle(size: .medium))
  .accessibilityLabel("Dark Mode")
```

#### React

```tsx
<Toggle
  size="medium"
  label="Dark Mode"
  description="Use dark theme"
  checked={darkMode}
  onChange={setDarkMode}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoSwitch(
    checked = darkMode,
    onCheckedChange = { darkMode = it },
    modifier = Modifier
)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Label | `typography/body-m` | 14px | Regular |
| Description | `typography/body-s` | 12px | Regular |

### Radius

- Track: `radius/pill` (9999px) — always pill shape
- Thumb: `radius/pill` (9999px) — always circular

### Icons

- No icons — pure state indicator (off/on)
- Thumb position communicates state visually

### QA Checklist

- [ ] Label visible at all sizes
- [ ] Touch target ≥ 44pt
- [ ] Focus ring visible on tab
- [ ] Screen reader announces state + label
- [ ] State change is immediate (no confirm button)
- [ ] Keyboard: Space toggles
- [ ] High contrast mode: track and thumb distinguishable
- [ ] Disabled state clearly muted

### Rules

1. NEVER use Toggle for multi-option selection — use Checkbox
2. NEVER require a "Save" button — Toggle state changes immediately
3. ALWAYS show current state visually (thumb position + color)
4. NEVER use Toggle for destructive actions — use confirmation flow
5. Use Toggle for independent on/off settings
6. Use Checkbox when multiple selections needed from a list

### What Changed

| Change | Reason |
|--------|--------|
| Added `typography/body-s` for description | Consistent with Input pattern |
| Standardized radius to `radius/pill` (9999px) | Always pill — not configurable |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Segmented Control

Horizontal control for switching between 2-5 options.

### Segmented Control Philosophy

Segmented controls communicate mutual exclusion — one option from a small set. They are used for view switching, filter selection, or data segmentation. Follow Apple HIG: never use segmented controls for more than 5 options (use picker instead).

---

### Segmented Control Family

3 sizes. Nothing more.

| Size | Height | Font | Usage |
|------|--------|------|-------|
| **Small** | 28px | `typography/caption` | Compact UI, inline filters |
| **Medium** | 32px | `typography/body-s` | Standard usage (default) |
| **Large** | 36px | `typography/body-m` | Touch-first interfaces |

---

### States

Every segmented control inherits only applicable states. Do NOT invent control-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Default** | Standard appearance | — | Initial render |
| **Selected** | Highlighted background | 100ms ease | Active option |
| **Disabled** | Reduced opacity | — | Non-interactive |
| **Loading** | Spinner replaces text | — | Async data loading |

---

### Anatomy

```
┌─────────────────────────────────┐
│ ┌─────────┬─────────┬─────────┐ │
│ │  Daily  │ Monthly │  Yearly │ │ ← 32px height (medium)
│ └─────────┴─────────┴─────────┘ │    Selected option has highlighted bg
└─────────────────────────────────┘
```

**Anatomy rules:**
- Container is full width (or fixed width)
- Options are equally spaced
- Selected option has highlighted background
- Text is centered in each segment
- Touch target is 44x44pt (Apple minimum)

---

### Token Mapping

```
SegmentedControl/Background → color/surface/secondary
SegmentedControl/Border → color/border
SegmentedControl/Indicator/Background → color/surface
SegmentedControl/Indicator/Shadow → elevation/raised
SegmentedControl/Option/Text → color/text/secondary
SegmentedControl/Option/Text/Selected → color/text/primary
SegmentedControl/Option/Text/Disabled → color/text/disabled
SegmentedControl/Focus/Ring → color/action/primary
SegmentedControl/Focus/Offset → 2px
SegmentedControl/Focus/Width → 2px
```

---

### Sizes

| Size | Height | Border Radius | Font | Gap |
|------|--------|---------------|------|-----|
| Small | 28px | `radius/md` (12px) | `typography/caption` | 2px |
| Medium | 32px | `radius/md` (12px) | `typography/body-s` | 2px |
| Large | 36px | `radius/md` (12px) | `typography/body-m` | 2px |

**Rules:**
- Medium is the default size
- Large is reserved for touch-first interfaces
- Small is reserved for inline filters
- Height is fixed — never grows with content

---

### Props

```typescript
interface SegmentedControlProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'default' | 'loading' | 'disabled';
  options: string[];
  selected: number;
  onChange: (index: number) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}
```

---

### Spacing Rules

```
Option ↔ Option: spacing/1 (4px)
SegmentedControl ↔ Label: spacing/3 (12px)
SegmentedControl ↔ Container: spacing/4 (16px)
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Accessibility

- `role="tablist"` on container
- `role="tab"` on each option
- `aria-selected="true"` on selected option
- `aria-disabled="true"` for disabled state
- `aria-busy="true"` for loading state
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce option and state ("Daily, selected")
- Dynamic Type: text scales with system settings
- Reduce Motion: no segmented control animation

---

### Engineering Mapping

#### SwiftUI

```swift
Picker("Time period", selection: $timePeriod) {
  Text("Daily").tag(0)
  Text("Monthly").tag(1)
  Text("Yearly").tag(2)
}
.pickerStyle(SegmentedPickerStyle())
.accessibilityLabel("Time period")
```

#### React

```tsx
<SegmentedControl
  size="medium"
  options={['Daily', 'Monthly', 'Yearly']}
  selected={timePeriod}
  onChange={setTimePeriod}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoSegmentedButton(
    selected = timePeriod == 0,
    onClick = { timePeriod = 0 },
    modifier = Modifier
) {
    Text("Daily")
}
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Segment label | `typography/body-m` | 14px | Medium |
| Segment label (selected) | `typography/body-m` | 14px | Semibold |

### Radius

- Segment pill: `radius/pill` (9999px) — slides between segments

### Icons

- Optional leading icon per segment: `icon/16` (16px)
- Icons rarely used — text labels preferred for clarity

### QA Checklist

- [ ] 2-5 segments visible without scroll
- [ ] Selected segment clearly indicated (pill + weight)
- [ ] Touch target ≥ 44pt per segment
- [ ] Focus ring visible on tab
- [ ] Screen reader announces segment group + selected option
- [ ] Keyboard: Arrow keys move between segments
- [ ] Animation is smooth (200ms ease-out)

### Rules

1. NEVER use Segmented Control for more than 5 options — use Tab Bar or Dropdown
2. ALWAYS have exactly one option selected (no empty state)
3. NEVER disable individual segments — disable the entire control
4. Use Segmented Control for switching views within the same context
5. Use Tab Bar for primary navigation between screens
6. Use Radio when selection triggers an action, not just a view change

### What Changed

| Change | Reason |
|--------|--------|
| Added Typography section with weight differentiation | Selected segment uses Semibold |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Picker

Dropdown control for selecting one option from a list.

### Picker Philosophy

Pickers communicate selection from a large set — one option from many. They are used for data selection, date picking, or category choosing. Follow Apple HIG: never use pickers for binary choices (use toggle instead).

---

### Picker Family

3 sizes. Nothing more.

| Size | Height | Font | Usage |
|------|--------|------|-------|
| **Small** | 32px | `typography/body-s` | Compact UI, table cells |
| **Medium** | 44px | `typography/body-m` | Standard forms (default) |
| **Large** | 56px | `typography/body-l` | Touch-first interfaces |

---

### States

Every picker inherits only applicable states. Do NOT invent picker-specific interaction states.

| State | Visual Change | Transition | Usage |
|-------|---------------|------------|-------|
| **Default** | Standard appearance | — | Initial render |
| **Focused** | Border becomes `action/primary` | 100ms ease | Active picker |
| **Error** | Border becomes `feedback/error` | 100ms ease | Validation failed |
| **Disabled** | Reduced opacity | — | Non-interactive |
| **Loading** | Spinner replaces chevron | — | Async data loading |

---

### Anatomy

```
┌─────────────────────────────────┐
│ Label                           │ ← typography/label-m, spacing/3 (12px) below
│ ┌─────────────────────────────┐ │
│ │ Select option          ▼   │ │ ← 44px height (medium), typography/body-m
│ └─────────────────────────────┘ │    color/surface (background)
│ Helper text or error text       │    color/border (border)
└─────────────────────────────────┘
```

**Anatomy rules:**
- Label is always visible
- Placeholder disappears on selection
- Chevron indicates dropdown
- Helper text supports the picker
- Error text replaces helper text on error
- Touch target is 44x44pt (Apple minimum)

---

### Token Mapping

```
Picker/Background → color/surface
Picker/Background/Focused → color/surface
Picker/Background/Disabled → color/surface/disabled
Picker/Border → color/border
Picker/Border/Focused → color/action/primary
Picker/Border/Error → color/feedback/error
Picker/Text → color/text/primary
Picker/Placeholder → color/text/disabled
Picker/Label → color/text/secondary
Picker/HelperText → color/text/tertiary
Picker/ErrorText → color/feedback/error
Picker/Chevron → color/text/tertiary
Picker/Icon → color/text/tertiary
Picker/Focus/Ring → color/action/primary
Picker/Focus/Offset → 2px
Picker/Focus/Width → 2px
```

---

### Sizes

| Size | Height | Border Radius | Font | Padding |
|------|--------|---------------|------|---------|
| Small | 32px | `radius/sm` (8px) | `typography/body-s` | 8px |
| Medium | 44px | `radius/md` (12px) | `typography/body-m` | 12px |
| Large | 56px | `radius/md` (12px) | `typography/body-l` | 16px |

**Rules:**
- Medium is the default size
- Large is reserved for touch-first interfaces
- Small is reserved for compact UI
- Height is fixed — never grows with content

---

### Props

```typescript
interface PickerProps {
  size?: 'small' | 'medium' | 'large';
  state?: 'default' | 'focused' | 'error' | 'disabled' | 'loading';
  label: string;
  placeholder?: string;
  options: Array<{ label: string; value: string; disabled?: boolean }>;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
```

---

### Spacing Rules

```
Label ↔ Picker: spacing/3 (12px)
Picker ↔ Helper Text: spacing/2 (8px)
Picker ↔ Error Text: spacing/2 (8px)
Picker ↔ Picker (vertical): spacing/4 (16px)
Picker ↔ Container: spacing/4 (16px) horizontal, spacing/3 (12px) vertical
```

**Rules:**
- Never expose arbitrary spacing
- Always use semantic tokens
- Consistent spacing creates rhythm

---

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- `role="combobox"` on element
- `aria-expanded="true"` when dropdown is open
- `aria-invalid="true"` for error state
- `aria-required="true"` for required fields
- `aria-describedby` points to description or error message
- Focus ring visible on keyboard focus
- 44pt minimum touch target
- VoiceOver: announce label, value, and state ("Currency, USD, collapsed")
- Dynamic Type: text scales with system settings
- Reduce Motion: no picker animation

---

### Engineering Mapping

#### SwiftUI

```swift
Picker("Currency", selection: $currency) {
  Text("USD").tag("usd")
  Text("EUR").tag("eur")
  Text("GBP").tag("gbp")
}
.pickerStyle(AdvizmoPickerStyle(size: .medium))
.accessibilityLabel("Currency")
```

#### React

```tsx
<Picker
  size="medium"
  label="Currency"
  placeholder="Select currency"
  options={[
    { label: 'USD', value: 'usd' },
    { label: 'EUR', value: 'eur' },
    { label: 'GBP', value: 'gbp' },
  ]}
  value={currency}
  onChange={setCurrency}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoDropdown(
    expanded = expanded,
    onExpandedChange = { expanded = it },
    modifier = Modifier
) {
    Text("Select currency")
}
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Trigger label | `typography/body-m` | 14px | Regular |
| Trigger placeholder | `typography/body-m` | 14px | Regular |
| Dropdown item | `typography/body-m` | 14px | Regular |
| Dropdown item (selected) | `typography/body-m` | 14px | Medium |
| Section header | `typography/label-s` | 12px | Semibold |

### Radius

- Trigger: `radius/s` (8px)
- Dropdown panel: `radius/m` (12px)

### Icons

- Leading icon (optional): `icon/20` (20px)
- Trailing icon: `chevron-down` (16px) — indicates dropdown
- Checkmark on selected item: `checkmark` (16px)

### QA Checklist

- [ ] Placeholder visible when no selection
- [ ] Selected value shown in trigger
- [ ] Touch target ≥ 44pt
- [ ] Focus ring visible on trigger
- [ ] Screen reader: announces trigger + current value + expanded state
- [ ] Keyboard: Enter/Space opens, Arrow keys navigate, Escape closes, Enter selects
- [ ] Dropdown closes on outside click
- [ ] Scrollable if items exceed viewport
- [ ] Max 8 visible items before scroll

### Rules

1. NEVER use Picker for fewer than 3 options — use Radio or Segmented Control
2. ALWAYS show current selection in trigger
3. NEVER auto-select on hover — require explicit click/tap
4. ALWAYS close dropdown after selection
5. NEVER use Picker for multi-select — use Checkbox group
6. For searchable lists > 20 items, use Searchable Dropdown
7. For financial accounts, always show institution icon + account name + balance

### What Changed

| Change | Reason |
|--------|--------|
| Added Typography section with item states | Selected items use Medium weight |
| Added Icons section with chevron and checkmark | Standard dropdown affordances |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Badge

Compact element for status, labels, or counts. Badge communicates non-interactive metadata — never actionable, never blocking.

### Badge Family

| Badge | Usage | Visual |
|-------|-------|--------|
| Status | System state (success, warning, error, info) | Color background + text |
| Label | Category or tag | Neutral background + text |
| Count | Numeric indicator | Error background + white text |
| Dot | Subtle indicator | 8px circle |

### Badge Sizes

| Size | Height | Font | Padding | Radius |
|------|--------|------|---------|--------|
| SM | 20px | `typography/label-s` (10px) | 4px 8px | `radius/pill` (9999px) |
| MD | 24px | `typography/label-s` (10px) | 4px 10px | `radius/pill` (9999px) |
| LG | 32px | `typography/body-s` (12px) | 6px 12px | `radius/pill` (9999px) |
| Dot | 8px | — | — | `radius/pill` (9999px) |
| Count | 20px | `typography/label-s` (10px) | 0 | `radius/pill` (9999px) |

### Badge States

| State | Usage |
|-------|-------|
| Default | Normal display |
| Muted | Reduced emphasis (30% opacity) |

### Component Properties

```typescript
interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  type?: 'status' | 'label' | 'count' | 'dot';
  icon?: IconName;
  count?: number;
  muted?: boolean;
  children?: string;
}
```

### Token Mapping

```
Badge/Success/Background → color/feedback/success-subtle
Badge/Success/Text → color/feedback/success
Badge/Warning/Background → color/feedback/warning-subtle
Badge/Warning/Text → color/feedback/warning
Badge/Error/Background → color/feedback/error-subtle
Badge/Error/Text → color/feedback/error
Badge/Info/Background → color/feedback/info-subtle
Badge/Info/Text → color/feedback/info
Badge/Neutral/Background → color/bg-subtle
Badge/Neutral/Text → color/text-secondary
Badge/Count/Background → color/feedback/error
Badge/Count/Text → #FFFFFF
Badge/Dot/Background → color/feedback/error
Badge/Radius → radius/pill (9999px)
Badge/Muted/Opacity → 0.3
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Label text (SM/MD) | `typography/label-s` | 10px | Semibold |
| Label text (LG) | `typography/body-s` | 12px | Medium |
| Count number | `typography/label-s` | 10px | Bold |

### Radius

- All badges: `radius/pill` (9999px) — always pill shape

### Icons

- Optional leading icon: `icon/12` (12px) in LG size only
- Dot variant: no icon, no text — 8px circle only
- Count variant: no icon — number only

### Accessibility

- Badge is decorative — not focusable, not interactive
- Screen readers announce badge content alongside parent context
- Color alone never conveys meaning — always paired with text or icon
- Muted badges: `aria-hidden="true"` if purely decorative
- Count badges: announce full text (e.g., "3 unread messages")

### Engineering Mapping

#### SwiftUI

```swift
Badge(text: "Active", variant: .success, size: .medium)
Badge(count: 5, variant: .error)
Badge(variant: .success, type: .dot)
```

#### React

```tsx
<Badge variant="success" size="md">Active</Badge>
<Badge variant="error" type="count" count={5} />
<Badge variant="success" type="dot" />
```

#### Jetpack Compose

```kotlin
AdvizmoBadge(
    text = "Active",
    variant = BadgeVariant.Success,
    size = BadgeSize.Medium
)
```

### QA Checklist

- [ ] Pill shape renders at all sizes
- [ ] Text legible against background (contrast ≥ 4.5:1)
- [ ] Dot variant is exactly 8px
- [ ] Count variant shows correct number
- [ ] Muted state visually reduced
- [ ] Screen reader announces badge content
- [ ] Badge does not break layout when text is long

### Rules

1. NEVER make Badge interactive — use Button or Tag instead
2. NEVER use Badge for primary information — it's supplementary
3. ALWAYS use `radius/pill` (9999px) — never square badges
4. NEVER exceed 4 words in a badge — keep it compact
5. Use Status Badge for system states
6. Use Count Badge for notifications
7. Use Dot Badge for subtle indicators (e.g., unread)

### What Changed

| Change | Reason |
|--------|--------|
| Added `typography/label-s` (10px) for SM/MD | Aligned with Apple HIG small text |
| Standardized radius to `radius/pill` (9999px) | All badges are pill-shaped |
| Added Dot and Count variants | Common patterns missing from original |
| Added LG size | Touch-first interfaces need larger badges |
| Added Muted state | Reduced emphasis for secondary badges |
| Added QA checklist | Production component standard |

---

## Alert

Inline notification for important messages. Alert appears within page content — never blocks the entire screen.

### Alert Family

| Alert | Usage | Visual |
|-------|-------|--------|
| Success | Action succeeded | Green left border + green icon |
| Warning | Caution needed | Orange left border + orange icon |
| Error | Action failed | Red left border + red icon |
| Info | FYI message | Blue left border + blue icon |

### Alert Anatomy

```
┌──────────────────────────────────┐
│ ⚠  Title                    ✕  │ ← typography/body-m, Semibold
│ Description text here            │ ← typography/body-s, Regular
│                       [Action]   │ ← typography/body-m, Medium, color/action/primary
└──────────────────────────────────┘
```

### Alert States

| State | Usage |
|-------|-------|
| Default | Normal display |
| Dismissible | Has close button |
| With action | Has action link |
| Icon only | Title + icon, no description |

### Component Properties

```typescript
interface AlertProps {
  variant: 'success' | 'warning' | 'error' | 'info';
  title: string;
  description?: string;
  icon?: IconName;
  action?: {
    label: string;
    onPress: () => void;
  };
  onClose?: () => void;
  closable?: boolean;
}
```

### Token Mapping

```
Alert/Success/Background → color/feedback/success-subtle
Alert/Success/Border → color/feedback/success
Alert/Success/Icon → color/feedback/success
Alert/Success/Text → color/text-primary
Alert/Warning/Background → color/feedback/warning-subtle
Alert/Warning/Border → color/feedback/warning
Alert/Warning/Icon → color/feedback/warning
Alert/Error/Background → color/feedback/error-subtle
Alert/Error/Border → color/feedback/error
Alert/Error/Icon → color/feedback/error
Alert/Info/Background → color/feedback/info-subtle
Alert/Info/Border → color/feedback/info
Alert/Info/Icon → color/feedback/info
Alert/Radius → radius/m (12px)
Alert/Padding → spacing/4 (16px)
Alert/Border/Width → 3px (left only)
Alert/Close/Icon → color/text-tertiary
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title | `typography/body-m` | 14px | Semibold |
| Description | `typography/body-s` | 12px | Regular |
| Action label | `typography/body-m` | 14px | Medium |

### Radius

- Alert container: `radius/m` (12px)

### Icons

- Leading icon: `icon/20` (20px) — semantic per variant
- Close icon: `xmark` (16px) — optional

### Accessibility

- `role="alert"` for error alerts (immediate screen reader announcement)
- `role="status"` for success/info alerts
- Icon has `accessibilityLabel` describing the alert type
- Action button is focusable and keyboard accessible
- Close button has `accessibilityLabel="Dismiss alert"`
- Focus ring visible on action and close buttons

### Engineering Mapping

#### SwiftUI

```swift
AlertBanner(variant: .warning, title: "Account limit reached") {
    AlertAction("Upgrade", onPress: { showUpgrade() })
}
```

#### React

```tsx
<Alert
  variant="warning"
  title="Account limit reached"
  description="You've used 90% of your monthly transfers."
  action={{ label: 'Upgrade', onPress: () => setShowUpgrade(true) }}
  closable
/>
```

#### Jetpack Compose

```kotlin
AdvizmoAlert(
    variant = AlertVariant.Warning,
    title = "Account limit reached",
    description = "You've used 90% of your monthly transfers."
)
```

### QA Checklist

- [ ] Left border visible on all variants
- [ ] Icon matches variant color
- [ ] Close button present when closable
- [ ] Action link visible and tappable
- [ ] Touch target ≥ 44pt for action/close
- [ ] Screen reader announces error alerts immediately
- [ ] Focus ring visible on action and close
- [ ] Does not block page content

### Rules

1. NEVER use Alert for non-actionable information — use Banner
2. NEVER auto-dismiss error alerts — require explicit close
3. Success alerts: auto-dismiss after 5 seconds if transient
4. ALWAYS use left border for visual distinction (not just background)
5. NEVER stack multiple alerts — show one at a time
6. Use Alert for inline feedback within page content
7. Use Toast for transient feedback that auto-dismisses

### What Changed

| Change | Reason |
|--------|--------|
| Added left border (3px) for visual weight | Distinguishes Alert from content |
| Added `typography/body-s` for description | Consistent with Input pattern |
| Added close button support | Dismissible alerts were missing |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents Alert/Toast/Banner confusion |

---

## Banner

Persistent notification at top of screen. Banner stays visible until dismissed — never auto-dismisses.

### Banner Family

| Banner | Usage | Visual |
|-------|-------|--------|
| Info | General information | Blue background |
| Warning | Needs attention | Orange background |
| Error | Critical issue | Red background |

### Banner Anatomy

```
┌──────────────────────────────────────┐
│ ℹ  Title and description text here  │ ← full width
│                        [Action] [✕]  │ ← right-aligned
└──────────────────────────────────────┘
```

### Banner States

| State | Usage |
|-------|-------|
| Default | Persistent notification |
| With action | Has CTA button |
| Dismissible | Has close button |

### Component Properties

```typescript
interface BannerProps {
  variant: 'info' | 'warning' | 'error';
  title: string;
  description?: string;
  icon?: IconName;
  action?: {
    label: string;
    onPress: () => void;
  };
  onClose?: () => void;
}
```

### Token Mapping

```
Banner/Info/Background → color/feedback/info-subtle
Banner/Info/Text → color/text-primary
Banner/Warning/Background → color/feedback/warning-subtle
Banner/Warning/Text → color/text-primary
Banner/Error/Background → color/feedback/error-subtle
Banner/Error/Text → color/text-primary
Banner/Padding → spacing/4 (16px)
Banner/Radius → radius/m (12px)
Banner/Margin → spacing/4 (16px)
Banner/Close/Icon → color/text-tertiary
Banner/Action → color/action/primary
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title | `typography/body-m` | 14px | Semibold |
| Description | `typography/body-s` | 12px | Regular |
| Action label | `typography/body-m` | 14px | Medium |

### Radius

- Banner container: `radius/m` (12px)

### Icons

- Leading icon: `icon/20` (20px) — semantic per variant
- Close icon: `xmark` (16px) — when dismissible

### Accessibility

- `role="banner"` on container
- Close button has `accessibilityLabel="Dismiss banner"`
- Action button is focusable and keyboard accessible
- Focus ring visible on interactive elements
- Banner persists until explicitly dismissed

### Engineering Mapping

#### SwiftUI

```swift
Banner(variant: .info, title: "Maintenance scheduled") {
    BannerAction("Details", onPress: { showDetails() })
    BannerClose(onPress: { dismiss() })
}
```

#### React

```tsx
<Banner
  variant="info"
  title="Maintenance scheduled"
  description="System maintenance on Saturday 2-4am EST."
  action={{ label: 'Details', onPress: () => showDetails() }}
  onClose={() => dismissBanner()}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoBanner(
    variant = BannerVariant.Info,
    title = "Maintenance scheduled",
    description = "System maintenance on Saturday 2-4am EST."
)
```

### QA Checklist

- [ ] Background color matches variant
- [ ] Full width within parent container
- [ ] Close button present and tappable
- [ ] Action link visible and tappable
- [ ] Touch target ≥ 44pt
- [ ] Persists until explicitly dismissed
- [ ] Focus ring visible on interactive elements

### Rules

1. NEVER auto-dismiss Banner — it persists until user acts
2. NEVER use Banner for transient feedback — use Toast
3. NEVER use Banner for inline content feedback — use Alert
4. ALWAYS place Banner at top of screen, below Navigation Bar
5. Maximum 1 Banner visible at a time
6. Use Banner for system-wide notifications (maintenance, outages, updates)

### What Changed

| Change | Reason |
|--------|--------|
| Added close button support | Banners need explicit dismissal |
| Added `typography/body-s` for description | Consistent with other components |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents Banner/Alert/Toast confusion |

---

## List Item

Single row in a list or menu. List Item is the building block of all scrollable content — consistent height, predictable anatomy, composable leading/trailing slots.

### List Item Family

| Type | Usage | Height | Leading | Trailing |
|------|-------|--------|---------|----------|
| Basic | Simple text row | 44px | — | — |
| Icon + Text | Navigation or settings | 44px | `icon/20` | chevron |
| Avatar + Text | User or account row | 56px | Avatar | value/badge |
| Value + Text | Financial data display | 56px | icon | text value |
| Multi-line | Description row | auto | icon/avatar | chevron |
| Section Header | List section divider | 32px | — | — |

### List Item Anatomy

```
┌────────────────────────────────────┐
│ [Leading]  Title            [Trailing] │ ← 44px or 56px
│           Subtitle                    │
└────────────────────────────────────┘
───────────────────────────────────── ← 1px, color/border-subtle
```

### List Item States

| State | Usage |
|-------|-------|
| Default | Normal display |
| Hover | Mouse hover on interactive items |
| Pressed | Touch/click active |
| Selected | Currently selected item |
| Disabled | Non-interactive |

### Component Properties

```typescript
interface ListItemProps {
  variant?: 'basic' | 'icon' | 'avatar' | 'value' | 'multiline' | 'section';
  leading?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  selected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}
```

### Token Mapping

```
List/Item/Background → transparent
List/Item/Background/Hover → color/bg-subtle
List/Item/Background/Pressed → color/bg-subtle
List/Item/Background/Selected → color/accent-blue-subtle
List/Item/Background/Disabled → transparent
List/Item/Title → color/text-primary
List/Item/Title/Disabled → color/text-disabled
List/Item/Subtitle → color/text-tertiary
List/Item/Value → color/text-secondary
List/Item/Divider → color/border-subtle
List/Item/Height/Compact → 44px
List/Item/Height/Standard → 56px
List/Item/Height/Section → 32px
List/Item/Padding → spacing/4 (16px)
List/Item/Gap → spacing/3 (12px)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title | `typography/body-m` | 14px | Regular |
| Subtitle | `typography/body-s` | 12px | Regular |
| Value | `typography/body-m` | 14px | Medium |
| Section header | `typography/label-s` | 10px | Semibold |

### Radius

- No radius on List Item — it's a full-width row
- Avatar within leading: `radius/pill` (9999px)

### Icons

- Leading icon: `icon/20` (20px)
- Trailing chevron: `chevron-right` (16px)
- No decorative icons — only functional

### Accessibility

- Interactive items: `role="button"`, keyboard focusable
- Selected items: `aria-selected="true"`
- Leading/trailing elements have `accessibilityLabel`
- Divider: `role="separator"`
- Section headers: `role="header"`

### Engineering Mapping

#### SwiftUI

```swift
ListRow(title: "Total Balance", value: "$124,562.00", style: .value)
ListRow(title: "Accounts", trailing: .chevron)
ListRow(title: "Section", style: .sectionHeader)
```

#### React

```tsx
<ListItem
  variant="avatar"
  leading={<Avatar name="John" src="/avatar.jpg" />}
  title="John Smith"
  subtitle="john@example.com"
  trailing={<Badge variant="info">Primary</Badge>}
  onPress={() => navigate('/account')}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoListItem(
    title = "Total Balance",
    value = "$124,562.00",
    style = ListItemStyle.Value,
    onClick = { /* navigate */ }
)
```

### QA Checklist

- [ ] Correct height for variant (44px/56px/32px)
- [ ] Title visible and legible
- [ ] Touch target ≥ 44pt
- [ ] Divider present between items
- [ ] Selected state visually distinct
- [ ] Disabled state muted
- [ ] Focus ring visible on interactive items
- [ ] Screen reader announces title + subtitle + value

### Rules

1. NEVER make List Item interactive without `onPress` — it should not be tappable by default
2. ALWAYS use divider between items — never rely on spacing alone
3. Maximum 2 lines of text — truncate with ellipsis after that
4. NEVER stack multiple trailing elements — use one
5. Use section headers to group related items
6. For financial accounts, always show institution icon + account name + balance

### What Changed

| Change | Reason |
|--------|--------|
| Added 6 list types | Original only had 3 variants |
| Added section header type | Lists need section dividers |
| Added `typography/label-s` for sections | Consistent section styling |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents common misuse patterns |

---

## Modal

Dialog that requires user interaction before continuing. Modal blocks the entire screen — use sparingly, only for critical decisions.

### Modal Family

| Modal | Usage | Position | Dismiss |
|-------|-------|----------|---------|
| Bottom Sheet | iOS-style action sheet | Slides up from bottom | Swipe down or close button |
| Center Dialog | Confirmation/alert | Centered on screen | Overlay click or close button |
| Full Screen | Form or complex flow | Covers entire screen | Close/back button |

### Modal Anatomy

```
┌──────────────────────────────────┐
│ Modal Title                  ✕  │ ← typography/title-l, Semibold
├──────────────────────────────────┤
│                                  │
│  [Content]                       │ ← spacing/4 padding
│                                  │
├──────────────────────────────────┤
│ [Cancel]               [Confirm] │ ← spacing/4 padding
└──────────────────────────────────┘
```

### Modal States

| State | Usage |
|-------|-------|
| Opening | Animating in (200ms) |
| Open | Interactive |
| Closing | Animating out (150ms) |
| With actions | Has footer buttons |
| Without actions | Content only |

### Component Properties

```typescript
interface ModalProps {
  variant: 'bottom' | 'center' | 'fullscreen';
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: Array<{
    label: string;
    variant: 'primary' | 'secondary' | 'destructive';
    onPress: () => void;
  }>;
  closeOnOverlayPress?: boolean;
}
```

### Token Mapping

```
Modal/Background → color/surface-elevated
Modal/Overlay → color/overlay (60% opacity)
Modal/Shadow → elevation/floating
Modal/Radius/Bottom → radius/m (12px, top corners only)
Modal/Radius/Center → radius/m (12px, all corners)
Modal/Radius/Fullscreen → none
Modal/Padding → spacing/4 (16px)
Modal/Header/Border → color/border-subtle
Modal/Footer/Border → color/border-subtle
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title | `typography/title-l` | 18px | Semibold |
| Body content | `typography/body-m` | 14px | Regular |
| Action button (primary) | `typography/body-m` | 14px | Semibold |
| Action button (secondary) | `typography/body-m` | 14px | Regular |
| Action button (destructive) | `typography/body-m` | 14px | Regular |

### Radius

- Bottom Sheet: `radius/m` (12px, top corners only)
- Center Dialog: `radius/m` (12px, all corners)
- Full Screen: none

### Icons

- Close button: `xmark` (16px) — top right
- Optional leading icon in title: `icon/24` (24px)

### Accessibility

- `role="dialog"`, `aria-modal="true"`
- Focus trapped within modal
- Escape key closes modal
- Return focus to trigger element on close
- Overlay click: optional, controlled by `closeOnOverlayPress`
- Screen reader: announces title + "dialog" role

### Engineering Mapping

#### SwiftUI

```swift
.sheet(isPresented: $showModal) {
    ModalView(title: "Confirm Transfer") {
        // content
    } actions: {
        Button("Cancel", role: .cancel) { dismiss() }
        Button("Confirm", role: .destructive) { confirm() }
    }
}
```

#### React

```tsx
<Modal
  variant="center"
  visible={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Transfer"
  actions={[
    { label: 'Cancel', variant: 'secondary', onPress: () => setShowModal(false) },
    { label: 'Confirm', variant: 'primary', onPress: () => confirm() },
  ]}
>
  <p>Transfer $500 to Savings?</p>
</Modal>
```

#### Jetpack Compose

```kotlin
AdvizmoModal(
    visible = showModal,
    onDismiss = { showModal = false },
    title = "Confirm Transfer"
) {
    // content
}
```

### QA Checklist

- [ ] Overlay covers entire screen
- [ ] Focus trapped within modal
- [ ] Escape key closes modal
- [ ] Close button visible and tappable
- [ ] Actions properly spaced
- [ ] Touch target ≥ 44pt for all buttons
- [ ] Animation smooth (200ms in, 150ms out)
- [ ] Return focus to trigger on close

### Rules

1. NEVER use Modal for non-critical information — use Alert or Banner
2. NEVER stack multiple modals — resolve first before opening second
3. ALWAYS provide a way to close (close button or cancel action)
4. NEVER auto-close modal — require explicit user action
5. Use Bottom Sheet for mobile action selection
6. Use Center Dialog for confirmations and alerts
7. Use Full Screen for complex forms or multi-step flows

### What Changed

| Change | Reason |
|--------|--------|
| Added Full Screen variant | Complex forms need full viewport |
| Added `typography/title-l` for title | Consistent with design system |
| Added opening/closing states | Animation states were missing |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents modal overuse |

---

## Bottom Sheet

iOS-style sheet that slides up from bottom. Bottom Sheet is for selecting options or viewing details without leaving the current screen.

### Bottom Sheet Family

| Type | Usage | Handle | Snap Points |
|------|-------|--------|-------------|
| Simple | Action selection | Yes | Fixed height |
| List | Option selection | Yes | Dynamic height |
| Map | Content + map | Yes | 50%, 75%, 100% |
| Non-dismissible | Required action | No | Fixed height |

### Bottom Sheet Anatomy

```
┌──────────────────────────────┐
│          ━━━━━━━━━           │ ← drag handle (36×4px)
│                              │
│  [Content]                   │ ← spacing/4 padding
│                              │
└──────────────────────────────┘
```

### Component Properties

```typescript
interface BottomSheetProps {
  variant?: 'simple' | 'list' | 'map' | 'non-dismissible';
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[];
  handleVisible?: boolean;
}
```

### Token Mapping

```
BottomSheet/Background → color/surface-elevated
BottomSheet/Handle → color/text-disabled
BottomSheet/Shadow → elevation/floating
BottomSheet/Radius → radius/m (12px, top corners only)
BottomSheet/Padding → spacing/4 (16px)
BottomSheet/Overlay → color/overlay (60% opacity)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title (if used) | `typography/title-l` | 18px | Semibold |
| Content | `typography/body-m` | 14px | Regular |

### Radius

- Top corners: `radius/m` (12px)
- Bottom: none (extends to screen edge)

### Icons

- Handle bar: no icon — visual affordance only
- Close button (optional): `xmark` (16px) — top right

### Accessibility

- `role="dialog"`, `aria-modal="true"`
- Focus trapped within sheet
- Swipe down to dismiss (with gesture)
- Handle announced as "drag handle" for VoiceOver
- Screen reader: announces title + "sheet" role

### Engineering Mapping

#### SwiftUI

```swift
.sheet(isPresented: $showSheet) {
    BottomSheet(handleVisible: true) {
        // content
    }
}
```

#### React

```tsx
<BottomSheet
  visible={showSheet}
  onClose={() => setShowSheet(false)}
  handleVisible
  snapPoints={[0.5, 0.75, 1.0]}
>
  <AccountList onSelect={selectAccount} />
</BottomSheet>
```

#### Jetpack Compose

```kotlin
AdvizmoBottomSheet(
    visible = showSheet,
    onDismiss = { showSheet = false },
    handleVisible = true
) {
    // content
}
```

### QA Checklist

- [ ] Handle visible and draggable
- [ ] Swipe down to dismiss works
- [ ] Snap points animate correctly
- [ ] Overlay visible and tappable (unless non-dismissible)
- [ ] Focus trapped within sheet
- [ ] Animation smooth (300ms spring)
- [ ] Content scrollable if exceeds sheet height

### Rules

1. NEVER use Bottom Sheet for critical confirmations — use Center Dialog
2. ALWAYS show handle bar for dismissible sheets
3. NEVER auto-dismiss Bottom Sheet — require explicit swipe or close
4. NEVER stack multiple Bottom Sheets — resolve first
5. For account selection, always show institution icon + name + balance

### What Changed

| Change | Reason |
|--------|--------|
| Added 4 sheet types | Original had no variants |
| Added snap points support | Map sheets need multiple heights |
| Added non-dismissible variant | Required actions need fixed sheets |
| Added QA checklist | Production component standard |

---

## Tab Bar

Bottom navigation for switching between primary views. Tab Bar is for top-level navigation only — never for sub-navigation.

### Tab Bar Family

| Type | Usage | Tabs | Badge |
|------|-------|------|-------|
| Standard | 3-5 tabs | Icons + labels | Optional count |
| Compact | 3 tabs | Icons only | Optional dot |
| With overflow | 5+ tabs | Icons + labels | Overflow menu |

### Tab Bar Anatomy

```
┌──────┬──────┬──────┬──────┬──────┐
│  🏠  │  💰  │  📊  │  🔔  │  ⚙️  │ ← 56px + safe area
│ Home │ Accs │ Data │ Noti │ More │
└──────┴──────┴──────┴──────┴──────┘
```

### Component Properties

```typescript
interface TabBarProps {
  variant?: 'standard' | 'compact' | 'overflow';
  tabs: Array<{
    icon: IconName;
    label: string;
    badge?: number;
    badgeType?: 'count' | 'dot';
  }>;
  activeTab: number;
  onTabPress: (index: number) => void;
}
```

### Token Mapping

```
TabBar/Background → color/surface
TabBar/Border → color/border-subtle
TabBar/Icon/Inactive → color/text-disabled
TabBar/Icon/Active → color/accent-blue
TabBar/Label/Inactive → color/text-disabled
TabBar/Label/Active → color/accent-blue
TabBar/Height → 56px + safe area bottom
TabBar/PadTop → spacing/1 (4px)
TabBar/Badge/Background → color/feedback-error
TabBar/Badge/Text → #FFFFFF
TabBar/Badge/Dot → color/feedback-error
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Tab label | `typography/label-s` | 10px | Medium |
| Tab label (active) | `typography/label-s` | 10px | Semibold |

### Radius

- No radius — full-width bottom bar
- Badge: `radius/pill` (9999px)

### Icons

- Tab icons: `icon/24` (24px) — outlined style
- Active state: filled variant of same icon
- Badge dot: 8px circle

### Accessibility

- `role="tablist"` on container
- `role="tab"` on each tab
- `aria-selected="true"` on active tab
- Badge count announced to screen readers
- Tab between tabs with Arrow keys

### Engineering Mapping

#### SwiftUI

```swift
TabView(selection: $selectedTab) {
    HomeView().tabItem { Label("Home", systemImage: "house") }.tag(0)
    AccountsView().tabItem { Label("Accounts", systemImage: "banknote") }.tag(1)
}
```

#### React

```tsx
<TabBar
  tabs={[
    { icon: 'home', label: 'Home' },
    { icon: 'banknote', label: 'Accounts', badge: 3 },
    { icon: 'chart-line', label: 'Data' },
    { icon: 'bell', label: 'Alerts', badgeType: 'dot' },
    { icon: 'gear', label: 'More' },
  ]}
  activeTab={activeTab}
  onTabPress={setActiveTab}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoTabBar(
    tabs = tabs,
    activeTab = selectedTab,
    onTabPress = { selectedTab = it }
)
```

### QA Checklist

- [ ] 3-5 tabs visible without scroll
- [ ] Active tab clearly indicated (filled icon + color)
- [ ] Touch target ≥ 44pt per tab
- [ ] Badge visible and legible
- [ ] Safe area respected on iPhone
- [ ] Focus ring visible on tab
- [ ] Screen reader announces tab group + selected tab

### Rules

1. NEVER use Tab Bar for sub-navigation — use Segmented Control
2. NEVER exceed 5 tabs — use overflow menu for more
3. ALWAYS have exactly one active tab
4. Tab order must be consistent across screens
5. NEVER badge primary tabs — keep them clean
6. Use Tab Bar for top-level navigation only

### What Changed

| Change | Reason |
|--------|--------|
| Added 3 tab types | Standard/Compact/Overflow cover all cases |
| Added badge types (count/dot) | Two notification patterns needed |
| Added `typography/label-s` (10px) | Apple HIG standard for tab labels |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents sub-navigation misuse |

---

## Navigation Bar

Top navigation bar for screen title and actions. Navigation Bar is persistent — always visible at the top of the screen.

### Navigation Bar Family

| Type | Usage | Title | Actions |
|------|-------|-------|---------|
| Standard | Default navigation | Center title | Left (back) + Right (action) |
| Large Title | iOS-style expanding | Large → small on scroll | Left + Right |
| Transparent | Overlay on content | No bar visible | Floating actions |
| Minimal | Secondary screens | Left-aligned title | Right only |

### Navigation Bar Anatomy

```
┌──────────────────────────────────┐
│ ←  Title                    ⋯  │ ← 44px + safe area
└──────────────────────────────────┘
```

### Component Properties

```typescript
interface NavBarProps {
  variant?: 'standard' | 'large' | 'transparent' | 'minimal';
  title: string;
  leftAction?: {
    icon: IconName;
    onPress: () => void;
    label: string;
  };
  rightAction?: {
    icon: IconName;
    onPress: () => void;
    label: string;
  };
  transparent?: boolean;
}
```

### Token Mapping

```
NavBar/Background → color/surface
NavBar/Background/Transparent → transparent
NavBar/Border → color/border-subtle
NavBar/Title → color/text-primary
NavBar/Title/Font → typography/title-l
NavBar/LargeTitle → typography/display-l
NavBar/Action → color/accent-blue
NavBar/Action/Disabled → color/text-disabled
NavBar/Height → 44px + safe area top
NavBar/Padding → spacing/4 (16px)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title (standard) | `typography/title-l` | 18px | Semibold |
| Title (large, collapsed) | `typography/title-l` | 18px | Semibold |
| Title (large, expanded) | `typography/display-l` | 34px | Bold |
| Action label | `typography/body-m` | 14px | Regular |

### Radius

- No radius — full-width bar

### Icons

- Back button: `chevron-left` (20px)
- More menu: `ellipsis` (24px)
- Action icons: `icon/24` (24px)

### Accessibility

- Title announced by screen reader
- Back button has `accessibilityLabel="Back"`
- Right action has descriptive `accessibilityLabel`
- Focus ring visible on interactive elements

### Engineering Mapping

#### SwiftUI

```swift
NavigationStack {
    ContentView()
        .navigationTitle("Accounts")
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button(action: { showMore() }) {
                    Image(systemName: "ellipsis")
                }
            }
        }
}
```

#### React

```tsx
<NavBar
  title="Accounts"
  leftAction={{ icon: 'chevron-left', onPress: () => goBack(), label: 'Back' }}
  rightAction={{ icon: 'ellipsis', onPress: () => showMore(), label: 'More options' }}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoTopAppBar(
    title = "Accounts",
    navigationIcon = { IconButton(onClick = { goBack() }) { Icon(Icons.AutoMirrored.Filled.ArrowBack, "Back") } },
    actions = { IconButton(onClick = { showMore() }) { Icon(Icons.Default.MoreVert, "More") } }
)
```

### QA Checklist

- [ ] Title visible and centered/left-aligned per variant
- [ ] Back button present when applicable
- [ ] Touch target ≥ 44pt for all actions
- [ ] Safe area respected on iPhone
- [ ] Large title collapses on scroll
- [ ] Focus ring visible on actions
- [ ] Screen reader announces title and actions

### Rules

1. NEVER hide the back button on pushed screens
2. ALWAYS show screen title — users must know where they are
3. NEVER put more than 2 actions in Navigation Bar
4. Use Large Title for primary screens with scrollable content
5. Use Standard for all other screens

### What Changed

| Change | Reason |
|--------|--------|
| Added 4 bar types | Standard/Large/Transparent/Minimal cover all cases |
| Added `typography/display-l` for large title | iOS large title pattern |
| Added QA checklist | Production component standard |
| Added Rules section | Prevents navigation UX issues |

---

## Avatar

User or entity representation. Avatar communicates identity — always paired with a name or accessible label.

### Avatar Family

| Type | Usage | Visual |
|-------|-------|--------|
| Image | User photo | Circular photo |
| Initials | Fallback when no photo | Background + initials text |
| Icon | Entity/organization | Background + icon |
| Group | Multiple users | Overlapping avatars |

### Avatar Sizes

| Size | Dimension | Font | Radius |
|------|-----------|------|--------|
| XS | 24px | `typography/label-s` (10px) | `radius/pill` (9999px) |
| SM | 32px | `typography/label-s` (10px) | `radius/pill` (9999px) |
| MD | 40px | `typography/body-s` (12px) | `radius/pill` (9999px) |
| LG | 56px | `typography/body-m` (14px) | `radius/pill` (9999px) |
| XL | 72px | `typography/title-l` (18px) | `radius/pill` (9999px) |

### Avatar States

| State | Usage |
|-------|-------|
| Default | Normal display |
| Loading | Image loading |
| Error | Image failed to load |
| Online | Status indicator |

### Component Properties

```typescript
interface AvatarProps {
  variant: 'image' | 'initials' | 'icon' | 'group';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  name?: string;
  icon?: IconName;
  status?: 'online' | 'offline' | 'away';
  group?: Array<{ src?: string; name?: string }>;
}
```

### Token Mapping

```
Avatar/Background → color/accent-blue-subtle
Avatar/Text → color/accent-blue
Avatar/Border → color/surface
Avatar/Status/Online → color/feedback-success
Avatar/Status/Offline → color/text-disabled
Avatar/Status/Away → color/feedback-warning
Avatar/Radius → radius/pill (9999px)
Avatar/Group/Overlap → -8px
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Initials (XS/SM) | `typography/label-s` | 10px | Semibold |
| Initials (MD) | `typography/body-s` | 12px | Semibold |
| Initials (LG/XL) | `typography/body-m`/`title-l` | 14px/18px | Semibold |

### Radius

- All avatars: `radius/pill` (9999px) — always circular

### Icons

- Entity icon: `icon/24` (24px) in MD, scales with size
- Status dot: 10px circle, positioned bottom-right

### Accessibility

- `accessibilityLabel` with user name (e.g., "John Smith")
- Image avatar: `alt` text with user name
- Status indicator: announced as "online", "offline", or "away"
- Group avatars: announce count (e.g., "3 team members")

### Engineering Mapping

#### SwiftUI

```swift
Avatar(name: "John Smith", src: "/avatar.jpg", size: .medium)
Avatar(name: "John Smith", size: .medium) // initials fallback
AvatarGroup(members: [user1, user2, user3], max: 3)
```

#### React

```tsx
<Avatar variant="image" size="md" src="/avatar.jpg" name="John Smith" status="online" />
<Avatar variant="initials" size="md" name="John Smith" />
<Avatar variant="group" group={[{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }]} />
```

#### Jetpack Compose

```kotlin
AdvizmoAvatar(
    name = "John Smith",
    imageUrl = "/avatar.jpg",
    size = AvatarSize.Medium,
    status = Status.Online
)
```

### QA Checklist

- [ ] Circular shape at all sizes
- [ ] Initials rendered correctly (first letter of first + last name)
- [ ] Image loaded or fallback to initials
- [ ] Status dot positioned correctly
- [ ] Group overlap consistent
- [ ] Screen reader announces name + status
- [ ] Touch target ≥ 44pt if interactive

### Rules

1. NEVER use Avatar without `name` or `accessibilityLabel` — it must be identifiable
2. ALWAYS fall back to initials when image fails — never show broken image
3. NEVER use Avatar for decorative purposes without accessibility label
4. Use Group variant for team/multi-user displays
5. Maximum 3 visible avatars in group — show count for overflow

### What Changed

| Change | Reason |
|--------|--------|
| Added XS and XL sizes | Covering all use cases from chips to profiles |
| Added Group variant | Multi-user displays were missing |
| Added loading/error states | Image loading needs fallback states |
| Added status indicator | Online/offline is common in chat/team features |
| Added QA checklist | Production component standard |

---

## Icon Button

Button that displays only an icon. Icon Button is for actions where space is limited — always paired with an accessible label.

### Icon Button Family

| Variant | Usage | Background | Border |
|---------|-------|------------|--------|
| Filled | Primary icon action | `color/accent-blue` | none |
| Outlined | Secondary icon action | transparent | `color/border` |
| Ghost | Tertiary icon action | transparent | none |
| Danger | Destructive icon action | `color/feedback-error-subtle` | none |

### Icon Button Sizes

| Size | Dimension | Icon Size | Radius |
|------|-----------|-----------|--------|
| SM | 32px | 16px | `radius/pill` (9999px) |
| MD | 44px | 20px | `radius/pill` (9999px) |
| LG | 56px | 24px | `radius/pill` (9999px) |

### Icon Button States

| State | Usage |
|-------|-------|
| Default | Ready for interaction |
| Hover | Mouse hover |
| Pressed | Touch/click active |
| Disabled | Non-interactive |
| Loading | Action in progress |

### Component Properties

```typescript
interface IconButtonProps {
  variant: 'filled' | 'outlined' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon: IconName;
  label: string;
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}
```

### Token Mapping

```
IconButton/Filled/Background → color/accent-blue
IconButton/Filled/Icon → #FFFFFF
IconButton/Filled/Background/Hover → color/accent-blue-hover
IconButton/Outlined/Border → color/border
IconButton/Outlined/Icon → color/text-primary
IconButton/Ghost/Icon → color/text-secondary
IconButton/Ghost/Background/Hover → color/bg-subtle
IconButton/Danger/Background → color/feedback-error-subtle
IconButton/Danger/Icon → color/feedback-error
IconButton/Disabled/Icon → color/text-disabled
IconButton/Disabled/Background → color/bg-disabled
IconButton/Focus/Ring → color/focus-ring
IconButton/Radius → radius/pill (9999px)
```

### Typography

- No typography — icon only
- `label` is for accessibility, not display

### Radius

- All sizes: `radius/pill` (9999px) — always circular

### Icons

- Icon: `icon/20` (SM), `icon/20` (MD), `icon/24` (LG)
- Loading: spinner replaces icon temporarily

### Accessibility

- `accessibilityLabel` required (e.g., "Close", "Settings")
- Minimum touch target: 44×44px (enforced by MD size)
- Focus ring visible on keyboard focus
- Loading state: `accessibilityLabel` includes "loading"

### Engineering Mapping

#### SwiftUI

```swift
IconButton(icon: "xmark", label: "Close", variant: .ghost) { dismiss() }
IconButton(icon: "plus", label: "Add account", variant: .filled) { addAccount() }
```

#### React

```tsx
<IconButton variant="ghost" icon="xmark" label="Close" onPress={() => dismiss()} />
<IconButton variant="filled" icon="plus" label="Add account" onPress={() => addAccount()} />
```

#### Jetpack Compose

```kotlin
AdvizmoIconButton(
    icon = Icons.Default.Close,
    label = "Close",
    variant = IconButtonVariant.Ghost,
    onClick = { dismiss() }
)
```

### QA Checklist

- [ ] Touch target ≥ 44pt
- [ ] Icon centered within button
- [ ] Focus ring visible on keyboard focus
- [ ] Screen reader announces label
- [ ] Disabled state visually muted
- [ ] Loading state shows spinner

### Rules

1. NEVER use Icon Button without `label` — it must be accessible
2. NEVER use Icon Button for primary actions — use labeled Button
3. ALWAYS ensure touch target ≥ 44pt
4. Use Ghost for tertiary/inline actions
5. Use Filled for primary floating actions (FAB)

### What Changed

| Change | Reason |
|--------|--------|
| Added Danger variant | Destructive icon actions needed |
| Added Loading state | Async actions need feedback |
| Standardized radius to `radius/pill` | Always circular |
| Added QA checklist | Production component standard |

---

## Divider

Visual separator between content. Divider is purely decorative — never interactive, never announced by screen readers.

### Divider Family

| Type | Usage | Visual |
|------|-------|--------|
| Full | Full-width separator | 1px line |
| Inset | Left-indented separator | 1px line, left offset |
| Middle | Centered separator | 1px line, centered |
| With text | Labeled separator | Line + text label |

### Component Properties

```typescript
interface DividerProps {
  variant?: 'full' | 'inset' | 'middle' | 'text';
  text?: string;
  spacing?: 'none' | 'sm' | 'md';
}
```

### Token Mapping

```
Divider/Color → color/border-subtle
Divider/Thickness → 1px
Divider/Inset → spacing/4 (16px)
Divider/Middle/Width → calc(100% - spacing/4 * 2)
Divider/Text/Color → color/text-tertiary
Divider/Text/Background → color/surface
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Divider text | `typography/label-s` | 10px | Medium |

### Radius

- No radius — 1px horizontal line

### Icons

- No icons

### Accessibility

- `role="separator"` on element
- Purely decorative — not focusable
- Text variant: text content available to screen readers
- `aria-orientation="horizontal"`

### Engineering Mapping

#### SwiftUI

```swift
Divider()
Divider().inset(spacing: 16)
Divider().overlay(Text("OR").padding(.horizontal, 8))
```

#### React

```tsx
<Divider />
<Divider variant="inset" />
<Divider variant="text" text="OR" />
```

#### Jetpack Compose

```kotlin
HorizontalDivider()
HorizontalDivider(modifier = Modifier.padding(horizontal = 16.dp))
```

### QA Checklist

- [ ] Line visible at 1px
- [ ] Color meets contrast against background
- [ ] Inset variant has correct left offset
- [ ] Text variant: text centered and legible
- [ ] Full width within parent container

### Rules

1. NEVER use Divider for spacing — use margin/padding
2. NEVER make Divider interactive or focusable
3. Use Full divider between unrelated sections
4. Use Inset divider between related items (e.g., list items)
5. Use Text divider to separate logical groups (e.g., "OR")

### What Changed

| Change | Reason |
|--------|--------|
| Added 4 divider types | Text and Middle variants were missing |
| Added `typography/label-s` for text divider | Consistent label styling |
| Added QA checklist | Production component standard |

---

## Empty State

Placeholder when no content is available. Empty State guides users toward action — never just says "no data."

### Empty State Anatomy

```
┌──────────────────────────────────┐
│                                  │
│            [Icon]                │ ← icon/48, color/text-disabled
│                                  │
│          Title here              │ ← typography/title-l, Semibold
│                                  │
│   Description text explaining    │ ← typography/body-m, Regular
│   why this is empty and what     │
│   to do next                     │
│                                  │
│        [Primary Action]          │ ← Button variant=primary
│                                  │
└──────────────────────────────────┘
```

### Empty State Types

| Type | Usage | Icon |
|------|-------|------|
| No data | Empty list or table | `tray` |
| No results | Empty search results | `magnifyingglass` |
| No access | Permission required | `lock` |
| Error | Failed to load | `exclamationmark.triangle` |
| Onboarding | First-time experience | `sparkles` |

### Component Properties

```typescript
interface EmptyStateProps {
  type?: 'no-data' | 'no-results' | 'no-access' | 'error' | 'onboarding';
  icon?: IconName;
  title: string;
  description: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}
```

### Token Mapping

```
EmptyState/Icon → color/text-disabled
EmptyState/Title → color/text-primary
EmptyState/Description → color/text-secondary
EmptyState/Action → color/accent-blue
EmptyState/Padding → spacing/8 (32px)
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Title | `typography/title-l` | 18px | Semibold |
| Description | `typography/body-m` | 14px | Regular |
| Action | Button typography | — | — |

### Radius

- No radius — centered content block

### Icons

- Primary icon: `icon/48` (48px) — semantic per type
- Optional illustration: custom SVG

### Accessibility

- Title announced by screen reader
- Description available to screen readers
- Action button is focusable and keyboard accessible
- Icon has `accessibilityLabel` if meaningful

### Engineering Mapping

#### SwiftUI

```swift
EmptyState(
    icon: "tray",
    title: "No transactions yet",
    description: "Your transactions will appear here once you make your first transfer.",
    action: EmptyStateAction("Make a transfer", onPress: { showTransfer() })
)
```

#### React

```tsx
<EmptyState
  type="no-data"
  icon="tray"
  title="No transactions yet"
  description="Your transactions will appear here once you make your first transfer."
  action={{ label: 'Make a transfer', onPress: () => showTransfer() }}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoEmptyState(
    icon = Icons.Default.Inbox,
    title = "No transactions yet",
    description = "Your transactions will appear here once you make your first transfer.",
    action = { Text("Make a transfer") }
)
```

### QA Checklist

- [ ] Icon visible and centered
- [ ] Title legible
- [ ] Description legible
- [ ] Action button visible and tappable
- [ ] Content centered vertically
- [ ] Touch target ≥ 44pt for action

### Rules

1. NEVER show Empty State without guidance — always explain what to do next
2. NEVER show Empty State for loading — use Skeleton Loader
3. ALWAYS provide an action when possible
4. Use specific icons per type — never generic

### What Changed

| Change | Reason |
|--------|--------|
| Added 5 empty state types | Different contexts need different messaging |
| Added `typography/title-l` for title | Consistent heading styling |
| Added QA checklist | Production component standard |

---

## Skeleton Loader

Placeholder content while loading. Skeleton Loader reduces perceived wait time — never show empty state during loading.

### Skeleton Loader Family

| Type | Usage | Shape |
|------|-------|-------|
| Text | Text content placeholder | Rectangular blocks |
| Circle | Avatar/icon placeholder | Circle |
| Rect | Card/image placeholder | Rectangle |
| List | List items placeholder | Multiple rows |
| Card | Card placeholder | Card-shaped block |

### Skeleton Loader States

| State | Usage |
|-------|-------|
| Shimmer | Default loading animation |
| Static | Paused state (e.g., reduced motion) |

### Component Properties

```typescript
interface SkeletonProps {
  type: 'text' | 'circle' | 'rect' | 'list' | 'card';
  width?: number | string;
  height?: number;
  borderRadius?: number;
  lines?: number;
  animated?: boolean;
}
```

### Token Mapping

```
Skeleton/Background → color/bg-subtle
Skeleton/Shimmer → color/surface
Skeleton/Animation/Duration → 1.5s
Skeleton/Animation/Direction → left-to-right
```

### Typography

- No typography — purely visual placeholder

### Radius

- Text: `radius/s` (8px)
- Circle: `radius/pill` (9999px)
- Rect: `radius/m` (12px)
- Card: `radius/m` (12px)

### Icons

- No icons — shape placeholders only

### Accessibility

- `aria-hidden="true"` — decorative only
- Screen readers: announce "Loading..." via live region
- Reduce Motion: disable shimmer animation

### Engineering Mapping

#### SwiftUI

```swift
Skeleton(type: .text, lines: 3)
Skeleton(type: .circle, size: 40)
Skeleton(type: .card)
```

#### React

```tsx
<Skeleton type="text" lines={3} width="100%" />
<Skeleton type="circle" width={40} height={40} />
<Skeleton type="card" width="100%" height={200} />
```

#### Jetpack Compose

```kotlin
AdvizmoSkeleton(type = SkeletonType.Text, lines = 3)
AdvizmoSkeleton(type = SkeletonType.Circle, size = 40.dp)
```

### QA Checklist

- [ ] Shimmer animation smooth
- [ ] Reduce Motion disables animation
- [ ] Shape matches content being loaded
- [ ] Background color correct
- [ ] Screen reader announces loading state

### Rules

1. NEVER use Skeleton for error states — use Empty State
2. NEVER show Skeleton indefinitely — set max 10s timeout
3. ALWAYS match skeleton shape to actual content layout
4. Use Text skeleton for text content
5. Use Card skeleton for card content

### What Changed

| Change | Reason |
|--------|--------|
| Added 5 skeleton types | Different content types need different shapes |
| Added Static state | Reduce Motion support |
| Added QA checklist | Production component standard |

---

## Toast

Transient notification that auto-dismisses. Toast provides brief feedback — never for critical information that requires action.

### Toast Family

| Type | Usage | Background | Duration |
|------|-------|------------|----------|
| Success | Action succeeded | `color/feedback-success` | 3s |
| Error | Action failed | `color/feedback-error` | 5s |
| Info | FYI message | `color/text-primary` | 3s |
| Warning | Caution | `color/feedback-warning` | 4s |

### Toast Anatomy

```
┌──────────────────────────────────┐
│  ✓  Message here         Action  │ ← spacing/3 padding
└──────────────────────────────────┘
```

### Component Properties

```typescript
interface ToastProps {
  variant: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
  onDismiss?: () => void;
  position?: 'top' | 'bottom';
}
```

### Token Mapping

```
Toast/Success/Background → color/feedback-success
Toast/Success/Text → #FFFFFF
Toast/Success/Icon → #FFFFFF
Toast/Error/Background → color/feedback-error
Toast/Error/Text → #FFFFFF
Toast/Error/Icon → #FFFFFF
Toast/Info/Background → color/text-primary
Toast/Info/Text → #FFFFFF
Toast/Info/Icon → #FFFFFF
Toast/Warning/Background → color/feedback-warning
Toast/Warning/Text → color/text-primary
Toast/Warning/Icon → color/text-primary
Toast/Radius → radius/m (12px)
Toast/Padding → spacing/3 (12px) horizontal, spacing/2 (8px) vertical
Toast/Margin → spacing/4 (16px)
Toast/Shadow → elevation/floating
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Message | `typography/body-m` | 14px | Regular |
| Action label | `typography/body-m` | 14px | Semibold |

### Radius

- Toast container: `radius/m` (12px)

### Icons

- Leading icon: `icon/20` (20px) — semantic per variant
- Success: `checkmark.circle.fill`
- Error: `xmark.circle.fill`
- Info: `info.circle.fill`
- Warning: `exclamationmark.triangle.fill`

### Accessibility

- `role="status"` for success/info
- `role="alert"` for error (immediate announcement)
- Auto-dismiss: brief announcement before dismissal
- Action button is focusable and keyboard accessible
- Position does not obscure critical content

### Engineering Mapping

#### SwiftUI

```swift
toast(.success, message: "Transfer complete", duration: 3) {
    ToastAction("View", onPress: { showTransfer() })
}
```

#### React

```tsx
<Toast
  variant="success"
  message="Transfer complete"
  duration={3000}
  action={{ label: 'View', onPress: () => showTransfer() }}
/>
```

#### Jetpack Compose

```kotlin
AdvizmoToast(
    variant = ToastVariant.Success,
    message = "Transfer complete",
    duration = 3000L
)
```

### QA Checklist

- [ ] Auto-dismisses after correct duration
- [ ] Action button visible and tappable
- [ ] Icon matches variant
- [ ] Text legible against background
- [ ] Does not obscure critical content
- [ ] Screen reader announces message
- [ ] Multiple toasts stack correctly

### Rules

1. NEVER use Toast for critical information — use Alert or Modal
2. NEVER auto-dismiss error toasts — require explicit close or longer duration
3. Maximum 1 toast visible at a time — queue additional toasts
4. ALWAYS show leading icon for visual scanning
5. Use Toast for transient success/error feedback only

### What Changed

| Change | Reason |
|--------|--------|
| Added Warning variant | Missing from original |
| Added position prop | Top/bottom placement flexibility |
| Added `typography/body-m` for message | Consistent with design system |
| Added duration per variant | Different severity needs different timing |
| Added QA checklist | Production component standard |

---

## Tooltip

Contextual information on hover/focus. Tooltip is for supplementary info — never for critical instructions.

### Tooltip Anatomy

```
┌──────────────────┐
│  Tooltip text    │ ← typography/body-s
└──────────────────┘
       ▽
```

### Tooltip Positions

| Position | Usage |
|----------|-------|
| Top | Default — appears above trigger |
| Bottom | Below trigger |
| Left | Left of trigger |
| Right | Right of trigger |

### Component Properties

```typescript
interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
  delay?: number;
}
```

### Token Mapping

```
Tooltip/Background → color/text-primary
Tooltip/Text → #FFFFFF
Tooltip/Radius → radius/s (8px)
Tooltip/Padding → spacing/2 (8px) horizontal, spacing/1 (4px) vertical
Tooltip/Arrow/Size → 6px
Tooltip/Delay → 300ms
```

### Typography

| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Content | `typography/body-s` | 12px | Regular |

### Radius

- Tooltip container: `radius/s` (8px)

### Icons

- No icons — text only
- Optional arrow pointing to trigger

### Accessibility

- Appears on hover (mouse) and focus (keyboard)
- `role="tooltip"` on container
- `aria-describedby` on trigger points to tooltip
- Dismiss on Escape or blur
- Not focusable — purely informational

### Engineering Mapping

#### SwiftUI

```swift
.tooltip("Account balance before transfers")
```

#### React

```tsx
<Tooltip content="Account balance before transfers">
  <InfoButton />
</Tooltip>
```

#### Jetpack Compose

```kotlin
AdvizmoTooltip(
    content = "Account balance before transfers"
) {
    IconButton(onClick = { }) { Icon(Icons.Default.Info, "Info") }
}
```

### QA Checklist

- [ ] Appears on hover and focus
- [ ] Position correct relative to trigger
- [ ] Dismisses on Escape or blur
- [ ] Does not obscure trigger
- [ ] Text legible
- [ ] Screen reader reads tooltip content

### Rules

1. NEVER use Tooltip for critical information — use Alert or Inline text
2. NEVER make Tooltip focusable or interactive
3. Maximum 10 words — keep it brief
4. Use Tooltip for supplementary hints only

### What Changed

| Change | Reason |
|--------|--------|
| Added position options | 4 positions cover all layouts |
| Added delay prop | Prevents tooltip flash on quick mouse movements |
| Added QA checklist | Production component standard |

### Token Mapping

```
List/Item/Background → transparent
List/Item/Background/Hover → color/background/secondary
List/Item/Background/Selected → color/action/primary-subtle
List/Item/Title → color/text/primary
List/Item/Subtitle → color/text/secondary
List/Item/Divider → color/border
List/Item/Height → 56px
List/Item/Padding → spacing/4
```

### Anatomy

```
┌─────────────────────────────────┐
│ [Leading]  Title          [Trailing] │ ← 56px height
│           Subtitle                 │
└─────────────────────────────────┘
─────────────────────────────────── ← 1px, color/border
```

### Accessibility

- Interactive items: `role="button"`, keyboard focusable
- Selected items: `aria-selected="true"`
- Leading/trailing elements have `accessibilityLabel`

---

## Modal

Dialog that requires user interaction.

### Variants

| Variant | Usage | Background | Shadow |
|---------|-------|------------|--------|
| Bottom | iOS-style sheet | `color/surface` | `elevation/floating` |
| Center | Dialog box | `color/surface` | `elevation/floating` |

### Props

```typescript
interface ModalProps {
  variant: 'bottom' | 'center';
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  actions?: Array<{
    label: string;
    variant: 'primary' | 'secondary' | 'destructive';
    onPress: () => void;
  }>;
  closeOnOverlayPress?: boolean;
}
```

### Token Mapping

```
Modal/Background → color/surface
Modal/Overlay → color/overlay
Modal/Shadow → elevation/floating
Modal/Radius → radius/md (bottom) / radius/md (center)
Modal/Padding → spacing/4
Modal/Header/Border → color/border
```

### Anatomy

```
┌─────────────────────────────────┐
│ Modal Title                 ✕   │ ← typography/heading/2
├─────────────────────────────────┤
│                                 │
│  [Content]                      │ ← spacing/4 padding
│                                 │
├─────────────────────────────────┤
│ [Cancel]              [Confirm] │ ← spacing/4 padding
└─────────────────────────────────┘
```

### Accessibility

- `role="dialog"`, `aria-modal="true"`
- Focus trapped within modal
- Escape key closes modal
- Return focus to trigger element on close
- Overlay click: optional, controlled by `closeOnOverlayPress`

---

## Bottom Sheet

iOS-style sheet that slides up from bottom.

### Props

```typescript
interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  snapPoints?: number[]; // Percentage heights
  handleVisible?: boolean;
}
```

### Token Mapping

```
BottomSheet/Background → color/surface
BottomSheet/Handle → color/border
BottomSheet/Shadow → elevation/floating
BottomSheet/Radius → radius/md (top only)
```

---

## Tab Bar

Bottom navigation for switching between views.

### Props

```typescript
interface TabBarProps {
  tabs: Array<{
    icon: IconName;
    label: string;
    badge?: number;
  }>;
  activeTab: number;
  onTabPress: (index: number) => void;
}
```

### Token Mapping

```
TabBar/Background → color/surface
TabBar/Border → color/border
TabBar/Icon/Inactive → color/text/tertiary
TabBar/Icon/Active → color/action/primary
TabBar/Label/Inactive → color/text/tertiary
TabBar/Label/Active → color/action/primary
TabBar/Height → 56px + safe area
TabBar/Badge/Background → color/feedback/error
TabBar/Badge/Text → color/text/on-primary
```

### Accessibility

- `role="tablist"` on container
- `role="tab"` on each tab
- `aria-selected="true"` on active tab
- Badge count announced to screen readers

---

## Navigation Bar

Top navigation bar.

### Props

```typescript
interface NavBarProps {
  title: string;
  leftAction?: {
    icon: IconName;
    onPress: () => void;
    label: string;
  };
  rightAction?: {
    icon: IconName;
    onPress: () => void;
    label: string;
  };
  transparent?: boolean;
}
```

### Token Mapping

```
NavBar/Background → color/surface
NavBar/Border → color/border
NavBar/Title → color/text/primary
NavBar/Title/Font → typography/heading/2
NavBar/Action → color/action/primary
NavBar/Height → 44px + safe area
NavBar/Padding → spacing/4
```

---

## Avatar

User or entity representation.

### Variants

| Variant | Usage | Background |
|---------|-------|------------|
| Image | User photo | — |
| Initials | Fallback | `color/action/primary-subtle` |
| Icon | Entity icon | `color/background/secondary` |

### Sizes

| Size | Dimension | Font | Radius |
|------|-----------|------|--------|
| SM | 32px | `typography/micro` | `radius/full` |
| MD | 40px | `typography/caption` | `radius/full` |
| LG | 56px | `typography/body` | `radius/full` |

### Props

```typescript
interface AvatarProps {
  variant: 'image' | 'initials' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  src?: string;
  name?: string;
  icon?: IconName;
  status?: 'online' | 'offline' | 'away';
}
```

### Token Mapping

```
Avatar/Background → color/action/primary-subtle
Avatar/Text → color/action/primary
Avatar/Border → color/surface
Avatar/Status/Online → color/feedback/success
Avatar/Status/Offline → color/text/disabled
Avatar/Status/Away → color/feedback/warning
```

---

## Icon Button

Button that displays only an icon.

### Variants

| Variant | Usage | Background |
|---------|-------|------------|
| Filled | Primary icon action | `color/action/primary` |
| Outlined | Secondary icon action | transparent |
| Ghost | Tertiary icon action | transparent |

### Sizes

| Size | Dimension | Icon Size | Radius |
|------|-----------|-----------|--------|
| SM | 32px | 16px | `radius/full` |
| MD | 44px | 20px | `radius/full` |
| LG | 56px | 24px | `radius/full` |

### Props

```typescript
interface IconButtonProps {
  variant: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon: IconName;
  label: string;
  disabled?: boolean;
  onPress: () => void;
}
```

### Accessibility

- `accessibilityLabel` required (e.g., "Close", "Settings")
- Minimum touch target: 44×44px
- Focus ring visible on keyboard focus

---

## Divider

Visual separator between content.

### Variants

| Variant | Usage | Color |
|---------|-------|-------|
| Solid | Standard divider | `color/border` |
| Inset | Indented divider | `color/border` |

### Props

```typescript
interface DividerProps {
  variant?: 'solid' | 'inset';
  spacing?: 'none' | 'sm' | 'md';
}
```

### Token Mapping

```
Divider/Color → color/border
Divider/Thickness → 1px
Divider/Inset → spacing/4
```

---

## Empty State

Placeholder when no content is available.

### Props

```typescript
interface EmptyStateProps {
  icon: IconName;
  title: string;
  description: string;
  action?: {
    label: string;
    onPress: () => void;
  };
}
```

### Token Mapping

```
EmptyState/Icon → color/text/disabled
EmptyState/Title → color/text/primary
EmptyState/Description → color/text/secondary
EmptyState/Action → color/action/primary
EmptyState/Padding → spacing/8
```

---

## Skeleton Loader

Placeholder content while loading.

### Variants

| Variant | Usage |
|---------|-------|
| Text | Placeholder for text content |
| Circle | Placeholder for avatar/icon |

### Props

```typescript
interface SkeletonProps {
  variant: 'text' | 'circle' | 'rect';
  width?: number | string;
  height?: number;
  borderRadius?: number;
}
```

### Token Mapping

```
Skeleton/Background → color/background/secondary
Skeleton/Shimmer → color/surface
```

---

## Toast

Transient notification that auto-dismisses.

### Variants

| Variant | Usage | Background |
|---------|-------|------------|
| Success | Action succeeded | `color/feedback/success` |
| Error | Action failed | `color/feedback/error` |
| Info | FYI message | `color/text/primary` |

### Props

```typescript
interface ToastProps {
  variant: 'success' | 'error' | 'info';
  message: string;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
  onDismiss?: () => void;
}
```

### Token Mapping

```
Toast/Success/Background → color/feedback/success
Toast/Success/Text → color/text/on-primary
Toast/Error/Background → color/feedback/error
Toast/Error/Text → color/text/on-primary
Toast/Info/Background → color/text/primary
Toast/Info/Text → color/text/on-primary
Toast/Radius → radius/md
Toast/Padding → spacing/3
Toast/Margin → spacing/4
```

### Accessibility

- `role="status"` for success/info
- `role="alert"` for error
- Auto-dismiss: announce "Dismissed" to screen readers

---

## Tooltip

Contextual information on hover/focus.

### Props

```typescript
interface TooltipProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: ReactNode;
}
```

### Token Mapping

```
Tooltip/Background → color/text/primary
Tooltip/Text → color/text/on-primary
Tooltip/Radius → radius/sm
Tooltip/Padding → spacing/2
```

---

## Component Token Mapping

Complete mapping of all component tokens to semantic tokens.

### Button Tokens

| Token | Semantic Token |
|-------|----------------|
| `button/primary/background` | `color/action/primary` |
| `button/primary/background/hover` | `color/action/primary-hover` |
| `button/primary/background/active` | `color/action/primary-active` |
| `button/primary/text` | `color/text/on-primary` |
| `button/secondary/background` | transparent |
| `button/secondary/text` | `color/action/primary` |
| `button/secondary/border` | `color/action/primary` |
| `button/destructive/background` | `color/action/destructive` |
| `button/destructive/text` | `color/text/on-primary` |
| `button/ghost/background` | transparent |
| `button/ghost/text` | `color/action/primary` |
| `button/disabled/background` | `color/background/disabled` |
| `button/disabled/text` | `color/text/disabled` |
| `button/focus/ring` | `color/focus/ring` |
| `button/radius/sm` | `radius/sm` |
| `button/radius/md` | `radius/md` |
| `button/height/sm` | 32px |
| `button/height/md` | 44px |
| `button/height/lg` | 56px |

### Card Tokens

| Token | Semantic Token |
|-------|----------------|
| `card/background` | `color/surface` |
| `card/border` | `color/border` |
| `card/shadow` | `elevation/low` |
| `card/shadow/hover` | `elevation/medium` |
| `card/radius` | `radius/md` |
| `card/padding` | `spacing/4` |
| `card/padding/sm` | `spacing/3` |
| `card/padding/lg` | `spacing/6` |

### Input Tokens

| Token | Semantic Token |
|-------|----------------|
| `input/background` | `color/surface` |
| `input/border` | `color/border` |
| `input/border/focused` | `color/action/primary` |
| `input/border/error` | `color/feedback/error` |
| `input/text` | `color/text/primary` |
| `input/placeholder` | `color/text/disabled` |
| `input/label` | `color/text/primary` |
| `input/helper` | `color/text/secondary` |
| `input/error` | `color/feedback/error` |
| `input/background/disabled` | `color/background/disabled` |
| `input/focus/ring` | `color/focus/ring` |
| `input/radius` | `radius/md` |

### Badge Tokens

| Token | Semantic Token |
|-------|----------------|
| `badge/success/background` | `color/feedback/success-subtle` |
| `badge/success/text` | `color/feedback/success` |
| `badge/warning/background` | `color/feedback/warning-subtle` |
| `badge/warning/text` | `color/feedback/warning` |
| `badge/error/background` | `color/feedback/error-subtle` |
| `badge/error/text` | `color/feedback/error` |
| `badge/info/background` | `color/feedback/info-subtle` |
| `badge/info/text` | `color/feedback/info` |
| `badge/neutral/background` | `color/background/secondary` |
| `badge/neutral/text` | `color/text/secondary` |
| `badge/radius` | `radius/full` |

### Alert Tokens

| Token | Semantic Token |
|-------|----------------|
| `alert/success/background` | `color/feedback/success-subtle` |
| `alert/success/border` | `color/feedback/success` |
| `alert/success/text` | `color/feedback/success` |
| `alert/warning/background` | `color/feedback/warning-subtle` |
| `alert/warning/border` | `color/feedback/warning` |
| `alert/error/background` | `color/feedback/error-subtle` |
| `alert/error/border` | `color/feedback/error` |
| `alert/info/background` | `color/feedback/info-subtle` |
| `alert/info/border` | `color/feedback/info` |
| `alert/radius` | `radius/md` |
| `alert/padding` | `spacing/4` |

### List Item Tokens

| Token | Semantic Token |
|-------|----------------|
| `list-item/background` | transparent |
| `list-item/background/hover` | `color/background/secondary` |
| `list-item/background/selected` | `color/action/primary-subtle` |
| `list-item/title` | `color/text/primary` |
| `list-item/subtitle` | `color/text/secondary` |
| `list-item/divider` | `color/border` |
| `list-item/height` | 56px |
| `list-item/padding` | `spacing/4` |

### Modal Tokens

| Token | Semantic Token |
|-------|----------------|
| `modal/background` | `color/surface` |
| `modal/overlay` | `color/overlay` |
| `modal/shadow` | `elevation/floating` |
| `modal/radius` | `radius/md` |
| `modal/padding` | `spacing/4` |
| `modal/header/border` | `color/border` |

### Tab Bar Tokens

| Token | Semantic Token |
|-------|----------------|
| `tabbar/background` | `color/surface` |
| `tabbar/border` | `color/border` |
| `tabbar/icon/inactive` | `color/text/tertiary` |
| `tabbar/icon/active` | `color/action/primary` |
| `tabbar/label/inactive` | `color/text/tertiary` |
| `tabbar/label/active` | `color/action/primary` |
| `tabbar/height` | 56px |
| `tabbar/badge/background` | `color/feedback/error` |
| `tabbar/badge/text` | `color/text/on-primary` |

### Navigation Bar Tokens

| Token | Semantic Token |
|-------|----------------|
| `navbar/background` | `color/surface` |
| `navbar/border` | `color/border` |
| `navbar/title` | `color/text/primary` |
| `navbar/action` | `color/action/primary` |
| `navbar/height` | 44px |
| `navbar/padding` | `spacing/4` |

### Avatar Tokens

| Token | Semantic Token |
|-------|----------------|
| `avatar/background` | `color/action/primary-subtle` |
| `avatar/text` | `color/action/primary` |
| `avatar/border` | `color/surface` |
| `avatar/status/online` | `color/feedback/success` |
| `avatar/status/offline` | `color/text/disabled` |
| `avatar/status/away` | `color/feedback/warning` |

### Toast Tokens

| Token | Semantic Token |
|-------|----------------|
| `toast/success/background` | `color/feedback/success` |
| `toast/success/text` | `color/text/on-primary` |
| `toast/error/background` | `color/feedback/error` |
| `toast/error/text` | `color/text/on-primary` |
| `toast/info/background` | `color/text/primary` |
| `toast/info/text` | `color/text/on-primary` |
| `toast/radius` | `radius/md` |
| `toast/padding` | `spacing/3` |

### Skeleton Tokens

| Token | Semantic Token |
|-------|----------------|
| `skeleton/background` | `color/background/secondary` |
| `skeleton/shimmer` | `color/surface` |

### Empty State Tokens

| Token | Semantic Token |
|-------|----------------|
| `empty-state/icon` | `color/text/disabled` |
| `empty-state/title` | `color/text/primary` |
| `empty-state/description` | `color/text/secondary` |
| `empty-state/action` | `color/action/primary` |
| `empty-state/padding` | `spacing/8` |

---

## Composition Patterns

### Card + List Item

```
Card (elevated)
├── ListItem (selected)
├── Divider
├── ListItem
├── Divider
└── ListItem
```

### Modal + Alert

```
Modal (center)
├── Alert (error)
│   ├── Icon
│   ├── Title
│   └── Description
├── Input
└── Actions
    ├── Button (secondary)
    └── Button (destructive)
```

### Bottom Sheet + List Item

```
BottomSheet
├── Handle
├── ListItem
├── Divider
├── ListItem
├── Divider
└── ListItem
```

### Empty State + Button

```
EmptyState
├── Icon
├── Title
├── Description
└── Button (primary)
```

### Banner + Action

```
Banner (warning)
├── Icon
├── Title
├── Description
└── Button (ghost)
```

---

## Appendix: Component Checklist

Use this checklist when implementing a new component:

- [ ] All variants defined
- [ ] All states implemented
- [ ] Token mapping complete
- [ ] Accessibility tested
- [ ] Touch targets ≥ 44px
- [ ] Focus management working
- [ ] Screen reader announcements correct
- [ ] Platform-specific rendering verified
- [ ] Dark mode tokens ready (future)
- [ ] High contrast mode tokens ready (future)
- [ ] Documentation complete
- [ ] Storybook/demo created

---

**End of Chapter 4**
