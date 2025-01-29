import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/ProductsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToFav, removeFromFav } from "../redux/FavouritesSlice";
import { Link } from "react-router-dom";

function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { flashSaleProducts } = useContext(ProductsContext);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const favProducts = useSelector((state) => state.favourites.favProducts);
   const storedUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const isInCart = (id) => {
    return cartProducts.some((item) => item.id === id);
  };
  const isInFav = (id) => {
    return (
      Array.isArray(favProducts) && favProducts.some((item) => item.id === id)
    );
  };
  const handleAddToCart = (item) => {
    if(!storedUser){
      toast.error("Logged in first!")
    }
    else{
      dispatch(addToCart(item));
    toast.success("added to cart!");
    }
  };
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Removed From Cart!");
  };
  const handleAddToFav = (product) => {
    if(!storedUser){
      toast.error("Logged in first!")
    }
    else{
      dispatch(addToFav(product));
    toast.success("Added To Favourites!");}
  };
  const handleRemoveFromFav = (id) => {
    dispatch(removeFromFav(id));
    toast.success("Removed From Favourites!");
  };

  useEffect(() => {
    const endDate = new Date("Jan 31, 2025 23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = endDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  if (!flashSaleProducts || flashSaleProducts.length === 0) {
    return <div>Loading flash sales...</div>;
  }
  return (
    <>
      <div className="container my-5">
        <div className="today d-flex my-5">
          <div
            className="bg-danger"
            style={{ width: "20px", height: "40px" }}
          ></div>
          <span className="text-danger fs-5 ms-3">Today’s</span>
        </div>
        <div className="flash-sales-timer d-flex mb-5">
          <h2 className="text-start">Flash Sales</h2>
          <div className="d-flex justify-content-start my-5">
            {["days", "hours", "minutes", "seconds"].map(
              (unit, index, array) => (
                <React.Fragment key={index}>
                  <div className="time-box mx-2 text-center  bg-white text-dark d-flex align-items-center">
                    <div>
                      <small style={{ fontSize: "15px" }}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </small>
                      <span className="d-block display-4 fs-1">
                        {timeLeft[unit] < 10
                          ? `0${timeLeft[unit]}`
                          : timeLeft[unit]}
                      </span>
                    </div>
                    {index < array.length - 1 && (
                      <span
                        className="mx-2 mt-3 display-4 fs-2 text-danger"
                        style={{ fontWeight: "bold" }}
                      >
                        :
                      </span>
                    )}
                  </div>
                </React.Fragment>
              )
            )}
          </div>
          <div>
            <i class="fas fa-arrow-left btn btn-outline-dark me-2"></i>
            <i class="fas fa-arrow-right btn btn-outline-dark"></i>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">
          {flashSaleProducts.map((item, idx) => (
            <div className="col" key={idx}>
              <div
                className="card h-100 position-relative product-card"
                style={{ cursor: "pointer" }}
              >
                <div className="position-relative" style={{ height: "250px" }}>
                  <img
                    src={item.images[0]}
                    className="card-img-top img-fluid"
                    alt="Product"
                  />
                  <div className="badge bg-danger position-absolute top-0 start-0">
                    {item.discountPercentage} %
                  </div>
                  {isInCart(item.id)?(<>
                      <button className="btn btn-danger w-100 add-to-cart-btn" onClick={()=>handleRemove(item.id)}>
                      Remove From Cart
                    </button>
                    </>):(<>
                      <button className="btn btn-dark w-100 add-to-cart-btn" onClick={()=>handleAddToCart(item)}>
                      Add To Cart
                    </button>
                    </>)}
                </div>
                <div
                  className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                  style={{ zIndex: 1 }}
                >
                  {isInFav(item.id) ? (
                      <span
                        className="text-dark"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemoveFromFav(it.id)}
                      >
                        <i class="fas fa-heart text-danger"></i>
                      </span>
                    ) : (
                      <span
                        className="text-dark"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleAddToFav(item)}
                      >
                        <i class="far fa-heart"></i>
                      </span>
                    )}
                  <Link to={`/product/${item.id}`} className="text-dark" style={{ cursor: "pointer" }}>
                                        <i class="far fa-eye"></i>
                                      </Link>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div>
                    <span className="text-danger fs-5">
                      {(
                        item.price -
                        item.price * (item.discountPercentage / 100)
                      ).toFixed(2)}
                      $
                    </span>
                    <span className="text-muted text-decoration-line-through ms-2">
                      {item.price}$
                    </span>
                  </div>
                  <div className="mt-2">
                    {[...Array(Math.round(item.rating || 0))].map(
                      (star, index) => (
                        <span key={index} className="text-warning">
                          &#9733;
                        </span>
                      )
                    )}
                    <span className="text-muted ms-2">
                      ({((item.rating / 5) * 100).toFixed(0)})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-danger">View All Products</button>
        </div>
      </div>
    </>
  );
}

export default FlashSales;
