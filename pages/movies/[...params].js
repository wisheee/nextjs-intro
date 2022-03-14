import { useState, useEffect } from "react";
import Detail from "../../components/movies/Detail";
import Seo from "../../components/Seo";

export default function MovieDetail({ params }) {
  const [title, id] = params;
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const data = await (
        await fetch(`/api/movies/${id}`)
      ).json();
      setMovie(data);
    })();
  }, [id]);
  
  return (
    <div>
      <Seo title={title} />
      {movie && <Detail movie={movie} />}
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}