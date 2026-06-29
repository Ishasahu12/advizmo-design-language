# Advizmo Motion & Animation System

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1**

---

## Table of Contents

1. [Overview](#overview)
2. [Motion Philosophy](#motion-philosophy)
3. [01 Timing System](#01-timing-system)
4. [02 Easing Functions](#02-easing-functions)
5. [03 Duration Tokens](#03-duration-tokens)
6. [04 Entrance Animations](#04-entrance-animations)
7. [05 Exit Animations](#05-exit-animations)
8. [06 Transition Animations](#06-transition-animations)
9. [07 Micro-Interactions](#07-micro-interactions)
10. [08 Loading Animations](#08-loading-animations)
11. [09 Scroll Animations](#09-scroll-animations)
12. [10 Gesture Animations](#10-gesture-animations)
13. [11 Page Transitions](#11-page-transitions)
14. [12 Modal Animations](#12-modal-animations)
15. [13 Toast Animations](#13-toast-animations)
16. [14 Chart Animations](#14-chart-animations)
17. [15 Skeleton Animations](#15-skeleton-animations)
18. [16 Pull to Refresh](#16-pull-to-refresh)
19. [17 Reduced Motion](#17-reduced-motion)
20. [18 Performance](#18-performance)
21. [Figma Animation Tokens](#figma-animation-tokens)
22. [Validation Checklist](#validation-checklist)

---

## Overview

The Motion & Animation System provides consistent, purposeful animations that enhance usability and delight.

### Core Principles

1. **Purposeful**: Every animation has a clear function
2. **Performant**: 60fps on all devices
3. **Accessible**: Respect reduced motion preferences
4. **Consistent**: Same animation for same action
5. **Subtle**: Enhance, never distract

### Animation Categories

| Category | Purpose | Duration |
|----------|---------|----------|
| Feedback | Confirm user action | 100-200ms |
| Transition | Connect related elements | 200-300ms |
| Entrance | Introduce new content | 200-300ms |
| Exit | Remove content | 150-200ms |
| Loading | Indicate processing | Continuous |
| Delight | Add personality | 300-500ms |

---

## Motion Philosophy

### Why Motion Matters

1. **Spatial Awareness**: Shows where content comes from/goes
2. **State Changes**: Confirms actions visually
3. **Hierarchy**: Guides attention to important elements
4. **Continuity**: Maintains context across screens
5. **Delight**: Makes the app feel alive

### When to Animate

| Animate | Don't Animate |
|---------|---------------|
| Page transitions | Loading spinners |
| Modal presentations | Skeleton loaders |
| Toast appearances | Progress bars |
| Button feedback | Content changes |
| List item changes | Data updates |

### Animation Rules

1. **Never block user interaction**
2. **Always provide visual feedback**
3. **Keep animations under 500ms**
4. **Use hardware acceleration**
5. **Respect reduced motion**

---

## 01 Timing System

### Timing Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `duration-instant` | 0ms | Immediate feedback |
| `duration-fast` | 100ms | Button feedback |
| `duration-normal` | 200ms | Standard transitions |
| `duration-slow` | 300ms | Complex transitions |
| `duration-slower` | 500ms | Page transitions |
| `duration-slowest` | 1000ms | Delight animations |

### Timing Rules

| Action | Duration | Reason |
|--------|----------|--------|
| Button press | 100ms | Immediate feedback |
| Hover state | 150ms | Quick response |
| Focus state | 100ms | Accessibility |
| Toggle | 200ms | Clear state change |
| Modal appear | 300ms | Noticeable but quick |
| Page transition | 300ms | Spatial continuity |
| Toast appear | 200ms | Quick notification |
| Toast dismiss | 150ms | Quick cleanup |

---

## 02 Easing Functions

### Easing Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `ease-linear` | linear | Progress bars |
| `ease-in` | cubic-bezier(0.4, 0, 1, 1) | Exiting elements |
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | Entering elements |
| `ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | State changes |
| `ease-spring` | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Playful elements |
| `ease-bounce` | cubic-bezier(0.68, -0.55, 0.265, 1.55) | Bounce effects |

### Easing Usage

| Animation | Easing | Reason |
|-----------|--------|--------|
| Fade in | ease-out | Natural appearance |
| Fade out | ease-in | Natural disappearance |
| Slide in | ease-out | Entering from edge |
| Slide out | ease-in | Exiting to edge |
| Scale up | ease-out | Growing from point |
| Scale down | ease-in | Shrinking to point |
| Button press | ease-in-out | Natural feel |
| Modal appear | ease-out | Floating in |
| Toast appear | ease-out | Sliding in |
| Toast dismiss | ease-in | Sliding out |

---

## 03 Duration Tokens

### Duration Scale

```
0ms     → Instant feedback
100ms   → Button feedback
150ms   → Hover states
200ms   → Standard transitions
250ms   → Moderate transitions
300ms   → Complex transitions
400ms   → Page transitions
500ms   → Delight animations
1000ms  → Long animations
```

### Duration Rules

| Rule | Value | Reason |
|------|-------|--------|
| Minimum | 100ms | Perceptible |
| Maximum | 500ms | Not tedious |
| Standard | 200ms | Default |
| Complex | 300ms | Multi-step |

---

## 04 Entrance Animations

### Fade In

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 200ms ease-out;
}
```

### Slide In

```css
@keyframes slideInUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.slide-in-up {
  animation: slideInUp 300ms ease-out;
}
```

### Scale In

```css
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.scale-in {
  animation: scaleIn 200ms ease-out;
}
```

### Entrance Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Fade In | 200ms | ease-out |
| Slide In Up | 300ms | ease-out |
| Slide In Down | 300ms | ease-out |
| Slide In Left | 300ms | ease-out |
| Slide In Right | 300ms | ease-out |
| Scale In | 200ms | ease-out |
| Pop In | 300ms | ease-spring |

---

## 05 Exit Animations

### Fade Out

```css
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

.fade-out {
  animation: fadeOut 150ms ease-in;
}
```

### Slide Out

```css
@keyframes slideOutDown {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(20px); opacity: 0; }
}

.slide-out-down {
  animation: slideOutDown 200ms ease-in;
}
```

### Exit Timing

| Animation | Duration | Easing |
|-----------|----------|--------|
| Fade Out | 150ms | ease-in |
| Slide Out Up | 200ms | ease-in |
| Slide Out Down | 200ms | ease-in |
| Slide Out Left | 200ms | ease-in |
| Slide Out Right | 200ms | ease-in |
| Scale Out | 150ms | ease-in |
| Pop Out | 200ms | ease-in |

---

## 06 Transition Animations

### State Transitions

```css
/* Button state transition */
.button {
  transition: all 200ms ease-in-out;
}

.button:hover {
  background-color: brand-hover;
}

.button:active {
  background-color: brand-active;
  transform: scale(0.98);
}
```

### Transition Rules

| Property | Duration | Easing |
|----------|----------|--------|
| Background Color | 150ms | ease-in-out |
| Text Color | 150ms | ease-in-out |
| Border Color | 150ms | ease-in-out |
| Box Shadow | 200ms | ease-in-out |
| Transform | 200ms | ease-in-out |
| Opacity | 150ms | ease-in-out |

---

## 07 Micro-Interactions

### Button Press

```css
.button:active {
  transform: scale(0.98);
  transition: transform 100ms ease-in-out;
}
```

### Toggle Switch

```css
.toggle-thumb {
  transition: transform 200ms ease-in-out;
}

.toggle:checked + .toggle-thumb {
  transform: translateX(20px);
}
```

### Checkbox

```css
.checkbox-mark {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 200ms ease-in-out;
}

.checkbox:checked + .checkbox-mark {
  stroke-dashoffset: 0;
}
```

### Radio Button

```css
.radio-dot {
  transform: scale(0);
  transition: transform 200ms ease-spring;
}

.radio:checked + .radio-dot {
  transform: scale(1);
}
```

### Like Button

```css
.like-icon {
  transition: transform 200ms ease-spring;
}

.like:active .like-icon {
  transform: scale(1.2);
}
```

---

## 08 Loading Animations

### Spinner

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

### Pulse

```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Shimmer

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.shimmer {
  background: linear-gradient(90deg, gray-200 25%, gray-100 50%, gray-200 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### Dots

```css
@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0.6); }
  40% { transform: scale(1); }
}

.dot:nth-child(1) { animation: dotPulse 1.4s ease-in-out infinite; }
.dot:nth-child(2) { animation: dotPulse 1.4s ease-in-out 0.2s infinite; }
.dot:nth-child(3) { animation: dotPulse 1.4s ease-in-out 0.4s infinite; }
```

---

## 09 Scroll Animations

### Parallax

```css
.parallax {
  transform: translateY(calc(var(--scroll) * 0.5));
}
```

### Reveal on Scroll

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 300ms ease-out;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Sticky Header

```css
.header {
  position: sticky;
  top: 0;
  transition: transform 200ms ease-out;
}

.header.hidden {
  transform: translateY(-100%);
}
```

---

## 10 Gesture Animations

### Swipe to Delete

```css
.swipe-item {
  transition: transform 200ms ease-out;
}

.swipe-item.swiping {
  transform: translateX(calc(var(--swipe) * 1px));
}

.swipe-item.swiped {
  transform: translateX(-100%);
}
```

### Pull to Refresh

```css
.pull-indicator {
  transition: transform 200ms ease-out, opacity 200ms ease-out;
}

.pull-indicator.pulling {
  transform: translateY(calc(var(--pull) * 0.5));
  opacity: min(1, calc(var(--pull) / 100));
}
```

### Long Press

```css
.long-press {
  transition: transform 200ms ease-out;
}

.long-press.pressing {
  transform: scale(0.95);
}
```

---

## 11 Page Transitions

### Slide Transition

```css
.page-enter {
  transform: translateX(100%);
}

.page-enter-active {
  transform: translateX(0);
  transition: transform 300ms ease-out;
}

.page-exit {
  transform: translateX(0);
}

.page-exit-active {
  transform: translateX(-100%);
  transition: transform 300ms ease-in;
}
```

### Fade Transition

```css
.page-enter {
  opacity: 0;
}

.page-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-out;
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 150ms ease-in;
}
```

### Modal Transition

```css
.modal-overlay-enter {
  opacity: 0;
}

.modal-overlay-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-out;
}

.modal-enter {
  transform: scale(0.95);
  opacity: 0;
}

.modal-enter-active {
  transform: scale(1);
  opacity: 1;
  transition: all 300ms ease-out;
}
```

---

## 12 Modal Animations

### Modal Appear

```css
@keyframes modalAppear {
  from {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.modal {
  animation: modalAppear 300ms ease-out;
}
```

### Modal Dismiss

```css
@keyframes modalDismiss {
  from {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  to {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
  }
}

.modal.dismissing {
  animation: modalDismiss 200ms ease-in;
}
```

### Bottom Sheet

```css
@keyframes sheetAppear {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.bottom-sheet {
  animation: sheetAppear 300ms ease-out;
}
```

---

## 13 Toast Animations

### Toast Appear

```css
@keyframes toastAppear {
  from {
    transform: translateY(100%) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.toast {
  animation: toastAppear 200ms ease-out;
}
```

### Toast Dismiss

```css
@keyframes toastDismiss {
  from {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-20px) scale(0.95);
    opacity: 0;
  }
}

.toast.dismissing {
  animation: toastDismiss 150ms ease-in;
}
```

---

## 14 Chart Animations

### Line Chart Draw

```css
@keyframes drawLine {
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
}

.chart-line {
  stroke-dasharray: 1000;
  animation: drawLine 1s ease-out;
}
```

### Bar Chart Grow

```css
@keyframes growBar {
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
}

.chart-bar {
  transform-origin: bottom;
  animation: growBar 300ms ease-out;
}
```

### Pie Chart

```css
@keyframes pieReveal {
  from { stroke-dashoffset: 100; }
  to { stroke-dashoffset: 0; }
}

.chart-pie {
  animation: pieReveal 500ms ease-out;
}
```

---

## 15 Skeleton Animations

### Shimmer Effect

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg, gray-200 25%, gray-100 50%, gray-200 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s ease-in-out infinite;
}
```

### Pulse Effect

```css
@keyframes skeletonPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

.skeleton-pulse {
  animation: skeletonPulse 1.5s ease-in-out infinite;
}
```

---

## 16 Pull to Refresh

### Pull Animation

```css
@keyframes pullRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
}

.pull-indicator.pulling {
  animation: pullRotate 200ms ease-out;
}
```

### Refresh Animation

```css
@keyframes refreshSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.pull-indicator.refreshing {
  animation: refreshSpin 1s linear infinite;
}
```

---

## 17 Reduced Motion

### Reduced Motion Tokens

| Token | Normal | Reduced |
|-------|--------|---------|
| `duration-instant` | 0ms | 0ms |
| `duration-fast` | 100ms | 0ms |
| `duration-normal` | 200ms | 0ms |
| `duration-slow` | 300ms | 0ms |
| `duration-slower` | 500ms | 0ms |
| `duration-slowest` | 1000ms | 0ms |

### Implementation

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Reduced Motion Rules

1. Remove all non-essential animations
2. Keep functional animations (loading indicators)
3. Use instant state changes
4. Provide alternative feedback (haptic, sound)

---

## 18 Performance

### Performance Rules

1. **Use transform and opacity only** for animations
2. **Avoid animating layout properties** (width, height, padding)
3. **Use will-change sparingly** for predicted animations
4. **Batch DOM reads and writes**
5. **Use requestAnimationFrame** for JavaScript animations

### Performance Checklist

- [ ] Animations run at 60fps
- [ ] No jank during animations
- [ ] No layout thrashing
- [ ] No paint storms
- [ ] No memory leaks

### Optimization Tips

```css
/* Good: GPU-accelerated */
.animated {
  transform: translateX(100px);
  opacity: 0.5;
}

/* Bad: Layout-triggering */
.animated {
  width: 100px;
  margin-left: 50px;
}
```

---

## Figma Animation Tokens

### Duration Variables

| Variable | Value |
|----------|-------|
| `duration/instant` | 0ms |
| `duration/fast` | 100ms |
| `duration/normal` | 200ms |
| `duration/slow` | 300ms |
| `duration/slower` | 500ms |

### Easing Variables

| Variable | Value |
|----------|-------|
| `ease/linear` | linear |
| `ease/in` | cubic-bezier(0.4, 0, 1, 1) |
| `ease/out` | cubic-bezier(0, 0, 0.2, 1) |
| `ease/in-out` | cubic-bezier(0.4, 0, 0.2, 1) |
| `ease/spring` | cubic-bezier(0.175, 0.885, 0.32, 1.275) |

### Applying in Figma

1. Create variables for durations
2. Create variables for easings
3. Apply to component animations
4. Use Smart Animate for transitions

---

## Validation Checklist

### Timing

- [ ] All animations use duration tokens
- [ ] All animations are under 500ms
- [ ] All animations feel responsive
- [ ] All animations are purposeful
- [ ] All animations are documented

### Easing

- [ ] All animations use easing tokens
- [ ] Easing matches animation type
- [ ] Easing feels natural
- [ ] Easing is consistent
- [ ] Easing is documented

### Performance

- [ ] All animations run at 60fps
- [ ] No jank during animations
- [ ] No layout thrashing
- [ ] No paint storms
- [ ] No memory leaks

### Accessibility

- [ ] Reduced motion supported
- [ ] No essential information in animations
- [ ] Alternative feedback provided
- [ ] Focus management maintained
- [ ] Screen reader compatible

### Consistency

- [ ] Same animations for same actions
- [ ] Consistent timing across components
- [ ] Consistent easing across components
- [ ] Consistent direction across components
- [ ] Consistent behavior across platforms

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
