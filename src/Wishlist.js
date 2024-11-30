import React, { useState } from "react";
function Wishlist() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const updateCartProducts = (updatedProducts) => {
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    setCart(updatedProducts);
  };
  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const addToCart = (product) => {
    if (isProductInCart(product.id)) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      updateCartProducts(updatedCart);
    } else {
      const updatedCart = [...cart, product];
      updateCartProducts(updatedCart);
    }
  };
  const removeFromFavorites = (id) => {
    const updatedFavorites = favourites.filter((item) => item.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavourites(updatedFavorites);
  };
  return (
    <>
      <main>
        {/* wishlist section*/}
        <section>
          <div className="wishlist my-5">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <h4 className="text-start">Wishlist ({favourites.length})</h4>
                <div>
                  <button className="btn btn-outline-dark">
                    Move All To Bag
                  </button>
                </div>
              </div>
              <div className="row">
                {favourites.map((item, idx) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
                    <div
                      className="card h-100 position-relative product-card"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="position-relative"
                        style={{ height: "250px" }}
                      >
                        <img
                          src={item.images[0]}
                          className="card-img-top mt-5 ms-5"
                          alt="Product"
                        />
                        <div className="badge bg-danger position-absolute top-0 start-0">
                          {item.discountPercentage} %
                        </div>
                        <button className="btn btn-dark w-100 add-to-cart-btn" onClick={() => addToCart(item)}>
                          {isProductInCart(item.id) ? (<><i class="fas fa-trash-alt me-2"></i>Remove From Cart</>) : (<><i class="fas fa-cart-plus me-2"></i>Add To Cart</>)}
                        </button>
                      </div>
                      <div
                        className="position-absolute top-0 end-0 p-2"
                        style={{ zIndex: 1 }}
                      >
                        <span style={{ cursor: "pointer" }} onClick={() => removeFromFavorites(item.id)}>
                          <i class="fas fa-trash-alt"></i>
                        </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: "17px" }}>
                          {item.title}
                        </h5>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Wishlist;
