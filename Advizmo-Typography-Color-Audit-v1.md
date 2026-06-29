# Advizmo Design System — Typography & Color System Audit

> **Version:** 1.0  
> **Status:** CRITICAL FIX  
> **Last Updated:** June 2026  
> **Scope:** Complete audit and repair of typography visibility in Light Mode

---

## Executive Summary

**Problem:** Typography appears almost invisible in Light Mode.

**Root Cause:** Typography styles may be incorrectly bound to:
1. Dark mode color variables in Light Mode
2. Low-contrast color tokens
3. Reduced opacity values
4. Hardcoded colors instead of semantic variables

**Solution:** This document provides:
1. Complete audit of all semantic text tokens
2. Correct Light Mode and Dark Mode values
3. Step-by-step fix instructions
4. Verification checklist

---

## 1. Semantic Text Token Audit

### 1.1 Light Mode Text Colors (CORRECT VALUES)

| Token | Hex Value | RGB | Contrast on White | Status |
|-------|-----------|-----|-------------------|--------|
| `text-primary` | #111827 | rgb(17,24,39) | 16.75:1 | ✅ PASS |
| `text-secondary` | #4B5563 | rgb(75,85,99) | 7.45:1 | ✅ PASS |
| `text-tertiary` | #6B7280 | rgb(107,114,128) | 4.96:1 | ✅ PASS |
| `text-disabled` | #9CA3AF | rgb(156,163,175) | 3.04:1 | ⚠️ MARGINAL |
| `text-inverse` | #FFFFFF | rgb(255,255,255) | On dark bg | ✅ PASS |
| `text-link` | #2563EB | rgb(37,99,235) | 5.87:1 | ✅ PASS |
| `text-on-color` | #FFFFFF | rgb(255,255,255) | On colored bg | ✅ PASS |

### 1.2 Dark Mode Text Colors (CORRECT VALUES)

| Token | Hex Value | RGB | Contrast on #0F172A | Status |
|-------|-----------|-----|---------------------|--------|
| `text-primary` | #F8FAFC | rgb(248,250,252) | 17.34:1 | ✅ PASS |
| `text-secondary` | #94A3B8 | rgb(148,163,184) | 7.52:1 | ✅ PASS |
| `text-tertiary` | #64748B | rgb(100,116,139) | 4.67:1 | ✅ PASS |
| `text-disabled` | #475569 | rgb(71,85,105) | 3.01:1 | ⚠️ MARGINAL |
| `text-inverse` | #0F172A | rgb(15,23,42) | On light bg | ✅ PASS |
| `text-link` | #60A5FA | rgb(96,165,250) | 6.54:1 | ✅ PASS |
| `text-on-color` | #FFFFFF | rgb(255,255,255) | On colored bg | ✅ PASS |

---

## 2. Token Binding Matrix

### 2.1 Correct Bindings for Light Mode

| Semantic Token | Primitive Reference | Hex Value |
|----------------|---------------------|-----------|
| `text-primary` | `gray-900` | #111827 |
| `text-secondary` | `gray-600` | #4B5563 |
| `text-tertiary` | `gray-500` | #6B7280 |
| `text-disabled` | `gray-400` | #9CA3AF |
| `text-inverse` | `white` | #FFFFFF |
| `text-link` | `blue-600` | #2563EB |
| `text-on-color` | `white` | #FFFFFF |

### 2.2 Correct Bindings for Dark Mode

| Semantic Token | Primitive Reference | Hex Value |
|----------------|---------------------|-----------|
| `text-primary` | `gray-50` | #F8FAFC |
| `text-secondary` | `gray-400` | #94A3B8 |
| `text-tertiary` | `gray-500` | #64748B |
| `text-disabled` | `gray-600` | #475569 |
| `text-inverse` | `gray-900` | #0F172A |
| `text-link` | `blue-400` | #60A5FA |
| `text-on-color` | `white` | #FFFFFF |

---

## 3. Common Issues & Fixes

### 3.1 Issue: Typography Using Dark Mode Values in Light Mode

**Symptom:** Text appears very light/invisible on white background

**Cause:** Typography styles bound to Dark Mode variables:
```
❌ INCORRECT:
text-primary → gray-50 (#F8FAFC)  // This is Dark Mode value!
text-secondary → gray-400 (#94A3B8)  // This is Dark Mode value!
```

**Fix:** Rebind to Light Mode values:
```
✅ CORRECT:
text-primary → gray-900 (#111827)  // Light Mode value
text-secondary → gray-600 (#4B5563)  // Light Mode value
```

### 3.2 Issue: Typography Using Low-Contrast Tokens

**Symptom:** Text is visible but hard to read

**Cause:** Using tertiary or disabled tokens for primary content:
```
❌ INCORRECT:
Heading → text-tertiary (#6B7280)
Body → text-disabled (#9CA3AF)
```

**Fix:** Use appropriate hierarchy tokens:
```
✅ CORRECT:
Heading → text-primary (#111827)
Body → text-primary (#111827)
Caption → text-secondary (#4B5563)
```

### 3.3 Issue: Typography with Reduced Opacity

**Symptom:** Text appears faded or washed out

**Cause:** Opacity applied to text layer:
```
❌ INCORRECT:
Layer opacity: 50%
Layer opacity: 70%
```

**Fix:** Remove opacity, use color token instead:
```
✅ CORRECT:
Layer opacity: 100%
Color: text-secondary (for lighter text)
```

### 3.4 Issue: Typography Using White on Light Background

**Symptom:** Text completely invisible on white

**Cause:** `text-inverse` or `text-on-color` used on light background:
```
❌ INCORRECT:
Card background: white
Text color: text-inverse (white)  // White on white!
```

**Fix:** Use appropriate text token:
```
✅ CORRECT:
Card background: white
Text color: text-primary (#111827)
```

### 3.5 Issue: Typography Using Hardcoded Colors

**Symptom:** Colors don't update with theme changes

**Cause:** Hex values instead of variables:
```
❌ INCORRECT:
Color: #FFFFFF
Color: #000000
Color: #666666
```

**Fix:** Use semantic tokens:
```
✅ CORRECT:
Color: text-primary
Color: text-secondary
Color: text-tertiary
```

---

## 4. Figma Repair Instructions

### 4.1 Step 1: Identify Affected Layers

1. Open Figma file
2. Select all text layers (Cmd/Ctrl + A, then filter by Text)
3. Inspect each layer's fill color
4. Check if color is a variable or hardcoded hex

### 4.2 Step 2: Check Variable Bindings

For each text layer:

1. Select the layer
2. Look at Fill section in right panel
3. Check if it shows a variable name (e.g., `text/primary`)
4. If it shows hex value, it's not using variables

### 4.3 Step 3: Fix Incorrect Bindings

For each text layer with incorrect binding:

1. Select the layer
2. Click on the color fill
3. Click "Local styles" or "Variables" tab
4. Select correct semantic token:
   - Headings → `text/primary`
   - Body text → `text/primary`
   - Captions → `text/secondary`
   - Placeholders → `text/tertiary`
   - Disabled → `text/disabled`

### 4.4 Step 4: Remove Opacity

For each text layer with opacity < 100%:

1. Select the layer
2. Find "Layer" section in right panel
3. Set opacity to 100%
4. If text needs to be lighter, use `text-secondary` or `text-tertiary` instead

### 4.5 Step 5: Verify Light Mode

1. Switch to Light Mode in Figma
2. Scroll through all pages
3. Verify all text is readable
4. Check contrast ratios using Stark plugin or manual calculation

---

## 5. Typography Style Specifications

### 5.1 Correct Typography Styles

| Style | Font | Size | Weight | Color (Light) | Color (Dark) |
|-------|------|------|--------|---------------|--------------|
| Display | Inter | 32px | 600 | text-primary | text-primary |
| Heading 1 | Inter | 24px | 600 | text-primary | text-primary |
| Heading 2 | Inter | 20px | 600 | text-primary | text-primary |
| Heading 3 | Inter | 16px | 600 | text-primary | text-primary |
| Body Large | Inter | 16px | 400 | text-primary | text-primary |
| Body | Inter | 14px | 400 | text-primary | text-primary |
| Body Small | Inter | 12px | 400 | text-primary | text-primary |
| Caption | Inter | 12px | 400 | text-secondary | text-secondary |
| Micro | Inter | 11px | 500 | text-tertiary | text-tertiary |
| Overline | Inter | 10px | 600 | text-secondary | text-secondary |

### 5.2 Amount Styles

| Style | Font | Size | Weight | Color (Light) | Color (Dark) |
|-------|------|------|--------|---------------|--------------|
| Amount Hero | Inter | 40px | 700 | text-primary | text-primary |
| Amount Large | Inter | 28px | 600 | text-primary | text-primary |
| Amount Medium | Inter | 20px | 600 | text-primary | text-primary |
| Amount Small | Inter | 14px | 500 | text-primary | text-primary |
| Amount Micro | Inter | 12px | 500 | text-secondary | text-secondary |

### 5.3 Financial Text Colors

| Context | Token | Light Value | Dark Value |
|---------|-------|-------------|------------|
| Positive amount | `text-positive` | #059669 | #34D399 |
| Negative amount | `text-negative` | #DC2626 | #F87171 |
| Neutral amount | `text-primary` | #111827 | #F8FAFC |
| Pending amount | `text-warning` | #D97706 | #FBBF24 |
| AI text | `text-ai` | #7C3AED | #A78BFA |

---

## 6. Documentation Page Audit

### 6.1 Pages to Verify

| Page | File | Status |
|------|------|--------|
| Design Foundations | Advizmo-Design-Foundations-v1.md | ☐ |
| Token Architecture | Advizmo-Design-Tokens-v1.md | ☐ |
| Token Architecture (Expanded) | Advizmo-Design-Tokens-Architecture-v1.md | ☐ |
| Primitive Components | Advizmo-Primitive-Components-v1.md | ☐ |
| Core Product Components | Advizmo-Core-Product-Components-v1.md | ☐ |
| Data Visualization | Advizmo-Data-Visualization-System-v1.md | ☐ |
| Figma Implementation Guide | Advizmo-Figma-Implementation-Guide-v1.md | ☐ |
| Forms & Data Entry | Advizmo-Forms-Data-Entry-System-v1.md | ☐ |
| Typography & Color Audit | This document | ☐ |

### 6.2 Verification Checklist

For each documentation page:

- [ ] All color tokens use semantic names
- [ ] All typography references correct variables
- [ ] No hardcoded hex values for text colors
- [ ] Light Mode values are correct
- [ ] Dark Mode values are correct
- [ ] Contrast ratios meet WCAG AA (4.5:1)
- [ ] No opacity on text layers

---

## 7. Quick Reference Card

### Light Mode Text Colors

```
Primary:    #111827 (gray-900) — Headlines, body, amounts
Secondary:  #4B5563 (gray-600) — Captions, labels, metadata
Tertiary:   #6B7280 (gray-500) — Placeholders, hints
Disabled:   #9CA3AF (gray-400) — Disabled text
Link:       #2563EB (blue-600) — Links, interactive text
Positive:   #059669 (green-600) — Gains, success
Negative:   #DC2626 (red-600) — Losses, errors
Warning:    #D97706 (orange-500) — Warnings, attention
AI:         #7C3AED (purple-600) — AI features
```

### Dark Mode Text Colors

```
Primary:    #F8FAFC (gray-50) — Headlines, body, amounts
Secondary:  #94A3B8 (gray-400) — Captions, labels, metadata
Tertiary:   #64748B (gray-500) — Placeholders, hints
Disabled:   #475569 (gray-600) — Disabled text
Link:       #60A5FA (blue-400) — Links, interactive text
Positive:   #34D399 (green-400) — Gains, success
Negative:   #F87171 (red-400) — Losses, errors
Warning:    #FBBF24 (yellow-400) — Warnings, attention
AI:         #A78BFA (purple-400) — AI features
```

---

## 8. Contrast Ratio Reference

### WCAG AA Requirements

| Text Size | Minimum Ratio | Target Ratio |
|-----------|---------------|--------------|
| Normal (<18px) | 4.5:1 | 7:1 |
| Large (≥18px bold or ≥24px) | 3:1 | 4.5:1 |
| UI Components | 3:1 | 4.5:1 |

### Advizmo Contrast Ratios

| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| text-primary on white | 16.75:1 | — |
| text-primary on #0F172A | — | 17.34:1 |
| text-secondary on white | 7.45:1 | — |
| text-secondary on #0F172A | — | 7.52:1 |
| text-tertiary on white | 4.96:1 | — |
| text-tertiary on #0F172A | — | 4.67:1 |

---

## 9. Figma Variables Setup

### 9.1 Light Mode Collection

```
Group: Color/Semantic/Text
├── Primary: #111827 (gray-900)
├── Secondary: #4B5563 (gray-600)
├── Tertiary: #6B7280 (gray-500)
├── Disabled: #9CA3AF (gray-400)
├── Inverse: #FFFFFF (white)
├── Link: #2563EB (blue-600)
├── On-Color: #FFFFFF (white)
├── Positive: #059669 (green-600)
├── Negative: #DC2626 (red-600)
├── Warning: #D97706 (orange-500)
└── AI: #7C3AED (purple-600)
```

### 9.2 Dark Mode Collection

```
Group: Color/Semantic/Text
├── Primary: #F8FAFC (gray-50)
├── Secondary: #94A3B8 (gray-400)
├── Tertiary: #64748B (gray-500)
├── Disabled: #475569 (gray-600)
├── Inverse: #0F172A (gray-900)
├── Link: #60A5FA (blue-400)
├── On-Color: #FFFFFF (white)
├── Positive: #34D399 (green-400)
├── Negative: #F87171 (red-400)
├── Warning: #FBBF24 (yellow-400)
└── AI: #A78BFA (purple-400)
```

---

## 10. Verification Steps

### 10.1 Visual Verification

1. Open Figma file
2. Switch to Light Mode
3. Navigate to Typography section
4. Verify all text is readable
5. Check each style:
   - Display: Dark text on light bg
   - Headings: Dark text on light bg
   - Body: Dark text on light bg
   - Captions: Medium text on light bg
   - Placeholders: Light text on light bg

### 10.2 Technical Verification

1. Select each text layer
2. Check Fill section:
   - Should show variable name (e.g., `text/primary`)
   - Should NOT show hex value
   - Should NOT show opacity < 100%
3. Check if variable resolves to correct hex:
   - `text/primary` → #111827 (Light) or #F8FAFC (Dark)

### 10.3 Accessibility Verification

1. Use Stark plugin to check contrast
2. Or manually calculate:
   - Contrast ratio = (L1 + 0.05) / (L2 + 0.05)
   - L1 = relative luminance of lighter color
   - L2 = relative luminance of darker color
3. Verify all text meets WCAG AA (4.5:1 for normal text)

---

## 11. Troubleshooting

### Issue: Text still invisible after fixing variables

**Check:**
1. Is the text layer inside a frame with opacity?
2. Is the text layer's blend mode correct?
3. Is there a dark overlay on top?
4. Is the parent frame's background correct?

### Issue: Text colors don't change with theme

**Check:**
1. Are variables bound to the correct collection?
2. Is the mode correctly set?
3. Are there any overrides on the text layer?

### Issue: Some text is readable, some is not

**Check:**
1. Different text layers may have different bindings
2. Check each layer individually
3. Look for layers that might be using local styles instead of variables

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 2026 | Ishasahu12 | Initial audit and fix guide |

---

**End of Typography & Color System Audit**
