import { motion } from 'framer-motion';
import { SiExpress, SiGit, SiJsonwebtokens, SiPostman } from 'react-icons/si';

import css from '../assets/skills/css.png';
import github from '../assets/skills/github.png';
import html from '../assets/skills/html.png';
import javascript from '../assets/skills/javascript.png';
import mongo from '../assets/skills/mongo.png';
import nextjs from '../assets/skills/nextjs.png';
import node from '../assets/skills/node.png';
import reactImage from '../assets/skills/react.png';
import tailwind from '../assets/skills/tailwind.png';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: [
                { id: 1, src: html, title: 'HTML', color: 'from-orange-500/20' },
                { id: 2, src: css, title: 'CSS', color: 'from-blue-500/20' },
                { id: 3, src: javascript, title: 'JavaScript', color: 'from-yellow-500/20' },
                { id: 4, src: reactImage, title: 'React', color: 'from-blue-400/20' },
                { id: 5, src: tailwind, title: 'Tailwind', color: 'from-cyan-400/20' },
                { id: 6, src: nextjs, title: 'Next JS', color: 'from-gray-400/20' },
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { id: 7, src: node, title: 'Node JS', color: 'from-green-500/20' },
                { id: 10, isIcon: true, icon: <SiExpress size={40} className="text-[#000000] dark:text-white" />, title: 'Express JS', color: 'from-gray-500/20' },
                { id: 8, src: mongo, title: 'MongoDB', color: 'from-green-600/20' },
                { id: 11, isIcon: true, icon: <SiJsonwebtokens size={40} className="text-[#F355FF]" />, title: 'JWT', color: 'from-purple-500/20' },
            ]
        },
        {
            title: "Tools & Technologies",
            skills: [
                { id: 12, isIcon: true, icon: <SiGit size={40} className="text-[#F05032]" />, title: 'Git', color: 'from-orange-600/20' },
                { id: 9, src: github, title: 'GitHub', color: 'from-purple-500/20' },
                { id: 13, isIcon: true, icon: <SiPostman size={40} className="text-[#FF6C37]" />, title: 'Postman', color: 'from-orange-400/20' },
                { id: 14, isIcon: true, icon: <SiVisualstudiocode size={40} className="text-[#007ACC]" />, title: 'VS Code', color: 'from-blue-600/20' },
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div id="skills" name="skills" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800 py-20 px-6">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full text-white">
                <div className="pb-12 text-center md:text-left">
                    <p className="text-4xl font-black inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100 uppercase tracking-widest">Skills</p>
                    <p className="py-6 text-gray-600 dark:text-gray-400 text-lg">My technical toolkit categorized by area of expertise</p>
                </div>

                <div className="space-y-16">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-xl font-black text-gray-800 dark:text-gray-200 uppercase tracking-[0.2em] mb-8 flex items-center gap-4">
                                <span className="w-8 h-[2px] bg-blue-600 dark:bg-blue-400"></span>
                                {category.title}
                            </h3>
                            <motion.div 
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center"
                            >
                                {category.skills.map((skill) => (
                                    <motion.div 
                                        key={skill.id}
                                        variants={item}
                                        whileHover={{ scale: 1.05, translateY: -5 }}
                                        className="relative group p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-xl dark:shadow-black/20 border border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center min-h-[160px]"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                        
                                        <div className="relative z-10 flex flex-col items-center">
                                            {skill.isIcon ? (
                                                <div className="mb-4 transform group-hover:rotate-12 transition-transform duration-300">
                                                    {skill.icon}
                                                </div>
                                            ) : (
                                                <img src={skill.src} alt={skill.title} className="w-12 h-12 mx-auto mb-4 transform group-hover:rotate-12 transition-transform duration-300 object-contain" /> 
                                            )}
                                            <p className="font-black text-gray-800 dark:text-gray-200 uppercase tracking-tighter text-xs sm:text-sm">{skill.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
