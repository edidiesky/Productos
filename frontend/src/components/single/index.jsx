"use client";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../common/navbar/index";
import ProductInformation from "./ProductInformation";
import ProductRecommendation from './ProductRecommendation'
import Hero from "./Hero";
import Footer from "../common/Footer";
export default function BookingItem() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getSingleRooms(id));
  //     dispatch(getAllRooms());
  //   }
  // }, [id]);
  // const { rooms, getsingleRoomisLoading } = useSelector((store) => store.room);
  // if (getsingleRoomisLoading) {
  //   return <Loader />;
  // }
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa, #fed6e3)",
      }}
      className="overflow-hidden"
    >
      <Navbar />
      <div className="mt-40 w-full">
        <Hero />
        <div className="w-[95%] md:w-[80%] mx-auto max-w-custom">
          <ProductInformation />
          <ProductRecommendation/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
