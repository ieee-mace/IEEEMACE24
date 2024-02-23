import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-header">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="assets/images/logos/mace-white.png"
            alt="IEEE MACE SB Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#section1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">
                Why IEEE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section3">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section5">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section4">
                Chapters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section6">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
