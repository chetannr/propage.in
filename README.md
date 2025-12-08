# ProPage.in Marketing Website

Marketing website for ProPage.in - showcasing expertise, selling website creation services, and making documentation publicly accessible.

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Build**: Static export (`output: 'export'`) for GitHub Pages hosting
- **Styling**: Tailwind CSS 3+
- **Hosting**: GitHub Pages (free, static HTML/CSS/JS files)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates static files in the `out/` folder, ready for GitHub Pages deployment.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when pushing to the `main` branch.

### Manual Deployment

1. Build the project: `npm run build`
2. The `out/` folder contains the static files
3. Deploy the `out/` folder to GitHub Pages

## Project Structure

```
propage.in/
├── app/              # Next.js App Router pages
├── components/        # React components
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── data/             # Static data files
├── public/           # Static assets
└── types/            # TypeScript types
```

## Design Principles

Following our own design principles:
- Minimal, elegant, confident
- Monochrome foundation (black, white, grays)
- System fonts first
- Generous white space
- Fast loading (Lighthouse 90+)
- Mobile-first responsive

## Quality Gates

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+
- WCAG 2.1 AA compliance
