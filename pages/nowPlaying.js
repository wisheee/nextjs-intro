import { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import Movie from "../components/movies/Movie";
import Loading from "../components/Loading";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const onClick = () => {
    setPage(prev => prev + 1);
  }
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`/api/movies/nowPlaying/${page}`)
      ).json();
      setMovies(prev => [...prev, ...results]);
    })();
  }, [page]);
  
  return (
    <>
      <div className="container">
        <NextSeo 
          title="Wishee 영화관 | 현재상영"
          description="현재 상영 중인 영화 목록입니다"
        />
        {!movies && <Loading />}
        {movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
      <button onClick={onClick} className="moreBtn">더보기</button>
    </>
  );
}
