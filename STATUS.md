# STATUS — ABUD Wallet

2026-11-25 — v0.1 local-first foundation.

Implemented: Arabic RTL responsive app; encrypted local vault, lock and encrypted backup/import; financial accounts, exact EGP minor units, income/expense/transfer CRUD (transactions), reports by month, budgets, savings goals, deterministic insights, PWA shell, #add shortcut entry.

Verified in authoring runtime: 12 ledger assertions (integer conversion, balances, transfers, reporting, validation). Browser/device/service-worker integration, encryption round-trip and GitHub Pages deployment have not yet been verified. No physical iPhone access.

Remaining: production deployment verification, independent security and UX acceptance, server-backed sync/auth/API, direct Apple Shortcuts integration, English localization, multi-currency, richer recurring expenses and receivables. This is a local-only functional first release, not the previously proposed full PostgreSQL architecture. No percentage assigned without an accepted denominator.

Follow-up verification: app.js, ledger.js and sw.js parsed successfully in the authoring JavaScript runtime; two Arabic/Persian numeral conversion checks passed. GitHub Pages URL could not be accessed by the available web tool; live publishing is not verified. Fixed hidden form fields and improved Arabic numeric input.

2026-11-25 — v0.2: simplified login using fixed PIN 0000, removed private-finance branding from login, legacy password migration and backup restore re-encryption, numeric keyboard on new PIN vaults, cache version bump. This publicly known PIN offers convenience only, not meaningful confidentiality against access to the vault. JavaScript syntax verified; browser/crypto migration acceptance remains untested.

2026-11-25 — v0.3 iOS-inspired interface: custom four-digit keypad with automatic unlock submission, SVG tab bar, quick expense/income/transfer buttons, segmented transaction editor, amount presets, light/dark/system appearance, grouped settings, balance masking on dashboard, weekly cash-flow charts, daily/average expenses, transaction period filtering. Existing vault key and schema preserved. Verified 17 runtime assertions including analytics and generated HTML for seven screens using a mock DOM; JS syntax checked. Not a real browser/device or cryptographic integration test. No native iOS app, live Pages deployment not verified. PIN remains a convenience lock.

2026-11-25 — v0.4: financial account editing with opening-balance clarification, offline indicator, versioned asset URLs and atomic cached app shell. Three mock-DOM render assertions and JS syntax checks passed. Live site could not be accessed for verification; offline behavior and iOS installation remain device-test pending. No vault format or PIN change.

2026-11-26 — v0.5 transaction-first redesign. Removed account management from all visible navigation and entry; kept legacy ledger account records internally for compatibility. New movements need no setup. Added transaction title, source, destination, payment method, expanded categories; cash withdrawals/internal transfers are neutral. Added recurring payments with manual confirmation and due-date advance, paused/active state, monthly-equivalent commitments; source/destination reports, personal/business spending and subscription totals. Existing vault version and PIN preserved. 26 runtime assertions passed (ledger, old data normalization, mock DOM screens). Real browser, iPhone and live deployment not verified. No bank/payment gateway integration; all entries manual.

2026-11-26 — v0.5.1: optional opening balance in settings (excluded from monthly income), destination/merchant spending report. Four additional finance assertions and syntax checks passed; live/device checks still pending.

2026-11-26 — v1.1-preview local feature batch: improved mobile controls, editable income allocation suggestions and reserved cash, 30-day forecast and heuristic health indicator, obligations/receivables with linked settlement, in-app due alerts, custom categories, Arabic/English-keyword deterministic text batch parsing with review, receipt text extraction and optional browser TextDetector, #smart shortcut, CSV and print/PDF, manual backup sharing. 32 runtime assertions and script syntax checks passed; mocked render coverage only, no browser or hardware test. No actual cross-device live sync, remote AI, or guaranteed iPhone image OCR. No push notifications. Fixed PIN remains convenience lock. Not final v1.1 acceptance.

2026-11-26 — follow-up: reversible latest recurring payment with schedule linkage, stricter decimal parsing, editable smart capture category/date/scope. Six additional runtime assertions and syntax checks passed. Legacy subscription payments without schedule metadata remain guarded.

2026-11-26 — v1.1 RC: optional self-hosted sync service and browser client (separate strong passphrase, ciphertext-only snapshots, revision conflict checks, explicit push/pull, previous local snapshot export); optional self-hosted Tesseract OCR after photo consent; local question/answer assistant; five additional mock-render checks. Service is not deployed. End-to-end crypto/network/OCR and physical iPhone acceptance are not yet verified. No background sync, external AI or real push notification service. Do not mark final acceptance.

2026-11-26 — added optimistic local-vault write check, regression tests for encrypted sync and HTTP auth/revisions, and Playwright mobile viewport workflow. CI execution must be confirmed separately; no physical device acceptance. Existing ledger test files re-executed using an authoring runtime assertion harness: 5 tests / 32 assertions passed before this commit.
