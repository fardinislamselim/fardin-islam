import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "skills", label: "Skills" },
    { id: 4, link: "projects", label: "Projects" },
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

  // Handle scroll effect (glassmorphism)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection based on scroll position
      const sections = links.map(l => document.getElementById(l.link));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav
      className={`fixed w-full h-20 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full px-4 md:px-12">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveLink("home");
          }}
        >
          <h1 className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Fardin<span className="text-blue-600 dark:text-blue-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors"> Islam</span>
          </h1>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map(({ id, link, label }) => (
            <li key={id}>
              <a
                href={`#${link}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
                  setActiveLink(link);
                }}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full
                ${
                  activeLink === link
                    ? "text-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
                }`}
              >
                {label}
                {activeLink === link && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 mx-4"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Socials + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Socials - Visible on Desktop */}
          <div className="hidden lg:flex gap-2">
            {socialLinks.map(({ id, icon, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-all duration-300 transform hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700 hidden lg:block mx-1"></div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all shadow-sm flex-shrink-0"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <FaSun size={16} className="text-yellow-400" />
            ) : (
              <FaMoon size={16} className="text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden z-[110] flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white cursor-pointer shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 active:scale-90 transition-all flex-shrink-0"
          >
            {nav ? <FaTimes size={18} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 w-full h-screen bg-white/10 dark:bg-black/20 backdrop-blur-[30px] z-[105] md:hidden flex flex-col justify-center items-center overflow-hidden"
            >
              {/* Background Decorative Elements */}
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-700/10 dark:bg-blue-500/10 rounded-full blur-[100px]" />

              {/* Close Button UI in Menu */}
              <div className="flex flex-col items-center justify-center gap-12 w-full px-6">
                <div className="flex flex-col items-center gap-8">
                  {links.map(({ id, link, label }, index) => (
                    <motion.div
                      key={id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <a
                        href={`#${link}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setNav(false);
                          document.getElementById(link).scrollIntoView({ behavior: 'smooth' });
                          setActiveLink(link);
                        }}
                        className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter transition-all duration-300 hover:scale-110 flex items-center gap-4 group
                        ${
                          activeLink === link 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                      >
                        <span className={`text-sm font-mono transition-opacity duration-300 ${activeLink === link ? "opacity-100" : "opacity-0 group-hover:opacity-100"} text-blue-600 dark:text-blue-400`}>0{id}</span>
                        {label}
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Socials & Footer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="h-[1px] w-24 bg-gray-200 dark:bg-gray-800" />
                  <div className="flex gap-6">
                    {socialLinks.map(({ id, icon, link }) => (
                      <a
                        key={id}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 shadow-md transform hover:-translate-y-2"
                      >
                        <span className="text-2xl">{icon}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Let's Connect</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
