import React from "react";
import { Container, Row } from "reactstrap";
import Categories from "../../Categories/Categories";
import "./ShopingCart.scss";
import { connect } from "react-redux";
import ShopCart from "../../Component/ShopCart/ShopCart";
import {
  increaseCount,
  deleteCount,
  decreaseCount,
} from "../../Redux/Basket/BasketActions.js";

function ShopingCart({
  basketList,
  increaseCount,
  deleteCount,
  decreaseCount,
}) {
  console.log("basketList", basketList);
  return (
    <>
      <Categories />
      <div className="shoping-cart">
        <Container>
          <div className="shoping-cart-container">
            <h4 className="cart-title">سبد خرید</h4>
            <div style={{ direction: "rtl" }}>
              <span>{basketList.length}</span>{" "}
              <span>محصول در سبد خرید شماست</span>
            </div>
          </div>
          {basketList.map((item) => (
            <ShopCart key={item.id} shopCart={item} increaseCount={increaseCount} decreaseCount={decreaseCount} />
          ))}
        </Container>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    basketList: state.basketList.basketList,
  };
};

export default connect(mapStateToProps, {
  increaseCount,
  deleteCount,
  decreaseCount,
})(ShopingCart);
