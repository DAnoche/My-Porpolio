import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactSection(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
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
          >
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
