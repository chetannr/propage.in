'use client'

import AuthGuard from '@/components/auth/AuthGuard'
import SubmissionDetail from '@/components/admin/SubmissionDetail'

interface SubmissionDetailPageProps {
  params: {
    id: string
  }
}

export default function SubmissionDetailPage({ params }: SubmissionDetailPageProps) {
  return (
    <AuthGuard>
      <SubmissionDetail submissionId={params.id} />
    </AuthGuard>
  )
}

