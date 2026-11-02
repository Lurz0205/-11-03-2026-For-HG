## 2024-05-18 - Tooltip Accessibility for Icon-only Interactive Elements
**Learning:** In Vite/React apps, icon-only buttons often lack accessible names for screen readers and miss visual hover hints for sighted users who may not understand the icon. `framer-motion` elements (e.g., `<motion.button>`) require these standard HTML attributes to be fully accessible.
**Action:** Always add both `aria-label` (for screen readers) and `title` (for native tooltips for mouse users) to icon-only buttons or links to provide comprehensive context.
