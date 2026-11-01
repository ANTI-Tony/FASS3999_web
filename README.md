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

1. With the Home or Navigator question box empty, use its **Try sample scenario** arrow. Explore the six expandable domains, Information Map, precise Hub links and professional support cards.
2. Open **My Case Summary**. Its separate fictional record starts at Version 1.
3. Choose **Update Information**. Use the empty input’s **Try sample update** arrow to load the prepared contact record, then the **Preview contact update** arrow. Review suggestions directly beside each Master Summary field. Edit, confirm or discard each field independently. The batch creates a single new version only after every field has a decision, and only if an accepted field changed.
4. Expand **History** to see the latest confirmed snapshot by default, inspect earlier versions and preview restoration. Restoration uses the same inline field review and creates a new version, preserving previous snapshots.
5. Choose **Prepare a Message**, select **Legal Aid NSW** or **School Support**, and choose the confirmed statements to include. Prepare, edit, copy or discard the draft. School defaults omit violence details, legal contact history and the sibling’s developmental support.
6. Try each two-pane combination or all three panes on desktop. Mobile shows one active pane. Closing and reopening the workspace preserves this tab’s state; refresh resets everything.

Unrecognised Navigator questions are not echoed or answered as personalised advice. Only the supplied fictional contact update is automatically organised. Direct edits to the fictional summary are previewed and require confirmation. No chat or summary data is written to local storage, cookies, a server or an AI provider. Navigator and Summary do not share records.

## Visual design

The established sage and ivory identity is extended with editorial serif headings, softly coloured category cards, clear section numbering and two original generated illustrations. Assets are repository-local WebP files in `public/images/`, with provenance and prompts in that folder’s README. The hero image loads eagerly; the summary illustration loads lazily. The interface remains English-only.

Navigator answers prioritise a direct integrated explanation and two core service entries. Six domains, detailed support, sources, the full prepared question and the Information Map remain expandable. A4, B3, E3 and F3 have a restrained Featured walkthrough badge. All 36 source-content records remain unchanged.

## Content

`src/hub-content.json` holds the English adaptation of the supplied 36-page content pack, the original official URLs, related-topic IDs, professional service roles and source metadata. Source records include organisation, title, jurisdiction, supported context, content-pack date and a nullable last-checked date. A null date means the supplied link was not individually rechecked during implementation. Core demonstration sources were spot-checked; this is not a specialist review of every source or claim. Review current policy, availability and eligibility before any real-world use.

`src/demo-model.mjs` contains the fictional record, versioning and disclosure-controlled draft logic. `tests/demo.test.mjs` checks confirmation boundaries, restoration, recipient-specific disclosures, content coverage and English-only shipped source.

## GitHub Pages

Set **Settings → Pages → Build and deployment → Source → GitHub Actions**. Do not publish the source branch through the default Jekyll workflow. `.github/workflows/deploy.yml` installs locked dependencies, checks behaviour, builds and publishes `dist` on pushes to `main`. `vite.config.js` retains the `/FASS3999_web/` base path. Hub details use hash links (for example `#/hub/A4`) so reloading a deep link works on Pages.

Quick Exit opens Google and does not clear browser history, sync, downloads or clipboard traces. Copy only acts on the fictional draft. No message is automatically sent to a service. Do not enter identifying or sensitive information.
