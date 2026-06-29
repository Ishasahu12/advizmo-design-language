# Advizmo Accessibility Standards

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1, Primitive Components v1, Core Product Components v1, Motion & Micro-interaction System v1**

---

## Table of Contents

1. [Accessibility Principles](#01-accessibility-principles)
2. [Color & Contrast](#02-color--contrast)
3. [Typography](#03-typography)
4. [Touch Targets](#04-touch-targets)
5. [Focus Management](#05-focus-management)
6. [Screen Reader Support](#06-screen-reader-support)
7. [Dynamic Type](#07-dynamic-type)
8. [Reduced Motion](#08-reduced-motion)
9. [Keyboard Navigation](#09-keyboard-navigation)
10. [Gestures](#10-gestures)
11. [Forms](#11-forms)
12. [Charts & Data Visualization](#12-charts--data-visualization)
13. [AI Accessibility](#13-ai-accessibility)
14. [Financial Accessibility](#14-financial-accessibility)
15. [Error Recovery](#15-error-recovery)
16. [Localization](#16-localization)
17. [Accessibility Testing](#17-accessibility-testing)
18. [Engineering](#18-engineering)
19. [Documentation](#19-documentation)

---

## 01 Accessibility Principles

### Perceivable

Information and user interface components must be presentable to users in ways they can perceive. This means content cannot be invisible to all of a user's senses.

**Application in Advizmo:**
- All text has sufficient contrast against its background
- All interactive elements have visible state changes
- All financial data is available in text form, not just color or shape
- All charts provide text summaries
- All status indicators use multiple cues (color + icon + label)

### Operable

User interface components and navigation must be operable. All functionality must be available through multiple input methods.

**Application in Advizmo:**
- Every action achievable via tap, keyboard, and voice
- No time-dependent interactions without alternatives
- No content flashes more than three times per second
- All touch targets meet minimum size requirements
- All gestures have alternatives

### Understandable

Information and the operation of the user interface must be understandable. Content and controls must be clear and predictable.

**Application in Advizmo:**
- All text is written in plain language
- All financial terms are explained
- All errors include clear explanations and recovery steps
- All navigation is consistent across screens
- All interactions behave predictably

### Robust

Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies. Semantic markup ensures compatibility.

**Application in Advizmo:**
- All components use semantic HTML/native elements
- All custom components include proper ARIA attributes
- All interactive elements are exposed to assistive technologies
- All state changes are announced to screen readers

### Consistency

Navigation, interaction patterns, and component behavior are consistent across the application. Users should not have to relearn how to use similar components.

**Application in Advizmo:**
- Same component behaves same way everywhere
- Same gesture triggers same action everywhere
- Same icon means same thing everywhere
- Same color means same thing everywhere
- Navigation patterns are consistent across sections

### Predictability

Interface behavior is predictable. Users should be able to anticipate what will happen before they perform an action.

**Application in Advizmo:**
- Buttons look like buttons
- Links look like links
- Destructive actions require confirmation
- State changes are visible and clear
- Loading states appear before long operations

### Error Prevention

Design should prevent errors before they occur. When errors are unavoidable, provide clear recovery paths.

**Application in Advizmo:**
- Destructive actions require confirmation
- Financial transactions show summary before submission
- Forms validate inline before submission
- Undo is available for recent actions
- Auto-save prevents data loss

### Progressive Disclosure

Show only what is necessary for the current task. Reveal complexity gradually as users need it.

**Application in Advizmo:**
- Dashboard shows summary, detail on tap
- Advanced options are hidden by default
- Settings are organized by category
- Help is available but not forced

### Cognitive Load Reduction

Reduce the amount of mental effort required to use the interface. Use familiar patterns, clear labels, and sensible defaults.

**Application in Advizmo:**
- Financial data is organized hierarchically
- Complex concepts are broken into digestible chunks
- Defaults are sensible and can be customized
- Familiar iOS patterns are used throughout
- Amounts are formatted consistently

---

## 02 Color & Contrast

### Contrast Requirements

| Element | Minimum (AA) | Preferred (AAA) | Measurement |
|---------|--------------|-----------------|-------------|
| Normal text (< 24px) | 4.5:1 | 7:1 | Text color vs background |
| Large text (≥ 24px bold or ≥ 34px) | 3:1 | 4.5:1 | Text color vs background |
| Interactive controls | 3:1 | 4.5:1 | Control color vs background |
| Icons | 3:1 | 4.5:1 | Icon color vs background |
| Focus rings | 3:1 | 4.5:1 | Ring color vs background |
| Chart elements | 3:1 | 4.5:1 | Element color vs background |
| Borders | 3:1 | 4.5:1 | Border color vs background |

### Color-Blind Safe Palette

| Meaning | Primary | Alternative Cue |
|---------|---------|-----------------|
| Positive/Success | #10B981 (Green) | Checkmark icon, "Success" label |
| Negative/Error | #EF4444 (Red) | X icon, "Error" label |
| Warning | #F59E0B (Orange) | Warning icon, "Warning" label |
| Information | #3B82F6 (Blue) | Info icon, "Info" label |
| AI | #8B5CF6 (Purple) | Sparkle icon, "AI" label |
| Automation | #06B6D4 (Teal) | Gear icon, "Auto" label |

### Financial State Communication

Every financial state must use multiple indicators, never color alone:

| State | Color | Icon | Label | Pattern |
|-------|-------|------|-------|---------|
| Positive | Green | ↑ arrow | "Gain" | Solid fill |
| Negative | Red | ↓ arrow | "Loss" | Striped fill |
| Warning | Orange | ⚠ | "Warning" | Dotted fill |
| AI | Purple | ✦ | "AI Insight" | Solid fill |
| Automation | Teal | ⚙ | "Automated" | Solid fill |
| Risk Low | Green | ✓ | "Low Risk" | Solid fill |
| Risk Medium | Orange | — | "Medium Risk" | Striped fill |
| Risk High | Red | ⚠ | "High Risk" | Striped fill |
| Portfolio Up | Green | ↑ | "Growing" | Solid fill |
| Portfolio Down | Red | ↓ | "Declining" | Solid fill |
| Tax Saving | Blue | $ | "Tax Saving" | Solid fill |
| Bill Paid | Green | ✓ | "Paid" | Solid fill |
| Bill Due | Orange | ! | "Due Soon" | Dotted fill |
| Bill Overdue | Red | ⚠ | "Overdue" | Striped fill |

### Never Rely on Color Alone

Every instance where color conveys meaning must also include:

1. **Icon** — Visual indicator that does not depend on color
2. **Label** — Text that explicitly states the meaning
3. **Shape** — Different shape for different states (where applicable)
4. **Pattern** — Different fill pattern for different states (charts)

### Color Contrast Testing

Test all color combinations against WCAG requirements:

```
Normal text on background:     4.5:1 minimum
Large text on background:      3:1 minimum
Interactive on background:     3:1 minimum
Focus ring on background:      3:1 minimum
Error text on background:      4.5:1 minimum
Success text on background:    4.5:1 minimum
```

---

## 03 Typography

### Dynamic Type Support

All text in Advizmo must support Apple's Dynamic Type system. Text must scale from the smallest to the largest accessibility size without clipping, overlapping, or becoming unreadable.

### Minimum Text Sizes

| Context | Minimum Size | Preferred Size |
|---------|--------------|----------------|
| Body text | 16px | 16-18px |
| Captions | 12px | 12-14px |
| Labels | 12px | 12-14px |
| Amounts (small) | 14px | 14-16px |
| Amounts (medium) | 20px | 20-24px |
| Amounts (large) | 28px | 28-32px |
| Headings | 20px | 20-32px |

### Line Height

| Text Size | Minimum Line Height | Preferred Line Height |
|-----------|--------------------|-----------------------|
| < 16px | 1.3 | 1.4 |
| 16-20px | 1.4 | 1.5 |
| 20-28px | 1.3 | 1.4 |
| > 28px | 1.2 | 1.3 |

### Paragraph Spacing

| Context | Minimum Spacing |
|---------|----------------|
| Between paragraphs | 0.5 × font size |
| Between heading and body | 0.75 × font size |
| Between sections | 1.5 × font size |

### Letter Spacing

| Text Style | Letter Spacing |
|------------|---------------|
| Headings | -0.02em (tighter) |
| Body | 0em (normal) |
| Captions | 0.01em (slightly wider) |
| Labels | 0.02em (wider) |
| Amounts | -0.01em (slightly tighter) |

### Typography Rules

**Do:**
- Use Inter font family consistently
- Maintain clear hierarchy with size, weight, and color
- Use Dynamic Type for all text
- Ensure sufficient contrast for all text
- Allow text to wrap naturally
- Support multiple lines where needed

**Don't:**
- Use all caps for paragraphs
- Use all caps for more than a few words
- Use low contrast text
- Use tiny labels (< 12px)
- Compress line heights below minimums
- Fix text containers to exact heights
- Clip text at Dynamic Type sizes

---

## 04 Touch Targets

### Minimum Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| Minimum | 44 × 44 pt | iOS minimum |
| Preferred | 48 × 48 pt | Android minimum, preferred for all |
| Large | 56 × 56 pt | Primary actions, frequently used |

### Touch Target Requirements

| Component | Minimum Size | Spacing |
|-----------|--------------|---------|
| Buttons | 44 × 44 pt | 8pt between targets |
| Icons (standalone) | 44 × 44 pt | 8pt between targets |
| Navigation items | 44 × 44 pt | 8pt between items |
| Tab bar items | 48 × 48 pt | 0pt (touch area fills tab) |
| Cards (tap target) | Full card | 0pt (entire card is target) |
| Charts (data points) | 44 × 44 pt | 8pt between points |
| Sliders | 44 × 44 pt (thumb) | 0pt (track is target) |
| Switches | 51 × 31 pt | 8pt minimum padding |
| Checkboxes | 44 × 44 pt (including label) | 8pt between options |
| Radio buttons | 44 × 44 pt (including label) | 8pt between options |
| Segment controls | 44 × 44 pt (each segment) | 0pt (segments are adjacent) |
| Swipe actions | Full row height | N/A |

### Touch Target Rules

1. **Never reduce touch targets below 44 × 44 pt**
2. **Add invisible padding** if visual element is smaller than 44pt
3. **Ensure 8pt spacing** between adjacent touch targets
4. **Expand tap area** for small visual elements (icons, links in text)
5. **Test with finger**, not just mouse/trackpad

---

## 05 Focus Management

### Visible Focus Ring

Every interactive element must display a visible focus indicator when focused via keyboard or assistive technology.

| Property | Value |
|----------|-------|
| Width | 2px |
| Color | brand-primary (blue) |
| Offset | 2px |
| Radius | Matches element radius |
| Style | Solid |

### Focus Order

Focus must follow a logical, predictable order:

1. **Top to bottom** — Content order follows visual reading order
2. **Left to right** — Within rows, focus follows reading direction
3. **Modal trap** — When modal opens, focus moves to modal
4. **Return** — When modal closes, focus returns to trigger element

### Focus Management Rules

| Scenario | Behavior |
|----------|----------|
| Page load | Focus on first interactive element or main content |
| Modal open | Focus moves to modal (first focusable element) |
| Modal close | Focus returns to trigger element |
| Sheet open | Focus moves to sheet (first focusable element) |
| Sheet close | Focus returns to trigger element |
| Dropdown open | Focus moves to dropdown (first item) |
| Dropdown close | Focus returns to trigger button |
| Tab change | Focus moves to new tab panel content |
| Error | Focus moves to first error or error summary |
| Success | Focus remains on action, announcement made |

### Never Trap Focus

- Focus must always be able to escape any component
- Escape key must dismiss overlays and return focus
- Tab key must not be blocked
- Focus must not be set to elements that are not visible

### Restore Focus After Dismissal

Every component that moves focus must restore it:

```
1. User activates button
2. Focus moves to opened sheet
3. User dismisses sheet (Escape or swipe)
4. Focus returns to button
```

---

## 06 Screen Reader Support

### VoiceOver (iOS)

Every component must support VoiceOver with:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| Label | What the element is | "Chase Checking Account" |
| Hint | What happens when activated | "Double tap to view account details" |
| Trait | What kind of element it is | Button, StaticText, Adjustable |
| Value | Current state | "Balance: $12,345.67" |

### VoiceOver Labels

| Component | Label Format |
|-----------|-------------|
| Button | "[Action] [Object]" — "Pay Bill" |
| Link | "[Destination]" — "View Statement" |
| Icon (standalone) | "[Meaning]" — "Delete" |
| Icon (with text) | Text only (icon is decorative) |
| Image | "[Description]" — "Chase bank logo" |
| Amount | "[Label]: [Amount]" — "Balance: $12,345.67" |
| Switch | "[Setting]: [State]" — "Dark Mode: Off" |
| Checkbox | "[Option]: [State]" — "Include savings: Checked" |

### VoiceOver Hints

| Component | Hint Format |
|-----------|-------------|
| Button | "Double tap to [action]" |
| Link | "Double tap to open [destination]" |
| Adjustable | "Swipe up or down to adjust" |
| Toggle | "Double tap to toggle" |

### VoiceOver Traits

| Element | Trait |
|---------|-------|
| Button | `.button` |
| Link | `.link` |
| Header | `.header` |
| Static text | `.staticText` |
| Image | `.image` |
| Adjustable | `.adjustable` |
| Selected | `.selected` |
| Disabled | `.notEnabled` |

### Live Regions (Web)

For dynamic content updates, use ARIA live regions:

| Update Type | aria-live | Usage |
|-------------|-----------|-------|
| Toast notification | `polite` | Non-urgent updates |
| Error message | `assertive` | Urgent errors |
| Progress update | `polite` | Loading progress |
| Balance update | `polite` | Data changes |
| Status change | `polite` | Connection status |

### Screen Reader Announcements

| Event | Announcement |
|-------|-------------|
| Action success | "[Action] completed" |
| Action failure | "[Action] failed. [Reason]" |
| Data loaded | "[Content] loaded" |
| Balance update | "Balance updated to [amount]" |
| Connection lost | "Connection lost" |
| Connection restored | "Connection restored" |
| Sync complete | "Sync complete" |

### Reading Order

Content must be read in logical order:

1. Screen title
2. Main content (in visual order)
3. Related actions
4. Supplementary information

### Hidden Decorative Elements

Elements that are purely decorative must be hidden from screen readers:

| Element | Handling |
|---------|----------|
| Decorative icons | `aria-hidden="true"` or `.accessibilityHidden()` |
| Background images | `aria-hidden="true"` |
| Decorative borders | Hidden |
| Spacers | Hidden |
| Icons paired with text | Hidden (text provides label) |

---

## 07 Dynamic Type

### Scaling Behavior

All text must scale with Apple's Dynamic Type system from the smallest to the largest accessibility size.

### Dynamic Type Categories

| Category | Scale Factor | Usage |
|----------|-------------|-------|
| xSmall | 0.85 | — |
| Small | 0.9 | — |
| Medium | 1.0 (default) | — |
| Large | 1.15 | — |
| xLarge | 1.3 | — |
| xxLarge | 1.5 | — |
| xxxLarge | 1.75 | — |
| Accessibility 1 | 2.0 | — |
| Accessibility 2 | 2.5 | — |
| Accessibility 3 | 3.0 | — |
| Accessibility 4 | 3.5 | — |
| Accessibility 5 | 4.0 | — |

### Layout Adaptation

| Screen Size | Behavior |
|-------------|----------|
| Cards | Height grows with text, width remains fixed |
| Lists | Row height grows with text |
| Navigation | Title truncates if too long |
| Tabs | Tab width grows or scrolls horizontally |
| Inputs | Height grows with text |
| Buttons | Height grows, width can grow or wrap |

### Truncation Rules

| Context | Truncation | Alternative |
|---------|------------|-------------|
| Navigation title | Truncate with "…" | Full title in VoiceOver |
| Card title | Truncate with "…" | Full title in VoiceOver |
| List item title | Truncate with "…" | Full title in VoiceOver |
| List item subtitle | Truncate with "…" | Full subtitle in VoiceOver |
| Button text | Wrap to second line | — |
| Amount | Never truncate | Use abbreviated format |
| Tab label | Truncate with "…" | Full label in VoiceOver |

### Never Clip Important Content

- Text must never be cut off at large Dynamic Type sizes
- Content must never overflow its container
- Scrolling must be available when content exceeds screen
- Minimum height must accommodate largest text size

---

## 08 Reduced Motion

### System Settings

| Setting | Behavior |
|---------|----------|
| `prefers-reduced-motion: reduce` | All non-essential animations disabled |
| `prefers-reduced-transparency: reduce` | Transparent elements become opaque |

### Animations to Remove

| Animation | Reduced Motion Alternative |
|-----------|---------------------------|
| Page transitions | Instant screen swap |
| Sheet presentation | Instant appear/disappear |
| Modal presentation | Instant appear/disappear |
| Fade in/out | Instant show/hide |
| Slide in/out | Instant position change |
| Scale in/out | Instant size change |
| Toast enter/exit | Instant appear/disappear |
| Skeleton shimmer | Static placeholder |
| Spinner rotation | Static spinner (no animation) |
| Progress bar fill | Static fill at current value |
| Number count | Instant final value |
| Chart animation | Static final state |
| Button press scale | Color change instead |
| Card hover lift | Border change instead |

### Animations to Keep

Some animations should remain even with reduced motion, as they are functional:

| Animation | Reason |
|-----------|--------|
| Focus ring | Accessibility requirement |
| Loading indicator | Still needed (static, not spinning) |
| Progress bar | Static fill still shows progress |
| Skeleton | Static placeholder still indicates loading |

### Implementation

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```swift
// SwiftUI
@Environment(\.accessibilityReduceMotion) var reduceMotion

if reduceMotion {
    // Instant state change
} else {
    withAnimation { // Animated state change }
}
```

---

## 09 Keyboard Navigation

### Tab Order

Tab must follow logical reading order:

1. Skip links (if present)
2. Main content area
3. Navigation elements
4. Footer elements

### Focus Indicators

| Property | Value |
|----------|-------|
| Width | 2px (3px for high contrast) |
| Color | brand-primary (blue) |
| Offset | 2px |
| Style | Solid |
| Radius | Matches element |

### Key Bindings

| Key | Action |
|-----|--------|
| Tab | Move to next interactive element |
| Shift + Tab | Move to previous interactive element |
| Enter | Activate button/link, submit form |
| Space | Activate button, toggle checkbox/switch |
| Arrow keys | Navigate within composite widgets |
| Escape | Dismiss overlay, close dropdown, cancel action |
| Home | Move to first item in list/grid |
| End | Move to last item in list/grid |
| Page Up/Down | Scroll by page |

### Component-Specific Keyboard Behavior

#### Menus
| Key | Action |
|-----|--------|
| Arrow Down | Move to next item |
| Arrow Up | Move to previous item |
| Enter | Select item, close menu |
| Escape | Close menu without selection |
| Home | Move to first item |
| End | Move to last item |

#### Dialogs
| Key | Action |
|-----|--------|
| Tab | Cycle through focusable elements within dialog |
| Shift + Tab | Cycle backwards through focusable elements |
| Escape | Close dialog, return focus to trigger |
| Enter | Activate focused button |

#### Bottom Sheets
| Key | Action |
|-----|--------|
| Tab | Cycle through focusable elements within sheet |
| Shift + Tab | Cycle backwards through focusable elements |
| Escape | Close sheet, return focus to trigger |

#### Search
| Key | Action |
|-----|--------|
| Type | Enter search text |
| Arrow Down | Move to first result |
| Arrow Up | Move to last result |
| Enter | Select focused result |
| Escape | Close search, clear input |

#### Tables
| Key | Action |
|-----|--------|
| Arrow Down | Move to next row |
| Arrow Up | Move to previous row |
| Arrow Right | Move to next column |
| Arrow Left | Move to previous column |
| Home | Move to first cell in row |
| End | Move to last cell in row |
| Enter | Activate cell action |

#### Charts
| Key | Action |
|-----|--------|
| Arrow Right | Move to next data point |
| Arrow Left | Move to previous data point |
| Home | Move to first data point |
| End | Move to last data point |
| Enter | Select data point, show details |
| Escape | Deselect data point |

---

## 10 Gestures

### Every Gesture Must Have an Alternative

| Gesture | Alternative |
|---------|-------------|
| Swipe left | Button action |
| Swipe right | Button action |
| Long press | Button action |
| Drag and drop | Button action (move up/down) |
| Pinch to zoom | Button (+ / -) |
| Pull to refresh | Refresh button |
| Context menu | Button action |
| Double tap | Button action |

### Gesture Rules

1. **Never require gestures** for essential tasks
2. **Always provide button alternatives** for every gesture
3. **Keep gestures simple** — prefer tap over complex gestures
4. **Avoid multi-finger gestures** — they are difficult for many users
5. **Test with assistive devices** — ensure VoiceOver can perform all actions

---

## 11 Forms

### Every Input Must Support

| Attribute | Purpose |
|-----------|---------|
| Accessible Label | What the input is for |
| Accessible Hint | How to use the input |
| Accessible Error | What is wrong and how to fix it |
| Accessible Success | Confirmation that input is valid |
| Required Indicator | Whether the field is required |
| Optional Indicator | Whether the field is optional |
| Autocomplete | Predictive text suggestions |
| AutoFill | Automatic form filling |
| Error Recovery | How to fix the error |
| Focus Movement | Logical tab order through fields |

### Label Requirements

| Property | Requirement |
|----------|------------|
| Visible | Every input has a visible label |
| Persistent | Label is always visible (not placeholder only) |
| Associated | Label is programmatically associated with input |
| Descriptive | Label clearly describes what to enter |

### Error Message Requirements

| Property | Requirement |
|----------|------------|
| Visible | Error message is visible near the input |
| Persistent | Error message remains visible until fixed |
| Descriptive | Error explains what is wrong |
| Actionable | Error explains how to fix it |
| Associated | Error is programmatically associated with input |

### Error Message Format

```
[What happened]: [Why it happened]. [What to do].
```

**Examples:**
- "Email address is invalid. Please enter a valid email address."
- "Amount exceeds available balance. Please enter an amount less than $1,234.56."
- "Password is too weak. Please include at least 8 characters with a number and symbol."

### Focus Movement

| Scenario | Focus Behavior |
|----------|---------------|
| Form load | Focus on first input |
| Tab through fields | Logical order (top to bottom, left to right) |
| Error | Focus on first field with error |
| Success | Focus on submit button or next step |
| Field error | Focus remains on field, error announced |

---

## 12 Charts & Data Visualization

### Text Summary Requirement

Every chart must provide a text summary that conveys the same information as the visual chart.

### Text Summary Format

```
[Chart type] showing [data description].
[Time period]: [key metric].
[Trend]: [direction and magnitude].
[Notable]: [significant data points or changes].
```

**Example:**
```
Line chart showing portfolio value over the last 12 months.
January to December 2024: $50,000 to $62,500.
Trend: Upward growth of 25%.
Notable: Significant growth in March and September.
```

### Data Table Alternative

Every chart must have a data table alternative that can be accessed by screen reader users.

| Chart Type | Table Columns |
|------------|---------------|
| Line chart | Date, Value |
| Bar chart | Category, Value |
| Pie chart | Category, Percentage, Value |
| Donut chart | Category, Percentage, Value |
| Progress ring | Label, Current, Target, Percentage |

### VoiceOver Navigation for Charts

| Element | VoiceOver Label |
|---------|----------------|
| Chart container | "[Chart type] chart. [Summary]" |
| Data point | "[Category]: [Value] ([Change])" |
| Legend item | "[Category]: [Color]" |
| Axis label | "[Axis]: [Label]" |
| Tooltip | "[Data point details]" |

### Pattern Support

Charts must use patterns in addition to color to differentiate data:

| Pattern | Usage |
|---------|-------|
| Solid fill | Primary data |
| Striped fill | Secondary data |
| Dotted fill | Tertiary data |
| Crosshatch | Quaternary data |

### Accessible Legends

| Property | Requirement |
|----------|------------|
| Text labels | Always use text labels, not just color |
| Patterns | Include pattern swatches |
| Interactive | Can be focused and announced |
| Position | Above or beside chart (not below) |

---

## 13 AI Accessibility

### Streaming Responses

| Property | Requirement |
|----------|------------|
| Live region | Use `aria-live="polite"` for streaming text |
| Typing indicator | Announce "AI is typing" |
| Complete response | Announce "Response complete" |
| Readable pace | Stream at readable pace, not instantly |

### VoiceOver Announcements

| Event | Announcement |
|-------|-------------|
| AI thinking | "AI is processing your request" |
| Response start | "AI response" |
| Response complete | "AI response complete" |
| Recommendation | "AI recommendation: [summary]" |
| Action required | "AI suggests: [action]" |

### Typing Indicator

| Property | Requirement |
|----------|------------|
| Visual | Three dots pulsing |
| Audio | None (silent) |
| Screen reader | "AI is typing" announced once |
| Duration | While generating response |

### Recommendation Reading

| Property | Requirement |
|----------|------------|
| Label | "AI recommendation" |
| Content | Summary of recommendation |
| Action | What the user can do |
| Confidence | "High confidence" / "Medium confidence" / "Low confidence" |

---

## 14 Financial Accessibility

### Money Formatting

| Format | Example | Usage |
|--------|---------|-------|
| Full | $12,345.67 | Detailed view |
| Abbreviated | $12.3K | Summary view |
| Compact | $12K | Dashboard cards |
| Negative | -$1,234.56 | Expenses, losses |
| Positive | +$1,234.56 | Income, gains |

### Number Formatting

| Format | Example | Usage |
|--------|---------|-------|
| Thousands separator | 1,234,567 | Large numbers |
| Decimal separator | 12.34 | Precise values |
| Percentage | 12.34% | Rates, returns |
| Currency | $1,234.56 | Money values |
| Negative indicator | -$1,234.56 or (1,234.56) | Negative values |

### Currency Support

| Currency | Symbol | Format |
|----------|--------|--------|
| USD | $ | $1,234.56 |
| EUR | € | €1.234,56 |
| GBP | £ | £1,234.56 |
| JPY | ¥ | ¥1,234 |
| INR | ₹ | ₹1,23,456.78 |

### Locale Support

| Locale | Thousands | Decimal | Currency Position |
|--------|-----------|---------|-------------------|
| en-US | , | . | Before ($1,234.56) |
| en-GB | , | . | Before (£1,234.56) |
| de-DE | . | , | After (1.234,56 €) |
| fr-FR | space | , | After (1 234,56 €) |
| ja-JP | , | . | Before (¥1,234) |
| hi-IN | , | . | Before (₹1,23,456.78) |

### Screen Reader Formatting

| Value | Screen Reader Announcement |
|-------|---------------------------|
| $1,234.56 | "One thousand two hundred thirty-four dollars and fifty-six cents" |
| +5.23% | "Positive five point two three percent" |
| -$1,234.56 | "Negative one thousand two hundred thirty-four dollars and fifty-six cents" |
| 12.3K | "Twelve point three thousand" |

---

## 15 Error Recovery

### Every Error Must Include

| Element | Purpose |
|---------|---------|
| What happened | Clear description of the error |
| Why it happened | Explanation of the cause |
| What the user can do | Actionable recovery steps |
| Retry option | Ability to try again |
| Undo option | Ability to reverse the action |
| Alternative action | Different approach if retry is not possible |

### Error Message Rules

1. **Never blame the user.** Say "Something went wrong" not "You made an error."
2. **Never use vague language.** Say "Network connection lost" not "Error occurred."
3. **Always be specific.** Say "Insufficient funds" not "Payment failed."
4. **Always be actionable.** Say "Please try again" not "Try again later."
5. **Always be polite.** Say "Please enter a valid email" not "Invalid email."

### Error Message Templates

| Error Type | Template |
|------------|----------|
| Network | "Connection lost. Please check your internet connection and try again." |
| Validation | "[Field] is invalid. [How to fix it]." |
| Permission | "You don't have permission to [action]. Please contact support." |
| Not found | "[Item] not found. It may have been deleted." |
| Server | "Something went wrong. Please try again." |
| Timeout | "Request timed out. Please try again." |
| Limit | "You've reached the limit. [What to do]." |

---

## 16 Localization

### Layout Direction

| Direction | Languages | Behavior |
|-----------|-----------|----------|
| LTR | English, French, Spanish, German | Text left to right, content left to right |
| RTL | Arabic, Hebrew, Persian | Text right to left, content right to left |

### Variable Length Text

| Strategy | Usage |
|----------|-------|
| Flexible containers | Allow text to expand horizontally |
| Truncation | Truncate with "…" for fixed-width areas |
| Wrapping | Allow text to wrap to multiple lines |
|缩写 | Use abbreviations for constrained spaces |

### Date Formats

| Locale | Format | Example |
|--------|--------|---------|
| en-US | MM/DD/YYYY | 12/31/2024 |
| en-GB | DD/MM/YYYY | 31/12/2024 |
| de-DE | DD.MM.YYYY | 31.12.2024 |
| ja-JP | YYYY年MM月DD日 | 2024年12月31日 |
| ISO | YYYY-MM-DD | 2024-12-31 |

### Time Formats

| Locale | Format | Example |
|--------|--------|---------|
| en-US | h:mm A | 3:30 PM |
| en-GB | HH:mm | 15:30 |
| 24-hour | HH:mm | 15:30 |

### Number Formats

| Locale | Decimal | Thousands | Example |
|--------|---------|-----------|---------|
| en-US | . | , | 1,234,567.89 |
| de-DE | , | . | 1.234.567,89 |
| fr-FR | , | space | 1 234 567,89 |
| ja-JP | . | , | 1,234,567.89 |

### Pluralization

| Count | Singular | Plural |
|-------|----------|--------|
| 1 | 1 account | 1 account |
| 2 | — | 2 accounts |
| 5 | — | 5 accounts |

### Internationalization Rules

1. **Never hardcode text** — use localized strings
2. **Never hardcode formats** — use locale-aware formatting
3. **Never hardcode layout** — support both LTR and RTL
4. **Never assume currency** — support multiple currencies
5. **Never assume date format** — support multiple formats

---

## 17 Accessibility Testing

### Testing Checklist

#### VoiceOver Testing
- [ ] All elements have accessible labels
- [ ] All interactive elements have hints
- [ ] All state changes are announced
- [ ] Reading order is logical
- [ ] All content is reachable
- [ ] No focus traps exist
- [ ] Focus is restored after dismissals

#### Dynamic Type Testing
- [ ] All text scales correctly
- [ ] No text is clipped
- [ ] Layout adapts to larger text
- [ ] All content remains accessible
- [ ] Touch targets remain adequate

#### Reduce Motion Testing
- [ ] All non-essential animations disabled
- [ ] All functional indicators remain
- [ ] All state changes are instant
- [ ] All content is accessible

#### High Contrast Testing
- [ ] All text meets contrast requirements
- [ ] All interactive elements meet contrast requirements
- [ ] All focus rings are visible
- [ ] All state changes are visible

#### Color Blindness Testing
- [ ] All information available without color
- [ ] All charts have pattern alternatives
- [ ] All status indicators have icons/labels
- [ ] All financial states have multiple indicators

#### Keyboard Navigation Testing
- [ ] All interactive elements reachable via Tab
- [ ] Tab order is logical
- [ ] All actions achievable via keyboard
- [ ] Focus indicators visible
- [ ] Escape dismisses overlays
- [ ] Enter/Space activates elements

#### Touch Target Testing
- [ ] All targets meet minimum 44pt
- [ ] Spacing between targets is adequate
- [ ] No accidental activations

#### Localization Testing
- [ ] RTL layout works correctly
- [ ] Variable text length handled
- [ ] Currency formats correct
- [ ] Date/time formats correct
- [ ] Number formats correct

#### Responsive Testing
- [ ] All content accessible at all sizes
- [ ] Layout works in landscape and portrait
- [ ] No horizontal scrolling needed for content
- [ ] Zoom works up to 200%

#### Offline Testing
- [ ] Offline state announced
- [ ] All content accessible offline
- [ ] Error messages accessible

---

## 18 Engineering

### SwiftUI Accessibility

```swift
// Label
Text("Balance")
    .accessibilityLabel("Account balance: $12,345.67")

// Hint
Button("Pay") { }
    .accessibilityHint("Double tap to pay this bill")

// Trait
Text("Settings")
    .accessibilityAddTraits(.isHeader)

// Value
Slider(value: $amount, in: 0...1000)
    .accessibilityValue("Amount: $\(Int(amount))")

// Group
VStack {
    Text("Chase Checking")
    Text("$12,345.67")
}
.accessibilityElement(children: .combine)
.accessibilityLabel("Chase Checking: $12,345.67")

// Hide decorative elements
Image("decorative")
    .accessibilityHidden(true)

// Custom action
Text("Account")
    .accessibilityAction(.magicTap) {
        // Quick action
    }

// Reduce motion
@Environment(\.accessibilityReduceMotion) var reduceMotion

// Dynamic Type
Text("Hello")
    .font(.body) // Automatically scales

// VoiceOver announcement
UIAccessibility.post(notification: .announcement, argument: "Balance updated")
```

### UIKit Accessibility

```swift
// Label
label.accessibilityLabel = "Account balance: $12,345.67"

// Hint
button.accessibilityHint = "Double tap to pay this bill"

// Trait
label.accessibilityTraits = .header

// Value
slider.accessibilityValue = "Amount: $\(Int(slider.value))"

// Group
UIAccessibility.post(notification: .layoutChanged, argument: nil)

// Hide
decorativeImage.isAccessibilityElement = false

// Custom action
label.accessibilityCustomActions = [
    UIAccessibilityCustomAction(name: "Pay", target: self, selector: #selector(pay))
]

// Reduce motion
UIAccessibility.isReduceMotionEnabled

// Dynamic Type
label.font = UIFont.preferredFont(forTextStyle: .body)
label.adjustsFontForContentSizeCategory = true

// VoiceOver announcement
UIAccessibility.post(notification: .announcement, argument: "Balance updated")
```

### ARIA (Web)

```html
<!-- Label -->
<button aria-label="Pay bill">Pay</button>

<!-- Described by -->
<input aria-describedby="email-hint" />
<span id="email-hint">Enter your email address</span>

<!-- Live region -->
<div aria-live="polite" aria-atomic="true">
  Balance updated to $12,345.67
</div>

<!-- Assertive -->
<div aria-live="assertive">
  Error: Insufficient funds
</div>

<!-- Hidden -->
<svg aria-hidden="true" focusable="false">...</svg>

<!-- Focus management -->
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Payment</h2>
</div>

<!-- Landmarks -->
<main aria-label="Main content">...</main>
<nav aria-label="Primary">...</nav>
<aside aria-label="Sidebar">...</aside>

<!-- Keyboard -->
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>
```

### React Accessibility

```jsx
// Custom hook for announcements
function useAnnouncement() {
  const announce = (message, priority = 'polite') => {
    const el = document.createElement('div');
    el.setAttribute('aria-live', priority);
    el.setAttribute('aria-atomic', 'true');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.textContent = message;
    setTimeout(() => el.remove(), 1000);
  };
  return announce;
}

// Focus trap hook
function useFocusTrap(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const focusable = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    
    const handleTab = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    
    el.addEventListener('keydown', handleTab);
    first?.focus();
    
    return () => el.removeEventListener('keydown', handleTab);
  }, [ref]);
}
```

### React Native Accessibility

```jsx
// Label
<Text accessibilityLabel="Account balance: $12,345.67">
  $12,345.67
</Text>

// Hint
<TouchableOpacity accessibilityHint="Double tap to pay this bill">
  <Text>Pay</Text>
</TouchableOpacity>

// Role
<View accessibilityRole="header">
  <Text>Settings</Text>
</View>

// State
<Switch 
  value={isEnabled}
  accessibilityState={{ checked: isEnabled }}
/>

// Group
<View accessibilityLabel="Chase Checking account, balance $12,345.67">
  <Text>Chase Checking</Text>
  <Text>$12,345.67</Text>
</View>

// Live region
<AccessibilityInfo.announceForAccessibility('Balance updated');

// Reduce motion
AccessibilityInfo.isReduceMotionEnabled().then(reduceMotion => {});

// Dynamic Type
<Text style={{ fontSize: 16 }} allowFontScaling={true}>
  Hello
</Text>
```

### Accessibility Tokens

```css
/* Focus ring tokens */
:root {
  --focus-ring-width: 2px;
  --focus-ring-color: #3B82F6;
  --focus-ring-offset: 2px;
  --focus-ring-radius: inherit;
}

/* Touch target tokens */
:root {
  --touch-target-min: 44px;
  --touch-target-preferred: 48px;
  --touch-target-spacing: 8px;
}

/* Contrast tokens */
:root {
  --contrast-minimum: 4.5;
  --contrast-large: 3;
  --contrast-interactive: 3;
}
```

---

## 19 Documentation

### Accessibility Specification Template

Every accessibility guideline must include:

```markdown
## [Guideline Name]

### Purpose
Why this accessibility requirement exists.

### Requirement
The specific accessibility requirement.

### Platform
Which platforms this applies to (iOS, Web, Android).

### Examples
How to implement this requirement.

### Do
What to do.

### Don't
What not to do.

### Engineering Notes
Platform-specific implementation details.

### Testing Notes
How to test this requirement.

### Common Mistakes
Frequently made errors and how to avoid them.
```

### Documentation Rules

1. **Every component must have accessibility documentation**
2. **Every guideline must include examples**
3. **Every guideline must include testing instructions**
4. **Every guideline must include engineering notes**
5. **Documentation must be reviewed regularly**

---

## Final Validation

### Review Questions

Review the entire accessibility system against these questions:

| Question | Required |
|----------|----------|
| Can every financial task be completed by someone using VoiceOver? | Yes |
| Can someone complete the product without relying on color? | Yes |
| Can someone complete the product using Dynamic Type? | Yes |
| Can someone complete the product with reduced motion enabled? | Yes |
| Can someone navigate using only the keyboard on Web? | Yes |
| Can someone recover from every error? | Yes |
| Can the engineering team implement every accessibility requirement consistently? | Yes |

### Validation Checklist

- [ ] All components have accessible labels
- [ ] All components have accessible hints
- [ ] All state changes are announced
- [ ] All text meets contrast requirements
- [ ] All touch targets meet minimum size
- [ ] All animations respect reduced motion
- [ ] All keyboard navigation works
- [ ] All forms have proper labels and errors
- [ ] All charts have text summaries
- [ ] All financial data is properly formatted
- [ ] All errors include recovery steps
- [ ] All content works in RTL
- [ ] All content scales with Dynamic Type
- [ ] All components are tested with VoiceOver
- [ ] All components are tested with keyboard
- [ ] All components are tested with reduced motion

### Continuous Improvement

Accessibility is not a one-time effort. It requires:

1. **Regular audits** — Quarterly accessibility reviews
2. **User testing** — Testing with users who have disabilities
3. **Automation** — Automated accessibility testing in CI/CD
4. **Training** — Regular accessibility training for team
5. **Feedback** — Channels for users to report accessibility issues

---

*This chapter is part of the Advizmo Design Language. For the complete system, refer to the full documentation.*
