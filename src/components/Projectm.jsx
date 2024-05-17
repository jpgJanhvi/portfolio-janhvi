import React from "react";
import { motion } from "framer-motion";

const Projectm = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="mb-8 text-center">
            <motion.h2 
              whileInView={{opacity:1,y:0}} 
              initial={{opacity:0, y:-100}}
              transition={{duration:1.5}}
              className="my-20 text-center text-4xl">Projects</motion.h2>
          </div>
          <motion.div 
          whileInView={{opacity:1,x:0}} 
          initial={{opacity:0, x:-100}}
          transition={{duration:1.5}}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/WhatsApp%20Image%202024-05-16%20at%209.51.29%20AM%20(2).jpeg?updatedAt=1715833914768"
              CardTitle="Medical-Report-Analyzer"
              titleHref="/#"
              btnHref="https://github.com/jpgJanhvi/Medical-Report-Analyzer"
              CardDescription="Facilitating secure upload, in-depth analysis, and insightful reporting for healthcare professionals, ensuring informed decision-making and improved patient care"
              // CardTech="[HTML, CSS, React, Node.js, MongoDB]" 
              Button="View Details"
            />

            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/WhatsApp%20Image%202024-05-16%20at%209.51.29%20AM%20(1).jpeg?updatedAt=1715833894386"
              CardTitle="RightQuest"
              titleHref="/#"
              btnHref="https://664320a31f298aab4b5a9c87--clever-hotteok-5d9078.netlify.app/"
              CardDescription="It is a web application that educates children under 16 about the judiciary system of India through captivating games and quizzes, fostering an engaging learning experience."
              Button="View Details"
            />

            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/WhatsApp%20Image%202024-05-16%20at%209.51.29%20AM.jpeg?updatedAt=1715833876447"
              CardTitle="Job Portal"
              titleHref="/#"
              btnHref="https://github.com/jpgJanhvi/Job-Portal"
              CardDescription="Developed a dynamic job portal, offering robust features for job listing, candidate applications,streamlining the recruitment process for both employers and job seekers"
              Button="View Details"
            />
            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/Screenshot%202024-05-16%20101339.png?updatedAt=1715834654151"
              CardTitle="Real Estate"
              titleHref="/#"
              btnHref="https://github.com/jpgJanhvi/RealEstate"
              CardDescription="Developed a comprehensive real estate platform that streamlines property listings. Enhances user search functionality and communicates between buyers and sellers."
              Button="View Details"
            />


            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/1538479344162.jpeg?updatedAt=1715835386886"
              CardTitle="Twitter Sentiment Analysis"
              titleHref="/#"
              btnHref="https://github.com/jpgJanhvi/Twitter_Sentiments_Analysis"
              CardDescription="Developed a Twitter sentiment analysis tool to analyze and understand the sentiment of tweets in real-time"
              Button="View Details"
            />

            <SingleCard
              image="https://ik.imagekit.io/t6palwwyg/Screenshot%202024-05-16%20101339.png?updatedAt=1715834654151"
              CardTitle="Google Drive Clone"
              titleHref="/#"
              btnHref="https://github.com/jpgJanhvi/Google-Drive-Clone"
              CardDescription="Built a Google Drive clone, providing users with seamless cloud storage and file management functionalities reminiscent of Google's popular service."
              Button="View Details"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projectm;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  CardTech,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-transparent shadow-lg dark:bg-dark-2 dark:shadow-card transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 dark:hover:bg-dark-3">
      <img src={image} alt="" className="w-full" />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            // Remove href attribute to prevent navigation
            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardTech}
        </p>
        {Button && (
          <a
            href={btnHref ? btnHref : "#"}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security best practices for opening external links
            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};




