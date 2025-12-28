import Link from 'next/link'
import { mainService, includedServices } from '@/data/services'
import Card from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Static website creation services: 7-day delivery, Razorpay payment link integration, SEO optimized, accessibility compliant, performance optimized.',
  openGraph: {
    title: 'Services | ProPage.in',
    description: 'Static website creation services: 7-day delivery, Razorpay payment link integration, SEO optimized, accessibility compliant, performance optimized.',
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
          Complete static website creation from design to deployment
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

        {/* Important Note */}
        <section className="mb-16">
          <Card className="bg-gray-50 border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Important: Static Websites Only
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We currently support <strong>static websites only</strong>. We do not build payment gateway integrations directly into websites.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              However, we can help you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Onboard to Razorpay and create payment pages on their platform</li>
              <li>Integrate Razorpay payment links into your static website</li>
              <li>Add buttons or links that redirect to your Razorpay payment pages</li>
            </ul>
            <p className="text-lg text-gray-700">
              This approach allows you to accept payments while keeping your website static and fast.
            </p>
          </Card>
        </section>

        {/* Process Link */}
        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Want to know more about our process?
          </p>
          <Link
            href="/process"
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors text-lg font-medium"
          >
            View Our 7-Day Process
          </Link>
        </section>
      </div>
    </div>
  )
}

