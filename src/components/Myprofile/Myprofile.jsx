import React, { useState } from "react";
import "../MyProfile/myprofile.css";

import { RiStarFill, RiStarHalfFill } from "@remixicon/react";
import { Cart } from "react-bootstrap-icons";
import { Heart, Star } from "lucide-react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Apt 4B, New York, NY 10001",
    joinDate: "January 15, 2022",
    profileImage: "/src/assets/images/joshen.jpg",
    orders: 24,
    // wishlist: 8,
    reviews: 15,
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
  };

  const recentOrders = [
    {
      id: "#ORD-78945",
      date: "2023-06-15",
      total: "₹40,999",
      status: "Delivered",
    },
    {
      id: "#ORD-78944",
      date: "2023-06-10",
      total: "₹1500",
      status: "Shipped",
    },
    {
      id: "#ORD-78932",
      date: "2023-06-05",
      total: "₹80,000",
      status: "Processing",
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Welcome back, {user.name}!</p>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="user-card">
            <div className="user-image">
              <img src={user.profileImage} alt="Profile" />
              <button className="edit-image-btn">Edit</button>
            </div>
            <h3>{user.name}</h3>
            <p>Member since {user.joinDate}</p>
          </div>

          <nav className="profile-nav">
            <button
              className={activeTab === "profile" ? "active" : ""}
              onClick={() => setActiveTab("profile")}
            >
              <i className="fas fa-user"></i> Profile
            </button>
            <button
              className={activeTab === "orders" ? "active" : ""}
              onClick={() => setActiveTab("orders")}
            >
              <i className="fas fa-shopping-bag"></i> My Orders
            </button>
            {/* <button
              className={activeTab === "wishlist" ? "active" : ""}
              onClick={() => setActiveTab("wishlist")}
            >
              <i className="fas fa-heart"></i> Wishlist
            </button> */}
            <button
              className={activeTab === "reviews" ? "active" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              <i className="fas fa-star"></i> My Reviews
            </button>
            <button
              className={activeTab === "settings" ? "active" : ""}
              onClick={() => setActiveTab("settings")}
            >
              <i className="fas fa-cog"></i> Settings
            </button>
          </nav>
        </div>

        <div className="profile-main">
          {activeTab === "profile" && (
            <div className="profile-info">
              <div className="section-header">
                <h2>Personal Information</h2>
                {!editMode ? (
                  <button
                    className="edit-btn"
                    onClick={() => setEditMode(true)}
                  >
                    <i className="fas fa-edit"></i> Edit
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button
                      className="cancel-btn"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </button>
                    <button className="save-btn" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {!editMode ? (
                <div className="info-display">
                  <div className="info-item">
                    <span className="info-label">Full Name:</span>
                    <span className="info-value">{user.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email:</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">{user.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Address:</span>
                    <span className="info-value">{user.address}</span>
                  </div>
                </div>
              ) : (
                <form className="info-edit">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              )}

              <div className="stats-container">
                <div className="stat-card">
                  <div className="stat-icon orders">
                    <Cart />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{user.orders}</span>
                    <span className="stat-label">Orders</span>
                  </div>
                </div>
                {/* <div className="stat-card">
                  <div className="stat-icon wishlist">
                    <Heart />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{user.wishlist}</span>
                    <span className="stat-label">Wishlist</span>
                  </div>
                </div> */}
                <div className="stat-card">
                  <div className="stat-icon reviews">
                    <Star />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">{user.reviews}</span>
                    <span className="stat-label">Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="orders-section">
              <h2>Recent Orders</h2>
              <div className="orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>
                          <span
                            className={`status-badge ${order.status.toLowerCase()}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <button className="view-order-btn">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="view-all-btn">View All Orders</button>
            </div>
          )}

          {/* {activeTab === "wishlist" && (
            <div style={{ margin: -170 }}>
             <Wishlist/>
            </div>
            
          )} */}

          {activeTab === "reviews" && (
            <div class="comment-list">
              <div class="single-comment justify-content-between d-flex mb-30">
                <div class="user justify-content-between d-flex">
                  <div class="thumb text-center"></div>
                  <div class="desc">
                    <div class="d-flex justify-content-between mb-10">
                      <div class="d-flex align-items-center">
                        <span class="font-xs text-muted">
                          December 4, 2024 at 3:12 pm{" "}
                        </span>
                      </div>
                      <div class="product-rate d-inline-block">
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarHalfFill color="orange" />
                        </span>
                        <div
                          class="product-rating "
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <p class="mb-10">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus, suscipit exercitationem accusantium obcaecati
                      quos voluptate nesciunt facilis itaque modi commodi
                      dignissimos sequi repudiandae minus ab deleniti totam
                      officia id incidunt?{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="single-comment justify-content-between d-flex mb-30">
                <div class="user justify-content-between d-flex">
                  <div class="thumb text-center"></div>
                  <div class="desc">
                    <div class="d-flex justify-content-between mb-10">
                      <div class="d-flex align-items-center">
                        <span class="font-xs text-muted">
                          December 4, 2024 at 3:12 pm{" "}
                        </span>
                      </div>
                      <div class="product-rate d-inline-block">
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarFill color="orange" />
                        </span>
                        <span>
                          <RiStarHalfFill color="orange" />
                        </span>
                        <div
                          class="product-rating "
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <p class="mb-10">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus, suscipit exercitationem accusantium obcaecati
                      quos voluptate nesciunt facilis itaque modi commodi
                      dignissimos sequi repudiandae minus ab deleniti totam
                      officia id incidunt?{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              <div className="settings-option">
                <h3>Change Password</h3>
                <form className="password-form">
                  <div className="form-group">
                    <label htmlFor="current-password">Current Password</label>
                    <input type="password" id="current-password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password">
                      Confirm New Password
                    </label>
                    <input type="password" id="confirm-password" />
                  </div>
                  <button type="submit" className="save-btn">
                    Update Password
                  </button>
                </form>
              </div>
              <div className="settings-option">
                <h3>Notification Preferences</h3>
                <div className="notification-options">
                  <label className="checkbox-container">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    Email notifications
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark"></span>
                    SMS notifications
                  </label>
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Push notifications
                  </label>
                </div>
              </div>
              <div className="settings-option danger-zone">
                <h3>Danger Zone</h3>
                <button className="delete-account-btn">
                  <i className="fas fa-exclamation-triangle"></i> Delete Account
                </button>
                <p className="warning-text">
                  Warning: This action cannot be undone. All your data will be
                  permanently deleted.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
