import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";
import "./LightRays/LightRays";

const About = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white px-6 py-12 sm:px-12 md:px-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading with animated underline */}
      <div className="inline-block relative group mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          About Me
        </h2>
        {/* Animated underline */}
        <span className="block h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-2 rounded-full"></span>
      </div>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Hi, I'm Ankit Kumar Vishwakarma, a Full Stack Developer with a passion for creating dynamic and responsive web applications. I specialize in MERN stack development, leveraging MongoDB, Express.js, React.js, and Node.js to build robust and scalable solutions. My expertise extends to front-end and back-end development, ensuring seamless user experiences and efficient server-side functionality. I am dedicated to continuous learning and staying updated with the latest industry trends to deliver high-quality software solutions.
      </p>

      <div className="space-y-6 max-w-2xl mx-auto w-full">
        {/* You can add <SkillBar /> components here if needed */}
      </div>
    </motion.section>
  );
};

export default About;
