import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://woocommerce.maktabsharif.ir",
  consumerKey: "ck_b7df13cb6a5560409094296746a5abb4054bf968",
  consumerSecret: "cs_68d5143ac3f2624c6b477180d67b9fd06aa3a34f",
  version: "wc/v3",
});

export default api;