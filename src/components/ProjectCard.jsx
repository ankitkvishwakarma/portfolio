import React from "react";

const ProjectCard = ({ image, title, description, tags, demoUrl }) => {
  return (
    <div className="bg-[#0d1117]/80 backdrop-blur-lg text-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[300px] xl:w-[280px] flex flex-col h-full min-h-[450px]">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live Demo Button */}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 hover:bg-blue-700 text-white text-sm text-center px-4 py-2 rounded-full transition-colors duration-300"
          >
            🔗 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
