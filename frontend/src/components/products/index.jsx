import React from "react";
import Navbar from "../common/navbar/index";
import ProductRecommendation from "./ProductRecommendation";
import Footer from "../common/Footer";
export default function Productindex() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa, #fed6e3)",
      }}
      className="w-full"
    >
      <Navbar />
      <div className="pt-20">
        <div className="w-[90%] mx-auto max-w-custom flex flex-col relative">
          <ProductRecommendation />
          <Footer />
        </div>
      </div>
    </div>
  );
}
