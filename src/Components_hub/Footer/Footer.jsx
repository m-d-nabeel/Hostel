import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="logo.png" alt="Hostel Logo" />
            <h3>Hostel Name</h3>
          </div>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Address: 123 Main St,
                City, State, Zip
              </li>
              <li>
                <i className="fas fa-phone"></i> Phone: 555-555-5555
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email: info@hostel.com
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p>&copy; 2023 Hostel Name. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
