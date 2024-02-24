// ContactUs.jsx

import React, { useState } from "react";
import "./ContactUs.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formResult, setFormResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setFormResult(data.message);
      } else {
        setFormResult("Something went wrong!");
      }
    } catch (error) {
      setFormResult("Something went wrong!");
    }
  };

  return (
    <section className="contact" data-section="section6">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Let’s Keep In Touch</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form
              id="contact"
              onSubmit={handleSubmit}
              className="needs-validation"
              noValidate
            >
              {/* <input
                type="hidden"
                name="access_key"
                value="239faf88-e3de-47de-98f9-211bb26fb5ea"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              /> */}
              <div className="form-container">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        onChange={handleChange}
                        value={formData.name}
                      />
                      {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                        Please provide your name.
                      </div> */}
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        required
                        onChange={handleChange}
                        value={formData.email}
                      />
                      {/* <div className="empty-feedback text-red-400 text-sm mt-1">
                        Please provide your email address.
                      </div>
                      <div className="invalid-feedback text-red-400 text-sm mt-1">
                        Please provide a valid email address.
                      </div> */}
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Your message..."
                        required
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                      {/* <div className="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
                        Please enter your message.
                      </div> */}
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="button orange-button"
                      >
                        Send Message Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
              <p className="text-base text-center text-green-400" id="result">
                {formResult}
              </p>
            </form>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <h4>
                Contact <em>Us</em>
              </h4>
              <p
                style={{
                  alignContent: "space-around",
                  textAlign: "justify",
                  textJustify: "inter-word",
                  fontSize: "1rem",
                }}
              >
                We are a team of young enthusiasts hoping to use our technical
                skills for a better tomorrow. We are open to trying new things
                and are looking forward to making new connections and
                collaborations. Please feel free to reach out to us and we will
                be more than happy to team up with you.
                <h6 className="address-contact">
                  <FaMapMarkerAlt />
                  <a
                    onMouseOver={() => (this.style.color = "white")}
                    onMouseOut={() => (this.style.color = "#FC3")}
                    style={{ color: "#FC3" }}
                    href="https://goo.gl/maps/kUbkuqiKyQVJBAJg8"
                  >
                    {" "}
                    Mar Athanasius College of Engineering,
                    <br /> Kothamangalam, Kerala - 686 666, India.
                  </a>
                </h6>
                <h6 className="address-contact">
                  <FaPhoneAlt />
                  <a
                    onMouseOver={() => (this.style.color = "white")}
                    onMouseOut={() => (this.style.color = "#FC3")}
                    style={{ color: "#FC3" }}
                    href="tel:+917510829500"
                  >
                    {" "}
                    +91 7510829500
                  </a>
                </h6>
                <h6 className="address-contact">
                  <FaEnvelope />
                  <a
                    onMouseOver={() => (this.style.color = "white")}
                    onMouseOut={() => (this.style.color = "#FC3")}
                    style={{ color: "#FC3" }}
                    href="mailto:sb.mace@ieee.org"
                  >
                    {" "}
                    sb.mace@ieee.org
                  </a>
                </h6>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
