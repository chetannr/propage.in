import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/shared/SkipLink'

export const metadata: Metadata = {
  metadataBase: new URL('https://propage.in'),
  title: {
    default: 'ProPage.in | Minimal, Elegant Websites in 7 Days',
    template: '%s | ProPage.in',
  },
  description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility. Fast delivery, exceptional results.',
  robots: {
    index: true,
    follow: true,
  },
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'ProPage.in | Minimal, Elegant Websites in 7 Days',
    description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility.',
    url: 'https://propage.in',
    siteName: 'ProPage.in',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ProPage.in - Minimal, Elegant Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProPage.in | Minimal, Elegant Websites in 7 Days',
    description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/propage-logo.png" as="image" />
        <link rel="icon" type="image/png" href="/propage-favicon.png" />
        <link rel="icon" type="image/svg+xml" href="/LogoIcon16x16.svg" />
        <link rel="apple-touch-icon" href="/LogoIcon512x512.svg" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/LogoIcon512x512.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ProPage.in',
              url: 'https://propage.in',
              description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility.',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ProPage.in',
              url: 'https://propage.in',
            }),
          }}
        />
      </head>
      <body>
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

