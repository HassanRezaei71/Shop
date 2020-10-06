import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Logo/logo.png";
import FontAwesome from "../../Component/FontAwesome/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ResponsiveNav.scss";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import api from "../../api/api";

export default function ResponsiveNav({ showSidebar, sidebar }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api
      .get("products/categories")
      .then(
        (res) => (console.log("categories", res.data), setCategories(res.data))
      );
  }, []);
  return (
    <>
      <Container fluid={true} className="res-nav">
        <Row>
          <Col>
            <div className="bar-container">
              <div className="bar-icon-container">
                <Link to="/" onClick={() => showSidebar()}>
                  <FontAwesomeIcon icon="bars" className="bar-icon" size="lg" />
                </Link>
              </div>
              <div className="logo">
                <Link to="/">
                  <img
                    src={logo}
                    className="logo"
                    width="70px"
                    heaight="70px"
                    alt="logo"
                  />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <FontAwesomeIcon
                    icon="question"
                    className="question-icon"
                    size="lg"
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <nav className={`nav-menu ${sidebar && "nav-menu-active"}`}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link onClick={() => showSidebar()} to="#" className="links">
              <FontAwesomeIcon icon="times" className="times-icon" size="lg" />
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className="category-item">
              <Link
                to={`/category/${category.id}`}
                className="category-title"
                onClick={() => showSidebar()}
              >
                <img src={category.image.src} className="category-icon" />
                <span className="category-name">{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}