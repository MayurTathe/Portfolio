import { useInView, motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const RevealSideScroll = ({ classname, children, xValue }) => {

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
        hidden: { opacity: 0, x: xValue },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div className={classname} ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.7, delay: 0.25, staggerChildren: 0.2 }}>
            {children}
        </motion.div>
    )
}

export default RevealSideScroll;
