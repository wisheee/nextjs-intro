import styles from "../../styles/modules/Movie.module.scss";

export default function Detail({ movie }) {
  console.log(movie);
  return (
    <div className={styles.wrap}>
      <figure className={styles.img}>
      </figure>
      <h4 className={styles.title} title={movie.original_title}>{movie.original_title}</h4>
    </div>
  );
}