import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://woocommerce.maktabsharif.ir/wp-json/wc/v3/products?consumer_key=ck_b7df13cb6a5560409094296746a5abb4054bf968&consumer_secret=cs_68d5143ac3f2624c6b477180d67b9fd06aa3a34f"
      )
      .then((res) => (setProducts(res.data), setPending(false)));
  }, []);

  return (
    <div>
      {pending ? <h1>Loading...</h1> : products.map((item) => <p>{item.name}</p>)}
    </div>
  );
}
