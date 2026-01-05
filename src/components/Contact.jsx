import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser'; // Import EmailJS if you have your Service ID, Template ID, and Public Key

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Example EmailJS Implementation
        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
              setStatus('success');
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              setStatus('error');
          });
        */
       
       // Dummy response
       setStatus('success');
       setTimeout(() => setStatus(null), 3000);
       e.target.reset();
    };

    return (
      <div
        id="contact"
        className="w-full min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600 dark:border-blue-400 text-gray-900 dark:text-gray-100">
              Contact
            </p>
            <p className="py-6 text-gray-700 dark:text-gray-300">
              Submit the form below to get in touch with me
            </p>
          </div>

          <div className="flex justify-center items-center">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="p-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="my-4 p-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-cyan-500 transition-colors"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className="p-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-cyan-500 transition-colors"
              ></textarea>

              <button className="text-white bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-md shadow-blue-500/30 dark:shadow-cyan-500/50 font-bold">
                Let's Talk
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center font-bold">
                  Message Sent Successfully! (Simulation)
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-bold">
                  Something went wrong!
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
