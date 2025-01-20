import "./Header.css";
import profileImg from "../../public/assets/images/profile.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header-container">
      <img className="profile" src={profileImg} alt="Profile" />
      <div>
        <h1>Hancer Mercedes</h1>
        <p className="profession">Software Engineer</p>
        <div className="social-networks">
          <Link
            to="https://www.linkedin.com/in/hancer-mercedes-663766198/"
            target="blank"
          >
            <FaLinkedin />
          </Link>
          <Link to="https://www.instagram.com/hancer_22/" target="blank">
            <FaInstagram />
          </Link>
          <Link to="https://github.com/HancerMercede" target="blank">
            <FaGithub />
          </Link>
          <Link>
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};
