import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function Navbar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className={`navbar navbar-expand-md pt-3 fixed-top ${props.theme}`}>
      <div className="container">
        <a href="/" className="nav-logo navbar-brand">
          &lt;/&gt; DAN
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
            <li className="nav-theme-icon nav-item d-flex justify-contents-center align-items-center mb-5 mb-md-0">
              <span className="me-1">
                <FontAwesomeIcon
                  icon={props.theme === "dark" ? faMoon : faSun}
                />
                &nbsp;{props.theme === "dark" ? "Dark" : "Light"}
              </span>
              <input
                type="checkbox"
                id="switch"
                checked={props.theme === "dark"}
                onChange={props.toggleTheme}
              />
              <label for="switch"></label>
            </li>
          </ul>
          {/* Social Links and Contact Info */}
          <div className="nav-social text-center d-block d-md-none">
            <p className="lead ms-2">My Social Links.</p>
            <div class="nav-social container">
              <div class="row">
                <div class="col-md-12">
                  <span class="d-block mb-3">
                    <a
                      href="https://www.facebook.com/DietherNoche"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "facebook"]}
                        className="me-2"
                      />
                      Facebook
                    </a>
                  </span>
                  <span class="d-block mb-3">
                    <a
                      href="https://www.linkedin.com/in/diether-noche-010356145/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={["fab", "linkedin"]}
                        className="me-2"
                      />
                      LinkedIn
                    </a>
                  </span>
                  <span class="d-block mb-3">
                    <a href="https://github.com/DAnoche" target="_blank">
                      <FontAwesomeIcon
                        icon={["fab", "github"]}
                        className="me-2"
                      />
                      Github
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-social text-center d-block d-md-none">
            <p className="lead ms-2 mt-3">Contact Details.</p>
            <div class="nav-social container">
              <div class="row">
                <div class="col-md-12">
                  <span class="d-block mb-3">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                    &nbsp;diether.noche@gmail.com
                  </span>
                  <span class="d-block mb-3">
                    <FontAwesomeIcon icon={["fas", "phone"]} />
                    &nbsp;(+63)955 055 5469
                  </span>
                  <span class="d-block mb-3">
                    <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                    &nbsp;Batangas, Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
