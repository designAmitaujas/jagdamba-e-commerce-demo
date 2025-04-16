import React from "react";
import "../SalesPromo/ProductSales.css";
import Header from "../Header";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductSales = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Define product data objects
  const products = [
    {
      id: 4,
      name: "LG Refridgerater",
      price: 10000,
      originalPrice: 15000,
      image:
        "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dwc8fb2e08/images/large/CCF-31_01_V2.jpg?sw=1200&sh=1200&sm=fit",
      discount: "40% OFF",
      stock: "Only 5 left!",
    },
    {
      id: 5,
      name: "Sony Bravia TV model Y",
      price: 15000,
      originalPrice: 25000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNBmPMFHR6g5Prmz4SAUbaa3lCTSpK-irLg&s",
      discount: "35% OFF",
      stock: "Limited Stock!",
    },
    {
      id: 6,
      name: "Havells Instanio 300 Geyser",
      price: 25000,
      originalPrice: 35000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexDlOuz0S-ZujoDcwjm7E3zvcuDE0Mo3wag&s",
      discount: "30% OFF",
      stock: "Selling Fast!",
    },
    {
      id: 7,
      name: "Borosil Primus Plus Juicer",
      price: 23000,
      originalPrice: 25000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7YDxwsjElH9iTFzsR-YFHfEyPObG6fqeWw&s",
      discount: "25% OFF",
      stock: "Hot Deal!",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const viewProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid py-4" style={{ marginTop: "200px" }}>
        <div className="row1 g-4">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-3" key={product.id}>
              <div
                className="card saleProduct-card h-100"
                style={product.id === 1 ? { width: "800px" } : {}}
              >
                <div
                  className="sale-badge"
                  style={{ backgroundColor: "#ea7e91", color: "white" }}
                >
                  {product.discount}
                </div>
                <div
                  className="summer-banner"
                  style={{ backgroundColor: "#33446b", color: "white" }}
                >
                  Summer Sale
                </div>
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <div className="price-section">
                    <span className="original-price">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="discount-price">
                      {" "}
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="stock-status">{product.stock}</div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#ea7e91",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => viewProductDetail(product.id)}
                    >
                      View Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductSales;
