import { Project } from "./Project";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ProjectList.css";
import { projects } from "../db/projects";

export const ProjectList = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="project-list-container"
    >
      <h2 id="title">Projects</h2>
      <div>
        <ul className="project-list">
          {projects &&
            projects.map((project) => (
              <Project key={project.id} props={project} />
            ))}
        </ul>
      </div>
    </motion.div>
  );
};
