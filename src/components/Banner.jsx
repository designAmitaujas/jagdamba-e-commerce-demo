import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Banner.css";
import { Link } from "react-router";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card } from "react-bootstrap";

const handleLinkClick = () => {
  window.scrollTo(0, 0); // Scroll to the top
};
const Banner = () => {
  const [category, setCategory] = React.useState([]);
  const [key, setKey] = React.useState(Math.random());

  useEffect(() => {
    (async () => {
      await fetch(
        "https://actually-bent-deaf-hebrew.trycloudflare.com/api/productCategory",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setCategory(data.data);
          setKey(Math.random());
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    })();
  }, []);

  return (
    <section className="hero mt-2 bg-light  pb-5 shadow-sm">
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <div className="text-center w-100">
          <h2 className="display-6 py-2">New Arrivals</h2>

          <Row className="my-2 justify-content-center" id="new">
            <Col
              xs={12}
              md={6}
              lg={3}
              className="mb-3 d-flex justify-content-center"
            >
              <div className="card sCard">
                <div className="img-container">
                  <img
                    className="phone"
                    src="/src/assets/images/fridge3.png"
                    alt="Samsung Galaxy S23 Ultra"
                  />
                </div>

                <div className="container">
                  <h1 className="productName">Whirlpool 184 L </h1>
                  <h3 className="price">
                    &#8377; 35,449.<small>00</small>
                  </h3>

                  <a href="/productdetail" className="buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={3}
              className="mb-3 d-flex justify-content-center"
            >
              <div className="card sCard">
                <div className="img-container">
                  <img
                    className="phone"
                    src="/src/assets/images/ac2.png"
                    alt="Samsung Galaxy S23 Ultra"
                  />
                </div>

                <div className="container">
                  <h1 className="productName">
                    Samsung AR12BY4YATA Inverter Split AC
                  </h1>
                  <h3 className="price">
                    &#8377; 25,449.<small>00</small>
                  </h3>
                  <a href="/productdetail" className="buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={3}
              className="mb-3 d-flex justify-content-center"
            >
              <div className="card sCard">
                <div className="img-container">
                  <img
                    className="phone"
                    src="/src/assets/images/tvbgr.png"
                    alt="Samsung Galaxy S23 Ultra"
                  />
                </div>

                <div className="container">
                  <h1 className="productName">Samsung Tv</h1>
                  <h3 className="price">
                    &#8377; 1,50,444.<small>00</small>
                  </h3>
                  <a href="/productdetail" className="buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              md={6}
              lg={3}
              className="mb-3 d-flex justify-content-center"
            >
              <div className="card sCard">
                <div className="img-container">
                  <img
                    className="phone"
                    src="/src/assets/images/washingbg.png"
                    alt="Samsung Galaxy S23 Ultra"
                  />
                </div>

                <div className="container">
                  <h1 className="productName">Washing Machine</h1>
                  <h3 className="price">
                    &#8377; 25,449.<small>00</small>
                  </h3>
                  <a href="/productdetail" className="buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-12">
            <h3 className="text-uppercase border-bottom mb-4">
              Featured Products
            </h3>
          </div>
        </div>

        <Row className="mb-3" key={key}>
          {category.map((item) => (
            <Col xs={6} md={4} lg={2} className="mb-3" key={item.id}>
              <div className="card">
                <Link to="/fridgelist" onClick={handleLinkClick}>
                  <img
                    src={`https://actually-bent-deaf-hebrew.trycloudflare.com/uploads/${item.productCategoryImage}`}
                    className="card-img-top"
                    alt="Card Image"
                  />
                </Link>
              </div>
              <div className="d-flex flex-column p-3">
                <h5 className="card-title d-flex justify-content-center">
                  {item.productCategoryName}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="row">
        <div className="col-lg-12">
          {/* <h4 className="mt-3 p-3"> New Arrivals</h4> */}
          <h3 className="text-uppercase border-bottom mb-4">New Arrivals</h3>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="heroSwiper"
          >
            <SwiperSlide>
              <img src="/src/assets/images/electronics2.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics3.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics4.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics5.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics6.jpg" alt="" srcSet="" />
            </SwiperSlide>

            <div className="swiper-pagination swiper-pagination1"></div>
            <SwiperSlide>
              <img src="/src/assets/images/electronics7.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/src/assets/images/electronics8.jpg" alt="" srcSet="" />
            </SwiperSlide>
            <div className="swiper-pagination swiper-pagination2"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
