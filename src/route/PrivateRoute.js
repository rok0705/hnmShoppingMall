import React from "react";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ loginStatus }) => {
  console.log("privateRoute:", loginStatus);

  return loginStatus ? <ProductDetailPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
