import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quality Standards | Our Approach',
  description: 'Our commitment to SEO, accessibility, and performance. Every website meets these standards.',
}

export default function QualityStandardsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/our-approach" 
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-8 inline-block"
        >
          ← Back to Our Approach
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Quality Standards
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Every website we create meets these standards. Quality isn&apos;t optional:it&apos;s guaranteed.
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fast websites create better experiences and rank higher in search results.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Lighthouse Scores (Minimum 90+)</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>Performance</strong>: 90+ (fast loading, optimized)</li>
                <li><strong>Accessibility</strong>: 90+ (usable by everyone)</li>
                <li><strong>Best Practices</strong>: 90+ (modern standards)</li>
                <li><strong>SEO</strong>: 90+ (search engine optimized)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Core Web Vitals</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li><strong>LCP</strong> (Largest Contentful Paint): Under 2.5 seconds</li>
                <li><strong>FID</strong> (First Input Delay): Under 100 milliseconds</li>
                <li><strong>CLS</strong> (Cumulative Layout Shift): Under 0.1</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">SEO (Search Engine Optimization)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement complete SEO so your website can be found in search results.
            </p>
            
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Meta Tags</strong>:Title tags, descriptions, Open Graph tags for social sharing</li>
              <li><strong>Structured Data</strong>:Schema.org markup so search engines understand your content</li>
              <li><strong>Sitemap</strong>:XML sitemap for search engine crawling</li>
              <li><strong>Semantic HTML</strong>:Proper HTML structure for better understanding</li>
              <li><strong>Mobile-Friendly</strong>:Responsive design that works on all devices</li>
              <li><strong>Fast Loading</strong>:Performance directly impacts search rankings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Accessibility</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We build websites that everyone can use, regardless of ability or device.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">WCAG 2.1 AA Compliance</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We follow Web Content Accessibility Guidelines to ensure:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Keyboard navigation works throughout</li>
                <li>Screen readers can understand content</li>
                <li>Color contrast meets standards</li>
                <li>Text is readable and resizable</li>
                <li>Forms are accessible and clear</li>
                <li>Focus indicators are visible</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Accessibility isn&apos;t just the right thing to do:it&apos;s also good for business. 
              Accessible websites reach more people and often rank better in search results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Cross-Browser & Device Testing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your website works perfectly everywhere:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Browsers</strong>:Chrome, Firefox, Safari, Edge</li>
              <li><strong>Mobile</strong>:iOS Safari, Chrome Mobile</li>
              <li><strong>Tablets</strong>:iPad, Android tablets</li>
              <li><strong>Desktop</strong>:All screen sizes from 1920px down to 320px</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why These Standards Matter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">For Business Owners</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Fast, accessible websites reach more customers, rank higher in search, and create better experiences. 
                  This means more visitors, more conversions, and better business results.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">For Users</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Everyone can use your website, regardless of their device, connection speed, or abilities. 
                  Fast, accessible websites are simply better experiences.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">For Search Engines</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Search engines favor fast, accessible, well-structured websites. 
                  Meeting these standards helps your website rank higher and get discovered.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
