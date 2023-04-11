import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";

function ProjectSection(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const projects = [
    {
      id: 1,
      title: "Gon's Dispo Vape Shop",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://gonsdispovape.shop/",
    },
    {
      id: 2,
      title: "South Trails",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://doubtful-moth-sweatshirt.cyclic.app/login",
    },
    {
      id: 3,
      title: "Fusion Drafts",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "https://danoche.github.io/fusion-drafts/index.html",
    },
    {
      id: 4,
      title: "Project 4",
      image: "https://via.placeholder.com/150",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "#",
    },
  ];

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
          {projects.map((project) => (
            <div key={project.id} style={{ width: "300px" }}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProjectSection;
