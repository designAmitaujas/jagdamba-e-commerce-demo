import React, { useState } from "react";
import "../Cart/addcart.css";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { Accordion, Form, Button, InputGroup, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext";
import { Trash2 } from "lucide-react";

const Addcart = () => {
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState({
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
  });

  const { cartItems, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <Header />

      <div
        className="container-fluid d-flex cartContainer"
        style={{ width: "100%" }}
      >
        <div className="row" style={{ width: "90%" }}>
          <div className="col-md-8 cart" style={{ width: "60% !important" }}>
            <div className="cartTitle">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cartItems.length} items
                </div>
              </div>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <h5>Your cart is empty</h5>
                <p className="text-muted">Add some products to your cart</p>
                <Button variant="primary" href="/fridgelist">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="row border-top border-bottom">
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
                      <div className="row p-3">₹{item.price}</div>

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
      value={quantity}
      onChange={(e) => {
        const newQuantity = Number.parseInt(e.target.value, 10);
        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
          setQuantity(newQuantity);
        }
      }}
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
              ))
            )}

            {cartItems.length > 0 && (
              <div className="back-to-shop">
                <a href="/fridgelist" className="linkS">
                  &leftarrow;
                </a>
                <span className="text-muted">Back to shop</span>
              </div>
            )}
          </div>

          <div
            className="col cartSummary w-5"
            style={{ width: "200px", paddingTop: "20px" }}
          >
            <div>
              <h5 className="cartHeading">
                <b>Summary</b>
              </h5>
            </div>
            <hr className="cartHR" />
            <div className="row">
              <div className="col">ITEMS {cartItems.length}</div>
              <div className="col text-right">₹{calculateTotal()}</div>
            </div>
            <form className="cartForm">
              <p>SHIPPING</p>
              <select className="selecteds">
                <option className="text-muted">Standard-Delivery- ₹199</option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">₹{calculateTotal() + 199}</div>
            </div>
            <button className="cartBtn mb-2">CHECKOUT</button>

            <hr />

            <Card style={{ maxWidth: "100%", height: "9rem" }}>
              <Card.Body>
                <div className="d-flex justify-content-between cartcard">
                  <Card.Title>Delivery Address</Card.Title>
                  <input
                    type="checkbox"
                    style={{
                      marginLeft: "200px",
                      marginTop: "0",
                      width: "20px",
                      height: "20px",
                    }}
                  ></input>
                </div>
                <Card.Text>
                  SB 46-50, Avishkar Complex, Near GEB Coloney, near Gauri
                  Showroom, Vidyutnagar Colony, IOC Nagar, Akota, Vadodara,
                  Gujarat 390015
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addcart;

