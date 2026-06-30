# Advizmo Figma Library — File Structure

## Library Organization

```
Advizmo Design System (Main Library)
│
├── 🎨 Foundations
│   ├── Color Primitives (all scales with swatches)
│   ├── Color Semantic (light + dark modes)
│   ├── Typography (Inter + IBM Plex Sans styles)
│   ├── Spacing (visual scale)
│   ├── Radius (visual scale)
│   ├── Elevation (shadow previews)
│   └── Iconography (icon components)
│
├── 🧩 Tokens
│   ├── Primitive Variables (import from tokens/primitives.json)
│   ├── Semantic Light Variables (import from tokens/semantic-light.json)
│   ├── Semantic Dark Variables (import from tokens/semantic-dark.json)
│   ├── Component Variables (import from tokens/components.json)
│   └── Typography Variables (import from tokens/typography.json)
│
├── 🔘 01 — Primitives
│   ├── Button (Component Set — 4 variants × 3 sizes × 5 states)
│   ├── Input (Component Set — 4 variants × 4 states)
│   ├── Search (Component Set — 3 states)
│   ├── Amount Field (Component Set — 3 states)
│   ├── OTP Field (Component Set — 2 sizes)
│   ├── Password Field (Component Set — 3 states)
│   ├── Dropdown (Component Set — 4 states)
│   ├── Date Picker (Component Set)
│   ├── Time Picker (Component Set)
│   ├── Segmented Control (Component Set — 2-5 segments)
│   ├── Slider (Component Set — 3 states)
│   ├── Stepper (Component Set — 3 states)
│   ├── Switch (Component Set — 4 states)
│   ├── Checkbox (Component Set — 4 states)
│   ├── Radio (Component Set — 4 states)
│   ├── Badge (Component Set — 6 color variants × 3 sizes)
│   ├── Chip (Component Set — 2 states × 2 modes)
│   ├── Tag (Component Set — 2 variants)
│   ├── Status (Component Set — 4 statuses)
│   ├── Progress (Component Set — 3 variants)
│   ├── Activity Indicator (Component Set — 2 sizes)
│   ├── Tooltip (Component Set — 4 positions)
│   ├── Avatar (Component Set — 4 sizes × 2 variants)
│   ├── Divider (Component Set — 2 variants)
│   └── Skeleton (Component Set — 3 variants)
│
├── 📱 02 — Native Platform
│   ├── Status Bar (iOS)
│   ├── Navigation Bar (Component Set — 4 variants)
│   ├── Large Title (iOS)
│   ├── Tab Bar (Component Set — with/without badge)
│   ├── Toolbar (iOS)
│   ├── Search Bar (iOS)
│   ├── List / Table View (iOS)
│   ├── Cell (Component Set — 5 variants)
│   ├── Swipe Actions (iOS)
│   ├── Context Menu (iOS)
│   ├── Action Sheet (iOS)
│   ├── Bottom Sheet (Component Set — 3 states)
│   ├── Alert (Component Set — 4 types)
│   ├── Dialog (Component Set — 3 types)
│   ├── Pull to Refresh (iOS)
│   └── Haptic Feedback Notes
│
├── 🏗️ 03 — Composite
│   ├── Card (Component Set — 6 variants)
│   ├── Table (Component Set — 3 variants)
│   ├── List (Component Set — 3 variants)
│   ├── Widget (Component Set — 4 variants)
│   ├── Form Group (Component Set)
│   ├── Timeline (Component Set)
│   ├── Header (Component Set — 3 variants)
│   ├── Footer (Component Set)
│   ├── Recommendation Block (Component Set)
│   ├── Metric Block (Component Set — 4 variants)
│   ├── Comparison Block (Component Set)
│   ├── Hero Block (Component Set — 2 variants)
│   ├── Search Results (Component Set)
│   ├── Filter Bar (Component Set)
│   └── Selection Card (Component Set — 3 states)
│
├── 💰 04 — Financial
│   ├── Portfolio Summary (Component Set — 2 sizes)
│   ├── Net Worth (Component Set — 2 sizes)
│   ├── Safe To Invest (Component Set)
│   ├── Cash Position (Component Set)
│   ├── Portfolio Performance (Component Set)
│   ├── Allocation (Component Set — 2 variants)
│   ├── Risk Meter (Component Set — 5 levels)
│   ├── Holdings List (Component Set)
│   ├── Holding Row (Component Set — 3 states)
│   ├── Transaction List (Component Set)
│   ├── Transaction Row (Component Set — 4 types)
│   ├── Merchant Row (Component Set)
│   ├── Institution Row (Component Set)
│   ├── Goal Summary (Component Set — 4 statuses)
│   ├── Goal Progress (Component Set — 4 statuses)
│   ├── Goal Forecast (Component Set)
│   ├── Bills List (Component Set)
│   ├── Upcoming Bill (Component Set — 3 states)
│   ├── Emergency Fund (Component Set)
│   ├── Cash Flow (Component Set — 2 variants)
│   ├── Income Row (Component Set)
│   ├── Expense Row (Component Set)
│   ├── Automation Status (Component Set — 3 states)
│   ├── Automation Timeline (Component Set)
│   ├── Tax Summary (Component Set)
│   ├── Tax Harvest (Component Set)
│   ├── Financial Health Score (Component Set)
│   ├── AI Recommendation (Component Set)
│   ├── AI Summary (Component Set)
│   ├── AI Insight (Component Set)
│   ├── AI Explanation (Component Set)
│   ├── AI Chat Bubble (Component Set — 2 variants)
│   └── Confidence Indicator (Component Set — 3 levels)
│
├── 📊 05 — Data Visualization
│   ├── Line Chart (Component Set — with/without area)
│   ├── Area Chart (Component Set)
│   ├── Bar Chart (Component Set — grouped/stacked)
│   ├── Donut Chart (Component Set — 2 sizes)
│   ├── Allocation Chart (Component Set)
│   ├── Sparkline (Component Set — positive/negative)
│   ├── Forecast Chart (Component Set)
│   ├── Risk Gauge (Component Set)
│   ├── Legend (Component Set — horizontal/vertical)
│   ├── Chart Tooltip (Component Set)
│   ├── Axes (Component Set — x/y)
│   ├── Grid Lines (Component Set)
│   ├── Empty State — Chart (Component)
│   ├── Loading State — Chart (Component)
│   └── Error State — Chart (Component)
│
├── 📐 06 — Patterns
│   ├── Dashboard Pattern (Frame)
│   ├── Portfolio Pattern (Frame)
│   ├── Goal Pattern (Frame)
│   ├── Transaction Pattern (Frame)
│   ├── AI Pattern (Frame)
│   ├── Automation Pattern (Frame)
│   ├── Search Pattern (Frame)
│   ├── Filter Pattern (Frame)
│   ├── Settings Pattern (Frame)
│   ├── Onboarding Pattern (Frame)
│   ├── Loading Pattern (Frame)
│   ├── Error Pattern (Frame)
│   ├── Permission Pattern (Frame)
│   ├── Delete Pattern (Frame)
│   ├── Review Pattern (Frame)
│   └── Confirmation Pattern (Frame)
│
├── 📱 07 — Screen Blueprints
│   ├── Dashboard (gray wireframe)
│   ├── Portfolio (gray wireframe)
│   ├── Portfolio Detail (gray wireframe)
│   ├── Transactions (gray wireframe)
│   ├── Goals (gray wireframe)
│   ├── Automation (gray wireframe)
│   ├── AI Assistant (gray wireframe)
│   ├── Bills (gray wireframe)
│   ├── Settings (gray wireframe)
│   ├── Profile (gray wireframe)
│   ├── Search (gray wireframe)
│   ├── Authentication (gray wireframe)
│   ├── Review (gray wireframe)
│   ├── Confirmation (gray wireframe)
│   ├── Loading (gray wireframe)
│   ├── Empty (gray wireframe)
│   ├── Offline (gray wireframe)
│   └── Error (gray wireframe)
│
└── 🖼️ 08 — Templates (High-Fidelity)
    ├── Dashboard
    ├── Portfolio
    ├── Investment Detail
    ├── Transactions
    ├── Goals
    ├── Cash Flow
    ├── Bills
    ├── Automation
    ├── AI Assistant
    ├── Settings
    ├── Profile
    └── Notifications
```

## Variable Collections

| Collection | Modes | Count |
|-----------|-------|-------|
| Primitives | — | ~200 tokens |
| Semantic | Light, Dark | ~120 tokens per mode |
| Component | Light, Dark | ~150 tokens per mode |
| Typography | — | ~30 styles |

## Component Naming Convention

```
Category/Component/Variant/Property
```

Examples:
- `Button/Primary/Large/Default`
- `Input/Text/Focus`
- `Badge/Positive/Medium`
- `Card/Financial/Raised`
- `Holding/Row/Default`

## Auto Layout Rules

Every component uses Auto Layout:
- **Direction**: Horizontal or Vertical as appropriate
- **Padding**: Use spacing tokens (never hardcoded)
- **Gap**: Use spacing tokens (never hardcoded)
- **Sizing**: Fill container (width) + Hug contents (height)
- **Text**: Always Hug contents

## Import Instructions

### Tokens → Figma Variables
1. Install Tokens Studio plugin
2. Import `tokens/primitives.json`
3. Import `tokens/semantic-light.json` → set as Light mode
4. Import `tokens/semantic-dark.json` → set as Dark mode
5. Import `tokens/components.json`
6. Import `tokens/typography.json`

### SVG Components → Figma
1. Open SVG in browser
2. Copy SVG content
3. Paste into Figma
4. Convert to Component (Ctrl/Cmd + Alt + K)
5. Add variants as needed
6. Apply Variables from token collections
