# Advizmo Design Foundations

**Phase 1: Philosophy Only**
**Version 1.0**
**This document defines the "why" — implementation details come in Phase 2**

---

## 1. Design Philosophy

### Core Emotional Goals

Users open Advizmo daily to manage money that matters. This creates inherent anxiety.

**Users should feel:**
- **Calm** — Not overwhelmed by complexity
- **In control** — Not guessing what will happen next
- **Confident** — That their money is being managed well
- **informed** — Never surprised by what they find
- **Trusting** — That automation is working in their favor

**Users should never feel:**
- anxious about their financial health
- confused about what actions to take
- uncertain whether automation is working
- overwhelmed by information density
- concerned that something is wrong when it isn't

### The Nature of Money

Money is not entertainment. It is not a game. It represents real labor, real futures, real security.

**Money should be represented as:**
- Precise — Numbers are exact, never rounded casually
- Serious — Not playful or whimsical in representation
- Honest — No hidden meanings, no decorative flourishes
- Respectful — User's financial reality presented clearly
- Empowering — Numbers show progress, not judgment

### The Nature of Automation

Automation in Advizmo should feel like hiring a competent financial advisor — someone who handles complexity so users don't have to think about it.

**Automation should feel:**
- Invisible when working correctly
- Transparent when user attention is needed
- Confident in its decisions
- Reversible when users want control
- Educational without being condescending

**Automation should never feel:**
- Like a black box
- Like it's hiding something
- Like it's making decisions for the user without consent
- Like it's guessing

### The Role of AI

AI enhances the user's understanding, it does not replace their judgment.

**AI should:**
- Explain its reasoning when asked
- Show confidence levels transparently
- Admit uncertainty honestly
- Make recommendations, not decisions
- Respect user override always

### Reduction as Philosophy

Every element that does not serve the user's understanding or emotional state is noise.

**We remove:**
- Decorative elements that don't aid comprehension
- Multiple ways to do the same thing
- Visual complexity that doesn't convey meaning
- Historical artifacts from older design decisions
- Flexibility that creates inconsistency

**We keep:**
- The minimum needed for clarity
- The expected patterns users know
- The controls users need when they want them
- The space for users to breathe

---

## 2. Design Principles

### Principle 1: Reduce Financial Anxiety

Financial applications carry inherent stress. Every design decision either amplifies or reduces this anxiety.

**Rules:**
- Never use alarming colors unless immediate action is required
- Present complex information in digestible chunks
- Provide clear, honest feedback for all actions
- Never make users feel their money is at risk
- Use calming motion — precise, never bouncy
- Show automation working quietly in the background
- Celebrate progress, don't dramatize problems

### Principle 2: Automate Complexity

Complexity is the enemy's of understanding. When the system can handle complexity, it should do so invisibly.

**Rules:**
- Show automated states clearly when visible
- Explain what's happening without requiring user action
- Allow manual override but default to automation
- Make complex features discoverable but not overwhelming
- Never hide complexity behind "magic" — explain when asked
- Surface automation benefits, not just automation actions

### Principle 3: Clarity Before Decoration

Every visual element must earn its place. If it does not serve function, it serves distraction.

**Rules:**
- Remove decorative elements that don't aid comprehension
- Use whitespace to create hierarchy, not borders
- Prefer content-driven layouts over grid-driven
- Never add visual interest at the expense of clarity
- If in doubt, remove it — the user doesn't need it
- Beauty in financial apps comes from clarity, not ornamentation

### Principle 4: Consistency Creates Trust

Users build mental models. Every deviation breaks that model and increases cognitive load.

**Rules:**
- Users should predict where things will be
- Similar elements should behave similarly
- Knowledge should transfer between screens
- Users should never wonder "is this clickable?"
- Patterns should be consistent across the product
- Exceptions require explicit justification

### Principle 5: Progressive Disclosure

Users don't need everything at once. Information and controls should appear when relevant.

**Rules:**
- Show users what they need now, not everything possible
- Reveal complexity only when users demonstrate interest
- Use expansion, not full-page complexity
- Provide summaries first, details on demand
- Never front-load with advanced options
- Make simple the default, advanced opt-in

### Principle 6: Accessibility is Non-Negotiable

Readable, usable, and inclusive always trumps beautiful-but-inaccessible.

**Rules:**
- All text meets WCAG AA contrast minimum (4.5:1)
- Touch targets are minimum 44pt, recommended 48pt
- Dynamic Type support for all text
- VoiceOver labels for all interactive elements
- Color independence — never convey info by color alone
- Respect reduced motion preferences
- Assume no accessibility is temporary until proven permanent

### Principle 7: Native Before Custom

The best interface is one that feels familiar through system conventions.

**Rules:**
- Use iOS patterns before creating custom patterns
- Adopt system components before building new ones
- Follow Apple Human Interface Guidelines closely
- Only deviate when Apple's approach doesn't fit
- Learn from native apps before innovating
- Consistency with iOS reduces cognitive load

### Principle 8: Engineering Simplicity

Design that cannot be implemented cleanly is design that will break.

**Rules:**
- Avoid complex conditional styling
- Prefer composition over configuration
- Limit variants to what is genuinely necessary
- Make the system explainable to new engineers
- Reduce the number of tokens to minimum
- Eliminate magic numbers — everything has a reason
- Design for maintainability, not impressiveness

### Principle 9: Trust Through Honesty

Financial apps earn trust through transparency, not through reassurance.

**Rules:**
- Show real numbers, not sanitized numbers
- Admit when something doesn't exist (no fake balances)
- Explain fees and costs clearly
- Never use dark patterns in financial representation
- If something is wrong, say so directly
- Trust is built through accurate information

### Principle 10: Respect User Time

Daily apps must be efficient. Users return repeatedly — friction compounds.

**Rules:**
- Touch targets and navigation minimize thumb travel
- Scrolling is preferred over pagination
- State changes are visible but not jarring
- Default to where users usually go
- Reduce the number of taps to common actions
- Never require users to re-enter known information

---

## 3. Color Philosophy

### The Role of Blue

Blue represents trust, stability, and primary action. It is the color of navigation, interactivity, and brand identity.

**Blue is used for:**
- Primary action buttons and calls-to-action
- Navigation elements (tabs, selected states)
- Interactive controls (links, focus states)
- Brand identity (logo, key moments)
- Information that requires user attention

**Blue is NOT used for:**
- Financial positive or negative indicators
- Status that requires immediate attention
- Decorative purposes

### The Role of Green

Green represents financial positive outcomes. It is reserved exclusively for money moving in the right direction.

**Green is used for:**
- Investment gains and positive returns
- Available cash or positive balances
- Successful transfers and completed actions
- Tax savings and reductions
- Growth indicators
- Automation completion

**Green is NEVER used for:**
- Brand identity or primary actions
- Navigation elements
- As a secondary or accent color
- To indicate "go" or "safe" outside financial context

### The Role of Red

Red represents financial negative outcomes or errors that require immediate attention.

**Red appears for:**
- Investment losses and negative returns
- Overspending or negative balances
- Errors and failed transactions
- Destructive actions (delete, cancel subscription)
- Overdue items or required attention
- Warnings that indicate potential loss

**Red should appear sparingly.** If red appears constantly, the user's financial anxiety increases. Use it to indicate genuine issues, not to dramatize normal fluctuations.

### The Role of Warning (Amber/Orange)

Warning indicates attention needed but not immediate crisis.

**Warning appears for:**
- Upcoming payments or deadlines
- Subscription renewals
- Expiring promotions or rates
- Balance concerns (approaching limits)
- Items requiring user review

**Warning behavior:**
- Never alarming, always informative
- Accompanied by clear explanation
- Suggests action without demanding
- Never used for errors or losses

### Neutral Colors

Neutral colors handle hierarchy and structure without emotional content.

**Grays communicate:**
- Secondary information (captions, metadata)
- Disabled or unavailable states
- Borders and dividers
- Background surfaces
- Text that isn't primary

**Principles:**
- Never use gray to diminish important information
- Secondary doesn't mean unimportant
- Disabled states must still be readable

### Background Colors

Backgrounds create visual hierarchy through space, not color intensity.

**Principles:**
- Backgrounds are always light (white or near-white)
- Surface hierarchy through elevation, not saturation
- Never use colored backgrounds for primary content areas
- Card surfaces are white on light gray background

### Surface Behavior

Surfaces are containers that organize content.

**Principles:**
- Surfaces are white or near-white
- Elevation communicated through shadow, not color change
- Surfaces sit on backgrounds, creating layers
- Content never bleeds to edges — padding is mandatory

### Interactive Colors

Interactive elements have clear states that communicate behavior.

**States:**
- Default: The resting state
- Hover/Focus: Indicates interactivity (desktop)
- Pressed: Confirms the touch/click landed
- Disabled: Visible but unavailable
- Loading: Indicates processing, not stuck

**Principles:**
- Interactive states must be distinguishable
- Disabled doesn't mean invisible
- Loading is not error — communicate clearly
- State transitions should be smooth

### Chart Colors

Charts use color to differentiate data, not to decorate.

**Principles:**
- Use the semantic palette (Blue, Green, Red) for financial meaning
- Use neutral grays for reference lines and axes
- Never use color alone to distinguish chart segments
- Maintain consistent color-meaning across all charts
- When meaning is not financial, use a neutral palette

### Financial Gain Representation

Financial gain is always Green. The direction is clear.

**Always accompanied by:**
- Numeric value with + prefix
- Direction indicator (up arrow)
- Clear labeling of what changed

### Financial Loss Representation

Financial loss is always Red. The direction is clear.

**Always accompanied by:**
- Numeric value with - prefix
- Direction indicator (down arrow)
- Clear labeling of what changed
- Context to understand magnitude

### Automation Success

Automation success is communicated through Green for the financial outcome.

**Principles:**
- Show automated actions in activity feeds
- Highlight positive financial impact clearly
- Use Green to indicate money saved or earned
- Show the automation's work, not just its completion

### Tax Savings

Tax savings are Green — they represent money preserved.

**Principles:**
- Clearly labeled as tax-related
- Shown separately from investment gains
- Use Green to indicate reduction in tax liability

---

## 4. Typography Philosophy

### Font Choice: Inter

Inter is the only font family. This is not negotiable for Phase 1.

**Justification:**
- Already in production use — changing would break consistency
- Excellent legibility across all sizes
- Comprehensive weight range (300-900)
- Variable font support for performance
- Designed specifically for screen readability
- Widely used in financial applications

**No other font will be introduced.** If Inter cannot communicate a needed style, we will use weight and size, not a different typeface.

### Typography Hierarchy

We use Apple's type scale from Human Interface Guidelines, mapped to Inter weights.

| Apple Style | Inter Weight | Justification |
|-------------|--------------|---------------|
| Large Title | 700 Bold | Reserved for hero moments only |
| Title 1 | 600 Semibold | Primary screen titles |
| Title 2 | 600 Semibold | Section headers |
| Title 3 | 600 Semibold | Merged with Title 2 |
| Headline | 600 Semibold | Merged with Title 2 |
| Body | 400 Regular | Primary content |
| Callout | 400 Regular | Merged with Body |
| Subheadline | 400 Regular | Merged with Body |
| Footnote | 400 Regular | Secondary content |
| Caption 1 | 400 Regular | Labels, captions |
| Caption 2 | 400 Regular | Merged with Caption 1 |

**In practice, we use 6 styles:**
- Display (32px, Semibold) — Key metrics, hero numbers
- Heading 1 (24px, Semibold) — Screen titles
- Heading 2 (20px, Semibold) — Section headers
- Body (16px, Regular) — Primary content
- Caption (14px, Regular) — Secondary information
- Micro (12px, Medium) — Badges, timestamps, tags

### Font Weights

We use three weights only: 400 (Regular), 500 (Medium), 600 (Semibold).

**Never use:**
- 300 Light — Adds complexity without benefit
- 700 Bold — Use Semibold (600) instead
- 800-900 — Never needed in financial UI

### Line Length

Maximum line length: 80 characters (approximately).

**Why 80 characters:**
- Optimal for readability
- Prevents eye fatigue
- Common standard in typography
- Forces appropriate text wrapping

**Implementation:**
- Cards and content areas enforce max-width
- Long paragraphs split into shorter ones
- Headlines never wrap — size down instead

### Line Height

Line height is 1.5× the font size (150%).

**Examples:**
- 16px body text → 24px line height
- 14px caption → 21px line height (round to 20px)
- 24px heading → 36px line height (round to 32px)

**This ratio provides:**
- Comfortable reading rhythm
- Clear separation between lines
- Room for ascenders and descenders

### Paragraph Spacing

Paragraph spacing equals the line height.

**Example:**
- Body with 24px line height → 24px paragraph spacing

**This creates:**
- Clear paragraph breaks
- Consistent rhythm
- Visual breathing room

### Letter Spacing

**Tight letter spacing (-0.02em) for:**
- Display text
- Headings (H1, H2)
- Any text larger than 20px

**Default letter spacing (0) for:**
- Body text
- Captions
- Small text

**Why:**
- Large text looks better slightly tighter
- Small text needs breathing room
- This is standard practice in typography

### When to Use Bold

**Bold is never used.** Semibold (600) is our heaviest weight.

**When semibold is appropriate:**
- Screen titles (hierarchical importance)
- Section headers (grouping importance)
- Key metrics (data emphasis)
- Button text (action importance)
- Important labels

**When semibold is NOT appropriate:**
- Normal body text (use Regular)
- Secondary information (use Regular)
- Captions and metadata (use Regular)
- Placeholder text (use Regular)

### Summary: Typography Rules

1. **One font family only: Inter**
2. **Six text styles only: Display, H1, H2, Body, Caption, Micro**
3. **Three weights only: 400, 500, 600**
4. **Line height: 1.5× font size**
5. **Line length: 80 characters maximum**
6. **Letter spacing: -0.02em for large text, 0 for body/caption**
7. **Left-align all text except buttons and empty states**

---

## 5. Spacing Philosophy

### The Goal: Consistency Over Flexibility

The spacing system exists to eliminate decisions, not to provide options. Every value must justify its existence.

**A good spacing system answers:**
- Which spacing for card padding?
- Which spacing between sections?
- Which spacing for component internal?
- Which spacing for screen margins?

**If designers must choose between spacing values, the system has failed.**

### The Minimum Viable Scale

After analyzing the current design, we need 7 spacing values. Not 14. Not 20. Seven.

| Token | Value | Purpose |
|-------|-------|---------|
| 4px | 4 | Icon padding, micro gaps |
| 8px | 8 | Component internal padding |
| 12px | 12 | Between related elements |
| 16px | 16 | Section padding, card content |
| 24px | 24 | Between sections |
| 32px | 32 | Large section gaps |
| 48px | 48 | Screen margins (tablet/desktop) |

**Why 7 and not fewer:**
- 4px is needed for icon-to-text and tight arrangements
- 8px is the default for components
- 12px bridges 8px and 16px for comfortable spacing
- 16px is the card standard
- 24px separates sections clearly
- 32px is for significant separations
- 48px is for screen-level margins

**If we tried to use fewer:**
- 4px alone is too tight for components
- 8px alone is too tight for cards
- 16px alone creates gaps that feel too large for related content
- We need the gradient for hierarchy

**If we used more:**
- 14+ values exist in the current system
- Most are interchangeable
- Interchangeability means redundancy
- Redundancy means inconsistency

### Spacing Usage Rules

**Card padding:** 16px all sides
**Section padding:** 16px
**Screen margins:** 16px minimum (mobile), 24px (tablet), 48px (desktop)
**Component internal:** 8px default, 12px comfortable
**Section gaps:** 24px between groups
**Element gaps:** 8px for tight, 12px for comfortable

### The 4pt Grid

All spacing is derived from multiples of 4. This aligns with iOS grid and ensures pixel-perfect rendering.

**Rules:**
- No spacing values outside the 7-point scale
- No sub-4px spacing (too tight for touch)
- No arbitrary values like 10px, 18px, 22px
- If a value feels needed outside the scale, question why

### Screen Padding vs. Component Spacing

**Screen padding (content to edge):** Minimum 16px
**Card padding (content to card edge):** 16px
**Section spacing (between groups):** 24px
**Element spacing (between items in a group):** 8px or 12px

### When to Use More Space

**Use 24px or 32px when:**
- Separating distinct sections
- Creating visual breathing room
- Emphasizing hierarchy through space
- The content itself needs room

**When in doubt, use more space.** White space communicates hierarchy without visual clutter.

---

## 6. Border Radius Philosophy

### The Problem

Current design has 7 radius values. Most are interchangeable. Interchangeability breeds inconsistency.

**If designers can choose between 4px, 8px, 12px, 16px, 20px, 24px for cards, they will. And they won't agree. The result is inconsistency.**

### The Solution

Four radius values. Four. Nothing else.

| Token | Value | Usage |
|-------|-------|-------|
| None | 0px | Full-bleed elements, dividers, text |
| Small | 8px | Buttons, inputs, badges, tags |
| Medium | 12px | Cards, sheets, modals, navigation |
| Full | 9999px | Avatars, pills, circular buttons |

### Why These Four

**None (0px):**
- Text never has radius
- Dividers are sharp
- Full-bleed elements don't need radius
- Removing this would force radius on inappropriate elements

**Small (8px):**
- Buttons need slight rounding — feels touchable but not childish
- Inputs need slight rounding — indicates interactivity
- Badges and tags are small — 8px provides enough softness
- This is the workhorse radius — used most frequently
- Would 6px work? Probably. But 8px aligns with 4pt grid.

**Medium (12px):**
- Cards need more breathing room than buttons
- Sheets and modals benefit from softer corners
- Navigation containers can use this
- 12px is clearly "larger" than 8px
- Would 10px work? Probably. But 12px maintains 4pt alignment.

**Full (9999px):**
- Avatars are circles
- Pills (button groups, filters) are fully rounded
- Nothing else should use Full
- This is reserved exclusively for these use cases

### What We Removed and Why

**4px radius:** Removed. Too small. Dated iOS 6 aesthetic. Modern iOS uses 8px minimum for interactive elements.

**16px radius:** Removed. Overlap with 12px is too high. If you can't decide between 12px and 16px for a card, use 12px.

**24px radius:** Removed. No documented use case that couldn't use 12px.

**40px radius:** Removed. Extremely rare. No common use case.

### Radius Usage Rules

1. **Buttons:** Always Small (8px)
2. **Inputs:** Always Small (8px)
3. **Badges/Tags:** Always Small (8px)
4. **Cards:** Always Medium (12px)
5. **Sheets/Modals:** Always Medium (12px)
6. **Avatars:** Always Full (9999px)
7. **Pills/Chips:** Always Full (9999px)
8. **Text:** Always None (0px)
9. **Dividers:** Always None (0px)

**If a use case doesn't fit these rules, question whether the radius is necessary at all.**

---

## 7. Elevation Philosophy

### The Problem

Most design systems overuse shadows. Shadows become meaningless when everything has a shadow.

**When everything is elevated, nothing is elevated.**

### The Solution

Two elevation levels. Two.

| Token | Usage |
|-------|-------|
| None | Flat surfaces, page backgrounds, list items |
| Low | Elevated cards, dropdowns, floating elements |

### Why No More

**None:**
- The default state
- Most content sits flat
- Cards on white background don't need shadow
- List items are flat

**Low:**
- Indicates the element floats above the page
- Used for cards that need separation
- Used for dropdowns and popovers
- Used for floating action buttons

### Why Not Medium or High

**Medium shadow (0 4px 12px):** The current system has this. It's too dramatic for iOS. iOS uses subtle shadows, not dramatic ones. Low (0 2px 8px) achieves separation without drama.

**High shadow:** Never needed. If you need this level of elevation, consider whether the element should be a modal instead.

### Prefer Space Over Shadow

**Before adding shadow, ask:**
- Can I use 24px of spacing instead?
- Can I use a border instead?
- Can I use background color difference instead?

**Example:**
- Instead of shadow to separate two cards, use 24px gap between them
- Instead of shadow on a card, consider a subtle border
- Only use shadow when other methods fail

### Shadow Specification

**Low shadow:** `0 2px 8px rgba(0,0,0,0.06)`

**Why this specification:**
- Subtle enough to not dominate
- Strong enough to create separation
- No color tint — pure black with low opacity
- Standard iOS shadow approach

---

## 8. Iconography Philosophy

### Icon Style: Outline

We use outline icons exclusively. This matches iOS conventions and provides clarity at small sizes.

**Why not filled:**
- Filled icons can feel heavy at 20-24px
- Outline icons communicate better in dense UIs
- iOS uses outline icons for most interface elements
- Consistency with SF Symbols

### Stroke Width

**Standard stroke: 1.5px**

**Rationale:**
- Thicker than 1px (more visible)
- Thinner than 2px (not too heavy)
- Standard for iOS interface icons
- Works at sizes from 16px to 24px

### Corner Treatment

**Consistent corner radius: 2px (for 24px icons)**

**Rationale:**
- Matches our Small radius (8px) proportionally
- Slightly softer than sharp corners
- Consistent across all icons
- Not so rounded that it loses definition

### Optical Weight

**Icons should feel medium weight — not too light, not too heavy.**

**Rules:**
- Maintain consistent visual weight across icon set
- Account for x-height differences between icons
- Adjust stroke width for large icons (32px+)
- Adjust for icon complexity (simpler icons can be slightly heavier)

### Grid and Size

**Icon grid: 24px base**

| Context | Size |
|---------|------|
| Navigation | 24px |
| Action buttons | 24px |
| List items | 20px |
| Badges/status | 16px |
| Empty states | 48px |

**Rationale:**
- 24px is iOS standard
- 20px works for compact lists
- 16px for inline indicators only
- 48px for illustration-level icons

### Padding Around Icons

**Icon-to-text spacing: 8px**

**Rationale:**
- 8px provides comfortable breathing room
- Matches our spacing system
- Prevents icon from feeling cramped against text

### Icon-to-Typography Relationship

**Icons align with text baseline, not center.**

**Rules:**
- 24px icons sit next to 16px body text naturally
- Icon center should align with text cap height
- Test alignment with actual text, not assumed positioning

### Icon Color

**Icons inherit color from their container.**

**Rules:**
- Icon next to blue text = blue icon
- Icon in gray caption = gray icon
- Icon in white on colored background = white icon
- Never hardcode icon colors

### Icon Usage Rules

1. **Never use icons alone.** Always pair with label or clear context.
2. **Never mix outline and filled icons.** Pick one style.
3. **Use SF Symbols when possible.** Match our stroke width (1.5px).
4. **If SF Symbols doesn't have it, use a custom icon set with consistent style.**
5. **Test icons at target size.** What looks good at 48px may disappear at 20px.

---

## 9. Motion Philosophy

### The Emotional Tone

Motion in Advizmo is calm, precise, and purposeful. It communicates money, not entertainment.

**Motion should feel like:**
- A calm financial advisor, not a playful app
- Precise and confident, not bouncy or elastic
- Professional, not whimsical
- Subtle, not attention-grabbing

**Motion should never feel like:**
- Entertainment
- Celebration (unless it's a major milestone)
- Guessing or uncertain
- Dramatic or attention-grabbing

### What Motion Communicates

**Money movement:**
- Numbers count up/down smoothly (not instant)
- Balance changes animate to draw subtle attention
- Transfers show clear from/to with smooth progress
- Never bouncy — linear or ease-out only

**Card appearances:**
- Fade in over 250ms with slight upward movement (4px)
- Never scale up dramatically
- Never use spring physics for cards

**Portfolio changes:**
- Chart lines draw smoothly, not instantly
- Percentage changes count up/down
- Positive/negative indicators fade in
- Never jarring transitions

**AI communication:**
- Thinking indicator is subtle pulse, not spinning
- Recommendations fade in smoothly
- Confidence indicators animate into view
- Never playful (no bouncing AI icons)

**Chart animations:**
- Bars/lines grow from baseline, not from zero
- Duration: 400-600ms for initial render
- Subsequent updates: 200-300ms
- Use ease-out, never bounce

**Loading states:**
- Subtle pulse (opacity 0.5 to 1) or rotating line
- Never a bouncing spinner
- Progress bars use smooth fill, not chunky steps
- Skeleton screens use subtle shimmer, not movement

**Success feedback:**
- Green checkmark fades in (200ms)
- Brief confirmation without fanfare
- Auto-dismiss after 2 seconds
- Never confetti or celebration animations

**Error feedback:**
- Red appears with subtle shake (only for form errors)
- Error messages fade in smoothly
- Never red flash or dramatic attention-grab
- Error clears smoothly when resolved

### Motion Durations

| Type | Duration | Easing |
|------|----------|--------|
| Micro (toggle, press) | 150ms | ease-out |
| Standard (appear, disappear) | 250ms | ease-out |
| Slow (page transitions) | 350ms | ease-out |
| Charts (initial) | 400-600ms | ease-out |
| Charts (update) | 200-300ms | ease-out |

### Easing

**Standard easing: ease-out**

**Rationale:**
- Elements enter quickly, settle smoothly
- Matches iOS animation curves
- Feels natural and confident
- Never use linear (feels robotic)
- Never use bounce or elastic (feels playful)

### Respect Reduced Motion

**Always honor `prefers-reduced-motion`.**

**When reduced motion is on:**
- Instant state changes (no fade)
- No movement animations
- Numbers change instantly
- Charts appear without drawing animation
- Loading uses static indicators

### Motion Rules

1. **Prefer opacity changes over movement.** Fade is safer than slide.
2. **Keep movement subtle.** 2-4px is often enough.
3. **Never animate for entertainment.** Motion serves function.
4. **Always test with reduced motion.** Essential for accessibility.
5. **Consistent durations.** Same type of motion = same duration.

---

## 10. Accessibility Philosophy

### Contrast

**WCAG AA is the minimum. WCAG AAA is the target.**

| Element | Minimum Ratio | Target |
|---------|---------------|--------|
| Normal text | 4.5:1 | 7:1 |
| Large text (18px+) | 3:1 | 4.5:1 |
| UI components | 3:1 | 4.5:1 |
| Focus indicators | 3:1 | 4.5:1 |

**Rules:**
- All text on white/near-white backgrounds must meet 4.5:1
- Text on colored backgrounds must be tested
- Icons need sufficient contrast against backgrounds
- Never reduce contrast for brand reasons

### Dynamic Type

**All text must scale with iOS Dynamic Type.**

**Rules:**
- Use system text styles, not fixed sizes
- Test at largest accessibility sizes (AX5)
- Ensure layouts reflow gracefully
- Exceptions (badges, fixed UI) must be explicitly documented
- Never truncate text that contains critical information

### Touch Targets

**Minimum: 44×44pt (Apple minimum)**
**Recommended: 48×48pt for primary actions**

**Rules:**
- All interactive elements meet 44pt minimum
- Spacing between targets: 8px minimum
- Critical actions use 48pt
- Avoid putting interactive elements at screen edges (thumb zone)

### VoiceOver

**All interactive elements must have accessibility labels.**

**Rules:**
- Buttons announce their purpose clearly
- Images have descriptive alt text
- State changes are announced
- Custom actions are defined where appropriate
- Never rely on position alone ("the button below")

### Color Independence

**Never convey information through color alone.**

| Information | Required Additional Indicator |
|-------------|-------------------------------|
| Positive | + prefix, up arrow, or text label |
| Negative | - prefix, down arrow, or text label |
| Error | Icon + text label |
| Disabled | Reduced opacity + different icon |
| Warning | Icon or text label |

### Motion Accessibility

**Respect reduced motion preferences.**

**Rules:**
- Check `UIAccessibility.isReduceMotionEnabled`
- Provide static alternatives
- Never auto-play animated content
- Loading states use static indicators when motion is reduced

### Readable Hierarchy

**Text hierarchy must be clear without color.**

**Rules:**
- Headings are larger than body text
- Primary text is darker than secondary
- Weight differences are meaningful
- Spacing reinforces hierarchy
- Never rely on color alone for importance

### Comfortable Spacing

**Spacing must not compromise readability.**

**Rules:**
- Line length maximum 80 characters
- Line height minimum 1.5× font size
- Paragraph spacing equals or exceeds line height
- Adequate touch target spacing (8px minimum between targets)

---

## 11. Cross Platform Philosophy

### Primary Platform: iOS

All design decisions begin with iOS. This is not optional.

**Rationale:**
- iOS is the primary platform for the initial release
- Apple Human Interface Guidelines provide comprehensive guidance
- iOS patterns are well-understood by users
- Engineering can optimize for iOS first

### Secondary Platform: Responsive Web

The web version inherits from iOS, not from a separate design.

**Rules:**
- Same visual language, adapted for browser
- Same typography scale
- Same color semantics
- Same spacing ratios (may scale slightly for desktop)
- Components adapt to viewport, not reinvented

### Achieving Cross-Platform Consistency

**Single source of truth:**
- Design tokens in one format
- Shared between iOS and web
- Changes propagate to both platforms

**Philosophy consistency:**
- If a pattern doesn't exist on iOS, question whether it should exist on web
- Web should feel like the iOS app, not a separate product
- Avoid introducing web-only patterns

**Responsive adaptation:**
- iPhone: Compact layout, touch-optimized
- iPad: Expanded layout, pointer-optimized
- Web Desktop: Expanded layout, mouse-optimized
- All maintain the same visual language

### What Might Differ

**Platform-specific adaptations:**
- Navigation patterns (tab bar vs. sidebar)
- Hover states (desktop web only)
- Keyboard navigation (web only)
- Scroll behaviors
- Context menus vs. long-press

**What should never differ:**
- Typography (same font, same scale)
- Colors (same semantics, same values)
- Spacing ratios (may scale, not different values)
- Component appearance
- Motion principles

---

## 12. Engineering Philosophy

### Reduce Token Count

**Every token must justify its existence.**

**Questions before adding a token:**
1. Does this represent a genuinely different value?
2. Will this be used in multiple places?
3. Would using an existing token break the design?
4. Is this semantic (purpose-driven) or just stylistic?

**If a token fails any question, don't add it.**

### Never Create Duplicate Components

**Before creating a new component:**
1. Can an existing component work with different props?
2. Can composition of existing components work?
3. Is this used in multiple contexts?
4. Does it justify its existence with documentation?

**If a component can be built from existing components, build it that way.**

### Never Create Visual Exceptions

**If the system says buttons have 8px radius, buttons always have 8px radius.**

**Rules:**
- No "just this once" exceptions
- No context-specific overrides
- If you need an exception, question whether the system is wrong
- Document exceptions, then decide if they should become permanent

### Prefer Variants Over New Components

**Instead of:**
- PrimaryButton
- SecondaryButton
- TertiaryButton

**Use:**
- Button with variant prop: "primary", "secondary", "tertiary"

**Rationale:**
- One component to maintain
- Consistent behavior
- Easier to add variants
- Clear relationship between states

### Prefer Reuse Over Recreation

**Never recreate what exists.**

**Rules:**
- Check existing components before building new
- Extend existing components before creating new
- If two components are similar, merge them
- If a pattern repeats, make it a component

### Prefer Semantic Tokens

**Instead of:**
- `blue-500` for a button background
- `dark-gray` for text

**Use:**
- `action-primary` for a button background
- `text-primary` for text

**Rationale:**
- Semantic tokens communicate purpose
- Changing the underlying value changes all uses
- Easier to maintain
- Clear intent in code

### Prefer Simplicity

**The simplest solution is usually correct.**

**Rules:**
- If you need conditional styling, question the design
- If you need deep component nesting, question the design
- If you need multiple ways to do the same thing, pick one
- If the code is hard to explain, it's probably wrong

### Make It Explainable

**If you can't explain why a design decision exists in one sentence, it's probably wrong.**

**Token: Why does this exist?**
"Card padding needs 16px because..."

**Component: Why does this variant exist?**
"This variant handles the empty state because..."

**Pattern: Why does this pattern exist?**
"We use this for list headers because..."

### Engineering-Friendly Naming

**Names should match code conventions.**

**Good:**
- `action-primary`
- `text-secondary`
- `button-radius-small`

**Bad:**
- `primary-cta`
- `secondary-text`
- `btn-rad-s`

**Rules:**
- Use full words, no abbreviations
- Use lowercase with hyphens (CSS convention)
- Match platform naming conventions
- Be consistent across all tokens

---

## Review Checklist

Before finalizing any design decision, ask:

1. **Does this reduce cognitive load?** Yes/No — if No, don't include it.
2. **Does this improve accessibility?** Yes/No — if No, don't include it.
3. **Does this improve consistency?** Yes/No — if No, question it.
4. **Does this simplify engineering?** Yes/No — if No, question it.
5. **Does this align with Apple HIG?** Yes/No — if No, justify why.
6. **Does this align with Practical UI?** Yes/No — if No, justify why.
7. **Does this reduce maintenance?** Yes/No — if No, question it.
8. **Can this be simplified further?** Yes/No — if Yes, simplify it.
9. **Does this have a documented reason?** Yes/No — if No, document it.
10. **Is this the minimum needed?** Yes/No — if No, remove it.

---

**End of Phase 1: Design Foundations**

*Next: Phase 2 will define implementation tokens based on these philosophies.*
