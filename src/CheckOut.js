import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckOut() {
  const location = useLocation();
  const { cart, cartTotal } = location.state || { cart: [], totalCart: 0 };
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const placeOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderData = {
      firstName: formData.get("firstName"),
      companyName: formData.get("companyName"),
      streetAddress: formData.get("streetAddress"),
      apartment: formData.get("apartment"),
      townCity: formData.get("townCity"),
      phoneNumber: formData.get("phoneNumber"),
      emailAddress: formData.get("emailAddress"),
      cart: JSON.parse(localStorage.getItem("cart")) || [],
      cartTotal: localStorage.getItem("cartTotal") || 0,
      paymentMethod: paymentMethod,
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, orderData];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.removeItem("cartTotal");
    alert("Your order has been successfully placed!");
    navigate("/");
  };

  return (
    <>
      <div className="container my-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Account</li>
            <li className="breadcrumb-item">My Account</li>
            <li className="breadcrumb-item">Product</li>
            <li className="breadcrumb-item">View Cart</li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontWeight: "bold" }}
            >
              CheckOut
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-lg-7">
            <h3>Billing Details</h3>
            <form onSubmit={placeOrder} id="checkoutForm">
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  First Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="companyName" className="form-label">
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  name="companyName"
                />
              </div>
              <div className="mb-3">
                <label for="streetAddress" className="form-label">
                  Street Address*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="streetAddress"
                  name="streetAddress"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="apartment" className="form-label">
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="apartment"
                  name="apartment"
                />
              </div>
              <div className="mb-3">
                <label for="townCity" className="form-label">
                  Town/City*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="townCity"
                  name="townCity"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="phoneNumber" className="form-label">
                  Phone Number*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="emailAddress" className="form-label">
                  Email Address*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  name="emailAddress"
                  required
                />
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="saveInfo"
                />
                <label className="form-check-label" for="saveInfo">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <div className="card">
              <div className="card-body">
                {cart.map((product) => (
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <span className="ms-2">
                        {product.title}({product.quantity})
                      </span>
                    </div>
                    <span>
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>${cartTotal}</span>
                </div>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="bank"
                      value="bank"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" for="bank">
                      Bank
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="cod"
                      value="Cash on Delivery"
                      checked
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label" for="cod">
                      Cash on delivery
                    </label>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Coupon Code"
                  />
                  <button className="btn btn-danger">Apply Coupon</button>
                </div>
                <button
                  type="submit"
                  className="btn btn-danger w-100"
                  form="checkoutForm"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
