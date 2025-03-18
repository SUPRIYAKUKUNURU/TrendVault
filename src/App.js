import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import Journals from "./Journals";
import OffersPage from "./OffersPage";
// import Search from "./Search";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Search /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
