import React from "react";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function HeroSection(props) {
  return (
    <section className={`hero ${props.theme}`}>
      <div className="container p-3">
        <div className="row justify-content-center align-items-center text-center text-md-start">
          <div className="col-md-5 text-center text-lg-start">
            <h1 className="hero-header display-2 fw-bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi!, I`m DIETHER,")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Front End Developer.")
                    .pauseFor(2000)
                    .pauseFor(1000)
                    .start();
                }}
              />
            </h1>
            <p className="hero-paragraphs lead my-4">
              Blending creativity and technical expertise to build engaging web
              applications.
            </p>
            <div className="hero-links d-flex justify-contents-center align-items-center flex-lg-row flex-column">
              <button className="hero-btn me-3">
                <i className="fas fa-download hero-download" /> Download CV
              </button>
              <div className="d-lg-none mb-3"></div>
              <div className="d-md-flex justify-content-center align-items-center">
                <a href="https://www.facebook.com/DietherNoche" target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="hero-social-links me-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/diether-noche-010356145/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="hero-social-links me-3"
                  />
                </a>
                <a href="https://github.com/DAnoche" target="_blank">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="hero-social-links me-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center d-none d-lg-block">
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
