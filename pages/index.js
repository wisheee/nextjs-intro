import Link from "next/link";
import Seo from "../components/Seo";
import PreviewFactory from "../components/movies/PreviewFactory";
import styles from "../styles/modules/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <section>
        <h2 className={styles.title}>😀 지금 가장 인기있는 영화</h2>
        <Link href="/popular">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <PreviewFactory movieType="popular" />
      </section>
      <section>
        <h2 className={styles.title}>🎞️ 현재 상영 중인 영화</h2>
        <Link href="/nowPlaying">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <PreviewFactory movieType="nowPlaying" />
      </section>
      <section>
        <h2 className={styles.title}>📌 상영 예정인 영화</h2>
        <Link href="/upcoming">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <PreviewFactory movieType="upcoming" />
      </section>
    </div>
  );
}
