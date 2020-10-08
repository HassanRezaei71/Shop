import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import api from "../../api/api";
import Categories from "../../Categories/Categories";
// import MyCarousel from "../../Component/Carousel/MyCarousel";
import { Spinner } from "reactstrap";
import MyCard from "../../Component/Card/MyCard";
import "./Home.scss";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false);
  const [filters, setFilters] = useState({
    orderby: "title",
    page: 1,
  });

  useEffect(() => {
    setPending(true);
    api
      .get("products", { ...filters })
      .then((res) => (setProducts(res.data), setPending(false)));
  }, []);

  const createMarkup = (product) => {
    return { __html: product.description };
  };

  return (
    <>
      <Categories />
        
      <div className="home">
        <Container>
          {pending && (
            <div className="spinner" style={{ padding: "10px 0" }}>
              <Spinner color="info" />
            </div>
          )}
          <Row>
            {products.map((product, index) => (
              <Col key={index} sm="6" lg="3" className="product-col-item">
                <MyCard
                  key={product.id}
                  className="product-item-container"
                  product={product}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
