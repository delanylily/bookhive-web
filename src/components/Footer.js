import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>BookHive</h3>
          <p> Book lovers community</p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <Link to="/legal">Terms of Service</Link> |{" "}
          <Link to="/legal">Privacy Policy</Link>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <p>
            &copy; {new Date().getFullYear()} BookHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
