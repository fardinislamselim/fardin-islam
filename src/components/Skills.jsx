import { motion } from 'framer-motion';

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

    const techs = [
        { id: 1, src: html, title: 'HTML', style: 'shadow-orange-500' },
        { id: 2, src: css, title: 'CSS', style: 'shadow-blue-500' },
        { id: 3, src: javascript, title: 'JavaScript', style: 'shadow-yellow-500' },
        { id: 4, src: reactImage, title: 'React', style: 'shadow-blue-600' },
        { id: 5, src: tailwind, title: 'Tailwind', style: 'shadow-sky-400' },
        { id: 6, src: nextjs, title: 'Next JS', style: 'shadow-white' },
        { id: 7, src: node, title: 'Node JS', style: 'shadow-green-400' },
        { id: 8, src: mongo, title: 'MongoDB', style: 'shadow-green-500' },
        { id: 9, src: github, title: 'GitHub', style: 'shadow-gray-400' },
    ];

    // Placeholder image component if assets are missing
    const SkillCard = ({ style, title, src }) => (
         <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-gray-100 dark:bg-gray-800`}
        >
            {/* Using a placeholder div instead of img for now to avoid broken images if assets don't exist */}
            <div className="w-20 h-20 mx-auto bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                 <img src={src} alt={title} className="w-20 mx-auto" /> 
                 {/* <span className="text-xs text-center p-2 text-gray-500 dark:text-gray-400">{title} Icon</span> */}
            </div>
            <p className="mt-4 font-bold text-gray-900 dark:text-gray-100">{title}</p>
        </motion.div>
    );


    return (
        <div id="skills" name="skills" className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-blue-600 dark:border-blue-400 p-2 inline text-gray-900 dark:text-gray-100">Skills</p>
                    <p className="py-6 text-gray-700 dark:text-gray-300">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                       <SkillCard key={id} src={src} title={title} style={style} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
