import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return <div id="education" className="border-b border-neutral-900 pb-4 ml-20">
    <motion.h1 
    whileInView={{opacity:1,y:0}} 
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
    className="my-20 text-center text-4xl">
      Education
      {/* <span className="text-neutral-500">Me</span> */}
    </motion.h1>

    <div className="flex flex-wrap">
      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}}
      className="w-full lg:w-1/4 lg:p-8 ml-25 flex justify-center items-center">
        <div className="flex items-center justify-center">
          <img className="rounded-2xl" src="https://ik.imagekit.io/t6palwwyg/images.png?updatedAt=1715845718053" alt="about"></img>
        </div>
      </motion.div>

      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:100}}
      transition={{duration:0.5}}
      className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            {/* <p className="my-2 max-w-xl py-6 text-md">{ABOUT_TEXT}</p> */}
            <p>
              <h3 >ABES Engineering College , B.Tech</h3>
              <span className="text-sm text-gray-400">2021-2025</span>
              <h1 className="text-red-700">Computer Science Engineering Data Science</h1>
              <p className="text-sm text-gray-500">I am currently pursuing a Bachelor's degree in Computer Science and Engineering at ABESEC, Ghaziabad. <br></br>
              I have completed 5 semesters and have a CGPA of 7.79 .
              <br></br>
               I am also Technical lead of the DataVerse Chaper ABESEC, where I am learning and working on exciting projects with a team of talented developers.</p>
            </p>
            <br/>
          </div>
        </motion.div>
    </div>

    <div className="flex flex-wrap mt-10">
      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}}
      className="w-full lg:w-1/4 lg:p-8 ml-25 flex justify-center items-center">
        <div className="flex items-center justify-center">
          <img className="rounded-2xl" src="https://ik.imagekit.io/t6palwwyg/5a4ef9b9d7806da10afb1e9b3efdb22d.png?updatedAt=1715845718269" alt="about"></img>
        </div>
      </motion.div>

      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:100}}
      transition={{duration:0.5}}
      className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            {/* <p className="my-2 max-w-xl py-6 text-md">{ABOUT_TEXT}</p> */}
          
            <p>
              <h3 >ABES Engineering College , B.Tech</h3>
              <span className="text-sm text-gray-400">2021</span>
              <h1 className="text-red-700">12th</h1>
              <p className="text-sm text-gray-500">I have completed my 12th and 10th standard from KV.
              <br></br>
              Scored 90% in 12th
              </p>
            </p>
          </div>
        </motion.div>
    </div>

  </div>
}

export default About