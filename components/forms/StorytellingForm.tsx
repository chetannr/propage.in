'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface FormData {
  // Step 1: The Beginning
  name: string
  email: string
  company: string
  role: string
  
  // Step 2: The Vision
  projectType: string
  currentWebsite: string
  primaryGoal: string
  targetAudience: string
  
  // Step 3: The Story
  businessDescription: string
  uniqueValue: string
  keyMessages: string
  
  // Step 4: The Content
  hasContent: string
  contentDescription: string
  preferredStyle: string
  
  // Step 5: The Design
  designPreferences: string[]
  colorPreferences: string
  referenceSites: string
  brandGuidelines: string
  
  // Step 6: The Features
  requiredFeatures: string[]
  integrations: string
  specialRequirements: string
  
  // Step 7: The Timeline
  timeline: string
  launchDate: string
  urgency: string
  
  // Step 8: The Details
  budget: string
  additionalInfo: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  role: '',
  projectType: '',
  currentWebsite: '',
  primaryGoal: '',
  targetAudience: '',
  businessDescription: '',
  uniqueValue: '',
  keyMessages: '',
  hasContent: '',
  contentDescription: '',
  preferredStyle: '',
  designPreferences: [],
  colorPreferences: '',
  referenceSites: '',
  brandGuidelines: '',
  requiredFeatures: [],
  integrations: '',
  specialRequirements: '',
  timeline: '',
  launchDate: '',
  urgency: '',
  budget: '',
  additionalInfo: '',
}

interface Step {
  title: string
  subtitle: string
  number: number
  total: number
}

const steps: Step[] = [
  {
    title: 'The Beginning',
    subtitle: 'Let\'s start with who you are',
    number: 1,
    total: 8,
  },
  {
    title: 'The Vision',
    subtitle: 'What are you building?',
    number: 2,
    total: 8,
  },
  {
    title: 'The Story',
    subtitle: 'Tell us about your business',
    number: 3,
    total: 8,
  },
  {
    title: 'The Content',
    subtitle: 'What content do you have?',
    number: 4,
    total: 8,
  },
  {
    title: 'The Design',
    subtitle: 'How should it look?',
    number: 5,
    total: 8,
  },
  {
    title: 'The Features',
    subtitle: 'What do you need?',
    number: 6,
    total: 8,
  },
  {
    title: 'The Timeline',
    subtitle: 'When do you need it?',
    number: 7,
    total: 8,
  },
  {
    title: 'The Details',
    subtitle: 'Final touches',
    number: 8,
    total: 8,
  },
]

export default function StorytellingForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // If Supabase is not configured, still show success (graceful degradation)
      if (!supabase) {
        console.warn('[Form] Supabase not configured. Form data:', formData)
        setSubmitted(true)
        return
      }

      // Transform form data to match database schema
      const submissionData = {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        role: formData.role || null,
        project_type: formData.projectType || null,
        current_website: formData.currentWebsite || null,
        primary_goal: formData.primaryGoal || null,
        target_audience: formData.targetAudience || null,
        business_description: formData.businessDescription || null,
        unique_value: formData.uniqueValue || null,
        key_messages: formData.keyMessages || null,
        has_content: formData.hasContent || null,
        content_description: formData.contentDescription || null,
        preferred_style: formData.preferredStyle || null,
        design_preferences: formData.designPreferences.length > 0 ? formData.designPreferences : null,
        color_preferences: formData.colorPreferences || null,
        reference_sites: formData.referenceSites || null,
        brand_guidelines: formData.brandGuidelines || null,
        required_features: formData.requiredFeatures.length > 0 ? formData.requiredFeatures : null,
        integrations: formData.integrations || null,
        special_requirements: formData.specialRequirements || null,
        timeline: formData.timeline || null,
        launch_date: formData.launchDate || null,
        urgency: formData.urgency || null,
        budget: formData.budget || null,
        additional_info: formData.additionalInfo || null,
      }

      const { error } = await supabase
        .from('contact_form_submissions')
        .insert([submissionData])

      if (error) {
        console.error('[Form] Supabase error:', error)
        throw new Error('Failed to submit form. Please try again or contact us directly.')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('[Form] Submission error:', error)
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred. Please try again or contact us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const current = (formData[field] as string[]) || []
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value]
    updateFormData(field, updated)
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-900 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Story Has Been Shared
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for taking the time to share your vision with us.
            </p>
            <p className="text-lg text-gray-500">
              We&apos;ll review your information and get back to you within 24 hours to start bringing your website to life.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Progress Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStepData.number} of {currentStepData.total}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-900 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Step Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
              {currentStepData.title}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {currentStepData.subtitle}
            </h2>
            <p className="text-lg text-gray-600">
              {currentStep === 0 && 'Every great website starts with understanding who you are.'}
              {currentStep === 1 && 'Help us understand what you\'re building and why it matters.'}
              {currentStep === 2 && 'Your business has a unique story. Let\'s capture it.'}
              {currentStep === 3 && 'Content is the heart of your website. What do you have ready?'}
              {currentStep === 4 && 'Design should reflect your brand. Share your vision.'}
              {currentStep === 5 && 'Tell us what functionality your website needs.'}
              {currentStep === 6 && 'Timing is everything. When do you need this live?'}
              {currentStep === 7 && 'Any final details that will help us serve you better?'}
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: The Beginning */}
            {currentStep === 0 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company / Business Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={(e) => updateFormData('role', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Founder, CEO, Marketing Manager, etc."
                  />
                </div>
              </div>
            )}

            {/* Step 2: The Vision */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                    What are you building? *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) => updateFormData('projectType', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="new-website">New Website (Static)</option>
                    <option value="redesign">Website Redesign (Static)</option>
                    <option value="landing-page">Landing Page (Static)</option>
                    <option value="ecommerce">E-commerce Store (Static with Razorpay Payment Links)</option>
                    <option value="portfolio">Portfolio Site (Static)</option>
                    <option value="blog">Blog / Content Site (Static)</option>
                    <option value="other">Other (Static)</option>
                  </select>
                  <p className="mt-2 text-sm text-gray-600">
                    Note: We specialize in static websites only. For e-commerce, we can integrate Razorpay payment links (no direct payment gateway integration).
                  </p>
                </div>

                <div>
                  <label htmlFor="currentWebsite" className="block text-sm font-semibold text-gray-900 mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    id="currentWebsite"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={(e) => updateFormData('currentWebsite', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label htmlFor="primaryGoal" className="block text-sm font-semibold text-gray-900 mb-2">
                    Primary Goal *
                  </label>
                  <select
                    id="primaryGoal"
                    name="primaryGoal"
                    required
                    value={formData.primaryGoal}
                    onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select primary goal</option>
                    <option value="generate-leads">Generate Leads</option>
                    <option value="sell-products">Sell Products</option>
                    <option value="build-brand">Build Brand Awareness</option>
                    <option value="share-information">Share Information</option>
                    <option value="showcase-work">Showcase Work / Portfolio</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-900 mb-2">
                    Target Audience *
                  </label>
                  <textarea
                    id="targetAudience"
                    name="targetAudience"
                    required
                    rows={4}
                    value={formData.targetAudience}
                    onChange={(e) => updateFormData('targetAudience', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Describe your ideal customer or target audience..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: The Story */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="businessDescription" className="block text-sm font-semibold text-gray-900 mb-2">
                    What does your business do? *
                  </label>
                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    required
                    rows={5}
                    value={formData.businessDescription}
                    onChange={(e) => updateFormData('businessDescription', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Describe your business, products, or services..."
                  />
                </div>

                <div>
                  <label htmlFor="uniqueValue" className="block text-sm font-semibold text-gray-900 mb-2">
                    What makes you unique? *
                  </label>
                  <textarea
                    id="uniqueValue"
                    name="uniqueValue"
                    required
                    rows={4}
                    value={formData.uniqueValue}
                    onChange={(e) => updateFormData('uniqueValue', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="What sets you apart from competitors?"
                  />
                </div>

                <div>
                  <label htmlFor="keyMessages" className="block text-sm font-semibold text-gray-900 mb-2">
                    Key Messages to Communicate
                  </label>
                  <textarea
                    id="keyMessages"
                    name="keyMessages"
                    rows={4}
                    value={formData.keyMessages}
                    onChange={(e) => updateFormData('keyMessages', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="What are the main messages you want visitors to take away?"
                  />
                </div>
              </div>
            )}

            {/* Step 4: The Content */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Do you have content ready? *
                  </label>
                  <div className="space-y-2">
                    {['Yes, all content is ready', 'Some content ready', 'Need help creating content'].map((option) => (
                      <label key={option} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all">
                        <input
                          type="radio"
                          name="hasContent"
                          value={option}
                          checked={formData.hasContent === option}
                          onChange={(e) => updateFormData('hasContent', e.target.value)}
                          className="mr-3"
                          required
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="contentDescription" className="block text-sm font-semibold text-gray-900 mb-2">
                    Describe Your Content
                  </label>
                  <textarea
                    id="contentDescription"
                    name="contentDescription"
                    rows={4}
                    value={formData.contentDescription}
                    onChange={(e) => updateFormData('contentDescription', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="What type of content do you have? (text, images, videos, etc.)"
                  />
                </div>

                <div>
                  <label htmlFor="preferredStyle" className="block text-sm font-semibold text-gray-900 mb-2">
                    Content Style Preference
                  </label>
                  <select
                    id="preferredStyle"
                    name="preferredStyle"
                    value={formData.preferredStyle}
                    onChange={(e) => updateFormData('preferredStyle', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select style</option>
                    <option value="minimal">Minimal & Clean</option>
                    <option value="detailed">Detailed & Comprehensive</option>
                    <option value="conversational">Conversational & Friendly</option>
                    <option value="professional">Professional & Formal</option>
                    <option value="creative">Creative & Bold</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 5: The Design */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Design Preferences (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {['Minimal & Clean', 'Bold & Vibrant', 'Professional & Corporate', 'Creative & Artistic', 'Modern & Trendy', 'Classic & Timeless'].map((pref) => (
                      <label key={pref} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.designPreferences.includes(pref)}
                          onChange={() => toggleArrayValue('designPreferences', pref)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="colorPreferences" className="block text-sm font-semibold text-gray-900 mb-2">
                    Color Preferences
                  </label>
                  <input
                    type="text"
                    id="colorPreferences"
                    name="colorPreferences"
                    value={formData.colorPreferences}
                    onChange={(e) => updateFormData('colorPreferences', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="e.g., Blue and white, Warm tones, Brand colors"
                  />
                </div>

                <div>
                  <label htmlFor="referenceSites" className="block text-sm font-semibold text-gray-900 mb-2">
                    Reference Websites (URLs)
                  </label>
                  <textarea
                    id="referenceSites"
                    name="referenceSites"
                    rows={3}
                    value={formData.referenceSites}
                    onChange={(e) => updateFormData('referenceSites', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Share websites you like (one per line)"
                  />
                </div>

                <div>
                  <label htmlFor="brandGuidelines" className="block text-sm font-semibold text-gray-900 mb-2">
                    Brand Guidelines / Assets
                  </label>
                  <textarea
                    id="brandGuidelines"
                    name="brandGuidelines"
                    rows={3}
                    value={formData.brandGuidelines}
                    onChange={(e) => updateFormData('brandGuidelines', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Do you have brand guidelines, logos, or style guides?"
                  />
                </div>
              </div>
            )}

            {/* Step 6: The Features */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Required Features (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {['Contact Form', 'Blog / News Section', 'Image Gallery', 'Video Integration', 'E-commerce / Shopping Cart', 'User Accounts / Login', 'Search Functionality', 'Newsletter Signup', 'Social Media Integration', 'Analytics Integration', 'Multi-language Support', 'Booking / Appointment System'].map((feature) => (
                      <label key={feature} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-all">
                        <input
                          type="checkbox"
                          checked={formData.requiredFeatures.includes(feature)}
                          onChange={() => toggleArrayValue('requiredFeatures', feature)}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="integrations" className="block text-sm font-semibold text-gray-900 mb-2">
                    Third-Party Integrations Needed
                  </label>
                  <textarea
                    id="integrations"
                    name="integrations"
                    rows={3}
                    value={formData.integrations}
                    onChange={(e) => updateFormData('integrations', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="e.g., Stripe, Mailchimp, Google Analytics, CRM systems"
                  />
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="block text-sm font-semibold text-gray-900 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows={4}
                    value={formData.specialRequirements}
                    onChange={(e) => updateFormData('specialRequirements', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Any special functionality, accessibility needs, or technical requirements?"
                  />
                </div>
              </div>
            )}

            {/* Step 7: The Timeline */}
            {currentStep === 6 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    value={formData.timeline}
                    onChange={(e) => updateFormData('timeline', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">As Soon As Possible</option>
                    <option value="1-week">1 Week (Our Standard)</option>
                    <option value="2-weeks">2 Weeks</option>
                    <option value="1-month">1 Month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="launchDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Target Launch Date
                  </label>
                  <input
                    type="date"
                    id="launchDate"
                    name="launchDate"
                    value={formData.launchDate}
                    onChange={(e) => updateFormData('launchDate', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-semibold text-gray-900 mb-2">
                    How urgent is this project?
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={(e) => updateFormData('urgency', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select urgency</option>
                    <option value="very-urgent">Very Urgent</option>
                    <option value="urgent">Urgent</option>
                    <option value="moderate">Moderate</option>
                    <option value="not-urgent">Not Urgent</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 8: The Details */}
            {currentStep === 7 && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-900 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={6}
                    value={formData.additionalInfo}
                    onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="Anything else we should know? Questions, concerns, or special requests..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                ← Back
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all font-medium"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
                </button>
              )}
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">{submitError}</p>
              </div>
            )}
          </form>
        </div>
      </div>

    </div>
  )
}
