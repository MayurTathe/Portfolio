import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RevealScroll from '../AnimationEffect/RevealScroll';
import RevealSideScroll from '../AnimationEffect/RevealSideScroll';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ArrowUpward } from '@mui/icons-material';

const AboutMe = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);};

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
          </div>
          <div className="">
            <ul className="md:flex space-x-4 text-sm font-normal hidden">
              <li className='cursor-pointer'><a href='#skills'>Skills</a></li>
              <li className='cursor-pointer'><a href='#edu'>Education</a></li>
              <li className='cursor-pointer'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
 {/* <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-lg font-semibold">Your Logo</div>
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleNavbar}
        >
          Hamburger Icon
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      Mobile Menu
      {isOpen && (
        <div className="mt-4">
          <a href="#" className="block text-white py-2">Home</a>
          <a href="#" className="block text-white py-2">About</a>
          <a href="#" className="block text-white py-2">Services</a>
          <a href="#" className="block text-white py-2">Contact</a>
        </div>
      )}
    </nav> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="flex p-4 w-full justify-center md:h-[80vh]"
      >
        <div className='w-11/12 lg:flex md:flex flex-1 overflow-hidden h-full'>
          {/* <div className="w-full md:w-1/2 h-full">
            {/* Video Section (Left Side) 
            <div className="aspect-w-16 aspect-h-9 w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/y08R20KflNM?rel=0"
                title="Introduction Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div> */}
          {/* <div className='w-full h-fit md:h-full md:w-1/2 flex justify-center items-center' style={{ backgroundColor: "#f1f1f1" }}> */}
          <div className='w-full h-fit md:h-full md:w-full flex justify-center items-center' style={{ backgroundColor: "#f1f1f1" }}>
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
                  <li>Core Java</li>
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
                  <li>Continuous Learning</li>
                </ul>
              </RevealScroll>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2 md:mt-6 md:h-[90vh] h-[fit] w-full justify-center items-center flex p-4' id='edu'>
        <div className='w-9/12'>
          <h1 className='md:text-5xl font-titl font-semibold mb-5'>Education</h1>
          <p className='font-para text-sm mb-4'>I am a lifelong learner and have obtained a solid educational background to support my expertise.</p>
          <div className='font-para w-[90%] mb-4 p-5 flex-col justify-between shadow-lg' style={{ backgroundColor: "#f1f1f1" }}>
            <div className='w-[full]'>
              <h1 className='md:text-2xl text-[17px] font-para'>Advance Diploma in Full Stack Development</h1>
              <p className='font-para text-sm mt-3'>Nov 2022 - Aug 2023</p>
              <p className='font-para text-sm mt-2'>
                A deep dive into the world of coding alchemy. I completed this professional course at the SEED Infotech Institute — a comprehensive exploration into crafting digital experiences, seamlessly blending frontend finesse with backend robustness. This course has helped me stand strong in the ever-changing world of technology.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-full w-[90%] justify-between">
            <div className='md:w-1/2 mb-4'>
              <RevealSideScroll classname='font-para md:w-[80%] w-full rounded justify-center flex-col p-5 shadow-lg bg-[#f1f1f1]' xValue={-50}>
                <h1 className='md:text-2xl text-[17px] font-para'>Bachelor's Degree</h1>
                <p className='font-para text-sm mt-3'>Aug 2019 - Aug 2022 ||  First Class Distinction</p>
                <p className='font-para text-sm mt-2'>
                  I graduated with a degree in Mechanical Engineering from the prestigious Savitribai Phule Pune University (SPPU). My academic journey was a blend of mastering the mechanics of machines and cultivating a mindset of continuous problem-solving, along with adapting to new technologies.
                </p>
              </RevealSideScroll>
            </div>
            <div className='md:w-1/2 mb-4'>
              <RevealSideScroll classname='font-para md:w-[80%] w-full rounded justify-center flex-col p-5 shadow-lg bg-[#f1f1f1]' xValue={50}>
                <h1 className='md:text-2xl text-[17px] font-para'>Diploma</h1>
                <p className='font-para text-sm mt-3'>Jul 2016 - Jun 2019 ||  First Class</p>
                <p className='font-para text-sm mt-2'>
                  I have completed my Diploma in Mechanical Engineering, which involved a hands-on immersion in the fundamentals of mechanics and design. This program honed my practical skills, providing a solid foundation for real-world problem-solving.
                </p>
              </RevealSideScroll>
            </div>
          </div>
        </div>
        <div className='justify-end items-end flex flex-col h-full w-fit'><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUpward /></button></div>
      </div>
      <footer className="p-4 text-center mt-4" id='contact'>
        <p className="text-sm font-para mt-2">mayurtathe02@gmail.com | (+91) 7768852561 </p>
        <div className="mt-2 mb-2">
          <a href="https://github.com/MayurTathe" target="_blank" rel="noopener noreferrer" className="mr-4" title='GitHub'>
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/mayur-tathe-221592276" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
            <LinkedInIcon />
          </a>
        </div>
        <p className="text-sm font-para mb-2 mt-5">&copy; 2024 Mayur Tathe. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutMe;
