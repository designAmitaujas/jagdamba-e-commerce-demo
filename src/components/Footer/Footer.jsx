import React from "react";
import "../Footer/Footer.css";
import { Facebook, Google, Instagram, TwitterX } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="footer-cta">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                {/* <div className="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-0">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                {/* <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div> */}
                <div className="headin1">
                <div className="img-container">
                  <img
                    className="footerLogo"
                    src="/src/assets/images/FooterLogo.png"
                    alt="Logo"
                    width="150"
                    height="150"
                    style={{ marginLeft: "50px" }}
                  />
                </div>

                <div
                  className="footer-social-icon"
                  style={{ marginLeft: "55px" }}
                >
                  <span className="mb-3" style={{ marginTop: "40px" }}>
                    Follow us
                  </span>
                  <a href="#">
                    <Facebook />
                  </a>
                  <a href="#">
                    <TwitterX />
                  </a>
                  <a href="#">
                    <Instagram />
                  </a>
                </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-10">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/Home">Home</a>
                  </li>
                  <li>
                    <a href="/about">about</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact</a>
                  </li>
                </ul>
              </div>
              <div
                className="footer-widget-heading"
                style={{ marginTop: "10px" }}
              >
                <h3>Mail</h3>
              </div>
              <div className="footer-text1 mb-25" style={{ color: "white" }}>
                <p>info@jagdambasales.com</p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Find us</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>
                    SB 46-50, Avishkar Complex, Near GEB Coloney, near Gauri
                    Showroom, Vidyutnagar Colony, IOC Nagar, Akota, Vadodara,
                    Gujarat 390015
                  </p>
                  <div
                    className="footer-widget-heading"
                    style={{ marginTop: "20px" }}
                  >
                    <h3>Contact Us</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>093272 76400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center pt-3">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2025, All Rights Reserved by Jagdamba Sales
                  Corporation
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right pt-3">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Term Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  {/* <li><a href="#">Cookie Policy</a></li> */}
                  <li>
                    <a href="#">Payment Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
