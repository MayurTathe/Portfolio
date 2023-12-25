import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Cards = ({ title, description, color, image, projectUrl, i, progress, targetScale, range }) => {

  const topPosition = `calc(-10vh + ${i * 20}px)`;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  useEffect(() => {
    console.log('topPosition', topPosition);
    console.log('scrollYProgress', scrollYProgress);

  }, [topPosition, scrollYProgress]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <>
      <div className={`cardContainer h-screen flex items-center justify-center sticky top-[0]`} ref={ref}>
        <motion.div
          style={{ scale: scale, backgroundColor: color, top: `calc(-5vh + ${i * 20}px)`, position: 'relative' }}
          className={`card w-full max-w-2xl rounded-lg overflow-hidden flex flex-col p-10 transform origin-top}`}

        >
          <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
          <div className="bodyy h-full lg:mt-8 md:mt-8 sm:mt-8 gap-8 lg:flex md:flex">
            <div className="description lg:w-2/5 md:w-2/5 relative md:top-10 lg:top-10">
              <p className="text-base">
                {description}
              </p>
              <span className="flex items-center gap-2">
                <a href={projectUrl} className="text-sm underline cursor-pointer">
                  Visit
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <div className="imageContainer lg:w-3/5 md:w-3/5 sm:w-3/5 mt-2 relative h-full rounded-lg overflow-hidden sm:mt-2 items-center content-center">
              <motion.div className="inner w-full h-full" style={{ scale: imageScale }}>
                <img
                  src={image}
                  alt=""
                  className="object-cover w-fit h-fit"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
