import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate=useNavigate()
  const calculateCartTotal = () => {
    const total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    setCartTotal(total);
  };
  useEffect(() => {
    calculateCartTotal();
  }, [cart]);
  const quantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCart(updatedCart);
  };
  const updateCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calculateCartTotal();
  };
  const processToCheckout=()=>{
    navigate("/checkout",{state:{cart,cartTotal}})
  }


  return (
    <>
      <section>
        <div className="container my-5">
          <div className="head">
            <h5>Home / Cart</h5>
          </div>
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
              {cart.map((product)=>(
                <>
                <tr>
                <td>
                  <img
                    src={product.images[0]}
                    alt="LCD Monitor"
                    style={{width:"50px"}}
                  />
                  <span className="ms-2">{product.title}</span>
                </td>
                <td>{product.price}$</td>
                <td>
                  <input
                    type="number"
                    className="form-control text-center"
                    value={product.quantity}
                    min="1"
                    onChange={(e) =>
                      quantityChange(product.id, Number(e.target.value))
                    }
                  />
                </td>
                <td>{(product.price * product.quantity).toFixed(2)}$</td>
              </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between mb-4">
            <Link className="btn btn-outline-dark" to="/">Return To Shop</Link>
            <button className="btn btn-outline-dark" onClick={updateCart}>Update Cart</button>
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
                  <button className="btn btn-danger w-100" onClick={processToCheckout}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
