Plan for settings package architecture:

To fit connected device's need for Settings, we need fulfill several use cases:

1. As a connected device maker, I'd like easily add new panel to settings (+ panel)
2. As a connected device maker, I'd like easily remove panel from settings (- panel)
3. As a connected device maker, I'd like easily add items to existing panel (+ item in panel)
4. As a connected device maker, I'd like easily remove items from existing panel (- item in panel)
5. As a connected device maker, I'd like change Settings look and feel to fit my device (theme)
6. As a connected device maker, I'd like change Settings UI interaction to fit my device (DifferentUX)

----
## Treatment

(for usecase 3~4) use build flag by preprocess (to be replaced by Settings package architecture)

(for usecase 1~4) Settings package architecture

(for usecase 5) introduce more fxos-component into settings, so maker could maintain consistent look and feel

(for usecase 6) NGA FE/BE? Or fork settings-core and reuse some Settings package architecture

----

Plan of Settings package architecture:

1. package panel related code(html, js, css, test(optional)) in a single folder, with a manifest to describe the package id and the dependency
  - (ex: name: 'fxos-settings-bluetooth', dependency: ['fxos-module-bluetooth'])

2. Generate replacable panel sets for each distribution
  - use [preprocess](https://github.com/jsoverson/preprocess) (require node build script support)
  - register panels order within a build file, composite index.html and root.html at build time
  - allow customize settings list via provide different panel sets

3. Refactor index.html, dynamically load shared and modules based on panels' manifests (optional)
