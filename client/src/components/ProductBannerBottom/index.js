import { Link } from "react-router-dom";
import Image from "../../assets/img/banner/10.jpg";
const ProductBannerBottom = () => {
  return (
    <div class="ltn__banner-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="ltn__banner-item">
              <div class="ltn__banner-img">
                <Link to="/">
                  <img src={Image} alt="Banner" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductBannerBottom;
