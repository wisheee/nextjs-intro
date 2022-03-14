import Movie from "../components/movies/Movie";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map(movie => <Movie key={movie.id} movie={movie} />)}
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