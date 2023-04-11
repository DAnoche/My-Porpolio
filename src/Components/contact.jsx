import React from "react";
import { motion } from "framer-motion";

function ContactSection(props) {
  return (
    <section id="Contact" className={`contact py-5 ${props.theme}`}>
      <div className="about-intro container">
        <motion.div
          initial={{ scale: 0, opacity: 0, y: "-100%" }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="container text-center pt-5"
        >
          <h2 className="text-light">
            <i className="fas fa-comments" />
            &nbsp;Write me a message.
          </h2>
          <p className="text-light lead">For additional inquiries.</p>
          <hr className="featurette-divider text-light" />
        </motion.div>

        {/* Contact Form */}
        <div className="row justify-content-center align-items-center text-center text-md-start py-5">
          <div className="col-md-5 text-center d-none d-lg-block">
            <motion.img
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ rotate: 5 }}
              className="image-fluid"
              src={"assets/contact.svg"}
              alt="Web Developer"
            />
          </div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="col-md-5 text-center text-lg-start"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
