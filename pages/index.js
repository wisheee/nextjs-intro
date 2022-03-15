import { useState, useEffect } from "react";
import Link from "next/link";
import Preview from "../components/movies/Preview";
import Seo from "../components/Seo";
import styles from "../styles/modules/Home.module.scss";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  useEffect(() => {
    // 인기 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/popular')
      ).json();
      setPopularMovies(results);
    })();

    // 현재 상영 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/nowPlaying')
      ).json();
      setNowPlayingMovies(results);
    })();

    // 상영 예정 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/upcoming')
      ).json();
      setUpcomingMovies(results);
    })();
  }, []);
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      <section>
        <h2 className={styles.title}>😀 지금 가장 인기있는 영화</h2>
        <Link href="/popular">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <div className={styles.wrap}>
          {!popularMovies && <div>Loading...</div>}
          {popularMovies?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>🎞️ 현재 상영 중인 영화</h2>
        <Link href="/nowPlaying">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <div className={styles.wrap}>
          {!nowPlayingMovies && <div>Loading...</div>}
          {nowPlayingMovies?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
      <section>
        <h2 className={styles.title}>📌 상영 예정인 영화</h2>
        <Link href="/upcoming">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <div className={styles.wrap}>
          {!upcomingMovies && <div>Loading...</div>}
          {upcomingMovies?.map(movie => <Preview key={movie.id} movie={movie} />)}
        </div>
      </section>
    </div>
  );
}
