# Beyond Stay or Leave

An English-language React classroom prototype for FASS3999. It contains 36 connected Information Hub pages, a scripted AI Navigator and a user-confirmed Case Summary. It is not a live legal, family violence, medical or crisis support service.

## Run and verify

Use Node.js 22.12 or later (Node 24 is also supported).

```sh
npm ci
npm test
npm run dev
npm run build
npm run preview
```

No API key, account or backend is needed. Vite serves this project under `/FASS3999_web/`. Open the full URL printed by Vite.

## Demonstration journey

1. Select **Try a sample scenario**. Explore the six expandable domains, Information Map, precise Hub links and professional support cards.
2. Open **My Case Summary**. Its separate fictional record starts at Version 1.
3. Choose **Update Information → Load sample contact update → Preview Update**. Edit, discard or confirm the proposal. Confirmation creates Version 2.
4. Expand **History**, inspect the earlier snapshot and preview restoration. Confirmation creates a new version and preserves the previous versions.
5. Choose **Prepare a Message**, select **Legal Aid NSW** or **School Support**, and choose the confirmed statements to include. Generate, edit, copy or discard the draft. School defaults omit violence details, legal contact history and the sibling’s developmental support.
6. Try each two-pane combination or all three panes on desktop. Mobile shows one active pane. Closing and reopening the workspace preserves this tab’s state; refresh resets everything.

Unrecognised Navigator questions are not echoed or answered as personalised advice. Only the supplied fictional contact update is automatically organised. Direct edits to the fictional summary are previewed and require confirmation. No chat or summary data is written to local storage, cookies, a server or an AI provider. Navigator and Summary do not share records.

## Content

`src/hub-content.json` holds the English adaptation of the supplied 36-page content pack, the original official URLs, related-topic IDs, professional service roles and source metadata. Source records include organisation, title, jurisdiction, supported context, content-pack date and a nullable last-checked date. A null date means the supplied link was not individually rechecked during implementation. Core demonstration sources were spot-checked; this is not a specialist review of every source or claim. Review current policy, availability and eligibility before any real-world use.

`src/demo-model.mjs` contains the fictional record, versioning and disclosure-controlled draft logic. `tests/demo.test.mjs` checks confirmation boundaries, restoration, recipient-specific disclosures, content coverage and English-only shipped source.

## GitHub Pages

Set **Settings → Pages → Build and deployment → Source → GitHub Actions**. Do not publish the source branch through the default Jekyll workflow. `.github/workflows/deploy.yml` installs locked dependencies, checks behaviour, builds and publishes `dist` on pushes to `main`. `vite.config.js` retains the `/FASS3999_web/` base path. Hub details use hash links (for example `#/hub/A4`) so reloading a deep link works on Pages.

Quick Exit opens Google and does not clear browser history, sync, downloads or clipboard traces. Copy only acts on the fictional draft. No message is automatically sent to a service. Do not enter identifying or sensitive information.
