import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: <FaGithub />, link: "https://github.com/fardinislamselim", label: "GitHub" },
        { id: 2, icon: <FaLinkedinIn />, link: "https://linkedin.com/in/fardinislamselim", label: "LinkedIn" },
        { id: 3, icon: <FaFacebookF />, link: "https://facebook.com/fardinislamselim", label: "Facebook" },
        { id: 4, icon: <FaInstagram />, link: "https://instagram.com/fardinislamselim", label: "Instagram" },
    ];

    const navLinks = [
        { id: 1, name: "Home", link: "#home" },
        { id: 2, name: "About", link: "#about" },
        { id: 3, name: "Skills", link: "#skills" },
        { id: 4, name: "Projects", link: "#projects" },
        { id: 5, name: "Contact", link: "#contact" },
    ];

    return (
        <footer className="w-full bg-white dark:bg-black text-gray-600 dark:text-gray-400 py-16 px-6 border-t border-gray-100 dark:border-gray-900 transition-all duration-500">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                {/* Brand Logo Section */}
                <div className="flex flex-col items-center mb-10 group cursor-default">
                    <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-2 transition-transform duration-300 group-hover:scale-105">
                        Fardin<span className="text-blue-600 dark:text-blue-400"> Islam</span>
                    </h2>
                    <div className="h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Quick Navigation */}
                <nav className="flex flex-wrap justify-center gap-8 mb-10">
                    {navLinks.map(({ id, name, link }) => (
                        <a 
                            key={id} 
                            href={link} 
                            className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {name}
                        </a>
                    ))}
                </nav>

                {/* Social Circle Links */}
                <div className="flex gap-5 mb-12">
                    {socialLinks.map(({ id, icon, link, label }) => (
                        <a 
                            key={id} 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={label}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-blue-500/20"
                        >
                            <span className="text-xl">{icon}</span>
                        </a>
                    ))}
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-10" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                    <p>© {new Date().getFullYear()} Designed & Developed by Fardin Islam</p>
                    <div className="flex items-center gap-2">
                        <span>Made with</span>
                        <span className="text-red-500 animate-pulse text-sm">❤️</span>
                        <span>in Bangladesh</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
