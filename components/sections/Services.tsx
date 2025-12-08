export default function Services() {
  const services = [
    {
      title: '7-Day Turnaround',
      description: 'Fast delivery without compromising quality. Your website ready in one week.',
    },
    {
      title: 'Quality Guaranteed',
      description: 'Lighthouse 90+ scores across all metrics. Performance, accessibility, SEO, and best practices.',
    },
    {
      title: 'Minimal, Elegant Design',
      description: 'Following principles from design masters. Clean, purposeful, confident.',
    },
    {
      title: 'Full SEO & Accessibility',
      description: 'Complete SEO implementation and WCAG 2.1 AA compliance. Ready for search engines and all users.',
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

