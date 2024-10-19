import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ServicesUpdated.css'; 

const ServicesUpdated = () => {
  return (
    <>
      <div className="services-updated-container">
        <div className="services-updated-content">
          <div className="checkmark-container">
            <i className="checkmark">&#10003;</i> {/* Checkmark Icon */}
          </div>
          <h2>Your services have been updated!</h2>
          <Link to="/services" className="services-button">
            Go to my services
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesUpdated;
