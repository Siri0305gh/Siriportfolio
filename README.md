## Siri Nandyala — Developer Portfolio

Modern, animated portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

### 1. Tech stack

- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS, custom gradients & glassmorphism
- **Animation**: Framer Motion
- **Icons**: React Icons

### 2. Project structure

- `index.html` — Vite entry
- `vite.config.js` — Vite configuration (with `base: "./"` so it can work on GitHub Pages)
- `tailwind.config.js`, `postcss.config.js` — Tailwind setup
- `public/resume.pdf` — PDF used by the “Download Resume” button (replace with your latest resume)
- `src/main.jsx` — React entry
- `src/index.css` — Tailwind imports and global styles (glassmorphism, gradients, glow borders)
- `src/App.jsx` — Main layout, sections wiring
- `src/data/content.js` — All portfolio content (resume data, projects, links)
- `src/components/*` — UI sections:
  - `AnimatedBackground` — floating blobs + tech text
  - `Layout` — header + footer
  - `Hero`, `About`, `Skills`, `Projects`, `Experience`, `CodingProfiles`, `Social`, `Contact`

### 3. Running locally

1. Open a terminal in the project folder:

   ```bash
   cd "Siri portfolio"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Update your resume

- Replace `public/resume.pdf` with your exported PDF.
- Keep the same file name (`resume.pdf`) so the **Download Resume** button keeps working.

### 5. Push to GitHub

Assuming this folder is already inside your main git repo (`C:/Users/susha`), you can:

```bash
cd "C:/Users/susha"
git add "OneDrive/Desktop/Siri portfolio"
git commit -m "Add Siri portfolio (React + Tailwind)"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> Replace `<your-username>` and `<your-repo>` with your actual GitHub username and the repo name you create on GitHub (for example `Siri0305gh` and `siri-portfolio`).

### 6. Deploy on GitHub Pages

You can deploy the **built static files** from Vite:

1. Build the project:

   ```bash
   cd "Siri portfolio"
   npm run build
   ```

   This creates a `dist` folder.

2. Option A — Push `dist` to a separate `gh-pages` branch (using a dedicated repo for just this project is easiest), or

3. Option B — Use GitHub Pages with the `/docs` folder:

   - Move/copy `dist` into `docs`, or configure Vite to output to `docs`.
   - In your GitHub repo, go to **Settings → Pages** and choose:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` / `/docs` folder

Because `vite.config.js` uses `base: "./"`, the site will work when served from a subdirectory like GitHub Pages.

### 7. Deploy on Vercel (recommended)

1. Push this project to a GitHub repository (as above).
2. Go to `[Vercel](https://vercel.com)` and sign in with GitHub.
3. Click **"Add New Project" → "Import Git Repository"** and select your portfolio repo.
4. Vercel will detect:
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**.

Vercel will give you a live URL (you can later add a custom domain if you want).

### 8. Customization tips

- All core content is in `src/data/content.js`. Update:
  - **Hero text** and summary
  - **Projects** (add GitHub + live demo links)
  - **Skills** and categories
  - **Experience**, **Education**, **Certifications**
  - **Coding profiles** and **Social links**
- For more advanced animations, you can tweak Framer Motion configs in the section components.

