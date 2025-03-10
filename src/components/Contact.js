import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <div className="contact-section">
        <div className="contact-content">
          <FaEnvelope className="contact-icon" />
          <h3>Have Questions or Feedback?</h3>
          <p>We'd love to hear from you! Please reach out to us at:</p>
          <a
            href="mailto:bookhive.app.info@gmail.com"
            className="contact-email"
          >
            bookhive.app.info@gmail.com
          </a>
          <p className="contact-message">
            Our team will get back to you as soon as possible. We appreciate
            your feedback and are constantly working to improve BookHive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
