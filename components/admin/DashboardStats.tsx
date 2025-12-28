'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface FormStats {
  id: string
  name: string
  tableName: string
  route: string
  count: number
  icon: string
}

export default function DashboardStats() {
  const [stats, setStats] = useState<FormStats[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      if (!supabase) {
        setError('Supabase is not configured')
        setIsLoading(false)
        return
      }

      const supabaseClient = supabase

      try {
        // Define all forms (extensible for future forms)
        const forms: Omit<FormStats, 'count'>[] = [
          {
            id: 'contact',
            name: 'Contact Form',
            tableName: 'contact_form_submissions',
            route: '/admin/submissions',
            icon: '📝',
          },
          // Add more forms here in the future
          // {
          //   id: 'newsletter',
          //   name: 'Newsletter Signups',
          //   tableName: 'newsletter_subscriptions',
          //   route: '/admin/newsletter',
          //   icon: '📧',
          // },
        ]

        // Fetch counts for each form
        const statsPromises = forms.map(async (form) => {
          try {
            const { count, error: countError } = await supabaseClient
              .from(form.tableName)
              .select('*', { count: 'exact', head: true })

            if (countError) {
              console.error(`[DashboardStats] Error fetching count for ${form.tableName}:`, countError)
              return {
                ...form,
                count: 0,
              }
            }

            return {
              ...form,
              count: count || 0,
            }
          } catch (err) {
            console.error(`[DashboardStats] Error for ${form.tableName}:`, err)
            return {
              ...form,
              count: 0,
            }
          }
        })

        const statsResults = await Promise.all(statsPromises)
        setStats(statsResults)
      } catch (err: any) {
        console.error('[DashboardStats] Error fetching stats:', err)
        setError(err.message || 'Failed to load stats')
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent mb-4"></div>
          <p className="text-gray-600">Loading stats...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 border-2 border-red-200 rounded-lg">
        <p className="text-red-800 font-medium">{error}</p>
      </div>
    )
  }

  if (stats.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No forms configured.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Submissions</h2>
        <p className="text-gray-600">Click on a card to view all submissions for that form.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.id}
            href={stat.route}
            className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{stat.count}</div>
                <div className="text-sm text-gray-500 mt-1">submissions</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
              {stat.name}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-500">
              View all entries →
            </p>
          </Link>
        ))}
      </div>

      {stats.length > 0 && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Total Submissions:</strong>{' '}
            {stats.reduce((sum, stat) => sum + stat.count, 0)} across all forms
          </p>
        </div>
      )}
    </div>
  )
}

