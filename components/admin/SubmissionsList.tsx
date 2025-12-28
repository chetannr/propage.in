'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Submission {
  id: string
  created_at: string
  name: string
  email: string
  company: string | null
  role: string | null
  project_type: string | null
  current_website: string | null
  primary_goal: string | null
  target_audience: string | null
  business_description: string | null
  unique_value: string | null
  key_messages: string | null
  has_content: string | null
  content_description: string | null
  preferred_style: string | null
  design_preferences: string[] | null
  color_preferences: string | null
  reference_sites: string | null
  brand_guidelines: string | null
  required_features: string[] | null
  integrations: string | null
  special_requirements: string | null
  timeline: string | null
  launch_date: string | null
  urgency: string | null
  budget: string | null
  additional_info: string | null
}

export default function SubmissionsList() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSubmissions() {
      if (!supabase) {
        setError('Supabase is not configured')
        setIsLoading(false)
        return
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('contact_form_submissions')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) {
          throw fetchError
        }

        setSubmissions(data || [])
      } catch (err: any) {
        console.error('[SubmissionsList] Error fetching submissions:', err)
        setError(err.message || 'Failed to load submissions')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatField = (value: string | string[] | null | undefined): string => {
    if (!value) return '-'
    if (Array.isArray(value)) {
      return value.length > 0 ? value.join(', ') : '-'
    }
    return value
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-900 border-t-transparent mb-4"></div>
          <p className="text-gray-600">Loading submissions...</p>
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

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No submissions yet.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Contact Form Submissions ({submissions.length})
        </h2>
      </div>

      <div className="space-y-4">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {submission.name}
                </h3>
                <p className="text-gray-600">{submission.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">
                  {formatDate(submission.created_at)}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {submission.company && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Company</p>
                  <p className="text-gray-600">{submission.company}</p>
                </div>
              )}
              {submission.role && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Role</p>
                  <p className="text-gray-600">{submission.role}</p>
                </div>
              )}
              {submission.project_type && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Project Type</p>
                  <p className="text-gray-600">{submission.project_type}</p>
                </div>
              )}
              {submission.current_website && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Current Website</p>
                  <p className="text-gray-600 break-all">{submission.current_website}</p>
                </div>
              )}
              {submission.primary_goal && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Primary Goal</p>
                  <p className="text-gray-600">{submission.primary_goal}</p>
                </div>
              )}
              {submission.timeline && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Timeline</p>
                  <p className="text-gray-600">{submission.timeline}</p>
                </div>
              )}
              {submission.budget && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Budget</p>
                  <p className="text-gray-600">{submission.budget}</p>
                </div>
              )}
              {submission.launch_date && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Launch Date</p>
                  <p className="text-gray-600">{submission.launch_date}</p>
                </div>
              )}
            </div>

            {submission.target_audience && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Target Audience</p>
                <p className="text-gray-600">{submission.target_audience}</p>
              </div>
            )}

            {submission.business_description && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Business Description</p>
                <p className="text-gray-600 whitespace-pre-wrap">{submission.business_description}</p>
              </div>
            )}

            {submission.unique_value && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Unique Value</p>
                <p className="text-gray-600 whitespace-pre-wrap">{submission.unique_value}</p>
              </div>
            )}

            {submission.key_messages && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Key Messages</p>
                <p className="text-gray-600 whitespace-pre-wrap">{submission.key_messages}</p>
              </div>
            )}

            {submission.design_preferences && submission.design_preferences.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Design Preferences</p>
                <p className="text-gray-600">{submission.design_preferences.join(', ')}</p>
              </div>
            )}

            {submission.required_features && submission.required_features.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Required Features</p>
                <p className="text-gray-600">{submission.required_features.join(', ')}</p>
              </div>
            )}

            {submission.additional_info && (
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">Additional Information</p>
                <p className="text-gray-600 whitespace-pre-wrap">{submission.additional_info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

