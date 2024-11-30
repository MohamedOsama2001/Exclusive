import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './all.css';
import Header from './Header';
import Main from './Main';
import Signup from "./Signup";
import Login from "./Login";
import Wishlist from "./Wishlist";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import MyAccount from "./MyAccount";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<CheckOut/>}></Route>
        <Route path="/myaccount" element={<MyAccount/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
