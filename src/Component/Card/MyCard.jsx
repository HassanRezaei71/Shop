import React from "react";
import "./MyCard.scss";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const MyCard = ({ product }) => {
  console.log(product);
  return (
    <div>
      <Card className="card">
        <CardImg
          src={product.images[0].src}
          alt={`${product.name} image`}
          className="card-image"
        />
        <CardBody>
          <CardTitle className="product-title">{product.name}</CardTitle>
          <CardText className="show-price">
          <span className="price"><div className="toman">تومان</div> <div>{numberWithCommas(product.price)}</div></span>
          </CardText>
          <Button>خرید</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyCard;
