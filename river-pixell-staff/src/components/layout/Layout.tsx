import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/Footer";

export function Layout() {
  return (
    <div className="layoutFlex">
      <Nav
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
