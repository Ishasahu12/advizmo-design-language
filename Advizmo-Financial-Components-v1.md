# Advizmo Financial Components

## Financial Component System

Production-grade financial components for every Advizmo experience. Built on Card Architecture. Assembled from reusable building blocks.

---

## Financial Design Philosophy

Financial components should explain. Never overwhelm. Every component should answer three questions:

**What happened?**
**Why?**
**What should I do next?**

Every component should encourage informed decisions. Never pressure users.

Components communicate:

- Trust
- Financial Confidence
- Transparency
- Hierarchy
- Calm

Never decoration.

---

## Financial Component Architecture

Every financial component inherits from Card Architecture.

All components use:

- Auto Layout
- Semantic spacing
- Semantic typography
- Semantic radius
- Semantic elevation
- Semantic colors

---

## DELETE Rule

If a component can be assembled from existing components, DELETE it.

If two components solve the same problem, MERGE them.

Always prefer composition over creation.

---

## Component States

Support only applicable states per component.

| State | Usage |
|-------|-------|
| Default | Normal display |
| Loading | Fetching data |
| Skeleton | Content loading |
| Empty | No data available |
| Updating | Data refreshing |
| Offline | No network |
| Error | Failed to load |
| Success | Action completed |
| Expanded | Full detail view |
| Collapsed | Summary view |
| Selected | Item selected |

---

## Typography

| Context | Font | Weight |
|---------|------|--------|
| Hero KPI | IBM Plex Sans | Bold (700) |
| Large KPI | IBM Plex Sans | Semibold (600) |
| Medium KPI | IBM Plex Sans | Semibold (600) |
| Small KPI | IBM Plex Sans | Medium (500) |
| Labels | Inter | Regular (400) |
| Body | Inter | Regular (400) |
| Metadata | Inter | Regular (400) |

IBM Plex Sans is reserved exclusively for financial KPIs. Never for labels, body text, or metadata.

---

## Color Usage

| Color | Usage |
|-------|-------|
| Green | Gains, growth, positive |
| Red | Losses, negative, at-risk |
| Blue | Brand, trust, information |
| Purple | AI, insights, automation |
| Orange | Attention, warning |
| Gray | Neutral, disabled |

Never use primitive colors directly. Always use semantic tokens.

---

## Portfolio

Portfolio components show users how their investments are performing.

### Portfolio Summary

Hero KPI card showing total portfolio value with change indicator.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Portfolio Value                         │
│  $124,562.00                            │ ← IBM Plex Sans Bold 34px
│  ▲ $2,341.00 (1.9%) this month          │ ← Green for positive
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| Total | All accounts combined |
| Account | Single account |
| Group | Account group |

**States:** Default, Loading, Skeleton, Empty, Error

**Token Mapping:**
```
Portfolio/Background → color/surface
Portfolio/Title → color/text-secondary
Portfolio/Value → color/text-primary
Portfolio/Change/Positive → color/text-positive
Portfolio/Change/Negative → color/text-negative
Portfolio/Radius → radius/m
Portfolio/Padding → spacing/4
```

**Typography:**
| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Value | IBM Plex Sans | 34px | Bold |
| Change | Inter | 14px | Medium |
| Label | Inter | 12px | Regular |

**Accessibility:**
- VoiceOver: announce "Portfolio value $124,562, up $2,341 this month"
- Use tabular numerals for values
- Color alone never conveys positive/negative (icon + text)

---

### Portfolio Allocation

Donut or bar chart showing how portfolio is distributed across asset classes.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Allocation                              │
│  ┌────────────┐  Stocks    65%          │
│  │   [donut]  │  Bonds     20%          │
│  └────────────┘  Cash      15%          │
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| Donut | Compact circular view |
| Horizontal Bar | Stacked comparison |
| Vertical Bar | Time-based breakdown |

**States:** Default, Loading, Skeleton, Empty, Error

**Token Mapping:**
```
Allocation/Stock → color/accent-blue
Allocation/Bond → color/accent-green
Allocation/Cash → color/text-tertiary
Allocation/Chart → color/border
```

**Typography:**
| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Segment label | Inter | 14px | Medium |
| Percentage | Inter | 14px | Semibold |
| Total label | Inter | 12px | Regular |

**Accessibility:**
- VoiceOver: announce "Allocation: Stocks 65%, Bonds 20%, Cash 15%"
- Minimum tap target on segments: 44pt

---

### Portfolio Performance

Line chart showing portfolio value over time with benchmark comparison.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Performance           1M  3M  6M  1Y   │
│  ┌────────────────────────────────────┐ │
│  │  [line chart]                      │ │
│  │                    ── Portfolio    │ │
│  │                    ── S&P 500     │ │
│  └────────────────────────────────────┘ │
│  Period return: +8.2%                   │
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| Portfolio Only | Single line |
| With Benchmark | Portfolio + S&P 500 |
| With Goal | Portfolio + target line |

**States:** Default, Loading, Skeleton, Error

**Interactions:**
- Tap period selector to change time range
- Pan chart to see historical values
- Long press for crosshair with exact value

**Token Mapping:**
```
Performance/Portfolio/Line → color/accent-blue
Performance/Benchmark/Line → color/text-tertiary
Performance/Goal/Line → color/accent-green
Performance/Grid → color/border-subtle
Performance/Text → color/text-secondary
```

**Accessibility:**
- VoiceOver: announce "Portfolio performance, 1 year view, up 8.2%"
- Chart data available to VoiceOver as data table
- Reduce Motion: disable chart animation

---

### Portfolio Comparison

Side-by-side comparison of portfolio performance against benchmarks or goals.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  vs. S&P 500                             │
│  ┌─────────────┐  ┌─────────────┐        │
│  │  +12.4%    │  │  +8.2%     │        │
│  │  Portfolio │  │  S&P 500   │        │
│  └─────────────┘  └─────────────┘        │
│  Outperforming by 4.2%                   │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Accessibility:**
- VoiceOver: announce "Portfolio outperforming S&P 500 by 4.2%"
- Use comparative language

---

## Net Worth

Net Worth components show users their complete financial picture.

### Net Worth Summary

Hero KPI card showing total net worth.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Net Worth                               │
│  $487,234.00                            │ ← IBM Plex Sans Bold 34px
│  ▲ $4,231.00 (0.9%) this month          │
│                                          │
│  Assets         $524,000                │
│  Liabilities    $36,766                 │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Token Mapping:**
```
NetWorth/Value → color/text-primary
NetWorth/Positive → color/text-positive
NetWorth/Negative → color/text-negative
NetWorth/Assets → color/text-secondary
NetWorth/Liabilities → color/text-secondary
```

---

### Net Worth Trend

Area chart showing net worth over time with assets and liabilities stacked.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Net Worth Trend         All Time  1Y    │
│  ┌────────────────────────────────────┐ │
│  │  [stacked area chart]              │ │
│  │  ███ Assets                        │ │
│  │  ░░░ Liabilities                  │ │
│  └────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

### Net Worth Breakdown

Horizontal breakdown showing what contributes to net worth.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Breakdown                               │
│  Investments           $124,562    25.6% │
│  ████████████████░░░░░░░░░░             │
│  Real Estate          $250,000    51.3% │
│  ████████████████████████████░░         │
│  Cash                 $87,234     17.9% │
│  ████████████░░░░░░░░░░░░░░░░           │
│  Debt                -$36,766    -7.5% │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░           │
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| By Type | Investments, Real Estate, Cash, Debt |
| By Account | Per account breakdown |
| By Goal | Allocation toward goals |

---

## Safe To Invest

Safe To Invest components help users understand how much they can invest without risking their financial security.

### Safe To Invest Summary

Hero KPI showing how much is safe to invest.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Safe To Invest                          │
│  $12,450.00                             │ ← IBM Plex Sans Bold 34px
│                                          │
│  You have 3 months of expenses saved.    │
│  This is above your 3-month target.       │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Token Mapping:**
```
SafeToInvest/Value → color/text-primary
SafeToInvest/Highlight → color/accent-green
SafeToInvest/Explanation → color/text-secondary
```

---

### Safe To Invest Explanation

Explains why the Safe To Invest amount was calculated.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  How we calculated this                  │
│                                          │
│  Monthly expenses: $4,150               │
│  Emergency fund: $12,450 (3 months)     │
│  ─────────────────────────────────       │
│  Remaining: $12,450                     │
│                                          │
│  [Learn more about Safe To Invest]       │
└──────────────────────────────────────────┘
```

**Components Used:**
- Financial Summary card
- Text list
- Link

---

### Safe To Invest History

Shows how Safe To Invest amount has changed over time.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Safe To Invest History                  │
│  [sparkline chart]                      │
│  Jan $8,200  Feb $10,100  Mar $12,450  │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

## Goals

Goal components help users track progress toward financial objectives.

### Goal Summary

Hero card showing most important goal with progress.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  🏠  House Down Payment                  │
│                                          │
│  $45,000 / $80,000                      │ ← IBM Plex Sans
│  [════════════════░░░░░░░░░]  56%       │
│                                          │
│  On track — $320/month                  │
│  Target: December 2026                   │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Token Mapping:**
```
Goal/Progress/Bar → color/accent-blue
Goal/Progress/OnTrack → color/text-positive
Goal/Progress/AtRisk → color/text-negative
Goal/Value → color/text-primary
Goal/Label → color/text-secondary
```

---

### Goal Progress

Detailed progress view with contribution history.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  House Down Payment — Progress           │
│                                          │
│  $45,000 / $80,000         56%          │
│  [════════════════░░░░░░░░░]            │
│                                          │
│  Contributions                           │
│  +$500   June 15                        │
│  +$500   June 1                         │
│  +$320   May 15                         │
│                                          │
│  [View all contributions]                │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Components Used:**
- Progress bar
- Transaction list
- CTA button

---

### Goal Forecast

Shows projected completion date based on current trajectory.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Forecast                                │
│                                          │
│  At current pace:                        │
│  December 2026 — $80,000                │
│                                          │
│  If you add $100/month:                  │
│  August 2026 — $80,000                  │
│                                          │
│  [Adjust contribution]                   │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

### Goal Recommendation

AI-powered suggestion to adjust goal or contribution.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  💡 Recommendation                        │
│                                          │
│  Increase monthly contribution to         │
│  $420 to reach your goal by August.     │
│                                          │
│  [Update Goal]    [Dismiss]              │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

## Transactions

Transaction components show money movement.

### Transaction Row

Single transaction in a list.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│ [Logo]  Merchant Name         -$42.50   │
│         Today, 2:30 PM         Groceries│
└──────────────────────────────────────────┘
```

**Height:** 56px (compact) / 72px (with subtitle)

**States:** Default, Selected, Pending, Error

**Token Mapping:**
```
Transaction/Row/Background → transparent
Transaction/Row/Background/Hover → color/bg-subtle
Transaction/Row/Amount/Negative → color/text-negative
Transaction/Row/Amount/Positive → color/text-positive
Transaction/Row/Merchant → color/text-primary
Transaction/Row/Category → color/text-tertiary
```

**Typography:**
| Element | Token | Size | Weight |
|---------|-------|------|--------|
| Merchant | Inter | 14px | Medium |
| Amount | Inter | 14px | Semibold |
| Category | Inter | 12px | Regular |
| Date | Inter | 12px | Regular |

---

### Transaction Group

Grouped transactions by date or category.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Today                          -$142.50 │
│  ───────────────────────────────────────│
│  [Logo]  Whole Foods          -$42.50   │
│  [Logo]  Uber                 -$12.00   │
│  [Logo]  Netflix              -$15.99   │
│  [Logo]  Shell Gas            -$72.01   │
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| By Date | Today, Yesterday, This Week |
| By Category | Shopping, Food, Transport |
| By Merchant | Single merchant all transactions |

---

### Transaction Detail

Full detail view of a single transaction.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  ←  Transaction                          │
│  ───────────────────────────────────────│
│                                          │
│           [Merchant Logo]                │
│           Whole Foods                    │
│                                          │
│           -$42.50                       │
│           Today, 2:30 PM                │
│                                          │
│  Category         Groceries              │
│  Account         Chase Checking ••4532  │
│  Status          Settled                │
│                                          │
│  [View in Maps]  [Report Issue]         │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Error

**Components Used:**
- Navigation bar with back
- Transaction row
- Detail list
- Action buttons

---

### Merchant Information

Merchant details aggregated across all transactions.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Whole Foods                             │
│  Grocery Store                           │
│                                          │
│  $342.50 spent in June                   │
│  8 transactions                         │
│                                          │
│  [View transactions]                    │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

## Cash

Cash components show available funds and cash flow.

### Cash Position

Hero KPI showing total cash available.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Available Cash                          │
│  $24,562.00                            │
│  Across 3 accounts                      │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Typography:** Hero KPI uses IBM Plex Sans

---

### Cash Flow

Income vs expenses over a period.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Cash Flow — June 2026                   │
│                                          │
│  Income          $8,450.00     ▲        │
│  Expenses        $6,230.00     ▼        │
│  Net             $2,220.00     ▲        │
│                                          │
│  [═══════════════════════════════]      │
│  ████ Income ██ Expenses                 │
└──────────────────────────────────────────┘
```

**Types:**
| Type | Usage |
|------|-------|
| Monthly | One month view |
| Weekly | Week-by-week |
| Category | By spending category |

---

### Income

Income sources and history.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Income                                  │
│  ┌────────────────────────────────────┐ │
│  │  [bar chart by source]              │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Salary (Payroll)     $6,500.00  Jun 1 │
│  Freelance             $1,200.00  Jun 15│
│  Dividends               $750.00  Jun 20│
└──────────────────────────────────────────┘
```

---

### Expenses

Spending breakdown with category comparison.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Expenses — June 2026                    │
│                                          │
│  $6,230.00  ▼ 2% vs last month         │
│                                          │
│  Housing         $2,100   33.7%          │
│  Food            $1,200   19.3%         │
│  Transport         $600    9.6%          │
│  Entertainment     $450    7.2%          │
│  Other           $1,880   30.2%         │
│                                          │
│  [View all categories]                  │
└──────────────────────────────────────────┘
```

---

### Upcoming Bills

Bills due soon.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Upcoming Bills                           │
│  ───────────────────────────────────────│
│  Rent               $1,800    Jun 28    │
│  Electric           $120      Jun 30    │
│  Netflix              $15      Jul 1    │
│  Phone              $85        Jul 3    │
│                                          │
│  Total due: $2,020                       │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

**Visual Indicators:**
- Red if due within 3 days
- Orange if due within 7 days

---

### Emergency Fund

Emergency fund status and recommendations.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Emergency Fund                           │
│                                          │
│  $12,450 / $12,450 (100%)               │
│  [███████████████████████████████]        │
│                                          │
│  ✓ 3 months expenses saved              │
│                                          │
│  [Add to emergency fund]                 │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

## Investment

Investment components show individual holdings and performance.

### Holding

Single investment holding row.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│ [Logo] AAPL              15 shares       │
│        Apple Inc.         Current: $178  │
│        $2,670.00         +$234 (9.6%)  │
└──────────────────────────────────────────┘
```

**Height:** 72px

**States:** Default, Selected, Loading, Error

---

### Holding Summary

Portfolio breakdown by holding.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Top Holdings                            │
│  ───────────────────────────────────────│
│  AAPL     Apple Inc.        $2,670  25% │
│  MSFT     Microsoft         $2,340  22% │
│  GOOGL    Alphabet          $1,890  18% │
│  AMZN     Amazon            $1,450  14% │
│  [View all 12 holdings]                  │
└──────────────────────────────────────────┘
```

---

### Holding Detail

Full detail view of a single holding.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  ←  Apple Inc. (AAPL)                    │
│  ───────────────────────────────────────│
│                                          │
│  $178.42                    ▲ $15.23    │
│  Current price                 (9.3%)   │
│                                          │
│  Shares              15                  │
│  Cost basis          $2,436.00           │
│  Market value        $2,670.30           │
│  Gain/loss           +$234.30 (+9.6%)   │
│                                          │
│  [Buy]    [Sell]    [Trade]              │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Error

---

### Performance

Individual holding performance chart.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  AAPL Performance         1M  3M  6M  1Y│
│  ┌────────────────────────────────────┐ │
│  │  [line chart]                      │ │
│  └────────────────────────────────────┘ │
│  +15.2% this year                       │
└──────────────────────────────────────────┘
```

---

### Allocation

Investment allocation across asset classes.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Allocation                              │
│  ┌────────────────────────────────────┐ │
│  │  [donut chart]                     │ │
│  └────────────────────────────────────┘ │
│                                          │
│  US Stocks    45%   $56,250            │
│  Intl Stocks  20%   $25,000            │
│  Bonds        20%   $25,000            │
│  Cash         15%   $18,750            │
└──────────────────────────────────────────┘
```

---

### Risk

Risk assessment for portfolio or account.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Risk Assessment                         │
│                                          │
│  Moderate — Suitability matches profile  │
│                                          │
│  [████████████░░░░░]  6/10              │
│                                          │
│  Based on: 5 years, $125k income         │
│  [Update profile]                        │
└──────────────────────────────────────────┘
```

---

## Tax

Tax components show tax-related information.

### Tax Summary

Annual tax impact overview.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Tax Year 2026                            │
│                                          │
│  Estimated tax saved: $2,340            │
│  Tax-loss harvested: $1,200             │
│                                          │
│  [View Tax Center]                       │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

### Tax Saved

Tax savings from contributions and losses.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Tax Saved This Year                      │
│  $2,340.00                              │
│                                          │
│  401(k) contribution     $1,560         │
│  Roth IRA contribution     $480         │
│  Tax-loss harvesting        $300        │
│                                          │
│  [View details]                          │
└──────────────────────────────────────────┘
```

---

### Tax Due

Estimated tax due and payment options.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Estimated Tax Due                        │
│  $4,230.00                              │
│                                          │
│  Due: April 15, 2027                     │
│                                          │
│  [Set reminder]  [Make payment]          │
└──────────────────────────────────────────┘
```

---

### Tax Harvest

Tax-loss harvesting opportunities.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Tax-Loss Harvesting                      │
│                                          │
│  Potential savings: $340                  │
│                                          │
│  XYZ Corp      -$1,200  (unrealized)    │
│  [Harvest]                               │
│                                          │
│  90-day wash sale applies                │
└──────────────────────────────────────────┘
```

---

## Automation

Automation components show scheduled and running automations.

### Automation Status

Overview of all automations.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Automations                             │
│  ───────────────────────────────────────│
│  ✓ 3 running                             │
│  ⟳ 1 paused                              │
│  ✗ 1 error                               │
│                                          │
│  [Manage automations]                    │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty

---

### Automation Timeline

Visual timeline of automation activity.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Automation Activity                      │
│  ───────────────────────────────────────│
│  ✓  Transfer to Savings    Jun 28, 8AM  │
│  ✓  Bill Pay - Electric    Jun 28, 9AM  │
│  ⟳  Invest $500/month      Jun 28, 10AM │
│  ✗  Transfer to Broker     Jun 27, 8AM  │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

### Automation Recommendation

Suggestion to create or adjust an automation.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  💡 Save $240/year                        │
│                                          │
│  Set up automatic transfer to savings    │
│  every payday.                            │
│                                          │
│  [Set up]    [Maybe later]               │
└──────────────────────────────────────────┘
```

---

## AI

AI components show personalized insights and recommendations.

### AI Recommendation

Personalized suggestion based on user data.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  💡 Insight                               │
│                                          │
│  You could save $1,200/year by moving    │
│  your emergency fund to a high-yield     │
│  account.                                │
│                                          │
│  Average APY: 4.5% vs current 0.5%       │
│                                          │
│  [Move funds]  [Learn more]  [Dismiss]   │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty

**Token Mapping:**
```
AI/Card/Background → color/accent-purple-subtle
AI/Card/Icon → color/accent-purple
AI/Title → color/text-primary
AI/Body → color/text-secondary
AI/Action → color/accent-blue
```

**Typography:** IBM Plex Sans for numbers. Inter for body.

**Accessibility:**
- VoiceOver: announce "Insight: You could save $1,200 per year..."
- Include actionable verb in announcement

---

### AI Insight

Spending or trend insight.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  📊 Spending Insight                       │
│                                          │
│  Your food budget is up 18% vs May.      │
│  Mostly from restaurants.                 │
│                                          │
│  [See breakdown]  [Dismiss]               │
└──────────────────────────────────────────┘
```

---

### AI Explanation

Explanation of a recommendation or insight.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Why we recommend this                   │
│                                          │
│  Based on:                               │
│  • 6 months of spending history          │
│  • Current savings rate of 15%           │
│  • Goal target of $80,000 by 2026        │
│  • Income of $8,500/month                │
│                                          │
│  [Learn more]                            │
└──────────────────────────────────────────┘
```

---

### AI Summary

Daily or weekly AI summary.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Your Week in Review                      │
│  ───────────────────────────────────────│
│                                          │
│  Income: $8,450                          │
│  Expenses: $6,230                        │
│  Saved: $2,220 (26%)                     │
│                                          │
│  Portfolio: +2.1% ($2,560)              │
│                                          │
│  [View full summary]                     │
└──────────────────────────────────────────┘
```

---

### AI Action Card

Actionable AI suggestion.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Ready to invest?                        │
│                                          │
│  Safe to invest: $12,450                │
│                                          │
│  [Invest $500]  [Adjust amount]           │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Processing

---

### AI Confidence

Shows confidence level in a recommendation.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  We're 87% confident this is right for   │
│  you, based on your financial profile.   │
│                                          │
│  [Why this confidence level?]            │
└──────────────────────────────────────────┘
```

**Confidence Levels:**
| Level | Percentage |
|-------|-----------|
| High | 80-100% |
| Medium | 60-79% |
| Low | 40-59% |
| Speculative | <40% |

---

## Financial Health

Financial health components show overall wellness.

### Financial Health Score

Overall financial health indicator.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Financial Health                         │
│                                          │
│  [███████████████░░░░░]  78/100          │
│  Good                                    │
│                                          │
│  [View breakdown]                       │
└──────────────────────────────────────────┘
```

**Score Ranges:**
| Score | Label | Color |
|-------|-------|-------|
| 80-100 | Excellent | Green |
| 60-79 | Good | Blue |
| 40-59 | Fair | Orange |
| 0-39 | Needs Work | Red |

---

### Financial Health Breakdown

Detail of how score was calculated.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Health Breakdown                         │
│  ───────────────────────────────────────│
│  Savings          85/100   ████████░░   │
│  Debt             72/100   ███████░░░   │
│  Investments      68/100   ██████░░░░   │
│  Emergency Fund   90/100   █████████░   │
│  Spending         65/100   ██████░░░░   │
│                                          │
│  [Get recommendations]                   │
└──────────────────────────────────────────┘
```

---

### Recommendations

Actionable items to improve financial health.

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Recommendations                         │
│  ───────────────────────────────────────│
│  1. Increase emergency fund to 4 months │
│     Potential savings: $1,200/year       │
│     [Set goal]                           │
│                                          │
│  2. Reduce food spending by 15%          │
│     Target: $1,020/month                 │
│     [See breakdown]                     │
└──────────────────────────────────────────┘
```

---

## Composition Patterns

Financial components are assembled from these building blocks:

### Card + KPI = Summary Card
### Card + Chart + List = Detail Card
### Card + Chart + CTA = Action Card
### Card + Timeline + Status = Activity Card
### Card + Progress + Recommendation = Goal Card
### Card + Chart + Insight = AI Card

---

## Engineering Mapping

### SwiftUI

```swift
struct PortfolioSummaryCard: View {
    let value: Double
    let change: Double
    let period: String

    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("Portfolio Value")
                .font(.caption)
                .foregroundColor(.secondary)
            Text("$\(value, format: .number)")
                .font(.system(size: 34, weight: .bold, design: .serif))
            HStack {
                Image(systemName: change >= 0 ? "arrow.up" : "arrow.down")
                Text("\(change, format: .number) (\(period))")
            }
            .foregroundColor(change >= 0 ? .green : .red)
        }
        .padding()
        .background(Color(.systemBackground))
        .cornerRadius(12)
    }
}
```

### React

```tsx
<Card>
  <CardContent>
    <Typography variant="label" color="secondary">Portfolio Value</Typography>
    <Typography variant="financial-hero">$124,562.00</Typography>
    <ChangeIndicator value={2341} period="month" />
  </CardContent>
</Card>
```

### Jetpack Compose

```kotlin
@Composable
fun PortfolioSummaryCard(
    value: Double,
    change: Double,
    period: String
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = "Portfolio Value",
                style = MaterialTheme.typography.caption,
                color = MaterialTheme.colorScheme.secondary
            )
            Text(
                text = "$${NumberFormat.getNumberInstance().format(value)}",
                style = MaterialTheme.typography.displaySmall.copy(
                    fontFamily = FontFamily.Serif,
                    fontWeight = FontWeight.Bold
                )
            )
        }
    }
}
```

---

## Quality Checklist

Every financial component must:

- [ ] Use Auto Layout
- [ ] Use semantic tokens
- [ ] Use IBM Plex Sans for KPIs
- [ ] Use semantic colors (never primitive)
- [ ] Support VoiceOver with full context
- [ ] Support Dynamic Type
- [ ] Support Tabular Numerals
- [ ] Support currency formatting
- [ ] Use Card Architecture
- [ ] Answer: What happened? Why? What next?
- [ ] Follow Apple HIG
- [ ] Pass DELETE rule (no duplicates)
- [ ] Support all applicable states
- [ ] Use Component Properties (no hardcoded values)
