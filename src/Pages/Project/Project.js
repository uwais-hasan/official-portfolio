import React, {useState,useEffect} from 'react';

import './Project.css';
import {motion} from "framer-motion";
import DetailsProject from "../../Components/DetailsProject/DetailsProject";
import useStyleMotion from "../../Components/Hooks/useStyleMotion";

import {useTranslation} from "react-i18next";
import ar from '../../Local/ar.json'
import en from '../../Local/en.json'
const Project = () => {

    const [toggleApiLang,setToggleApiLang]=useState(en)
    const style=useStyleMotion()

    const {t,i18n}=useTranslation()


    useEffect(()=>{
        if (i18n.language==='en'){
            setToggleApiLang(en)
        }else {
            setToggleApiLang(ar)
        }
    },[i18n.language])


    return (
        <motion.div
            variants={style.exitRouterProfile}
            initial='hidden'
            animate='visible'
            exit='exit'

            className='section-project'>
            {Object.values(toggleApiLang.data).map(item => {
                return (
                    <DetailsProject
                        param={item.param}
                        key={item.name}
                        name={item.name}
                        des={item.des}
                        tec={item.tec}
                        img={item.img}
                    />
                )
            })}
        </motion.div>
    );
};

export default Project;