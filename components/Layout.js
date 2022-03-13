import Header from "./Header";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <div>{children}</div>
    </>
  );
}