import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      title: "Smart Bills Manager",
      src: "https://i.ibb.co.com/99Cqzhc5/Screenshot-2025-12-06-144849.png",
      description:
        "A full-stack e-commerce application with cart functionality and payment gateway.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
      demo: "https://smart-bills-manager.web.app/",
      code: "https://github.com/fardinislamselim/smart-bills-client",
    },
    {
      id: 2,
      title: "Paws Comfort",
      src: "https://i.ibb.co.com/hF7FnxFF/Screenshot-2025-12-06-144016.png",
      description:
        "WarmPaws is a modern, fully responsive SPA that provides pet owners with essential winter care resources.",
      techStack: ["React", "Tailwind", "Firebase", "React Router"],
      demo: "https://paws-comfort.netlify.app/",
      code: "https://github.com/fardinislamselim/paws-comfort",
    },
    {
      id: 3,
      title: "Hero IO",
      src: "https://i.ibb.co.com/WWpZdRpC/Screenshot-2025-12-06-145453.png",
      description:
        "HERO.IO is a fast, clean, and responsive app download platform for easy browsing and downloading.",
      techStack: ["React", "Tailwind", "React Router"],
      demo: "https://heroio-apps.netlify.app/",
      code: "https://github.com/fardinislamselim/heroio-apps",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div
      id="projects"
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-black py-20 px-6"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-4xl font-black inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100 uppercase tracking-widest">
            Projects
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-400 text-lg">
            A small selection of my recent works
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolios.map(
            ({ id, src, title, description, techStack, demo, code }) => (
              <motion.div
                key={id}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl dark:shadow-black/40 border border-gray-100 dark:border-gray-800 flex flex-col transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href={demo} target="_blank" rel="noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"><FaExternalLinkAlt size={18} /></a>
                     <a href={code} target="_blank" rel="noreferrer" className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition-transform shadow-lg"><FaGithub size={20} /></a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-grow">
                    {description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <button
                      onClick={() => window.open(demo, "_blank")}
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg active:scale-95 shadow-blue-500/20"
                    >
                      Demo
                    </button>
                    <button
                      onClick={() => window.open(code, "_blank")}
                      className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-bold text-sm hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
