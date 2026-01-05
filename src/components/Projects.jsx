import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaExclamationTriangle, FaExternalLinkAlt, FaGithub, FaLaptopCode, FaRocket, FaServer, FaTimes } from "react-icons/fa";
import assetverseThumb from "../assets/assetverse-thumb.png";
import assetverseFull from "../assets/assetverse.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolios = [
    {
      id: 1,
      title: "Smart Bills Manager",
      thumbnail: "https://i.ibb.co.com/99Cqzhc5/Screenshot-2025-12-06-144849.png",
      fullImage: "https://i.ibb.co.com/99Cqzhc5/Screenshot-2025-12-06-144849.png",
      description:
        "A full-stack e-commerce application with cart functionality and payment gateway.",
      techStack: ["React", "Express.js", "MongoDB", "Node.js", "Tailwind CSS"],
      demo: "https://smart-bills-manager.web.app/",
      clientCode: "https://github.com/fardinislamselim/smart-bills-client",
      serverCode: "https://github.com/fardinislamselim/smart-bills-server",
      challenges: "Implementing complex state management for the shopping cart and ensuring real-time payment status updates were major hurdles. Synchronizing the frontend with Stripe's asynchronous webhooks required rigorous testing.",
      futurePlans: "Integration of an AI-powered expense forecasting system and adding support for multi-currency transactions."
    },
    {
      id: 2,
      title: "Paws Comfort",
      thumbnail: "https://i.ibb.co.com/hF7FnxFF/Screenshot-2025-12-06-144016.png",
      fullImage: "https://i.ibb.co.com/hF7FnxFF/Screenshot-2025-12-06-144016.png",
      description:
        "WarmPaws is a modern, fully responsive SPA that provides pet owners with essential winter care resources.",
      techStack: ["React", "Tailwind CSS", "Firebase Auth", "Framer Motion"],
      demo: "https://paws-comfort.netlify.app/",
      clientCode: "https://github.com/fardinislamselim/paws-comfort",
      challenges: "Designing a UI that was cozy and welcoming while maintaining performance was challenging. Managing several responsive glassmorphic components without causing layout thrashing required careful CSS optimization.",
      futurePlans: "Addition of a community pet-adoption forum and real-time vet consultation chat feature."
    },
    {
      id: 3,
      title: "Hero IO",
      thumbnail: "https://i.ibb.co.com/WWpZdRpC/Screenshot-2025-12-06-145453.png",
      fullImage: "https://i.ibb.co.com/WWpZdRpC/Screenshot-2025-12-06-145453.png",
      description:
        "HERO.IO is a fast, clean, and responsive app download platform for easy browsing and downloading.",
      techStack: ["React", "Custom CSS", "Axios", "Context API"],
      demo: "https://heroio-apps.netlify.app/",
      clientCode: "https://github.com/fardinislamselim/heroio-apps",
      challenges: "Scraping and verifying high-quality app metadata while keeping the search index fast was the biggest technical challenge. Optimizing image delivery for varying network conditions was also crucial.",
      futurePlans: "Implementing a desktop app version using Electron and a global user-rating system for verified apps."
    },
    {
      id: 4,
      title: "AssetVerse",
      thumbnail: assetverseThumb,
      fullImage: assetverseFull,
      description:
        "A robust B2B Corporate Asset Management System with role-based dashboards, automated requests, and live analytics.",
      techStack: ["React", "Firebase", "Node.js", "Stripe", "Recharts", "Tailwind CSS"],
      demo: "https://assets-verse.web.app/",
      clientCode: "https://github.com/fardinislamselim/Asset-Verse-client",
      serverCode: "https://github.com/fardinislamselim/Asset-Verse-server",
      challenges: "Implementing a multi-tenant role-based access control (RBAC) system for HR Managers and Employees was highly complex. Ensuring data isolation and real-time synchronization of asset requests required architectural precision.",
      futurePlans: "Integrating AI-driven predictive maintenance for hardware assets and expanding the platform to support multi-regional inventory tracking with localized compliance."
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
      className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-black py-20 px-6 relative"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-12 text-center md:text-left">
          <p className="text-4xl font-black inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100 uppercase tracking-widest">
            Projects
          </p>
          <p className="py-6 text-gray-600 dark:text-gray-400 text-lg">
            A deep-dive into my architectural and problem-solving journey
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolios.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -12 }}
              className="group relative bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-2xl dark:shadow-blue-900/10 border border-gray-100 dark:border-white/5 flex flex-col transition-all duration-500"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Modern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)} 
                    className="px-8 py-3 bg-white text-gray-900 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,255,255,0.3)] hover:bg-blue-600 hover:text-white transition-all"
                   >
                    View Case Study
                  </motion.button>
                </div>

                {/* Tech Badge for quick view */}
                <div className="absolute top-4 left-4 flex gap-2">
                   <div className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      {project.techStack[0]}
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Project {project.id}</span>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg border border-blue-100/50 dark:border-blue-800/50">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 self-center">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                   <button 
                     onClick={() => setSelectedProject(project)}
                     className="group/btn relative text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                   >
                     View Details
                     <div className="w-0 h-[2px] bg-blue-600 absolute bottom-0 left-0 transition-all duration-300 group-hover/btn:w-full" />
                   </button>

                   <div className="flex gap-3">
                     <a href={project.clientCode} target="_blank" rel="noreferrer" title="Codebase" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                        <FaGithub size={18} />
                     </a>
                     <a href={project.demo} target="_blank" rel="noreferrer" title="Live Preview" className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-white/5 text-gray-500 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                        <FaExternalLinkAlt size={16} />
                     </a>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 lg:p-8 bg-gray-900/60 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-black w-full max-w-7xl max-h-[94vh] overflow-y-auto rounded-[3.5rem] shadow-[0_0_150px_rgba(0,0,0,0.8)] relative border border-white/10 scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modern Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-red-500 backdrop-blur-md rounded-full text-white transition-all z-[160] border border-white/10 group active:scale-90"
              >
                <FaTimes size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="flex flex-col">
                {/* Immersive Header Design */}
                <div className="relative w-full h-[55vh] min-h-[400px] overflow-hidden group/header">
                  <div className="absolute inset-0">
                    <img 
                      src={selectedProject.fullImage} 
                      alt="" 
                      className="w-full h-full object-cover scale-150 blur-3xl opacity-30 transition-transform duration-[3000ms] group-hover/header:rotate-6" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
                  </div>

                  <div className="relative h-full flex items-center justify-center p-8 lg:p-12">
                     <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative z-10 w-full max-w-5xl"
                     >
                        <img 
                          src={selectedProject.fullImage} 
                          alt={selectedProject.title} 
                          className="w-full h-auto max-h-[40vh] object-contain rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/10 transform hover:scale-[1.01] transition-transform duration-500"
                        />
                     </motion.div>
                  </div>

                  <div className="absolute bottom-12 left-8 md:left-16 z-20 max-w-3xl">
                     <motion.span 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="inline-block px-4 py-1.5 bg-blue-600 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6"
                     >
                       Full Stack Web Development
                     </motion.span>
                     <motion.h2 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl"
                     >
                       {selectedProject.title}
                     </motion.h2>
                  </div>
                </div>

                <div className="p-8 md:p-16 lg:px-24 grid lg:grid-cols-12 gap-16">
                  {/* Content Column */}
                  <div className="lg:col-span-12 xl:col-span-8 space-y-20">
                    
                    {/* Description Section */}
                    <section className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-blue-600"></div>
                        <h4 className="text-sm font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400">The Overview</h4>
                      </div>
                      <p className="text-xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold leading-tight tracking-tight">
                        {selectedProject.description}
                      </p>
                    </section>

                    {/* Stats/Metrics (Simulated for design) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {[
                         { label: "Performance", value: "98%" },
                         { label: "Design Score", value: "A+" },
                         { label: "User Flow", value: "Optimized" },
                         { label: "Status", value: "Live" }
                       ].map((stat, i) => (
                         <div key={i} className="p-6 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{stat.label}</p>
                            <p className="text-xl font-black text-blue-600 mb-2">{stat.value}</p>
                         </div>
                       ))}
                    </div>

                    {/* Deep Dive Grid */}
                    <div className="grid md:grid-cols-2 gap-10">
                      <motion.div 
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-amber-500/5 p-10 rounded-[2.5rem] border border-amber-500/10 space-y-6"
                      >
                         <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
                            <FaExclamationTriangle size={24} />
                         </div>
                         <h4 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white">Technical Hurdles</h4>
                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-lg">"{selectedProject.challenges}"</p>
                      </motion.div>

                      <motion.div 
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-emerald-500/5 p-10 rounded-[2.5rem] border border-emerald-500/10 space-y-6"
                      >
                         <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                            <FaRocket size={24} />
                         </div>
                         <h4 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white">The Vision</h4>
                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-lg">"{selectedProject.futurePlans}"</p>
                      </motion.div>
                    </div>

                    {/* Desktop Preview */}
                    <div className="space-y-10">
                      <div className="flex flex-col items-center">
                        <div className="px-6 py-2 bg-blue-600/10 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-10">Browser Interface Preview</div>
                        <div className="w-full rounded-[3rem] overflow-hidden border-[12px] border-gray-100 dark:border-white/5 shadow-2xl relative">
                           {/* Browser Controls */}
                           <div className="absolute top-0 left-0 right-0 h-10 bg-gray-100 dark:bg-white/5 flex items-center px-6 gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-400"></div>
                              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                           </div>
                           <img 
                             src={selectedProject.fullImage} 
                             alt="Full Browser Preview" 
                             className="w-full mt-10 h-auto"
                           />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Links & Stack */}
                  <div className="lg:col-span-12 xl:col-span-4">
                    <div className="sticky top-12 space-y-8">
                       {/* Tech Stack Box */}
                       <div className="bg-gray-50 dark:bg-white/5 p-10 rounded-[3rem] border border-gray-100 dark:border-white/5">
                          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8 border-b border-gray-200 dark:border-white/10 pb-4">Built With</h4>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.techStack.map((tech, i) => (
                              <span key={i} className="px-5 py-2.5 bg-white dark:bg-black rounded-2xl text-xs font-black text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-white/10 shadow-sm transition-transform hover:scale-110">
                                {tech}
                              </span>
                            ))}
                          </div>
                       </div>

                       {/* Call to Action Box */}
                       <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-500/20 space-y-6">
                           <h4 className="text-sm font-black uppercase tracking-widest opacity-80">Ready to See it?</h4>
                           <p className="text-sm font-medium leading-relaxed opacity-90">Experience the live application or explore the architecture through the documentation.</p>
                           
                           <div className="space-y-4 pt-4">
                              <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-4 py-6 bg-white text-blue-600 rounded-3xl font-black uppercase tracking-widest text-xs hover:scale-[1.03] active:scale-95 transition-all shadow-xl">
                                <FaRocket /> Launch Project
                              </a>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <a href={selectedProject.clientCode} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 py-6 bg-white/10 backdrop-blur-md rounded-3xl font-black uppercase tracking-tighter text-[10px] hover:bg-white/20 transition-all border border-white/10 group">
                                  <FaLaptopCode size={24} className="group-hover:scale-110 transition-transform" />
                                  GitHub Repository (Client)
                                </a>
                                {selectedProject.serverCode ? (
                                  <a href={selectedProject.serverCode} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 py-6 bg-white/10 backdrop-blur-md rounded-3xl font-black uppercase tracking-tighter text-[10px] hover:bg-white/20 transition-all border border-white/10 group">
                                    <FaServer size={24} className="group-hover:scale-110 transition-transform" />
                                    Back End
                                  </a>
                                ) : (
                                  <div className="flex flex-col items-center justify-center gap-2 py-6 bg-white/5 rounded-3xl font-black uppercase tracking-tighter text-[10px] opacity-40">
                                    <FaServer size={24} />
                                    Closed Repo
                                  </div>
                                )}
                              </div>
                           </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Dismiss */}
                <div className="p-12 text-center bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5">
                   <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-3xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all active:scale-95"
                   >
                     Close Case Study
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
