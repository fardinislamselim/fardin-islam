import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const contactInfo = [
        {
            id: 1,
            icon: <FaEnvelope className="text-blue-600 dark:text-blue-400" size={24} />,
            title: "Email Me",
            value: "fardinislamselim@gmail.com",
            link: "mailto:fardinislamselim@gmail.com"
        },
        {
            id: 2,
            icon: <FaPhone className="text-blue-600 dark:text-blue-400" size={24} />,
            title: "Call Me",
            value: "+880 1234 567890",
            link: "tel:+8801234567890"
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" size={24} />,
            title: "Location",
            value: "Dhaka, Bangladesh",
            link: "https://maps.app.goo.gl/..."
        }
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('success');
        setTimeout(() => setStatus(null), 3000);
        e.target.reset();
    };

    return (
      <div
        id="contact"
        className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800 py-20 px-6"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full">
          <div className="pb-12 text-center md:text-left">
            <p className="text-4xl font-black inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100 uppercase tracking-widest">
              Get In Touch
            </p>
            <p className="py-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
              I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Contact Info Cards */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:col-span-2 space-y-6"
            >
                {contactInfo.map(({ id, icon, title, value, link }) => (
                    <a 
                        key={id}
                        href={link}
                        target={id === 3 ? "_blank" : "_self"}
                        rel="noreferrer"
                        className="flex items-center gap-6 p-6 bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-all group"
                    >
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                           {icon}
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">{title}</h4>
                            <p className="font-bold text-gray-900 dark:text-gray-100 break-all">{value}</p>
                        </div>
                    </a>
                ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:col-span-3 bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100 dark:border-gray-800"
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Full Name</label>
                           <input
                             type="text"
                             name="user_name"
                             placeholder="John Doe"
                             required
                             className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 transition-all font-bold"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Email Address</label>
                           <input
                             type="email"
                             name="user_email"
                             placeholder="john@example.com"
                             required
                             className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 transition-all font-bold"
                           />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-4">Your Message</label>
                        <textarea
                          name="message"
                          placeholder="How can I help you?"
                          rows="6"
                          required
                          className="w-full p-4 bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent rounded-2xl text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 transition-all font-bold resize-none"
                        ></textarea>
                    </div>

                    <button className="w-full group relative py-5 bg-blue-600 dark:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-3 overflow-hidden">
                        <span className="relative z-10">Send Message</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>

                    {status === "success" && (
                        <motion.div 
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/50 rounded-2xl text-green-600 dark:text-green-400 text-center font-bold"
                        >
                            Message Delivered Successfully!
                        </motion.div>
                    )}
                </form>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default Contact;
