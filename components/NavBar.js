import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/modules/NavBar.module.scss";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={router.pathname === '/' ? styles.active : ''}>홈</a>
      </Link>
      <Link href="/nowPlaying">
        <a className={router.pathname === '/nowPlaying' ? styles.active : ''}>현재상영</a>
      </Link>
      <Link href="/upcoming">
        <a className={router.pathname === '/upcoming' ? styles.active : ''}>상영예정</a>
      </Link>
      <Link href="/popular">
        <a className={router.pathname === '/popular' ? styles.active : ''}>인기영화</a>
      </Link>
    </nav>
  );
}