# Supabase Setup Guide for ProPage.in Contact Form

This guide explains how to set up Supabase to capture contact form submissions from the ProPage.in website.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Access to the Propage organization on Supabase (login with `chetan.nr@gmail.com`)

## Step 1: Create Supabase Project ✅ COMPLETE

**Project Details:**
- **Project name**: ProPage Contact Form
- **Database password**: QhvyMaOjaJuWoXuP
- **Region**: Asia-Pacific
- **Organization**: Propage
- **Login**: chetan.nr@gmail.com (GitHub.com account)

✅ Project has been created successfully!

## Step 2: Get API Credentials ✅ COMPLETE

**API Credentials:**
- **Project URL**: `https://yjzosjzgkaibjzkuegoi.supabase.co`
- **anon/public key**: `sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL`
- **Dashboard**: https://supabase.com/dashboard/project/yjzosjzgkaibjzkuegoi/settings/api

✅ Credentials retrieved and saved to `.env.local`

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
```env
NEXT_PUBLIC_SUPABASE_URL=https://yjzosjzgkaibjzkuegoi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL
```

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
2. Add the following secrets:
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL`
     - **Value**: `https://yjzosjzgkaibjzkuegoi.supabase.co`
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **Value**: `sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL`

3. Update your GitHub Actions workflow to include these secrets:

```yaml
env:
  NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
  NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
```

#### Other Platforms (Vercel, Netlify, etc.)

Add the environment variables in your platform's dashboard:
- `NEXT_PUBLIC_SUPABASE_URL` = `https://yjzosjzgkaibjzkuegoi.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL`

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
- Consider adding rate limiting or CAPTCHA for production

## Next Steps

- Set up email notifications for new submissions
- Create a dashboard to view submissions
- Add form validation and spam protection
- Export submissions to your CRM or email system

## Related Files

- `lib/supabase.ts` - Supabase client configuration
- `components/forms/StorytellingForm.tsx` - Contact form component
- `supabase/migrations/001_contact_form_submissions.sql` - Database schema

