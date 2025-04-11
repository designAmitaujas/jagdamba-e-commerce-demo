import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductImageGallery = () => {
  // Initial default image
  const [zoomImage, setZoomImage] = useState("https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90");
  const zoomSlider = useRef(null);

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  // Function to change the main image
  const changeMainImage = (imageUrl) => {
    setZoomImage(imageUrl);
  };

  return (
    <div className="col-md-5">
      <div className="productZoom">
        <InnerImageZoom
          zoomType="hover"
          zoomScale={2}
          src={zoomImage}
        />
      </div>

      {/* Ensure Slick Slider has proper width */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
          <div className="item">
            <img
              src="https://rukminim2.flixcart.com/image/150/150/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90"
              className="w-100"
              onClick={() => changeMainImage("https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90")}
              alt="Product Thumbnail"
            />
          </div>

          <div className="item">
            <img
              src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg?im=Resize=(150,150)"
              className="w-100"
              onClick={() => changeMainImage("https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg")}
              alt="Product Thumbnail"
            />
          </div>

          <div className="item">
            <img
              src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg?im=Resize=(150,150)"
              className="w-100"
              onClick={() => changeMainImage("https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg")}
              alt="Product Thumbnail"
            />
          </div>

          <div className="item">
            <img
              src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg?im=Resize=(150,150)"
              className="w-100"
              onClick={() => changeMainImage("https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg")}
              alt="Product Thumbnail"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductImageGallery;