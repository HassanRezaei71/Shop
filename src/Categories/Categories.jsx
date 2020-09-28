import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./Categories.scss";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api
      .get("products/categories")
      .then((res) => (console.log("categories", res.data), setCategories(res.data)));
  }, []);
  return (
    <Container fluid={true}>
      <Row className="category-container">
        <Col>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="category-col">
                <Link to={`/category/${category.id}`} className="category-title">
                  <span className="category-name">{category.name}</span>
                  <img src={category.image.src} className="category-icon" />
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
