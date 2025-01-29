import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/ProductsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToFav, removeFromFav } from "../redux/FavouritesSlice";
import { Link } from "react-router-dom";
function Products() {
  const { products } = useContext(ProductsContext);
  const cartProducts=useSelector((state)=>state.cart.cartProducts)
  const favProducts = useSelector((state) => state.favourites.favProducts);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const dispatch=useDispatch()
  const isInCart=(id)=>{
    return cartProducts.some((item)=>item.id===id)
  }
  const isInFav = (id) => {
    return (
      Array.isArray(favProducts) && favProducts.some((item) => item.id === id)
    );
  };
  const handleAddToCart=(product)=>{
    if(!storedUser){
      toast.error("Logged in first!")
     }
     else{
      dispatch(addToCart(product));
      toast.success("Added to cart!");}
  }
  const handleRemove=(id)=>{
    dispatch(removeFromCart(id))
    toast.success('Removed From Cart!')
  }
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
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="today d-flex my-5">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px" }}
            ></div>
            <span className="text-danger fs-5 ms-3">Our Products</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="text-start">Explore Our Products</h2>
            <div>
              <i class="fas fa-arrow-left btn btn-outline-dark me-2"></i>
              <i class="fas fa-arrow-right btn btn-outline-dark"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product, idx) => (
              <div className="col" key={idx}>
                <div
                  className="card h-100 position-relative product-card"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={product.images[0]}
                      className="card-img-top"
                      alt="Product"
                    />
                    {isInCart(product.id)?(<>
                      <button className="btn btn-danger w-100 add-to-cart-btn" onClick={()=>handleRemove(product.id)}>
                      Remove From Cart
                    </button>
                    </>):(<>
                      <button className="btn btn-dark w-100 add-to-cart-btn" onClick={()=>handleAddToCart(product)}>
                      Add To Cart
                    </button>
                    </>)}
                  </div>
                  <div
                    className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                    style={{ zIndex: 1 }}
                  >
                    {isInFav(product.id) ? (
                      <span
                        className="text-dark"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemoveFromFav(product.id)}
                      >
                        <i class="fas fa-heart text-danger"></i>
                      </span>
                    ) : (
                      <span
                        className="text-dark"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleAddToFav(product)}
                      >
                        <i class="far fa-heart"></i>
                      </span>
                    )}
                   <Link to={`/product/${product.id}`} className="text-dark" style={{ cursor: "pointer" }}>
                                         <i class="far fa-eye"></i>
                                       </Link>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div>
                      <span className="text-danger fs-5">{product.price}$</span>
                    </div>
                    <div className="mt-2">
                      {[...Array(Math.round(product.rating || 0))].map(
                        (star, index) => (
                          <span key={index} className="text-warning">
                            &#9733;
                          </span>
                        )
                      )}
                      <span className="text-muted ms-2">
                        ({((product.rating / 5) * 100).toFixed(0)})
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
      </section>
    </>
  );
}

export default Products;
