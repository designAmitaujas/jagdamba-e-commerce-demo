import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../wishlist/Wishlist.css";
const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div>
      <Header />

      <Container fluid className="py-4" style={{ marginTop: "200px" }}>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2>My Wishlist</h2>
              <span className="text-muted">{wishlistItems.length} items</span>
            </div>

            {wishlistItems.length === 0 ? (
              <div className="text-center py-5">
                <Heart size={64} className="text-muted mb-3" />
                <h4>Your wishlist is empty</h4>
                <p className="text-muted">Add some products to your wishlist</p>
                <Button variant="primary" as={Link} to="/fridgelist">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="d-flex flex-column gap-4">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className="border-0 shadow-sm">
                    <div className="d-flex flex-column flex-md-row">
                      <div style={{ width: "300px" }} className="p-3">
                        <div className="position-relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-200 h-200 px-5 py-2 object-fit-contain"
                            style={{ maxHeight: "200px", width: "auto" }}
                          />
                          <Button
                            variant="light"
                            className="position-absolute top-0 end-0 m-2 rounded-circle p-2"
                            onClick={() => removeFromWishlist(item.id)}
                            style={{
                              color: "red",
                              border: "none",
                              backgroundColor: "white",
                            }}
                          >
                            <Trash2 size={20} />
                          </Button>
                        </div>
                      </div>

                      <div className="flex-grow-1 p-4">
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="mb-2">{item.name}</h5>
                            <div className="text-muted">
                              Product ID: {item.id}
                            </div>
                          </div>
                          <div className="text-end">
                            <h4 className="mb-0">₹{item.price}</h4>
                            <small className="text-muted text-decoration-line-through">
                              ₹{item.price * 1.35}
                            </small>
                            <div className="text-success">25% off</div>
                            <div className="text-success mt-1">
                              Free delivery
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Button
                            variant="primary"
                            className="d-flex align-items-center gap-2"
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingCart size={20} />
                            Move to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Wishlist;
