import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            DAN.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#About-me" className="nav-link">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a href="#Project" className="nav-link">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item me-2">
                <a href="#Contact" className="nav-link">
                  CONTACT
                </a>
              </li>
              <li className="nav-item d-flex justify-contents-center align-items-center">
                <span className="nav-theme-icon ">
                  <i className="fas fa-moon"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
