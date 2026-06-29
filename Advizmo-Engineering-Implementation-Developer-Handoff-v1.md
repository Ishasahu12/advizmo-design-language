# Advizmo Engineering Implementation & Developer Handoff

The official engineering implementation guide for the Advizmo Design Language. This document is the contract between Design and Engineering — every token, component, interaction, and pattern can be implemented consistently across all platforms without ambiguity.

---

## Table of Contents

1. [Engineering Philosophy](#1-engineering-philosophy)
2. [Token Implementation](#2-token-implementation)
3. [Component API Standards](#3-component-api-standards)
4. [Platform Mapping](#4-platform-mapping)
5. [State Management](#5-state-management)
6. [Design Token Export](#6-design-token-export)
7. [Asset Management](#7-asset-management)
8. [Responsive Behaviour](#8-responsive-behaviour)
9. [Accessibility Implementation](#9-accessibility-implementation)
10. [Motion Implementation](#10-motion-implementation)
11. [Charts Implementation](#11-charts-implementation)
12. [Testing Strategy](#12-testing-strategy)
13. [QA Process](#13-qa-process)
14. [Handoff Workflow](#14-handoff-workflow)
15. [Versioning](#15-versioning)
16. [Documentation](#16-documentation)
17. [Release Process](#17-release-process)
18. [Migration Strategy](#18-migration-strategy)

---

## 1. Engineering Philosophy

### Core Principles

#### One Source of Truth
- Design drives implementation
- Figma is the canonical source
- Engineering implements what design specifies
- No side-by-side "design vs code" drift

#### Token Driven Development
- No hardcoded values in any component
- Every color, spacing, radius, shadow, animation uses a token
- Token updates propagate automatically
- Design changes = token updates = code updates

#### Composition
- Build complex components from simpler ones
- A Bill Card = Card + Avatar + Typography + Badge
- Never duplicate logic
- Reuse tokens, never values

#### No Duplicate Logic
- One component = one implementation
- Variants handle differences, not copies
- State logic lives in one place
- Platform code diverges only when necessary

#### No Hardcoded Styling
- Every visual property references a token
- Inline styles only for dynamic values
- Static styles always use tokens
- Theme switching uses token references

#### Cross Platform Consistency
- Same tokens, same component behavior
- Platform-native implementations
- Same user experience across all platforms
- No platform-specific visual drift

#### Predictable APIs
- Consistent naming conventions
- Same property names across platforms
- Same component structure
- Same event/callback patterns

#### Engineering Scalability
- Components must scale to hundreds of instances
- Token system must support new products
- Architecture must support new platforms
- Documentation must be self-service

---

## 2. Token Implementation

### Token Categories

| Category | Examples | Count |
|----------|----------|-------|
| Colors | brand, semantic, surface, text, border | 300+ |
| Typography | family, size, weight, line-height, letter-spacing | 60+ |
| Spacing | 4pt grid values | 20+ |
| Radius | none, small, medium, full | 6 |
| Elevation | none, card, raised, elevated, modal | 6 |
| Borders | width, style, color | 20+ |
| Opacity | disabled, hover, pressed | 10+ |
| Motion | duration, easing, spring | 15+ |
| Blur | none, light, medium, heavy | 5 |
| Charts | palette, grid, axis, tooltip | 30+ |
| Financial | gain, loss, neutral, positive, negative | 20+ |
| AI | thinking, suggestion, completed | 10+ |

### Token Implementation Table

#### Colors — Primitive

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `color/blue/50` | `color/blue/50` | `Color.blue50` | `--color-blue-50` | `bg-blue-50` | `colors.blue[50]` | `#EFF6FF` |
| `color/blue/100` | `color/blue/100` | `Color.blue100` | `--color-blue-100` | `bg-blue-100` | `colors.blue[100]` | `#DBEAFE` |
| `color/blue/200` | `color/blue/200` | `Color.blue200` | `--color-blue-200` | `bg-blue-200` | `colors.blue[200]` | `#BFDBFE` |
| `color/blue/300` | `color/blue/300` | `Color.blue300` | `--color-blue-300` | `bg-blue-300` | `colors.blue[300]` | `#93C5FD` |
| `color/blue/400` | `color/blue/400` | `Color.blue400` | `--color-blue-400` | `bg-blue-400` | `colors.blue[400]` | `#60A5FA` |
| `color/blue/500` | `color/blue/500` | `Color.blue500` | `--color-blue-500` | `bg-blue-500` | `colors.blue[500]` | `#3B82F6` |
| `color/blue/600` | `color/blue/600` | `Color.blue600` | `--color-blue-600` | `bg-blue-600` | `colors.blue[600]` | `#2563EB` |
| `color/blue/700` | `color/blue/700` | `Color.blue700` | `--color-blue-700` | `bg-blue-700` | `colors.blue[700]` | `#1D4ED8` |
| `color/blue/800` | `color/blue/800` | `Color.blue800` | `--color-blue-800` | `bg-blue-800` | `colors.blue[800]` | `#1E40AF` |
| `color/blue/900` | `color/blue/900` | `Color.blue900` | `--color-blue-900` | `bg-blue-900` | `colors.blue[900]` | `#1E3A8A` |
| `color/blue/950` | `color/blue/950` | `Color.blue950` | `--color-blue-950` | `bg-blue-950` | `colors.blue[950]` | `#172554` |

#### Colors — Semantic

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `text/primary` | `text/primary` | `Color.textPrimary` | `--text-primary` | `text-gray-900` | `theme.text.primary` | `#111827` |
| `text/secondary` | `text/secondary` | `Color.textSecondary` | `--text-secondary` | `text-gray-500` | `theme.text.secondary` | `#4B5563` |
| `text/tertiary` | `text/tertiary` | `Color.textTertiary` | `--text-tertiary` | `text-gray-400` | `theme.text.tertiary` | `#6B7280` |
| `text/disabled` | `text/disabled` | `Color.textDisabled` | `--text-disabled` | `text-gray-300` | `theme.text.disabled` | `#9CA3AF` |
| `text/link` | `text/link` | `Color.textLink` | `--text-link` | `text-blue-600` | `theme.text.link` | `#2563EB` |
| `text/positive` | `text/positive` | `Color.textPositive` | `--text-positive` | `text-green-600` | `theme.text.positive` | `#059669` |
| `text/negative` | `text/negative` | `Color.textNegative` | `--text-negative` | `text-red-600` | `theme.text.negative` | `#DC2626` |
| `surface/primary` | `surface/primary` | `Color.surfacePrimary` | `--surface-primary` | `bg-white` | `theme.surface.primary` | `#FFFFFF` |
| `surface/secondary` | `surface/secondary` | `Color.surfaceSecondary` | `--surface-secondary` | `bg-gray-50` | `theme.surface.secondary` | `#F9FAFB` |
| `surface/card` | `surface/card` | `Color.surfaceCard` | `--surface-card` | `bg-white` | `theme.surface.card` | `#FFFFFF` |
| `border/default` | `border/default` | `Color.borderDefault` | `--border-default` | `border-gray-200` | `theme.border.default` | `#E5E7EB` |
| `border/focus` | `border/focus` | `Color.borderFocus` | `--border-focus` | `border-blue-500` | `theme.border.focus` | `#3B82F6` |

#### Typography

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `font/family` | `font/family` | `.fontFamily(.inter)` | `--font-family` | `font-sans` | `fontFamily` | `fontFamily: 'Inter'` |
| `font/size/display` | `font/size/display` | `.fontSize(32)` | `--font-size-display` | `text-4xl` | `fontSize: 32` | `fontSize: 32` |
| `font/size/h1` | `font/size/h1` | `.fontSize(28)` | `--font-size-h1` | `text-3xl` | `fontSize: 28` | `fontSize: 28` |
| `font/size/h2` | `font/size/h2` | `.fontSize(24)` | `--font-size-h2` | `text-2xl` | `fontSize: 24` | `fontSize: 24` |
| `font/size/h3` | `font/size/h3` | `.fontSize(20)` | `--font-size-h3` | `text-xl` | `fontSize: 20` | `fontSize: 20` |
| `font/size/h4` | `font/size/h4` | `.fontSize(18)` | `--font-size-h4` | `text-lg` | `fontSize: 18` | `fontSize: 18` |
| `font/size/body-lg` | `font/size/body-lg` | `.fontSize(16)` | `--font-size-body-lg` | `text-base` | `fontSize: 16` | `fontSize: 16` |
| `font/size/body` | `font/size/body` | `.fontSize(14)` | `--font-size-body` | `text-sm` | `fontSize: 14` | `fontSize: 14` |
| `font/size/caption` | `font/size/caption` | `.fontSize(12)` | `--font-size-caption` | `text-xs` | `fontSize: 12` | `fontSize: 12` |
| `font/weight/regular` | `font/weight/regular` | `.fontWeight(.regular)` | `--font-weight-regular` | `font-normal` | `fontWeight: 400` | `fontWeight: '400'` |
| `font/weight/medium` | `font/weight/medium` | `.fontWeight(.medium)` | `--font-weight-medium` | `font-medium` | `fontWeight: 500` | `fontWeight: '500'` |
| `font/weight/semibold` | `font/weight/semibold` | `.fontWeight(.semibold)` | `--font-weight-semibold` | `font-semibold` | `fontWeight: 600` | `fontWeight: '600'` |
| `font/weight/bold` | `font/weight/bold` | `.fontWeight(.bold)` | `--font-weight-bold` | `font-bold` | `fontWeight: 700` | `fontWeight: '700'` |
| `font/line-height/tight` | `font/line-height/tight` | `.lineSpacing(1.2)` | `--line-height-tight` | `leading-tight` | `lineHeight: 1.2` | `lineHeight: 1.2` |
| `font/line-height/normal` | `font/line-height/normal` | `.lineSpacing(1.5)` | `--line-height-normal` | `leading-normal` | `lineHeight: 1.5` | `lineHeight: 1.5` |
| `font/line-height/relaxed` | `font/line-height/relaxed` | `.lineSpacing(1.65)` | `--line-height-relaxed` | `leading-relaxed` | `lineHeight: 1.65` | `lineHeight: 1.65` |

#### Spacing

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `spacing/1` | `spacing/1` | `.padding(4)` | `--spacing-1` | `p-1` | `spacing[1]` | `4` |
| `spacing/2` | `spacing/2` | `.padding(8)` | `--spacing-2` | `p-2` | `spacing[2]` | `8` |
| `spacing/3` | `spacing/3` | `.padding(12)` | `--spacing-3` | `p-3` | `spacing[3]` | `12` |
| `spacing/4` | `spacing/4` | `.padding(16)` | `--spacing-4` | `p-4` | `spacing[4]` | `16` |
| `spacing/5` | `spacing/5` | `.padding(20)` | `--spacing-5` | `p-5` | `spacing[5]` | `20` |
| `spacing/6` | `spacing/6` | `.padding(24)` | `--spacing-6` | `p-6` | `spacing[6]` | `24` |
| `spacing/8` | `spacing/8` | `.padding(32)` | `--spacing-8` | `p-8` | `spacing[8]` | `32` |
| `spacing/10` | `spacing/10` | `.padding(40)` | `--spacing-10` | `p-10` | `spacing[10]` | `40` |
| `spacing/12` | `spacing/12` | `.padding(48)` | `--spacing-12` | `p-12` | `spacing[12]` | `48` |
| `spacing/16` | `spacing/16` | `.padding(64)` | `--spacing-16` | `p-16` | `spacing[16]` | `64` |

#### Radius

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `radius/none` | `radius/none` | `.cornerRadius(0)` | `--radius-none` | `rounded-none` | `borderRadius: 0` | `borderRadius: 0` |
| `radius/sm` | `radius/sm` | `.cornerRadius(8)` | `--radius-sm` | `rounded-lg` | `borderRadius: 8` | `borderRadius: 8` |
| `radius/md` | `radius/md` | `.cornerRadius(12)` | `--radius-md` | `rounded-xl` | `borderRadius: 12` | `borderRadius: 12` |
| `radius/lg` | `radius/lg` | `.cornerRadius(16)` | `--radius-lg` | `rounded-2xl` | `borderRadius: 16` | `borderRadius: 16` |
| `radius/full` | `radius/full` | `.cornerRadius(9999)` | `--radius-full` | `rounded-full` | `borderRadius: 9999` | `borderRadius: 9999` |

#### Elevation

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `elevation/none` | `elevation/none` | `.shadow(.none)` | `--elevation-none` | `shadow-none` | `boxShadow: 'none'` | `elevation: 0` |
| `elevation/card` | `elevation/card` | `.shadow(color: .black.opacity(0.1), radius: 3, x: 0, y: 1)` | `--elevation-card` | `shadow-sm` | `boxShadow: '0 1px 3px rgba(0,0,0,0.1)'` | `elevation: 2` |
| `elevation/raised` | `elevation/raised` | `.shadow(color: .black.opacity(0.1), radius: 6, x: 0, y: 2)` | `--elevation-raised` | `shadow-md` | `boxShadow: '0 4px 6px rgba(0,0,0,0.1)'` | `elevation: 4` |
| `elevation/elevated` | `elevation/elevated` | `.shadow(color: .black.opacity(0.1), radius: 15, x: 0, y: 4)` | `--elevation-elevated` | `shadow-lg` | `boxShadow: '0 10px 15px rgba(0,0,0,0.1)'` | `elevation: 8` |
| `elevation/modal` | `elevation/modal` | `.shadow(color: .black.opacity(0.1), radius: 25, x: 0, y: 10)` | `--elevation-modal` | `shadow-xl` | `boxShadow: '0 20px 25px rgba(0,0,0,0.1)'` | `elevation: 12` |

#### Motion

| Design Token | Figma Variable | SwiftUI | CSS Variable | Tailwind | React | React Native |
|--------------|----------------|---------|--------------|----------|-------|--------------|
| `duration/immediate` | `duration/immediate` | `.animation(.linear(duration: 0))` | `--duration-immediate` | N/A | `transitionDuration.immediate` | `0` |
| `duration/fast` | `duration/fast` | `.animation(.easeInOut(duration: 0.1))` | `--duration-fast` | N/A | `transitionDuration.fast` | `100` |
| `duration/normal` | `duration/normal` | `.animation(.easeInOut(duration: 0.18))` | `--duration-normal` | N/A | `transitionDuration.normal` | `180` |
| `duration/slow` | `duration/slow` | `.animation(.easeInOut(duration: 0.25))` | `--duration-slow` | N/A | `transitionDuration.slow` | `250` |
| `duration/slower` | `duration/slower` | `.animation(.easeInOut(duration: 0.35))` | `--duration-slower` | N/A | `transitionDuration.slower` | `350` |
| `duration/slowest` | `duration/slowest` | `.animation(.easeInOut(duration: 0.5))` | `--duration-slowest` | N/A | `transitionDuration.slowest` | `500` |
| `easing/standard` | `easing/standard` | `.animation(.easeInOut)` | `--easing-standard` | N/A | `easing.standard` | `Easing.bezier(0.4, 0, 0.2, 1)` |
| `easing/enter` | `easing/enter` | `.animation(.easeIn)` | `--easing-enter` | N/A | `easing.enter` | `Easing.bezier(0, 0, 0.2, 1)` |
| `easing/exit` | `easing/exit` | `.animation(.easeOut)` | `--easing-exit` | N/A | `easing.exit` | `Easing.bezier(0.4, 0, 1, 1)` |
| `easing/emphasized` | `easing/emphasized` | `.animation(.spring)` | `--easing-emphasized` | N/A | `easing.emphasized` | `Easing.bezier(0.4, 0, 0.2, 1)` |

---

## 3. Component API Standards

### Component Documentation Template

Every component must document:

```
Component Name
├── Purpose
├── Platform Availability
├── Props/Inputs
│   ├── Required Props
│   ├── Optional Props
│   ├── Variant Props
│   └── Style Props
├── Events/Callbacks
├── Accessibility
│   ├── VoiceOver/ARIA
│   ├── Keyboard
│   └── Focus
├── States
│   ├── Default
│   ├── Loading
│   ├── Disabled
│   ├── Error
│   ├── Success
│   └── Empty
├── Responsive Behavior
├── Localization
├── Dark Mode
└── Dynamic Type
```

### Button Component API

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state |
| `icon` | `ReactNode` | `null` | Leading icon |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `fullWidth` | `boolean` | `false` | Full width button |
| `onClick` | `() => void` | — | Click handler |
| `accessibilityLabel` | `string` | — | VoiceOver label |
| `accessibilityHint` | `string` | — | VoiceOver hint |

#### States

| State | Visual | Interaction |
|-------|--------|-------------|
| Default | Normal styling | Clickable |
| Hovered | Slightly darker | Cursor pointer |
| Pressed | Even darker | Active feedback |
| Focused | Focus ring visible | Keyboard accessible |
| Disabled | 50% opacity | Not clickable |
| Loading | Spinner icon | Not clickable |

#### Accessibility

```swift
// SwiftUI
Button(action: { }) {
    Text("Pay Bill")
}
.accessibilityLabel("Pay Bill")
.accessibilityHint("Double tap to pay your bill")
.accessibilityAddTraits(.isButton)
```

```jsx
// React
<button
  aria-label="Pay Bill"
  aria-hint="Double tap to pay your bill"
  role="button"
>
  Pay Bill
</button>
```

---

## 4. Platform Mapping

### SwiftUI Implementation

```swift
// Button.swift
struct AdvizmoButton: View {
    let variant: ButtonVariant
    let size: ButtonSize
    let title: String
    let icon: Image?
    let isLoading: Bool
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            HStack(spacing: Theme.spacing[2]) {
                if isLoading {
                    ProgressView()
                        .tint(buttonForegroundColor)
                } else if let icon = icon {
                    icon
                        .resizable()
                        .frame(width: 16, height: 16)
                }
                Text(title)
                    .font(.body)
                    .fontWeight(.semibold)
            }
            .padding(.horizontal, Theme.spacing[4])
            .padding(.vertical, Theme.spacing[3])
            .background(buttonBackgroundColor)
            .foregroundColor(buttonForegroundColor)
            .cornerRadius(Theme.radius.sm)
        }
        .disabled(isLoading)
    }
    
    private var buttonBackgroundColor: Color {
        switch variant {
        case .primary: return Theme.color.blue500
        case .secondary: return Theme.color.surface
        case .ghost: return .clear
        case .danger: return Theme.color.red500
        }
    }
}
```

### React Implementation

```jsx
// Button.jsx
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  accessibilityLabel,
  accessibilityHint,
  children,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-fast';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-surface text-text-primary border border-border hover:bg-subtle',
    ghost: 'bg-transparent text-text-primary hover:bg-subtle',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={accessibilityLabel}
      aria-hint={accessibilityHint}
      role="button"
    >
      {loading && <Spinner className="mr-2" />}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
```

### React Native Implementation

```jsx
// Button.jsx
import { Pressable, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  children,
}) => {
  const containerStyles = [
    styles.base,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
  ];
  
  return (
    <Pressable
      style={({ pressed }) => [
        ...containerStyles,
        pressed && styles.pressed,
      ]}
      disabled={disabled || loading}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="button"
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : '#3B82F6'} />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View style={styles.iconLeft}>{icon}</View>}
          <Text style={[styles.text, styles[`text-${variant}`]]}>{children}</Text>
          {icon && iconPosition === 'right' && <View style={styles.iconRight}>{icon}</View>}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#3B82F6',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: '#EF4444',
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.8,
  },
  fullWidth: {
    width: '100%',
  },
});
```

---

## 5. State Management

### Standard States

| State | Visual | Behavior | Accessibility |
|-------|--------|----------|---------------|
| Default | Normal styling | Interactive | Normal |
| Focused | Focus ring | Keyboard accessible | Focus announcement |
| Pressed | Darker background | Active feedback | None |
| Hovered | Slightly darker | Cursor pointer | None |
| Selected | Highlighted/checked | Toggle state | Selected announcement |
| Disabled | 50% opacity | Not interactive | Disabled announcement |
| Loading | Spinner/skeleton | Not interactive | Loading announcement |
| Success | Green accent | Confirmation | Success announcement |
| Warning | Orange accent | Caution | Warning announcement |
| Error | Red accent | Error state | Error announcement |
| Offline | Gray/dimmed | Limited interaction | Offline announcement |
| Syncing | Subtle animation | Syncing state | Syncing announcement |
| Empty | Illustration/placeholder | No data | Empty state announcement |
| Skeleton | Shimmer placeholder | Loading content | Loading announcement |

### State Implementation

```swift
// SwiftUI
enum ComponentState {
    case `default`
    case focused
    case pressed
    case hovered
    case selected
    case disabled
    case loading
    case success
    case warning
    case error
    case offline
    case syncing
    case empty
    case skeleton
    
    var opacity: Double {
        switch self {
        case .disabled: return 0.5
        default: return 1.0
        }
    }
    
    var borderColor: Color {
        switch self {
        case .focused: return Theme.color.borderFocus
        case .error: return Theme.color.borderError
        case .success: return Theme.color.borderSuccess
        default: return Theme.color.borderDefault
        }
    }
}
```

```jsx
// React
const getStateStyles = (state) => {
  const base = 'transition-all duration-fast';
  
  const states = {
    default: '',
    focused: 'ring-2 ring-blue-500 ring-offset-2',
    pressed: 'scale-95 opacity-90',
    hovered: 'bg-subtle',
    selected: 'bg-blue-50 border-blue-500',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
    success: 'border-green-500 bg-green-50',
    warning: 'border-orange-500 bg-orange-50',
    error: 'border-red-500 bg-red-50',
    offline: 'opacity-70 grayscale',
    syncing: 'animate-pulse',
    empty: 'border-dashed',
    skeleton: 'animate-pulse bg-gray-200',
  };
  
  return `${base} ${states[state]}`;
};
```

---

## 6. Design Token Export

### Export Strategy

| Format | Use Case | Tool |
|--------|----------|------|
| JSON | Source of truth | Figma Tokens |
| Style Dictionary | Build system | AWS Style Dictionary |
| CSS Variables | Web | Custom transform |
| Swift Tokens | iOS/macOS | Custom transform |
| TypeScript Tokens | React/Web | Custom transform |
| React Theme | React Context | Custom transform |
| Android XML | Android (Future) | Style Dictionary |
| Compose Tokens | Jetpack Compose (Future) | Style Dictionary |

### Token Export Pipeline

```
Figma Variables
     ↓
Figma Tokens Plugin (JSON Export)
     ↓
Style Dictionary
     ↓
┌─────────────────────────────────────────┐
│  CSS Variables  │  Swift Tokens  │  TS  │
└─────────────────────────────────────────┘
     ↓
Platform Bundles
     ↓
npm / CocoaPods / Maven
```

### CSS Variable Generation

```css
/* Generated from tokens.json */
:root {
  /* Colors — Primitive */
  --color-blue-50: #EFF6FF;
  --color-blue-100: #DBEAFE;
  --color-blue-200: #BFDBFE;
  --color-blue-300: #93C5FD;
  --color-blue-400: #60A5FA;
  --color-blue-500: #3B82F6;
  --color-blue-600: #2563EB;
  --color-blue-700: #1D4ED8;
  --color-blue-800: #1E40AF;
  --color-blue-900: #1E3A8A;
  --color-blue-950: #172554;
  
  /* Colors — Semantic */
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-tertiary: #6B7280;
  --text-disabled: #9CA3AF;
  --text-link: #2563EB;
  --text-positive: #059669;
  --text-negative: #DC2626;
  
  --surface-primary: #FFFFFF;
  --surface-secondary: #F9FAFB;
  --surface-card: #FFFFFF;
  
  --border-default: #E5E7EB;
  --border-focus: #3B82F6;
  --border-error: #EF4444;
  --border-success: #10B981;
  
  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-size-display: 32px;
  --font-size-h1: 28px;
  --font-size-h2: 24px;
  --font-size-h3: 20px;
  --font-size-h4: 18px;
  --font-size-body-lg: 16px;
  --font-size-body: 14px;
  --font-size-caption: 12px;
  
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.65;
  
  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  
  /* Radius */
  --radius-none: 0px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Elevation */
  --elevation-none: none;
  --elevation-card: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);
  --elevation-raised: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
  --elevation-elevated: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  --elevation-modal: 0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04);
  
  /* Motion */
  --duration-immediate: 0ms;
  --duration-fast: 100ms;
  --duration-normal: 180ms;
  --duration-slow: 250ms;
  --duration-slower: 350ms;
  --duration-slowest: 500ms;
  
  --easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-enter: cubic-bezier(0, 0, 0.2, 1);
  --easing-exit: cubic-bezier(0.4, 0, 1, 1);
  --easing-emphasized: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Dark Mode */
[data-theme="dark"] {
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-tertiary: #64748B;
  --text-disabled: #475569;
  --text-link: #60A5FA;
  --text-positive: #34D399;
  --text-negative: #F87171;
  
  --surface-primary: #0F172A;
  --surface-secondary: #1E293B;
  --surface-card: #1E293B;
  
  --border-default: #334155;
  --border-focus: #3B82F6;
  --border-error: #EF4444;
  --border-success: #10B981;
}
```

---

## 7. Asset Management

### Asset Types

| Type | Format | Optimization | Versioning |
|------|--------|--------------|------------|
| Icons | SVG | SVGO, 24x24 grid | Semver |
| Illustrations | SVG/PNG | Compress, @1x/@2x/@3x | Semver |
| Logos | SVG/PNG | Compress, transparent | Semver |
| Flags | SVG/PNG | Country codes | Semver |
| Institution Logos | SVG/PNG | Lazy load, cache | Semver |
| Profile Images | JPEG/PNG | Compress, resize | N/A |
| Lottie Files | JSON | Minify | Semver |
| PDF | PDF | Compress | Semver |

### Asset Naming Convention

```
icon-{name}-{size}.{format}
illustration-{name}-{variant}.{format}
logo-{name}-{variant}.{format}
flag-{country-code}.{format}
logo-{institution}-{variant}.{format}
lottie-{name}-{variant}.json
```

Examples:
```
icon-home-24.svg
icon-arrow-left-24.svg
illustration-empty-state-accounts.svg
logo-advizmo-primary.svg
flag-us.svg
logo-chase-primary.svg
lottie-success-check.json
```

### Asset Pipeline

```
Source Assets (Figma)
     ↓
Export (SVG/PNG)
     ↓
Optimization (SVGO/Sharp)
     ↓
Platform Bundles
     ↓
┌─────────────────────────────────────────┐
│  Web (SVG)  │  iOS (PDF/PNG)  │  RN     │
└─────────────────────────────────────────┘
     ↓
CDN / Package
```

---

## 8. Responsive Behaviour

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| `xs` | 0–374px | Small phones |
| `sm` | 375–767px | Standard phones |
| `md` | 768–1023px | Tablets portrait |
| `lg` | 1024–1439px | Tablets landscape |
| `xl` | 1440–1919px | Desktops |
| `2xl` | 1920px+ | Large desktops |

### Responsive Implementation

```css
/* CSS */
.container {
  padding: var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-8);
  }
}
```

```jsx
// React with Tailwind
<div className="p-4 md:p-6 lg:p-8">
  Content
</div>
```

```swift
// SwiftUI
struct ResponsiveContainer: View {
    @Environment(\.horizontalSizeClass) var sizeClass
    
    var body: some View {
        VStack {
            content
        }
        .padding(sizeClass == .compact ? 16 : 24)
    }
}
```

### Navigation Patterns

| Breakpoint | Primary Nav | Secondary Nav |
|------------|-------------|---------------|
| Mobile | Bottom tabs | Hamburger menu |
| Tablet | Icon sidebar | Expandable sections |
| Desktop | Full sidebar | Always visible |

---

## 9. Accessibility Implementation

### VoiceOver/ARIA Mapping

| Property | SwiftUI | ARIA | React Native |
|----------|---------|------|--------------|
| Label | `.accessibilityLabel()` | `aria-label` | `accessibilityLabel` |
| Hint | `.accessibilityHint()` | `aria-hint` | `accessibilityHint` |
| Role | `.accessibilityAddTraits()` | `role` | `accessibilityRole` |
| Value | `.accessibilityValue()` | `aria-valuenow` | `accessibilityValue` |
| Hidden | `.accessibilityHidden()` | `aria-hidden` | `accessibilityElementsHidden` |

### Keyboard Implementation

```swift
// SwiftUI
struct AccessibleButton: View {
    var body: some View {
        Button("Pay Bill") { }
            .focusable()
            .onMoveCommand { direction in
                // Handle focus movement
            }
            .onExitCommand { _ in
                // Handle escape
            }
    }
}
```

```jsx
// React
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
    if (e.key === 'Escape') {
      handleClose();
    }
  }}
  tabIndex={0}
>
  Pay Bill
</button>
```

### Reduced Motion

```swift
// SwiftUI
@Environment(\.accessibilityReduceMotion) var reduceMotion

var animationDuration: Double {
    reduceMotion ? 0 : 0.25
}
```

```jsx
// React
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const duration = prefersReducedMotion ? 0 : 250;
```

### Dynamic Type

```swift
// SwiftUI
Text("Portfolio Value")
    .font(.body)
    .dynamicTypeSize(...DynamicTypeSize.allCases)
```

```css
/* CSS */
body {
  font-size: calc(14px + (16 - 14) * ((100vw - 375px) / (1440 - 375)));
}
```

---

## 10. Motion Implementation

### Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `immediate` | 0ms | Instant feedback |
| `fast` | 100ms | Hover, focus |
| `normal` | 180ms | State changes |
| `slow` | 250ms | Transitions |
| `slower` | 350ms | Page transitions |
| `slowest` | 500ms | Complex animations |

### Easing Tokens

| Token | Curve | Usage |
|-------|-------|-------|
| `standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | General animations |
| `enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `emphasized` | `cubic-bezier(0.4, 0, 0.2, 1)` | Important transitions |

### Spring Curves

| Name | Damping | Stiffness | Usage |
|------|---------|-----------|-------|
| `gentle` | 0.8 | 0.4 | Subtle feedback |
| `normal` | 0.7 | 0.3 | Standard animations |
| `bouncy` | 0.6 | 0.2 | Playful feedback |
| `snappy` | 0.9 | 0.5 | Quick, precise |

### Motion Implementation

```swift
// SwiftUI
struct AnimatedView: View {
    @State private var isExpanded = false
    
    var body: some View {
        VStack {
            Button("Toggle") {
                withAnimation(.spring(response: 0.35, dampingFraction: 0.7)) {
                    isExpanded.toggle()
                }
            }
            
            if isExpanded {
                Content()
                    .transition(.move(edge: .top).combined(with: .opacity))
            }
        }
    }
}
```

```jsx
// React with Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedComponent = ({ isExpanded }) => {
  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        Toggle
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
```

```jsx
// React Native
import { Animated } from 'react-native';

const fadeAnim = new Animated.Value(0);

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 250,
  easing: Easing.bezier(0.4, 0, 0.2, 1),
  useNativeDriver: true,
}).start();
```

---

## 11. Charts Implementation

### Data Models

```typescript
// TypeScript
interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  metadata?: Record<string, any>;
}

interface ChartProps {
  data: ChartDataPoint[];
  type: 'line' | 'bar' | 'pie' | 'donut' | 'sparkline';
  format?: 'currency' | 'percentage' | 'number';
  currency?: string;
  animated?: boolean;
  interactive?: boolean;
  accessibilityLabel?: string;
}
```

### Formatting

```typescript
// Currency formatting
const formatCurrency = (value: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Percentage formatting
const formatPercentage = (value: number): string => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
};
```

### Chart Accessibility

```jsx
// React
<svg role="img" aria-label="Portfolio performance over 12 months showing 15% growth">
  <title>Portfolio Performance</title>
  <desc>Line chart showing portfolio value from January to December, growing from $100,000 to $115,000</desc>
  {/* Chart content */}
</svg>
```

---

## 12. Testing Strategy

### Test Types

| Type | Coverage | Tool | Frequency |
|------|----------|------|-----------|
| Unit Tests | Functions, utils | Jest/Vitest | Every commit |
| Component Tests | UI components | React Testing Library | Every commit |
| Snapshot Tests | Visual output | Jest Snapshots | Every PR |
| Visual Regression | Pixel-perfect | Chromatic/Percy | Every PR |
| Accessibility Tests | WCAG compliance | axe-core | Every PR |
| Localization Tests | i18n | Custom | Weekly |
| Responsive Tests | Breakpoints | Playwright | Weekly |
| Performance Tests | Render time | Lighthouse | Weekly |
| Dark Mode Tests | Theme switching | Custom | Every release |
| Integration Tests | Flows | Cypress | Every release |

### Test Example

```jsx
// Component Test
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Pay Bill</Button>);
    expect(screen.getByText('Pay Bill')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Pay Bill</Button>);
    fireEvent.click(screen.getByText('Pay Bill'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Pay Bill</Button>);
    expect(screen.getByText('Pay Bill')).toBeDisabled();
  });
  
  it('shows loading state', () => {
    render(<Button loading>Pay Bill</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });
  
  it('has correct accessibility attributes', () => {
    render(
      <Button accessibilityLabel="Pay electricity bill" accessibilityHint="Double tap to confirm payment">
        Pay Bill
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Pay electricity bill');
    expect(button).toHaveAttribute('aria-hint', 'Double tap to confirm payment');
  });
});
```

---

## 13. QA Process

### QA Checklist

| Phase | Owner | Checklist |
|-------|-------|-----------|
| Design QA | Designer | Visual fidelity, spacing, colors, typography |
| Engineering QA | Engineer | Code quality, tests pass, no console errors |
| Accessibility QA | QA Engineer | VoiceOver, keyboard, contrast, ARIA |
| Visual QA | QA Engineer | Cross-browser, responsive, dark mode |
| Regression QA | QA Engineer | Existing features still work |
| Release QA | Team | All tests pass, documentation updated |

### Bug Reporting Template

```markdown
## Bug Report

**Title**: [Component] Brief description

**Environment**:
- Platform: iOS / Android / Web
- Browser: Chrome / Safari / Firefox
- Screen Size: 375px / 768px / 1440px

**Steps to Reproduce**:
1. Go to...
2. Click on...
3. Observe...

**Expected Behavior**:
...

**Actual Behavior**:
...

**Screenshots**:
[Attach screenshots]

**Severity**: Critical / High / Medium / Low
**Priority**: P0 / P1 / P2 / P3
```

---

## 14. Handoff Workflow

### Workflow Stages

| Stage | Owner | Deliverables |
|-------|-------|--------------|
| 1. Designer Ready | Designer | Figma file complete, tokens defined, components documented |
| 2. Design Review | Team | Design review approved, tokens validated |
| 3. Engineering Ready | Engineer | Implementation plan, API design, test plan |
| 4. Development | Engineer | Code complete, tests passing, documentation |
| 5. QA | QA Engineer | Tests passing, accessibility verified, responsive tested |
| 6. Design Verification | Designer | Visual fidelity confirmed, interaction verified |
| 7. Release | Team | Changelog updated, migration notes, deployment |
| 8. Post Release Audit | Team | Monitor issues, gather feedback, plan improvements |

### Handoff Checklist

- [ ] Figma file complete with all variants
- [ ] Tokens exported and validated
- [ ] Component API documented
- [ ] Accessibility requirements specified
- [ ] Responsive behavior defined
- [ ] Dark mode support specified
- [ ] Edge cases documented
- [ ] Performance requirements specified
- [ ] Testing requirements defined
- [ ] Migration guide drafted

---

## 15. Versioning

### Semantic Versioning

```
MAJOR.MINOR.PATCH

MAJOR — Breaking changes
MINOR — New features (backward compatible)
PATCH — Bug fixes (backward compatible)
```

### Version Examples

| Version | Changes | Breaking? |
|---------|---------|-----------|
| 1.0.0 | Initial release | — |
| 1.0.1 | Bug fix in Button | No |
| 1.1.0 | New Card component | No |
| 1.2.0 | New Badge variants | No |
| 2.0.0 | Token rename, API changes | Yes |

### Deprecation Policy

1. **Announce** — Mark as deprecated in docs and code
2. **Migrate** — Provide migration guide
3. **Support** — Keep working for 2 minor versions
4. **Remove** — Remove in next major version

---

## 16. Documentation

### Documentation Template

Every component must include:

```markdown
# Component Name

## Purpose
What this component does and when to use it.

## Implementation
Code examples for each platform.

## Props/Inputs
Table of all properties.

## Events/Callbacks
Table of all events.

## Accessibility
VoiceOver, keyboard, focus management.

## Responsive Behavior
How it adapts at breakpoints.

## Localization
Translation requirements.

## Dark Mode
Theme switching behavior.

## Performance
Optimization tips.

## Testing
How to test this component.

## Common Mistakes
Pitfalls to avoid.
```

---

## 17. Release Process

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Changelog written
- [ ] Migration guide drafted (if breaking)
- [ ] Version bumped
- [ ] Assets optimized
- [ ] Tokens exported
- [ ] Package published
- [ ] Teams notified
- [ ] Monitoring enabled

### Release Cadence

| Type | Frequency | Scope |
|------|-----------|-------|
| Patch | As needed | Bug fixes |
| Minor | Monthly | New features |
| Major | Quarterly | Breaking changes |

---

## 18. Migration Strategy

### Token Migration

```markdown
## Token Migration Guide

### Renamed Tokens
| Old Name | New Name | Action |
|----------|----------|--------|
| `blue500` | `color/blue/500` | Find and replace |
| `spacing-md` | `spacing/4` | Find and replace |

### Removed Tokens
| Token | Replacement |
|-------|-------------|
| `shadow-sm` | `elevation/card` |
| `shadow-md` | `elevation/raised` |
```

### Component Migration

```markdown
## Component Migration Guide

### Button
- Old: `<Button type="primary" />`
- New: `<Button variant="primary" />`

### Card
- Old: `<Card shadow="sm" />`
- New: `<Card elevation="card" />`
```

### Migration Timeline

| Phase | Duration | Activity |
|-------|----------|----------|
| Announce | Week 1 | Publish migration guide |
| Support | Weeks 2-8 | Both old and new work |
| Warn | Weeks 9-12 | Deprecation warnings |
| Remove | Week 13 | Remove old APIs |

---

## Quality Checklist

Every implementation must satisfy:

- [ ] Uses Design Tokens
- [ ] Uses Variables
- [ ] Responsive
- [ ] Accessible
- [ ] Localized
- [ ] Dark Mode
- [ ] Auto Layout Equivalent
- [ ] Performance Optimized
- [ ] Documented
- [ ] Tested

---

## Final Validation

Review the engineering implementation guide. Ask:

1. Can engineers implement every component without asking design?
2. Can all platforms share the same design language?
3. Can token updates be automated?
4. Can releases happen without confusion?
5. Can accessibility be guaranteed?
6. Can future teams scale the system?

---

*Document Version: 1.0*
*Last Updated: June 2026*
*Status: Official*
