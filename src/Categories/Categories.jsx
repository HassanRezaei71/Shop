import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api
      .get("products/categories")
      .then((res) => (console.log("categories", res.data), setCategories(res.data)));
  }, []);
  return (
    <Row>
      {categories.map((category) => (
        <Col key={category.id}>
          <Link to={`/category/${category.id}`}>
            <img src={category.image.src} />
            {category.name}
          </Link>
        </Col>
      ))}
    </Row>
  );
}
