import React from "react";

function CompMain() {
  return (
    <>
      <div className="container my-5">
        <div
          id="promoCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mt-3">
            <div className="carousel-item active">
              <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                <div>
                  <div className="d-flex mb-3">
                    <img
                      src="./assets/appleicon.png"
                      alt="AppleIcon"
                      className="img-fluid"
                      style={{ maxWidth: "40px" }}
                    />
                    <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                  </div>
                  <h2>Up to 10% off Voucher</h2>
                  <button className="btn text-light mt-3">
                    {" "}
                    <span className="text-decoration-underline">
                      Shop Now
                    </span>{" "}
                    &rarr;
                  </button>
                </div>
                <img
                  src="./assets/iphone.jpg"
                  alt="iPhone"
                  className="img-fluid"
                  style={{ maxWidth: "40%" }}
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                <div>
                  <div className="d-flex mb-3">
                    <img
                      src="./assets/appleicon.png"
                      alt="AppleIcon"
                      className="img-fluid"
                      style={{ maxWidth: "40px" }}
                    />
                    <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                  </div>
                  <h2>Up to 10% off Voucher</h2>
                  <button className="btn text-light mt-3">
                    {" "}
                    <span className="text-decoration-underline">
                      Shop Now
                    </span>{" "}
                    &rarr;
                  </button>
                </div>
                <img
                  src="./assets/iphone.jpg"
                  alt="iPhone"
                  className="img-fluid"
                  style={{ maxWidth: "40%" }}
                />
              </div>
            </div>
          </div>
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#promoCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#promoCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompMain;
