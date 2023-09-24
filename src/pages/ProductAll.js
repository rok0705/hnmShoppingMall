import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, useQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("searchquery:", searchQuery);
    // let url = `http://localhost:3001/products?q=${searchQuery}`;
    let url = `https://my-json-server.typicode.com/rok0705/hnmShoppingMall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data);
  };

  useEffect(() => {
    console.log("useEffect called");
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col key={menu.id} lg={3}>
              <ProductCard className="box" product={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
