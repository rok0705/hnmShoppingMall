import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div onClick={showDetail}>
      <img height="500px" width="350px" src={product?.img}></img>
      <div>{product?.choice ? "Conscious choice" : " "}</div>
      <div>{product?.title}</div>
      <div>${product?.price}</div>
      <div>{product?.new ? "New Arrival" : ""}</div>
    </div>
  );
};

export default ProductCard;
