import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <h4>About Us</h4>
          <p>
            Vehicle-Parking is a leading platform for finding safe, secure, and convenient parking
            spaces with the best rates. We ensure a hassle-free parking experience 24/7.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h4>Quick Links</h4>
          <ul className="list-unstyled">
          <li><NavLink to="/" className="text-white">Home</NavLink></li>
          <li><NavLink to="/about" className="text-white">About</NavLink></li>
          <li><NavLink to="/" className="text-white">Services</NavLink></li>
          <li><NavLink to="/" className="text-white">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="col-lg-4 col-md-6 mb-4">
          <h4>Contact Us</h4>
          <ul className="list-unstyled">
            <li>123 Main Street</li>
            <li>City, State, 12345</li>
            <li>Email: info@example.com</li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="text-center mb-4">
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#3b5998' }}
          role="button"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#55acee' }}
          role="button"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#dd4b39' }}
          role="button"
        >
          <i className="fab fa-google"></i>
        </a>
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#ac2bac' }}
          role="button"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#0082ca' }}
          role="button"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="#!"
          className="btn text-white btn-floating m-1"
          style={{ backgroundColor: '#333333' }}
          role="button"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: Vehicle-Parking
      </div>
    </div>
  </footer>
  );
}

export default Footer;
