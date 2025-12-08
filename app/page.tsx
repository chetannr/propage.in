import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import CTASection from '@/components/sections/CTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility. Fast delivery, exceptional results.',
  openGraph: {
    title: 'ProPage.in | Minimal, Elegant Websites in 7 Days',
    description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProPage.in | Minimal, Elegant Websites in 7 Days',
    description: 'We create minimal, elegant websites in 7 days. Quality guaranteed (Lighthouse 90+), full SEO & accessibility.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CTASection />
    </>
  )
}

