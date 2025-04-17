import React from "react";
import "./aboutus.css";
// import Header from "/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Header from '../Header';
import Footer from "../Footer/Footer";


const About = () => {
  return (
    <>
      <Header/>
      {/* <Navcard /> */}

      <div className="about-us-container " style={{ marginTop: "150px", padding:"55px 0",width:"100%" }}>
        <section className="hero-section ">
          <h1>Welcome to Jagdamba</h1>
          <p>Your One-Stop Shop for Electronics!</p>
        </section>
        <section class="py-1  ">
          <div class="container mt-5">
            <div class="row align-items-center gx-4">
              <div class="col-md-5 col-sm-12">
                <div class="ms-md-2">
                  <img
                    class="img-fluid abtimg rounded-3"
                    src="/src/assets/images/our.jpg"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12 offset-md-1">
                <div class="ms-md-2 ms-lg-5 aboutContent1 ">
                  <span class="text-muted"></span>
                  <h2 class="display-5 fw-bold">About Us</h2>
                  <p class="lead">
                    Jagdamba Sales Corporation was established in 2003. Over the
                    years, Jagdamba Sales Corporation has made rapid strides to
                    be Gujarat's top electronic retailer. Today, it is the
                    largest consumer durable group in Gujarat and has become a
                    household name. The Vision is to give the customer the best
                    experience in retailing by offering: Quality Products,
                    Reliable Brands and Good Service. Jagdamba started with the
                    goal of making high-quality electronic products accessible
                    to everyone. What began as a small shop has grown into one
                    of the leading destinations for tech enthusiasts around the
                    world. Today, we are proud to serve millions of customers,
                    helping them find the best deals on top brands and the
                    newest tech.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="what-we-offer">
          <h2 className="whatWeOffer">What We Offer</h2>
          <div className="row">
            <div className="col-lg-12">
            <Swiper
  spaceBetween={20}
  loop={true}
  pagination={{ clickable: true }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="heroSwiper"
  breakpoints={{
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6,
    }
  }}
>


                <SwiperSlide>
                  <img src="/src/assets/images/juicer.png" alt="" srcSet="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/src/assets/images/atta.png" alt="" srcSet="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/src/assets/images/watercooler.png"
                    alt=""
                    srcSet=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/src/assets/images/washingmachine.png"
                    alt=""
                    srcSet=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="src/assets/images/tv.png" alt="" srcSet="" />
                </SwiperSlide>

                <div className="swiper-pagination swiper-pagination1"></div>
                <SwiperSlide>
                  <img src="/src/assets/images/mixer.png" alt="" srcSet="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/src/assets/images/geyser.png" alt="" srcSet="" />
                </SwiperSlide>
                <div className="swiper-pagination swiper-pagination2"></div>
              </Swiper>
            </div>
          </div>
        </section>
        <div className="vision-container">
          <div className="text-side">
            <h1 className="">Our Vision</h1>
            <p class="lead" style={{ fontSize: "20px" }}>
              At jagdamba, our vision is to redefine the online shopping
              experience. We aim to create a seamless, customer-focused platform
              where convenience meets choice. By offering a curated selection of
              high-quality products, innovative solutions, and exceptional
              service, we strive to empower our customers to make smarter, more
              confident purchases. Our commitment to sustainability, efficiency,
              and cutting-edge technology drives us to stay ahead of e-commerce
              trends, ensuring that every shopping experience is easy,
              enjoyable, and secure. As we grow, our vision is to become the
              trusted destination for all your shopping needs, where value,
              quality, and customer satisfaction are always at the heart of
              everything we do.
            </p>
          </div>
          <div className="image-side">
            <img src="/src/assets/images/eye our vison.jpg" alt="Vision" />
          </div>
        </div>

        {/* <section className="why-shop-with-us">
          <h2>Why Shop With Us?</h2>
          <ul>
            <li>
              <strong>Unbeatable Prices</strong>: Get the best prices on the
              market with frequent deals.
            </li>
            <li>
              <strong>Fast & Reliable Shipping</strong>: Quick and secure
              delivery options available.
            </li>
            <li>
              <strong>Customer Satisfaction Guaranteed</strong>: Our customer
              support team is here to assist you.
            </li>
            <li>
              <strong>Secure Shopping</strong>: Your information is safe with
              the latest security protocols.
            </li>
          </ul>
        </section>

        <section className="vision">
          <h2>Our Vision</h2>
          <p>
            We strive to be the leading online destination for electronics,
            providing our customers with access to the latest technology and
            gadgets that make life easier, more efficient, and more enjoyable.
          </p>
        </section> */}

        <div className="contact-container">
          {/* <h1>Contact Us</h1>
          <p>
            Have any questions or need assistance? Our friendly customer service
            team is here to help! Reach out to us at
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                required
              />
            </div>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your Name" required />
            </div>
            <button type="submit">SUBMIT</button>
          </form> */}
          <div className="contact-info">
            <div className="info-section">
              <div className="icon">
                <span>📧</span>
              </div>
              <h3>Email</h3>
              <a href="info@jagdambasales.com">info@jagdambasales.com</a>
            </div>
            <div className="info-section">
              <div className="icon">
                <span>📞</span>
              </div>
              <h3>PHONE (LANDLINE)</h3>
              <p>9375776600</p>
            </div>
            <div className="info-section">
              <div className="icon">
                <span>📍</span>
              </div>
              <h3>OUR LOCATION</h3>
              <p>
                Sb/46-50, SB 46 TO 50, Avishkar Complex, Near GEB, OLD Padra
                Road, Vadodara, Gujarat 390015 ·
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
