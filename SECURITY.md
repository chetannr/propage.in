# Security & Credentials Management

## Sensitive Information

This project contains sensitive credentials that should **never** be committed to Git.

## Secure Files

### `SECRETS.local.md`
- Contains all sensitive credentials (passwords, API keys, database credentials)
- **Automatically ignored by `.gitignore`**
- Never commit this file to Git
- Keep this file secure and private

### `SECRETS.template.md`
- Template file showing the structure of credentials needed
- Safe to commit (contains no actual secrets)
- Copy to `SECRETS.local.md` and fill in your actual credentials

## What's Protected

The following sensitive information is stored in `SECRETS.local.md`:

- ✅ Supabase database password
- ✅ Supabase API keys (anon/public key)
- ✅ Supabase project URLs
- ✅ Admin user credentials
- ✅ GitHub Secrets values

## Environment Variables

Sensitive environment variables are stored in:
- `.env.local` - Local development (already in `.gitignore`)
- `SECRETS.local.md` - Reference file with all credentials (in `.gitignore`)

## Best Practices

1. **Never commit**:
   - `SECRETS.local.md`
   - `.env.local`
   - Any file containing actual passwords or API keys

2. **Always use**:
   - Environment variables for local development
   - GitHub Secrets for CI/CD deployments
   - `SECRETS.local.md` as a local reference (not committed)

3. **If credentials are exposed**:
   - Rotate all exposed credentials immediately
   - Update `SECRETS.local.md` with new values
   - Update GitHub Secrets if needed
   - Review Git history and remove if accidentally committed

## Files in .gitignore

The following patterns are ignored:
- `.env*.local` - Environment variable files
- `SECRETS.local.md` - Sensitive credentials file
- `*.secrets.md` - Any secrets files
- `secrets.local.md` - Alternative naming

## Setup Instructions

1. Copy `SECRETS.template.md` to `SECRETS.local.md`
2. Fill in your actual credentials in `SECRETS.local.md`
3. The file will automatically be ignored by Git
4. Never share `SECRETS.local.md` publicly

