import styles from "../styles/modules/Loading.module.scss";

export default function Loading() {
  return (
    <svg className={styles.loading} viewBox="0 0 100 100">
      <circle cx="50%" cy="50%" r="25"></circle>
    </svg>
  );
}