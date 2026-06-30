# Advizmo Design Decision Framework v1.0

## Chapter 22 — Design Decision Framework

---

## Table of Contents

1. [Decision Philosophy](#01-decision-philosophy)
2. [User Value Framework](#02-user-value-framework)
3. [Simplicity Framework](#03-simplicity-framework)
4. [Component Decision Tree](#04-component-decision-tree)
5. [Token Decision Tree](#05-token-decision-tree)
6. [Layout Decision Tree](#06-layout-decision-tree)
7. [Visual Hierarchy Framework](#07-visual-hierarchy-framework)
8. [Motion Decision Tree](#08-motion-decision-tree)
9. [Color Decision Tree](#09-color-decision-tree)
10. [AI Decision Framework](#10-ai-decision-framework)
11. [Financial Decision Framework](#11-financial-decision-framework)
12. [Responsive Decision Framework](#12-responsive-decision-framework)
13. [Accessibility Decision Framework](#13-accessibility-decision-framework)
14. [Engineering Decision Framework](#14-engineering-decision-framework)
15. [Design Review Questions](#15-design-review-questions)
16. [Documentation](#16-documentation)

---

## 01 — Decision Philosophy

### Core Principles

Every design decision should reduce cognitive load, visual noise, engineering complexity, future maintenance, and design debt.

Every design decision should increase trust, clarity, accessibility, predictability, reusability, and scalability.

| Principle | Why It Exists |
|---|---|
| **User First** | If it doesn't help the user, it doesn't belong |
| **Problem First** | Understand the problem before designing the solution |
| **Clarity Before Beauty** | Clear beats beautiful — always |
| **Function Before Decoration** | Every element must earn its place |
| **Consistency Before Novelty** | Predictability builds trust |
| **Reuse Before Creation** | Existing solutions are proven solutions |
| **System Before Screen** | Design the system, not just the screen |
| **Long-term Thinking** | Will this still work in 5 years? |

### Why These Principles Exist

Design debt accumulates silently. Every unnecessary component, every inconsistent pattern, every one-off token creates friction that compounds over time. These principles exist to prevent that accumulation.

A design system is a living product. Like any product, it requires discipline to maintain. These principles provide that discipline.

---

## 02 — User Value Framework

### The Value Test

Before adding anything to the design system, ask these questions:

| Question | If Yes | If No |
|---|---|---|
| Does this solve a real user problem? | Consider adding | Do not add |
| Will users notice its absence? | Consider adding | Do not add |
| Does it improve understanding? | Consider adding | Do not add |
| Does it reduce effort? | Consider adding | Do not add |
| Does it increase confidence? | Consider adding | Do not add |
| Can the same goal be achieved with less? | Simplify first | Consider adding |

### The Rule

If the answer to the first five questions is "No", do not add it. If the answer to the last question is "Yes", simplify first.

### Examples

**Good Decision — Adding AI Insight Card:**
> "Users need to understand why their spending increased. An AI Insight Card explains the reasoning with data. This solves a real problem."

**Poor Decision — Adding Decorative Illustration:**
> "Users don't need an illustration to understand their balance. This adds visual noise without improving understanding."

---

## 03 — Simplicity Framework

### The Simplicity Test

Before adding complexity, ask these questions:

| Question | If Yes | If No |
|---|---|---|
| Can this be removed? | Remove it | Continue |
| Can two components become one? | Merge them | Continue |
| Can two variants become one? | Merge them | Continue |
| Can one token replace three? | Replace them | Continue |
| Can Auto Layout solve this? | Use Auto Layout | Continue |
| Can composition solve this? | Use composition | Continue |

### The Rule

Always choose the simplest solution that satisfies user needs.

### Simplicity Hierarchy

1. **Remove** — Can it be eliminated entirely?
2. **Merge** — Can multiple things become one?
3. **Reuse** — Can an existing solution work?
4. **Compose** — Can existing pieces be combined?
5. **Simplify** — Can the existing solution be made simpler?
6. **Create** — Only as a last resort

---

## 04 — Component Decision Tree

### Decision Flow

```
Need a new component?
│
├─ Does an existing component solve this?
│  ├─ YES → Use existing component
│  └─ NO ↓
│
├─ Can an existing component be extended?
│  ├─ YES → Add variant/property to existing
│  └─ NO ↓
│
├─ Can composition solve this?
│  ├─ YES → Compose existing components
│  └─ NO ↓
│
├─ Can a variant solve this?
│  ├─ YES → Add variant to existing component
│  └─ NO ↓
│
├─ Can a property solve this?
│  ├─ YES → Add property to existing component
│  └─ NO ↓
│
└─ Create new component
   └─ Document reason for creation
```

### Rules

1. **Only create a new component if every previous answer is "No"**
2. **Every new component must have a documented reason**
3. **Every new component must be justified to the team**
4. **Every new component must be tested across breakpoints**
5. **Every new component must be accessible**

### Component Creation Checklist

| Step | Question |
|---|---|
| 1 | Does an existing component solve this? |
| 2 | Can an existing component be extended? |
| 3 | Can composition solve this? |
| 4 | Can a variant solve this? |
| 5 | Can a property solve this? |
| 6 | Is this needed in 3+ places? |
| 7 | Is this reusable across products? |
| 8 | Can engineering implement this efficiently? |
| 9 | Is this accessible? |
| 10 | Is this documented? |

---

## 05 — Token Decision Tree

### Decision Flow

```
Need a new token?
│
├─ Can an existing semantic token be reused?
│  ├─ YES → Reuse existing
│  └─ NO ↓
│
├─ Can an existing primitive token support this?
│  ├─ YES → Map to existing primitive
│  └─ NO ↓
│
├─ Is this value likely to appear elsewhere?
│  ├─ YES → Create token
│  └─ NO ↓
│
├─ Will engineering benefit from this token?
│  ├─ YES → Create token
│  └─ NO ↓
│
└─ Do not create token
```

### Rules

1. **Never create one-off tokens**
2. **Never create tokens for single use cases**
3. **Always check existing tokens first**
4. **Always consider engineering benefit**
5. **Always document why a token exists**

### Token Creation Checklist

| Step | Question |
|---|---|
| 1 | Can an existing semantic token be reused? |
| 2 | Can an existing primitive token support this? |
| 3 | Is this value likely to appear elsewhere? |
| 4 | Will engineering benefit from this token? |
| 5 | Does this follow naming conventions? |
| 6 | Is this documented? |

---

## 06 — Layout Decision Tree

### Decision Flow

```
Layout problem?
│
├─ Is hierarchy obvious?
│  ├─ NO → Fix hierarchy first
│  └─ YES ↓
│
├─ Can fewer sections communicate the same?
│  ├─ YES → Reduce sections
│  └─ NO ↓
│
├─ Can whitespace solve this?
│  ├─ YES → Add whitespace
│  └─ NO ↓
│
├─ Can content be grouped better?
│  ├─ YES → Regroup content
│  └─ NO ↓
│
├─ Can progressive disclosure reduce clutter?
│  ├─ YES → Collapse/expand sections
│  └─ NO ↓
│
└─ Consider layout restructure
```

### Rules

1. **Avoid solving layout problems with more containers**
2. **Use whitespace before adding visual separators**
3. **Group related content, separate unrelated content**
4. **Progressive disclosure over cramming everything visible**
5. **Hierarchy should be immediately obvious**

---

## 07 — Visual Hierarchy Framework

### Hierarchy Levels

| Level | Purpose | Visual Treatment |
|---|---|---|
| **Primary Insight** | The most important thing to know | Largest, boldest, first |
| **Primary Action** | The most important thing to do | Most prominent button |
| **Secondary Information** | Important context | Medium weight, clear |
| **Supporting Information** | Additional detail | Smaller, subdued |
| **Metadata** | Reference information | Smallest, least prominent |

### The Rule

Never create two primary actions with equal visual weight. Every screen must have exactly one primary insight and one primary action.

### Hierarchy Checklist

| Question | Answer |
|---|---|
| What is the primary insight? | |
| What is the primary action? | |
| Is the hierarchy immediately obvious? | |
| Can anything be removed? | |
| Can anything be simplified? | |

---

## 08 — Motion Decision Tree

### Decision Flow

```
Need animation?
│
├─ Does it communicate state?
│  ├─ YES → Consider animation
│  └─ NO ↓
│
├─ Does it explain change?
│  ├─ YES → Consider animation
│  └─ NO ↓
│
├─ Does it improve understanding?
│  ├─ YES → Consider animation
│  └─ NO ↓
│
├─ Does it reduce uncertainty?
│  ├─ YES → Consider animation
│  └─ NO ↓
│
├─ Would removing it make experience worse?
│  ├─ YES → Keep animation
│  └─ NO ↓
│
└─ Remove animation
```

### Rules

1. **Every animation must communicate change**
2. **Never animate for decoration**
3. **Never animate to draw attention**
4. **Animation should be subtle and purposeful**
5. **Animation should be fast (< 300ms for micro-interactions)**

---

## 09 — Color Decision Tree

### Decision Flow

```
Need to use color?
│
├─ Can hierarchy solve this instead?
│  ├─ YES → Use hierarchy
│  └─ NO ↓
│
├─ Can typography solve this instead?
│  ├─ YES → Use typography
│  └─ NO ↓
│
├─ Can spacing solve this instead?
│  ├─ YES → Use spacing
│  └─ NO ↓
│
├─ Can iconography solve this instead?
│  ├─ YES → Use iconography
│  └─ NO ↓
│
├─ Does color communicate meaning?
│  ├─ YES → Use color
│  └─ NO ↓
│
└─ Do not use color
```

### Rules

1. **Only use color when it communicates meaning**
2. **Never use color purely for decoration**
3. **Never rely on color alone — always pair with icon/text**
4. **Color should enhance hierarchy, not replace it**
5. **80% neutral, 20% brand — always**

---

## 10 — AI Decision Framework

### Decision Flow

```
Need AI here?
│
├─ Does AI genuinely help?
│  ├─ YES ↓
│  └─ NO → Do not use AI
│
├─ Can rules solve this instead?
│  ├─ YES → Use rules
│  └─ NO ↓
│
├─ Does the user understand why AI is involved?
│  ├─ YES ↓
│  └─ NO → Explain AI involvement
│
├─ Can the recommendation be explained?
│  ├─ YES ↓
│  └─ NO → Add explanation
│
├─ Can the user override it?
│  ├─ YES ↓
│  └─ NO → Add override option
│
└─ Add AI with full transparency
```

### Rules

1. **AI should never reduce transparency**
2. **AI must always explain its reasoning**
3. **AI must always be overrideable**
4. **AI must never create urgency**
5. **AI must never guarantee outcomes**
6. **AI should reduce complexity, not add to it**

---

## 11 — Financial Decision Framework

### Decision Flow

```
Presenting financial information?
│
├─ Is the value understandable?
│  ├─ YES ↓
│  └─ NO → Simplify presentation
│
├─ Is context provided?
│  ├─ YES ↓
│  └─ NO → Add context
│
├─ Can the user compare it?
│  ├─ YES ↓
│  └─ NO → Add comparison
│
├─ Is uncertainty communicated?
│  ├─ YES ↓
│  └─ NO → Add uncertainty indicator
│
├─ Could this encourage poor decisions?
│  ├─ NO → Proceed
│  └─ YES → Redesign presentation
│
└─ Present with trust
```

### Rules

1. **Financial trust is more important than visual impact**
2. **Never exaggerate gains**
3. **Never hide risk**
4. **Always provide context**
5. **Always allow comparison**
6. **Always communicate uncertainty**

---

## 12 — Responsive Decision Framework

### Decision Flow

```
Adapting layout?
│
├─ Does hierarchy remain the same?
│  ├─ YES ↓
│  └─ NO → Fix hierarchy first
│
├─ Does navigation remain familiar?
│  ├─ YES ↓
│  └─ NO → Use standard navigation pattern
│
├─ Are important actions still visible?
│  ├─ YES ↓
│  └─ NO → Prioritize actions
│
├─ Can interaction remain comfortable?
│  ├─ YES ↓
│  └─ NO → Adapt interaction pattern
│
└─ Proceed with adaptation
```

### Rules

1. **Never redesign simply because the screen is larger**
2. **Hierarchy must remain consistent across breakpoints**
3. **Navigation must follow established patterns**
4. **Important actions must remain visible**
5. **Touch targets must remain comfortable**

---

## 13 — Accessibility Decision Framework

### Decision Flow

```
Approving design?
│
├─ Can VoiceOver complete this task?
│  ├─ YES ↓
│  └─ NO → Fix VoiceOver support
│
├─ Can Dynamic Type display this correctly?
│  ├─ YES ↓
│  └─ NO → Fix Dynamic Type support
│
├─ Can this be understood without color?
│  ├─ YES ↓
│  └─ NO → Add non-color indicator
│
├─ Can keyboard users complete this flow?
│  ├─ YES ↓
│  └─ NO → Fix keyboard support
│
└─ Approve design
```

### Rules

1. **Accessibility should influence every decision, not validate it afterwards**
2. **Every design must work without color**
3. **Every design must work with VoiceOver**
4. **Every design must work with Dynamic Type**
5. **Every design must work with keyboard navigation**
6. **Accessibility is part of quality, not an afterthought**

---

## 14 — Engineering Decision Framework

### Decision Flow

```
Approving design?
│
├─ Can engineering implement this predictably?
│  ├─ YES ↓
│  └─ NO → Simplify implementation
│
├─ Can tokens power this?
│  ├─ YES ↓
│  └─ NO → Map to tokens
│
├─ Can components be reused?
│  ├─ YES ↓
│  └─ NO → Use existing components
│
├─ Can performance remain high?
│  ├─ YES ↓
│  └─ NO → Optimize design
│
├─ Can QA easily test this?
│  ├─ YES ↓
│  └─ NO → Simplify testability
│
└─ Approve design
```

### Rules

1. **Design should reduce implementation effort**
2. **Design should use existing tokens and components**
3. **Design should be testable**
4. **Design should not impact performance**
5. **Design should be implementable without custom code**

---

## 15 — Design Review Questions

### Every Screen Should Answer

| Category | Question |
|---|---|
| **Insight** | What is the primary insight? |
| **Action** | What is the primary action? |
| **Problem** | What user problem does this solve? |
| **Simplification** | Can anything be removed? |
| **Simplification** | Can anything be simplified? |
| **Hierarchy** | Can hierarchy improve? |
| **Accessibility** | Can accessibility improve? |
| **Responsiveness** | Can responsiveness improve? |
| **Engineering** | Can engineering simplify implementation? |
| **AI** | Can AI better explain this? |
| **Financial** | Can financial understanding improve? |
| **Benchmark** | Would Apple remove something here? |
| **Benchmark** | Would Stripe simplify something here? |
| **Longevity** | Would this still feel premium in five years? |

### Review Process

1. **Self-review** — Designer reviews against checklist
2. **Peer review** — Another designer reviews
3. **Engineering review** — Engineer reviews feasibility
4. **Accessibility review** — A11y expert reviews
5. **Product review** — PM reviews against goals

---

## 16 — Documentation

### Documentation Standard

Every framework should include:

| Element | Description |
|---|---|
| **Purpose** | Why this framework exists |
| **Decision Tree** | Step-by-step decision process |
| **Examples** | Good and poor decisions |
| **Common Mistakes** | What to avoid |
| **Engineering Considerations** | Implementation notes |
| **Accessibility Considerations** | A11y notes |
| **Real Product Examples** | How it applies to actual features |

### Documentation Template

```markdown
## [Framework Name]

### Purpose
[Why this framework exists]

### Decision Tree
[Visual or text decision flow]

### Good Decision
[Example of correct decision]

### Poor Decision
[Example of incorrect decision]

### Common Mistakes
- [Mistake 1]
- [Mistake 2]

### Engineering Considerations
- [Implementation notes]

### Accessibility Considerations
- [A11y notes]

### Real Product Examples
- [Example 1]
- [Example 2]
```

---

## Advizmo Design Laws

The system should permanently follow these laws:

| Law | Description |
|---|---|
| **1. Remove before adding** | Elimination is the first design tool |
| **2. Reuse before creating** | Existing solutions are proven |
| **3. Information before decoration** | Every element must inform |
| **4. Financial insight before interface chrome** | Content over container |
| **5. One primary insight per screen** | Focus creates clarity |
| **6. One primary action per screen** | Focus creates action |
| **7. Every color must communicate meaning** | Color is information |
| **8. Every animation must communicate change** | Motion is explanation |
| **9. Every component must justify its existence** | Components earn their place |
| **10. Every screen should reduce financial anxiety** | Calm is the goal |
| **11. Every interaction should increase trust** | Trust is the product |
| **12. The simplest solution is almost always correct** | Simplicity wins |

---

## Final Validation

### Checklist

Review the complete Design Decision Framework against these questions:

| Question | Answer |
|---|---|
| Can two different designers independently reach the same solution? | |
| Can future teams maintain consistency? | |
| Can product decisions become faster? | |
| Can unnecessary complexity be prevented? | |
| Can this framework scale with the company for the next decade? | |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | December 2025 | Initial Design Decision Framework |

---

*This chapter defines the official way Advizmo thinks about product design. All design decisions must follow this framework.*
