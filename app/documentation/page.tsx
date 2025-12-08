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
  const categories = {
    rulebook: documentationItems.filter(item => item.category === 'rulebook'),
    design: documentationItems.filter(item => item.category === 'design'),
    technical: documentationItems.filter(item => item.category === 'technical'),
    implementation: documentationItems.filter(item => item.category === 'implementation'),
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Documentation
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Our complete rulebook, design principles, and implementation guides. Publicly accessible to showcase our expertise.
        </p>

        {/* Rulebook */}
        {categories.rulebook.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rulebook</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.rulebook.map((item, index) => (
                <DocumentationCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </section>
        )}

        {/* Design */}
        {categories.design.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Design Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.design.map((item, index) => (
                <DocumentationCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </section>
        )}

        {/* Technical */}
        {categories.technical.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.technical.map((item, index) => (
                <DocumentationCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </section>
        )}

        {/* Implementation */}
        {categories.implementation.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.implementation.map((item, index) => (
                <DocumentationCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

