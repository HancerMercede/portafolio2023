import styles from './Navbar.module.css'
export const Navbar = () => {
  return <>
    <div className={styles.navbar}>
      <Link to='/'>Home</Link>
    </div>
  </>;
};
