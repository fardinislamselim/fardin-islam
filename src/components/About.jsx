import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about' name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-gray-900 dark:text-gray-100">About</p>
                </div>

                <motion.div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }}
                >
                    <p className="text-xl mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
                        Hello! I'm Md Fardin Islam Selim, a passionate Junior MERN Stack Developer based in Bangladesh.
                        I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is pretty fun!
                    </p>

                    <br />

                    <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                         My main focus these days is building accesible, inclusive products and digital experiences for a variety of clients. 
                         I am constantly learning new technologies and improving my skills to become a better developer.
                         My goal is to secure a position as a junior web developer where I can contribute to real-world projects and grow my career.
                    </p>

                    <div className='mt-10'>
                        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>Education</h3>
                        <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500'>
                            <h4 className='text-xl font-bold text-gray-800 dark:text-white'>Diploma in Engineering</h4>
                            <p className='text-gray-600 dark:text-gray-400'>Computer Science and Technology</p>
                            <p className='text-gray-500 text-sm mt-2'>2023 - Present</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <a 
                            href="../assets/resume-of-fardin-islam.pdf"
                            download={true}
                            target='_blank'
                            rel="noreferrer"
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-md inline-block"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;