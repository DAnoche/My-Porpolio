import React from "react";

function Navbar() {
  return (
    <>
      <div className="container p-4 border">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#hero">
              DAN
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About-me">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="btn btn-primary" href="#Resume">
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
