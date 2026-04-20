import { useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      // Ganti bg-white -> bg-base-100, shadow-gray-300 -> shadow-black/5 atau dark:shadow-white/5
      className="p-4 xs:p-8 bg-base-100 hover:shadow-xl h-auto shadow-md shadow-black/5 dark:shadow-white/5 ease-out duration-700 rounded-lg my-6 flex relative overflow-hidden transition-all border border-base-content/5"
    >
      <div
        className={`bg-picto-primary absolute start-0 top-0 h-full w-0 transition-all duration-300 ${
          mouseHover ? "w-[5px]" : "w-0"
        }`}
      />
      <div className="text-base-content">
        {/* Ganti text-gray-900 -> text-base-content (otomatis) */}
        <p className="text-xl sm:text-2xl font-semibold pb-4">
          {role?.title}
        </p>
        {/* Ganti text-gray-700 -> opacity-70 */}
        <p className="text-[13px] sm:text-[16px] font-normal opacity-70">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
