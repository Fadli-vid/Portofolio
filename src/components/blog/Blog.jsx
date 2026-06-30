import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

import {
  faReact,
  faFigma,
  faNodeJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faChartLine, faPenNib } from "@fortawesome/free-solid-svg-icons";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const skillsData = [
  {
    id: 1,
    category: "Frontend",
    description: "Membangun antarmuka pengguna yang interaktif dan responsif.",
    skills: [
      { name: "React", icon: faReact },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJs },
    ]
  },
  {
    id: 2,
    category: "Backend",
    description: "Membuat logika server dan API yang handal serta aman.",
    skills: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Python", icon: faPython },
      { name: "Database", icon: faDatabase },
    ]
  },
  {
    id: 3,
    category: "Data Analyst",
    description: "Menganalisis data untuk menghasilkan insight berharga.",
    skills: [
      { name: "Python", icon: faPython },
      { name: "SQL", icon: faDatabase },
      { name: "Data Viz", icon: faChartLine },
    ]
  },
  {
    id: 4,
    category: "Design",
    description: "Merancang UI/UX yang indah, estetis, dan mudah digunakan.",
    skills: [
      { name: "Figma", icon: faFigma },
      { name: "UI/UX", icon: faPenNib },
    ]
  }
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative transition-colors duration-300" id="skills">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6 text-base-content">My Skills</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-base-content opacity-70">
          Berikut adalah detail dari beberapa skill dan teknologi yang saya kuasai di berbagai bidang.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="!pb-14"
      >
        {skillsData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="h-auto"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;

