/* eslint-disable no-unused-vars */
import LogInNav from "../../components/LogInNav/LogInNav";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import About from '../../components/About/About';
import HomeSection from "../../components/HomeSection/HomeSection";

export default function HomePage() {
  return (
    <div>
      <LogInNav/>
      <HomeSection />
      <Sidebar/>
      <Footer/>
    </div>
  )
}
