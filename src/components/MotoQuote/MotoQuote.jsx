import React, { useRef, useState } from 'react';

import MagnetEffect from '../AnimationEffect/MagnetEffect';
import { useScroll, useTransform } from 'framer-motion';
import RevealSideScroll from '../AnimationEffect/RevealSideScroll';
import RevealScroll from '../AnimationEffect/RevealScroll';

const MotoQuote = () => {

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  return (
    <div className="text-center p-8 justify-between md:flex" ref={containerRef}>
      <div className='text-center md:w-1/2'>
        <RevealScroll Yvalue={30}>
          <p className='md:text-4xl font-semibold italic mt-5 p-10'>Perfection may be elusive, but with every step forward, we edge closer.</p>
        </RevealScroll>
      </div>
      <div className='md:w-1/2'>
        <RevealSideScroll xValue={50}>
          <MagnetEffect Name={"About Me"} classname={"text-lg mt-4 flex-row rounded-full bg-slate-600 w-44 h-44"} />
        </RevealSideScroll>
      </div>

    </div>
  )
}

export default MotoQuote;
