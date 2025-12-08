import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Website creation service packages and pricing. Contact us for a custom quote.',
  openGraph: {
    title: 'Pricing | ProPage.in',
    description: 'Website creation service packages and pricing. Contact us for a custom quote.',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Pricing
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Transparent pricing for website creation services
        </p>

        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 mb-6">
            We offer custom pricing based on your specific needs. Every project includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto text-left">
            <li>7-day delivery</li>
            <li>Minimal, elegant design</li>
            <li>Full development (React + TypeScript)</li>
            <li>Complete SEO implementation</li>
            <li>WCAG 2.1 AA accessibility</li>
            <li>Performance optimization (Lighthouse 90+)</li>
            <li>Deployment and setup</li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Contact us for a custom quote tailored to your project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}

