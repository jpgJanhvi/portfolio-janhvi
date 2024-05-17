// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const ContactForm = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.5 }}
//       id='Contact' className="max-w-md mx-auto"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.5 }}
//         className="text-center mb-8"
//       >
//         <motion.h2 
//         whileInView={{opacity:1,y:0}} 
//         initial={{opacity:0, y:-100}}
//         transition={{duration:0.5}}
//         className="my-20 text-center text-4xl">Get In Touch</motion.h2>
//         <motion.p 
//         whileInView={{opacity:1,y:0}} 
//         initial={{opacity:0, y:-50}}
//         transition={{duration:0.5}}
//         className="text-gray-300 ">Feel free to reach out to me for any questions or opportunities!</motion.p>
//       </motion.div>
//       <form action="https://formspree.io/f/xyyrvord" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div className="mb-4">
//           <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
//             <span className="text-black">Name</span>
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             placeholder="Your name"
//             name="name"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
//             <span className="text-black">Email</span>
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             placeholder="Your email"
//             name="email"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
//             <span className="text-black">Message</span>
//           </label>

//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
//             id="message"
//             placeholder="Your message"
//             name="message"
//             required
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-cyan-900  to-black hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Send
//           </motion.button>
//         </div>
//       </form>


//       <div className="flex items-center justify-center mt-14 mb-20">
//       <a href="https://github.com/jpgJanhvi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
//         <FaGithub className="w-6 h-6 mx-2" />
//       </a>
//       <a href="https://www.linkedin.com/in/janhvi-pandey-58b046226/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
//         <FaLinkedin className="w-6 h-6 mx-2" />
//       </a>
//       <a href="https://twitter.com/JPG_JANHVI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
//         <FaTwitter className="w-6 h-6 mx-2" />
//       </a>
//     </div>
//     <div className="mt-4"></div> 

//     </motion.div>

//   );
// };

// export default ContactForm;

import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  useEffect(() => {
    // Scroll to the Contact section when the component mounts
    scroll.scrollTo('Contact');
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      id='contact' className="max-w-md mx-auto"
    >
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-8"
      >
        <motion.h2 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Get In Touch</motion.h2>
        <motion.p 
        whileInView={{opacity:1,y:0}} 
        initial={{opacity:0, y:-50}}
        transition={{duration:0.5}}
        className="text-gray-300 ">Feel free to reach out to me for any questions or opportunities!</motion.p>
      </motion.div>
      <form action="https://formspree.io/f/xyyrvord" method="POST" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
            <span className="text-black">Name</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            <span className="text-black">Email</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">
            <span className="text-black">Message</span>
          </label>

          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            name="message"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-900  to-black hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </motion.button>
        </div>
      </form>


      <div className="flex items-center justify-center mt-14 mb-20">
      <a href="https://github.com/jpgJanhvi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
        <FaGithub className="w-6 h-6 mx-2" />
      </a>
      <a href="https://www.linkedin.com/in/janhvi-pandey-58b046226/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
        <FaLinkedin className="w-6 h-6 mx-2" />
      </a>
      <a href="https://twitter.com/JPG_JANHVI" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
        <FaTwitter className="w-6 h-6 mx-2" />
      </a>
    </div>
    <div className="mt-4"></div> 
      {/* Your Contact form content */}
    </motion.div>
  );
};

export default ContactForm;

