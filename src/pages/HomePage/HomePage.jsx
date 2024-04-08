/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import HomeSection from "../../components/HomeSection/HomeSection";
import About from "../../components/About/About";

export default function HomePage() {
  return (
    <>
      <LogInNav />
      <div className="main-section-home flex w-full mt-[var(--navbar-height)]">
        <Sidebar />
        <HomeSection />
      </div>
      <Footer />
    </>
  );
}
