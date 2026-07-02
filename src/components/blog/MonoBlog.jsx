const MonoBlog = ({ data }) => {
  return (
    <div className="bg-base-100 rounded-xl p-6 shadow-md shadow-black/5 dark:shadow-white/5 border border-base-content/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-base-content">{data.category}</h3>
      <p className="text-sm text-base-content opacity-70 mb-6 flex-grow">{data.description}</p>

      <div className="flex flex-wrap gap-3">
        {data.skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div key={index} className="group flex items-center justify-center gap-2 bg-base-200 px-3 py-2 rounded-lg text-sm font-medium text-base-content transition-all duration-300 hover:bg-base-300 hover:-translate-y-1 hover:shadow-md cursor-default">
              <IconComponent className="text-[18px] transition-transform duration-300 group-hover:scale-125" style={{ color: skill.color }} />
              <span className="leading-none">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonoBlog;
