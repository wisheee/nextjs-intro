import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/modules/Preview.module.scss";

export default function Preview({ movie }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div onClick={() => onClick(movie.id, movie.title)} className={styles.wrap}>
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
    </div>
  );
}