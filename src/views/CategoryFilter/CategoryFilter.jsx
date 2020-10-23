import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { useParams } from "react-router-dom";
import Categories from "../../Categories/Categories";
import { Container, Row, Col } from "reactstrap";
import { Spinner } from "reactstrap";
import MyCard from "../../Component/Card/MyCard";
import "./CategoryFilter.scss";

export default function CategoryFilter() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false);
  const [filter, setFilter] = useState({
    category: slug,
  });

  useEffect(() => {
    setPending(true);
    setProducts([]);
    api
      .get("products", { ...filter, category: slug })
      .then((res) => setProducts(res.data))
      .then((res) => setPending(false));
  }, [slug]);

  const createMarkup = (product) => {
    return { __html: product };
  };

  return (
    <div>
      <Categories />
      <div className="category-items">
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
    </div>
  );
}
