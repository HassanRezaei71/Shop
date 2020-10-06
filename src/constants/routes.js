import React from "react";

const Home = React.lazy(() => import("../views/Home/Home"));
const Product = React.lazy(() => import("../views/Product/product"));
const CategoryFilter = React.lazy(() =>
  import("../views/CategoryFilter/CategoryFilter")
);

const routes = [
  { path: "/", exact: "true", component: Home },
  { path: "/product/:id", component: Product },
  { path: "/category/:slug", component: CategoryFilter },
];

export default routes;
