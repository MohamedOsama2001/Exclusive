import axios from "axios";
import React, { useEffect, useState } from "react";
function Main() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryPerPage = 6;
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  useEffect(() => {
    const endDate = new Date("Dec 31, 2024 23:59:59").getTime();

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
  // fetchFlashSaleProducts
  useEffect(() => {
    const fetchFlashSaleProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const productsData = response.data.products;
        const ourProducts = productsData.slice(0, 8);
        const flashSaleList = productsData
          .sort((a, b) => b.discountPercentage - a.discountPercentage)
          .slice(0, 4);
        const bestSellingList = productsData
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 4);
        setFlashSaleProducts(updateFavoritesStatus(flashSaleList));
        setBestSellingProducts(bestSellingList);
        setProducts(ourProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    fetchFlashSaleProducts();
  });
  // fetchCategory
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);
  const handleNext = () => {
    if (currentIndex + categoryPerPage < categories.length) {
      setCurrentIndex((prevIndex) => prevIndex + categoryPerPage);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - categoryPerPage);
    }
  };
  // add to cart
  const addToCart = (product) => {
    if (!storedUser) {
      alert("You must logged in first!");
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = cart.find((item) => item.id === product.id);
    if (isInCart) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    updateProductCartStatus();
  };
  const updateProductCartStatus = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedProducts = bestSellingProducts.map((product) => ({
      ...product,
      isInCart: !!cart.find((item) => item.id === product.id),
    }));
    setBestSellingProducts([...updatedProducts]);
    console.log("Updated Products:", updatedProducts);
  };
  useEffect(() => {
    updateProductCartStatus();
  }, []);
  // favourites
  const getFavoritesProducts = () => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  };
  const updateFavoritesStatus = (products) => {
    const favorites = getFavoritesProducts();
    return products.map((product) => ({
      ...product,
      isFavorite: favorites.some((fav) => fav.id === product.id),
    }));
  };
  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const addToFavorite = (product) => {
    if (!storedUser) {
      alert("You must logged in first!");
      return;
    }
    const favorites = getFavoritesProducts();
    let updatedFavorites;

    if (product.isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFlashSaleProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      )
    );
  };

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-none d-md-block">
              <ul className="list-group list-group-flush border-end" style={{cursor:"pointer"}}>
                {categories
                  .map((category, idx) => (
                    <li className="list-group-item" key={idx}>
                      {category.name}
                    </li>
                  ))
                  .slice(0, 8)}
                <li className="list-group-item" key="more">
                  More...
                </li>
              </ul>
            </div>
            <div className="col-md-9">
              <div
                id="promoCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner mt-3">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                      <div>
                        <div className="d-flex mb-3">
                          <img
                            src={"/images/appleicon.png"}
                            alt="iPhone"
                            className="img-fluid"
                            style={{ maxWidth: "40px" }}
                          />
                          <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                        </div>
                        <h2>Up to 10% off Voucher</h2>
                        <button className="btn text-light mt-3">
                          {" "}
                          <span className="text-decoration-underline">
                            Shop Now
                          </span>{" "}
                          &rarr;
                        </button>
                      </div>
                      <img
                        src={"/images/iphone.jpg"}
                        alt="iPhone"
                        className="img-fluid"
                        style={{ maxWidth: "40%" }}
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex justify-content-between align-items-center bg-black text-white p-5">
                      <div>
                        <div className="d-flex mb-3">
                          <img
                            src={"/images/appleicon.png"}
                            alt="iPhone"
                            className="img-fluid"
                            style={{ maxWidth: "40px" }}
                          />
                          <h6 className="mt-3 ms-3">iPhone 14 Series</h6>
                        </div>
                        <h2>Up to 10% off Voucher</h2>
                        <button className="btn text-light mt-3">
                          {" "}
                          <span className="text-decoration-underline">
                            Shop Now
                          </span>{" "}
                          &rarr;
                        </button>
                      </div>
                      <img
                        src={"/images/iphone.jpg"}
                        alt="iPhone"
                        className="img-fluid"
                        style={{ maxWidth: "40%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#promoCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#promoCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* flash sale section */}
      <section>
        <div className="container my-5">
          <div className="today d-flex my-5">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px" }}
            ></div>
            <span className="text-danger fs-5 ms-3">Today’s</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="text-start">Flash Sales</h2>
            <div className="d-flex justify-content-start my-5">
              {["days", "hours", "minutes", "seconds"].map(
                (unit, index, array) => (
                  <React.Fragment key={index}>
                    <div className="time-box mx-2 text-center p-2 bg-white text-dark d-flex align-items-center">
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
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {flashSaleProducts.map((item, idx) => (
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
                      src={item.images[0]}
                      className="card-img-top mt-5 ms-5"
                      alt="Product"
                    />
                    <div className="badge bg-danger position-absolute top-0 start-0">
                      {item.discountPercentage} %
                    </div>
                    <button
                      className="btn btn-dark w-100 add-to-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      {isProductInCart(item.id)
                        ? "Remove From Cart"
                        : "Add To Cart"}
                    </button>
                  </div>
                  <div
                    className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                    style={{ zIndex: 1 }}
                  >
                    <span
                      className={`text-${item.isFavorite ? "danger" : "dark"}`}
                      onClick={() => addToFavorite(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <i class="far fa-heart"></i>
                    </span>
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-eye"></i>
                    </span>
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
      </section>
      {/* categories section*/}
      <section>
        <div className="categories container my-5">
          <div className="today d-flex my-5">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px" }}
            ></div>
            <span className="text-danger fs-5 ms-3">Categories</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="text-start">Browse By Category</h2>
            <div>
              <i
                className={`fas fa-arrow-left btn btn-outline-dark me-2 ${
                  currentIndex === 0 ? "disabled" : ""
                }`}
                onClick={handlePrev}
              ></i>
              <i
                className={`fas fa-arrow-right btn btn-outline-dark ${
                  currentIndex + categoryPerPage >= categories.length
                    ? "disabled"
                    : ""
                }`}
                onClick={handleNext}
              ></i>
            </div>
          </div>
          <div className="row">
            {categories
              .slice(currentIndex, currentIndex + categoryPerPage)
              .map((category, idx) => (
                <div className="col-lg-2 col-md-4 col-sm-6" key={idx}>
                  <div className="category">
                    <h4 className="mt-4">{category.name}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/*best selling section*/}
      <section>
        <div className="container my-5">
          <div className="today d-flex my-5">
            <div
              className="bg-danger"
              style={{ width: "20px", height: "40px" }}
            ></div>
            <span className="text-danger fs-5 ms-3">This Month</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="text-start">Best Selling Products</h2>
            <div>
              <button className="btn btn-danger">View All</button>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {bestSellingProducts.map((product) => (
              <div className="col" key={product.id}>
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
                      className="card-img-top mt-5 ms-5"
                      alt="Product"
                    />
                    <button
                      className="btn btn-dark w-100 add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      {isProductInCart(product.id)
                        ? "Remove From Cart"
                        : "Add To Cart"}
                    </button>
                  </div>
                  <div
                    className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                    style={{ zIndex: 1 }}
                  >
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-heart"></i>
                    </span>
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-eye"></i>
                    </span>
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
        </div>
      </section>
      {/*music timer section*/}
      <section>
        <div
          className="container my-5"
          style={{ backgroundColor: "#1b1b1b", padding: "30px" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="text-white">
                <p className="text-success">Categories</p>
                <h1>Enhance Your Music Experience</h1>
                <div className="d-flex justify-content-start my-5">
                  {["days", "hours", "minutes", "seconds"].map(
                    (unit, index) => (
                      <div
                        key={index}
                        className="time-box mx-2 text-center p-2 bg-white text-dark"
                      >
                        <span className="d-block display-4">
                          {timeLeft[unit] < 10
                            ? `0${timeLeft[unit]}`
                            : timeLeft[unit]}
                        </span>
                        <small>
                          {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </small>
                      </div>
                    )
                  )}
                </div>
                <button className="btn btn-success btn-lg">Buy Now!</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                src={"/images/music.png"}
                alt="Speaker"
                className="product-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* our oproducts section*/}
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
                      className="card-img-top mt-5 ms-5"
                      alt="Product"
                    />
                    <button
                      className="btn btn-dark w-100 add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      {isProductInCart(product.id)
                        ? "Remove From Cart"
                        : "Add To Cart"}
                    </button>
                  </div>
                  <div
                    className="position-absolute top-0 end-0 d-flex flex-column align-items-center p-2"
                    style={{ zIndex: 1 }}
                  >
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-heart"></i>
                    </span>
                    <span className="text-dark" style={{ cursor: "pointer" }}>
                      <i class="far fa-eye"></i>
                    </span>
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
      {/*new arrival section*/}
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
                  src={"/images/ps5.png"}
                  className="card-image"
                  alt="PlayStation 5"
                />
                <div className="overlay p-3">
                  <h5 className="card-title">PlayStation 5</h5>
                  <p className="card-text">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <a className="text-light" style={{ cursor: "pointer" }}>
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"/images/woman.png"}
                      className="card-image"
                      alt="Women's Collections"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Women's Collections</h5>
                      <p className="card-text">
                        Featured women collections that give you another vibe.
                      </p>
                      <a className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"/images/speaker.png"}
                      className="card-image"
                      alt="Speakers"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Speakers</h5>
                      <p className="card-text">Amazon wireless speakers.</p>
                      <a className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="card position-relative text-white overflow-hidden">
                    <img
                      src={"/images/perfum.png"}
                      className="card-image"
                      alt="Perfume"
                    />
                    <div className="overlay p-3">
                      <h5 className="card-title">Perfume</h5>
                      <p className="card-text">GUCCI INTENSE OUD EDP.</p>
                      <a className="text-light" style={{ cursor: "pointer" }}>
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
export default Main;
