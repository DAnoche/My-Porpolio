import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectSection(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section id="Project" className={`project py-5 ${props.theme}`}>
      <motion.div
        initial={{ scale: 0, opacity: 0, y: "-100%" }}
        whileInView={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container text-center"
      >
        <h2>My Recent Works</h2>
        <p className="lead">
          Here are a few past design projects I've worked on.
        </p>
        <hr className="featurette-divider" />
      </motion.div>

      <div className="container carousel">
        <Slider {...settings}>
          <div>
            <img src="https://placeimg.com/640/480/animals" alt="Card 1" />
            <h3>Card 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <img src="https://placeimg.com/640/480/architecture" alt="Card 2" />
            <h3>Card 2</h3>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src="https://placeimg.com/640/480/nature" alt="Card 3" />
            <h3>Card 3</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default ProjectSection;
