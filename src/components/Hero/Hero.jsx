import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MagnetEffect from '../AnimationEffect/MagnetEffect';

const Hero = () => {

    const [scrollY, setScrollY] = useState(0);

    const parallaxOffset = scrollY * -0.1;

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const textVariants = {
        initial: {
            x: -300,
            opacity: 0,

        },
        animate: {
            x: 0,
            opacity: 1,
        },
        trasition: {
            duration: 2, staggerChildern: 0.7,
        },
    };

    const skillsVariants = {
        initial: {
            x: "110%",
        },
        animate: {
            x: "-110%",
        },

    };


    return (
        <>
            <div className="relative top-0 flex flex-col md:flex-row items-center h-screen overflow-hidden">
                <img
                    src="../BGImage.jpg"
                    alt="Background"
                    style={{ transform: `translateY(${parallaxOffset}px)`, position: "fixed" }}
                    className="absolute top-0 left-0 w-full -z-10 object-cover opacity-60 h-full"
                />
                <div className="container mx-auto text-white relative mt-20">
                    <div className="absolute flex flex-col md:flex-row md:justify-evenly items-center h-full w-full">

                        {/* Left side - Text */}
                        <motion.div className="relative w-full text-center lg:text-left md:text-left p-2" initial={textVariants.initial} animate={textVariants.animate} transition={textVariants.trasition}>
                            <h1 className="md:text-5xl lg:text-5xl font-semibold mt-12 p-2 font-titl">Mayur Tathe</h1>
                            <p className="text-sm md:text-lg lg:text-lg mt-4 p-2 bg-transparent/30 rounded font-para">
                                Skilled in Full Stack Development with expertise in React, Angular, and Spring Boot. A fast learner, adept at adapting to new technologies quickly. Eager to contribute creativity and technical proficiency to dynamic and innovative projects in the IT sector.
                            </p>
                            <MagnetEffect classname={"relative bg-white text-gray-800 py-2 px-4 rounded-full text-sm mt-6 mx-3 hover:bg-transparent/10 hover:text-white font-para"}>
                                <a href="#about">Belief</a>
                            </MagnetEffect>

                            <MagnetEffect classname={"relative bg-white text-gray-800 py-2 px-4 rounded-full text-sm mt-6 hover:bg-transparent/5 hover:text-white font-para"}>
                                <a href="../MayurTathe_Resume.pdf" target='_blank'>Resume</a>
                            </MagnetEffect>

                        </motion.div>

                        {/* Right side - Image */}
                        <div className="relative md:w-fit content-center justify-center">
                            <img
                                src="../ProfilePic.png"
                                alt="Your Profile"
                                className=""
                            />
                        </div>
                    </div>
                    <motion.div className="opacity-40 font-para xl:text-6xl md:text-4xl h-9 w-full hidden md:flex relative text-black top-56" variants={skillsVariants} initial="initial" animate="animate" transition={{ duration: 10, repeat: Infinity }}>React-JS Angular SpringBoot Tailwind-CSS</motion.div>
                </div>
            </div>
        </>
    );
};

export default Hero;
