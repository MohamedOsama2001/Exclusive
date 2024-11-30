import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Exclusive</h5>
              <p>Subscribe</p>
              <p>Get 10% off your first order</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "black" }}
                />
                <button className="btn btn-outline-light">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.91245 10H3.00045L1.02345 2.13505C1.01079 2.08934 1.00308 2.0424 1.00045 1.99505C0.978447 1.27405 1.77245 0.774048 2.46045 1.10405L21.0004 10L2.46045 18.896C1.78045 19.223 0.996447 18.737 1.00045 18.029C1.00247 17.9658 1.01359 17.9031 1.03345 17.843L2.50045 13"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Support</h5>
              <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
              <p>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              </p>
              <p>+88015-88888-9999</p>
            </div>
            <div className="col-md-2">
              <h5>Account</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Login / Register</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>Quick Link</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms Of Use</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 text-center">
              <h5>Download App</h5>
              <p style={{ fontSize: "10px" }}>Save $3 with App New User Only</p>
              <img
                src="/images/Qrcode 1.png"
                alt="QR Code"
                className="img-fluid mb-2"
              />
              <div>
                <a href="#">
                  <img src="/images/googleplay.png" alt="Google Play" />
                </a>
                <a href="#">
                  <img src="/images/appstore.png" alt="App Store" />
                </a>
              </div>
              <div className="social-icons mt-3">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom mt-4">
            <p>&copy; Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
