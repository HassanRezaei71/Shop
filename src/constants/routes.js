import React from "react";


const Home = React.lazy(() => import("../views/Home/Home"));
const Product = React.lazy(() => import("../views/Product/product"));
const CategoryFilter = React.lazy(() =>
  import("../views/CategoryFilter/CategoryFilter")
);

const routes = [
  { path: "/product/:id", exact: false, component: Product },
  { path: "/category/:slug", exact: false, component: CategoryFilter },
  { path: "/", exact: true, component: Home },
];

export default routes;
