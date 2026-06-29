# Advizmo Core Product Components

**Version 1.0**
**Created: June 2026**
**Depends on: Primitive Components v1, Token Architecture v1, Design Foundations v1**

---

## Table of Contents

1. [Overview](#overview)
2. [01 Accounts](#01-accounts)
3. [02 Money](#02-money)
4. [03 Investments](#03-investments)
5. [04 Portfolio](#04-portfolio)
6. [05 Goals](#05-goals)
7. [06 Bills](#06-bills)
8. [07 Automation](#07-automation)
9. [08 AI](#08-ai)
10. [09 Transactions](#09-transactions)
11. [10 Institutions](#10-institutions)
12. [11 Notifications](#11-notifications)
13. [12 Security](#12-security)
14. [13 Identity](#13-identity)
15. [14 Analytics](#14-analytics)
16. [15 Dashboard Widgets](#15-dashboard-widgets)
17. [16 Shared Components](#16-shared-components)
18. [States Reference](#states-reference)
19. [Component Properties Reference](#component-properties-reference)
20. [Validation Checklist](#validation-checklist)

---

## Overview

The Core Product Components are reusable product components built from the Primitive Components.

Every future screen inside Advizmo will be assembled using these components.

### Every Component MUST:

- Use Auto Layout
- Use Variables
- Use Component Tokens
- Support Light & Dark mode
- Support Dynamic Type
- Support Accessibility
- Support VoiceOver
- Support RTL
- Support Responsive Layout
- Support Component Properties
- Support Variants
- Support Instance Swap
- Be production ready

### Inheritance Chain

```
Design Foundations
    ↓
Token Architecture
    ↓
Primitive Components
    ↓
Core Product Components
    ↓
Screens & Patterns
```

---

## 01 Accounts

### Account Card

**Purpose:** Display account overview with balance and status
**Usage:** Dashboard, account lists, summary views

#### Variants

| Variant | Size | Use Case |
|---------|------|----------|
| Compact | SM | List view, quick overview |
| Default | MD | Standard display |
| Expanded | LG | Detailed view |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Card variant |
| `accountType` | AccountType | `checking` | Account type |
| `institution` | String | — | Institution name |
| `accountName` | Text | — | Account name |
| `balance` | Number | — | Account balance |
| `currency` | String | `USD` | Currency code |
| `status` | Status | `connected` | Connection status |
| `trend` | Trend | — | Balance trend |
| `lastSynced` | Date | — | Last sync time |
| `onPress` | Function | — | Press handler |

#### Account Types Supported

| Type | Icon | Color | Token |
|------|------|-------|-------|
| Checking | icon/checking | `color/checking` | `account/checking` |
| Savings | icon/savings | `color/savings` | `account/savings` |
| Brokerage | icon/brokerage | `color/brokerage` | `account/brokerage` |
| Retirement | icon/retirement | `color/retirement` | `account/retirement` |
| Credit Card | icon/credit-card | `color/credit-card` | `account/credit-card` |
| Loan | icon/loan | `color/loan` | `account/loan` |
| Cash | icon/cash | `color/cash` | `account/cash` |
| Crypto | icon/crypto | `color/crypto` | `account/crypto` |

#### Auto Layout

```
Direction: Vertical
Primary Axis: Fill Container
Counter Axis: Stretch
Padding: spacing/4
Gap: spacing/3
Radius: radius/md
```

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `account-card/background` | `color/surface` |
| `account-card/border` | `color/border` |
| `account-card/shadow` | `elevation/low` |
| `account-card/name` | `color/text/primary` |
| `account-card/institution` | `color/text/secondary` |
| `account-card/balance` | `color/text/primary` |
| `account-card/type-icon` | `account/[type]` |
| `account-card/status` | `color/feedback/[status]` |

#### States

| State | Visual Change |
|-------|---------------|
| Default | Standard appearance |
| Hover | Background lightens |
| Pressed | Background darkens |
| Focused | Focus ring visible |
| Loading | Skeleton placeholder |
| Disabled | 50% opacity |
| Disconnected | Status indicator red |

#### Accessibility

- `role="button"` for interactive cards
- `accessibilityLabel`: "[Account Name], [Account Type], [Balance]"
- `accessibilityHint`: "Double tap to view account details"
- Status announced to screen readers
- Color not sole indicator of status

#### Do / Don't

| Do | Don't |
|----|-------|
| Use semantic tokens | Hardcode colors |
| Show connection status | Hide sync issues |
| Support Dynamic Type | Use fixed font sizes |
| Provide loading state | Show broken layout |

---

### Compact Account Card

**Purpose:** Display minimal account info
**Usage:** Lists, quick switches, small spaces

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accountType` | AccountType | `checking` | Account type |
| `institution` | String | — | Institution name |
| `balance` | Number | — | Account balance |
| `status` | Status | `connected` | Connection status |
| `onPress` | Function | — | Press handler |

#### Auto Layout

```
Direction: Horizontal
Primary Axis: Fill Container
Counter Axis: Center
Padding: spacing/3
Gap: spacing/3
```

---

### Expanded Account Card

**Purpose:** Display detailed account information
**Usage:** Account detail views, expanded sections

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accountType` | AccountType | `checking` | Account type |
| `institution` | String | — | Institution name |
| `accountName` | Text | — | Account name |
| `balance` | Number | — | Account balance |
| `available` | Number | — | Available balance |
| `pending` | Number | — | Pending amount |
| `currency` | String | `USD` | Currency code |
| `status` | Status | `connected` | Connection status |
| `lastSynced` | Date | — | Last sync time |
| `accountNumber` | String | — | Masked account number |
| `actions` | Action[] | — | Available actions |

---

### Account Row

**Purpose:** Display account in list format
**Usage:** Account lists, selection menus

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accountType` | AccountType | `checking` | Account type |
| `institution` | String | — | Institution name |
| `balance` | Number | — | Account balance |
| `status` | Status | `connected` | Connection status |
| `selected` | Boolean | `false` | Selected state |
| `onPress` | Function | — | Press handler |

---

### Account Balance

**Purpose:** Display formatted account balance
**Usage:** Anywhere balance is shown

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Balance amount |
| `currency` | String | `USD` | Currency code |
| `available` | Number | — | Available amount |
| `pending` | Number | — | Pending amount |
| `variant` | Variant | `default` | Display variant |
| `showLabel` | Boolean | `true` | Show "Balance" label |

---

### Account Summary

**Purpose:** Display multiple account totals
**Usage:** Dashboard, net worth views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accounts` | Account[] | — | Array of accounts |
| `totalLabel` | Text | `Total` | Total label |
| `showBreakdown` | Boolean | `true` | Show account breakdown |
| `onPress` | Function | — | Press handler |

---

### Connected Account

**Purpose:** Display connected account status
**Usage:** Account connection indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `institution` | String | — | Institution name |
| `lastSynced` | Date | — | Last sync time |
| `status` | Status | `synced` | Sync status |
| `onRefresh` | Function | — | Refresh handler |

---

### Disconnected Account

**Purpose:** Display disconnected account with reconnect CTA
**Usage:** Account reconnection prompts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `institution` | String | — | Institution name |
| `error` | String | — | Error message |
| `onReconnect` | Function | — | Reconnect handler |
| `onRemove` | Function | — | Remove handler |

---

### Institution Header

**Purpose:** Display institution branding
**Usage:** Account groups, institution sections

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Institution name |
| `logo` | String | — | Logo URL |
| `accountCount` | Number | — | Number of accounts |
| `totalBalance` | Number | — | Total balance |
| `onPress` | Function | — | Press handler |

---

### Account Switcher

**Purpose:** Switch between accounts
**Usage:** Account selection, context switching

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accounts` | Account[] | — | Available accounts |
| `selectedAccount` | String | — | Selected account ID |
| `onSelect` | Function | — | Selection handler |
| `variant` | Variant | `dropdown` | Switcher variant |

---

### Account Status

**Purpose:** Display account connection status
**Usage:** Status indicators

#### Variants

| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Connected | `color/feedback/success` | icon/check | Active connection |
| Syncing | `color/feedback/info` | icon/sync | Syncing data |
| Error | `color/feedback/error` | icon/error | Connection error |
| Disconnected | `color/text/disabled` | icon/disconnected | No connection |
| Pending | `color/feedback/warning` | icon/pending | Setup pending |

---

## 02 Money

### Available Cash Card

**Purpose:** Display available cash for spending
**Usage:** Dashboard, cash management

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Available cash |
| `currency` | String | `USD` | Currency code |
| `trend` | Trend | — | Cash trend |
| `breakdown` | Breakdown | — | Cash breakdown |
| `onPress` | Function | — | Press handler |

#### Auto Layout

```
Direction: Vertical
Primary Axis: Fill Container
Counter Axis: Stretch
Padding: spacing/4
Gap: spacing/3
Radius: radius/md
```

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `cash-card/background` | `color/surface` |
| `cash-card/label` | `color/text/secondary` |
| `cash-card/amount` | `color/text/primary` |
| `cash-card/trend` | `color/feedback/[direction]` |
| `cash-card/icon` | `color/cash` |

---

### Cash Reserved Card

**Purpose:** Display reserved/unavailable cash
**Usage:** Cash management, pending transactions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Reserved amount |
| `currency` | String | `USD` | Currency code |
| `reasons` | Reason[] | — | Reservation reasons |
| `onPress` | Function | — | Press handler |

---

### Safe To Invest Card

**Purpose:** Display amount safe to invest
**Usage:** Investment recommendations, cash optimization

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Safe to invest amount |
| `currency` | String | `USD` | Currency code |
| `confidence` | Number | — | AI confidence (0-100) |
| `factors` | Factor[] | — | Contributing factors |
| `onInvest` | Function | — | Invest handler |

---

### Transfer Summary

**Purpose:** Display transfer overview
**Usage:** Transfer confirmations, history

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fromAccount` | Account | — | Source account |
| `toAccount` | Account | — | Destination account |
| `amount` | Number | — | Transfer amount |
| `currency` | String | `USD` | Currency code |
| `status` | Status | `pending` | Transfer status |
| `estimatedDate` | Date | — | Estimated completion |

---

### Pending Transfer

**Purpose:** Display pending transfer
**Usage:** Pending transactions, processing

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Transfer amount |
| `fromAccount` | String | — | Source account |
| `toAccount` | String | — | Destination account |
| `estimatedDate` | Date | — | Estimated date |
| `onCancel` | Function | — | Cancel handler |

---

### Deposit Summary

**Purpose:** Display deposit information
**Usage:** Deposit history, pending deposits

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Deposit amount |
| `account` | String | — | Destination account |
| `status` | Status | `pending` | Deposit status |
| `date` | Date | — | Deposit date |

---

### Withdrawal Summary

**Purpose:** Display withdrawal information
**Usage:** Withdrawal history, pending withdrawals

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Withdrawal amount |
| `account` | String | — | Source account |
| `status` | Status | `pending` | Withdrawal status |
| `date` | Date | — | Withdrawal date |

---

### Money Breakdown

**Purpose:** Display cash breakdown by category
**Usage:** Dashboard, cash analysis

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | BreakdownItem[] | — | Breakdown items |
| `total` | Number | — | Total amount |
| `currency` | String | `USD` | Currency code |
| `showChart` | Boolean | `true` | Show pie chart |

---

### Money Distribution

**Purpose:** Display how money is distributed
**Usage:** Financial overview, allocation

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `categories` | Category[] | — | Distribution categories |
| `total` | Number | — | Total amount |
| `variant` | Variant | `chart` | Display variant |

---

### Cash Buffer Card

**Purpose:** Display cash buffer status
**Usage:** Emergency fund, buffer tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Buffer amount |
| `target` | Number | — | Target buffer |
| `currency` | String | `USD` | Currency code |
| `status` | Status | `adequate` | Buffer status |

---

### Emergency Fund Card

**Purpose:** Display emergency fund status
**Usage:** Financial safety, goal tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Emergency fund amount |
| `target` | Number | — | Target amount |
| `months` | Number | — | Months of expenses |
| `currency` | String | `USD` | Currency code |

---

### Recurring Cash Movement

**Purpose:** Display recurring transfers
**Usage:** Automation, recurring transactions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | Type | `transfer` | Movement type |
| `amount` | Number | — | Recurring amount |
| `frequency` | Frequency | `monthly` | Recurring frequency |
| `fromAccount` | String | — | Source account |
| `toAccount` | String | — | Destination account |
| `nextDate` | Date | — | Next occurrence |

---

### Money Recommendation Card

**Purpose:** Display AI money recommendation
**Usage:** AI insights, optimization suggestions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Recommendation title |
| `description` | Text | — | Recommendation description |
| `amount` | Number | — | Recommended amount |
| `confidence` | Number | — | AI confidence |
| `action` | Action | — | Recommended action |
| `onAccept` | Function | — | Accept handler |
| `onDismiss` | Function | — | Dismiss handler |

---

## 03 Investments

### Investment Card

**Purpose:** Display investment overview
**Usage:** Dashboard, investment lists

#### Variants

| Variant | Size | Use Case |
|---------|------|----------|
| Compact | SM | List view |
| Default | MD | Standard display |
| Expanded | LG | Detailed view |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Card variant |
| `name` | Text | — | Investment name |
| `ticker` | Text | — | Stock/ETF ticker |
| `type` | InvestmentType | `etf` | Investment type |
| `value` | Number | — | Current value |
| `return` | Number | — | Return amount |
| `returnPercentage` | Number | — | Return percentage |
| `currency` | String | `USD` | Currency code |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `investment-card/background` | `color/surface` |
| `investment-card/name` | `color/text/primary` |
| `investment-card/ticker` | `color/text/secondary` |
| `investment-card/value` | `color/text/primary` |
| `investment-card/return/positive` | `color/feedback/success` |
| `investment-card/return/negative` | `color/feedback/error` |
| `investment-card/type-icon` | `investment/[type]` |

---

### Holding Card

**Purpose:** Display individual holding
**Usage:** Portfolio holdings, detail views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Holding name |
| `ticker` | Text | — | Ticker symbol |
| `shares` | Number | — | Number of shares |
| `avgCost` | Number | — | Average cost |
| `currentPrice` | Number | — | Current price |
| `value` | Number | — | Total value |
| `return` | Number | — | Return amount |
| `returnPercentage` | Number | — | Return percentage |
| `allocation` | Number | — | Portfolio allocation |

---

### ETF Card

**Purpose:** Display ETF information
**Usage:** ETF listings, holdings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | ETF name |
| `ticker` | Text | — | ETF ticker |
| `expenseRatio` | Number | — | Expense ratio |
| `dividendYield` | Number | — | Dividend yield |
| `value` | Number | — | Current value |
| `return` | Number | — | Return percentage |

---

### Stock Card

**Purpose:** Display stock information
**Usage:** Stock holdings, watchlists

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Company name |
| `ticker` | Text | — | Stock ticker |
| `price` | Number | — | Current price |
| `change` | Number | — | Price change |
| `changePercentage` | Number | — | Change percentage |
| `marketCap` | Number | — | Market cap |

---

### Fund Card

**Purpose:** Display mutual fund information
**Usage:** Fund holdings, fund listings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Fund name |
| `ticker` | Text | — | Fund ticker |
| `nav` | Number | — | Net asset value |
| `minimum` | Number | — | Minimum investment |
| `expenseRatio` | Number | — | Expense ratio |

---

### Allocation Card

**Purpose:** Display asset allocation
**Usage:** Portfolio allocation views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | Allocation[] | — | Allocation items |
| `variant` | Variant | `chart` | Display variant |
| `showLegend` | Boolean | `true` | Show legend |

---

### Investment Performance

**Purpose:** Display investment performance
**Usage:** Performance tracking, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `period` | Period | `1y` | Time period |
| `return` | Number | — | Total return |
| `returnPercentage` | Number | — | Return percentage |
| `benchmark` | Number | — | Benchmark return |
| `chart` | ChartData | — | Performance chart |

---

### Return Summary

**Purpose:** Display return breakdown
**Usage:** Performance reports, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalReturn` | Number | — | Total return |
| `dividendReturn` | Number | — | Dividend return |
| `capitalGains` | Number | — | Capital gains |
| `unrealizedGains` | Number | — | Unrealized gains |
| `currency` | String | `USD` | Currency code |

---

### Dividend Summary

**Purpose:** Display dividend information
**Usage:** Income tracking, dividend history

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalDividends` | Number | — | Total dividends |
| `frequency` | Frequency | `quarterly` | Dividend frequency |
| `nextDividend` | Number | — | Next expected |
| `yield` | Number | — | Dividend yield |

---

### Investment Details

**Purpose:** Display detailed investment info
**Usage:** Investment detail screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Investment name |
| `type` | InvestmentType | — | Investment type |
| `value` | Number | — | Current value |
| `costBasis` | Number | — | Cost basis |
| `return` | Number | — | Total return |
| `holding_period` | String | — | Holding period |
| `tax_status` | String | — | Tax status |

---

### Investment Recommendation

**Purpose:** Display AI investment recommendation
**Usage:** AI insights, suggestions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `action` | Action | `buy` | Recommended action |
| `security` | Text | — | Security name |
| `amount` | Number | — | Recommended amount |
| `confidence` | Number | — | AI confidence |
| `reasoning` | Text | — | AI reasoning |
| `risk` | Risk | `medium` | Risk level |

---

### Risk Analysis

**Purpose:** Display investment risk metrics
**Usage:** Risk assessment, portfolio analysis

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `riskLevel` | RiskLevel | `medium` | Overall risk |
| `volatility` | Number | — | Volatility score |
| `beta` | Number | — | Beta value |
| `sharpeRatio` | Number | — | Sharpe ratio |
| `maxDrawdown` | Number | — | Maximum drawdown |

---

### Investment Status

**Purpose:** Display investment status
**Usage:** Status indicators

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Active | `color/feedback/success` | Active investment |
| Pending | `color/feedback/warning` | Pending transaction |
| Suspended | `color/feedback/error` | Suspended |
| Closed | `color/text/disabled` | Closed position |

---

### Asset Allocation

**Purpose:** Display portfolio asset allocation
**Usage:** Portfolio views, allocation targets

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | Allocation[] | — | Current allocations |
| `targets` | Allocation[] | — | Target allocations |
| `variant` | Variant | `donut` | Chart variant |

---

## 04 Portfolio

### Portfolio Summary

**Purpose:** Display portfolio overview
**Usage:** Dashboard, portfolio screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalValue` | Number | — | Portfolio value |
| `totalReturn` | Number | — | Total return |
| `returnPercentage` | Number | — | Return percentage |
| `dayChange` | Number | — | Day change |
| `dayChangePercentage` | Number | — | Day change % |
| `currency` | String | `USD` | Currency code |
| `lastUpdated` | Date | — | Last updated |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `portfolio-summary/background` | `color/surface` |
| `portfolio-summary/value` | `color/text/primary` |
| `portfolio-summary/return/positive` | `color/feedback/success` |
| `portfolio-summary/return/negative` | `color/feedback/error` |
| `portfolio-summary/label` | `color/text/secondary` |

---

### Portfolio Performance

**Purpose:** Display portfolio performance over time
**Usage:** Performance tracking, charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `period` | Period | `1y` | Time period |
| `data` | ChartData | — | Performance data |
| `benchmark` | ChartData | — | Benchmark data |
| `return` | Number | — | Period return |

---

### Portfolio Health

**Purpose:** Display portfolio health score
**Usage:** Health indicators, recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `score` | Number | — | Health score (0-100) |
| `status` | Status | `good` | Health status |
| `issues` | Issue[] | — | Health issues |
| `recommendations` | Recommendation[] | — | AI recommendations |

---

### Portfolio Allocation

**Purpose:** Display current allocation
**Usage:** Allocation views, rebalancing

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | Allocation[] | — | Current allocations |
| `variant` | Variant | `chart` | Display variant |
| `showRebalance` | Boolean | `false` | Show rebalance CTA |

---

### Portfolio Value

**Purpose:** Display portfolio value prominently
**Usage:** Hero displays, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Portfolio value |
| `currency` | String | `USD` | Currency code |
| `variant` | Variant | `hero` | Display variant |
| `showChange` | Boolean | `true` | Show change |

---

### Portfolio Timeline

**Purpose:** Display portfolio milestones
**Usage:** History, timeline views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `events` | Event[] | — | Timeline events |
| `startDate` | Date | — | Start date |
| `endDate` | Date | — | End date |

---

### Portfolio Growth

**Purpose:** Display portfolio growth chart
**Usage:** Growth visualization

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | ChartData | — | Growth data |
| `period` | Period | `1y` | Time period |
| `showContributions` | Boolean | `false` | Show contributions |

---

### Portfolio Diversification

**Purpose:** Display diversification metrics
**Usage:** Portfolio analysis

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `score` | Number | — | Diversification score |
| `status` | Status | `good` | Diversification status |
| `assetClasses` | Number | — | Asset class count |
| `holdings` | Number | — | Holdings count |

---

### Portfolio Comparison

**Purpose:** Compare portfolios
**Usage:** Benchmark comparison

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `portfolio` | PortfolioData | — | User portfolio |
| `benchmark` | PortfolioData | — | Benchmark |
| `period` | Period | `1y` | Comparison period |

---

### Portfolio Insights

**Purpose:** Display AI portfolio insights
**Usage:** AI recommendations, analysis

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `insights` | Insight[] | — | AI insights |
| `confidence` | Number | — | AI confidence |
| `lastUpdated` | Date | — | Last analysis |

---

## 05 Goals

### Goal Card

**Purpose:** Display financial goal
**Usage:** Goal lists, dashboard

#### Variants

| Variant | Size | Use Case |
|---------|------|----------|
| Compact | SM | List view |
| Default | MD | Standard display |
| Expanded | LG | Detailed view |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Card variant |
| `name` | Text | — | Goal name |
| `icon` | IconName | — | Goal icon |
| `target` | Number | — | Target amount |
| `current` | Number | — | Current amount |
| `currency` | String | `USD` | Currency code |
| `deadline` | Date | — | Goal deadline |
| `status` | Status | `on-track` | Goal status |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `goal-card/background` | `color/surface` |
| `goal-card/name` | `color/text/primary` |
| `goal-card/target` | `color/text/secondary` |
| `goal-card/progress` | `color/goal` |
| `goal-card/status` | `color/feedback/[status]` |
| `goal-card/icon` | `color/goal` |

---

### Goal Progress

**Purpose:** Display goal progress
**Usage:** Goal cards, progress views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | Number | — | Current amount |
| `target` | Number | — | Target amount |
| `percentage` | Number | — | Progress percentage |
| `variant` | Variant | `bar` | Progress variant |
| `showLabel` | Boolean | `true` | Show percentage |

---

### Goal Timeline

**Purpose:** Display goal milestones
**Usage:** Goal detail, timeline views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `milestones` | Milestone[] | — | Goal milestones |
| `currentDate` | Date | — | Current date |
| `targetDate` | Date | — | Target date |

---

### Goal Summary

**Purpose:** Display goal overview
**Usage:** Goal detail screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Goal name |
| `target` | Number | — | Target amount |
| `current` | Number | — | Current amount |
| `monthlyContribution` | Number | — | Monthly contribution |
| `projectedDate` | Date | — | Projected completion |

---

### Goal Recommendation

**Purpose:** Display AI goal recommendation
**Usage:** AI insights, goal suggestions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `goal` | Text | — | Recommended goal |
| `amount` | Number | — | Recommended amount |
| `timeline` | String | — | Recommended timeline |
| `confidence` | Number | — | AI confidence |
| `reasoning` | Text | — | AI reasoning |

---

### Goal Achievement

**Purpose:** Display goal completion celebration
**Usage:** Goal completion, success screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `goalName` | Text | — | Completed goal |
| `finalAmount` | Number | — | Final amount |
| `completedDate` | Date | — | Completion date |
| `duration` | String | — | Time to complete |

---

### Goal Milestone

**Purpose:** Display individual milestone
**Usage:** Milestone lists, progress tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Milestone name |
| `target` | Number | — | Target amount |
| `achieved` | Boolean | `false` | Achieved status |
| `date` | Date | — | Achievement date |

---

### Goal Projection

**Purpose:** Display goal projection
**Usage:** Projection charts, forecasting

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | Number | — | Current amount |
| `monthlyContribution` | Number | — | Monthly contribution |
| `projectedAmount` | Number | — | Projected amount |
| `projectedDate` | Date | — | Projected date |
| `chart` | ChartData | — | Projection chart |

---

### Retirement Goal

**Purpose:** Display retirement goal
**Usage:** Retirement planning

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `targetAge` | Number | — | Target retirement age |
| `currentAge` | Number | — | Current age |
| `targetAmount` | Number | — | Target nest egg |
| `currentSavings` | Number | — | Current savings |
| `monthlyContribution` | Number | — | Monthly contribution |

---

### Emergency Goal

**Purpose:** Display emergency fund goal
**Usage:** Emergency fund tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `targetMonths` | Number | — | Target months |
| `currentMonths` | Number | — | Current months covered |
| `monthlyExpenses` | Number | — | Monthly expenses |
| `currentAmount` | Number | — | Current savings |

---

### Savings Goal

**Purpose:** Display general savings goal
**Usage:** Savings tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Savings goal name |
| `target` | Number | — | Target amount |
| `current` | Number | — | Current amount |
| `deadline` | Date | — | Goal deadline |

---

## 06 Bills

### Upcoming Bills

**Purpose:** Display upcoming bills
**Usage:** Dashboard, bill management

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bills` | Bill[] | — | Upcoming bills |
| `totalDue` | Number | — | Total amount due |
| `currency` | String | `USD` | Currency code |
| `nextDue` | Date | — | Next bill date |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `bills-card/background` | `color/surface` |
| `bills-card/title` | `color/text/primary` |
| `bills-card/amount` | `color/text/primary` |
| `bills-card/due-date` | `color/text/secondary` |
| `bills-card/overdue` | `color/feedback/error` |
| `bills-card/upcoming` | `color/feedback/warning` |

---

### Bill Reminder

**Purpose:** Display bill reminder
**Usage:** Reminders, notifications

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `billName` | Text | — | Bill name |
| `amount` | Number | — | Bill amount |
| `dueDate` | Date | — | Due date |
| `daysUntilDue` | Number | — | Days until due |
| `onPay` | Function | — | Pay handler |
| `onSnooze` | Function | — | Snooze handler |

---

### Bill Calendar

**Purpose:** Display bills in calendar view
**Usage:** Calendar views, planning

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bills` | Bill[] | — | Bills array |
| `selectedDate` | Date | — | Selected date |
| `onDateSelect` | Function | — | Date selection handler |

---

### Bill Summary

**Purpose:** Display bill summary
**Usage:** Bill detail, overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalMonthly` | Number | — | Total monthly bills |
| `totalAnnual` | Number | — | Total annual bills |
| `averageBill` | Number | — | Average bill amount |
| `paidThisMonth` | Number | — | Paid this month |
| `upcomingCount` | Number | — | Upcoming count |

---

### Paid Bill

**Purpose:** Display paid bill
**Usage:** Payment history

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `billName` | Text | — | Bill name |
| `amount` | Number | — | Paid amount |
| `paidDate` | Date | — | Payment date |
| `account` | String | — | Paid from account |

---

### Overdue Bill

**Purpose:** Display overdue bill with urgency
**Usage:** Overdue alerts, urgent payments

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `billName` | Text | — | Bill name |
| `amount` | Number | — | Bill amount |
| `dueDate` | Date | — | Original due date |
| `daysOverdue` | Number | — | Days overdue |
| `onPay` | Function | — | Pay handler |

---

### Bill Insight

**Purpose:** Display AI bill insight
**Usage:** AI recommendations, optimization

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Insight title |
| `description` | Text | — | Insight description |
| `action` | Text | — | Suggested action |
| `confidence` | Number | — | AI confidence |

---

### Cash Required

**Purpose:** Display cash needed for bills
**Usage:** Cash planning, bill funding

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalRequired` | Number | — | Total cash needed |
| `period` | String | — | Time period |
| `hasEnough` | Boolean | `true` | Sufficient funds |
| `shortfall` | Number | — | Shortfall amount |

---

## 07 Automation

Advizmo's strongest differentiator.

### Automation Card

**Purpose:** Display automation rule
**Usage:** Automation lists, settings

#### Variants

| Variant | Size | Use Case |
|---------|------|----------|
| Compact | SM | List view |
| Default | MD | Standard display |
| Expanded | LG | Detailed view |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Card variant |
| `name` | Text | — | Automation name |
| `description` | Text | — | Automation description |
| `type` | AutomationType | — | Automation type |
| `status` | Status | `active` | Automation status |
| `frequency` | Frequency | `monthly` | Execution frequency |
| `amount` | Number | — | Amount per execution |
| `nextExecution` | Date | — | Next execution date |
| `lastExecution` | Date | — | Last execution date |
| `successRate` | Number | — | Success rate (0-100) |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `automation-card/background` | `color/surface` |
| `automation-card/name` | `color/text/primary` |
| `automation-card/description` | `color/text/secondary` |
| `automation-card/status/active` | `color/feedback/success` |
| `automation-card/status/paused` | `color/feedback/warning` |
| `automation-card/status/error` | `color/feedback/error` |
| `automation-card/icon` | `color/automation` |

---

### Automation Status

**Purpose:** Display automation status
**Usage:** Status indicators

#### Variants

| Variant | Color | Icon | Use Case |
|---------|-------|------|----------|
| Active | `color/feedback/success` | icon/check | Running |
| Paused | `color/feedback/warning` | icon/pause | Paused |
| Error | `color/feedback/error` | icon/error | Error state |
| Disabled | `color/text/disabled` | icon/disabled | Disabled |

---

### Automation Timeline

**Purpose:** Display automation history
**Usage:** Activity logs, history views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `events` | AutomationEvent[] | — | Timeline events |
| `startDate` | Date | — | Start date |
| `endDate` | Date | — | End date |

---

### Automation Rule

**Purpose:** Display automation rule details
**Usage:** Rule configuration, detail views

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `trigger` | Trigger | — | Automation trigger |
| `condition` | Condition | — | Automation condition |
| `action` | Action | — | Automation action |
| `enabled` | Boolean | `true` | Rule enabled |

---

### Automation Recommendation

**Purpose:** Display AI automation suggestion
**Usage:** AI insights, setup suggestions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Recommendation title |
| `description` | Text | — | Recommendation description |
| `potentialSavings` | Number | — | Potential savings |
| `confidence` | Number | — | AI confidence |
| `onSetup` | Function | — | Setup handler |

---

### Automation Health

**Purpose:** Display automation health score
**Usage:** Health monitoring, diagnostics

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `score` | Number | — | Health score (0-100) |
| `status` | Status | `healthy` | Health status |
| `issues` | Issue[] | — | Health issues |
| `recommendations` | Text[] | — | Recommendations |

---

### Recurring Investment

**Purpose:** Display recurring investment automation
**Usage:** DCA automation, investment scheduling

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `security` | Text | — | Investment security |
| `amount` | Number | — | Investment amount |
| `frequency` | Frequency | `monthly` | Investment frequency |
| `nextDate` | Date | — | Next investment date |
| `totalInvested` | Number | — | Total invested |
| `status` | Status | `active` | Automation status |

---

### Recurring Transfer

**Purpose:** Display recurring transfer automation
**Usage:** Savings automation, transfers

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fromAccount` | String | — | Source account |
| `toAccount` | String | — | Destination account |
| `amount` | Number | — | Transfer amount |
| `frequency` | Frequency | `monthly` | Transfer frequency |
| `nextDate` | Date | — | Next transfer date |

---

### Automatic Withdrawal

**Purpose:** Display automatic withdrawal
**Usage:** Bill payments, subscriptions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `payee` | Text | — | Payee name |
| `amount` | Number | — | Withdrawal amount |
| `frequency` | Frequency | `monthly` | Withdrawal frequency |
| `nextDate` | Date | — | Next withdrawal |
| `account` | String | — | Source account |

---

### Automation Activity

**Purpose:** Display recent automation activity
**Usage:** Activity feeds, dashboards

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `activities` | Activity[] | — | Recent activities |
| `showAll` | Boolean | `false` | Show all activity |

---

### Automation Summary

**Purpose:** Display automation overview
**Usage:** Dashboard, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalActive` | Number | — | Active automations |
| `totalSaved` | Number | — | Total saved |
| `successRate` | Number | — | Overall success rate |
| `nextExecution` | Date | — | Next execution |

---

### Automation Success

**Purpose:** Display successful automation
**Usage:** Success notifications

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `automationName` | Text | — | Automation name |
| `amount` | Number | — | Executed amount |
| `executedDate` | Date | — | Execution date |
| `result` | Text | — | Execution result |

---

### Automation Failure

**Purpose:** Display failed automation
**Usage:** Error notifications, alerts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `automationName` | Text | — | Automation name |
| `error` | Text | — | Error message |
| `failedDate` | Date | — | Failure date |
| `retryAvailable` | Boolean | `true` | Retry available |
| `onRetry` | Function | — | Retry handler |

---

### Automation History

**Purpose:** Display automation history
**Usage:** History views, logs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `executions` | Execution[] | — | Execution history |
| `filter` | Filter | — | History filter |
| `dateRange` | DateRange | — | Date range |

---

## 08 AI

### AI Insight Card

**Purpose:** Display AI-generated insight
**Usage:** AI insights feed, recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Insight title |
| `description` | Text | — | Insight description |
| `category` | Category | — | Insight category |
| `confidence` | Number | — | AI confidence (0-100) |
| `action` | Action | — | Suggested action |
| `priority` | Priority | `medium` | Insight priority |
| `onAction` | Function | — | Action handler |
| `onDismiss` | Function | — | Dismiss handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `ai-card/background` | `color/surface` |
| `ai-card/title` | `color/text/primary` |
| `ai-card/description` | `color/text/secondary` |
| `ai-card/confidence` | `color/ai` |
| `ai-card/action` | `color/action/primary` |
| `ai-card/badge` | `color/ai/subtle` |

---

### AI Recommendation

**Purpose:** Display AI recommendation
**Usage:** AI suggestions, recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Recommendation title |
| `description` | Text | — | Recommendation description |
| `type` | RecommendationType | — | Recommendation type |
| `confidence` | Number | — | AI confidence |
| `impact` | Impact | — | Expected impact |
| `onAccept` | Function | — | Accept handler |
| `onLearnMore` | Function | — | Learn more handler |

---

### AI Summary

**Purpose:** Display AI-generated summary
**Usage:** Summaries, overviews

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Summary title |
| `content` | Text | — | Summary content |
| `generatedDate` | Date | — | Generation date |
| `confidence` | Number | — | AI confidence |

---

### AI Confidence

**Purpose:** Display AI confidence level
**Usage:** Confidence indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Confidence (0-100) |
| `variant` | Variant | `bar` | Display variant |
| `showLabel` | Boolean | `true` | Show label |

---

### AI Action

**Purpose:** Display AI-suggested action
**Usage:** Action suggestions, CTAs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Action label |
| `description` | Text | — | Action description |
| `impact` | Text | — | Expected impact |
| `confidence` | Number | — | AI confidence |
| `onExecute` | Function | — | Execute handler |

---

### AI Explanation

**Purpose:** Display AI reasoning
**Usage:** Transparency, trust building

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `question` | Text | — | User question |
| `answer` | Text | — | AI answer |
| `sources` | Source[] | — | Data sources |
| `confidence` | Number | — | AI confidence |

---

### AI Warning

**Purpose:** Display AI warning
**Usage:** Risk warnings, caution alerts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Warning title |
| `description` | Text | — | Warning description |
| `severity` | Severity | `medium` | Warning severity |
| `action` | Text | — | Suggested action |

---

### AI Suggestion

**Purpose:** Display AI suggestion
**Usage:** Quick suggestions, tips

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Suggestion text |
| `category` | Category | — | Suggestion category |
| `confidence` | Number | — | AI confidence |
| `onApply` | Function | — | Apply handler |

---

### AI Generated Goal

**Purpose:** Display AI-generated goal
**Usage:** Goal suggestions, AI planning

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Goal name |
| `target` | Number | — | Target amount |
| `timeline` | String | — | Suggested timeline |
| `monthlyContribution` | Number | — | Monthly amount |
| `confidence` | Number | — | AI confidence |
| `onCreate` | Function | — | Create handler |

---

### AI Generated Investment

**Purpose:** Display AI investment suggestion
**Usage:** Investment recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `security` | Text | — | Security name |
| `ticker` | Text | — | Ticker symbol |
| `amount` | Number | — | Suggested amount |
| `reasoning` | Text | — | AI reasoning |
| `confidence` | Number | — | AI confidence |
| `risk` | Risk | — | Risk level |

---

### AI Assistant Header

**Purpose:** Display AI assistant header
**Usage:** Chat interfaces, AI screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | `Advizmo AI` | Assistant name |
| `status` | Status | `online` | Assistant status |
| `avatar` | Avatar | — | AI avatar |

---

### Conversation Summary

**Purpose:** Display conversation summary
**Usage:** Chat history, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `messages` | Message[] | — | Conversation messages |
| `summary` | Text | — | Conversation summary |
| `date` | Date | — | Conversation date |

---

### AI Thinking State

**Purpose:** Display AI processing
**Usage:** Loading states, thinking indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | Text | `Thinking...` | Loading message |
| `variant` | Variant | `dots` | Animation variant |

---

### AI Empty State

**Purpose:** Display empty AI state
**Usage:** No suggestions, new users

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Empty state title |
| `description` | Text | — | Empty state description |
| `suggestions` | Text[] | — | Starter suggestions |

---

## 09 Transactions

### Transaction Row

**Purpose:** Display transaction in list
**Usage:** Transaction lists, history

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Transaction name |
| `amount` | Number | — | Transaction amount |
| `currency` | String | `USD` | Currency code |
| `date` | Date | — | Transaction date |
| `category` | Category | — | Transaction category |
| `account` | String | — | Account name |
| `status` | Status | `completed` | Transaction status |
| `icon` | IconName | — | Transaction icon |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `transaction-row/background` | `color/surface` |
| `transaction-row/name` | `color/text/primary` |
| `transaction-row/amount/positive` | `color/feedback/success` |
| `transaction-row/amount/negative` | `color/feedback/error` |
| `transaction-row/date` | `color/text/secondary` |
| `transaction-row/category` | `color/text/tertiary` |
| `transaction-row/icon` | `color/transaction/[category]` |

---

### Transaction Card

**Purpose:** Display transaction with details
**Usage:** Transaction detail, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Transaction name |
| `amount` | Number | — | Transaction amount |
| `date` | Date | — | Transaction date |
| `category` | Category | — | Category |
| `description` | Text | — | Transaction description |
| `account` | String | — | Account |
| `status` | Status | `completed` | Status |
| `recurring` | Boolean | `false` | Is recurring |

---

### Transaction Detail

**Purpose:** Display full transaction details
**Usage:** Transaction detail screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transaction` | Transaction | — | Full transaction object |
| `showAccount` | Boolean | `true` | Show account info |
| `showCategory` | Boolean | `true` | Show category |
| `showNotes` | Boolean | `true` | Show notes |
| `actions` | Action[] | — | Available actions |

---

### Transaction Timeline

**Purpose:** Display transaction history
**Usage:** Timeline views, activity feeds

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transactions` | Transaction[] | — | Transaction array |
| `groupBy` | GroupBy | `date` | Grouping method |
| `filter` | Filter | — | Filter options |

---

### Transaction Group

**Purpose:** Display grouped transactions
**Usage:** Grouped lists, summaries

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Group label |
| `date` | Date | — | Group date |
| `transactions` | Transaction[] | — | Group transactions |
| `total` | Number | — | Group total |

---

### Income Transaction

**Purpose:** Display income transaction
**Usage:** Income tracking, deposits

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `source` | Text | — | Income source |
| `amount` | Number | — | Income amount |
| `date` | Date | — | Income date |
| `recurring` | Boolean | `false` | Is recurring |
| `frequency` | Frequency | — | Recurring frequency |

---

### Expense Transaction

**Purpose:** Display expense transaction
**Usage:** Expense tracking, spending

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `merchant` | Text | — | Merchant name |
| `amount` | Number | — | Expense amount |
| `date` | Date | — | Expense date |
| `category` | Category | — | Expense category |
| `receipt` | String | — | Receipt URL |

---

### Investment Transaction

**Purpose:** Display investment transaction
**Usage:** Investment activity, trades

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `security` | Text | — | Security name |
| `ticker` | Text | — | Ticker symbol |
| `type` | TradeType | — | Buy/sell |
| `shares` | Number | — | Number of shares |
| `price` | Number | — | Price per share |
| `total` | Number | — | Total amount |

---

### Transfer Transaction

**Purpose:** Display transfer transaction
**Usage:** Transfers, moves

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `fromAccount` | String | — | Source account |
| `toAccount` | String | — | Destination account |
| `amount` | Number | — | Transfer amount |
| `status` | Status | `completed` | Transfer status |

---

### Dividend Transaction

**Purpose:** Display dividend payment
**Usage:** Dividend tracking, income

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `security` | Text | — | Security name |
| `ticker` | Text | — | Ticker symbol |
| `amount` | Number | — | Dividend amount |
| `shares` | Number | — | Shares held |
| `rate` | Number | — | Dividend rate |

---

### Tax Transaction

**Purpose:** Display tax-related transaction
**Usage:** Tax tracking, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | TaxType | — | Tax type |
| `amount` | Number | — | Tax amount |
| `date` | Date | — | Tax date |
| `year` | Number | — | Tax year |

---

### Refund Transaction

**Purpose:** Display refund transaction
**Usage:** Refund tracking

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `merchant` | Text | — | Merchant name |
| `amount` | Number | — | Refund amount |
| `date` | Date | — | Refund date |
| `originalTransaction` | String | — | Original transaction ID |

---

### Pending Transaction

**Purpose:** Display pending transaction
**Usage:** Pending lists, processing

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Transaction name |
| `amount` | Number | — | Transaction amount |
| `estimatedDate` | Date | — | Estimated completion |
| `status` | Status | `pending` | Pending status |

---

### Completed Transaction

**Purpose:** Display completed transaction
**Usage:** History, confirmed transactions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Transaction name |
| `amount` | Number | — | Transaction amount |
| `completedDate` | Date | — | Completion date |
| `confirmation` | String | — | Confirmation number |

---

### Cancelled Transaction

**Purpose:** Display cancelled transaction
**Usage:** Cancelled lists, history

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Transaction name |
| `amount` | Number | — | Transaction amount |
| `cancelledDate` | Date | — | Cancellation date |
| `reason` | Text | — | Cancellation reason |

---

## 10 Institutions

### Institution Card

**Purpose:** Display financial institution
**Usage:** Institution lists, connection management

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Institution name |
| `logo` | String | — | Logo URL |
| `accountCount` | Number | — | Connected accounts |
| `status` | Status | `connected` | Connection status |
| `lastSynced` | Date | — | Last sync time |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `institution-card/background` | `color/surface` |
| `institution-card/name` | `color/text/primary` |
| `institution-card/accounts` | `color/text/secondary` |
| `institution-card/status` | `color/feedback/[status]` |
| `institution-card/logo` | — |

---

### Institution Logo

**Purpose:** Display institution logo
**Usage:** Institution branding

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Institution name |
| `logo` | String | — | Logo URL |
| `size` | Size | `md` | Logo size |
| `fallback` | IconName | — | Fallback icon |

---

### Institution Header

**Purpose:** Display institution header
**Usage:** Institution detail screens

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Institution name |
| `logo` | String | — | Logo URL |
| `status` | Status | `connected` | Connection status |
| `accountCount` | Number | — | Account count |
| `totalBalance` | Number | — | Total balance |

---

### Institution Status

**Purpose:** Display institution connection status
**Usage:** Status indicators

#### Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| Connected | `color/feedback/success` | Active connection |
| Syncing | `color/feedback/info` | Syncing data |
| Error | `color/feedback/error` | Connection error |
| Disconnected | `color/text/disabled` | Not connected |
| Maintenance | `color/feedback/warning` | Under maintenance |

---

### Broker Card

**Purpose:** Display brokerage institution
**Usage:** Broker lists, investment accounts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Broker name |
| `logo` | String | — | Logo URL |
| `accountCount` | Number | — | Account count |
| `totalValue` | Number | — | Total portfolio value |
| `status` | Status | `connected` | Connection status |

---

### Bank Card

**Purpose:** Display bank institution
**Usage:** Bank lists, account management

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | Bank name |
| `logo` | String | — | Logo URL |
| `accountCount` | Number | — | Account count |
| `totalBalance` | Number | — | Total balance |
| `status` | Status | `connected` | Connection status |

---

### Connection Status

**Purpose:** Display connection status
**Usage:** Status indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `status` | Status | `connected` | Connection status |
| `lastSynced` | Date | — | Last sync time |
| `error` | Text | — | Error message |

---

### Connection Error

**Purpose:** Display connection error with resolution
**Usage:** Error states, reconnection

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `institution` | Text | — | Institution name |
| `error` | Text | — | Error message |
| `errorCode` | String | — | Error code |
| `onRetry` | Function | — | Retry handler |
| `onSupport` | Function | — | Support handler |

---

## 11 Notifications

### Notification Card

**Purpose:** Display notification
**Usage:** Notification feeds, alerts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Notification title |
| `description` | Text | — | Notification description |
| `type` | NotificationType | — | Notification type |
| `icon` | IconName | — | Notification icon |
| `timestamp` | Date | — | Notification time |
| `read` | Boolean | `false` | Read status |
| `action` | Action | — | Notification action |
| `onPress` | Function | — | Press handler |

#### Component Tokens

| Token | Semantic Token |
|-------|----------------|
| `notification-card/background` | `color/surface` |
| `notification-card/title` | `color/text/primary` |
| `notification-card/description` | `color/text/secondary` |
| `notification-card/timestamp` | `color/text/tertiary` |
| `notification-card/unread` | `color/action/primary-subtle` |
| `notification-card/icon` | `color/notification/[type]` |

---

### Notification Row

**Purpose:** Display notification in list
**Usage:** Notification lists

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Notification title |
| `icon` | IconName | — | Notification icon |
| `timestamp` | Date | — | Notification time |
| `read` | Boolean | `false` | Read status |
| `onPress` | Function | — | Press handler |

---

### Alert Card

**Purpose:** Display important alert
**Usage:** Critical alerts, urgent notifications

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Alert title |
| `description` | Text | — | Alert description |
| `severity` | Severity | `medium` | Alert severity |
| `action` | Action | — | Alert action |
| `onDismiss` | Function | — | Dismiss handler |

---

### Investment Alert

**Purpose:** Display investment-related alert
**Usage:** Price alerts, portfolio alerts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `security` | Text | — | Security name |
| `type` | AlertType | — | Alert type |
| `value` | Number | — | Alert value |
| `threshold` | Number | — | Threshold value |

---

### Goal Alert

**Purpose:** Display goal-related alert
**Usage:** Goal updates, milestones

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `goalName` | Text | — | Goal name |
| `type` | AlertType | — | Alert type |
| `message` | Text | — | Alert message |

---

### Bill Alert

**Purpose:** Display bill-related alert
**Usage:** Bill reminders, overdue alerts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `billName` | Text | — | Bill name |
| `amount` | Number | — | Bill amount |
| `dueDate` | Date | — | Due date |
| `type` | AlertType | — | Alert type |

---

### Automation Alert

**Purpose:** Display automation alert
**Usage:** Automation status, failures

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `automationName` | Text | — | Automation name |
| `type` | AlertType | — | Alert type |
| `message` | Text | — | Alert message |

---

### AI Alert

**Purpose:** Display AI-generated alert
**Usage:** AI insights, recommendations

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Alert title |
| `description` | Text | — | Alert description |
| `confidence` | Number | — | AI confidence |
| `action` | Action | — | Suggested action |

---

### Security Alert

**Purpose:** Display security alert
**Usage:** Security notifications, warnings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Alert title |
| `description` | Text | — | Alert description |
| `severity` | Severity | `high` | Alert severity |
| `action` | Action | — | Security action |

---

## 12 Security

### Verification Card

**Purpose:** Display verification status
**Usage:** Identity verification, KYC

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | VerificationType | — | Verification type |
| `status` | Status | `pending` | Verification status |
| `completedDate` | Date | — | Completion date |
| `documents` | Document[] | — | Required documents |
| `onVerify` | Function | — | Verify handler |

---

### Biometric Card

**Purpose:** Display biometric settings
**Usage:** Security settings, biometric auth

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | BiometricType | — | Biometric type |
| `enabled` | Boolean | `false` | Enabled status |
| `lastUsed` | Date | — | Last used |
| `onToggle` | Function | — | Toggle handler |

---

### Device Trust

**Purpose:** Display device trust status
**Usage:** Device management, security

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `deviceName` | Text | — | Device name |
| `deviceType` | DeviceType | — | Device type |
| `trusted` | Boolean | `false` | Trust status |
| `lastActive` | Date | — | Last active |
| `onTrust` | Function | — | Trust handler |
| `onRemove` | Function | — | Remove handler |

---

### Login Session

**Purpose:** Display active login session
**Usage:** Session management, security

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `device` | Text | — | Device name |
| `location` | Text | — | Login location |
| `ipAddress` | String | — | IP address |
| `lastActive` | Date | — | Last active |
| `current` | Boolean | `false` | Current session |
| `onRevoke` | Function | — | Revoke handler |

---

### Connected Devices

**Purpose:** Display connected devices
**Usage:** Device management, security settings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `devices` | Device[] | — | Connected devices |
| `currentDevice` | String | — | Current device ID |

---

### Security Status

**Purpose:** Display security status overview
**Usage:** Security dashboards, settings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `score` | Number | — | Security score (0-100) |
| `status` | Status | `secure` | Security status |
| `recommendations` | Recommendation[] | — | Security recommendations |
| `lastChecked` | Date | — | Last security check |

---

## 13 Identity

### Profile Summary

**Purpose:** Display user profile summary
**Usage:** Profile screens, account settings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | User name |
| `email` | Text | — | User email |
| `avatar` | String | — | Avatar URL |
| `memberSince` | Date | — | Membership date |
| `verified` | Boolean | `false` | Verification status |

---

### Profile Header

**Purpose:** Display profile header
**Usage:** Profile screens, settings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | Text | — | User name |
| `email` | Text | — | User email |
| `avatar` | String | — | Avatar URL |
| `onEdit` | Function | — | Edit handler |

---

### Verification Badge

**Purpose:** Display verification badge
**Usage:** Verified indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `verified` | Boolean | `true` | Verified status |
| `type` | VerificationType | — | Verification type |
| `size` | Size | `md` | Badge size |

---

### Subscription Card

**Purpose:** Display subscription status
**Usage:** Subscription management, billing

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `plan` | Plan | — | Subscription plan |
| `status` | Status | `active` | Subscription status |
| `nextBilling` | Date | — | Next billing date |
| `price` | Number | — | Subscription price |
| `currency` | String | `USD` | Currency code |
| `onManage` | Function | — | Manage handler |

---

### Membership Status

**Purpose:** Display membership status
**Usage:** Membership indicators

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tier` | Tier | `free` | Membership tier |
| `status` | Status | `active` | Membership status |
| `benefits` | Text[] | — | Tier benefits |

---

## 14 Analytics

### Net Worth Summary

**Purpose:** Display net worth overview
**Usage:** Dashboard, financial summary

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `netWorth` | Number | — | Net worth amount |
| `change` | Number | — | Change amount |
| `changePercentage` | Number | — | Change percentage |
| `currency` | String | `USD` | Currency code |
| `period` | Period | `1m` | Change period |
| `chart` | ChartData | — | Net worth chart |

---

### Income Summary

**Purpose:** Display income summary
**Usage:** Income tracking, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalIncome` | Number | — | Total income |
| `period` | Period | `1m` | Time period |
| `breakdown` | Breakdown[] | — | Income breakdown |
| `trend` | Trend | — | Income trend |
| `chart` | ChartData | — | Income chart |

---

### Expense Summary

**Purpose:** Display expense summary
**Usage:** Expense tracking, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalExpenses` | Number | — | Total expenses |
| `period` | Period | `1m` | Time period |
| `breakdown` | Breakdown[] | — | Expense breakdown |
| `trend` | Trend | — | Expense trend |
| `chart` | ChartData | — | Expense chart |

---

### Tax Summary

**Purpose:** Display tax summary
**Usage:** Tax planning, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `estimatedTax` | Number | — | Estimated tax |
| `effectiveRate` | Number | — | Effective tax rate |
| `deductions` | Number | — | Total deductions |
| `credits` | Number | — | Total credits |
| `year` | Number | — | Tax year |

---

### Cashflow Summary

**Purpose:** Display cashflow overview
**Usage:** Cashflow analysis, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `income` | Number | — | Total income |
| `expenses` | Number | — | Total expenses |
| `netCashflow` | Number | — | Net cashflow |
| `period` | Period | `1m` | Time period |
| `chart` | ChartData | — | Cashflow chart |

---

### Investment Summary

**Purpose:** Display investment summary
**Usage:** Investment reports, overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalInvested` | Number | — | Total invested |
| `currentValue` | Number | — | Current value |
| `totalReturn` | Number | — | Total return |
| `returnPercentage` | Number | — | Return percentage |
| `period` | Period | `1y` | Time period |

---

### Growth Summary

**Purpose:** Display growth metrics
**Usage:** Growth tracking, reports

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `metric` | Text | — | Growth metric |
| `current` | Number | — | Current value |
| `previous` | Number | — | Previous value |
| `growth` | Number | — | Growth percentage |
| `period` | Period | `1m` | Time period |

---

### Performance Summary

**Purpose:** Display performance metrics
**Usage:** Performance reports, dashboards

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `metric` | Text | — | Performance metric |
| `value` | Number | — | Metric value |
| `benchmark` | Number | — | Benchmark value |
| `outperformance` | Number | — | Outperformance |
| `period` | Period | `1y` | Time period |

---

## 15 Dashboard Widgets

Widgets should be modular.

### Balance Widget

**Purpose:** Display account balance widget
**Usage:** Dashboard, home screen

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalBalance` | Number | — | Total balance |
| `accounts` | Account[] | — | Account summary |
| `trend` | Trend | — | Balance trend |
| `onPress` | Function | — | Press handler |

#### Auto Layout

```
Direction: Vertical
Primary Axis: Fill Container
Counter Axis: Stretch
Padding: spacing/4
Gap: spacing/3
Radius: radius/md
```

---

### Portfolio Widget

**Purpose:** Display portfolio widget
**Usage:** Dashboard, investment overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `totalValue` | Number | — | Portfolio value |
| `return` | Number | — | Return percentage |
| `dayChange` | Number | — | Day change |
| `chart` | ChartData | — | Mini chart |
| `onPress` | Function | — | Press handler |

---

### Bills Widget

**Purpose:** Display bills widget
**Usage:** Dashboard, bill overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `upcomingBills` | Bill[] | — | Upcoming bills |
| `totalDue` | Number | — | Total due |
| `nextDue` | Date | — | Next due date |
| `onPress` | Function | — | Press handler |

---

### Goal Widget

**Purpose:** Display goal widget
**Usage:** Dashboard, goal overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `goals` | Goal[] | — | Active goals |
| `nextMilestone` | Milestone | — | Next milestone |
| `onPress` | Function | — | Press handler |

---

### Investment Widget

**Purpose:** Display investment widget
**Usage:** Dashboard, investment overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `holdings` | Holding[] | — | Top holdings |
| `totalReturn` | Number | — | Total return |
| `onPress` | Function | — | Press handler |

---

### Cash Widget

**Purpose:** Display cash widget
**Usage:** Dashboard, cash overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `availableCash` | Number | — | Available cash |
| `reserved` | Number | — | Reserved amount |
| `safeToInvest` | Number | — | Safe to invest |
| `onPress` | Function | — | Press handler |

---

### Automation Widget

**Purpose:** Display automation widget
**Usage:** Dashboard, automation overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `activeAutomations` | Number | — | Active count |
| `nextExecution` | Date | — | Next execution |
| `totalSaved` | Number | — | Total saved |
| `onPress` | Function | — | Press handler |

---

### AI Widget

**Purpose:** Display AI widget
**Usage:** Dashboard, AI overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `insights` | Insight[] | — | AI insights |
| `recommendations` | Number | — | Recommendation count |
| `onPress` | Function | — | Press handler |

---

### Tax Widget

**Purpose:** Display tax widget
**Usage:** Dashboard, tax overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `estimatedTax` | Number | — | Estimated tax |
| `deductions` | Number | — | Deductions |
| `year` | Number | — | Tax year |
| `onPress` | Function | — | Press handler |

---

### Net Worth Widget

**Purpose:** Display net worth widget
**Usage:** Dashboard, net worth overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `netWorth` | Number | — | Net worth |
| `change` | Number | — | Change amount |
| `changePercentage` | Number | — | Change percentage |
| `chart` | ChartData | — | Mini chart |
| `onPress` | Function | — | Press handler |

---

### Quick Actions Widget

**Purpose:** Display quick actions
**Usage:** Dashboard, quick access

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `actions` | Action[] | — | Quick actions |
| `variant` | Variant | `grid` | Layout variant |

---

### Insights Widget

**Purpose:** Display AI insights widget
**Usage:** Dashboard, insights overview

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `insights` | Insight[] | — | AI insights |
| `showAll` | Boolean | `false` | Show all insights |
| `onPress` | Function | — | Press handler |

---

### Activity Widget

**Purpose:** Display recent activity
**Usage:** Dashboard, activity feed

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `activities` | Activity[] | — | Recent activities |
| `showAll` | Boolean | `false` | Show all activity |
| `onPress` | Function | — | Press handler |

---

### Market Widget

**Purpose:** Display market overview
**Usage:** Dashboard, market data

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `indices` | Index[] | — | Market indices |
| `lastUpdated` | Date | — | Last updated |
| `onPress` | Function | — | Press handler |

---

## 16 Shared Components

### Header

**Purpose:** Display section header
**Usage:** Section headers, screen headers

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Header title |
| `subtitle` | Text | — | Header subtitle |
| `action` | Action | — | Header action |
| `variant` | Variant | `default` | Header variant |

---

### Section Header

**Purpose:** Display section header with action
**Usage:** Section dividers, lists

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Section title |
| `action` | Text | — | Action label |
| `onAction` | Function | — | Action handler |

---

### Inline Card

**Purpose:** Display inline card
**Usage:** Inline content, highlights

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `default` | Card variant |
| `padding` | Spacing | `spacing/3` | Card padding |
| `children` | ReactNode | — | Card content |

---

### Metric Card

**Purpose:** Display metric with label
**Usage:** Metrics, stats, KPIs

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Metric label |
| `value` | Text | — | Metric value |
| `change` | Number | — | Change value |
| `trend` | Trend | — | Trend direction |
| `icon` | IconName | — | Metric icon |

---

### Summary Row

**Purpose:** Display summary row
**Usage:** Summaries, totals

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Row label |
| `value` | Text | — | Row value |
| `highlight` | Boolean | `false` | Highlight row |

---

### Key Value Row

**Purpose:** Display key-value pair
**Usage:** Detail views, lists

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `key` | Text | — | Key label |
| `value` | Text | — | Value text |
| `icon` | IconName | — | Key icon |
| `onPress` | Function | — | Press handler |

---

### Expandable Row

**Purpose:** Display expandable row
**Usage:** Expandable lists, details

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Row label |
| `expanded` | Boolean | `false` | Expanded state |
| `children` | ReactNode | — | Expanded content |
| `onToggle` | Function | — | Toggle handler |

---

### Timeline Item

**Purpose:** Display timeline item
**Usage:** Timelines, activity feeds

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Item title |
| `description` | Text | — | Item description |
| `timestamp` | Date | — | Item time |
| `icon` | IconName | — | Item icon |
| `color` | Color | — | Icon color |
| `last` | Boolean | `false` | Last item |

---

### Information Row

**Purpose:** Display information row
**Usage:** Info lists, settings

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Row label |
| `value` | Text | — | Row value |
| `icon` | IconName | — | Row icon |
| `disclosure` | Boolean | `false` | Show disclosure |
| `onPress` | Function | — | Press handler |

---

## States Reference

Every component supports these states:

| State | Visual Change | Accessibility |
|-------|---------------|---------------|
| Default | Standard appearance | — |
| Hover | Background lightens | — |
| Pressed | Background darkens | — |
| Focused | Focus ring visible | `aria-focused` |
| Selected | Selected styling | `aria-selected` |
| Loading | Skeleton/spinner | `aria-busy` |
| Disabled | 50% opacity | `aria-disabled` |
| Empty | Empty state | `role="status"` |
| Success | Success styling | Announce success |
| Warning | Warning styling | Announce warning |
| Error | Error styling | `aria-invalid` |
| Offline | Offline styling | Announce offline |
| Syncing | Syncing animation | `aria-busy` |

---

## Component Properties Reference

| Property | Type | Description |
|----------|------|-------------|
| `size` | Size | Dimensional variant |
| `style` | Style | Visual style variant |
| `state` | State | Interaction state |
| `icon` | IconName | Icon reference |
| `leadingContent` | ReactNode | Leading content |
| `trailingContent` | ReactNode | Trailing content |
| `loading` | Boolean | Loading state |
| `selection` | Boolean | Selection state |
| `elevation` | Elevation | Shadow level |
| `disclosure` | Boolean | Disclosure indicator |
| `avatar` | Avatar | Avatar reference |
| `chart` | ChartData | Chart data |
| `cta` | Action | Call to action |
| `accessory` | ReactNode | Accessory content |

---

## Validation Checklist

Review every component:

### Can another component already solve this?

- [ ] Check existing components
- [ ] Avoid duplication
- [ ] Reuse where possible

### Can variants reduce duplication?

- [ ] Use variant property
- [ ] Use size property
- [ ] Use boolean properties

### Can composition replace complexity?

- [ ] Compose from primitives
- [ ] Use slot patterns
- [ ] Avoid deep nesting

### Can engineering implement this more simply?

- [ ] Keep implementation simple
- [ ] Use native components
- [ ] Support platform differences

### Can accessibility improve?

- [ ] Touch targets ≥ 44px
- [ ] VoiceOver labels
- [ ] Focus management
- [ ] Color independence

---

## Summary

The Core Product Components library contains:

| Section | Components |
|---------|------------|
| 01 Accounts | 11 |
| 02 Money | 13 |
| 03 Investments | 14 |
| 04 Portfolio | 10 |
| 05 Goals | 11 |
| 06 Bills | 8 |
| 07 Automation | 14 |
| 08 AI | 14 |
| 09 Transactions | 15 |
| 10 Institutions | 8 |
| 11 Notifications | 9 |
| 12 Security | 6 |
| 13 Identity | 5 |
| 14 Analytics | 8 |
| 15 Dashboard Widgets | 14 |
| 16 Shared Components | 9 |
| **Total** | **169** |

### Inheritance Chain

```
Design Foundations
    ↓
Token Architecture
    ↓
Primitive Components (191)
    ↓
Core Product Components (169)
    ↓
Screens & Patterns
```

### Next Steps

1. **Chapter 6** — Patterns & Templates (screen-level compositions)
2. **Chapter 7** — Figma Implementation Guide
3. **Chapter 8** — Engineering Implementation Guide

---

**End of Core Product Components**
