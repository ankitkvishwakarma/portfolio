import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib, FaPalette, FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const services = [
  {
    title: "UI/UX",
    icon: <FaPenNib className="text-3xl text-pink-400 mb-3 group-hover:drop-shadow-glow transition-all duration-300" />,
    Discription: "UI Framework: React.js"
  },
  {
    title: "Graphics",
    icon: <FaPalette className="text-3xl text-yellow-300 mb-3 group-hover:drop-shadow-glow transition-all duration-300" />,
    Discription: "Figma, Canva"
  },
  {
    title: "Web Design",
    icon: <FaLaptopCode className="text-3xl text-blue-400 mb-3 group-hover:drop-shadow-glow transition-all duration-300" />,
    Discription: "HTML, CSS, Tailwind CSS, Node.js, Express.js, MongoDB"
  },
  {
    title: "Development",
    icon: <FaCode className="text-3xl text-green-400 mb-3 group-hover:drop-shadow-glow transition-all duration-300" />,
    Discription: "Backend + Frontend"
  },
  {
    title: "Creative Solutions",
    icon: <FaLightbulb className="text-3xl text-purple-400 mb-3 group-hover:drop-shadow-glow transition-all duration-300" />,
    Discription: "Provide better solutions"
  },
];

const Services = () => {
  return (
    <motion.section
      className="bg-gray-900 text-white px-4 sm:px-8 lg:px-20 py-16 sm:py-24 text-center min-h-[80vh]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative inline-block after:absolute after:content-[''] after:h-1 after:w-2/3 after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:bg-pink-500 after:rounded-full">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 transition-all hover:scale-105 hover:ring-2 hover:ring-pink-500/50 hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              {service.Discription}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
