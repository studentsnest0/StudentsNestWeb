import { Link } from "react-router-dom";
import {
  FaHome,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHandshake,
  FaSearch,
  FaClipboardCheck,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";
import "./Home.css";
import rooms1 from "../assets/rooms1.jpg";
import rooms2 from "../assets/rooms2.jpg";
import rooms3 from "../assets/rooms3.jpg";
import rooms4 from "../assets/rooms4.jpg";
import rooms5 from "../assets/rooms5.jpg";
import rooms6 from "../assets/rooms6.jpg";
import rooms7 from "../assets/rooms7.jpg";
import rooms8 from "../assets/rooms8.jpg";
import rooms9 from "../assets/rooms9.jpg";
import rooms10 from "../assets/rooms10.jpg";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">🎓 Student Accommodation Platform</div>
          <h1>Welcome to Students Nest</h1>
          <p className="tagline">Find Your Perfect Student Accommodation</p>
          <div className="cta-buttons">
            <Link to="/students" className="btn btn-primary">
              <FaSearch /> Browse Listings
            </Link>
            <Link to="/owners" className="btn btn-secondary">
              <FaHome /> List Your Property
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Properties</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Cities</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <h2>Explore Rooms</h2>
          <p className="gallery-sub">
            A quick look at some of the rooms listed on Students Nest
          </p>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={rooms1} alt="Room 1" />
            </div>
            <div className="gallery-item">
              <img src={rooms2} alt="Room 2" />
            </div>
            <div className="gallery-item">
              <img src={rooms3} alt="Room 3" />
            </div>
            <div className="gallery-item">
              <img src={rooms4} alt="Room 4" />
            </div>
            <div className="gallery-item">
              <img src={rooms5} alt="Room 5" />
            </div>
            <div className="gallery-item">
              <img src={rooms6} alt="Room 6" />
            </div>
            <div className="gallery-item">
              <img src={rooms7} alt="Room 7" />
            </div>
            <div className="gallery-item">
              <img src={rooms8} alt="Room 8" />
            </div>
            <div className="gallery-item">
              <img src={rooms9} alt="Room 9" />
            </div>
            <div className="gallery-item">
              <img src={rooms10} alt="Room 10" />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Students Nest?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Verified Listings</h3>
              <p>
                All properties are reviewed and verified by our team before
                being published
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Perfect Locations</h3>
              <p>
                Find accommodations near your college or university with easy
                access to campus
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Affordable Options</h3>
              <p>
                Wide range of properties to fit every budget, from
                budget-friendly to premium
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>Easy Process</h3>
              <p>
                Simple, transparent process for students and owners with no
                hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <FaSearch />
              </div>
              <h3>Search & Filter</h3>
              <p>
                Browse through our verified listings and filter by location,
                price, and amenities
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <FaClipboardCheck />
              </div>
              <h3>Review Details</h3>
              <p>
                View detailed property information, photos, and contact owner
                directly
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <FaUserFriends />
              </div>
              <h3>Connect & Move In</h3>
              <p>
                Connect with property owners, schedule visits, and find your
                perfect home
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="for-owners-cta">
        <div className="container">
          <h2>Property Owners</h2>
          <p>
            List your property and reach thousands of students looking for
            accommodation
          </p>
          <div className="owner-benefits">
            <div className="benefit">
              <FaClipboardCheck className="benefit-icon" />
              <span>Free to list</span>
            </div>
            <div className="benefit">
              <FaUserFriends className="benefit-icon" />
              <span>Quality tenants</span>
            </div>
            <div className="benefit">
              <FaShieldAlt className="benefit-icon" />
              <span>Secure platform</span>
            </div>
          </div>
          <Link to="/owners" className="btn btn-primary">
            List Your Property Today
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Properties Listed</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Students</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
