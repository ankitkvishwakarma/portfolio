import React from "react";
import ProjectCard from "./ProjectCard";
import Particles from "./Particles/Particles";

const MyProjects = () => {
  const projects = [
    {
      image: "/assests/placement.jpg",
      title: "College campus placement & virtual interview preparation",
      description:
        "An all-in-one college campus placement and virtual interview preparation",
      tags: ["Next.Js", "Tailwind CSS", "Firebase", "Voice Assistant"],
      demoUrl: "https://placement-cell-ai-interview.vercel.app/",
    },
    {
      image: "/assests/groccery.png",
      title: "Grocery Website",
      description:
        "Fully functional grocery website with backend, frontend, and end-to-end encryption",
      tags: ["React", "Redux", "Tailwind", "Express", "MongoDB"],
      demoUrl: "https://grocery-psi-blush.vercel.app/",
    },
    {
      image: "/assests/Audio.jpg",
      title: "Audio Recorder",
      description: "Live voice recording with download option.",
      tags: ["Node.js", "MongoDB", "Cloudinary", "Multer"],
      demoUrl: "https://audio-record-silk.vercel.app/",
    },
    {
      image: "/assests/ecommerce.jpg",
      title: "E-commerce UI",
      description: "A UI design concept for an ecommerce fashion website.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://ecommercefashion-2024.netlify.app/",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground content */}
      <section className="relative z-10 py-20 px-4 sm:px-10 text-white">
        {/* Animated Underline Heading */}
        <div className="text-center mb-6 relative group w-fit mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">My Featured Projects</h2>
          <div className="h-[3px] w-0 bg-yellow-400 mt-2 mx-auto rounded-full transition-all duration-500 group-hover:w-full" />
        </div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Real-world applications built with full-stack technology and responsive design.
        </p>

        {/* Projects Layout */}
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-6 xl:gap-10">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
