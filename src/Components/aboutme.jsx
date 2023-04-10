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
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card card-custom bg-white border-0">
                <div class="card-body">
                  <h4 class="card-title">Card title 1</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis ad iusto molestias excepturi non, vero dolores
                    sint vitae rem in hic fugit exercitationem repellat,
                    voluptatem at asperiores aspernatur harum quas.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card card-custom bg-white border-0">
                <div class="card-body">
                  <h4 class="card-title">Card title 2</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis ad iusto molestias excepturi non, vero dolores
                    sint vitae rem in hic fugit exercitationem repellat,
                    voluptatem at asperiores aspernatur harum quas.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card card-custom bg-white border-0">
                <div class="card-body">
                  <h4 class="card-title">Card title 3</h4>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis ad iusto molestias excepturi non, vero dolores
                    sint vitae rem in hic fugit exercitationem repellat,
                    voluptatem at asperiores aspernatur harum quas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
