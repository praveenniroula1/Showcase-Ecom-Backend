import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import webfont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
