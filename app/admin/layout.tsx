'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getCurrentUser, signOut } from '@/lib/auth'
import ThemeToggle from '@/components/theme/ThemeToggle'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser()
      setUserEmail(user?.email || null)
    }

    loadUser()
  }, [])

  const handleAuthAction = async () => {
    // If not logged in, navigate to login page
    if (!userEmail) {
      window.location.href = '/admin/login#focus-email'
      return
    }

    // If already logging out, navigate to login and focus email input
    if (isLoggingOut) {
      window.location.href = '/admin/login#focus-email'
      return
    }

    // Otherwise, perform logout
    setIsLoggingOut(true)
    try {
      await signOut()
      // Use window.location.href to ensure hash is preserved
      window.location.href = '/admin/login#focus-email'
    } catch (error) {
      console.error('[AdminLayout] Logout error:', error)
      setIsLoggingOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              {userEmail && (
                <p className="text-sm text-gray-600 dark:text-gray-400">Logged in as {userEmail}</p>
              )}
              <nav className="flex items-center gap-4">
                <Link
                  href="/admin"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/admin/submissions"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors"
                >
                  Contact Form
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={handleAuthAction}
                className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {userEmail ? (isLoggingOut ? 'Login Again' : 'Logout') : 'Login'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

