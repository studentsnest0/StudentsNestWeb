import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { FaUserGraduate, FaEnvelope, FaLock, FaCheckCircle } from 'react-icons/fa';
import './StudentSignup.css';

function StudentSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // List of valid university email domains
  const validDomains = [
    '.edu',
    '.edu.pk',
    '.ac.pk',
    'student.',
    'students.',
    // Add more university domains as needed
  ];

  const validateUniversityEmail = (email) => {
    const lowerEmail = email.toLowerCase();
    return validDomains.some(domain => lowerEmail.includes(domain));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!validateUniversityEmail(formData.email)) {
      setError('Please use a valid university email address (e.g., .edu, .edu.pk, .ac.pk)');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Sign up with Supabase
      const { error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            user_type: 'student'
          }
        }
      });

      if (signUpError) throw signUpError;

      setSuccess(true);
      
      // Redirect to students page after 2 seconds
      setTimeout(() => {
        navigate('/students');
      }, 2000);

    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="student-signup-page">
        <div className="signup-container success-container">
          <div className="success-icon">
            <FaCheckCircle />
          </div>
          <h1>Account Created!</h1>
          <p>Welcome to StudentsNest! Redirecting you to browse properties...</p>
          <p className="email-note">
            Please check your email ({formData.email}) to verify your account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="student-signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <FaUserGraduate className="signup-icon" />
          <h1>Student Sign Up</h1>
          <p>Create your free account with your university email</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="fullName">
              <FaUserGraduate /> Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> University Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@university.edu"
              required
            />
            <small className="helper-text">
              Use your university email (.edu, .edu.pk, .ac.pk)
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <FaLock /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>

        <div className="signup-benefits">
          <h3>Why Sign Up?</h3>
          <ul>
            <li><FaCheckCircle /> Access verified property listings</li>
            <li><FaCheckCircle /> Save your favorite properties</li>
            <li><FaCheckCircle /> Contact property owners directly</li>
            <li><FaCheckCircle /> 100% free for students</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StudentSignup;
