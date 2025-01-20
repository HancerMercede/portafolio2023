import { TechStack } from "./TechStack";
import { tools } from "../db/ToolKitdb";
import "./TechStackList.css";
export const TechStackList = () => {
  return (
    <div className="tecthstack-container">
      <h3>Tech Stack</h3>
      <ul className="techlist-container">
        {tools.map((tool) => (
          <TechStack key={tool.id} tool={tool} />
        ))}
      </ul>
    </div>
  );
};
