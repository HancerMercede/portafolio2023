import { TechStack } from "./TechStack";

import "./TechStackList.css";
export const TechStackList = () => {
  return (
    <div className="tecthstack-container">
      <h3>Tech Stack</h3>
      <ul className="techlist-container">
        <TechStack />
      </ul>
    </div>
  );
};
