import React from 'react'
import { Footer, Nav } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/ProductsSlice';
import { removeFromFav } from '../redux/FavouritesSlice';
import { toast , ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WishList() {
    const dispatch=useDispatch()
    const cartProducts = useSelector((state) => state.cart.cartProducts);
    const favItems = useSelector((state) => state.favourites.favProducts);
    console.log("favitems",favItems) 
    console.log("cartproducts",cartProducts)
    const isInCart = (id) => {
        return cartProducts.some((item) => item.id === id);
      };
      const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Added to cart!");
      };
      const handleRemove = (id) => {
        dispatch(removeFromCart(id));
        toast.success("Removed From Cart!");
      };
      const handleRemoveFromFav = (id) => {
        dispatch(removeFromFav(id));
        toast.success("Removed From Favourites!");
      };
    return (
        <>
        <Nav/>
        <section>
          <div className="wishlist my-5">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <h4 className="text-start">Wishlist ({favItems.length})</h4>
                <div>
                  <button className="btn btn-outline-dark">
                    Move All To Bag
                  </button>
                </div>
              </div>
              <div className="row">
                {favItems.length>0?(<>
                  {favItems.map((item, idx) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
                    <div
                  className="product-card h-100 position-relative item-card"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="position-relative"
                    style={{ height: "250px" }}
                  >
                    <img
                      src={item.images[0]}
                      className="card-img-top"
                      alt="item"
                    />
                    {isInCart(item.id)?(<>
                      <button
                          className="btn btn-danger w-100 add-to-cart-btn"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove From Cart
                        </button>
                    </>):(<>
                      <button
                          className="btn btn-dark w-100 add-to-cart-btn"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add To Cart
                        </button>
                    </>)}
                  </div>
                  <div
                    className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                    style={{ zIndex: 1 }}
                  >
                    <span style={{ cursor: "pointer" }} onClick={() => handleRemoveFromFav(item.id)}>
                          <i class="fas fa-trash-alt"></i>
                        </span>
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-eye"></i>
                    </span>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div>
                      <span className="text-danger fs-5">{item.price}$</span>
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
                </>):(<>
                <div className='text-center fs-3'>
                  <p>No wishlist Item!</p>
                </div>
                </>)}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        <ToastContainer/>
        </>
    )
}

export default WishList
