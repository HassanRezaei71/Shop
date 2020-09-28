import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import api from "../../api/api";
import Categories from "../../Categories/Categories";
import "./Home.scss";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);
  const [filters, setFilters] = useState({ orderby: "title", page: 1, per_page: 10 });

  useEffect(() => {
    api
      .get("products", { ...filters })
      .then((res) => (console.log(res), setProducts(res.data), setPending(false)));
  }, []);

  const createMarkup = (product) => {
    return { __html: product.description };
  };

  return (
    <>
      <Categories />
      <Container>
        <Row>
          {products.map((product) => (
            <Col>
              <div key={product.id} className="product-item-container">
                <img src={product.images[0].src} className="product-image" />
                <p className="product-name">{product.name}</p>
                <div className="product-detail" dangerouslySetInnerHTML={createMarkup(product)}></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
