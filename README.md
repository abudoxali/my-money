# ABUD Wallet | محفظة عابد

Arabic-first finance PWA. EGP, income, expenses, transfers, budgets, savings goals and deterministic insights. No external API, analytics or database. Data is encrypted at rest in browser localStorage with AES-GCM and PBKDF2-SHA256 (600,000 iterations). This is not a bank or payment service.

## Run
Serve this directory over HTTPS, or on a desktop using `python -m http.server 8000` and http://localhost:8000. GitHub Pages: Settings → Pages → Deploy from a branch → main / root. The app requires a secure context. On iPhone open the HTTPS site in Safari → Share → Add to Home Screen. Shortcuts: create Open URLs action pointing to the app URL with #add; this opens quick entry, not background API capture.

## Privacy
The fixed default PIN is 0000 by owner request. This is a convenience lock, not strong security: anyone who obtains the encrypted vault can decrypt it using the publicly known PIN. Legacy vaults migrate after successful unlock. Restored backups are re-encrypted with the default PIN. Data remains on the specific browser/origin; installed iOS PWA may use separate storage from Safari. Export encrypted backups and test restoring before relying on it. Do not commit personal records. No cross-device sync or server authentication yet. Avoid simultaneously editing from multiple tabs. Device compromise, malicious code updates and unlocked sessions are outside the protection of local encryption. No financial data is seeded.

## Verification
`node --test ledger.test.cjs` (Node 18+). Manual HTTPS browser and physical iPhone acceptance remain required.

## v0.3
Native-inspired keypad, tab navigation, transaction presets, charts, themes and settings. The Home Screen app uses Safari/WebKit and is not a native iOS binary. Existing local vault format remains compatible.

## v0.5 transaction-first workflow
No account setup needed. Record payments, income, or neutral cash withdrawals/transfers. Track source/destination, category, payment method, personal/business scope. Recurring payment schedules are manually marked paid; no actual payment is made. Existing account records and opening balances remain in the ledger for compatibility.

## v1.1-preview
Use #smart for dictation or typed multi-entry capture; review before saving. Receipt text can be copied from iOS Live Text; image extraction requires browser TextDetector and may be unavailable. Planning estimates exclude expected receipts and include obligations. CSV and print are local. Backups can be transferred through Files/iCloud manually; no live synchronization. No external AI service is used.

## v1.1 RC optional backend
See [server setup](server/README.md) for a self-hosted encrypted snapshot sync service and optional Tesseract OCR. The static PWA continues to work without the server. Remote sync and OCR require deployment/configuration and device verification.

## v1.2 focused experience
Set opening cash, record movements, set a monthly spending cap in الحسبة, and manage subscriptions/debts in الالتزامات. 40% of current balance is a suggestion only; saved caps do not auto-increase. Advanced tools are hidden from navigation; historical records remain intact.
