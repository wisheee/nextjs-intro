import Image from "next/image";
import styles from "../styles/Movie.module.scss";

export default function Movie({ movie }) {
  return (
    <div className={styles.wrap}>
      <figure className={styles.img}>
        <Image 
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          layout='fill'
        />
      </figure>
      <h4 className={styles.title} title={movie.original_title}>{movie.original_title}</h4>
    </div>
  );
}