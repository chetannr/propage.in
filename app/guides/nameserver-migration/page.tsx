import type { Metadata } from 'next'
import StructuredData from '@/components/shared/StructuredData'
import { generateBreadcrumbSchema, breadcrumbs } from '@/lib/breadcrumbs'

export const metadata: Metadata = {
  title: 'Domain Nameserver Migration Guide: GoDaddy to Cloudflare',
  description: 'Complete step-by-step training document for migrating a domain\'s nameservers from GoDaddy to Cloudflare. Even someone with no technical background can follow these steps.',
  openGraph: {
    title: 'Domain Nameserver Migration Guide: GoDaddy to Cloudflare | ProPage.in',
    description: 'Complete step-by-step training document for migrating a domain\'s nameservers from GoDaddy to Cloudflare.',
    type: 'website',
  },
}

export default function NameserverMigrationGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs['/guides/nameserver-migration'])

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Domain Nameserver Migration Guide: GoDaddy to Cloudflare
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Complete Step-by-Step Training Document
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            This guide provides detailed instructions for migrating a domain&apos;s nameservers from GoDaddy to Cloudflare. Even someone with no technical background can follow these steps.
          </p>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-0">
                Table of Contents
              </h2>
              <nav aria-label="Table of contents">
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <a href="#what-you-need-to-know" className="text-blue-600 dark:text-blue-400 hover:underline">
                      What You Need to Know (Basics)
                    </a>
                  </li>
                  <li>
                    <a href="#what-youll-need" className="text-blue-600 dark:text-blue-400 hover:underline">
                      What You&apos;ll Need Before Starting
                    </a>
                  </li>
                  <li>
                    <a href="#step-by-step" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Step-by-Step Process
                    </a>
                  </li>
                  <li>
                    <a href="#verification" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Verification Steps
                    </a>
                  </li>
                  <li>
                    <a href="#troubleshooting" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Troubleshooting
                    </a>
                  </li>
                  <li>
                    <a href="#glossary" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Glossary of Terms
                    </a>
                  </li>
                </ol>
              </nav>
            </div>

            <section id="what-you-need-to-know" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                What You Need to Know (Basics)
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  What are Nameservers?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Nameservers</strong> are like the &quot;GPS coordinates&quot; of your domain. They tell the internet where your website&apos;s actual files and emails are located. Think of it like:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Your domain name = Your home address</li>
                  <li>Nameservers = Instructions on where the postal service should deliver mail</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Why Change Nameservers?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You might want to use Cloudflare&apos;s nameservers if you want to:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Use Cloudflare&apos;s security features (DDoS protection, SSL certificates)</li>
                  <li>Improve website performance</li>
                  <li>Manage DNS records more easily</li>
                  <li>Get better analytics and monitoring</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  What Will Happen?
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Your domain will continue to work</li>
                  <li>DNS changes take 1-2 hours to fully propagate (sometimes up to 24 hours)</li>
                  <li>You&apos;ll have full control over your DNS settings in Cloudflare</li>
                  <li>Your website might briefly be inaccessible during propagation (this is rare but possible)</li>
                </ul>
              </div>
            </section>

            <section id="what-youll-need" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                What You&apos;ll Need Before Starting
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Required Information
                </h3>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                    <span className="text-gray-700 dark:text-gray-300">Your domain name (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">bclclub.in</code>)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                    <span className="text-gray-700 dark:text-gray-300">Access to your GoDaddy account (with admin privileges)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                    <span className="text-gray-700 dark:text-gray-300">Access to create a Cloudflare account (or already have one)</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                    <span className="text-gray-700 dark:text-gray-300">15-30 minutes of uninterrupted time</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Required Accounts
                </h3>
                <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li><strong>GoDaddy Account</strong> - Where your domain is registered</li>
                  <li><strong>Cloudflare Account</strong> - Free account (<a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.cloudflare.com</a>)</li>
                </ol>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Browser Requirements
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Any modern web browser (Chrome, Safari, Firefox, Edge)</li>
                  <li>JavaScript enabled</li>
                  <li>Cookies enabled</li>
                </ul>
              </div>
            </section>

            <section id="step-by-step" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Step-by-Step Process
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Phase 1: Prepare Cloudflare (Get Your New Nameservers)
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 1: Create a Cloudflare Account (if you don&apos;t have one)
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Go to <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.cloudflare.com</a></li>
                    <li>Click on &quot;Sign Up&quot; button (usually in the top right)</li>
                    <li>Enter your email address</li>
                    <li>Create a strong password</li>
                    <li>Check the &quot;I&apos;m not a robot&quot; box</li>
                    <li>Click &quot;Create Account&quot;</li>
                    <li>Verify your email by clicking the link sent to your inbox</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 2: Add Your Domain to Cloudflare
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>After logging into Cloudflare, look for the &quot;Domains&quot; section (usually on the left sidebar)</li>
                    <li>Click &quot;+ Add&quot; or &quot;Add Domain&quot; button</li>
                    <li>Type your domain name (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">bclclub.in</code>) - <strong>Don&apos;t include www or https://</strong></li>
                    <li>Click &quot;Add site&quot; or &quot;Continue&quot;</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 3: Select Your Cloudflare Plan
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>You&apos;ll see different plan options (Free, Pro, Business, Enterprise)</li>
                    <li>For most needs, select the <strong>Free plan</strong> - it&apos;s at $0/month</li>
                    <li>Click &quot;Select plan&quot; for the Free option</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 4: Get Your Cloudflare Nameservers
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>After selecting your plan, the page will process for a few moments</li>
                    <li>You&apos;ll be taken to a page that says &quot;Waiting for your registrar to propagate your new nameservers&quot;</li>
                    <li>Look for a section called <strong>&quot;Show nameserver instructions&quot;</strong> (might be a link or expandable section)</li>
                    <li>Click on it to expand</li>
                    <li>You should now see your two Cloudflare nameservers. They will look like:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">blair.ns.cloudflare.com</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">harvey.ns.cloudflare.com</code></li>
                      </ul>
                    </li>
                    <li className="mt-2"><strong className="text-red-600 dark:text-red-400">⚠️ IMPORTANT: Write these down or copy them to a note. You&apos;ll need them in the next phase.</strong></li>
                  </ol>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Phase 2: Update GoDaddy (Change Your Domain&apos;s Nameservers)
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 5: Log into GoDaddy
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Go to <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.godaddy.com</a></li>
                    <li>Click &quot;Sign in&quot; (top right corner)</li>
                    <li>Enter your email and password</li>
                    <li>Complete any 2-factor authentication if prompted</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 6: Find Your Domain
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>After logging in, look for &quot;My Domains&quot; or &quot;Portfolio&quot; section</li>
                    <li>Find your domain name in the list (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">bclclub.in</code>)</li>
                    <li>Click on your domain name to open its settings</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 7: Access DNS/Nameserver Settings
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>You should now see your domain&apos;s control panel</li>
                    <li>Look for tabs at the top - you&apos;ll see options like:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>DNS</li>
                        <li>Registration Settings</li>
                        <li>Products</li>
                        <li>Activity Log</li>
                      </ul>
                    </li>
                    <li>Click on the <strong>&quot;DNS&quot;</strong> tab</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 8: Find the Nameservers Option
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>After clicking the DNS tab, you&apos;ll see multiple sub-tabs:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>DNS Records</li>
                        <li>Forwarding</li>
                        <li><strong>Nameservers</strong> ← Click this one</li>
                        <li>Hostnames</li>
                        <li>DNSSEC</li>
                      </ul>
                    </li>
                    <li>Click on <strong>&quot;Nameservers&quot;</strong> tab</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 9: Change Nameservers - Initial Screen
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>You&apos;ll see a section that says &quot;Using default nameservers&quot; or similar</li>
                    <li>Look for a button called <strong>&quot;Change Nameservers&quot;</strong> or <strong>&quot;Edit Nameservers&quot;</strong></li>
                    <li>Click this button</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 10: Open the Nameserver Edit Dialog
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A dialog box (pop-up window) will appear with the title &quot;Edit nameservers&quot; or similar.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    You&apos;ll see two options:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>⭕ <strong>GoDaddy Nameservers (recommended)</strong> - Usually pre-selected</li>
                    <li>⭕ <strong>I&apos;ll use my own nameservers</strong></li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 11: Select &quot;I&apos;ll Use My Own Nameservers&quot;
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Click on the radio button (circle) next to <strong>&quot;I&apos;ll use my own nameservers&quot;</strong></li>
                    <li>Two text input fields will appear:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Nameserver 1</li>
                        <li>Nameserver 2</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 12: Enter Cloudflare Nameservers
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li><strong>Click inside the &quot;Nameserver 1&quot; field</strong> (the first text box)</li>
                    <li>Type (or paste) the first Cloudflare nameserver:
                      <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto"><code>blair.ns.cloudflare.com</code></pre>
                    </li>
                    <li><strong>Click inside the &quot;Nameserver 2&quot; field</strong> (the second text box)</li>
                    <li>Type (or paste) the second Cloudflare nameserver:
                      <pre className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto"><code>harvey.ns.cloudflare.com</code></pre>
                    </li>
                    <li className="mt-2"><strong>Make sure there are no extra spaces or typos.</strong></li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 13: Save the Changes
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Look for a <strong>&quot;Save&quot;</strong> button at the bottom of the dialog box</li>
                    <li>Click the &quot;Save&quot; button</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 14: Confirm the Change
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    A warning message will appear saying:
                  </p>
                  <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 my-4 bg-yellow-50 dark:bg-yellow-900/20 text-gray-700 dark:text-gray-300 italic">
                    &quot;By clicking Continue, you consent to updating the nameservers for the selected domain(s). Changing nameservers is risky, and could potentially lead to your website disappearing from public view.&quot;
                  </blockquote>
                  <p className="text-gray-700 dark:text-gray-300">
                    This is normal! Click <strong>&quot;Continue&quot;</strong> to proceed.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 15: Wait for Processing
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>The system will process your changes (you&apos;ll see a loading spinner)</li>
                    <li>This usually takes 30 seconds to 2 minutes</li>
                    <li>Don&apos;t close the page or browser during this time</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Step 16: Verify Changes Were Saved
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>After processing, the page will refresh</li>
                    <li>You should now see:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Status: <strong>&quot;Using custom nameservers&quot;</strong></li>
                        <li>Nameserver 1: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">blair.ns.cloudflare.com</code></li>
                        <li>Nameserver 2: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">harvey.ns.cloudflare.com</code></li>
                      </ul>
                    </li>
                    <li className="mt-2"><strong className="text-green-600 dark:text-green-400">Congratulations! Your nameservers have been successfully changed! ✅</strong></li>
                  </ol>
                </div>
              </div>
            </section>

            <section id="verification" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Verification Steps
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  How to Verify Everything Worked
                </h3>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Immediate Verification (Within Minutes)
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Go back to your Cloudflare dashboard</li>
                    <li>Click on your domain name</li>
                    <li>Look for the &quot;Overview&quot; or &quot;Home&quot; section</li>
                    <li>The status should change from &quot;Pending&quot; to &quot;Active&quot; or show a success message
                      <ul className="list-disc list-inside ml-6 mt-2">
                        <li>This may take 5-30 minutes</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Detailed Verification (After 1-2 Hours)
                  </h4>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>In Cloudflare, go to <strong>DNS &gt; Records</strong></li>
                    <li>You should see your DNS records are now being managed by Cloudflare</li>
                    <li>You should see your existing A records (pointing to your website&apos;s IP address)</li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Technical Verification (Using Terminal/Command Line)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    If you want to verify at the technical level, you can run this command:
                  </p>
                  <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto mb-2"><code className="text-sm">nslookup bclclub.in</code></pre>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Replace <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">bclclub.in</code> with your actual domain name.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    The results should show Cloudflare&apos;s nameservers:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">blair.ns.cloudflare.com</code></li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">harvey.ns.cloudflare.com</code></li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Online Verification Tool
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Use <a href="https://mxtoolbox.com/nslookup.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://mxtoolbox.com/nslookup.aspx</a>:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Go to the website</li>
                    <li>Enter your domain name</li>
                    <li>Click &quot;MX Lookup&quot;</li>
                    <li>It should show Cloudflare nameservers in the results</li>
                  </ol>
                </div>
              </div>
            </section>

            <section id="troubleshooting" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Troubleshooting
              </h2>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Problem: Changes Aren&apos;t Taking Effect After 24 Hours
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>Clear your browser cache (Ctrl+Shift+Del on Windows, Cmd+Shift+Del on Mac)</li>
                    <li>Try accessing your site from a different device or network</li>
                    <li>Wait up to 48 hours in rare cases</li>
                    <li>Contact Cloudflare support</li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Problem: Website Shows &quot;Not Found&quot; or Error Page
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Possible Causes:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4 mb-3">
                    <li>DNS is still propagating (normal, wait 1-2 hours)</li>
                    <li>You didn&apos;t set up DNS records properly in Cloudflare</li>
                    <li>Your website&apos;s actual hosting is down</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>Check that you have A records set up in Cloudflare pointing to your website&apos;s IP address</li>
                    <li>In Cloudflare, go to <strong>DNS &gt; Records</strong> and verify your A records exist</li>
                    <li>Contact your website hosting provider to confirm the server is running</li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Problem: Email Isn&apos;t Working
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Possible Causes:</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4 mb-3">
                    <li>MX records weren&apos;t imported/configured in Cloudflare</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>In Cloudflare, go to <strong>DNS &gt; Records</strong></li>
                    <li>Look for MX records (they handle email)</li>
                    <li>If missing, you may need to recreate them</li>
                    <li>Contact your email service provider for the correct MX record values</li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Problem: SSL/HTTPS Certificate Errors
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>Go to Cloudflare dashboard</li>
                    <li>Click on <strong>SSL/TLS</strong> in the left menu</li>
                    <li>Make sure &quot;Full&quot; or &quot;Full (Strict)&quot; mode is selected</li>
                    <li>Wait 10-15 minutes for the certificate to activate</li>
                  </ol>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Problem: I Accidentally Changed the Wrong Domain
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Solution:</p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>Go back to GoDaddy</li>
                    <li>Go to the correct domain&apos;s nameserver settings</li>
                    <li>Change the nameservers back to GoDaddy defaults if needed:
                      <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">ns17.domaincontrol.com</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">ns18.domaincontrol.com</code></li>
                      </ul>
                    </li>
                    <li>Or enter the correct Cloudflare nameservers</li>
                  </ol>
                </div>
              </div>
            </section>

            <section id="glossary" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Glossary of Terms
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Term
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        What It Means
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Nameserver</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        Servers that tell the internet where your website and email services are located
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>DNS</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        Domain Name System - the system that translates domain names to IP addresses
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Propagation</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        The time it takes for DNS changes to spread across all internet servers (usually 1-2 hours)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>GoDaddy</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A domain registrar where you register and own domain names
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Cloudflare</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A DNS and security service that manages how your domain routes traffic
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>IP Address</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A unique number that identifies a server on the internet (like 192.168.1.1)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>A Record</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A DNS record that points your domain name to a specific IP address
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>MX Record</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A DNS record that handles email routing for your domain
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Portal/Dashboard</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        The control panel website where you manage your account settings
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Dialog/Modal</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A pop-up window that appears on top of the main webpage
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Field</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A text box where you can type information
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>Radio Button</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        A circular button that you click to select one option from multiple choices
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        <strong>TLD</strong>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        Top Level Domain - the last part of a domain name (.com, .in, .org, etc.)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Quick Reference Checklist
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Use this checklist when repeating this process for other domains:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Before You Start
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Have domain name ready</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Have GoDaddy account login</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Have Cloudflare account login (or can create one)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Cloudflare Setup
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Created/logged into Cloudflare account</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Added domain to Cloudflare</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Selected plan (Free)</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Found and noted Cloudflare nameservers:
                        <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                          <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">blair.ns.cloudflare.com</code></li>
                          <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">harvey.ns.cloudflare.com</code></li>
                        </ul>
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    GoDaddy Changes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Logged into GoDaddy</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Found and opened the domain</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Clicked DNS tab</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Clicked Nameservers sub-tab</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Clicked Change Nameservers button</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Selected &quot;I&apos;ll use my own nameservers&quot;</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Entered first nameserver exactly: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">blair.ns.cloudflare.com</code></span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Entered second nameserver exactly: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm">harvey.ns.cloudflare.com</code></span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Clicked Save</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Clicked Continue on the warning dialog</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Verified status shows &quot;Using custom nameservers&quot;</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Verification
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Waited 30 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Checked Cloudflare dashboard status changed to Active</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Verified DNS records appear in Cloudflare</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Website is accessible</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" disabled />
                      <span className="text-gray-700 dark:text-gray-300">Email is still working</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Common Questions (FAQ)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: How long does this process take?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> The setup takes 15-30 minutes. Full propagation across the internet takes 1-2 hours, but can take up to 24 hours in rare cases.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: Will my website go down during this process?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> Usually no. However, during propagation (first 1-2 hours), some people in different parts of the world might see the old or new settings inconsistently. This is normal and temporary.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: Can I undo this if something goes wrong?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> Yes! You can change back to GoDaddy nameservers or any other nameservers. Just follow the same steps but use different nameserver addresses.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: What if I have multiple domains?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> Repeat these steps for each domain individually. Each domain needs its own nameserver configuration.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: Do I need to pay for this?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> The Cloudflare free plan is completely free. If you&apos;re already paying for a GoDaddy domain, you&apos;ll continue paying them (nameserver changes don&apos;t affect domain registration fees).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: What about my current DNS records?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> When you add your domain to Cloudflare, it can scan and automatically import your existing records from GoDaddy. You can verify this worked in the Cloudflare DNS Records section.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Q: Can I do this on my phone?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>A:</strong> Yes, but a desktop or laptop is recommended for this process as it&apos;s easier to manage multiple windows and fields.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Support Resources
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you get stuck:
              </p>
              <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>Cloudflare Support</strong>: <a href="https://support.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://support.cloudflare.com</a></li>
                <li><strong>GoDaddy Support</strong>: <a href="https://www.godaddy.com/help" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.godaddy.com/help</a></li>
                <li><strong>DNS Propagation Checker</strong>: <a href="https://mxtoolbox.com/nslookup.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://mxtoolbox.com/nslookup.aspx</a></li>
                <li><strong>Domain Checker</strong>: <a href="https://www.whois.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.whois.com</a></li>
              </ol>
            </section>

            <section className="mb-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Document Information
              </h2>
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Created:</strong> January 21, 2026</li>
                <li><strong>Last Updated:</strong> January 21, 2026</li>
                <li><strong>Version:</strong> 1.0</li>
                <li><strong>Scope:</strong> GoDaddy Domain to Cloudflare Nameserver Migration</li>
                <li><strong>Difficulty Level:</strong> Beginner (No technical knowledge required)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
