import React from "react";
import { motion } from "framer-motion";

function ProjectSection(props) {
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

      <div className="container carousel"></div>
    </section>
  );
}

export default ProjectSection;
