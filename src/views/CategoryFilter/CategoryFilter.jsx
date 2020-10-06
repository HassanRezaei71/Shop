import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useParams } from "react-router-dom";
import Categories from "../../Categories/Categories";
import { Container, Row, Col } from "reactstrap";
import { Spinner } from "reactstrap";
import MyCard from "../../Component/Card/MyCard";
import "./CategoryFilter.scss";

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
      <div className="category">
        <Container>
          {pending && (
            <div class="spinner" style={{ padding: "10px 0" }}>
              <Spinner color="info" />
            </div>
          )}
          <Row>
            {products.map((product, index) => (
              <Col key={index} sm="6" lg="3" className="product-col-item">
                <MyCard
                  key={product.id}
                  className="product-item-container"
                  product={product}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

// <Row>
//         {products.map((product) => (
//           <Col key={product.id}>
//             <p>{product.name}</p>
//             <img src={product.images[0].src} width="300px" />
//             <div
//               dangerouslySetInnerHTML={createMarkup(product.description)}
//             ></div>
//           </Col>
//         ))}
//       </Row>
