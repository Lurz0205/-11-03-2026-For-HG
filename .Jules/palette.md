## 2026-10-25 - Missing Accessibility Attributes on Icon-Only Controls
**Learning:** Icon-only interactive elements in React apps often overlook critical accessibility attributes like `aria-label`, `title`, and explicit keyboard focus indicators (e.g., `focus-visible`), severely impacting screen reader and keyboard navigation users.
**Action:** Systematically verify and apply `aria-label`, `title`, and explicit `focus-visible` utility classes (e.g., `focus-visible:ring-2`) to all icon-only buttons and links during UX enhancements.
