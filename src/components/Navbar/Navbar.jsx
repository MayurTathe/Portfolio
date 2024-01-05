import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealSideScroll from '../AnimationEffect/RevealSideScroll';

const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    const linkclass = ["text-sm font-thin hover:bg-transparent/[.4] px-2 py-1 rounded-t"];

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <>
            <nav
                className={`fixed w-full sm:hidden md:block top-0 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                    } z-10 bg-transparent/[0.2] p-4 text-white`}
            >
                <div className="flex-row ">
                    <div className="flex justify-between items-center">
                        <motion.span className="text-xl font-log cursor-pointer italic hover:underline" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                            <Link to="/">
                                @Code by Mayur
                            </Link>
                        </motion.span>
                        <div className="hidden md:flex space-x-5">
                            <a href="#home" className={`${linkclass}`}>Home</a>
                            <a href="#about" className={`${linkclass}`}>About</a>
                            <a href="#work" className={`${linkclass}`}>Work</a>
                            <a href="#contact" className={`${linkclass}`}>Contact</a>
                        </div>

                    </div>
                </div>
            </nav>

            <nav className={`fixed w-full top-0 transition-transform md:hidden duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                } z-30 bg-transparent/[0.2] p-4 text-white`}>
                {/* Hamburger menu for small screens */}
                <div className='flex flex-row items-center justify-between'>
                    <Link to="/" className='font-titl font-semibold text-xl italic'>
                        @Code by Mayur
                    </Link>
                    <button className="text-white focus:outline-none" onClick={toggle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                {
                    isOpen && (
                        <RevealSideScroll xValue={100} classname="mt-4 right-0 z-20 h-screen w-[40%] flex flex-col justify-center bg-transparent/60 backdrop-blur-sm items-center fixed">
                            <a href="#home" className=" text-white py-2 font-para text-sm" onClick={toggle}>Home</a>
                            <a href="#about" className=" text-white py-2 font-para text-sm" onClick={toggle}>About</a>
                            <a href="#work" className=" text-white py-2 font-para text-sm" onClick={toggle}>Work</a>
                            <a href="#contact" className=" text-white py-2 font-para text-sm" onClick={toggle}>Contact</a>
                        </RevealSideScroll>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar;

