import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Loader from "./components/home/loader";
import Layout from "./screens/Layout";
import DashboardLayout from "./screens/DashboardLayout";

import { ProtectRoute } from "./lib/ProtectRoute";
import Animation from "./animations/Animation";
const HomeWrapper = lazy(() => import("./screens/Home"));
const Products = lazy(() => import("./screens/Products"));
// Products
// const SearchWrapper = lazy(() => import("./screens/Search"));
const SingleWrapper = lazy(() => import("./screens/Single"));
const Journal = lazy(() => import("./screens/Journal"));
// const TripsWrapper = lazy(() => import("./screens/Trips"));
// const PaymentWrapper = lazy(() => import("./screens/Payment"));
// const PaymentSuccess = lazy(() => import("./screens/Payment-Success"));
// // PaymentSuccess
export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="product/:id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleWrapper />
              </Suspense>
            }
          />
          <Route
            path="journal"
            element={
              <Suspense fallback={<Loader />}>
                <Journal />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
    // <Animation/>
  );
}
