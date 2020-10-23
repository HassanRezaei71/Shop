import React from "react";
import { Container} from "reactstrap";
import Categories from "../../Categories/Categories";
import MyCarousel from "../../Component/Carousel/MyCarousel";
import banner1 from "../../assets/images/banner1.gif";
import banner2 from "../../assets/images/banner2.jpg";
import Amazing from '../../Component/Amazing/Amazing';
import BestSeller from '../../Component/BestSeller/BestSeller';
import "./Home.scss";

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [pending, setPending] = useState(false);
  // const [filters, setFilters] = useState({
  //   orderby: "top_sellers",
  //   page: 1,
  // });

  // useEffect(() => {
  //   setPending(true);
  //   api
  //     .get("products", { ...filters })
  //     .then((res) => setProducts(res.data))
  //     .then((res) => setPending(false));
  // }, []);

  // const createMarkup = (product) => {
  //   return { __html: product.description };
  // };

  return (
    <>
      <div>
        <Categories />
      </div>
      <div className="home-carousel-container">
        <div className="home-carousel">
          <MyCarousel />
        </div>
      </div>
      <div className="home">
        <Container>
          <div className="baner-container">
            <div className="banner-1">
              <img src={banner1} alt="banner-1" />
            </div>
            <div className="banner-2">
              <img src={banner2} alt="banner-2" />
            </div>
          </div>
          <div className="amazing-box">
            <div className="title">پیشنهاد ویژه</div>
            <Amazing />
          </div>
          <div className="best-seller-box">
            <div className="title">پرفروش ترین ها</div>
            <BestSeller />
          </div>
        </Container>
      </div>
    </>
  );
}
