import { useState, useEffect } from "react";
import Detail from "../../components/movies/Detail";

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
      {movie && <Detail movie={movie} />}
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