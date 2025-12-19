import React from "react";
import Particles from "./Particles/Particles";
import ProjectsSectionSwiper from "./ProjectsSectionSwiper";

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
      image: "/assests/greenbasket.jpg",
      title: "GreenBasket E-commerce grocery Mangement system",
      description: "GreenBasket E-commerce grocery Mangement system with Role-Base Authentication (User, Admin, Delivery)",
      tags: ["Node.js", "MongoDB", "Cloudinary", "Multer"],
      demoUrl: "https://greenbasket-lac.vercel.app/",
    },
     {
      image: "/assests/Crm.jpg",
      title: "Employee Mangement System",
      description: "Live voice recording with download option.",
      tags: ["Node.js", "MongoDB", "Cloudinary", "Multer"],
      demoUrl: "https://crm-nu-cyan.vercel.app/admin/login",
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
      image: "/assests/ecommerce.jpg",
      title: "E-commerce UI",
      description: "A UI design concept for an ecommerce fashion website.",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://ecommercefashion-2024.netlify.app/",
    },
    {
      image: "/assests/Audio.jpg",
      title: "Audio Recorder",
      description: "Live voice recording with download option.",
      tags: ["Node.js", "MongoDB", "Cloudinary", "Multer"],
      demoUrl: "https://audio-record-silk.vercel.app/",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          speed={0.1}
        />
      </div>

      {/* Content */}
      <section
        id="projects"
        className="relative z-10 py-20 px-4 sm:px-10 text-white"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          My Featured Projects
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Real-world applications built with full-stack technology and responsive design.
        </p>

        {/* ✅ SWIPER USED HERE */}
        <ProjectsSectionSwiper projects={projects} />
      </section>
    </div>
  );
};

export default MyProjects;
