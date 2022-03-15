import Link from "next/link";
import NavBar from "./NavBar";
import styles from "../styles/modules/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/"><a>🎬 Wishee 영화관 🎥💡</a></Link>
      </h1>
      <NavBar />
    </header>
  );
}