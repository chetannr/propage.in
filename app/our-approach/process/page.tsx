import type { Metadata } from 'next'
import Link from 'next/link'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Our Process | Our Approach',
  description: 'How we create websites in 7 days. Our proven workflow from planning to deployment.',
}

export default function ProcessPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/our-approach/process'])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/our-approach" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 inline-block"
        >
          ← Back to Our Approach
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Our Process
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          A proven 7-day workflow that delivers quality results. Fast delivery without compromising on excellence.
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">7-Day Workflow</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Day 1: Planning & Foundation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We start by understanding your goals, gathering content, and setting up the project foundation.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Project brief and requirements</li>
                  <li>Content collection and organization</li>
                  <li>Design direction and planning</li>
                  <li>Technical setup and repository</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Days 2-5: Development</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We build your website with attention to design, functionality, and quality standards.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Design system implementation</li>
                  <li>Component development</li>
                  <li>Content integration</li>
                  <li>SEO and accessibility implementation</li>
                  <li>Performance optimization</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Day 6: Testing & Polish</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We thoroughly test everything to ensure quality and performance.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Cross-browser and device testing</li>
                  <li>Accessibility audit</li>
                  <li>Performance audit (Lighthouse 90+)</li>
                  <li>SEO validation</li>
                  <li>Content review and polish</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-900 dark:border-gray-100 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Day 7: Deployment</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We deploy your website and ensure everything works perfectly.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Final deployment</li>
                  <li>Post-deployment verification</li>
                  <li>SEO setup (sitemap, Search Console)</li>
                  <li>Handoff and documentation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quality Gates</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every website must pass these quality standards before deployment:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Lighthouse 90+</strong>:Performance, accessibility, best practices, SEO</li>
              <li><strong>WCAG 2.1 AA</strong>:Accessibility compliance for all users</li>
              <li><strong>Complete SEO</strong>:Meta tags, structured data, sitemap</li>
              <li><strong>Cross-browser</strong>:Works on all modern browsers</li>
              <li><strong>Responsive</strong>:Perfect on mobile, tablet, and desktop</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Communication</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We keep you informed throughout the process:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Daily updates on progress</li>
              <li>Clear communication about decisions</li>
              <li>Opportunities for feedback at key stages</li>
              <li>Transparent process:you know what&apos;s happening</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why 7 Days?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our 7-day process balances speed with quality. We&apos;ve refined this workflow to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Deliver results quickly without rushing</li>
              <li>Maintain high quality standards</li>
              <li>Follow a proven, repeatable process</li>
              <li>Ensure nothing is missed</li>
              <li>Provide clear milestones and expectations</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}
