import { Link } from "react-router-dom";
import Image from "../../assets/img/banner/6.jpg";
const SingleBanner2 = () => {
  return (
    <div class="col-md-6">
      <div class="ltn__banner-item">
        <div class="ltn__banner-img">
          <Link to="/">
            <img src={Image} alt="Banner " />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleBanner2;
