import React from "react";
import "./SmallCard.scss";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const SmallCard = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product.id}`} className="product-link">
        <Card className="small-card">
          <CardImg
            src={product.images[0].src}
            alt={`${product.name} image`}
            className="small-card-image"
          />
          <CardBody>
            <CardTitle className="small-product-title">{product.name}</CardTitle>
            <CardText className="small-show-price">
              <span className="price">
                <span className="toman">تومان</span>{" "}
                <span>{numberWithCommas(product.price)}</span>
              </span>
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default SmallCard;
