import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">
            <FaHome /> StudentsNest
          </h3>
          <p>Safe. Simple. Student Living. Finding the perfect student accommodation made easy with verified listings across Pakistan.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61583610620612" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/109997244/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            {/* <a href="https://instagram.com/studentsnest" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/studentsnest" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a> */}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/students">For Students</Link></li>
            <li><Link to="/owners">For Owners</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Help Center</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
            <li><Link to="/contact">Privacy Policy</Link></li>
            <li><Link to="/contact">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <FaEnvelope /> support@studentsnest.com
            </li>
            <li>
              <FaPhone /> 0310-7773532
            </li>
            <li>
              Monday - Friday: 9AM - 6PM
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StudentsNest - All Rights Reserved | Safe & Verified Student Accommodation Platform</p>
      </div>
    </footer>
  );
}

export default Footer;
