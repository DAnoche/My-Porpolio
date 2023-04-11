import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Footer() {
  return (
    <div className="footer d-flex justify-content-center align-items-center">
      <footer className="container row text-center py-4">
        <div className="col-12">
          <a
            href="/"
            className="ms-lg-2  mb-3 me-2 mb-md-0 text-decoration-none lh-1"
          >
            <span>&lt;/&gt; Diether Anthony Noche</span>
          </a>
          <span className="mb-3 mb-md-0 ">© 2023</span>
        </div>
        <div className="col-12">
          <hr className="featurette-divider" />
          <ul className="nav d-flex justify-content-center align-items-center">
            <motion.li whileHover={{ scale: 1.2, transition: 0.3 }}>
              <a
                className="nav-link"
                href="https://www.facebook.com/DietherNoche"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} className="me-2" />
                Facebook
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2, transition: 0.3 }}>
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/diether-noche-010356145/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="me-2" />
                LinkedIn
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2, transition: 0.3 }}>
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
