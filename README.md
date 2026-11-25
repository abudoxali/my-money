# ABUD Wallet | محفظة عابد

Arabic-first private personal finance PWA. EGP, income, expenses, transfers, budgets, savings goals and deterministic insights. No external API, analytics or database. Data is encrypted at rest in browser localStorage with AES-GCM and PBKDF2-SHA256 (600,000 iterations). This is not a bank or payment service.

## Run
Serve this directory over HTTPS, or on a desktop using `python -m http.server 8000` and http://localhost:8000. GitHub Pages: Settings → Pages → Deploy from a branch → main / root. The app requires a secure context. On iPhone open the HTTPS site in Safari → Share → Add to Home Screen. Shortcuts: create Open URLs action pointing to the app URL with #add; this opens quick entry, not background API capture.

## Privacy
Use a strong unique passphrase. No password recovery. Data remains on the specific browser/origin; installed iOS PWA may use separate storage from Safari. Export encrypted backups and test restoring before relying on it. Do not commit personal records. No cross-device sync or server authentication yet. Avoid simultaneously editing from multiple tabs. Device compromise, malicious code updates and unlocked sessions are outside the protection of local encryption. No financial data is seeded.

## Verification
`node --test ledger.test.cjs` (Node 18+). Manual HTTPS browser and physical iPhone acceptance remain required.
