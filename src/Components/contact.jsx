import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function CustomModal(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Message Sent!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span className="contact-check d-flex justify-content-center align-items-center">
          <i className="far fa-check-circle text-success" />
        </span>
      </Modal.Body>
      <Modal.Footer>
        <Button className="hero-btn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ContactSection(props) {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="Contact"
      className={`contact px-3 px-md-0 py-5 ${props.theme}`}
    >
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
          <div className="col-lg-5 text-center d-none d-lg-block mx-3">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="image-fluid"
              src={"assets/contact.svg"}
              alt="Web Developer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="col-lg-5 text-center text-lg-start mx-3"
          >
            <form className="text-light" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="user_name"
                  name="user_name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="user_email"
                  name="user_email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="hero-btn mt-3">
                <i className="far fa-paper-plane" />
                &nbsp;Send
              </button>
            </form>
          </motion.div>
        </div>
        {showModal && <CustomModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  );
}

export default ContactSection;
