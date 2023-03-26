import { Link } from "react-router-dom";
import Image from "../../assets/img/banner/1.jpg";
const SingleProductBanner = () => (
  <div class="col-lg-4 col-md-6 ">
    <div class="ltn__banner-item">
      <div class="ltn__banner-img">
        <Link to="/">
          <img className="bg-light" src={Image} alt="Banner " />
        </Link>
      </div>
    </div>
  </div>
);

export default SingleProductBanner;
