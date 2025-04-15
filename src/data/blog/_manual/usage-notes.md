---
title: Usage Notes
author: Suyash Nagumalli
pubDatetime: 2025-04-10T02:53:36Z
featured: false
draft: false
tags:
  - usage notes
description: Usage notes
canonicalURL: https://example.org/my-article-was-already-posted-here
---

my personal notes on how to use this Astro software suite to host my website

## Build check

```bash
pnpm install
pnpm run lint
pnpm run format:check
pnpm run format # to auto-format all files
pnpm run build
pnpm run dev # run localhost
git pull
git fetch
git branch "<prefix>/<name>" # creates a
git switch "<prefix>/<name>"
git add .
git status
git commit -m "<type>: <msg>"
git push
git switch main
```

## Git Branch Naming guidelines

| Prefix      | Use Case                               | Example Branch Name                   |
| ----------- | -------------------------------------- | ------------------------------------- |
| `blog/`     | Adding or editing blog posts           | `blog/personal-finance-rules`         |
| `style/`    | CSS, themes, layout or visual updates  | `style/update-header-font`            |
| `content/`  | Static pages, non-blog content changes | `content/update-about-page`           |
| `feature/`  | New components or functionality        | `feature/add-contact-form`            |
| `fix/`      | Bug fixes (e.g., layout, broken links) | `fix/navbar-link-routing`             |
| `chore/`    | Meta/config/build tasks                | `chore/update-dependencies`           |
| `deploy/`   | Deployment-specific changes            | `deploy/netlify-config-fix`           |
| `refactor/` | Code cleanup or restructure            | `refactor/component-folder-structure` |

> ✅ Use lowercase, hyphens for spacing, and keep names short and descriptive.

## Git Commit Message guidelines

Use the format:  
`<type>: <short description>`

Example:  
`feat: add dark mode toggle`

| Type       | Purpose                                         | Example Commit Message                        |
| ---------- | ----------------------------------------------- | --------------------------------------------- |
| `feat`     | Add a new feature or component                  | `feat: add blog search functionality`         |
| `fix`      | Fix a bug or incorrect behavior                 | `fix: correct nav link routing`               |
| `style`    | UI or CSS-only changes (no logic change)        | `style: adjust padding on blog cards`         |
| `content`  | Update static content or markdown files         | `content: update about page biography`        |
| `blog`     | Add or update blog posts                        | `blog: add ISO datetime guide post`           |
| `docs`     | Changes to documentation (README, guides, etc.) | `docs: update deployment instructions`        |
| `refactor` | Refactor code without changing functionality    | `refactor: simplify blog card layout`         |
| `chore`    | Maintenance tasks (e.g., deps, configs)         | `chore: upgrade Tailwind CSS version`         |
| `deploy`   | Deployment-related changes                      | `deploy: update Netlify config for redirects` |
| `test`     | Add or update tests (if applicable)             | `test: add snapshot test for header`          |

> ✅ Use **imperative mood** ("add", not "added") Ex: If applied, this commit will ... "blog: add blog"

---

#### Example Commit Body (Multiline)

```text
feat: add light/dark mode toggle

This feature allows users to switch between light and dark themes.
Preferences are stored in localStorage.
```

### How to get pubDatetime for post frontmatter

This is known as the **ISO 8601** format, commonly used in JavaScript and supported in many markdown-based static site generators like Astro.

#### 🔧 Command (for Unix/Linux/macOS):

```bash
date -u +"%Y-%m-%dT%H:%M:%SZ"
```

- -u ensures the time is in UTC (Coordinated Universal Time)
- "+" tells date how to format the output
