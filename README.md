# Aylesbury Dairy Ltd — Website

This repository contains a simple responsive one-page website for Aylesbury Dairy Ltd.

What’s included

- `index.html` — one-page site: Hero, Products, About, Contact form.
- `assets/styles.css` — responsive styles (primary color: #2B7A4B).
- `assets/script.js` — contact form handler (opens mail client using `mailto:` to info@aylesburydairy.co.uk).

Preview locally

1. Clone the repo:
   git clone https://github.com/AylesburyDairyLtd/website.git
2. Serve the folder (requires Python 3):
   cd website
   python -m http.server 8000
3. Open http://localhost:8000 in your browser.

Quick web preview (without Pages)

You can view the raw HTML directly (assets served from repository):
https://raw.githubusercontent.com/AylesburyDairyLtd/website/main/index.html

Publish with GitHub Pages

1. Open https://github.com/AylesburyDairyLtd/website in your browser and sign in with a repo admin account.
2. Go to Settings → Pages.
3. Under "Source" choose branch: `main` (or the repository default branch) and folder: `/ (root)`, then Save.
4. Wait ~1–5 minutes — your site will be available at:
   https://AylesburyDairyLtd.github.io/website/

If you prefer to use your phone browser, enable the Desktop site view to access repository Settings.

Custom domain

If you have a custom domain, tell me the domain and I will add a `CNAME` file. You must configure the domain's DNS to point to GitHub Pages as documented by GitHub.

Customize

- Change site copy in `index.html`.
- Adjust colors in `assets/styles.css`.
- Replace `assets/script.js` to integrate with a form service (Formspree, Netlify Forms) or a backend.

Next steps I can help with

- Add a simple SVG logo and images.
- Add a `CNAME` for a custom domain.
- Convert the site to a React (Vite) project or add a blog.

If you want me to commit any of these changes, reply with which items to add.