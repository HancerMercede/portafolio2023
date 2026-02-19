import { TechStack } from "./TechStack";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TechStackList.css";

export const TechStackList = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="tecthstack-container"
    >
      <h3>Tech Stack</h3>
      <ul className="techlist-container">
        <TechStack />
      </ul>
    </motion.div>
  );
};
