# NEXUS Lab website

Static website designed for deployment at:

`https://karim-elish.github.io/nexus-lab/`

## Deploy

Copy the entire `nexus-lab` folder into the root of the existing `karim-elish.github.io` repository and commit/push it. GitHub Pages will serve `nexus-lab/index.html` at `/nexus-lab/`.

## Site structure

- `index.html` — homepage
- `research/` — research areas and integrated themes
- `people/` — director, current researchers, and alumni
- `publications/` — searchable/filterable selected publications
- `artifacts/` — searchable/filterable research artifact catalog
- `news/` — recent research highlights
- `contact/` — lab contact and collaboration information
- `assets/css/style.css` — complete site styling
- `assets/js/data.js` — publication, artifact, and people data
- `assets/js/*.js` — filtering and site behavior
- `assets/img/nexus-logo.png` — current NEXUS logo

## Updating content

Most frequently changing content is centralized in `assets/js/data.js`. Update that file to add/remove people, publications, or research artifacts.

The site intentionally uses `/nexus-lab/` absolute paths because it is designed for the GitHub Pages subdirectory above.
