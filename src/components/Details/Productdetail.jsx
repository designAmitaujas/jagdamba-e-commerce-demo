"use client";
import { useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Badge,
  Button,
  Tabs,
  Tab,
  ListGroup,
} from "react-bootstrap";
import { Star, Heart, ShoppingCart, Check, ShoppingBasket } from "lucide-react";

import { useNavigate } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./Productdetail.css";

const ProductDetail = () => {
  const [zoomImage, setZoomImage] = useState(
    "https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90"
  );
  const zoomSlider = useRef(null);
  const [ActiveSize, setActiveSize] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Sample product data
  const product = {
    id: 1,
    name: "LG 185 L 5 Star Inverter Direct Cool Single Door Refrigerator",
    price: 15490,
    originalPrice: 20500,
    discount: 24,
    image: "/src/assets/images/fridge.png",
    rating: 4.4,
    reviews: 156,
    description:
      "Experience efficient cooling with the LG 185L Direct Cool Single Door Refrigerator. This 5-star rated refrigerator comes with an inverter compressor and built-in stabilizer.",
    highlights: [
      "185L Storage Capacity",
      "5 Star Energy Rating",
      "Smart Inverter Compressor",
      "Built-in Stabilizer",
      "1 Year Comprehensive Warranty",
      "10 Years Warranty on Compressor",
    ],
    specifications: [
      { name: "Brand", value: "LG" },
      { name: "Model", value: "185L Direct Cool" },
      { name: "Capacity", value: "185 Litres" },
      { name: "Star Rating", value: "5 Star" },
      {
        name: "Warranty",
        value: "1 Year Comprehensive + 10 Years on Compressor",
      },
      { name: "Color", value: "Silver" },
      { name: "Type", value: "Single Door" },
    ],
  };

  // Slider product data
  const products = [
    {
      id: 1,
      name: "LG 185 litres 5 Star Direct Cool Single Door Refrigerator",
      variant: "( Scarlet Charm GL-D201ASCU)",
      image:
        "https://www.jiomart.com/images/product/original/493692274/lg-185-litres-5-star-direct-cool-single-door-refrigerator-scarlet-charm-gl-d201ascu-digital-o493692274-p599232104-0-202303110928.jpeg?im=Resize=(150,150)",
      rating: 4.3,
      reviews: 13201,
      price: 17990,
      originalPrice: 23100,
      discount: 22,
    },
    {
      id: 2,
      name: "LG 201 litres 5 Star Single Door Refrigerator",
      variant: "(Scarlet Euphoria GL D211HSEZ)",
      image:
        "https://www.jiomart.com/images/product/original/493858074/lg-201-litres-5-star-single-door-refrigerator-scarlet-euphoria-gl-d211hsez-digital-o493858074-p604141892-0-202308281806.jpeg?im=Resize=(150,150)",
      rating: 4.4,
      reviews: 151804,
      price: 17999,
      originalPrice: 20999,
      discount: 14,
    },
    {
      id: 3,
      name: "LG 185 L Direct Cool Single Door 3 Star Refrigerator with Fast Ice Making",
      variant: "(2 Star Refrigerator)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/m/d/5/-original-imah8pf8krrge9q7.jpeg?q=70",
      rating: 4.4,
      reviews: 118282,
      price: 22990,
      originalPrice: 30400,
      discount: 24,
    },
    {
      id: 4,
      name: "Whirlpool 235 L Frost Free Double Door",
      variant: "(2 Star Refrigerator)",
      image:
        "https://whirlpoolindia.vtexassets.com/arquivos/ids/170062-220-220?v=638769362273000000&width=220&height=220&aspect=true",
      rating: 4.2,
      reviews: 26194,
      price: 22990,
      originalPrice: 30400,
      discount: 24,
    },
    {
      id: 5,
      name: "Whirlpool 235 L Frost Free Triple Door Refrigerator",
      variant: "(Radiant Steel)",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/3/p/7/-original-imahyjqgzuzjcyhg.jpeg?q=70",
      rating: 4.4,
      reviews: 118282,
      price: 25990,
      originalPrice: 34190,
      discount: 23,
    },
    {
      id: 6,
      name: "Whirlpool 192 L 3 Star Vitamagic PRO Frost Free Direct-Cool Single Door Refrigerator",
      variant: "( MAGNUM STEE)",
      image:
        "https://www.jiomart.com/images/product/original/493692144/lg-185-litres-3-star-direct-cool-single-door-refrigerator-scarlet-euphoria-gl-b199osed-digital-o493692144-p599239127-0-202303111257.jpeg?im=Resize=(150,150)",
      rating: 4.4,
      reviews: 21365,
      price: 20999,
      originalPrice: 29999,
      discount: 30,
    },
  ];

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Responsive settings for thumbnail slider
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Function to change the main image
  const changeMainImage = (imageUrl) => {
    setZoomImage(imageUrl);
  };

  const isActive = (index) => {
    setActiveSize(index);
  };

  // Toggle favorites for related products
  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const handleAddToCart = () => {
    if (!isAddedToCart) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
      });
      setIsAddedToCart(true);
    }
  };

  const handleBuyNow = () => {
    // Add to cart first
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
    // Navigate to checkout
    navigate("/addcart");
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <>
      <Header />
      <section className="product-detail-section">
        <Container fluid className="px-3 px-md-4 px-lg-5">
          <Row className="pt-3 pb-3" style={{ marginTop: "188px" }}>
            <Col lg={12}>
              <Row>
                {/* Product Images */}
                <Col lg={5} md={6} className="mb-4">
                  <div className="product-zoom-container">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={2}
                      src={zoomImage}
                      className="main-product-image"
                    />
                  </div>

                  <div className="product-thumbnails-container mt-3">
                    <Slider
                      {...settings}
                      className="product-thumbnails"
                      ref={zoomSlider}
                    >
                      <div className="thumbnail-item">
                        <img
                          src="https://rukminim2.flixcart.com/image/150/150/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90"
                          className="img-fluid"
                          onClick={() =>
                            changeMainImage(
                              "https://rukminim2.flixcart.com/image/832/832/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=90"
                            )
                          }
                          alt="Product Thumbnail"
                        />
                      </div>

                      <div className="thumbnail-item">
                        <img
                          src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg?im=Resize=(150,150)"
                          className="img-fluid"
                          onClick={() =>
                            changeMainImage(
                              "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg"
                            )
                          }
                          alt="Product Thumbnail"
                        />
                      </div>

                      <div className="thumbnail-item">
                        <img
                          src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg?im=Resize=(150,150)"
                          className="img-fluid"
                          onClick={() =>
                            changeMainImage(
                              "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg"
                            )
                          }
                          alt="Product Thumbnail"
                        />
                      </div>

                      <div className="thumbnail-item">
                        <img
                          src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg?im=Resize=(150,150)"
                          className="img-fluid"
                          onClick={() =>
                            changeMainImage(
                              "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg"
                            )
                          }
                          alt="Product Thumbnail"
                        />
                      </div>
                    </Slider>
                  </div>
                </Col>

                {/* Product Info */}
                <Col lg={7} md={6} className="product-info">
                  <h1 className="product-title">{product.name}</h1>

                  <div className="d-flex align-items-center mb-3">
                    <Badge
                      bg="success"
                      className="d-flex align-items-center me-2 px-2 py-1"
                    >
                      <span className="me-1">{product.rating}</span>
                      <Star size={12} fill="currentColor" />
                    </Badge>
                    <span className="text-muted">
                      {product.reviews} Ratings & Reviews
                    </span>
                  </div>

                  <div className="product-price mb-3">
                    <h4 className="mb-0">₹{product.price.toLocaleString()}</h4>
                    <div>
                      <span className="text-muted text-decoration-line-through">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-success ms-2">
                        {product.discount}% off
                      </span>
                    </div>
                    <small className="text-success">Free delivery</small>
                  </div>

                  {/* Colors */}
                  <div className="mb-4">
                    <div className="subtitle mb-2">Colors:</div>
                    <div className="select-colors d-flex">
                      <div className="color red"></div>
                      <div className="color silver"></div>
                      <div className="color black"></div>
                    </div>
                  </div>

                  {/* Capacity */}
                  <div className="mb-4">
                    <span className="d-block mb-2">Capacity</span>
                    <div className="product-size d-flex flex-wrap">
                      <ul className="list list-inline mb-0">
                        <li className="list-inline-item mb-2">
                          <a
                            className={`btn-primary ${
                              ActiveSize === 0 ? "active" : ""
                            }`}
                            onClick={() => isActive(0)}
                          >
                            185L
                          </a>
                        </li>
                        <li className="list-inline-item mb-2">
                          <a
                            className={`btn-primary ${
                              ActiveSize === 1 ? "active" : ""
                            }`}
                            onClick={() => isActive(1)}
                          >
                            275L
                          </a>
                        </li>
                        <li className="list-inline-item mb-2">
                          <a
                            className={`btn-primary ${
                              ActiveSize === 2 ? "active" : ""
                            }`}
                            onClick={() => isActive(2)}
                          >
                            355L
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h6 className="mb-2">Highlights</h6>
                    <ul className="list-unstyled">
                      {product.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="mb-1 d-flex align-items-start"
                        >
                          <Check size={16} className="text-success me-2 mt-1" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="action-buttons d-flex flex-wrap gap-2 mb-4">
                    <Button
                      variant="primary"
                      className="action-btn"
                      onClick={handleAddToCart}
                      disabled={isAddedToCart}
                    >
                      {isAddedToCart ? (
                        <>
                          <Check size={20} className="me-2" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={20} className="me-2" />
                          Add to Cart
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline-primary"
                      className="action-btn"
                      onClick={handleBuyNow}
                    >
                      <ShoppingBasket size={20} className="me-2" />
                      Buy Now
                    </Button>

                    <Form.Check
                      type="checkbox"
                      id="compare-1"
                      label="Add to Compare"
                      className="ms-0 ms-sm-3 mt-2 d-flex align-items-center"
                    />
                  </div>
                </Col>

                {/* Product Details Tabs */}
                <Col lg={12} className="mt-4">
                  <Tabs
                    defaultActiveKey="home"
                    id="product-tabs"
                    className="mb-3 product-tabs"
                  >
                    {/* Description Tab */}
                    <Tab eventKey="home" title="Description">
                      <div className="product-description">
                        <div className="feature-section mb-3">
                          <h5>Smart Inverter Compressor</h5>
                          <p>
                            Unmatched performance, great savings and super
                            silent operation; the New Smart Inverter Compressor
                            is thoughtfully designed to provide added
                            convenience to you.
                          </p>
                        </div>

                        <div className="feature-section mb-3">
                          <h5>MOIST 'N' FRESH</h5>
                          <p>
                            MOIST 'N' FRESH is an innovative lattice-patterned
                            box cover which maintains the moisture at the
                            optimal level.
                          </p>
                        </div>

                        <div className="feature-section mb-3">
                          <h5>Solar Smart</h5>
                          <p>
                            Solar Smart Refrigerators can work on Solar Energy,
                            however, the Solar Panel requirement may vary from
                            model to model and need to be checked specifically.
                            <br /> Solar Panel is not part of our product and
                            need to be purchased separately. This feature is
                            applicable to all Made in India Refrigerator models
                            having Smart Inverter Compressor.
                          </p>
                        </div>

                        <div className="feature-section mb-3">
                          <h5>Your list of wishes fulfilled</h5>
                          <p>
                            Refrigerator that makes all your wishes come true.
                            Presenting the new range of LG Direct Cool
                            Refrigerators with cutting edge technology, stylish
                            and spacious design.
                          </p>
                        </div>
                      </div>
                    </Tab>

                    {/* Specifications Tab */}
                    <Tab eventKey="specifications" title="Specifications">
                      <div className="product-specifications">
                        <ListGroup variant="flush">
                          {product.specifications.map((spec, index) => (
                            <ListGroup.Item
                              key={index}
                              className="px-0 py-3 d-flex flex-column flex-md-row"
                            >
                              <div
                                className="text-muted mb-1 mb-md-0"
                                style={{ minWidth: "200px" }}
                              >
                                {spec.name}
                              </div>
                              <div>{spec.value}</div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                    </Tab>

                    {/* Reviews Tab */}
                    <Tab eventKey="reviews" title="Reviews & Ratings">
                      <div className="product-reviews">
                        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4">
                          <div className="text-center me-md-4 mb-3 mb-md-0">
                            <div className="display-4 fw-bold text-success">
                              {product.rating}
                            </div>
                            <div className="d-flex justify-content-center mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  fill={
                                    i < Math.floor(product.rating)
                                      ? "currentColor"
                                      : "none"
                                  }
                                  color={
                                    i < Math.floor(product.rating)
                                      ? "#198754"
                                      : "#6c757d"
                                  }
                                />
                              ))}
                            </div>
                            <div className="text-muted small">
                              {product.reviews.toLocaleString()} ratings
                            </div>
                          </div>

                          <div className="flex-grow-1 w-100">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <div
                                key={star}
                                className="d-flex align-items-center mb-1"
                              >
                                <div style={{ width: "30px" }}>{star} ★</div>
                                <div
                                  className="progress flex-grow-1 mx-2"
                                  style={{ height: "8px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    style={{
                                      width: `${
                                        star === 5
                                          ? 70
                                          : star === 4
                                          ? 20
                                          : star === 3
                                          ? 5
                                          : star === 2
                                          ? 3
                                          : 2
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <div
                                  className="text-muted small"
                                  style={{ width: "40px" }}
                                >
                                  {star === 5
                                    ? 70
                                    : star === 4
                                    ? 20
                                    : star === 3
                                    ? 5
                                    : star === 2
                                    ? 3
                                    : 2}
                                  %
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="comments-area">
                          <h4 className="mb-4">Customer questions & answers</h4>

                          <div className="comment-list">
                            {/* Comment 1 */}
                            <div className="single-comment mb-4">
                              <div className="user-comment d-flex flex-column flex-md-row">
                                <div className="user-info text-center mb-3 mb-md-0 me-md-3">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-3.png"
                                    alt="User"
                                    className="user-avatar mb-2"
                                  />
                                  <a href="#" className="user-name d-block">
                                    Sienna
                                  </a>
                                </div>

                                <div className="comment-content">
                                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                                    <span className="comment-date text-muted mb-2 mb-md-0">
                                      December 4, 2024 at 3:12 pm
                                    </span>
                                    <div className="rating-stars">
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarHalfFill color="orange" />
                                    </div>
                                  </div>
                                  <p className="comment-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Comment 2 */}
                            <div className="single-comment mb-4 ms-md-4">
                              <div className="user-comment d-flex flex-column flex-md-row">
                                <div className="user-info text-center mb-3 mb-md-0 me-md-3">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                                    alt="User"
                                    className="user-avatar mb-2"
                                  />
                                  <a href="#" className="user-name d-block">
                                    Brenna
                                  </a>
                                </div>

                                <div className="comment-content">
                                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                                    <span className="comment-date text-muted mb-2 mb-md-0">
                                      December 4, 2024 at 3:12 pm
                                    </span>
                                    <div className="rating-stars">
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarHalfFill color="orange" />
                                    </div>
                                  </div>
                                  <p className="comment-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Comment 3 */}
                            <div className="single-comment mb-4">
                              <div className="user-comment d-flex flex-column flex-md-row">
                                <div className="user-info text-center mb-3 mb-md-0 me-md-3">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-4.png"
                                    alt="User"
                                    className="user-avatar mb-2"
                                  />
                                  <a href="#" className="user-name d-block">
                                    Gemma
                                  </a>
                                </div>

                                <div className="comment-content">
                                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                                    <span className="comment-date text-muted mb-2 mb-md-0">
                                      December 4, 2024 at 3:12 pm
                                    </span>
                                    <div className="rating-stars">
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarFill color="orange" />
                                      <RiStarHalfFill color="orange" />
                                    </div>
                                  </div>
                                  <p className="comment-text">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Add Review Form */}
                            <div className="comment-form mt-5">
                              <h4 className="mb-3">Add a review</h4>
                              <div className="product-rate d-inline-block mb-3"></div>
                              <div className="row">
                                <div className="col-12">
                                  <form
                                    className="form-contact comment_form"
                                    action="#"
                                    id="commentForm"
                                  >
                                    <div className="row">
                                      <div className="col-12 mb-3">
                                        <div className="form-group">
                                          <textarea
                                            className="form-control w-100"
                                            name="comment"
                                            id="comment"
                                            cols="30"
                                            rows="6"
                                            placeholder="Write Comment"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                          <input
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <button
                                        type="submit"
                                        className="btn btn-primary"
                                      >
                                        Submit Review
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Col>

            {/* Related Products Slider */}
            <Col lg={12} className="mt-5">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
                <h3 className="mb-3 mb-md-0">Related Products</h3>
                <Link to="/fridgeList" onClick={handleLinkClick}>
                  <Button variant="primary" className="text-uppercase fw-bold">
                    VIEW ALL
                  </Button>
                </Link>
              </div>

              <Swiper
                slidesPerView={1}
                spaceBetween={16}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                className="product-swiper"
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <Card className="product-card border-0 h-100">
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className="product-image p-3"
                        />

                        <Button
                          className="position-absolute top-0 end-0 p-2 text-secondary favorite-btn"
                          onClick={() => toggleFavorite(product.id)}
                        >
                          <Heart
                            size={22}
                            fill={
                              favorites.includes(product.id)
                                ? "#dc3545"
                                : "none"
                            }
                            color={
                              favorites.includes(product.id)
                                ? "#dc3545"
                                : "#6c757d"
                            }
                          />
                        </Button>
                      </div>

                      <Card.Body className="pt-0 pb-3 px-3">
                        <Card.Title className="product-title mb-1 text-dark">
                          {product.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted small">
                          {product.variant}
                        </Card.Subtitle>

                        <div className="d-flex align-items-center mb-2">
                          <Badge
                            bg="success"
                            className="d-flex align-items-center me-2 px-2 py-1"
                          >
                            <span className="me-1">{product.rating}</span>
                            <Star size={12} fill="currentColor" />
                          </Badge>
                          <span className="text-muted small">
                            ({product.reviews.toLocaleString()})
                          </span>
                        </div>

                        <div>
                          <span className="fw-bold fs-5">
                            ₹{product.price.toLocaleString()}
                          </span>
                          <span className="text-muted text-decoration-line-through ms-2">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-success ms-2">
                            {product.discount}% off
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev custom-nav-prev"></div>
                <div className="swiper-button-next custom-nav-next"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
