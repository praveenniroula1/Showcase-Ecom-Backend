import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import webfont from "webfontloader";
import React, { useEffect, useState } from "react";
import Home from "./component/Home/Home.js";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./component/products/ProductDetails.js";
import Products from "./component/products/Products.js";
import Search from "./component/products/Search.js";
import LoginSignUp from "./component/User/LoginSignUp.js";
import Profile from "./component/User/Profile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import { loadUser } from "./actions/userAction.js";
import { useSelector } from "react-redux";
import axios from "axios";
import WebFont from "webfontloader";
import store from "./Store.js";
import UserOptions from "../src/component/layout/UserOptions.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "../src/component/carts/OrderSuccess.js";
import MyOrders from "./component/orders/MyOrders.js";
import OrderDetails from "./component/orders/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UserList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact";
import About from "./component/layout/About";
import ProtectedRoute from "./component/Routes/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "../src/component/carts/Cart.js";
import Shipping from "./component/carts/Shipping.js";
import { Switch } from "@mui/material";
import Payment from "../src/component/carts/Payment.js";
import ConfirmOrder from "../src/component/carts/ConfirmOrder.js";
import SingleProducts from "./component/products/SingleProducts.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<SingleProducts />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
