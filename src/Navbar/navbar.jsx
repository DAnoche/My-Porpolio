import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none fs-4"
          >
            DAN.
          </a>
          <ul class="nav-ul-dark nav nav-pills">
            <li class="nav-item">
              <a href="#About-me" class="nav-link">
                ABOUT ME
              </a>
            </li>
            <li class="nav-item">
              <a href="#Project" class="nav-link">
                PROJECTS
              </a>
            </li>
            <li class="nav-item">
              <a href="#Contact" class="nav-link">
                CONTACT
              </a>
            </li>
            <li class="nav-item me-2">
              <button class="btn btn-primary">RESUME</button>
            </li>
            <li class="nav-item">
              <button class="btn btn-secondary">
                <i class="fas fa-moon"></i>
              </button>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Navbar;
