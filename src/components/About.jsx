import "./about.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
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
      className="about-container"
    >
      <h2>About me </h2>
      <p>
        With over 10 years of experience building scalable and maintainable
        software, I specialize in designing systems that are built to evolve not
        just to work today, but to adapt to the requirements of tomorrow. My
        core focus is writing code that communicates intent clearly and stands
        the test of time. I work with Clean Architecture and Clean Code
        principles as a foundation, not as a checklist, ensuring that every
        layer of a system has a clear responsibility and every decision is
        intentional. I have extensive experience working with legacy codebases,
        applying proven refactoring techniques to reduce technical debt, improve
        testability, and restore confidence in systems that have grown difficult
        to change. <br /> I understand that working with legacy code is not just
        a technical challenge it's a strategic one. Tech stack I work with
        regularly: C# · .NET Core · Entity Framework Core · Dapper · PostgreSQL
        · TypeScript · JavaScript · React · Node.js <br />
        I'm proactive, results-driven, and direct when it comes to communicating
        progress, blockers, and solutions. I believe great software is built by
        engineers who take ownership of the code, the architecture, and the
        outcome.
      </p>
    </motion.div>
  );
};
