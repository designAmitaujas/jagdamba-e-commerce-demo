import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";
import { Trash2, CreditCard, Truck, Shield } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission here
    console.log("Order submitted:", { cartItems });
    // Clear cart and redirect to order confirmation
    navigate("/myorder");
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <div>
      <Header />

      <Container fluid className="py-4" style={{ marginTop: "200px" }}>
        <Row>
          <Col lg={8}>
            <h2 className="mb-4 px-5">Checkout</h2>

            {/* Product List */}
            <Card className="mb-4 mx-5">
              <Card.Body>
                <div className="cartTitle mb-4">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>Order Summary</b>
                      </h4>
                    </div>
                    <div className="col align-self-center text-right text-muted">
                      {cartItems.length} items
                    </div>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="row border-top border-bottom py-3"
                  >
                    <div className="row cartMain align-items-center">
                      <div
                        className="col-2 divcolumn"
                        style={{ width: "32.666%", flex: "0 0 auto" }}
                      >
                        <div
                          className="cart-image-container"
                          style={{
                            width: "100%",
                            height: "150px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col umns">
                        <div className="row">
                          <b>{item.name}</b>
                        </div>
                        <div className="row">₹{item.price}</div>
                        {/* <div className="row text-muted">
                          Quantity: {item.quantity || 1}
                        </div> */}

                        {/* Quantity */}
                        <div className="mb-4">
                          <h6 className="mb-2">Quantity</h6>
                          <div className="d-flex align-items-center gap-2">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                setQuantity(Math.max(1, quantity - 1))
                              }
                            >
                              -
                            </Button>
                            <Form.Control
                              type="number"
                              min="1"
                              max="10"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(
                                  Number.parseInt(e.target.value) || 1
                                )
                              }
                              style={{ width: "60px" }}
                              className="text-center"
                            />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() =>
                                setQuantity(Math.min(10, quantity + 1))
                              }
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="col" style={{ paddingLeft: "75px" }}>
                        <Button
                          variant="link"
                          className="text-danger p-0"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {cartItems.length > 0 && (
                  <div className="back-to-shop mt-3">
                    <Button
                      variant="link"
                      onClick={() => navigate("/fridgelist")}
                    >
                      &leftarrow; Back to shop
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="sticky-top" style={{ top: "305px" }}>
              <Card.Body>
                <h5 className="mb-3">Price Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <div>Subtotal</div>
                  <div>₹{calculateTotal()}</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>Shipping</div>
                  <div>Free</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>Tax</div>
                  <div>₹{(calculateTotal() * 0.18).toFixed(2)}</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <div className="fw-bold">Total</div>
                  <div className="fw-bold">
                    ₹{(calculateTotal() * 1.18).toFixed(2)}
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2 text-success mb-3">
                  <Shield size={20} />
                  <small>Secure Payment</small>
                </div>
                <div className="d-flex align-items-center gap-2 text-success">
                  <Truck size={20} />
                  <small>Free Delivery</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
