'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AuthGuard from '@/components/auth/AuthGuard'
import SubmissionsList from '@/components/admin/SubmissionsList'
import SubmissionDetail from '@/components/admin/SubmissionDetail'

function SubmissionsContent() {
  const searchParams = useSearchParams()
  const submissionId = searchParams.get('id')

  if (submissionId) {
    return <SubmissionDetail submissionId={submissionId} />
  }

  return (
    <>
      <div className="mb-6">
        <Link
          href="/admin"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>
      <SubmissionsList />
    </>
  )
}

export default function AdminSubmissionsPage() {
  return (
    <AuthGuard>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }
      >
        <SubmissionsContent />
      </Suspense>
    </AuthGuard>
  )
}

