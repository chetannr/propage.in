import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started | ProPage.in',
  description: 'Share your vision with us. Let\'s create a minimal, elegant website that tells your story.',
  openGraph: {
    title: 'Get Started | ProPage.in',
    description: 'Share your vision with us. Let\'s create a minimal, elegant website that tells your story.',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

