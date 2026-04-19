import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div 
      // Hapus outline-[#FFFFFF], shadow-gray-300, dan border-gray-200. Ganti dengan warna berbasis tema
      className="max-w-106 rounded-lg bg-base-100 hover:shadow-2xl duration-300 transition-all shadow-md shadow-black/5 dark:shadow-white/5 border border-base-content/10"
    >
      <img src={data?.image} alt={`${data?.title} image`} className="rounded-t-lg" />
      <div className="p-4 xs:p-8">
        {/* Gunakan opacity untuk warna abu-abu yang otomatis mengikuti light/dark mode */}
        <p className="opacity-60 text-base-content text-xs font-medium">{data?.category}</p>
        
        {/* Ubah text-gray-900 menjadi text-base-content */}
        <p className="text-base-content text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        
        {/* Ubah text-gray-600 menjadi text-base-content dengan opacity */}
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="opacity-80 text-base-content text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        
        <a
          href={data?.link}
          // Ubah bg-white menjadi bg-base-100 dan tambahkan border agar tombol tidak terlihat menyatu dengan background
          className="btn hover:border-picto-primary hover:text-picto-primary bg-base-100 text-base-content border border-base-content/20 text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          Case Study
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
