import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import webfont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./component/products/ProductDetails.js";
import Products from "./component/products/Products.js";
import Search from "./component/products/Search.js";
import LoginSignUp from "./component/user/LoginSignUp.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Driod Sans", "Chilanka"],
      },
    });
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
