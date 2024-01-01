// src/components/AboutMe.js

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealScroll from '../AnimationEffect/RevealScroll';
import { Link } from 'react-router-dom';

const AboutMe = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <nav className="p-4 h-24 items-center flex justify-center">
        <div className='flex justify-between items-center md:w-5/6'>
          <div className="text-left">
            <Link to='/' className="text-xl font-logo cursor-pointer italic hover:underline">Portfolio</Link>
            {/* <span className="text-xl font-logo cursor-pointer italic hover:underline">Portfolio</span> */}
          </div>
          <div className="">
            <ul className="md:flex space-x-4 text-sm font-normal hidden">
              <li className='cursor-pointer'><a href='#skills'>Skills</a></li>
              <li className='cursor-pointer'><a href='#edu'>Education</a></li>
              {/* <li className='cursor-pointer'>Skills</li>
              <li className='cursor-pointer'>Education</li> */}
              <li className='cursor-pointer'>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex p-4 w-full justify-center md:h-[80vh]"
      >
        <div className='w-11/12 lg:flex md:flex flex-1 overflow-hidden h-full'>
          <div className="w-full md:w-1/2 h-full">
            {/* Video Section (Left Side) */}
            <div className="aspect-w-16 aspect-h-9 w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/y08R20KflNM?rel=0"
                title="Introduction Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className='w-full h-fit md:h-full md:w-1/2 flex justify-center items-center' style={{ backgroundColor: "#f1f1f1" }}>
            <div className="w-full p-8 text-center leading-7">
              {/* Introduction Section (Right Side) */}
              <h1 className="md:text-5xl font-semibold font-titl mb-4">Introduction</h1>
              <p className="mb-4 text-sm font-para md:leading-7">
                Greetings! I'm Mayur Tathe, a Full Stack Developer.  I specialize in crafting sleek frontends with React and Angular, and robust backends using Node.js and Java.
              </p>
              <p className="mb-4 text-sm font-para md:leading-7">
                From responsive UIs to scalable server logic, I bring a holistic approach to development. Driven by a passion for turning ideas into reality through code.
              </p>
              <p className="text-sm font-para">
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='mt-2 md:mt-6 md:h-[80vh] h-[60vh] w-full justify-center items-center flex p-4' id='skills' style={{ backgroundColor: "#f1f1f1" }}>
        <div className='w-9/12'>
          <h1 className='md:text-5xl font-titl font-semibold mb-5'>Skills and Expertise</h1>
          <p className='font-para text-sm mb-4'>I possess a diverse range of skills and expertise that sets me apart from others in the industry.</p>
          <div className="flex w-full justify-between">
            <div className='font-para w-1/3'>
              <h1 className='md:text-2xl text-[17px]'>Frontend Skills</h1>
              <RevealScroll classname='font-para text-sm mt-3 pl-5' Yvalue={30}>
                <ul className='list-disc leading-5'>
                  <li>React Js</li>
                  <li>Angular</li>
                  <li>HTML</li>
                  <li>CSS & Tailwind CSS</li>
                  <li>Java Script</li>
                </ul>
              </RevealScroll>
            </div>

            <div className='font-para w-1/3'>
              <h1 className='md:text-2xl text-[17px]'>Backend Skills</h1>
              <RevealScroll classname='font-para text-sm mt-3 pl-5' Yvalue={30}>
                <ul className='list-disc leading-5'>
                  <li>Node Js</li>
                  <li>Type Script</li>
                  <li>Java</li>
                  <li>Spring Boot</li>
                </ul>
              </RevealScroll>
            </div>
            <div className='font-para w-1/3'>
              <h1 className='md:text-2xl text-[17px]'>Other Skills</h1>
               <RevealScroll classname='font-para text-sm mt-3 pl-5' Yvalue={30}>
                <ul className='list-disc leading-5'>
                  <li>Git</li>
                  <li>MySQL</li>
                  <li>Mongo DB</li>
                  <li>Farmer Motion</li>
                  <li>Creative Animations</li>
                </ul>
              </RevealScroll>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen" id='edu'>Hello</div>
    </>
  );
};

export default AboutMe;
