import React from "react";
import { BestSelling, Categories, FlashSales, Footer, Main, Music, Nav, NewArrival, Products, Services } from "../components";
import { ProductsProvider } from "../context/ProductsContext";
import { ToastContainer } from "react-toastify";

function Home() {
  return (
    <>
      <>
        <ProductsProvider>
          <Nav />
          <Main />
          <FlashSales />
          <Categories/>
          <BestSelling/>
          <Music/>
          <Products/>
          <NewArrival/>
          <Services/>
          <Footer />
        </ProductsProvider>
        <ToastContainer/>
      </>
    </>
  );
}

export default Home;
