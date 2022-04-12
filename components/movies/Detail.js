import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import styles from "../../styles/modules/Detail.module.scss";

export default function Detail({ movie }) {
  const router = useRouter();

  return (
    <>
      <NextSeo 
        title={`Wishee 영화관 | ${movie.title}`}
        description={movie.overview}
        openGraph={{
          images: [
            {
              url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }
          ]
        }}
      />
      <div className={styles.wrap}>
        <figure className={styles.img}>
          <Image 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <h4 className={styles.title}>{movie.title} <span>({movie.release_date.substr(0, 4)})</span></h4>
        <div>
          {movie.genres.map(({ id, name }) => <span className={styles.genre} key={id}>{name}</span>)}
        </div>
        <ul className={styles.releaseInfo}>
          <li>{movie.release_date.replaceAll('-', '/')}</li>
          <li>{Math.floor(movie.runtime / 60)}시간 {Math.floor(movie.runtime % 60)}분</li>
        </ul>
        <h5 className={styles.tagline}>{movie.tagline}</h5>
        <section>
          <h6 className={styles.overviewTitle}>개요</h6>
          <p className={styles.overview}>{movie.overview}</p>
        </section>
        <div className={styles.btnWrap}>
          <button onClick={() => router.back()}>🔙 돌아가기</button>
        </div>
      </div>
    </>
  );
}