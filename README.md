# Anisha's Enchanted Universe

This repository is private. The goal is a public birthday website while keeping the source repository private.

## One-time deployment setup

1. Upload `Anisha_Netlify_Deploy_Package.zip` to the **root of this repository** using GitHub's **Add file → Upload files**, then commit it to `main`. The ZIP contains the static website, art assets, and Set A / Set B images.
2. Open the [Netlify project dashboard](https://app.netlify.com/projects/anisha-enchanted-universe).
3. Choose **Set up continuous deployment** / **Link to Git provider**, select GitHub, then choose `ok7r3r/Eternal-embrace-` and branch `main`.
4. Leave the build settings to the committed `netlify.toml`. It extracts the ZIP into `public_site` and publishes that folder.
5. Watch the deploy complete. The intended public URL is https://anisha-enchanted-universe.netlify.app.

## Privacy

The published site makes the gallery images viewable to site visitors. Review personal photos and conversation screenshots before the first production deployment. Do not commit API keys or credentials.
