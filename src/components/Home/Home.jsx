import React, { useRef } from 'react'
import Hero from '../Hero/Hero'
import MotoQuote from '../MotoQuote/MotoQuote'
import Contact from '../Contact/Contact'
import { projects } from '../Work/ProjectData'
import Cards from '../Work/Cards'
import { useScroll } from 'framer-motion'
import Navbar from '../Navbar/Navbar'

const Home = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end end'],
    });

    return (
        <div>
            <Navbar/>
            <section className='h-screen' id='home'><Hero /></section>
            <section className='flex items-center overflow-hidden' style={{ height: "50vh", backgroundColor: "#F7FBFC" }} id='about'><MotoQuote /></section>
            <main id='work' style={{ marginTop: "", backgroundColor: "#A2B29F" }} ref={ref}>
                <div className="text-center font-titl font-semibold absolute w-full mt-10 overflow-y-hidden lg:text-4xl md:text-4xl">Projects</div>
                {
                    projects.map((project, index) => {
                        const targetScale = 1 - ((projects.length - index) * 0.05);
                        return <Cards key={index} {...project} i={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
                    })
                }
            </main>
            <section className='h-screen top-0' id='contact'><Contact /></section>
        </div>
    )
}

export default Home
