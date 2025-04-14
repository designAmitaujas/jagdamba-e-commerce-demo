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

            <Accordion defaultActiveKey={null} flush className="mt-3" >
      <Accordion.Item eventKey="0" className="no-icon" placeholder="new">
        

        
        <Accordion.Header
        
        > Add New Shipping Address </Accordion.Header>
        <Accordion.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="John Doe"
                name="fullName"
                value={address.fullName}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your full name.
              </Form.Control.Feedback>
            </Form.Group>

  <div className="row mb-3">

  <Form.Group className="col-md-4" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Select 
                required
                name="country"
                value={address.country}
                onChange={handleInputChange}
              >
                <option>India</option>
                <option>Canada</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </Form.Select>
            </Form.Group>


              <Form.Group className="col-md-4" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="col-md-4" controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your state.
                </Form.Control.Feedback>
              </Form.Group>

            </div>



            <Form.Group className="mb-3" controlId="addressLine1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="123 Main St"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your street address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="addressLine2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apartment, studio, or floor"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="col-md-2" controlId="zipCode">
                <Form.Label>PIN Code</Form.Label>
                <Form.Control
                  required
                  type="text"
                  pattern="[0-9]{5}"
                  name="zipCode"
                  value={address.zipCode}
                  onChange={handleInputChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid 5-digit ZIP code.
                </Form.Control.Feedback>
              </Form.Group>

           

            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Save Address
              </Button>
              
            </div>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addcart;

