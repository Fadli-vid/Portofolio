const MonoBlog = ({ data }) => {
  return (
    <div className="bg-base-100 rounded-xl overflow-hidden shadow-md shadow-black/5 dark:shadow-white/5 border border-base-content/10 transition-all duration-300 hover:shadow-xl">
      <img src={data?.image} alt={data?.title} className="w-full h-48 object-cover" />
      <div className="p-5 text-base-content">
        <div className="flex justify-between items-center text-xs opacity-60 mb-3">
          <span>{data?.date}</span>
          <span>{data?.comments} Comments</span>
        </div>
        <h3 className="text-lg font-semibold leading-tight mb-4 hover:text-picto-primary transition-colors">
          <a href={data?.link}>{data?.title}</a>
        </h3>
        <a 
          href={data?.link} 
          className="text-picto-primary font-medium text-sm hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default MonoBlog;
