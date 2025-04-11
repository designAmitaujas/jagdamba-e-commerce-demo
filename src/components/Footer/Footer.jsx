import React from "react";
import "../Footer/Footer.css";
import { Facebook, Google, Instagram, TwitterX } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="d-flex justify-content-between">
        <div class="footer-cta ">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <i class="fas fa-map-marker-alt"></i>
                {/* <div class="cta-text">
                  <h4>Find us</h4>
                  <span>1010 Avenue, sw 54321, chandigarh</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-0">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                {/* <div class="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      class="img-fluid"
                      alt="logo"
                    />
                  </a>
                </div> */}

                <div className="img-container ">
                  <img
                    className="footerLogo"
                    src="/src/assets/images/FooterLogo.png"
                    alt="Logo"
                    width="150"
                    height="150"
                    style={{ marginLeft: "50px" }}
                  />
                </div>

                <div class="footer-social-icon" style={{ marginLeft: "55px" }}>
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
            <div class="col-xl-4 col-lg-4 col-md-6 mb-10">
              <div class="footer-widget">
                <div class="footer-widget-heading">
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
                    <a href="/contactus">Contact </a>
                  </li>
                </ul>
              </div>
              <div class="footer-widget-heading" style={{ marginTop: "10px" }}>
                <h3>Mail</h3>
              </div>
              <div class="footer-text mb-25">
                <p>info@jagdambasales.com</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget" style={{ paddingRight: "60px" }}>
                <div class="footer-widget-heading">
                  <h3>Find us</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    SB 46-50, Avishkar Complex, Near GEB Coloney, near Gauri
                    Showroom, Vidyutnagar Colony, IOC Nagar, Akota, Vadodara,
                    Gujarat 390015
                  </p>
                  <div
                    class="footer-widget-heading"
                    style={{ marginTop: "20px" }}
                  >
                    <h3>Contact Us</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>093272 76400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area ">
        <div class="">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center pt-3 ">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2025, All Rights Reserved by Jagdamba Sales
                  Corporation
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right pt-3">
              <div class="footer-menu">
                <ul>
                  {/* <li>
                    <a href="#">Term Of Use</a>
                  </li> */}
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  {/* <li>
                    <a href="#">Cookie Policy</a>
                  </li> */}
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
