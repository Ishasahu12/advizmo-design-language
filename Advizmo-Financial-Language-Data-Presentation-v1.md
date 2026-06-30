# Advizmo Financial Language & Data Presentation v1.0

## Chapter 19 — Financial Language & Data Presentation

---

## Table of Contents

1. [Financial Philosophy](#01-financial-philosophy)
2. [Number System](#02-number-system)
3. [Currency System](#03-currency-system)
4. [Percentage System](#04-percentage-system)
5. [Positive & Negative Language](#05-positive--negative-language)
6. [Financial Hierarchy](#06-financial-hierarchy)
7. [KPI Language](#07-kpi-language)
8. [Tables](#08-tables)
9. [Transactions](#09-transactions)
10. [Investments](#10-investments)
11. [Portfolio Metrics](#11-portfolio-metrics)
12. [Forecasts](#12-forecasts)
13. [Risk Communication](#13-risk-communication)
14. [AI Financial Language](#14-ai-financial-language)
15. [Financial Accessibility](#15-financial-accessibility)
16. [Localization](#16-localization)
17. [Documentation](#17-documentation)

---

## 01 — Financial Philosophy

### Core Principles

Financial presentation directly affects user trust. Inconsistency destroys confidence.

Every financial value, percentage, investment metric, chart, and transaction must follow one universal language across the entire product.

| Principle | Definition |
|---|---|
| **Clarity Over Density** | Show what matters, hide complexity until requested |
| **Context Over Raw Numbers** | A number without context is noise |
| **Comparison Over Isolated Values** | Show how things relate, not just what they are |
| **Transparency Over Marketing** | Truth builds trust; exaggeration destroys it |
| **Education Over Complexity** | Help users understand, don't just inform |

### Non-Negotiable Rules

1. **Never display financial numbers without context**
2. **Never mix number formats on the same screen**
3. **Never abbreviate values that affect financial decisions**
4. **Always display context with financial metrics**
5. **Always distinguish estimated values from actual values**
6. **Always distinguish pending values from completed values**
7. **Always explain recommendations**
8. **Never overemphasize gains**
9. **Treat losses and gains with equal visual weight**
10. **Always use tabular numerals for financial values**

### Financial Truth

| Rule | Reason |
|---|---|
| Never exaggerate | Exaggeration erodes trust permanently |
| Never confuse | Confusion leads to poor decisions |
| Never hide risk | Risk awareness is essential for trust |
| Equal visual weight for gains and losses | Asymmetric presentation is manipulative |
| Context is mandatory | Numbers without context are meaningless |

---

## 02 — Number System

### Number Format Standards

| Format | Usage | Example |
|---|---|---|
| **Whole Numbers** | Dollar amounts, counts, shares | `1,245` / `12,540` / `248` |
| **One Decimal** | Percentages, rates | `4.2%` / `0.5%` |
| **Two Decimals** | Precise calculations, crypto | `$1,245.67` / `0.0025` |
| **Compact (Thousands)** | Dashboards, summaries | `248K` |
| **Compact (Millions)** | Large portfolio values | `2.4M` |
| **Compact (Billions)** | Institutional values | `1.08B` |
| **Compact (Trillions)** | Global macro values | `1.2T` |

### Number Formatting Rules

| Rule | Standard |
|---|---|
| **Thousands Separator** | Comma (`,`) for all locales that use it |
| **Decimal Separator** | Period (`.`) for USD; adapt for locale |
| **Negative Numbers** | Parentheses for financial: `($1,245)` or minus sign: `-$1,245` |
| **Leading Zeros** | Always include: `0.5%` not `.5%` |
| **Trailing Zeros** | Omit unless precision matters: `$10` not `$10.00` |
| **No Space** | Between symbol and number: `$1,245` not `$ 1,245` |

### When to Abbreviate

| Abbreviate | Don't Abbreviate |
|---|---|
| Dashboard summaries | Transaction details |
| Hero metrics | Account balances |
| Chart axis labels | Bill amounts |
| Portfolio overview | Tax calculations |
| Marketing screens | Goal progress |

### Compact Notation Standards

| Value | Compact | Display |
|---|---|---|
| `1,245` | `1.2K` | Dashboard hero |
| `12,540` | `12.5K` | Card value |
| `248,000` | `248K` | Portfolio summary |
| `2,400,000` | `2.4M` | Net worth |
| `1,080,000,000` | `1.08B` | Institutional |
| `1,200,000,000,000` | `1.2T` | Global macro |

### Rounding Rules

| Context | Precision | Rule |
|---|---|---|
| **Display** | Nearest whole | `$1,245` |
| **Calculation** | 4+ decimals | Internal only |
| **Currency** | 2 decimals | `$1,245.67` |
| **Percentage** | 1 decimal | `4.2%` |
| **Compact** | 1 decimal | `2.4M` |

---

## 03 — Currency System

### Currency Display Formats

| Format | Example | Usage |
|---|---|---|
| **Symbol** | `$1,245` | Most screens |
| **Code** | `USD 1,245` | Multi-currency contexts |
| **ISO Code** | `1,245 USD` | International transfers |
| **With Locale** | `1.245,00 €` | European locales |

### Currency States

| State | Display | Example |
|---|---|---|
| **Actual** | Symbol + value | `$1,245.00` |
| **Pending** | Symbol + value + "pending" | `$1,245.00 pending` |
| **Estimated** | "~" prefix | `~$1,245` |
| **Rounded** | "~" prefix | `~$1.2K` |
| **Multi-currency** | Code + value | `EUR 1,245` |

### Negative Currency

| Format | Display | Usage |
|---|---|---|
| **Parentheses** | `($1,245)` | Formal financial |
| **Minus Sign** | `-$1,245` | Inline display |
| **Red Text** | `($1,245)` in red | Losses, negative balances |

### Compact Currency

| Value | Compact Display |
|---|---|
| `$1,245` | `$1.2K` |
| `$12,540` | `$12.5K` |
| `$248,000` | `$248K` |
| `$2,400,000` | `$2.4M` |
| `$1,080,000,000` | `$1.08B` |

### Supported Currencies

| Currency | Symbol | Code | Minor Units |
|---|---|---|---|
| US Dollar | $ | USD | 2 |
| Euro | € | EUR | 2 |
| British Pound | £ | GBP | 2 |
| Indian Rupee | ₹ | INR | 2 |
| Japanese Yen | ¥ | JPY | 0 |
| Canadian Dollar | C$ | CAD | 2 |
| Australian Dollar | A$ | AUD | 2 |

### Multi-Currency Rules

1. **Never mix formats on the same screen**
2. **Always show currency code when multiple currencies appear**
3. **Always show exchange rate for conversions**
4. **Always show original currency and converted amount**
5. **Never hide the original currency**

---

## 04 — Percentage System

### Percentage Types

| Type | Example | Context |
|---|---|---|
| **Growth** | `+4.2%` | Portfolio growth |
| **Loss** | `-2.3%` | Portfolio decline |
| **Allocation** | `70%` | Portfolio allocation |
| **Interest Rate** | `4.5% APY` | Savings account |
| **APY** | `4.50% APY` | Annual Percentage Yield |
| **APR** | `7.99% APR` | Annual Percentage Rate |
| **Tax Rate** | `22%` | Tax bracket |
| **Dividend Yield** | `1.8%` | Dividend income |
| **Goal Progress** | `42%` | Savings goal |

### Percentage Precision

| Context | Precision | Example |
|---|---|---|
| **Growth/Loss** | 1 decimal | `+4.2%` |
| **Allocation** | Whole number | `70%` |
| **APY/APR** | 2 decimals | `4.50%` |
| **Tax Rate** | 1 decimal | `22.0%` |
| **Dividend Yield** | 1 decimal | `1.8%` |
| **Goal Progress** | Whole number | `42%` |

### Percentage Color Rules

| Direction | Color | Symbol |
|---|---|---|
| **Positive** | Green (`#059669`) | `+` |
| **Negative** | Red (`#DC2626`) | `-` |
| **Neutral** | Gray (`#6B7280`) | — |
| **Allocation** | Blue (`#2563EB`) | — |

### Percentage Context Labels

| Label | Usage |
|---|---|
| `today` | Daily change |
| `this week` | Weekly change |
| `this month` | Monthly change |
| `this year` | YTD change |
| `1 year` | Annual return |
| `all time` | Total return |
| `vs. last month` | Comparative |
| `vs. benchmark` | Benchmark comparison |

### Rules

1. **Never show percentages without explaining what they represent**
2. **Always include time period for growth/loss percentages**
3. **Always include the reference point for comparison percentages**
4. **Use consistent precision within the same context**
5. **Show direction (+/-) for all change percentages**

---

## 05 — Positive & Negative Language

### Visual Indicators

| Direction | Symbol | Color | Icon |
|---|---|---|---|
| **Positive** | `▲` | Green | Arrow up |
| **Negative** | `▼` | Red | Arrow down |
| **Neutral** | `▬` | Gray | Dash |
| **Unknown** | `?` | Gray | Question mark |

### Context Mapping

| Context | Positive | Negative | Neutral |
|---|---|---|---|
| **Growth** | `+4.2%` | `-2.3%` | `0.0%` |
| **Return** | `+$840` | `-$320` | `$0` |
| **Balance** | `$12,400` | `($800)` | `$0` |
| **Income** | `+$5,200` | — | — |
| **Expenses** | — | `-$3,800` | — |
| **Savings** | `+$1,400` | — | — |
| **Tax** | `Refund: $840` | `Owed: $1,200` | `Break even` |
| **Risk** | `Low risk` | `High risk` | `Moderate risk` |

### Rules

1. **Always use both color and iconography** — never rely on color alone
2. **Use consistent symbols across all screens**
3. **Treat gains and gains with equal visual weight**
4. **Never use emotional language** — "gain" not "amazing", "loss" not "terrible"
5. **Always explain what caused the change**

### Language Standards

| Instead Of | Use |
|---|---|
| "You made money!" | "Your portfolio gained $840" |
| "You lost money!" | "Your portfolio declined $320" |
| "Great performance!" | "Your portfolio returned +4.2%" |
| "Bad month!" | "Your portfolio declined -2.3% this month" |
| "Warning: Loss!" | "Your portfolio is down -1.2% today" |
| "Jackpot!" | "Your dividend: $240" |
| "Disaster!" | "Your portfolio declined -12% in 2022" |

---

## 06 — Financial Hierarchy

### Visual Priority Levels

| Level | Elements | Visual Treatment |
|---|---|---|
| **Primary** | Net Worth, Safe to Invest, Available Cash, Portfolio Value | Display/32px, Bold, Hero card |
| **Secondary** | Monthly Growth, Cash Flow, Upcoming Bills, Goal Progress | Heading 1/24px, Semibold, Card header |
| **Supporting** | Risk, Allocation, Performance, Sector Exposure | Body/16px, Regular, Card content |
| **Metadata** | Dates, Institutions, Reference Values | Caption/14px, Regular, Secondary text |

### Primary Metrics

| Metric | Display | Format |
|---|---|---|
| **Net Worth** | `$124,500` | Currency, 0 decimals |
| **Safe to Invest** | `$42,800` | Currency, 0 decimals |
| **Available Cash** | `$12,400` | Currency, 0 decimals |
| **Portfolio Value** | `$85,200` | Currency, 0 decimals |

### Secondary Metrics

| Metric | Display | Format |
|---|---|---|
| **Monthly Growth** | `+$1,240 (+1.5%)` | Currency + percentage |
| **Cash Flow** | `+$2,400 this month` | Currency + time period |
| **Upcoming Bills** | `$2,840 in 5 days` | Currency + time |
| **Goal Progress** | `42% complete` | Percentage + context |

### Supporting Metrics

| Metric | Display | Format |
|---|---|---|
| **Risk Level** | `Moderate` | Label |
| **Allocation** | `70/20/10` | Ratio |
| **Performance** | `+8.7% (1 year)` | Percentage + period |
| **Sector Exposure** | `Technology 35%` | Label + percentage |

### Hierarchy Rules

1. **Primary metrics always appear first**
2. **Never stack more than 4 metrics in a row**
3. **Use visual weight (size, weight, color) to differentiate levels**
4. **Supporting metrics can be collapsed or hidden**
5. **Metadata never competes with financial values**

---

## 07 — KPI Language

### KPI Anatomy

Every KPI must include:

| Element | Required? | Description |
|---|---|---|
| **Title** | Yes | What the metric measures |
| **Primary Value** | Yes | The current value |
| **Comparison** | Yes | vs. previous period or benchmark |
| **Time Period** | Yes | When this applies |
| **Trend** | Yes | Direction indicator (▲/▼/▬) |
| **Context** | Yes | Why this matters |
| **Recommendation** | Optional | AI suggestion |
| **CTA** | Optional | Action to take |

### KPI Examples

**Portfolio Value KPI:**
```
Portfolio Value
$85,200
▲ +$840 (+1.0%) vs. last month
1 month
Context: Your portfolio has grown steadily over the past 3 months.
```

**Cash Flow KPI:**
```
Cash Flow
+$2,400
▲ +$200 vs. last month
This month
Context: Income exceeds expenses by $2,400.
```

**Goal Progress KPI:**
```
Emergency Fund
$8,400 of $20,000
42% complete
At current pace: 21 months
Context: You're on track to reach your goal by Q3 2027.
```

### KPI Rules

1. **Never present isolated metrics** — always include comparison and context
2. **Always show time period** — users need to know "when"
3. **Always show trend direction** — never just a number
4. **Context should explain "so what?"** — why does this matter?
5. **Recommendations should be optional** — not every KPI needs AI

---

## 08 — Tables

### Table Types

| Type | Usage |
|---|---|
| **Financial Table** | Balances, net worth, summaries |
| **Portfolio Table** | Holdings, allocation, performance |
| **Transaction Table** | Transaction history, categories |
| **Tax Table** | Tax lots, gains, losses |
| **Investment Table** | Stock/fund details, metrics |

### Table Rules

| Rule | Standard |
|---|---|
| **Numeric Alignment** | Right-aligned |
| **Decimal Alignment** | Aligned on decimal point |
| **Tabular Numerals** | Always for financial columns |
| **Label Alignment** | Left-aligned |
| **Total Rows** | Highlighted, separated |
| **Summary Rows** | Visually distinct |
| **Empty Cells** | Show "—" not blank |
| **Negative Values** | Parentheses or minus sign, red |

### Table Structure

```
┌──────────────────┬──────────┬──────────┬──────────┬──────────┐
│ Account          │ Balance  │ Change   │ Return   │ Status   │
├──────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Checking         │ $12,400  │ +$400    │ —        │ Active   │
│ Savings          │ $42,800  │ +$1,200  │ +4.5%    │ Active   │
│ Investment       │ $85,200  │ +$840    │ +8.7%    │ Active   │
├──────────────────┼──────────┼──────────┼──────────┼──────────┤
│ Total            │ $140,400 │ +$2,440  │ +6.2%    │ —        │
└──────────────────┴──────────┴──────────┴──────────┴──────────┘
```

### Column Standards

| Column Type | Width | Alignment | Format |
|---|---|---|---|
| **Text Label** | Flexible | Left | Text |
| **Currency** | Fixed | Right | `$1,245` |
| **Percentage** | Fixed | Right | `4.2%` |
| **Date** | Fixed | Left | `Jan 15, 2025` |
| **Status** | Fixed | Left | Badge/label |
| **Action** | Fixed | Right | Button/icon |

### Table Accessibility

1. **Use `<table>` elements, not divs**
2. **Include `<thead>` and `<tbody>`**
3. **Add `scope` attributes to headers**
4. **Provide caption or aria-label**
5. **Support keyboard navigation**
6. **Announce sort changes to screen readers**

---

## 09 — Transactions

### Transaction Anatomy

Every transaction must display:

| Element | Required? | Format |
|---|---|---|
| **Merchant** | Yes | Full name, never truncated |
| **Category** | Yes | Category label with icon |
| **Amount** | Yes | Currency format with sign |
| **Account** | Yes | Account name or last 4 digits |
| **Date** | Yes | Relative or absolute |
| **Status** | Yes | Pending/Completed/Failed |
| **Notes** | Optional | User notes |
| **AI Insight** | Optional | AI-generated context |

### Transaction Display

**List Item:**
```
┌──────────────────────────────────────────────────┐
│  🏪  Whole Foods Market        -$84.23          │
│      Groceries · Checking · Dec 15               │
│      ✓ Completed                                 │
└──────────────────────────────────────────────────┘
```

**Detailed View:**
```
┌──────────────────────────────────────────────────┐
│  Whole Foods Market                              │
│                                                  │
│  Amount:        -$84.23                          │
│  Category:      Groceries                        │
│  Account:       Checking (****1234)              │
│  Date:          December 15, 2025                │
│  Status:        Completed                        │
│                                                  │
│  Notes: Weekly grocery shopping                  │
│                                                  │
│  ✦ AI Insight: This is 12% higher than your      │
│  average grocery spend.                          │
└──────────────────────────────────────────────────┘
```

### Transaction States

| State | Display | Color |
|---|---|---|
| **Completed** | `✓ Completed` | Green |
| **Pending** | `◯ Pending` | Amber |
| **Failed** | `✗ Failed` | Red |
| **Cancelled** | `✗ Cancelled` | Gray |

### Transaction Rules

1. **Never truncate merchant names** — show full name
2. **Always show category** — helps users understand spending
3. **Always show account** — users have multiple accounts
4. **Always show status** — pending vs. completed matters
5. **Relative dates for recent** — "Today", "Yesterday", "2 days ago"
6. **Absolute dates for older** — "Dec 15, 2025"
7. **Group by date** — "Today", "Yesterday", "This Week", "Earlier"

---

## 10 — Investments

### Investment Metrics

| Metric | Display | Format |
|---|---|---|
| **Cost Basis** | `$10,000` | Currency |
| **Current Value** | `$10,840` | Currency |
| **Market Value** | `$10,840` | Currency |
| **Today's Return** | `+$84 (+0.8%)` | Currency + percentage |
| **Total Return** | `+$840 (+8.4%)` | Currency + percentage |
| **Annual Return** | `+8.7%` | Percentage |
| **Allocation** | `70%` | Percentage |
| **Shares** | `125.43` | Number |
| **Price** | `$86.42` | Currency |
| **Average Cost** | `$80.00` | Currency |
| **Dividend Yield** | `1.8%` | Percentage |
| **Risk Level** | `Moderate` | Label |

### Investment Display

**Stock/Fund Card:**
```
┌──────────────────────────────────────────────────┐
│  AAPL  Apple Inc.                                │
│                                                  │
│  $186.42          ▲ +$2.34 (+1.27%) today        │
│                                                  │
│  125 shares · Avg cost $172.40                   │
│  Total return: +$1,752 (+8.13%)                  │
│                                                  │
│  [View details]                                  │
└──────────────────────────────────────────────────┘
```

### Investment Terminology

| Term | Definition | Display |
|---|---|---|
| **Cost Basis** | Original purchase price | `$10,000` |
| **Current Value** | What it's worth now | `$10,840` |
| **Unrealized Gain/Loss** | Paper gain/loss | `+$840` |
| **Realized Gain/Loss** | After selling | `+$840` |
| **Dividend Income** | Income from dividends | `$180` |
| **Yield** | Income as % of value | `1.8%` |

### Rules

1. **Use consistent terminology** across all screens
2. **Always show cost basis and current value together**
3. **Always show today's change and total return**
4. **Never show price without context** — price alone is meaningless
5. **Always show the number of shares**

---

## 11 — Portfolio Metrics

### Portfolio Metric Hierarchy

| Level | Metrics | Display |
|---|---|---|
| **Primary** | Portfolio Value, Net Return | Display/32px, Bold |
| **Secondary** | Performance, Allocation, Risk | Heading 1/24px |
| **Supporting** | Diversification, Sector, Benchmark | Body/16px |
| **Detail** | Tax Efficiency, Cash Allocation | Caption/14px |

### Portfolio Metrics

| Metric | Display | Format |
|---|---|---|
| **Portfolio Value** | `$85,200` | Currency |
| **Performance** | `+8.7% (1 year)` | Percentage + period |
| **Allocation** | `70/20/10` | Stocks/Bonds/Cash |
| **Diversification** | `12 holdings` | Count |
| **Risk Level** | `Moderate` | Label |
| **Benchmark** | `+7.2% (S&P 500)` | Percentage + name |
| **Sector Exposure** | `Technology 35%` | Label + percentage |
| **Cash Allocation** | `10%` | Percentage |
| **Tax Efficiency** | `High` | Label |
| **Net Return** | `+7.8%` | Percentage |

### Portfolio Display

**Portfolio Summary:**
```
┌──────────────────────────────────────────────────┐
│  Portfolio Value                                 │
│  $85,200                                         │
│  ▲ +$6,400 (+8.1%) this year                    │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │ Allocation     Performance    Risk          │  │
│  │ 70/20/10       +8.7% (1yr)   Moderate     │  │
│  │                vs S&P 500                  │  │
│  │                +7.2%                       │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

### Benchmark Comparison

| Metric | Portfolio | Benchmark | Difference |
|---|---|---|---|
| **1 Year** | `+8.7%` | `+7.2%` | `+1.5%` |
| **3 Year** | `+9.2%` | `+8.8%` | `+0.4%` |
| **5 Year** | `+10.1%` | `+9.5%` | `+0.6%` |

### Rules

1. **Always show portfolio value prominently**
2. **Always compare to a relevant benchmark**
3. **Show time period for all performance metrics**
4. **Allocation should be visual (pie/bar) not just numbers**
5. **Risk should be explained, not just labeled**

---

## 12 — Forecasts

### Forecast Visual Language

| Type | Visual Treatment | Color |
|---|---|---|
| **Actual** | Solid line, full opacity | Primary |
| **Estimated** | Dashed line, 80% opacity | Primary |
| **Projected** | Dashed line, 60% opacity | Primary |
| **Likely** | Dashed line, 60% opacity | Primary |
| **Possible** | Dotted line, 40% opacity | Secondary |
| **Future** | Dotted line, 40% opacity | Secondary |

### Forecast Labels

| Label | Usage | Display |
|---|---|---|
| **Actual** | Historical data | No prefix |
| **Estimated** | Current period incomplete | `~` prefix |
| **Projected** | Future based on trend | `(projected)` |
| **Likely** | High confidence forecast | `(likely)` |
| **Possible** | Low confidence forecast | `(possible)` |

### Forecast Display

**Goal Forecast:**
```
┌──────────────────────────────────────────────────┐
│  Emergency Fund Forecast                         │
│                                                  │
│  Current:    $8,400 (42%)                       │
│  Target:     $20,000                             │
│                                                  │
│  Projected completion: Q3 2027                   │
│  At current pace: $500/month                    │
│                                                  │
│  To reach in 18 months: $780/month              │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ [Chart showing current → projected path] │   │
│  └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

### Rules

1. **Forecasts must be visually distinguishable from actual values**
2. **Never present projections as facts**
3. **Always show the assumptions behind projections**
4. **Always show confidence level for forecasts**
5. **Always show alternative scenarios when possible**

---

## 13 — Risk Communication

### Risk Levels

| Level | Label | Color | Description |
|---|---|---|---|
| **Very Low** | `Very Low Risk` | Blue | Capital preservation focus |
| **Low** | `Low Risk` | Green | Stable, minimal volatility |
| **Moderate** | `Moderate Risk` | Amber | Balanced risk/return |
| **High** | `High Risk` | Orange | Growth focus, some volatility |
| **Very High** | `Very High Risk` | Red | Aggressive, significant volatility |

### Risk Explanation Structure

Every risk explanation must include:

| Element | Description |
|---|---|
| **Current Status** | What the risk level is |
| **Reason** | Why this risk level exists |
| **Potential Impact** | What could happen |
| **Suggested Action** | What the user could do |

### Risk Display

**Risk Card:**
```
┌──────────────────────────────────────────────────┐
│  Risk Analysis                                   │
│                                                  │
│  Current Level: Moderate                         │
│  Risk: ██████████░░░░░░░░  50%                  │
│                                                  │
│  What this means:                                │
│  • In a market downturn, portfolio could drop    │
│    10-15% temporarily                            │
│  • Historical recovery: 12-18 months             │
│  • Your timeline (12 years) supports this risk   │
│                                                  │
│  [Adjust risk] [Understand more]                 │
└──────────────────────────────────────────────────┘
```

### Risk Rules

1. **Risk must be explained in plain language**
2. **Never just label risk — explain what it means**
3. **Always show potential impact**
4. **Always suggest actions**
5. **Never minimize risk** — be honest about what could happen

---

## 14 — AI Financial Language

### AI Financial Communication Principles

| Principle | Description |
|---|---|
| **Confidence** | AI must express confidence level for all financial analysis |
| **Reasoning** | AI must explain how it arrived at financial conclusions |
| **Trade-offs** | AI must present alternatives and trade-offs |
| **Assumptions** | AI must state all assumptions |
| **Uncertainty** | AI must acknowledge uncertainty — never present certainty where none exists |

### AI Financial Language Patterns

**Good — Transparent, Explains Uncertainty:**
> "Based on your current savings rate of $500/month, you'll reach your $20,000 goal in approximately 21 months. This assumes no changes to your income or expenses. If you increase savings by $280/month, you could reach it in 18 months."

**Bad — Overconfident, Hides Uncertainty:**
> "You'll reach your goal in 21 months."

**Good — Shows Alternatives:**
> "You have three options for your $12,000 cash surplus:
> 1. Pay off 7.99% credit card (saves $960/year in interest)
> 2. Add to emergency fund (reaches goal 4 months earlier)
> 3. Invest in index fund (historically 8-10% return, but not guaranteed)"

**Bad — Single Option, No Trade-offs:**
> "Invest your surplus in an index fund."

### AI Assumptions

AI must always state:

| Assumption | Example |
|---|---|
| **Time horizon** | "Based on your 12-year timeline..." |
| **Risk tolerance** | "Given your moderate risk tolerance..." |
| **Market conditions** | "Assuming current market conditions..." |
| **Income stability** | "Assuming stable income..." |
| **Historical data** | "Based on historical performance..." |

### Rules

1. **Never allow AI to present certainty where uncertainty exists**
2. **Always show confidence level for financial analysis**
3. **Always explain reasoning behind financial recommendations**
4. **Always present trade-offs and alternatives**
5. **Always state assumptions**
6. **Never guarantee outcomes**

---

## 15 — Financial Accessibility

### Number Accessibility

| Feature | Requirement |
|---|---|
| **Tabular Numerals** | Always for financial values — numbers align in columns |
| **VoiceOver Reading** | Numbers read naturally: "$1,245" → "one thousand two hundred forty-five dollars" |
| **Large Numbers** | Break into groups: "1,245,678" → "1 million, 245 thousand, 678" |
| **Dynamic Type** | Financial values scale with system font size |
| **Color Independence** | Never rely on color alone for positive/negative |

### Table Accessibility

| Feature | Requirement |
|---|---|
| **Semantic HTML** | Use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` |
| **Headers** | Every column must have a header |
| **Scope** | Headers must have `scope="col"` or `scope="row"` |
| **Caption** | Tables must have `<caption>` or `aria-label` |
| **Keyboard** | Users must be able to navigate all cells |
| **Sort** | Sort changes must be announced to screen readers |

### Chart Accessibility

| Feature | Requirement |
|---|---|
| **Alt Text** | Every chart must have descriptive alt text |
| **Data Table** | Provide data table alternative for every chart |
| **Keyboard** | Chart data points must be keyboard accessible |
| **Screen Reader** | Data must be readable by screen readers |
| **Color** | Never use color as the only way to distinguish data |

### Financial Comparison Accessibility

| Feature | Requirement |
|---|---|
| **Structure** | Use clear comparison structure |
| **Announce Changes** | When comparison changes, announce to screen reader |
| **Keyboard** | Comparison must be navigable by keyboard |
| **Labels** | All comparison labels must be clear |

---

## 16 — Localization

### Currency Localization

| Locale | Currency | Symbol Position | Decimal | Thousands |
|---|---|---|---|---|
| **US** | USD | Before: `$1,245` | `.` | `,` |
| **UK** | GBP | Before: `£1,245` | `.` | `,` |
| **EU** | EUR | After: `1.245,00 €` | `,` | `.` |
| **India** | INR | Before: `₹1,24,456` | `.` | `,` |
| **Japan** | JPY | Before: `¥1,245` | — | `,` |

### Date Localization

| Locale | Format | Example |
|---|---|---|
| **US** | MM/DD/YYYY | `12/15/2025` |
| **UK** | DD/MM/YYYY | `15/12/2025` |
| **EU** | DD.MM.YYYY | `15.12.2025` |
| **ISO** | YYYY-MM-DD | `2025-12-15` |

### Number Localization

| Locale | Decimal | Thousands | Example |
|---|---|---|---|
| **US/UK** | `.` | `,` | `1,245.67` |
| **EU** | `,` | `.` | `1.245,67` |
| **India** | `.` | `,` | `12,45,678` |
| **Japan** | `.` | `,` | `1,245.67` |

### RTL Support

| Feature | Requirement |
|---|---|
| **Currency Symbol** | Right-aligned in RTL |
| **Numbers** | LTR within RTL text |
| **Tables** | Mirrored layout |
| **Charts** | Mirrored axis |
| **Percentages** | Left-aligned in RTL |

### Localization Rules

1. **Always use locale-appropriate formatting**
2. **Never hardcode currency symbols**
3. **Always use locale-appropriate date formats**
4. **Always support RTL for Arabic/Hebrew**
5. **Always use locale-appropriate number separators**

---

## 17 — Documentation

### Documentation Standard

Every financial guideline must include:

| Element | Description |
|---|---|
| **Purpose** | What this guideline covers |
| **Rules** | The specific rules to follow |
| **Examples** | Good and bad examples |
| **Engineering Notes** | Implementation considerations |
| **Accessibility Notes** | How to make it accessible |
| **Localization Notes** | How to localize it |
| **Do** | Correct usage |
| **Don't** | Incorrect usage |

### Documentation Template

```markdown
## [Financial Presentation Topic]

### Purpose
[What this guideline covers and why it matters]

### Rules
- [Rule 1]
- [Rule 2]
- [Rule 3]

### Good Example
[Concrete example of correct usage]

### Bad Example
[Concrete example of incorrect usage]

### Engineering Notes
- [Implementation details]
- [Performance considerations]
- [API requirements]

### Accessibility Notes
- [VoiceOver reading]
- [Keyboard navigation]
- [Color independence]

### Localization Notes
- [Currency formatting]
- [Number formatting]
- [Date formatting]

### Do
- [Correct pattern 1]
- [Correct pattern 2]

### Don't
- [Incorrect pattern 1]
- [Incorrect pattern 2]
```

---

## Final Validation

### Checklist

Review the complete Financial Language against these questions:

| Question | Answer |
|---|---|
| Would a first-time investor understand this? | |
| Would an experienced investor trust this? | |
| Can users compare numbers quickly? | |
| Can financial decisions be made confidently? | |
| Can engineering implement these rules consistently? | |
| Can this system support every future financial feature? | |

### Non-Negotiable Rules Summary

| Rule | Standard |
|---|---|
| **Tabular Numerals** | Always for financial values |
| **Number Format Consistency** | Never mix on same screen |
| **Abbreviation** | Never for values affecting decisions |
| **Context** | Always display with financial metrics |
| **Estimated vs Actual** | Always distinguish |
| **Pending vs Completed** | Always distinguish |
| **Recommendations** | Always explain |
| **Gains/Losses** | Equal visual weight |
| **AI Certainty** | Never present where uncertainty exists |

---

## Version History

| Version | Date | Changes |
|---|---|---|
| 1.0 | December 2025 | Initial Financial Language & Data Presentation |

---

*This chapter defines the official Financial Language standard for every financial experience in Advizmo. All financial presentation must comply with these guidelines.*
