## 2025-02-28 - Icon-Only Buttons Lacking Accessibility Labels
**Learning:** Found multiple icon-only interactive elements (music toggle, message bottle, facebook link) lacking `aria-label` and `title` attributes, making them inaccessible to screen readers and difficult to understand without tooltips.
**Action:** Always verify that interactive elements, especially those containing only icons (like `lucide-react` icons), have explicit `aria-label` and `title` attributes for improved accessibility and UX.
