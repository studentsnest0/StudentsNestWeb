import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaSearch,
  FaHandshake,
  FaCheckCircle,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="how-it-works-page">
      <section className="page-hero">
        <div className="container">
          <h1>How StudentsNest Works</h1>
          <p className="hero-subtitle">
            Your journey to finding the perfect student accommodation in 3 simple steps
          </p>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2>For Students: Find Your Home</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-badge">Step 1</div>
              <div className="step-icon student-step">
                <FaUserGraduate />
              </div>
              <h3>Sign Up with University Email</h3>
              <p>
                Create your free account using your university email address.
                This ensures a safe, verified community of students only.
              </p>
              <div className="step-features">
                <span className="feature-tag">
                  <FaShieldAlt /> Verified Students Only
                </span>
                <span className="feature-tag">
                  <FaCheckCircle /> 100% Free
                </span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-badge">Step 2</div>
              <div className="step-icon student-step">
                <FaSearch />
              </div>
              <h3>Search & Filter Listings</h3>
              <p>
                Browse verified properties in your city. Filter by price range,
                property type, amenities, and location near your campus.
              </p>
              <div className="step-features">
                <span className="feature-tag">Smart Filters</span>
                <span className="feature-tag">Photo Gallery</span>
                <span className="feature-tag">Real Reviews</span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-badge">Step 3</div>
              <div className="step-icon student-step">
                <FaHandshake />
              </div>
              <h3>Connect & Move In</h3>
              <p>
                Contact property owners directly through our platform. Schedule
                visits, ask questions, and secure your perfect room.
              </p>
              <div className="step-features">
                <span className="feature-tag">Direct Contact</span>
                <span className="feature-tag">Safe & Secure</span>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <h3>Ready to find your home?</h3>
            <Link to="/students" className="btn btn-primary">
              Browse Listings Now
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section owner-section">
        <div className="container">
          <h2>For Property Owners: List Your Property</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-badge">Step 1</div>
              <div className="step-icon owner-step">
                <FaUserGraduate />
              </div>
              <h3>Register Your Profile</h3>
              <p>
                Fill out a simple registration form with your contact details
                and property ownership information.
              </p>
              <div className="step-features">
                <span className="feature-tag owner-tag">Quick Setup</span>
                <span className="feature-tag owner-tag">Secure Data</span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-badge">Step 2</div>
              <div className="step-icon owner-step">
                <FaEnvelope />
              </div>
              <h3>Submit Property Details</h3>
              <p>
                Upload photos, add property description, amenities, rent amount,
                and location. Our team reviews within 24-48 hours.
              </p>
              <div className="step-features">
                <span className="feature-tag owner-tag">
                  <FaCheckCircle /> Quick Approval
                </span>
                <span className="feature-tag owner-tag">Multiple Photos</span>
              </div>
            </div>

            <div className="process-step">
              <div className="step-badge">Step 3</div>
              <div className="step-icon owner-step">
                <FaHandshake />
              </div>
              <h3>Get Verified Tenants</h3>
              <p>
                Receive inquiries from verified students. Connect directly,
                schedule viewings, and rent out your property quickly.
              </p>
              <div className="step-features">
                <span className="feature-tag owner-tag">
                  <FaShieldAlt /> Verified Students
                </span>
                <span className="feature-tag owner-tag">Fast Occupancy</span>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <h3>Ready to list your property?</h3>
            <Link to="/owners" className="btn btn-secondary">
              List Your Property
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Why Choose StudentsNest?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaShieldAlt />
              </div>
              <h3>Safe & Verified</h3>
              <p>
                University email verification ensures a trusted community of
                students and verified property listings.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaCheckCircle />
              </div>
              <h3>Quality Assured</h3>
              <p>
                Every listing is manually reviewed by our team before going live
                to ensure quality and accuracy.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHandshake />
              </div>
              <h3>Direct Connection</h3>
              <p>
                No middlemen. Connect directly with property owners for faster
                decisions and transparent communication.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FaSearch />
              </div>
              <h3>Easy Search</h3>
              <p>
                Smart filters help you find exactly what you need near your
                campus within your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-preview">
        <div className="container">
          <h2>Have Questions?</h2>
          <p className="faq-subtitle">
            Get in touch with our team for any queries or assistance
          </p>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;
