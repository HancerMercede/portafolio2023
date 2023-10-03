import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <li>
        <Link to={project.url} target="_blak">
          <img
            width={280}
            height={340}
            className={styles.cover}
            src={project.image}
            alt={project.name}
          />
        </Link>
        <p>{project.Description}</p>
          <p>{project.status}</p>
      </li>
    </div>
  );
};
