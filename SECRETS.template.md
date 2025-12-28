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

## GitHub Secrets (for CI/CD)

### Required Secrets for GitHub Actions
- `NEXT_PUBLIC_SUPABASE_URL` = `[Your Supabase Project URL]`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = `[Your Supabase Anon Key]`

---

## Notes

- Keep `SECRETS.local.md` secure and never share it publicly
- Rotate credentials if they are ever exposed
- Use environment variables for local development
- Use GitHub Secrets for production deployments

