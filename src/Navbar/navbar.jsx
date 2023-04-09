import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState("dark");

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`navbar navbar-expand-md mt-3 ${theme}`}>
      <div className="container">
        <a href="/" className="nav-logo navbar-brand">
          DAN
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="nav-toggler">
            {collapsed ? (
              <FontAwesomeIcon icon={faBars} />
            ) : (
              <FontAwesomeIcon icon={faTimes} />
            )}
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="nav-ul-dark navbar-nav ms-auto">
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
            <li
              className="nav-item d-flex justify-contents-start align-items-center"
              onClick={toggleTheme}
            >
              <span className="nav-theme-icon">
                <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
                &nbsp;{theme === "dark" ? "Dark" : "Light"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
