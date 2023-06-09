import React from "react";
import { motion } from "framer-motion";

function AboutSection(props) {
  return (
    <section id="About-me" className={`about pb-5 ${props.theme}`}>
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
          <div className="container d-flex justify-content-center mt-5">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="about-content row justify-content-center align-self-center pt-3"
            >
              <div className="col-12 col-lg-5">
                <img
                  src="assets/DA-pic.jpg"
                  alt="profile"
                  className="img-fluid rounded mb-3"
                  width="200"
                  height="200"
                />
              </div>
              <div className="col-10 col-lg-5">
                <h1 className="mb-4 te">Hi, I'm Diether</h1>
                <hr className="featurette-divider" />
                <p>
                  I have a passion for building beautiful, responsive websites
                  and is eager to put my skills to work in the industry. My goal
                  is to create seamless user experiences through clean,
                  efficient code and innovative design.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="about-techs px-4 pb-4 mb-3">
            <div className="container-lg">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center text-light"
              >
                <h2>Tech Stacks</h2>
                <p className="lead">
                  Equipped with the latest trends in the Industry.
                </p>
                <hr className="featurette-divider" />
              </motion.div>
            </div>
            <div className="row justify-content-center px-0 px-md-5">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="col-lg-4 col-12 mb-4 mt-3"
              >
                <div className="card card-custom border-0">
                  <img
                    className="card-img-top"
                    src="assets/card-1.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Languages</h4>
                    <hr className="featurette-divider" />
                    <ul className="card-text p-0">
                      <li>Javascript</li>
                      <li>PHP</li>
                      <li>C#</li>
                      <li>SQL</li>
                      <li>Visual Basic</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="col-lg-4 col-12 mb-4 mt-3"
              >
                <div className="card card-custom border-0">
                  <img
                    className="card-img-top"
                    src="assets/card-2.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Frameworks</h4>
                    <hr className="featurette-divider" />
                    <ul className="card-text p-0">
                      <li>React</li>
                      <li>Node.js</li>
                      <li>Laravel</li>
                      <li>Express</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="col-lg-4 col-12 mb-4 mt-3"
              >
                <div className="card card-custom border-0">
                  <img
                    className="card-img-top"
                    src="assets/card-3.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Other Techs</h4>
                    <hr className="featurette-divider" />
                    <ul className="card-text p-0">
                      <li>My SQL</li>
                      <li>Git</li>
                      <li>Postman</li>
                      <li>Photoshop</li>
                      <li>Illustrator</li>
                      <li>AutoCAD</li>
                      <li>SketchUp</li>
                      <li>Lumion</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
