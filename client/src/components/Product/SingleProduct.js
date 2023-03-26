import { useState } from "react";
import { Link } from "react-router-dom";
import ProductPopup from "../ProductPopup";
import { addProduct } from "../../redux/reducer/cart";
import { useDispatch } from "react-redux";
const SingleProduct = (product) => {
  const [open, setOpen] = useState(false);
  const { title, image, price, label, story } = product;
  const dispatch = useDispatch();
  const onCartClick = () => {
    dispatch(addProduct(product));
  };
  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      {open && (
        <ProductPopup
          title={title}
          image={`${process.env.REACT_APP_API}/public/product/image/${image}`}
          price={price}
          story={story}
          onClose={toggle}
        />
      )}
      <div class="col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="ltn__product-item text-center">
          <div class="product-img">
            <div onClick={toggle}>
              <img
                width="100%"
                src={`${process.env.REACT_APP_API}/public/product/image/${image}`}
                alt="#"
              />
            </div>
            {label && label !== "" && (
              <div class="product-badge">
                <ul>
                  <li class="badge-2">{label}</li>
                </ul>
              </div>
            )}

            <div class="product-hover-action product-hover-action-2">
              <ul>
                <li>
                  <a onClick={toggle}>
                    <i class="text-light icon-magnifier"></i>
                  </a>
                </li>
                <li class="add-to-cart">
                  <a onClick={onCartClick}>
                    <span class="cart-text d-none d-xl-block text-light">
                      Add to Cart
                    </span>
                    <span class="d-block d-xl-none">
                      <i class="icon-handbag"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="product-info">
            <h2 class="product-title">
              <Link to="/">{title}</Link>
            </h2>
            <div class="product-price">
              <span>Rs. {price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProduct;
