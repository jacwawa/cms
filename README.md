# Fountain CMS Docs Site

This repository now supports a Markdown-first documentation workflow.

## Source of Truth

Edit these files only:

- `docs/fountain-onboarding/README.md`
- `docs/fountain-onboarding/quickstart.md`
- `docs/fountain-onboarding/workflows.md`
- `docs/fountain-onboarding/troubleshooting.md`
- `docs/fountain-onboarding/snippets-reference.md`
- `docs/fountain-onboarding/launch-checklist.md`

The published website is generated from Markdown via MkDocs.

## Publishing Workflow

1. Commit and push updates to `main`.
2. GitHub Actions runs `.github/workflows/deploy-docs.yml`.
3. Action deploys docs to the `gh-pages` branch.
4. GitHub Pages serves the generated site.

## Local Preview (optional)

```bash
pip install mkdocs mkdocs-material pymdown-extensions
mkdocs serve
```

## Notes

- Existing root `.html` files are legacy static output and can be removed once Pages is fully using MkDocs deployment.
