import React from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "./../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.productList);
  const [query, useQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("searchquery:", searchQuery);
    // let url = `http://localhost:3001/products?q=${searchQuery}`;

    // redux doesn't support async. do this in thunk middleware.
    dispatch(productAction.getProducts(searchQuery));
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
