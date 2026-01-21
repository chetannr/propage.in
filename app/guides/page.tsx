import { guideItems } from '@/data/guides'
import ApproachCard from '@/components/ui/ApproachCard'
import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Step-by-step guides and tutorials for domain management, DNS configuration, and technical setup tasks.',
  openGraph: {
    title: 'Guides | ProPage.in',
    description: 'Step-by-step guides and tutorials for domain management, DNS configuration, and technical setup tasks.',
    type: 'website',
  },
}

export default function GuidesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/guides'])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto">
            Step-by-step guides and tutorials for domain management, DNS configuration, and technical setup tasks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideItems.map((item, index) => (
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
