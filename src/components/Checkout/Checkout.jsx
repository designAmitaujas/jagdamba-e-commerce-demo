// Updated Checkout.jsx (Responsive)
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useCart } from "../../context/CartContext";
import { Trash2, Truck, Shield } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { cartItems });
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

      <Container
        fluid
        className="py-4 checkout1"
        style={{ marginTop: "200px" }}
      >
        <Row>
          <Col lg={8} md={12}>
            <h2 className="mb-4 px-3">Checkout</h2>

            <Card className="mb-4 mx-3 ">
              <Card.Body>
                <div className="cartTitle mb-4">
                  <Row>
                    <Col>
                      <h4>
                        <b>Order Summary</b>
                      </h4>
                    </Col>
                    <Col className="text-end text-muted">
                      {cartItems.length} items
                    </Col>
                  </Row>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="row border-top border-bottom py-3 cartMain d-flex flex-wrap align-items-center"
                  >
                    <div className="col-12 col-md-4 divcolumn">
                      <div className="cart-image-container">
                        <img src={item.image} alt={item.name} className="img" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 umns">
                      <div className="row">
                        <b style={{ wordBreak: "break-word" }}>{item.name}</b>
                      </div>
                      <div className="row">₹{item.price}</div>
                      <div className="mb-3">
                        <h6 className="mb-2">Quantity</h6>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
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
                              setQuantity(Number.parseInt(e.target.value) || 1)
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
                    <div className="col-12 col-md-2 text-end">
                      <Button
                        variant="link"
                        className="text-danger p-0"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={20} />
                      </Button>
                    </div>
                  </div>
                ))}

                {cartItems.length > 0 && (
                  <div className="back-to-shop mt-3 text-center">
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

          <Col lg={4} md={12}>
            <Card
              className="sticky-top mx-3"
              style={{ top: "305px", height: "fit-content" }}
            >
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
                <div className="d-flex align-items-center gap-2 text-success mb-2">
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
