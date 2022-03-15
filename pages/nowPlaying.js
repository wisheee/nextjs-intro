import { useState, useEffect } from "react";
import Movie from "../components/movies/Movie";
import Seo from "../components/Seo";
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
        <Seo title="현재상영" />
        {!movies && <Loading />}
        {movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
      <button onClick={onClick} className="moreBtn">더보기</button>
    </>
  );
}
