import React from "react";
import "./ShopCart.scss";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function shopCart({ shopCart, increaseCount, decreaseCount }) {
  console.log(shopCart);
  return (
    <div className="shop-cart">
      <div className="shop-cart-image">
        {shopCart.images && shopCart.images[0] && (
          <img src={shopCart.images[0].src} alt={shopCart.name} />
        )}
      </div>
      <div className="shop-cart-info">
        <h5>{shopCart.name}</h5>
        <h6>
          قیمت {numberWithCommas(shopCart.price || shopCart.regular_price)}{" "}
          تومان
        </h6>
        <div>
          <button
            className="increase"
            onClick={() => increaseCount(shopCart.id)}
          >+</button>
          <span className="count">{shopCart.count}</span>
          <button
            className="decrease"
            onClick={() => decreaseCount(shopCart.id)}
          >-</button>
        </div>
        <div className="total-cart-price">
          <span>
            قیمت نهایی{" "}
            {numberWithCommas(
              (shopCart.price || shopCart.regular_price) *
                (shopCart.count !== 0 ? shopCart.count : 1)
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
