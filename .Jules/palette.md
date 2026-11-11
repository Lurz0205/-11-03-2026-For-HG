## 2026-11-11 - Missing ARIA Labels for Icon-Only Buttons
**Learning:** Found that multiple icon-only interactive elements (music toggle, floating mail bottle, social links) lack `aria-label` and `title` attributes, making them inaccessible to screen readers and lacking tooltips for mouse users.
**Action:** Always add semantic `aria-label` and hover `title` attributes to icon-only interactive elements to ensure accessibility and better UX context.
