import React, { useRef } from 'react';

import MagnetEffect from '../AnimationEffect/MagnetEffect';
import RevealSideScroll from '../AnimationEffect/RevealSideScroll';
import RevealScroll from '../AnimationEffect/RevealScroll';
import { Link } from 'react-router-dom';

const MotoQuote = () => {

  const containerRef = useRef(null);

  return (
    <div className="text-center p-8 justify-between md:flex" ref={containerRef}>
      <div className='text-center md:w-1/2'>
        <RevealScroll Yvalue={30}>
          <p className='md:text-4xl font-semibold italic mt-5 p-10'>Perfection may be elusive, but with every step forward, we edge closer.</p>
        </RevealScroll>
      </div>
      <div className='md:w-1/2'>

        {/* <Link to="/about">
      <RevealSideScroll xValue={50}>
          <MagnetEffect classname={"text-lg mt-4 flex-row rounded-full bg-slate-600 w-44 h-44"}>  About Me </MagnetEffect>
        </RevealSideScroll>
      </Link> */}

       
          {/* <RevealSideScroll xValue={50}>
            <MagnetEffect classname={"text-lg mt-4 flex-row rounded-full bg-slate-600 w-44 h-44"}>   <Link to="/aboutMe">About Me</Link> </MagnetEffect>
          </RevealSideScroll> */}
        {/* <button className="text-lg mt-4 flex-row rounded-full bg-slate-600 w-44 h-44">   <Link to="/aboutMe">About Me</Link> </button> */}

<Link to={"/aboute"}><button>About Me</button></Link>
      </div>

    </div>
  )
}

export default MotoQuote;
