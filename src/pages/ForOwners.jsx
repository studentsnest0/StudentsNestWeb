import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { uploadToCloudinary } from '../lib/cloudinary';
import './ForOwners.css';

function ForOwners() {
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    propertyType: '',
    address: '',
    city: '',
    rent: '',
    deposit: '',
    bedrooms: '',
    bathrooms: '',
    amenities: '',
    description: '',
    availableFrom: ''
  });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatus('Uploading images and submitting property...');

    try {
      // Upload images to Cloudinary
      const imageUrls = [];
      for (const image of images) {
        const url = await uploadToCloudinary(image);
        imageUrls.push(url);
      }

      // Insert listing into Supabase
      const { error } = await supabase
        .from('listings')
        .insert([
          {
            owner_name: formData.ownerName,
            owner_email: formData.ownerEmail,
            owner_phone: formData.ownerPhone,
            property_type: formData.propertyType,
            address: formData.address,
            city: formData.city,
            rent: parseFloat(formData.rent),
            deposit: parseFloat(formData.deposit),
            bedrooms: parseInt(formData.bedrooms),
            bathrooms: parseInt(formData.bathrooms),
            amenities: formData.amenities,
            description: formData.description,
            available_from: formData.availableFrom,
            images: imageUrls,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setStatus('Property submitted successfully! It will be reviewed by our team.');
      setFormData({
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        propertyType: '',
        address: '',
        city: '',
        rent: '',
        deposit: '',
        bedrooms: '',
        bathrooms: '',
        amenities: '',
        description: '',
        availableFrom: ''
      });
      setImages([]);
    } catch (error) {
      console.error('Error:', error);
      setStatus('Error submitting property. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="for-owners-page">
      <div className="owners-header">
        <h1>List Your Property</h1>
        <p>Reach thousands of students looking for accommodation</p>
      </div>

      <div className="owners-container">
        <div className="benefits">
          <h2>Why List With Us?</h2>
          <ul>
            <li>✓ Reach verified students actively looking for housing</li>
            <li>✓ Free to list your property</li>
            <li>✓ Simple, fast approval process</li>
            <li>✓ Manage your listings easily</li>
            <li>✓ Get quality tenants</li>
          </ul>
        </div>

        <div className="listing-form-container">
          <form onSubmit={handleSubmit} className="listing-form">
            <h3>Owner Information</h3>
            
            <div className="form-group">
              <label htmlFor="ownerName">Full Name *</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerEmail">Email *</label>
                <input
                  type="email"
                  id="ownerEmail"
                  name="ownerEmail"
                  value={formData.ownerEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="ownerPhone">Phone *</label>
                <input
                  type="tel"
                  id="ownerPhone"
                  name="ownerPhone"
                  value={formData.ownerPhone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <h3>Property Details</h3>

            <div className="form-group">
              <label htmlFor="propertyType">Property Type *</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="room">Single Room</option>
                <option value="pg">PG/Hostel</option>
                <option value="flat">Independent Flat</option>
                <option value="house">House</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address">Full Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="rent">Monthly Rent (PKR) *</label>
                <input
                  type="number"
                  id="rent"
                  name="rent"
                  value={formData.rent}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deposit">Security Deposit (PKR) *</label>
                <input
                  type="number"
                  id="deposit"
                  name="deposit"
                  value={formData.deposit}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bedrooms">Bedrooms *</label>
                <input
                  type="number"
                  id="bedrooms"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="bathrooms">Bathrooms *</label>
                <input
                  type="number"
                  id="bathrooms"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="amenities">Amenities (comma-separated)</label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                placeholder="WiFi, Parking, Laundry, etc."
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Describe your property..."
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="availableFrom">Available From *</label>
              <input
                type="date"
                id="availableFrom"
                name="availableFrom"
                value={formData.availableFrom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="images">Property Images * (Max 5)</label>
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                required
              />
              <small>Upload up to 5 images of your property</small>
            </div>

            <button type="submit" className="btn btn-primary" disabled={uploading}>
              {uploading ? 'Submitting...' : 'Submit Property'}
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForOwners;
