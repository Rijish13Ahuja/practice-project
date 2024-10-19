import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!isOtpSent) {
      try {
        const payload = { contact_number: mobileNumber };
        console.log('Sending OTP with payload:', payload);
        const response = await fetch('https://test.backend.urbanoinfotech.com/api/v1/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log('Received response:', data);

        if (response.ok) {
          setIsOtpSent(true);
          setSuccessMessage('OTP sent successfully. Please enter the OTP.');
        } else {
          setError(`Error sending OTP: ${data.message || 'Unknown error'}`);
        }
      } catch (error) {
        setError('Error sending OTP. Please try again.');
        console.error('Error:', error);
      }
    } else {
      try {
        const response = await fetch('https://test.backend.urbanoinfotech.com/api/v1/pandit-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            contact_number: mobileNumber,
            otp: otp
          })
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage('OTP verified! Access token received.');
          console.log('Access Token:', data.access_token);
        } else {
          setError(`Error verifying OTP: ${data.message || 'Invalid OTP'}`);
        }
      } catch (error) {
        setError('Error verifying OTP. Please try again.');
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="mobile">{isOtpSent ? 'Enter OTP' : 'Enter Mobile no.'}</label>
          <input
            type="text"
            id="mobile"
            value={isOtpSent ? otp : mobileNumber}
            onChange={(e) => isOtpSent ? setOtp(e.target.value) : setMobileNumber(e.target.value)}
            placeholder={isOtpSent ? 'Enter OTP' : 'Mobile Number'}
            className="input-field"
          />
          <button type="submit">{isOtpSent ? 'Submit OTP' : 'Submit'}</button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default LoginForm;
