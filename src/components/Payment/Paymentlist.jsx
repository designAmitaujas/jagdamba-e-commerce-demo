import React, { useState } from "react";
// import "../Payment/paymentlist.css";
import { CreditCard, Phone } from "lucide-react";
import {
  CreditCardFill,
  GooglePlay,
  Paypal,
  PhoneFill,
  QuestionCircle,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import {
  RiAlignItemVerticalCenterFill,
  RiEmotionUnhappyFill,
  RiMastercardFill,
  RiSecurePaymentFill,
  RiVisaFill,
} from "@remixicon/react";

const PaymentForm = () => {
  const [activeTab, setActiveTab] = useState("credit-card");
  const [isTextBox, setIsTextBox] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleClick = () => {
    setIsTextBox(!isTextBox);
  };

  return (
    <div className="container py-5 " style={{ maxWidth: "100%" }}>
      {/* For demo purpose */}
      <div className="row mb-4">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-6"> Payment Forms</h1>
        </div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-lg-6 mx-auto ">
          <div className="card" style={{height:"100%"}}>
            <div className="card-header">
              <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                {/* Credit card form tabs */}
                <ul className="nav bg-light nav-pills rounded nav-fill mb-3">
                  <li className="nav-item">
                    <a
                      href="#credit-card"
                      className={`nav-link ${
                        activeTab === "credit-card" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("credit-card")}
                    >
                      <CreditCardFill /> Credit Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#paypal"
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("paypal")}
                    >
                      <Paypal /> UPI
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#net-banking"
                      className={`nav-link ${
                        activeTab === "net-banking" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("net-banking")}
                    >
                      <PhoneFill /> Net Banking
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End */}
            {/* Credit card form content */}
            {activeTab === "credit-card" && (
              <div className="tab-pane fade show active pt-3">
                <form
                  role="form"
                  style={{ margin: "20px" }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-group">
                    <label htmlFor="username">
                      <h6>Card Owner</h6>
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Card Owner Name"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">
                      <h6>Card number</h6>
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Valid card number"
                        className="form-control"
                        required
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text text-muted"
                          style={{ height: 45, width: 100 }}
                        >
                          <RiVisaFill />
                          <RiMastercardFill />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label>
                          <h6>Expiration Date</h6>
                        </label>
                        <div className="input-group">
                          <input
                            type="number"
                            placeholder="MM"
                            name=""
                            className="form-control"
                            required
                          />
                          <input
                            type="number"
                            placeholder="YY"
                            name=""
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group mb-4">
                        <label
                          data-toggle="tooltip"
                          title="Three digit CV code on the back of your card"
                        >
                          <h6>
                            CVV <QuestionCircleFill />
                          </h6>
                        </label>
                        <input type="text" required className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      type="button"
                      className="subscribe btn btn-primary btn-block shadow-sm"
                      style={{ width:"100%" }}
                    >
                      Confirm Payment
                    </button>
                    <p style={{ textAlign: "center", paddingTop: "10PX" }}>
                      OR
                    </p>

                    <button
                      type="button"
                      style={{ margin: "0",width:"100%"}}
                      className="subscribe btn btn-primary btn-block shadow-sm "
                    >
                      Cash On Delivery
                    </button>
                  </div>
                </form>
              </div>
            )}
            {/* upi */}
            {activeTab === "paypal" && (
              <div
                id="paypal"
                className="tab-pane  pt-3"
                style={{ margin: "20px" }}
              >
                <h6 className="pb-2">
                  <b>Select your account type</b>
                </h6>
                {/* <div className="form-group">
                  <label className="radio-inline">
                    <input type="radio" name="optradio" checked /> Domestic
                  </label>
                  <label className="radio-inline ">
                    <input type="radio" name="optradio" className="ml-5" />
                    International
                  </label>
                </div> */}
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    onClick={handleClick}
                  />
                  <label
                    style={{ fontWeight: "normal" }}
                    class="form-check-label"
                    for="inlineRadio1"
                  >
                    Your UPI ID
                  </label>
                  {isTextBox && <input type="text" disabled name="upiid" />}
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label
                    style={{ fontWeight: "normal" }}
                    class="form-check-label px-2"
                    for="inlineRadio2"
                  >
                    Wallets
                  </label>
                </div>
                <p>
                  <button
                    type="button"
                    className="btn btn-primary "
                    style={{ display: "flex", width: "170px", height: "40px" ,marginTop:"30px"}}
                  >
                    <i className="fab fa-paypal mr-2"></i> Log into my Acount
                  </button>
                </p>
                <p className="text-muted">
                  Note: After clicking on the button, you will be directed to a
                  secure gateway for payment. After completing the payment
                  process, you will be redirected back to the website to view
                  details of your order.
                </p>
              </div>
            )}
            {/* Bank transfer info */}
            {activeTab === "net-banking" && (
              <div
                id="net-banking"
                className="tab-pane  pt-3"
                style={{ margin: "20px" }}
              >
                <div className="form-group">
                  <label htmlFor="Select Your Bank">
                    <h6>
                      <b>Select your Bank</b>
                    </h6>
                  </label>
                  <select className="form-control" id="ccmonth">
                    <option value="" selected disabled>
                      --Please select your Bank--
                    </option>
                    <option>Bank 1</option>
                    <option>Bank 2</option>
                    <option>Bank 3</option>
                    <option>Bank 4</option>
                    <option>Bank 5</option>
                    <option>Bank 6</option>
                    <option>Bank 7</option>
                    <option>Bank 8</option>
                    <option>Bank 9</option>
                    <option>Bank 10</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        display: "flex",
                        width: "170px",
                        height: "40px",
                      }}
                    >
                      <i className="fas fa-mobile-alt mr-2"></i> Proceed Payment
                    </button>
                  </p>
                </div>
                <p className="text-muted">
                  Note: After clicking on the button, you will be directed to a
                  secure gateway for payment. After completing the payment
                  process, you will be redirected back to the website to view
                  details of your order.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
