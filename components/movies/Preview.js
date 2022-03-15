import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/modules/Preview.module.scss";

export default function Preview({ movie }) {
  return (
    <Link href={`/movies/${movie.title}/${movie.id}`}>
      <a className={styles.wrap}>
        <figure className={styles.img}>
          <Image 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <h4 className={styles.title} title={movie.title}>{movie.title}</h4>
        <h5 className={styles.date}>{movie.release_date.replaceAll('-', '/').substr(0, 7)}</h5>
      </a>
    </Link>
  );
}