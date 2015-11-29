----
## Use Cases

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
## Plan of fxos-settings package architecture:

Stage 1. package panel related code (html, js, css, test(optional)) in a single folder, with a manifest to describe the package id and the dependency
  - as fxos-settings-panel package
  - put reusable module set in a folder (as fxos-module), ex: wifi modules for FTU reuse
  - definition file syntax might looks like package.json for npm: (name: 'fxos-settings-bluetooth', dependency: ['fxos-module-bluetooth'], keyword: ['fxos-settings'])
  - move rest of nonAMD modules to AMD for better package

Stage 2. Generate replacable panel sets for each distribution
  - use [preprocess](https://github.com/jsoverson/preprocess) (require node build script support)
  - register panels order within a declaration file, composite index.html and root.html at build time
  - make the declaration file customizable, allow customization in build time via provide different panel sets
  - Dynamically load shared and modules in index.html based on panels' manifests (optional)

Stage 3. allow `npm install` and replace fxos-settings panels in declaration files.
  - register panel packages to npm


Finally, we got architecture:

* Settings bundle (Gaia Settings app)
  - include core, shared, fxos-components, and build-in fxos-module & fxos-settings-panel packages
* vendor panel-packages allocated in their distribution
  - included and placed in settings list during build-time
