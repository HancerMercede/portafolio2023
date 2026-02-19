import "./Company.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Company = ({ props }) => {
  const { logo, years, company, position, description } = props;
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="company-container"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <li>
        <div>
          <img className="company-logo" src={logo} alt={company} />
          <h3>{company}</h3>
        </div>
        <p className="position">{position}</p>
        <p className="years">{years}</p>
        <p className="description">{description}</p>
      </li>
    </motion.div>
  );
};
