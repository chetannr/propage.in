# ProPage.in - Sensitive Credentials Template

⚠️ **Copy this file to `SECRETS.local.md` and fill in your actual credentials** ⚠️

The `SECRETS.local.md` file is automatically ignored by `.gitignore` and will not be committed to Git.

---

## Supabase Project Credentials

### Project Details
- **Project Name**: [Your Project Name]
- **Organization**: [Your Organization]
- **Login Email**: [Your Supabase Login Email]
- **Database Password**: [Your Database Password]
- **Region**: [Your Region]
- **Project URL**: [Your Supabase Project URL]

### API Credentials
- **Project URL**: `[Your Supabase Project URL]`
- **anon/public key**: `[Your Supabase Anon Key]`
- **Dashboard**: [Your Supabase Dashboard URL]

### Environment Variables (for .env.local)
```
NEXT_PUBLIC_SUPABASE_URL=[Your Supabase Project URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[Your Supabase Anon Key]
```

---

## Admin User Credentials

### Admin Dashboard Access
- **Email**: [Admin Email]
- **User ID**: [Admin User ID]
- **Password**: [Admin Password - Store Securely]

---

## Google reCAPTCHA Credentials

### reCAPTCHA Setup
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Register a new site:
   - **Label**: ProPage Contact Form
   - **reCAPTCHA type**: reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains**: Add your domain(s) (e.g., `propage.in`, `localhost` for development)
3. Copy the **Site Key** (starts with `6L...`)
4. Copy the **Secret Key** (keep this secure, not needed for static sites)

### reCAPTCHA Keys
- **Site Key**: `[Your reCAPTCHA Site Key]` (public, safe to expose)
- **Secret Key**: `[Your reCAPTCHA Secret Key]` (keep secure, not used for static sites)

**Note**: For static sites, only the Site Key is needed. The Secret Key would be used if you add server-side verification later.

---

## Google Analytics Credentials

### Google Analytics Setup
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website (e.g., `propage.in`)
3. Set up a data stream:
   - **Platform**: Web
   - **Website URL**: `https://propage.in`
   - **Stream name**: ProPage.in Website
4. Copy the **Measurement ID** (starts with `G-`)

### Analytics Credentials
- **Measurement ID**: `[Your GA Measurement ID]` (e.g., `G-XXXXXXXXXX`)

### Environment Variables (for .env.local)
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=[Your GA Measurement ID]
```

**Note**: The Measurement ID is safe to expose in client-side code as it's public-facing.

---

## GitHub Secrets (for CI/CD)

### Required Secrets for GitHub Actions
- `NEXT_PUBLIC_SUPABASE_URL` = `[Your Supabase Project URL]`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[Your Supabase Anon Key]`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = `[Your Google reCAPTCHA Site Key]`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `[Your Google Analytics Measurement ID]`

---

## Notes

- Keep `SECRETS.local.md` secure and never share it publicly
- Rotate credentials if they are ever exposed
- Use environment variables for local development
- Use GitHub Secrets for production deployments

