import { useState, useEffect, useRef } from "react";
import Preview from "./Preview";
import styles from "../../styles/modules/PreviewFactory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PreviewFactory({ movieType }) {
  const [movies, setMovies] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`/api/movies/${movieType}/1`)
      ).json();
      setMovies(results);
    })();
  }, [movieType]);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      slidesPerGroup={3}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {movies?.map(movie => (
        <SwiperSlide key={movie.id}>
          <Preview movie={movie} />
        </SwiperSlide>
      ))}
      <button ref={prevRef} className={styles.button}>&lt;<span>이전</span></button>
      <button ref={nextRef} className={styles.button}>&gt;<span>다음</span></button>
    </Swiper>
  );
}