import Header from "../src/component/layout/Header";
import Footer from "../src/component/layout/Footer";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import webfont from "webfontloader";
import React from "react";

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
      <Header />;
      <Footer />
    </Router>
  );
}

export default App;
