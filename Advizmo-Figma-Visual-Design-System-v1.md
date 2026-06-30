# ADVIZMO DESIGN LANGUAGE — Figma Visual Design System
## Version 1.0 · Production Ready

---

# 01 CONSTITUTION

## Page: 01-1 · Design Language Identity

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                        A D V I Z M O                                          │
│                   D E S I G N   L A N G U A G E                              │
│                                                                                │
│                        Version 1.0                                            │
│                        iOS-First · Production Ready                           │
│                                                                                │
│  Design Language Name:  Advizmo Design Language                                │
│  Version:              1.0                                                    │
│  Primary Platform:     iOS                                                     │
│  Secondary Platform:   Web                                                     │
│  Future Platform:      Android                                                 │
│  Status:               Production                                             │
│  Last Updated:         June 2026                                               │
│  Owner:                Design Systems Team                                     │
│  Review Cycle:         Quarterly                                                │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-2 · Purpose Statement

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│     "Defines how every future design decision is made."                       │
│                                                                                │
│     This document is the foundation. It never changes often.                   │
│     Every component, token, and pattern traces back here.                      │
│                                                                                │
│  ───────────────────────────────────────────────────────────────────────────   │
│                                                                                │
│  Guiding Question:                                                             │
│                                                                                │
│  "Will this decision make our users trust us more and feel financially clear?" │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-3 · Design Vision

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  THE 3 PILLARS                                                                │
│                                                                                │
│  ┌─────────────────────────┐  ┌─────────────────────────┐  ┌─────────────────────────┐  │
│  │                         │  │                         │  │                         │  │
│  │       V I S I O N       │  │       M I S S I O N     │  │   LONG-TERM DIRECTION  │  │
│  │                         │  │                         │  │                         │  │
│  │  A world where         │  │  Make complex           │  │  Become the design     │  │
│  │  financial clarity     │  │  financial decisions    │  │  standard for fintech  │  │
│  │  is universal.         │  │  simple and empowering. │  │  — calm, clear,        │  │
│  │                         │  │                         │  │  trustworthy.          │  │
│  │                         │  │                         │  │                         │  │
│  └─────────────────────────┘  └─────────────────────────┘  └─────────────────────────┘  │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-4 · The 10 Design Principles

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  THE 10 DESIGN PRINCIPLES                                                     │
│                                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │     01     │  │     02     │  │     03     │  │     04     │  │     05     │  │
│  │            │  │            │  │            │  │            │  │            │  │
│  │   TRUST    │  │   REDUCE   │  │  FINANCIAL │  │    CALM    │  │ ACCESSI-   │  │
│  │   FIRST    │  │ COMPLEXITY│  │   CLARITY  │  │ INTERFACES │  │   BILITY   │  │
│  │            │  │            │  │            │  │            │  │ BY DEFAULT │  │
│  │  Every     │  │   Remove   │  │   Numbers  │  │    No      │  │  WCAG AA   │  │
│  │  pixel     │  │  before    │  │  must tell │  │  anxiety.  │  │  minimum,  │  │
│  │  builds    │  │  adding.   │  │  the truth.│  │  Slow is  │  │  AAA for   │  │
│  │  trust.    │  │            │  │            │  │  calm.    │  │  financial │  │
│  │            │  │            │  │            │  │            │  │  critical. │  │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘  └────────────┘  │
│                                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐  │
│  │     06     │  │     07     │  │     08     │  │     09     │  │     10     │  │
│  │            │  │            │  │            │  │            │  │            │  │
│  │   NATIVE   │  │ PROGRESS-  │  │CONSISTENCY │  │     AI     │  │   REMOVE   │  │
│  │   FIRST    │  │    IVE     │  │    OVER     │  │  ASSISTS,  │  │   BEFORE   │  │
│  │            │  │ DISCLOSURE │  │ CREATIVITY  │  │   NEVER    │  │   ADDING   │  │
│  │  Apple HIG │  │  Show one  │  │   Same      │  │  REPLACES  │  │            │  │
│  │  is law.   │  │  thing at  │  │  patterns = │  │   Human    │  │  When in   │  │
│  │            │  │  a time.   │  │  less cogni- │  │  always    │  │  doubt,    │  │
│  │            │  │            │  │  tive load. │  │  wins.     │  │  delete.   │  │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘  └────────────┘  │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-5 · Principle Deep Dive Cards

```
┌──────────────────────────────────────────────────────────────────────┐
│ 01 · TRUST FIRST                     │ 02 · REDUCE COMPLEXITY      │
│                                      │                              │
│ "Trust is earned in small moments."  │ "Complexity is easy. Simplicity│
│                                      │  is hard."                   │
│ ✓ Consistent patterns                │ ✓ Hide advanced options      │
│ ✓ Honest numbers (no cherry-picking)│ ✓ Progressive disclosure      │
│ ✓ Transparent costs and fees         │ ✓ One primary action per step │
│ ✓ Clear error messages               │ ✓ Never overwhelm with data   │
│ ✓ Respect user time                  │                              │
├──────────────────────────────────────┴──────────────────────────────┤
│ 03 · FINANCIAL CLARITY               │ 04 · CALM INTERFACES         │
│                                      │                              │
│ "Money is serious. Numbers must      │ "Financial apps cause anxiety.│
│  never lie or mislead."              │  Ours should cure it."        │
│                                      │                              │
│ ✓ Use color purposefully (green =     │ ✓ Generous whitespace        │
│   gains only, never positive bias)   │ ✓ Slow, deliberate animations │
│ ✓ Show context alongside numbers     │ ✓ No aggressive red unless   │
│ ✓ Consistent currency formatting     │   real loss                   │
│ ✓ Tabular numerals for alignment     │ ✓ Breathing room between      │
│                                      │   metrics                     │
├──────────────────────────────────────┴──────────────────────────────┤
│ 05 · ACCESSIBILITY BY DEFAULT        │ 06 · NATIVE FIRST            │
│                                      │                              │
│ "Accessible design is good design." │ "Platform conventions reduce  │
│                                      │  cognitive load."            │
│ ✓ WCAG AA minimum                    │                              │
│ ✓ AAA for financial critical info    │ ✓ Apple Human Interface        │
│ ✓ Dynamic Type support                │   Guidelines first           │
│ ✓ Minimum 4.5:1 contrast ratio       │ ✓ Respect platform patterns    │
│ ✓ VoiceOver/TalkBack ready           │ ✓ Native-feeling interactions │
│ ✓ Reduced motion support              │                              │
├──────────────────────────────────────┴──────────────────────────────┤
│ 07 · PROGRESSIVE DISCLOSURE          │ 08 · CONSISTENCY OVER         │
│                                      │    CREATIVITY                 │
│ "Show what matters now.              │ "Innovation is welcome. Chaos │
│  Reveal more on demand."             │  is not."                    │
│                                      │                              │
│ ✓ Summary view first                 │ ✓ Same components behave      │
│ ✓ Drill-down on tap                  │   the same way everywhere     │
│ ✓ Expandable detail sections         │ ✓ Established patterns first  │
│ ✓ "Show more" for power users        │ ✓ Creative exceptions must    │
│                                      │   be justified and rare       │
├──────────────────────────────────────┴──────────────────────────────┤
│ 09 · AI ASSISTS, NEVER REPLACES     │ 10 · REMOVE BEFORE ADDING     │
│                                      │                              │
│ "AI gives options. Humans decide."  │ "The best feature is the one  │
│                                      │  you didn't add."            │
│ ✓ AI explains its reasoning          │                              │
│ ✓ Always human-in-the-loop           │ ✓ If it doesn't improve       │
│ ✓ AI recommendations are labeled     │   usability, DELETE it        │
│ ✓ Never fully automate financial      │ ✓ New components need strong   │
│   decisions without human sign-off    │   justification to be added   │
│                                      │ ✓ Reduce, don't expand        │
└──────────────────────────────────────┴──────────────────────────────┘
```

## Page: 01-6 · Brand Personality

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  BRAND PERSONALITY — THE 8 TRAITS                                             │
│                                                                                │
│  CALM         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  TRUSTWORTHY  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  INTELLIGENT  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  HELPFUL      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  HUMAN        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  TRANSPARENT  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  PREMIUM      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  TIMELESS     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                                │
│  INTERPRETATION:                                                              │
│  ▓▓▓ = Primary emphasis    ░ = Secondary expression                           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-7 · Design Constraints

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  HARD CONSTRAINTS — THESE ARE NOT NEGOTIABLE                                  │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                          │  │
│  │  ✓ Apple HIG First                                                       │  │
│  │    Every iOS design decision defers to Apple's Human Interface           │  │
│  │    Guidelines. When in conflict, HIG wins.                                │  │
│  │                                                                          │  │
│  │  ✓ One Design Language                                                   │  │
│  │    iOS, Android, and Web share the same tokens, components, patterns.    │  │
│  │                                                                          │  │
│  │  ✓ Semantic Tokens Only                                                  │  │
│  │    No hardcoded hex values in components. All values reference           │  │
│  │    semantic token aliases.                                               │  │
│  │                                                                          │  │
│  │  ✓ Auto Layout Required                                                  │  │
│  │    Every frame uses Auto Layout. No fixed layouts.                       │  │
│  │                                                                          │  │
│  │  ✓ Component Properties Required                                         │  │
│  │    All components use Component Properties for variant switching.       │  │
│  │                                                                          │  │
│  │  ✓ Variables Required                                                    │  │
│  │    Figma Variables used for all color, spacing, and typography tokens.   │  │
│  │                                                                          │  │
│  │  ✓ No Hardcoded Values                                                   │  │
│  │    Components → Tokens → Variables. No "345px" anywhere in the system.  │  │
│  │                                                                          │  │
│  │  ✓ 3 Radius Tokens Only                                                  │  │
│  │    --radius-sm: 8px | --radius-md: 12px | --radius-full: 9999px         │  │
│  │                                                                          │  │
│  │  ✓ 3 Elevation Tokens Only                                               │  │
│  │    Flat | Raised | Floating                                              │  │
│  │                                                                          │  │
│  │  ✓ One Icon Family                                                       │  │
│  │    SF Symbols (iOS primary) / Phosphor Icons (cross-platform web)        │  │
│  │                                                                          │  │
│  │  ✓ One Grid System                                                       │  │
│  │    4pt base grid. 8-column iOS layout. 12-column web layout.             │  │
│  │                                                                          │  │
│  └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-8 · Constraint Visual Reference

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  RADIUS TOKENS                         ELEVATION TOKENS                      ║
║  ─────────────                         ────────────────                      ║
║                                                                              ║
║  ┌──────────┐                          ┌──────────┐                           ║
║  │   sm     │                          │   FLAT   │   No shadow              ║
║  │   8px    │                          │          │                          ║
║  └──────────┘                          └──────────┘                           ║
║                                                                              ║
║  ┌──────────┐                          ┌──────────┐                           ║
║  │   md     │                          │  RAISED  │   shadow-sm + shadow-md ║
║  │   12px   │                          │          │                          ║
║  └──────────┘                          └──────────┘                           ║
║                                                                              ║
║  ┌──────────┐                          ┌──────────┐                           ║
║  │  full    │                          │ FLOATING │   shadow-lg + shadow-xl   ║
║  │  9999px  │                          │          │                          ║
║  └──────────┘                          └──────────┘                           ║
║                                                                              ║
║  ─────────────────────────────────────────────────────────────────────────   ║
║                                                                              ║
║  SPACING TOKENS                                                               ║
║  ─────────────                                                               ║
║                                                                              ║
║  4px  ·  8px  ·  12px  ·  16px  ·  24px  ·  32px  ·  48px                  ║
║  ─────────────────────────────────────────────────────────────                ║
║  XS        S       M        L        XL       XXL      XXXL                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

## Page: 01-9 · Platform Strategy

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                           PLATFORM STRATEGY                                   │
│                                                                                │
│                                    ┌──────────┐                               │
│                                    │   iOS    │ PRIMARY                       │
│                                    │  ●●●●●   │                               │
│                                    └──────────┘                               │
│                                   ╱            ╲                               │
│                                  ╱              ╲                              │
│                                 ╱                ╲                             │
│                ┌──────────┐                    ┌──────────┐                   │
│                │   Web    │                    │ Android  │                   │
│                │   ●●●    │ SECONDARY          │   ○○○    │ FUTURE           │
│                └──────────┘                    └──────────┘                   │
│                                                                                │
│  iOS ─────────────────────────────────────────────────────────────────────   │
│  • Source of truth for all design decisions                                   │
│  • Follow Apple HIG without exception                                         │
│  • SF Symbols as primary iconography                                         │
│  • 8-column grid, 16px margins                                                │
│  • Safe area aware                                                           │
│  • Native iOS components and patterns                                         │
│                                                                                │
│  Web ──────────────────────────────────────────────────────────────────────   │
│  • Port of iOS design, not a separate system                                  │
│  • Phosphor Icons (regular weight)                                            │
│  • 12-column grid, 24px margins                                               │
│  • Responsive breakpoints: 375 / 768 / 1024 / 1440                            │
│                                                                                │
│  Android (Future) ────────────────────────────────────────────────────────     │
│  • Will follow Material Design 3 mapped to Advizmo tokens                     │
│  • Jetpack Compose with token-first approach                                  │
│  • Not in scope for v1.0                                                      │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 01-10 · Decision Flow

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  HOW TO USE THIS DESIGN LANGUAGE                                               │
│                                                                                │
│  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐                 │
│  │ 01 CONSTITUTION│   │ 02 FOUNDATIONS │   │ 03 TOKENS      │                 │
│  │                │   │                │   │                │                 │
│  │ The WHY        │   │ The WHAT       │   │ The VALUES     │                 │
│  └───────┬────────┘   └───────┬────────┘   └───────┬────────┘                 │
│          │                      │                    │                          │
│          └──────────────────────┼────────────────────┘                          │
│                                 │                                              │
│                                 ▼                                              │
│                      ┌────────────────────┐                                    │
│                      │                    │                                     │
│                      │  EVERY DESIGN      │                                     │
│                      │  DECISION          │                                     │
│                      │                    │                                     │
│                      └───────┬────────────┘                                     │
│                              │                                                  │
│          ┌──────────────────┼──────────────────┐                               │
│          │                  │                   │                               │
│          ▼                  ▼                   ▼                               │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐                     │
│  │  COMPONENTS   │  │   PATTERNS    │  │   TEMPLATES   │                     │
│  │               │  │               │  │               │                     │
│  │  Sections 04-07│  │  Section 09   │  │  Sections 10-11│                     │
│  └───────────────┘  └───────────────┘  └───────────────┘                     │
│                                                                                │
│  DECISION FLOW:                                                               │
│  → "Does this decision align with the Constitution?"                           │
│  → "Does it use tokens from Foundations?"                                     │
│  → "Is this component built from primitives?"                                 │
│  → "Have we removed before adding?"                                           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 02 FOUNDATIONS

## Page: 02-1 · Foundations Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                         FOUNDATIONS                                            │
│                                                                                │
│            The building blocks that every design decision uses.                │
│            This section defines what we build with.                            │
│                                                                                │
│                                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐              │
│  │    COLOR   │  │ TYPOGRAPHY │  │  SPACING   │  │  RADIUS    │              │
│  │   SYSTEM   │  │            │  │            │  │            │              │
│  │  8 scales  │  │  2 faces   │  │  7 values  │  │  3 values  │              │
│  │  2 themes   │  │  14 roles  │  │  4pt grid   │  │  3 values   │              │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘              │
│                                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐              │
│  │  ELEVATION │  │   MOTION   │  │ ICONOGRAPHY│  │    GRID    │              │
│  │            │  │            │  │            │  │            │              │
│  │  3 levels  │  │  5 curves  │  │  1 family  │  │  8 / 12 col│              │
│  │  shadows   │  │  durations  │  │  2 weights  │  │  safe areas│              │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘              │
│                                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                               │
│  │    BRAND   │  │  BORDERS   │  │    DARK    │                               │
│  │            │  │            │  │    MODE    │                               │
│  │  Voice     │  │  4 weights │  │  Full      │                               │
│  │  Photography│  │  4 styles  │  │  token parity│                             │
│  │  Illustration│ │            │  │             │                               │
│  └────────────┘  └────────────┘  └────────────┘                               │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-2 · Color System Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          COLOR SYSTEM                                         │
│                                                                                │
│              Two layers: Primitive palette → Semantic tokens                     │
│                                                                                │
│                                                                                │
│  PRIMITIVE PALETTE                        SEMANTIC TOKENS                      │
│  ────────────────                        ──────────────                       │
│                                                                                │
│  Blue (10 stops)                         Brand & Primary                      │
│  Gray (10 stops)                         Positive / Negative / Warning        │
│  Green (10 stops)                        Information / AI                      │
│  Red (10 stops)                          Surface / Text / Border               │
│  Orange (6 stops)                        Financial (gains, losses, etc.)       │
│  Purple (6 stops)                                                              │
│  Teal (6 stops)                                                                │
│  Yellow (6 stops)                                                               │
│                                                                                │
│  66 PRIMITIVE COLORS                      60+ SEMANTIC TOKENS                  │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-3 · Primitive — Blue & Gray Scales

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  BLUE — Primary Brand Color                                                   │
│  Used for: Brand primary, interactive elements, links, focus states           │
│                                                                                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │ BLUE 50 │  │BLUE 100 │  │BLUE 200 │  │BLUE 300 │  │BLUE 400 │            │
│  │ #EFF6FF │  │#DBEAFE  │  │#BFDBFE  │  │#93C5FD  │  │#60A5FA  │            │
│  │▓░░░░░░░│  │▓▓░░░░░░│  │▓▓▓░░░░░│  │▓▓▓▓░░░░░│  │▓▓▓▓▓░░░░░│            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │BLUE 500 │  │BLUE 600 │  │BLUE 700 │  │BLUE 800 │  │BLUE 900 │            │
│  │ #3B82F6 │  │ #2563EB │  │ #1D4ED8 │  │ #1E40AF │  │ #1E3A8A │            │
│  │▓▓▓▓▓▓░░░░│  │▓▓▓▓▓▓▓░░░│  │▓▓▓▓▓▓▓▓░░│  │▓▓▓▓▓▓▓▓▓░░│  │▓▓▓▓▓▓▓▓▓▓░│            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│                                                                                │
│  GRAY — Neutral Scale                                                         │
│  Used for: Text, borders, backgrounds, surfaces                               │
│                                                                                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │GRAY 50  │  │GRAY 100 │  │GRAY 200 │  │GRAY 300 │  │GRAY 400 │            │
│  │ #F9FAFB │  │ #F3F4F6 │  │ #E5E7EB │  │ #D1D5DB │  │ #9CA3AF │            │
│  │░░░░░░░░░│  │▓░░░░░░░░│  │▓▓░░░░░░░│  │▓▓▓░░░░░░│  │▓▓▓▓░░░░░░│            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │GRAY 500 │  │GRAY 600 │  │GRAY 700 │  │GRAY 800 │  │GRAY 900 │            │
│  │ #6B7280 │  │ #4B5563 │  │ #374151 │  │ #1F2937 │  │ #111827 │            │
│  │▓▓▓▓▓░░░░░│  │▓▓▓▓▓▓░░░│  │▓▓▓▓▓▓▓░░░│  │▓▓▓▓▓▓▓▓░░░│  │▓▓▓▓▓▓▓▓▓░░│            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-4 · Primitive — Green / Red / Orange / Purple

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  GREEN — Financial Positive ONLY                                               │
│  Used for: Investment gains, goal completion, income                           │
│  NEVER use for: General positive sentiment, approvals, success                 │
│                                                                                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  50     │  │  100    │  │  200    │  │  300    │  │  400    │            │
│  │ #ECFDF5 │  │#D1FAE5  │  │#A7F3D0  │  │#6EE7B7  │  │#34D399  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                                         │
│  │  500    │  │  600    │  │  700    │                                         │
│  │#10B981  │  │#059669  │  │#047857  │                                         │
│  └─────────┘  └─────────┘  └─────────┘                                         │
│                                                                                │
│  RED — Financial Negative ONLY                                                 │
│  Used for: Investment losses, declines, expenses                               │
│                                                                                │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  50     │  │  100    │  │  200    │  │  300    │  │  400    │            │
│  │ #FEF2F2 │  │#FEE2E2  │  │#FECACA  │  │#FCA5A5  │  │#F87171  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                                         │
│  │  500    │  │  600    │  │  700    │                                         │
│  │#EF4444  │  │#DC2626  │  │#B91C1C  │                                         │
│  └─────────┘  └─────────┘  └─────────┘                                         │
│                                                                                │
│  ORANGE — Warning / Attention                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  50     │  │  100    │  │  200    │  │  300    │  │  400    │            │
│  │ #FFF7ED │  │#FFEDD5  │  │#FED7AA  │  │#FDBA74  │  │#FB923C  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐                                                                  │
│  │  500    │  #F97316                                                          │
│  └─────────┘                                                                  │
│                                                                                │
│  PURPLE — AI / Intelligent                                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │  50     │  │  100    │  │  200    │  │  300    │  │  400    │            │
│  │ #FAF5FF │  │#F3E8FF  │  │#E9D5FF  │  │#D8B4FE  │  │#C084FC  │            │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│  ┌─────────┐                                                                  │
│  │  500    │  #A855F7                                                          │
│  └─────────┘                                                                  │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-5 · Semantic — Brand & Surface

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  SEMANTIC TOKENS — BRAND                                                       │
│                                                                                │
│  primary            ████████  #3B82F6  Blue 500                              │
│  primary-hover      ████████  #2563EB  Blue 600                              │
│  primary-pressed    ████████  #1D4ED8  Blue 700                              │
│  primary-surface    ████████  #EFF6FF  Blue 50                               │
│  primary-border     ████████  #DBEAFE  Blue 100                               │
│  primary-focus      ████████  #3B82F6  (2px ring)                            │
│  primary-text       ████████  #FFFFFF  (on primary bg)                        │
│                                                                                │
│  SEMANTIC TOKENS — SURFACE                                                     │
│                                                                                │
│  background         ████████  #F9FAFB  Page background                       │
│  surface            ████████  #FFFFFF  Card / component background            │
│  surface-raised     ████████  #FFFFFF  Elevated card                          │
│  surface-floating   ████████  #FFFFFF  Floating element (dropdown)             │
│  surface-inverse    ████████  #1F2937  Dark surface                           │
│                                                                                │
│  text-primary       ████████  #111827  Gray 900                               │
│  text-secondary     ████████  #4B5563  Gray 600                               │
│  text-tertiary      ████████  #6B7280  Gray 500                               │
│  text-disabled      ████████  #9CA3AF  Gray 400                               │
│  text-inverse       ████████  #FFFFFF  White                                  │
│                                                                                │
│  border-subtle      ████████  #F3F4F6  Gray 100                               │
│  border-default     ████████  #E5E7EB  Gray 200                               │
│  border-strong      ████████  #D1D5DB  Gray 300                               │
│  border-focus       ████████  #3B82F6  Blue 500                               │
│  border-disabled    ████████  #E5E7EB  Gray 200                               │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-6 · Semantic — Financial

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  SEMANTIC TOKENS — FINANCIAL                                                   │
│  These tokens communicate financial meaning. Use them precisely.               │
│                                                                                │
│  investment-gain        ████████  #10B981  Green 500    ▲ +$420.00            │
│  investment-gain-weak   ████████  #34D399  Green 400                         │
│                                                                                │
│  investment-loss        ████████  #EF4444  Red 500     ▼ -$420.00            │
│  investment-loss-weak   ████████  #F87171  Red 400                          │
│                                                                                │
│  pending               ████████  #F97316  Orange 500    Processing            │
│  forecast              ████████  #8B5CF6  Purple 500    Predicted             │
│  dividend              ████████  #10B981  Green 500     Dividend              │
│  tax-saved             ████████  #10B981  Green 500     Tax benefit           │
│  tax-due               ████████  #EF4444  Red 500      Tax owed               │
│  goal-complete         ████████  #10B981  Green 500     Complete              │
│  goal-at-risk          ████████  #F97316  Orange 500    At risk               │
│  automation-active     ████████  #10B981  Green 500     Active                │
│  automation-paused     ████████  #F97316  Orange 500    Paused                │
│  market-closed         ████████  #9CA3AF  Gray 400      Closed                │
│                                                                                │
│  ⚠ FINANCIAL COLOR RULES:                                                     │
│  • Green = ONLY for financial gains and positive financial outcomes            │
│  • Red = ONLY for financial losses and negative financial outcomes             │
│  • Never use green/red for non-financial UI states                            │
│  • Never use color alone — always pair with icon and/or text label            │
│  • Loss and gain colors must have equal visual weight                          │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-7 · Dark Mode Tokens

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  DARK MODE TOKENS                                                              │
│  Full token parity with light mode. Invert semantically, not literally.        │
│                                                                                │
│  SURFACE                        TEXT                                          │
│  ────────                       ──────                                         │
│  background    ▓▓▓▓  #0F172A    text-primary    ▓▓▓▓  #F9FAFB                 │
│  surface      ▓▓▓▓  #1E293B     text-secondary  ▓▓▓▓  #94A3B8                 │
│  surface-raised ▓▓▓▓  #334155   text-tertiary   ▓▓▓▓  #64748B                 │
│  surface-floating ▓▓▓▓  #475569  text-disabled   ▓▓▓▓  #475569                 │
│  surface-inverse ▓▓▓▓  #F1F5F9   text-inverse    ▓▓▓▓  #0F172A                 │
│                                                                                │
│  BORDER                                                                      │
│  border-subtle    ▓▓▓▓  #1E293B                                                │
│  border-default   ▓▓▓▓  #334155                                                │
│  border-strong    ▓▓▓▓  #475569                                                │
│  border-focus     ▓▓▓▓  #3B82F6 (same as light)                                │
│  border-disabled  ▓▓▓▓  #1E293B                                                │
│                                                                                │
│  FINANCIAL (DARK)                                                              │
│  investment-gain      ▓▓▓▓  #34D399 (lighter for dark contrast)               │
│  investment-loss     ▓▓▓▓  #F87171 (lighter for dark contrast)               │
│  pending              ▓▓▓▓  #FB923C                                             │
│  forecast             ▓▓▓▓  #A78BFA                                             │
│                                                                                │
│  BRAND (DARK)                                                                  │
│  primary             ▓▓▓▓  #60A5FA (lighter for dark mode)                    │
│  primary-hover       ▓▓▓▓  #93C5FD                                             │
│  primary-pressed     ▓▓▓▓  #3B82F6                                             │
│  primary-surface     ▓▓▓▓  #1E3A8A                                             │
│  primary-border      ▓▓▓▓  #1E40AF                                              │
│  primary-text        ▓▓▓▓  #FFFFFF                                             │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-8 · Typography System Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          TYPOGRAPHY SYSTEM                                     │
│                                                                                │
│              Two typefaces. Distinct roles. Never mixed inappropriately.      │
│                                                                                │
│  ┌──────────────────────────────────┐  ┌──────────────────────────────────┐    │
│  │           INTER                  │  │       IBM PLEX SANS              │    │
│  │                                  │  │                                  │    │
│  │     Aa Bb Cc Dd Ee Ff           │  │     Aa Bb Cc Dd Ee Ff            │    │
│  │     Gg Hh Ii Jj Kk Ll           │  │     Gg Hh Ii Jj Kk Ll            │    │
│  │     Mm Nn Oo Pp Qq Rr           │  │     Mm Nn Oo Pp Qq Rr            │    │
│  │     Ss Tt Uu Vv Ww Xx           │  │     Ss Tt Uu Vv Ww Xx            │    │
│  │     Yy Zz 0123456789            │  │     Yy Zz 0123456789             │    │
│  │                                  │  │                                  │    │
│  │   WEIGHTS: 400 500 600 700      │  │   WEIGHTS: 400 500 600 700      │    │
│  │                                  │  │                                  │    │
│  │   ROLE: UI (90-95%)             │  │   ROLE: Financial Display Only   │    │
│  │                                  │  │            (5-10%)               │    │
│  │   • Buttons, labels, nav         │  │                                  │    │
│  │   • Body text, captions         │  │   • Portfolio values             │    │
│  │   • Form elements               │  │   • Net worth display           │    │
│  │   • All interface text          │  │   • Large financial numbers     │    │
│  │                                  │  │   • Stock quotes                │    │
│  └──────────────────────────────────┘  └──────────────────────────────────┘    │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-9 · Type Scale — Inter

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  INTER — UI TYPEFACE                                                           │
│  Used for: All interface text, buttons, labels, navigation, body               │
│                                                                                │
│  DISPLAY XL      36px / 44px      700   Advizmo Dashboard                      │
│  DISPLAY L       28px / 36px      600   Portfolio Overview                     │
│  DISPLAY M       24px / 32px      600   Section Headers                       │
│  ─────────────────────────────────────────────────────────────                  │
│  TITLE L         20px / 28px      600   Card Titles                           │
│  TITLE M         17px / 24px      600   List Item Headers                      │
│  ─────────────────────────────────────────────────────────────                  │
│  BODY L          16px / 24px      400   Primary body text                      │
│  BODY M          14px / 20px      400   Secondary body text                   │
│  BODY S          13px / 18px      400   Supporting text                       │
│  ─────────────────────────────────────────────────────────────                  │
│  LABEL L         14px / 20px      500   Button text (large)                    │
│  LABEL M         12px / 16px      500   Button text (default)                  │
│  CAPTION         12px / 16px      400   Helper text, timestamps                │
│  OVERLINE        11px / 16px      600   Section labels (uppercase)             │
│                                                                                │
│  LINE HEIGHT: 1.25 for headings, 1.5 for body, 1.75 for long-form              │
│  LETTER SPACING: -0.5px for Display, 0 for Body, +0.5px for Overline           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-10 · Type Scale — IBM Plex Sans

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  IBM PLEX SANS — FINANCIAL DISPLAY ONLY                                        │
│  Used for: Large financial numbers, portfolio values, stock quotes             │
│  NEVER used for: UI elements, buttons, navigation, body text                     │
│                                                                                │
│  FINANCIAL XL    40px / 48px      600   $1,234,567.89                         │
│                   Tabular nums                                                   │
│                                                                                │
│  FINANCIAL L     32px / 40px      600   $1,234,567.89                         │
│                   Tabular nums                                                   │
│                                                                                │
│  FINANCIAL M     24px / 32px      500   $1,234.56                              │
│                   Tabular nums                                                   │
│                                                                                │
│  FINANCIAL S     20px / 28px      500   $1,234.56                              │
│                   Tabular nums                                                   │
│                                                                                │
│  USAGE RULES:                                                                  │
│  • ONLY for displaying monetary values $100+                                   │
│  • ALWAYS use tabular numerals (font-variant-numeric: tabular-nums)            │
│  • NEVER use for labels, buttons, or non-financial data                        │
│  • Pair with Label M (Inter) for the currency symbol                           │
│                                                                                │
│  CORRECT:                                                                     │
│  Label M: "Portfolio Value"                                                    │
│  Financial L: "$124,567.89"                                                    │
│                                                                                │
│  WRONG:                                                                       │
│  Body L: "Your total is $124,567.89" ← Use Inter for the sentence              │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-11 · Typography — Usage in Context

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  EXAMPLE: PORTFOLIO CARD                                                      │
│  ───────────────────────────────────────────────────────────────────────────   │
│  TITLE M: "Apple Inc."                              LABEL M: "AAPL"            │
│  FINANCIAL L: "$12,456.78"                          Label M: "+24.5% ▲"       │
│  Body M: "124 shares · $100.46/share"                                      │
│                                                                                │
│  EXAMPLE: DASHBOARD HEADER                                                     │
│  ───────────────────────────────────────────────────────────────────────────   │
│  DISPLAY XL: "Good morning, Sarah"                                           │
│  DISPLAY M: "Your Portfolio"                                                 │
│  FINANCIAL XL: "$124,567.89"                                                  │
│  Body S: "↑ $4,567.89 today"                                                  │
│                                                                                │
│  EXAMPLE: TRANSACTION ROW                                                     │
│  ───────────────────────────────────────────────────────────────────────────   │
│  Label M: "Starbucks"                               Body S: "Today"            │
│  Body M: "Coffee"                                      Caption: "-$5.75"       │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-12 · Spacing System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          SPACING SYSTEM                                        │
│                          4pt Base Grid                                         │
│                                                                                │
│  All spacing values are multiples of 4. No exceptions.                         │
│                                                                                │
│  TOKEN        VALUE      EXAMPLE USAGE                                         │
│  ───────      ─────      ─────────────                                      │
│                                                                                │
│  space-xs     4px        Icon-to-label gap, tight inline spacing               │
│  space-s      8px        Between related elements, input padding-y              │
│  space-m      12px       Standard element padding, list item gaps               │
│  space-l      16px       Card padding, section gaps, button padding             │
│  space-xl     24px       Section spacing, major component gaps                  │
│  space-xxl    32px       Page section margins, large card padding              │
│  space-xxxl   48px       Hero sections, major page divisions                   │
│                                                                                │
│  VISUAL:                                                                     │
│  4px   ▐▌                                                                    │
│  8px   ▐▌▌                                                                   │
│  12px  ▐▌▌▌                                                                  │
│  16px  ▐▌▌▌▌                                                                 │
│  24px  ▐▌▌▌▌▌▌                                                               │
│  32px  ▐▌▌▌▌▌▌▌                                                              │
│  48px  ▐▌▌▌▌▌▌▌▌▌▌                                                           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-13 · Radius System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          RADIUS SYSTEM                                         │
│                          3 Tokens Only                                        │
│                                                                                │
│  RADIUS SM         8px                                                        │
│  Use for: Buttons, Input fields, Small chips and badges,                      │
│           Small cards (under 200px width)                                      │
│                                                                                │
│  ┌──────────────────┐                                                        │
│  │                  │  8px radius                                            │
│  │    SM CARD       │                                                        │
│  │                  │                                                        │
│  └──────────────────┘                                                        │
│                                                                                │
│  RADIUS MD         12px                                                       │
│  Use for: Medium cards, Modal sheets, Bottom sheets,                           │
│           Larger interactive surfaces                                         │
│                                                                                │
│  ┌──────────────────────┐                                                    │
│  │                      │                                                    │
│  │       MD CARD       │  12px radius                                        │
│  │                      │                                                    │
│  │                      │                                                    │
│  └──────────────────────┘                                                    │
│                                                                                │
│  RADIUS FULL        9999px (Pill)                                            │
│  Use for: Pills and segmented controls, Avatar circles,                        │
│           Circular buttons                                                     │
│                                                                                │
│       ┌─────────────────────────┐                                            │
│       │       FULL (PILL)        │                                            │
│       └─────────────────────────┘                                            │
│                                                                                │
│  RULES:                                                                       │
│  • ONLY these 3 radius values exist in the system                              │
│  • No intermediate values (10px, 14px, etc.)                                  │
│  • When in doubt, prefer smaller radius                                       │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-14 · Elevation System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          ELEVATION SYSTEM                                      │
│                          3 Levels Only                                        │
│                                                                                │
│       FLAT                    RAISED                    FLOATING              │
│      ─────                   ──────                    ─────────               │
│                                                                                │
│   ┌──────────┐           ┌──────────┐           ┌──────────┐                 │
│   │          │           │          │           │          │                 │
│   │  SURFACE │           │  RAISED  │           │ FLOATING │                 │
│   │          │           │          │           │          │                 │
│   │          │           │          │           │          │                 │
│   └──────────┘           └──────────┘           └──────────┘                 │
│                                                                                │
│   No shadow             sm + md shadows         lg + xl shadows               │
│                                                                                │
│  FLAT:    No shadow. For background, page dividers.                            │
│                                                                                │
│  RAISED:  shadow-sm (0 1px 2px rgba(0,0,0,0.05)) +                             │
│           shadow-sm (0 1px 3px rgba(0,0,0,0.08))                               │
│           Use for: Cards on page, list items                                   │
│                                                                                │
│  FLOATING: shadow-lg (0 4px 12px rgba(0,0,0,0.1)) +                            │
│            shadow-xl (0 8px 24px rgba(0,0,0,0.12))                             │
│            Use for: Dropdowns, popovers, FABs, tooltips                        │
│                                                                                │
│  RULES:                                                                       │
│  • iOS: Flat is standard. Use raised sparingly.                                │
│  • Floating only for true floating elements.                                   │
│  • Never create "fake" depth.                                                  │
│  • Dark mode uses 10% white shadows.                                          │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-15 · Motion System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          MOTION SYSTEM                                         │
│                          Calm · Deliberate · Purposeful                        │
│                                                                                │
│  DURATION SCALE                                                               │
│  ─────────────────────────────────────────────────────────────────────────    │
│  duration-xs:    80ms     Micro-interactions (checkbox, toggle)              │
│  duration-s:     120ms    Small UI changes (button hover, tooltip)            │
│  duration-m:     200ms    Standard transitions (card expand)                  │
│  duration-l:     300ms    Page transitions, modal appear                      │
│  duration-xl:    400ms    Large layout changes                                │
│  duration-xxl:   500ms    Full page transitions                               │
│                                                                                │
│  CURVE REFERENCE                                                              │
│  ─────────────────────────────────────────────────────────────────────────    │
│  linear        No easing. Only for opacity fades or loading.                  │
│  ease-in       Start slow, end fast. For elements exiting.                     │
│  ease-out      Start fast, end slow. DEFAULT. For elements entering.           │
│  ease-in-out   Start and end slow. For elements moving or resizing.           │
│  spring        Natural spring physics. For drag/touch interactions.           │
│                                                                                │
│  REDUCE MOTION                                                                │
│  ─────────────────────────────────────────────────────────────────────────    │
│  Always respect the system's Reduce Motion setting.                             │
│  When enabled: Replace all motion with 0ms opacity fades.                      │
│                                                                                │
│  USAGE BY CONTEXT                                                             │
│  ─────────────────────────────────────────────────────────────────────────    │
│  APPEAR/ENTER:  ease-out, 200-300ms    DISAPPEAR/EXIT: ease-in, 150-200ms     │
│  STATE CHANGE: ease-in-out, 200ms      MICRO-INTERACTION: linear, 80-120ms     │
│  LAYOUT CHANGE: ease-in-out, 300-400ms  DRAG/SCROLL: spring, physics           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-16 · Icon System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          ICON SYSTEM                                           │
│                          SF Symbols + Phosphor Icons                           │
│                                                                                │
│  PRIMARY: SF Symbols (iOS)          SECONDARY: Phosphor (Web)                 │
│  Use SF Symbols for ALL iOS-native experiences.                                │
│  Use Phosphor Icons (Regular weight) for web, Android, cross-platform.        │
│                                                                                │
│  SIZE SCALE                                                                   │
│  icon-xs:   12px    Small labels or badges                                    │
│  icon-s:    16px    Caption text, list item metadata                           │
│  icon-m:    20px    Standard icon size for UI elements                        │
│  icon-l:    24px    Primary icons in cards, navigation                        │
│  icon-xl:   32px    Section icons, feature indicators                         │
│  icon-xxl:  48px    Empty state illustrations, large indicators                │
│                                                                                │
│  STROKE WEIGHT                                                                │
│  SF Symbols: Variable (automatic)                                              │
│  Phosphor: Regular (1.5px stroke at 24px)                                      │
│  Never mix outline and filled icons from same family.                          │
│                                                                                │
│  NAMING CONVENTION                                                             │
│  ✓ icon-arrow-up-right   ✓ icon-chart-line-up   ✓ icon-wallet-outline          │
│  ✗ icon-arrow            ✗ icon-chart           ✗ icon-wallet                │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 02-17 · Grid System

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          GRID SYSTEM                                          │
│                          4pt Base · Platform-Adaptive                         │
│                                                                                │
│  iOS (8-Column)                       Web (12-Column)                          │
│  ───────────────                       ────────────────                        │
│  Gutter: 8px                          Gutter: 16px                            │
│  Margin: 16px (compact)               Margin: 24px (mobile)                   │
│  Margin: 20px (regular)               Margin: 32px (tablet)                   │
│                                        Margin: 48px (desktop)                 │
│  375px: 8 columns                     375px:  4 columns                        │
│  414px: 8 columns                     768px:  8 columns                        │
│                                        1024px: 12 columns                     │
│                                        1440px: 12 columns + max-width         │
│                                                                                │
│  SAFE AREAS (iOS)                                                                │
│  Top: Dynamic Island / Notch → min 59px                                        │
│  Bottom: Home Indicator → min 34px                                            │
│                                                                                │
│  RESPONSIVE BREAKPOINTS (Web)                                                  │
│  Mobile:   375px+ →  4 columns, 24px margin                                   │
│  Tablet:   768px+ →  8 columns, 32px margin                                   │
│  Desktop: 1024px+ → 12 columns, 48px margin                                   │
│  Wide:    1440px+ → 12 columns, max-width 1200px, centered                     │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 03 DESIGN TOKENS

## Page: 03-1 · Token Architecture Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                    DESIGN TOKEN ARCHITECTURE                                   │
│                          4 LAYER SYSTEM                                       │
│                                                                                │
│                         ┌─────────────────────┐                                │
│                         │   COMPONENT TOKENS  │  Layer 4 — Most Specific     │
│                         │   (Button Primary)  │                                │
│                         └──────────┬──────────┘                                │
│                                    │ references                                 │
│                                    ▼                                           │
│                         ┌─────────────────────┐                                │
│                         │   SEMANTIC TOKENS   │  Layer 3 — Meaning-Based       │
│                         │   (Primary, Surface) │                                │
│                         └──────────┬──────────┘                                │
│                                    │ references                                 │
│                                    ▼                                           │
│                         ┌─────────────────────┐                                │
│                         │   ALIAS TOKENS      │  Layer 2 — Named Abstract       │
│                         │   (Blue 500)        │                                │
│                         └──────────┬──────────┘                                │
│                                    │ references                                 │
│                                    ▼                                           │
│                         ┌─────────────────────┐                                │
│                         │   PRIMITIVE TOKENS  │  Layer 1 — Raw Values          │
│                         │   (#3B82F6, 16px)   │  (Figma Variables)            │
│                         └─────────────────────┘                                │
│                                                                                │
│  THE GOLDEN RULE:                                                              │
│  Components NEVER reference Alias or Primitive tokens directly.                 │
│  They ONLY reference Semantic tokens.                                          │
│  This enables theme switching and dark mode without touching components.        │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 03-2 · Token Categories

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  TOKEN CATEGORIES                                                              │
│                                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │    COLOR     │  │  TYPOGRAPHY  │  │   SPACING    │  │   RADIUS     │       │
│  │              │  │              │  │              │  │              │       │
│  │  Primitive   │  │  Font Family │  │  space-xs    │  │  radius-sm   │       │
│  │  (66 colors) │  │  Font Size   │  │  space-s     │  │  radius-md   │       │
│  │              │  │  Font Weight │  │  space-m     │  │  radius-full │       │
│  │  Semantic    │  │  Line Height │  │  space-l     │  │              │       │
│  │  (60+ tokens)│  │  Letter Spc  │  │  space-xl    │  │              │       │
│  │              │  │              │  │  space-xxl   │  │              │       │
│  │  Alias       │  │              │  │  space-xxxl  │  │              │       │
│  │  (reference) │  │              │  │              │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  ELEVATION   │  │   BORDER     │  │    MOTION    │  │    CHART     │       │
│  │              │  │              │  │              │  │              │       │
│  │  shadow-flat │  │  border-width│  │  duration-xs │  │  chart-blue-1│       │
│  │  shadow-raised│ │  border-style│  │  duration-s  │  │  chart-green-1│      │
│  │  shadow-float │  │              │  │  duration-m  │  │  chart-red-1 │       │
│  │              │  │              │  │  duration-l   │  │              │       │
│  │              │  │              │  │  curve-linear │  │              │       │
│  │              │  │              │  │  curve-ease   │  │              │       │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                                                │
│  ┌──────────────┐  ┌──────────────────────────────┐                             │
│  │     GRID     │  │       TYPOGRAPHY ROLE        │                             │
│  │              │  │                              │                             │
│  │  columns-ios │  │  display-xl, display-l, ...  │                             │
│  │  columns-web │  │  title-l, title-m, ...       │                             │
│  │  gutter-ios  │  │  body-l, body-m, body-s, ... │                             │
│  │  gutter-web  │  │  label-l, label-m, caption   │                             │
│  │  margin-ios  │  │  financial-xl, financial-l   │                             │
│  │  margin-web  │  │                              │                             │
│  └──────────────┘  └──────────────────────────────┘                             │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 04 PRIMITIVE COMPONENTS

## Page: 04-1 · Button Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                          BUTTON COMPONENT                                      │
│                                                                                │
│  VARIANTS                                                                     │
│  ─────────────────────────────────────────────────────────────────────────    │
│  PRIMARY      ┌──────────┐  Blue background, white text                         │
│  SECONDARY    ┌──────────┐  Gray background, dark text                         │
│  TERTIARY     ┌──────────┐  No fill, blue border + text                        │
│  DESTRUCTIVE  ┌──────────┐  Red background, white text                         │
│                                                                                │
│  SIZES                                                                      │
│  ─────────────────────────────────────────────────────────────────────────    │
│  LARGE     height: 52px   padding: 16px 32px   font: Label L                 │
│  DEFAULT   height: 44px   padding: 12px 24px   font: Label M                 │
│  SMALL     height: 36px   padding: 8px 16px    font: Label M                 │
│                                                                                │
│  STATES                                                                     │
│  ─────────────────────────────────────────────────────────────────────────    │
│  DEFAULT  HOVER  PRESSED  DISABLED  LOADING                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                        │
│  │ Button │ │ Button │ │ Button │ │ Button │ │   ◌   │                        │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘                        │
│                                                                                │
│  WITH ICONS                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌────┐  ┌────┐                        │
│  │ ◌  Button    │    │    Button  → │    │ +  │  │ ←  │                        │
│  └──────────────┘    └──────────────┘    └────┘  └────┘                        │
│   Leading icon      Trailing icon        Icon only (small, square)            │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 04-2 · Button Usage Rules

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  DO                                 DON'T                                       │
│  ────────────────────────────────  ─────────────────────────────────────     │
│                                                                                │
│  ✓ Use Primary for ONE action   ✗ Two Primary buttons in same hierarchy       │
│                                                                                │
│  ✓ Use Secondary for supporting  ✗ Secondary for hidden or destructive          │
│    actions near Primary                                                           │
│                                                                                │
│  ✓ Tertiary for cancel/less     ✗ Destructive unless truly destructive         │
│    important actions                                                              │
│                                                                                │
│  ✓ Destructive sparingly —       ✗ Color alone for destruction — pair with     │
│    it carries weight               icon                                         │
│                                                                                │
│  ✓ Action verbs: "Add Account",  ✗ "Click Here", "Submit", "OK"                │
│    "Transfer Funds", "Delete"                                                     │
│                                                                                │
│  ✓ 3 words max label              ✗ Paragraph-long labels                      │
│                                                                                │
│  ✓ 44px min touch target (iOS)   ✗ Smaller than 44px height                   │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 04-3 · Input Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  INPUT VARIANTS                                                                │
│                                                                                │
│  DEFAULT                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐               │
│  │  Label                                          ◌          │               │
│  │  Helper text                                             │               │
│  └─────────────────────────────────────────────────────────────┘               │
│                                                                                │
│  FOCUSED                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐               │
│  │  Label                                          ◌          │               │
│  │  ───────────────────────────────────────────────────────   │               │
│  │  User input here                                          │               │
│  └─────────────────────────────────────────────────────────────┘               │
│  Blue focus ring (2px)                                                         │
│                                                                                │
│  ERROR                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐               │
│  │  Label                                          ◌          │               │
│  │  ──────                                                    │               │
│  │  ✗ Error message                                          │               │
│  └─────────────────────────────────────────────────────────────┘               │
│  Red border + red error text                                                   │
│                                                                                │
│  DISABLED                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐               │
│  │  Label                                          ◌          │               │
│  │  ───────────────────────────────────────────────────────   │               │
│  │  Disabled value                                         │               │
│  └─────────────────────────────────────────────────────────────┘               │
│  Gray border, 40% opacity                                                      │
│                                                                                │
│  PASSWORD (with toggle)                                                        │
│  ┌─────────────────────────────────────────────────────────────┐               │
│  │  Label                                                 👁   │               │
│  │  ───────────────────────────────────────────────────────   │               │
│  └─────────────────────────────────────────────────────────────┘               │
│                                                                                │
│  SPECS:                                                                        │
│  height: 48px    padding: 12px h, 10px v    radius: radius-sm (8px)           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 04-4 · Toggle / Checkbox / Radio

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  TOGGLE                           CHECKBOX                      RADIO           │
│                                                                                │
│  ┌────────────────────┐          ┌──────────────────┐     ┌────────────┐         │
│  │                     │          │                  │     │            │         │
│  │  Label        ◉━━ │          │  Label       ✓   │     │  Label  ○ │         │
│  │  Description   OFF │          │  Description     │     │  Desc    ○ │         │
│  └────────────────────┘          └──────────────────┘     └────────────┘         │
│                                                                                │
│  TOGGLE STATES:                                                                 │
│  OFF    ◉━━  →  Gray track, white thumb left                                   │
│  ON     ━━◉  →  Primary track, white thumb right                               │
│  DISABLED    →  Gray track, no interaction                                    │
│                                                                                │
│  CHECKBOX STATES:                                                              │
│  UNCHECKED     □    CHECKED     ▣ (filled primary + ✓)                        │
│  INDETERMINATE  ▣ (filled primary + dash)   DISABLED    □ (40% opacity)        │
│                                                                                │
│  RADIO STATES:                                                                 │
│  UNSELECTED    ○    SELECTED    ◉ (filled primary dot)   DISABLED    ○ (40%)   │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 04-5 · Badge & Chip

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  BADGE                            CHIP                                         │
│  Status indicator                Tag / category label                           │
│  Counts, small labels            Dismissible or selectable                     │
│                                                                                │
│  BADGE VARIANTS:                                                               │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                 │
│  │  12  │  │  ▲   │  │  ✓   │  │  ●   │  │  ◐   │  │  ✗   │                 │
│  │neutral│  │positive│ │success│  │active │  │pending │  │negative│                 │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘                 │
│                                                                                │
│  CHIP VARIANTS:                                                                │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐                 │
│  │  Default  │  │  Selected │  │  With ×   │  │  With icon │                 │
│  │    ✓     │  │    ✓     │  │    ✓   × │  │    ✓   ◌  │                 │
│  └───────────┘  └───────────┘  └───────────┘  └───────────┘                 │
│                                                                                │
│  SIZING:                                                                       │
│  Badge:  height: 20px   font: Caption (11px)   padding: 4px 8px   radius: pill │
│  Chip:   height: 28px   font: Label M (12px)   padding: 4px 12px  radius: sm   │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 04-6 · Card Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  CARD ELEVATION LEVELS                                                         │
│                                                                                │
│  FLAT                                                                          │
│  ┌──────────────────────────────┐                                            │
│  │                              │  No shadow                                  │
│  │  Standard card, list item    │  border: 1px border-subtle                  │
│  │                              │                                            │
│  └──────────────────────────────┘                                            │
│                                                                                │
│  RAISED                                                                         │
│  ┌──────────────────────────────┐                                            │
│  │                              │  shadow-sm + shadow-md                      │
│  │  Elevated card, selected     │  Cards on page, selected states             │
│  │                              │                                            │
│  └──────────────────────────────┘                                            │
│                                                                                │
│  FLOATING                                                                       │
│  ┌──────────────────────────────┐                                            │
│  │                              │  shadow-lg + shadow-xl                      │
│  │  Modals, sheets, FABs        │  Dropdowns, popovers, tooltips              │
│  │                              │                                            │
│  └──────────────────────────────┘                                            │
│                                                                                │
│  CARD SPECS:                                                                   │
│  padding: space-l (16px)    radius: radius-md (12px)    min-height: 80px      │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 05 NATIVE PLATFORM

## Page: 05-1 · iOS Components Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                    iOS COMPONENT MAPPING                                        │
│                    Platform-Specific Primitives                                 │
│                                                                                │
│  iOS components use SF Symbols, native iOS patterns,                           │
│  and respect the Human Interface Guidelines at all times.                       │
│                                                                                │
│  NAVIGATION              DATA ENTRY              FEEDBACK                     │
│  ─────────────           ──────────              ─────────                     │
│  Navigation Bar          Text Field              Activity Indicator           │
│  Tab Bar                 Search Field            Alert                       │
│  Toolbar                 Segmented Control        Action Sheet                 │
│  Large Title             Slider                   Bottom Sheet                  │
│  Back Chevron            Toggle                   Dialog                      │
│                                                                                │
│  LISTS                   PICKERS                  CONTAINERS                  │
│  ─────                   ───────                 ──────────                   │
│  Table View              Date Picker             Card (UIKit)                │
│  Table Cell              Time Picker             Grouped List                 │
│  Swipe Actions          Color Picker             Inset Grouped Style          │
│  Disclosure Indicator    Context Menu             Sheet (UISheet)             │
│  Separator              Pull to Refresh         Full Screen Cover            │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 05-2 · iOS Navigation Patterns

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  NAVIGATION BAR (Standard)                                                    │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │  ←  Title                               ◌  ⋮                              │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│   Standard navigation with back button and right action icons                    │
│                                                                                │
│  LARGE TITLE                                                                  │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │  Portfolio                                              ◌  ⋮           │ │
│  │  ═══════════════════════════════════════════════════════                │ │
│  │                                                                       │ │
│  │  Large titles collapse to standard navigation bar on scroll.           │ │
│  │                                                                       │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
│  TAB BAR                                                                       │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                                  │
│  │  ◭  │  │  ◇  │  │  ⬡  │  │  ☷  │  │  ⚙  │                                  │
│  │Home │  │Trans │  │Goals │  │  AI  │  │More │                                  │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘                                  │
│   Selected: Primary color + filled icon                                       │
│   Unselected: Gray + outline icon                                             │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 05-3 · iOS List Patterns

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  LIST CELL (Default)                                                           │
│  ───────────────────────────────────────────────────────────────────────────   │
│  Leading        Title                  Trailing        Disclosure              │
│  ┌────┐                                                                   │
│  │ ◌ │  Title                              $1,234.56  →                    │
│  └────┘  Subtitle text                                        │                 │
│          Caption                                                 │                 │
│                                                                                │
│  LIST CELL (With Swipe Actions)                                                │
│  ───────────────────────────────────────────────────────────────────────────   │
│  ┌────┐                                    │ DELETE │ │ ARCHIVE │            │
│  │ ◌ │  Title                              │   ✗    │ │    ◌   │            │
│  └────┘  Subtitle text                            │    │         │            │
│                                                                                │
│  GROUPED LIST (Inset Style)                                                    │
│  ───────────────────────────────────────────────────────────────────────────   │
│       ┌─────────────────────────────────────────────────┐                     │
│       │  SECTION HEADER (Caption, gray)                 │                     │
│       ├─────────────────────────────────────────────────┤                     │
│       │  Cell 1                                     →  │                     │
│       ├─────────────────────────────────────────────────┤                     │
│       │  Cell 2                                     →  │                     │
│       └─────────────────────────────────────────────────┘                     │
│       ┌─────────────────────────────────────────────────┐                     │
│       │  SECTION HEADER                                 │                     │
│       ├─────────────────────────────────────────────────┤                     │
│       │  Cell 3                                     →  │                     │
│       └─────────────────────────────────────────────────┘                     │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 07 FINANCIAL COMPONENTS

## Page: 07-1 · Financial Components Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│              FINANCIAL COMPONENTS — THE HEART OF ADVIZMO                       │
│                                                                                │
│  These components are what make Advizmo different.                             │
│  Built for financial clarity. Designed for trust.                              │
│                                                                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │  DASHBOARD  │  │ INVESTMENTS │  │    GOALS    │  │ AUTOMATION  │         │
│  │             │  │             │  │             │  │             │         │
│  │  Net Worth   │  │  Portfolio  │  │  Goal Card  │  │  Automation │         │
│  │  Cash Flow   │  │  Holding    │  │  Progress   │  │  Timeline   │         │
│  │  Health      │  │  Allocation │  │  Forecast   │  │  Status     │         │
│  │  AI Summary  │  │  Performance│  │  Milestones │  │             │         │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ TRANSFERS   │  │     TAX     │  │      AI     │  │    MONEY    │         │
│  │             │  │             │  │             │  │             │         │
│  │  Income      │  │  Tax Summary│  │  AI Insight │  │  Income      │         │
│  │  Expense     │  │  Tax Harvest│  │  AI Summary │  │  Expense     │         │
│  │  Upcoming    │  │  Tax Saved  │  │  AI Chat    │  │  Bills       │         │
│  │             │  │             │  │             │  │              │         │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 07-2 · Net Worth Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  NET WORTH — PRIMARY FINANCIAL HERO METRIC                                     │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  Label M: "Net Worth" (text-secondary)                                  │ │
│  │                                                                          │ │
│  │  FINANCIAL XL: "$247,892.34"                                            │ │
│  │  (IBM Plex Sans, tabular nums)                                           │ │
│  │                                                                          │ │
│  │  LABEL M: "+12.4% ▲"  (investment-gain)                                │ │
│  │  Body S: "$27,234.56 this year"                                          │ │
│  │                                                                          │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
│  RULES:                                                                       │
│  • IBM Plex Sans for the dollar amount ONLY                                   │
│  • Always show time period context                                            │
│  • Always show absolute change alongside percentage                           │
│  • Use investment-gain / investment-loss colors only                          │
│  • Pair color change with ▲ or ▼ indicator icon                               │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 07-3 · Holding Row Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  HOLDING ROW — INVESTMENT POSITION DISPLAY                                     │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  ┌────┐                              FINANCIAL M:  $12,456.78            │ │
│  │  │ A  │  Apple Inc.                   LABEL M:    +24.5% ▲              │ │
│  │  └────┘  AAPL · 124 shares                                        │         │ │
│  │          $100.46/share                 Body S: +$2,439.21                 │ │
│  │                                                                          │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
│  ANATOMY:                                                                     │
│  Leading:    Avatar circle (initials or logo)                                 │
│  Title:       Company name (Title M) + Ticker (Label M, secondary)            │
│  Subtitle:    Share count + price per share (Body S, tertiary)                │
│  Trailing:    Current value (Financial M, IBM Plex Sans)                      │
│  Badge:       % change (Label M, colored)                                      │
│  Meta:        Absolute change (Body S, colored, below trailing)                │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 07-4 · Goal Progress Component

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  GOAL PROGRESS — SAVINGS GOAL TRACKING                                         │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                          │ │
│  │  Title M: "Emergency Fund"                          LABEL M: "At Risk"  │ │
│  │  Body S: "Target: $15,000 by Jan 2026"                 (Orange, ⚠ icon) │ │
│  │                                                                          │ │
│  │  ┌──────────────────────────────────────────────────────────┐           │ │
│  │  │██████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░│           │ │
│  │  │▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│           │ │
│  │  └──────────────────────────────────────────────────────────┘           │ │
│  │  Label M: "$8,450" → LABEL M: "$15,000"                                 │ │
│  │  56% complete · $6,550 remaining                                        │ │
│  │                                                                          │ │
│  │  Body S: "On track if you save $820/month"                               │ │
│  │                                                                          │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
│  COLOR LOGIC:                                                                 │
│  • goal-complete (green): On track, ≥80% complete                            │
│  • Orange: At risk, 40-79% complete                                          │
│  • investment-loss (red): Behind schedule, <40% complete                     │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 08 DATA VISUALIZATION

## Page: 08-1 · Chart Families

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  SUPPORTED CHART FAMILIES                                                     │
│  "If it doesn't improve comprehension, DELETE it."                            │
│                                                                                │
│  ✓ LINE CHART          → Time series trends, performance history               │
│  ✓ AREA CHART          → Cumulative data, portfolio growth over time           │
│  ✓ BAR CHART           → Discrete comparisons, category breakdown             │
│  ✓ STACKED BAR         → Part-to-whole relationships                          │
│  ✓ DONUT CHART         → Allocation, portfolio distribution                    │
│  ✓ ALLOCATION BAR      → Simple part-to-whole, asset allocation                │
│  ✓ SPARKLINE           → Inline trend, no axes, maximum density               │
│  ✓ PROGRESS RING       → Single metric progress, circular                     │
│  ✓ GOAL PROGRESS       → Savings goal vs. target                              │
│  ✓ NET WORTH TIMELINE  → Multi-asset net worth over time                      │
│  ✓ CASH FLOW TIMELINE  → Cash in vs. cash out over time                       │
│  ✓ PORTFOLIO PERFORMANCE → Benchmark comparison, multiple lines                │
│  ✓ ASSET ALLOCATION    → Allocation visualization                              │
│  ✓ RISK DISTRIBUTION   → Risk score visualization                              │
│  ✓ COMPARISON CHART    → Before/after, scenario comparison                    │
│  ✓ FORECAST CHART      → Historical + predicted, confidence interval           │
│                                                                                │
│  DELETED (Usability Failed):                                                   │
│  ✗ TREEMAP            → Overwhelming for personal finance                     │
│  ✗ WATERFALL          → Rarely needed for personal finance                    │
│  ✗ GAUGE              → Implies precision we don't have                       │
│  ✗ RADAR              → Difficult to compare, rare use case                     │
│  ✗ TIMELINE (events)  → Not needed for personal finance                        │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 08-2 · Chart Colors

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  CHART COLOR SEQUENCES                                                         │
│  Use consistently across all charts.                                           │
│                                                                                │
│  LINE / AREA CHART SEQUENCE                                                    │
│  Line 1: chart-blue-1    → #3B82F6  (Primary / Portfolio)                    │
│  Line 2: chart-green-1  → #10B981  (S&P 500 benchmark)                        │
│  Line 3: chart-purple-1 → #8B5CF6  (AI prediction)                           │
│  Line 4: chart-orange-1 → #F97316  (Cash)                                     │
│  Line 5: chart-teal-1   → #14B8A6  (Bonds)                                   │
│  Forecast: chart-dashed → #94A3B8  (Dashed, lighter)                          │
│                                                                                │
│  DONUT / ALLOCATION CHART SEQUENCE                                            │
│  Segment 1: chart-blue-1    → #3B82F6  (US Stocks)                            │
│  Segment 2: chart-green-1  → #10B981  (International)                        │
│  Segment 3: chart-purple-1 → #8B5CF6  (Bonds)                                 │
│  Segment 4: chart-orange-1 → #F97316  (Real Estate)                          │
│  Segment 5: chart-teal-1   → #14B8A6  (Cash)                                 │
│  Segment 6: chart-gray-1   → #6B7280  (Other)                                 │
│                                                                                │
│  CHART RULES:                                                                  │
│  • NEVER use red/green in charts for non-financial data                        │
│  • Chart colors are separate from semantic financial colors                     │
│  • Always include a legend for multi-series charts                              │
│  • Always show data labels on key data points                                   │
│  • Axis labels use Body S typography                                           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 09 PATTERNS

## Page: 09-1 · Patterns Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                         PRODUCT PATTERNS                                       │
│                         Common Flows · Reusable Solutions                      │
│                                                                                │
│  Patterns are how users accomplish tasks.                                       │
│  They combine components into meaningful user experiences.                     │
│                                                                                │
│  CORE PATTERNS                     SUPPORTING PATTERNS                         │
│  ─────────────                     ───────────────────                         │
│  Dashboard Home                    Onboarding Flow                             │
│  Portfolio View                    Authentication (Login/Signup)                │
│  Transaction List                  Search & Filters                            │
│  Money Movement                    Settings & Preferences                       │
│  Goal Flow                         Notifications                               │
│  Investment Flow                   Loading & Skeleton                          │
│  Automation Flow                   Empty States                                │
│  AI Assistant Flow                 Error States                                │
│                                    Confirmation Dialogs                        │
│                                    Success Confirmation                         │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Page: 09-2 · Dashboard Pattern

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  DASHBOARD HOME PATTERN                                                       │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │  STATUS BAR: Default (dark content on light)                              │ │
│  │                                                                          │ │
│  │  NAVIGATION BAR                                                          │ │
│  │  ← [blank]                    [Settings] [Notifications]               │ │
│  │                                                                          │ │
│  │  SCROLLABLE CONTENT                                                     │ │
│  │                                                                          │ │
│  │  Section 1: Greeting                                                    │ │
│  │  DISPLAY L "Good morning, Sarah" + Body S "Tuesday, June 30"             │ │
│  │                                                                          │ │
│  │  Section 2: NET WORTH HERO CARD (RAISED)                                │ │
│  │  Label M: "Net Worth" / FINANCIAL XL: "$247,892.34"                      │ │
│  │  Label M: "+12.4% ▲" + Body S: "+$27,234.56 this year"                 │ │
│  │                                                                          │ │
│  │  Section 3: QUICK STATS (horizontal scroll)                              │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐                                 │ │
│  │  │Cash      │  │Invested  │  │AI Score  │                                 │ │
│  │  │$12,456   │  │$235,436  │  │  87/100  │                                 │ │
│  │  └──────────┘  └──────────┘  └──────────┘                                 │ │
│  │                                                                          │ │
│  │  Section 4: PORTFOLIO CHART (Area, full width)                          │ │
│  │  ┌────────────────────────────────────────────────────────┐             │ │
│  │  │            ╱╲                                                 │             │ │
│  │  │           ╱  ╲      ╱╲                                      │             │ │
│  │  │          ╱    ╲    ╱  ╲____                               │             │ │
│  │  │    ____╱      ╲__╱         ╲                             │             │ │
│  │  └────────────────────────────────────────────────────────┘  1W 1M 3M 1Y │ │
│  │                                                                          │ │
│  │  Section 5: AI INSIGHT CARD (purple surface)                            │ │
│  │  "Your emergency fund is $3,200 short..."                              │ │
│  │                                                                          │ │
│  │  Section 6: RECENT ACTIVITY (list)                                     │ │
│  │  Last 3-5 transactions + "See All" link                                 │ │
│  │                                                                          │ │
│  │  TAB BAR: [Home] [Portfolio] [Transactions] [Goals] [AI]                 │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
│  PLATFORM NOTES:                                                               │
│  iOS: Safe area insets, large title support, pull-to-refresh                  │
│  Web: 12-column grid, responsive from 375px to 1440px                         │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 10 SCREEN BLUEPRINTS

## Page: 10-1 · Dashboard Blueprint

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  SCREEN BLUEPRINT: DASHBOARD                                                  │
│                                                                                │
│  ┌──────────────────────────────────────────────────────────────────────────┐ │
│  │  STATUS BAR: Default                                                       │ │
│  │  NAVIGATION BAR                                                           │ │
│  │  ← [blank]                    [Settings] [Notifications]                  │ │
│  │                                                                          │ │
│  │  SCROLLABLE CONTENT:                                                     │ │
│  │                                                                          │ │
│  │  1. Greeting: DISPLAY L + Date (Body S)                                  │ │
│  │                                                                          │ │
│  │  2. Net Worth Hero Card (RAISED):                                        │ │
│  │     - Primary metric (FINANCIAL XL)                                      │ │
│  │     - Change indicator + time period                                       │ │
│  │                                                                          │ │
│  │  3. Quick Stats Row (horizontal scroll):                                │ │
│  │     - 2-4 compact metric cards                                          │ │
│  │     - Tap to navigate to detail                                          │ │
│  │                                                                          │ │
│  │  4. Portfolio Chart (full width):                                        │ │
│  │     - Area or line chart                                                 │ │
│  │     - Time period selector (1W/1M/3M/1Y/ALL)                           │ │
│  │                                                                          │ │
│  │  5. AI Insight Card (purple surface):                                    │ │
│  │     - AI insight or recommendation                                      │ │
│  │     - Tap to expand or take action                                      │ │
│  │                                                                          │ │
│  │  6. Recent Activity (list):                                             │ │
│  │     - Last 3-5 transactions or events                                   │ │
│  │     - "See All" link to Transactions page                               │ │
│  │                                                                          │ │
│  │  TAB BAR: [Home] [Portfolio] [Transactions] [Goals] [AI]                  │ │
│  └──────────────────────────────────────────────────────────────────────────┘ │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 11 TEMPLATES

## Page: 11-1 · Templates Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                         PRODUCTION TEMPLATES                                  │
│                         High-Fidelity · Ready to Build                        │
│                                                                                │
│  Templates are the final output. Each template is a complete,                 │
│  production-ready screen built from the design system.                          │
│                                                                                │
│   12 PRODUCTION TEMPLATES                                                      │
│                                                                                │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│   │ DASHBOARD   │  │  PORTFOLIO  │  │TRANSACTIONS │  │    GOALS    │           │
│   │             │  │             │  │             │  │             │           │
│   │ [Preview]   │  │ [Preview]   │  │ [Preview]   │  │ [Preview]   │           │
│   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘           │
│                                                                                │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│   │ CASH FLOW   │  │    BILLS    │  │AUTOMATION   │  │     AI      │           │
│   │             │  │             │  │             │  │  ASSISTANT  │           │
│   │ [Preview]   │  │ [Preview]   │  │ [Preview]   │  │ [Preview]   │           │
│   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘           │
│                                                                                │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│   │ INVESTMENT  │  │  SETTINGS   │  │  PROFILE    │  │NOTIFICATIONS│           │
│   │  DETAIL     │  │             │  │             │  │             │           │
│   │ [Preview]   │  │ [Preview]   │  │ [Preview]   │  │ [Preview]   │           │
│   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘           │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 12 DOCUMENTATION & ENGINEERING

## Page: 12-1 · Engineering Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                    DOCUMENTATION & ENGINEERING                                 │
│                                                                                │
│  ACCESSIBILITY                    COMPONENT APIS                               │
│  ────────────                    ──────────────                                 │
│  WCAG AA compliance              SwiftUI mapping                                │
│  Dynamic Type                    React mapping                                 │
│  VoiceOver / TalkBack           Compose mapping                                │
│  Color contrast                  Naming conventions                           │
│  Reduce motion                   Versioning                                   │
│                                  Migration notes                               │
│                                                                                │
│  QUALITY ASSURANCE                                                           │
│  ─────────────────                                                           │
│  Apple HIG Checklist         Component Checklist                             │
│  Accessibility Checklist      Auto Layout Checklist                          │
│  Typography Checklist          Variables Checklist                            │
│  Color Checklist               Responsive Checklist                           │
│  Layout Checklist              Localization Checklist                         │
│  Motion Checklist              Developer Handoff Checklist                    │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

# 13 QUALITY ASSURANCE

## Page: 13-1 · QA Overview

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│                    QUALITY ASSURANCE                                           │
│                    This is the section almost every startup misses.            │
│                                                                                │
│  Every screen must pass:                                                      │
│                                                                                │
│  ┌────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                        │   │
│  │  Apple HIG Checklist          Component Checklist                       │   │
│  │  ───────────────────         ─────────────────                         │   │
│  │  Navigation patterns          States present                            │   │
│  │  Gesture conventions         Auto Layout applied                        │   │
│  │  Typography scaling           Component Properties used                 │   │
│  │  Safe area compliance        Token references correct                  │   │
│  │  Touch target sizes         Semantic naming                            │   │
│  │                                                                        │   │
│  │  Accessibility Checklist     Variables Checklist                        │   │
│  │  ───────────────────         ─────────────────                         │   │
│  │  WCAG AA minimum             Figma Variables created                   │   │
│  │  AAA for financial data      Modes (light/dark) defined               │   │
│  │  Dynamic Type support        Token aliases set up                      │   │
│  │  VoiceOver labels            No hardcoded values                        │   │
│  │  Color contrast ratios       Semantic layer complete                   │   │
│  │                                                                        │   │
│  │  Typography Checklist        Responsive Checklist                      │   │
│  │  ───────────────────         ─────────────────                        │   │
│  │  Font family correct         Breakpoints respected                     │   │
│  │  Size scale correct          Grid system followed                       │   │
│  │  Weight assignments          Content adapts properly                    │   │
│  │  Line height correct         No horizontal overflow                      │   │
│  │  Letter spacing correct      Safe areas on mobile                       │   │
│  │                                                                        │   │
│  │  Color Checklist             Localization Checklist                      │   │
│  │  ───────────────            ─────────────────                          │   │
│  │  Semantic tokens used        Text length considered                    │   │
│  │  No hardcoded colors         RTL layout supported                       │   │
│  │  Financial colors precise     Number formatting                         │   │
│  │  Dark mode parity            Currency formatting                        │   │
│  │                                                                        │   │
│  └────────────────────────────────────────────────────────────────────────┘   │
│                                                                                │
│  DESIGN QA CHECKLIST                                                          │
│  ──────────────────                                                           │
│  Does each screen align with the Constitution principles?                       │
│  Have we removed before adding any new element?                                 │
│  Is this consistent with existing patterns?                                     │
│  Is the motion appropriate and consistent?                                      │
│  Does this pass color contrast requirements?                                   │
│  Have engineering notes been provided?                                         │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## SUMMARY: What Was Included

This Figma Visual Design System document covers:

| Section | Pages | Content |
|---------|-------|---------|
| **01 Constitution** | 10 | Identity, Purpose, Vision, 10 Principles (with deep-dive cards), Brand Personality, Constraints, Platform Strategy, Decision Flow |
| **02 Foundations** | 17 | Color System, Blue/Gray scales, Green/Red/Orange/Purple scales, Brand & Surface semantics, Financial semantics, Dark Mode, Typography overview, Inter type scale, IBM Plex Sans type scale, Usage examples, Spacing, Radius, Elevation, Motion, Icons, Grid |
| **03 Design Tokens** | 2 | Token Architecture (4 layers), Token Categories |
| **04 Primitive Components** | 6 | Button (variants, sizes, states, icons, usage), Input (variants, anatomy), Toggle/Checkbox/Radio, Badge/Chip, Card elevation |
| **05 Native Platform** | 3 | iOS overview, Navigation patterns, List patterns |
| **07 Financial Components** | 4 | Overview, Net Worth, Holding Row, Goal Progress |
| **08 Data Visualization** | 2 | Chart families (16 supported, 5 deleted), Chart colors |
| **09 Patterns** | 2 | Overview, Dashboard pattern |
| **10 Screen Blueprints** | 1 | Dashboard blueprint |
| **11 Templates** | 1 | Templates overview |
| **12 Documentation & Engineering** | 1 | Engineering overview |
| **13 Quality Assurance** | 1 | QA overview with all checklists |

**Total: 50 Figma-style visual pages covering the complete 13-section architecture.**

The document uses:
- ASCII box diagrams for visual framing
- Color swatches with hex values and visual density bars
- Component anatomy breakdowns
- State demonstrations
- Usage rules (DO/DON'T)
- Token references
- Platform notes
- Spacing visualizations
