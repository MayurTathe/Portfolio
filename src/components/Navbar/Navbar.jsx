import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const linkclass = ["text-lg font-thin hover:bg-transparent/[.4] px-2 py-1 rounded-t"];

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
        <nav
            className={`fixed w-full top-0 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                } z-10 bg-transparent/[0.2] p-4 text-white`}
        >
            <div className="flex-row ">
                <div className="flex justify-between items-center">
                    <motion.span className="text-lg font-semibold cursor-pointer italic hover:underline" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} >@Code by Mayur</motion.span>
                    <div className="hidden md:flex space-x-5">
                        <a href="#home" className={`${linkclass}`}>Home</a>
                        <a href="#about" className={`${linkclass}`}>About</a>
                        <a href="#work" className={`${linkclass}`}>Work</a>
                        <a href="#contact" className={`${linkclass}`}>Contact</a>
                    </div>
                    <div className="md:hidden">
                        {/* Hamburger menu for small screens */}
                        <button className="text-white focus:outline-none">
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
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

