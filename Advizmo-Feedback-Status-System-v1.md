# Advizmo Feedback & Status System

**Version 1.0**
**Created: June 2026**
**Depends on: Primitive Components v1, Core Product Components v1, Token Architecture v1, Design Foundations v1**

---

## Table of Contents

1. [Overview](#overview)
2. [Feedback Philosophy](#feedback-philosophy)
3. [01 Toast Notifications](#01-toast-notifications)
4. [02 Banner Alerts](#02-banner-alerts)
5. [03 Inline Messages](#03-inline-messages)
6. [04 Modal Dialogs](#04-modal-dialogs)
7. [05 Bottom Sheets](#05-bottom-sheets)
8. [06 Snackbars](#06-snackbars)
9. [07 Progress Indicators](#07-progress-indicators)
10. [08 Skeleton Loaders](#08-skeleton-loaders)
11. [09 Empty States](#09-empty-states)
12. [10 Error States](#10-error-states)
13. [11 Success States](#11-success-states)
14. [12 Loading States](#12-loading-states)
15. [13 Pull to Refresh](#13-pull-to-refresh)
16. [14 Haptic Feedback](#14-haptic-feedback)
17. [15 Sound Feedback](#15-sound-feedback)
18. [16 Confirmation Patterns](#16-confirmation-patterns)
19. [17 Undo Patterns](#17-undo-patterns)
20. [18 Retry Patterns](#18-retry-patterns)
21. [Component Properties Reference](#component-properties-reference)
22. [Validation Checklist](#validation-checklist)

---

## Overview

The Feedback & Status System communicates system state, actions, and outcomes to users.

### Core Principles

1. **Immediate**: Feedback appears instantly after user action
2. **Clear**: Message is understandable without technical jargon
3. **Actionable**: User knows what to do next
4. **Non-intrusive**: Doesn't block user flow unless critical
5. **Consistent**: Same type of feedback for same type of event

### Feedback Hierarchy

```
Global Feedback (Toast)
    ↓
Section Feedback (Banner)
    ↓
Component Feedback (Inline)
    ↓
Screen Feedback (Modal)
```

---

## Feedback Philosophy

### When to Use Each Type

| Type | Use Case | Duration | Blocking |
|------|----------|----------|----------|
| Toast | Quick confirmation | 3-5s | No |
| Banner | Important update | Persistent | No |
| Inline | Field validation | Persistent | No |
| Modal | Critical decision | Until dismissed | Yes |
| Bottom Sheet | Action confirmation | Until dismissed | Partial |
| Snackbar | Undo opportunity | 5-10s | No |

### Timing Rules

| Action | Feedback Type | Delay |
|--------|---------------|-------|
| Button press | Toast | Immediate |
| Form submit | Inline | Immediate |
| Success | Toast | Immediate |
| Error | Inline + Toast | Immediate |
| Warning | Banner | Immediate |
| Info | Toast | 1s delay |
| Loading | Skeleton | Immediate |
| Progress | Progress bar | Immediate |

---

## 01 Toast Notifications

### Toast

**Purpose:** Brief, non-blocking feedback
**Usage:** Success confirmations, quick alerts

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ ✅  Payment sent successfully                    │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Icon | Color | Use Case |
|---------|------|-------|----------|
| Success | ✅ | Green | Action completed |
| Error | ❌ | Red | Action failed |
| Warning | ⚠️ | Orange | Attention needed |
| Info | ℹ️ | Blue | Informational |
| AI | 🤖 | Purple | AI suggestion |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `success` | Toast variant |
| `title` | String | — | Toast title |
| `message` | String | — | Toast message |
| `duration` | Number | `3000` | Display duration (ms) |
| `action` | Object | — | Action button |
| `dismissible` | Boolean | `true` | Can be dismissed |
| `position` | Position | `bottom` | Display position |

#### Positions

| Position | Use Case |
|----------|----------|
| Top | Standard |
| Bottom | Mobile standard |
| Top-center | Tablet/Desktop |
| Bottom-center | Tablet/Desktop |

#### Figma Setup

```
Frame: Toast
- Auto Layout: Horizontal
- Padding: 12px horizontal, 12px vertical
- Fill: surface-elevated
- Corner Radius: radius-md
- Shadow: shadow-elevated
- Width: 343px (mobile), 400px (tablet)

Children:
- Icon: Instance of Icon (24x24)
- Content: Frame with Vertical Auto Layout
  - Title: Instance of Typography/Body/Medium
  - Message: Instance of Typography/Body/Small (optional)
- Action: Instance of Button/Ghost (optional)
- Close: Instance of Button/Icon (optional)
```

---

## 02 Banner Alerts

### Banner

**Purpose:** Persistent, non-blocking alerts
**Usage:** System status, important updates, warnings

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ ⚠️  Your account connection is expiring         │
│     Reconnect to continue sync.   [Reconnect]   │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Icon | Color | Use Case |
|---------|------|-------|----------|
| Info | ℹ️ | Blue | General information |
| Warning | ⚠️ | Orange | Attention needed |
| Error | ❌ | Red | Critical issue |
| Success | ✅ | Green | Positive update |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `info` | Banner variant |
| `title` | String | — | Banner title |
| `message` | String | — | Banner message |
| `action` | Object | — | Action button |
| `dismissible` | Boolean | `true` | Can be dismissed |
| `persistent` | Boolean | `false` | Cannot be dismissed |

#### States

| State | Appearance |
|-------|------------|
| Default | Full color background |
| Dismissed | Animated exit |
| Collapsed | Title only, expandable |

#### Figma Setup

```
Frame: Banner
- Auto Layout: Vertical
- Padding: 16px
- Fill: semantic-warning-subtle
- Corner Radius: radius-md
- Width: 100%

Children:
- Header: Frame with Horizontal Auto Layout
  - Icon: Instance of Icon (20x20)
  - Title: Instance of Typography/Body/Medium/Bold
- Message: Instance of Typography/Body/Small
- Action: Instance of Button/Text (optional)
```

---

## 03 Inline Messages

### Inline Message

**Purpose:** Contextual feedback within components
**Usage:** Form validation, status indicators, helper text

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ Email Address                                    │
│ ┌─────────────────────────────────────────────┐ │
│ │ user@example.com                             │ │
│ └─────────────────────────────────────────────┘ │
│ ⚠️ Please enter a valid email address           │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Icon | Color | Use Case |
|---------|------|-------|----------|
| Error | ❌ | Red | Validation error |
| Warning | ⚠️ | Orange | Warning message |
| Success | ✅ | Green | Validation success |
| Info | ℹ️ | Blue | Helper text |
| AI | 🤖 | Purple | AI suggestion |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `error` | Message variant |
| `message` | String | — | Message text |
| `icon` | Boolean | `true` | Show icon |
| `animated` | Boolean | `true` | Animate in |

#### Figma Setup

```
Frame: Inline Message
- Auto Layout: Horizontal
- Padding: 4px horizontal, 0 vertical
- Gap: 4px

Children:
- Icon: Instance of Icon (16x16)
- Message: Instance of Typography/Body/Small
```

---

## 04 Modal Dialogs

### Modal

**Purpose:** Critical decisions requiring user attention
**Usage:** Confirmations, destructive actions, important information

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  │  Delete Account                           │  │
│  │                                           │  │
│  │  Are you sure you want to delete your     │  │
│  │  account? This action cannot be undone.   │  │
│  │                                           │  │
│  │  ┌─────────────┐  ┌─────────────────┐    │  │
│  │  │   Cancel    │  │     Delete      │    │  │
│  │  └─────────────┘  └─────────────────┘    │  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Default | Standard | Title + message + actions |
| Alert | Warning | Icon + title + message + actions |
| Confirm | Destructive | Title + message + confirm input |
| Success | Completion | Icon + title + message + action |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Modal variant |
| `title` | String | — | Modal title |
| `message` | String | — | Modal message |
| `icon` | Icon | — | Modal icon |
| `primaryAction` | Object | — | Primary button |
| `secondaryAction` | Object | — | Secondary button |
| `dismissible` | Boolean | `true` | Can be dismissed |
| `closeOnOverlay` | Boolean | `true` | Close on overlay tap |

#### States

| State | Appearance |
|-------|------------|
| Default | Solid background, full opacity |
| Entering | Fade in + scale |
| Exiting | Fade out + scale |
| Loading | Primary button shows spinner |

#### Figma Setup

```
Frame: Modal Overlay
- Fill: overlay-primary (0.5 opacity)
- Position: Absolute, full screen

Frame: Modal
- Auto Layout: Vertical
- Padding: 24px
- Fill: surface-primary
- Corner Radius: radius-lg
- Width: 343px (mobile), 400px (tablet)
- Centered in overlay

Children:
- Icon: Instance of Icon (48x48, optional)
- Title: Instance of Typography/Heading/Medium
- Message: Instance of Typography/Body/Medium
- Actions: Frame with Horizontal Auto Layout
  - Secondary: Instance of Button/Secondary
  - Primary: Instance of Button/Primary
```

---

## 05 Bottom Sheets

### Bottom Sheet

**Purpose:** Contextual actions and options
**Usage:** Action menus, filters, selection

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ ────────────── (handle)                         │
│                                                 │
│  Select Account                                 │
│                                                 │
│  ┌─────────────────────────────────────────────┐│
│  │ 🏦  Chase Checking          ✓              ││
│  ├─────────────────────────────────────────────┤│
│  │ 🏦  Savings Account                         ││
│  ├─────────────────────────────────────────────┤│
│  │ 🏦  Credit Card                            ││
│  └─────────────────────────────────────────────┘│
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Height |
|---------|----------|--------|
| Default | Action menu | Auto |
| Half | Filter panel | 50% |
| Full | Content view | 90% |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Sheet variant |
| `title` | String | — | Sheet title |
| `items` | Array | — | Sheet items |
| `showHandle` | Boolean | `true` | Show drag handle |
| `dismissible` | Boolean | `true` | Can be dismissed |

#### Figma Setup

```
Frame: Bottom Sheet
- Auto Layout: Vertical
- Fill: surface-primary
- Corner Radius: radius-lg (top only)
- Width: 100%
- Height: Auto

Children:
- Handle: Frame with centered ellipse (40x4, gray-300)
- Content: Frame with Vertical Auto Layout
  - Title: Instance of Typography/Heading/Small
  - List: Frame with Vertical Auto Layout
    - List Item: Instance of List/Item
```

---

## 06 Snackbars

### Snackbar

**Purpose:** Temporary message with undo action
**Usage:** After destructive actions, quick confirmations

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│ Transaction deleted                   [Undo]    │
└─────────────────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | String | — | Snackbar message |
| `action` | Object | — | Action button (e.g., Undo) |
| `duration` | Number | `5000` | Display duration (ms) |
| `position` | Position | `bottom` | Display position |

#### Figma Setup

```
Frame: Snackbar
- Auto Layout: Horizontal
- Padding: 16px horizontal, 12px vertical
- Fill: surface-inverse
- Corner Radius: radius-sm
- Width: 343px

Children:
- Message: Instance of Typography/Body/Medium (inverse color)
- Action: Instance of Button/Text (brand color)
```

---

## 07 Progress Indicators

### Progress Indicator

**Purpose:** Show progress toward completion
**Usage:** File uploads, form completion, goal progress

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Linear | Determinate progress | Horizontal bar |
| Circular | Indeterminate loading | Spinning circle |
| Ring | Goal progress | Circular with percentage |
| Steps | Multi-step processes | Step indicators |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `linear` | Indicator variant |
| `value` | Number | `0` | Progress value (0-100) |
| `max` | Number | `100` | Maximum value |
| `indeterminate` | Boolean | `false` | Unknown progress |
| `label` | String | — | Progress label |
| `showValue` | Boolean | `false` | Show percentage |

#### Figma Setup

```
Frame: Linear Progress
- Auto Layout: Vertical
- Gap: 4px

Children:
- Track: Frame
  - Fill: surface-tertiary
  - Corner Radius: radius-pill
  - Height: 4px
  - Width: 100%
  - Clip Content: true
    - Fill: Frame
      - Fill: brand-primary
      - Corner Radius: radius-pill
      - Height: 100%
      - Width: [value]%

- Label: Instance of Typography/Caption (optional)
```

---

## 08 Skeleton Loaders

### Skeleton Loader

**Purpose:** Placeholder content while loading
**Usage:** Lists, cards, profiles, charts

#### Variants

| Variant | Use Case | Shape |
|---------|----------|-------|
| Text | Text content | Rectangles |
| Card | Card content | Rectangle + circles |
| Avatar | Profile content | Circle + rectangles |
| List | List items | Repeated rectangles |
| Chart | Data visualization | Animated bars |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `text` | Skeleton variant |
| `lines` | Number | `3` | Number of lines |
| `animated` | Boolean | `true` | Shimmer animation |
| `width` | String | `100%` | Skeleton width |

#### Figma Setup

```
Frame: Skeleton Text
- Auto Layout: Vertical
- Gap: 8px

Children:
- Line: Frame
  - Fill: surface-secondary
  - Corner Radius: radius-sm
  - Height: 16px
  - Width: 100%

- Line: Frame
  - Fill: surface-secondary
  - Corner Radius: radius-sm
  - Height: 16px
  - Width: 80%

- Line: Frame
  - Fill: surface-secondary
  - Corner Radius: radius-sm
  - Height: 16px
  - Width: 60%
```

---

## 09 Empty States

### Empty State

**Purpose:** Guide users when no content exists
**Usage:** Empty lists, no results, first-time use

#### Anatomy

```
┌─────────────────────────────────────────────────┐
│                                                 │
│                    [Icon]                        │
│                                                 │
│              No transactions yet                 │
│                                                 │
│      Connect your accounts to see your          │
│           transaction history.                  │
│                                                 │
│            [Connect Account]                     │
│                                                 │
└─────────────────────────────────────────────────┘
```

#### Variants

| Variant | Use Case | Icon Style |
|---------|----------|------------|
| Default | General | Illustration |
| Error | Error state | Error icon |
| Success | First success | Celebration |
| AI | AI suggestion | AI icon |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Empty state variant |
| `icon` | Icon | — | Display icon |
| `title` | String | — | Title text |
| `message` | String | — | Description text |
| `action` | Object | — | Action button |
| `suggestion` | Object | — | AI suggestion |

#### Figma Setup

```
Frame: Empty State
- Auto Layout: Vertical
- Alignment: Center
- Padding: 48px horizontal, 32px vertical
- Gap: 16px

Children:
- Icon: Instance of Icon (64x64, optional)
- Title: Instance of Typography/Heading/Medium
- Message: Instance of Typography/Body/Medium (text-secondary)
- Action: Instance of Button/Primary (optional)
```

---

## 10 Error States

### Error State

**Purpose:** Communicate errors and recovery options
**Usage:** Network errors, API failures, validation errors

#### Variants

| Variant | Use Case | Severity |
|---------|----------|----------|
| Inline | Field errors | Low |
| Banner | Section errors | Medium |
| Full Page | Screen errors | High |
| Modal | Critical errors | Critical |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `inline` | Error variant |
| `title` | String | — | Error title |
| `message` | String | — | Error message |
| `code` | String | — | Error code |
| `action` | Object | — | Retry/action button |
| `support` | Object | — | Support link |

#### Figma Setup

```
Frame: Error State
- Auto Layout: Vertical
- Alignment: Center
- Padding: 48px horizontal, 32px vertical
- Gap: 16px

Children:
- Icon: Instance of Icon/Error (64x64)
- Title: Instance of Typography/Heading/Medium
- Message: Instance of Typography/Body/Medium (text-secondary)
- Code: Instance of Typography/Body/Small (text-tertiary)
- Actions: Frame with Horizontal Auto Layout
  - Retry: Instance of Button/Primary
  - Support: Instance of Button/Text
```

---

## 11 Success States

### Success State

**Purpose:** Confirm completion and guide next steps
**Usage:** Payment complete, goal achieved, account connected

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Inline | Quick confirmation | Green check |
| Banner | Section success | Green banner |
| Full Page | Major completion | Illustration |
| Celebration | Goal achieved | Animation |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `inline` | Success variant |
| `title` | String | — | Success title |
| `message` | String | — | Success message |
| `action` | Object | — | Next step button |
| `celebration` | Boolean | `false` | Show animation |

#### Figma Setup

```
Frame: Success State
- Auto Layout: Vertical
- Alignment: Center
- Padding: 48px horizontal, 32px vertical
- Gap: 16px

Children:
- Icon: Instance of Icon/Success (64x64)
- Title: Instance of Typography/Heading/Medium
- Message: Instance of Typography/Body/Medium (text-secondary)
- Action: Instance of Button/Primary (optional)
```

---

## 12 Loading States

### Loading State

**Purpose:** Indicate system is processing
**Usage:** API calls, file uploads, data processing

#### Variants

| Variant | Use Case | Style |
|---------|----------|-------|
| Spinner | Unknown duration | Spinning circle |
| Progress | Known duration | Progress bar |
| Skeleton | Content loading | Placeholder |
| Overlay | Blocking action | Full screen |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `spinner` | Loading variant |
| `message` | String | — | Loading message |
| `progress` | Number | — | Progress percentage |
| `cancellable` | Boolean | `false` | Can be cancelled |

#### Figma Setup

```
Frame: Loading Overlay
- Fill: overlay-primary (0.3 opacity)
- Position: Absolute, full screen
- Alignment: Center

Frame: Loading Content
- Auto Layout: Vertical
- Alignment: Center
- Gap: 16px

Children:
- Spinner: Instance of Loader/Spinner (32x32)
- Message: Instance of Typography/Body/Medium
```

---

## 13 Pull to Refresh

### Pull to Refresh

**Purpose:** Refresh content on pull gesture
**Usage:** Lists, feeds, dashboards

#### States

| State | Appearance |
|-------|------------|
| Idle | Hidden |
| Pulling | Arrow appears, rotates |
| Threshold | Arrow flips, changes color |
| Loading | Spinner replaces arrow |
| Complete | Fade out |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `refreshing` | Boolean | `false` | Currently refreshing |
| `threshold` | Number | `80` | Pull threshold (px) |

#### Figma Setup

```
Frame: Pull to Refresh
- Auto Layout: Vertical
- Alignment: Center
- Height: 60px
- Width: 100%

Children:
- Spinner: Instance of Loader/Spinner (24x24)
```

---

## 14 Haptic Feedback

### Haptic Patterns

**Purpose:** Tactile feedback for user actions
**Usage:** Button presses, confirmations, errors

#### Patterns

| Pattern | Use Case | Description |
|---------|----------|-------------|
| Light | Selection | Brief, light tap |
| Medium | Confirmation | Standard tap |
| Heavy | Destructive action | Strong tap |
| Success | Success | Rising pattern |
| Warning | Warning | Double tap |
| Error | Error | Triple tap |

#### Implementation Notes

- iOS: UIImpactFeedbackGenerator, UISelectionFeedbackGenerator, UINotificationFeedbackGenerator
- Android: Vibrator service with patterns
- Web: Navigator.vibrate() (limited support)

---

## 15 Sound Feedback

### Sound Cues

**Purpose:** Audio feedback for actions
**Usage:** Success, error, notification

#### Sounds

| Sound | Use Case | Duration |
|-------|----------|----------|
| Success | Action complete | 0.5s |
| Error | Action failed | 0.3s |
| Notification | New alert | 1s |
| Click | Button press | 0.1s |

#### Implementation Notes

- Respect system sound settings
- Provide toggle in settings
- Use subtle, pleasant tones
- Avoid annoying or jarring sounds

---

## 16 Confirmation Patterns

### Confirmation Dialog

**Purpose:** Confirm destructive or irreversible actions
**Usage:** Delete, transfer, submit

#### Patterns

| Pattern | Use Case | Style |
|---------|----------|-------|
| Simple | Low-risk actions | Yes/No |
| Typing | High-risk actions | Type to confirm |
| Delay | Irreversible actions | Wait + confirm |
| Multi-step | Complex actions | Step-by-step |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | Enum | `simple` | Confirmation type |
| `title` | String | — | Dialog title |
| `message` | String | — | Dialog message |
| `confirmText` | String | `Confirm` | Confirm button text |
| `cancelText` | String | `Cancel` | Cancel button text |
| `destructive` | Boolean | `false` | Destructive action |

---

## 17 Undo Patterns

### Undo

**Purpose:** Allow users to reverse recent actions
**Usage:** Delete, move, edit

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | String | — | Undo message |
| `undoText` | String | `Undo` | Undo button text |
| `duration` | Number | `5000` | Undo window (ms) |
| `onUndo` | Function | — | Undo handler |
| `onComplete` | Function | — | Complete handler |

#### Figma Setup

```
Frame: Undo Snackbar
- Auto Layout: Horizontal
- Padding: 16px horizontal, 12px vertical
- Fill: surface-inverse
- Corner Radius: radius-sm

Children:
- Message: Instance of Typography/Body/Medium (inverse color)
- Undo: Instance of Button/Text (brand color)
```

---

## 18 Retry Patterns

### Retry

**Purpose:** Recover from failed actions
**Usage:** Network errors, API failures

#### Patterns

| Pattern | Use Case | Style |
|---------|----------|-------|
| Auto | Transient errors | Auto retry with backoff |
| Manual | Persistent errors | User-initiated retry |
| Fallback | Alternative path | Offer alternative |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pattern` | Enum | `manual` | Retry pattern |
| `maxAttempts` | Number | `3` | Maximum retry attempts |
| `backoff` | Number | `1000` | Backoff delay (ms) |
| `retryText` | String | `Retry` | Retry button text |
| `onRetry` | Function | — | Retry handler |

---

## Component Properties Reference

### Toast Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `success` | Toast variant |
| `title` | String | — | Toast title |
| `message` | String | — | Toast message |
| `duration` | Number | `3000` | Display duration |
| `action` | Object | — | Action button |
| `dismissible` | Boolean | `true` | Can be dismissed |
| `position` | Enum | `bottom` | Display position |

### Banner Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `info` | Banner variant |
| `title` | String | — | Banner title |
| `message` | String | — | Banner message |
| `action` | Object | — | Action button |
| `dismissible` | Boolean | `true` | Can be dismissed |
| `persistent` | Boolean | `false` | Cannot be dismissed |

### Modal Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Modal variant |
| `title` | String | — | Modal title |
| `message` | String | — | Modal message |
| `icon` | Icon | — | Modal icon |
| `primaryAction` | Object | — | Primary button |
| `secondaryAction` | Object | — | Secondary button |
| `dismissible` | Boolean | `true` | Can be dismissed |

### Empty State Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Enum | `default` | Empty state variant |
| `icon` | Icon | — | Display icon |
| `title` | String | — | Title text |
| `message` | String | — | Description text |
| `action` | Object | — | Action button |

---

## Validation Checklist

### Feedback Components

- [ ] All feedback components use Auto Layout
- [ ] All feedback components use Variables
- [ ] All feedback components support Light & Dark mode
- [ ] All feedback components support Dynamic Type
- [ ] All feedback components support VoiceOver
- [ ] All feedback components have proper timing
- [ ] All feedback components are non-intrusive
- [ ] All feedback components are dismissible
- [ ] All feedback components have proper animations
- [ ] All feedback components have proper z-index

### Loading States

- [ ] All loading states have proper animations
- [ ] All loading states have proper timing
- [ ] All loading states have proper messaging
- [ ] All loading states have proper cancellation
- [ ] All loading states have proper timeout handling

### Error States

- [ ] All error states have clear messages
- [ ] All error states have recovery options
- [ ] All error states have proper logging
- [ ] All error states have proper escalation
- [ ] All error states have proper user guidance

### Accessibility

- [ ] All feedback components have proper ARIA attributes
- [ ] All feedback components have proper roles
- [ ] All feedback components have proper labels
- [ ] All feedback components have proper focus management
- [ ] All feedback components have proper contrast ratios

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
