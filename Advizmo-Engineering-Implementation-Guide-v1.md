# Advizmo Engineering Implementation Guide

**Version 1.0**
**Created: June 2026**
**Depends on: All Design Language Chapters**

---

## Table of Contents

1. [Overview](#overview)
2. [Implementation Strategy](#implementation-strategy)
3. [01 SwiftUI Implementation](#01-swiftui-implementation)
4. [02 React Native Implementation](#02-react-native-implementation)
5. [03 Web Implementation](#03-web-implementation)
6. [04 Token Implementation](#04-token-implementation)
7. [05 Component Implementation](#05-component-implementation)
8. [06 Theme Implementation](#06-theme-implementation)
9. [07 Accessibility Implementation](#07-accessibility-implementation)
10. [08 Testing Strategy](#08-testing-strategy)
11. [09 Performance Optimization](#09-performance-optimization)
12. [10 Documentation](#10-documentation)
13. [11 CI/CD Pipeline](#11-cicd-pipeline)
14. [12 Migration Guide](#12-migration-guide)
15. [13 Platform-Specific Guidelines](#13-platform-specific-guidelines)
16. [14 Code Examples](#14-code-examples)
17. [15 Troubleshooting](#15-troubleshooting)

---

## Overview

This guide provides engineering teams with everything needed to implement the Advizmo Design Language across platforms.

### Implementation Priority

| Phase | Components | Timeline |
|-------|------------|----------|
| Phase 1 | Tokens, Primitives | Weeks 1-4 |
| Phase 2 | Core Components | Weeks 5-8 |
| Phase 3 | Product Components | Weeks 9-12 |
| Phase 4 | Patterns, Screens | Weeks 13-16 |

### Platform Support

| Platform | Priority | Status |
|----------|----------|--------|
| iOS (SwiftUI) | P0 | Active |
| Web (React) | P0 | Active |
| Android (Compose) | P1 | Planned |
| React Native | P1 | Planned |

---

## Implementation Strategy

### Phased Approach

```
Phase 1: Foundation (Weeks 1-4)
├── Token System
├── Primitive Components
└── Theme System

Phase 2: Core Components (Weeks 5-8)
├── Buttons
├── Inputs
├── Cards
└── Navigation

Phase 3: Product Components (Weeks 9-12)
├── Account Components
├── Payment Components
├── Investment Components
└── Dashboard Components

Phase 4: Patterns & Screens (Weeks 13-16)
├── Authentication
├── Onboarding
├── Settings
└── Full Screens
```

### Code Organization

```
AdvizmoDesignSystem/
├── Tokens/
│   ├── Colors/
│   ├── Typography/
│   ├── Spacing/
│   └── Shadows/
├── Primitives/
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── ...
├── Components/
│   ├── AccountCard/
│   ├── PaymentForm/
│   └── ...
├── Patterns/
│   ├── Authentication/
│   └── ...
└── Utilities/
    ├── Accessibility/
    ├── Testing/
    └── Documentation/
```

---

## 01 SwiftUI Implementation

### Token Implementation

```swift
// Colors.swift
extension Color {
    // Brand Colors
    static let brandPrimary = Color(hex: "3B82F6")
    static let brandHover = Color(hex: "2563EB")
    static let brandActive = Color(hex: "1D4ED8")
    
    // Semantic Colors
    static let success = Color(hex: "10B981")
    static let warning = Color(hex: "F59E0B")
    static let error = Color(hex: "EF4444")
    static let info = Color(hex: "3B82F6")
    
    // Surface Colors
    static let backgroundPrimary = Color(hex: "F9FAFB")
    static let surfacePrimary = Color(hex: "FFFFFF")
    static let surfaceSecondary = Color(hex: "F9FAFB")
    
    // Text Colors
    static let textPrimary = Color(hex: "111827")
    static let textSecondary = Color(hex: "4B5563")
    static let textTertiary = Color(hex: "6B7280")
    
    init(hex: String) {
        let scanner = Scanner(string: hex)
        var rgbValue: UInt64 = 0
        scanner.scanHexInt64(&rgbValue)
        self.init(
            red: Double((rgbValue & 0xFF0000) >> 16) / 255.0,
            green: Double((rgbValue & 0x00FF00) >> 8) / 255.0,
            blue: Double(rgbValue & 0x0000FF) / 255.0
        )
    }
}
```

### Typography

```swift
// Typography.swift
extension Font {
    // Headings
    static let heading1 = Font.system(size: 32, weight: .bold)
    static let heading2 = Font.system(size: 24, weight: .bold)
    static let heading3 = Font.system(size: 20, weight: .semibold)
    static let heading4 = Font.system(size: 18, weight: .semibold)
    static let heading5 = Font.system(size: 16, weight: .semibold)
    
    // Body
    static let bodyLarge = Font.system(size: 18, weight: .regular)
    static let bodyMedium = Font.system(size: 16, weight: .regular)
    static let bodySmall = Font.system(size: 14, weight: .regular)
    static let bodySmaller = Font.system(size: 12, weight: .regular)
    
    // Financial
    static let amountLarge = Font.system(size: 32, weight: .bold).monospacedDigit()
    static let amountMedium = Font.system(size: 24, weight: .semibold).monospacedDigit()
    static let amountSmall = Font.system(size: 18, weight: .medium).monospacedDigit()
}
```

### Spacing

```swift
// Spacing.swift
enum Spacing {
    static let xs: CGFloat = 4
    static let sm: CGFloat = 8
    static let md: CGFloat = 12
    static let lg: CGFloat = 16
    static let xl: CGFloat = 24
    static let xxl: CGFloat = 32
    static let xxxl: CGFloat = 48
    static let xxxxl: CGFloat = 64
    static let xxxxxl: CGFloat = 96
}
```

### Component Example

```swift
// PrimaryButton.swift
struct PrimaryButton: View {
    let title: String
    let action: () -> Void
    
    var body: some View {
        Button(action: action) {
            Text(title)
                .font(.bodyMedium)
                .foregroundColor(.white)
                .frame(maxWidth: .infinity)
                .padding(.vertical, Spacing.md)
                .background(Color.brandPrimary)
                .cornerRadius(12)
        }
    }
}
```

---

## 02 React Native Implementation

### Token Implementation

```javascript
// tokens/colors.js
export const colors = {
  // Brand Colors
  brand: {
    primary: '#3B82F6',
    hover: '#2563EB',
    active: '#1D4ED8',
  },
  
  // Semantic Colors
  semantic: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  
  // Surface Colors
  surface: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    tertiary: '#F3F4F6',
  },
  
  // Text Colors
  text: {
    primary: '#111827',
    secondary: '#4B5563',
    tertiary: '#6B7280',
    disabled: '#9CA3AF',
  },
};
```

### Typography

```javascript
// tokens/typography.js
import { StyleSheet } from 'react-native';

export const typography = StyleSheet.create({
  // Headings
  heading1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
  },
  heading2: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  heading3: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  
  // Body
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },
  bodyMedium: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});
```

### Component Example

```javascript
// components/PrimaryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography } from '../tokens';

export const PrimaryButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[
      styles.button,
      disabled && styles.disabled,
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brand.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    ...typography.bodyMedium,
    color: colors.surface.primary,
  },
});
```

---

## 03 Web Implementation

### Token Implementation

```css
/* tokens/variables.css */
:root {
  /* Brand Colors */
  --brand-primary: #3B82F6;
  --brand-hover: #2563EB;
  --brand-active: #1D4ED8;
  
  /* Semantic Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
  
  /* Surface Colors */
  --surface-primary: #FFFFFF;
  --surface-secondary: #F9FAFB;
  --surface-tertiary: #F3F4F6;
  
  /* Text Colors */
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --text-tertiary: #6B7280;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  --spacing-xxl: 32px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 9999px;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --brand-primary: #60A5FA;
    --brand-hover: #93C5FD;
    --brand-active: #BFDBFE;
    
    --surface-primary: #1E293B;
    --surface-secondary: #0F172A;
    --surface-tertiary: #334155;
    
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-tertiary: #64748B;
  }
}
```

### Component Example

```css
/* components/PrimaryButton.css */
.primary-button {
  background-color: var(--brand-primary);
  color: var(--surface-primary);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
}

.primary-button:hover {
  background-color: var(--brand-hover);
}

.primary-button:active {
  background-color: var(--brand-active);
  transform: scale(0.98);
}

.primary-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## 04 Token Implementation

### Token Structure

```
Tokens/
├── Colors/
│   ├── Primitives/
│   │   ├── blue.json
│   │   ├── green.json
│   │   └── gray.json
│   ├── Semantic/
│   │   ├── light.json
│   │   └── dark.json
│   └── Component/
│       ├── button.json
│       └── card.json
├── Typography/
│   ├── scale.json
│   └── families.json
├── Spacing/
│   └── scale.json
├── Radius/
│   └── scale.json
└── Shadows/
    └── scale.json
```

### Token Conversion

```javascript
// scripts/convertTokens.js
const fs = require('fs');
const tokens = require('../tokens/advizmo-tokens.json');

// Convert to CSS variables
const cssVariables = convertToCSS(tokens);
fs.writeFileSync('dist/tokens.css', cssVariables);

// Convert to Swift
const swiftTokens = convertToSwift(tokens);
fs.writeFileSync('dist/Tokens.swift', swiftTokens);

// Convert to React Native
const rnTokens = convertToReactNative(tokens);
fs.writeFileSync('dist/tokens.js', rnTokens);
```

---

## 05 Component Implementation

### Component Structure

```
ComponentName/
├── index.ts
├── ComponentName.tsx
├── ComponentName.styles.ts
├── ComponentName.test.tsx
├── ComponentName.stories.tsx
└── README.md
```

### Component Template

```typescript
// ComponentName.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ComponentName.styles';

interface ComponentNameProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onPress?: () => void;
  children: React.ReactNode;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  variant = 'primary',
  size = 'md',
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles[variant], styles[size]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`${size}Text`]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
```

### Component Styles

```typescript
// ComponentName.styles.ts
import { StyleSheet } from 'react-native';
import { colors, typography, spacing, radius } from '../../tokens';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.brand.primary,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.brand.primary,
  },
  sm: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.sm,
  },
  md: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  lg: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
  },
  text: {
    ...typography.bodyMedium,
    color: colors.surface.primary,
  },
  smText: {
    ...typography.bodySmall,
  },
  mdText: {
    ...typography.bodyMedium,
  },
  lgText: {
    ...typography.bodyLarge,
  },
});
```

---

## 06 Theme Implementation

### Theme Provider

```typescript
// contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  isDark: false,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<Theme>('system');
  
  const isDark = theme === 'dark' || 
    (theme === 'system' && systemColorScheme === 'dark');
  
  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

### Theme Switching

```typescript
// components/ThemeSwitcher.tsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <View>
      <TouchableOpacity onPress={() => setTheme('light')}>
        <Text>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTheme('dark')}>
        <Text>Dark</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setTheme('system')}>
        <Text>System</Text>
      </TouchableOpacity>
    </View>
  );
};
```

---

## 07 Accessibility Implementation

### Accessibility Wrapper

```typescript
// components/AccessibleView.tsx
import React from 'react';
import { View, AccessibilityInfo } from 'react-native';

interface AccessibleViewProps {
  label?: string;
  hint?: string;
  role?: string;
  children: React.ReactNode;
}

export const AccessibleView: React.FC<AccessibleViewProps> = ({
  label,
  hint,
  role,
  children,
}) => {
  return (
    <View
      accessible={true}
      accessibilityLabel={label}
      accessibilityHint={hint}
      accessibilityRole={role}
    >
      {children}
    </View>
  );
};
```

### Focus Management

```typescript
// hooks/useFocusManagement.ts
import { useRef, useEffect } from 'react';

export const useFocusManagement = () => {
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  
  useEffect(() => {
    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusableRef.current) {
            lastFocusableRef.current?.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusableRef.current) {
            firstFocusableRef.current?.focus();
            e.preventDefault();
          }
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return { firstFocusableRef, lastFocusableRef };
};
```

---

## 08 Testing Strategy

### Testing Levels

| Level | Coverage | Tools |
|-------|----------|-------|
| Unit | 80% | Jest, React Testing Library |
| Integration | 60% | Cypress, Detox |
| E2E | 40% | Appium, XCUITest |
| Visual | 100% | Chromatic, Percy |

### Component Testing

```typescript
// ComponentName.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ComponentName onPress={() => {}}>
        Button Text
      </ComponentName>
    );
    expect(getByText('Button Text')).toBeTruthy();
  });
  
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ComponentName onPress={onPress}>
        Button Text
      </ComponentName>
    );
    fireEvent.press(getByText('Button Text'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  
  it('applies correct styles for variant', () => {
    const { getByTestId } = render(
      <ComponentName variant="secondary" onPress={() => {}}>
        Button Text
      </ComponentName>
    );
    expect(getByTestId('button-container')).toHaveStyle({
      backgroundColor: 'transparent',
    });
  });
});
```

### Visual Regression Testing

```typescript
// ComponentName.stories.tsx
import React from 'react';
import { ComponentName } from './ComponentName';

export default {
  title: 'Components/ComponentName',
  component: ComponentName,
};

export const Primary = () => (
  <ComponentName variant="primary" onPress={() => {}}>
    Primary Button
  </ComponentName>
);

export const Secondary = () => (
  <ComponentName variant="secondary" onPress={() => {}}>
    Secondary Button
  </ComponentName>
);

export const Disabled = () => (
  <ComponentName disabled onPress={() => {}}>
    Disabled Button
  </ComponentName>
);
```

---

## 09 Performance Optimization

### Performance Checklist

- [ ] Use memoization for expensive computations
- [ ] Avoid unnecessary re-renders
- [ ] Use lazy loading for large lists
- [ ] Optimize image loading
- [ ] Minimize bundle size

### Optimization Examples

```typescript
// Memoization
import React, { memo } from 'react';

export const OptimizedComponent = memo(({ data, onPress }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      formatted: formatCurrency(item.amount),
    }));
  }, [data]);
  
  return (
    <View>
      {processedData.map(item => (
        <Item key={item.id} data={item} onPress={onPress} />
      ))}
    </View>
  );
});

// Lazy Loading
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

export const App = () => (
  <Suspense fallback={<Loading />}>
    <HeavyComponent />
  </Suspense>
);
```

---

## 10 Documentation

### Documentation Structure

```
Documentation/
├── Getting Started/
│   ├── Installation.md
│   ├── Quick Start.md
│   └── Theming.md
├── Components/
│   ├── Button.md
│   ├── Input.md
│   └── Card.md
├── Tokens/
│   ├── Colors.md
│   ├── Typography.md
│   └── Spacing.md
├── Patterns/
│   ├── Authentication.md
│   └── Forms.md
└── Guidelines/
    ├── Accessibility.md
    ├── Performance.md
    └── Testing.md
```

### Component Documentation

```markdown
# ComponentName

## Description
Brief description of the component.

## Usage
```jsx
<ComponentName variant="primary" onPress={() => {}}>
  Button Text
</ComponentName>
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | Button variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| onPress | () => void | - | Press handler |
| disabled | boolean | false | Disabled state |

## Accessibility
- Role: button
- Label: Button text
- Hint: Action description

## Examples
- Primary button
- Secondary button
- Disabled button
```

---

## 11 CI/CD Pipeline

### Pipeline Structure

```yaml
# .github/workflows/design-system.yml
name: Design System CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run lint
      - run: npm run typecheck

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 12 Migration Guide

### Migration Steps

1. **Audit Current State**
   - Document existing components
   - Identify design token usage
   - Map component variants

2. **Plan Migration**
   - Prioritize high-impact components
   - Define migration timeline
   - Assign team responsibilities

3. **Implement Tokens**
   - Convert existing colors to tokens
   - Convert existing typography to tokens
   - Convert existing spacing to tokens

4. **Migrate Components**
   - Update component styles to use tokens
   - Add missing variants
   - Improve accessibility

5. **Test & Validate**
   - Visual regression testing
   - Accessibility testing
   - Performance testing

6. **Document & Deploy**
   - Update documentation
   - Train team members
   - Deploy to production

---

## 13 Platform-Specific Guidelines

### iOS Guidelines

- Follow Apple HIG
- Use SF Symbols where possible
- Support Dynamic Type
- Support VoiceOver
- Use system haptics

### Android Guidelines

- Follow Material Design
- Use Material Icons
- Support TalkBack
- Support bold text
- Use system vibrations

### Web Guidelines

- Follow WCAG 2.1 AA
- Support keyboard navigation
- Support screen readers
- Use semantic HTML
- Support reduced motion

---

## 14 Code Examples

### Complete Button Component

```typescript
// Button.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { styles } from './Button.styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  onPress,
  children,
}) => {
  const isDisabled = disabled || loading;
  
  return (
    <TouchableOpacity
      style={[
        styles.container,
        styles[variant],
        styles[size],
        isDisabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size="small" color={styles[variant].color} />
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <View style={styles.iconLeft}>{icon}</View>
          )}
          <Text style={[styles.text, styles[`${size}Text`]]}>
            {children}
          </Text>
          {icon && iconPosition === 'right' && (
            <View style={styles.iconRight}>{icon}</View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};
```

---

## 15 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Colors not updating | Check theme provider setup |
| Typography not scaling | Check Dynamic Type support |
| Components not accessible | Add proper ARIA labels |
| Animations janky | Use hardware acceleration |
| Bundle too large | Implement code splitting |

### Debug Tools

- React DevTools
- React Native Debugger
- Safari Web Inspector
- Xcode Instruments
- Chrome DevTools

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
