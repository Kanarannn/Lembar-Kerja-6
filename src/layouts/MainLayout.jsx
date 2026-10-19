import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function MainLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main id="main" key={pathname} tabIndex={-1} className="page-enter flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
