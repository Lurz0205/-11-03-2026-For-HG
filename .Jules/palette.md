## 2026-10-17 - Accessibility of Icon-Only Buttons
**Learning:** Icon-only interactive elements in the application (like the 'Message in a Bottle', 'Toggle Music', and 'Facebook' buttons) lack ARIA labels, title attributes, and clear keyboard focus indicators. This makes them inaccessible to screen readers and difficult to navigate via keyboard.
**Action:** Always add descriptive `aria-label` and `title` attributes to buttons and links that contain only icons. Furthermore, ensure interactive elements have a clear `focus-visible` outline to support keyboard navigation.
