import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useParams } from "react-router-dom";
import Categories from "../../Categories/Categories";
import { Row, Col } from "reactstrap";

export default function CategoryFilter() {
  const [products, setProducts] = useState([]);
  const [pending, setPendig] = useState(false);
  const { slug } = useParams();
  const [filter, setFilter] = useState({
    category: slug,
  });
  useEffect(() => {
    setPendig(true);
    console.log(products, "products");
    api
      .get("products", { ...filter, category: slug })
      .then((res) => setProducts(res.data), setPendig(false));
  }, [slug]);

  const createMarkup = (product) => {
    return { __html: product };
  };

  return (
    <div>
      <Categories />
      <Row>
        {pending ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <Col key={product.id}>
              <p>{product.name}</p>
              <img src={product.images[0].src} width="300px" />
              <div dangerouslySetInnerHTML={createMarkup(product.description)}></div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}
