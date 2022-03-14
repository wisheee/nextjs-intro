import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Movie.module.scss";

export default function Movie({ movie }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div onClick={() => onClick(movie.id, movie.original_title)} className={styles.wrap}>
      <figure className={styles.img}>
        <Image 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          layout='fill'
        />
      </figure>
      <h4 className={styles.title} title={movie.original_title}>{movie.original_title}</h4>
    </div>
  );
}