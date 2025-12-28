'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { Submission } from '@/types/submission'

interface SubmissionDetailProps {
  submissionId: string
}

export default function SubmissionDetail({ submissionId }: SubmissionDetailProps) {
  const router = useRouter()
  const [submission, setSubmission] = useState<Submission | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchSubmission() {
      if (!supabase) {
        setError('Supabase is not configured')
        setIsLoading(false)
        return
      }

      try {
        const { data, error: fetchError } = await supabase
          .from('contact_form_submissions')
          .select('*')
          .eq('id', submissionId)
          .single()

        if (fetchError) {
          throw fetchError
        }

        setSubmission(data)
      } catch (err: any) {
        console.error('[SubmissionDetail] Error fetching submission:', err)
        setError(err.message || 'Failed to load submission')
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubmission()
  }, [submissionId])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-900 dark:border-gray-100 border-t-transparent mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading submission...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-red-800 dark:text-red-200 font-medium">{error}</p>
      </div>
    )
  }

  if (!submission) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 text-lg">Submission not found.</p>
        <Link
          href="/admin/submissions"
          className="mt-4 inline-block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          ← Back to Submissions
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/submissions"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Submissions
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8">
        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{submission.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{submission.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Submitted on {formatDate(submission.created_at)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Step 1: The Beginning */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Basic Information</h2>
              <div className="space-y-4">
                {submission.company && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Company</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.company}</p>
                  </div>
                )}
                {submission.role && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Role</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.role}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: The Vision */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Project Vision</h2>
              <div className="space-y-4">
                {submission.project_type && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Project Type</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.project_type}</p>
                  </div>
                )}
                {submission.current_website && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Current Website</p>
                    <p className="text-gray-600 dark:text-gray-400 break-all">
                      <a
                        href={submission.current_website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                      >
                        {submission.current_website}
                      </a>
                    </p>
                  </div>
                )}
                {submission.primary_goal && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Primary Goal</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.primary_goal}</p>
                  </div>
                )}
                {submission.target_audience && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Target Audience</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.target_audience}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 7 & 8: Timeline and Budget */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Timeline & Budget</h2>
              <div className="space-y-4">
                {submission.timeline && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Timeline</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.timeline}</p>
                  </div>
                )}
                {submission.launch_date && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Launch Date</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.launch_date}</p>
                  </div>
                )}
                {submission.urgency && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Urgency</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.urgency}</p>
                  </div>
                )}
                {submission.budget && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Budget</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.budget}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: The Story */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Business Story</h2>
              <div className="space-y-4">
                {submission.business_description && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Business Description</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.business_description}</p>
                  </div>
                )}
                {submission.unique_value && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Unique Value Proposition</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.unique_value}</p>
                  </div>
                )}
                {submission.key_messages && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Key Messages</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.key_messages}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Content */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Content</h2>
              <div className="space-y-4">
                {submission.has_content && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Has Content</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.has_content}</p>
                  </div>
                )}
                {submission.content_description && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Content Description</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.content_description}</p>
                  </div>
                )}
                {submission.preferred_style && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Preferred Style</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.preferred_style}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 5: Design */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Design Preferences</h2>
              <div className="space-y-4">
                {submission.design_preferences && submission.design_preferences.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Design Preferences</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.design_preferences.join(', ')}</p>
                  </div>
                )}
                {submission.color_preferences && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Color Preferences</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.color_preferences}</p>
                  </div>
                )}
                {submission.reference_sites && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Reference Sites</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.reference_sites}</p>
                  </div>
                )}
                {submission.brand_guidelines && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Brand Guidelines</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.brand_guidelines}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 6: Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Features & Requirements</h2>
              <div className="space-y-4">
                {submission.required_features && submission.required_features.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Required Features</p>
                    <p className="text-gray-600 dark:text-gray-400">{submission.required_features.join(', ')}</p>
                  </div>
                )}
                {submission.integrations && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Integrations</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.integrations}</p>
                  </div>
                )}
                {submission.special_requirements && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Special Requirements</p>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.special_requirements}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info */}
            {submission.additional_info && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Additional Information</h2>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{submission.additional_info}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

