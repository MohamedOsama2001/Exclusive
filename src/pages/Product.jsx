import React, { useEffect, useState } from "react";
import { Footer, Nav } from "../components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/ProductsSlice";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const isInCart = (id) => {
    return cartProducts.some((item) => item.id === id);
  };
  const storedUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        const productData = response.data;
        console.log("product=>", productData);
        setProduct(productData);
      } catch (err) {
        console.error("Error Fetching Product", err);
      }
    };
    fetchProduct();
  }, [id]);
  const handleAddToCart = (product) => {
    if (!storedUser) {
      toast.error("Logged in first!");
    } else {
      dispatch(addToCart(product));
      toast.success("Added to cart!");
    }
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From Cart!");
  };
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Nav />
      <section>
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src={product.images[0]}
                alt="Product"
                className="img-fluid rounded"
                style={{ height: 400 }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold">{product.title}</h2>
              <div className="d-flex align-items-center mb-3">
                <span className="me-2 text-muted fs-5">{product.rating}</span>
                <span className="text-dark fs-5">
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <div className="text-dark fw-bold fs-4 mb-3">
                ${product.price}
              </div>
              <p className="text-muted">{product.description}</p>
              <div className="d-flex gap-2">
                {isInCart(product.id) ? (
                  <>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove from Cart
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </>
                )}
                <Link className="btn btn-dark" to={"/cart"}>
                  Go to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Product;
