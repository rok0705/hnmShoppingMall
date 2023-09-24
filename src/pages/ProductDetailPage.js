import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  const fetchProductInfo = async () => {
    let url = `http://localhost:3001/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchProductInfo();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-image">
          <img src={product?.img}></img>
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">${product?.price}</div>
          <div>{product?.choice ? "Conscience choice" : ""}</div>
          <div className="product-size">
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.map((size) => (
                  <Dropdown.Item>{size}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="product-add">
            {" "}
            <Button variant="danger">Add</Button>{" "}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
