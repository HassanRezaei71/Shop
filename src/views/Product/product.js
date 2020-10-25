import React, { useState, useEffect } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import Categories from "../../Categories/Categories";
import "./product.scss";
import api from "../../api/api";
import { Container, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { addToBasket } from "../../Redux/Basket/BasketActions.js";

const createMarkup = (product) => {
  return { __html: product.description };
};

function SingleProduct({ addToBasket }) {
  const history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  console.log("item", item);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    api
      .get(`products/${id}`)
      .then((res) => (setItem(res.data), setPending(false)));
  }, []);
  const handleToBascket = (item) => {
    addToBasket(item);
    history.push("/shopingcart");
  };
  return (
    <>
      <Categories />
      <div className="product-container">
        <Container>
          {pending && (
            <div className="spinner" style={{ padding: "10px 0" }}>
              <Spinner color="info" />
            </div>
          )}
          <div className="product-content">
            <div className="product-image-continer">
              <div>
                {item && item.images && (
                  <img src={item.images[0].src} alt={item.name} />
                )}
              </div>
            </div>
            <div className="product-info">
              <h4>{item.name}</h4>
              {!pending && <h5>ویژگی های محصول</h5>}
              <div dangerouslySetInnerHTML={createMarkup(item)}></div>
              {!pending && (
                <button
                  className="add-cart"
                  onClick={() => handleToBascket(item)}
                >
                  افزودن به سبد خرید
                </button>
              )}
            </div>
          </div>
          <div className="comment-container">
            {!pending && (
              <Container xl>
                <div className="comment-title-container">
                  <p className="comment-title">
                    نظرات<span className="comment-line"></span>
                  </p>
                </div>
                <form>
                  <div className="comment-content">
                    <textarea
                      placeholder="دیدگاه..."
                      name="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="comment-inputs">
                      <input
                        type="text"
                        name="name"
                        placeholder="نام"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="ایمیل"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="btn-submit-container">
                      <button type="submit" className="btn-submit">
                        درج نظر
                      </button>
                    </div>
                  </div>
                </form>
              </Container>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default connect(null, { addToBasket })(SingleProduct);
