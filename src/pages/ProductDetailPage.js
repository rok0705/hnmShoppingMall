import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "./../redux/actions/productAction";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  let { id } = useParams();

  const fetchProductInfo = async () => {
    console.log("id:", id);
    dispatch(productAction.getProductDetail(id));
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
                {product &&
                  product.size.map((idx) => (
                    <Dropdown.Item key={idx}>{idx}</Dropdown.Item>
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
