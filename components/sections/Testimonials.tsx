import { testimonials } from '@/data/testimonials'
import Card from '@/components/ui/Card'

export default function Testimonials() {
  if (testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

