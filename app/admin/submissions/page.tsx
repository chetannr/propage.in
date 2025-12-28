'use client'

import Link from 'next/link'
import AuthGuard from '@/components/auth/AuthGuard'
import SubmissionsList from '@/components/admin/SubmissionsList'

export default function AdminSubmissionsPage() {
  return (
    <AuthGuard>
      <div className="mb-6">
        <Link
          href="/admin"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <SubmissionsList />
    </AuthGuard>
  )
}

