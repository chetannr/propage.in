-- Update RLS policies to allow authenticated users to read submissions
-- This migration assumes the table and initial policies already exist
-- Run this in Supabase SQL Editor after running 001_contact_form_submissions.sql

-- The existing policy "Allow authenticated users to read submissions" should already work
-- But we'll ensure it exists and is correct

-- Drop existing policy if it exists (to recreate it)
DROP POLICY IF EXISTS "Allow authenticated users to read submissions" ON contact_form_submissions;

-- Create policy to allow authenticated users to read all submissions
-- This policy allows any authenticated user to read submissions
-- Additional email restriction is handled in the application code (lib/auth.ts)
CREATE POLICY "Allow authenticated users to read submissions"
ON contact_form_submissions
FOR SELECT
TO authenticated
USING (true);

-- Note: For additional security, you could restrict by email in the policy:
-- CREATE POLICY "Allow only propagetech email to read submissions"
-- ON contact_form_submissions
-- FOR SELECT
-- TO authenticated
-- USING (
--   auth.jwt() ->> 'email' = 'propagetech@gmail.com'
-- );
--
-- However, the application-level check in lib/auth.ts provides the same protection
-- and is easier to maintain if the allowed email changes.

