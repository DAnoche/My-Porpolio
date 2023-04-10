import React from "react";
import { motion } from "framer-motion";

function AboutSection(props) {
  return (
    <section id="About-me" className={`about ${props.theme}`}>
      <div className="custom-about-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="about-intro">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="about-content"
          >
            <h1 className="mb-4">Hi, I'm Diether Noche</h1>
            <hr className="featurette-divider" />
            <p>
              I'm a recent graduate from a Full Stack Web Development bootcamp.
              I have a passion for building beautiful, responsive websites and
              is eager to put my skills to work in the industry. My goal is to
              create seamless user experiences through clean, efficient code and
              innovative design.
            </p>
          </motion.div>
          <div className="about-techs">
            <div className="card card-custom bg-white border-0">
              <div
                className="card-img-top"
                style={{
                  backgroundImage:
                    "url(http://res.cloudinary.com/d3/image/upload/c_scale,q_auto:good,w_1110/trianglify-v1-cs85g_cc5d2i.jpg)",
                }}
              ></div>
              <div className="card-avatar">
                <img
                  className="img-fluid"
                  src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="card-body" style={{ overflowY: "auto" }}>
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Card has minimum height set but will expand if more space is
                  needed for card body content. You can use Bootstrap{" "}
                  <a
                    href="https://getbootstrap.com/docs/4.0/components/card/#card-decks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    card-decks
                  </a>{" "}
                  to align multiple cards nicely in a row.
                </p>
              </div>
              <div
                className="card-footer"
                style={{ background: "inherit", borderColor: "inherit" }}
              >
                <a href="#" className="btn btn-primary">
                  Option
                </a>
                <a href="#" className="btn btn-outline-primary">
                  Other option
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
