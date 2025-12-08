import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let&apos;s create a minimal, elegant website for your business. Fast delivery, exceptional quality.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

