import React, {Fragment, useEffect, useTransition} from 'react';
import {Envelope, Facebook, Github, Linkedin} from "react-bootstrap-icons";
import './AboutMe.css'
import {motion} from "framer-motion";
import useStyleMotion from "../Hooks/useStyleMotion";
import {useTranslation} from "react-i18next";

const AboutMe = () => {

const style=useStyleMotion()
    const {t}=useTranslation()
    return (
        <Fragment>
            <div className='img col-md-6  '>
                <img className='w-50 ' src='../Img/owies.jpg ' />
            </div>
            <motion.div

                 className='info col-md-6 '>
                <h2 className='global-title'>{t('name')}</h2>
                <p className='global-title'>{t('about_me')}</p>
                <motion.div

                    className='icons'>
                    <motion.a href='https://www.linkedin.com/in/owies-hassan-803024231' variants={style.animationSvg} whileHover='hover'> <Linkedin/></motion.a>
                    <motion.a href='https://www.facebook.com/profile.php?id=100010097286350' variants={style.animationSvg} whileHover='hover'><Facebook/></motion.a>
                    <motion.a href='https://github.com/owies-hassan' variants={style.animationSvg} whileHover='hover'> <Github/></motion.a>
                    <motion.a href='https://mailto:owies.h.hassan@gmail.com' variants={style.animationSvg} whileHover='hover'><Envelope/></motion.a>
                </motion.div>
            </motion.div>
        </Fragment>
    );
};

export default AboutMe;