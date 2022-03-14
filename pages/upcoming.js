import Movie from "../components/movies/Movie";
import Seo from "../components/Seo";

export default function Upcoming({ results }) {
  return (
    <div className="container">
      <Seo title="상영예정" />
      {results?.map(movie => <Movie key={movie.id} movie={movie} />)}
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movies/upcoming`)
  ).json();
  return {
    props: {
      results
    }
  };
}