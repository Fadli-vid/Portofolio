import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiPostgresql,
  SiPython, SiScikitlearn,
  SiFigma, SiBlender, SiAseprite, SiExcel
} from "react-icons/si";
import { FaPenNib, FaPalette } from "react-icons/fa";

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
    description: "Membangun antarmuka web modern, responsif, dan interaktif dengan fokus pada pengalaman pengguna.",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    id: 2,
    category: "Backend",
    description: "Mengembangkan logika aplikasi, REST API, autentikasi, dan pengelolaan database yang aman dan efisien.",
    skills: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "CodeIgniter", icon: SiCodeigniter, color: "#EE4323" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ]
  },
  {
    id: 3,
    category: "Data Analyst",
    description: "Mengolah, menganalisis, dan memvisualisasikan data untuk menghasilkan insight yang mendukung pengambilan keputusan.",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Excel", icon: SiExcel, color: "#217346" },
    ]
  },
  {
    id: 4,
    category: "Design",
    description: "Mendesain antarmuka, identitas visual, ilustrasi, dan aset 3D untuk menghasilkan produk digital yang menarik.",
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Blender 3D", icon: SiBlender, color: "#F5792A" },
      { name: "Affinity Designer", icon: FaPenNib, color: "#1B5AA9" },
      { name: "Canva", icon: FaPalette, color: "#00C4CC" },
      { name: "aseprite", icon: SiAseprite, color: "#7D7BB2" },
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

