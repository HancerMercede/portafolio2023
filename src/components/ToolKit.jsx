import styles from "./Toolkit.module.css";

export const ToolKit = ({ tool }) => {
  return (
    <>
      <img className={styles.cover} src={tool.image} alt={tool.name} />
    </>
  );
};
