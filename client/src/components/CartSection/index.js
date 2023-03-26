import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import PaymentPopup from "../PaymentPopup";
const CardSection = () => {
  const [show, setShow] = useState(false);
  const cartData = useSelector((state) => state.cart.product);
  const user = useSelector((state) => state.user.user);
  const total = useMemo(() => {
    let total = 0;
    cartData.map((obj) => (total = total + obj.price));
    return total;
  }, [cartData]);

  const toggle = () => setShow((prev) => !prev);
  const handleCheckout = () => {
    if (user === null || user === 0) {
      window.location.href = "/login";
    } else {
      toggle();
    }
  };
  return (
    <>
      {show && <PaymentPopup total={total} close={toggle} />}
      <div class="liton__shoping-cart-area mb-100 mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1>Cart</h1>
              </div>
            </div>
          </div>
          {cartData.length === 0 ? (
            <div style={{ minHeight: "50vh" }} className="row">
              <div className="text-center">
                <p>Your cart is empty</p>
                <Link to="/">
                  {" "}
                  <button className="theme-btn-1 btn btn-block">
                    Go To Home
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div class="row">
              <div class="col-lg-12">
                <div class="shoping-cart-inner">
                  <div class="shoping-cart-table table-responsive">
                    <table class="table">
                      <tbody>
                        {cartData.map((data) => (
                          <CartProduct {...data} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="shoping-cart-total mt-50">
                    <h4>Cart Totals</h4>
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Order Total</strong>
                          </td>
                          <td>
                            <strong>Rs {total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      onClick={handleCheckout}
                      class="btn-wrapper text-right"
                    >
                      <a class="theme-btn-1 btn btn-effect-1">
                        Proceed to checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardSection;
