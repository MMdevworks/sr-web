import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import About from "../components/About";
import Services from "../components/Services";
import ProductMap from "../components/ProductMap";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <About />
      <Services />
      <ProductMap />
      <Footer />
    </div>
  )
}

export default Home