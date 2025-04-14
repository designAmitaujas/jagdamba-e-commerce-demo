import React from "react";
import { useRef, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Badge,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Star, Heart, ShoppingCart, Check, Filter } from "lucide-react";
import ShowMore from "react-show-more-button";
import Header from "./Header";
import Footer from "./Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
// import "../components/FridgeList.css"; // Import your CSS file here
import "../components/FridgeList.css"; // Import your CSS file here

const FridgeList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (product) => {
    if (!addedToCart.includes(product.id)) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
      setAddedToCart([...addedToCart, product.id]);
    }
  };

  const handleBuyNow = (product) => {
    // Add to cart first
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    // Navigate to checkout
    navigate("/checkout");
  };

  const handleWishlistToggle = (product) => {
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

  const products = [
    {
      id: 1,
      name: "Whirlpool 184 L Direct Cool Single Door 3 Star Refrigerator",
      price: 13990,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/a/s/f/-original-imah4c6p6gzzh9bz.jpeg?",
      rating: 4.2,
      reviews: 128,
    },
    {
      id: 2,
      name: "LG 185 L 5 Star Inverter Direct Cool Single Door Refrigerator",
      price: 15490,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/v/e/n/-original-imahyg5zh7xhf96j.jpeg?q=70",
      rating: 4.5,
      reviews: 156,
    },
    {
      id: 3,
      name: "LG 185 L 5 Star Inverter Direct Cool Single Door Refrigerator",
      price: 15490,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/a/s/f/-original-imah4c6p6gzzh9bz.jpeg?",
      rating: 4.5,
      reviews: 156,
    },
  ];

  return (
    <div>
      <Header />

      <Container
        fluid
        className="py-4"
        style={{
          marginTop: "200px",
          paddingRight: "15px",
          paddingLeft: "15px",
        }}
      >
        <Row>
          {/* Mobile Filter Button */}
          <div className="d-lg-none mb-3">
            <Button
              variant="outline-primary"
              className="w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => setShowFilters(true)}
            >
              <Filter size={18} />
              <span>Show Filters</span>
            </Button>
          </div>

          {/* Mobile Filter Offcanvas */}
          <Offcanvas
            show={showFilters}
            onHide={() => setShowFilters(false)}
            placement="start"
            className="w-75"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="d-flex align-items-center gap-2 ">
                  <Filter className="me-2 mt-" size={20} />
                  <span>Filters</span>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <FilterContent />
            </Offcanvas.Body>
          </Offcanvas>

          {/* Desktop Sidebar */}
          <Col lg={3} className="d-none d-lg-block">
            <Card
              className="shadow-sm border-0 mb-4 sticky-top"
              style={{ top: "1rem", margin: "0 auto", height: "90%" }}
            >
              <Card.Body style={{ margin: "0 auto" }}>
                <h5 className="mb-4 d-flex align-items-center">
                  <Filter className="me-2" size={20} />
                  Filters
                </h5>
                <FilterContent />
              </Card.Body>
            </Card>
          </Col>

          {/* Product Listing */}
          <Col lg={9} xs={12}>
            <h1 className="h3 mb-3">Refrigerator</h1>

            {/* Product Description */}
            <div className="mb-4">
              <p className="text-muted">
                Refrigerators are an essential part of the kitchen. They act as
                storage for produce and food and keep them fresh longer. Apart
                from<br></br> being the go-to kitchen appliance for small
                families and bachelors, most single door fridges are more
                compact and consume less<br></br> energy than larger,
                double-door fridges.
              </p>
            </div>

            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center m-4 zero">
              <div className="mb-3 mb-md-0">
                <h4 className="mb-0">Single Door Refrigerators</h4>
                <small className="text-muted">
                  (Showing 1 - 24 products of 701 products)
                </small>
              </div>
              <div className="d-flex flex-wrap px-5 gap-2">
                <Button variant="outline-secondary" size="sm" active>
                  Popularity
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Price -- Low to High
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Price -- High to Low
                </Button>
                <Button variant="outline-secondary" size="sm">
                  Newest First
                </Button>
              </div>
            </div>

            {/* Products */}
            {/* <div className="d-flex flex-column gap-4 px-4 newCard">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-0 shadow-sm"
                  style={{maxWidth: "98%",margin:"10px",padding:0, cursor: "pointer"}}
                >
                  <div className="d-flex flex-column flex-md-row innercarrd">
                    <div
                      style={{ width: "300px", cursor: "pointer" }}
                      className="p-3"
                      onClick={() => navigate("/productdetail")}
                    >
                      <div className="position-relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-100 h-auto px-5 py-2 object-fit-contain"
                          style={{ maxWidth: "200px", maxHeight: "300px" }}
                        />
                        <Badge
                          bg="warning"
                          className="position-absolute top-0 start-0 mx-1"
                        >
                          Jagdamba's Choice
                        </Badge>
                        <Button
                          variant="light"
                          className="position-absolute top-0 end-0 m-2 rounded-circle p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWishlistToggle(product);
                          }}
                          style={{
                            color: isInWishlist(product.id) ? "red" : "inherit",
                            border: "none",
                            backgroundColor: "white",
                          }}
                        >
                          <Heart
                            size={20}
                            fill={isInWishlist(product.id) ? "red" : "none"}
                          />
                        </Button>
                      </div>
                    </div>

                    <div
                      className="flex-grow-1 p-4"
                      onClick={() => navigate("/productdetail")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between align-items-start texts">
                        <div>
                          <h5 className="mb-2">{product.name}</h5>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <Badge
                              bg="success"
                              className="d-flex align-items-center gap-1"
                            >
                              {product.rating}{" "}
                              <Star size={12} fill="currentColor" />
                            </Badge>
                            <span className="text-muted">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-start text-md-end mt-2 mt-md-0">
                          <h4 className="mb-0">₹{product.price}</h4>
                          <small className="text-muted text-decoration-line-through">
                            ₹{product.price * 1.35}
                          </small>
                          <div className="text-success">25% off</div>
                          <div className="text-success mt-1">Free delivery</div>
                          <div className="text-primary">Bank Offer</div>
                        </div>
                      </div>

                      <ul className="list-unstyled mb-4">
                        <li className="mb-1">• Reciprocating Compressor</li>
                        <li className="mb-1">• Built-in Stabilizer</li>
                        <li className="mb-1">
                          • 1 Year Comprehensive Warranty on Product and 9 Years
                          Warranty on Compressor
                        </li>
                      </ul>

                      <div
                        className="d-flex gap-2 btnfridge"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant="primary"
                          className="d-flex align-items-center gap-2 addCartbtn"
                          onClick={() => handleAddToCart(product)}
                          disabled={addedToCart.includes(product.id)}
                          style={{
                            
                          }}
                        >
                          <ShoppingCart size={20} />
                          {addedToCart.includes(product.id)
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </Button>
                        <Button
                          variant="outline-primary"
                          onClick={() => handleBuyNow(product)}
                          className="buyNowbtn"
                        >
                          Buy Now
                        </Button>
                        <Form.Check
                          type="checkbox"
                          id={`compare-${product.id}`}
                          label="Add to Compare"
                          className="ms-3 d-flex align-items-center compare"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div> */}
            <div className="d-flex flex-column gap-4 px-4 newCard">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="border-0 shadow-sm"
                  style={{
                    maxWidth: "98%",
                    margin: "10px",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex flex-column flex-md-row innercarrd">
                    <div
                      className="p-3 d-flex justify-content-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/productdetail")}
                    >
                      <div className="position-relative text-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-100 h-auto px-3 py-2 object-fit-contain"
                          style={{ maxWidth: "200px", maxHeight: "300px" }}
                        />
                        <Badge
                          bg="warning"
                          className="position-absolute top-0 start-0"
                          style={{ marginLeft: "-40px" }}
                        >
                          Jagdamba's Choice
                        </Badge>
                        <Button
                          variant="light"
                          className="position-absolute top-0 end-0 left-5  rounded-circle p-2 wishlist-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWishlistToggle(product);
                          }}
                          style={{
                            color: isInWishlist(product.id) ? "red" : "inherit",
                            border: "none",
                            backgroundColor: "white",
                              marginRight: "-48px",
                          }}
                        >
                          <Heart
                            size={20}
                            fill={isInWishlist(product.id) ? "red" : "none"}
                          />
                        </Button>
                      </div>
                    </div>

                    <div
                      className="flex-grow-1 p-3 p-md-4"
                      onClick={() => navigate("/productdetail")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start texts">
                        <div>
                          <h5 className="mb-2">{product.name}</h5>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <Badge
                              bg="success"
                              className="d-flex align-items-center gap-1"
                            >
                              {product.rating}{" "}
                              <Star size={12} fill="currentColor" />
                            </Badge>
                            <span className="text-muted">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                        </div>
                        <div className="text-start text-md-end mt-2 mt-md-0 price-container">
                          <h4 className="mb-0">₹{product.price}</h4>
                          <small className="text-muted text-decoration-line-through">
                            ₹{product.price * 1.35}
                          </small>
                          <div className="text-success">25% off</div>
                          <div className="text-success mt-1">Free delivery</div>
                          <div className="text-primary">Bank Offer</div>
                        </div>
                      </div>

                      <ul className="list-unstyled mb-3 mb-md-4">
                        <li className="mb-1">• Reciprocating Compressor</li>
                        <li className="mb-1">• Built-in Stabilizer</li>
                        <li className="mb-1">
                          • 1 Year Comprehensive Warranty on Product and 9 Years
                          Warranty on Compressor
                        </li>
                      </ul>

                      <div
                        className="d-flex gap-2 btnfridge"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button
                          variant="primary"
                          className="d-flex align-items-center gap-2 addCartbtn"
                          onClick={() => handleAddToCart(product)}
                          disabled={addedToCart.includes(product.id)}
                        >
                          <ShoppingCart size={20} />
                          {addedToCart.includes(product.id)
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </Button>
                        <Button
                          variant="outline-primary"
                          onClick={() => handleBuyNow(product)}
                          className="buyNowbtn"
                        >
                          Buy Now
                        </Button>
                        <Form.Check
                          type="checkbox"
                          id={`compare-${product.id}`}
                          label="Add to Compare"
                          className="ms-md-3 mt-3 mt-md-0 d-flex align-items-center compare"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

// Extracted Filter Content Component
const FilterContent = () => {
  return (
    <>
      {/* Categories */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Categories</h6>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#" className="text-decoration-none text-primary">
              Home & Kitchen
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none">
              Home Appliances
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-decoration-none fw-bold">
              Refrigerators
            </a>
          </li>
        </ul>
      </div>

      {/* Brands */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Brand</h6>
        <ShowMore maxHeight={500}>
          {["Samsung", "LG", "Whirlpool", "Haier", "Godrej"].map((brand) => (
            <Form.Check
              key={brand}
              type="checkbox"
              id={`brand-${brand}`}
              label={brand}
              className="mb-2"
            />
          ))}
          <Button variant="link" className="p-0 text-decoration-none">
            + Show more
          </Button>
        </ShowMore>
      </div>

      {/* Capacity */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Capacity</h6>
        {[
          "80 - 170 L",
          "Upto 80 L",
          "170 - 200 L",
          "201 - 250 L",
          "251 - 300 L",
        ].map((capacity) => (
          <Form.Check
            key={capacity}
            type="checkbox"
            id={`capacity-${capacity}`}
            label={capacity}
            className="mb-2"
          />
        ))}
      </div>

      {/* Star */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Star</h6>
        {["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"].map((star) => (
          <Form.Check
            key={star}
            type="checkbox"
            id={`star-${star}`}
            label={star}
            className="mb-2"
          />
        ))}
      </div>

      {/* Features */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Features</h6>
        {[
          "Smart Display",
          "Energy Efficient",
          "Auto Defrost",
          "Inverter Technology",
        ].map((feature) => (
          <Form.Check
            key={feature}
            type="checkbox"
            id={`feature-${feature}`}
            label={feature}
            className="mb-2"
          />
        ))}
      </div>

      {/* Customer Ratings */}
      <div className="mb-4">
        <h6 className="mb-3 fw-bold">Customer Ratings</h6>
        {[4, 3, 2, 1].map((rating) => (
          <Form.Check
            key={rating}
            type="checkbox"
            id={`rating-${rating}`}
            label={
              <div className="d-flex align-items-center">
                {Array(rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="gold" color="gold" />
                  ))}
                {Array(5 - rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} color="gray" />
                  ))}
                <span className="ms-1">& above</span>
              </div>
            }
            className="mb-2"
          />
        ))}
      </div>
    </>
  );
};

export default FridgeList;
