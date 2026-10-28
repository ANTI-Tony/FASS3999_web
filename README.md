# Beyond Stay or Leave

An English-language React prototype for the FASS3999 classroom project. It includes a verified information hub, scripted AI navigator, and reviewable case-summary workflow using fictional scenarios only.

## Run locally

Requires Node.js 22 or later.

```sh
npm install
npm run dev
```

No API key, backend, account, or live AI integration is required.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the React app and deploys `dist` on pushes to `main`. Set **Pages → Build and deployment → Source** to **GitHub Actions** before the first deployment. Vite is configured for the `/FASS3999_web/` project path.

## Privacy and scope

This research prototype is not a domestic-violence advice or referral service. It does not send input to an AI provider, store real case information, or contact any service. Do not enter identifying or sensitive information. Quick Exit leaves the page but cannot clear browser history or prevent device monitoring.

Source links and content must be reviewed by legal, family-violence, child-safety, privacy and technical-safety professionals before any real-world use.
