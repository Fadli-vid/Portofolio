import Projects from "./Projects";
import dinopedia from "../../assets/images/portfolio-images/Dinopedia.png";
import skincare from "../../assets/images/portfolio-images/Basic_skincare_analyzer.png";
import technichian from "../../assets/images/portfolio-images/Technichian.png";
import computer from "../../assets/images/portfolio-images/Computer.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: dinopedia,
    category: "Full Stack Web, JavaScript, Next.js, Tailwind CSS",
    title: "Dinosaur Wiki",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://dino-pedia.vercel.app/",
  },
  {
    id: 2,
    image: skincare,
    category: "Full Stack Web, JavaScript, Next.js",
    title: "Basic Skincare Ingredient Analyzer",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency.",
    link: "https://basic-skincare-ingredient-analyzier.vercel.app/",
  },
  {
    id: 3,
    image: technichian,
    category: "Full Stack Web, PHP, Code Igniter",
    title: "On-Demand Home Electronics Repair Service",
    description:
      "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
    link: "teknojago.ct.ws",
  },
  {
    id: 4,
    image: computer,
    category: "Full Stack Web, PHP, Bootstrap",
    title: "Computer & Laptop Repair Booking System",
    description:
      "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
    link: "teknojago2.ct.ws",
  },
  {
    id: 5,
    image: card5,
    category: "APK, Flutter, Dart",
    title: "School Schedule",
    description:
      "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
    link: "https://github.com/Fadli-vid/School-Schedule/releases/tag/1.0.0",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:px-4 transition-colors duration-300"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 opacity-70 text-base-content">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
