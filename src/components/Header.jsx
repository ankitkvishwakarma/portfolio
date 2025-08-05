import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaSun, FaMoon, FaBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", path: "/", notify: false },
  { name: "Services", path: "/services", notify: false },
  { name: "Project", path: "/projects", notify: false }, // updated path
  { name: "Profile", path: "/resume", notify: false },
  { name: "About", path: "/about", notify: false },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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
      className="fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300 backdrop-blur-md"
    >
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center">
        <div className="relative flex gap-2 bg-transparent rounded-full px-4 py-2 max-w-[800px] w-full">
          {navItems.map(({ name, path, notify }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                to={path}
                key={name}
                className="relative z-10 cursor-pointer"
              >
                <button
                  className={`relative px-5 py-2 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out rounded-full overflow-hidden transform hover:scale-105 cursor-pointer ${
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
                    {notify && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    )}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex sm:hidden justify-between items-center">
        <div className="text-xl font-bold text-white">ANKIT</div>
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ rotate: 360 }}
            onClick={toggleTheme}
            className="text-xl text-white"
          >
            {theme === "light" ? (
              <FaMoon />
            ) : (
              <FaSun className="text-yellow-300" />
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
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed top-0 left-0 h-full w-4/5 bg-black/70 backdrop-blur-lg z-40 p-6 pt-20 space-y-6"
          >
            {navItems.map(({ name, path, notify }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  to={path}
                  key={name}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-left text-lg font-medium flex items-center justify-between transition-all cursor-pointer ${
                    isActive ? "text-rose-500" : "text-white"
                  }`}
                >
                  {name}
                  {notify && (
                    <FaBell className="text-red-500 animate-bounce ml-2" />
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
