import React, {useState} from 'react';
import './DetailsProject.css'
import {motion,AnimatePresence} from "framer-motion";
import {useNavigate} from 'react-router-dom'
import useStyleMotion from "../Hooks/useStyleMotion";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {Github, Wifi} from "react-bootstrap-icons";
import {Button} from "react-bootstrap";

const DetailsProject = ({data,name,des,tec,img,param}) => {

    const[show,setShow]=useState(true)
    const history=useNavigate()

    const {t}=useTranslation()


    return (
        <motion.div
            className='content-details'>
            <motion.img

                className='img'
                src={img[0]}/>
            <AnimatePresence>
                {show&&
                    <motion.div
                        className='content-details-info'>
                        <p className='global-para'>{name}</p>
                        <p className='global-des'>{des.split(' ').slice(0,10).join(' ') + ' ...'}</p>

                                    <div className='icons'>
                                        <a href={`${data.link[0]}`}><Github/></a>
                                        <a href={`${data.link[1]}`}><Wifi/></a>
                                    </div>
                        <button className='style-btn' onClick={()=>history(`/Project/${param}`)}>{t ('see_more')}</button>

                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    );
};

export default DetailsProject;