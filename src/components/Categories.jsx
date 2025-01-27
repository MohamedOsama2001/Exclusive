import axios from "axios";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryPerPage = 6;
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
  return (
    <>
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
                  <div className="category mb-3">
                    <h4 className="mt-4">{category.name}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
