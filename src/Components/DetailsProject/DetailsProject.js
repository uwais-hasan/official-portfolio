import React, {useState} from 'react';
import './DetailsProject.css'
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from 'react-router-dom'
import useStyleMotion from "../Hooks/useStyleMotion";
import {useTranslation} from "react-i18next";




const DetailsProject = ({name,des,tec,img,param}) => {

    const[show,setShow]=useState(false)
    const history=useNavigate()
    const style=useStyleMotion(show)
    const {t}=useTranslation()


    return (
        <motion.div
            variants={style.styleParent}
            animate='visible'
            onMouseEnter={()=>setShow(true)}
            onMouseLeave={()=>setShow(false)}
            onClick={()=>history(`/Project/${param}`)}
            className='content-details'>
            <motion.img
                variants={style.scaleImg}
                animate='visible'
                className='img'
                src={img[0]}/>
            <AnimatePresence>
                {show&&
                    <motion.div
                        variants={style.variants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        className='content-details-info'>
                        <p className='global-para'>{name}</p>
                        <p className='global-des'>{des.split(' ').slice(0,10).join(' ') + t ('see_more') +'...'}</p>
                        <div className='content-details-skills'>
                            {tec.slice(0,4).map((item2,index)=>{

                             return   <motion.p key={index} variants={style.hoverSkills}  whileHover='hover'>{item2}</motion.p>

                            })}</div>
                        <motion.button variants={style.animateShowMore}
                                       initial='hidden'
                                       animate='visible'
                                       whileHover='hover'
                                       className='style-btn'>
                            {t ('see_more')}
                        </motion.button>
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    );
};

export default DetailsProject;