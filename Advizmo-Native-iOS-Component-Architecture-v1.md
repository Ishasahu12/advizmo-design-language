# Advizmo Native iOS Component Architecture

**Version 1.0**
**Created: June 2026**
**Depends on: Design Foundations v1, Token Architecture v1**

---

## Table of Contents

1. [Philosophy](#philosophy)
2. [Navigation](#navigation)
3. [Input Controls](#input-controls)
4. [Lists & Cells](#lists--cells)
5. [Overlays](#overlays)
6. [Feedback](#feedback)
7. [Platform Mapping](#platform-mapping)

---

## Philosophy

### Native First

Every generic interaction should feel native to iOS. Advizmo should only customize:

- Semantic colors
- Semantic typography
- Semantic spacing
- Financial behavior
- AI behavior

Never redesign native interaction patterns unnecessarily.

### Delete Rule

If a custom component replaces a native Apple component without providing meaningful product value, DELETE the custom component.

### What We Customize

| Layer | Native iOS | Advizmo Custom |
|-------|------------|----------------|
| **Colors** | System colors | Semantic tokens |
| **Typography** | SF Pro | Inter + IBM Plex Sans |
| **Spacing** | System spacing | 4pt grid tokens |
| **Interaction** | Native behavior | Preserved |
| **Navigation** | Native patterns | Preserved |
| **Feedback** | Native patterns | Preserved |

---

## Navigation

### Navigation Bar

**Purpose:** Top-level navigation with title and actions.

**Native iOS Behavior:**
- Inline title (compact)
- Large title (expanded on scroll)
- Leading/trailing actions
- Search integration

**Advizmo Customization:**
- Semantic colors only
- Inter for title
- No structural changes

**Tokens Used:**

```
NavBar/Background → color/surface
NavBar/Border → color/border
NavBar/Title → color/text/primary
NavBar/Title/Large → typography/display-m
NavBar/Title/Inline → typography/title-m
NavBar/Action → color/action/primary
NavBar/Action/Disabled → color/text/disabled
```

**SwiftUI:**

```swift
NavigationStack {
    List { }
        .navigationTitle("Portfolio")
        .navigationBarTitleDisplayMode(.large)
        .toolbar {
            ToolbarItem(placement: .navigationBarTrailing) {
                Button("Add") { }
            }
        }
}
```

**React Navigation:**

```tsx
<Stack.Screen
  name="Portfolio"
  options={{
    headerLargeTitle: true,
    headerRight: () => <Button onPress={add}>Add</Button>,
  }}
/>
```

---

### Tab Bar

**Purpose:** Bottom navigation between major sections.

**Native iOS Behavior:**
- 3–5 tabs maximum
- Icons + labels
- Badge support
- System haptics on tap

**Advizmo Customization:**
- Semantic colors only
- Badge colors (error for notifications)

**Tokens Used:**

```
TabBar/Background → color/surface
TabBar/Border → color/border
TabBar/Icon/Inactive → color/text/tertiary
TabBar/Icon/Active → color/action/primary
TabBar/Label/Inactive → color/text/tertiary
TabBar/Label/Active → color/action/primary
TabBar/Badge/Background → color/feedback/error
TabBar/Badge/Text → color/text/inverse
```

**SwiftUI:**

```swift
TabView {
    DashboardView()
        .tabItem {
            Label("Dashboard", systemImage: "chart.pie")
        }
    AccountsView()
        .tabItem {
            Label("Accounts", systemImage: "building.2")
        }
    TransfersView()
        .tabItem {
            Label("Transfers", systemImage: "arrow.left.arrow.right")
        }
    InsightsView()
        .tabItem {
            Label("Insights", systemImage: "lightbulb")
        }
}
```

---

### Toolbar

**Purpose:** Context-specific actions within a view.

**Native iOS Behavior:**
- Leading/trailing items
- Bottom bar placement
- Flexible space

**Advizmo Customization:**
- Semantic colors only

**Tokens Used:**

```
Toolbar/Background → color/surface
Toolbar/Border → color/border
Toolbar/Action → color/action/primary
```

---

### Search Bar

**Purpose:** Search content within the current context.

**Native iOS Behavior:**
- Prominent display
- Cancel button
- Clear button
- Scope buttons

**Advizmo Customization:**
- Semantic colors only
- Placeholder text

**Tokens Used:**

```
Search/Background → color/surface/secondary
Search/Border → transparent
Search/Border/Focused → color/action/primary
Search/Text → color/text/primary
Search/Placeholder → color/text/disabled
Search/Icon → color/text/tertiary
Search/Cancel → color/action/primary
```

**SwiftUI:**

```swift
.searchable(text: $searchText, prompt: "Search transactions")
```

---

## Input Controls

### Toggle (Switch)

**Purpose:** Binary on/off setting.

**Native iOS Behavior:**
- Haptic feedback on toggle
- Smooth animation
- Accessible via VoiceOver

**Advizmo Customization:**
- Semantic colors for on/off states
- No structural changes

**Tokens Used:**

```
Toggle/Track/Off → color/surface/disabled
Toggle/Track/On → color/action/primary
Toggle/Thumb → white
Toggle/Label → color/text/primary
Toggle/Description → color/text/tertiary
```

**SwiftUI:**

```swift
Toggle("Dark Mode", is: $darkMode)
```

---

### Segmented Control

**Purpose:** Switch between 2–5 options.

**Native iOS Behavior:**
- Sliding indicator
- Haptic feedback
- Keyboard navigation

**Advizmo Customization:**
- Semantic colors only
- No structural changes

**Tokens Used:**

```
SegmentedControl/Background → color/surface/secondary
SegmentedControl/Indicator → color/surface
SegmentedControl/Text → color/text/secondary
SegmentedControl/Text/Selected → color/text/primary
```

**SwiftUI:**

```swift
Picker("View", selection: $view) {
    Text("Daily").tag(0)
    Text("Monthly").tag(1)
    Text("Yearly").tag(2)
}
.pickerStyle(.segmented)
```

---

### Date Picker

**Purpose:** Select a date.

**Native iOS Behavior:**
- Compact (inline)
- Wheels (scroll)
- Graphical (calendar)

**Advizmo Customization:**
- Semantic colors only
- No structural changes

**Tokens Used:**

```
DatePicker/Background → color/surface
DatePicker/Text → color/text/primary
DatePicker/Selection → color/action/primary
DatePicker/Today → color/action/primary-surface
```

**SwiftUI:**

```swift
DatePicker("Date", selection: $date, displayedComponents: .date)
```

---

### Time Picker

**Purpose:** Select a time.

**Native iOS Behavior:**
- Wheels (scroll)
- Compact (inline)

**Advizmo Customization:**
- Semantic colors only

**SwiftUI:**

```swift
DatePicker("Time", selection: $time, displayedComponents: .hourAndMinute)
```

---

### Wheel Picker

**Purpose:** Select from a list of options.

**Native iOS Behavior:**
- Scrollable wheels
- Haptic feedback
- Multi-component support

**Advizmo Customization:**
- Semantic colors only

**SwiftUI:**

```swift
Picker("Account", selection: $account) {
    Text("Checking").tag(0)
    Text("Savings").tag(1)
}
.pickerStyle(.wheel)
```

---

## Lists & Cells

### Inset Grouped List

**Purpose:** Grouped content with rounded corners.

**Native iOS Behavior:**
- Inset from edges
- Rounded corners
- Section headers/footers

**Advizmo Customization:**
- Semantic colors only
- Inter for text

**Tokens Used:**

```
List/Background → color/surface/secondary
List/Section/Header → color/text/tertiary
List/Section/Footer → color/text/tertiary
List/Cell/Background → color/surface
List/Cell/Background/Pressed → color/surface/raised
List/Cell/Border → color/border
```

**SwiftUI:**

```swift
List {
    Section("Account") {
        Text("Checking ••4521")
        Text("Savings ••7892")
    }
}
.listStyle(.insetGrouped)
```

---

### Disclosure Row

**Purpose:** Navigate to detail or expand content.

**Native iOS Behavior:**
- Chevron indicator
- Disclosure chevron
- Accessory view

**Advizmo Customization:**
- Semantic colors only

**Tokens Used:**

```
DisclosureRow/Icon → color/text/tertiary
DisclosureRow/Label → color/text/primary
DisclosureRow/Value → color/text/secondary
DisclosureRow/Chevron → color/text/tertiary
```

**SwiftUI:**

```swift
NavigationLink("Account Details") {
    AccountDetailView()
}
```

---

### Swipe Actions

**Purpose:** Quick actions on list items.

**Native iOS Behavior:**
- Leading/trailing actions
- Destructive confirmation
- Haptic feedback

**Advizmo Customization:**
- Semantic colors for action backgrounds

**Tokens Used:**

```
SwipeAction/Delete/Background → color/feedback/error
SwipeAction/Archive/Background → color/feedback/success
SwipeAction/Edit/Background → color/action/primary
```

**SwiftUI:**

```swift
List {
    ForEach(transactions) { transaction in
        Text(transaction.name)
            .swipeActions(edge: .trailing) {
                Button("Delete", role: .destructive) { }
                Button("Archive") { }
            }
    }
}
```

---

## Overlays

### Bottom Sheet

**Purpose:** Modal content from bottom.

**Native iOS Behavior:**
- Drag to dismiss
- Detents (small, medium, large)
- Dimmed background

**Advizmo Customization:**
- Semantic colors only

**Tokens Used:**

```
Sheet/Background → color/surface
Sheet/Handle → color/border
Sheet/Shadow → elevation/floating
Sheet/Radius → radius/md (top only)
```

**SwiftUI:**

```swift
.sheet(isPresented: $showSheet) {
    ContentView()
        .presentationDetents([.medium, .large])
}
```

---

### Alert

**Purpose:** Critical information requiring acknowledgment.

**Native iOS Behavior:**
- Title + message
- 1–2 actions
- Destructive action styling

**Advizmo Customization:**
- Semantic colors only
- Inter for text

**Tokens Used:**

```
Alert/Background → color/surface
Alert/Title → color/text/primary
Alert/Message → color/text/secondary
Alert/Action/Primary → color/action/primary
Alert/Action/Destructive → color/feedback/error
```

**SwiftUI:**

```swift
.alert("Delete Account?", isPresented: $showAlert) {
    Button("Cancel", role: .cancel) { }
    Button("Delete", role: .destructive) { }
} message: {
    Text("This action cannot be undone.")
}
```

---

### Confirmation Dialog

**Purpose:** Choose from a set of actions.

**Native iOS Behavior:**
- Action buttons
- Cancel button
- Destructive action styling

**Advizmo Customization:**
- Semantic colors only

**SwiftUI:**

```swift
.confirmationDialog("Share", isPresented: $showDialog) {
    Button("Email") { }
    Button("Message") { }
    Button("Cancel", role: .cancel) { }
}
```

---

### Context Menu

**Purpose:** Long-press quick actions.

**Native iOS Behavior:**
- Preview (optional)
- Action list
- Haptic feedback

**Advizmo Customization:**
- Semantic colors only

**SwiftUI:**

```swift
.contextMenu {
    Button("Copy") { }
    Button("Share") { }
    Button("Delete", role: .destructive) { }
}
```

---

### Menu

**Purpose:** Dropdown actions.

**Native iOS Behavior:**
- Nested menus
- Keyboard shortcuts
- Icons

**Advizmo Customization:**
- Semantic colors only

**SwiftUI:**

```swift
Menu("Actions") {
    Button("Edit") { }
    Button("Duplicate") { }
    Divider()
    Button("Delete", role: .destructive) { }
}
```

---

### Popover

**Purpose:** Inline contextual content.

**Native iOS Behavior:**
- Arrow pointing to source
- Tap to dismiss
- Dynamic sizing

**Advizmo Customization:**
- Semantic colors only

**Tokens Used:**

```
Popover/Background → color/surface
Popover/Shadow → elevation/floating
Popover/Arrow → color/surface
```

**SwiftUI:**

```swift
.popover(isPresented: $showPopover) {
    ContentView()
}
```

---

## Feedback

### Progress View

**Purpose:** Show determinate or indeterminate progress.

**Native iOS Behavior:**
- Determinate (bar)
- Indeterminate (spinner)
- Linear and circular

**Advizmo Customization:**
- Semantic colors for progress track and fill

**Tokens Used:**

```
Progress/Track → color/surface/secondary
Progress/Fill → color/action/primary
Progress/Fill/Success → color/feedback/success
Progress/Fill/Warning → color/feedback/warning
Progress/Fill/Error → color/feedback/error
```

**SwiftUI:**

```swift
ProgressView(value: 0.77)
    .tint(.actionPrimary)
```

---

### Activity Indicator

**Purpose:** Indeterminate loading.

**Native iOS Behavior:**
- Spinning animation
- System style
- Haptic feedback (optional)

**Advizmo Customization:**
- Semantic color for tint

**Tokens Used:**

```
ActivityIndicator/Color → color/action/primary
ActivityIndicator/Color/Secondary → color/text/tertiary
```

**SwiftUI:**

```swift
ProgressView()
    .tint(.actionPrimary)
```

---

### Pull to Refresh

**Purpose:** Refresh content.

**Native iOS Behavior:**
- Pull down gesture
- Spinner animation
- Haptic feedback

**Advizmo Customization:**
- Semantic colors only

**Tokens Used:**

```
PullRefresh/Spinner → color/action/primary
PullRefresh/Background → color/surface
```

**SwiftUI:**

```swift
.refreshable {
    await loadData()
}
```

---

## Platform Mapping

| Native iOS | SwiftUI | React Native | Jetpack Compose |
|------------|---------|--------------|-----------------|
| NavigationBar | `.navigationTitle` | `@react-navigation/native` | `TopAppBar` |
| TabBar | `TabView` | `@react-navigation/bottom-tabs` | `BottomNavigation` |
| SearchBar | `.searchable` | `react-native-search-bar` | `SearchBar` |
| Toggle | `Toggle` | `react-native-switch` | `Switch` |
| SegmentedControl | `.pickerStyle(.segmented)` | `@react-native-picker/picker` | `SegmentedButton` |
| DatePicker | `DatePicker` | `@react-native-community/datetimepicker` | `DatePicker` |
| List | `List` | `FlatList` | `LazyColumn` |
| BottomSheet | `.sheet` | `@gorhom/bottom-sheet` | `ModalBottomSheet` |
| Alert | `.alert` | `react-native-alert` | `AlertDialog` |
| ProgressView | `ProgressView` | `react-native-progress` | `LinearProgressIndicator` |
| ActivityIndicator | `ProgressView` | `react-native-activity-indicator` | `CircularProgressIndicator` |

---

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| VoiceOver | All native controls announced correctly |
| Dynamic Type | Text scales with system settings |
| Reduce Motion | Animations disabled |
| High Contrast | System colors adapt |
| Switch Control | All controls reachable |
| RTL | Layout mirrors |

---

## Quality Check

Every native component must:
- ✓ Use native iOS patterns
- ✓ Use semantic tokens only
- ✓ Use semantic typography
- ✓ Use semantic spacing
- ✓ Support accessibility
- ✓ Support Dynamic Type
- ✓ Support VoiceOver
- ✓ Support Reduce Motion
- ✓ Support platform mapping
- ✓ Avoid unnecessary customization

---

**End of Chapter**
