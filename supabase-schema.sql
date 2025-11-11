-- Create listings table
CREATE TABLE listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_name TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  owner_phone TEXT NOT NULL,
  property_type TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  rent DECIMAL(10, 2) NOT NULL,
  deposit DECIMAL(10, 2) NOT NULL,
  bedrooms INTEGER NOT NULL,
  bathrooms INTEGER NOT NULL,
  amenities TEXT,
  description TEXT NOT NULL,
  available_from DATE NOT NULL,
  images TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on status for faster queries
CREATE INDEX idx_listings_status ON listings(status);

-- Create an index on city for filtering
CREATE INDEX idx_listings_city ON listings(city);

-- Enable Row Level Security
ALTER TABLE listings ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved listings
CREATE POLICY "Anyone can view approved listings"
  ON listings
  FOR SELECT
  USING (status = 'approved' OR auth.role() = 'authenticated');

-- Policy: Anyone can insert new listings (they start as pending)
CREATE POLICY "Anyone can insert listings"
  ON listings
  FOR INSERT
  WITH CHECK (true);

-- Policy: Only authenticated users (admin) can update listings
CREATE POLICY "Authenticated users can update listings"
  ON listings
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users (admin) can delete listings
CREATE POLICY "Authenticated users can delete listings"
  ON listings
  FOR DELETE
  USING (auth.role() = 'authenticated');

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to call the function
CREATE TRIGGER update_listings_updated_at
  BEFORE UPDATE ON listings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
