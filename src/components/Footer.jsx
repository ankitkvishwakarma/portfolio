import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="transition transform hover:scale-110 hover:text-white hover:drop-shadow-[0_0_8px_#fff]"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="transition transform hover:scale-110 hover:text-blue-400 hover:drop-shadow-[0_0_8px_#60a5fa]"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:your@email.com"
          title="Email"
          className="transition transform hover:scale-110 hover:text-red-400 hover:drop-shadow-[0_0_8px_#f87171]"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 Ankit Vishwakarma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
