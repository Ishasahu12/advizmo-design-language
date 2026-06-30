# Advizmo Production Component Standard v1.0

**The quality gate for every component in the Advizmo Design System.**

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Component Philosophy](#2-component-philosophy)
3. [Reuse Rule](#3-reuse-rule)
4. [Auto Layout](#4-auto-layout)
5. [Variables](#5-variables)
6. [Typography](#6-typography)
7. [Component Properties](#7-component-properties)
8. [Variants](#8-variants)
9. [States](#9-states)
10. [Accessibility](#10-accessibility)
11. [Apple Review](#11-apple-review)
12. [Engineering](#12-engineering)
13. [Design Review](#13-design-review)
14. [Final Validation](#14-final-validation)
15. [Component Checklist](#15-component-checklist)

---

## 1. Purpose

This document defines the minimum quality standard every component must satisfy before it becomes part of the Advizmo Design System. This standard applies to every existing and future component.

No component enters the Design System unless it satisfies every requirement defined here.

### Primary References

| Reference | Priority |
|-----------|----------|
| Apple Human Interface Guidelines | Highest |
| Apple Design Resources | High |
| Apple iOS UI Kit | High |
| IBM Design Language | Medium |
| Stripe Design System | Medium |
| Material Design | Architecture only |

When references disagree, follow Apple.

---

## 2. Component Philosophy

Every component must:

| Requirement | Meaning |
|-------------|---------|
| Solve one clear problem | Single responsibility |
| Have one clear responsibility | Not a kitchen-sink component |
| Be reusable | Used in multiple contexts |
| Be composable | Built from simpler components |
| Support accessibility | VoiceOver, Dynamic Type, etc. |
| Support platform adaptation | iOS, Web, Android |
| Use semantic tokens | No hardcoded values |
| Support Auto Layout | Responsive by default |
| Never duplicate another component | One component = one implementation |
| Never exist because "might be useful" | Must solve real problems |

---

## 3. Reuse Rule

Before creating any component, ask:

| Question | If NO |
|----------|-------|
| Can an existing component solve this? | Do not create |
| Can a variant solve this? | Add variant, not new component |
| Can composition solve this? | Compose existing components |
| Can a property solve this? | Add property, not new component |
| Will this appear in at least three production screens? | Do not create |

**Rule:** If the answer to all five questions is NO, do not create the component.

---

## 4. Auto Layout

Every component must use Auto Layout.

| Requirement | Rule |
|-------------|------|
| Auto Layout | Always enabled |
| Hug Content | Default for buttons, badges, tags |
| Fill Container | Default for cards, inputs, lists |
| Proper constraints | Center, pinned edges, or fill |
| Logical nesting | Max 3 levels deep |
| No absolute positioning | Unless required by Apple interaction patterns |

### Layout Rules

1. **Horizontal or vertical.** Never both in same frame.
2. **Gap consistency.** Use spacing tokens, not magic numbers.
3. **Padding consistency.** Use spacing tokens for all padding.
4. **Constraint logic.** Pin to edges or center — never both.
5. **Nesting limit.** Max 3 levels of nested Auto Layout frames.

---

## 5. Variables

No hardcoded values. Every component must consume semantic tokens.

| Token Category | Requirement |
|----------------|-------------|
| Semantic Colors | `action/primary`, `text/primary`, `surface/card`, etc. |
| Semantic Typography | `typography/body-m`, `typography/label-l`, etc. |
| Semantic Radius | `radius-s`, `radius-m`, `radius-full` |
| Semantic Spacing | `space-xs`, `space-s`, `space-m`, `space-l`, `space-xl` |
| Semantic Elevation | `elevation/flat`, `elevation/raised`, `elevation/floating` |
| Semantic Motion | `duration/instant`, `duration/normal`, `duration/slow` |
| Semantic Borders | `border/default`, `border/focus` |

### Forbidden Values

| Never | Use Instead |
|-------|-------------|
| `#3B82F6` | `action/primary` |
| `16px` | `space-l` |
| `8px` | `space-s` |
| `0.25` | `duration/normal` |
| `Helvetica` | `typography/body-m` |

---

## 6. Typography

Use semantic typography roles only. Never assign fonts directly.

| Role | Usage |
|------|-------|
| `typography/display-xl` | Hero metrics, dashboard headlines |
| `typography/display-l` | Section heroes |
| `typography/display-m` | Card heroes |
| `typography/financial-xl` | Net worth, portfolio value |
| `typography/financial-l` | Account balances |
| `typography/financial-m` | Transaction amounts |
| `typography/financial-s` | Small amounts, inline values |
| `typography/title-l` | Screen titles |
| `typography/title-m` | Section titles |
| `typography/body-l` | Primary body text |
| `typography/body-m` | Secondary body text |
| `typography/body-s` | Tertiary body text |
| `typography/label-l` | Button text, input labels |
| `typography/label-m` | Helper text, captions |
| `typography/caption` | Timestamps, fine print |
| `typography/overline` | Section headers, categories |

**Rule:** Platform mapping determines the actual font implementation. Components reference roles, not fonts.

---

## 7. Component Properties

Every production component should expose only meaningful properties.

### Required Properties

| Property | Type | Values |
|----------|------|--------|
| `variant` | Enum | Component-specific variants |
| `size` | Enum | `small`, `medium`, `large` |
| `state` | Enum | `default`, `pressed`, `focused`, `disabled`, `loading`, `selected`, `error`, `success` |

### Optional Properties

| Property | Type | When to Use |
|----------|------|-------------|
| `leadingIcon` | Instance Swap | Icon before content |
| `trailingIcon` | Instance Swap | Icon after content |
| `iconOnly` | Boolean | Icon button without text |
| `loading` | Boolean | Async action in progress |
| `disabled` | Boolean | Cannot be interacted with |
| `selected` | Boolean | Toggle state |
| `fullWidth` | Boolean | Fill container width |
| `badge` | Instance Swap | Status indicator |
| `platform` | Enum | Platform-specific rendering |

### Forbidden Properties

| Never | Why |
|-------|-----|
| `backgroundColor` | Use variant instead |
| `fontSize` | Use size instead |
| `borderRadius` | Use variant instead |
| `padding` | Use size instead |
| `opacity` | Use state instead |

---

## 8. Variants

Variants should exist only when:

| Condition | Example |
|-----------|---------|
| Behavior changes | Button vs. Link |
| Visual hierarchy changes | Primary vs. Secondary |
| Accessibility changes | Icon vs. Text button |

### Forbidden Variants

| Never | Why |
|-------|-----|
| Cosmetic differences only | Use properties instead |
| "Light" and "Dark" | Use theme tokens |
| "Small" and "Large" | Use size property |
| "With icon" and "Without icon" | Use leadingIcon property |

---

## 9. States

Every interactive component should define only applicable states.

| State | Visual Treatment |
|-------|------------------|
| **Default** | Standard appearance |
| **Pressed** | Scale to 0.97, darken 10% |
| **Focused** | 2px focus ring, 2px offset |
| **Disabled** | 40% opacity, no interaction |
| **Loading** | Spinner replaces content, disabled |
| **Selected** | Filled background (toggle only) |
| **Error** | Red border, shake animation |
| **Success** | Green checkmark, then reverts |
| **Hover** | Web only — darken 5% |

### State Rules

1. **Not all states apply to all components.** Badge has no pressed state.
2. **Hover is web only.** iOS does not have hover.
3. **Loading disables interaction.** Button cannot be tapped while loading.
4. **Error is temporary.** Reverts to default after correction.
5. **Success is temporary.** Reverts to default after confirmation.

---

## 10. Accessibility

Every component must support:

| Requirement | Implementation |
|-------------|----------------|
| Touch target | Minimum 44×44pt |
| VoiceOver | Accessible label describes function |
| Dynamic Type | Font scales with system settings |
| Reduced Motion | No animation when enabled |
| High Contrast | Focus ring visible |
| Keyboard Navigation | Tab to focus, Enter/Space to activate |
| RTL Compatibility | Layout mirrors for RTL languages |
| Color Independence | Information not conveyed by color alone |

### VoiceOver Rules

| Rule | Example |
|------|---------|
| Label describes action | "Confirm payment" not "Primary button" |
| State announced | "Disabled", "Loading" |
| Role announced | "Button", "Link", "Toggle" |
| Value announced | "Selected", "Not selected" |

### Touch Target Rules

| Size | Minimum |
|------|---------|
| Small button | 32×32pt (with 8pt padding = 48×48pt hit area) |
| Medium button | 44×44pt |
| Large button | 56×56pt |
| Icon button | 44×44pt minimum |

---

## 11. Apple Review

Review every component. Ask:

| Question | If YES |
|----------|--------|
| Would Apple simplify this? | Simplify |
| Would Apple merge this? | Merge with existing |
| Would Apple remove this? | Remove |
| Would Apple expose this? | Document as public API |
| Would Apple document this? | Add to documentation |

### Apple Patterns to Follow

| Pattern | Implementation |
|---------|----------------|
| Button styles | Primary, Secondary, Tertiary, Destructive |
| Navigation | Tab bar, Navigation bar, Sidebar |
| Lists | Inset grouped, Plain |
| Cards | No native card — use system backgrounds |
| Modals | Sheets, Alerts, Full-screen covers |
| Forms | Text fields, Pickers, Toggles |

---

## 12. Engineering

Every component must document:

| Documentation | Content |
|---------------|---------|
| Token Usage | Which tokens the component consumes |
| Properties | Complete property list with types |
| States | All supported states |
| Platform Mapping | How it renders on each platform |
| SwiftUI Mapping | SwiftUI implementation |
| React Mapping | React/React Native implementation |
| Jetpack Compose Mapping | Compose implementation |
| QA Notes | Testing requirements |

### Platform Mapping Template

| Property | iOS (SwiftUI) | Web (React) | Android (Compose) |
|----------|---------------|-------------|-------------------|
| Background | `.fill(.actionPrimary)` | `backgroundColor` | `containerColor` |
| Text | `.foregroundColor(.textInverse)` | `color` | `contentColor` |
| Radius | `.cornerRadius(8)` | `borderRadius` | `shape` |
| Padding | `.padding(.horizontal, 16)` | `padding` | `Modifier` |

---

## 13. Design Review

Every component should answer:

| Question | If NO |
|----------|-------|
| Does it solve one problem? | Refactor to single responsibility |
| Can it be simplified? | Remove unnecessary complexity |
| Can another component replace it? | Use existing component |
| Does it reduce cognitive load? | Simplify or remove |
| Will it still be useful in 5 years? | Do not add to system |

### Design Review Checklist

- [ ] Solves one clear problem
- [ ] Cannot be replaced by existing component
- [ ] Adds value to at least 3 production screens
- [ ] Reduces designer decisions
- [ ] Reduces engineering complexity
- [ ] Increases consistency
- [ ] Increases accessibility
- [ ] Increases scalability
- [ ] Increases maintainability
- [ ] Feels native on iOS

---

## 14. Final Validation

No component should enter the Design System until it satisfies every rule defined in this Production Component Standard.

### Quality Gates

| Gate | Owner | Criteria |
|------|-------|----------|
| Design Review | Design Lead | Solves problem, reduces complexity |
| Accessibility Review | A11y Lead | WCAG AA, VoiceOver, Dynamic Type |
| Engineering Review | Engineering Lead | Token usage, platform mapping |
| Performance Review | Performance Lead | No layout shifts, fast rendering |
| Documentation Review | Documentation Lead | Complete documentation |
| Product Review | Product Lead | Adds user value |
| Founder Review | Founder | Only for major components |

---

## 15. Component Checklist

Use this checklist for every new component.

### Pre-Creation

- [ ] Reuse rule verified (5 questions answered YES)
- [ ] Apple HIG reviewed
- [ ] Existing components cannot solve this
- [ ] Appears in 3+ production screens

### Design

- [ ] Auto Layout implemented
- [ ] Semantic tokens used (no hardcoded values)
- [ ] Semantic typography roles used
- [ ] Variants justified (behavior/hierarchy/accessibility)
- [ ] States defined (only applicable states)
- [ ] Sizes defined (small, medium, large only)

### Accessibility

- [ ] 44×44pt minimum touch target
- [ ] VoiceOver label describes function
- [ ] Dynamic Type supported
- [ ] Reduced Motion supported
- [ ] High Contrast supported
- [ ] Keyboard Navigation supported (web)
- [ ] RTL compatible
- [ ] Color independence verified

### Engineering

- [ ] Token usage documented
- [ ] Properties documented
- [ ] States documented
- [ ] Platform mapping documented
- [ ] SwiftUI mapping documented
- [ ] React mapping documented
- [ ] Jetpack Compose mapping documented
- [ ] QA notes documented

### Review

- [ ] Design review passed
- [ ] Accessibility review passed
- [ ] Engineering review passed
- [ ] Performance review passed
- [ ] Documentation review passed
- [ ] Product review passed
- [ ] Founder review passed (major only)

### Final

- [ ] Apple review completed
- [ ] All questions answered
- [ ] Ready for production

---

## Appendix: Component Quality Score

Rate each component on a scale of 1-5 for each criterion.

| Criterion | Weight | Score (1-5) |
|-----------|--------|-------------|
| Solves clear problem | 20% | |
| Reduces complexity | 15% | |
| Increases consistency | 15% | |
| Accessibility | 20% | |
| Engineering quality | 15% | |
| Apple HIG alignment | 15% | |
| **Total** | **100%** | **/5** |

**Minimum score for production: 4.0/5**

---

**End of Production Component Standard**

*This document is the quality gate for all existing and future Advizmo components.*
