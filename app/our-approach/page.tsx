import { documentationItems } from '@/data/documentation'
import ApproachCard from '@/components/ui/ApproachCard'
import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Approach',
  description: 'Public access to our website creation rulebook, design principles, technical standards, and implementation guides.',
  openGraph: {
    title: 'Our Approach | ProPage.in',
    description: 'Public access to our website creation rulebook, design principles, technical standards, and implementation guides.',
    type: 'website',
  },
}

export default function OurApproachPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/our-approach'])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Our Approach
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Our approach to creating minimal, elegant websites. Learn about our design philosophy, process, and quality standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationItems.map((item, index) => (
            <ApproachCard
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

