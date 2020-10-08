import React from "react";


const Home = React.lazy(() => import("../views/Home/Home"));
const Product = React.lazy(() => import("../views/Product/product"));
const CategoryFilter = React.lazy(() =>
  import("../views/CategoryFilter/CategoryFilter")
);
const ShopingCart = React.lazy(() =>
  import("../views/ShopingCart/ShopingCart")
);

const routes = [
  { path: "/product/:id", exact: false, component: Product },
  { path: "/category/:slug", exact: false, component: CategoryFilter },
  { path: "/", exact: true, component: Home },
  { path: "/shopingcart", exact: true, component: ShopingCart },
];

export default routes;
