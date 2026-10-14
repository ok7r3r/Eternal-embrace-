# Anisha's Enchanted Universe

The complete static birthday website and gallery assets are already in this repository. Deployment is **GitHub Pages only** (no Netlify).

## Finish publishing (one-time GitHub setting + run)

1. Open [Settings → Pages](https://github.com/ok7r3r/Eternal-embrace-/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**. Save if a Save button appears.
3. Open the [GitHub Actions workflow](https://github.com/ok7r3r/Eternal-embrace-/actions/workflows/import-site-bundle.yml), tap **Run workflow**, keep branch `main), and start it.
4. Wait for a green check. Then open:

   **https://ok7r3r.github.io/Eternal-embrace-/**

If Pages is not yet enabled, the workflow fails at “Configure GitHub Pages”; complete Step 1–2 and run it again.

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

Files are in `site/assets/set-a/`, `site/assets/set-b/`, and separate scenery art in `site/assets/art/`. `site/content.js` points to the relative image paths, so the gallery paths work under the project URL.

## Privacy

This repository is currently **public**. That means its source code, personal photos and Set B conversation screenshots are directly viewable and downloadable by anyone, regardless of whether Pages has finished publishing. Please review the conversation screenshots for personal handles and details. Do not commit passwords, API keys, or other credentials.
