## 2024-05-24 - Missing ARIA Labels on Icon Buttons
**Learning:** The application uses several icon-only interactive elements (`motion.button`, `button`, `motion.a`) without proper accessible names. This creates an accessibility barrier for screen reader users and users who rely on tooltips.
**Action:** Add `aria-label` and `title` attributes to all icon-only interactive elements to ensure they are accessible.
