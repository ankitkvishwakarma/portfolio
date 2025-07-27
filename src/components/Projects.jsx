import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white p-10 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-yellow-400 rounded">All</button>
        <button className="px-4 py-2 border border-yellow-400 rounded">UI/UX</button>
        <button className="px-4 py-2 border border-yellow-400 rounded">Web</button>
        <button className="px-4 py-2 border border-yellow-400 rounded">App</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Replace with actual images or components */}
        <div className="bg-gray-700 h-48 rounded-lg"></div>
        <div className="bg-gray-700 h-48 rounded-lg"></div>
        <div className="bg-gray-700 h-48 rounded-lg"></div>
      </div>
    </motion.section>
  );
};

export default Projects;
