## 2025-02-28 - Missing ARIA labels and focus states on icon-only buttons
**Learning:** Icon-only interactive elements (like volume toggles, social links, and floating action buttons) in highly visual React applications often lack screen reader context (`aria-label`) and visible focus states for keyboard users.
**Action:** Always add `aria-label`, `title`, and `focus-visible` utility classes to icon-only buttons and links to ensure they are accessible to both screen readers and keyboard navigators.
