# CryptoCode-Perf Hash Optimization / CAP

Static instance-delivery website: `index.html`, `styles.css`, `app.js`,
`data/instances.json`, and downloadable archives under `instances/`.

CAP records are integrated per instance only after correctness checks and a
same-environment comparison with the previous site implementation and official
OPT. `REF+KAT-only` identifies the audited generation-input contract; it does
not assert that the model never encountered the algorithm during pretraining.

The table distinguishes legacy cpB values, whose hardware-counter provenance
requires review, from CAP TSC ticks/B. TSC ticks are not core CPU cycles.
Each CAP record links to `data/cap/<official-instance-name>.json` and its ZIP
contains source, a rebuild script, KAT verification, and audit evidence.

The site is generated. Maintainers should use the isolated preview and
single-writer integration workflow before synchronizing or publishing; direct
manual table edits may be overwritten on a future build.
