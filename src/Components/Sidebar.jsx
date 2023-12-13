import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}></footer>
      <p className={styles.copyright}>
        {" "}
        &copy; Copyright {new Date().getFullYear()} by Michael Feleke
      </p>
    </div>
  );
}

export default Sidebar;
