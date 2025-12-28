# Supabase Setup Guide for ProPage.in Contact Form

This guide explains how to set up Supabase to capture contact form submissions from the ProPage.in website.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Access to the Propage organization on Supabase (login with `chetan.nr@gmail.com`)

## Step 1: Create Supabase Project ✅ COMPLETE

**Project Details:**
- **Project name**: ProPage Contact Form
- **Database password**: See `SECRETS.local.md` (not committed to Git)
- **Region**: Asia-Pacific
- **Organization**: Propage
- **Login**: chetan.nr@gmail.com (GitHub.com account)

⚠️ **Sensitive credentials are stored in `SECRETS.local.md` (not committed to Git)**

✅ Project has been created successfully!

## Step 2: Get API Credentials ✅ COMPLETE

**API Credentials:**
⚠️ **Sensitive credentials are stored in `SECRETS.local.md` (not committed to Git)**

- **Project URL**: See `SECRETS.local.md`
- **anon/public key**: See `SECRETS.local.md`
- **Dashboard**: https://supabase.com/dashboard/project/yjzosjzgkaibjzkuegoi/settings/api

✅ Credentials retrieved and saved to `.env.local` and `SECRETS.local.md`

## Step 3: Create Database Table

1. Go to **SQL Editor** in the Supabase dashboard
2. Copy and paste the contents of `supabase/migrations/001_contact_form_submissions.sql`
3. Click **Run** to execute the migration

This will create:
- `contact_form_submissions` table with all form fields
- Row Level Security (RLS) policies
- Indexes for performance

## Step 4: Configure Row Level Security (RLS)

The migration script already sets up RLS policies:
- **Anonymous users** can INSERT (submit forms)
- **Authenticated users** can SELECT (read submissions)

You can modify these policies in **Authentication** → **Policies** if needed.

## Step 5: Set Environment Variables ✅ COMPLETE

### For Local Development

The `.env.local` file has been created in the project root at:
```
/Users/chetan/Documents/CodeProjects/chetan-personal-git-repos/propage.in/.env.local
```

**File Contents:**
See `SECRETS.local.md` for actual values (not committed to Git).

⚠️ **Never commit `.env.local` or `SECRETS.local.md` to version control**

**Note**: `.env.local` files are hidden by default (they start with a dot). To view it:
- **In VS Code/Cursor**: Press `Cmd + Shift + P` → "Files: Reveal in Explorer" or enable "Show Hidden Files"
- **In Finder (Mac)**: Press `Cmd + Shift + .` to show hidden files
- **In Terminal**: `cat .env.local` or `ls -la | grep env`

**Important**: 
- ✅ `.env.local` is already in `.gitignore` (won't be committed to version control)
- ✅ Using `NEXT_PUBLIC_` prefix for Next.js client-side environment variables
- ✅ File is ready to use - restart your dev server if it's already running

### For Production Deployment

#### GitHub Pages (via GitHub Actions)

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets (see `SECRETS.local.md` for actual values):
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
     - **Value**: [See `SECRETS.local.md`]
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **Value**: [See `SECRETS.local.md`]

3. Update your GitHub Actions workflow to include these secrets:

```yaml
env:
  NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
```

#### Other Platforms (Vercel, Netlify, etc.)

Add the environment variables in your platform's dashboard (see `SECRETS.local.md` for actual values):
- `NEXT_PUBLIC_SUPABASE_URL` = [See `SECRETS.local.md`]
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = [See `SECRETS.local.md`]

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` and fill out the form
3. Submit the form
4. Check the Supabase dashboard → **Table Editor** → `contact_form_submissions` to see the submission

## Step 7: View Submissions

1. Go to Supabase dashboard → **Table Editor**
2. Select `contact_form_submissions` table
3. You'll see all form submissions with timestamps

You can also create a custom dashboard or use Supabase's built-in features to:
- Export data to CSV
- Set up email notifications
- Create views for filtered data

## Troubleshooting

### Form submissions not saving

1. **Check browser console** for errors
2. **Verify environment variables** are set correctly:
   - Check `.env.local` file exists
   - Verify variable names start with `NEXT_PUBLIC_`
   - Restart dev server after adding/changing env vars
3. **Check Supabase dashboard**:
   - Verify table exists
   - Check RLS policies are enabled
   - Verify anon key has INSERT permission

### "Supabase not configured" warning

This appears when environment variables are missing. The form will still show success to users, but data won't be saved. Check your `.env.local` file.

### RLS Policy Errors

If you get permission errors:
1. Go to **Authentication** → **Policies**
2. Verify the "Allow anonymous form submissions" policy exists
3. Ensure it allows INSERT for `anon` role

## Security Notes

- The **anon key** is safe to use in client-side code (it's designed to be public)
- RLS policies ensure only authorized operations are allowed
- Never expose the **service_role key** in client-side code
- ✅ reCAPTCHA v2 has been implemented for spam protection (see setup below)

## Step 8: Set Up reCAPTCHA (Recommended for Spam Protection)

To protect your form from spam and stay within Supabase free tier limits, reCAPTCHA v2 has been implemented.

### Setup Instructions

1. **Register for Google reCAPTCHA**:
   - Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Click "Create" to register a new site
   - Fill in the form:
     - **Label**: ProPage Contact Form
     - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
     - **Domains**: Add your domains:
       - `localhost` (for local development)
       - `propage.in` (your production domain)
       - Add any other domains you'll use
   - Accept the terms and click "Submit"

2. **Get your Site Key**:
   - After registration, you'll see two keys:
     - **Site Key**: This is what you need (starts with `6L...`)
     - **Secret Key**: Not needed for static sites (only for server-side verification)

3. **Add Site Key to Environment Variables**:
   - Add to `.env.local`:
     ```
     NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
     ```
   - Restart your dev server after adding the variable

4. **For Production Deployment**:
   - Add `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` to your deployment platform's environment variables
   - For GitHub Pages (via GitHub Actions), add it as a GitHub Secret

### How It Works

- reCAPTCHA appears on the last step of the form (before submit button)
- Users must check the "I'm not a robot" box before submitting
- Form submission is blocked if reCAPTCHA is not completed
- reCAPTCHA automatically resets on error so users can retry

### Benefits

- ✅ Reduces spam submissions
- ✅ Helps stay within Supabase free tier limits (500 requests/hour)
- ✅ Prevents bot attacks
- ✅ Works with static sites (no server required)

### Testing

- The form works without reCAPTCHA if `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is not set (graceful degradation)
- To test reCAPTCHA, add the site key and verify it appears on the last step
- Test that form submission is blocked if reCAPTCHA is not checked

## Next Steps

- ✅ Set up reCAPTCHA for spam protection (see above)
- Set up email notifications for new submissions
- Create a dashboard to view submissions
- Export submissions to your CRM or email system

## Related Files

- `lib/supabase.ts` - Supabase client configuration
- `components/forms/StorytellingForm.tsx` - Contact form component
- `supabase/migrations/001_contact_form_submissions.sql` - Database schema

