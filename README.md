# Recovian Portfolio

Personal portfolio interface for **recovian.ai**.

Built with:

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Cloudflare Pages friendly static output

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Deploy To Cloudflare Pages

1. Push this project to GitHub.
2. In Cloudflare Pages, create a new project from the repository.
3. Set the build command:

```bash
npm run build
```

4. Set the output directory:

```bash
dist
```

5. Add the custom domain `recovian.ai` in Cloudflare Pages after deployment.

## Link Placeholders

Update the footer links in `src/App.tsx`:

- GitHub
- LinkedIn
- Email
- Resume
