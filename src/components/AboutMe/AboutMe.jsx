import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4"
    >
      <div className="flex items-center justify-center mt-10">
        <img
          src="../ProfilePic.jpg"
          alt="Your Name"
          className="rounded-full h-32 w-32 object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-3xl font-bold">Mayur Tathe</h2>
        <p className="text-gray-600">Web Developer</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Introduction</h3>
        <p>
          Hello, I'm a passionate Full Stack Developer. Proficient in React JS, Angular, and Spring Boot, I've crafted projects like a dynamic YouTube Clone and a visually stunning portfolio. My knack for quick learning and adaptability makes me an asset to any tech team. Eager to bring my passion for coding and problem-solving to your organization. Let's build something great together.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Education</h3>
        <p>Bachelor's in Computer Science, Your University, Graduation Year</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          {/* Add more skills */}
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutMe;
