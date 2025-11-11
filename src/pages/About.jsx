import { Link } from "react-router-dom";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaUsers,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About StudentsNest</h1>
          <p className="hero-subtitle">
            Making student accommodation simple, safe, and accessible across Pakistan
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon">
                <FaBullseye />
              </div>
              <h2>Our Mission</h2>
              <p>
                To connect students with safe, affordable, and verified accommodation
                options across Pakistan, making the housing search process simple and
                stress-free. We believe every student deserves a secure home away from
                home.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h2>Our Vision</h2>
              <p>
                To become Pakistan's most trusted student accommodation platform,
                bridging the gap between students and property owners through
                technology, transparency, and verified safety standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-solution">
        <div className="container">
          <h2>The Problem We're Solving</h2>
          <div className="problem-content">
            <div className="problem-text">
              <p className="lead-text">
                Every year, thousands of students across Pakistan face significant
                challenges finding safe and affordable accommodation near their
                universities.
              </p>

              <div className="challenges-list">
                <div className="challenge-item">
                  <div className="challenge-icon">❌</div>
                  <div>
                    <h3>Lack of Verification</h3>
                    <p>
                      Unverified listings lead to scams, safety concerns, and false
                      information about properties.
                    </p>
                  </div>
                </div>

                <div className="challenge-item">
                  <div className="challenge-icon">❌</div>
                  <div>
                    <h3>Time-Consuming Search</h3>
                    <p>
                      Students waste countless hours searching through unreliable
                      sources and dealing with middlemen.
                    </p>
                  </div>
                </div>

                <div className="challenge-item">
                  <div className="challenge-icon">❌</div>
                  <div>
                    <h3>Hidden Costs</h3>
                    <p>
                      Unexpected fees, broker commissions, and unclear pricing make
                      budgeting difficult for students.
                    </p>
                  </div>
                </div>

                <div className="challenge-item">
                  <div className="challenge-icon">❌</div>
                  <div>
                    <h3>Limited Options</h3>
                    <p>
                      Difficulty finding properties that match specific needs like
                      budget, location, or amenities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-box">
              <h3>Our Solution</h3>
              <p>
                StudentsNest provides a verified, transparent platform where students
                can easily browse safe accommodation options and connect directly with
                property owners - no middlemen, no hidden fees, just honest housing.
              </p>

              <div className="solution-features">
                <div className="solution-feature">
                  <FaShieldAlt />
                  <span>Verified Listings</span>
                </div>
                <div className="solution-feature">
                  <FaUsers />
                  <span>Direct Connection</span>
                </div>
                <div className="solution-feature">
                  <FaHandshake />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FaShieldAlt />
              </div>
              <h3>Safety First</h3>
              <p>
                We prioritize student safety through university email verification and
                manual review of every property listing.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h3>Transparency</h3>
              <p>
                No hidden fees, no misleading information. What you see is exactly
                what you get.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h3>Innovation</h3>
              <p>
                We continuously improve our platform using technology to make student
                housing search easier and faster.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h3>Student-Centric</h3>
              <p>
                Every decision we make puts students first. Free access, easy search,
                and verified options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Helped</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Verified Properties</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate individuals working to solve student housing challenges
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <FaUsers />
              </div>
              <h3>Development Team</h3>
              <p className="member-role">Platform Architects</p>
              <p>
                Building and maintaining the technology that powers StudentsNest,
                ensuring a seamless experience for all users.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <FaShieldAlt />
              </div>
              <h3>Verification Team</h3>
              <p className="member-role">Quality Assurance</p>
              <p>
                Manually reviewing every property listing to ensure safety, accuracy,
                and quality standards are met.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar">
                <FaHeart />
              </div>
              <h3>Support Team</h3>
              <p className="member-role">Customer Success</p>
              <p>
                Available 24/7 to help students and property owners with any
                questions, concerns, or technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-pakistan">
        <div className="container">
          <h2>Why Pakistan Needs StudentsNest</h2>
          <div className="pakistan-content">
            <p className="lead-text">
              Pakistan has over <strong>2 million university students</strong>, with
              thousands relocating annually for higher education. The current housing
              market presents unique challenges:
            </p>

            <div className="pakistan-facts">
              <div className="fact-item">
                <div className="fact-number">70%</div>
                <p>Students struggle to find verified accommodation</p>
              </div>
              <div className="fact-item">
                <div className="fact-number">45%</div>
                <p>Face safety concerns with unverified listings</p>
              </div>
              <div className="fact-item">
                <div className="fact-number">60%</div>
                <p>Pay extra fees to brokers and middlemen</p>
              </div>
            </div>

            <p>
              StudentsNest addresses these challenges by creating a trusted ecosystem
              where students can find verified accommodation directly from property
              owners, eliminating unnecessary costs and safety risks.
            </p>
          </div>
        </div>
      </section>

      <section className="join-cta">
        <div className="container">
          <h2>Join the StudentsNest Community</h2>
          <p>
            Whether you're a student looking for accommodation or a property owner
            wanting to help students, we'd love to have you onboard.
          </p>
          <div className="cta-buttons">
            <Link to="/students" className="btn btn-primary">
              I'm a Student
            </Link>
            <Link to="/owners" className="btn btn-secondary">
              I'm a Property Owner
            </Link>
          </div>
          <div className="contact-link">
            <p>
              Have questions?{" "}
              <Link to="/contact" className="text-link">
                Contact our team
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
