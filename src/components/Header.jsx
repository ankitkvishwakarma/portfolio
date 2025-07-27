import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaSun, FaMoon, FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Project", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300"
    >
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center">
        <div className="relative flex gap-2 bg-transparent rounded-full px-4 py-2 max-w-[800px] w-full">
          {navItems.map(({ name, path }) => {
            const isActive = currentPath === path;
            return (
              <div key={name} className="relative z-10 cursor-pointer">
                <Link to={path}>
                  <button
                    className={`relative px-5 py-2 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out rounded-full overflow-hidden transform hover:scale-105 ${
                      isActive ? "text-white" : "text-white"
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          layoutId="highlight"
                          className="absolute inset-0 bg-sky-900 rounded-full z-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10 flex items-center gap-1">
                      {name}
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ rotate: 360 }}
            onClick={() => setDarkMode(!darkMode)}
            className="ml-auto p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition text-white"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex sm:hidden justify-between items-center">
        <div className="text-xl font-bold text-white">MyApp</div>
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ rotate: 360 }}
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-white"
          >
            {darkMode ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon />
            )}
          </motion.button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className="sm:hidden fixed top-16 left-0 w-4/5 h-full bg-black/70 backdrop-blur-md shadow-lg z-40 p-6 space-y-4"
          >
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`block text-lg font-medium transition-all ${
                  currentPath === path ? "text-rose-500" : "text-white"
                }`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
