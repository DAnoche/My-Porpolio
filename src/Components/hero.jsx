import React from "react";
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

function HeroSection(props) {
  return (
    <section className={`hero ${props.theme}`}>
      <div className="container p-3">
        <div className="row justify-content-center align-items-center text-center text-md-start">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <p className="hero-header display-2 fw-bold">
                Front End Developer.
              </p>
            </h1>
            <p className="lead my-4">
              Blending creativity and technical expertise to build engaging web
              applications.
            </p>
            <div className="hero-links d-flex justify-contents-center align-items-center">
              <a className="btn btn-primary btn-lg me-3" href="#">
                Download CV
              </a>
              <a href="https://www.facebook.com/DietherNoche" target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                  className="hero-social-links me-2"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/diether-noche-010356145/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="hero-social-links me-2"
                />
              </a>
              <a href="https://github.com/DAnoche" target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="hero-social-links me-2"
                />
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center d-md-block">
            <img
              className="image-fluid"
              src={"./assets/hero-pic.svg"}
              alt="Web Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
