import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import "./Home.css";
import * as Icon from "react-bootstrap-icons";
import Navcard from "./Navcard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap-icons/font/bootstrap-icons.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { RiHeartFill } from "@remixicon/react";
import { Link } from "react-router";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer/Footer";
import banner1 from "../assets/images/1.png";
import banner2 from "../assets/images/2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <>
      <Header />
      {/* <Navcard /> */}

      <div className="container-fluid1">
        <>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={4000}
            dynamicHeight={false}
            emulateTouch
            swipeable
            showArrows
            useKeyboardArrows
          >
            <div>
              <img src={banner1} alt="Banner 1" />
            </div>
            <div>
              <img src={banner2} alt="Banner 2" />
            </div>
          </Carousel>

          <Banner />
        </>
      </div>
      <Footer />
    </>
  );
};

export default Home;
