import "./Project.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Project = ({ props }) => {
  const { image, name, Description, Tools, url } = props;
  return (
    <motion.div
      className="project-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Link to={url} target="_blank">
        <img className="image" src={image} alt={name} />
      </Link>

      <div className="project-info">
        <h2>{name}</h2>
        <p>{Description}</p>
      </div>
      <hr />
      <div className="card-footer">
        <p>{Tools}</p>
      </div>
    </motion.div>
  );
};
