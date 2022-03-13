import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>홈</a>
      </Link>
      <Link href="/nowPlaying">
        <a className={router.pathname === '/nowPlaying' ? 'active' : ''}>현재상영</a>
      </Link>
      <Link href="/upcoming">
        <a className={router.pathname === '/upcoming' ? 'active' : ''}>상영예정</a>
      </Link>
      <Link href="/popular">
        <a className={router.pathname === '/popular' ? 'active' : ''}>인기영화</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 1rem 0 2rem;
        }
        a {
          width: 8rem;
          line-height: 3;
          font-size: 1.8rem;
          text-align: center;
        }
        a::after {
          content: '';
          display: block;
          border-bottom: 0.2rem solid #264ff0;
          transform: scaleX(0);
          transition: 0.3s ease-in-out;
        }
        a:hover::after {
          transform: scaleX(1);
        }
        .active::after {
          transform: scaleX(1);
        }
      `}</style>
    </nav>
  );
}