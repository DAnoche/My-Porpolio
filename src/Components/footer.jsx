import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Footer() {
  return (
    <div className="footer">
      <footer className="container d-flex flex-wrap justify-content-between align-items-center py-4">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
            <span>&lt;/&gt; Diether Anthony Noche</span>
          </a>
          <span className="mb-3 mb-md-0 ">© 2023</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <motion.li
            whileHover={{ scale: 1.2, transition: 0.3 }}
            className="ms-1"
          >
            <a
              className="nav-link"
              href="https://www.facebook.com/DietherNoche"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} className="me-2" />
              Facebook
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, transition: 0.3 }}
            className="ms-1"
          >
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/diether-noche-010356145/"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="me-2" />
              LinkedIn
            </a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, transition: 0.3 }}
            className="ms-1"
          >
            <a
              className="nav-link"
              href="https://github.com/DAnoche"
              target="_blank"
            >
              <FontAwesomeIcon icon={["fab", "github"]} className="me-2" />
              Github
            </a>
          </motion.li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
