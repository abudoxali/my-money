# محفظة عابد — ABUD Wallet

Personal iPhone-first, Arabic RTL, local-only web app. GitHub Pages serves the application files; the wallet never sends financial data to a server. PIN 0000 is a convenience lock, not strong security. All existing ledger records, budgets, subscriptions and debts remain compatible with the same encrypted localStorage key.

## iPhone installation
1. Open https://abudoxali.github.io/my-money/ in Safari (not private browsing).
2. If you already entered records in Safari, export a backup before installation.
3. Share → Add to Home Screen → enable Open as Web App → Add.
4. Open the icon, enter 0000. If necessary, restore the Safari backup from Files on the login screen or Settings.
5. Open Settings and confirm offline readiness; optionally request persistent storage. The operating system decides whether to grant persistence.
6. Use the installed icon consistently. Safari tabs and Home Screen apps can have separate storage. Keep periodic backups in Files; deletion of the app or site data, device loss or OS eviction can remove local records.

## Scope
Balance, income, expenses, neutral transfers, dated subscriptions/debts, fixed monthly spending cap, due reserves and local category/source reports. No account setup, remote sync, OCR, analytics tracking, or API required. Older optional server/sync source remains in Git history/repository but is not loaded or reachable from this app UI. The restrictive CSP permits no external connections.

## Verification
GitHub Actions runs ledger regression and mobile Chromium/WebKit tests, including offline reload and persistence. These are emulated viewport/desktop browser engine tests, not real iOS hardware acceptance. Run locally with `python3 -m http.server 8765`.
