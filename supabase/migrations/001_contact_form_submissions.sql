-- Create contact_form_submissions table for ProPage.in contact form
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_form_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  
  -- Step 1: The Beginning
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  
  -- Step 2: The Vision
  project_type TEXT,
  current_website TEXT,
  primary_goal TEXT,
  target_audience TEXT,
  
  -- Step 3: The Story
  business_description TEXT,
  unique_value TEXT,
  key_messages TEXT,
  
  -- Step 4: The Content
  has_content TEXT,
  content_description TEXT,
  preferred_style TEXT,
  
  -- Step 5: The Design
  design_preferences TEXT[], -- Array of selected preferences
  color_preferences TEXT,
  reference_sites TEXT,
  brand_guidelines TEXT,
  
  -- Step 6: The Features
  required_features TEXT[], -- Array of selected features
  integrations TEXT,
  special_requirements TEXT,
  
  -- Step 7: The Timeline
  timeline TEXT,
  launch_date TEXT,
  urgency TEXT,
  
  -- Step 8: The Details
  budget TEXT,
  additional_info TEXT
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous form submissions"
ON contact_form_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow authenticated users to read all submissions
-- You can restrict this further based on your needs
CREATE POLICY "Allow authenticated users to read submissions"
ON contact_form_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_email ON contact_form_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_contact_form_submissions_created_at ON contact_form_submissions(created_at DESC);

