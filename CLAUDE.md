# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Alan Quintero, a Senior Software Engineer. Static single-page site deployed via GitHub Pages — no build step required.

## Development

No build system or package manager. To preview locally, serve the root directory:

```sh
python3 -m http.server 8000
# or
npx serve .
```

Deploy by pushing to `master` — GitHub Pages serves the repository root directly.

## Architecture

Single-page site (`index.html`) with hash-based section navigation. All content lives in one HTML file with 9 sections: `#home`, `#about`, `#resume`, `#skills`, `#education`, `#certifications`, `#awards`, `#projects`, `#moreabout`.

**Key files:**
- `index.html` — all markup and content
- `css/style.css` — custom styles including dark/light theme variables
- `js/script.js` — all interactivity (theme toggle, modal, clipboard, resume expand/collapse)
- `vendor/` — Bootstrap 3.3.7, jQuery 3.7.1 (do not update; older versions intentionally vendored)
- `fonts/fontawesome-7.0.1-web/` — Font Awesome icons
- `img/` — images organized by section (`banner/`, `aboutMe/`, `resume/`, etc.)
- `resources/AlanQuintero.pdf` — downloadable resume

## Theme System

Dark/light mode is implemented entirely in `js/script.js`. Color constants are defined at the top of the file. Theme is applied by toggling CSS classes and swapping image `src` attributes. Images that differ between themes follow the naming convention `*-dark.*` / `*-light.*` (or similar) in the `img/` subdirectories.

`css/style.css` uses class-based selectors (`.dark-mode`, `.light-mode`) rather than CSS custom properties for theming — keep this consistent when adding new styled elements.

## Content Updates

- Work experience, skills, certifications, awards, and projects are all hardcoded in `index.html`
- Company logos live in `img/resume/`; both light and dark variants are expected for logos that need theme-aware display
- The "Show more..." toggle in the resume section hides/shows elements with the `.resume-more` class
