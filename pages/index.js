import Image from "next/image";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch('/api/movies/popular')
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
          gap: 2rem;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}