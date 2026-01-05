import { motion } from "framer-motion";

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
      title: "paws-comfort",
      src: "https://i.ibb.co.com/hF7FnxFF/Screenshot-2025-12-06-144016.png",
      description:
        "WarmPaws is a modern, fully responsive SPA that provides pet owners with essential winter care resources and services in a warm, user-friendly experience.",
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

  return (
    <div
      id="projects"
      name="projects"
      className="w-full text-white md:min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100">
            Projects
          </p>
          <p className="py-6 text-gray-700 dark:text-gray-300">
            Check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, title, description, techStack, demo, code }) => (
              <motion.div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 bg-white dark:bg-gray-900 flex flex-col justify-between"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={title}
                  className="rounded-t-md duration-200 hover:opacity-80 w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-2 py-1 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-blue-300 rounded-md border border-blue-100 dark:border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-auto">
                    <button
                      onClick={() => window.open(demo, "_blank")}
                      className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 text-white rounded-md font-medium shadow-md"
                    >
                      Demo
                    </button>
                    <button
                      onClick={() => window.open(code, "_blank")}
                      className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-105 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      Code
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
