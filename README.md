# Anisha's Enchanted Universe

This is the source repository for a public, interactive birthday website. The deployment target is **GitHub Pages only**; Netlify is not part of the publishing workflow.

## Publish the complete website

1. Download `Anisha_GitHub_Pages_Package.zip` from the ChatGPT conversation.
2. Open this repository, choose **Add file → Upload files**, upload that ZIP at the repository root, and commit it to `main`.
3. The GitHub Actions workflow `.github/workflows/import-site-bundle.yml` validates the ZIP, extracts the complete site and original image files under `site/`, commits those files to this repository, and deploys `site/` with GitHub Pages.
4. Follow the workflow under the **Actions** tab. When it succeeds, the intended website address is:

   `https://ok7r3r.github.io/Eternal-embrace-/`

If GitHub Pages has not been configured for this repository yet, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions** before uploading the archive.

## Gallery manifest

**Set A — 8 original photos, in order**
1. `1000273785.jpg`
2. `1000273788.jpg`
3. `1000269536.jpg`
4. `1000269530.jpg`
5. `1000269512.jpg`
6. `1000269616.png`
7. `1000269497.jpg`
8. `1000268857.jpg`

**Set B — 12 original screenshots, in order**
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

The site content uses relative paths under `assets/set-a/` and `assets/set-b/`, so it works at the GitHub Pages project URL. The bundle also contains separate scenery references in `assets/art/`.

## Privacy and GitHub plan requirements

- With GitHub Free, Pages requires a public repository. Making this repository public exposes the code and all committed images/screenshots; anyone can fork or download them.
- GitHub Pro/Team/Enterprise can publish Pages from a private repository, subject to plan rules.
- Review all Set B conversations before making the source repository public. Even if the repository stays private, the published public site makes gallery images accessible to site visitors.
- Do not commit credentials, private API keys, or passwords.
