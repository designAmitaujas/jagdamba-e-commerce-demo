import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Pagination, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination, Navigation, Autoplay } from "swiper/modules";

import Footer from "../Footer/Footer.jsx";
import "./Testimonials.css";
import "../Testimony/Testimonials.css";
import Header from "../Header";
 
// Dummy data (50 testimonials)
const testimonialsData = [
    { id: 1, name: "Alice Johnson", image: "https://i.pravatar.cc/100?img=1", review: "Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...Fantastic service! I absolutely love it...", rating: 5 },
    { id: 2, name: "Michael Smith", image: "https://i.pravatar.cc/100?img=2", review: "Very helpful and efficient. Highly recommended! Very helpful and efficient. Highly recommended! Very helpful and efficient. Highly recommended!", rating: 4 },
    { id: 3, name: "Jessica Brown", image: "https://i.pravatar.cc/100?img=3", review: "The best experience I’ve ever had. 10/10! The best experience I’ve ever had. 10/10! The best experience I’ve ever had. 10/10!", rating: 5 },
    { id: 4, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 5, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 6, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 7, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 8, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 9, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 10, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
    { id: 11, name: "John Doe", image: "https://i.pravatar.cc/100?img=4", review: "Great product, will buy again.", rating: 3 },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonialsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showSwiper, setShowSwiper] = useState(false);
  const [filterRating, setFilterRating] = useState(0);
  const [expanded, setExpanded] = useState({}); // Track expanded reviews

  const testimonialsPerPage = 9;
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  useEffect(() => {
    if (filterRating > 0) {
      setFilteredTestimonials(testimonials.filter((t) => t.rating === filterRating));
    } else {
      setFilteredTestimonials(testimonials);
    }
    setCurrentPage(1);
  }, [filterRating]);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle Read More / Read Less
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Header/>
    <Container  style={{padding:"150px 40px", marginTop:"100px"}}>
  
      <h2 className="text-center  mb-4">What Our Customers Say</h2>

      

      <Form.Select onChange={(e) => setFilterRating(Number(e.target.value))} className="mb-3" style={{ width: "150px", margin: "0 40px" }}>
        <option value="0">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
        <option value="1">1 Star</option>
      </Form.Select>

      {!showSwiper ? (
        <Row>
          {currentTestimonials.map((testimonial) => (
            <Col md={4} key={testimonial.id} className="mb-4">
              <Card style={{height:"100%"}}>
                <Card.Img variant="top" src={testimonial.image} className="rounded-circle mx-auto mt-3" style={{ width: "80px", height: "80px" }} />
                <Card.Body className="text-center">
                  <Card.Title>{testimonial.name}</Card.Title>
                  
                  {/* Read More / Read Less */}
                  <Card.Text>
  {testimonial.review.length > 100 ? (
    <>
      {expanded[testimonial.id] ? testimonial.review : `${testimonial.review.substring(0, 100)}...`}
      <button 
        className="btn btn-link p-0 ms-1 read-more-link" 
        onClick={() => toggleExpand(testimonial.id)}
      >
        {expanded[testimonial.id] ? "Read Less" : "Read More"}
      </button>
    </>
  ) : (
    testimonial.review
  )}
</Card.Text>


                  <span className="text-warning">{"⭐".repeat(testimonial.rating)}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Swiper
          modules={[SwiperPagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
          }}
          className="mb-4"
        >
          {filteredTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card className="text-center p-4">
                <Card.Img variant="top" src={testimonial.image} className="rounded-circle mx-auto" style={{ width: "80px", height: "80px" }} />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>

                  {/* Read More / Read Less */}
                  <Card.Text>
                    {expanded[testimonial.id] ? testimonial.review : `${testimonial.review.substring(0, 100)}...`}
                    <button 
                      className="btn btn-link p-0 ms-1" 
                      onClick={() => toggleExpand(testimonial.id)}
                      style={{ textDecoration: "none" }}
                    >
                      {expanded[testimonial.id] ? "Read Less" : "Read More"}
                    </button>
                  </Card.Text>

                  <span className="text-warning">{"⭐".repeat(testimonial.rating)}</span>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

     
      
    </Container>
    <Footer/>
    </div>
  );
};

export default Testimonials;
