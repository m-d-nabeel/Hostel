import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* <footer>
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
      </footer> */}
      {/* <footer>
        <div className="footer-container">
          <div className="footer-col">
            <h3>Hostel Name</h3>
            <p>1234 Street Name</p>
            <p>City, State ZIP Code</p>
          </div>
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:+1234567890">
                  <i className="fa fa-phone"></i> (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@hostelname.com">
                  <i className="fa fa-envelope"></i> info@hostelname.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
      <div className="footer py-2">
        <div className="container mt-4">
          <div className="row ">
            <div className="col-6 col-md-2 footer_hostels">
              <ul>
                <span className="font-weight-bold footer-heading"><h4>Campus-A</h4></span>
                <li>
                  <a href="/hostel/aravali">Kelat</a>
                </li>
                <li>
                  <a href="/hostel/girnar">New Boys</a>
                </li>
                <li>
                  <a href="/hostel/himadri">Himadri</a>
                </li>
                <li>
                  <a href="/hostel/jwalamukhi">Jwalamukhi</a>
                </li>
                <li>
                  <a href="/hostel/kailash">Kailash</a>
                </li>
                <li>
                  <a href="/hostel/karakoram">Karakoram</a>
                </li>
                <li>
                  <a href="/hostel/kumaon">Kumaon</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 footer_hostels">
              <ul>
                <span className="font-weight-bold footer-heading"><h4>Campus-B</h4></span>
                <li>
                  <a href="/hostel/nilgiri">SRK</a>
                </li>
                <li>
                  <a href="/hostel/satpura">FRK</a>
                </li>
                <li>
                  <a href="/hostel/saptagiri">BRA</a>
                </li>
                <li>
                  <a href="/hostel/shivalik">Shivalik</a>
                </li>
                <li>
                  <a href="/hostel/udaigiri">Udaigiri</a>
                </li>
                <li>
                  <a href="/hostel/vindhyachal">Vindhyachal</a>
                </li>
                <li>
                  <a href="/hostel/zanskar">Zanskar</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="m-0" />
          <div className="footer-text pt-2 text-left ">
            <span>
              Copyright © Board for Hostel Management - IIT Delhi. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
