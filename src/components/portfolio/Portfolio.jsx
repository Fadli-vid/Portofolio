import { useState } from "react";
import Projects from "./Projects";
import dinopedia from "../../assets/images/portfolio-images/Dinopedia.png";
import skincare from "../../assets/images/portfolio-images/Basic_skincare_analyzer.png";
import technichian from "../../assets/images/portfolio-images/Technichian.png";
import computer from "../../assets/images/portfolio-images/Computer.png";
import schedule from "../../assets/images/portfolio-images/Jadwal Kuliah.jpg";
import sanyo from "../../assets/images/portfolio-images/sanyonaraservice.png";
import akalaundry from "../../assets/images/portfolio-images/Akalaundry.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCube, faPalette, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const sidePortfolios = [
  {
    id: 1,
    title: "3D Design Portfolio",
    handle: "@fafa_3d",
    description:
      "A creative showcase of my 3D design and modeling work crafted as part of my passion for 3D art and visual asset design.",
    link: "https://www.instagram.com/fafa_3d?igsh=Z291dWJvbmQ1MXBj",
    icon: faCube,
  },
  {
    id: 2,
    title: "Pixel Art Portfolio",
    handle: "@faxel.art",
    description:
      "A dedicated gallery of retro-inspired pixel art creations and digital illustrations developed through my creative design hobbies.",
    link: "https://www.instagram.com/faxel.art?igsh=dmF0ZXM2bHg0a2F6",
    icon: faPalette,
  },
];

const projectData = [
  {
    id: 1,
    image: dinopedia,
    category: "Full Stack Web, JavaScript, Next.js, Tailwind CSS",
    title: "Dinosaur Wiki",
    description:
      "Dinopedia is an encyclopedia-style web platform for science and prehistoric knowledge exploring various dinosaur species. Designed with a modern UI, research-backed and accurate information, and relevant interactive features.",
    link: "https://dino-pedia.vercel.app/",
  },
  {
    id: 2,
    image: skincare,
    category: "Full Stack Web, JavaScript, Next.js",
    title: "Basic Skincare Ingredient Analyzer",
    description:
      "A web platform focused on analyzing skincare ingredient compatibility and safety tailored to individual skin profiles. Technically designed for ease of use, leveraging AI technology, detailed information, and smart recommendations.",
    link: "https://basic-skincare-ingredient-analyzier.vercel.app/",
  },
  {
    id: 3,
    image: sanyo,
    category: "Landing Page, Vite, TypeScript, SEO, Figma",
    title: "Sanyonara Service - AC & Electronics Repair",
    description:
      "A client project for Sanyonara Service (MSME/UMKM). Built an informative landing page and information system showcasing services, pricing, about us, contact, and location details, optimized for SEO and indexed on Google Search.",
    link: "https://www.sanyonaraservice.web.id/",
  },
  {
    id: 4,
    image: computer,
    category: "Full Stack Web, PHP, Bootstrap",
    title: "Computer & Laptop Repair Booking System",
    description:
      "An on-demand computer and laptop repair booking web platform featuring a multi-role system for customers, admins, and technicians. Designed for effortless service requests by users, robust admin monitoring and management, and streamlined task tracking for technicians.",
    link: "http://teknojago2.ct.ws",
  },
  {
    id: 5,
    image: schedule,
    category: "APK, Flutter, Dart",
    title: "School Schedule",
    description:
      "My first mobile application project, a course planner app built to help students manage schedules. Features include tracking course names, class days, credit hours (SKS), room numbers, lecturer names, and other smart management tools.",
    link: "https://github.com/Fadli-vid/School-Schedule/releases/tag/1.0.0",
  },
  {
    id: 6,
    image: technichian,
    category: "Full Stack Web, PHP, Code Igniter",
    title: "On-Demand Home Electronics Repair Service",
    description:
      "An on-demand service booking web platform featuring a multi-role system for customers, admins, and technicians. Focused on seamless user booking experience, comprehensive admin monitoring and management, and job tracking tools for technicians.",
    link: "http://teknojago.ct.ws",
  },
  {
    id: 7,
    image: akalaundry,
    category: "Full Stack Web, PHP, CodeIgniter 4, Bootstrap",
    title: "AKA Laundry - Order Tracking & Management System",
    description:
      "A laundry order monitoring and tracking system for AKA Laundry with a 3-role ecosystem: admins managing overall operations, washers updating real-time washing status, and customers viewing pricing, company info, and tracking their laundry order progress.",
    link: "https://laundrykuporject.great-site.net/",
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectData : projectData.slice(0, 6);

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
          {visibleProjects.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {projectData.length > 6 && (
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold cursor-pointer"
          >
            {showAll ? "Show Less" : "More Project"}
          </button>
        </div>
      )}

      {/* Side Portfolio Section */}
      <div className="mt-20 pt-10 border-t border-base-content/10">
        <div className="text-center max-w-144.25 mx-auto mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-base-content">
            Side Portfolios & Creative Hobbies
          </h3>
          <p className="font-normal text-sm md:text-base pt-3 opacity-70 text-base-content">
            Explore my digital art, 3D designs, and visual creations crafted on Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sidePortfolios.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-base-100 p-6 md:p-8 border border-base-content/10 shadow-md shadow-black/5 dark:shadow-white/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-500" />
                    <h4 className="text-xl font-bold text-base-content group-hover:text-picto-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center text-picto-primary shrink-0">
                    <FontAwesomeIcon icon={item.icon} className="text-lg" />
                  </div>
                </div>
                <p className="text-xs font-semibold text-picto-primary mb-3">{item.handle}</p>

                <p className="opacity-80 text-base-content text-xs xxs:text-[14px] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="btn hover:border-picto-primary hover:text-picto-primary bg-base-100 text-base-content border border-base-content/20 text-sm font-semibold hover:gap-3 transition-all duration-300 w-full flex items-center justify-center gap-2"
              >
                Visit Instagram
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
