import React from "react";

function HeroSection(props) {
  return (
    <section className={`hero mt-5 ${props.theme}`}>
      <div className="container">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center text-center text-md-start">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-2">Front End Developer</div>
              </h1>
              <p className="lead my-4">
                Blending creativity and technical expertise to build engaging
                web applications.
              </p>
              <a className="btn btn-primary btn-lg" href="#pricing">
                Download CV
              </a>
            </div>
            <div className="col-md-5 text-center d-none d-md-block">
              <img
                className="image-fluid"
                src={"./assets/hero-pic.svg"}
                alt="Web Developer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
