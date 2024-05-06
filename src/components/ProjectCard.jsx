import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <Link to={project.url} target="_blak">
        <img className={styles.cover} src={project.image} alt={project.name} />
      </Link>
      <div className={styles.description}>
        <p>{project.Description}</p>

        <div className={styles.status}>
          {project.status === "Completed" ? (
            <span> Status: ✅ </span>
          ) : (
            <span>Status: ❌</span>
          )}
        </div>
      </div>
    </div>
  );
};
