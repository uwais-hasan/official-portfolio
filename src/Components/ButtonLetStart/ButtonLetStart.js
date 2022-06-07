import React, {useEffect, useTransition} from 'react';
import './ButtonLetStart.css'
import {motion, useAnimation} from "framer-motion";

import {NavLink} from 'react-router-dom'
import useStyleMotion from "../Hooks/useStyleMotion";
const ButtonLetStart = () => {

    const controls = useAnimation()
    const style=useStyleMotion()

    useEffect(() => {

     controls.start(i => ({
         opacity: .5,
         transition: { duration: i * .3,yoyo:Infinity },
     }))

    }, [controls])


    return (
        <motion.div
            variants={style.animateStart}
            initial='hidden' animate='visible'
            className='btn-start'>
          <NavLink  className='text-decoration-none white' to='/Project'>
              <motion.span
                  custom={2.1}
                  animate={controls}
              >
                  >
              </motion.span>
              <motion.span
                  custom={2.4}
                  animate={controls}>
                  >
              </motion.span>
              <motion.span
                  custom={2.7}
                  animate={controls}>
                  >
              </motion.span>
          </NavLink>
        </motion.div>
    );
};

export default ButtonLetStart;