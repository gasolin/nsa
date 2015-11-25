Plan for settings package architecture:

To fit connected device's need for Settings, we need fulfill several requirements:

1. As a connected device maker, I'd like easily add new panel to settings (+ panel)
2. As a connected device maker, I'd like easily add items from existing panel (+ item in panel)
3. As a connected device maker, I'd like easily remove panel from settings (- panel)
4. As a connected device maker, I'd like easily remove items from existing panel (- item in panel)

Milestone
1. package panel related code(html, js, css, test(optional)) in a single folder, with a manifest to describe the requirements
2. Stack up
  - registering panels order within a build file, composite index.html and root.html at build time
