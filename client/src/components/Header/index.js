import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import Iconify from "../../components/iconify/Iconify";
const Header = () => {
  const [open, setOpen] = useState(false);
  const cartData = useSelector((state) => state.cart);
  const userData = useSelector((state) => state.user.user);
  let cartCalc = useMemo(() => {
    let totalqty = 0;
    let totalprice = 0;
    cartData.product.map((data) => {
      totalqty = totalqty + data.qty;
      totalprice = totalprice + data.qty * data.price;
    });
    return { totalprice, totalqty };
  }, [cartData]);

  const toggle = () => setOpen((prev) => !prev);
  return (
    <header class="ltn__header-area ltn__header-3 section-bg-6">
      <div class="header-bottom-area ltn__border-top ltn__header-sticky ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none d-lg-block">
        <div class="container">
          <div class="row">
            <div class="col header-menu-column justify-content-between">
              <div className="nav-logo-wrapper">
                <div class="site-logo">
                  <Link to="/">
                    <img src="img/logo.png" alt="Logo" />
                  </Link>
                </div>
                <Link onClick={toggle} className="hide-pc">
                  <button style={{ background: "none" }}>
                    <i class="icon-menu"></i>
                  </button>
                </Link>
              </div>
              <div class="header-menu header-menu-2">
                <nav>
                  <div class={`ltn__main-menu ${open && "open-side"}`}>
                    <button onClick={toggle} className="hide-pc close-menu">
                      <i class="icon-close"></i>
                    </button>
                    <ul>
                      <li class="menu-icon">
                        <Link onClick={toggle} to="/">
                          Home
                        </Link>
                      </li>
                      {/* <li class="menu-icon">
                        <Link to="/"> Product</Link>
                      </li> */}
                      {!userData ? (
                        <>
                          <li class="menu-icon">
                            <Link onClick={toggle} to="/login">
                              Login
                            </Link>
                          </li>
                          <li class="menu-icon">
                            <Link onClick={toggle} to="/register">
                              Register
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li class="menu-icon">
                            <Link onClick={toggle} to="/account">
                              Account
                            </Link>
                          </li>
                        </>
                      )}

                      <li>
                        <Link onClick={toggle} to="/cart">
                          <div class="mini-cart-icon mini-cart-icon-2">
                            <a href="/cart" class="ltn__utilize-toggle">
                              <span class="mini-cart-icon">
                                <i class="icon-handbag"></i>
                                <sup>{cartCalc.totalqty}</sup>
                              </span>
                              <h6>
                                <span>Your Cart</span>{" "}
                                <span class="ltn__secondary-color">
                                  Rs {cartCalc.totalprice}
                                </span>
                              </h6>
                            </a>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
