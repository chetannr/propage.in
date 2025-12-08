import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch to start your website project. We respond within 24 hours.',
  openGraph: {
    title: 'Contact | ProPage.in',
    description: 'Get in touch to start your website project. We respond within 24 hours.',
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

