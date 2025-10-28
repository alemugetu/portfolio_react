import React, { useState } from 'react';
import './Footer.css';
import logo from '../../../assets/logo.png';
import user_icon from '../../../assets/user_icon.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage(' Please enter your email.');
    } else if (!emailRegex.test(email)) {
      setMessage('Invalid email address.');
    } else {
      setMessage(
       ' Thank you for subscribing!'
      );
      setEmail('');
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <p>I'm front-end developer from Gondar, Ethiopia</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>

      
      {message && <p className="footer-message">{message}</p>}

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2025 Alemu Getu. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Privacy Policy</p>
          <p>Terms of Services & Conditions</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
