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
              <p className="display-2 fw-bold">Front End Developer</p>
            </h1>
            <p className="lead my-4">
              Blending creativity and technical expertise to build engaging web
              applications.
            </p>
            <a className="btn btn-primary btn-lg" href="#">
              Download CV
            </a>
            <span class="d-block mb-3">
              <a href="https://www.facebook.com/DietherNoche" target="_blank">
                <FontAwesomeIcon icon={["fab", "facebook"]} className="me-2" />
              </a>
            </span>
            <span class="d-block mb-3">
              <a
                href="https://www.linkedin.com/in/diether-noche-010356145/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="me-2" />
              </a>
            </span>
            <span class="d-block mb-3">
              <a href="https://github.com/DAnoche" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} className="me-2" />
              </a>
            </span>
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
