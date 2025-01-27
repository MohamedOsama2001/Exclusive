import React from "react";
import { Footer, Nav } from "../components";

function Contact() {
  return (
    <>
      <Nav />
      <div className="container my-5">
      <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Home</li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontWeight: "bold" }}
            >
              Contact
            </li>
          </ol>
        </nav>
        <div className="row my-5">
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm border rounded">
              <h5 className="mb-4 text-danger">
                <i className="fas fa-phone-alt me-3"></i> Call To Us
              </h5>
              <p>We are available 24/7, 7 days a week.</p>
              <p>
                <strong>Phone:</strong> +880161112222
              </p>
              <hr />
              <h5 className="mb-4 text-danger">
                <i className="fas fa-envelope me-3"></i> Write To Us
              </h5>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>
                <strong>Emails:</strong>
              </p>
              <p>customer@exclusive.com</p>
              <p>support@exclusive.com</p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-4 shadow-sm border rounded">
              <form>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="email"
                      className="form-control mb-4"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone *"
                      required
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="text-end mt-5">
                  <button type="submit" className="btn btn-danger">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
