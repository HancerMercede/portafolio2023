import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectList.module.css";
import { projects } from "../db/projects";

export const ProjectList = () => {
  return (
    <>
      <div id="Projects">
        <h3 className={styles.sectionTitle}>Projects</h3>
        <div className={styles.container}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};
