import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaSearch,
  FaImage,
  FaUsers,
  FaHeadset,
  FaStar,
  FaBolt,
} from "react-icons/fa";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p className="hero-subtitle">
            No hidden fees. No surprises. Just honest pricing that works for everyone.
          </p>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="container">
          <div className="pricing-cards">
            {/* Student Plan */}
            <div className="pricing-card student-card">
              <div className="card-badge">Most Popular</div>
              <div className="card-icon student-icon">
                <FaSearch />
              </div>
              <h2>For Students</h2>
              <div className="price">
                <span className="currency">Rs</span>
                <span className="amount">0</span>
                <span className="period">/forever</span>
              </div>
              <p className="price-description">
                100% free for students - browse and connect without any charges
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Unlimited property browsing</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Advanced search filters</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Direct contact with owners</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>University email verification</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Save favorite listings</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>24/7 customer support</span>
                </div>
              </div>

              <Link to="/students" className="btn btn-primary">
                Browse Listings
              </Link>
            </div>

            {/* Owner Plan */}
            <div className="pricing-card owner-card featured">
              <div className="card-badge premium-badge">Recommended</div>
              <div className="card-icon owner-icon">
                <FaBolt />
              </div>
              <h2>For Property Owners</h2>
              <div className="price">
                <span className="currency">Rs</span>
                <span className="amount">500</span>
                <span className="period">/listing</span>
              </div>
              <p className="price-description">
                Small one-time fee per property listing - reach thousands of students
              </p>

              <div className="features-list">
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Property listing for 6 months</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Upload up to 10 photos</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Verified student inquiries</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Featured in search results</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Edit listing anytime</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Priority customer support</span>
                </div>
                <div className="feature-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Performance analytics</span>
                </div>
              </div>

              <Link to="/owners" className="btn btn-secondary">
                List Your Property
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <h2>Why Our Pricing Works</h2>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-icon">
                <FaShieldAlt />
              </div>
              <h3>Safe Payment</h3>
              <p>
                All transactions are secure and protected. We use industry-standard
                encryption to keep your payment information safe.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaUsers />
              </div>
              <h3>Verified Tenants</h3>
              <p>
                Property owners only receive inquiries from verified students with
                university email addresses - ensuring quality tenants.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaStar />
              </div>
              <h3>Quality Listings</h3>
              <p>
                Every property is manually reviewed by our team before going live,
                ensuring accurate information and quality standards.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-icon">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>
                Our dedicated support team is always available to help both students
                and property owners with any questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <h2>Compare Plans</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Students</th>
                  <th>Property Owners</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account Creation</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Browse Listings</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Advanced Filters</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Direct Contact</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>List Property</td>
                  <td>—</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Photo Uploads (up to 10)</td>
                  <td>—</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Analytics Dashboard</td>
                  <td>—</td>
                  <td>
                    <FaCheckCircle className="table-check" />
                  </td>
                </tr>
                <tr>
                  <td>Customer Support</td>
                  <td>24/7</td>
                  <td>Priority 24/7</td>
                </tr>
                <tr>
                  <td>Cost</td>
                  <td className="price-highlight">Free Forever</td>
                  <td className="price-highlight">Rs 500/listing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is it really free for students?</h3>
              <p>
                Yes! Students can browse, search, and connect with property owners
                completely free. No hidden charges, no credit card required.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does my listing stay active?</h3>
              <p>
                Property listings remain active for 6 months. After that, you can
                renew your listing with the same one-time fee.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I edit my listing after posting?</h3>
              <p>
                Absolutely! Property owners can edit their listings anytime - update
                photos, change rent, or modify property details.
              </p>
            </div>

            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major payment methods including credit/debit cards,
                mobile wallets, and bank transfers.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you charge commission on rent?</h3>
              <p>
                No! We don't take any commission or percentage from the rent. It's
                just a simple one-time listing fee for property owners.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I list multiple properties?</h3>
              <p>
                Yes! You can list as many properties as you want. Each property
                requires a separate listing fee of Rs 500.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of students and property owners on StudentsNest</p>
          <div className="cta-buttons">
            <Link to="/students" className="btn btn-primary">
              I'm a Student
            </Link>
            <Link to="/owners" className="btn btn-secondary">
              I'm a Property Owner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
