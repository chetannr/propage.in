# Deployment Guide - ProPage.in

## Overview

This website is built with Next.js static export and deployed to GitHub Pages for free hosting.

## Pre-Deployment Checklist

- [x] All pages created and functional
- [x] SEO metadata implemented
- [x] Structured data (Schema.org) added
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Accessibility features (skip link, ARIA)
- [x] Build succeeds without errors
- [ ] OG images created (1200×630px) - **TODO**
- [ ] Favicon created - **TODO**
- [ ] Custom domain configured (if using propage.in)

## Build Process

### Local Build

```bash
npm run build
```

This generates static files in the `out/` folder.

### Verify Build

```bash
# Test the static build locally
cd out
python3 -m http.server 8000
# Or use any static file server
```

Visit `http://localhost:8000` to verify everything works.

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys when you push to `main`.

**Setup Steps:**

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: ProPage.in marketing website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Monitor Deployment:**
   - Go to **Actions** tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Wait for completion (usually 2-3 minutes)

4. **Access Your Site:**
   - Once deployed, site will be available at:
   - `https://[username].github.io/propage.in/` (if repository name is propage.in)
   - Or custom domain if configured

### Manual Deployment

If you prefer manual deployment:

```bash
# Build
npm run build

# The out/ folder contains static files
# Upload contents of out/ to GitHub Pages
```

## Custom Domain Setup

### If Using propage.in Domain

1. **Update next.config.js:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // Uncomment if using subdirectory:
     // basePath: '/propage.in',
     // trailingSlash: true,
   }
   ```

2. **Configure DNS:**
   - Add CNAME record pointing to `[username].github.io`
   - Or add A records (GitHub Pages IPs)

3. **Add CNAME file:**
   - Create `public/CNAME` with content: `propage.in`

4. **Enable Custom Domain in GitHub:**
   - Settings → Pages → Custom domain
   - Enter: `propage.in`
   - Enable "Enforce HTTPS"

## Post-Deployment

### Verify Functionality

- [ ] All pages load correctly
- [ ] All links work (no 404s)
- [ ] Images load correctly
- [ ] Forms work (if implemented)
- [ ] Mobile menu works
- [ ] Navigation works

### SEO Setup

- [ ] Submit sitemap to Google Search Console: `https://propage.in/sitemap.xml`
- [ ] Verify robots.txt: `https://propage.in/robots.txt`
- [ ] Test structured data: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test Open Graph tags: [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### Performance Check

- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Check Core Web Vitals
- [ ] Verify mobile responsiveness
- [ ] Test on multiple browsers

## Troubleshooting

### 404 Errors on Routes

If you get 404 errors, ensure:
- `next.config.js` has `output: 'export'`
- Build completed successfully
- All files in `out/` folder are uploaded

### Images Not Loading

- Check image paths are correct
- Ensure images are in `public/` folder
- Verify `images.unoptimized: true` in next.config.js

### Build Errors

- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct

## Maintenance

### Updating Content

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Push to GitHub (auto-deploys)

### Adding New Pages

1. Create page in `app/[route]/page.tsx`
2. Add metadata export
3. Update sitemap.ts
4. Build and deploy

## Notes

- Static export means no server-side features (API routes, server components)
- Images must use regular `<img>` tags or `next/image` with `unoptimized: true`
- All routes are pre-rendered at build time
- Free hosting on GitHub Pages
- Fast, SEO-friendly static site

---

**Ready to deploy!** Push to GitHub and enable GitHub Pages.

