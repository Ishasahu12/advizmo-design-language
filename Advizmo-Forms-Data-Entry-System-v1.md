# Advizmo Design System — Chapter 8: Forms & Data Entry System

> **Version:** 1.0  
> **Status:** Production  
> **Last Updated:** June 2026  
> **Scope:** Complete form language for every Advizmo input flow

---

## Table of Contents

1. [Form Philosophy](#1-form-philosophy)
2. [Layout System](#2-layout-system)
3. [Text Inputs](#3-text-inputs)
4. [Financial Inputs](#4-financial-inputs)
5. [Selection Controls](#5-selection-controls)
6. [Pickers](#6-pickers)
7. [Search](#7-search)
8. [Filters](#8-filters)
9. [Authentication](#9-authentication)
10. [Validation](#10-validation)
11. [Helper Components](#11-helper-components)
12. [Keyboard Behaviour](#12-keyboard-behaviour)
13. [Focus Behaviour](#13-focus-behaviour)
14 [Upload Components](#14-upload-components)
15. [Form Patterns](#15-form-patterns)
16. [Accessibility](#16-accessibility)
17. [Documentation](#17-documentation)

---

## 1. Form Philosophy

### 1.1 Core Principles

#### Progressive Disclosure

Show only what the user needs at each step. Never overwhelm with the full form at once.

```
Step 1: Amount only
Step 2: Account selection
Step 3: Review & confirm
```

**Rule:** Maximum 3-5 fields per screen. If more are needed, split into steps.

#### Single Responsibility

Each input field has one job. Never combine multiple pieces of information into a single field.

```
✅ First Name | Last Name (separate)
❌ Full Name (combined)

✅ Street Address | City | State | Zip (separate)
❌ Address (combined)
```

#### Logical Grouping

Group related fields together. Separate unrelated fields with visual dividers.

```
┌─ Personal Information ─────────────┐
│ First Name                         │
│ Last Name                          │
│ Email                              │
└────────────────────────────────────┘

┌─ Financial Information ────────────┐
│ Monthly Income                     │
│ Monthly Expenses                   │
└────────────────────────────────────┘
```

#### Minimal Typing

Every keystroke is an opportunity for error. Reduce typing wherever possible.

| Strategy | Implementation |
|----------|----------------|
| Auto-fill | Use system auto-fill APIs |
| Suggestions | Pre-populate common values |
| Selection | Prefer pickers over text fields |
| Defaults | Pre-select most common option |
| Smart parsing | Accept "$1,000" and "1000" |

#### Auto Fill

Always support iOS AutoFill and browser auto-complete.

```swift
// SwiftUI
TextField("Email", text: $email)
    .textContentType(.emailAddress)
    .autocorrectionDisabled()

// React
<input
  type="email"
  autoComplete="email"
  autoCapitalize="none"
/>
```

**Required text content types:**

| Field | Content Type | AutoComplete |
|-------|--------------|--------------|
| Email | `.emailAddress` | `email` |
| Phone | `.telephoneNumber` | `tel` |
| Name | `.name` | `name` |
| Address | `.fullStreetAddress` | `street-address` |
| City | `.addressCity` | `address-level2` |
| State | `.addressState` | `address-level1` |
| Zip | `.postalCode` | `postal-code` |
| Card Number | `.creditCardNumber` | `cc-number` |
| Expiry | `.creditCardExpiration` | `cc-exp` |
| CVV | `.creditCardSecurityCode` | `cc-csc` |

#### Smart Defaults

Pre-fill with the most likely value based on context.

| Context | Default | Rationale |
|---------|---------|-----------|
| Transfer amount | Last used amount | Most users repeat transfers |
| Investment frequency | Monthly | Most common frequency |
| Bill amount | Last payment amount | Bills are usually consistent |
| Goal target | Round number | Users prefer round targets |
| Date | Today | Most entries are for today |

#### Inline Validation

Validate as the user types, not after submission.

```
Email field:
├── User types "sarah@"
├── Validate: ❌ "Please enter a complete email"
├── User types "sarah@advizmo"
├── Validate: ❌ "Please include a domain extension"
├── User types "sarah@advizmo.com"
└── Validate: ✅ Green checkmark
```

**Rule:** Show success immediately. Show error after 500ms debounce.

#### Real Time Feedback

Show the impact of input changes immediately.

```
Transfer Amount: $5,000
├── Source: Chase Checking ($12,450)
├── Remaining after transfer: $7,450
├── ✅ Sufficient funds
└── [Transfer Button: Enabled]
```

#### Predictive Inputs

Use AI to suggest values based on history and context.

```
Bill Amount: $[input]
├── Suggestion: "$142.50 (last month)"
├── Suggestion: "$138.00 (average)"
└── Suggestion: "$150.00 (budgeted)"
```

#### Context Awareness

Adjust form behaviour based on context.

| Context | Adjustment |
|---------|------------|
| First time user | Show more hints and examples |
| Power user | Hide hints, show keyboard shortcuts |
| Mobile | Larger touch targets, fewer fields |
| Desktop | Compact layout, keyboard navigation |

#### Progressive Saving

Save form state as the user progresses. Never lose data.

```
Step 1: Amount entered → Save to draft
Step 2: Account selected → Save to draft
Step 3: Review → Load from draft
```

#### Auto Save

For long forms, auto-save every 30 seconds.

```
Last saved: 2 minutes ago
[Save Draft] [Continue Later]
```

### 1.2 Design Rules

| Rule | Description |
|------|-------------|
| Never ask what you already know | Pre-fill from account data |
| Prefer selection over typing | Use pickers, toggles, chips |
| Prefer suggestion over manual entry | Show AI recommendations |
| Validate inline, not on submit | Real-time feedback |
| Save progressively | Never lose user data |
| Show impact immediately | Display calculations live |
| Make errors recoverable | Clear error + retry |
| Support all input methods | Touch, keyboard, voice |
| Design for mistakes | Easy undo, clear labels |
| Be forgiving | Accept variations of valid input |

---

## 2. Layout System

### 2.1 Form Dimensions

| Property | Mobile (≤428px) | Tablet (429-768px) | Desktop (≥769px) |
|----------|-----------------|---------------------|------------------|
| Max form width | 100% | 480px | 520px |
| Form padding | 16px | 24px | 32px |
| Section spacing | 24px | 32px | 40px |
| Group spacing | 16px | 20px | 24px |
| Field spacing | 16px | 16px | 16px |
| Label spacing | 6px | 6px | 6px |
| Footer spacing | 16px | 20px | 24px |

### 2.2 Form Anatomy

```
┌─────────────────────────────────────┐
│ Status Bar (system)                 │
├─────────────────────────────────────┤
│ Navigation Bar                      │
│ [Back]  Title           [Actions]   │
├─────────────────────────────────────┤
│                                     │
│  ┌─ Section ─────────────────────┐  │
│  │ Section Title                 │  │
│  │                               │  │
│  │ ┌─ Field Group ────────────┐  │  │
│  │ │ Label (optional)         │  │  │
│  │ │ ┌─────────────────────┐  │  │  │
│  │ │ │ Input               │  │  │  │
│  │ │ └─────────────────────┘  │  │  │
│  │ │ Helper Text (optional)   │  │  │
│  │ └─────────────────────────┘  │  │
│  │                               │  │
│  │ ┌─ Field Group ────────────┐  │  │
│  │ │ Label (optional)         │  │  │
│  │ │ ┌─────────────────────┐  │  │  │
│  │ │ │ Input               │  │  │  │
│  │ │ └─────────────────────┘  │  │  │
│  │ │ Helper Text (optional)   │  │  │
│  │ └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│ ┌─ Sticky Footer ─────────────────┐ │
│ │ [Secondary Action]  [Primary]   │ │
│ └─────────────────────────────────┘ │
│ Safe Area                           │
└─────────────────────────────────────┘
```

### 2.3 Section Spacing

| Element | Spacing | Rules |
|---------|---------|-------|
| Between sections | 24px | Always consistent |
| Between groups | 16px | Within a section |
| Between fields | 16px | Within a group |
| Between label and input | 6px | Always consistent |
| Between input and helper | 4px | Always consistent |
| Between input and error | 4px | Always consistent |
| Between sections and footer | 16px | Minimum |
| Between header and content | 16px | Minimum |

### 2.4 Sticky Actions

```
┌─────────────────────────────────────┐
│ Scrollable content                  │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Field 1                        │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Field 2                        │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ Field 3                        │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ ┌─ Sticky Footer ─────────────────┐ │
│ │ [Cancel]            [Continue]  │ │
│ └─────────────────────────────────┘ │
│ Safe Area                           │
└─────────────────────────────────────┘
```

**Rules:**
- Footer sticks to bottom of screen
- Content scrolls behind footer
- Footer has 16px padding top for visual separation
- Footer has background blur on iOS
- Primary action is always on the right

### 2.5 Multi-Step Forms

```
┌─────────────────────────────────────┐
│ [Back]  Step 1 of 3       [Close]  │
│─────────────────────────────────────│
│ ●───────────────○───────────────○   │
│─────────────────────────────────────│
│                                     │
│ ┌─ Step Content ─────────────────┐  │
│ │                                │  │
│ │                                │  │
│ └────────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│ [Back]                    [Continue]│
└─────────────────────────────────────┘
```

**Rules:**
- Progress indicator shows current step
- Back button returns to previous step
- Continue button validates current step
- Skip button available for optional steps
- Step count is always visible

### 2.6 Review Screen

```
┌─────────────────────────────────────┐
│ [Back]  Review Transfer    [Edit]   │
├─────────────────────────────────────┤
│                                     │
│ ┌─ Summary Card ─────────────────┐  │
│ │                                │  │
│ │ Amount                         │  │
│ │ $5,000.00                      │  │
│ │                                │  │
│ │ From                           │  │
│ │ Chase Checking ••4521          │  │
│ │                                │  │
│ │ To                             │  │
│ │ Savings ••7890                  │  │
│ │                                │  │
│ │ Date                           │  │
│ │ Today, Jun 29, 2026            │  │
│ │                                │  │
│ │ Fee                            │  │
│ │ Free                           │  │
│ │                                │  │
│ │ Estimated Arrival              │  │
│ │ Instant                        │  │
│ │                                │  │
│ └────────────────────────────────┘  │
│                                     │
│ ┌─ Edit Links ───────────────────┐  │
│ │ [Edit Amount] [Edit Accounts]  │  │
│ └────────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│ [Back]              [Confirm $5,000]│
└─────────────────────────────────────┘
```

### 2.7 Confirmation Screen

```
┌─────────────────────────────────────┐
│                                     │
│           ✅                        │
│                                     │
│     Transfer Complete               │
│                                     │
│     $5,000.00                       │
│     Chase Checking → Savings        │
│                                     │
│     Arrives: Instant                │
│     Reference: TXN-2026-0629-001    │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ [View Transaction]              │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ [Done]                          │ │
│ └─────────────────────────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

---

## 3. Text Inputs

### 3.1 Text Field

#### Anatomy

```
┌─────────────────────────────────────┐
│ Label (optional)                     │
│ ┌─────────────────────────────────┐ │
│ │ [Icon]  Value          [Clear] │ │
│ └─────────────────────────────────┘ │
│ Helper text (optional)              │
└─────────────────────────────────────┘
```

#### Variants

| Variant | Description | Usage |
|---------|-------------|-------|
| Default | Standard text input | General use |
| With Label | Label above input | Forms with multiple fields |
| Without Label | No visible label | Inline forms, search |
| With Prefix | Text before value | "$" for currency |
| With Suffix | Text after value | ".00" for decimals |
| With Icons | Icon leading/trailing | Search, clear, reveal |

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Focus, Filled, Error, Success, Disabled, ReadOnly |
| Label | String | "Label" | Any text |
| Placeholder | String | "Enter text" | Any text |
| Value | String | "" | Any text |
| Helper Text | String | "" | Any text |
| Error Text | String | "" | Any text |
| Success Text | String | "" | Any text |
| Leading Icon | Instance | None | Any icon |
| Trailing Icon | Instance | None | Any icon |
| Clearable | Boolean | false | true, false |
| ReadOnly | Boolean | false | true, false |
| Required | Boolean | false | true, false |
| Max Length | Number | None | Any number |

#### Dimensions

| Size | Height | Padding | Font Size | Label Size |
|------|--------|---------|-----------|------------|
| Small | 32px | 8px 12px | 12px | 12px |
| Medium | 40px | 10px 12px | 14px | 14px |
| Large | 48px | 12px 16px | 16px | 16px |

#### States

| State | Background | Border | Text | Helper |
|-------|------------|--------|------|--------|
| Default | `surface/bg` | 1px `surface/muted` | `text/primary` | `text/muted` |
| Focus | `surface/bg` | 2px `accent/primary` | `text/primary` | `text/secondary` |
| Filled | `surface/bg` | 1px `surface/muted` | `text/primary` | `text/muted` |
| Error | `semantic/negative-surface` | 2px `semantic/negative` | `text/primary` | `semantic/negative` |
| Success | `semantic/positive-surface` | 2px `semantic/positive` | `text/primary` | `semantic/positive` |
| Disabled | `surface/muted` | 1px `surface/muted` | `text/disabled` | `text/disabled` |
| ReadOnly | `surface/subtle` | 1px `surface/muted` | `text/primary` | `text/muted` |

### 3.2 Secure Field

#### Anatomy

```
┌─────────────────────────────────────┐
│ Label (optional)                     │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••••              [Reveal]│ │
│ └─────────────────────────────────┘ │
│ Helper text (optional)              │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Focus, Error, Success, Disabled |
| Label | String | "Password" | Any text |
| Placeholder | String | "Enter password" | Any text |
| Value | String | "" | Any text |
| Masked | Boolean | true | true, false |
| Revealable | Boolean | true | true, false |
| Strength Indicator | Boolean | false | true, false |

#### Strength Indicator

```
Password: ••••••••••
Strength: [████████░░] Strong
```

| Strength | Color | Label |
|----------|-------|-------|
| Weak | `semantic/negative` | Weak |
| Fair | `semantic/warning` | Fair |
| Good | `semantic/info` | Good |
| Strong | `semantic/positive` | Strong |

### 3.3 Search Field

#### Anatomy

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ 🔍  Search...           [Clear] │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Focus, Loading |
| Placeholder | String | "Search" | Any text |
| Value | String | "" | Any text |
| Loading | Boolean | false | true, false |
| Clearable | Boolean | true | true, false |
| Auto Focus | Boolean | false | true, false |

#### States

| State | Background | Border | Icon |
|-------|------------|--------|------|
| Default | `surface/subtle` | None | `text/muted` |
| Focus | `surface/bg` | 2px `accent/primary` | `accent/primary` |
| Loading | `surface/subtle` | None | Spinner |

### 3.4 Email Field

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Default | Default, Focus, Filled, Error, Success |
| Label | String | "Email" | Any text |
| Placeholder | String | "sarah@example.com" | Any text |
| Auto Complete | String | "email" | Always "email" |
| Keyboard | String | "email" | Always "email" |

### 3.5 Phone Number

#### Anatomy

```
┌─────────────────────────────────────┐
│ Phone Number                         │
│ ┌─────────────────────────────────┐ │
│ │ +1  (555)  123-4567            │ │
│ └─────────────────────────────────┘ │
│ Helper: We'll send a verification    │
│ code to this number                   │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Format | Variant | US | US, International, E.164 |
| Country Code | String | "+1" | Any code |
| Placeholder | String | "(555) 123-4567" | Format-specific |

### 3.6 URL Field

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Prefix | String | "https://" | Any protocol |
| Placeholder | String | "www.advizmo.com" | Any URL |
| Keyboard | String | "url" | Always "url" |

### 3.7 Text Area

#### Anatomy

```
┌─────────────────────────────────────┐
│ Notes (optional)                     │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │ Enter your notes here...        │ │
│ │                                 │ │
│ │                                 │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│ 42 / 500 characters                 │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Rows | Number | 4 | 2-10 |
| Auto Resize | Boolean | true | true, false |
| Max Height | Number | 200px | Any height |
| Character Counter | Boolean | false | true, false |
| Max Length | Number | 500 | Any number |

#### Auto Resize Behaviour

```
Row 1: "Hello"
┌─────────────────────────────────────┐
│ Hello                               │
└─────────────────────────────────────┘

Row 2: "Hello\nWorld"
┌─────────────────────────────────────┐
│ Hello                               │
│ World                               │
└─────────────────────────────────────┘

Row 3: "Hello\nWorld\nThis is a long text that wraps"
┌─────────────────────────────────────┐
│ Hello                               │
│ World                               │
│ This is a long text that wraps      │
└─────────────────────────────────────┘
```

### 3.8 Read Only Field

```
┌─────────────────────────────────────┐
│ Account Number                       │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••4521        [Copy] [Reveal]│
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Rules:**
- Use `surface/subtle` background
- No focus state
- Include copy/reveal actions
- Clearly indicate non-editable

---

## 4. Financial Inputs

### 4.1 Currency Input

#### Anatomy

```
┌─────────────────────────────────────┐
│ Amount                               │
│ ┌─────────────────────────────────┐ │
│ │ $  12,450.00                   │ │
│ └─────────────────────────────────┘ │
│ Available: $45,230.00               │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Currency | Variant | USD | USD, EUR, GBP, JPY, CAD, AUD |
| Size | Variant | Large | Medium, Large, Hero |
| State | Variant | Default | Default, Focus, Error, Success, Disabled |
| Label | String | "Amount" | Any text |
| Show Currency Symbol | Boolean | true | true, false |
| Show Decimals | Boolean | true | true, false |
| Allow Negative | Boolean | false | true, false |
| Quick Actions | Boolean | false | true, false |
| AI Suggestion | Boolean | false | true, false |

#### Formatting Rules

| Rule | Example | Accepts |
|------|---------|---------|
| Auto-format while typing | "1234" → "$1,234" | "1234", "1234.56" |
| Accept cents | "$1,234.56" | "$1234.56", "1234.56" |
| Remove formatting on focus | "$1,234" → "1234" | Clean number for editing |
| Restore formatting on blur | "1234" → "$1,234" | Formatted display |
| Handle large numbers | "$1,234,567" | Comma grouping |
| Handle decimals | "$1,234.56" | Two decimal places |
| Handle zero | "$0.00" | Valid zero |
| Handle empty | "" | Clear field |

#### Quick Actions

```
Amount: $[input]
├── [$100]  [$500]  [$1,000]  [$5,000]
├── [All: $45,230.00]
└── [Custom]
```

**Rules:**
- Show common amounts as chips
- Show "All" for available balance
- Chips are tappable, populate field
- Custom clears chips, enables typing

#### AI Suggestion

```
Amount: $[input]
├── 💡 Based on your history: $2,500
├── 💡 Average monthly: $2,340
└── 💡 Last transfer: $2,500
```

### 4.2 Transfer Amount

```
┌─────────────────────────────────────┐
│ Transfer Amount                      │
│ ┌─────────────────────────────────┐ │
│ │ $  5,000.00                   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Available Balance ────────────┐  │
│ │ Chase Checking ••4521          │  │
│ │ $12,450.00 available           │  │
│ └────────────────────────────────┘  │
│                                     │
│ Quick Amounts:                      │
│ [$500] [$1,000] [$2,500] [All]     │
│                                     │
│ After transfer: $7,450.00           │
└─────────────────────────────────────┘
```

#### Validation Rules

| Rule | Condition | Message |
|------|-----------|---------|
| Sufficient funds | amount ≤ available | ✅ |
| Insufficient funds | amount > available | ❌ "Insufficient funds" |
| Minimum | amount ≥ minimum | ✅ |
| Below minimum | amount < minimum | ❌ "Minimum transfer is $1" |
| Maximum | amount ≤ maximum | ✅ |
| Above maximum | amount > maximum | ❌ "Maximum transfer is $100,000" |
| Zero | amount = 0 | ❌ "Amount must be greater than $0" |
| Negative | amount < 0 | ❌ "Amount cannot be negative" |

### 4.3 Investment Amount

```
┌─────────────────────────────────────┐
│ Investment Amount                    │
│ ┌─────────────────────────────────┐ │
│ │ $  10,000.00                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Suggested ────────────────────┐  │
│ │ 💡 $5,000 (moderate)           │  │
│ │ 💡 $10,000 (aggressive)        │  │
│ │ 💡 $25,000 (very aggressive)   │  │
│ └────────────────────────────────┘  │
│                                     │
│ ┌─ Allocation Preview ───────────┐  │
│ │ Stocks: 60%  │  $6,000         │  │
│ │ Bonds:  30%  │  $3,000         │  │
│ │ Cash:   10%  │  $1,000         │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 4.4 Goal Amount

```
┌─────────────────────────────────────┐
│ Goal Target                          │
│ ┌─────────────────────────────────┐ │
│ │ $  50,000.00                  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Monthly Contribution:               │
│ ┌─────────────────────────────────┐ │
│ │ $  500.00                     │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Timeline ─────────────────────┐  │
│ │ Estimated completion: 8 years  │  │
│ │ With 7% annual return          │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 4.5 Percentage Input

```
┌─────────────────────────────────────┐
│ Allocation Percentage                │
│ ┌─────────────────────────────────┐ │
│ │ 60  %                         │ │
│ └─────────────────────────────────┘ │
│ ████████████████████░░░░░░ 60%      │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Min | Number | 0 | Any number |
| Max | Number | 100 | Any number |
| Step | Number | 1 | 0.1, 1, 5, 10 |
| Show Slider | Boolean | false | true, false |
| Show Visual | Boolean | false | true, false |

### 4.6 Risk Level Picker

```
┌─────────────────────────────────────┐
│ Risk Tolerance                       │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ ●  Conservative                │ │
│ │   Low risk, stable returns     │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ○  Moderate                    │ │
│ │   Balanced risk and return     │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ○  Aggressive                  │ │
│ │   Higher risk, higher return   │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Expected Annual Return: 5-8%        │
│ Risk Level: ████░░░░░░ Low-Medium   │
└─────────────────────────────────────┘
```

### 4.7 Round-Up Input

```
┌─────────────────────────────────────┐
│ Round-Up Settings                    │
│                                     │
│ Enable Round-Ups: [Toggle: On]      │
│                                     │
│ Multiplier:                         │
│ ┌─────────────────────────────────┐ │
│ │ 2x                            │ │
│ └─────────────────────────────────┘ │
│ Every $1.45 purchase → $0.55 saved │
│                                     │
│ Monthly Estimate: $45-65            │
└─────────────────────────────────────┘
```

---

## 5. Selection Controls

### 5.1 Checkbox

#### Anatomy

```
┌─────────────────────────────────────┐
│ ┌──┐                                │
│ │✓ │ Label text here                 │
│ └──┘    Optional description        │
└─────────────────────────────────────┘
```

#### States

| State | Background | Border | Check | Label |
|-------|------------|--------|-------|-------|
| Unchecked | `surface/bg` | 2px `surface/muted` | None | `text/primary` |
| Checked | `accent/primary` | 2px `accent/primary` | White ✓ | `text/primary` |
| Indeterminate | `accent/primary` | 2px `accent/primary` | White — | `text/primary` |
| Disabled Unchecked | `surface/muted` | 2px `surface/muted` | None | `text/disabled` |
| Disabled Checked | `surface/subtle` | 2px `surface/muted` | Gray ✓ | `text/disabled` |
| Focus | `surface/bg` | 2px `accent/primary` ring | Varies | `text/primary` |

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Unchecked | Unchecked, Checked, Indeterminate |
| Label | String | "" | Any text |
| Description | String | "" | Any text |
| Required | Boolean | false | true, false |
| Disabled | Boolean | false | true, false |

#### Dimensions

| Size | Box Size | Border Radius | Icon Size |
|------|----------|---------------|-----------|
| Small | 16px | 4px | 10px |
| Medium | 20px | 4px | 12px |
| Large | 24px | 6px | 16px |

### 5.2 Radio

#### Anatomy

```
┌─────────────────────────────────────┐
│ (●) Option A                         │
│     Description for option A         │
│                                     │
│ (○) Option B                         │
│     Description for option B         │
└─────────────────────────────────────┘
```

#### States

| State | Background | Border | Dot | Label |
|-------|------------|--------|-----|-------|
| Unselected | `surface/bg` | 2px `surface/muted` | None | `text/primary` |
| Selected | `surface/bg` | 2px `accent/primary` | 10px `accent/primary` | `text/primary` |
| Disabled Unselected | `surface/muted` | 2px `surface/muted` | None | `text/disabled` |
| Disabled Selected | `surface/muted` | 2px `surface/muted` | 10px `surface/muted` | `text/disabled` |
| Focus | `surface/bg` | 2px `accent/primary` ring | Varies | `text/primary` |

### 5.3 Toggle

#### Anatomy

```
┌─────────────────────────────────────┐
│ Label text                    [○────]│
│ Description text                     │
└─────────────────────────────────────┘
```

#### States

| State | Track | Thumb | Label |
|-------|-------|-------|-------|
| Off | `surface/muted` | White | `text/primary` |
| On | `accent/primary` | White | `text/primary` |
| Disabled Off | `surface/muted` | `surface/bg` | `text/disabled` |
| Disabled On | `surface/subtle` | `surface/muted` | `text/disabled` |
| Loading | `accent/primary` @50% | Spinner | `text/primary` |

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| State | Variant | Off | Off, On, Loading |
| Label | String | "" | Any text |
| Description | String | "" | Any text |
| Disabled | Boolean | false | true, false |

#### Dimensions

| Size | Track Width | Track Height | Thumb Size |
|------|-------------|--------------|------------|
| Small | 36px | 20px | 16px |
| Medium | 44px | 24px | 20px |
| Large | 52px | 28px | 24px |

### 5.4 Segmented Control

#### Anatomy

```
┌─────────────────────────────────────┐
│ ┌─────────┬─────────┬─────────┐     │
│ │  Daily  │ Monthly │  Yearly │     │
│ └─────────┴─────────┴─────────┘     │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Size | Variant | Medium | Small, Medium, Large |
| Options | Array | [] | Any string array |
| Selected | Number | 0 | Index of selected |
| Disabled | Boolean | false | true, false |

#### Dimensions

| Size | Height | Font Size | Gap |
|------|--------|-----------|-----|
| Small | 28px | 12px | 2px |
| Medium | 32px | 14px | 2px |
| Large | 36px | 14px | 2px |

### 5.5 Choice Chips

#### Anatomy

```
┌─────────────────────────────────────┐
│ ┌─────────┐ ┌──────────┐ ┌───────┐ │
│ │ Option A│ │ Option B │ │Option C│ │
│ └─────────┘ └──────────┘ └───────┘ │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Selection | Variant | Single | Single, Multiple |
| Size | Variant | Medium | Small, Medium, Large |
| Options | Array | [] | Any string array |
| Selected | Array | [] | Indices of selected |
| Icons | Array | [] | Optional icons |

#### States

| State | Background | Border | Text |
|-------|------------|--------|------|
| Unselected | `surface/bg` | 1px `surface/muted` | `text/secondary` |
| Selected | `accent/primary-subtle` | 1px `accent/primary` | `accent/primary` |
| Disabled | `surface/muted` | 1px `surface/muted` | `text/disabled` |

### 5.6 Filter Chips

#### Anatomy

```
┌─────────────────────────────────────┐
│ ┌──────────────┐ ┌───────────────┐ │
│ │ Date Range ✕ │ │ Amount: $100+ ✕│ │
│ └──────────────┘ └───────────────┘ │
│ ┌──────────────┐ ┌───────────────┐ │
│ │ Category ✕   │ │ [+ Add Filter]│ │
│ └──────────────┘ └───────────────┘ │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Removable | Boolean | true | true, false |
| Active | Boolean | false | true, false |
| Count | Number | None | Number of active filters |
| Label | String | "Add Filter" | Any text |

### 5.7 Selection Cards

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ ●  Checking Account            │ │
│ │    Chase ••4521                 │ │
│ │    $12,450.00                   │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ○  Savings Account             │ │
│ │    Chase ••7890                 │ │
│ │    $45,230.00                   │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ○  Investment Account          │ │
│ │    Fidelity ••1234              │ │
│ │    $89,120.00                   │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 6. Pickers

### 6.1 Date Picker

#### iOS Native Style

```
┌─────────────────────────────────────┐
│ Select Date                          │
│─────────────────────────────────────│
│     June 2026                        │
│ Su Mo Tu We Th Fr Sa                 │
│              1  2  3  4  5  6        │
│  7  8  9 10 11 12 13               │
│ 14 15 16 17 18 19 20               │
│ 21 22 23 24 25 26 27               │
│ 28 ●29 30                           │
│─────────────────────────────────────│
│ [Cancel]              [Confirm]     │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Mode | Variant | Date | Date, DateRange, DateTime |
| Min Date | Date | None | Any date |
| Max Date | Date | None | Any date |
| Default Date | Date | Today | Any date |
| Locale | String | "en_US" | Any locale |

### 6.2 Month Picker

```
┌─────────────────────────────────────┐
│ Select Month                         │
│─────────────────────────────────────│
│ 2026                                │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ │ Jan │ │ Feb │ │ Mar │ │ Apr │   │
│ └─────┘ └─────┘ └─────┘ └─────┘   │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ │ May │ │ Jun │ │ Jul │ │ Aug │   │
│ └─────┘ └─────┘ └─────┘ └─────┘   │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐   │
│ │ Sep │ │ Oct │ │ Nov │ │ Dec │   │
│ └─────┘ └─────┘ └─────┘ └─────┘   │
│─────────────────────────────────────│
│ [Cancel]              [Confirm]     │
└─────────────────────────────────────┘
```

### 6.3 Year Picker

```
┌─────────────────────────────────────┐
│ Select Year                          │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ 2026                        ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│   2024                              │
│   2025                              │
│ ● 2026                              │
│   2027                              │
│   2028                              │
│                                     │
│─────────────────────────────────────│
│ [Cancel]              [Confirm]     │
└─────────────────────────────────────┘
```

### 6.4 Duration Picker

```
┌─────────────────────────────────────┐
│ Investment Duration                  │
│─────────────────────────────────────│
│ ┌───────────┐ ┌───────────┐        │
│ │     5     │ │  years    │        │
│ └───────────┘ └───────────┘        │
│                                     │
│ Quick Select:                       │
│ [1 year] [3 years] [5 years] [10]  │
│                                     │
│ Estimated Return: +42%              │
│─────────────────────────────────────│
│ [Cancel]              [Confirm]     │
└─────────────────────────────────────┘
```

### 6.5 Risk Picker

```
┌─────────────────────────────────────┐
│ Risk Tolerance                       │
│─────────────────────────────────────│
│                                     │
│ Low Risk        ████████░░  High    │
│                                     │
│ ● Conservative                      │
│   Lower potential returns           │
│   Lower potential losses            │
│                                     │
│ ○ Moderate                          │
│   Balanced risk and return          │
│                                     │
│ ○ Aggressive                        │
│   Higher potential returns          │
│   Higher potential losses           │
│                                     │
│─────────────────────────────────────│
│ [Cancel]              [Confirm]     │
└─────────────────────────────────────┘
```

### 6.6 Institution Picker

```
┌─────────────────────────────────────┐
│ Select Institution                   │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ 🔍  Search banks...            │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Popular Institutions:               │
│ ┌─────────────────────────────────┐ │
│ │ 🏦  Chase                       │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🏦  Bank of America             │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🏦  Wells Fargo                 │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🏦  Citibank                    │ │
│ └─────────────────────────────────┘ │
│                                     │
│─────────────────────────────────────│
│ [Cancel]              [Connect]     │
└─────────────────────────────────────┘
```

---

## 7. Search

### 7.1 Universal Search

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ 🔍  Search transactions...      │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Recent Searches:                     │
│ 🕐 Starbucks                       │
│ 🕐 Amazon                          │
│ 🕐 Uber                            │
│                                     │
│ Suggestions:                         │
│ 💡 Transactions over $100          │
│ 💡 This month                       │
│ 💡 Uncategorized                    │
└─────────────────────────────────────┘
```

### 7.2 Inline Search

```
┌─────────────────────────────────────┐
│ Transactions        [🔍] [Filter]   │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ 🔍  Search...              [✕] │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Results (3):                         │
│ Starbucks - $5.45                   │
│ Amazon - $24.99                      │
│ Uber - $15.00                        │
└─────────────────────────────────────┘
```

### 7.3 Expandable Search

```
Collapsed:
┌─────────────────────────────────────┐
│ Transactions        [🔍] [Filter]   │
└─────────────────────────────────────┘

Expanded:
┌─────────────────────────────────────┐
│ [✕] Search transactions...  [🔍]   │
│─────────────────────────────────────│
│ Results (3):                         │
│ Starbucks - $5.45                   │
│ Amazon - $24.99                      │
│ Uber - $15.00                        │
└─────────────────────────────────────┘
```

### 7.4 No Results

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ 🔍  xyz123                [✕]  │ │
│ └─────────────────────────────────┘ │
│                                     │
│           🔍                         │
│                                     │
│     No results found                 │
│                                     │
│ Try checking your spelling           │
│ or using different keywords          │
│                                     │
│ [Clear Search]                       │
└─────────────────────────────────────┘
```

### 7.5 Loading Results

```
┌─────────────────────────────────────┐
│ ┌─────────────────────────────────┐ │
│ │ 🔍  Starbucks...         [✕]  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ⏳ Searching...                     │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ ████████████████░░░░░░░░░░░░░  │ │
│ │ ████████████████░░░░░░░░░░░░░  │ │
│ │ ████████████████░░░░░░░░░░░░░  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 8. Filters

### 8.1 Filter Bar

```
┌─────────────────────────────────────┐
│ [Date Range] [Amount] [Category] [More ▼]│
│─────────────────────────────────────│
│ Active Filters: 3                    │
│ [Date: This Month ✕] [Amount: $100+ ✕] [Category: Food ✕] [Clear All] │
└─────────────────────────────────────┘
```

### 8.2 Date Filter

```
┌─────────────────────────────────────┐
│ Date Range                           │
│─────────────────────────────────────│
│ Quick Select:                        │
│ [Today] [This Week] [This Month]    │
│ [Last 3 Months] [This Year] [Custom]│
│                                     │
│ Custom Range:                        │
│ From: [Jun 1, 2026]                 │
│ To:   [Jun 29, 2026]               │
│                                     │
│─────────────────────────────────────│
│ [Clear]              [Apply]        │
└─────────────────────────────────────┘
```

### 8.3 Amount Filter

```
┌─────────────────────────────────────┐
│ Amount Range                         │
│─────────────────────────────────────│
│ Quick Select:                        │
│ [Under $10] [$10-$50] [$50-$100]   │
│ [$100-$500] [Over $500] [Custom]   │
│                                     │
│ Custom Range:                        │
│ Min: [$        ]                    │
│ Max: [$        ]                    │
│                                     │
│─────────────────────────────────────│
│ [Clear]              [Apply]        │
└─────────────────────────────────────┘
```

### 8.4 Category Filter

```
┌─────────────────────────────────────┐
│ Categories                           │
│─────────────────────────────────────│
│ [Select All] [Deselect All]         │
│                                     │
│ ☑ Food & Dining                     │
│ ☑ Transportation                    │
│ ☐ Shopping                          │
│ ☐ Entertainment                     │
│ ☐ Bills & Utilities                 │
│ ☐ Income                            │
│ ☐ Transfers                         │
│ ☐ Other                             │
│                                     │
│─────────────────────────────────────│
│ [Clear]              [Apply (5)]    │
└─────────────────────────────────────┘
```

### 8.5 Filter with Count

```
┌─────────────────────────────────────┐
│ Filters (3 Active)                   │
│─────────────────────────────────────│
│ Date Range                           │
│ This Month                    [▼]   │
│─────────────────────────────────────│
│ Minimum Amount                       │
│ $100                          [✕]   │
│─────────────────────────────────────│
│ Categories                           │
│ Food, Transportation          [▼]   │
│─────────────────────────────────────│
│ [Clear All Filters]                  │
│─────────────────────────────────────│
│ [Cancel]              [Apply (3)]   │
└─────────────────────────────────────┘
```

---

## 9. Authentication

### 9.1 PIN Input

```
┌─────────────────────────────────────┐
│                                     │
│     Enter PIN                        │
│                                     │
│         ● ● ● ○                     │
│                                     │
│     [1] [2] [3]                     │
│     [4] [5] [6]                     │
│     [7] [8] [9]                     │
│     [⌫] [0] [Face ID]             │
│                                     │
│     Forgot PIN?                     │
│                                     │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Length | Number | 4 | 4, 6 |
| Masked | Boolean | true | true, false |
| Biometric | Boolean | true | true, false |
| Auto Submit | Boolean | true | true, false |

### 9.2 OTP Input

```
┌─────────────────────────────────────┐
│                                     │
│     Verification Code                │
│                                     │
│     Enter the 6-digit code sent     │
│     to (555) 123-4567               │
│                                     │
│     [ ] [ ] [ ] - [ ] [ ] [ ]      │
│                                     │
│     Resend code in 0:45             │
│                                     │
│     [Resend Code]                    │
│                                     │
└─────────────────────────────────────┘
```

#### Properties

| Property | Type | Default | Options |
|----------|------|---------|---------|
| Length | Number | 6 | 4, 5, 6 |
| Separator | Boolean | true | true, false |
| Auto Focus | Boolean | true | true, false |
| Auto Submit | Boolean | true | true, false |
| Resend Timer | Number | 60 | Seconds |

### 9.3 Password Field

```
┌─────────────────────────────────────┐
│ Create Password                      │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••••              [Reveal]│ │
│ └─────────────────────────────────┘ │
│ Strength: [████████░░] Strong       │
│                                     │
│ Requirements:                        │
│ ✅ At least 8 characters            │
│ ✅ One uppercase letter             │
│ ✅ One number                       │
│ ○ One special character             │
│                                     │
│ Confirm Password                     │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••••              [Reveal]│ │
│ └─────────────────────────────────┘ │
│ ✅ Passwords match                  │
└─────────────────────────────────────┘
```

### 9.4 Biometric Prompt

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│           🔒                         │
│                                     │
│     Sign in with Face ID            │
│                                     │
│     Use Face ID to access           │
│     your Advizmo account            │
│                                     │
│     [Use Face ID]                   │
│     [Use PIN Instead]               │
│                                     │
└─────────────────────────────────────┘
```

### 9.5 Magic Link

```
┌─────────────────────────────────────┐
│                                     │
│     Check your email                 │
│                                     │
│     📧                              │
│                                     │
│     We sent a sign-in link to       │
│     sarah@example.com               │
│                                     │
│     [Open Email App]                 │
│                                     │
│     Didn't receive it?              │
│     [Resend Email] [Use Password]   │
│                                     │
└─────────────────────────────────────┘
```

### 9.6 Session Expired

```
┌─────────────────────────────────────┐
│                                     │
│     ⏰ Session Expired               │
│                                     │
│     Your session has expired.        │
│     Please sign in again.            │
│                                     │
│     [Sign In]                        │
│                                     │
└─────────────────────────────────────┘
```

---

## 10. Validation

### 10.1 Validation States

| State | Icon | Color | Border | Usage |
|-------|------|-------|--------|-------|
| Default | None | None | `surface/muted` | No interaction yet |
| Validating | Spinner | `accent/primary` | `accent/primary` | Checking |
| Success | ✓ | `semantic/positive` | `semantic/positive` | Valid input |
| Warning | ⚠ | `semantic/warning` | `semantic/warning` | Needs attention |
| Error | ✕ | `semantic/negative` | `semantic/negative` | Invalid input |
| Info | ℹ | `semantic/info` | `semantic/info` | Information |

### 10.2 Validation Messages

#### Success Messages

| Field | Message |
|-------|---------|
| Email | "Email address is valid" |
| Password | "Password meets all requirements" |
| Phone | "Phone number is valid" |
| Amount | "Amount is within limits" |
| Account | "Account is connected" |

#### Error Messages

| Field | Error | Message |
|-------|-------|---------|
| Email | Required | "Email is required" |
| Email | Invalid | "Please enter a valid email address" |
| Email | Duplicate | "This email is already in use" |
| Password | Required | "Password is required" |
| Password | Too short | "Password must be at least 8 characters" |
| Password | No uppercase | "Password must include an uppercase letter" |
| Password | No number | "Password must include a number" |
| Password | No special | "Password must include a special character" |
| Phone | Required | "Phone number is required" |
| Phone | Invalid | "Please enter a valid phone number" |
| Amount | Required | "Amount is required" |
| Amount | Invalid | "Please enter a valid amount" |
| Amount | Too low | "Amount must be at least $1" |
| Amount | Too high | "Amount cannot exceed $100,000" |
| Amount | Insufficient | "Insufficient funds in this account" |
| Account | Required | "Please select an account" |
| Account | Locked | "This account is temporarily locked" |
| Institution | Required | "Please select a bank" |
| Institution | Unavailable | "This institution is currently unavailable" |
| Date | Required | "Date is required" |
| Date | Invalid | "Please enter a valid date" |
| Date | Past | "Date cannot be in the past" |
| Date | Future | "Date cannot be more than 1 year in the future" |

### 10.3 Inline Validation Timing

| Trigger | Delay | Example |
|---------|-------|---------|
| On Blur | Immediate | Field loses focus |
| On Type | 500ms debounce | User stops typing |
| On Submit | Immediate | Form submitted |
| On Change | Immediate | Selection changed |

### 10.4 Server Validation

```
┌─────────────────────────────────────┐
│ Email                                │
│ ┌─────────────────────────────────┐ │
│ │ sarah@example.com              │ │
│ └─────────────────────────────────┘ │
│ ⏳ Checking availability...          │
└─────────────────────────────────────┘

After response:
┌─────────────────────────────────────┐
│ Email                                │
│ ┌─────────────────────────────────┐ │
│ │ sarah@example.com              │ │
│ └─────────────────────────────────┘ │
│ ✅ Email is available                │
└─────────────────────────────────────┘

Or:
┌─────────────────────────────────────┐
│ Email                                │
│ ┌─────────────────────────────────┐ │
│ │ sarah@advizmo.com              │ │
│ └─────────────────────────────────┘ │
│ ❌ This email is already registered  │
└─────────────────────────────────────┘
```

---

## 11. Helper Components

### 11.1 Helper Text

```
┌─────────────────────────────────────┐
│ Password                             │
│ ┌─────────────────────────────────┐ │
│ │ ••••••••••                      │ │
│ └─────────────────────────────────┘ │
│ Must be at least 8 characters       │
└─────────────────────────────────────┘
```

**Rules:**
- Always below input
- Use `text/muted` color
- 12px font size
- 4px gap from input

### 11.2 Tooltip

```
┌─────────────────────────────────────┐
│ APY (ℹ️)                             │
│ ┌─────────────────────────────────┐ │
│ │ 4.50%                          │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Tooltip ──────────────────────┐  │
│ │ Annual Percentage Yield (APY)  │  │
│ │ is the effective annual rate   │  │
│ │ of return on your savings.     │  │
│ │                                │  │
│ │ This includes compound         │  │
│ │ interest over one year.        │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 11.3 Expandable Information

```
┌─────────────────────────────────────┐
│ ℹ️ How is this calculated?     [▼]  │
└─────────────────────────────────────┘

Expanded:
┌─────────────────────────────────────┐
│ ℹ️ How is this calculated?     [▲]  │
│─────────────────────────────────────│
│ Your estimated return is based on:  │
│ • Your investment amount            │
│ • Historical market performance     │
│ • Your risk tolerance               │
│                                     │
│ Past performance does not guarantee │
│ future results.                     │
└─────────────────────────────────────┘
```

### 11.4 AI Suggestion

```
┌─────────────────────────────────────┐
│ Monthly Contribution                 │
│ ┌─────────────────────────────────┐ │
│ │ $  300.00                     │ │
│ └─────────────────────────────────┘ │
│ 💡 AI Suggestion: $500/month       │
│    to reach your goal 2 years      │
│    faster                          │
│    [Apply Suggestion]              │
└─────────────────────────────────────┘
```

### 11.5 Education Block

```
┌─────────────────────────────────────┐
│ 💡 What is dollar-cost averaging?   │
│─────────────────────────────────────│
│ Dollar-cost averaging is an         │
│ investment strategy where you       │
│ invest a fixed amount regularly,    │
│ regardless of market conditions.    │
│                                     │
│ This can help reduce the impact    │
│ of market volatility on your       │
│ investments over time.              │
│                                     │
│ [Learn More] [Got it]               │
└─────────────────────────────────────┘
```

---

## 12. Keyboard Behaviour

### 12.1 Keyboard Types

| Input | Keyboard | Return Key |
|-------|----------|------------|
| Text | Default | Return |
| Email | Email | Next |
| Phone | Phone Pad | Next |
| Number | Number Pad | Done |
| Decimal | Decimal Pad | Done |
| Password | Default (masked) | Next |
| URL | URL | Go |
| Search | Web Search | Search |

### 12.2 Return Key Actions

| Context | Return Key Label | Action |
|---------|------------------|--------|
| Single field | "Done" | Dismiss keyboard |
| Multi-field | "Next" | Focus next field |
| Last field | "Done" | Dismiss keyboard |
| Search | "Search" | Execute search |
| Form submit | "Go" | Submit form |

### 12.3 Accessory Toolbar

```
┌─────────────────────────────────────┐
│ [Previous]  [Next]  [Done]          │
└─────────────────────────────────────┘
```

**Rules:**
- Show above keyboard
- Previous/Next for field navigation
- Done to dismiss
- Only show when multiple fields exist

### 12.4 Keyboard Avoidance

```
Without keyboard:
┌─────────────────────────────────────┐
│ Header                              │
│─────────────────────────────────────│
│ Form content                        │
│                                     │
│ Field 3 (focus)                     │
│─────────────────────────────────────│
│ [Cancel]              [Continue]    │
└─────────────────────────────────────┘

With keyboard:
┌─────────────────────────────────────┐
│ Header                              │
│─────────────────────────────────────│
│ Field 3 (focus)                     │
│─────────────────────────────────────│
│ [Cancel]              [Continue]    │
│─────────────────────────────────────│
│ ┌─ Keyboard ─────────────────────┐  │
│ │                                │  │
│ └────────────────────────────────┘  │
└─────────────────────────────────────┘
```

**Rules:**
- Auto-scroll focused field into view
- Keep 16px above keyboard
- Animate smoothly
- Never hide behind keyboard

---

## 13. Focus Behaviour

### 13.1 Focus States

| State | Visual | Usage |
|-------|--------|-------|
| Default | 1px border `surface/muted` | No interaction |
| Focus | 2px border `accent/primary` + subtle shadow | Keyboard/tab focus |
| Active | 2px border `accent/primary` | Currently editing |
| Filled | 1px border `surface/muted` + value | Has value, not editing |
| Success | 2px border `semantic/positive` | Valid input |
| Warning | 2px border `semantic/warning` | Needs attention |
| Error | 2px border `semantic/negative` + red bg | Invalid input |
| Disabled | 1px border `surface/muted` + gray bg | Not editable |
| ReadOnly | 1px border `surface/muted` + subtle bg | Display only |

### 13.2 Focus Order

```
Tab order:
1. First field in first section
2. Second field in first section
3. ...
4. First field in second section
5. ...
6. Submit button
```

**Rules:**
- Follow visual reading order (top-to-bottom, left-to-right)
- Never skip fields
- Never trap focus
- Support Shift+Tab for reverse navigation

### 13.3 Focus Ring

```
┌─── Focus Ring ─────────────────────┐
│                                     │
│   ┌─────────────────────────────┐   │
│   │ Input field                 │   │
│   └─────────────────────────────┘   │
│                                     │
│   2px solid #3B82F6                 │
│   Offset: 2px                       │
│   Border radius: matches input      │
│                                     │
└─────────────────────────────────────┘
```

**Rules:**
- Never rely on color alone
- Always show visible focus indicator
- Use 2px solid ring
- 2px offset from element
- Match element border radius

---

## 14. Upload Components

### 14.1 Identity Upload

```
┌─────────────────────────────────────┐
│ Upload ID Document                   │
│─────────────────────────────────────│
│                                     │
│ ┌─────────────────────────────────┐ │
│ │                                 │ │
│ │     📷                          │ │
│ │                                 │ │
│ │  Tap to take a photo            │ │
│ │  or choose from library         │ │
│ │                                 │ │
│ │  Accepted: JPG, PNG, PDF        │ │
│ │  Max size: 10MB                 │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Front and back of your government- │
│ issued ID required                  │
│                                     │
│ [Take Photo] [Choose from Library]  │
└─────────────────────────────────────┘
```

### 14.2 Upload Progress

```
┌─────────────────────────────────────┐
│ Uploading...                         │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ 📄 ID_Front.jpg                 │ │
│ │ ████████████████░░░░░ 75%      │ │
│ │ 2.4 MB of 3.2 MB               │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [Cancel Upload]                      │
└─────────────────────────────────────┘
```

### 14.3 Upload Complete

```
┌─────────────────────────────────────┐
│ Uploaded Documents                   │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ ✅ ID_Front.jpg                 │ │
│ │    3.2 MB • Uploaded 2 min ago │ │
│ │    [View] [Replace] [Delete]    │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ✅ ID_Back.jpg                  │ │
│ │    2.8 MB • Uploaded 1 min ago │ │
│ │    [View] [Replace] [Delete]    │ │
│ └─────────────────────────────────┘ │
│                                     │
│ [+ Add Another Document]            │
└─────────────────────────────────────┘
```

### 14.4 Upload Error

```
┌─────────────────────────────────────┐
│ Upload Failed                        │
│─────────────────────────────────────│
│ ┌─────────────────────────────────┐ │
│ │ ❌ ID_Front.jpg                 │ │
│ │    File too large (15MB)        │ │
│ │    Maximum size: 10MB           │ │
│ │    [Retry] [Choose Different]   │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

---

## 15. Form Patterns

### 15.1 Single Field

```
┌─────────────────────────────────────┐
│ [Back]  Title               [Close] │
│─────────────────────────────────────│
│                                     │
│ Label                                │
│ ┌─────────────────────────────────┐ │
│ │ Value                          │ │
│ └─────────────────────────────────┘ │
│ Helper text                         │
│                                     │
├─────────────────────────────────────┤
│ [Cancel]              [Save]        │
└─────────────────────────────────────┘
```

### 15.2 Grouped Fields

```
┌─────────────────────────────────────┐
│ [Back]  Title               [Close] │
│─────────────────────────────────────│
│                                     │
│ ┌─ Personal Info ─────────────────┐ │
│ │ First Name                      │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ Sarah                       │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ Last Name                       │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ Smith                       │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─ Contact Info ──────────────────┐ │
│ │ Email                           │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ sarah@example.com           │ │ │
│ │ └─────────────────────────────┘ │ │
│ │                                 │ │
│ │ Phone                           │ │
│ │ ┌─────────────────────────────┐ │ │
│ │ │ (555) 123-4567              │ │ │
│ │ └─────────────────────────────┘ │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ [Cancel]              [Save]        │
└─────────────────────────────────────┘
```

### 15.3 Financial Form

```
┌─────────────────────────────────────┐
│ [Back]  Transfer             [Close] │
│─────────────────────────────────────│
│                                     │
│ Amount                               │
│ ┌─────────────────────────────────┐ │
│ │ $  5,000.00                   │ │
│ └─────────────────────────────────┘ │
│ Available: $12,450.00               │
│                                     │
│ Quick: [$500] [$1,000] [$2,500] [All]│
│                                     │
│ From                                  │
│ ┌─────────────────────────────────┐ │
│ │ 🏦 Chase Checking ••4521    ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ To                                    │
│ ┌─────────────────────────────────┐ │
│ │ 🏦 Savings ••7890           ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Date                                  │
│ ┌─────────────────────────────────┐ │
│ │ 📅 Today, Jun 29, 2026     ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ [Cancel]       [Review Transfer]    │
└─────────────────────────────────────┘
```

### 15.4 Multi-Step Form

```
Step 1:
┌─────────────────────────────────────┐
│ Step 1 of 3: Amount                  │
│ ●───────────────○───────────────○   │
│─────────────────────────────────────│
│                                     │
│ Amount                               │
│ ┌─────────────────────────────────┐ │
│ │ $  5,000.00                   │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│                     [Continue →]    │
└─────────────────────────────────────┘

Step 2:
┌─────────────────────────────────────┐
│ Step 2 of 3: Accounts               │
│ ○───────────────●───────────────○   │
│─────────────────────────────────────│
│                                     │
│ From                                  │
│ ┌─────────────────────────────────┐ │
│ │ 🏦 Chase Checking ••4521    ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
│ To                                    │
│ ┌─────────────────────────────────┐ │
│ │ 🏦 Savings ••7890           ▼  │ │
│ └─────────────────────────────────┘ │
│                                     │
├─────────────────────────────────────┤
│ [← Back]             [Continue →]   │
└─────────────────────────────────────┘

Step 3:
┌─────────────────────────────────────┐
│ Step 3 of 3: Review                 │
│ ○───────────────○───────────────●   │
│─────────────────────────────────────│
│                                     │
│ ┌─ Summary ──────────────────────┐  │
│ │ Amount: $5,000.00              │  │
│ │ From: Chase Checking ••4521    │  │
│ │ To: Savings ••7890             │  │
│ │ Date: Today                    │  │
│ └────────────────────────────────┘  │
│                                     │
├─────────────────────────────────────┤
│ [← Back]          [Confirm $5,000]  │
└─────────────────────────────────────┘
```

---

## 16. Accessibility

### 16.1 VoiceOver Support

Every input must include:

| Property | Description | Example |
|----------|-------------|---------|
| Label | What the input is | "Email address" |
| Value | Current value | "sarah@example.com" |
| Hint | How to interact | "Double tap to edit" |
| Trait | Input type | "Text field" |

#### Example VoiceOver Announcement

```
"Email address, text field, sarah@example.com, 
double tap to edit"
```

#### Error State Announcement

```
"Email address, invalid entry, 
please enter a valid email address, 
double tap to edit"
```

### 16.2 Dynamic Type

All form elements must scale with iOS Dynamic Type:

| Size | Label | Input | Helper |
|------|-------|-------|--------|
| xSmall | 11px | 13px | 11px |
| Small | 12px | 14px | 12px |
| Medium (Default) | 14px | 16px | 12px |
| Large | 16px | 18px | 14px |
| xLarge | 18px | 20px | 16px |
| xxLarge | 20px | 22px | 18px |
| xxxLarge | 22px | 24px | 20px |

**Rules:**
- Test at all sizes
- Never truncate important text
- Allow wrapping for labels and helpers
- Increase touch targets proportionally

### 16.3 Switch Control

All interactive elements must support Switch Control:

- Minimum 44px × 44px touch target
- Clear focus indicator
- Logical navigation order
- No time-dependent interactions

### 16.4 Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Next field |
| Shift+Tab | Previous field |
| Enter | Submit/Next |
| Space | Toggle checkbox/radio |
| Arrow keys | Navigate options |
| Escape | Dismiss picker/modal |

### 16.5 High Contrast

All form elements must meet WCAG AA contrast:

| Element | Minimum Ratio |
|---------|---------------|
| Label text | 4.5:1 |
| Input text | 4.5:1 |
| Placeholder text | 4.5:1 |
| Helper text | 4.5:1 |
| Error text | 4.5:1 |
| Border (non-text) | 3:1 |
| Focus ring | 3:1 |

### 16.6 Reduced Motion

Respect `prefers-reduced-motion`:

- Disable animations
- Instant state changes
- No auto-advancing carousels
- Static focus indicators

### 16.7 Error Announcements

Errors must be:

1. **Visible** — Red text below input
2. **Audible** — VoiceOver announces error
3. **Accessible** — `aria-live` region for dynamic errors
4. **Persistent** — Stay visible until fixed

```
┌─────────────────────────────────────┐
│ Email                                │
│ ┌─────────────────────────────────┐ │
│ │ sarah@                          │ │
│ └─────────────────────────────────┘ │
│ ❌ Please enter a valid email       │
│    address                          │
└─────────────────────────────────────┘

VoiceOver: "Email, invalid entry, 
please enter a valid email address"
```

---

## 17. Documentation

### 17.1 Component Documentation Template

```markdown
# [Component Name]

## Purpose
Brief description of what this component does.

## Usage
When and where to use this component.

## Variants
List of all variants with descriptions.

## Properties
Table of all properties with types, defaults, and options.

## States
All possible states with visual descriptions.

## Accessibility
VoiceOver, keyboard, and contrast requirements.

## Auto Layout
How Auto Layout is configured.

## Engineering Notes
SwiftUI, React, and implementation details.

## Variables Used
List of design tokens used.

## Examples
Visual examples of the component in use.

## Do
Things to do with this component.

## Don't
Things to avoid with this component.

## Related Components
Links to related components.
```

### 17.2 Examples

#### Text Field — Do

```markdown
✅ Do:
- Use clear, descriptive labels
- Place labels above inputs
- Show helper text for complex fields
- Validate inline
- Support auto-fill
- Use appropriate keyboard type

❌ Don't:
- Use placeholder as label
- Hide labels on scroll
- Show errors immediately on type
- Use custom keyboards
- Disable auto-fill
```

#### Financial Input — Do

```markdown
✅ Do:
- Show available balance
- Provide quick amount options
- Format currency automatically
- Show impact of amount changes
- Support large numbers
- Validate in real-time

❌ Don't:
- Require manual formatting
- Hide balance information
- Limit to small amounts
- Show errors on every keystroke
- Use text input for currency
```

---

## Auto Layout Rules

### Every Input Component Must

| Rule | Description |
|------|-------------|
| Use Auto Layout | All components use Auto Layout |
| Use Hug Contents | Compact components hug their content |
| Use Fill Container | Full-width components fill available space |
| Support Dynamic Height | Text areas resize based on content |
| Support Localization | Accept longer text strings |
| Support RTL | Mirror layout for RTL languages |
| Support Responsive Width | Adapt to different screen sizes |
| Use Component Properties | Expose customization via properties |
| Use Variables | Reference design tokens |
| Avoid Fixed Widths | Never use fixed widths unless required |

### Auto Layout Configuration

```
Input Container:
├── Direction: Vertical
├── Gap: 4px (label to input), 4px (input to helper)
├── Padding: 0
└── Primary Axis: Hug Contents
    Cross Axis: Fill Container

Input Field:
├── Direction: Horizontal
├── Gap: 8px (icon to text)
├── Padding: 10px 12px
├── Primary Axis: Fill Container
└── Cross Axis: Hug Contents
```

---

## Engineering

### SwiftUI Mapping

```swift
// Text Field
TextField("Email", text: $email)
    .textFieldStyle(.roundedBorder)
    .textContentType(.emailAddress)
    .autocorrectionDisabled()
    .accessibilityLabel("Email address")

// Secure Field
SecureField("Password", text: $password)
    .textFieldStyle(.roundedBorder)
    .textContentType(.password)
    .accessibilityLabel("Password")

// Text Editor
TextEditor(text: $notes)
    .frame(minHeight: 100)
    .accessibilityLabel("Notes")
```

### React Mapping

```jsx
// Text Field
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  autoComplete="email"
  aria-label="Email address"
/>

// Secure Field
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="current-password"
  aria-label="Password"
/>

// Text Area
<textarea
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  rows={4}
  aria-label="Notes"
/>
```

### CSS Variables

```css
:root {
  --input-bg: var(--surface-bg);
  --input-border: var(--surface-muted);
  --input-border-focus: var(--accent-primary);
  --input-border-error: var(--semantic-negative);
  --input-border-success: var(--semantic-positive);
  --input-text: var(--text-primary);
  --input-placeholder: var(--text-muted);
  --input-helper: var(--text-muted);
  --input-error: var(--semantic-negative);
  --input-success: var(--semantic-positive);
}
```

### Tailwind Mapping

```jsx
// Text Field
<input
  className="
    w-full px-3 py-2
    bg-white border rounded-lg
    border-gray-200
    focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20
    text-gray-900 placeholder-gray-400
    disabled:bg-gray-100 disabled:text-gray-400
  "
/>

// Error State
<input
  className="
    w-full px-3 py-2
    bg-red-50 border rounded-lg
    border-red-500
    focus:border-red-600 focus:ring-2 focus:ring-red-600/20
    text-gray-900
  "
/>
```

---

## Final Validation

### Review Checklist

Every form component must pass:

| Category | Check | Status |
|----------|-------|--------|
| **Philosophy** | | |
| Progressive disclosure | Shows only what's needed | ☐ |
| Single responsibility | One job per field | ☐ |
| Logical grouping | Related fields grouped | ☐ |
| Minimal typing | Reduced keystrokes | ☐ |
| Auto fill | System auto-fill supported | ☐ |
| Smart defaults | Most common value pre-selected | ☐ |
| Inline validation | Validates as user types | ☐ |
| Real time feedback | Shows impact immediately | ☐ |
| **Layout** | | |
| Proper spacing | Consistent 4px/8px grid | ☐ |
| Sticky actions | CTA always accessible | ☐ |
| Keyboard safe | No content hidden behind keyboard | ☐ |
| Responsive | Works on all screen sizes | ☐ |
| **Components** | | |
| All variants documented | Every variant has docs | ☐ |
| All states documented | Every state has visual | ☐ |
| All properties documented | Every property has type | ☐ |
| **Accessibility** | | |
| VoiceOver labels | All inputs labeled | ☐ |
| VoiceOver hints | All inputs have hints | ☐ |
| Keyboard navigation | Full keyboard support | ☐ |
| Focus states | Visible focus indicator | ☐ |
| Contrast ratios | WCAG AA compliant | ☐ |
| Dynamic Type | Scales with system text size | ☐ |
| **Engineering** | | |
| Auto Layout | All components use Auto Layout | ☐ |
| Variables | All tokens referenced | ☐ |
| Component Properties | All customizations exposed | ☐ |
| Responsive | Adapts to container | ☐ |
| Localization | Supports all languages | ☐ |
| RTL | Mirrors for RTL | ☐ |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 2026 | Ishasahu12 | Initial draft |

---

**End of Chapter 8**
