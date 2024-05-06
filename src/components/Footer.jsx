import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      Hancer`s Portfolio {new Date().getFullYear()}
    </div>
  );
};
