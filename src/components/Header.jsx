import styles from "./Header.module.css";

export const Header = ({ name }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.name}>I`m {name}</h1>
        <img
          className={styles.profile}
          src="assets/images/1700748610873.jpg"
          alt="image"
        />
        <p className={styles.role}>FULLSTACK DEVELOPER</p>
      </div>
    </>
  );
};
