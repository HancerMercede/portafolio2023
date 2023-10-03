import styles from "./Header.module.css";

export const Header = ({ name }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.name}>Hi, I'm {name}</h1>
      </div>
      <div>
        <p className={styles.role}>Software Engineer</p>
      </div>
    </>
  );
};
