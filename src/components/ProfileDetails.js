import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileDetails.css';
import profile from '../assets/profile.png';
import icon from '../assets/out.png';

const ProfileDetails = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    setIsEditing(true);
  };

  const handleNext = () => {
    navigate('/pooja-categories');
  };

  const isFormValid = firstName && lastName && contactNumber;

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile Details</h1>
      <div className="profile-image-oval-container">
        <img src={profile} alt="Profile" className="profile-image" />
      </div>
      <img src={icon} alt="Account Icon" className="account-icon" />
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="profile-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            disabled={isSubmitted && !isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="profile-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            disabled={isSubmitted && !isEditing}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            className="profile-input"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
            disabled={isSubmitted && !isEditing}
          />
        </div>
        {!isSubmitted && (
          <button
            type="submit"
            className="profile-save-button"
            disabled={!isFormValid}
          >
            Submit
          </button>
        )}
        {isSubmitted && !isEditing && (
          <div className="profile-buttons-container">
            <button
              type="button"
              className="profile-edit-button"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="profile-next-button"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileDetails;
