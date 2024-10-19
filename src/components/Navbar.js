import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Assuming the existing styles remain
import logo from '../assets/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" /> 
      </div>
      <div className="navbar-link">
        {/* Check the pathname and conditionally render content */}
        {location.pathname === '/profile-details' ? (
          <Link to="/">
            <img src={require('../assets/out.png')} alt="Account Icon" className="account-icon" />
          </Link>
        ) : location.pathname === '/services-updated' ? (
          <Link to="/services">
            Go to my services
          </Link>
        ) : (
          <Link to="/profile-details">Don't have an account?</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
