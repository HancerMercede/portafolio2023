import { Project } from "./Project";
import "./ProjectList.css";
import { projects } from "../db/projects";
export const ProjectList = () => {
  return (
    <div className="project-list-container">
      <h2 id="title">Projects</h2>
      <div>
        <ul className="project-list">
          {projects &&
            projects.map((project) => (
              <Project key={project.id} props={project} />
            ))}
        </ul>
      </div>
    </div>
  );
};
