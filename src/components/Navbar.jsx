import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { supabase } from '../lib/supabase';
import './Navbar.css';
import logo from '../assets/logo.jpeg';

function Navbar({ user, onLogout }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Don't show navbar on admin pages
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    if (onLogout) onLogout();
    closeMenu();
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Check if user is a student (not admin)
  const isStudent = user && user.user_metadata?.user_type === 'student';

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Students Nest Logo" className="nav-logo-img" />
        </Link>

        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/how-it-works" 
              className={location.pathname === '/how-it-works' ? 'active' : ''}
              onClick={closeMenu}
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link 
              to="/students" 
              className={location.pathname === '/students' ? 'active' : ''}
              onClick={closeMenu}
            >
              For Students
            </Link>
          </li>
          <li>
            <Link 
              to="/owners" 
              className={location.pathname === '/owners' ? 'active' : ''}
              onClick={closeMenu}
            >
              For Owners
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className={location.pathname === '/pricing' ? 'active' : ''}
              onClick={closeMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>

          {/* Mobile Auth Items */}
          <li className="mobile-only">
            {!user && (
              <>
                <Link 
                  to="/login" 
                  className={`nav-auth-link ${location.pathname === '/login' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <FaUser /> Login
                </Link>
                <Link 
                  to="/signup" 
                  className={`nav-auth-btn ${location.pathname === '/signup' ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <FaUser /> Sign Up
                </Link>
              </>
            )}
            {isStudent && (
              <div className="mobile-user-menu">
                <div className="mobile-user-info">
                  <FaUser className="user-icon" />
                  <span className="user-email">{user.email}</span>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </li>
        </ul>

        {/* Desktop Avatar Dropdown */}
        <div className="nav-avatar-container desktop-only">
          {!user ? (
            <div 
              className="avatar-dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="avatar-button" aria-label="Account menu">
                <FaUserCircle />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/login" className="dropdown-item" onClick={closeDropdown}>
                    <FaUser /> Login
                  </Link>
                  <Link to="/signup" className="dropdown-item dropdown-item-primary" onClick={closeDropdown}>
                    <FaUser /> Sign Up
                  </Link>
                </div>
              )}
            </div>
          ) : isStudent && (
            <div 
              className="avatar-dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <button className="avatar-button avatar-button-active" aria-label="User menu">
                <FaUserCircle />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-user-info">
                    <span className="dropdown-email">{user.email}</span>
                  </div>
                  <button onClick={handleLogout} className="dropdown-item dropdown-item-logout">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
