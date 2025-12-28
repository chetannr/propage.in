# Security Headers Configuration

This document describes the security headers implemented for ProPage.in and how to configure additional headers at the hosting level.

## Currently Implemented (Meta Tags)

The following security headers are implemented via meta tags in the root layout (`app/layout.tsx`):

- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information

## Recommended HTTP Headers (Hosting Level)

For static sites, HTTP headers must be configured at the hosting/server level. The following headers should be configured:

### Required Headers

1. **Content-Security-Policy (CSP)**
   ```
   Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-src https://www.google.com;
   ```
   Note: Adjust based on your actual requirements (external scripts, APIs, etc.)

2. **X-Content-Type-Options**
   ```
   X-Content-Type-Options: nosniff
   ```

3. **X-Frame-Options**
   ```
   X-Frame-Options: DENY
   ```

4. **Referrer-Policy**
   ```
   Referrer-Policy: strict-origin-when-cross-origin
   ```

5. **Permissions-Policy** (formerly Feature-Policy)
   ```
   Permissions-Policy: geolocation=(), microphone=(), camera=()
   ```

6. **Strict-Transport-Security (HSTS)** (if using HTTPS)
   ```
   Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
   ```

## Configuration by Hosting Provider

### GitHub Pages

GitHub Pages automatically sets some security headers, but you can use a `_headers` file (Netlify-style) or configure via:

1. **Using `.htaccess`** (if GitHub Pages supports it - usually not available)
2. **Using Cloudflare** (if using Cloudflare in front of GitHub Pages)
   - Go to Security → Security Headers
   - Configure custom headers

### Netlify

Create a `_headers` file in the `public/` directory:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-src https://www.google.com;

/*.html
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
```

### Vercel

Create a `vercel.json` file:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-src https://www.google.com;"
        }
      ]
    }
  ]
}
```

### Apache (.htaccess)

```apache
<IfModule mod_headers.c>
  Header set X-Frame-Options "DENY"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
  Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-src https://www.google.com;"
</IfModule>
```

### Nginx

```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co; frame-src https://www.google.com;" always;
```

## CSP Policy Explanation

The Content-Security-Policy needs to be adjusted based on your actual external resources:

- `script-src`: Allow scripts from self, inline scripts (for theme script), eval (for Next.js), Google (for reCAPTCHA), Supabase SDK
- `style-src`: Allow styles from self and inline styles (for Tailwind and theme)
- `img-src`: Allow images from self, data URIs, and HTTPS sources
- `connect-src`: Allow API connections to self and Supabase
- `frame-src`: Allow iframes from Google (for reCAPTCHA)

## Testing Security Headers

Use these tools to verify your headers:

1. [SecurityHeaders.com](https://securityheaders.com/) - Comprehensive header analysis
2. [Mozilla Observatory](https://observatory.mozilla.org/) - Security analysis
3. Browser DevTools → Network tab → Headers section
4. Online tools: [webhint.io](https://webhint.io/)

## Notes

- Meta tags for security headers have limited effectiveness compared to HTTP headers
- HTTP headers set at the server level are more reliable and secure
- CSP policies need to be tested thoroughly to avoid breaking functionality
- Start with a permissive CSP and tighten it gradually
- Monitor browser console for CSP violations

## Current Status

- ✅ Meta tags implemented for basic headers
- ⚠️ HTTP headers need to be configured at hosting level
- ⚠️ CSP policy needs to be customized based on actual external resources used

