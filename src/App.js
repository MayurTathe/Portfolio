import './App.css';
import Hero from './components/Hero/Hero';
import MotoQuote from './components/MotoQuote/MotoQuote';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Cards from './components/Work/Cards';
import { projects } from './components/Work/ProjectData';
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe/AboutMe';

function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  return (
    <BrowserRouter>
    <div className='font-semibold text-2xl'>
      <section id='home' className='overflow-hidden'><Navbar /><Hero /></section>
      <Routes>
      <Route path='/aboute' element={<AboutMe/>} />
      </Routes>
      <section id='about' className='flex items-center overflow-hidden' style={{ height: "50vh", backgroundColor: "#F7FBFC" }}><MotoQuote /></section>

      <main id='work' style={{ marginTop: "", backgroundColor: "#A2B29F" }} ref={ref}>
        <div className="text-center font-semibold absolute w-full  mt-10 overflow-y-hidden">Projects</div>
        {
          projects.map((project, index) => {
            const targetScale = 1 - ((projects.length - index) * 0.05);
            return <Cards key={index} {...project} i={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
          })
        }
      </main>

      <section id='contact'><Contact /></section>

      

    </div>
    </BrowserRouter>

  );
}

export default App;
