import { motion } from 'framer-motion';
import { FaCode, FaDraftingCompass, FaFutbol, FaGamepad, FaGraduationCap, FaPalette } from 'react-icons/fa';

const About = () => {
    const infoCards = [
        {
            id: 1,
            icon: <FaCode className="text-blue-600 dark:text-blue-400" size={24} />,
            title: "Programming Journey",
            content: "My coding odyssey began with curiosity. From tweaking Tumblr themes to mastering the MERN stack, I've spent countless hours turning complex problems into elegant, functional code. Every bug fixed was a lesson learned."
        },
        {
            id: 2,
            icon: <FaDraftingCompass className="text-blue-600 dark:text-blue-400" size={20} />,
            title: "What I Love to Build",
            content: "I thrive on building seamless digital experiences. I enjoy working on the full stack—from designing intuitive front-ends in React to architecting robust back-ends with Node.js. Clean, maintainable code is my religion."
        },
        {
            id: 3,
            icon: <FaPalette className="text-blue-600 dark:text-blue-400" size={20} />,
            title: "Beyond the Screen",
            content: "When I'm not coding, you'll find me exploring my creative side through digital painting or staying active with football. I believe a healthy balance fuels innovation and keeps the mind sharp."
        }
    ];

    return (
        <div id='about' name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-black py-20">
            <div className="max-w-screen-xl p-6 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-12 text-center md:text-left">
                    <p className="text-4xl font-black inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100 uppercase tracking-widest">About Me</p>
                </div>

                <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-white leading-tight">
                                A Developer with a Passion for <span className="text-blue-600 dark:text-blue-400">Problem Solving</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-blue-600 dark:border-blue-400 pl-4 bg-blue-50/30 dark:bg-blue-900/10 py-2">
                                "Code is not just instructions for computers; it's a tool to solve human problems."
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Back in the day, I started by hacking together HTML/CSS for custom themes, which sparked a lifelong obsession with web technologies. Today, as a MERN Stack Developer, I bridge the gap between imagination and reality by building scalable web applications.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I identify as a lifelong learner. I enjoy the 'Aha!' moments that come with solving complex logic or refining a UI until it feels just right. My personality is a mix of technical precision and creative flair.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {infoCards.map(({ id, icon, title, content }) => (
                                <motion.div 
                                    key={id}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                            {icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 dark:text-white uppercase tracking-wider text-sm">{title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                                        {content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 grid lg:grid-cols-2 gap-10">
                        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-4 mb-8">
                                <FaGraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                                <h3 className="text-2xl font-black text-gray-800 dark:text-white uppercase tracking-wide underline decoration-blue-500/30">Education</h3>
                            </div>
                            
                            <div className="space-y-12">
                                {/* Diploma Education */}
                                <div className="relative pl-8 border-l-2 border-dashed border-blue-600/30 dark:border-blue-400/30 space-y-2">
                                    <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-1 shadow-lg shadow-blue-500/50"></div>
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">Diploma in Engineering</h4>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold italic">Computer Science and Technology</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit">2023 - Present</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                        Focusing on core computer science principles, data structures, algorithms, and modern web technologies. Actively participating in technical workshops and project-based learning.
                                    </p>
                                </div>

                                {/* SSC Education */}
                                <div className="relative pl-8 border-l-2 border-dashed border-gray-200 dark:border-gray-700 space-y-2">
                                    <div className="absolute w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full -left-[9px] top-1"></div>
                                    <h4 className="text-xl font-bold text-gray-800 dark:text-white font-black opacity-80 uppercase tracking-tighter">Secondary School Certificate (SSC)</h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-semibold italic">Science Group</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-xs font-bold bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit tracking-widest">Completed</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                                        Completed secondary education with a strong foundation in Mathematics and Science, which paved the way for a career in technology.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center lg:items-start gap-8">
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <span className="flex items-center gap-2 px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold border border-blue-100 dark:border-blue-800/50">
                                    <FaFutbol /> Football
                                </span>
                                <span className="flex items-center gap-2 px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold border border-blue-100 dark:border-blue-800/50">
                                    <FaPalette /> Painting
                                </span>
                                <span className="flex items-center gap-2 px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-bold border border-blue-100 dark:border-blue-800/50">
                                    <FaGamepad /> Gaming
                                </span>
                            </div>

                            <a 
                                href="../assets/resume-of-fardin-islam.pdf"
                                download={true}
                                target='_blank'
                                rel="noreferrer"
                                className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95"
                            >
                                <span className="relative z-10">Download My Resume</span>
                                <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-2xl opacity-10"></div>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;