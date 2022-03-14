import Movie from "../components/movies/Movie";
import Seo from "../components/Seo";

export default function NowPlaying({ results }) {
  return (
    <div className="container">
      <Seo title="현재상영" />
      {results?.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies/nowPlaying`)
  ).json();
  return {
    props: {
      results
    }
  };
}