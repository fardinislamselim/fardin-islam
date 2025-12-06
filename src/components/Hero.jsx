import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import profile from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <div 
      id="home"
      className="h-screen w-full bg-gradient-to-b from-white via-white to-gray-100 dark:from-black dark:via-black dark:to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-7jxl">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-7xl font-bold text-gray-900 dark:text-white">
                I'm a Junior MERN Stack Developer
              </h2>
              <p className="text-gray-500 py-4 max-w-md">
                I have a passion for building clean, user-friendly, and responsive websites.
                Currently tailored towards frontend development with React, but exploring full-stack technologies.
                Let's build something amazing together!
              </p>

              <div className='flex gap-4'>
                <a
                  href="#projects"
                  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer shadow-lg shadow-cyan-500/50 hover:scale-105 duration-200"
                >
                  View Projects
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                  </span>
                </a>
                 <a
                  href="#contact"
                  className="group text-gray-900 dark:text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-cyan-500 cursor-pointer hover:bg-cyan-500 hover:text-white duration-200"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-10 md:mt-0"
        >
          {/* Placeholder for Profile Image */}
          {/* You can replace src with your actual image path */}
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-2xl shadow-blue-500/20">
             {/* <span className='text-gray-500'>Profile Image</span> */}
             <img src={profile} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
