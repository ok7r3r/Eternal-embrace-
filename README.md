# Anisha's Enchanted Universe

This repository stays **private**. The intended website is public; the source and repository remain private.

## One-time upload

1. Download the current `Anisha_Netlify_Deploy_Package.zip` supplied in this conversation.
2. In this repository, choose **Add file → Upload files**, select that ZIP, and commit it to `main`.
3. The GitHub Actions workflow `.github/workflows/import-site-bundle.yml` validates the archive, then expands the site into normal files and folders. It checks for all 8 Set A originals and all 12 Set B screenshots before committing the files.
4. Once the files appear in the repository, open the [Netlify project dashboard](https://app.netlify.com/projects/anisha-enchanted-universe) and connect this repository (`ok7r3r/Eternal-embrace-`) to branch `main` under **Site configuration / Build & deploy / Continuous deployment** (menu labels may vary).
5. The root `netlify.toml` configures Netlify to extract the bundled site and publish it to the site's public URL: https://anisha-enchanted-universe.netlify.app.

The site uses `content.js` for the ordered galleries and `assets/set-a/` and `assets/set-b/` for original images. The site should not be considered complete until the published panels show all 8 and 12 originals.

## Exact media inventory

**Set A — 8 images, in slideshow order**
1. `1000273785.jpg`
2. `1000273788.jpg`
3. `1000269536.jpg`
4. `1000269530.jpg`
5. `1000269512.jpg`
6. `1000269616.png`
7. `1000269497.jpg`
8. `1000268857.jpg`

**Set B — 12 screenshots, in slideshow order**
1. `1000274618.jpg`
2. `1000274619.jpg`
3. `1000274620.jpg`
4. `1000274621.jpg`
5. `1000274622.jpg`
6. `1000274623.jpg`
7. `1000274624.jpg`
8. `1000274625.jpg`
9. `1000274465.jpg`
10. `1000274466.jpg`
11. `1000274467.jpg`
12. `1000274468.jpg`

## Privacy

A public website makes its images viewable to visitors who can open the link. Review the conversation screenshots for handles, timestamps, and message contents before the first production deploy. Do not add API keys, passwords, or other credentials to the repository.