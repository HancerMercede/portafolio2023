import styles from "./Header.module.css";
import "animate.css";

export const Header = ({ name }) => {
  return (
    <>
      <div className={`${styles.container} animate__animated animate__fadeIn`}>
        <div>
          <img
            className={styles.profile}
            src="assets/images/Professional_Picture.png"
            alt="image"
          />
          <h1 className={styles.name}>Hi, I am {name}</h1>
        </div>
        <p className={`${styles.role} animate__animated animate__bounceInLeft`}>
          SOFTWARE ENGINEER
        </p>
      </div>
    </>
  );
};
