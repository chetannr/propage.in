import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technical Stack | Our Approach',
  description: 'Modern technologies we use: Next.js, TypeScript, Tailwind CSS. Why these choices matter.',
}

export default function TechnicalStackPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/our-approach" 
          className="text-gray-600 hover:text-gray-900 transition-colors mb-8 inline-block"
        >
          ← Back to Our Approach
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Technical Stack
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Modern, proven technologies that deliver fast, reliable websites. Here&apos;s what we use and why.
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Core Technologies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js</h3>
                <p className="text-gray-700 mb-2">
                  A React framework that makes building fast, SEO-friendly websites easy.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Server-side rendering for better SEO</li>
                  <li>Automatic code splitting for performance</li>
                  <li>Built-in optimization for images and fonts</li>
                  <li>Industry standard, well-maintained</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript</h3>
                <p className="text-gray-700 mb-2">
                  JavaScript with type safety. Catches errors before they happen.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fewer bugs and errors</li>
                  <li>Better code quality and maintainability</li>
                  <li>Improved developer experience</li>
                  <li>Industry standard for modern web development</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                <p className="text-gray-700 mb-2">
                  Utility-first CSS framework for rapid, consistent design.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Fast development with consistent design</li>
                  <li>Smaller CSS files (only what you use)</li>
                  <li>Easy to maintain and update</li>
                  <li>Responsive design built-in</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why These Technologies?</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-700">
                  These technologies are optimized for speed. Next.js handles server-side rendering and code splitting. 
                  Tailwind CSS generates only the CSS you need. The result? Fast-loading websites.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SEO-Friendly</h3>
                <p className="text-gray-700">
                  Next.js provides server-side rendering, which means search engines can easily read and index your content. 
                  This helps your website rank better in search results.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintainable</h3>
                <p className="text-gray-700">
                  TypeScript catches errors early. Tailwind CSS keeps styles consistent. 
                  These technologies make websites easier to maintain and update over time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Standards</h3>
                <p className="text-gray-700">
                  These are industry-standard technologies used by major companies. 
                  They&apos;re well-maintained, have strong communities, and will be supported for years to come.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What This Means for You</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Business Owners</h3>
                <p className="text-gray-700">
                  You get a fast, reliable website that works everywhere and ranks well in search. 
                  Modern technologies mean your website will be easier to maintain and update in the future.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Developers</h3>
                <p className="text-gray-700">
                  Clean, maintainable code using industry-standard tools. TypeScript provides type safety. 
                  Tailwind CSS makes styling consistent and fast. Next.js handles the complex parts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">For Designers</h3>
                <p className="text-gray-700">
                  Tailwind CSS makes it easy to implement designs consistently. 
                  The utility-first approach means designs translate directly to code without custom CSS.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Deployment</h2>
            <p className="text-gray-700 mb-4">
              We deploy websites using modern hosting platforms that ensure:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fast global content delivery (CDN)</li>
              <li>Automatic SSL certificates (secure connections)</li>
              <li>Easy updates and maintenance</li>
              <li>Reliable uptime and performance</li>
              <li>Scalability as your business grows</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
