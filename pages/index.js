import { useState, useEffect } from "react";
import Link from "next/link";
import Preview from "../components/movies/Preview";
import Seo from "../components/Seo";
import styles from "../styles/modules/Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState();
  const [nowPlayingMovies, setNowPlayingMovies] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState();
  useEffect(() => {
    // 인기 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/popular/1')
      ).json();
      setPopularMovies(results);
    })();

    // 현재 상영 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/nowPlaying/1')
      ).json();
      setNowPlayingMovies(results);
    })();

    // 상영 예정 영화 fetch
    (async () => {
      const { results } = await (
        await fetch('/api/movies/upcoming/1')
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
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {popularMovies?.map(movie => (
            <SwiperSlide key={movie.id}>
              <Preview movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <h2 className={styles.title}>🎞️ 현재 상영 중인 영화</h2>
        <Link href="/nowPlaying">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {nowPlayingMovies?.map(movie => (
            <SwiperSlide key={movie.id}>
              <Preview movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section>
        <h2 className={styles.title}>📌 상영 예정인 영화</h2>
        <Link href="/upcoming">
          <a className={styles.viewMore}>더보기</a>
        </Link>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {upcomingMovies?.map(movie => (
            <SwiperSlide key={movie.id}>
              <Preview movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
