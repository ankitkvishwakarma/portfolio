export default function ProjectCard({
  image,
  title,
  description,
  tags,
  demoUrl,
}) {
  return (
    <div className="bg-[#0d1117] text-white rounded-xl shadow-md
    w-full sm:w-[300px] xl:w-[280px] flex-shrink-0 overflow-hidden">
      <img src={image} alt={title} className="w-full h-44 object-cover" />

      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-blue-400 font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 my-3">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-700 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded-full text-center"
          >
            🔗 Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
