import SingleProductBanner from "./SingleProductBanner";
const ProductBanner = () => {
  return (
    <div class="ltn__banner-area mt-80">
      <div class="container">
        <div class="row justify-content-center">
          <SingleProductBanner />
          <SingleProductBanner />
          <SingleProductBanner />
        </div>
      </div>
    </div>
  );
};
export default ProductBanner;
