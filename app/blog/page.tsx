import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thought leadership, design insights, web development tips, and case studies.',
  openGraph: {
    title: 'Blog | ProPage.in',
    description: 'Thought leadership, design insights, web development tips, and case studies.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          Thought leadership, design insights, and web development tips
        </p>

        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Blog content coming soon. Check back for:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 max-w-2xl mx-auto text-left">
            <li>Design principles and best practices</li>
            <li>Web development insights</li>
            <li>Case studies and project breakdowns</li>
            <li>Industry trends and updates</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

