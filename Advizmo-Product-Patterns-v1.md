# Advizmo Product Patterns

## Pattern Library

Interaction patterns define how components work together to solve recurring user problems.

Patterns are NOT components. Patterns describe behavior, not appearance.

---

## Pattern Philosophy

Every pattern should answer:

- What information should users see first?
- What action should users take next?
- How should components work together?
- How should users recover from mistakes?
- How should AI assist?

---

## DELETE Rule

If a pattern duplicates another pattern, DELETE IT.

If a component already solves the problem, do NOT create a new pattern.

Patterns should describe recurring user behavior, not visual layouts.

---

## Dashboard Patterns

### Dashboard Overview

Primary screen showing financial health at a glance.

**Components Used:** Portfolio KPI, Net Worth KPI, Cash Position, Recent Transactions, AI Insights, Alerts

**Layout:**
```
┌──────────────────────────────────────────┐
│  [Nav Bar]                      [Search] │
├──────────────────────────────────────────┤
│  Net Worth Summary (hero KPI)            │
│  ───────────────────────────────────────│
│  Portfolio Summary | Cash Position       │
│  ───────────────────────────────────────│
│  Recent Transactions (5 rows)            │
│  ───────────────────────────────────────│
│  AI Insights (2 cards)                   │
│  ───────────────────────────────────────│
│  Alerts & Reminders (if any)             │
└──────────────────────────────────────────┘
```

**5-Second Rule:** Users should understand their financial situation within 5 seconds.

**Motion:** Cards fade in staggered (50ms delay between cards).

**Accessibility:**
- Focus order: Net Worth → Portfolio → Cash → Transactions
- VoiceOver: announce financial summary on load

---

### Portfolio Overview

Aggregated view of all investment accounts.

**Components Used:** Portfolio Summary, Allocation Donut, Performance Chart, Top Holdings, AI Insights

**Layout:**
```
┌──────────────────────────────────────────┐
│  Portfolio                    [Period]  │
├──────────────────────────────────────────┤
│  Portfolio KPI (hero)                    │
│  ───────────────────────────────────────│
│  [Allocation Donut]   [Performance Chart]│
│  ───────────────────────────────────────│
│  Top Holdings (3 rows)                   │
│  [View all holdings]                     │
└──────────────────────────────────────────┘
```

---

### Portfolio Detail

Deep dive into a specific investment account.

**Components Used:** Portfolio Summary, Allocation, Performance, Holdings List, Transactions, AI Insights

**Layout:**
```
┌──────────────────────────────────────────┐
│  ← Portfolio Detail                      │
├──────────────────────────────────────────┤
│  Account Name (e.g., Fidelity 401k)      │
│  Portfolio KPI                           │
│  ───────────────────────────────────────│
│  [Segmented: All | Stocks | Bonds | Cash]│
│  Holdings List                           │
│  ───────────────────────────────────────│
│  Recent Transactions                     │
│  ───────────────────────────────────────│
│  AI Insights                             │
└──────────────────────────────────────────┘
```

---

## Goal Patterns

### Goal Creation

Flow to create a new financial goal.

**Components Used:** Modal, Input Field, Amount Picker, Date Picker, Goal Type Selector

**Flow:**
1. Tap "Add Goal" → Modal opens
2. Select goal type (House, Emergency Fund, Retirement, Vacation, Other)
3. Enter target amount
4. Set target date
5. Set monthly contribution (optional)
6. Review summary → Confirm

**Motion:** Modal slides up (300ms spring). Steps transition with crossfade (200ms).

**Accessibility:**
- Each step is a separate focus area
- "Step X of Y" announced for progress

---

### Goal Progress

Track progress toward a goal.

**Components Used:** Goal Summary Card, Progress Bar, Contribution History, Forecast, Recommendations

**Layout:**
```
┌──────────────────────────────────────────┐
│  ← House Down Payment                    │
├──────────────────────────────────────────┤
│  [Goal icon]  Target: $80,000            │
│  $45,000 / $80,000         56%           │
│  [════════════════░░░░░░░░░]            │
│  ───────────────────────────────────────│
│  On track — $320/month                  │
│  Target: December 2026                   │
│  ───────────────────────────────────────│
│  [Add contribution]  [Edit goal]         │
└──────────────────────────────────────────┘
```

---

### Goal Recommendation

AI suggestion related to a goal.

**Components Used:** AI Recommendation Card, Goal Progress

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  💡 Save $3,840/year                      │
│                                          │
│  Increase to $420/month to reach        │
│  your goal by August instead of Dec.     │
│                                          │
│  [Update]   [Keep current]   [Dismiss]   │
└──────────────────────────────────────────┘
```

---

## Transaction Patterns

### Transaction History

List of all transactions with filtering.

**Components Used:** Search Bar, Filter Chips, Transaction Groups, Transaction Rows

**Layout:**
```
┌──────────────────────────────────────────┐
│  Transactions               [Search]    │
│  ───────────────────────────────────────│
│  [All] [Income] [Expenses] [Transfers]  │
│  ───────────────────────────────────────│
│  Today                           -$142.50│
│  [Transaction row]                      │
│  [Transaction row]                      │
│  Yesterday                       -$89.00│
│  [Transaction row]                      │
│  ───────────────────────────────────────│
│  June 2026                      -$890.00 │
│  [Transaction row]                      │
└──────────────────────────────────────────┘
```

**States:** Default, Loading, Skeleton, Empty, Error

---

### Transaction Detail

Full information about a single transaction.

**Components Used:** Detail Header, Detail List, Action Buttons, Merchant Info

**Layout:**
```
┌──────────────────────────────────────────┐
│  ←  Transaction                          │
│  ───────────────────────────────────────│
│           [Merchant Logo]                │
│           Whole Foods                    │
│           -$42.50                        │
│           Today, 2:30 PM                │
│  ───────────────────────────────────────│
│  Category         Groceries              │
│  Account         Chase ••4532           │
│  Status          Settled                 │
│  ───────────────────────────────────────│
│  [View on Map]   [Report Issue]         │
└──────────────────────────────────────────┘
```

---

### Transaction Search

Search across all transactions.

**Components Used:** Search Input, Recent Searches, Search Results, Transaction Rows

**Flow:**
1. Tap search → Focus on input
2. Show recent searches (if any)
3. Type to search → Results update live
4. Tap result → Navigate to detail
5. Tap cancel → Return to previous screen

**Accessibility:**
- VoiceOver: announce result count
- Keyboard: Enter to search, Escape to clear

---

## Money Movement Patterns

### Money Transfer

Send money between accounts or externally.

**Components Used:** Modal, Account Picker, Amount Input, Review Summary, Confirmation

**Flow:**
1. Tap "Transfer" → Modal opens
2. Select From account
3. Select To account
4. Enter amount
5. Review details → Confirm
6. Processing → Success/Error

**Layout:**
```
┌──────────────────────────────────────────┐
│  Transfer                       ✕        │
│  ───────────────────────────────────────│
│  From                                     │
│  [Chase Checking ••4532 ▼]               │
│  Available: $12,450                      │
│  ───────────────────────────────────────│
│  To                                       │
│  [Savings ••7890 ▼]                      │
│  ───────────────────────────────────────│
│  Amount                                   │
│  [$________________]                      │
│  ───────────────────────────────────────│
│  [        Transfer $500        ]          │
└──────────────────────────────────────────┘
```

**States:** Default, Validating, Reviewing, Processing, Success, Error

**Motion:** Amount input pulses green on valid entry.

**Accessibility:**
- VoiceOver: announce "Transfer from Chase Checking to Savings, amount $500"
- Confirm with "Confirm transfer of $500 to Savings"

---

### Deposit

Add money to an account.

**Components Used:** Account Picker, Amount Input, Source Selection, Confirmation

**Flow:**
1. Select account to deposit to
2. Enter amount
3. Select source (External bank, Check, Cash)
4. Review → Confirm
5. Processing → Success with estimated arrival

---

### Withdrawal

Remove money from an account.

**Components Used:** Account Picker, Amount Input, Destination Selection, Confirmation

**Flow:**
1. Select account to withdraw from
2. Enter amount
3. Select destination
4. Review → Confirm
5. Processing → Success with estimated arrival

---

## Bill Management Patterns

### Bill Reminder

Notification of upcoming bill.

**Components Used:** Banner, Bill Detail Card, Action Buttons

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  🔔 Upcoming Bill                          │
│                                          │
│  Electric Bill — $120                    │
│  Due in 3 days (Jun 30)                  │
│                                          │
│  [Pay Now]   [Remind Later]   [Dismiss]  │
└──────────────────────────────────────────┘
```

**States:** Default, Paid, Overdue, Dismissed

---

### Bill Payment

Pay an outstanding bill.

**Components Used:** Modal, Bill Detail, Account Picker, Amount, Confirmation

**Flow:**
1. Tap "Pay Bill" → Modal opens
2. Select account to pay from
3. Confirm amount (pre-filled)
4. Review → Confirm
5. Processing → Success with confirmation number

---

## Automation Patterns

### Automation Setup

Create a new automation.

**Components Used:** Modal, Account Selector, Amount Input, Frequency Picker, Start Date, Review

**Flow:**
1. Select automation type (Transfer, Invest, Bill Pay)
2. Configure source/destination accounts
3. Set amount and frequency
4. Set start date
5. Review → Activate
6. Success → Automation appears in list

---

### Automation Monitoring

View status of all automations.

**Components Used:** Status List, Timeline, Activity Feed

**Layout:**
```
┌──────────────────────────────────────────┐
│  Automations                   [+ Add]   │
│  ───────────────────────────────────────│
│  ✓ Transfer to Savings                   │
│    $500/month — Next: Jul 1             │
│  ───────────────────────────────────────│
│  ⟳ Invest $500/month                     │
│    Paused — [Resume]                    │
│  ───────────────────────────────────────│
│  ✓ Bill Pay - Electric                   │
│    $120/month — Next: Jun 30            │
│  ───────────────────────────────────────│
│  ✗ Transfer to Broker                    │
│    Failed — Tap to resolve              │
└──────────────────────────────────────────┘
```

---

### Automation Failure Recovery

Handle a failed automation.

**Components Used:** Alert Banner, Action Card, Retry Button

**Flow:**
1. Automation fails → Show error banner
2. User taps "Resolve" → Show reason
3. User fixes issue → Retry
4. Success → Resume automation

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  ✗ Automation failed                       │
│                                          │
│  Transfer to Broker failed.             │
│  Insufficient funds in Chase Checking.  │
│                                          │
│  [Add funds]  [Skip this month]          │
└──────────────────────────────────────────┘
```

---

## AI Patterns

### AI Recommendation

Present a personalized suggestion.

**Components Used:** AI Recommendation Card, Action Buttons

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  💡 Recommendation                         │
│                                          │
│  [Headline — specific and actionable]     │
│                                          │
│  [Supporting explanation — 1-2 lines]    │
│                                          │
│  [Primary action]  [Secondary] [Dismiss] │
└──────────────────────────────────────────┘
```

**Rules:**
- Headline is specific: "$1,200/year" not "Save money"
- Always include dollar amount or percentage
- Provide clear next action
- Never pressure: "You should" → "Consider"

---

### AI Explanation

Explain why a recommendation was made.

**Components Used:** Explanation Card, Supporting Data

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Why we recommend this                   │
│                                          │
│  Based on:                               │
│  • 6 months of spending history          │
│  • Savings rate of 15%                  │
│  • Goal target of $80,000               │
│  • Monthly income of $8,500             │
│                                          │
│  [Learn more about how this works]        │
└──────────────────────────────────────────┘
```

---

### AI Confirmation

Confirm an AI-assisted action.

**Components Used:** Confirmation Dialog, Action Summary

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Confirm Action                           │
│                                          │
│  Transfer $500 to Savings?                │
│                                          │
│  This is your 3rd transfer this month.   │
│  You're on track for your goal.          │
│                                          │
│  [Confirm]   [Cancel]                    │
└──────────────────────────────────────────┘
```

---

### AI Conversation

Chat-like interaction for financial questions.

**Components Used:** Chat Interface, Message Bubbles, AI Response Cards, Input Field

**Layout:**
```
┌──────────────────────────────────────────┐
│  ←  Ask about your finances               │
│  ───────────────────────────────────────│
│                                          │
│  [User message bubble]                   │
│                                          │
│  [AI response with data]                  │
│  "Your spending last month was $6,230.   │
│   That's 8% higher than May."            │
│                                          │
│  [Suggested follow-ups]                  │
│  ───────────────────────────────────────│
│  [Type a question...              ] [→] │
└──────────────────────────────────────────┘
```

**Accessibility:**
- VoiceOver: read messages in order
- Reduce Motion: disable typing animation

---

## Search & Filter Patterns

### Search

Global search across accounts, transactions, goals.

**Components Used:** Search Input, Recent Searches, Suggestions, Results

**Flow:**
1. Tap search icon → Search screen opens
2. Recent searches shown
3. Type → Live suggestions appear
4. Tap suggestion → Navigate to result
5. Tap result → Open detail

**Suggestions Grouped:**
- Transactions (by merchant, amount, category)
- Accounts (by name, institution)
- Goals (by name)
- Help articles

---

### Filtering

Filter a list of items.

**Components Used:** Filter Chips, Date Range Picker, Amount Range, Sort Options

**Layout:**
```
┌──────────────────────────────────────────┐
│  Transactions               [Filter]      │
│  [All] [Income] [Expenses] [Transfers]   │
│  ───────────────────────────────────────│
│  [Custom filter: Date | Amount | Type]  │
└──────────────────────────────────────────┘
```

**Filter Chips:**
- Selected: filled blue
- Unselected: outlined gray
- Removable: X button on right

---

### Sorting

Sort a list by different criteria.

**Components Used:** Sort Picker, Sort Options

**Options for Transactions:**
- Date (newest first)
- Date (oldest first)
- Amount (highest first)
- Amount (lowest first)
- Category (A-Z)

**Options for Holdings:**
- Value (highest first)
- Value (lowest first)
- Gain/Loss (best first)
- Gain/Loss (worst first)
- Name (A-Z)

---

## Settings Patterns

### Profile Management

Update user profile information.

**Components Used:** List Items, Input Fields, Avatar, Save Button

**Layout:**
```
┌──────────────────────────────────────────┐
│  ←  Profile                              │
│  ───────────────────────────────────────│
│  [Avatar]                               │
│  [Change photo]                          │
│  ───────────────────────────────────────│
│  Name                                    │
│  [John Smith________________]            │
│  Email                                   │
│  [john@example.com___________]          │
│  Phone                                   │
│  [+1 (555) 123-4567_________]           │
│  ───────────────────────────────────────│
│  [Save Changes]                          │
└──────────────────────────────────────────┘
```

---

### Account Settings

Manage connected accounts.

**Components Used:** Account List, Account Row, Actions Menu

**Layout:**
```
┌──────────────────────────────────────────┐
│  ←  Accounts                             │
│  ───────────────────────────────────────│
│  [Chase Checking ••4532]           [⋮]  │
│  [Fidelity 401k ••7890]           [⋮]  │
│  [Robinhood ••3456]                [⋮]  │
│  ───────────────────────────────────────│
│  [Link new account]                      │
└──────────────────────────────────────────┘
```

---

### Security Settings

Manage security preferences.

**Components Used:** Toggle List, Biometric Prompt, Action Items

**Layout:**
```
┌──────────────────────────────────────────┐
│  ←  Security                             │
│  ───────────────────────────────────────│
│  Face ID                           [✓]  │
│  PIN                               [✓]  │
│  Biometric Login                  [✓]  │
│  ───────────────────────────────────────│
│  Change PIN                         [→]  │
│  Change Password                   [→]  │
│  Two-Factor Authentication         [→]  │
│  ───────────────────────────────────────│
│  Devices                              [→]│
└──────────────────────────────────────────┘
```

---

## Authentication Patterns

### Onboarding

First-time user experience.

**Flow:**
1. Welcome screen → Get started
2. Create account (email/password) or Sign in
3. Link first account (optional)
4. Set up biometric (optional)
5. Dashboard → Empty state with prompts

**Motion:** Horizontal page transitions. Progress dots at bottom.

---

### Biometric Authentication

Face ID or fingerprint login.

**Components Used:** Biometric Icon, Fallback Button

**Anatomy:**
```
┌──────────────────────────────────────────┐
│                                          │
│           [Face ID Icon]                  │
│                                          │
│           Use Face ID to                 │
│           unlock Advizmo                 │
│                                          │
│           [Use PIN instead]              │
│                                          │
└──────────────────────────────────────────┘
```

---

### PIN Entry

Numeric PIN fallback.

**Components Used:** PIN Display, Number Pad

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Enter PIN                                │
│                                          │
│  [●] [●] [○] [○]                        │
│                                          │
│  ┌─────┬─────┬─────┐                    │
│  │  1  │  2  │  3  │                    │
│  ├─────┼─────┼─────┤                    │
│  │  4  │  5  │  6  │                    │
│  ├─────┼─────┼─────┤                    │
│  │  7  │  8  │  9  │                    │
│  ├─────┼─────┼─────┤                    │
│  │  ✗  │  0  │  ⌫  │                    │
│  └─────┴─────┴─────┘                    │
└──────────────────────────────────────────┘
```

---

## Error & Empty State Patterns

### Empty State

Shown when no data is available.

**Components Used:** Icon, Title, Description, CTA Button

**Anatomy:**
```
┌──────────────────────────────────────────┐
│                                          │
│            [Icon — contextual]            │
│                                          │
│          No transactions yet              │
│                                          │
│    Your transactions will appear here     │
│    once you make your first transfer.    │
│                                          │
│        [Make a transfer]                 │
│                                          │
└──────────────────────────────────────────┘
```

**Rules:**
- Never say "No data found"
- Explain why it's empty
- Always provide an action

---

### Loading State

Shown while fetching data.

**Components Used:** Skeleton Cards, Activity Indicator

**Layout:**
```
┌──────────────────────────────────────────┐
│  [Skeleton card — 3 rows]                 │
│  [Skeleton card — 3 rows]                 │
│  [Skeleton card — 3 rows]                 │
└──────────────────────────────────────────┘
```

**Motion:** Shimmer animation (1.5s, left to right). Disable with Reduce Motion.

---

### Error State

Shown when something fails.

**Components Used:** Error Banner, Retry Button, Error Detail

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  ✗ Something went wrong                    │
│                                          │
│  We couldn't load your transactions.     │
│  Please try again.                       │
│                                          │
│  [Try again]                             │
│                                          │
│  If the problem persists, contact support│
└──────────────────────────────────────────┘
```

---

### Offline State

Shown when no network connection.

**Components Used:** Offline Banner, Cached Data Indicator

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  ⚠️  You're offline                         │
│                                          │
│  Showing last synced data from 2:30 PM  │
│                                          │
│  [Transactions — cached]                  │
│  [Accounts — cached]                      │
│  [Goals — cached]                        │
│                                          │
│  Syncing will resume when online.         │
└──────────────────────────────────────────┘
```

---

### Permission Request

Request access to device features.

**Components Used:** Permission Card, Icon, Explanation, Action Button

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  🔔 Notifications                         │
│                                          │
│  Get notified when:                      │
│  • Bills are due                         │
│  • Your portfolio changes significantly  │
│  • Transfers complete                    │
│                                          │
│  [Enable notifications]                   │
│  [Not now]                               │
└──────────────────────────────────────────┘
```

---

## Confirmation Patterns

### Success Confirmation

Shown after a completed action.

**Components Used:** Success Icon, Message, Details, Action Button

**Anatomy:**
```
┌──────────────────────────────────────────┐
│                                          │
│           ✓                              │
│                                          │
│         Transfer complete                 │
│                                          │
│         $500 sent to Savings             │
│         Arriving by Jul 1                │
│                                          │
│         [Done]                           │
│                                          │
└──────────────────────────────────────────┘
```

**Motion:** Checkmark draws in (400ms). Confetti for major milestones (transfers complete, goals reached).

---

### Delete Confirmation

Confirm destructive action.

**Components Used:** Alert Modal, Warning Icon, Action Buttons

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Delete Goal?                            │
│                                          │
│  Are you sure you want to delete         │
│  "House Down Payment"?                   │
│                                          │
│  This will remove all contribution       │
│  history. This cannot be undone.         │
│                                          │
│  [Delete]         [Cancel]               │
└──────────────────────────────────────────┘
```

**Rules:**
- Destructive button is red
- Cancel is always on left
- Explain consequences clearly

---

### Sensitive Action Confirmation

Confirm financial or security-sensitive action.

**Components Used:** Confirmation Modal, Summary, Biometric Prompt

**Anatomy:**
```
┌──────────────────────────────────────────┐
│  Confirm Transfer                         │
│                                          │
│  Transfer $5,000 to                      │
│  External Bank ••9012                    │
│                                          │
│  [Use Face ID to confirm]                │
│                                          │
│  [Enter PIN instead]                     │
└──────────────────────────────────────────┘
```

---

## Pattern Quality Checklist

Every pattern should:

- [ ] Use existing components only
- [ ] Avoid duplication
- [ ] Reduce user effort
- [ ] Reduce cognitive load
- [ ] Support Dynamic Type
- [ ] Support VoiceOver
- [ ] Support Reduce Motion
- [ ] Support localization
- [ ] Be reusable across screens
- [ ] Follow Apple HIG
- [ ] Answer: What? Why? What next?

---

## Pattern Engineering Notes

### SwiftUI Navigation

```swift
NavigationStack {
    Dashboard()
        .navigationDestination(for: PortfolioDetail.self) { portfolio in
            PortfolioDetailView(portfolio: portfolio)
        }
}
```

### React Navigation

```tsx
<Stack.Navigator>
  <Stack.Screen name="Dashboard" component={Dashboard} />
  <Stack.Screen name="PortfolioDetail" component={PortfolioDetail} />
</Stack.Navigator>
```

### Jetpack Compose Navigation

```kotlin
NavHost(navController, startDestination = "dashboard") {
    composable("dashboard") { Dashboard() }
    composable("portfolio/{id}") { PortfolioDetail() }
}
```
