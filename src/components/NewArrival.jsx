import React from "react";
import { Link } from "react-router-dom";


function NewArrival() {
  return (
    <>
      <section>
        <div className="container new-arrival my-5">
          <div className="today d-flex my-5">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px" }}
            ></div>
            <span className="text-danger fs-5 ms-3">Featured</span>
          </div>
          <h2 className="text-start">New Arrival</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 position-relative text-white overflow-hidden">
                <img
                  src={"./assets/ps5.png"}
                  className="card-image"
                  alt="PlayStation 5"
                />
                <div className="overlay p-3">
                  <h5 className="card-title">PlayStation 5</h5>
                  <p className="card-text">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link className="text-light" style={{ cursor: "pointer" }}>
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"./assets/woman.png"}
                      className="card-image"
                      alt="Women's Collections"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Women's Collections</h5>
                      <p className="card-text">
                        Featured women collections that give you another vibe.
                      </p>
                      <Link className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"./assets/speaker.png"}
                      className="card-image"
                      alt="Speakers"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Speakers</h5>
                      <p className="card-text">Amazon wireless speakers.</p>
                      <Link className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"./assets/perfum.png"}
                      className="card-image"
                      alt="Perfume"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Perfume</h5>
                      <p className="card-text">GUCCI INTENSE OUD EDP.</p>
                      <Link className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewArrival;
