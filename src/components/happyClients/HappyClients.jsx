import { SiNextdotjs, SiLaravel, SiDocker, SiReact, SiFigma } from "react-icons/si";
import { FaPenNib } from "react-icons/fa";

const learningData = [
  { name: "Next.js", icon: SiNextdotjs, color: "" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Affinity Designer", icon: FaPenNib, color: "#1B5AA9" },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2" id="learning">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div className="max-w-144.25 text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
        <p className="section-title mb-6">Currently Learning</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I'm continuously improving my skills by exploring modern technologies, frameworks, and design tools to build better digital experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 mt-10 md:mt-16 w-full max-w-6xl">
        {learningData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center gap-4 bg-base-100/50 backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-sm border border-base-content/10 transition-all duration-300 hover:shadow-md hover:-translate-y-1.5 hover:border-picto-primary animate-fade-up"
              style={{ animationDelay: `${200 + (index * 100)}ms` }}
            >
              <Icon 
                className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" 
                style={{ color: item.color }} 
                aria-label={item.name}
              />
              <span className="text-sm sm:text-base font-medium text-base-content transition-colors duration-300 group-hover:text-picto-primary text-center leading-tight">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HappyClients;
