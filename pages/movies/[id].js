import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const {
    query: {
      id, title
    } 
  } = router;
  return <h4>{id}, {title}</h4>;
}