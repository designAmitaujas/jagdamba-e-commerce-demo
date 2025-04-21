import React, { useState } from "react";
import "./ContactUs.css";
import Header from "../Header";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const [preferredContactMethod, setPreferredContactMethod] = useState("");

  const handlePreferredContactChange = (e) => {
    setPreferredContactMethod(e.target.value);
  };

  return (
    <>
      <Header />
      <form action="https://fabform.io/f/xxxxx" method="post">
        <section className="contact-form py-24">
          <div className="container" style={{ marginTop: "250px" }}>
            <div className="row">
              <div className="col-lg-6 col-12 mb-10 mb-lg-0">
                <div className="image-group">
                  <div className="image-container">
                    <h1 className="overlay-title">Contact us</h1>
                    <img
                      src="/src/assets/images/image 2.jpeg.jpg"
                      alt="ContactUs tailwind section"
                      className="img-fluid rounded-2xl bg-blend-multiply bg-indigo-700"
                    />
                    <div className="overlay">
                      <div className="contact-info">
                        <div className="contact-item"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12 bg-light p-5 rounded-2xl">
                <h2 className="text-indigo-600 font-manrope text-4xl font-semibold mb-4">
                  Send Us A Message
                </h2>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  className="form-control mb-3"
                  placeholder="Phone"
                />

                <textarea
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </>
  );
};

export default ContactForm;
