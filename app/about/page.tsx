import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Husband & wife team creating minimal, elegant websites. Following design principles from masters, delivering quality and speed.',
  openGraph: {
    title: 'About Us | ProPage.in',
    description: 'Husband & wife team creating minimal, elegant websites. Following design principles from masters, delivering quality and speed.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
          About ProPage.in
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              We are a husband & wife team passionate about creating minimal, elegant websites. 
              Each website we build is a masterpiece of design and functionality.
            </p>
            <p className="text-gray-700">
              We believe in quality over quantity, but we also believe in efficiency. Our proven 
              7-day process ensures fast delivery without compromising on quality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We&apos;re not just building websites—we&apos;re creating digital experiences that are 
              minimal, elegant, and purposeful.
            </p>
            <p className="text-gray-700">
              Every website follows our rigorous standards for quality, performance, accessibility, 
              and SEO. We combine proven processes with design principles from the masters to deliver 
              exceptional results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-700 mb-4">
              Our design principles are inspired by the masters:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 [&_li::marker]:mr-0">
              <li><strong>Adam Wathan & Steve Schoger</strong> - Utility-first design, Refactoring UI principles</li>
              <li><strong>Jony Ive</strong> - Extreme minimalism, clarity, purpose</li>
              <li><strong>Marc Newson</strong> - Industrial precision, functional beauty</li>
              <li><strong>Elon Musk</strong> - First principles thinking, &ldquo;the best part is no part&rdquo;</li>
            </ul>
            <p className="text-gray-700">
              We combine these philosophies with modern web technologies to create websites 
              that are both beautiful and functional.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              <strong>First Principles Thinking:</strong> We question everything. Every design 
              decision, every feature, every line of code must serve a purpose.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Minimal Elegance:</strong> We remove everything unnecessary. What remains 
              must be perfect. Less is more, but less must be perfect.
            </p>
            <p className="text-gray-700">
              <strong>Quality Guaranteed:</strong> Every website must pass our quality gates: 
              Lighthouse 90+, WCAG 2.1 AA compliance, complete SEO implementation. No exceptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 [&_li::marker]:mr-0">
              <li><strong>Proven Process:</strong> 7-day workflow that delivers results</li>
              <li><strong>Quality Standards:</strong> Lighthouse 90+ scores guaranteed</li>
              <li><strong>Fast Delivery:</strong> Your website ready in one week</li>
              <li><strong>Complete Solution:</strong> Design, development, SEO, accessibility, deployment</li>
              <li><strong>Transparent:</strong> Daily updates, clear communication</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

