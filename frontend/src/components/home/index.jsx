import React, { useEffect } from "react";
import Navbar from "../common/navbar/index";
import Footer from "../common/Footer";
// import Newsletter from "../common/Newsletter";
import Hero from "./hero";
import ProductList from "./ProductList";
import Banners from './Banners'
const HomeIndex = () => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c14e6ba7fff1db8989a44_jamie-street-vcn2ndJ5LwE-unsplash.jpg" alt="" className="h-screen w-full fixed" />
      <div className="w-[90%] mx-auto max-w-custom flex flex-col relative">
        {/* <Hero /> */}
        <ProductList/>
        <Banners/>
        <Footer /> 
      </div>
      {/* <Newsletter />
      <Footer /> */}
    </div>
  );
};

export default HomeIndex;
