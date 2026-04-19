import Fadli from "../../assets/Fadli.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "8 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "50+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "45+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      {/* Tambahkan text-base-content di container utama teks */}
      <div className="w-full flex flex-col justify-between max-lg:text-center text-base-content">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Fadli Santoso Murmita
            </span>
          </p>
          {/* Teks opacity-80 untuk menyelaraskan abu-abu dinamis */}
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 opacity-80">
           I'm an Informatics student based in Depok, Indonesia, with a strong passion for <span className="bg-highlight">development</span> and <span className="bg-highlight">design</span>. I specialize in crafting web applications and digital experiences that are thoughtfully built, minimalistic, and user-focused—blending clean code with artistic creativity to deliver both functionality and aesthetic excellence.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1 rounded-md overflow-hidden shadow-sm">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          // Hapus bg-white dan ganti dengan dinamis bg-base-200. Ganti shadow static ke dinamis.
          className={`shadow-2xl shadow-black/10 dark:shadow-white/5 w-full h-full absolute bottom-0 object-cover bg-base-200 rounded-3xl transition-colors duration-300`}
          src={Fadli}
          alt="Fadli"
        />
      </div>
    </div>
  );
};

export default Introduction;
