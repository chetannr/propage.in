import StorytellingForm from '@/components/forms/StorytellingForm'
import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Get Started | ProPage.in',
  description: 'Share your vision with us. Let\'s create a minimal, elegant website that tells your story.',
  openGraph: {
    title: 'Get Started | ProPage.in',
    description: 'Share your vision with us. Let\'s create a minimal, elegant website that tells your story.',
    type: 'website',
  },
}

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/contact'])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div>
        <StorytellingForm />
      </div>
    </>
  )
}

