import React from "react";

function Services() {
  return (
    <>
      {/*end section*/}
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="fas fa-truck"></i>
              </div>
              <h4 className="my-3">FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="fas fa-headphones"></i>
              </div>
              <h4 className="my-3">24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
              <div className="icon-div bg-black text-light">
                <i className="far fa-check-circle"></i>
              </div>
              <h4 className="my-3">MONEY BACK GUARANTEE</h4>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
