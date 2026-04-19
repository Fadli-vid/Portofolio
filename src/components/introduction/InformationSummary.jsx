const InformationSummary = ({ item }) => {
  return (
    // Ganti bg-[#F6EBFE] dengan warna primer transparan agar tetap berwarna ungu tapi transparan di dark mode
    <div className={`bg-picto-primary/10 text-center transition-colors duration-300`}>
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[17px]">
        <p
          // Ganti text-gray-700 menjadi text-base-content
          className={`text-[16px] xxs:text-[18px] sm:text-[32px] font-semibold text-base-content`}
        >
          {item.description}
        </p>
        <p
          // Ganti text-gray-500 menjadi text-base-content dengan opacity-70
          className={`text-[8px] xxs:text-[9px] sm:text-[16px] font-normal px-[0.90rem] sm:px-[1rem] text-wrap text-base-content opacity-70`}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;
