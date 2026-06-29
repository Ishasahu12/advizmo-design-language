# Advizmo Dark Mode & Theming System

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1**

---

## Table of Contents

1. [Overview](#overview)
2. [Theming Philosophy](#theming-philosophy)
3. [01 Theme Architecture](#01-theme-architecture)
4. [02 Light Mode](#02-light-mode)
5. [03 Dark Mode](#03-dark-mode)
6. [04 Color Mapping](#04-color-mapping)
7. [05 Surface System](#05-surface-system)
8. [06 Elevation in Dark Mode](#06-elevation-in-dark-mode)
9. [07 Typography in Dark Mode](#07-typography-in-dark-mode)
10. [08 Icons in Dark Mode](#08-icons-in-dark-mode)
11. [09 Shadows in Dark Mode](#09-shadows-in-dark-mode)
12. [10 Borders in Dark Mode](#10-borders-in-dark-mode)
13. [11 Charts in Dark Mode](#11-charts-in-dark-mode)
14. [12 Images in Dark Mode](#12-images-in-dark-mode)
15. [13 Theme Switching](#13-theme-switching)
16. [14 System Theme Detection](#14-system-theme-detection)
17. [15 Per-Screen Theming](#15-per-screen-theming)
18. [16 High Contrast Mode](#16-high-contrast-mode)
19. [17 Reduced Motion](#17-reduced-motion)
20. [18 Accessibility](#18-accessibility)
21. [Figma Variables Setup](#figma-variables-setup)
22. [Validation Checklist](#validation-checklist)

---

## Overview

The Theming System enables Advizmo to adapt to user preferences and system settings while maintaining visual consistency.

### Core Principles

1. **System First**: Follow system theme by default
2. **User Override**: Allow manual theme selection
3. **Consistent Experience**: Same functionality across themes
4. **Accessibility**: Support high contrast and reduced motion
5. **Performance**: Theme switching should be instant

### Theme Types

| Theme | Use Case | Default |
|-------|----------|---------|
| Light | Daytime, bright environments | ✅ |
| Dark | Nighttime, low light | |
| System | Follows OS setting | ✅ |
| High Contrast | Accessibility | |

---

## Theming Philosophy

### Color Adaptation

- Colors are not simply inverted
- Each theme has its own optimized palette
- Contrast ratios maintained across themes
- Semantic meanings preserved

### Surface Hierarchy

```
Light Mode:
Background (gray-50) → Surface (white) → Elevated (white + shadow)

Dark Mode:
Background (gray-950) → Surface (gray-900) → Elevated (gray-800)
```

### Elevation System

| Level | Light Mode | Dark Mode |
|-------|------------|-----------|
| 0 (Background) | gray-50 | gray-950 |
| 1 (Surface) | white | gray-900 |
| 2 (Elevated) | white + shadow | gray-800 |
| 3 (Floating) | white + shadow | gray-700 |
| 4 (Modal) | white + shadow | gray-600 |

---

## 01 Theme Architecture

### Theme Structure

```typescript
interface Theme {
  id: string;
  name: string;
  colors: {
    brand: BrandColors;
    semantic: SemanticColors;
    surface: SurfaceColors;
    text: TextColors;
    border: BorderColors;
    icon: IconColors;
    chart: ChartColors;
  };
  typography: TypographyTheme;
  spacing: SpacingTheme;
  radius: RadiusTheme;
  elevation: ElevationTheme;
  shadows: ShadowTheme;
}
```

### Theme Variables

| Variable | Light Value | Dark Value |
|----------|-------------|------------|
| `theme.id` | `light` | `dark` |
| `theme.name` | `Light` | `Dark` |
| `theme.background` | `#F9FAFB` | `#0F172A` |
| `theme.surface` | `#FFFFFF` | `#1E293B` |
| `theme.text.primary` | `#111827` | `#F8FAFC` |
| `theme.border` | `#E5E7EB` | `#334155` |

---

## 02 Light Mode

### Light Mode Palette

#### Backgrounds

| Token | Value | Use Case |
|-------|-------|----------|
| `background-primary` | #F9FAFB | Screen background |
| `background-secondary` | #F3F4F6 | Section background |
| `background-tertiary` | #E5E7EB | Subsection background |

#### Surfaces

| Token | Value | Use Case |
|-------|-------|----------|
| `surface-primary` | #FFFFFF | Cards, modals |
| `surface-secondary` | #F9FAFB | Secondary surfaces |
| `surface-tertiary` | #F3F4F6 | Tertiary surfaces |

#### Text

| Token | Value | Use Case |
|-------|-------|----------|
| `text-primary` | #111827 | Headings, primary content |
| `text-secondary` | #4B5563 | Body text |
| `text-tertiary` | #6B7280 | Captions, labels |
| `text-disabled` | #9CA3AF | Disabled text |

#### Borders

| Token | Value | Use Case |
|-------|-------|----------|
| `border-primary` | #E5E7EB | Standard borders |
| `border-secondary` | #D1D5DB | Secondary borders |
| `border-focus` | #3B82F6 | Focus rings |

---

## 03 Dark Mode

### Dark Mode Palette

#### Backgrounds

| Token | Value | Use Case |
|-------|-------|----------|
| `background-primary` | #0F172A | Screen background |
| `background-secondary` | #1E293B | Section background |
| `background-tertiary` | #334155 | Subsection background |

#### Surfaces

| Token | Value | Use Case |
|-------|-------|----------|
| `surface-primary` | #1E293B | Cards, modals |
| `surface-secondary` | #0F172A | Secondary surfaces |
| `surface-tertiary` | #334155 | Tertiary surfaces |

#### Text

| Token | Value | Use Case |
|-------|-------|----------|
| `text-primary` | #F8FAFC | Headings, primary content |
| `text-secondary` | #94A3B8 | Body text |
| `text-tertiary` | #64748B | Captions, labels |
| `text-disabled` | #475569 | Disabled text |

#### Borders

| Token | Value | Use Case |
|-------|-------|----------|
| `border-primary` | #334155 | Standard borders |
| `border-secondary` | #475569 | Secondary borders |
| `border-focus` | #60A5FA | Focus rings |

---

## 04 Color Mapping

### Semantic Color Mapping

| Semantic | Light Mode | Dark Mode |
|----------|------------|-----------|
| `brand-primary` | #3B82F6 | #60A5FA |
| `brand-hover` | #2563EB | #93C5FD |
| `brand-active` | #1D4ED8 | #BFDBFE |
| `success` | #10B981 | #34D399 |
| `warning` | #F59E0B | #FBBF24 |
| `error` | #EF4444 | #F87171 |
| `info` | #3B82F6 | #60A5FA |

### Chart Color Mapping

| Chart | Light Mode | Dark Mode |
|-------|------------|-----------|
| `chart-1` | #3B82F6 | #60A5FA |
| `chart-2` | #10B981 | #34D399 |
| `chart-3` | #F59E0B | #FBBF24 |
| `chart-4` | #EF4444 | #F87171 |
| `chart-5` | #8B5CF6 | #A78BFA |
| `chart-6` | #06B6D4 | #22D3EE |

### State Color Mapping

| State | Light Mode | Dark Mode |
|-------|------------|-----------|
| `hover` | #F3F4F6 | #334155 |
| `active` | #E5E7EB | #475569 |
| `selected` | #EFF6FF | #1E3A5F |
| `disabled` | #F9FAFB | #1E293B |

---

## 05 Surface System

### Surface Hierarchy

```
Level 0: Background
    ↓
Level 1: Surface
    ↓
Level 2: Elevated
    ↓
Level 3: Floating
    ↓
Level 4: Modal
```

### Surface Tokens

| Level | Light Mode | Dark Mode |
|-------|------------|-----------|
| `surface-0` | #F9FAFB | #0F172A |
| `surface-1` | #FFFFFF | #1E293B |
| `surface-2` | #FFFFFF | #334155 |
| `surface-3` | #FFFFFF | #475569 |
| `surface-4` | #FFFFFF | #64748B |

### Surface Usage

| Component | Light Level | Dark Level |
|-----------|-------------|------------|
| Screen Background | 0 | 0 |
| Card | 1 | 1 |
| Modal | 4 | 2 |
| Bottom Sheet | 4 | 2 |
| Dropdown | 4 | 2 |
| Tooltip | 4 | 2 |

---

## 06 Elevation in Dark Mode

### Elevation Strategy

In Dark Mode, elevation is conveyed through **surface color** rather than **shadows**.

| Level | Light Mode | Dark Mode |
|-------|------------|-----------|
| 0 | No shadow | No shadow |
| 1 | Small shadow | Slightly lighter surface |
| 2 | Medium shadow | Even lighter surface |
| 3 | Large shadow | Lighter surface |
| 4 | Extra large shadow | Lightest surface |

### Elevation Tokens

| Token | Light Value | Dark Value |
|-------|-------------|------------|
| `elevation-0` | none | none |
| `elevation-1` | shadow-sm | surface-2 |
| `elevation-2` | shadow-md | surface-3 |
| `elevation-3` | shadow-lg | surface-4 |
| `elevation-4` | shadow-xl | surface-5 |

### Component Elevation

| Component | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Card | elevation-1 | surface-2 |
| Modal | elevation-4 | surface-2 (with overlay) |
| Bottom Sheet | elevation-4 | surface-2 (with overlay) |
| Dropdown | elevation-4 | surface-3 |
| Tooltip | elevation-4 | surface-3 |
| Snackbar | elevation-3 | surface-3 |
| Toast | elevation-2 | surface-2 |

---

## 07 Typography in Dark Mode

### Text Color Adaptation

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `text-primary` | #111827 | #F8FAFC |
| `text-secondary` | #4B5563 | #94A3B8 |
| `text-tertiary` | #6B7280 | #64748B |
| `text-disabled` | #9CA3AF | #475569 |
| `text-inverse` | #FFFFFF | #111827 |
| `text-brand` | #3B82F6 | #60A5FA |
| `text-success` | #10B981 | #34D399 |
| `text-warning` | #F59E0B | #FBBF24 |
| `text-error` | #EF4444 | #F87171 |

### Font Weight Adjustments

No changes required. Font weights remain consistent across themes.

### Line Height Adjustments

No changes required. Line heights remain consistent across themes.

---

## 08 Icons in Dark Mode

### Icon Color Mapping

| Icon Type | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Primary | #111827 | #F8FAFC |
| Secondary | #4B5563 | #94A3B8 |
| Tertiary | #6B7280 | #64748B |
| Brand | #3B82F6 | #60A5FA |
| Success | #10B981 | #34D399 |
| Warning | #F59E0B | #FBBF24 |
| Error | #EF4444 | #F87171 |

### Icon Adjustments

- Icons use higher contrast in Dark Mode
- Filled icons preferred over outlined
- Minimum 4.5:1 contrast ratio maintained

---

## 09 Shadows in Dark Mode

### Shadow Strategy

Shadows are **reduced** in Dark Mode because surface color differences convey elevation.

| Level | Light Mode | Dark Mode |
|-------|------------|-----------|
| Shadow SM | 0 1px 2px rgba(0,0,0,0.05) | None |
| Shadow MD | 0 4px 6px rgba(0,0,0,0.1) | None |
| Shadow LG | 0 10px 15px rgba(0,0,0,0.1) | Subtle glow |
| Shadow XL | 0 20px 25px rgba(0,0,0,0.1) | Subtle glow |

### Dark Mode Shadows

```css
/* Dark mode uses subtle glow instead of shadows */
.shadow-dark-sm {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.shadow-dark-md {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.shadow-dark-lg {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
}
```

---

## 10 Borders in Dark Mode

### Border Color Mapping

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `border-primary` | #E5E7EB | #334155 |
| `border-secondary` | #D1D5DB | #475569 |
| `border-focus` | #3B82F6 | #60A5FA |
| `border-error` | #EF4444 | #F87171 |
| `border-success` | #10B981 | #34D399 |

### Border Adjustments

- Borders are **lighter** in Dark Mode
- Focus rings use **brighter** brand color
- Error borders maintain **red** for visibility

---

## 11 Charts in Dark Mode

### Chart Color Adaptation

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Line | brand-primary | brand-primary (brighter) |
| Area Fill | brand-primary (10% opacity) | brand-primary (20% opacity) |
| Grid Lines | border-primary | border-secondary |
| Axis Labels | text-tertiary | text-tertiary |
| Tooltip Background | surface-primary | surface-2 |
| Tooltip Text | text-primary | text-primary |

### Chart Accessibility

- Maintain 3:1 contrast ratio for chart elements
- Use patterns/textures for color-blind users
- Provide alternative text descriptions
- Ensure interactive elements have focus states

---

## 12 Images in Dark Mode

### Image Treatment

| Image Type | Light Mode | Dark Mode |
|------------|------------|-----------|
| Photos | Normal | Slightly desaturated |
| Illustrations | Normal | Adjusted colors |
| Icons | Normal | Brighter |
| Logos | Normal | May need dark variant |

### Image Adjustments

```css
/* Dark mode image adjustments */
@media (prefers-color-scheme: dark) {
  img {
    filter: brightness(0.9) saturate(0.9);
  }
  
  .logo {
    filter: brightness(1.1);
  }
}
```

---

## 13 Theme Switching

### Theme Selection UI

```
┌─────────────────────────────────────────────────┐
│ Appearance                                      │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ ○ System Default                            │ │
│ ├─────────────────────────────────────────────┤ │
│ │ ○ Light                                     │ │
│ ├─────────────────────────────────────────────┤ │
│ │ ○ Dark                                      │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Implementation

```typescript
// Theme switching
const setTheme = (theme: 'light' | 'dark' | 'system') => {
  if (theme === 'system') {
    localStorage.removeItem('theme');
    applySystemTheme();
  } else {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  }
};
```

### Animation

- Theme switching animated with **200ms fade**
- No layout shift during transition
- Colors transition smoothly

---

## 14 System Theme Detection

### System Theme Listener

```typescript
// Listen for system theme changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});
```

### Default Behavior

- App follows system theme by default
- User can override to specific theme
- Override persists across sessions
- System theme changes respected unless overridden

---

## 15 Per-Screen Theming

### Screen-Specific Overrides

Some screens may require theme adjustments:

| Screen | Override | Reason |
|--------|----------|--------|
| Dashboard | None | Standard theme |
| Charts | Enhanced colors | Better data visualization |
| Camera | Dark overlay | Better visibility |
| Media | Dark background | Better focus |

### Implementation

```typescript
// Per-screen theme override
<Screen theme="chart">
  {/* Chart-specific theme applied */}
</Screen>
```

---

## 16 High Contrast Mode

### High Contrast Tokens

| Token | Normal | High Contrast |
|-------|--------|---------------|
| `text-primary` | #111827 | #000000 |
| `text-secondary` | #4B5563 | #1F2937 |
| `border-primary` | #E5E7EB | #9CA3AF |
| `brand-primary` | #3B82F6 | #2563EB |

### High Contrast Rules

- Increase contrast ratios to 7:1
- Thicker borders (2px minimum)
- Brighter focus rings
- Remove subtle visual effects

---

## 17 Reduced Motion

### Reduced Motion Tokens

| Animation | Normal | Reduced |
|-----------|--------|---------|
| Duration | 200ms | 0ms |
| Easing | ease-in-out | ease |
| Transitions | All | None |
| Animations | All | None |

### Implementation

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 18 Accessibility

### Accessibility Requirements

| Requirement | Light Mode | Dark Mode |
|-------------|------------|-----------|
| Text Contrast | 4.5:1 | 4.5:1 |
| Large Text Contrast | 3:1 | 3:1 |
| UI Component Contrast | 3:1 | 3:1 |
| Focus Ring Visibility | 3:1 | 3:1 |

### Testing Checklist

- [ ] All text meets contrast requirements
- [ ] All interactive elements meet contrast requirements
- [ ] Focus rings visible in both themes
- [ ] Icons visible in both themes
- [ ] Charts accessible in both themes
- [ ] Images readable in both themes

---

## Figma Variables Setup

### Collection Structure

```
Primitives
├── Colors
│   ├── Blue (11 shades)
│   ├── Green (11 shades)
│   ├── Gray (11 shades)
│   ├── Red (11 shades)
│   └── ...
├── Typography
├── Spacing
└── Radius

Semantic
├── Light
│   ├── Background
│   ├── Surface
│   ├── Text
│   ├── Border
│   └── ...
└── Dark
    ├── Background
    ├── Surface
    ├── Text
    ├── Border
    └── ...

Component
├── Button
├── Card
├── Input
└── ...
```

### Variable Modes

| Mode | Use Case |
|------|----------|
| Light | Default light theme |
| Dark | Dark theme |

### Applying Variables

1. Create variables in Primitives collection
2. Create semantic tokens referencing primitives
3. Create component tokens referencing semantics
4. Apply component tokens to components
5. Switch mode to change theme

---

## Validation Checklist

### Theme System

- [ ] All components support Light & Dark mode
- [ ] All components use semantic tokens
- [ ] All components have proper contrast ratios
- [ ] All components switch themes smoothly
- [ ] All components maintain functionality across themes

### Color System

- [ ] All colors have Light & Dark variants
- [ ] All colors maintain semantic meaning
- [ ] All colors meet contrast requirements
- [ ] All colors are accessible
- [ ] All colors are documented

### Typography

- [ ] All text is readable in both themes
- [ ] All text meets contrast requirements
- [ ] All text maintains hierarchy
- [ ] All text is accessible
- [ ] All text is documented

### Icons

- [ ] All icons visible in both themes
- [ ] All icons meet contrast requirements
- [ ] All icons maintain meaning
- [ ] All icons are accessible
- [ ] All icons are documented

### Charts

- [ ] All charts readable in both themes
- [ ] All charts meet contrast requirements
- [ ] All charts maintain data accuracy
- [ ] All charts are accessible
- [ ] All charts are documented

### Accessibility

- [ ] High contrast mode supported
- [ ] Reduced motion supported
- [ ] Screen readers work in both themes
- [ ] Keyboard navigation works in both themes
- [ ] Focus management works in both themes

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
