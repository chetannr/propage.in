export interface Submission {
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

