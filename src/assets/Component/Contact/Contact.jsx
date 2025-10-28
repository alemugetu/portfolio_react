import React, { useState } from 'react';
import './Contact.css';
import gmail from '../../../assets/gmail.png';
import phone from '../../../assets/phone.png';
import location from '../../../assets/location.jpg';
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: ' Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: ' Please enter a valid email address.' });
      return;
    }

    const payload = {
      ...formData,
      access_key: '6ec6657e-f8c0-4a78-921b-fbc64899c6a1',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      if (res.success) {
        setStatus({ type: 'success', message: ' Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: ' Failed to send. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Something went wrong. Try later.' });
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects. 
            If you have any questions or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={gmail} alt="gmail-icon" />
              <p>alemugetu78@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="phone-icon" />
              <p>+251 984948785</p>
            </div>
            <div className="contact-detail">
              <img src={github} alt="github-icon" />
              <a
                href="https://github.com/users/alemugetu/projects/1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="linkedin-icon" />
              <a
                href="https://linkedin.com/in/alemu-getu-752731378"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <img src={location} alt="location-icon" />
              <p>Gondar, Ethiopia</p>
            </div>
          </div>
        </div>

    
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {status.message && (
            <p
              className={`status-message ${
                status.type === 'success' ? 'success' : 'error'
              }`}
            >
              {status.message}
            </p>
          )}

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
