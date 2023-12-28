// src/components/AboutMe.js

import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <>
     <nav className="p-4 h-24 items-center flex justify-center">
      <div className='flex justify-between items-center md:w-5/6'>
      <div className="text-left">
        <span className="text-xl font-logo cursor-pointer italic hover:underline">Your Portfolio</span>
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
      className="flex p-4"
    >
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
      <div className="w-full md:w-1/2 p-4" style={{backgroundColor: "#f1f1f1"}}>
        {/* Introduction Section (Right Side) */}
        <h2 className="text-3xl font-bold mb-4">Your Name</h2>
        <p className="text-gray-600 mb-4">
          Web Developer passionate about creating interactive and dynamic web
          applications.
        </p>
        <p className="text-gray-600 mb-4">
          I specialize in front-end technologies such as React.js and love
          turning ideas into reality through code.
        </p>
        <p className="text-gray-600 mb-4">
          Let's build something amazing together!
        </p>
      </div>
    </motion.div>
    </>
  );
};

export default AboutMe;
