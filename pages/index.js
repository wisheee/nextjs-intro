import Movie from "../components/Movie";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map(movie => <Movie key={movie.id} movie={movie} />)}
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