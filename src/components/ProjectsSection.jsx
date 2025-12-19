import { useRef } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects = [] }) {
  const sliderRef = useRef(null);
  const isSlider = projects.length > 4;

  const CARD_WIDTH = 320; // ProjectCard width + gap

  const scroll = (offset) => {
    sliderRef.current?.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  };

  if (!projects.length) return null;

  return (
    <div className="relative w-full">
      {isSlider && (
        <>
          <button
            onClick={() => scroll(-CARD_WIDTH)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10
            bg-gray-800/80 p-3 rounded-full text-white"
          >
            ◀
          </button>

          <button
            onClick={() => scroll(CARD_WIDTH)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10
            bg-gray-800/80 p-3 rounded-full text-white"
          >
            ▶
          </button>
        </>
      )}

      <div
        ref={sliderRef}
        className={
          isSlider
            ? "flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
        }
      >
        {projects.map((project, i) => (
          <div key={i} className="snap-start">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
