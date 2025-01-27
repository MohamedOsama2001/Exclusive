import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const ProductsContext = createContext();
export const ProductsProvider = ({children}) => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [products, setProducts] = useState([]);
  //fetch
  useEffect(() => {
    const fetchProducts = async () => {
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

        setFlashSaleProducts(flashSaleList);
        setBestSellingProducts(bestSellingList);
        setProducts(ourProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return(
    <ProductsContext.Provider value={{flashSaleProducts,products,bestSellingProducts}}>
        {children}
    </ProductsContext.Provider>
  ) 
  ;
};
