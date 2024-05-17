import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/jpfoto4.jpg";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="hero" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Janhvi Pandey
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-bold text-3xl tracking-tight lg:text-4xl" 
              
            > <p className="text-white font-thin ">I am a</p>
              <Typewriter
                words={['Frontend Developer', 'C++ Programmer']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-md mt-4 "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex justify-center">
            <motion.img
              className="rounded-full h-25 mt-10 lg:h-50 lg:w-50 hover:scale-110 transition-transform duration-300 ease-in-out"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} alt="Janhvi Pandey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;