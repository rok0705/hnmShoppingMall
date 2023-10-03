import React from "react";
import ProductDetailPage from "../pages/ProductDetailPage";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const loginStatusNew = useSelector((state) => state.auth.authenticate);
  console.log("privateRoute:", loginStatusNew);

  return loginStatusNew ? <ProductDetailPage /> : <Navigate to="/login" />;
};

export default PrivateRoute;
