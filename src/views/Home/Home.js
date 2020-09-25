import React, { useState, useEffect } from "react";
import api from "../../api/api";
import Categories from "../../Categories/Categories";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);
  const [filters, setFilters] = useState({ orderby: "title", page: 1, per_page: 10 });

  useEffect(() => {
    api
      .get("products", { ...filters })
      .then((res) => (console.log(res), setProducts(res.data), setPending(false)));
  }, []);

  const createMarkup = (product) => {
    return { __html: product.description };
  };

  return (
    <div>
      <Categories />
      <p>1234564حسن رضایی</p>
      {pending ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={product.images[0].src} />
            <div dangerouslySetInnerHTML={createMarkup(product)}></div>
          </div>
        ))
      )}
    </div>
  );
}
