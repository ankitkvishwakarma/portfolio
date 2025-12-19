import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProjectCard from "./ProjectCard";

export default function ProjectsSectionSwiper({ projects = [] }) {
  if (!projects || projects.length === 0) return null;

  // 4 ya kam → normal grid
  if (projects.length <= 4) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    );
  }

  // 5+ → Swiper
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="w-full"
    >
      {projects.map((project, i) => (
        <SwiperSlide key={i}>
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
