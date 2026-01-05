import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
        { id: 2, icon: <FaLinkedinIn />, link: "https://linkedin.com", label: "LinkedIn" },
        { id: 3, icon: <FaFacebookF />, link: "https://facebook.com", label: "Facebook" },
    ];

    return (
        <footer className="w-full bg-white dark:bg-black text-gray-600 dark:text-gray-400 py-12 px-6 border-t border-gray-100 dark:border-gray-900 transition-colors">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2">
                        Fardin<span className="text-blue-600 dark:text-blue-400"> Islam</span>
                    </h2>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
                        Crafting Digital Excellence
                    </p>
                </div>

                <div className="flex gap-4 mb-8">
                    {socialLinks.map(({ id, icon, link, label }) => (
                        <a 
                            key={id} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={label}
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gray-200/50 dark:shadow-black/50"
                        >
                            <span className="text-xl">{icon}</span>
                        </a>
                    ))}
                </div>

                <div className="h-[1px] w-24 bg-gray-200 dark:bg-gray-800 mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-xs font-black uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} All Rights Reserved</p>
                    <p>Made with <span className="text-red-500 animate-pulse">❤️</span> by Fardin</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
