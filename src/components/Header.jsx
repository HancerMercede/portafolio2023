import "./Header.css";
import profileImg from "../../public/assets/images/profile.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "animate.css";
export const Header = () => {
  return (
    <div className="header-container">
      <img
        className="profile animate__animated  animate__slideInUp"
        src={profileImg}
        alt="Profile"
      />
      <div>
        <h1 className="name animate__animated animate__zoomInUp ">
          Hancer Mercedes
        </h1>
        <p className="profession  animate__animated animate__zoomIn">
          Software Engineer
        </p>
        <div className="social-networks">
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
        </div>
      </div>
    </div>
  );
};
