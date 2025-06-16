import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <div className="base-layout">
        <Header />
        <main className="main-container">
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
};
