import { portfolioItems } from '@/data/portfolio'
import Card from '@/components/ui/Card'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Case studies of our completed websites: Law Park Educational Trust, Sarala Yoga, and more.',
  openGraph: {
    title: 'Portfolio | ProPage.in',
    description: 'Case studies of our completed websites: Law Park Educational Trust, Sarala Yoga, and more.',
    type: 'website',
  },
}

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Our Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Case studies of our completed projects
        </p>

        <div className="space-y-16">
          {portfolioItems.map((item, index) => (
            <article key={index} className="border-b border-gray-200 pb-16 last:border-b-0 last:pb-0">
              <Card>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Challenge
                    </h3>
                    <p className="text-gray-700">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-700">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {item.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <span className="text-gray-900 mr-2">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

