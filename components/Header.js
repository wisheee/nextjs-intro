import NavBar from "./NavBar";
import styles from "../styles/modules/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>🎬 Wishee 영화관 🎥💡</h1>
      <NavBar />
    </header>
  );
}