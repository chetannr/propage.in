import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          We create minimal, elegant websites in{' '}
          <span className="text-gray-700">7 days</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Quality guaranteed (Lighthouse 90+), full SEO & accessibility. Fast delivery, exceptional results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            Get Started
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-50 transition-colors text-lg font-medium"
          >
            View Our Work
          </Link>
        </div>
        <p className="mt-12 text-sm text-gray-500">
          Goal: 2000 websites in 2 years
        </p>
      </div>
    </section>
  )
}

