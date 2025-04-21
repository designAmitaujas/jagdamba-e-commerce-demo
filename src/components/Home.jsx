import React, { useEffect, useState } from "react";
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
  const [isFetching, setIsFetching] = useState(false);
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const fetchData = async () => {
    try {
      setIsFetching(true);

      const res = await fetch(
        "https://actually-bent-deaf-hebrew.trycloudflare.com/api/banner",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const resp = await res.json();
      console.log(resp);

      setBannerList(resp.data?.filter((item) => item.isActive));

      setIsFetching(false);
    } catch (err) {
      setIsFetching(false);

      console.log(err);
    }
  };

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
            {bannerList.map((banner) => (
              <>
                <img
                  src={`https://actually-bent-deaf-hebrew.trycloudflare.com/uploads/${banner.bannerImage}`}
                  alt={banner.bannerName}
                  height={500}
                  width={"auto"}
                />
              </>
            ))}
          </Carousel>

          <Banner />
        </>
      </div>

      {false && (
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
      )}
      <Footer />
    </>
  );
};

export default Home;
