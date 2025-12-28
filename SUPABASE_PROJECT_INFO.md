# ProPage Contact Form - Supabase Project Information

## Project Details

- **Project Name**: ProPage Contact Form
- **Organization**: Propage
- **Login Email**: chetan.nr@gmail.com (GitHub.com account)
- **Database Password**: QhvyMaOjaJuWoXuP
- **Region**: Asia-Pacific

## API Credentials ✅

- **Project URL**: `https://yjzosjzgkaibjzkuegoi.supabase.co`
- **anon/public key**: `sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL`
- **Dashboard**: https://supabase.com/dashboard/project/yjzosjzgkaibjzkuegoi/settings/api

## Quick Setup Checklist

- [x] Create Supabase project
- [x] Get Project URL and anon key from Settings → API
- [x] Create `.env.local` file with credentials
- [ ] Run database migration SQL
- [ ] Test form submission

## Next Steps

1. **Get API Credentials**:
   - Go to: https://supabase.com/dashboard
   - Select "ProPage Contact Form" project
   - Go to Settings → API
   - Copy Project URL and anon key

2. **Run Migration**:
   - Go to SQL Editor in Supabase dashboard
   - Copy contents of `supabase/migrations/001_contact_form_submissions.sql`
   - Paste and run

3. **Set Environment Variables** ✅ DONE:
   - `.env.local` file created with:
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://yjzosjzgkaibjzkuegoi.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_YLaVZwHKSV0BsraBMkMfMA_r318xMzL
     ```

4. **Test**:
   - Run `npm run dev`
   - Go to `/contact` and submit the form
   - Check Supabase dashboard → Table Editor → `contact_form_submissions`

