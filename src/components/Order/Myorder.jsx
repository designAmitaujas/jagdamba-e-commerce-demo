import React from "react";
import Header from "../Header";

import "../Order/myorders.css";
import Footer from "../Footer/Footer";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
  ProgressBar,
  Button,
  Badge,
} from "react-bootstrap";

export default function OrderDetails3() {
  return (
    <div>
      <Header />

      <section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        {/* <Container className="py-5 h-100"> */}
        <Row className="justify-content-center align-items-center  ">
          <Col lg="10" xl="8">
            <Card
              style={{
                borderRadius: "10px",
                maxWidth: "100%",
                marginTop: "100px",
              }}
            >
              <CardHeader className="px-4 py-5">
                <h5 className="text-muted mb-0">Thanks for your Order,</h5>
              </CardHeader>
              <CardBody className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p
                    className="lead fw-normal mb-0"
                    style={{ color: "#a8729a" }}
                  >
                    Receipt
                  </p>
                  <p className="small text-muted mb-0">
                    Receipt Voucher: 1KAU9-84UIL
                  </p>
                </div>

                {/* Product 1 */}
                <Card className="shadow-0 border mb-4">
                  <CardBody>
                    <Row>
                      <Col md="2">
                        <img
                          src="/src/assets/images/tv.png"
                          alt="Tv"
                          style={{ width: "140px", height: "140px" }}
                        />
                      </Col>
                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0">Xiaomi</p>
                      </Col>

                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">Qty: 1</p>
                      </Col>
                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">&#8377;79999</p>
                      </Col>
                    </Row>
                    <hr
                      className="mb-4"
                      style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                    />
                    <Row className="align-items-center">
                      <Col md="2">
                        <p className="text-muted mb-0 small">Track Order</p>
                      </Col>
                      <Col md="10">
                        <ProgressBar
                          now={65}
                          variant="custom"
                          style={{ height: "6px", borderRadius: "16px" }}
                        />
                        <div className="d-flex justify-content-around mb-1">
                          <p className="text-muted mt-1 mb-0 small ms-xl-5">
                            Out for delivery
                          </p>
                          <p className="text-muted mt-1 mb-0 small ms-xl-5">
                            Delivered
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                {/* Product 2 */}
                <Card className="shadow-0 border mb-4">
                  <CardBody>
                    <Row>
                      <Col md="2">
                        <img
                          src="/src/assets/images/mixer.png"
                          alt="mixer"
                          style={{ width: "140px", height: "140px" }}
                        />
                      </Col>
                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0">Philips</p>
                      </Col>

                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">Qty: 1</p>
                      </Col>
                      <Col
                        md="2"
                        className="text-center d-flex justify-content-center align-items-center"
                      >
                        <p className="text-muted mb-0 small">&#8377;5999</p>
                      </Col>
                    </Row>
                    <hr
                      className="mb-4"
                      style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                    />
                    <Row className="align-items-center">
                      <Col md="2">
                        <p className="text-muted mb-0 small">Track Order</p>
                      </Col>
                      <Col md="10">
                        <ProgressBar
                          now={20}
                          variant="custom"
                          style={{ height: "6px", borderRadius: "16px" }}
                        />
                        <div className="d-flex justify-content-around mb-1">
                          <p className="text-muted mt-1 mb-0 small ms-xl-5">
                            Out for delivery
                          </p>
                          <p className="text-muted mt-1 mb-0 small ms-xl-5">
                            Delivered
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                {/* Order Summary */}
                <div className="d-flex justify-content-between pt-2">
                  <p className="fw-bold mb-0">Order Details</p>
                  <p className="text-muted mb-0">
                    <span className="fw-bold me-4">Total</span> &#8377;85998
                  </p>
                </div>

                <div className="d-flex justify-content-between pt-2">
                  <p className="text-muted mb-0">Invoice Number : 788152</p>
                  <p className="text-muted mb-0">
                    <span className="fw-bold me-4">Discount</span> &#8377;978
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="text-muted mb-0">Invoice Date : 2o Mar, 2025</p>
                  <p className="text-muted mb-0">
                    <span className="fw-bold me-4">GST 18%</span> &#8377;978
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-5">
                  <p className="text-muted mb-0">
                    Receipts Voucher : 18KU-62IIK
                  </p>
                  <p className="text-muted mb-0">
                    <div className="fw-bold me-4 delivery">
                      Delivery Charges
                    </div>{" "}
                    <div className="free">Free</div>
                  </p>
                </div>
              </CardBody>

              {/* Total Paid */}
              <CardFooter
                className="border-0 px-4 py-5"
                style={{
                  backgroundColor: "#ea7e91",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                  Total paid: <span className="h2 mb-0 ms-2">&#8377;84042</span>
                </h5>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/* </Container> */}
      </section>
      <Footer />
    </div>
  );
}
