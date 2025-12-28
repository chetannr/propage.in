import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Design Principles | Our Approach',
  description: 'Our approach to minimal, elegant design. Inspired by masters of simplicity and purpose.',
}

export default function DesignPrinciplesPage() {
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
          Design Principles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Our approach to creating minimal, elegant websites. Every design decision serves a purpose.
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">The Philosophy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We believe in <strong>minimal elegance</strong>:design that is clear, purposeful, and confident. 
              Every element must serve a function. Every color, font, and spacing decision has a reason.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our principles are inspired by masters of simplicity: Adam Wathan, Steve Schoger, Jony Ive, 
              Marc Newson, and Elon Musk. We combine their philosophies with modern web technologies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Core Principles</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Purpose Over Decoration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every design element must serve a function. We remove everything unnecessary. 
                  If you can&apos;t explain why something exists, we remove it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Confidence Through Restraint</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We don&apos;t need to show off. Great design is confident, not needy. 
                  We let the work speak for itself through clarity and purpose.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">3. First Principles Thinking</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We question everything. We don&apos;t copy patterns blindly. 
                  We start from fundamental truths: What does this website need? What&apos;s the minimum required?
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Industrial Elegance</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Precision meets beauty. We combine mathematical spacing systems with emotional warmth. 
                  Industrial doesn&apos;t mean cold:it means clear, purposeful, and human.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Visual Design</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Color</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We start with monochrome (black, white, grays). We add color only when it serves a purpose.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Maximum 3-4 colors total</li>
                  <li>Every color has a reason</li>
                  <li>High contrast for accessibility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Typography</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We prefer system fonts for speed and familiarity. We add custom fonts only when necessary.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Maximum 2 font families</li>
                  <li>Clear hierarchy (headings, body, small)</li>
                  <li>Readable sizes and line-height</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Spacing</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  We use consistent, mathematical spacing systems. White space is a design element.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>8px base spacing system</li>
                  <li>Generous white space</li>
                  <li>Consistent throughout</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What This Means for You</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When we design your website, we focus on:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Clarity</strong>:Users understand immediately what you do</li>
              <li><strong>Purpose</strong>:Every element guides users toward their goal</li>
              <li><strong>Elegance</strong>:Beautiful through simplicity, not decoration</li>
              <li><strong>Confidence</strong>:Professional, trustworthy, not desperate</li>
              <li><strong>Performance</strong>:Fast, efficient, accessible to everyone</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
