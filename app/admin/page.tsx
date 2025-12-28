'use client'

import AuthGuard from '@/components/auth/AuthGuard'
import DashboardStats from '@/components/admin/DashboardStats'

export default function AdminDashboardPage() {
  return (
    <AuthGuard>
      <DashboardStats />
    </AuthGuard>
  )
}

