import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import webfont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./component/products/ProductDetails.js";
import Products from "./component/Home/Product.js";
import Search from "./component/Home/Search.js";

function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Driod Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
