import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaMapMarkerAlt, FaBed, FaBath, FaEnvelope, FaLock } from 'react-icons/fa';
import './ForStudents.css';

function ForStudents({ user }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    city: '',
    propertyType: '',
    maxRent: ''
  });

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      let query = supabase
        .from('listings')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      setListings(data || []);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  const filteredListings = listings.filter(listing => {
    if (filter.city && !listing.city.toLowerCase().includes(filter.city.toLowerCase())) {
      return false;
    }
    if (filter.propertyType && listing.property_type !== filter.propertyType) {
      return false;
    }
    if (filter.maxRent && listing.rent > parseFloat(filter.maxRent)) {
      return false;
    }
    return true;
  });

  // Show login prompt if not authenticated
  if (!user) {
    return (
      <div className="for-students-page">
        <div className="auth-required">
          <div className="auth-required-content">
            <FaLock className="lock-icon" />
            <h2>Student Login Required</h2>
            <p>Please sign up or login with your university email to browse verified property listings.</p>
            <div className="auth-actions">
              <Link to="/signup" className="btn btn-primary">
                Sign Up with University Email
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </div>
            <div className="auth-benefits">
              <h3>Why sign up?</h3>
              <ul>
                <li>✓ Access verified property listings</li>
                <li>✓ Contact property owners directly</li>
                <li>✓ Save your favorite properties</li>
                <li>✓ 100% free for students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="for-students-page">
      <div className="students-header">
        <h1>Find Your Perfect Home</h1>
        <p>Browse verified student accommodations</p>
      </div>

      <div className="students-container">
        <div className="filters-sidebar">
          <h3>Filters</h3>
          
          <div className="filter-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={filter.city}
              onChange={handleFilterChange}
              placeholder="Enter city..."
            />
          </div>

          <div className="filter-group">
            <label htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              name="propertyType"
              value={filter.propertyType}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="room">Single Room</option>
              <option value="pg">PG/Hostel</option>
              <option value="flat">Independent Flat</option>
              <option value="house">House</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="maxRent">Max Rent (PKR)</label>
            <input
              type="number"
              id="maxRent"
              name="maxRent"
              value={filter.maxRent}
              onChange={handleFilterChange}
              placeholder="10000"
            />
          </div>

          <button 
            className="btn btn-secondary" 
            onClick={() => setFilter({ city: '', propertyType: '', maxRent: '' })}
          >
            Clear Filters
          </button>
        </div>

        <div className="listings-content">
          {loading ? (
            <p className="loading">Loading listings...</p>
          ) : filteredListings.length === 0 ? (
            <p className="no-listings">No listings found. Try adjusting your filters.</p>
          ) : (
            <div className="listings-grid">
              {filteredListings.map((listing) => (
                <div key={listing.id} className="listing-card">
                  {listing.images && listing.images.length > 0 && (
                    <img 
                      src={listing.images[0]} 
                      alt={listing.property_type}
                      className="listing-image"
                    />
                  )}
                  <div className="listing-content">
                    <h3>{listing.property_type.toUpperCase()}</h3>
                    <p className="location">
                      <FaMapMarkerAlt /> {listing.address}, {listing.city}
                    </p>
                    <p className="rent">PKR {listing.rent}/month</p>
                    <div className="listing-details">
                      <span><FaBed /> {listing.bedrooms} Bed</span>
                      <span><FaBath /> {listing.bathrooms} Bath</span>
                    </div>
                    {listing.amenities && (
                      <p className="amenities">{listing.amenities}</p>
                    )}
                    <p className="description">{listing.description.substring(0, 100)}...</p>
                    <div className="listing-footer">
                      <p className="available">Available: {new Date(listing.available_from).toLocaleDateString()}</p>
                      <a href={`mailto:${listing.owner_email}`} className="btn btn-contact">
                        <FaEnvelope /> Contact Owner
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForStudents;
