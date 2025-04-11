// import React from "react";
// import "../SalesPromo/ProductSales.css";
// import Header from "../Header";
// import Footer from "../Footer/Footer";
// import { Link, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// const ProductSales = () => {
//    const navigate = useNavigate();
//     const { addToCart } = useCart();
//     const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
//     const handleAddToCart = (product) => {
//       addToCart({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//       });
//     };
//   return (
//     <div>
//       <Header />
//       <div class="container-fluid py-4" style={{ marginTop: "200px" }}>
//         <div class="row g-4">
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card saleProduct-card h-100" style={{ width: "800px" }}>
//               <div
//                 class="sale-badge"
//                 style={{ backgroundColor: "#ea7e91", color: "white" }}
//               >
//                 40% OFF
//               </div>
//               <div
//                 class="summer-banner"
//                 style={{ backgroundColor: "#33446b", color: "white" }}
//               >
//                 Summer Sale
//               </div>
//               <img
//                 src="https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dwc8fb2e08/images/large/CCF-31_01_V2.jpg?sw=1200&sh=1200&sm=fit"
//                 class="card-img-top saleCard"
//                 style={{ height: "200px", objectFit: "cover" }}
//                 alt="Smartphone"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">LG Refridgerater</h5>
//                 <div class="price-section">
//                   <span class="original-price">₹15,000</span>
//                   <span class="discount-price"> ₹10,000</span>
//                 </div>
//                 <div class="stock-status">Only 5 left!</div>
//                 <div class="d-grid gap-2">
//                   <button
//                     class="btn btn-primary"
//                     style={{
//                       backgroundColor: "#ea7e91",
//                       color: "white",
//                       border: "none",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                   <button class="btn btn-outline-secondary">View Detail</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card saleProduct-card h-100">
//               <div
//                 class="sale-badge"
//                 style={{ backgroundColor: "#ea7e91", color: "white" }}
//               >
//                 35% OFF
//               </div>
//               <div
//                 class="summer-banner"
//                 style={{ backgroundColor: "#33446b", color: "white" }}
//               >
//                 Summer Sale
//               </div>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNBmPMFHR6g5Prmz4SAUbaa3lCTSpK-irLg&s"
//                 class="card-img-top"
//                 style={{ height: "200px", objectFit: "cover", border: "none" }}
//                 alt="Wireless Earbuds"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Sony Bravia TV model Y</h5>
//                 <div class="price-section">
//                   <span class="original-price">₹25,000</span>
//                   <span class="discount-price">₹15,000</span>
//                 </div>
//                 <div class="stock-status">Limited Stock!</div>
//                 <div class="d-grid gap-2">
//                   <button
//                     class="btn btn-primary"
//                     style={{
//                       backgroundColor: "#ea7e91",
//                       color: "white",
//                       border: "none",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                   <button class="btn btn-outline-secondary">View Detail</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card saleProduct-card h-100">
//               <div
//                 class="sale-badge"
//                 style={{ backgroundColor: "#ea7e91", color: "white" }}
//               >
//                 30% OFF
//               </div>
//               <div
//                 class="summer-banner"
//                 style={{ backgroundColor: "#33446b", color: "white" }}
//               >
//                 Summer Sale
//               </div>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexDlOuz0S-ZujoDcwjm7E3zvcuDE0Mo3wag&s"
//                 class="card-img-top"
//                 alt="Bluetooth Speaker"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Havells Instanio 300 Geyser</h5>
//                 <div class="price-section">
//                   <span class="original-price">₹35,000</span>
//                   <span class="discount-price">₹25,000</span>
//                 </div>
//                 <div class="stock-status">Selling Fast!</div>
//                 <div class="d-grid gap-2">
//                   <button
//                     class="btn btn-primary"
//                     style={{
//                       backgroundColor: "#ea7e91",
//                       color: "white",
//                       border: "none",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                   <button class="btn btn-outline-secondary">View Detail</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card saleProduct-card h-100">
//               <div
//                 class="sale-badge"
//                 style={{ backgroundColor: "#ea7e91", color: "white" }}
//               >
//                 25% OFF
//               </div>
//               <div
//                 class="summer-banner"
//                 style={{ backgroundColor: "#33446b", color: "white" }}
//               >
//                 Summer Sale
//               </div>
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7YDxwsjElH9iTFzsR-YFHfEyPObG6fqeWw&s"
//                 class="card-img-top"
//                 alt="Smart Watch"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div class="card-body">
//                 <h5 class="card-title">Borosil Primus Plus Juicer</h5>
//                 <div class="price-section">
//                   <span class="original-price">₹25,000</span>
//                   <span class="discount-price">₹23,000</span>
//                 </div>
//                 <div class="stock-status">Hot Deal!</div>
//                 <div class="d-grid gap-2">
//                   <button
//                     class="btn btn-primary
                  
//                   "
//                     style={{
//                       backgroundColor: "#ea7e91",
//                       color: "white",
//                       border: "none",
//                     }}
//                   >
//                     Add to Cart
//                   </button>
//                   <button class="btn btn-outline-secondary">View Detail</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductSales;


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
      image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dwc8fb2e08/images/large/CCF-31_01_V2.jpg?sw=1200&sh=1200&sm=fit",
      discount: "40% OFF",
      stock: "Only 5 left!"
    },
    {
      id: 5,
      name: "Sony Bravia TV model Y",
      price: 15000,
      originalPrice: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNBmPMFHR6g5Prmz4SAUbaa3lCTSpK-irLg&s",
      discount: "35% OFF",
      stock: "Limited Stock!"
    },
    {
      id: 6,
      name: "Havells Instanio 300 Geyser",
      price: 25000,
      originalPrice: 35000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexDlOuz0S-ZujoDcwjm7E3zvcuDE0Mo3wag&s",
      discount: "30% OFF",
      stock: "Selling Fast!"
    },
    {
      id: 7,
      name: "Borosil Primus Plus Juicer",
      price: 23000,
      originalPrice: 25000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7YDxwsjElH9iTFzsR-YFHfEyPObG6fqeWw&s",
      discount: "25% OFF",
      stock: "Hot Deal!"
    }
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
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-3" key={product.id}>
              <div className="card saleProduct-card h-100" style={product.id === 1 ? { width: "800px" } : {}}>
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
                    <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="discount-price"> ₹{product.price.toLocaleString()}</span>
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
