import { ToolKit } from "./ToolKit";
import { tools } from "./db/ToolKitdb";
import styles from "./ToolKitList.module.css";

export const ToolKitList = () => {
  return (
    <div>
      <h3 className={styles.SectionTitle}>Technologies</h3>
      <ul className={styles.container}>
        {tools.map((tool) => (
          <ToolKit key={tool.id} tool={tool} />
        ))}
      </ul>
    </div>
  );
};
