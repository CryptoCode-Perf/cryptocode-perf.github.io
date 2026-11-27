# CryptoCode-Perf

The fastest hash implementations we currently offer, with performance comparisons,
source downloads and reproducible verification.

The public table presents implementations without development-input or provenance
categories. Each implementation is distributed as an independent package.
Measurement data, KAT verification records and download archives are retained.

Performance depends on processor, compiler options and message length. Preserve
measurement units: TSC ticks/B is not core cycles/B; hardware-counter provenance
for cpB* requires review. GM× compares against official optimized implementations
across eight message lengths.

When regenerating index.html, preserve this presentation: no Source column or
REF+KAT-only badges. Keep measurement qualifications and verification instructions.
Detailed records remain in data/cap/ and the downloadable archives.
