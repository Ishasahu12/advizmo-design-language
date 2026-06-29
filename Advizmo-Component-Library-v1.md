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
6. [Badge](#badge)
7. [Alert](#alert)
8. [Banner](#banner)
9. [List Item](#list-item)
10. [Modal](#modal)
11. [Bottom Sheet](#bottom-sheet)
12. [Tab Bar](#tab-bar)
13. [Navigation Bar](#navigation-bar)
14. [Avatar](#avatar)
15. [Icon Button](#icon-button)
16. [Divider](#divider)
17. [Empty State](#empty-state)
18. [Skeleton Loader](#skeleton-loader)
19. [Toast](#toast)
20. [Tooltip](#tooltip)
21. [Component Token Mapping](#component-token-mapping)
22. [Composition Patterns](#composition-patterns)

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
| Button | `button` | 4 | iOS, Web, Android |
| Card | `card` | 3 | iOS, Web, Android |
| Input | `input` | 4 | iOS, Web, Android |
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

**Total: 18 components, 52 variants**

---

## Button

The primary interactive element for user actions.

### Variants

| Variant | Usage | Background | Text | Border |
|---------|-------|------------|------|--------|
| Primary | Main CTA | `color/action/primary` | `color/text/on-primary` | none |
| Secondary | Alternative action | transparent | `color/action/primary` | `color/action/primary` |
| Destructive | Danger actions | `color/action/destructive` | `color/text/on-primary` | none |
| Ghost | Tertiary actions | transparent | `color/action/primary` | none |

### Sizes

| Size | Height | Padding (H) | Font | Radius |
|------|--------|-------------|------|--------|
| SM | 32px | 12px | `typography/micro` | `radius/sm` |
| MD | 44px | 16px | `typography/body` | `radius/md` |
| LG | 56px | 24px | `typography/body` | `radius/md` |

### Props

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  fullWidth?: boolean;
  children: string;
  onPress: () => void;
}
```

### Token Mapping

```
Button/Primary/Background → color/action/primary
Button/Primary/Text → color/text/on-primary
Button/Primary/Background/Hover → color/action/primary-hover
Button/Primary/Background/Active → color/action/primary-active
Button/Secondary/Border → color/action/primary
Button/Secondary/Text → color/action/primary
Button/Destructive/Background → color/action/destructive
Button/Destructive/Text → color/text/on-primary
Button/Disabled/Background → color/background/disabled
Button/Disabled/Text → color/text/disabled
```

### States

| State | Visual Change | Token |
|-------|---------------|-------|
| Default | Standard | `color/action/primary` |
| Hover | Background darkens | `color/action/primary-hover` |
| Active | Background darkens more | `color/action/primary-active` |
| Focused | Ring appears | `color/focus/ring` |
| Disabled | 50% opacity | `color/background/disabled` |
| Loading | Spinner, no text | — |

### Accessibility

- Minimum touch target: 44×44px (MD), 32×32px (SM)
- Loading state announces "Loading" to screen readers
- Disabled state communicated via `aria-disabled`
- Focus ring: 2px solid `color/focus/ring`, 2px offset

### Platform Notes

- **iOS:** Renders as `UIButton` with rounded corners
- **Web:** Renders as `<button>` with `role="button"`
- **Android:** Renders as `Button` with Material ripple

---

## Card

Container for grouping related content.

### Variants

| Variant | Usage | Background | Shadow | Border |
|---------|-------|------------|--------|--------|
| Elevated | Primary content | `color/surface` | `elevation/low` | none |
| Outlined | Secondary content | `color/surface` | none | `color/border` |
| Interactive | Tappable card | `color/surface` | `elevation/low` | none |

### Props

```typescript
interface CardProps {
  variant: 'elevated' | 'outlined' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: ReactNode;
  onPress?: () => void;
}
```

### Token Mapping

```
Card/Background → color/surface
Card/Border → color/border
Card/Shadow → elevation/low
Card/Shadow/Hover → elevation/medium
Card/Radius → radius/md
Card/Padding → spacing/4
Card/Padding/Sm → spacing/3
Card/Padding/Lg → spacing/6
```

### Anatomy

```
┌─────────────────────────────────┐
│ [Optional: Header]              │ ← spacing/4 padding
│                                 │
│  [Content]                      │ ← spacing/4 padding
│                                 │
│ [Optional: Footer]              │ ← spacing/4 padding
└─────────────────────────────────┘
```

### Accessibility

- Interactive cards: `role="button"`, keyboard focusable
- Headings inside cards use proper hierarchy
- Color contrast: text on card surface meets 4.5:1

---

## Input

Text input fields for user data entry.

### Variants

| Variant | Usage | Background | Border |
|---------|-------|------------|--------|
| Default | Standard input | `color/surface` | `color/border` |
| Focused | Active input | `color/surface` | `color/action/primary` |
| Error | Invalid input | `color/surface` | `color/feedback/error` |
| Disabled | Read-only input | `color/background/disabled` | `color/border` |

### Sizes

| Size | Height | Font | Padding |
|------|--------|------|---------|
| SM | 32px | `typography/caption` | 8px |
| MD | 44px | `typography/body` | 12px |
| LG | 56px | `typography/body` | 16px |

### Props

```typescript
interface InputProps {
  variant?: 'default' | 'error' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  helperText?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email' | 'phone';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}
```

### Token Mapping

```
Input/Background → color/surface
Input/Border → color/border
Input/Border/Focused → color/action/primary
Input/Border/Error → color/feedback/error
Input/Text → color/text/primary
Input/Placeholder → color/text/disabled
Input/Label → color/text/primary
Input/HelperText → color/text/secondary
Input/ErrorText → color/feedback/error
Input/Background/Disabled → color/background/disabled
```

### Anatomy

```
┌─────────────────────────────────┐
│ Label                           │ ← typography/caption, spacing/1 below
├─────────────────────────────────┤
│ 🏷️  Placeholder text         👁 │ ← typography/body
└─────────────────────────────────┘
 Helper text or error text         ← typography/micro, spacing/1 above
```

### Accessibility

- Label associated via `htmlFor` / `accessibilityLabel`
- Error state: `aria-invalid="true"`, `aria-describedby` points to error message
- Required fields: `aria-required="true"`
- Password fields: `secureTextEntry={true}`

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
