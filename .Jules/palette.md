## 2024-10-28 - Missing ARIA Labels on Icon-only Elements
**Learning:** Found an accessibility issue pattern specific to this app where multiple interactive, icon-only components (music toggle, message bottle, social links) completely lacked ARIA labels and title attributes, rendering them invisible to screen readers and difficult to understand for some users.
**Action:** Added aria-label and title attributes using Vietnamese (the app's primary UI language) to all icon-only interactive elements to ensure accessibility and usability.
