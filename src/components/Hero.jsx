import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from "react-icons/fa";
import LightRays from './LightRays/LightRays';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* LightRays as Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Foreground Content */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg sm:text-xl font-semibold">Hello, I am</p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black my-4 text-yellow-400">
          MERN Stack Developer
        </h1>

        <p className="max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg">
          Full Stack MERN Developer | Building Scalable Web Apps with MongoDB, Express, React & Node |
          Passionate About Clean Code & Seamless UX
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="relative group cursor-pointer">
            <span
              className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ease-in-out transform"
            ></span>
            <span
              className="relative px-6 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none font-semibold text-slate-800"
            >
             H!re Me
            </span>
          </button>
          {/* <button className="bg-yellow-400 px-6 py-3 rounded text-black font-semibold 
                             hover:bg-yellow-300 hover:shadow-lg hover:scale-105 
                             active:scale-95 active:shadow-md 
                             transition-all duration-300 ease-in-out transform">
            Hire Me
          </button> */}

          <a
            href="https://drive.google.com/file/d/1akS901QYejbao8bF9lfPtEXFGoVQCDZP/view?usp=drive_link"
            download
            className="flex items-center justify-center gap-2 border border-yellow-400 px-6 py-3 rounded 
                       hover:bg-yellow-500 hover:text-black hover:scale-105 
                       transition-all duration-300 ease-in-out font-semibold 
                       text-white transform"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
