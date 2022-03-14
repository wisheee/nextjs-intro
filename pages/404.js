export default function NotFound() {
  return (
    <div>
      😥
      <span>404</span>
      <h3>페이지를 찾을 수 없습니다</h3>
      <style jsx>{`
        div {
          padding: 5rem 2rem;
          text-align: center;
          font-size: 4rem;
        }
        span {
          display: block;
        }
        h3 {
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}