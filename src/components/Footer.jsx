import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <FaGithub />, link: "https://github.com/fardinislamselim", label: "GitHub" },
        { id: 2, icon: <FaLinkedinIn />, link: "https://linkedin.com/in/fardinislamselim", label: "LinkedIn" },
        { id: 3, icon: <FaFacebookF />, link: "https://facebook.com/mdfardinislamselim", label: "Facebook" },
        { id: 4, icon: <FaInstagram />, link: "https://instagram.com/mdfardinislamselim", label: "Instagram" },
    ];

    const navLinks = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "About", link: "#about" },
        { id: 3, name: "Skills", link: "#skills" },
        { id: 4, name: "Projects", link: "#projects" },
        { id: 5, name: "Contact", link: "#contact" },
    ];

    return (
        <footer className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-950 dark:to-gray-900 text-gray-600 dark:text-gray-400 py-16 px-6 border-t border-gray-200/70 dark:border-gray-800 transition-all duration-500">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                <div className="flex flex-col items-center mb-8 group cursor-default">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2 transition-transform duration-300 group-hover:scale-105">
                        Fardin<span className="text-blue-600 dark:text-blue-400"> Islam</span>
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">
                        Full Stack Web Developer
                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-6 mb-8">
                    {navLinks.map(({ id, name, link }) => (
                        <a 
                            key={id} 
                            href={link} 
                            className="text-[10px] font-black uppercase tracking-[0.25em] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </nav>

                <div className="flex gap-4 mb-10">
                    {socialLinks.map(({ id, icon, link, label }) => (
                        <a 
                            key={id} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={label}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-lg"
                        >
                            <span className="text-lg">{icon}</span>
                        </a>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8" />

                <div className="flex items-center justify-center w-full text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                    <p>© {new Date().getFullYear()} Designed & Developed by Fardin Islam</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
