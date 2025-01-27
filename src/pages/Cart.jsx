import React from "react";
import { Footer, Nav } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/ProductsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartProducts);
  const cartTotal = cartItems
    ? cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handleRemove = (id) => {
    if (window.confirm("Delete this product?")) {
      dispatch(removeFromCart(id));
    }
  };
  const handleCheckout = () => {
    cartItems.length === 0 ? toast.error("Cart is Empty!") : navigate("/checkout");
  };
  return (
    <>
      <Nav />
      <section>
        <div className="container my-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
                style={{ fontWeight: "bold" }}
              >
                Cart
              </li>
            </ol>
          </nav>
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <>
                  <tr>
                    <td>
                      <img
                        src={product.images[0]}
                        alt="LCD Monitor"
                        style={{ width: "60px" }}
                      />
                      <span className="ms-2">{product.title}</span>
                    </td>
                    <td>{product.price}$</td>
                    <td>
                      {product.quantity === 1 ? (
                        <i
                          class="fas fa-trash-alt btn btn-outline-dark"
                          onClick={() => handleRemove(product.id)}
                        ></i>
                      ) : (
                        <i
                          class="fas fa-minus btn btn-outline-dark"
                          onClick={() => handleDecrement(product.id)}
                        ></i>
                      )}
                      <span className="mx-3">{product.quantity}</span>
                      <i
                        class="fas fa-plus btn btn-outline-dark"
                        onClick={() => handleIncrement(product.id)}
                      ></i>
                    </td>
                    <td>{(product.price * product.quantity).toFixed(2)}$</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center mb-4">
            <Link className="btn btn-outline-dark" to="/">
              Return To Shop
            </Link>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon Code"
                />
                <button className="btn btn-danger">Apply Coupon</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cart Total</h5>
                  <p className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </p>
                  <p className="d-flex justify-content-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between fw-bold">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </p>
                  <button
                    className="btn btn-danger w-100"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default Cart;
