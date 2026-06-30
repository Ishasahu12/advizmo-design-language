# Advizmo Data Visualization System

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1, Primitive Components v1**

---

## Table of Contents

1. [Overview](#overview)
2. [01 Chart Foundations](#01-chart-foundations)
3. [02 Chart Colors](#02-chart-colors)
4. [03 Chart Components](#03-chart-components)
5. [04 Financial Charts](#04-financial-charts)
6. [05 Chart Interaction](#05-chart-interaction)
7. [06 Chart Motion](#06-chart-motion)
8. [07 Accessibility](#07-accessibility)
9. [08 Empty States](#08-empty-states)
10. [09 Loading States](#09-loading-states)
11. [10 Documentation](#10-documentation)
12. [Validation Checklist](#validation-checklist)

---

## Overview

Charts are one of the primary communication methods inside Advizmo.

Every chart must help users understand their money with the least cognitive effort.

### Primary Principles

| Principle | Description |
|-----------|-------------|
| **Clarity** | Information is immediately understandable |
| **Accuracy** | Data is represented truthfully |
| **Accessibility** | Usable by everyone |
| **Consistency** | Similar data looks similar |
| **Minimal Cognitive Load** | No mental effort required |
| **Financial Storytelling** | Charts tell a story |
| **Responsive Design** | Works on all screen sizes |
| **Motion with Purpose** | Animation explains data |

### Never

- Decorative elements
- 3D charts
- Gradients inside charts
- Unnecessary animation
- TradingView complexity
- Treemap (unless hierarchical data is critical)
- Waterfall charts
- Gauge charts
- Radar charts
- Timeline as a chart type

### Chart Selection

Use this decision tree:

```
Is it time-series data?
├── Yes → Is it a single trend?
│   └── Line or Area
├── Is it multiple series comparison?
│   └── Multi-line or Stacked Bar
└── No → Is it part-to-whole?
    ├── Yes → Donut or Allocation
    └── No → Bar or Grouped Bar

Is it progress toward a goal?
└── Progress Ring or Goal Progress

Is it a financial metric?
└── Sparkline or KPI with comparison
```

### Design References

- Apple Stocks
- Apple Health
- Mercury
- Wealthfront
- Stripe Dashboard

---

## 01 Chart Foundations

### Grid System

**Purpose:** Provide visual structure for charts
**Usage:** All chart types

#### Grid Types

| Type | Use Case | Token |
|------|----------|-------|
| Horizontal | Y-axis reference | `chart/grid/horizontal` |
| Vertical | X-axis reference | `chart/grid/vertical` |
| Full | Complete grid | `chart/grid/full` |
| None | Minimal charts | — |

#### Grid Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide grid |
| `color` | Color | `chart/grid` | Grid line color |
| `thickness` | Number | 1 | Line thickness |
| `style` | Style | `solid` | Line style |
| `dashArray` | Number[] | — | Dash pattern |

#### Grid Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/grid` | `color/border` | Grid line color |
| `chart/grid/faint` | `color/border-subtle` | Faint grid |
| `chart/grid/emphasis` | `color/border-strong` | Emphasis grid |

---

### Axis Rules

**Purpose:** Define axis behavior
**Usage:** All charts with axes

#### X-Axis Rules

| Rule | Description |
|------|-------------|
| Time flows left to right | Historical → Current |
| Labels below axis | Always below |
| Tick marks outside | Point away from chart |
| Grid lines extend up | From tick marks |

#### Y-Axis Rules

| Rule | Description |
|------|-------------|
| Values increase upward | Low → High |
| Labels to the left | Always left |
| Tick marks outside | Point away from chart |
| Grid lines extend right | From tick marks |

#### Axis Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide axis |
| `color` | Color | `chart/axis` | Axis line color |
| `thickness` | Number | 1 | Line thickness |
| `tickSize` | Number | 4 | Tick mark size |
| `tickVisible` | Boolean | `true` | Show tick marks |

---

### Padding

**Purpose:** Define chart padding
**Usage:** All chart containers

#### Padding Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/padding/xs` | 4px | Tight padding |
| `chart/padding/sm` | 8px | Small padding |
| `chart/padding/md` | 16px | Default padding |
| `chart/padding/lg` | 24px | Large padding |
| `chart/padding/xl` | 32px | Extra large padding |

#### Padding Rules

| Context | Padding | Reason |
|---------|---------|--------|
| Standalone chart | `chart/padding/lg` | Breathing room |
| Chart in card | `chart/padding/md` | Card padding |
| Compact chart | `chart/padding/sm` | Small spaces |
| Dashboard widget | `chart/padding/md` | Widget padding |

---

### Margins

**Purpose:** Define space for labels and axes
**Usage:** Charts with axes

#### Margin Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/margin/left` | 48px | Y-axis labels |
| `chart/margin/right` | 16px | Right margin |
| `chart/margin/top` | 16px | Top margin |
| `chart/margin/bottom` | 32px | X-axis labels |

#### Margin Rules

| Context | Left | Right | Top | Bottom |
|---------|------|-------|-----|--------|
| Standard chart | 48px | 16px | 16px | 32px |
| Compact chart | 32px | 8px | 8px | 24px |
| Sparkline | 0 | 0 | 0 | 0 |
| Donut | 0 | 0 | 0 | 0 |

---

### Data Density

**Purpose:** Define data point spacing
**Usage:** Line and area charts

#### Density Rules

| Data Points | Spacing | Use Case |
|-------------|---------|----------|
| 1-7 | Wide | Daily view |
| 8-31 | Medium | Weekly view |
| 32-365 | Tight | Monthly view |
| 366+ | Aggregated | Yearly view |

#### Density Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `minSpacing` | Number | 8px | Minimum point spacing |
| `maxPoints` | Number | 100 | Maximum visible points |
| `aggregation` | Aggregation | `average` | Aggregation method |

---

### Tick Marks

**Purpose:** Define tick mark behavior
**Usage:** Axes

#### Tick Mark Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | Number | 4px | Tick mark size |
| `color` | Color | `chart/axis` | Tick mark color |
| `thickness` | Number | 1px | Tick mark thickness |
| `visible` | Boolean | `true` | Show/hide |

---

### Axis Labels

**Purpose:** Define axis label formatting
**Usage:** Axes

#### Label Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `font` | Font | `typography/micro` | Label font |
| `color` | Color | `chart/label` | Label color |
| `alignment` | Alignment | `center` | Label alignment |
| `rotation` | Number | 0 | Label rotation |
| `maxWidth` | Number | 60px | Maximum width |

#### Label Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/label` | `color/text/tertiary` | Axis labels |
| `chart/label/primary` | `color/text/secondary` | Primary labels |
| `chart/label/highlight` | `color/text/primary` | Highlighted labels |

---

### Legends

**Purpose:** Identify data series
**Usage:** Multi-series charts

#### Legend Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | Position | `bottom` | Legend position |
| `orientation` | Orientation | `horizontal` | Legend orientation |
| `visible` | Boolean | `true` | Show/hide legend |
| `alignment` | Alignment | `center` | Legend alignment |

#### Legend Positions

| Position | Use Case |
|----------|----------|
| `top` | Above chart |
| `bottom` | Below chart |
| `left` | Left of chart |
| `right` | Right of chart |
| `overlay` | On chart |

---

### Titles

**Purpose:** Identify chart content
**Usage:** All charts

#### Title Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Title text |
| `font` | Font | `typography/heading/2` | Title font |
| `color` | Color | `color/text/primary` | Title color |
| `alignment` | Alignment | `left` | Title alignment |

---

### Subtitles

**Purpose:** Provide additional context
**Usage:** Charts with context

#### Subtitle Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Subtitle text |
| `font` | Font | `typography/caption` | Subtitle font |
| `color` | Color | `color/text/secondary` | Subtitle color |

---

### Annotations

**Purpose:** Highlight specific data points
**Usage:** Important events, milestones

#### Annotation Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Annotation text |
| `position` | Position | — | Annotation position |
| `color` | Color | `color/text/secondary` | Text color |
| `lineColor` | Color | `color/border` | Line color |
| `lineStyle` | Style | `dashed` | Line style |

---

### Reference Lines

**Purpose:** Show benchmark or comparison values
**Usage:** Performance comparison

#### Reference Line Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Reference value |
| `label` | Text | — | Reference label |
| `color` | Color | `chart/reference` | Line color |
| `style` | Style | `dashed` | Line style |
| `thickness` | Number | 1 | Line thickness |

#### Reference Line Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/reference` | `color/text/tertiary` | Reference line |
| `chart/reference/benchmark` | `color/action/primary` | Benchmark line |
| `chart/reference/average` | `color/text/secondary` | Average line |

---

### Goal Lines

**Purpose:** Show target values
**Usage:** Goal tracking

#### Goal Line Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Goal value |
| `label` | Text | `Goal` | Goal label |
| `color` | Color | `chart/goal` | Line color |
| `style` | Style | `dashed` | Line style |
| `icon` | IconName | — | Goal icon |

#### Goal Line Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/goal` | `color/goal` | Goal line |
| `chart/goal/label` | `color/goal` | Goal label |

---

### Forecast Lines

**Purpose:** Show projected values
**Usage:** Projections, forecasts

#### Forecast Line Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Forecast data |
| `color` | Color | `chart/forecast` | Line color |
| `style` | Style | `dashed` | Line style |
| `confidenceInterval` | Number | — | Confidence band |

#### Forecast Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/forecast` | `color/text/tertiary` | Forecast line |
| `chart/forecast/band` | `color/background/secondary` | Confidence band |

---

### Comparison Lines

**Purpose:** Compare multiple data series
**Usage:** Benchmark comparison

#### Comparison Line Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Comparison data |
| `color` | Color | `chart/comparison` | Line color |
| `label` | Text | — | Series label |
| `thickness` | Number | 1 | Line thickness |

---

### Selection Rules

**Purpose:** Define selection behavior
**Usage:** Interactive charts

#### Selection Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | Color | `chart/selection` | Selection color |
| `markerSize` | Number | 8px | Selection marker size |
| `crosshair` | Boolean | `true` | Show crosshair |
| `snapToData` | Boolean | `true` | Snap to nearest point |

---

### Tooltip Rules

**Purpose:** Define tooltip behavior
**Usage:** Interactive charts

#### Tooltip Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide tooltip |
| `position` | Position | `auto` | Tooltip position |
| `offset` | Number | 8px | Offset from point |
| `arrow` | Boolean | `true` | Show arrow |
| `followPointer` | Boolean | `false` | Follow pointer |

---

### Empty Rules

**Purpose:** Define empty state behavior
**Usage:** Charts with no data

#### Empty State Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show empty state |
| `icon` | IconName | `icon/chart-empty` | Empty icon |
| `title` | Text | `No data` | Empty title |
| `description` | Text | — | Empty description |

---

### Spacing Rules

**Purpose:** Define spacing within charts
**Usage:** All charts

#### Spacing Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/spacing/xs` | 2px | Tight spacing |
| `chart/spacing/sm` | 4px | Small spacing |
| `chart/spacing/md` | 8px | Default spacing |
| `chart/spacing/lg` | 16px | Large spacing |
| `chart/spacing/xl` | 24px | Extra large spacing |

---

## 02 Chart Colors

Charts must use semantic colors only. Never primitive colors.

### Positive

**Purpose:** Indicate positive values
**Usage:** Gains, growth, increases

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/positive` | `color/feedback/success` | Positive values |
| `chart/positive/subtle` | `color/feedback/success-subtle` | Positive background |
| `chart/positive/muted` | `color/feedback/success-muted` | Muted positive |

---

### Negative

**Purpose:** Indicate negative values
**Usage:** Losses, decreases

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/negative` | `color/feedback/error` | Negative values |
| `chart/negative/subtle` | `color/feedback/error-subtle` | Negative background |
| `chart/negative/muted` | `color/feedback/error-muted` | Muted negative |

---

### Neutral

**Purpose:** Indicate neutral values
**Usage:** No change, baseline

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/neutral` | `color/text/secondary` | Neutral values |
| `chart/neutral/subtle` | `color/background/secondary` | Neutral background |

---

### Forecast

**Purpose:** Indicate projected values
**Usage:** Forecasts, projections

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/forecast` | `color/text/tertiary` | Forecast line |
| `chart/forecast/band` | `color/background/secondary` | Confidence band |

---

### Goal

**Purpose:** Indicate target values
**Usage:** Goals, targets

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/goal` | `color/goal` | Goal line |
| `chart/goal/marker` | `color/goal` | Goal marker |

---

### Historical

**Purpose:** Indicate historical data
**Usage:** Past performance

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/historical` | `color/text/secondary` | Historical line |
| `chart/historical/fill` | `color/background/secondary` | Historical fill |

---

### Current

**Purpose:** Indicate current value
**Usage:** Current position, today

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/current` | `color/action/primary` | Current line |
| `chart/current/marker` | `color/action/primary` | Current marker |

---

### Comparison

**Purpose:** Indicate comparison data
**Usage:** Benchmark comparison

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/comparison` | `color/text/tertiary` | Comparison line |
| `chart/comparison/label` | `color/text/secondary` | Comparison label |

---

### Projected

**Purpose:** Indicate projected values
**Usage:** Future projections

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/projected` | `color/action/primary-muted` | Projected line |
| `chart/projected/band` | `color/action/primary-subtle` | Confidence band |

---

### Average

**Purpose:** Indicate average values
**Usage:** Average line, mean

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/average` | `color/text/tertiary` | Average line |
| `chart/average/label` | `color/text/secondary` | Average label |

---

### Reference

**Purpose:** Indicate reference values
**Usage:** Reference lines, benchmarks

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/reference` | `color/text/tertiary` | Reference line |
| `chart/reference/label` | `color/text/secondary` | Reference label |

---

### Highlight

**Purpose:** Highlight specific data
**Usage:** Important points, selections

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/highlight` | `color/action/primary` | Highlight color |
| `chart/highlight/subtle` | `color/action/primary-subtle` | Highlight background |

---

### Selection

**Purpose:** Indicate selection state
**Usage:** Selected data points

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/selection` | `color/action/primary` | Selection color |
| `chart/selection/marker` | `color/action/primary` | Selection marker |
| `chart/selection/crosshair` | `color/action/primary-muted` | Crosshair |

---

### Hover

**Purpose:** Indicate hover state
**Usage:** Hover interactions

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/hover` | `color/action/primary-subtle` | Hover color |
| `chart/hover/marker` | `color/action/primary` | Hover marker |

---

### Disabled

**Purpose:** Indicate disabled state
**Usage:** Disabled data series

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/disabled` | `color/text/disabled` | Disabled line |
| `chart/disabled/fill` | `color/background/disabled` | Disabled fill |

---

### Tooltip Background

**Purpose:** Style tooltip backgrounds
**Usage:** Tooltips

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/tooltip/background` | `color/text/primary` | Tooltip background |
| `chart/tooltip/text` | `color/text/on-primary` | Tooltip text |
| `chart/tooltip/border` | `color/text/primary` | Tooltip border |
| `chart/tooltip/shadow` | `elevation/floating` | Tooltip shadow |

---

### Grid

**Purpose:** Style grid lines
**Usage:** Grid lines

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/grid` | `color/border` | Grid lines |
| `chart/grid/faint` | `color/border-subtle` | Faint grid |
| `chart/grid/emphasis` | `color/border-strong` | Emphasis grid |

---

### Axis

**Purpose:** Style axes
**Usage:** Axis lines

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/axis` | `color/border` | Axis lines |
| `chart/axis/label` | `color/text/tertiary` | Axis labels |
| `chart/axis/tick` | `color/border` | Tick marks |

---

### Legend

**Purpose:** Style legends
**Usage:** Legends

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/legend/text` | `color/text/secondary` | Legend text |
| `chart/legend/marker` | — | Legend marker (uses series color) |
| `chart/legend/active` | `color/text/primary` | Active legend item |

---

### Label

**Purpose:** Style labels
**Usage:** Data labels

| Token | Value | Use Case |
|-------|-------|----------|
| `chart/label` | `color/text/tertiary` | Data labels |
| `chart/label/primary` | `color/text/secondary` | Primary labels |
| `chart/label/highlight` | `color/text/primary` | Highlighted labels |

---

### Color Blindness Support

Charts must work for color blindness. Do not rely only on color.

#### Strategies

| Strategy | Description |
|----------|-------------|
| Pattern overlays | Use patterns for differentiation |
| Shape markers | Use different marker shapes |
| Labels | Always label data series |
| Line styles | Use different line styles (solid, dashed, dotted) |
| Contrast | Ensure sufficient contrast |

#### Pattern Library

| Pattern | Use Case |
|---------|----------|
| Solid | Primary series |
| Dashed | Secondary series |
| Dotted | Tertiary series |
| Dash-dot | Reference series |

---

## 03 Chart Components

### Legend

**Purpose:** Identify data series
**Usage:** Multi-series charts

#### Variants

| Variant | Use Case |
|---------|----------|
| Horizontal | Bottom legend |
| Vertical | Side legend |
| Compact | Small spaces |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | LegendItem[] | — | Legend items |
| `position` | Position | `bottom` | Legend position |
| `orientation` | Orientation | `horizontal` | Orientation |
| `visible` | Boolean | `true` | Show/hide |
| `onItemPress` | Function | — | Item press handler |

---

### Legend Item

**Purpose:** Display single legend item
**Usage:** Legends

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | Text | — | Item label |
| `color` | Color | — | Series color |
| `shape` | Shape | `circle` | Marker shape |
| `active` | Boolean | `true` | Active state |
| `onPress` | Function | — | Press handler |

---

### Tooltip

**Purpose:** Display data point details
**Usage:** Interactive charts

#### Variants

| Variant | Use Case |
|---------|----------|
| Default | Standard tooltip |
| Compact | Small spaces |
| Rich | Multiple values |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide |
| `position` | Position | `auto` | Tooltip position |
| `data` | TooltipData | — | Tooltip data |
| `format` | Format | — | Value format |
| `arrow` | Boolean | `true` | Show arrow |

---

### Selection Marker

**Purpose:** Mark selected data point
**Usage:** Selected points

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide |
| `color` | Color | `chart/selection` | Marker color |
| `size` | Number | 8px | Marker size |
| `shape` | Shape | `circle` | Marker shape |

---

### Goal Marker

**Purpose:** Mark goal value
**Usage:** Goal charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Goal value |
| `label` | Text | `Goal` | Goal label |
| `visible` | Boolean | `true` | Show/hide |
| `color` | Color | `chart/goal` | Marker color |
| `icon` | IconName | — | Goal icon |

---

### Average Marker

**Purpose:** Mark average value
**Usage:** Average lines

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Average value |
| `label` | Text | `Average` | Average label |
| `visible` | Boolean | `true` | Show/hide |
| `color` | Color | `chart/average` | Line color |
| `style` | Style | `dashed` | Line style |

---

### Forecast Marker

**Purpose:** Mark forecast region
**Usage:** Forecast charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `startDate` | Date | — | Forecast start |
| `endDate` | Date | — | Forecast end |
| `color` | Color | `chart/forecast` | Forecast color |
| `confidence` | Number | — | Confidence level |

---

### Reference Marker

**Purpose:** Mark reference value
**Usage:** Reference lines

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | Number | — | Reference value |
| `label` | Text | — | Reference label |
| `color` | Color | `chart/reference` | Line color |
| `style` | Style | `dashed` | Line style |

---

### Grid

**Purpose:** Display chart grid
**Usage:** Charts with axes

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide |
| `horizontal` | Boolean | `true` | Horizontal lines |
| `vertical` | Boolean | `false` | Vertical lines |
| `color` | Color | `chart/grid` | Grid color |
| `thickness` | Number | 1 | Line thickness |

---

### Axis

**Purpose:** Display chart axis
**Usage:** Charts with axes

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide |
| `type` | Type | `x` | Axis type |
| `color` | Color | `chart/axis` | Axis color |
| `tickSize` | Number | 4px | Tick size |
| `tickVisible` | Boolean | `true` | Show ticks |

---

### Label

**Purpose:** Display data label
**Usage:** Data point labels

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Label text |
| `position` | Position | `top` | Label position |
| `color` | Color | `chart/label` | Label color |
| `font` | Font | `typography/micro` | Label font |
| `visible` | Boolean | `true` | Show/hide |

---

### Annotation

**Purpose:** Annotate chart data
**Usage:** Important events

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Annotation text |
| `position` | Position | — | Annotation position |
| `color` | Color | `color/text/secondary` | Text color |
| `lineColor` | Color | `color/border` | Line color |
| `lineStyle` | Style | `dashed` | Line style |

---

### Highlight

**Purpose:** Highlight chart region
**Usage:** Important regions

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `start` | Number | — | Start position |
| `end` | Number | — | End position |
| `color` | Color | `chart/highlight/subtle` | Highlight color |
| `label` | Text | — | Highlight label |

---

### Crosshair

**Purpose:** Follow pointer position
**Usage:** Interactive charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | Boolean | `true` | Show/hide |
| `color` | Color | `chart/selection/crosshair` | Crosshair color |
| `style` | Style | `solid` | Line style |
| `thickness` | Number | 1 | Line thickness |

---

### Data Point

**Purpose:** Mark individual data point
**Usage:** Line charts, scatter plots

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `x` | Number | — | X position |
| `y` | Number | — | Y position |
| `color` | Color | `chart/current` | Point color |
| `size` | Number | 4px | Point size |
| `shape` | Shape | `circle` | Point shape |
| `selected` | Boolean | `false` | Selected state |

---

### Range Selector

**Purpose:** Select time range
**Usage:** Time-based charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `ranges` | Range[] | — | Available ranges |
| `selected` | String | — | Selected range |
| `onSelect` | Function | — | Selection handler |

---

### Zoom Control

**Purpose:** Control chart zoom
**Usage:** Zoomable charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `minZoom` | Number | 1 | Minimum zoom |
| `maxZoom` | Number | 10 | Maximum zoom |
| `zoom` | Number | 1 | Current zoom |
| `onZoom` | Function | — | Zoom handler |

---

### Time Selector

**Purpose:** Select time period
**Usage:** Time-based charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `periods` | Period[] | — | Available periods |
| `selected` | String | — | Selected period |
| `onSelect` | Function | — | Selection handler |

---

### Filter Chips

**Purpose:** Filter chart data
**Usage:** Multi-series charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `filters` | Filter[] | — | Available filters |
| `selected` | String[] | — | Selected filters |
| `onToggle` | Function | — | Toggle handler |

---

### Date Range Picker

**Purpose:** Select date range
**Usage:** Custom date ranges

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `start` | Date | — | Start date |
| `end` | Date | — | End date |
| `min` | Date | — | Minimum date |
| `max` | Date | — | Maximum date |
| `onChange` | Function | — | Change handler |

---

### Chart Header

**Purpose:** Display chart header
**Usage:** Chart containers

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | Text | — | Chart title |
| `subtitle` | Text | — | Chart subtitle |
| `action` | Action | — | Header action |
| `children` | ReactNode | — | Header content |

---

### Chart Footer

**Purpose:** Display chart footer
**Usage:** Chart containers

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | ReactNode | — | Footer content |
| `disclaimer` | Text | — | Disclaimer text |

---

### Insight Banner

**Purpose:** Display chart insight
**Usage:** AI insights, analysis

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | Text | — | Insight text |
| `type` | Type | `info` | Insight type |
| `icon` | IconName | — | Insight icon |
| `action` | Action | — | Insight action |

---

### Summary Metrics

**Purpose:** Display summary metrics
**Usage:** Below charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `metrics` | Metric[] | — | Summary metrics |
| `layout` | Layout | `horizontal` | Metric layout |

---

## 04 Financial Charts

### Portfolio Allocation

**Purpose:** Display portfolio asset allocation
**Usage:** Portfolio overview

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Donut | Allocation overview |
| Stacked Bar | Allocation comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | Allocation[] | — | Allocation data |
| `variant` | Variant | `donut` | Chart variant |
| `showLabels` | Boolean | `true` | Show labels |
| `showLegend` | Boolean | `true` | Show legend |
| `centerLabel` | Text | — | Center label |
| `centerValue` | Text | — | Center value |

#### Data Format

```typescript
interface Allocation {
  name: string;
  value: number;
  color: string;
  percentage: number;
}
```

---

### Portfolio Performance

**Purpose:** Display portfolio performance over time
**Usage:** Performance tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Line | Single period |
| Area | Filled area |
| Multi-line | Comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Performance data |
| `benchmark` | DataPoint[] | — | Benchmark data |
| `period` | Period | `1y` | Time period |
| `showBenchmark` | Boolean | `false` | Show benchmark |
| `showGrid` | Boolean | `true` | Show grid |
| `showLabels` | Boolean | `true` | Show labels |

#### Data Format

```typescript
interface DataPoint {
  date: Date;
  value: number;
}
```

---

### Net Worth

**Purpose:** Display net worth over time
**Usage:** Net worth tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Area | Net worth trend |
| Line | Simple trend |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Net worth data |
| `period` | Period | `1y` | Time period |
| `current` | Number | — | Current net worth |
| `change` | Number | — | Change amount |
| `changePercentage` | Number | — | Change percentage |

---

### Cashflow

**Purpose:** Display cashflow over time
**Usage:** Cashflow analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Monthly cashflow |
| Stacked Bar | Income vs expense |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | CashflowData[] | — | Cashflow data |
| `period` | Period | `1m` | Time period |
| `showIncome` | Boolean | `true` | Show income |
| `showExpenses` | Boolean | `true` | Show expenses |
| `showNet` | Boolean | `true` | Show net |

---

### Income vs Expense

**Purpose:** Compare income and expenses
**Usage:** Budget analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Grouped Bar | Side by side |
| Stacked Bar | Combined view |
| Line | Trend comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `income` | DataPoint[] | — | Income data |
| `expenses` | DataPoint[] | — | Expense data |
| `period` | Period | `1m` | Time period |
| `showLegend` | Boolean | `true` | Show legend |

---

### Investment Growth

**Purpose:** Display investment growth
**Usage:** Investment tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Area | Growth with contributions |
| Line | Simple growth |
| Stacked Area | Growth breakdown |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | GrowthData[] | — | Growth data |
| `contributions` | DataPoint[] | — | Contribution data |
| `showContributions` | Boolean | `false` | Show contributions |
| `period` | Period | `1y` | Time period |

---

### Asset Allocation

**Purpose:** Display asset allocation
**Usage:** Allocation analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Donut | Allocation overview |
| Stacked Bar | Allocation comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | Allocation[] | — | Allocation data |
| `targets` | Allocation[] | — | Target allocations |
| `showTargets` | Boolean | `false` | Show targets |
| `variant` | Variant | `donut` | Chart variant |

---

### Risk Allocation

**Purpose:** Display risk allocation
**Usage:** Risk analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Donut | Risk distribution |
| Bar | Risk by category |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allocations` | RiskAllocation[] | — | Risk data |
| `riskLevel` | RiskLevel | — | Overall risk |
| `showLegend` | Boolean | `true` | Show legend |

---

### Sector Allocation

**Purpose:** Display sector allocation
**Usage:** Sector analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Donut | Sector distribution |
| Bar | Sector comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `sectors` | Sector[] | — | Sector data |
| `variant` | Variant | `donut` | Chart variant |
| `showLabels` | Boolean | `true` | Show labels |

---

### Tax Savings

**Purpose:** Display tax savings over time
**Usage:** Tax optimization

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Monthly savings |
| Area | Cumulative savings |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Tax savings data |
| `totalSavings` | Number | — | Total savings |
| `period` | Period | `1y` | Time period |

---

### Dividend Growth

**Purpose:** Display dividend growth
**Usage:** Dividend tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Monthly dividends |
| Line | Dividend growth trend |
| Area | Cumulative dividends |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DividendData[] | — | Dividend data |
| `yield` | Number | — | Current yield |
| `growth` | Number | — | Growth rate |
| `period` | Period | `1y` | Time period |

---

### Emergency Fund

**Purpose:** Display emergency fund progress
**Usage:** Emergency fund tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Progress | Goal progress |
| Area | Growth over time |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | Number | — | Current amount |
| `target` | Number | — | Target amount |
| `months` | Number | — | Months covered |
| `data` | DataPoint[] | — | Growth data |

---

### Goal Progress

**Purpose:** Display goal progress
**Usage:** Goal tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Progress | Goal progress |
| Area | Growth over time |
| Line | Projection |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | Number | — | Current amount |
| `target` | Number | — | Target amount |
| `projected` | DataPoint[] | — | Projection data |
| `milestones` | Milestone[] | — | Milestones |

---

### Savings Growth

**Purpose:** Display savings growth
**Usage:** Savings tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Area | Savings growth |
| Line | Simple growth |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Savings data |
| `contributions` | DataPoint[] | — | Contribution data |
| `period` | Period | `1y` | Time period |

---

### Recurring Investment

**Purpose:** Display recurring investment history
**Usage:** DCA tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Investment amounts |
| Line | Cumulative investment |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | InvestmentData[] | — | Investment data |
| `totalInvested` | Number | — | Total invested |
| `currentValue` | Number | — | Current value |
| `period` | Period | `1y` | Time period |

---

### Withdrawals

**Purpose:** Display withdrawal history
**Usage:** Withdrawal tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Withdrawal amounts |
| Line | Withdrawal trend |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Withdrawal data |
| `total` | Number | — | Total withdrawn |
| `period` | Period | `1y` | Time period |

---

### Deposits

**Purpose:** Display deposit history
**Usage:** Deposit tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Deposit amounts |
| Line | Deposit trend |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | DataPoint[] | — | Deposit data |
| `total` | Number | — | Total deposited |
| `period` | Period | `1y` | Time period |

---

### Bills

**Purpose:** Display bill history
**Usage:** Bill tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Monthly bills |
| Line | Bill trend |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | BillData[] | — | Bill data |
| `average` | Number | — | Average bill |
| `period` | Period | `1y` | Time period |

---

### Cash Buffer

**Purpose:** Display cash buffer status
**Usage:** Cash management

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Progress | Buffer status |
| Area | Buffer over time |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `current` | Number | — | Current buffer |
| `target` | Number | — | Target buffer |
| `data` | DataPoint[] | — | Buffer history |

---

### Performance Comparison

**Purpose:** Compare performance against benchmark
**Usage:** Performance analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Multi-line | Performance comparison |
| Bar | Period comparison |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `portfolio` | DataPoint[] | — | Portfolio data |
| `benchmark` | DataPoint[] | — | Benchmark data |
| `period` | Period | `1y` | Time period |
| `showOutperformance` | Boolean | `true` | Show outperformance |

---

### Benchmark Comparison

**Purpose:** Compare against specific benchmark
**Usage:** Benchmark tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Multi-line | Benchmark comparison |
| Area | Relative performance |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `portfolio` | DataPoint[] | — | Portfolio data |
| `benchmark` | DataPoint[] | — | Benchmark data |
| `benchmarkName` | Text | — | Benchmark name |
| `period` | Period | `1y` | Time period |

---

### Safe To Invest

**Purpose:** Display safe to invest amount
**Usage:** Investment recommendations

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Donut | Allocation |
| Progress | Safe amount |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | Number | — | Safe to invest |
| `breakdown` | Breakdown[] | — | Amount breakdown |
| `confidence` | Number | — | AI confidence |

---

### Automation History

**Purpose:** Display automation execution history
**Usage:** Automation tracking

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Execution amounts |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | AutomationData[] | — | Execution data |
| `successRate` | Number | — | Success rate |
| `period` | Period | `1y` | Time period |

---

### Investment Timeline

**Purpose:** Display investment milestones
**Usage:** Investment history

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Line | Growth with events |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `events` | Event[] | — | Timeline events |
| `data` | DataPoint[] | — | Growth data |
| `period` | Period | `1y` | Time period |

---

### Market Exposure

**Purpose:** Display market exposure
**Usage:** Risk analysis

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Bar | Exposure by category |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `exposures` | Exposure[] | — | Exposure data |

---

### Portfolio Health

**Purpose:** Display portfolio health score
**Usage:** Health monitoring

#### Chart Type

| Variant | Use Case |
|---------|----------|
| Progress Ring | Health score |

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `score` | Number | — | Health score (0-100) |
| `breakdown` | HealthMetric[] | — | Health breakdown |
| `status` | Status | — | Health status |

---

## 05 Chart Interaction

Charts should feel native to iOS.

### Tap

**Purpose:** Select data point
**Usage:** All interactive charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on data point | Select point, show tooltip |
| Tap on empty area | Deselect |
| Tap on legend item | Toggle series visibility |

---

### Hover

**Purpose:** Highlight data point (Web only)
**Usage:** Web charts

#### Behavior

| Action | Result |
|--------|--------|
| Hover over data point | Highlight point, show tooltip |
| Hover over empty area | Hide tooltip |

---

### Long Press

**Purpose:** Show detailed tooltip
**Usage:** Mobile charts

#### Behavior

| Action | Result |
|--------|--------|
| Long press on point | Show detailed tooltip |
| Long press on empty area | Show crosshair |

---

### Keyboard

**Purpose:** Navigate chart data
**Usage:** Accessibility

#### Behavior

| Key | Action |
|-----|--------|
| Arrow Left | Previous data point |
| Arrow Right | Next data point |
| Arrow Up | Increase value |
| Arrow Down | Decrease value |
| Enter | Select data point |
| Escape | Deselect |
| Tab | Move to next element |

---

### Focus

**Purpose:** Indicate keyboard focus
**Usage:** Keyboard navigation

#### Behavior

| State | Visual Change |
|-------|---------------|
| Focused | Focus ring visible |
| Selected | Selection marker |

---

### Zoom

**Purpose:** Zoom into chart data
**Usage:** Detailed view

#### Behavior

| Action | Result |
|--------|--------|
| Pinch out | Zoom in |
| Pinch out | Zoom out |
| Double tap | Reset zoom |

---

### Pan

**Purpose:** Pan across chart data
**Usage:** Time navigation

#### Behavior

| Action | Result |
|--------|--------|
| Swipe left | Scroll to future |
| Swipe right | Scroll to past |
| Two-finger pan | Pan without zoom |

---

### Drag

**Purpose:** Drag to select range
**Usage:** Date range selection

#### Behavior

| Action | Result |
|--------|--------|
| Drag on axis | Select range |
| Drag handle | Adjust range |

---

### Selection

**Purpose:** Select data points
**Usage:** Multi-select charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on point | Select point |
| Tap on another point | Add to selection |
| Tap on selected point | Deselect |
| Tap on empty area | Clear selection |

---

### Compare

**Purpose:** Compare data series
**Usage:** Multi-series charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on legend item | Toggle series |
| Long press on series | Isolate series |
| Tap on comparison | Show comparison tooltip |

---

### Filter

**Purpose:** Filter chart data
**Usage:** Multi-category charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on filter chip | Toggle filter |
| Multiple filters | Show intersection |

---

### Time Change

**Purpose:** Change time period
**Usage:** Time-based charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on time selector | Change period |
| Swipe on time axis | Scroll time |
| Pinch on time axis | Zoom time |

---

### Animation

**Purpose:** Animate chart transitions
**Usage:** Data updates

#### Behavior

| Action | Result |
|--------|--------|
| Data update | Smooth transition |
| Period change | Crossfade |
| Selection | Morph transition |

---

### Crosshair

**Purpose:** Follow pointer position
**Usage:** Precise data reading

#### Behavior

| Action | Result |
|--------|--------|
| Move pointer | Crosshair follows |
| Crosshair shows | Exact values |

---

### Tooltip

**Purpose:** Show data point details
**Usage:** All interactive charts

#### Behavior

| Action | Result |
|--------|--------|
| Tap on point | Show tooltip |
| Move pointer | Tooltip follows |
| Tap elsewhere | Hide tooltip |

---

## 06 Chart Motion

Charts should animate only when useful.

### Loading

**Purpose:** Indicate chart loading
**Usage:** Initial load

#### Animation

| Property | Value |
|----------|-------|
| Type | Progressive reveal |
| Duration | 300ms |
| Easing | ease-out |
| Direction | Left to right |

---

### Progressive Draw

**Purpose:** Draw line/area progressively
**Usage:** Line and area charts

#### Animation

| Property | Value |
|----------|-------|
| Type | Path drawing |
| Duration | 500ms |
| Easing | ease-out |
| Direction | Left to right |

---

### Range Change

**Purpose:** Animate time range change
**Usage:** Time-based charts

#### Animation

| Property | Value |
|----------|-------|
| Type | Crossfade |
| Duration | 250ms |
| Easing | ease-in-out |

---

### Crossfade

**Purpose:** Fade between data series
**Usage:** Series switching

#### Animation

| Property | Value |
|----------|-------|
| Type | Opacity crossfade |
| Duration | 200ms |
| Easing | ease-in-out |

---

### Selection

**Purpose:** Animate selection state
**Usage:** Selection interactions

#### Animation

| Property | Value |
|----------|-------|
| Type | Scale + opacity |
| Duration | 150ms |
| Easing | ease-out |
| Scale | 1.0 → 1.2 → 1.0 |

---

### Morph

**Purpose:** Morph between chart types
**Usage:** Chart type switching

#### Animation

| Property | Value |
|----------|-------|
| Type | Shape morphing |
| Duration | 300ms |
| Easing | ease-in-out |

---

### Value Update

**Purpose:** Animate value changes
**Usage:** Real-time updates

#### Animation

| Property | Value |
|----------|-------|
| Type | Smooth interpolation |
| Duration | 200ms |
| Easing | ease-out |

---

### Comparison

**Purpose:** Animate comparison reveal
**Usage:** Benchmark comparison

#### Animation

| Property | Value |
|----------|-------|
| Type | Line drawing |
| Duration | 400ms |
| Easing | ease-out |
| Delay | 200ms |

---

### Never

- Bounce
- Playful animations
- Unnecessary motion
- Decorative animation

### Motion Principles

| Principle | Description |
|-----------|-------------|
| Purposeful | Animation explains data |
| Subtle | Animation doesn't distract |
| Quick | Animation completes fast |
| Smooth | Animation is fluid |

---

## 07 Accessibility

Charts must support:

### VoiceOver

**Purpose:** Support screen readers
**Usage:** All charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| `accessibilityLabel` | Describe chart purpose |
| `accessibilityValue` | Current value |
| `accessibilityHint` | How to interact |
| `role="img"` | Chart container |
| Data summary | Text alternative |

#### VoiceOver Template

```
[Chart type] chart showing [data description].
[Current value] as of [date].
[Change description].
[Number of data points] data points.
Swipe up for data table.
```

---

### High Contrast

**Purpose:** Support high contrast mode
**Usage:** All charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| High contrast colors | Use high contrast tokens |
| Thicker lines | Increase line thickness |
| Larger markers | Increase marker size |
| Clear labels | Ensure label visibility |

---

### Reduced Motion

**Purpose:** Respect motion preferences
**Usage:** All animated charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| `prefers-reduced-motion` | Check media query |
| Disable animations | Show final state |
| Instant transitions | No animation |
| Static crosshair | No animation |

---

### Dynamic Type

**Purpose:** Support larger text sizes
**Usage:** All chart text

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Scalable labels | Use Dynamic Type |
| Responsive layout | Adjust to text size |
| Minimum touch targets | Maintain 44px |
| Readable text | Ensure legibility |

---

### Large Labels

**Purpose:** Support larger labels
**Usage:** Charts with labels

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Minimum font size | 11px |
| Scalable labels | Support Dynamic Type |
| High contrast | Ensure readability |
| Clear hierarchy | Visual hierarchy |

---

### Keyboard Navigation

**Purpose:** Support keyboard navigation
**Usage:** All interactive charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Focus management | Logical focus order |
| Focus indicators | Visible focus ring |
| Keyboard shortcuts | Arrow keys, Enter, Escape |
| Tab navigation | Navigate between elements |

---

### Pattern Overlays

**Purpose:** Differentiate without color
**Usage:** Multi-series charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Pattern fills | Use patterns |
| Shape markers | Different shapes |
| Line styles | Solid, dashed, dotted |
| Labels | Always label series |

---

### Color Independent Communication

**Purpose:** Don't rely only on color
**Usage:** All charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Labels | Label all data |
| Icons | Use icons for meaning |
| Patterns | Use patterns |
| Text | Provide text alternatives |

---

### Text Alternatives

**Purpose:** Provide text alternatives
**Usage:** All charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Data table | Provide data table |
| Summary | Provide summary |
| Description | Describe chart |
| Key insights | Highlight insights |

---

### Summary Descriptions

**Purpose:** Provide chart summaries
**Usage:** All charts

#### Implementation

| Requirement | Implementation |
|-------------|----------------|
| Title | Clear, descriptive title |
| Subtitle | Additional context |
| Key insight | Highlight main takeaway |
| Data range | Specify time range |

---

## 08 Empty States

### No Data

**Purpose:** Display when no data exists
**Usage:** New accounts, empty states

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/chart-empty` | Empty icon |
| `title` | Text | `No data yet` | Empty title |
| `description` | Text | — | Empty description |
| `action` | Action | — | CTA action |

#### Token Mapping

```
Chart/Empty/Icon → color/text/disabled
Chart/Empty/Title → color/text/primary
Chart/Empty/Description → color/text/secondary
Chart/Empty/Action → color/action/primary
```

---

### Loading

**Purpose:** Display while loading
**Usage:** Initial load, refresh

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | Variant | `spinner` | Loading variant |
| `message` | Text | `Loading...` | Loading message |

---

### Error

**Purpose:** Display on error
**Usage:** Fetch errors, parsing errors

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/error` | Error icon |
| `title` | Text | `Something went wrong` | Error title |
| `description` | Text | — | Error description |
| `retry` | Action | — | Retry action |

---

### Disconnected

**Purpose:** Display when disconnected
**Usage:** Network errors

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/disconnected` | Disconnected icon |
| `title` | Text | `No connection` | Title |
| `description` | Text | — | Description |
| `retry` | Action | — | Retry action |

---

### Syncing

**Purpose:** Display while syncing
**Usage:** Data sync in progress

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/syncing` | Syncing icon |
| `title` | Text | `Syncing data` | Title |
| `description` | Text | — | Description |

---

### Permission Required

**Purpose:** Display when permission needed
**Usage:** Access denied

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/permission` | Permission icon |
| `title` | Text | `Permission required` | Title |
| `description` | Text | — | Description |
| `action` | Action | — | Grant permission action |

---

### Market Closed

**Purpose:** Display when market closed
**Usage:** Real-time charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/market-closed` | Closed icon |
| `title` | Text | `Market closed` | Title |
| `description` | Text | — | Description |
| `nextOpen` | Date | — | Next market open |

---

### No Investments

**Purpose:** Display when no investments
**Usage:** Investment charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/investment-empty` | Empty icon |
| `title` | Text | `No investments yet` | Title |
| `description` | Text | — | Description |
| `action` | Action | — | Start investing action |

---

### No Transactions

**Purpose:** Display when no transactions
**Usage:** Transaction charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/transaction-empty` | Empty icon |
| `title` | Text | `No transactions` | Title |
| `description` | Text | — | Description |

---

### No Bills

**Purpose:** Display when no bills
**Usage:** Bill charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/bill-empty` | Empty icon |
| `title` | Text | `No bills` | Title |
| `description` | Text | — | Description |
| `action` | Action | — | Add bill action |

---

### No Portfolio

**Purpose:** Display when no portfolio
**Usage:** Portfolio charts

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | IconName | `icon/portfolio-empty` | Empty icon |
| `title` | Text | `No portfolio` | Title |
| `description` | Text | — | Description |
| `action` | Action | — | Connect account action |

---

## 09 Loading States

### Skeleton Line Chart

**Purpose:** Display line chart skeleton
**Usage:** Loading state

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animated` | Boolean | `true` | Animation enabled |
| `lines` | Number | 1 | Number of lines |

---

### Skeleton Bar Chart

**Purpose:** Display bar chart skeleton
**Usage:** Loading state

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animated` | Boolean | `true` | Animation enabled |
| `bars` | Number | 6 | Number of bars |

---

### Skeleton Portfolio

**Purpose:** Display portfolio skeleton
**Usage:** Loading state

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animated` | Boolean | `true` | Animation enabled |
| `showChart` | Boolean | `true` | Show chart skeleton |
| `showMetrics` | Boolean | `true` | Show metrics skeleton |

---

### Skeleton Dashboard

**Purpose:** Display dashboard skeleton
**Usage:** Loading state

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animated` | Boolean | `true` | Animation enabled |
| `widgets` | Number | 4 | Number of widgets |

---

### Skeleton Timeline

**Purpose:** Display timeline skeleton
**Usage:** Loading state

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animated` | Boolean | `true` | Animation enabled |
| `items` | Number | 5 | Number of items |

---

## 10 Documentation

Every chart must include:

### Purpose

What does this chart communicate?

### When to Use

In what situations should this chart be used?

### When NOT to Use

When should this chart NOT be used?

### Required Data

What data is required to render this chart?

### Minimum Data

What is the minimum data required?

### Maximum Data

What is the maximum data before performance degrades?

### Variants

What variants are available?

### States

What states are supported?

### Accessibility

How is this chart accessible?

### Engineering Notes

What should engineers know?

### Performance Notes

What are the performance characteristics?

### Motion

What animations are used?

### Examples

Show example usage.

### Do

What should you do?

### Don't

What should you NOT do?

---

## Validation Checklist

Before finishing, review every visualization:

### Can this communicate with fewer visual elements?

- [ ] Remove unnecessary elements
- [ ] Simplify where possible
- [ ] Reduce cognitive load

### Can labels replace color?

- [ ] Add labels to data series
- [ ] Don't rely only on color
- [ ] Provide text alternatives

### Can spacing improve readability?

- [ ] Use appropriate padding
- [ ] Ensure adequate margins
- [ ] Provide breathing room

### Can interaction become simpler?

- [ ] Reduce interaction steps
- [ ] Make interactions intuitive
- [ ] Support multiple input methods

### Can motion explain data better?

- [ ] Use purposeful animation
- [ ] Don't animate for decoration
- [ ] Respect reduced motion

### Can accessibility improve?

- [ ] Add VoiceOver support
- [ ] Ensure keyboard navigation
- [ ] Provide text alternatives
- [ ] Support high contrast

---

## Summary

The Data Visualization System contains:

| Section | Components |
|---------|------------|
| 01 Chart Foundations | Grid, Axis, Padding, Margins, Density, Ticks, Labels, Legends, Titles, Subtitles, Annotations, Reference Lines, Goal Lines, Forecast Lines, Comparison Lines, Selection, Tooltip, Empty, Spacing |
| 02 Chart Colors | 20 semantic color tokens |
| 03 Chart Components | 24 components |
| 04 Financial Charts | 16 supported chart families |
| 05 Chart Interaction | 14 interaction types |
| 06 Chart Motion | 8 animation types |
| 07 Accessibility | 10 accessibility features |
| 08 Empty States | 11 empty states |
| 09 Loading States | 5 skeleton states |
| 10 Documentation | Documentation template |

### Key Principles

1. **Clarity** — Information is immediately understandable
2. **Accuracy** — Data is represented truthfully
3. **Accessibility** — Usable by everyone
4. **Consistency** — Similar data looks similar
5. **Minimal Cognitive Load** — No mental effort required
6. **Financial Storytelling** — Charts tell a story
7. **Responsive Design** — Works on all screen sizes
8. **Motion with Purpose** — Animation explains data

### Design References

- Apple Stocks
- Apple Health
- Mercury
- Wealthfront
- Stripe Dashboard

### Next Steps

1. **Chapter 7** — Figma Implementation Guide
2. **Chapter 8** — Engineering Implementation Guide
3. **Chapter 9** — Screen Patterns & Templates

---

**End of Data Visualization System**
