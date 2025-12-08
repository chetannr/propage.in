import Link from 'next/link'
import { mainService, includedServices } from '@/data/services'
import Card from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Website creation services: 7-day delivery, full-stack implementation, SEO optimized, accessibility compliant, performance optimized.',
  openGraph: {
    title: 'Services | ProPage.in',
    description: 'Website creation services: 7-day delivery, full-stack implementation, SEO optimized, accessibility compliant, performance optimized.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Complete website creation from design to deployment
        </p>

        {/* Main Service */}
        <section className="mb-16">
          <Card className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {mainService.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {mainService.description}
            </p>
            <ul className="space-y-3">
              {mainService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-900 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* What's Included */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {includedServices.map((service, index) => (
              <Card key={index} hover>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Link */}
        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want to know more about our process?
          </p>
          <Link
            href="/process"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            View Our 7-Day Process
          </Link>
        </section>
      </div>
    </div>
  )
}

