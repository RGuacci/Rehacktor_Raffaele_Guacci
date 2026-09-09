import { Outlet, useLoaderData } from "react-router";
import Navbar from "../LayoutComponents/Navbar";
import Footer from "../LayoutComponents/Footer";
import SideBar from "../LayoutComponents/SideBar";
function Layout() {
  const genres = useLoaderData();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-8 gap-4">
        <aside className="lg:col-span-2 bg-nav-gray">
          <SideBar genres={genres} />
        </aside>

        <section className="lg:col-span-6 m-5">
          <Outlet />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
