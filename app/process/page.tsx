import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Process',
  description: '7-day workflow breakdown: Planning, Development, Enhancements, Polish, Testing, and Deployment.',
  openGraph: {
    title: 'Our Process | ProPage.in',
    description: '7-day workflow breakdown: Planning, Development, Enhancements, Polish, Testing, and Deployment.',
    type: 'website',
  },
}

export default function ProcessPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/process'])
  const days = [
    {
      day: 1,
      title: 'Planning & Setup',
      tasks: [
        'Project brief and requirements',
        'Content audit',
        'Design direction review',
        'Repository setup',
        'Project setup documentation',
      ],
    },
    {
      day: 2,
      title: 'Core Development',
      tasks: [
        'Design system setup',
        'Component library creation',
        'Core sections development',
        'Content implementation',
      ],
    },
    {
      day: 3,
      title: 'Core Development (Continued)',
      tasks: [
        'Complete all main sections',
        'Responsive design implementation',
        'Basic styling and polish',
      ],
    },
    {
      day: 4,
      title: 'Enhancements',
      tasks: [
        'SEO implementation (meta tags, structured data)',
        'Accessibility improvements',
        'Performance optimization',
        'Image optimization',
      ],
    },
    {
      day: 5,
      title: 'Content & Polish',
      tasks: [
        'Final content review',
        'Typography and spacing refinement',
        'Cross-browser testing',
        'Mobile testing',
      ],
    },
    {
      day: 6,
      title: 'Testing',
      tasks: [
        'Cross-browser testing',
        'Device testing (mobile, tablet, desktop)',
        'Accessibility audit (WAVE, keyboard navigation)',
        'Performance audit (Lighthouse)',
        'SEO validation',
        'Content review',
      ],
    },
    {
      day: 7,
      title: 'Deployment',
      tasks: [
        'Final build',
        'Deploy to hosting',
        'Verify all functionality',
        'Submit to search engines',
        'Set up analytics (if needed)',
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
          Our 7-Day Process
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          From planning to deployment in one week
        </p>

        <div className="space-y-8">
          {days.map((day) => (
            <div key={day.day} className="border-l-4 border-gray-900 dark:border-gray-100 pl-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 mr-4">
                  Day {day.day}
                </span>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {day.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {day.tasks.map((task, index) => (
                  <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-gray-900 dark:text-gray-100 mr-2">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="mt-16 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Quality Gates
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every website must pass these quality gates before deployment:
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>Lighthouse Performance: 90+</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>Lighthouse Accessibility: 90+</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>Lighthouse Best Practices: 90+</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>Lighthouse SEO: 90+</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>WCAG 2.1 AA compliance</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 dark:text-gray-100 mr-2">✓</span>
              <span>Complete SEO implementation</span>
            </li>
          </ul>
        </section>

        <section className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ready to start your project?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors text-lg font-medium"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  )
}

