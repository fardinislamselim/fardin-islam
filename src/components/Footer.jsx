import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 text-gray-500 py-8 px-4 border-t border-gray-300 dark:border-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className='mb-4 md:mb-0'>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Fardin Islam</h2>
                <p className="text-sm">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            
            <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors duration-300">
                    <FaGithub size={25} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <FaLinkedin size={25} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                    <FaFacebook size={25} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Footer;
