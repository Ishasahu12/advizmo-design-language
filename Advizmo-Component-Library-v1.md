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

---

## Badge

Compact element for status, labels, or counts.

### Variants

| Variant | Usage | Background | Text |
|---------|-------|------------|------|
| Success | Positive status | `color/feedback/success-subtle` | `color/feedback/success` |
| Warning | Caution status | `color/feedback/warning-subtle` | `color/feedback/warning` |
| Error | Negative status | `color/feedback/error-subtle` | `color/feedback/error` |
| Info | Neutral info | `color/feedback/info-subtle` | `color/feedback/info` |
| Neutral | Default label | `color/background/secondary` | `color/text/secondary` |

### Sizes

| Size | Height | Font | Padding | Radius |
|------|--------|------|---------|--------|
| SM | 20px | `typography/micro` | 4px 8px | `radius/full` |
| MD | 24px | `typography/micro` | 4px 10px | `radius/full` |

### Props

```typescript
interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  icon?: IconName;
  children: string;
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
Badge/Neutral/Background → color/background/secondary
Badge/Neutral/Text → color/text/secondary
```

### Accessibility

- Badge conveys non-critical information
- Screen readers announce badge content
- Color alone does not convey meaning (icon + text)

---

## Alert

Inline notification for important messages.

### Variants

| Variant | Usage | Background | Border | Icon |
|---------|-------|------------|--------|------|
| Success | Action succeeded | `color/feedback/success-subtle` | `color/feedback/success` | ✓ |
| Warning | Caution needed | `color/feedback/warning-subtle` | `color/feedback/warning` | ⚠ |
| Error | Action failed | `color/feedback/error-subtle` | `color/feedback/error` | ✗ |
| Info | FYI message | `color/feedback/info-subtle` | `color/feedback/info` | ℹ |

### Props

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
Alert/Success/Text → color/feedback/success
Alert/Warning/Background → color/feedback/warning-subtle
Alert/Warning/Border → color/feedback/warning
Alert/Error/Background → color/feedback/error-subtle
Alert/Error/Border → color/feedback/error
Alert/Info/Background → color/feedback/info-subtle
Alert/Info/Border → color/feedback/info
Alert/Radius → radius/md
Alert/Padding → spacing/4
```

### Anatomy

```
┌─────────────────────────────────┐
│ ⚠️  Title                       │ ← typography/body, weight: semibold
│ Description text here            │ ← typography/caption
│                        [Action]  │ ← typography/body, color/action/primary
└─────────────────────────────────┘
```

### Accessibility

- `role="alert"` for error alerts
- `role="status"` for success/info alerts
- Icon has `accessibilityLabel` describing the alert type
- Action button is focusable and keyboard accessible

---

## Banner

Persistent notification at top of screen.

### Variants

| Variant | Usage | Background | Text |
|---------|-------|------------|------|
| Info | General info | `color/feedback/info-subtle` | `color/text/primary` |
| Warning | Needs attention | `color/feedback/warning-subtle` | `color/text/primary` |
| Error | Critical issue | `color/feedback/error-subtle` | `color/text/primary` |

### Props

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
Banner/Warning/Background → color/feedback/warning-subtle
Banner/Error/Background → color/feedback/error-subtle
Banner/Padding → spacing/4
Banner/Radius → radius/md
Banner/Margin → spacing/4
```

---

## List Item

Single row in a list or menu.

### Variants

| Variant | Usage | Background |
|---------|-------|------------|
| Default | Standard list item | transparent |
| Interactive | Tappable list item | transparent (hover: `color/background/secondary`) |
| Selected | Currently selected | `color/action/primary-subtle` |

### Props

```typescript
interface ListItemProps {
  variant?: 'default' | 'interactive' | 'selected';
  leading?: ReactNode; // Avatar, Icon, or Image
  title: string;
  subtitle?: string;
  trailing?: ReactNode; // Badge, Chevron, Text
  onPress?: () => void;
  disabled?: boolean;
}
```

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
