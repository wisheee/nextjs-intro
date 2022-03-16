import { useState, useEffect, useRef } from "react";
import Preview from "./Preview";
import styles from "../../styles/modules/PreviewFactory.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PreviewFactory({ movieType }) {
  const [movies, setMovies] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const onSwiperInit = (swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }
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
        onSwiperInit(swiper);
      }}
    >
      {movies?.map(movie => (
        <SwiperSlide key={movie.id}>
          <Preview movie={movie} />
        </SwiperSlide>
      ))}
      <button ref={prevRef} className={styles.button}>
        <span>이전</span>
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
      <button ref={nextRef} className={styles.button}>
        <span>다음</span>
        <FontAwesomeIcon icon={faRightLong} />
      </button>
    </Swiper>
  );
}