import { useInView, motion, useAnimation } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const RevealScroll = ({ children, Yvalue }) => {

    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, isInView]);

    const variants = {
        hidden: { opacity: 0, y: Yvalue },
        visible: { opacity: 1, y: 0 },
    };

    return (

        <motion.div className="overflow-hidden" ref={ref} initial="hidden" animate={controls} variants={variants} transition={{ duration: 0.7, delay: 0.25, staggerChildren: 0.7 }}>
            {children}
        </motion.div>
    )
}

export default RevealScroll;
