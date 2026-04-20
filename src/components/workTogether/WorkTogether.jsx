import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    // Pastikan container luar di Home.jsx menggunakan bg-neutral atau bg-base-300
    <div className="py-25 max-w-169 mx-auto px-2 transition-colors duration-300">
      <div className="text-center">
        {/* Gunakan text-neutral-content agar teks otomatis putih di latar gelap neutral */}
        <p className="text-neutral-content md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        {/* Mengganti warna hex statis dengan opacity agar tetap terlihat elegan */}
        <p className="text-neutral-content opacity-70 text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <a
          href="#!"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px] border-none group"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="lg"
            className="ms-3 transition-transform group-hover:translate-x-1"
            style={{ color: "#FFFFFF" }}
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
