# Gokulkrishnan Portfolio

Complete static website, ready for GitHub Pages. No installation or build required.

## Publish

1. Extract the ZIP on your computer.
2. Create a GitHub repository (public for free GitHub Pages hosting).
3. Upload the contents of this folder to the repository root. `index.html`, `app.js`, the CSS files, `assets`, and `work` must be at the top level—not inside another folder. Upload the extracted files, not the ZIP.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then **Save**.
7. Wait for GitHub to finish deploying; your website address appears in Settings → Pages.

The website supports both username.github.io and username.github.io/repository-name addresses. All galleries, brochure pages, and SIMS/TrainerHub live links are included. The live applications themselves remain hosted at their original addresses.

GitHub Pages makes the portfolio publicly accessible. Only publish material you are authorized to share.

To preview locally, extract the entire folder and double-click index.html. No server is needed. A static web server / Live Server also works. Keep assets and work beside index.html.

Catalog data for HTTP hosting is assets/work/catalog.json. File previews use assets/work/catalog.js. After changing catalog.json, run `node sync-catalog.cjs` from this folder to refresh the file-preview data.
