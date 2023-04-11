import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProjectSection(props) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const projects = [
    {
      id: 1,
      title: "Gon's Dispo Vape Shop",
      image: "assets/vapeshop.jpg",
      description: "An E-Commerce website, for Electronic Cigarettes.",
      link: "https://gonsdispovape.shop/",
      gitlink: "https://github.com/DAnoche/team-1-caps",
    },
    {
      id: 2,
      title: "South Trails",
      image: "assets/southtrails.jpg",
      description:
        "Informative platform for different Mountain Ranges in the Southern Luzon.",
      link: "https://doubtful-moth-sweatshirt.cyclic.app/login",
      gitlink: "https://github.com/DAnoche/south-trails",
    },
    {
      id: 3,
      title: "Fusion Drafts",
      image: "assets/fusiondrafts.jpg",
      description: "Portpolio for House Designs.",
      link: "https://danoche.github.io/fusion-drafts/index.html",
      gitlink: "https://github.com/DAnoche/fusion-drafts",
    },
    {
      id: 4,
      title: "Southern Trails",
      image: "assets/southerntrails.jpg",
      description:
        "Promotional Page for Mount Talamitam Trail, Located at Nasugbu, Batangas.",
      link: "https://danoche.github.io/WD32P-MP1/",
      gitlink: "https://github.com/DAnoche/WD32P-MP1",
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container carousel"
      >
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} style={{ width: "300px" }}>
              <Card>
                <Card.Img variant="top" src={project.image} />
                <Card.Body className="project-body text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    className="m-1"
                    variant="success"
                    href={project.link}
                    target="_blank"
                  >
                    <i class="fas fa-external-link-alt" /> View Demo
                  </Button>
                  <Button
                    className="m-1"
                    variant="dark"
                    href={project.gitlink}
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="me-2"
                    />
                    View on Github
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default ProjectSection;
