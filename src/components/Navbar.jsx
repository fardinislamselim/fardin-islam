import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLayerGroup,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 4, link: "skills", label: "Skills" },
    { id: 3, link: "projects", label: "Projects" },
    { id: 5, link: "contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/mdfardinislamselim/",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/fardinislamselim/",
    },
    { id: 3, icon: <FaGithub />, link: "https://github.com/fardinislamselim" },
    {
      id: 4,
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/mdfardinislamselim/",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center w-full h-24 px-8 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white fixed z-50 transition-colors duration-300">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="text-blue-500 text-3xl"></div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Fardin<span className="text-blue-500"> Islam</span>
          </h1>
        </div>

        {/* Center Navigation Links */}
        <ul className=" md:flex hidden items-center gap-6 bg-transparent">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              onClick={() => setActiveLink(link)}
              className={`cursor-pointer px-4 py-2 rounded-md font-medium text-sm transition-all duration-200
              ${
                activeLink === link
                  ? "bg-blue-100 text-blue-600 font-bold dark:bg-gray-800 dark:text-blue-400"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              }`}
            >
              <a href={`#${link}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Right Side: Socials + Theme Toggle + Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-3">
            {socialLinks.map(({ id, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <div
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors ml-2"
          >
            {darkMode ? (
              <FaSun size={20} className="text-yellow-400" />
            ) : (
              <FaMoon size={20} className="text-gray-600" />
            )}
          </div>

          {/* Mobile/Menu Button */}
          <div
            onClick={() => setNav(!nav)}
            className="md:hidden flex w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white cursor-pointer shadow-md hover:bg-blue-600 transition-colors"
          >
            {nav ? <FaTimes size={20} /> : <HiMenuAlt3 size={24} />}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.ul
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white z-40"
            >
              {/* Close Button inside menu for better UX if needed, but top right button handles it */}

              {links.map(({ id, link, label }) => (
                <li
                  key={id}
                  className="px-4 py-4 text-2xl cursor-pointer capitalize font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 duration-200"
                >
                  <a onClick={() => setNav(false)} href={`#${link}`}>
                    {label}
                  </a>
                </li>
              ))}

              {/* Mobile Socials */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map(({ id, icon }) => (
                  <div
                    key={id}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
