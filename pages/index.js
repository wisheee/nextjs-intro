import Preview from "../components/movies/Preview";
import Seo from "../components/Seo";
import styles from "../styles/modules/Home.module.scss";

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <section>
        <h2 className={styles.title}>😀 지금 가장 인기있는 영화</h2>
        <div className={styles.wrap}>
          {results?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>🎞️ 현재 상영 중인 영화</h2>
        <div className={styles.wrap}>
          {results?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>📌 상영 예정인 영화</h2>
        <div className={styles.wrap}>
          {results?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies/popular`)
  ).json();
  return {
    props: {
      results,
    },
  };
}