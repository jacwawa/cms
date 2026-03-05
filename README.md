# Fountain CMS Docs Site

This repository now supports a Markdown-first documentation workflow.

## Source of Truth

Edit these files only:

- `docs/fountain-onboarding/README.md`
- `docs/fountain-onboarding/quickstart.md`
- `docs/fountain-onboarding/workflows.md`
- `docs/fountain-onboarding/troubleshooting.md`
- `docs/fountain-onboarding/snippets-reference.md`
- `docs/fountain-onboarding/photo-guidelines.md`
- `docs/fountain-onboarding/launch-checklist.md`

The published website is generated from Markdown via MkDocs.

## Cloudflare Pages Settings

In Cloudflare Pages, configure:

1. Build command:
`pip install mkdocs mkdocs-material pymdown-extensions && mkdocs build`
2. Build output directory:
`site`
3. Root directory:
`/`

## Publish Workflow

1. Commit and push updates to `main`.
2. Cloudflare Pages builds from Markdown and deploys the generated `site` output.
3. GitHub Actions only validates docs build success (`mkdocs build --strict`).

## Local Preview (optional)

```bash
pip install mkdocs mkdocs-material pymdown-extensions
mkdocs serve
```

## Redundancy Notes

- Existing root `.html` files are legacy static output from the earlier manual site.
- If Cloudflare is correctly configured with the build command above, these legacy files are not the source of truth.
- Keep editing only Markdown files in `docs/fountain-onboarding/`.
