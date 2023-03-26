const ProductPopup = ({ image, story, price, title, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 999,
      }}
    >
      <div class="ltn__modal-area ltn__quick-view-modal-area">
        <div
          class="modal fade show"
          id="quick_view_modal"
          tabindex="-1"
          aria-modal="true"
          role="dialog"
          style={{ display: "block", paddingLeft: 0 }}
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="ltn__quick-view-modal-inner">
                  <div class="modal-product-item">
                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <div class="modal-product-img">
                          <img src={image} alt={title} />
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="modal-product-info shop-details-info pl-0">
                          <h3 class="animated fadeIn">{title}</h3>
                          <div class="product-price-ratting mb-20">
                            <ul>
                              <li>
                                <div class="product-price">
                                  <span>Rs. {price}</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            style={{
                              whiteSpace: "initial",
                              height: "max-content",
                              wordWrap: "break-word",
                            }}
                            class="modal-product-brief"
                          >
                            <p>{story}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
