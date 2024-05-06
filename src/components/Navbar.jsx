import styles from "./Navbar.module.css";

export const Navbar = () => {
  const Title = "<My Portfolio💻/>";
  return (
    <nav>
      <div className={styles.Navbar}>
        <div>
          <a href="/" className={styles.Title}>
            {Title}
          </a>
        </div>
        <div className={styles.navbar_items}>
          <a href="#About">About Me</a>
          <a href="#TechStack">Technologies</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};
