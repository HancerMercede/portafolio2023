import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <Link to={project.url} target="_blak">
        <img className={styles.cover} src={project.image} alt={project.name} />
      </Link>
      <div>
        <p className={styles.description}>{project.Description}</p>
        <p>{project.status}</p>
      </div>
    </div>
  );
};
