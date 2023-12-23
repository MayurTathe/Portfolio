import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'

const MagnetEffect = ({ Name, classname, children }) => {

    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, top, left } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const mouseLeave = (e) => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <>
            <motion.button className={classname} onClick={onclick} onMouseMove={mouseMove} onMouseLeave={mouseLeave} ref={ref} animate={{ x, y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>{Name}{children}</motion.button>
        </>

    )
}

export default MagnetEffect;
