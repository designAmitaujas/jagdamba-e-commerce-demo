import React from "react";
import { useRef, useState } from "react";
import Header from "../Header";

import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Badge,
  Button,
  Fade,
  Tabs,
  Tab,
  ListGroup,
} from "react-bootstrap";
import {
  Star,
  Heart,
  ShoppingCart,
  Check,
  Filter,
  ShoppingBasket,
  ChevronRight,
} from "lucide-react";
// import "../Details/Productdetail.css";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../Footer/Footer";

const Productdetail = () => {
  const [zoomImage, setZoomImage] = useState();
  const [ActiveSize, setActiveSize] = useState(0);
  const zoomSlider = useRef();
  const [quantity, setQuantity] = useState(1);

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Sample product data
  const product = {
    highlights: [
      "Toughened Glass shelves",
      "Smart Invertor Compressor",
      "Stabilizer Free Operation",
      "Smart Connect",
    ],
    rating: 4.4,
    reviews: 118282,
    specifications: [
      {
        name: "In The Box",
        value: "Refrigerator, User Manual, Warranty Card",
      },
      { name: "Color", value: "Blue Charm" },
      { name: "Model", value: "GL-D201ABCU" },
      { name: "Refrigerator Type", value: "Direct Cool" },
      { name: "Refrigerator Style", value: "Single Door Refrigerator" },
      { name: "With Base Stand Drawer", value: "Yes" },
      { name: "Brand", value: "LG" },
      { name: "BEE STAR Rating", value: "5 Star" },
      {
        name: "Features",
        value:
          "Fastest Ice Making Transparent Freezer Door Anti Bacterial Gasket Anti Rat Bite Spacious Chiller Tray Base Stand Drawer",
      },
      { name: "Warranty", value: "1 Year" },
      { name: "Country of origin", value: "India" },
      {
        name: "Name and address of Manufacturer",
        value:
          "LG Electronics India Pvt.Ltd, Regd.Office : A-24/6, MOHAN COOPERATIVE IND ESTATE, MATHURA ROAD, NEW DELHI - 110044",
      },
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
    window.scrollTo(0, 0); // Scroll to the top
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (url) => {};

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <Header />
      <section className="detailsPage">
        <div
          className="container-fluid detailsContainer"
          style={{
            marginTop: "250px",
            paddingLeft: "70px",
            paddingRight: "100px",
            maxWidth: "100%",
          }}
        >
          <div className="row pt-3 pb-3">
            <div className="col-md-12 leftPart">
              <div className="row">
                {/* zoom code */}
                <div className="col-md-5 ">
                  <div className="productZoom">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={2}
                      src="/src/assets/images/fridge.png"
                    />
                  </div>
                  <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                    <div className="item">
                      <img
                        src="https://rukminim2.flixcart.com/image/128/128/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=70&crop=false"
                        className="w-100"
                        onClick={() =>
                          goto(
                            "https://rukminim2.flixcart.com/image/128/128/xif0q/refrigerator-new/u/o/u/-original-imah44cpjvehagyj.jpeg?q=70&crop=false"
                          )
                        }
                      />
                    </div>

                    <div className="item">
                      <img
                        src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg?im=Resize=(150,150)"
                        className="w-100"
                        onClick={() =>
                          goto(
                            "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-1-202302232023.jpeg?im=Resize=(150,150)"
                          )
                        }
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg?im=Resize=(150,150)"
                        className="w-100"
                        onClick={() =>
                          goto(
                            "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-2-202302232023.jpeg?im=Resize=(150,150)"
                          )
                        }
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg?im=Resize=(150,150)"
                        className="w-100"
                        onClick={() =>
                          goto(
                            "https://www.jiomart.com/images/product/original/493692272/lg-185-litre-5-star-single-door-direct-cool-refrigerator-blue-charm-gl-d201abcu-digital-o493692272-p598715567-5-202302232023.jpeg?im=Resize=(150,150)"
                          )
                        }
                      />
                    </div>
                  </Slider>
                </div>

                {/* zoom code end here */}

                {/* ProductInfo code start here */}
                <div className="col-md-7 p-0  productInfo">
                  <h1 className="h4 ">
                    LG 185 L 5 Star Inverter Direct Cool Single Door
                    Refrigerator
                  </h1>
                  <p className="text-muted mb-2"></p>

                  <div className="d-flex align-items-center mb-3">
                    <Badge
                      bg="success"
                      className="d-flex align-items-center me-2 px-2 py-1"
                    >
                      <span className="me-1">4.4</span>
                      <Star size={12} fill="currentColor" />
                    </Badge>
                    <span className="text-muted">156 Ratings & Reviews</span>
                  </div>

                  <div className="mb-3">
                    <h4 className="mb-0">₹15,490</h4>
                    <div>
                      <span className="text-muted text-decoration-line-through">
                        ₹20,500
                      </span>
                      <span className="text-success ms-2">24% off</span>
                    </div>
                    <small className="text-success">Free delivery</small>
                  </div>

                  {/* Colors */}
                  <div className="m-0 p-0">
                    <div className="subtitle my-3 theme-text ">Colors:</div>
                    <div className="select-colors d-flex">
                      <div className="color red"></div>
                      <div className="color silver"></div>
                      <div className="color black"></div>
                    </div>
                  </div>

                  {/* Capacity */}
                  <span className="d-block  pt-4 pb-0">Capacity</span>

                  <div className="productSize d-flex align-items-center ">
                    <ul className="list list-inline mb-0">
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className={`btn-primary ${
                            ActiveSize === 0 ? "active" : ""
                          }`}
                          onClick={() => isActive(0)}
                          style={{
                            width: "70px",
                            height: "50px",
                            textDecoration: "none",
                          }}
                        >
                          185L
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className={`btn-primary ${
                            ActiveSize === 1 ? "active" : ""
                          }`}
                          onClick={() => isActive(1)}
                          style={{
                            width: "70px",
                            height: "50px",
                            textDecoration: "none",
                          }}
                        >
                          275L
                        </a>{" "}
                      </li>
                      <li className="list-inline-item">
                        {" "}
                        <a
                          className={`btn-primary ${
                            ActiveSize === 2 ? "active" : ""
                          }`}
                          onClick={() => isActive(2)}
                          style={{
                            width: "70px",
                            height: "50px",
                            textDecoration: "none",
                          }}
                        >
                          355L
                        </a>{" "}
                      </li>
                    </ul>
                  </div>

                  {/* Quantity */}
                  <div className="mb-4">
                    <h6 className="mb-2">Quantity</h6>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <Form.Control
                        type="number"
                        min="1"
                        max="10"
                        value={quantity && Math.max(1, quantity)}
                        onChange={(e) =>
                          setQuantity(Number.parseInt(e.target.value) || 1)
                        }
                        style={{ width: "60px" }}
                        className="text-center"
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  {/* Highlights */}
                  <div className="mb-4 mt-5">
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

                  <div className="d-flex gap-2">
                    <Button
                      variant="primary"
                      className="d-flex align-items-center gap-2"
                      style={{ width: "150px", height: "55px" }}
                    >
                      <ShoppingCart size={20} />
                      Add to Cart
                    </Button>
                    <Link to={"/addcart"}>
                      <Button
                        variant="outline-primary"
                        style={{ width: "150px", height: "55px" }}
                      >
                        {" "}
                        <ShoppingBasket className="m-1" />
                        Buy Now
                      </Button>
                    </Link>
                    <Form.Check
                      type="checkbox"
                      id="compare-1"
                      label="Add to Compare"
                      className="ms-3 d-flex align-items-center"
                    />
                  </div>
                </div>

                {/* Tabs for desc, reviews and specification */}
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  {/* Tabs for desc */}
                  <Tab eventKey="home" title="Description">
                    <b> Smart Inverter Compressor</b>
                    <div className="pb-3">
                      <p>
                        Unmatched performance, great savings and super silent
                        operation; the New Smart Inverter Compressor is
                        thoughtfully designed to provide added convenience to
                        you.
                      </p>
                    </div>

                    <div className="pb-3">
                      <b> MOIST ‘N' FRESH</b>
                      <p>
                        MOIST ‘N' FRESH is an innovative lattice-patterned box
                        cover which maintains the moisture at the optimal level.
                      </p>
                    </div>

                    <div className="pb-3">
                      <b> Solar Smart</b>
                      <p>
                        Solar Smart Refrigerators can work on Solar Energy,
                        however, the Solar Panel requirement may vary from model
                        to model and need to be checked specifically.
                        <br /> Solar Panel is not part of our product and need
                        to be purchased separately. This feature is applicable
                        to all Made in India Refrigerator models having Smart
                        Inverter Compressor.
                      </p>
                    </div>

                    <div className="pb-3">
                      <b>Your list of wishes fulfilled</b>
                      <p>
                        Refrigerator that makes all your wishes come true.
                        Presenting the new range of LG Direct Cool Refrigerators
                        with cutting edge technology, stylish and spacious
                        design.
                      </p>
                    </div>
                  </Tab>

                  {/* Tabs for specifications */}
                  <Tab eventKey="specifications" title="Specifications">
                    <ListGroup variant="flush">
                      {product.specifications.map((spec, index) => (
                        <ListGroup.Item
                          key={index}
                          className="px-0 py-3 d-flex"
                        >
                          <div
                            className="text-muted"
                            style={{ width: "200px" }}
                          >
                            {spec.name}
                          </div>
                          <div>{spec.value}</div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab>

                  {/* Tabs for Reviews */}
                  <Tab eventKey="reviews" title="Reviews & Ratings">
                    <div className="d-flex align-items-center mb-4">
                      <div className="text-center me-4">
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
                      <div className="flex-grow-1">
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

                    <div class="comments-area">
                      <div class="row">
                        <div class="col-lg-12">
                          <h4 class="mb-30 pb-4 pt-3">
                            Customer questions &amp; answers
                          </h4>
                          <div class="comment-list">
                            <div class="single-comment justify-content-between d-flex mb-30">
                              <div class="user justify-content-between d-flex">
                                <div class="thumb text-center">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-3.png"
                                    alt=""
                                  />
                                  <a href="#" class="font-heading text-brand">
                                    Sienna
                                  </a>
                                </div>
                                <div class="desc">
                                  <div class="d-flex justify-content-between mb-10">
                                    <div class="d-flex align-items-center">
                                      <span class="font-xs text-muted">
                                        December 4, 2024 at 3:12 pm{" "}
                                      </span>
                                    </div>
                                    <div class="product-rate d-inline-block">
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarHalfFill color="orange" />
                                      </span>
                                      <div
                                        class="product-rating "
                                        style={{ width: "100%" }}
                                      ></div>
                                    </div>
                                  </div>
                                  <p class="mb-10">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="single-comment justify-content-between d-flex mb-30 ml-30">
                              <div class="user justify-content-between d-flex">
                                <div class="thumb text-center">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                                    alt=""
                                  />
                                  <a href="#" class="font-heading text-brand">
                                    Brenna
                                  </a>
                                </div>
                                <div class="desc">
                                  <div class="d-flex justify-content-between mb-10">
                                    <div class="d-flex align-items-center">
                                      <span class="font-xs text-muted">
                                        December 4, 2024 at 3:12 pm{" "}
                                      </span>
                                    </div>
                                    <div class="product-rate d-inline-block">
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarHalfFill color="orange" />
                                      </span>
                                      <div
                                        class="product-rating"
                                        style={{ width: "80%" }}
                                      ></div>
                                    </div>
                                  </div>
                                  <p class="mb-10">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="single-comment justify-content-between d-flex">
                              <div class="user justify-content-between d-flex">
                                <div class="thumb text-center">
                                  <img
                                    src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-4.png"
                                    alt=""
                                  />
                                  <a href="#" class="font-heading text-brand">
                                    Gemma
                                  </a>
                                </div>
                                <div class="desc">
                                  <div class="d-flex justify-content-between mb-10">
                                    <div class="d-flex align-items-center">
                                      <span class="font-xs text-muted">
                                        December 4, 2024 at 3:12 pm{" "}
                                      </span>
                                    </div>
                                    <div class="product-rate d-inline-block">
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarFill color="orange" />
                                      </span>
                                      <span>
                                        <RiStarHalfFill color="orange" />
                                      </span>
                                      <div
                                        class="product-rating"
                                        style={{ width: "80%" }}
                                      ></div>
                                    </div>
                                  </div>
                                  <p class="mb-10">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Delectus, suscipit
                                    exercitationem accusantium obcaecati quos
                                    voluptate nesciunt facilis itaque modi
                                    commodi dignissimos sequi repudiandae minus
                                    ab deleniti totam officia id incidunt?{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="comment-form">
                              <h4 class="mb-15">Add a review</h4>
                              <div class="product-rate d-inline-block mb-30"></div>
                              <div class="row">
                                <div class="col-lg-12 col-md-12">
                                  <form
                                    class="form-contact comment_form"
                                    action="#"
                                    id="commentForm"
                                  >
                                    <div class="row">
                                      <div class="col-12">
                                        <div class="form-group">
                                          <textarea
                                            class="form-control w-100"
                                            name="comment"
                                            id="comment"
                                            cols="30"
                                            rows="9"
                                            placeholder="Write Comment"
                                          ></textarea>
                                        </div>
                                      </div>
                                      <div class="col-sm-6">
                                        <div class="form-group">
                                          <input
                                            class="form-control"
                                            name="name"
                                            id="name"
                                            type="text"
                                            placeholder="Name"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-sm-6">
                                        <div class="form-group">
                                          <input
                                            class="form-control"
                                            name="email"
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                          />
                                        </div>
                                      </div>
                                      {/* <div class="col-12">
                                                                        <div class="form-group">
                                                                            <input class="form-control" name="website" id="website" type="text" placeholder="Website"/>
                                                                        </div>
                                                                    </div> */}
                                    </div>
                                    <div class="form-group">
                                      <button
                                        type="submit"
                                        class="button button-contactForm"
                                        style={{ backgroundColor: "#0B5ED7" }}
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
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>

            {/* Releted products Slider         */}
            <div className="container-fluid p-0 mx-2">
              <div className="d-flex justify-content-between align-items-center   mt-5 ">
                <h3 className="mb-0">Related Products</h3>
                <Link to="/fridgeList" onClick={handleLinkClick}>
                  <Button
                    variant="primary"
                    className="text-uppercase fw-bold sliderbtn"
                    href="/products/motorola"
                  >
                    VIEW ALL
                  </Button>
                </Link>
              </div>

              <Swiper
                slidesPerView={4}
                spaceBetween={16}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                className="product-swiper mt-5"
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
                          //   variant="link"
                          className="position-absolute top-0 end-0 p-2 text-secondary favorite-btn "
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
                        {/* <Link href={`/products/${product.id}`} className="text-decoration-none"> */}
                        <Card.Title className="product-title mb-1 text-dark">
                          {product.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted small">
                          {product.variant}
                        </Card.Subtitle>
                        {/* </Link> */}

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
                <div
                  className="swiper-button-next custom-nav-next"
                  style={{ marginRight: "30px" }}
                ></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Productdetail;
