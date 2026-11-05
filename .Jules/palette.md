## 2024-05-18 - Missing ARIA Labels on Icon-Only Interactive Elements
**Learning:** Found a recurring pattern in the React app where interactive elements (button, motion.button, motion.a) wrapping only icons (Mail, Volume, Facebook) lack aria-label and title attributes, making them inaccessible to screen readers and difficult to understand without context.
**Action:** Always verify that buttons or links containing only icons have descriptive aria-label and title attributes added.
