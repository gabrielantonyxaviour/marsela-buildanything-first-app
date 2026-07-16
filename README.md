# Marsela's Build Log

The distinct first-app artifact for Marsela's BuildAnything Freshman lesson 2.
It is a small responsive build log with a working add-note interaction.

## Local verification

```bash
npm run dev
```

Open `http://127.0.0.1:4173` and add a note. The note should appear in the list,
the count should update, and the status message should announce the change.

## Deployment choice

The lesson supports GitHub Pages as a free deployment path. Cloudflare Pages was
the default preference, but the local Cloudflare CLI was not authenticated while
GitHub CLI was already authenticated, so this artifact is published with GitHub
Pages instead.
