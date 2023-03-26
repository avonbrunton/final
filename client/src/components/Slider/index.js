import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i class="icon-arrow-right" alt="Arrow Icon"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <i class="icon-arrow-left" alt="Arrow Icon"></i>
    </div>
  );
}

const SliderSection = () => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    fade: true,
    cssEase: "linear",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div class="ltn__slider-area ltn__slider-3 ltn__slider-6 section-bg-1">
      <div class="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white---">
        <Slider {...settings}>
          <div
            class="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---"
            data-bs-bg="img/slider/1.jpg"
          >
            <div class="ltn__slide-item-inner">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 align-self-center">
                    <div class="slide-item-info">
                      <div class="slide-item-info-inner ltn__slide-animation">
                        <div class="slide-item-info">
                          <div class="slide-item-info-inner ltn__slide-animation">
                            <h1 class="slide-title animated">Art By Avon</h1>
                            <h6 class="slide-sub-title ltn__body-color slide-title-line animated">
                              Art is emotion expressed
                            </h6>
                            <div class="slide-brief animated">
                              <p>
                                Creativity is seeing what others see and thinking what no one else ever thought.
                              </p>
                            </div>
                            <div class="btn-wrapper animated">
                              <a href="#" class="theme-btn-1 btn btn-round">
                                Shop Now
                              </a>
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
          <div
            class="ltn__slide-item ltn__slide-item-8 text-color-white---- bg-image bg-overlay-theme-black-80---"
            data-bs-bg="img/slider/3.jpg"
          >
            <div class="ltn__slide-item-inner">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 align-self-center">
                    <div class="slide-item-info">
                      <div class="slide-item-info-inner ltn__slide-animation">
                        <div class="slide-item-info">
                          <div class="slide-item-info-inner ltn__slide-animation">
                            <h1 class="slide-title animated">Manifest Through Visualization</h1>
                            <h6 class="slide-sub-title ltn__body-color slide-title-line animated">
                              Let your subconscious be driven by you
                            </h6>
                            <div class="slide-brief animated">
                              <p>
                              Let creativity drive progress.
                              </p>
                            </div>
                            <div class="btn-wrapper animated">
                              <a href="#" class="theme-btn-1 btn btn-round">
                                Shop Now
                              </a>
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
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
