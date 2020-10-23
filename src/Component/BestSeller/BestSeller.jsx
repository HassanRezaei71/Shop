import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import SmallCard from "../../Component/SmallCard/SmallCard";
import api from "../../api/api";
import "./BestSeller.scss";

export default function Amazing() {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false);

  // const createMarkup = (product) => {
  //   return { __html: product.description };
  // };

  useEffect(() => {
    setPending(true);
    api
      .get("products")
      .then((res) => setProducts(res.data))
      .then((res) => setPending(false));
  }, []);

  console.log(products);
  return (
    <div className="bestseller-container">
      {pending && (
        <div className="spinner" style={{ padding: "10px 0" }}>
          <Spinner color="info" />
        </div>
      )}
      {products.reverse().map((product, index) => (
        <SmallCard key={product.id} product={product} />
      ))}
    </div>
  );
}
