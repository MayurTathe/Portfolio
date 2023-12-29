// src/components/AboutMe.js

import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <>
     <nav className="p-4 h-24 items-center flex justify-center">
      <div className='flex justify-between items-center md:w-5/6'>
      <div className="text-left">
        <span className="text-xl font-logo cursor-pointer italic hover:underline">Portfolio</span>
      </div>
      <div className="">
        <ul className="flex space-x-4 text-sm font-normal  cursor-pointer">
          <li>Home</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
    </nav>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex p-4 w-full justify-center" style={{height:"80vh"}}
    >
      <div className='w-11/12 flex'>
      <div className="w-full md:w-1/2">
        {/* Video Section (Left Side) */}
        <div className="aspect-w-16 aspect-h-9 w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/your-video-id"
            title="Introduction Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className='w-full h-full md:w-1/2 flex justify-center items-center' style={{backgroundColor: "#f1f1f1"}}>
      <div className="w-full p-8 text-center leading-7">
        {/* Introduction Section (Right Side) */}
        <h2 className="text-5xl font-semibold font-titl mb-4">Introduction</h2>
        <p className="text-gray-600 mb-4 text-sm font-para leading-7">
          Greetings! I'm Mayur Tathe, a Full Stack Developer.  I specialize in crafting sleek frontends with React and Angular, and robust backends using Node.js and Java.
        </p>
        <p className="text-gray-600 mb-4 text-sm font-para leading-7">
          From responsive UIs to scalable server logic, I bring a holistic approach to development. Driven by a passion for turning ideas into reality through code.
        </p>
        <p className="text-gray-600 mb-4 text-sm font-para">
          Let's build something amazing together!
        </p>
        </div>
      </div>
      </div>
    </motion.div>
    </>
  );
};

export default AboutMe;
