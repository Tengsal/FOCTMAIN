# University Document Management System - Design Guidelines

## Design Approach

**Selected Approach:** Design System (Material Design 3 inspired)
**Justification:** This is a utility-focused, information-dense application where efficiency, learnability, and consistency are paramount. The multi-role dashboard requires clear visual hierarchy and familiar interaction patterns.

## Core Design Elements

### Typography Hierarchy

**Font Family:** Inter (Google Fonts) for all text
- **Page Titles:** 2xl font-weight-700 (Dashboard headers, page names)
- **Section Headers:** xl font-weight-600 (Card titles, panel headers)
- **Body Text:** base font-weight-400 (Descriptions, document names)
- **Labels & Metadata:** sm font-weight-500 (Status badges, timestamps, file info)
- **Helper Text:** xs font-weight-400 (Hints, secondary information)

### Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, and 8 consistently
- **Component padding:** p-4 for cards, p-6 for panels, p-8 for page containers
- **Vertical spacing:** space-y-4 for lists, space-y-6 for sections, space-y-8 for major page divisions
- **Grid gaps:** gap-4 for tight grids, gap-6 for dashboard cards
- **Margins:** mb-6 for section separation, mb-8 for major divisions

**Container Strategy:**
- Max width: max-w-7xl for main content areas
- Sidebar: Fixed 256px (desktop), collapsible overlay (mobile)
- Content padding: px-4 (mobile), px-6 (tablet), px-8 (desktop)

### Component Library

**Dashboard Cards:**
- Rounded corners: rounded-lg
- Border treatment: border with subtle shadow (shadow-sm)
- Hover state: subtle shadow increase (shadow-md transition)
- Header with icon + title (text-xl font-semibold)
- Body content with appropriate spacing
- Footer actions when needed

**Navigation:**
- **Navbar:** Fixed top, h-16, contains logo, search, user profile, notifications
- **Sidebar:** Role-based navigation with icons + labels, grouped by function
- **Mobile:** Hamburger menu triggering slide-in sidebar overlay
- Active state: Subtle background highlight with accent border-l-4

**Quick Action Buttons:**
- Primary actions: Filled buttons with rounded-md, px-6 py-3
- Secondary actions: Outlined buttons with border-2
- Icon buttons: Square (h-10 w-10) with centered icons
- Group related actions in button groups with gap-2

**Document Lists:**
- Table view (desktop): Sortable columns for name, type, date, status, actions
- Card view (mobile): Stacked cards with document icon, name, metadata row
- Document icons: Use Heroicons document variants
- Status badges: Rounded-full px-3 py-1 with role-appropriate styling

**Role-Specific Sections:**
- Student Dashboard: My Documents grid, Recent Submissions list, Quick Upload card
- Faculty Dashboard: Documents to Review queue, My Classes grid, Approval Actions panel
- Admin Dashboard: System Overview stats (4-column grid), User Management table, Activity Log

**Forms & Inputs:**
- Label above input pattern with mb-2 spacing
- Input fields: rounded-md border px-4 py-2.5 with focus ring
- File upload: Drag-drop zone with dashed border-2 and centered content
- Validation: Error messages in text-sm below inputs

**Notifications (react-hot-toast):**
- Position: top-right
- Duration: 3000ms (success), 5000ms (error)
- Include icons: checkmark (success), alert (error), info circle (info)

**Data Tables:**
- Striped rows for better readability
- Sticky header on scroll
- Row hover: subtle background change
- Action column: Icon buttons (edit, delete, download) with gap-2
- Empty state: Centered message with icon and helper text

**Modals & Overlays:**
- Backdrop: Semi-transparent overlay (bg-black/50)
- Modal: Centered, max-w-2xl, rounded-lg with p-6
- Header: Title + close button (absolute top-right)
- Footer: Action buttons aligned right with gap-3

### Responsive Breakpoints

- **Mobile (< 640px):** Single column, collapsible sidebar, stacked cards, simplified tables
- **Tablet (640px - 1024px):** 2-column grids, visible sidebar (optional), condensed tables
- **Desktop (> 1024px):** Multi-column grids, permanent sidebar, full tables, expanded layouts

### Accessibility

- All interactive elements: Focus visible with ring-2 and offset
- Icon-only buttons: aria-label attributes
- Form inputs: Associated labels with htmlFor
- Color contrast: WCAG AA minimum on all text
- Keyboard navigation: Tab order follows visual hierarchy
- Screen reader: Semantic HTML (nav, main, aside, article)

### Visual Rhythm

- Card sections use consistent py-6 spacing
- List items: py-3 for comfortable touch targets
- Section dividers: border-t with mt-8 mb-6
- Page top spacing: pt-8 for breathing room

### Animations

**Minimal, Purposeful Only:**
- Sidebar slide: transition-transform duration-300
- Toast notifications: slide-in from top-right
- Dropdown menus: fade-in with scale (duration-200)
- No scroll animations or decorative effects

## Images

**Document Type Icons:** Use Heroicons for document, folder, upload, download icons throughout the interface
**User Avatars:** Circular (rounded-full), 8x8 (navbar), 12x12 (profile pages)
**Empty States:** Illustrative icons (oversized Heroicons) for empty document lists, no submissions states
**No Hero Images:** This is a dashboard application - prioritize information density over visual imagery