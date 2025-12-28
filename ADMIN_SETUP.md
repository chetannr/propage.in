# Admin Dashboard Setup Guide

This guide explains how to set up the admin dashboard to view contact form submissions.

## Prerequisites

1. Supabase project configured (already done)
2. Contact form submissions table created (already done)

## Step 1: Enable Supabase Auth ✅ COMPLETE

**Status**: Email provider is enabled and configured
- ✓ Email provider: **Enabled**
- ✓ Allow new users to sign up: **Enabled**
- ✓ Confirm email: **Enabled**

## Step 2: Create Admin User ✅ COMPLETE

**Admin User Created**:
- **Email**: `propagetech@gmail.com`
- **User ID**: `3934cb62-8b24-4de1-a540-7a8f5a494bb1`
- **Auto Confirm User**: ✅ **Checked** - User is automatically confirmed and ready to use

**Important**: The email must be exactly `propagetech@gmail.com` (case-sensitive check in code).

## Step 3: Run RLS Policy Migration (Optional)

The RLS policy for authenticated users should already exist from the initial migration. If you need to update it:

1. Go to **SQL Editor** in Supabase dashboard
2. Copy and paste the contents of `supabase/migrations/002_update_rls_for_auth.sql`
3. Click **Run**

This ensures authenticated users can read submissions.

## Step 4: Access Admin Dashboard ⏳ NEXT STEP

1. Start your development server (if not running):
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/admin/login`

3. Log in with:
   - **Email**: `propagetech@gmail.com`
   - **Password**: Your secure password

4. You'll be redirected to `/admin/submissions` to view all contact form submissions

**Note**: The RLS policy migration (Step 3) is optional since the initial migration already includes the authenticated user read policy. You can test the dashboard now!

## Security Features

1. **Email Restriction**: Only `propagetech@gmail.com` can access the admin dashboard
2. **Authentication Required**: Users must be authenticated via Supabase Auth
3. **RLS Policies**: Database-level security via Row Level Security
4. **Session Management**: Supabase handles session persistence

## Troubleshooting

### Can't log in
- Verify the user exists in Supabase Authentication → Users
- Check that email is exactly `propagetech@gmail.com`
- Ensure "Auto Confirm User" was checked when creating the user
- Check browser console for errors

### "Access denied" error
- Verify the email matches exactly: `propagetech@gmail.com`
- Check that the user is authenticated in Supabase

### Can't see submissions
- Verify RLS policy exists: `Allow authenticated users to read submissions`
- Check that you're logged in (check session in browser)
- Check browser console for errors

### Session not persisting
- Ensure Supabase client is configured with `persistSession: true` (already done in `lib/supabase.ts`)
- Clear browser cache and try again

## Files Created

- `app/admin/login/page.tsx` - Login page
- `app/admin/page.tsx` - Main dashboard with stats cards
- `app/admin/layout.tsx` - Admin layout with navigation
- `app/admin/submissions/page.tsx` - Contact form submissions page
- `app/admin/submissions/layout.tsx` - Submissions page layout
- `components/auth/LoginForm.tsx` - Login form component
- `components/auth/AuthGuard.tsx` - Protected route wrapper
- `components/admin/DashboardStats.tsx` - Dashboard stats cards component
- `components/admin/SubmissionsList.tsx` - Submissions display component
- `lib/auth.ts` - Auth helper functions
- `supabase/migrations/002_update_rls_for_auth.sql` - RLS policy update

## Adding New Forms to the Dashboard

To add a new form to the dashboard:

1. **Create the database table** in Supabase (similar to `contact_form_submissions`)

2. **Add the form to DashboardStats.tsx**:
   ```typescript
   const forms: Omit<FormStats, 'count'>[] = [
     {
       id: 'contact',
       name: 'Contact Form',
       tableName: 'contact_form_submissions',
       route: '/admin/submissions',
       icon: '📝',
     },
     // Add your new form here:
     {
       id: 'newsletter',
       name: 'Newsletter Signups',
       tableName: 'newsletter_subscriptions',
       route: '/admin/newsletter',
       icon: '📧',
     },
   ]
   ```

3. **Create the submissions page**:
   - Create `app/admin/[form-name]/page.tsx`
   - Create a component similar to `SubmissionsList.tsx` to display entries
   - Protect it with `AuthGuard`

4. **Update RLS policies** in Supabase to allow authenticated users to read the new table

5. **Update navigation** in `app/admin/layout.tsx` if needed

## Notes

- All authentication is client-side (works with static export)
- Email restriction is enforced in both application code and can be enforced in RLS policies
- Sessions are managed by Supabase and persist across page refreshes
- The admin dashboard is not linked in the main navigation (hidden by design)
- The dashboard automatically fetches counts from all configured forms

