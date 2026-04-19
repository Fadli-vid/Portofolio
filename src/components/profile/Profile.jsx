import Fadli2 from "../../assets/Fadli2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      // Ubah bg-white dan shadow-white menjadi dinamis (bg-base-100)
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-base-100 drop-shadow-2xl shadow-black/5 dark:shadow-white/5 max-xl:mb-5 xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 transition-colors duration-300`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              // Ubah bg-soft-white menjadi bg-base-200
              className="bg-base-200 h-[120%] object-cover transition-colors duration-300" 
              src={Fadli2}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              {/* Ubah bg-white menjadi bg-base-100 */}
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-base-100 rounded-[4px] center shadow-xl drop-shadow-xl shadow-black/10 transition-colors duration-300">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem] text-base-content">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am Junior User Interface Designer
          </h2>
          <div
            // Hapus text-gray-600, gunakan opacity agar di mode light/dark tetap serasi
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center opacity-80`} 
          >
            <p className={``}>
              I am an Informatics student with a strong focus on web development and digital design, dedicated to creating modern, minimalistic, and user-friendly applications. I combine technical expertise with a creative approach to build seamless digital experiences that are both functional and visually appealing.<br></br><br></br>  

              I am passionate about continuously learning and improving, striving to deliver carefully crafted solutions that enhance user comfort and interaction.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              My Projects
            </a>
            <a
              // Ubah bg-white menjadi bg-base-100, tambahkan border agar terlihat sbg outline
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 border border-base-content/20 hover:border-picto-primary bg-base-100 text-base-content duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="https://drive.google.com/drive/folders/1zDQ2pWP1ZlTinak6-pxAE776ksJjj3Aw?usp=sharing"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
