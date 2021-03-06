import Link from "next/link";
import PreviewFactory from "../components/movies/PreviewFactory";
import styles from "../styles/modules/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.title}>π μ§κΈ κ°μ₯ μΈκΈ°μλ μν</h2>
        <Link href="/popular">
          <a className={styles.viewMore}>λλ³΄κΈ°</a>
        </Link>
        <PreviewFactory movieType="popular" />
      </section>
      <section>
        <h2 className={styles.title}>ποΈ νμ¬ μμ μ€μΈ μν</h2>
        <Link href="/nowPlaying">
          <a className={styles.viewMore}>λλ³΄κΈ°</a>
        </Link>
        <PreviewFactory movieType="nowPlaying" />
      </section>
      <section>
        <h2 className={styles.title}>π μμ μμ μΈ μν</h2>
        <Link href="/upcoming">
          <a className={styles.viewMore}>λλ³΄κΈ°</a>
        </Link>
        <PreviewFactory movieType="upcoming" />
      </section>
    </div>
  );
}
