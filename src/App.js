import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './all.css';
import { About, Account, Cart, Checkout, Contact, Home, Login, Orders, Product, SignUp, Whishlist, } from "./pages";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/favourites" element={<Whishlist/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/myaccount" element={<Account/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
////////////////////////////////////////////////////
// public => assets for images
//components:
            /*
            navbar.jsx
            main.jsx
            flashsales.jsx
            categories.jsx
            bestsellings.jsx
            music.jsx
            products.jsx
            newarrival.jsx
            footer.jsx
            index.js 
            */
//pages
             /*
             Home.jsx
             login.jsx
             signup.jsx
             wishlist.jsx
             cart.jsx
             checkout.jsx
             account.jsx
             about.jsx
             contact.jsx
             notfond.jsx
             productItem.jsx
             index.js
             */ 
//redux
      /*
      action => index.js
      reducer =>handlecart.js , index.js
      store.js
      */