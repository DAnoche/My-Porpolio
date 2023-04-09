import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="container mt-3">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a
            href="/"
            className="nav-logo d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none fs-4"
          >
            DAN.
          </a>
          <ul className="nav-ul-dark nav">
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
        </header>
      </div>
    </>
  );
}

export default Navbar;
