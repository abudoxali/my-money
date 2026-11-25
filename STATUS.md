# STATUS — ABUD Wallet

2026-11-25 — v0.1 local-first foundation.

Implemented: Arabic RTL responsive app; encrypted local vault, lock and encrypted backup/import; financial accounts, exact EGP minor units, income/expense/transfer CRUD (transactions), reports by month, budgets, savings goals, deterministic insights, PWA shell, #add shortcut entry.

Verified in authoring runtime: 12 ledger assertions (integer conversion, balances, transfers, reporting, validation). Browser/device/service-worker integration, encryption round-trip and GitHub Pages deployment have not yet been verified. No physical iPhone access.

Remaining: production deployment verification, independent security and UX acceptance, server-backed sync/auth/API, direct Apple Shortcuts integration, English localization, multi-currency, richer recurring expenses and receivables. This is a local-only functional first release, not the previously proposed full PostgreSQL architecture. No percentage assigned without an accepted denominator.

Follow-up verification: app.js, ledger.js and sw.js parsed successfully in the authoring JavaScript runtime; two Arabic/Persian numeral conversion checks passed. GitHub Pages URL could not be accessed by the available web tool; live publishing is not verified. Fixed hidden form fields and improved Arabic numeric input.

2026-11-25 — v0.2: simplified login using fixed PIN 0000, removed private-finance branding from login, legacy password migration and backup restore re-encryption, numeric keyboard on new PIN vaults, cache version bump. This publicly known PIN offers convenience only, not meaningful confidentiality against access to the vault. JavaScript syntax verified; browser/crypto migration acceptance remains untested.

2026-11-25 — v0.3 iOS-inspired interface: custom four-digit keypad with automatic unlock submission, SVG tab bar, quick expense/income/transfer buttons, segmented transaction editor, amount presets, light/dark/system appearance, grouped settings, balance masking on dashboard, weekly cash-flow charts, daily/average expenses, transaction period filtering. Existing vault key and schema preserved. Verified 17 runtime assertions including analytics and generated HTML for seven screens using a mock DOM; JS syntax checked. Not a real browser/device or cryptographic integration test. No native iOS app, live Pages deployment not verified. PIN remains a convenience lock.

2026-11-25 — v0.4: financial account editing with opening-balance clarification, offline indicator, versioned asset URLs and atomic cached app shell. Three mock-DOM render assertions and JS syntax checks passed. Live site could not be accessed for verification; offline behavior and iOS installation remain device-test pending. No vault format or PIN change.
