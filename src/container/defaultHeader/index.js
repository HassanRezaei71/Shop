import React from "react";
import FontAwesome from "../../components/FontAwesome/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/Logo/logo.png";
import "./index.scss";
import { Col, Container, Form, Input, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function DefaultHeader() {
  return (
    <Container fluid={true}>
      <div className="nav-bar">
        <Row>
          <Col xs={8} className="nav-items nav-items-right">
            <div className="search-container">
              <img src={logo} className="logo" width="70px" heaight="70px" alt="logo" />
              <Form>
                <Input type="text" className="search-input" placeholder="جستجو ..." />
              </Form>
            </div>
          </Col>
          <Col xs={4} className="nav-items nav-items-left">
            <div className="login-cart-container">
              <Link to="/" className="btn-login-container">
                <FontAwesomeIcon icon="user" size="lg" />
                <span className="login-text"> حساب کاربری</span>
              </Link>
              <span className="cln-between"></span>
              <Link to="/" className="shopping-cart">
                <FontAwesomeIcon icon={"shopping-cart"} size="lg" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
