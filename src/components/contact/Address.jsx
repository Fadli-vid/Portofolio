import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      // Mengubah bg-white menjadi bg-base-200 agar terlihat popup/kontras di atas bg-base-100 dari Contact.jsx
      className="w-full sm:max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-base-200 hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg shadow-md shadow-black/5 dark:shadow-white/5 border border-base-content/5 max-sm:mx-auto transition-all"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`h-10 md:h-12 aspect-square transition-colors duration-300 ${
          // Ganti bg hardcode dengan versi opacity dari theme
          hover ? "bg-picto-primary" : "bg-picto-primary/10"
        } center rounded-[4px]`}
      >
        <FontAwesomeIcon
          icon={item?.icon}
          className={`text-lg md:text-xl transition-colors duration-300 ${
            hover ? "text-white" : "text-picto-primary"
          }`}
        />
      </div>
      <div className="ms-3.25 text-base-content">
        {/* Menghapus text-[#424E60], memakai opacity */}
        <p className="text-[12px] md:text-[14px] font-normal opacity-70">
          {item?.title}:
        </p>
        {/* Menghapus text-[#132238] */}
        <p className="text-[14px] md:text-[16px] font-medium">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default Address;
