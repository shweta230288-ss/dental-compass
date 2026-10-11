CREATE TABLE public.consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  treatment TEXT NOT NULL DEFAULT 'All-on-X',
  message TEXT,
  source_page TEXT,
  CONSTRAINT consultation_requests_name_len CHECK (char_length(trim(full_name)) BETWEEN 1 AND 200),
  CONSTRAINT consultation_requests_phone_len CHECK (char_length(trim(phone)) BETWEEN 5 AND 30),
  CONSTRAINT consultation_requests_email_len CHECK (email IS NULL OR (char_length(email) <= 254 AND position('@' in email) > 1)),
  CONSTRAINT consultation_requests_treatment_len CHECK (char_length(treatment) <= 80),
  CONSTRAINT consultation_requests_message_len CHECK (message IS NULL OR char_length(message) <= 2000),
  CONSTRAINT consultation_requests_source_len CHECK (source_page IS NULL OR char_length(source_page) <= 200)
);

GRANT INSERT ON public.consultation_requests TO anon;
GRANT ALL ON public.consultation_requests TO service_role;

ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous consultation request submission"
  ON public.consultation_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);