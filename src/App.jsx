import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navcard from "./components/Navcard";
import "remixicon/fonts/remixicon.css";

import TvList from "./components/TvList";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import ProductList from "./components/ProductList";
import About from "./components/aboutus/About";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profiles/Profile";

import Addcart from "./components/Cart/Addcart";
import Contact from "./components/Contacts/ContactUs";
import Footer from "./components/Footer/Footer";
import Myorder from "./components/Order/Myorder";


import Testimonials from "./components/Testimony/Testimonials";

import Payment from "./components/Payment/Paymentlist";
import Wishlist from "./components/wishlist/Wishlist";
import Myprofile from "./components/Myprofile/Myprofile";
import Checkout from "./components/Checkout/Checkout";
import ProductSales from "./components/SalesPromo/ProductSales";
import FridgeList from "./components/FridgeList";
import Productdetail from "./components/Details/Productdetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navcard" element={<Navcard />}></Route>
      <Route path="/banner" element={<Banner />}></Route>
      <Route path="/tvlist" element={<TvList />}></Route>
      <Route path="/header" element={<Header />}></Route>

      <Route path="/singleProduct" element={<SingleProduct />}></Route>
      <Route path="/productList" element={<ProductList />}></Route>
      <Route path="/about" index element={<About />}></Route>
      <Route path="/login" index element={<Login />}></Route>
      <Route path="/register" index element={<Register />}></Route>
      <Route path="/profile" index element={<Profile />}></Route>
      <Route path="/wishlist" index element={<Wishlist />}></Route>
      <Route path="/addcart" index element={<Addcart />}></Route>
      <Route path="/contactus" index element={<Contact />}></Route>
      <Route path="/footer" index element={<Footer />}></Route>
      <Route path="/myorder" index element={<Myorder />}></Route>
      <Route path="/detail" index element={<Productdetail />}></Route>
      <Route path="/testimonials" index element={<Testimonials />}></Route>
      <Route path="/paymentlist" index element={<Payment />}></Route>
      <Route path="/myprofile" index element={<Myprofile />}></Route>
      <Route path="/checkout" index element={<Checkout />}></Route>
      <Route path="/productsale" index element={<ProductSales />}></Route>
      <Route path="/fridgelist" index element={<FridgeList />}></Route>
    </Routes>
  );
};

export default App;
