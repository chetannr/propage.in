import StorytellingForm from '@/components/forms/StorytellingForm'
import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'
import Link from 'next/link'

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
        {/* Self-Service Guides Notice */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Prefer to do it yourself?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    We understand you might prefer to handle certain tasks yourself, especially when it comes to domain and DNS management. We&apos;ve created step-by-step guides to help you complete common tasks independently.
                  </p>
                  <Link
                    href="/guides"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    View Self-Service Guides
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StorytellingForm />
      </div>
    </>
  )
}

