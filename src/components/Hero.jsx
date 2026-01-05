import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import resume from '../assets/Md-Fardin-Islam-Selim.pdf';
import profile from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <div 
      id="home"
      className="min-h-screen w-full bg-gradient-to-b from-white via-white to-gray-100 dark:from-black dark:via-black dark:to-gray-800 flex flex-col justify-center pt-20"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between min-h-[80vh] px-6 md:flex-row gap-12 lg:gap-20">
        <div className="flex flex-col justify-center w-full md:w-3/5 order-2 md:order-1">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center md:text-left"
            >
              <h3 className="text-blue-600 dark:text-blue-400 font-mono font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
                Welcome to my portfolio
              </h3>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-6">
                I'm a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Junior MERN Stack Developer</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 py-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl leading-relaxed">
                I specialize in building clean, responsive, and performance-driven web applications. 
                Full-stack enthusiast currently focused on mastering the <span className="font-bold text-gray-800 dark:text-gray-200 underline decoration-blue-500/30">React universe</span> and exploring scalable backend solutions.
              </p>

              <div className='flex flex-wrap gap-5 mt-8 justify-center md:justify-start'>
                <a
                  href="#projects"
                  className="group relative px-8 py-4 flex items-center gap-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-bold shadow-xl shadow-blue-500/20 hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 transition-transform group-hover:-translate-x-1">View My Work</span>
                  <MdOutlineKeyboardArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </a>

                <a 
                    href={resume}
                    download="Md-Fardin-Islam-Selim-Resume.pdf"
                    target='_blank'
                    rel="noreferrer"
                    className="group relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold hover:scale-[1.02] transition-all shadow-xl active:scale-95 overflow-hidden">
                        <FaDownload className="group-hover:translate-y-1 transition-transform duration-300" />
                        <span>Resume</span>
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine" />
                    </div>
                </a>

                 <a
                  href="#contact"
                  className="px-8 py-4 flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative group">
            {/* Background Glows */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] p-[2px] opacity-100 shadow-2xl">
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-[2.5rem]"></div>
            </div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-[2.5rem] overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={profile} 
                alt="Fardin Islam - MERN Stack Developer" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              {/* Inner Shadow Overlay */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none"></div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
