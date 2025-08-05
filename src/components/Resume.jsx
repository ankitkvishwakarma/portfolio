import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGlobe,
  FaHtml5
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { MdKeyboardVoice } from "react-icons/md";
import { SiMongodb, SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";
import profileImg from '../assets/profileimg.jpg';

const Resume = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans p-4 sm:p-6 flex justify-center items-start">
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">

        {/* LEFT SIDE – Profile + Info */}
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:w-1/2">

          {/* Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="p-[6px] rounded-full mx-auto bg-gradient-to-tr from-teal-400 to-cyan-500 animate-pulse shadow-lg shadow-cyan-500/50"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="rounded-full w-60 h-60 object-cover object-top border-4 border-gray-900"
            />
          </motion.div>

          {/* Name and Role */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h1 className="text-2xl font-bold">Ankit Kr. Vishwakarma</h1>
            <p className="text-sm text-gray-400">MERN Stack Developer</p>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-2 text-xl">
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaFacebookF /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTwitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaYoutube /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedinIn /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaGithub /></motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full text-left mt-4"
          >
            <div className="mt-10">
              <h2 className="text-lg font-semibold border-b border-black pb-1 mb-4">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Programming Languages:</strong> Java, JavaScript, Python
                  </li>
                  <li>
                    <strong>Frameworks:</strong> React.js, Tailwind CSS, Next.js
                  </li>
                  <li>
                    <strong>Web Technologies:</strong> HTML, CSS, Node.js, Express.js, API
                  </li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Databases:</strong> MongoDB, MySQL
                  </li>
                  <li>
                    <strong>Version Control:</strong> Git, GitHub
                  </li>
                  <li>
                    <strong>Concepts:</strong> Data Structures & Algorithms (Java), OOP, MVC
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full text-left"
          >
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <div className="text-sm text-gray-300 space-y-2">
              <p>
                <strong>Master of Computer Applications (MCA)</strong><br />
                Marwari College, Ranchi University – Nov 2023 to June 2025<br />
                <span className="text-teal-400">CGPA: 9.0</span>
              </p>
              <p>
                <strong>Bachelor of Science in Computer Applications (BCA)</strong><br />
                Nilamber Pitamber University – Aug 2018 to June 2022<br />
                Medininagar, Palamu, Jharkhand<br />
                <span className="text-teal-400">CGPA: 7.7</span>
              </p>
            </div>

          </motion.div>
        </div>

        {/* RIGHT SIDE – Projects & Languages */}
        <div className="lg:w-1/2 space-y-9">

          {/* Projects */}
          <div>
            <button
              className="w-full flex justify-between items-center text-left text-xl font-semibold mb-2"
              onClick={() => setShowProjects(!showProjects)}
            >
              Projects <span>{showProjects ? '−' : '+'}</span>
            </button>
            {showProjects && (
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-lg">Smart Placement System</h3>
                  <p className="text-sm">AI Interviewer module, Resume Scanner, Admin panel</p>
                  <div className="flex gap-2 text-xl mt-1">
                    <FaReact title="React" />
                    <TbBrandNextjs title="Next.js" />
                    <SiMongodb title="FireBase" />
                    <SiTailwindcss title="Tailwind CSS" />
                    <SiFramer title="Framer Motion" />
                    <MdKeyboardVoice title="voice assistance" />
                  </div>
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    className="text-teal-400 underline text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Grocery Web App</h3>
                  <p className="text-sm">E-commerce site with cart, filter, and search features</p>
                  <div className="flex gap-2 text-xl mt-1">
                    <FaReact />
                    <FaNodeJs />
                    <FaDatabase />
                    <FaHtml5 />
                  </div>
                  <a
                    href="https://github.com/your-grocery-app"
                    target="_blank"
                    className="text-teal-400 underline text-sm"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Languages */}
          <div>
            <button
              className="w-full flex justify-between items-center text-left text-xl font-semibold mb-2"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              Languages <span>{showLanguages ? '−' : '+'}</span>
            </button>
            {showLanguages && (
              <ul className="text-sm list-disc list-inside space-y-1 text-gray-300">
                <li>English – Fluent</li>
                <li>Hindi – Native</li>
                <li>Bhojpuri – Conversational</li>
              </ul>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mt-6"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">
              🏆 Certifications & Achievements
            </h2>

            <div className="space-y-6 text-sm text-gray-300">

              {/* GFG */}
              <div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/gfg-logo.png"
                    alt="GeeksforGeeks"
                    className="w-5 h-5"
                  />
                  <a
                    href="https://auth.geeksforgeeks.org/user/your_username"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Solved 300+ problems on GeeksforGeeks
                  </a>
                </div>
                <div className="bg-gray-700 rounded-full h-2 w-full mt-1">
                  <div
                    className="bg-green-400 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              {/* LeetCode */}
              <div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/leetcode-logo.png"
                    alt="LeetCode"
                    className="w-5 h-5"
                  />
                  <a
                    href="https://leetcode.com/your_username"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Solved 250+ problems on LeetCode
                  </a>
                </div>
                <div className="bg-gray-700 rounded-full h-2 w-full mt-1">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>

              {/* CodeChef */}
              <div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/codechef-logo.png"
                    alt="CodeChef"
                    className="w-5 h-5"
                  />
                  <span>Participated in multiple coding contests on CodeChef</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Resume;
