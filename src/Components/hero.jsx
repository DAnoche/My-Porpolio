import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import resume from "../Pdf/Diether-Noche-CV.pdf";

library.add(fab, fas);

function HeroSection(props) {
  return (
    <section className={`hero ${props.theme}`}>
      <div className="hero-main container p-3">
        <div className="row justify-content-center align-items-center text-center text-md-start">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="col-md-5 text-center text-lg-start"
          >
            <h1 className="hero-header display-2 fw-bold">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hello there, I'm a")
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
              <a
                className="hero-btn nav-link me-3"
                href={resume}
                download="resume"
              >
                <i className="fas fa-download hero-download" /> Download CV
              </a>
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
          </motion.div>
          <div className="col-md-5 text-center d-none d-lg-block">
            <motion.img
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ rotate: 5 }}
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
