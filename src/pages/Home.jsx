import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      
      <div className="bg-base-200 pt-30 transition-colors duration-300">
        <WorkProcess />
      </div>
      
      <Portfolio />
      
      <div className="bg-neutral text-neutral-content transition-colors duration-300">
        <WorkTogether />
      </div>
      
      <div className="blog-background">
        <Blog />
      </div>
      
      <div className="bg-base-200 transition-colors duration-300">
        <Profession />
      </div>
      
      <HappyClients />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
