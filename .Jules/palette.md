## 2025-03-01 - Missing ARIA labels on Icon-only Buttons
**Learning:** Icon-only interactive elements (music toggle, message bottle, Facebook link) lack text alternatives, causing an accessibility barrier for screen reader users and missing tooltips for mouse users. Keyboard navigation is also impaired without clear focus states.
**Action:** Always add `aria-label` (and optionally `title` for tooltip fallback) to icon-only buttons/links, and ensure explicit `focus-visible` styles are included for keyboard accessibility.
