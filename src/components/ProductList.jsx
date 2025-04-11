"use client";

import React, { useState } from "react";
import { Container, Card, Badge, Button } from "react-bootstrap";
import { Heart, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductList.css";
import Header from "./Header";
import { Link } from "react-router";
import Footer from "./Footer/Footer";

// Sample product data
const products = [
  {
    id: 1,
    name: "Whirlpool 192 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
    variant: "(Purple Peony)",
    image:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/p/l/i/-original-imah9me4kexxrjbw.jpeg?q=70",
    rating: 4.3,
    reviews: 13201,
    price: 17990,
    originalPrice: 23100,
    discount: 22,
  },
  {
    id: 2,
    name: "Whirlpool 192 L Direct Cool Single Door",
    variant: "(Purple Peony)",
    image: "/src/assets/images/fridge3.png",
    rating: 4.4,
    reviews: 151804,
    price: 17999,
    originalPrice: 20999,
    discount: 14,
  },
  {
    id: 3,
    name: "Whirlpool 235 L Frost Free Double Door",
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
      "https://m.media-amazon.com/images/I/51ag1wgRdBL._AC_UY327_FMwebp_QL65_.jpg",
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

export default function ProductList() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div>
      <Header />
      <Container-fluid className="py-4 border-bottom ">
        {/* Product Description */}
        <h1 className="px-5 py-5" style={{ paddingTop: "600px" }}>
          Refridgerator
        </h1>
        <div className="mb-2" style={{ whiteSpace: "pre-wrap" }}>
          <p className="text-muted px-5">
            Refrigerators are an essential part of the kitchen. They act as
            storage for produce and food and keep them fresh longer. Apart from
            being the go-to kitchen appliance for small families and bachelors,
            most single door fridges are more compact and consume less energy
            than larger, double-door fridges.
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5  mx-5">
          <h3 className="mb-0">Whirlpool Refrigerators</h3>
          <Link to="/fridgeList" onClick={handleLinkClick}>
            <Button
              variant="primary"
              className="text-uppercase fw-bold"
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
          className="product-swiper m-5"
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
                    className="position-absolute top-0 end-0 p-2 text-secondary favorite-btn"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      size={22}
                      fill={favorites.includes(product.id) ? "#dc3545" : "none"}
                      color={
                        favorites.includes(product.id) ? "#dc3545" : "#6c757d"
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
        <div className="d-flex justify-content-between align-items-center  mx-5">
          <h3 className="mb-0">LG Refrigerators</h3>
          <Link to="/fridgeList" onClick={handleLinkClick}>
            <Button
              variant="primary"
              className="text-uppercase fw-bold"
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
          className="product-swiper m-5"
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
                      fill={favorites.includes(product.id) ? "#dc3545" : "none"}
                      color={
                        favorites.includes(product.id) ? "#dc3545" : "#6c757d"
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
      </Container-fluid>
      <Footer />
    </div>
  );
}
