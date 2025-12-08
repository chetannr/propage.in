import { documentationItems } from '@/data/documentation'
import DocumentationCard from '@/components/ui/DocumentationCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Public access to our website creation rulebook, design principles, technical standards, and implementation guides.',
  openGraph: {
    title: 'Documentation | ProPage.in',
    description: 'Public access to our website creation rulebook, design principles, technical standards, and implementation guides.',
    type: 'website',
  },
}

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Documentation
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Our approach to creating minimal, elegant websites. Learn about our design philosophy, process, and quality standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationItems.map((item, index) => (
            <DocumentationCard
              key={index}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

