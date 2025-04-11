import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
  UserRound,
  Heart,
  Package,
  LogOut,
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  MessageSquare,
  Phone,
  Search,
} from "lucide-react";
import { Dropdown, Badge } from "react-bootstrap";
import "./header.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const Header = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (!isSearchExpanded && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 0);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.classList.contains("search-icon")
      ) {
        setIsSearchExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="e-navbar fixed-top">
      <div className="e-navbar-container">
        {/* Top Bar */}
        <div className="e-navbar-top">
          <div className="e-navbar-top-left">
            <a href="tel:+918001234567" className="e-contact-link">
              +91 800 123 4567
            </a>
            <span className="e-divider">|</span>
            <a href="mailto:support@jagdamba.com" className="e-contact-link">
              support@jagdamba.com
            </a>
          </div>
          <div className="e-navbar-top-right">
            <a href="/track-order" className="e-top-link">
              Track Order
            </a>
            <a href="/stores" className="e-top-link">
              Find Store
            </a>
            <a href="/support" className="e-top-link">
              Help & Support
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="e-navbar-main">
          {/* Logo */}
          <a className="e-navbar-brand" href="/">
            <img
              src="/src/assets/images/JagdambaLogo.png"
              alt="Jagdamba Logo"
              width="80"
              height="80"
            />
          </a>

          {/* Search */}
          <div
            className={`e-search-wrapper ${isSearchExpanded ? "expanded" : ""}`}
          >
            <input
              type="search"
              className="e-search-input"
              placeholder="Search for products, brands and more..."
              ref={searchInputRef}
            />
            <button className="e-search-btn">
              <Search
                className="search-icon"
                style={{ color: "white" }}
                size={18}
              />
            </button>
          </div>

          {/* Actions */}
          <div className="e-navbar-actions">
            <div
              className="e-action-item e-search-mobile"
              onClick={toggleSearch}
            >
              <Search size={22} style={{ color: "white" }} />
            </div>

            <Link to="/wishlist" className="e-action-item">
              <Heart size={22} />
              {wishlistCount > 0 && (
                <Badge pill bg="danger" className="e-badge">
                  {wishlistCount}
                </Badge>
              )}
              <div className="e-action-label">Wishlist</div>
            </Link>

            <Link to="/addcart" className="e-action-item e-cart-icon">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <Badge pill bg="danger" className="e-badge">
                  {cartCount}
                </Badge>
              )}
              <span className="e-action-label">Cart</span>
            </Link>

            <Dropdown
              className="e-action-item e-user-dropdown"
              onMouseEnter={() => setShowProfile(true)}
              onMouseLeave={() => setShowProfile(false)}
            >
              <Dropdown.Toggle
                variant="link"
                id="profile-dropdown"
                className="e-user-toggle"
              >
                <UserRound size={22} />
                <a href="" className="text-decoration-none   !important">
                  {" "}
                  <div className="e-action-label " style={{ color: "black" }}>
                    Account
                  </div>
                </a>
              </Dropdown.Toggle>

              <Dropdown.Menu className="e-dropdown-menu">
                <Dropdown.Item href="/myprofile" className="e-dropdown-item">
                  <UserRound size={16} />
                  <span>My Profile</span>
                </Dropdown.Item>
                <Dropdown.Item href="/myorder" className="e-dropdown-item">
                  <Package size={16} />
                  <span>My Orders</span>
                </Dropdown.Item>
                <Dropdown.Item href="/wishlist" className="e-dropdown-item">
                  <Heart size={16} />
                  <span>Wishlist</span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/login" className="e-dropdown-item">
                  <LogOut size={16} />
                  <span>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button
              className="e-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className={`e-navbar-nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="e-nav-list">
            <li className="e-nav-item">
              <a className="e-nav-link active" href="/">
                <Home size={16} className="e-nav-icon-mobile" />
                Home
              </a>
            </li>

            <li
              className="e-nav-item e-has-dropdown"
              onMouseEnter={() => setShowProduct(true)}
              onMouseLeave={() => setShowProduct(false)}
            >
              <a className="e-nav-link" href="#">
                Products <ChevronDown size={16} className="e-dropdown-arrow" />
              </a>
              <div className={`e-mega-menu  ${showProduct ? "show" : ""}`}>
                <div
                  className="e-mega-container"
                  style={{ backgroundColor: "white" }}
                >
                  <div
                    className="e-mega-col"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="e-category-header">Kitchen Appliances</div>
                    <a className="e-category-item" href="/fridgeList">
                      Microwave Ovens
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Hand Blenders
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Mixer Grinders
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Juicers & Extractors
                    </a>
                    <a className="e-category-item" href="//fridgeList">
                      Induction Cooktops
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Food Processors
                    </a>
                  </div>
                  <div
                    className="e-mega-col"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="e-category-header">Cooling Solutions</div>
                    <a className="e-category-item" href="/fridgeList">
                      Air Conditioners
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Water Coolers
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Deep Freezers
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Refrigerators
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Air Coolers
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Tower Fans
                    </a>
                  </div>
                  <div
                    className="e-mega-col"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="e-category-header">Home Essentials</div>
                    <a className="e-category-item" href="/fridgeList">
                      Water Purifiers
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Geysers
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Washing Machines
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Atta Chakki
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Vacuum Cleaners
                    </a>
                    <a className="e-category-item" href="/fridgeList">
                      Irons
                    </a>
                  </div>
                  <div
                    className="e-mega-col"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="e-promo-box">
                      <div className="e-promo-content">
                        <h5>Summer Sale!</h5>
                        <p>Up to 40% off on all cooling appliances</p>
                        <a href="/productsale" className="e-promo-button">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="e-nav-item">
              <a className="e-nav-link" href="/about">
                <Info size={16} className="e-nav-icon-mobile" />
                About
              </a>
            </li>
            <li className="e-nav-item">
              <a className="e-nav-link" href="/testimonials">
                <MessageSquare size={16} className="e-nav-icon-mobile" />
                Testimonials
              </a>
            </li>
            <li className="e-nav-item">
              <a className="e-nav-link" href="/contactus">
                <Phone size={16} className="e-nav-icon-mobile" />
                Contact
              </a>
            </li>
            <li className="e-nav-item e-nav-special">
              <a
                className="e-nav-link"
                style={{ marginTop: "20px" }}
                href="/deals"
              >
                Special Offers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
