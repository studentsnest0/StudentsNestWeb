import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import './AdminDashboard.css';

function AdminDashboard({ user, onLogout }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, approved, rejected

  const fetchListings = async () => {
    try {
      let query = supabase
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setListings(data || []);
    } catch (error) {
      console.error('Error fetching listings:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateListingStatus = async (listingId, status) => {
    try {
      const { error } = await supabase
        .from('listings')
        .update({ status })
        .eq('id', listingId);

      if (error) throw error;

      // Refresh listings
      fetchListings();
    } catch (error) {
      console.error('Error updating listing:', error);
      alert('Error updating listing status');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="admin-actions">
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout} className="btn btn-logout">
            Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Listings
          </button>
          <button
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`filter-btn ${filter === 'approved' ? 'active' : ''}`}
            onClick={() => setFilter('approved')}
          >
            Approved
          </button>
          <button
            className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
            onClick={() => setFilter('rejected')}
          >
            Rejected
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading listings...</p>
        ) : listings.length === 0 ? (
          <p className="no-listings">No listings found.</p>
        ) : (
          <div className="listings-table-container">
            <table className="listings-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Owner</th>
                  <th>Property Type</th>
                  <th>Location</th>
                  <th>Rent</th>
                  <th>Status</th>
                  <th>Images</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.id}>
                    <td>{listing.id.substring(0, 8)}...</td>
                    <td>
                      <div className="owner-info">
                        <strong>{listing.owner_name}</strong>
                        <small>{listing.owner_email}</small>
                        <small>{listing.owner_phone}</small>
                      </div>
                    </td>
                    <td>{listing.property_type}</td>
                    <td>
                      {listing.address}, {listing.city}
                    </td>
                    <td>PKR {listing.rent}</td>
                    <td>
                      <span className={`status-badge status-${listing.status}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td>
                      {listing.images && listing.images.length > 0 && (
                        <img
                          src={listing.images[0]}
                          alt="Property"
                          className="thumbnail"
                        />
                      )}
                    </td>
                    <td>
                      <div className="action-buttons">
                        {listing.status !== 'approved' && (
                          <button
                            className="btn btn-approve"
                            onClick={() => updateListingStatus(listing.id, 'approved')}
                          >
                            Approve
                          </button>
                        )}
                        {listing.status !== 'rejected' && (
                          <button
                            className="btn btn-reject"
                            onClick={() => updateListingStatus(listing.id, 'rejected')}
                          >
                            Reject
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
