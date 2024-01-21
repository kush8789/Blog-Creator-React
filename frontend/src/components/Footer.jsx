import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto p-2 bg-primary" data-bs-theme="dark">
      <h3 className="text-center">Connect with us</h3>
      <div className="d-flex justify-content-evenly flex-wrap">
        <Link to="https://www.linkedin.com/in/kush-b-075211202" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in fa-3x"></i>
        </Link>
        <Link to="https://github.com/kush8789" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-3x"></i>
        </Link>
        <Link to="https://twitter.com/kush_baranwal?t=s5GAHblWxZHVnDAZZs_TnA&s=08" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-3x"></i>
        </Link>
        <Link to="https://instagram.com/kushbaranwal?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-3x"></i>
        </Link>
      </div>
    </footer>
  );
  // style={{ position: 'fixed', bottom: 0, width: '100%' }}
};

export default Footer;
