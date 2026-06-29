# Advizmo Motion & Micro-interaction System

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1, Primitive Components v1, Core Product Components v1**

---

## Table of Contents

1. [Motion Principles](#01-motion-principles)
2. [Duration Tokens](#02-duration-tokens)
3. [Easing Tokens](#03-easing-tokens)
4. [Transition Library](#04-transition-library)
5. [Component Motion](#05-component-motion)
6. [Navigation Motion](#06-navigation-motion)
7. [Gesture Motion](#07-gesture-motion)
8. [Loading Motion](#08-loading-motion)
9. [Financial Motion](#09-financial-motion)
10. [Feedback Motion](#10-feedback-motion)
11. [AI Motion](#11-ai-motion)
12. [Chart Motion](#12-chart-motion)
13. [Accessibility](#13-accessibility)
14. [Documentation](#14-documentation)

---

## 01 Motion Principles

### Purpose

Every animation in Advizmo exists to serve a function. Motion is a communication tool, not decoration. It tells the user what happened, where things came from, what matters now, and what to do next.

Motion earns its place by making the interface clearer, faster to use, or more trustworthy. If an animation does not accomplish one of these goals, it does not belong in the system.

### Hierarchy

Motion reinforces visual hierarchy. Primary elements animate first and most prominently. Secondary elements follow with less intensity. Tertiary elements may not animate at all.

When a new screen appears, the most important content enters first. When a modal opens, the primary action draws attention. When data updates, the changed value animates while surrounding content remains still.

Hierarchy through motion prevents cognitive overload. Users subconsciously track the most animated element, which is typically the element that needs their attention.

### Cause and Effect

Every animation has a clear trigger. A button press causes a ripple. A swipe causes a card to move. A successful action causes a checkmark. Users should never wonder why something animated.

Cause and effect relationships build trust. When the interface responds predictably to input, users feel in control. When animations appear without cause, users feel uncertain.

### Natural Movement

Objects in Advizmo follow natural physical laws. Elements enter from the direction they came from. Elements exit toward their destination. Elements that open expand from their origin. Elements that close contract toward their origin.

This spatial logic helps users build a mental model of the interface. They learn that screens slide left when moving forward, that sheets rise from the bottom when presenting options, and that modals scale from the element that triggered them.

### Spatial Relationships

Motion communicates spatial relationships. Elements that are related move together. Elements that are stacked reveal depth through parallax. Elements that overlap clarify z-order through shadow and scale.

The interface has depth. Backgrounds are still. Foregrounds move. Modals float above content. Sheets slide over screens. This depth is communicated through motion, not just through shadows.

### Continuity

When transitioning between screens, elements that persist should maintain their position and appearance. A tab bar stays fixed. A navigation title transitions smoothly. A list item that is tapped expands into a detail view without a jarring cut.

Continuity reduces disorientation. Users should never lose their place in the interface. Motion bridges the gap between states, making the transition feel like a single continuous action rather than two separate screens.

### Predictability

Users should be able to predict how an element will animate before they interact with it. Buttons press down. Switches slide. Sheets drag. The predictability comes from consistency—every button behaves the same way, every sheet follows the same pattern.

Predictability is built through repetition. The same animation used in the same context teaches users the interface language. Once learned, users interact faster because they know what to expect.

### Performance

All animations in Advizmo run at 60 frames per second. No animation is worth sacrificing performance. If an animation causes jank, it is simplified or removed.

Performance is a feature. A smooth 60fps animation feels premium and trustworthy. A janky 30fps animation feels broken and unreliable. For a financial application where trust is paramount, performance is non-negotiable.

### Subtlety

The best animation is one the user does not consciously notice. It simply makes the experience feel right. Subtle animations guide attention without shouting. They confirm actions without celebrating. They transition between states without performing.

Subtlety does not mean invisible. It means proportionate. A destructive action may warrant a slightly more prominent animation. A success state may warrant a brief celebration. But the default is calm, measured, and professional.

### When to Animate

| Animate | Do Not Animate |
|---------|----------------|
| Confirming a user action | Decorative flourishes |
| Transitioning between states | Loading spinners (use skeleton instead) |
| Guiding attention to changed content | Background elements |
| Showing spatial relationships | Content that simply appears |
| Providing feedback for input | Charts that auto-animate on load |
| Revealing hidden content | Marketing animations |
| Communicating success or error | Elements that are not interactive |

### When Animation Becomes Noise

- When the same animation plays repeatedly in quick succession
- When an animation plays for an element the user is not looking at
- When an animation delays the user from completing their task
- When an animation makes the interface feel slower
- When an animation draws attention away from important content

---

## 02 Duration Tokens

### Duration Scale

| Token | Value | Purpose |
|-------|-------|---------|
| `motion.instant` | 0ms | Immediate state changes, toggle feedback |
| `motion.fast` | 100ms | Button press, hover state, micro-feedback |
| `motion.quick` | 180ms | Checkbox, radio, switch, small element transitions |
| `motion.normal` | 250ms | Standard transitions, card states, tab changes |
| `motion.slow` | 350ms | Sheet presentation, modal entrance, page transitions |
| `motion.emphasis` | 500ms | Complex transitions, chart animations, celebrations |

### Duration Rules

1. **Use only these six durations.** Do not invent intermediate values unless absolutely necessary.
2. **Default to `motion.normal` (250ms).** When uncertain, use 250ms.
3. **Faster for smaller elements.** Buttons and toggles use `motion.fast` or `motion.quick`.
4. **Slower for larger transitions.** Full-screen transitions use `motion.slow` or `motion.emphasis`.
5. **Never exceed 500ms.** If an animation needs more time, decompose it into sequential shorter animations.
6. **Never go below 100ms.** Animations shorter than 100ms are imperceptible and should use `motion.instant`.

### Duration by Element Size

| Element | Recommended Duration |
|---------|---------------------|
| Icon | `motion.fast` (100ms) |
| Button | `motion.fast` (100ms) |
| Toggle | `motion.quick` (180ms) |
| Checkbox | `motion.quick` (180ms) |
| Small card | `motion.normal` (250ms) |
| Large card | `motion.normal` (250ms) |
| Sheet | `motion.slow` (350ms) |
| Modal | `motion.slow` (350ms) |
| Page transition | `motion.slow` (350ms) |
| Complex sequence | `motion.emphasis` (500ms) |

### Duration by Context

| Context | Duration | Reason |
|---------|----------|--------|
| Button press feedback | `motion.fast` | Immediate response |
| Hover state | `motion.fast` | Quick visual feedback |
| Focus ring | `motion.fast` | Accessibility feedback |
| Toggle switch | `motion.quick` | Clear state change |
| Tab change | `motion.normal` | Content transition |
| Card expansion | `motion.normal` | Spatial transformation |
| Sheet present | `motion.slow` | Major UI change |
| Modal present | `motion.slow` | Attention required |
| Page push | `motion.slow` | Navigation transition |
| Chart redraw | `motion.emphasis` | Complex data update |

---

## 03 Easing Tokens

### Easing Scale

| Token | Value | Purpose |
|-------|-------|---------|
| `ease.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default easing for most transitions |
| `ease.enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the viewport |
| `ease.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements leaving the viewport |
| `ease.emphasized` | `cubic-bezier(0.4, 0, 0.2, 1)` | Complex transitions requiring emphasis |
| `ease.linear` | `linear` | Progress bars, continuous animations |

### Easing Rules

1. **Use `ease.standard` by default.** When uncertain, use standard easing.
2. **Use `ease.enter` for elements appearing.** Elements decelerate as they arrive.
3. **Use `ease.exit` for elements disappearing.** Elements accelerate as they leave.
4. **Use `ease.emphasized` sparingly.** Only for transitions that need visual weight.
5. **Use `ease.linear` only for progress.** Never for UI transitions.

### Easing by Animation Type

| Animation | Easing | Reason |
|-----------|--------|--------|
| Fade in | `ease.enter` | Natural appearance |
| Fade out | `ease.exit` | Natural disappearance |
| Slide in | `ease.enter` | Deceleration into position |
| Slide out | `ease.exit` | Acceleration out of position |
| Scale up | `ease.enter` | Growth feels natural |
| Scale down | `ease.exit` | Shrinking feels natural |
| Color transition | `ease.standard` | Smooth blending |
| Width/height change | `ease.standard` | Proportional resizing |
| Progress bar | `ease.linear` | Constant rate |
| Spin | `ease.linear` | Constant rotation |

### Easing by Component

| Component | Easing |
|-----------|--------|
| Button press | `ease.standard` |
| Toggle switch | `ease.standard` |
| Checkbox mark | `ease.emphasized` |
| Radio dot | `ease.emphasized` |
| Tab indicator | `ease.enter` |
| Sheet present | `ease.enter` |
| Sheet dismiss | `ease.exit` |
| Modal present | `ease.emphasized` |
| Modal dismiss | `ease.exit` |
| Toast enter | `ease.enter` |
| Toast dismiss | `ease.exit` |
| Dropdown open | `ease.enter` |
| Dropdown close | `ease.exit` |

---

## 04 Transition Library

### Fade

**Purpose:** Change visibility without spatial movement
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** opacity
**Usage:** Showing/hiding overlay content, toggling visibility

```
From: opacity 1
To:   opacity 0
```

### Cross Fade

**Purpose:** Replace one element with another in the same position
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** opacity (both elements)
**Usage:** Swapping content, tab content changes, image transitions

```
Element A: opacity 1 → 0
Element B: opacity 0 → 1
```

### Scale

**Purpose:** Emphasize or de-emphasize an element
**Duration:** `motion.quick` (180ms)
**Easing:** `ease.emphasized`
**Properties:** transform: scale
**Usage:** Button press, card selection, popover appearance

```
From: transform scale(1)
To:   transform scale(0.95)  [press]
To:   transform scale(1.02)  [emphasis]
To:   transform scale(1)     [release]
```

### Slide Up

**Purpose:** Element enters from below
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.enter`
**Properties:** transform: translateY, opacity
**Usage:** Toast appearance, sheet presentation, keyboard avoidance

```
From: transform translateY(20px), opacity 0
To:   transform translateY(0), opacity 1
```

### Slide Down

**Purpose:** Element enters from above
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.enter`
**Properties:** transform: translateY, opacity
**Usage:** Dropdown appearance, notification banner

```
From: transform translateY(-20px), opacity 0
To:   transform translateY(0), opacity 1
```

### Slide Left

**Purpose:** Element enters from the right (forward navigation)
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter`
**Properties:** transform: translateX, opacity
**Usage:** Push navigation, forward page transition

```
From: transform translateX(100%), opacity 0
To:   transform translateX(0), opacity 1
```

### Slide Right

**Purpose:** Element enters from the left (backward navigation)
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter`
**Properties:** transform: translateX, opacity
**Usage:** Pop navigation, backward page transition

```
From: transform translateX(-30%), opacity 0.5
To:   transform translateX(0), opacity 1
```

### Push

**Purpose:** New screen slides in from right, current screen slides left
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter` (new screen), `ease.exit` (current screen)
**Properties:** transform: translateX
**Usage:** iOS-style navigation push

```
New screen:  transform translateX(100%) → translateX(0)
Old screen:  transform translateX(0) → translateX(-30%)
```

### Pop

**Purpose:** Current screen slides right, previous screen slides in from left
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.exit` (current screen), `ease.enter` (previous screen)
**Properties:** transform: translateX
**Usage:** iOS-style navigation pop

```
Current screen: transform translateX(0) → translateX(100%)
Previous screen: transform translateX(-30%) → translateX(0)
```

### Expand

**Purpose:** Element grows from its origin to fill a larger area
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** width, height, border-radius, transform
**Usage:** Card expansion, search bar expansion, image reveal

```
From: original dimensions, original border-radius
To:   target dimensions, target border-radius
```

### Collapse

**Purpose:** Element shrinks from expanded state back to original
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** width, height, border-radius, transform
**Usage:** Card collapse, search bar collapse

```
From: expanded dimensions
To:   original dimensions
```

### Morph

**Purpose:** One element transforms into another
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** transform, border-radius, width, height, background-color
**Usage:** Shared element transitions (future), icon morphing, thumbnail to detail

```
From: element A dimensions and style
To:   element B dimensions and style
```

### Opacity

**Purpose:** Pure visibility change
**Duration:** `motion.quick` (180ms)
**Easing:** `ease.standard`
**Properties:** opacity
**Usage:** Enabling/disabling elements, showing/hiding次要 content

```
From: opacity 1
To:   opacity 0.4  [disabled]
To:   opacity 1    [enabled]
```

### Height

**Purpose:** Expand or collapse content vertically
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** height, overflow
**Usage:** Accordion expansion, content reveal, list item expansion

```
From: height 0, overflow hidden
To:   height auto, overflow visible
```

### Width

**Purpose:** Expand or collapse content horizontally
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** width, overflow
**Usage:** Sidebar expansion, search bar expansion

```
From: width 0, overflow hidden
To:   width target, overflow visible
```

### Shared Element (Future)

**Purpose:** Element maintains identity across screen transitions
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.standard`
**Properties:** position, size, border-radius, background-color
**Usage:** Thumbnail to detail, list item to detail, hero image transitions

```
From: element at origin position and size
To:   element at destination position and size
```

---

## 05 Component Motion

### Buttons

#### Pressed State
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale(0.97), opacity 0.9
- **Trigger:** pointerdown / touchstart
- **Release:** pointerup / touchend (reverse animation)

#### Hover State (Web)
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** background-color, box-shadow
- **Trigger:** mouseenter

#### Loading State
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** opacity, width (to accommodate spinner)
- **Trigger:** loading = true

#### Disabled State
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** opacity 0.4
- **Trigger:** disabled = true

### Cards

#### Hover State (Web)
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform translateY(-2px), box-shadow
- **Trigger:** mouseenter

#### Pressed State
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale(0.98)
- **Trigger:** pointerdown

#### Selected State
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** border-color, background-color
- **Trigger:** selected = true

#### Expansion
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
- **Properties:** height, padding, opacity (expanded content)
- **Trigger:** expand/collapse action

### Switches

#### Toggle
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform translateX (thumb), background-color (track)
- **Trigger:** tap
- **Thumb travel:** 20px (track width 51px, thumb 27px, padding 2px)

#### Pressed State
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale (thumb)
- **Trigger:** pointerdown

### Checkboxes

#### Check
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.emphasized`
- **Properties:** stroke-dashoffset (checkmark draw), background-color, border-color
- **Trigger:** tap
- **Checkmark:** stroke-dasharray 20, dashoffset 20 → 0

#### Uncheck
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** stroke-dashoffset, background-color, border-color
- **Trigger:** tap

### Radio Buttons

#### Select
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.emphasized`
- **Properties:** transform scale (dot), border-color
- **Trigger:** tap
- **Dot:** transform scale(0) → scale(1)

#### Deselect
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale (dot), border-color
- **Trigger:** tap

### Segmented Controls

#### Selection Change
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform translateX (indicator), width (indicator)
- **Trigger:** tap on segment
- **Indicator:** slides from current to new position

### Tabs

#### Tab Change
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
- **Properties:** transform translateX (indicator), opacity (content crossfade)
- **Trigger:** tap on tab

#### Indicator Slide
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
- **Properties:** transform translateX, width
- **Trigger:** tab selection

### Inputs

#### Focus
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** border-color, box-shadow
- **Trigger:** focus event

#### Error
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** border-color, shake animation
- **Trigger:** validation error
- **Shake:** transform translateX(-4px, 4px, -2px, 2px, 0) over 200ms

#### Placeholder Fade
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** opacity
- **Trigger:** focus/blur

### Dropdowns

#### Open
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
- **Properties:** opacity, transform translateY(-8px) → translateY(0), scale(0.95) → scale(1)
- **Trigger:** tap

#### Close
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.exit`
- **Properties:** opacity, transform
- **Trigger:** tap outside / selection

### Sheets

#### Present
- **Duration:** `motion.slow` (350ms)
- **Easing:** `ease.enter`
- **Properties:** transform translateY(100%) → translateY(0)
- **Trigger:** open action

#### Dismiss
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.exit`
- **Properties:** transform translateY(0) → translateY(100%)
- **Trigger:** close action / swipe down

#### Interactive Dismiss
- **Duration:** follows finger
- **Easing:** `ease.standard` (on release)
- **Properties:** transform translateY (follows gesture), opacity (overlay)
- **Trigger:** drag gesture
- **Threshold:** dismiss if drag > 50% of sheet height or velocity > 500px/s

### Dialogs

#### Present
- **Duration:** `motion.slow` (350ms)
- **Easing:** `ease.emphasized`
- **Properties:** opacity (overlay 0→1), transform scale(0.95)→scale(1) + translateY(10px)→translateY(0)
- **Trigger:** open action

#### Dismiss
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.exit`
- **Properties:** opacity (overlay), transform scale, translateY
- **Trigger:** close action / tap overlay

### Tooltips

#### Appear
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.enter`
- **Properties:** opacity, transform translateY(4px)→translateY(0)
- **Trigger:** hover / long press

#### Disappear
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.exit`
- **Properties:** opacity
- **Trigger:** mouse leave / tap elsewhere

### Menus

#### Open
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
- **Properties:** opacity, transform scale(0.95)→scale(1), transform-origin from trigger
- **Trigger:** tap / right-click

#### Close
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.exit`
- **Properties:** opacity, transform scale
- **Trigger:** selection / tap outside

### Toasts

#### Enter
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
- **Properties:** transform translateY(100%)→translateY(0), opacity
- **Trigger:** notification

#### Dismiss
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.exit`
- **Properties:** transform translateY(0)→translateY(-20px), opacity
- **Trigger:** timeout / swipe / tap

### Alerts

#### Enter
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
- **Properties:** opacity, transform translateY(-8px)→translateY(0)
- **Trigger:** alert appearance

#### Dismiss
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.exit`
- **Properties:** opacity, transform
- **Trigger:** dismiss action

### Progress Indicators

#### Fill
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
- **Properties:** width (linear), stroke-dashoffset (circular)
- **Trigger:** value change

#### Indeterminate
- **Duration:** continuous
- **Easing:** `ease.linear`
- **Properties:** transform translateX (linear), transform rotate (circular)
- **Loop:** yes

### Badges

#### Appear
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.emphasized`
- **Properties:** transform scale(0)→scale(1), opacity
- **Trigger:** count change from 0

#### Count Change
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale(0.8)→scale(1) (bounce)
- **Trigger:** count update

### Icons

#### Spin
- **Duration:** `motion.slow` (350ms)
- **Easing:** `ease.linear`
- **Properties:** transform rotate
- **Trigger:** loading state

#### Pulse
- **Duration:** `motion.emphasis` (500ms)
- **Easing:** `ease.standard`
- **Properties:** opacity 1→0.5→1
- **Trigger:** attention needed

---

## 06 Navigation Motion

### Push

**Purpose:** Navigate forward to a new screen
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter` (incoming), `ease.exit` (outgoing)
**Properties:** transform translateX

```
Incoming screen: translateX(100%) → translateX(0)
Outgoing screen: translateX(0) → translateX(-30%)
```

**iOS Behavior:** The outgoing screen shrinks slightly and moves left while the incoming screen slides in from the right. The outgoing screen remains visible behind the incoming screen, creating depth.

### Pop

**Purpose:** Navigate back to the previous screen
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.exit` (outgoing), `ease.enter` (incoming)
**Properties:** transform translateX

```
Outgoing screen: translateX(0) → translateX(100%)
Incoming screen: translateX(-30%) → translateX(0)
```

### Tab Change

**Purpose:** Switch between major sections
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** opacity (crossfade content), transform translateX (tab indicator)

```
Old content: opacity 1 → 0
New content: opacity 0 → 1
Indicator: translateX from old position → new position
```

### Sheet Presentation

**Purpose:** Present a modal sheet from the bottom
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter`
**Properties:** transform translateY

```
Sheet: translateY(100%) → translateY(0)
Overlay: opacity 0 → 0.5
```

### Sheet Dismiss

**Purpose:** Dismiss a modal sheet
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.exit`
**Properties:** transform translateY

```
Sheet: translateY(0) → translateY(100%)
Overlay: opacity 0.5 → 0
```

### Modal

**Purpose:** Present a centered modal dialog
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.emphasized`
**Properties:** opacity (overlay), transform scale + translateY

```
Overlay: opacity 0 → 0.5
Modal: scale(0.95) translateY(10px) → scale(1) translateY(0)
```

### Alert

**Purpose:** Present an urgent alert
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.emphasized`
**Properties:** opacity (overlay), transform scale

```
Overlay: opacity 0 → 0.5
Alert: scale(0.9) → scale(1)
```

### Context Menu

**Purpose:** Present a context menu from a trigger element
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.enter`
**Properties:** opacity, transform scale, transform-origin

```
Menu: scale(0.9) opacity(0) → scale(1) opacity(1)
Transform-origin: position of trigger element
```

### Search Expansion

**Purpose:** Expand search bar from icon to full input
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.enter`
**Properties:** width, opacity, border-radius

```
Width: 44px → 100%
Opacity: icon 1 → 0, input 0 → 1
Border-radius: 22px → 12px
```

### Search Collapse

**Purpose:** Collapse search bar back to icon
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.exit`
**Properties:** width, opacity, border-radius

```
Width: 100% → 44px
Opacity: input 1 → 0, icon 0 → 1
Border-radius: 12px → 22px
```

### Drawer

**Purpose:** Present a side drawer
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.enter`
**Properties:** transform translateX

```
Drawer: translateX(-100%) → translateX(0)
Content: translateX(0) → translateX(drawer-width)
Overlay: opacity 0 → 0.5
```

### Sidebar

**Purpose:** Expand/collapse sidebar on tablet/desktop
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** width, transform translateX

```
Expand: width 72px → 240px, labels opacity 0 → 1
Collapse: width 240px → 72px, labels opacity 1 → 0
```

### Navigation Rail

**Purpose:** Present navigation rail on tablet
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.enter`
**Properties:** transform translateX, opacity

```
Rail: translateX(-100%) → translateX(0)
```

### Large Title Collapse

**Purpose:** Collapse large title on scroll
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** height, opacity, font-size

```
Large title: height auto → 0, opacity 1 → 0
Small title: opacity 0 → 1
```

### Back Navigation

**Purpose:** Generic back navigation (swipe or button)
**Duration:** `motion.slow` (350ms)
**Easing:** `ease.exit` (current), `ease.enter` (previous)
**Properties:** transform translateX

```
Current: translateX(0) → translateX(100%)
Previous: translateX(-30%) → translateX(0)
```

### Interactive Dismiss

**Purpose:** Allow user to drag to dismiss a screen
**Duration:** follows finger
**Easing:** `ease.standard` (on release)
**Properties:** transform translateX, opacity
**Threshold:** dismiss if drag > 40% of screen width or velocity > 500px/s

---

## 07 Gesture Motion

### Tap

**Purpose:** Confirm selection or trigger action
**Visual Feedback:**
- **Duration:** `motion.fast` (100ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale(0.97) → scale(1), opacity 0.9 → 1
- **Haptic:** light impact (UIImpactFeedbackGenerator.light)

### Long Press

**Purpose:** Reveal context menu or secondary actions
**Visual Feedback:**
- **Duration:** `motion.normal` (250ms) to reach threshold
- **Easing:** `ease.standard`
- **Properties:** transform scale(0.95), opacity 0.8
- **Haptic:** medium impact on threshold reached

### Swipe Left

**Purpose:** Reveal trailing actions (delete, archive)
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** `ease.standard` (on release)
- **Properties:** transform translateX (item), reveal action width
- **Threshold:** 80px to reveal actions, 50% to complete action

### Swipe Right

**Purpose:** Reveal leading actions (reply, flag)
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** `ease.standard` (on release)
- **Properties:** transform translateX (item), reveal action width
- **Threshold:** 80px to reveal actions, 50% to complete action

### Pull To Refresh

**Purpose:** Refresh content
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** `ease.standard` (on release)
- **Properties:** transform translateY (content), opacity (indicator), transform rotate (arrow)
- **Threshold:** 80px to trigger refresh
- **States:** idle → pulling → threshold → refreshing → complete

### Drag

**Purpose:** Move elements within a list or board
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** `ease.standard`
- **Properties:** transform translateX/Y, scale(1.05), shadow elevation
- **On pickup:** scale(1.05), elevate shadow
- **On drop:** scale(1.0), remove shadow, snap to position

### Drop

**Purpose:** Place a dragged element
**Visual Feedback:**
- **Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
- **Properties:** transform translateX/Y, scale, shadow
- **Snap:** animate to nearest valid position

### Pinch

**Purpose:** Zoom in/out on content
**Visual Feedback:**
- **Duration:** follows fingers
- **Easing:** `ease.standard`
- **Properties:** transform scale
- **Bounds:** min 1x, max 3x

### Zoom

**Purpose:** Magnify content
**Visual Feedback:**
- **Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
- **Properties:** transform scale, transform-origin (pinch center)
- **Double tap:** zoom to 2x, double tap again to return to 1x

### Scroll

**Purpose:** Navigate through content
**Visual Feedback:**
- **Duration:** follows finger (native momentum)
- **Easing:** system default
- **Properties:** transform translateY
- **Performance:** use native scroll view, never JavaScript scroll

### Overscroll

**Purpose:** Indicate end of content
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** rubber band (system default)
- **Properties:** transform translateY (with resistance)
- **iOS:** rubber band effect at edges
- **Web:** overscroll-behavior: contain

### Momentum

**Purpose:** Continue scroll after release
**Visual Feedback:**
- **Duration:** system calculated based on velocity
- **Easing:** system default (deceleration curve)
- **Properties:** transform translateY
- **Performance:** use native scroll physics

### Interactive Dismiss

**Purpose:** Allow user to dismiss modal/sheet by dragging
**Visual Feedback:**
- **Duration:** follows finger
- **Easing:** `ease.standard` (on release)
- **Properties:** transform translateY (sheet), opacity (overlay)
- **Threshold:** 50% of height or 500px/s velocity

---

## 08 Loading Motion

### Skeleton

**Purpose:** Placeholder content while loading
**Animation:** shimmer effect
**Duration:** 1500ms per cycle
**Easing:** `ease.linear`
**Properties:** background-position
**Direction:** left to right

```
background: linear-gradient(90deg, gray-200 25%, gray-100 50%, gray-200 75%)
background-size: 200% 100%
animation: shimmer 1.5s ease-in-out infinite
```

### Shimmer

**Purpose:** Indicate content is loading
**Animation:** gradient sweep
**Duration:** 1500ms per cycle
**Easing:** `ease.linear`
**Properties:** background-position
**Usage:** Skeleton cards, list placeholders, image placeholders

### Spinner

**Purpose:** Indeterminate loading
**Animation:** continuous rotation
**Duration:** 1000ms per rotation
**Easing:** `ease.linear`
**Properties:** transform rotate
**Usage:** Button loading, inline loading, refresh

```
animation: spin 1s linear infinite
```

### Progress Bar

**Purpose:** Show determinate progress
**Animation:** width fill
**Duration:** `motion.normal` (250ms) per value change
**Easing:** `ease.standard`
**Properties:** width
**Usage:** File upload, form completion, goal progress

```
width: [current-value]%
```

### Circular Progress

**Purpose:** Show determinate progress in circular form
**Animation:** stroke-dashoffset
**Duration:** `motion.normal` (250ms) per value change
**Easing:** `ease.standard`
**Properties:** stroke-dashoffset
**Usage:** Goal rings, investment progress

```
stroke-dashoffset: circumference * (1 - value/100)
```

### Determinate Progress

**Purpose:** Show known progress
**Animation:** fill based on value
**Duration:** `motion.normal` (250ms) per value change
**Easing:** `ease.standard`
**Properties:** width (linear), stroke-dashoffset (circular)
**Usage:** Uploads, transfers, processing

### Indeterminate Progress

**Purpose:** Show unknown progress
**Animation:** continuous movement
**Duration:** continuous
**Easing:** `ease.linear`
**Properties:** transform translateX (linear bar), transform rotate (circular)
**Usage:** Background processing, sync, connection

### Background Sync

**Purpose:** Show data synchronization
**Animation:** subtle pulse or spinner
**Duration:** continuous while syncing
**Easing:** `ease.linear`
**Properties:** opacity pulse or rotation
**Usage:** Account sync, data refresh

### Connection Progress

**Purpose:** Show account connection progress
**Animation:** sequential steps with progress
**Duration:** `motion.normal` (250ms) per step
**Easing:** `ease.standard`
**Properties:** opacity, transform translateY (step appearance)
**Usage:** Bank linking, OAuth flows

### Institution Linking

**Purpose:** Show bank connection progress
**Animation:** step-by-step progression
**Duration:** varies by step
**Easing:** `ease.standard`
**Properties:** opacity, transform, checkmark animation
**Usage:** Plaid connection, bank authentication

### Investment Processing

**Purpose:** Show investment order processing
**Animation:** subtle progress with status
**Duration:** varies
**Easing:** `ease.standard`
**Properties:** opacity, progress fill
**Usage:** Stock purchase, ETF order, recurring investment

### Transfer Processing

**Purpose:** Show money transfer progress
**Animation:** step progression with confirmation
**Duration:** varies
**Easing:** `ease.standard`
**Properties:** opacity, progress, checkmark
**Usage:** ACH transfer, wire transfer, bill payment

---

## 09 Financial Motion

### Balance Updates

**Purpose:** Show balance change
**Animation:** number count up/down
**Duration:** `motion.normal` (250ms)
**Easing:** `ease.standard`
**Properties:** text content (number interpolation)
**Direction:** count from old value to new value
**Restraint:** subtle, never flashy

### Net Worth Changes

**Purpose:** Show net worth change
**Animation:** number interpolation with trend arrow
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** text content, opacity (trend arrow)
**Restraint:** professional, not celebratory

### Portfolio Growth

**Purpose:** Show portfolio value change
**Animation:** number interpolation with percentage
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** text content, trend color
**Restraint:** understated, factual

### Investment Gain

**Purpose:** Show positive investment return
**Animation:** subtle green highlight, number count up
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** text color (green), text content
**Restraint:** never exaggerated, no confetti, no celebration

### Investment Loss

**Purpose:** Show negative investment return
**Animation:** subtle red highlight, number count down
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** text color (red), text content
**Restraint:** calm, factual, no alarming animation

### Cash Transfer

**Purpose:** Show money moving between accounts
**Animation:** amount slides from source to destination
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** transform translateX, opacity
**Restraint:** professional, trustworthy

### Recurring Investment

**Purpose:** Show recurring investment execution
**Animation:** subtle confirmation with amount
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** opacity, checkmark
**Restraint:** minimal, routine

### Goal Progress

**Purpose:** Show progress toward financial goal
**Animation:** ring/bar fill with amount update
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset (ring), width (bar), text content
**Restraint:** motivating but not celebratory

### Bill Paid

**Purpose:** Confirm bill payment
**Animation:** checkmark with amount
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.emphasized`
**Properties:** stroke-dashoffset (checkmark draw), opacity
**Restraint:** clear confirmation, not celebratory

### Automation Trigger

**Purpose:** Show automation has executed
**Animation:** subtle indicator with description
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** opacity, transform translateY
**Restraint:** informative, not attention-grabbing

### Transaction Added

**Purpose:** Show new transaction in list
**Animation:** row slides in from right
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
**Properties:** transform translateX, opacity
**Restraint:** smooth, natural

### Tax Savings

**Purpose:** Show tax savings calculation
**Animation:** amount appears with subtle highlight
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** opacity, text content
**Restraint:** informative, professional

### Emergency Fund Progress

**Purpose:** Show emergency fund growth
**Animation:** ring/bar fill with amount
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset, text content
**Restraint:** reassuring, stable

### Financial Motion Rules

1. **Never exaggerate gains.** A 2% return does not warrant a celebration animation.
2. **Never minimize losses.** A 5% loss should be communicated clearly, not hidden.
3. **Never use casino-like animations.** No flashing, no spinning, no confetti.
4. **Always reinforce trust.** Motion should make users feel their money is safe.
5. **Keep it professional.** The motion language is calm, measured, and factual.
6. **Count numbers smoothly.** Never jump from one value to another instantly.
7. **Use color sparingly.** Green for positive, red for negative, blue for neutral.

---

## 10 Feedback Motion

### Success

**Purpose:** Confirm successful action
**Animation:** checkmark draw with subtle scale
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.emphasized`
**Properties:** stroke-dashoffset (checkmark), transform scale(0.95)→scale(1)
**Haptic:** success notification (UINotificationFeedbackGenerator.success)

### Error

**Purpose:** Communicate failure
**Animation:** shake with red flash
**Duration:** `motion.quick` (180ms) for shake, `motion.normal` (250ms) for color
- **Easing:** `ease.standard`
**Properties:** transform translateX (shake), border-color, background-color
**Haptic:** error notification (UINotificationFeedbackGenerator.error)
**Shake:** translateX(-4px, 4px, -2px, 2px, 0) over 200ms

### Warning

**Purpose:** Alert user to potential issue
**Animation:** subtle pulse with orange highlight
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** border-color, opacity pulse
**Haptic:** warning notification (UINotificationFeedbackGenerator.warning)

### Information

**Purpose:** Provide neutral information
**Animation:** fade in with subtle slide
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
**Properties:** opacity, transform translateY(4px)→translateY(0)
**Haptic:** none

### Confirmation

**Purpose:** Confirm destructive or important action
**Animation:** modal present with emphasis
**Duration:** `motion.slow` (350ms)
- **Easing:** `ease.emphasized`
**Properties:** opacity (overlay), transform scale + translateY
**Haptic:** medium impact

### Undo

**Purpose:** Allow reversal of recent action
**Animation:** snackbar slide up with countdown
**Duration:** `motion.normal` (250ms) for enter, `motion.quick` (180ms) for dismiss
- **Easing:** `ease.enter` (enter), `ease.exit` (dismiss)
**Properties:** transform translateY, opacity
**Haptic:** light impact on undo

### Retry

**Purpose:** Offer retry after failure
**Animation:** spinner replaces button text
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** opacity (text out, spinner in)
**Haptic:** light impact

### Offline

**Purpose:** Indicate offline status
**Animation:** banner slides down from top
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
**Properties:** transform translateY, opacity
**Haptic:** none

### Reconnect

**Purpose:** Indicate reconnection attempt
**Animation:** spinner with status text
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** opacity (text change), spinner
**Haptic:** none

### Sync Complete

**Purpose:** Confirm data synchronization
**Animation:** subtle checkmark with fade
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** opacity, checkmark stroke-dashoffset
**Haptic:** light impact

---

## 11 AI Motion

### AI Thinking

**Purpose:** Indicate AI is processing
**Animation:** three dots pulsing sequentially
**Duration:** 1500ms per cycle
- **Easing:** `ease.standard` (each dot)
**Properties:** opacity, transform scale
**Pattern:** dot 1 → dot 2 → dot 3, then repeat
**Restraint:** subtle, never distracting

### Streaming Responses

**Purpose:** Show AI response appearing
**Animation:** text appears character by character
**Duration:** varies with response length
- **Easing:** `ease.linear`
**Properties:** text content, opacity (cursor blink)
**Cursor:** blinking pipe character, 500ms cycle
**Restraint:** smooth, readable pace

### Recommendation Generation

**Purpose:** Show AI generating recommendation
**Animation:** skeleton with progressive reveal
**Duration:** varies
- **Easing:** `ease.standard`
**Properties:** opacity (skeleton → content), transform translateY
**Restraint:** informative, not theatrical

### Loading Insight

**Purpose:** Show AI insight loading
**Animation:** shimmer with AI indicator
**Duration:** varies
- **Easing:** `ease.standard`
**Properties:** shimmer animation, opacity
**Restraint:** subtle, professional

### Conversation Transition

**Purpose:** Transition between conversation turns
**Animation:** old message slides up, new message slides in
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.enter`
**Properties:** transform translateY, opacity
**Restraint:** smooth, natural flow

### Typing Indicator

**Purpose:** Show AI is generating response
**Animation:** three dots bouncing
**Duration:** 1200ms per cycle
- **Easing:** `ease.standard`
**Properties:** transform translateY (bounce)
**Pattern:** dots bounce up and down sequentially
**Restraint:** subtle, not distracting

### Follow-up Suggestions

**Purpose:** Present follow-up options
**Animation:** chips appear sequentially
**Duration:** `motion.quick` (180ms) per chip, staggered 50ms
- **Easing:** `ease.enter`
**Properties:** opacity, transform translateY(8px)→translateY(0)
**Restraint:** helpful, not pushy

### AI Motion Rules

1. **Subtle only.** AI motion should never draw attention to itself.
2. **Never theatrical.** No dramatic reveals, no flashy animations.
3. **Professional.** The AI is a financial advisor, not a entertainer.
4. **Readable.** Streaming text must be readable, not too fast.
5. **Calm.** Even when processing, the interface should feel calm.

---

## 12 Chart Motion

### Line Charts

**Purpose:** Show data trend
**Animation:** line draws from left to right
**Duration:** `motion.emphasis` (500ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset
**Restraint:** smooth, explains data flow

### Area Charts

**Purpose:** Show data volume over time
**Animation:** area fills from bottom to top while line draws
**Duration:** `motion.emphasis` (500ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset (line), opacity (area fill)
**Restraint:** smooth, proportional

### Bar Charts

**Purpose:** Compare values
**Animation:** bars grow from baseline
**Duration:** `motion.normal` (250ms) per bar, staggered 50ms
- **Easing:** `ease.enter`
**Properties:** transform scaleY(0)→scaleY(1), transform-origin bottom
**Restraint:** sequential, explains comparison

### Stacked Bars

**Purpose:** Show composition
**Animation:** segments grow sequentially
**Duration:** `motion.normal` (250ms) per segment, staggered 30ms
- **Easing:** `ease.enter`
**Properties:** transform scaleY, transform-origin bottom
**Restraint:** sequential, clear composition

### Donut Charts

**Purpose:** Show proportions
**Animation:** segments draw clockwise from top
**Duration:** `motion.emphasis` (500ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset
**Restraint:** smooth, clockwise flow

### Allocation Charts

**Purpose:** Show portfolio allocation
**Animation:** segments draw with labels appearing
**Duration:** `motion.emphasis` (500ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset, opacity (labels)
**Restraint:** informative, clear

### Progress Rings

**Purpose:** Show progress toward goal
**Animation:** ring fills clockwise from top
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset
**Restraint:** smooth, proportional

### Sparklines

**Purpose:** Show mini trend
**Animation:** line draws left to right
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset
**Restraint:** subtle, quick

### Filtering

**Purpose:** Show filtered data
**Animation:** excluded data fades, included data remains
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** opacity (filtered out data 1→0.3)
**Restraint:** clear, explains filtering

### Range Changes

**Purpose:** Show different time range
**Animation:** data transitions smoothly
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** opacity (crossfade), transform (position shift)
**Restraint:** smooth, maintains context

### Data Refresh

**Purpose:** Show new data loaded
**Animation:** subtle pulse on changed values
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** opacity pulse, color highlight
**Restraint:** informative, not alarming

### Tooltip Appearance

**Purpose:** Show data point details
**Animation:** tooltip fades in near data point
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.enter`
**Properties:** opacity, transform translateY(4px)→translateY(0)
**Restraint:** quick, positioned near data

### Selection

**Purpose:** Highlight selected data point
**Animation:** dot scales up, others scale down
**Duration:** `motion.quick` (180ms)
- **Easing:** `ease.standard`
**Properties:** transform scale
**Restraint:** clear, not dramatic

### Comparison

**Purpose:** Compare two data points
**Animation:** connecting line draws between points
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset, opacity
**Restraint:** informative, clear

### Forecast

**Purpose:** Show predicted data
**Animation:** dashed line extends from known data
**Duration:** `motion.normal` (250ms)
- **Easing:** `ease.standard`
**Properties:** stroke-dashoffset, opacity
**Restraint:** clear distinction between known and predicted

### Chart Motion Rules

1. **Explain data changes.** Motion should help users understand what changed.
2. **Never exaggerate.** A 1% change does not warrant a dramatic animation.
3. **Sequential for comparison.** When comparing, animate bars/segments sequentially.
4. **Smooth for trends.** When showing trends, animate smoothly from left to right.
5. **Quick for updates.** When data updates, transition quickly without fanfare.
6. **Accessible.** Always provide non-animated alternative for reduced motion.

---

## 13 Accessibility

### Reduce Motion

**Setting:** `prefers-reduced-motion: reduce`
**Behavior:** All animations are replaced with instant state changes.

| Animation | Reduced Motion Alternative |
|-----------|---------------------------|
| Fade in/out | Instant show/hide |
| Slide in/out | Instant position change |
| Scale in/out | Instant size change |
| Page transition | Instant screen swap |
| Sheet present/dismiss | Instant show/hide |
| Modal present/dismiss | Instant show/hide |
| Chart animation | Instant final state |
| Skeleton shimmer | Static placeholder |
| Spinner | Static indicator |
| Progress bar | Static fill |
| Number count | Instant final value |

### Reduce Transparency

**Setting:** `prefers-reduced-transparency: reduce`
**Behavior:** Transparent elements become opaque.

| Element | Normal | Reduced Transparency |
|---------|--------|---------------------|
| Overlay | 50% black | Solid black |
| Blur | backdrop blur | Solid background |
| Glass | transparency | Solid surface |
| Shadow | transparent shadow | Solid border |

### VoiceOver

**Requirement:** All animations must be compatible with VoiceOver.
**Behavior:**
- Announce state changes
- Announce content changes
- Announce progress updates
- Announce success/error states
- Do not rely on animation for meaning

### High Contrast

**Requirement:** All animated elements must meet contrast ratios.
**Behavior:**
- Focus rings visible at 3:1 contrast
- State changes visible at 3:1 contrast
- Progress indicators visible at 3:1 contrast
- Animated elements maintain contrast during animation

### Dynamic Type

**Requirement:** All animations must work with Dynamic Type.
**Behavior:**
- Animations scale with text size
- No content clipping at large sizes
- No layout shift during animation
- Touch targets maintain minimum size

### Keyboard Navigation

**Requirement:** All animated elements must be keyboard accessible.
**Behavior:**
- Focus rings animate in
- Tab navigation works with animations
- Enter/Space triggers same animations as tap
- Escape dismisses overlays
- Arrow keys navigate within components

### Motion Alternatives

Every meaningful interaction must work without animation:

| Interaction | Animation | Alternative |
|-------------|-----------|-------------|
| Button press | Scale | Color change |
| Success | Checkmark draw | Static checkmark |
| Error | Shake | Color change + icon |
| Loading | Spinner | Static "Loading..." text |
| Progress | Animated bar | Static bar at current value |
| Navigation | Slide | Instant screen change |
| Sheet | Slide up | Instant appear |
| Modal | Scale + fade | Instant appear |
| Chart | Animate | Static final state |
| Toast | Slide in | Instant appear |

### Testing Checklist

- [ ] All animations respect `prefers-reduced-motion`
- [ ] All animations respect `prefers-reduced-transparency`
- [ ] All content accessible via VoiceOver
- [ ] All focus rings meet contrast requirements
- [ ] All animations work with Dynamic Type
- [ ] All interactions work with keyboard
- [ ] All state changes have non-animated alternatives
- [ ] No animation is required for meaning

---

## 14 Documentation

### Motion Specification Template

Every motion specification must include:

```markdown
## [Animation Name]

### Purpose
Why this animation exists. What it communicates.

### Duration
[duration token] ([value]ms)

### Easing
[easing token] ([value])

### Trigger
What causes this animation to start.

### Properties Animated
List of CSS/Swift properties being animated.

### Accessibility
How this animation behaves with reduced motion.

### Performance Notes
Performance considerations and optimizations.

### Engineering Notes
Platform-specific implementation details.

### Examples
Code examples for each platform.

### Do
What to do.

### Don't
What not to do.
```

### Documentation Rules

1. **Every animation must be documented.** No undocumented animations.
2. **Use tokens, not values.** Reference `motion.normal`, not `250ms`.
3. **Include accessibility.** Every spec must address reduced motion.
4. **Include performance.** Every spec must address performance.
5. **Include examples.** Every spec must include code examples.
6. **Review regularly.** Documentation must stay current.

---

## Engineering

### SwiftUI

```swift
// Duration tokens
enum MotionDuration {
    static let instant: Double = 0
    static let fast: Double = 0.1
    static let quick: Double = 0.18
    static let normal: Double = 0.25
    static let slow: Double = 0.35
    static let emphasis: Double = 0.5
}

// Easing tokens
enum MotionEasing {
    static let standard = Animation.easeInOut(duration: MotionDuration.normal)
    static let enter = Animation.easeOut(duration: MotionDuration.normal)
    static let exit = Animation.easeIn(duration: MotionDuration.normal)
    static let emphasized = Animation.easeInOut(duration: MotionDuration.slow)
    static let linear = Animation.linear(duration: MotionDuration.normal)
}

// Usage
Button(action: { }) {
    Text("Tap")
}
.scaleEffect(isPressed ? 0.97 : 1)
.animation(.easeInOut(duration: MotionDuration.fast), value: isPressed)
```

### UIKit

```swift
// Duration tokens
let motionInstant: TimeInterval = 0
let motionFast: TimeInterval = 0.1
let motionQuick: TimeInterval = 0.18
let motionNormal: TimeInterval = 0.25
let motionSlow: TimeInterval = 0.35
let motionEmphasis: TimeInterval = 0.5

// Easing tokens
let easeStandard = CAMediaTimingFunction(name: .easeInEaseOut)
let easeEnter = CAMediaTimingFunction(name: .easeOut)
let easeExit = CAMediaTimingFunction(name: .easeIn)
let easeEmphasized = CAMediaTimingFunction(controlPoints: 0.4, 0, 0.2, 1)
let easeLinear = CAMediaTimingFunction(name: .linear)

// Usage
UIView.animate(withDuration: motionQuick, animations: {
    button.transform = CGAffineTransform(scaleX: 0.97, y: 0.97)
})
```

### React

```javascript
// Duration tokens
export const motion = {
  instant: 0,
  fast: 100,
  quick: 180,
  normal: 250,
  slow: 350,
  emphasis: 500,
};

// Easing tokens
export const ease = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
  emphasized: 'cubic-bezier(0.4, 0, 0.2, 1)',
  linear: 'linear',
};

// Usage
const buttonStyle = {
  transition: `transform ${motion.fast}ms ${ease.standard}`,
  transform: isPressed ? 'scale(0.97)' : 'scale(1)',
};
```

### React Native

```javascript
// Duration tokens
import { Animated } from 'react-native';

const motion = {
  instant: 0,
  fast: 100,
  quick: 180,
  normal: 250,
  slow: 350,
  emphasis: 500,
};

// Easing tokens
const ease = {
  standard: Animated.Easing.inOut(Animated.Easing.ease),
  enter: Animated.Easing.out(Animated.Easing.ease),
  exit: Animated.Easing.in(Animated.Easing.ease),
  emphasized: Animated.Easing.inOut(Animated.Easing.ease),
  linear: Animated.Easing.linear,
};

// Usage
Animated.sequence([
  Animated.timing(scale, {
    toValue: 0.97,
    duration: motion.fast,
    easing: ease.standard,
    useNativeDriver: true,
  }),
  Animated.timing(scale, {
    toValue: 1,
    duration: motion.fast,
    easing: ease.standard,
    useNativeDriver: true,
  }),
]).start();
```

### CSS

```css
/* Duration tokens */
:root {
  --motion-instant: 0ms;
  --motion-fast: 100ms;
  --motion-quick: 180ms;
  --motion-normal: 250ms;
  --motion-slow: 350ms;
  --motion-emphasis: 500ms;
}

/* Easing tokens */
:root {
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-emphasized: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-linear: linear;
}

/* Usage */
.button {
  transition: transform var(--motion-fast) var(--ease-standard);
}

.button:active {
  transform: scale(0.97);
}
```

### Lottie (Only When Necessary)

**Use Lottie only when:**
- Complex keyframe animation is required
- Animation cannot be achieved with CSS/SwiftUI transforms
- Animation is shared across platforms and needs identical rendering
- Animation is part of onboarding or marketing

**Do not use Lottie for:**
- Simple transitions (use native)
- Micro-interactions (use native)
- Loading indicators (use native)
- Any animation that can be achieved with transforms/opacity

---

## Validation

### Review Checklist

Review every motion pattern against these questions:

| Question | Required |
|----------|----------|
| Does this animation improve understanding? | Yes |
| Can the same goal be achieved with less motion? | Yes |
| Does it feel native to iOS? | Yes |
| Does it respect accessibility? | Yes |
| Is it performant (60fps)? | Yes |
| Is it documented? | Yes |
| Does it use tokens (not hard-coded values)? | Yes |
| Does it have reduced motion alternative? | Yes |

### Refinement Process

1. **Implement** the animation
2. **Test** on real device
3. **Measure** frame rate
4. **Check** accessibility
5. **Review** against principles
6. **Simplify** if possible
7. **Document** the final version
8. **Repeat** until the motion system is the official interaction language

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
