import { Link } from "react-router-dom";
const Fotter = () => {
  return (
    <footer class="ltn__footer-area">
      <div class="footer-top-area section-bg-5">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-menu-widget clearfix">
                <h4 class="footer-title">Quick Links</h4>
                <div class="footer-menu"></div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-menu-widget clearfix">
                <h4 class="footer-title">Information</h4>
                <div class="footer-menu"></div>
              </div>
            </div>
            <div class="col-xl-2 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-menu-widget clearfix">
                <h4 class="footer-title">Customer Service</h4>
                <div class="footer-menu"></div>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-about-widget">
                <h4 class="footer-title">About Our Shop</h4>
                <div class="footer-logo d-none">
                  <div class="site-logo">
                    <img src="img/logo.png" alt="Logo" />
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmo incididunt ut labore et dolore
                </p>
                <div class="footer-address"></div>
                <div class="ltn__social-media mt-20 d-none"></div>
                <div class="footer-payment-img">
                  <img src="img/icons/payment-6.png" alt="Payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__copyright-area ltn__copyright-2 section-bg-5">
        <div class="container ltn__border-top-2">
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="footer-copyright-left">
                <div class="ltn__copyright-design clearfix">
                  <p>
                    &copy; <span class="current-year"></span> - Just For You
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 align-self-center">
              <div class="footer-copyright-right text-right">
                <div class="ltn__copyright-menu d-none"></div>
                <div class="ltn__social-media"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Fotter;
