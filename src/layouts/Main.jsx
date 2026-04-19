import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    // Hapus data-theme={"light"} agar mengikuti tema dari document.documentElement
    <div className="relative bg-base-100 text-base-content transition-colors duration-300">
      <NavBar />
      <Outlet />
      <div className="bg-neutral text-neutral-content">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
