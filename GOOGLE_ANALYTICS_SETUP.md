# Google Analytics Setup - Step by Step Guide

This document tracks the complete setup process for Google Analytics using Next.js official `@next/third-parties` library.

**Reference:** [Next.js Third-Party Libraries - Google Analytics](https://nextjs.org/docs/app/guides/third-party-libraries#google-analytics)

---

## 📊 Current Status

**Last Updated:** Current Session  
**Overall Progress:** 4 of 7 steps completed (57%)

**Completed:**
- ✅ Step 1: Package installation
- ✅ Step 2: Google Analytics property setup (Measurement ID: `G-T7H61XHH4Y`)
- ✅ Step 3: Environment variable configured
- ✅ Step 4: Code implementation

**Currently In Progress:**
- ⏳ Step 5: Testing integration locally (restart dev server if running)

**Next Steps:**
1. ✅ Restart development server (if currently running) to load environment variable
2. ✅ Test Google Analytics integration locally
3. ⏳ Configure Enhanced Measurement (optional)
4. ⏳ Verify production build

**Code Status:**
- ✅ `@next/third-parties` package installed
- ✅ `app/layout.tsx` updated with official `GoogleAnalytics` component
- ✅ Custom component removed
- ✅ `.env.local` configured with Measurement ID: `G-T7H61XHH4Y`
- ✅ Ready for testing!

---

## ✅ Step 1: Install @next/third-parties Package

**Status:** ✅ Completed  
**Description:** Install the official Next.js third-party library that provides optimized Google Analytics component

**Command:**
```bash
npm install @next/third-parties@latest next@latest
```

**Result:**
- ✅ Package installed successfully
- ✅ Added 8 packages, updated Next.js to latest version
- ✅ No errors during installation

**Notes:**
- `@next/third-parties` is currently experimental but recommended by Next.js
- Install with latest flag for most up-to-date version

---

## ✅ Step 2: Get Google Analytics Measurement ID

**Status:** ✅ Completed  
**Description:** Create a Google Analytics property and get the Measurement ID

**Measurement ID Obtained:** `G-T7H61XHH4Y` ✅

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for `propage.in` (if not already created)
3. When setting up the property, select:
   - **Industry category**: **Internet & Telecom** (Recommended - most accurate for web development services)
   - Alternative: "Business & industrial" (acceptable but less specific)
4. **Select Business Objectives** (Choose maximum 2):
   - ✅ **Generate leads** (Primary - track contact form submissions, quote requests)
   - ✅ **Understand web and/or app traffic** (Secondary - measure visitors and marketing channels)
   - ❌ Skip "Drive sales" - you're not transacting directly on the website
5. Set up a Web data stream:
   - **Platform**: Select **Web** (not iOS or Android)
   - **Website URL**: `https://propage.in` (without www)
     - ✅ **Use `https://propage.in`** - This is your canonical domain (all URLs in codebase use this)
     - ❌ Do NOT use `https://www.propage.in` - www is not the canonical domain
     - Enter exactly: `https://propage.in` (include https://, no trailing slash, no www)
   - **Stream name**: `ProPage.in Website`
     - You can use any descriptive name, but this is recommended
   
   **Note:** Even if www.propage.in redirects to propage.in, use the canonical domain (propage.in) in Google Analytics
6. Click **Create stream**
7. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)
   - ✅ **Measurement ID:** `G-T7H61XHH4Y` (obtained)
   - You'll see it displayed immediately after creating the stream
   - It will look like: `G-XXXXXXXXXX` (starts with G- followed by alphanumeric characters)
   - This is what you'll use in your environment variable

**Note:** You don't need to add the Google tag script manually to your HTML - the Next.js component will handle this automatically. The code snippet Google Analytics shows is for manual implementation, but we're using the optimized Next.js method.

**Business Objectives Rationale:**
- **Generate leads**: Your contact form is the primary conversion goal (form submissions = potential customers)
- **Understand web and/or app traffic**: Essential for knowing which marketing channels (SEO, social, direct, etc.) drive visitors
- **Why not "Drive sales"**: You're a service business that doesn't complete transactions on-site; leads convert through follow-up conversations

**Notes:**
- Measurement ID typically starts with `G-`
- Keep this ID secure but note it's safe to expose in client-side code
- Industry category helps Google Analytics provide relevant benchmarks and insights
- Business objectives help Google Analytics provide personalized recommendations and reports

---

## ✅ Step 3: Set Environment Variable

**Status:** ✅ Completed  
**Description:** Configure the Measurement ID as an environment variable

**Local Development (.env.local):**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-T7H61XHH4Y
```

**Completed:**
- ✅ Added `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-T7H61XHH4Y` to `.env.local`
- ✅ Environment variable configured and ready to use

**Next Step:**
- Restart your development server if it's currently running (to load the new environment variable)

**Production (GitHub Secrets):**
1. Go to: https://github.com/chetannr/propage.in/settings/secrets/actions
2. Click **"New repository secret"**
3. Add secret:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-T7H61XHH4Y`
4. Click **"Add secret"**

**Workflow File:**
- ✅ Updated `.github/workflows/deploy.yml` to include the GA Measurement ID
- The workflow will now use this secret during the build process

**Notes:**
- ✅ Environment variable is set for local development
- Use `NEXT_PUBLIC_` prefix for client-side accessible variables (already done)
- Measurement ID: `G-T7H61XHH4Y` (configured)
- The code is already configured to read from this environment variable

---

## ✅ Step 4: Update Layout to Use Official GoogleAnalytics Component

**Status:** ✅ Completed  
**Description:** Replace custom GoogleAnalytics component with official Next.js component

**Changes Made:**
- ✅ Updated `app/layout.tsx` to import `GoogleAnalytics` from `@next/third-parties/google`
- ✅ Added conditional rendering to only load GA when Measurement ID is set
- ✅ Placed component in `<body>` tag (inside `<html>`)

**Code Implementation:**
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// In RootLayout body:
{process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
)}
```

**Files Modified:**
- `app/layout.tsx` - Updated import and component usage

**Cleanup:**
- ✅ Removed custom `components/shared/GoogleAnalytics.tsx` component

**Notes:**
- Component is placed inside `<body>` tag as per Next.js documentation
- The official component handles all script loading optimization automatically
- Pageview tracking is automatic for client-side navigations
- Conditional rendering ensures GA only loads when Measurement ID is configured

---

## ✅ Step 5: Test Google Analytics Integration

**Status:** ⏳ Pending  
**Description:** Verify that Google Analytics is working correctly

**Testing Steps:**
1. Start development server: `npm run dev`
2. Open browser DevTools → Network tab
3. Navigate to `http://localhost:3000`
4. Check for requests to `googletagmanager.com/gtag/js`
5. Check browser console for any errors
6. Visit [Google Analytics Real-Time reports](https://analytics.google.com/) to see if visits are being tracked

**Expected Results:**
- ✅ Script loads without errors
- ✅ No console errors
- ✅ Real-time reports show active users (after a few minutes)
- ✅ Page views are tracked

---

## ✅ Step 6: Configure Enhanced Measurement (Optional but Recommended)

**Status:** ⏳ Pending  
**Description:** Enable Enhanced Measurement in Google Analytics for automatic event tracking

**Steps:**
1. Go to Google Analytics Admin panel
2. Navigate to: Admin → Data Streams → [Your Stream]
3. Click on "Enhanced measurement"
4. Ensure "Page changes based on browser history events" is enabled
5. Enable other events as needed (scrolls, outbound clicks, etc.)

**Notes:**
- Enhanced Measurement automatically tracks various user interactions
- This ensures client-side navigations in Next.js are tracked correctly

---

## ✅ Step 7: Verify Production Build

**Status:** ⏳ Pending  
**Description:** Ensure Google Analytics works in production build

**Testing Steps:**
1. Build the application: `npm run build`
2. Test the build locally: `npm start` (if applicable)
3. Deploy to production
4. Verify Google Analytics is loading on production site
5. Check Real-Time reports to confirm tracking

**Expected Results:**
- ✅ Build completes successfully
- ✅ No errors in production build
- ✅ Google Analytics loads on production site
- ✅ Page views tracked in production

---

## 📝 Implementation Checklist

- [x] Step 1: Install @next/third-parties package ✅
- [x] Step 2: Get Google Analytics Measurement ID ✅ (ID: `G-T7H61XHH4Y`)
- [x] Step 3: Set environment variable ✅ (Added to `.env.local`)
- [x] Step 4: Update layout with official component ✅
- [ ] Step 5: Test integration locally (Ready to test - restart dev server if running)
- [ ] Step 6: Configure Enhanced Measurement (Optional)
- [ ] Step 7: Verify production build (After Step 5)

## 💡 Quick Reference

**Recommended Industry Category:** **Internet & Telecom**
- Most accurate for web development/design services
- Includes web development companies and internet services
- Helps Google Analytics provide relevant benchmarks

---

## 📚 Additional Resources

- [Next.js Third-Party Libraries Documentation](https://nextjs.org/docs/app/guides/third-party-libraries)
- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Analytics Event Parameters](https://developers.google.com/analytics/devguides/collection/ga4/event-parameters)
- [Enhanced Measurement Guide](https://support.google.com/analytics/answer/9216061)

---

## 🔄 Migration Notes

**Previous Implementation:**
- Used custom `GoogleAnalytics` component with Next.js `Script` component
- Manual script injection for gtag.js

**New Implementation:**
- Using official `@next/third-parties/google` package
- Optimized script loading handled by Next.js
- Better performance and easier maintenance

