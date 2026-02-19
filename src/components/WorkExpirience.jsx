import "./workexpirience.css";
import { companies } from "../db/companies.js";
import { Company } from "./Company";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WorkExpirience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="workexpirience-container"
    >
      <div>
        <h2>Work Expirience</h2>
        <ul className="companies-list">
          {companies.map((company) => (
            <Company key={company.id} props={company} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
