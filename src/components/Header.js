import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="App Logo" />
        </div>

        <ul className="nav-menu">
          <li>
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="features"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <Link to="/legal">Legal</Link>
          </li>
        </ul>

        <a href="#download" className="btn btn-download">
          <FaDownload /> Download App
        </a>
      </div>
    </header>
  );
};

export default Header;
