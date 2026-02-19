import "./Header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="header-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="name">Hancer Mercedes</h1>
        <p className="profession">
          Software Engineer | .NET & React Specialist
        </p>

        <motion.div
          className="social-networks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            className="LinkedIn"
            to="https://www.linkedin.com/in/hancer-mercedes-663766198/"
            target="blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="Instagram"
            to="https://www.instagram.com/hancer_22/"
            target="blank"
          >
            <FaInstagram />
          </Link>
          <Link
            className="GitHub"
            to="https://github.com/HancerMercede"
            target="blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="Facebook"
            to="https://www.facebook.com/"
            target="blank"
          >
            <FaFacebook />
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
};
